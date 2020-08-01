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
/*! exports provided: Pos, Controlable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos", function() { return Pos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controlable", function() { return Controlable; });
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

js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].register(_components_js__WEBPACK_IMPORTED_MODULE_3__["Pos"], _components_js__WEBPACK_IMPORTED_MODULE_3__["Controlable"])

js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].process(Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["draw"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["control"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]))

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
/*! exports provided: control, draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "control", function() { return control; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");


const control = (ecs) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"], _components__WEBPACK_IMPORTED_MODULE_0__["Controlable"])

    return {
        update : (dt) => {
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzMTNrLWVjcy9kaXN0L2Vjcy5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2F1ZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3NvbmFudF93cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeXN0ZW1zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxrQkFBa0IscUJBQXFCLHNEQUFzRCxvQkFBb0IsV0FBVyx5REFBeUQsU0FBUyxpREFBaUQsNEJBQTRCLGtCQUFrQixFQUFFLFNBQVMsZUFBZSw4REFBOEQsaUJBQWlCLDJCQUEyQix1Q0FBdUMsSUFBSSxtQkFBbUIsc0JBQXNCLDBEQUEwRCxVQUFVLCtCQUErQix1Q0FBdUMsSUFBSSxtQkFBbUIsc0JBQXNCLDZCQUE2Qix1RUFBdUUsVUFBVSw2QkFBNkIsOEJBQThCLDZCQUE2Qiw2QkFBNkIsOEJBQThCLGFBQWEsbUJBQW1CLDZEQUE2RCxXQUFXLGdDQUFnQyxzQkFBc0IsbUJBQW1CLHdCQUF3QixRQUFRLG9CQUFvQix5Q0FBeUMsZUFBZSx3Q0FBd0Msb0NBQW9DLDZGQUE2RixnQ0FBZ0Msb0JBQW9CLEVBQUUsc0JBQXNCLCtCQUErQiwwREFBMEQsNkJBQTZCLG9CQUFvQix5QkFBeUIsMEVBQTBFLGdDQUFnQyxxQkFBcUIsa0hBQWtILDRDQUEwRCxnRUFBQyxvQkFBb0IsZ0NBQWdDLElBQUksbUJBQW1CLHNCQUFzQixvREFBb0QsVUFBVSxxQkFBcUIsZ0NBQWdDLEVBQUUsb0JBQW9CLGdDQUFnQyxJQUFJLG1CQUFtQixzQkFBc0IsaUJBQWlCLEVBQUUsb0JBQW9CLGVBQWUsbURBQW1ELG1CQUFtQixpQkFBaUIsWUFBWSxtQkFBbUIsZ0NBQWdDLElBQUksbUJBQW1CLFFBQVEsc0JBQXNCLFFBQVEsRUFBRSxZQUFZLFdBQVcsaUNBQWlDLGVBQWUsbUJBQW1CLG9CQUFvQixTQUFTLDZCQUE2QixVQUFVLHdDQUF3QyxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1cEY7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDVzs7QUFFcEI7O0FBRXVCO0FBQ047OztBQUc3QztBQUNBO0FBQ0E7O0FBRUEsaURBQUcsVUFBVSxrREFBRyxFQUFFLDBEQUFXOztBQUU3QixpREFBRyxTQUFTLHdEQUFJLENBQUMsaURBQUcsUUFBUSwyREFBTyxDQUFDLGlEQUFHOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7QUFHRCxpREFBRztBQUNIO0FBQ0E7QUFDQSxRQUFRLGtEQUFHO0FBQ1gsUUFBUSwwREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlEQUFHOztBQUVMO0FBQ0E7O0FBRUEsTTs7Ozs7Ozs7Ozs7O0FDeENBO0FBQUE7QUFBQTtBQUE0RDs7QUFFNUQ7O0FBRUE7QUFDQTtBQUNBLElBQUksaUZBQXNCO0FBQzFCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EscUJBQXFCO0FBQ3JCLGtCQUFrQjs7QUFFbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLFFBQVE7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2UkE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7O0FBRXhDO0FBQ1AsZ0NBQWdDLCtDQUFHLEVBQUUsdURBQVc7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixhQUFhLGNBQWMsdURBQVc7QUFDN0Q7QUFDQSwrQkFBK0IsK0NBQUc7QUFDbEM7QUFDQTtBQUNBLCtCQUErQiwrQ0FBRztBQUNsQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7OztBQUdPO0FBQ1AsZ0NBQWdDLCtDQUFHOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLCtDQUFHO0FBQzNDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEMiLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgdD1bXSxuPVtdLHI9e30sZT1cIl9zaWduXCIsbz1cIl9tYXNrXCI7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmKGU9U3ltYm9sKGUpLG89U3ltYm9sKG8pKTt2YXIgaT1mdW5jdGlvbih0LG4pe3ZhciByPW5bdF07aWYoIXIpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNvbXBvbmVudCBpcyBub3QgcmVnaXN0ZXJlZFwiKTtyZXR1cm4gcn0scz1pLmJpbmQobnVsbCxlKSxhPWkuYmluZChudWxsLG8pLGM9ZnVuY3Rpb24obil7bi5pZCYmdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0Lm1hdGNoKG4pfSl9LGg9MSxmPXt9LHU9ZnVuY3Rpb24odCl7dGhpcy5pZD10fHwoaCsrKS50b1N0cmluZygzNiksdGhpcy5jb21wb25lbnRzPU9iamVjdC5hc3NpZ24oe30sZiksdGhpcy5tYXNrPTB9O3UucHJvdG90eXBlLmFkZD1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLG49W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspbltyXT1hcmd1bWVudHNbcl07bi5mb3JFYWNoKGZ1bmN0aW9uKG4pe3QuY29tcG9uZW50c1tzKG4uY29uc3RydWN0b3IpXT1uLHQubWFza3w9YShuLmNvbnN0cnVjdG9yKX0pLGModGhpcyl9LHUucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLG49W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspbltyXT1hcmd1bWVudHNbcl07bi5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciByPXMobiksZT10LmNvbXBvbmVudHNbcl07ZSYmKGUuZGVzdHJ1Y3RvciYmZS5kZXN0cnVjdG9yKCksZGVsZXRlIHQuY29tcG9uZW50c1tyXSx0Lm1hc2smPX5hKG4pKX0pLGModGhpcyl9LHUucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gcyh0KWluIHRoaXMuY29tcG9uZW50c30sdS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNvbXBvbmVudHNbdFtlXV19LHUucHJvdG90eXBlLmVqZWN0PWZ1bmN0aW9uKCl7IWZ1bmN0aW9uKG4pe3ZhciBlPW4uY29tcG9uZW50cztmb3IodmFyIG8gaW4gZSlpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSl7dmFyIGk9ZVtvXTtpJiZpLmRlc3RydWN0b3ImJmkuZGVzdHJ1Y3RvcigpfXQuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZW1vdmUobil9KSxkZWxldGUgcltuLmlkXSxuLmlkPTB9KHRoaXMpfTt2YXIgcD1mdW5jdGlvbih0LG4pe3RoaXMuZW50aXR5PXQsdGhpcy5wcmV2PW51bGwsdGhpcy5uZXh0PW59LGw9ZnVuY3Rpb24odCl7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgc2VsZWN0b3JcIik7Zm9yKHZhciBuIGluIHRoaXMubWFzaz10LHRoaXMubWFwPXt9LHRoaXMubGlzdD1udWxsLHRoaXMubGVuZ3RoPTAscilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixuKSYmdGhpcy5tYXRjaChyW25dKX07bC5wcm90b3R5cGUuaXRlcmF0ZT1mdW5jdGlvbih0KXtmb3IodmFyIG49dGhpcy5saXN0O247KXQobi5lbnRpdHkpLG49bi5uZXh0fSxsLnByb3RvdHlwZS5tYXRjaD1mdW5jdGlvbih0KXsodGhpcy5tYXNrJnQubWFzayk9PT10aGlzLm1hc2s/dGhpcy5hZGQodCk6dGhpcy5yZW1vdmUodCl9LGwucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXtpZighdGhpcy5tYXBbdC5pZF0pe3ZhciBuPW5ldyBwKHQsdGhpcy5saXN0KTt0aGlzLmxpc3QmJih0aGlzLmxpc3QucHJldj1uKSx0aGlzLmxpc3Q9bix0aGlzLm1hcFt0LmlkXT1uLHRoaXMubGVuZ3RoKyt9fSxsLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5tYXBbdC5pZF07biYmKG4ucHJldj9uLnByZXYubmV4dD1uLm5leHQ6dGhpcy5saXN0PW4ubmV4dCxuLm5leHQmJihuLm5leHQucHJldj1uLnByZXYpLGRlbGV0ZSB0aGlzLm1hcFt0LmlkXSx0aGlzLmxlbmd0aC0tKX07dmFyIG09MCx2PXBlcmZvcm1hbmNlfHxEYXRlLGQ9di5ub3cuYmluZCh2KTtleHBvcnQgZGVmYXVsdHtyZWdpc3RlcjpmdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxuPWFyZ3VtZW50cy5sZW5ndGg7bi0tOyl0W25dPWFyZ3VtZW50c1tuXTt0LmZvckVhY2goZnVuY3Rpb24odCl7aWYobT4zMSl0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnRzIGxpbWl0IHJlYWNoZWRcIik7aWYoIXRbZV0pe3ZhciBuPW0udG9TdHJpbmcoMzYpO2Zbbl09bnVsbCx0W2VdPW4sdFtvXT0xPDxtLG0rK319KX0scHJvY2VzczpmdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxyPWFyZ3VtZW50cy5sZW5ndGg7ci0tOyl0W3JdPWFyZ3VtZW50c1tyXTt0LmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIG4ucHVzaCh0KX0pfSxjcmVhdGU6ZnVuY3Rpb24odCl7dmFyIG49bmV3IHUodCk7aWYocltuLmlkXSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgSUQgYWxyZWFkeSBleGlzdFwiKTtyZXR1cm4gcltuLmlkXT1uLG59LGdldDpmdW5jdGlvbih0KXtyZXR1cm4gclt0XX0sc2VsZWN0OmZ1bmN0aW9uKCl7Zm9yKHZhciBuPVtdLHI9YXJndW1lbnRzLmxlbmd0aDtyLS07KW5bcl09YXJndW1lbnRzW3JdO3ZhciBlPTA7bi5mb3JFYWNoKGZ1bmN0aW9uKHQpe2V8PWEodCl9KTtmb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKylpZih0W29dLm1hc2s9PT1lKXJldHVybiB0W29dO3ZhciBpPW5ldyBsKGUpO3JldHVybiB0LnB1c2goaSksaX0sdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciByPXt9O3JldHVybiBuLmZvckVhY2goZnVuY3Rpb24obil7dmFyIGU9ZCgpO24udXBkYXRlKHQpLHJbbi5jb25zdHJ1Y3Rvci5uYW1lXT1kKCktZX0pLHJ9fTtcbiIsImV4cG9ydCBjbGFzcyBQb3Mge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5IFxyXG4gICAgICAgIHRoaXMueiA9IHpcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGFibGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pc1VwID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVXAgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRG93biA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1VwID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtTb3VuZH0gZnJvbSBcIi4vbGlicy9hdWRpby5qc1wiXHJcbmltcG9ydCBtZWxvZGllIGZyb20gXCIuL2Fzc2V0cy9hdWRpby9tZWxvMS5qc29uXCI7XHJcblxyXG5pbXBvcnQgZWNzIGZyb20gXCJqczEzay1lY3NcIjtcclxuXHJcbmltcG9ydCB7IFBvcywgQ29udHJvbGFibGUgfSBmcm9tIFwiLi9jb21wb25lbnRzLmpzXCI7XHJcbmltcG9ydCB7IGNvbnRyb2wsIGRyYXcgfSBmcm9tIFwiLi9zeXN0ZW1zLmpzXCI7XHJcblxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpKVxyXG5jb25zdCBjdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIilcclxuY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dChcIjJkXCIpIFxyXG5cclxuZWNzLnJlZ2lzdGVyKFBvcywgQ29udHJvbGFibGUpXHJcblxyXG5lY3MucHJvY2VzcyhkcmF3KGVjcywgY3R4KSwgY29udHJvbChlY3MpKVxyXG5cclxuLyogc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbWVsb2RpZUN1cnJ5ID0gYXdhaXQgU291bmQobWVsb2RpZSlcclxuICAgY29uc3Qgc291bmRIYW5kbGUgPSBtZWxvZGllQ3VycnkoZmFsc2UpXHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc291bmRIYW5kbGUuc3RvcCgpXHJcbiAgfSwgNTAwKVxyXG59KSgpKi9cclxuXHJcblxyXG5lY3NcclxuICAuY3JlYXRlKClcclxuICAuYWRkKFxyXG4gICAgbmV3IFBvcyhjdi53aWR0aCAvIDIsIGN2LmhlaWdodCAvIDIsIDApLFxyXG4gICAgbmV3IENvbnRyb2xhYmxlKCksXHJcbiAgKVxyXG5jb25zdCBsb29wID0gKCkgPT4ge1xyXG4gIGN2LndpZHRoICs9IDBcclxuICBlY3MudXBkYXRlKClcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXHJcbn1cclxuXHJcbmxvb3AoKSIsImltcG9ydCB7IHNvbmFudHhyX2dlbmVyYXRlX3NvbmcgfSBmcm9tIFwiLi9zb25hbnRfd3JhcHBlci5qc1wiXHJcblxyXG52YXIgYXVkaW9fY3R4ID0gbmV3ICh3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0fHx3aW5kb3cuQXVkaW9Db250ZXh0KSgpXHJcblxyXG5jb25zdCBtYWtlQXN5bmMgPSBhc3luYyAocmF3U291bmQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIHNvbmFudHhyX2dlbmVyYXRlX3NvbmcoYXVkaW9fY3R4LCByYXdTb3VuZCwgYnVmZmVyID0+IHtcclxuICAgICAgcmVzb2x2ZShidWZmZXIpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTb3VuZCA9IGFzeW5jIChyYXdTb3VuZCkgPT4ge1xyXG4gICAgXHJcbiAgY29uc3QgYnVmZmVyID0gYXdhaXQgbWFrZUFzeW5jKHJhd1NvdW5kKVxyXG4gIGNvbnN0IHNvdXJjZSA9IGF1ZGlvX2N0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxyXG4gIHNvdXJjZS5idWZmZXIgPSBidWZmZXJcclxuICBzb3VyY2UuY29ubmVjdChhdWRpb19jdHguZGVzdGluYXRpb24pXHJcblxyXG4gIHJldHVybiAobG9vcCkgPT4ge1xyXG4gICAgc291cmNlLmxvb3AgPSBsb29wXHJcbiAgICBzb3VyY2Uuc3RhcnQoKVxyXG4gICAgcmV0dXJuIHNvdXJjZVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc29uYW50eHJfZ2VuZXJhdGVfc29uZyA9IGZ1bmN0aW9uKGF1ZGlvX2N0eCwgc29uZ19kYXRhLCBjYWxsYmFjaykge1xyXG5cdHZhciBtdXNpY19nZW5lcmF0b3IgPSBuZXcgTXVzaWNHZW5lcmF0b3IoYXVkaW9fY3R4LCBzb25nX2RhdGEpO1xyXG5cdG11c2ljX2dlbmVyYXRvci5fY3JlYXRlQXVkaW9CdWZmZXIoY2FsbGJhY2spO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvbmFudHhyX2dlbmVyYXRlX3NvdW5kID0gZnVuY3Rpb24oYXVkaW9fY3R4LCBpbnN0cnVtZW50LCBub3RlLCBjYWxsYmFjaykge1xyXG5cdHZhciBzb3VuZF9nZW5lcmF0b3IgPSBuZXcgU291bmRHZW5lcmF0b3IoYXVkaW9fY3R4LCBpbnN0cnVtZW50KTtcclxuXHRzb3VuZF9nZW5lcmF0b3IuX2NyZWF0ZUF1ZGlvQnVmZmVyKG5vdGUsIGNhbGxiYWNrKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBfbWF0aCA9IE1hdGhcclxudmFyIFdBVkVfU1BTID0gNDQxMDA7XHRcdFx0XHRcdC8vIFNhbXBsZXMgcGVyIHNlY29uZFxyXG52YXIgTUFYX1RJTUUgPSAzMzsgLy8gbWF4aW11bSB0aW1lLCBpbiBtaWxsaXMsIHRoYXQgdGhlIGdlbmVyYXRvciBjYW4gdXNlIGNvbnNlY3V0aXZlbHlcclxuXHJcbnZhciBhdWRpb0N0eCA9IG51bGw7XHJcblxyXG4vLyBPc2NpbGxhdG9yc1xyXG5mdW5jdGlvbiBvc2Nfc2luKHZhbHVlKVxyXG57XHJcblx0cmV0dXJuIF9tYXRoLnNpbih2YWx1ZSAqIDYuMjgzMTg0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3NjX3NxdWFyZSh2YWx1ZSlcclxue1xyXG5cdHJldHVybiBvc2Nfc2luKHZhbHVlKSA8IDAgPyAtMSA6IDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9zY19zYXcodmFsdWUpXHJcbntcclxuXHRyZXR1cm4gKHZhbHVlICUgMSkgLSAwLjU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9zY190cmkodmFsdWUpXHJcbntcclxuXHR2YXIgdjIgPSAodmFsdWUgJSAxKSAqIDQ7XHJcblx0cmV0dXJuIHYyIDwgMiA/IHYyIC0gMSA6IDMgLSB2MjtcclxufVxyXG5cclxuLy8gQXJyYXkgb2Ygb3NjaWxsYXRvciBmdW5jdGlvbnNcclxudmFyIG9zY2lsbGF0b3JzID1cclxuW1xyXG5cdG9zY19zaW4sXHJcblx0b3NjX3NxdWFyZSxcclxuXHRvc2Nfc2F3LFxyXG5cdG9zY190cmlcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldG5vdGVmcmVxKG4pXHJcbntcclxuXHRyZXR1cm4gMC4wMDM5MDYyNSAqIF9tYXRoLnBvdygxLjA1OTQ2MzA5NCwgbiAtIDEyOCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnVmZmVyKHNhbXBsZXMpIHtcclxuICAgcmV0dXJuIHtcclxuXHRcdGxlZnQ6IG5ldyBGbG9hdDMyQXJyYXkoc2FtcGxlcyksXHJcblx0XHRyaWdodDogbmV3IEZsb2F0MzJBcnJheShzYW1wbGVzKVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5RGVsYXkoY2huQnVmLCB3YXZlU2FtcGxlcywgaW5zdHIsIHJvd0xlbikge1xyXG5cdHZhciBwMSA9IChpbnN0ci5meF9kZWxheV90aW1lICogcm93TGVuKSA+PiAxO1xyXG5cdHZhciB0MSA9IGluc3RyLmZ4X2RlbGF5X2FtdCAvIDI1NTtcclxuXHJcblx0dmFyIG4xID0gMDtcclxuXHR3aGlsZShuMSA8IHdhdmVTYW1wbGVzIC0gcDEpIHtcclxuXHRcdHZhciBiMSA9IG4xO1xyXG5cdFx0dmFyIGwgPSAobjEgKyBwMSk7XHJcblx0XHRjaG5CdWYubGVmdFtsXSArPSBjaG5CdWYucmlnaHRbYjFdICogdDE7XHJcblx0XHRjaG5CdWYucmlnaHRbbF0gKz0gY2huQnVmLmxlZnRbYjFdICogdDE7XHJcblx0XHRuMSsrO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEF1ZGlvQnVmZmVyKGN0eCwgbWl4QnVmKSB7XHJcblx0dmFyIGJ1ZmZlciA9IGN0eC5jcmVhdGVCdWZmZXIoMiwgbWl4QnVmLmxlZnQubGVuZ3RoLCBXQVZFX1NQUyk7IC8vIENyZWF0ZSBNb25vIFNvdXJjZSBCdWZmZXIgZnJvbSBSYXcgQmluYXJ5XHJcblx0YnVmZmVyLmdldENoYW5uZWxEYXRhKDApLnNldChtaXhCdWYubGVmdCk7XHJcblx0YnVmZmVyLmdldENoYW5uZWxEYXRhKDEpLnNldChtaXhCdWYucmlnaHQpO1xyXG5cdHJldHVybiBidWZmZXI7XHJcbn1cclxuXHJcbnZhciBTb3VuZEdlbmVyYXRvciA9IGZ1bmN0aW9uKGN0eCwgaW5zdHIsIHJvd0xlbikge1xyXG5cdHRoaXMuY3R4ID0gY3R4O1xyXG5cdHRoaXMuaW5zdHIgPSBpbnN0cjtcclxuXHR0aGlzLnJvd0xlbiA9IHJvd0xlbiB8fCA1NjA1O1xyXG5cclxuXHR0aGlzLm9zY19sZm8gPSBvc2NpbGxhdG9yc1tpbnN0ci5sZm9fd2F2ZWZvcm1dO1xyXG5cdHRoaXMub3NjMSA9IG9zY2lsbGF0b3JzW2luc3RyLm9zYzFfd2F2ZWZvcm1dO1xyXG5cdHRoaXMub3NjMiA9IG9zY2lsbGF0b3JzW2luc3RyLm9zYzJfd2F2ZWZvcm1dO1xyXG5cdHRoaXMuYXR0YWNrID0gaW5zdHIuZW52X2F0dGFjaztcclxuXHR0aGlzLnN1c3RhaW4gPSBpbnN0ci5lbnZfc3VzdGFpbjtcclxuXHR0aGlzLnJlbGVhc2UgPSBpbnN0ci5lbnZfcmVsZWFzZTtcclxuXHR0aGlzLnBhbkZyZXEgPSBfbWF0aC5wb3coMiwgaW5zdHIuZnhfcGFuX2ZyZXEgLSA4KSAvIHRoaXMucm93TGVuO1xyXG5cdHRoaXMubGZvRnJlcSA9IF9tYXRoLnBvdygyLCBpbnN0ci5sZm9fZnJlcSAtIDgpIC8gdGhpcy5yb3dMZW47XHJcbn07XHJcblxyXG5Tb3VuZEdlbmVyYXRvci5wcm90b3R5cGUuX2dlblNvdW5kID0gZnVuY3Rpb24obiwgY2huQnVmLCBjdXJyZW50cG9zKSB7XHJcblx0dmFyIGMxID0gMDtcclxuXHR2YXIgYzIgPSAwO1xyXG5cclxuXHQvLyBQcmVjYWxjdWxhdGUgZnJlcXVlbmN1ZXNcclxuXHR2YXIgbzF0ID0gZ2V0bm90ZWZyZXEobiArICh0aGlzLmluc3RyLm9zYzFfb2N0IC0gOCkgKiAxMiArIHRoaXMuaW5zdHIub3NjMV9kZXQpICogKDEgKyAwLjAwMDggKiB0aGlzLmluc3RyLm9zYzFfZGV0dW5lKTtcclxuXHR2YXIgbzJ0ID0gZ2V0bm90ZWZyZXEobiArICh0aGlzLmluc3RyLm9zYzJfb2N0IC0gOCkgKiAxMiArIHRoaXMuaW5zdHIub3NjMl9kZXQpICogKDEgKyAwLjAwMDggKiB0aGlzLmluc3RyLm9zYzJfZGV0dW5lKTtcclxuXHJcblx0Ly8gU3RhdGUgdmFyaWFibGUgaW5pdFxyXG5cdHZhciBxID0gdGhpcy5pbnN0ci5meF9yZXNvbmFuY2UgLyAyNTU7XHJcblx0dmFyIGxvdyA9IDA7XHJcblx0dmFyIGJhbmQgPSAwO1xyXG5cclxuXHR2YXIgY2huYnVmTGVuZ3RoID0gY2huQnVmLmxlZnQubGVuZ3RoO1xyXG5cdHZhciBudW1TYW1wbGVzID0gdGhpcy5hdHRhY2sgKyB0aGlzLnN1c3RhaW4gKyB0aGlzLnJlbGVhc2UgLSAxO1xyXG5cdFxyXG5cdGZvciAodmFyIGogPSBudW1TYW1wbGVzOyBqID49IDA7IC0taikge1xyXG5cdFx0dmFyIGsgPSBqICsgY3VycmVudHBvcztcclxuXHJcblx0XHQvLyBMRk9cclxuXHRcdHZhciBsZm9yID0gdGhpcy5vc2NfbGZvKGsgKiB0aGlzLmxmb0ZyZXEpICogdGhpcy5pbnN0ci5sZm9fYW10IC8gNTEyICsgMC41O1xyXG5cclxuXHRcdC8vIEVudmVsb3BlXHJcblx0XHR2YXIgZSA9IDE7XHJcblx0XHRpZiAoaiA8IHRoaXMuYXR0YWNrKSB7XHJcblx0XHRcdGUgPSBqIC8gdGhpcy5hdHRhY2s7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChqID49IHRoaXMuYXR0YWNrICsgdGhpcy5zdXN0YWluKSB7XHJcblx0XHRcdGUgLT0gKGogLSB0aGlzLmF0dGFjayAtIHRoaXMuc3VzdGFpbikgLyB0aGlzLnJlbGVhc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gT3NjaWxsYXRvciAxXHJcblx0XHR2YXIgdCA9IG8xdDtcclxuXHRcdGlmICh0aGlzLmluc3RyLmxmb19vc2MxX2ZyZXEpIHtcclxuXHRcdFx0dCArPSBsZm9yO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuaW5zdHIub3NjMV94ZW52KSB7XHJcblx0XHRcdHQgKj0gZSAqIGUgXHJcblx0XHR9XHJcblx0XHRjMSArPSB0O1xyXG5cdFx0dmFyIHJzYW1wbGUgPSB0aGlzLm9zYzEoYzEpICogdGhpcy5pbnN0ci5vc2MxX3ZvbDtcclxuXHJcblx0XHQvLyBPc2NpbGxhdG9yIDJcclxuXHRcdHQgPSBvMnQ7XHJcblx0XHRpZiAodGhpcy5pbnN0ci5vc2MyX3hlbnYpIHtcclxuXHRcdFx0dCAqPSBlICogZTtcclxuXHRcdH07XHJcblx0XHRjMiArPSB0O1xyXG5cdFx0cnNhbXBsZSArPSB0aGlzLm9zYzIoYzIpICogdGhpcy5pbnN0ci5vc2MyX3ZvbDtcclxuXHJcblx0XHQvLyBOb2lzZSBvc2NpbGxhdG9yXHJcblx0XHRpZiAodGhpcy5pbnN0ci5ub2lzZV9mYWRlcikge1xyXG5cdFx0XHRyc2FtcGxlICs9ICgyKl9tYXRoLnJhbmRvbSgpLTEpICogdGhpcy5pbnN0ci5ub2lzZV9mYWRlciAqIGU7XHJcblx0XHR9XHJcblxyXG5cdFx0cnNhbXBsZSAqPSBlIC8gMjU1O1xyXG5cclxuXHRcdC8vIFN0YXRlIHZhcmlhYmxlIGZpbHRlclxyXG5cdFx0dmFyIGYgPSB0aGlzLmluc3RyLmZ4X2ZyZXE7XHJcblx0XHRpZiAodGhpcy5pbnN0ci5sZm9fZnhfZnJlcSkge1xyXG5cdFx0XHRmICo9IGxmb3I7XHJcblx0XHR9XHJcblx0XHRmID0gMS41ICogX21hdGguc2luKGYgKiAzLjE0MTU5MiAvIFdBVkVfU1BTKTtcclxuXHRcdGxvdyArPSBmICogYmFuZDtcclxuXHRcdHZhciBoaWdoID0gcSAqIChyc2FtcGxlIC0gYmFuZCkgLSBsb3c7XHJcblx0XHRiYW5kICs9IGYgKiBoaWdoO1xyXG5cdFx0c3dpdGNoICh0aGlzLmluc3RyLmZ4X2ZpbHRlcikge1xyXG5cdFx0XHRjYXNlIDE6IC8vIEhpcGFzc1xyXG5cdFx0XHRcdHJzYW1wbGUgPSBoaWdoO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI6IC8vIExvcGFzc1xyXG5cdFx0XHRcdHJzYW1wbGUgPSBsb3c7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMzogLy8gQmFuZHBhc3NcclxuXHRcdFx0XHRyc2FtcGxlID0gYmFuZDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0OiAvLyBOb3RjaFxyXG5cdFx0XHRcdHJzYW1wbGUgPSBsb3cgKyBoaWdoO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFBhbm5pbmcgJiBtYXN0ZXIgdm9sdW1lXHJcblx0XHR0ID0gb3NjX3NpbihrICogdGhpcy5wYW5GcmVxKSAqIHRoaXMuaW5zdHIuZnhfcGFuX2FtdCAvIDUxMiArIDAuNTtcclxuXHRcdHJzYW1wbGUgKj0gMC4wMDQ3NiAqIHRoaXMuaW5zdHIuZW52X21hc3RlcjsgLy8gMzkgLyA4MTkyID0gMC4wMDQ3NlxyXG5cclxuXHRcdC8vIEFkZCB0byAxNi1iaXQgY2hhbm5lbCBidWZmZXJcclxuXHRcdC8vIGsgPSBrICogMjtcclxuXHRcdGlmIChrIDwgY2huYnVmTGVuZ3RoKSB7XHJcblx0XHRcdGNobkJ1Zi5sZWZ0W2tdICs9IHJzYW1wbGUgKiAoMS10KSA7XHJcblx0XHRcdGNobkJ1Zi5yaWdodFtrXSArPSByc2FtcGxlICogdDtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5Tb3VuZEdlbmVyYXRvci5wcm90b3R5cGUuX2NyZWF0ZUF1ZGlvQnVmZmVyID0gZnVuY3Rpb24obiwgY2FsbEJhY2spIHtcclxuXHR2YXIgYnVmZmVyU2l6ZSA9ICh0aGlzLmF0dGFjayArIHRoaXMuc3VzdGFpbiArIHRoaXMucmVsZWFzZSAtIDEpICsgKDMyICogdGhpcy5yb3dMZW4pO1xyXG5cdHZhciBidWZmZXIgPSBnZW5lcmF0ZUJ1ZmZlcihidWZmZXJTaXplKTtcclxuXHR0aGlzLl9nZW5Tb3VuZChuLCBidWZmZXIsIDApO1xyXG5cdGFwcGx5RGVsYXkoYnVmZmVyLCBidWZmZXJTaXplLCB0aGlzLmluc3RyLCB0aGlzLnJvd0xlbik7XHJcblxyXG5cdGNhbGxCYWNrKGdldEF1ZGlvQnVmZmVyKHRoaXMuY3R4LCBidWZmZXIpKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbnZhciBNdXNpY0dlbmVyYXRvciA9IGZ1bmN0aW9uKGN0eCwgc29uZykge1xyXG5cdHRoaXMuY3R4ID0gY3R4O1xyXG5cdHRoaXMuc29uZyA9IHNvbmc7XHJcblx0Ly8gV2F2ZSBkYXRhIGNvbmZpZ3VyYXRpb25cclxuXHR0aGlzLndhdmVTaXplID0gV0FWRV9TUFMgKiBzb25nLnNvbmdMZW47IC8vIFRvdGFsIHNvbmcgc2l6ZSAoaW4gc2FtcGxlcylcclxufTtcclxuXHJcbk11c2ljR2VuZXJhdG9yLnByb3RvdHlwZS5fZ2VuZXJhdGVUcmFjayA9IGZ1bmN0aW9uIChpbnN0ciwgbWl4QnVmLCBjYWxsQmFjaykge1xyXG5cdHZhciBzZWxmID0gdGhpcztcclxuXHR2YXIgY2huQnVmID0gZ2VuZXJhdGVCdWZmZXIodGhpcy53YXZlU2l6ZSk7XHJcblx0Ly8gUHJlbG9hZC9wcmVjYWxjIHNvbWUgcHJvcGVydGllcy9leHByZXNzaW9ucyAoZm9yIGltcHJvdmVkIHBlcmZvcm1hbmNlKVxyXG5cdHZhciB3YXZlU2FtcGxlcyA9IHNlbGYud2F2ZVNpemUsXHJcblx0XHRyb3dMZW4gPSBzZWxmLnNvbmcucm93TGVuLFxyXG5cdFx0ZW5kUGF0dGVybiA9IHNlbGYuc29uZy5lbmRQYXR0ZXJuLFxyXG5cdFx0c291bmRHZW4gPSBuZXcgU291bmRHZW5lcmF0b3Ioc2VsZi5jdHgsIGluc3RyLCByb3dMZW4pO1xyXG5cclxuXHR2YXIgY3VycmVudHBvcyA9IDA7XHJcblx0dmFyIHAgPSAwO1xyXG5cdHZhciByb3cgPSAwO1xyXG5cdHZhciByZWNvcmRTb3VuZHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBiZWdpbm5pbmcgPSBEYXRlLm5vdygpO1xyXG5cdFx0d2hpbGUgKHRydWUpIHtcclxuXHRcdFx0aWYgKHJvdyA9PT0gMzIpIHtcclxuXHRcdFx0XHRyb3cgPSAwO1xyXG5cdFx0XHRcdHAgKz0gMTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocCA9PT0gZW5kUGF0dGVybiAtIDEpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmluYWxpemUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgY3AgPSBpbnN0ci5wW3BdO1xyXG5cdFx0XHRpZiAoY3ApIHtcclxuXHRcdFx0XHR2YXIgbiA9IGluc3RyLmNbY3AgLSAxXS5uW3Jvd107XHJcblx0XHRcdFx0aWYgKG4pIHtcclxuXHRcdFx0XHRcdHNvdW5kR2VuLl9nZW5Tb3VuZChuLCBjaG5CdWYsIGN1cnJlbnRwb3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjdXJyZW50cG9zICs9IHJvd0xlbjtcclxuXHRcdFx0cm93ICs9IDE7XHJcblx0XHRcdGlmIChEYXRlLm5vdygpIC0gYmVnaW5uaW5nID4gTUFYX1RJTUUpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KHJlY29yZFNvdW5kcywgMCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIGZpbmFsaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHRhcHBseURlbGF5KGNobkJ1Ziwgd2F2ZVNhbXBsZXMsIGluc3RyLCByb3dMZW4pO1xyXG5cdFx0Zm9yICh2YXIgYjIgPSAwOyBiMiA8IHdhdmVTYW1wbGVzOyBiMisrKSB7XHJcblx0XHRcdG1peEJ1Zi5sZWZ0W2IyXSArPSBjaG5CdWYubGVmdFtiMl07XHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBiMiA9IDA7IGIyIDwgd2F2ZVNhbXBsZXM7IGIyKyspIHtcclxuXHRcdFx0bWl4QnVmLnJpZ2h0W2IyXSArPSBjaG5CdWYucmlnaHRbYjJdO1xyXG5cdFx0fVxyXG5cdFx0Y2FsbEJhY2soKTtcclxuXHR9O1xyXG5cclxuXHRyZWNvcmRTb3VuZHMoKTtcclxufTtcclxuXHJcbk11c2ljR2VuZXJhdG9yLnByb3RvdHlwZS5fY3JlYXRlQXVkaW9CdWZmZXIgPSBmdW5jdGlvbihjYWxsQmFjaykge1xyXG5cdHZhciBzZWxmID0gdGhpcztcclxuXHR2YXIgbWl4QnVmID0gZ2VuZXJhdGVCdWZmZXIodGhpcy53YXZlU2l6ZSk7XHJcblx0dmFyIHRyYWNrID0gMDtcclxuXHJcblx0dmFyIG5leHRUcmFjayA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRyYWNrIDwgc2VsZi5zb25nLnNvbmdEYXRhLmxlbmd0aCkge1xyXG5cdFx0XHR0cmFjayArPSAxO1xyXG5cdFx0XHRzZWxmLl9nZW5lcmF0ZVRyYWNrKHNlbGYuc29uZy5zb25nRGF0YVt0cmFjayAtIDFdLCBtaXhCdWYsIG5leHRUcmFjayk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y2FsbEJhY2soZ2V0QXVkaW9CdWZmZXIoc2VsZi5jdHgsIG1peEJ1ZikpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0bmV4dFRyYWNrKCk7XHJcbn07XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgUG9zLCBDb250cm9sYWJsZSB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRyb2wgPSAoZWNzKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGVjcy5zZWxlY3QoUG9zLCBDb250cm9sYWJsZSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZSA6IChkdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZC5pdGVyYXRlKChlbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpc1VwLCBpc0Rvd259ID0gZW50aXR5LmdldChDb250cm9sYWJsZSlcclxuICAgICAgICAgICAgICAgIGlmKGlzVXApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZ2V0KFBvcykueS0tXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZ2V0KFBvcykueSsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXcgPSAoZWNzLCBjdHgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZWNzLnNlbGVjdChQb3MpXHJcbiBcclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIHVwZGF0ZSA6IChkdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZC5pdGVyYXRlKChlbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyAgPSBlbnRpdHkuZ2V0KFBvcylcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGU9IFwiIzEzNFwiXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QocG9zLngsIHBvcy55LCAxMCwxMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9