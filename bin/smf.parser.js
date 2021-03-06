/*! @logue/smfplayer v0.3.4 | imaya / GREE Inc. / Logue | license: MIT | build: 2019-12-27T08:47:34.579Z */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SMF", [], factory);
	else if(typeof exports === 'object')
		exports["SMF"] = factory();
	else
		root["SMF"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/smf.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/meta.js":
/*!*********************!*\
  !*** ./src/meta.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This file is auto-generated by the build system.
const Meta = {
  version: '0.3.4',
  date: '2019-12-27T08:47:34.579Z'
};
/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./src/midi_event.js":
/*!***************************!*\
  !*** ./src/midi_event.js ***!
  \***************************/
/*! exports provided: ChannelEvent, SystemExclusiveEvent, MetaEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelEvent", function() { return ChannelEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemExclusiveEvent", function() { return SystemExclusiveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaEvent", function() { return MetaEvent; });
/**
 * Midi Event abstract Structure
 */
class Event {
  /**
   * @param {string} subtype event subtype name.
   * @param {number} deltaTime delta time.
   * @param {number} time time.
   */
  constructor(subtype, deltaTime, time) {
    /** @type {string} */
    this.subtype = subtype;
    /** @type {number} */

    this.deltaTime = deltaTime;
    /** @type {number} */

    this.time = time;
  }

}
/**
 * Midi Channel Event Structure
 * @extends {Event}
 */


class ChannelEvent extends Event {
  /**
   * @param {string} subtype
   * @param {number} deltaTime delta time.
   * @param {number} time time.
   * @param {number} channel
   * @param {number=} optParameter1
   * @param {number=} optParameter2
   */
  constructor(subtype, deltaTime, time, channel, optParameter1, optParameter2) {
    super(subtype, deltaTime, time);
    /** @type {number} */

    this.channel = channel;
    /** @type {(number|undefined)} */

    this.parameter1 = optParameter1;
    /** @type {(number|undefined)} */

    this.parameter2 = optParameter2;
  }

}
/**
 * System Exclusive Event Structure
 * @extends {Event}
 */


class SystemExclusiveEvent extends Event {
  /**
   * @param {string} subtype
   * @param {number} deltaTime delta time.
   * @param {number} time time.
   * @param {ByteArray} data
   */
  constructor(subtype, deltaTime, time, data) {
    super(subtype, deltaTime, time);
    /** @type {ByteArray} */

    this.data = data;
  }

}
/**
 * Midi Meta Event Structure
 * @extends {Event}
 */


class MetaEvent extends Event {
  /**
   * @param {string} subtype
   * @param {number} deltaTime delta time.
   * @param {number} time time.
   * @param {Array.<*>} data meta data.
   */
  constructor(subtype, deltaTime, time, data) {
    super(subtype, deltaTime, time);
    /** @type {Array.<*>} */

    this.data = data;
  }

}



/***/ }),

/***/ "./src/riff.js":
/*!*********************!*\
  !*** ./src/riff.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Riff; });
/**
 * Riff Parser class
 */
class Riff {
  /**
   * @param {ByteArray} input input buffer.
   * @param {Object=} optParams option parameters.
   */
  constructor(input, optParams = {}) {
    /** @type {ByteArray} */
    this.input = input;
    /** @type {number} */

    this.ip = optParams.index || 0;
    /** @type {number} */

    this.length = optParams.length || input.length - this.ip;
    /** @type {Array.<RiffChunk>} */

    this.chunkList;
    /** @type {number} */

    this.offset = this.ip;
    /** @type {boolean} */

    this.padding = optParams.padding !== void 0 ? optParams.padding : true;
    /** @type {boolean} */

    this.bigEndian = optParams.bigEndian !== void 0 ? optParams.bigEndian : false;
  }
  /**
   */


  parse() {
    /** @type {number} */
    const length = this.length + this.offset;
    this.chunkList = [];

    while (this.ip < length) {
      this.parseChunk();
    }
  }
  /**
   */


  parseChunk() {
    /** @type {ByteArray} */
    const input = this.input;
    /** @type {number} */

    let ip = this.ip;
    /** @type {number} */

    let size;
    this.chunkList.push(new RiffChunk(String.fromCharCode(input[ip++], input[ip++], input[ip++], input[ip++]), size = this.bigEndian ? (input[ip++] << 24 | input[ip++] << 16 | input[ip++] << 8 | input[ip++]) >>> 0 : (input[ip++] | input[ip++] << 8 | input[ip++] << 16 | input[ip++] << 24) >>> 0, ip));
    ip += size; // padding

    if (this.padding && (ip - this.offset & 1) === 1) {
      ip++;
    }

    this.ip = ip;
  }
  /**
   * @param {number} index chunk index.
   * @return {?RiffChunk}
   */


  getChunk(index) {
    /** @type {RiffChunk} */
    const chunk = this.chunkList[index];

    if (chunk === void 0) {
      return null;
    }

    return chunk;
  }
  /**
   * @return {number}
   */


  getNumberOfChunks() {
    return this.chunkList.length;
  }

}
/**
 * Riff Chunk Structure
 * @interface
 */

class RiffChunk {
  /**
   * @param {string} type
   * @param {number} size
   * @param {number} offset
   */
  constructor(type, size, offset) {
    /** @type {string} */
    this.type = type;
    /** @type {number} */

    this.size = size;
    /** @type {number} */

    this.offset = offset;
  }

}

/***/ }),

/***/ "./src/smf.js":
/*!********************!*\
  !*** ./src/smf.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SMF; });
/* harmony import */ var _midi_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./midi_event */ "./src/midi_event.js");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta */ "./src/meta.js");
/* harmony import */ var _riff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riff */ "./src/riff.js");



/**
 * Standard Midi File Parser class
 */

class SMF {
  /**
   * @param {ByteArray} input input buffer.
   * @param {Object=} optParams option parameters.
   */
  constructor(input, optParams = {}) {
    optParams.padding = false;
    optParams.bigEndian = true;
    /** @type {ByteArray} */

    this.input = input;
    /** @type {number} */

    this.ip = optParams.index || 0;
    /** @type {number} */

    this.chunkIndex = 0;
    /**
     * @type {Riff}
     * @private
     */

    this.riffParser_ = new _riff__WEBPACK_IMPORTED_MODULE_2__["default"](input, optParams); // MIDI File Information

    /** @type {number} */

    this.formatType = 0;
    /** @type {number} */

    this.numberOfTracks = 0;
    /** @type {number} */

    this.timeDivision = 0;
    /** @type {Array.<Array.<Midi.Event>>} */

    this.tracks = [];
    /** @type {Array.<Array.<ByteArray>>} */

    this.plainTracks = [];
    /** @type {number} */

    this.version = _meta__WEBPACK_IMPORTED_MODULE_1__["default"].version;
    /** @type {string} */

    this.build = _meta__WEBPACK_IMPORTED_MODULE_1__["default"].build;
  }

  /**
   */
  parse() {
    /** @type {number} */
    let i = 0;
    /** @type {number} */

    let il = 0; // parse riff chunks

    this.riffParser_.parse(); // parse header chunk

    this.parseHeaderChunk(); // parse track chunks

    for (i = 0, il = this.numberOfTracks; i < il; ++i) {
      this.parseTrackChunk();
    }
  }

  /**
   */
  parseHeaderChunk() {
    /** @type {?{type: string, size: number, offset: number}} */
    const chunk = this.riffParser_.getChunk(this.chunkIndex++);
    /** @type {ByteArray} */

    const data = this.input;
    /** @type {number} */

    let ip = chunk.offset;

    if (!chunk || chunk.type !== 'MThd') {
      throw new Error('invalid header signature');
    }

    this.formatType = data[ip++] << 8 | data[ip++];
    this.numberOfTracks = data[ip++] << 8 | data[ip++];
    this.timeDivision = data[ip++] << 8 | data[ip++];
  }

  /**
   */
  parseTrackChunk() {
    /** @type {?{type: string, size: number, offset: number}} */
    const chunk = this.riffParser_.getChunk(this.chunkIndex++);
    /** @type {ByteArray} */

    const data = this.input;
    /** @type {number} */

    let ip = chunk.offset;
    /** @type {number} */

    let size = 0;
    /** @type {number} */

    let deltaTime = 0;
    /** @type {number} */

    let eventType = 0;
    /** @type {number} */

    let channel = 0;
    /** @type {number} */

    let prevEventType = -1;
    /** @type {number} */

    let prevChannel = -1;
    /** @type {number} */

    let tmp = 0;
    /** @type {number} */

    let totalTime = 0;
    /** @type {number} */

    let offset = 0;
    /** @type {number} */

    let length = 0;
    /** @type {number} */

    let status = 0;
    /** @type {Event} */

    let event;
    /** @type {ByteArray} */

    let plainBytes;
    /** @return {number} */

    const readNumber = () => {
      /** @type {number} */
      let result = 0;
      /** @type {number} */

      let tmp = 0;

      do {
        tmp = data[ip++];
        result = result << 7 | tmp & 0x7f;
      } while ((tmp & 0x80) !== 0);

      return result;
    };

    if (!chunk || chunk.type !== 'MTrk') {
      throw new Error('invalid header signature');
    }

    size = chunk.offset + chunk.size;
    const eventQueue = [];
    const plainQueue = [];

    while (ip < size) {
      // delta time
      deltaTime = readNumber();
      totalTime += deltaTime; // offset

      offset = ip; // event type value, midi channel

      status = data[ip++];
      eventType = status >> 4 & 0xf;
      channel = status & 0xf; // run status rule

      if (eventType < 8) {
        eventType = prevEventType;
        channel = prevChannel;
        status = prevEventType << 4 | prevChannel;
        ip--;
        offset--;
      } else {
        prevEventType = eventType;
        prevChannel = channel;
      } // TODO


      const table = [,,,,,,,, 'NoteOff', // 0x8
      'NoteOn', 'NoteAftertouch', 'ControlChange', 'ProgramChange', 'ChannelAftertouch', 'PitchBend'];

      switch (eventType) {
        // channel events
        case 0x8:
        /* FALLTHROUGH */

        case 0x9:
        /* FALLTHROUGH */

        case 0xA:
        /* FALLTHROUGH */

        case 0xB:
        /* FALLTHROUGH */

        case 0xD:
        /* FALLTHROUGH */

        case 0xE:
          event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["ChannelEvent"](table[eventType], deltaTime, totalTime, channel, data[ip++], data[ip++]);
          break;

        case 0xC:
          event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["ChannelEvent"](table[eventType], deltaTime, totalTime, channel, data[ip++]);
          break;
        // meta events, system exclusive event

        case 0xF:
          switch (channel) {
            // SysEx event
            case 0x0:
              tmp = readNumber();

              if (data[ip + tmp - 1] !== 0xf7) {
                throw new Error('invalid SysEx event');
              }

              event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["SystemExclusiveEvent"]('SystemExclusive', deltaTime, totalTime, data.subarray(ip, (ip += tmp) - 1));
              break;

            case 0x7:
              tmp = readNumber();
              event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["SystemExclusiveEvent"]('SystemExclusive(F7)', deltaTime, totalTime, data.subarray(ip, ip += tmp));
              break;
            // meta event

            case 0xF:
              eventType = data[ip++];
              tmp = readNumber();

              switch (eventType) {
                case 0x00:
                  // sequence number
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('SequenceNumber', deltaTime, totalTime, [data[ip++], data[ip++]]);
                  break;

                case 0x01:
                  // text event
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('TextEvent', deltaTime, totalTime, [String.fromCharCode.apply(null, data.subarray(ip, ip += tmp))]);
                  break;

                case 0x02:
                  // copyright notice
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('CopyrightNotice', deltaTime, totalTime, [String.fromCharCode.apply(null, data.subarray(ip, ip += tmp))]);
                  break;

                case 0x03:
                  // sequence/track name
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('SequenceTrackName', deltaTime, totalTime, [String.fromCharCode.apply(null, data.subarray(ip, ip += tmp))]);
                  break;

                case 0x04:
                  // instrument name
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('InstrumentName', deltaTime, totalTime, [String.fromCharCode.apply(null, data.subarray(ip, ip += tmp))]);
                  break;

                case 0x05:
                  // lyrics
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('Lyrics', deltaTime, totalTime, [String.fromCharCode.apply(null, data.subarray(ip, ip += tmp))]);
                  break;

                case 0x06:
                  // marker
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('Marker', deltaTime, totalTime, [String.fromCharCode.apply(null, data.subarray(ip, ip += tmp))]);
                  break;

                case 0x07:
                  // cue point
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('CuePoint', deltaTime, totalTime, [String.fromCharCode.apply(null, data.subarray(ip, ip += tmp))]);
                  break;

                case 0x20:
                  // midi channel prefix
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('MidiChannelPrefix', deltaTime, totalTime, [data[ip++]]);
                  break;

                case 0x2f:
                  // end of track
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('EndOfTrack', deltaTime, totalTime, []);
                  break;

                case 0x51:
                  // set tempo
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('SetTempo', deltaTime, totalTime, [data[ip++] << 16 | data[ip++] << 8 | data[ip++]]);
                  break;

                case 0x54:
                  // smpte offset
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('SmpteOffset', deltaTime, totalTime, [data[ip++], data[ip++], data[ip++], data[ip++], data[ip++]]);
                  break;

                case 0x58:
                  // time signature
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('TimeSignature', deltaTime, totalTime, [data[ip++], data[ip++], data[ip++], data[ip++]]);
                  break;

                case 0x59:
                  // key signature
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('KeySignature', deltaTime, totalTime, [data[ip++], data[ip++]]);
                  break;

                case 0x7f:
                  // sequencer specific
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('SequencerSpecific', deltaTime, totalTime, [data.subarray(ip, ip += tmp)]);
                  break;

                default:
                  // unknown
                  event = new _midi_event__WEBPACK_IMPORTED_MODULE_0__["MetaEvent"]('Unknown', deltaTime, totalTime, [eventType, data.subarray(ip, ip += tmp)]);
              }

              break;

            default:
              console.warn('unknown message:', status.toString(16));
          }

          break;
        // error

        default:
          throw new Error('invalid status');
      } // plain queue


      length = ip - offset;
      plainBytes = data.subarray(offset, offset + length);
      plainBytes[0] = status;

      if (event instanceof _midi_event__WEBPACK_IMPORTED_MODULE_0__["ChannelEvent"] && event.subtype === 'NoteOn' &&
      /** @type {ChannelEvent} */
      event.parameter2 === 0) {
        event.subtype = table[8];
        plainBytes = new Uint8Array([0x80 | event.channel, event.parameter1, event.parameter2]);
      }

      plainQueue.push(plainBytes); // event queue

      eventQueue.push(event);
    }

    this.tracks.push(eventQueue);
    this.plainTracks.push(plainQueue);
  }

}
;

/***/ })

/******/ });
});
//# sourceMappingURL=smf.parser.js.map