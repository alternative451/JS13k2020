/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js13k-ecs/dist/ecs.mjs":
/*!*********************************************!*\
  !*** ./node_modules/js13k-ecs/dist/ecs.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var t=[],n=[],r={},e="_sign",o="_mask";"undefined"!=typeof Symbol&&(e=Symbol(e),o=Symbol(o));var i=function(t,n){var r=n[t];if(!r)throw new Error("The component is not registered");return r},s=i.bind(null,e),a=i.bind(null,o),c=function(n){n.id&&t.forEach(function(t){return t.match(n)})},h=1,f={},u=function(t){this.id=t||(h++).toString(36),this.components=Object.assign({},f),this.mask=0};u.prototype.add=function(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];n.forEach(function(n){t.components[s(n.constructor)]=n,t.mask|=a(n.constructor)}),c(this)},u.prototype.remove=function(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];n.forEach(function(n){var r=s(n),e=t.components[r];e&&(e.destructor&&e.destructor(),delete t.components[r],t.mask&=~a(n))}),c(this)},u.prototype.has=function(t){return s(t)in this.components},u.prototype.get=function(t){return this.components[t[e]]},u.prototype.eject=function(){!function(n){var e=n.components;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=e[o];i&&i.destructor&&i.destructor()}t.forEach(function(t){return t.remove(n)}),delete r[n.id],n.id=0}(this)};var p=function(t,n){this.entity=t,this.prev=null,this.next=n},l=function(t){if(!t)throw new Error("Empty selector");for(var n in this.mask=t,this.map={},this.list=null,this.length=0,r)Object.prototype.hasOwnProperty.call(r,n)&&this.match(r[n])};l.prototype.iterate=function(t){for(var n=this.list;n;)t(n.entity),n=n.next},l.prototype.match=function(t){(this.mask&t.mask)===this.mask?this.add(t):this.remove(t)},l.prototype.add=function(t){if(!this.map[t.id]){var n=new p(t,this.list);this.list&&(this.list.prev=n),this.list=n,this.map[t.id]=n,this.length++}},l.prototype.remove=function(t){var n=this.map[t.id];n&&(n.prev?n.prev.next=n.next:this.list=n.next,n.next&&(n.next.prev=n.prev),delete this.map[t.id],this.length--)};var m=0,v=performance||Date,d=v.now.bind(v);/* harmony default export */ __webpack_exports__["default"] = ({register:function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];t.forEach(function(t){if(m>31)throw new Error("Components limit reached");if(!t[e]){var n=m.toString(36);f[n]=null,t[e]=n,t[o]=1<<m,m++}})},process:function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];t.forEach(function(t){return n.push(t)})},create:function(t){var n=new u(t);if(r[n.id])throw new Error("The ID already exist");return r[n.id]=n,n},get:function(t){return r[t]},select:function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var e=0;n.forEach(function(t){e|=a(t)});for(var o=0;o<t.length;o++)if(t[o].mask===e)return t[o];var i=new l(e);return t.push(i),i},update:function(t){var r={};return n.forEach(function(n){var e=d();n.update(t),r[n.constructor.name]=d()-e}),r}});


/***/ }),

/***/ "./src/assets/audio/melo1.json":
/*!*************************************!*\
  !*** ./src/assets/audio/melo1.json ***!
  \*************************************/
/*! exports provided: rowLen, endPattern, songData, songLen, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"rowLen\":5513,\"endPattern\":2,\"songData\":[{\"osc1_oct\":7,\"osc1_det\":0,\"osc1_detune\":0,\"osc1_xenv\":0,\"osc1_vol\":192,\"osc1_waveform\":0,\"osc2_oct\":7,\"osc2_det\":0,\"osc2_detune\":0,\"osc2_xenv\":0,\"osc2_vol\":192,\"osc2_waveform\":0,\"noise_fader\":0,\"env_attack\":200,\"env_sustain\":2000,\"env_release\":20000,\"env_master\":192,\"fx_filter\":0,\"fx_freq\":11025,\"fx_resonance\":255,\"fx_delay_time\":0,\"fx_delay_amt\":0,\"fx_pan_freq\":0,\"fx_pan_amt\":0,\"lfo_osc1_freq\":0,\"lfo_fx_freq\":0,\"lfo_freq\":0,\"lfo_amt\":0,\"lfo_waveform\":0,\"p\":[1],\"c\":[{\"n\":[0,0,146,152,163,167,148,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]}],\"songLen\":9}");

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/*! exports provided: Pos, Controlable, TrialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos", function() { return Pos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controlable", function() { return Controlable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialState", function() { return TrialState; });
class Pos {
    constructor(x, y, z) {
        this.x = x
        this.y = y 
        this.z = z
    }
}



class Controlable {
    constructor() {
        this.isUp = false
        this.isDown = false
        window.addEventListener("keydown", (event) => {
            if(event.key === "ArrowUp") {
                this.isUp = true
            }
            if(event.key === "ArrowDown") {
                this.isDown = true
            }
        })
        window.addEventListener("keyup", (event) => {
            if(event.key === "ArrowUp") {
                this.isUp = false
            }
            if(event.key === "ArrowDown") {
                this.isDown = false
            }
        })
    }
}

class TrialState {
    constructor() {
        this.isUpPressed = false
        this.isDownPressed = false
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/audio.js */ "./src/libs/audio.js");
/* harmony import */ var _assets_audio_melo1_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/audio/melo1.json */ "./src/assets/audio/melo1.json");
var _assets_audio_melo1_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./assets/audio/melo1.json */ "./src/assets/audio/melo1.json", 1);
/* harmony import */ var js13k_ecs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js13k-ecs */ "./node_modules/js13k-ecs/dist/ecs.mjs");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.js */ "./src/components.js");
/* harmony import */ var _systems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./systems.js */ "./src/systems.js");









document.body.appendChild(document.createElement("canvas"))
const cv = document.querySelector("canvas")
const ctx = cv.getContext("2d") 

js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].register(_components_js__WEBPACK_IMPORTED_MODULE_3__["Pos"], _components_js__WEBPACK_IMPORTED_MODULE_3__["Controlable"], _components_js__WEBPACK_IMPORTED_MODULE_3__["TrialState"])

js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].process(Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["draw"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["control"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["trialDisplay"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx))

/* sync () => {
  const melodieCurry = await Sound(melodie)
   const soundHandle = melodieCurry(false)

  setTimeout(() => {
    soundHandle.stop()
  }, 500)
})()*/


js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]
  .create()
  .add(
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["Pos"](cv.width / 2, cv.height / 2, 0),
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["Controlable"](),
  )
js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]
  .create()
  .add(
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["TrialState"](),
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["Controlable"](),
  )
const loop = () => {
  cv.width += 0
  js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].update()

  requestAnimationFrame(loop)
}

loop()

/***/ }),

/***/ "./src/libs/audio.js":
/*!***************************!*\
  !*** ./src/libs/audio.js ***!
  \***************************/
/*! exports provided: Sound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sound", function() { return Sound; });
/* harmony import */ var _sonant_wrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sonant_wrapper.js */ "./src/libs/sonant_wrapper.js");


var audio_ctx = new (window.webkitAudioContext||window.AudioContext)()

const makeAsync = async (rawSound) => {
  return new Promise((resolve) => {
    Object(_sonant_wrapper_js__WEBPACK_IMPORTED_MODULE_0__["sonantxr_generate_song"])(audio_ctx, rawSound, buffer => {
      resolve(buffer)
    })
  })
}

const Sound = async (rawSound) => {
    
  const buffer = await makeAsync(rawSound)
  const source = audio_ctx.createBufferSource()
  source.buffer = buffer
  source.connect(audio_ctx.destination)

  return (loop) => {
    source.loop = loop
    source.start()
    return source
  }
}


/***/ }),

/***/ "./src/libs/sonant_wrapper.js":
/*!************************************!*\
  !*** ./src/libs/sonant_wrapper.js ***!
  \************************************/
/*! exports provided: sonantxr_generate_song, sonantxr_generate_sound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sonantxr_generate_song", function() { return sonantxr_generate_song; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sonantxr_generate_sound", function() { return sonantxr_generate_sound; });
const sonantxr_generate_song = function(audio_ctx, song_data, callback) {
	var music_generator = new MusicGenerator(audio_ctx, song_data);
	music_generator._createAudioBuffer(callback);
};

const sonantxr_generate_sound = function(audio_ctx, instrument, note, callback) {
	var sound_generator = new SoundGenerator(audio_ctx, instrument);
	sound_generator._createAudioBuffer(note, callback);
};


const _math = Math
var WAVE_SPS = 44100;					// Samples per second
var MAX_TIME = 33; // maximum time, in millis, that the generator can use consecutively

var audioCtx = null;

// Oscillators
function osc_sin(value)
{
	return _math.sin(value * 6.283184);
}

function osc_square(value)
{
	return osc_sin(value) < 0 ? -1 : 1;
}

function osc_saw(value)
{
	return (value % 1) - 0.5;
}

function osc_tri(value)
{
	var v2 = (value % 1) * 4;
	return v2 < 2 ? v2 - 1 : 3 - v2;
}

// Array of oscillator functions
var oscillators =
[
	osc_sin,
	osc_square,
	osc_saw,
	osc_tri
];

function getnotefreq(n)
{
	return 0.00390625 * _math.pow(1.059463094, n - 128);
}

function generateBuffer(samples) {
   return {
		left: new Float32Array(samples),
		right: new Float32Array(samples)
	};
}

function applyDelay(chnBuf, waveSamples, instr, rowLen) {
	var p1 = (instr.fx_delay_time * rowLen) >> 1;
	var t1 = instr.fx_delay_amt / 255;

	var n1 = 0;
	while(n1 < waveSamples - p1) {
		var b1 = n1;
		var l = (n1 + p1);
		chnBuf.left[l] += chnBuf.right[b1] * t1;
		chnBuf.right[l] += chnBuf.left[b1] * t1;
		n1++;
	}
}


function getAudioBuffer(ctx, mixBuf) {
	var buffer = ctx.createBuffer(2, mixBuf.left.length, WAVE_SPS); // Create Mono Source Buffer from Raw Binary
	buffer.getChannelData(0).set(mixBuf.left);
	buffer.getChannelData(1).set(mixBuf.right);
	return buffer;
}

var SoundGenerator = function(ctx, instr, rowLen) {
	this.ctx = ctx;
	this.instr = instr;
	this.rowLen = rowLen || 5605;

	this.osc_lfo = oscillators[instr.lfo_waveform];
	this.osc1 = oscillators[instr.osc1_waveform];
	this.osc2 = oscillators[instr.osc2_waveform];
	this.attack = instr.env_attack;
	this.sustain = instr.env_sustain;
	this.release = instr.env_release;
	this.panFreq = _math.pow(2, instr.fx_pan_freq - 8) / this.rowLen;
	this.lfoFreq = _math.pow(2, instr.lfo_freq - 8) / this.rowLen;
};

SoundGenerator.prototype._genSound = function(n, chnBuf, currentpos) {
	var c1 = 0;
	var c2 = 0;

	// Precalculate frequencues
	var o1t = getnotefreq(n + (this.instr.osc1_oct - 8) * 12 + this.instr.osc1_det) * (1 + 0.0008 * this.instr.osc1_detune);
	var o2t = getnotefreq(n + (this.instr.osc2_oct - 8) * 12 + this.instr.osc2_det) * (1 + 0.0008 * this.instr.osc2_detune);

	// State variable init
	var q = this.instr.fx_resonance / 255;
	var low = 0;
	var band = 0;

	var chnbufLength = chnBuf.left.length;
	var numSamples = this.attack + this.sustain + this.release - 1;
	
	for (var j = numSamples; j >= 0; --j) {
		var k = j + currentpos;

		// LFO
		var lfor = this.osc_lfo(k * this.lfoFreq) * this.instr.lfo_amt / 512 + 0.5;

		// Envelope
		var e = 1;
		if (j < this.attack) {
			e = j / this.attack;
		}
		else if (j >= this.attack + this.sustain) {
			e -= (j - this.attack - this.sustain) / this.release;
		}

		// Oscillator 1
		var t = o1t;
		if (this.instr.lfo_osc1_freq) {
			t += lfor;
		}
		if (this.instr.osc1_xenv) {
			t *= e * e 
		}
		c1 += t;
		var rsample = this.osc1(c1) * this.instr.osc1_vol;

		// Oscillator 2
		t = o2t;
		if (this.instr.osc2_xenv) {
			t *= e * e;
		};
		c2 += t;
		rsample += this.osc2(c2) * this.instr.osc2_vol;

		// Noise oscillator
		if (this.instr.noise_fader) {
			rsample += (2*_math.random()-1) * this.instr.noise_fader * e;
		}

		rsample *= e / 255;

		// State variable filter
		var f = this.instr.fx_freq;
		if (this.instr.lfo_fx_freq) {
			f *= lfor;
		}
		f = 1.5 * _math.sin(f * 3.141592 / WAVE_SPS);
		low += f * band;
		var high = q * (rsample - band) - low;
		band += f * high;
		switch (this.instr.fx_filter) {
			case 1: // Hipass
				rsample = high;
				break;
			case 2: // Lopass
				rsample = low;
				break;
			case 3: // Bandpass
				rsample = band;
				break;
			case 4: // Notch
				rsample = low + high;
				break;
			default:
		}

		// Panning & master volume
		t = osc_sin(k * this.panFreq) * this.instr.fx_pan_amt / 512 + 0.5;
		rsample *= 0.00476 * this.instr.env_master; // 39 / 8192 = 0.00476

		// Add to 16-bit channel buffer
		// k = k * 2;
		if (k < chnbufLength) {
			chnBuf.left[k] += rsample * (1-t) ;
			chnBuf.right[k] += rsample * t;
		}
	}
};

SoundGenerator.prototype._createAudioBuffer = function(n, callBack) {
	var bufferSize = (this.attack + this.sustain + this.release - 1) + (32 * this.rowLen);
	var buffer = generateBuffer(bufferSize);
	this._genSound(n, buffer, 0);
	applyDelay(buffer, bufferSize, this.instr, this.rowLen);

	callBack(getAudioBuffer(this.ctx, buffer));
};




var MusicGenerator = function(ctx, song) {
	this.ctx = ctx;
	this.song = song;
	// Wave data configuration
	this.waveSize = WAVE_SPS * song.songLen; // Total song size (in samples)
};

MusicGenerator.prototype._generateTrack = function (instr, mixBuf, callBack) {
	var self = this;
	var chnBuf = generateBuffer(this.waveSize);
	// Preload/precalc some properties/expressions (for improved performance)
	var waveSamples = self.waveSize,
		rowLen = self.song.rowLen,
		endPattern = self.song.endPattern,
		soundGen = new SoundGenerator(self.ctx, instr, rowLen);

	var currentpos = 0;
	var p = 0;
	var row = 0;
	var recordSounds = function() {
		var beginning = Date.now();
		while (true) {
			if (row === 32) {
				row = 0;
				p += 1;
				continue;
			}
			if (p === endPattern - 1) {
				return finalize();
			}
			var cp = instr.p[p];
			if (cp) {
				var n = instr.c[cp - 1].n[row];
				if (n) {
					soundGen._genSound(n, chnBuf, currentpos);
				}
			}
			currentpos += rowLen;
			row += 1;
			if (Date.now() - beginning > MAX_TIME) {
				setTimeout(recordSounds, 0);
				return;
			}
		}
	};

	var finalize = function() {
		applyDelay(chnBuf, waveSamples, instr, rowLen);
		for (var b2 = 0; b2 < waveSamples; b2++) {
			mixBuf.left[b2] += chnBuf.left[b2];
		}
		for (var b2 = 0; b2 < waveSamples; b2++) {
			mixBuf.right[b2] += chnBuf.right[b2];
		}
		callBack();
	};

	recordSounds();
};

MusicGenerator.prototype._createAudioBuffer = function(callBack) {
	var self = this;
	var mixBuf = generateBuffer(this.waveSize);
	var track = 0;

	var nextTrack = function() {
		if (track < self.song.songData.length) {
			track += 1;
			self._generateTrack(self.song.songData[track - 1], mixBuf, nextTrack);
		}
		else {
			callBack(getAudioBuffer(self.ctx, mixBuf));
		}
	};
	nextTrack();
};




/***/ }),

/***/ "./src/systems.js":
/*!************************!*\
  !*** ./src/systems.js ***!
  \************************/
/*! exports provided: control, draw, trialDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "control", function() { return control; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trialDisplay", function() { return trialDisplay; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");


const control = (ecs) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"], _components__WEBPACK_IMPORTED_MODULE_0__["Controlable"])
    const trials = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"], _components__WEBPACK_IMPORTED_MODULE_0__["Controlable"])

    return {
        update : (dt) => {

            trials.iterate((entity) => {
                const {isUp, isDown} = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Controlable"])
                if(isUp) {
                    entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"]).isUpPressed = true
                }
                if(isDown) {
                    entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"]).isDownPressed = true
                }

            })

            selected.iterate((entity) => {
                const {isUp, isDown} = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Controlable"])
                if(isUp) {
                    entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"]).y--
                }
                if(isDown) {
                    entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"]).y++
                }
            })
        }
    }
}


const draw = (ecs, ctx) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
 
    return {

        update : (dt) => {
            selected.iterate((entity) => {
                const pos  = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                ctx.fillStyle= "#134"
                ctx.fillRect(pos.x, pos.y, 10,10)
            })
        }
    }
}

const trialDisplay = (ecs, ctx) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"])
    return {
        update : (dt) => {
            selected.iterate((entity) => {
                if(!entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"]).isUpPressed && !entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"]).isUpPressed) {
                    ctx.fillText("Press Up", 10, 50)
                } else if(entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"]).isDownPressed&&entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"]).isUpPressed) {
                    ctx.fillText("Good Dog !", 10, 50)
                } else if(entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"]).isUpPressed) {
                    ctx.fillText("Press DOWN", 10, 50)
                }
            })
        }
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzMTNrLWVjcy9kaXN0L2Vjcy5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2F1ZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3NvbmFudF93cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeXN0ZW1zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxrQkFBa0IscUJBQXFCLHNEQUFzRCxvQkFBb0IsV0FBVyx5REFBeUQsU0FBUyxpREFBaUQsNEJBQTRCLGtCQUFrQixFQUFFLFNBQVMsZUFBZSw4REFBOEQsaUJBQWlCLDJCQUEyQix1Q0FBdUMsSUFBSSxtQkFBbUIsc0JBQXNCLDBEQUEwRCxVQUFVLCtCQUErQix1Q0FBdUMsSUFBSSxtQkFBbUIsc0JBQXNCLDZCQUE2Qix1RUFBdUUsVUFBVSw2QkFBNkIsOEJBQThCLDZCQUE2Qiw2QkFBNkIsOEJBQThCLGFBQWEsbUJBQW1CLDZEQUE2RCxXQUFXLGdDQUFnQyxzQkFBc0IsbUJBQW1CLHdCQUF3QixRQUFRLG9CQUFvQix5Q0FBeUMsZUFBZSx3Q0FBd0Msb0NBQW9DLDZGQUE2RixnQ0FBZ0Msb0JBQW9CLEVBQUUsc0JBQXNCLCtCQUErQiwwREFBMEQsNkJBQTZCLG9CQUFvQix5QkFBeUIsMEVBQTBFLGdDQUFnQyxxQkFBcUIsa0hBQWtILDRDQUEwRCxnRUFBQyxvQkFBb0IsZ0NBQWdDLElBQUksbUJBQW1CLHNCQUFzQixvREFBb0QsVUFBVSxxQkFBcUIsZ0NBQWdDLEVBQUUsb0JBQW9CLGdDQUFnQyxJQUFJLG1CQUFtQixzQkFBc0IsaUJBQWlCLEVBQUUsb0JBQW9CLGVBQWUsbURBQW1ELG1CQUFtQixpQkFBaUIsWUFBWSxtQkFBbUIsZ0NBQWdDLElBQUksbUJBQW1CLFFBQVEsc0JBQXNCLFFBQVEsRUFBRSxZQUFZLFdBQVcsaUNBQWlDLGVBQWUsbUJBQW1CLG9CQUFvQixTQUFTLDZCQUE2QixVQUFVLHdDQUF3QyxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1cEY7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ1c7O0FBRXBCOztBQUVtQztBQUNKOzs7QUFHM0Q7QUFDQTtBQUNBOztBQUVBLGlEQUFHLFVBQVUsa0RBQUcsRUFBRSwwREFBVyxFQUFFLHlEQUFVOztBQUV6QyxpREFBRyxTQUFTLHdEQUFJLENBQUMsaURBQUcsUUFBUSwyREFBTyxDQUFDLGlEQUFHLEdBQUcsZ0VBQVksQ0FBQyxpREFBRzs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7O0FBR0QsaURBQUc7QUFDSDtBQUNBO0FBQ0EsUUFBUSxrREFBRztBQUNYLFFBQVEsMERBQVc7QUFDbkI7QUFDQSxpREFBRztBQUNIO0FBQ0E7QUFDQSxRQUFRLHlEQUFVO0FBQ2xCLFFBQVEsMERBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBRzs7QUFFTDtBQUNBOztBQUVBLE07Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBNEQ7O0FBRTVEOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlGQUFzQjtBQUMxQjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHFCQUFxQjtBQUNyQixrQkFBa0I7O0FBRWxCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5QixRQUFRO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdlJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7O0FBRXBEO0FBQ1AsZ0NBQWdDLCtDQUFHLEVBQUUsdURBQVc7QUFDaEQsOEJBQThCLHNEQUFVLEVBQUUsdURBQVc7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsYUFBYSxjQUFjLHVEQUFXO0FBQzdEO0FBQ0EsK0JBQStCLHNEQUFVO0FBQ3pDO0FBQ0E7QUFDQSwrQkFBK0Isc0RBQVU7QUFDekM7O0FBRUEsYUFBYTs7QUFFYjtBQUNBLHVCQUF1QixhQUFhLGNBQWMsdURBQVc7QUFDN0Q7QUFDQSwrQkFBK0IsK0NBQUc7QUFDbEM7QUFDQTtBQUNBLCtCQUErQiwrQ0FBRztBQUNsQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7OztBQUdPO0FBQ1AsZ0NBQWdDLCtDQUFHOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLCtDQUFHO0FBQzNDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVPO0FBQ1AsZ0NBQWdDLHNEQUFVO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzREFBVSw2QkFBNkIsc0RBQVU7QUFDaEY7QUFDQSxpQkFBaUIsb0JBQW9CLHNEQUFVLDRCQUE0QixzREFBVTtBQUNyRjtBQUNBLGlCQUFpQixvQkFBb0Isc0RBQVU7QUFDL0M7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgdD1bXSxuPVtdLHI9e30sZT1cIl9zaWduXCIsbz1cIl9tYXNrXCI7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmKGU9U3ltYm9sKGUpLG89U3ltYm9sKG8pKTt2YXIgaT1mdW5jdGlvbih0LG4pe3ZhciByPW5bdF07aWYoIXIpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNvbXBvbmVudCBpcyBub3QgcmVnaXN0ZXJlZFwiKTtyZXR1cm4gcn0scz1pLmJpbmQobnVsbCxlKSxhPWkuYmluZChudWxsLG8pLGM9ZnVuY3Rpb24obil7bi5pZCYmdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0Lm1hdGNoKG4pfSl9LGg9MSxmPXt9LHU9ZnVuY3Rpb24odCl7dGhpcy5pZD10fHwoaCsrKS50b1N0cmluZygzNiksdGhpcy5jb21wb25lbnRzPU9iamVjdC5hc3NpZ24oe30sZiksdGhpcy5tYXNrPTB9O3UucHJvdG90eXBlLmFkZD1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLG49W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspbltyXT1hcmd1bWVudHNbcl07bi5mb3JFYWNoKGZ1bmN0aW9uKG4pe3QuY29tcG9uZW50c1tzKG4uY29uc3RydWN0b3IpXT1uLHQubWFza3w9YShuLmNvbnN0cnVjdG9yKX0pLGModGhpcyl9LHUucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLG49W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspbltyXT1hcmd1bWVudHNbcl07bi5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciByPXMobiksZT10LmNvbXBvbmVudHNbcl07ZSYmKGUuZGVzdHJ1Y3RvciYmZS5kZXN0cnVjdG9yKCksZGVsZXRlIHQuY29tcG9uZW50c1tyXSx0Lm1hc2smPX5hKG4pKX0pLGModGhpcyl9LHUucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gcyh0KWluIHRoaXMuY29tcG9uZW50c30sdS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNvbXBvbmVudHNbdFtlXV19LHUucHJvdG90eXBlLmVqZWN0PWZ1bmN0aW9uKCl7IWZ1bmN0aW9uKG4pe3ZhciBlPW4uY29tcG9uZW50cztmb3IodmFyIG8gaW4gZSlpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSl7dmFyIGk9ZVtvXTtpJiZpLmRlc3RydWN0b3ImJmkuZGVzdHJ1Y3RvcigpfXQuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZW1vdmUobil9KSxkZWxldGUgcltuLmlkXSxuLmlkPTB9KHRoaXMpfTt2YXIgcD1mdW5jdGlvbih0LG4pe3RoaXMuZW50aXR5PXQsdGhpcy5wcmV2PW51bGwsdGhpcy5uZXh0PW59LGw9ZnVuY3Rpb24odCl7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgc2VsZWN0b3JcIik7Zm9yKHZhciBuIGluIHRoaXMubWFzaz10LHRoaXMubWFwPXt9LHRoaXMubGlzdD1udWxsLHRoaXMubGVuZ3RoPTAscilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixuKSYmdGhpcy5tYXRjaChyW25dKX07bC5wcm90b3R5cGUuaXRlcmF0ZT1mdW5jdGlvbih0KXtmb3IodmFyIG49dGhpcy5saXN0O247KXQobi5lbnRpdHkpLG49bi5uZXh0fSxsLnByb3RvdHlwZS5tYXRjaD1mdW5jdGlvbih0KXsodGhpcy5tYXNrJnQubWFzayk9PT10aGlzLm1hc2s/dGhpcy5hZGQodCk6dGhpcy5yZW1vdmUodCl9LGwucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXtpZighdGhpcy5tYXBbdC5pZF0pe3ZhciBuPW5ldyBwKHQsdGhpcy5saXN0KTt0aGlzLmxpc3QmJih0aGlzLmxpc3QucHJldj1uKSx0aGlzLmxpc3Q9bix0aGlzLm1hcFt0LmlkXT1uLHRoaXMubGVuZ3RoKyt9fSxsLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5tYXBbdC5pZF07biYmKG4ucHJldj9uLnByZXYubmV4dD1uLm5leHQ6dGhpcy5saXN0PW4ubmV4dCxuLm5leHQmJihuLm5leHQucHJldj1uLnByZXYpLGRlbGV0ZSB0aGlzLm1hcFt0LmlkXSx0aGlzLmxlbmd0aC0tKX07dmFyIG09MCx2PXBlcmZvcm1hbmNlfHxEYXRlLGQ9di5ub3cuYmluZCh2KTtleHBvcnQgZGVmYXVsdHtyZWdpc3RlcjpmdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxuPWFyZ3VtZW50cy5sZW5ndGg7bi0tOyl0W25dPWFyZ3VtZW50c1tuXTt0LmZvckVhY2goZnVuY3Rpb24odCl7aWYobT4zMSl0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnRzIGxpbWl0IHJlYWNoZWRcIik7aWYoIXRbZV0pe3ZhciBuPW0udG9TdHJpbmcoMzYpO2Zbbl09bnVsbCx0W2VdPW4sdFtvXT0xPDxtLG0rK319KX0scHJvY2VzczpmdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxyPWFyZ3VtZW50cy5sZW5ndGg7ci0tOyl0W3JdPWFyZ3VtZW50c1tyXTt0LmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIG4ucHVzaCh0KX0pfSxjcmVhdGU6ZnVuY3Rpb24odCl7dmFyIG49bmV3IHUodCk7aWYocltuLmlkXSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgSUQgYWxyZWFkeSBleGlzdFwiKTtyZXR1cm4gcltuLmlkXT1uLG59LGdldDpmdW5jdGlvbih0KXtyZXR1cm4gclt0XX0sc2VsZWN0OmZ1bmN0aW9uKCl7Zm9yKHZhciBuPVtdLHI9YXJndW1lbnRzLmxlbmd0aDtyLS07KW5bcl09YXJndW1lbnRzW3JdO3ZhciBlPTA7bi5mb3JFYWNoKGZ1bmN0aW9uKHQpe2V8PWEodCl9KTtmb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKylpZih0W29dLm1hc2s9PT1lKXJldHVybiB0W29dO3ZhciBpPW5ldyBsKGUpO3JldHVybiB0LnB1c2goaSksaX0sdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciByPXt9O3JldHVybiBuLmZvckVhY2goZnVuY3Rpb24obil7dmFyIGU9ZCgpO24udXBkYXRlKHQpLHJbbi5jb25zdHJ1Y3Rvci5uYW1lXT1kKCktZX0pLHJ9fTtcbiIsImV4cG9ydCBjbGFzcyBQb3Mge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5IFxyXG4gICAgICAgIHRoaXMueiA9IHpcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGFibGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pc1VwID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVXAgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRG93biA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1VwID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlhbFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXNVcFByZXNzZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNEb3duUHJlc3NlZCA9IGZhbHNlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1NvdW5kfSBmcm9tIFwiLi9saWJzL2F1ZGlvLmpzXCJcclxuaW1wb3J0IG1lbG9kaWUgZnJvbSBcIi4vYXNzZXRzL2F1ZGlvL21lbG8xLmpzb25cIjtcclxuXHJcbmltcG9ydCBlY3MgZnJvbSBcImpzMTNrLWVjc1wiO1xyXG5cclxuaW1wb3J0IHsgUG9zLCBDb250cm9sYWJsZSwgVHJpYWxTdGF0ZSB9IGZyb20gXCIuL2NvbXBvbmVudHMuanNcIjtcclxuaW1wb3J0IHsgY29udHJvbCwgZHJhdywgdHJpYWxEaXNwbGF5IH0gZnJvbSBcIi4vc3lzdGVtcy5qc1wiO1xyXG5cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSlcclxuY29uc3QgY3YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpXHJcbmNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoXCIyZFwiKSBcclxuXHJcbmVjcy5yZWdpc3RlcihQb3MsIENvbnRyb2xhYmxlLCBUcmlhbFN0YXRlKVxyXG5cclxuZWNzLnByb2Nlc3MoZHJhdyhlY3MsIGN0eCksIGNvbnRyb2woZWNzKSwgdHJpYWxEaXNwbGF5KGVjcywgY3R4KSlcclxuXHJcbi8qIHN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG1lbG9kaWVDdXJyeSA9IGF3YWl0IFNvdW5kKG1lbG9kaWUpXHJcbiAgIGNvbnN0IHNvdW5kSGFuZGxlID0gbWVsb2RpZUN1cnJ5KGZhbHNlKVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNvdW5kSGFuZGxlLnN0b3AoKVxyXG4gIH0sIDUwMClcclxufSkoKSovXHJcblxyXG5cclxuZWNzXHJcbiAgLmNyZWF0ZSgpXHJcbiAgLmFkZChcclxuICAgIG5ldyBQb3MoY3Yud2lkdGggLyAyLCBjdi5oZWlnaHQgLyAyLCAwKSxcclxuICAgIG5ldyBDb250cm9sYWJsZSgpLFxyXG4gIClcclxuZWNzXHJcbiAgLmNyZWF0ZSgpXHJcbiAgLmFkZChcclxuICAgIG5ldyBUcmlhbFN0YXRlKCksXHJcbiAgICBuZXcgQ29udHJvbGFibGUoKSxcclxuICApXHJcbmNvbnN0IGxvb3AgPSAoKSA9PiB7XHJcbiAgY3Yud2lkdGggKz0gMFxyXG4gIGVjcy51cGRhdGUoKVxyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcclxufVxyXG5cclxubG9vcCgpIiwiaW1wb3J0IHsgc29uYW50eHJfZ2VuZXJhdGVfc29uZyB9IGZyb20gXCIuL3NvbmFudF93cmFwcGVyLmpzXCJcclxuXHJcbnZhciBhdWRpb19jdHggPSBuZXcgKHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHR8fHdpbmRvdy5BdWRpb0NvbnRleHQpKClcclxuXHJcbmNvbnN0IG1ha2VBc3luYyA9IGFzeW5jIChyYXdTb3VuZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgc29uYW50eHJfZ2VuZXJhdGVfc29uZyhhdWRpb19jdHgsIHJhd1NvdW5kLCBidWZmZXIgPT4ge1xyXG4gICAgICByZXNvbHZlKGJ1ZmZlcilcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNvdW5kID0gYXN5bmMgKHJhd1NvdW5kKSA9PiB7XHJcbiAgICBcclxuICBjb25zdCBidWZmZXIgPSBhd2FpdCBtYWtlQXN5bmMocmF3U291bmQpXHJcbiAgY29uc3Qgc291cmNlID0gYXVkaW9fY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXHJcbiAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlclxyXG4gIHNvdXJjZS5jb25uZWN0KGF1ZGlvX2N0eC5kZXN0aW5hdGlvbilcclxuXHJcbiAgcmV0dXJuIChsb29wKSA9PiB7XHJcbiAgICBzb3VyY2UubG9vcCA9IGxvb3BcclxuICAgIHNvdXJjZS5zdGFydCgpXHJcbiAgICByZXR1cm4gc291cmNlXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzb25hbnR4cl9nZW5lcmF0ZV9zb25nID0gZnVuY3Rpb24oYXVkaW9fY3R4LCBzb25nX2RhdGEsIGNhbGxiYWNrKSB7XHJcblx0dmFyIG11c2ljX2dlbmVyYXRvciA9IG5ldyBNdXNpY0dlbmVyYXRvcihhdWRpb19jdHgsIHNvbmdfZGF0YSk7XHJcblx0bXVzaWNfZ2VuZXJhdG9yLl9jcmVhdGVBdWRpb0J1ZmZlcihjYWxsYmFjayk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc29uYW50eHJfZ2VuZXJhdGVfc291bmQgPSBmdW5jdGlvbihhdWRpb19jdHgsIGluc3RydW1lbnQsIG5vdGUsIGNhbGxiYWNrKSB7XHJcblx0dmFyIHNvdW5kX2dlbmVyYXRvciA9IG5ldyBTb3VuZEdlbmVyYXRvcihhdWRpb19jdHgsIGluc3RydW1lbnQpO1xyXG5cdHNvdW5kX2dlbmVyYXRvci5fY3JlYXRlQXVkaW9CdWZmZXIobm90ZSwgY2FsbGJhY2spO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IF9tYXRoID0gTWF0aFxyXG52YXIgV0FWRV9TUFMgPSA0NDEwMDtcdFx0XHRcdFx0Ly8gU2FtcGxlcyBwZXIgc2Vjb25kXHJcbnZhciBNQVhfVElNRSA9IDMzOyAvLyBtYXhpbXVtIHRpbWUsIGluIG1pbGxpcywgdGhhdCB0aGUgZ2VuZXJhdG9yIGNhbiB1c2UgY29uc2VjdXRpdmVseVxyXG5cclxudmFyIGF1ZGlvQ3R4ID0gbnVsbDtcclxuXHJcbi8vIE9zY2lsbGF0b3JzXHJcbmZ1bmN0aW9uIG9zY19zaW4odmFsdWUpXHJcbntcclxuXHRyZXR1cm4gX21hdGguc2luKHZhbHVlICogNi4yODMxODQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvc2Nfc3F1YXJlKHZhbHVlKVxyXG57XHJcblx0cmV0dXJuIG9zY19zaW4odmFsdWUpIDwgMCA/IC0xIDogMTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3NjX3Nhdyh2YWx1ZSlcclxue1xyXG5cdHJldHVybiAodmFsdWUgJSAxKSAtIDAuNTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3NjX3RyaSh2YWx1ZSlcclxue1xyXG5cdHZhciB2MiA9ICh2YWx1ZSAlIDEpICogNDtcclxuXHRyZXR1cm4gdjIgPCAyID8gdjIgLSAxIDogMyAtIHYyO1xyXG59XHJcblxyXG4vLyBBcnJheSBvZiBvc2NpbGxhdG9yIGZ1bmN0aW9uc1xyXG52YXIgb3NjaWxsYXRvcnMgPVxyXG5bXHJcblx0b3NjX3NpbixcclxuXHRvc2Nfc3F1YXJlLFxyXG5cdG9zY19zYXcsXHJcblx0b3NjX3RyaVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0bm90ZWZyZXEobilcclxue1xyXG5cdHJldHVybiAwLjAwMzkwNjI1ICogX21hdGgucG93KDEuMDU5NDYzMDk0LCBuIC0gMTI4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCdWZmZXIoc2FtcGxlcykge1xyXG4gICByZXR1cm4ge1xyXG5cdFx0bGVmdDogbmV3IEZsb2F0MzJBcnJheShzYW1wbGVzKSxcclxuXHRcdHJpZ2h0OiBuZXcgRmxvYXQzMkFycmF5KHNhbXBsZXMpXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlEZWxheShjaG5CdWYsIHdhdmVTYW1wbGVzLCBpbnN0ciwgcm93TGVuKSB7XHJcblx0dmFyIHAxID0gKGluc3RyLmZ4X2RlbGF5X3RpbWUgKiByb3dMZW4pID4+IDE7XHJcblx0dmFyIHQxID0gaW5zdHIuZnhfZGVsYXlfYW10IC8gMjU1O1xyXG5cclxuXHR2YXIgbjEgPSAwO1xyXG5cdHdoaWxlKG4xIDwgd2F2ZVNhbXBsZXMgLSBwMSkge1xyXG5cdFx0dmFyIGIxID0gbjE7XHJcblx0XHR2YXIgbCA9IChuMSArIHAxKTtcclxuXHRcdGNobkJ1Zi5sZWZ0W2xdICs9IGNobkJ1Zi5yaWdodFtiMV0gKiB0MTtcclxuXHRcdGNobkJ1Zi5yaWdodFtsXSArPSBjaG5CdWYubGVmdFtiMV0gKiB0MTtcclxuXHRcdG4xKys7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0QXVkaW9CdWZmZXIoY3R4LCBtaXhCdWYpIHtcclxuXHR2YXIgYnVmZmVyID0gY3R4LmNyZWF0ZUJ1ZmZlcigyLCBtaXhCdWYubGVmdC5sZW5ndGgsIFdBVkVfU1BTKTsgLy8gQ3JlYXRlIE1vbm8gU291cmNlIEJ1ZmZlciBmcm9tIFJhdyBCaW5hcnlcclxuXHRidWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCkuc2V0KG1peEJ1Zi5sZWZ0KTtcclxuXHRidWZmZXIuZ2V0Q2hhbm5lbERhdGEoMSkuc2V0KG1peEJ1Zi5yaWdodCk7XHJcblx0cmV0dXJuIGJ1ZmZlcjtcclxufVxyXG5cclxudmFyIFNvdW5kR2VuZXJhdG9yID0gZnVuY3Rpb24oY3R4LCBpbnN0ciwgcm93TGVuKSB7XHJcblx0dGhpcy5jdHggPSBjdHg7XHJcblx0dGhpcy5pbnN0ciA9IGluc3RyO1xyXG5cdHRoaXMucm93TGVuID0gcm93TGVuIHx8IDU2MDU7XHJcblxyXG5cdHRoaXMub3NjX2xmbyA9IG9zY2lsbGF0b3JzW2luc3RyLmxmb193YXZlZm9ybV07XHJcblx0dGhpcy5vc2MxID0gb3NjaWxsYXRvcnNbaW5zdHIub3NjMV93YXZlZm9ybV07XHJcblx0dGhpcy5vc2MyID0gb3NjaWxsYXRvcnNbaW5zdHIub3NjMl93YXZlZm9ybV07XHJcblx0dGhpcy5hdHRhY2sgPSBpbnN0ci5lbnZfYXR0YWNrO1xyXG5cdHRoaXMuc3VzdGFpbiA9IGluc3RyLmVudl9zdXN0YWluO1xyXG5cdHRoaXMucmVsZWFzZSA9IGluc3RyLmVudl9yZWxlYXNlO1xyXG5cdHRoaXMucGFuRnJlcSA9IF9tYXRoLnBvdygyLCBpbnN0ci5meF9wYW5fZnJlcSAtIDgpIC8gdGhpcy5yb3dMZW47XHJcblx0dGhpcy5sZm9GcmVxID0gX21hdGgucG93KDIsIGluc3RyLmxmb19mcmVxIC0gOCkgLyB0aGlzLnJvd0xlbjtcclxufTtcclxuXHJcblNvdW5kR2VuZXJhdG9yLnByb3RvdHlwZS5fZ2VuU291bmQgPSBmdW5jdGlvbihuLCBjaG5CdWYsIGN1cnJlbnRwb3MpIHtcclxuXHR2YXIgYzEgPSAwO1xyXG5cdHZhciBjMiA9IDA7XHJcblxyXG5cdC8vIFByZWNhbGN1bGF0ZSBmcmVxdWVuY3Vlc1xyXG5cdHZhciBvMXQgPSBnZXRub3RlZnJlcShuICsgKHRoaXMuaW5zdHIub3NjMV9vY3QgLSA4KSAqIDEyICsgdGhpcy5pbnN0ci5vc2MxX2RldCkgKiAoMSArIDAuMDAwOCAqIHRoaXMuaW5zdHIub3NjMV9kZXR1bmUpO1xyXG5cdHZhciBvMnQgPSBnZXRub3RlZnJlcShuICsgKHRoaXMuaW5zdHIub3NjMl9vY3QgLSA4KSAqIDEyICsgdGhpcy5pbnN0ci5vc2MyX2RldCkgKiAoMSArIDAuMDAwOCAqIHRoaXMuaW5zdHIub3NjMl9kZXR1bmUpO1xyXG5cclxuXHQvLyBTdGF0ZSB2YXJpYWJsZSBpbml0XHJcblx0dmFyIHEgPSB0aGlzLmluc3RyLmZ4X3Jlc29uYW5jZSAvIDI1NTtcclxuXHR2YXIgbG93ID0gMDtcclxuXHR2YXIgYmFuZCA9IDA7XHJcblxyXG5cdHZhciBjaG5idWZMZW5ndGggPSBjaG5CdWYubGVmdC5sZW5ndGg7XHJcblx0dmFyIG51bVNhbXBsZXMgPSB0aGlzLmF0dGFjayArIHRoaXMuc3VzdGFpbiArIHRoaXMucmVsZWFzZSAtIDE7XHJcblx0XHJcblx0Zm9yICh2YXIgaiA9IG51bVNhbXBsZXM7IGogPj0gMDsgLS1qKSB7XHJcblx0XHR2YXIgayA9IGogKyBjdXJyZW50cG9zO1xyXG5cclxuXHRcdC8vIExGT1xyXG5cdFx0dmFyIGxmb3IgPSB0aGlzLm9zY19sZm8oayAqIHRoaXMubGZvRnJlcSkgKiB0aGlzLmluc3RyLmxmb19hbXQgLyA1MTIgKyAwLjU7XHJcblxyXG5cdFx0Ly8gRW52ZWxvcGVcclxuXHRcdHZhciBlID0gMTtcclxuXHRcdGlmIChqIDwgdGhpcy5hdHRhY2spIHtcclxuXHRcdFx0ZSA9IGogLyB0aGlzLmF0dGFjaztcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGogPj0gdGhpcy5hdHRhY2sgKyB0aGlzLnN1c3RhaW4pIHtcclxuXHRcdFx0ZSAtPSAoaiAtIHRoaXMuYXR0YWNrIC0gdGhpcy5zdXN0YWluKSAvIHRoaXMucmVsZWFzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBPc2NpbGxhdG9yIDFcclxuXHRcdHZhciB0ID0gbzF0O1xyXG5cdFx0aWYgKHRoaXMuaW5zdHIubGZvX29zYzFfZnJlcSkge1xyXG5cdFx0XHR0ICs9IGxmb3I7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5pbnN0ci5vc2MxX3hlbnYpIHtcclxuXHRcdFx0dCAqPSBlICogZSBcclxuXHRcdH1cclxuXHRcdGMxICs9IHQ7XHJcblx0XHR2YXIgcnNhbXBsZSA9IHRoaXMub3NjMShjMSkgKiB0aGlzLmluc3RyLm9zYzFfdm9sO1xyXG5cclxuXHRcdC8vIE9zY2lsbGF0b3IgMlxyXG5cdFx0dCA9IG8ydDtcclxuXHRcdGlmICh0aGlzLmluc3RyLm9zYzJfeGVudikge1xyXG5cdFx0XHR0ICo9IGUgKiBlO1xyXG5cdFx0fTtcclxuXHRcdGMyICs9IHQ7XHJcblx0XHRyc2FtcGxlICs9IHRoaXMub3NjMihjMikgKiB0aGlzLmluc3RyLm9zYzJfdm9sO1xyXG5cclxuXHRcdC8vIE5vaXNlIG9zY2lsbGF0b3JcclxuXHRcdGlmICh0aGlzLmluc3RyLm5vaXNlX2ZhZGVyKSB7XHJcblx0XHRcdHJzYW1wbGUgKz0gKDIqX21hdGgucmFuZG9tKCktMSkgKiB0aGlzLmluc3RyLm5vaXNlX2ZhZGVyICogZTtcclxuXHRcdH1cclxuXHJcblx0XHRyc2FtcGxlICo9IGUgLyAyNTU7XHJcblxyXG5cdFx0Ly8gU3RhdGUgdmFyaWFibGUgZmlsdGVyXHJcblx0XHR2YXIgZiA9IHRoaXMuaW5zdHIuZnhfZnJlcTtcclxuXHRcdGlmICh0aGlzLmluc3RyLmxmb19meF9mcmVxKSB7XHJcblx0XHRcdGYgKj0gbGZvcjtcclxuXHRcdH1cclxuXHRcdGYgPSAxLjUgKiBfbWF0aC5zaW4oZiAqIDMuMTQxNTkyIC8gV0FWRV9TUFMpO1xyXG5cdFx0bG93ICs9IGYgKiBiYW5kO1xyXG5cdFx0dmFyIGhpZ2ggPSBxICogKHJzYW1wbGUgLSBiYW5kKSAtIGxvdztcclxuXHRcdGJhbmQgKz0gZiAqIGhpZ2g7XHJcblx0XHRzd2l0Y2ggKHRoaXMuaW5zdHIuZnhfZmlsdGVyKSB7XHJcblx0XHRcdGNhc2UgMTogLy8gSGlwYXNzXHJcblx0XHRcdFx0cnNhbXBsZSA9IGhpZ2g7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMjogLy8gTG9wYXNzXHJcblx0XHRcdFx0cnNhbXBsZSA9IGxvdztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAzOiAvLyBCYW5kcGFzc1xyXG5cdFx0XHRcdHJzYW1wbGUgPSBiYW5kO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQ6IC8vIE5vdGNoXHJcblx0XHRcdFx0cnNhbXBsZSA9IGxvdyArIGhpZ2g7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gUGFubmluZyAmIG1hc3RlciB2b2x1bWVcclxuXHRcdHQgPSBvc2Nfc2luKGsgKiB0aGlzLnBhbkZyZXEpICogdGhpcy5pbnN0ci5meF9wYW5fYW10IC8gNTEyICsgMC41O1xyXG5cdFx0cnNhbXBsZSAqPSAwLjAwNDc2ICogdGhpcy5pbnN0ci5lbnZfbWFzdGVyOyAvLyAzOSAvIDgxOTIgPSAwLjAwNDc2XHJcblxyXG5cdFx0Ly8gQWRkIHRvIDE2LWJpdCBjaGFubmVsIGJ1ZmZlclxyXG5cdFx0Ly8gayA9IGsgKiAyO1xyXG5cdFx0aWYgKGsgPCBjaG5idWZMZW5ndGgpIHtcclxuXHRcdFx0Y2huQnVmLmxlZnRba10gKz0gcnNhbXBsZSAqICgxLXQpIDtcclxuXHRcdFx0Y2huQnVmLnJpZ2h0W2tdICs9IHJzYW1wbGUgKiB0O1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblNvdW5kR2VuZXJhdG9yLnByb3RvdHlwZS5fY3JlYXRlQXVkaW9CdWZmZXIgPSBmdW5jdGlvbihuLCBjYWxsQmFjaykge1xyXG5cdHZhciBidWZmZXJTaXplID0gKHRoaXMuYXR0YWNrICsgdGhpcy5zdXN0YWluICsgdGhpcy5yZWxlYXNlIC0gMSkgKyAoMzIgKiB0aGlzLnJvd0xlbik7XHJcblx0dmFyIGJ1ZmZlciA9IGdlbmVyYXRlQnVmZmVyKGJ1ZmZlclNpemUpO1xyXG5cdHRoaXMuX2dlblNvdW5kKG4sIGJ1ZmZlciwgMCk7XHJcblx0YXBwbHlEZWxheShidWZmZXIsIGJ1ZmZlclNpemUsIHRoaXMuaW5zdHIsIHRoaXMucm93TGVuKTtcclxuXHJcblx0Y2FsbEJhY2soZ2V0QXVkaW9CdWZmZXIodGhpcy5jdHgsIGJ1ZmZlcikpO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxudmFyIE11c2ljR2VuZXJhdG9yID0gZnVuY3Rpb24oY3R4LCBzb25nKSB7XHJcblx0dGhpcy5jdHggPSBjdHg7XHJcblx0dGhpcy5zb25nID0gc29uZztcclxuXHQvLyBXYXZlIGRhdGEgY29uZmlndXJhdGlvblxyXG5cdHRoaXMud2F2ZVNpemUgPSBXQVZFX1NQUyAqIHNvbmcuc29uZ0xlbjsgLy8gVG90YWwgc29uZyBzaXplIChpbiBzYW1wbGVzKVxyXG59O1xyXG5cclxuTXVzaWNHZW5lcmF0b3IucHJvdG90eXBlLl9nZW5lcmF0ZVRyYWNrID0gZnVuY3Rpb24gKGluc3RyLCBtaXhCdWYsIGNhbGxCYWNrKSB7XHJcblx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdHZhciBjaG5CdWYgPSBnZW5lcmF0ZUJ1ZmZlcih0aGlzLndhdmVTaXplKTtcclxuXHQvLyBQcmVsb2FkL3ByZWNhbGMgc29tZSBwcm9wZXJ0aWVzL2V4cHJlc3Npb25zIChmb3IgaW1wcm92ZWQgcGVyZm9ybWFuY2UpXHJcblx0dmFyIHdhdmVTYW1wbGVzID0gc2VsZi53YXZlU2l6ZSxcclxuXHRcdHJvd0xlbiA9IHNlbGYuc29uZy5yb3dMZW4sXHJcblx0XHRlbmRQYXR0ZXJuID0gc2VsZi5zb25nLmVuZFBhdHRlcm4sXHJcblx0XHRzb3VuZEdlbiA9IG5ldyBTb3VuZEdlbmVyYXRvcihzZWxmLmN0eCwgaW5zdHIsIHJvd0xlbik7XHJcblxyXG5cdHZhciBjdXJyZW50cG9zID0gMDtcclxuXHR2YXIgcCA9IDA7XHJcblx0dmFyIHJvdyA9IDA7XHJcblx0dmFyIHJlY29yZFNvdW5kcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGJlZ2lubmluZyA9IERhdGUubm93KCk7XHJcblx0XHR3aGlsZSAodHJ1ZSkge1xyXG5cdFx0XHRpZiAocm93ID09PSAzMikge1xyXG5cdFx0XHRcdHJvdyA9IDA7XHJcblx0XHRcdFx0cCArPSAxO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwID09PSBlbmRQYXR0ZXJuIC0gMSkge1xyXG5cdFx0XHRcdHJldHVybiBmaW5hbGl6ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBjcCA9IGluc3RyLnBbcF07XHJcblx0XHRcdGlmIChjcCkge1xyXG5cdFx0XHRcdHZhciBuID0gaW5zdHIuY1tjcCAtIDFdLm5bcm93XTtcclxuXHRcdFx0XHRpZiAobikge1xyXG5cdFx0XHRcdFx0c291bmRHZW4uX2dlblNvdW5kKG4sIGNobkJ1ZiwgY3VycmVudHBvcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGN1cnJlbnRwb3MgKz0gcm93TGVuO1xyXG5cdFx0XHRyb3cgKz0gMTtcclxuXHRcdFx0aWYgKERhdGUubm93KCkgLSBiZWdpbm5pbmcgPiBNQVhfVElNRSkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQocmVjb3JkU291bmRzLCAwKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgZmluYWxpemUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGFwcGx5RGVsYXkoY2huQnVmLCB3YXZlU2FtcGxlcywgaW5zdHIsIHJvd0xlbik7XHJcblx0XHRmb3IgKHZhciBiMiA9IDA7IGIyIDwgd2F2ZVNhbXBsZXM7IGIyKyspIHtcclxuXHRcdFx0bWl4QnVmLmxlZnRbYjJdICs9IGNobkJ1Zi5sZWZ0W2IyXTtcclxuXHRcdH1cclxuXHRcdGZvciAodmFyIGIyID0gMDsgYjIgPCB3YXZlU2FtcGxlczsgYjIrKykge1xyXG5cdFx0XHRtaXhCdWYucmlnaHRbYjJdICs9IGNobkJ1Zi5yaWdodFtiMl07XHJcblx0XHR9XHJcblx0XHRjYWxsQmFjaygpO1xyXG5cdH07XHJcblxyXG5cdHJlY29yZFNvdW5kcygpO1xyXG59O1xyXG5cclxuTXVzaWNHZW5lcmF0b3IucHJvdG90eXBlLl9jcmVhdGVBdWRpb0J1ZmZlciA9IGZ1bmN0aW9uKGNhbGxCYWNrKSB7XHJcblx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdHZhciBtaXhCdWYgPSBnZW5lcmF0ZUJ1ZmZlcih0aGlzLndhdmVTaXplKTtcclxuXHR2YXIgdHJhY2sgPSAwO1xyXG5cclxuXHR2YXIgbmV4dFRyYWNrID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHJhY2sgPCBzZWxmLnNvbmcuc29uZ0RhdGEubGVuZ3RoKSB7XHJcblx0XHRcdHRyYWNrICs9IDE7XHJcblx0XHRcdHNlbGYuX2dlbmVyYXRlVHJhY2soc2VsZi5zb25nLnNvbmdEYXRhW3RyYWNrIC0gMV0sIG1peEJ1ZiwgbmV4dFRyYWNrKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjYWxsQmFjayhnZXRBdWRpb0J1ZmZlcihzZWxmLmN0eCwgbWl4QnVmKSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRuZXh0VHJhY2soKTtcclxufTtcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBQb3MsIENvbnRyb2xhYmxlLCBUcmlhbFN0YXRlIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgY29udHJvbCA9IChlY3MpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZWNzLnNlbGVjdChQb3MsIENvbnRyb2xhYmxlKVxyXG4gICAgY29uc3QgdHJpYWxzID0gZWNzLnNlbGVjdChUcmlhbFN0YXRlLCBDb250cm9sYWJsZSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZSA6IChkdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdHJpYWxzLml0ZXJhdGUoKGVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge2lzVXAsIGlzRG93bn0gPSBlbnRpdHkuZ2V0KENvbnRyb2xhYmxlKVxyXG4gICAgICAgICAgICAgICAgaWYoaXNVcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5nZXQoVHJpYWxTdGF0ZSkuaXNVcFByZXNzZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZ2V0KFRyaWFsU3RhdGUpLmlzRG93blByZXNzZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2VsZWN0ZWQuaXRlcmF0ZSgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7aXNVcCwgaXNEb3dufSA9IGVudGl0eS5nZXQoQ29udHJvbGFibGUpXHJcbiAgICAgICAgICAgICAgICBpZihpc1VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmdldChQb3MpLnktLVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmdldChQb3MpLnkrK1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3ID0gKGVjcywgY3R4KSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGVjcy5zZWxlY3QoUG9zKVxyXG4gXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICB1cGRhdGUgOiAoZHQpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuaXRlcmF0ZSgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgID0gZW50aXR5LmdldChQb3MpXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlPSBcIiMxMzRcIlxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHBvcy54LCBwb3MueSwgMTAsMTApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdHJpYWxEaXNwbGF5ID0gKGVjcywgY3R4KSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGVjcy5zZWxlY3QoVHJpYWxTdGF0ZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlIDogKGR0KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLml0ZXJhdGUoKGVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIWVudGl0eS5nZXQoVHJpYWxTdGF0ZSkuaXNVcFByZXNzZWQgJiYgIWVudGl0eS5nZXQoVHJpYWxTdGF0ZSkuaXNVcFByZXNzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXCJQcmVzcyBVcFwiLCAxMCwgNTApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZW50aXR5LmdldChUcmlhbFN0YXRlKS5pc0Rvd25QcmVzc2VkJiZlbnRpdHkuZ2V0KFRyaWFsU3RhdGUpLmlzVXBQcmVzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiR29vZCBEb2cgIVwiLCAxMCwgNTApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZW50aXR5LmdldChUcmlhbFN0YXRlKS5pc1VwUHJlc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlByZXNzIERPV05cIiwgMTAsIDUwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9