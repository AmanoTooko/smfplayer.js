import PSGConverter from './PSGConverter';
import { MetaEvent, ChannelEvent, SystemExclusiveEvent } from './midi_event';
import MakiMabiSequence from './mms';
/**
 * @classdesc   Three Macro Language Editor (3MLE) mml file Parser
 *
 * @author      Logue <logue@hotmail.co.jp>
 * @copyright   2019 Masashi Yoshikawa <https://logue.dev/> All rights reserved.
 * @license     MIT
 */
export default class ThreeMacroLanguageEditor extends MakiMabiSequence {
  /**
   * @param {ByteArray} input
   * @param {Object=} optParams
   */
  constructor(input, optParams = {}) {
    super(input, optParams);
  }
  /**
   */
  parse() {
    this.parseHeader();
    this.parseTracks();
    this.toPlainTrack();
  };
  /**
   */
  parseHeader() {
    const header = this.input.Settings;
    /** @type {TextEncoder} */
    this.encoder = new TextEncoder(header.Encoding || 'shift_jis');
    /** @param {string} */
    this.title = header.Title;
    /** @param {string} */
    this.author = header.Source;
    /** @param {number} */
    this.timeDivision = header.TimeBase | 0 || 32;

    // 曲名と著者情報を付加
    /** @type {array}  */
    const headerTrack = [];
    // GM Reset
    headerTrack.push(new SystemExclusiveEvent('SystemExclusive', 0, 0, [0x7e, 0x7f, 0x09, 0x01]));
    headerTrack.push(new MetaEvent('SequenceTrackName', 0, 0, [this.title]));
    headerTrack.push(new MetaEvent('CopyrightNotice', 0, 0, [this.author]));
    headerTrack.push(new MetaEvent('TextEvent', 0, 0, [header.Memo]));
    headerTrack.push(new MetaEvent('TimeSignature', 0, 0, [header.TimeSignatureNN | 0 || 4, header.TimeSignatureDD | 0 || 4, 0, 0]));
    headerTrack.push(new MetaEvent('EndOfTrack', 0, 0));
    this.tracks.push(headerTrack);

    // 3MLE EXTENSION、Settingsを取り除く
    delete this.input['3MLE EXTENSION'];
    delete this.input.Settings;
  };

  /**
   * MML parse
   */
  parseTracks() {
    const input = this.input;
    /** @type {array} 終了時間比較用 */
    const endTimes = [];

    /** @type {array} 各ブロックのMML */
    const mmls = [];
    /** @type {array} 各ブロックの演奏情報 */
    const settings = [];

    for (const block in input) {
      if (input.hasOwnProperty(block)) {
        if (block.match(/^Channel(\d+)$/i)) {
          // MMLは[Channel[n]]ブロックのキー

          // ひどいファイル形式だ・・・。
          mmls[(RegExp.$1 | 0) - 1] = Object.keys(input[block]).join('').replace(/\/\*([^*]|\*[^\/])*\*\//g, '');
        }

        if (block.match(/^ChannelProperty(\d+)$/i)) {
          // 各パートの楽器情報などは[ChannelProperty[n]]に格納されている
          settings[(RegExp.$1 | 0) - 1] = {
            name: input[block].Name,
            instrument: input[block].Patch | 0,
            panpot: input[block].Pan | 0,
          };
        }
      }
    }

    /** @type {array} 整形済みデータ */
    const data = [];

    // データを整形
    for (const no in mmls) {
      if (mmls.hasOwnProperty(no)) {
        if (settings[no] !== void 0) {
          data[no] = {
            mml: mmls[no],
            name: settings[no].name || '',
            instrument: settings[no].instrument || 0,
            panpot: settings[no].panpot || 64,
          };
        } else {
          data[no] = {
            mml: mmls[no],
            name: '',
            instrument: 0,
            panpot: 64,
          };
        }
      }
    }

    // console.log(data);

    for (const part in data) {
      if (data.hasOwnProperty(part)) {
        /** @type {number} */
        const ch = part | 0;
        /** @type {array} MIDIイベント */
        let track = [];
        if (data[part].mml === '') {
          // 空っぽのMMLトラックの場合処理しない
          continue;
        }

        // 楽器名
        track.push(new MetaEvent('InsturumentName', 0, 48, [data[part].name]));
        // プログラムチェンジ
        track.push(new ChannelEvent('ProgramChange', 0, 96, ch, data[part].instrument));
        // パン
        track.push(new ChannelEvent('ControlChange', 0, 154, ch, 10, data[part].panpot));

        /** @param {PSGConverter} */
        const mml2Midi = new PSGConverter({ timeDivision: this.timeDivision, channel: ch, timeOffset: 386, mml: data[part].mml });
        // トラックにマージ
        track = track.concat(mml2Midi.events);
        // 演奏時間を更新
        endTimes.push(mml2Midi.endTime);

        // トラック終了
        track.concat(new MetaEvent('EndOfTrack', 0, Math.max(endTimes)));
        this.tracks.push(track);
      }
    }
    this.numberOfTracks = this.tracks.length;
  }
}
