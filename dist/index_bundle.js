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
/*! exports provided: Pos, Speed, Acc, Spawn, Controlable, TrialState, Bomb, Cooldown, CIRCLE, SQUARE, SMALL_CIRCLE, Shape, Hostile, Player, UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos", function() { return Pos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speed", function() { return Speed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Acc", function() { return Acc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spawn", function() { return Spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controlable", function() { return Controlable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialState", function() { return TrialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bomb", function() { return Bomb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cooldown", function() { return Cooldown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIRCLE", function() { return CIRCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE", function() { return SQUARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMALL_CIRCLE", function() { return SMALL_CIRCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return Shape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hostile", function() { return Hostile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return UI; });
/* harmony import */ var _libs_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/vector */ "./src/libs/vector.js");


class Pos extends _libs_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] {}
class Speed extends _libs_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] {}
class Acc extends _libs_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] {}

class Spawn {
    constructor() {
        this.cd = 3000
        this.maxHostiles = 3
    }
    
}

const pi2 = Math.PI * 2


const Z = 90
const W = 87
const Q = 81
const A = 65
const S = 83
const D = 68
const ESPACE = 32
class Controlable {
    
    constructor() {
        this.isUp = false
        this.isLeft = false
        this.isRight = false
        this.isDown = false
        this.isMain = false

        window.addEventListener("keydown", (event) => {
            if(event.keyCode === Z || event.keyCode === W) {
                this.isUp = true
            }
            if(event.keyCode === ESPACE) {
                this.isMain = true
            }
            if(event.keyCode === Q || event.keyCode === A) {
                this.isLeft = true
            }
            if(event.keyCode === D) {
                this.isRight = true
            }
            if(event.keyCode === S) {
                this.isDown = true
            }
        })
        window.addEventListener("keyup", (event) => {
            if(event.keyCode === Z || event.keyCode === W) {
                this.isUp = false
            }
            if(event.keyCode === ESPACE) {
                this.isMain = false
            }
            if(event.keyCode === Q || event.keyCode === A) {
                this.isLeft = false
            }
            if(event.keyCode === D) {
                this.isRight = false
            }
            if(event.keyCode === S) {
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

class Bomb {
    constructor(timer) {
        this.timer = timer
    }
}

class Cooldown {
    constructor(timer) {

    }
}

const CIRCLE = 0
const SQUARE = 1
const SMALL_CIRCLE = 2
class Shape {
    constructor(shape) {
        this.draw = (ctx, pos) => {
            ctx.fillStyle= "#134"

            if(shape === CIRCLE) {
                ctx.beginPath()
                ctx.arc(pos.x, pos.y, 16, 0, pi2)
                ctx.fill()
                ctx.closePath()
            } else if(shape === SMALL_CIRCLE) {
                ctx.beginPath()
                ctx.arc(pos.x, pos.y, 8, 0, pi2)
                ctx.closePath()
                ctx.fill()
            } else {
                ctx.fillRect(pos.x - 8, pos.y - 8, 16, 16)
            }
        }
    }
}

class Hostile {
    constructor(target) {
        this.target = target
    }
}

class Player {}

class UI {
    constructor(text, x, y, fn) {
        this.text = text
        this.x = x
        this.y = y
        window.addEventListener("mousedown", (e) => {
            if(Math.abs(e.pageX - x) < 100 && Math.abs(e.pageY - y) < 100) {
                fn()
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _systems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./systems */ "./src/systems.js");
/* harmony import */ var _screens_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens.js */ "./src/screens.js");










document.body.appendChild(document.createElement("canvas"))
const cv = document.querySelector("canvas")
cv.width = window.innerWidth
cv.height = window.innerHeight

const ctx = cv.getContext("2d") 

js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].register(_components__WEBPACK_IMPORTED_MODULE_3__["Pos"], _components__WEBPACK_IMPORTED_MODULE_3__["Speed"], _components__WEBPACK_IMPORTED_MODULE_3__["Acc"], _components__WEBPACK_IMPORTED_MODULE_3__["Controlable"], _components__WEBPACK_IMPORTED_MODULE_3__["TrialState"], _components__WEBPACK_IMPORTED_MODULE_3__["Shape"], _components__WEBPACK_IMPORTED_MODULE_3__["Bomb"], _components__WEBPACK_IMPORTED_MODULE_3__["Player"], _components__WEBPACK_IMPORTED_MODULE_3__["Hostile"], _components__WEBPACK_IMPORTED_MODULE_3__["Spawn"], _components__WEBPACK_IMPORTED_MODULE_3__["UI"])

js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].process(Object(_systems__WEBPACK_IMPORTED_MODULE_4__["draw"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["control"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["trialDisplay"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), 
            Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveBombs"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveSpawn"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["ia"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveUi"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx))

/* sync () => {
  const melodieCurry = await Sound(melodie)
   const soundHandle = melodieCurry(false)

  setTimeout(() => {
    soundHandle.stop()
  }, 500)
})()*/

window.currentScreen = Object(_screens_js__WEBPACK_IMPORTED_MODULE_5__["title"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], cv)
Object(_screens_js__WEBPACK_IMPORTED_MODULE_5__["title"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], cv).load()


  let last = 0
  let now  
const loop = () => {
  now = performance.now()
  cv.width += 0
  js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].update(now - last)

  last = now
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

/***/ "./src/libs/vector.js":
/*!****************************!*\
  !*** ./src/libs/vector.js ***!
  \****************************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
class Vector {
    constructor(x,y,z) {
        this.x = x
        this.y = y
        this.z = z
    }
    setX(x) {
        this.x = x
    }
    setY(y) {
        this.y = y
    }
    setZ(z) {
        this.z = z
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z
    }
    setScalar(scalar) {
        this.x = scalar
        this.y = scalar
        this.z = scalar
        return this
    }
    multiplyScalar(scalar) {
        this.x *= scalar
        this.y *= scalar
        this.z *= scalar
        return this
    }
    divideScalar(scalar) {
        return this.multiplyScalar(1/scalar)
    }
    length() {
        return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z )
    }
    clone() {
        return new Vector(this.x, this.y, this.z)
    }
    clamp(min, max) {
        this.x = Math.max( min.x, Math.min( max.x, this.x ) )
		this.y = Math.max( min.y, Math.min( max.y, this.y ) )
        this.z = Math.max( min.z, Math.min( max.z, this.z ) )
        return this
    }
    add(v) {
        this.x += v.x
        this.y += v.y
        this.z += v.z
        return this
    }
    sub(v) {
        this.x -= v.x
        this.y -= v.y
        this.z -= v.z
        return this
    }
    multiply(v) {
        this.x *= v.x
        this.y *= v.y
        this.z *= v.z
        return this
    }
    normalise() {
        return this.divideScalar(this.length())
    }
    toString() {
        return `${x} ${y} ${z}`
    }
}




/***/ }),

/***/ "./src/screens.js":
/*!************************!*\
  !*** ./src/screens.js ***!
  \************************/
/*! exports provided: title, arena */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arena", function() { return arena; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");


const title = (ecs, cv) => {
    return {
        load: () => {
            ecs.create()
                .add(new _components__WEBPACK_IMPORTED_MODULE_0__["UI"]("Start", cv.width / 2, cv.height / 2, () => {
                    window.currentScreen.unload()
                    window.currentScreen = arena(ecs, cv)
                }))
        },
        unload: () => {
            ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["UI"]).iterate((entity) => {
                entity.eject()
            })
        }
    }
    
}


const arena = (ecs, cv) => {

    ecs
        .create()
        .add(
            new _components__WEBPACK_IMPORTED_MODULE_0__["Shape"](_components__WEBPACK_IMPORTED_MODULE_0__["CIRCLE"]),
            new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](cv.width / 2, cv.height / 2, 0),
            new _components__WEBPACK_IMPORTED_MODULE_0__["Speed"](0, 0, 0),
            new _components__WEBPACK_IMPORTED_MODULE_0__["Acc"](0, 0, 0),
            new _components__WEBPACK_IMPORTED_MODULE_0__["Controlable"](),
            new _components__WEBPACK_IMPORTED_MODULE_0__["Player"]()
        )
    ecs
        .create()
        .add(
            new _components__WEBPACK_IMPORTED_MODULE_0__["Spawn"](),
            new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](150, 150, 0),
        )
    ecs
        .create()
        .add(
            new _components__WEBPACK_IMPORTED_MODULE_0__["TrialState"](),
            new _components__WEBPACK_IMPORTED_MODULE_0__["Controlable"](),
        )
}

/***/ }),

/***/ "./src/systems.js":
/*!************************!*\
  !*** ./src/systems.js ***!
  \************************/
/*! exports provided: control, draw, liveSpawn, ia, trialDisplay, liveBombs, liveUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "control", function() { return control; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveSpawn", function() { return liveSpawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ia", function() { return ia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trialDisplay", function() { return trialDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveBombs", function() { return liveBombs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveUi", function() { return liveUi; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _libs_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/vector */ "./src/libs/vector.js");



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
                const {isUp, isDown, isLeft, isRight, isMain} = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Controlable"])
                const pos = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                const speed = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Speed"])
                if(isUp) {
                    speed.setY(-1)
                }
                if(isDown) {
                    speed.setY(1)
                }
                if(isLeft) {
                    speed.setX(-1)
                }
                if(isRight) {
                    speed.setX(1)
                }
                pos.add(speed)
                if(isMain) {
                    ecs
                    .create()
                    .add(
                        new _components__WEBPACK_IMPORTED_MODULE_0__["Bomb"](3000), 
                        new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](pos.x, pos.y, 0), 
                        new _components__WEBPACK_IMPORTED_MODULE_0__["Shape"](_components__WEBPACK_IMPORTED_MODULE_0__["SQUARE"])
                    )
                }
            })
        }
    }
}


const draw = (ecs, ctx) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"], _components__WEBPACK_IMPORTED_MODULE_0__["Shape"])
 
    return {

        update : (dt) => {
            selected.iterate((entity) => {
                const pos = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                const shape = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Shape"])
                shape.draw(ctx, pos)
            })
        }
    }
}


const liveSpawn = (ecs) => {
    const selector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Spawn"])
    return {
        update: (dt) => {
            selector.iterate((entity) => {
                const pos = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                const spawner = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Spawn"])
                spawner.cd -= dt
                if(spawner.cd < 0 && spawner.maxHostiles > 0) {
                    spawner.maxHostiles --
                    spawner.cd = 3000
                    ecs.create()
                        .add(new _components__WEBPACK_IMPORTED_MODULE_0__["Hostile"](), new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](pos.x, pos.y, pos.z), new _components__WEBPACK_IMPORTED_MODULE_0__["Shape"](_components__WEBPACK_IMPORTED_MODULE_0__["SMALL_CIRCLE"]))
                } 
            }) 
        }
    }
}

const ia = (ecs) => {
    const hostileSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"], _components__WEBPACK_IMPORTED_MODULE_0__["Hostile"])
    const playerSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"], _components__WEBPACK_IMPORTED_MODULE_0__["Player"])
    return {
        update : (dt) => {
            playerSelector.iterate((playerEntity) => {
                const playerPos = playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"]) 
                hostileSelector.iterate((entity) => {
                    const hostilePos = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                    const d = playerPos.clone()
                    const b = d.sub(entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"]))
                    const n = b.normalise().multiplyScalar(0.5)
                    hostilePos.add(n)
                })
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

const liveBombs = (ecs) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Bomb"])
    const hostileSelected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Hostile"], _components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
    return {
        update: (dt) => {
            selected.iterate((entity) => {
                const bomb = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Bomb"])
                bomb.timer -= dt
                if(bomb.timer < 0) {
                    entity.eject()
                    hostileSelected.iterate((hostileEntity) => {
                        
                    })
                }
            })
            
        }
    }
}

const liveUi = (ecs, ctx) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["UI"])
    return {
        update: () => {
            selected.iterate((entity) => {
                const ui = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["UI"])
                ctx.fillText(ui.text, ui.x, ui.y)
            })
        }
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzMTNrLWVjcy9kaXN0L2Vjcy5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2F1ZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3NvbmFudF93cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3lzdGVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsa0JBQWtCLHFCQUFxQixzREFBc0Qsb0JBQW9CLFdBQVcseURBQXlE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QTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5QixRQUFRO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdlJBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTs7QUFFTztBQUNQLGdDQUFnQyxzREFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0RBQVUsNkJBQTZCLHNEQUFVO0FBQ2hGO0FBQ0EsaUJBQWlCLG9CQUFvQixzREFBVSw0QkFBNEIsc0RBQVU7QUFDckY7QUFDQSxpQkFBaUIsb0JBQW9CLHNEQUFVO0FBQy9DO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVPO0FBQ1AsZ0NBQWdDLGdEQUFJO0FBQ3BDLHVDQUF1QyxtREFBTyxFQUFFLCtDQUFHO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnREFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGdDQUFnQyw4Q0FBRTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsOENBQUU7QUFDeEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4X2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIHQ9W10sbj1bXSxyPXt9LGU9XCJfc2lnblwiLG89XCJfbWFza1wiO1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJihlPVN5bWJvbChlKSxvPVN5bWJvbChvKSk7dmFyIGk9ZnVuY3Rpb24odCxuKXt2YXIgcj1uW3RdO2lmKCFyKXRocm93IG5ldyBFcnJvcihcIlRoZSBjb21wb25lbnQgaXMgbm90IHJlZ2lzdGVyZWRcIik7cmV0dXJuIHJ9LHM9aS5iaW5kKG51bGwsZSksYT1pLmJpbmQobnVsbCxvKSxjPWZ1bmN0aW9uKG4pe24uaWQmJnQuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gdC5tYXRjaChuKX0pfSxoPTEsZj17fSx1PWZ1bmN0aW9uKHQpe3RoaXMuaWQ9dHx8KGgrKykudG9TdHJpbmcoMzYpLHRoaXMuY29tcG9uZW50cz1PYmplY3QuYXNzaWduKHt9LGYpLHRoaXMubWFzaz0wfTt1LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcyxuPVtdLHI9YXJndW1lbnRzLmxlbmd0aDtyLS07KW5bcl09YXJndW1lbnRzW3JdO24uZm9yRWFjaChmdW5jdGlvbihuKXt0LmNvbXBvbmVudHNbcyhuLmNvbnN0cnVjdG9yKV09bix0Lm1hc2t8PWEobi5jb25zdHJ1Y3Rvcil9KSxjKHRoaXMpfSx1LnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcyxuPVtdLHI9YXJndW1lbnRzLmxlbmd0aDtyLS07KW5bcl09YXJndW1lbnRzW3JdO24uZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgcj1zKG4pLGU9dC5jb21wb25lbnRzW3JdO2UmJihlLmRlc3RydWN0b3ImJmUuZGVzdHJ1Y3RvcigpLGRlbGV0ZSB0LmNvbXBvbmVudHNbcl0sdC5tYXNrJj1+YShuKSl9KSxjKHRoaXMpfSx1LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHModClpbiB0aGlzLmNvbXBvbmVudHN9LHUucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jb21wb25lbnRzW3RbZV1dfSx1LnByb3RvdHlwZS5lamVjdD1mdW5jdGlvbigpeyFmdW5jdGlvbihuKXt2YXIgZT1uLmNvbXBvbmVudHM7Zm9yKHZhciBvIGluIGUpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykpe3ZhciBpPWVbb107aSYmaS5kZXN0cnVjdG9yJiZpLmRlc3RydWN0b3IoKX10LmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHQucmVtb3ZlKG4pfSksZGVsZXRlIHJbbi5pZF0sbi5pZD0wfSh0aGlzKX07dmFyIHA9ZnVuY3Rpb24odCxuKXt0aGlzLmVudGl0eT10LHRoaXMucHJldj1udWxsLHRoaXMubmV4dD1ufSxsPWZ1bmN0aW9uKHQpe2lmKCF0KXRocm93IG5ldyBFcnJvcihcIkVtcHR5IHNlbGVjdG9yXCIpO2Zvcih2YXIgbiBpbiB0aGlzLm1hc2s9dCx0aGlzLm1hcD17fSx0aGlzLmxpc3Q9bnVsbCx0aGlzLmxlbmd0aD0wLHIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsbikmJnRoaXMubWF0Y2gocltuXSl9O2wucHJvdG90eXBlLml0ZXJhdGU9ZnVuY3Rpb24odCl7Zm9yKHZhciBuPXRoaXMubGlzdDtuOyl0KG4uZW50aXR5KSxuPW4ubmV4dH0sbC5wcm90b3R5cGUubWF0Y2g9ZnVuY3Rpb24odCl7KHRoaXMubWFzayZ0Lm1hc2spPT09dGhpcy5tYXNrP3RoaXMuYWRkKHQpOnRoaXMucmVtb3ZlKHQpfSxsLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7aWYoIXRoaXMubWFwW3QuaWRdKXt2YXIgbj1uZXcgcCh0LHRoaXMubGlzdCk7dGhpcy5saXN0JiYodGhpcy5saXN0LnByZXY9biksdGhpcy5saXN0PW4sdGhpcy5tYXBbdC5pZF09bix0aGlzLmxlbmd0aCsrfX0sbC5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMubWFwW3QuaWRdO24mJihuLnByZXY/bi5wcmV2Lm5leHQ9bi5uZXh0OnRoaXMubGlzdD1uLm5leHQsbi5uZXh0JiYobi5uZXh0LnByZXY9bi5wcmV2KSxkZWxldGUgdGhpcy5tYXBbdC5pZF0sdGhpcy5sZW5ndGgtLSl9O3ZhciBtPTAsdj1wZXJmb3JtYW5jZXx8RGF0ZSxkPXYubm93LmJpbmQodik7ZXhwb3J0IGRlZmF1bHR7cmVnaXN0ZXI6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sbj1hcmd1bWVudHMubGVuZ3RoO24tLTspdFtuXT1hcmd1bWVudHNbbl07dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKG0+MzEpdGhyb3cgbmV3IEVycm9yKFwiQ29tcG9uZW50cyBsaW1pdCByZWFjaGVkXCIpO2lmKCF0W2VdKXt2YXIgbj1tLnRvU3RyaW5nKDM2KTtmW25dPW51bGwsdFtlXT1uLHRbb109MTw8bSxtKyt9fSl9LHByb2Nlc3M6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspdFtyXT1hcmd1bWVudHNbcl07dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBuLnB1c2godCl9KX0sY3JlYXRlOmZ1bmN0aW9uKHQpe3ZhciBuPW5ldyB1KHQpO2lmKHJbbi5pZF0pdGhyb3cgbmV3IEVycm9yKFwiVGhlIElEIGFscmVhZHkgZXhpc3RcIik7cmV0dXJuIHJbbi5pZF09bixufSxnZXQ6ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF19LHNlbGVjdDpmdW5jdGlvbigpe2Zvcih2YXIgbj1bXSxyPWFyZ3VtZW50cy5sZW5ndGg7ci0tOyluW3JdPWFyZ3VtZW50c1tyXTt2YXIgZT0wO24uZm9yRWFjaChmdW5jdGlvbih0KXtlfD1hKHQpfSk7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspaWYodFtvXS5tYXNrPT09ZSlyZXR1cm4gdFtvXTt2YXIgaT1uZXcgbChlKTtyZXR1cm4gdC5wdXNoKGkpLGl9LHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgcj17fTtyZXR1cm4gbi5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciBlPWQoKTtuLnVwZGF0ZSh0KSxyW24uY29uc3RydWN0b3IubmFtZV09ZCgpLWV9KSxyfX07XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi9saWJzL3ZlY3RvclwiXG5cbmV4cG9ydCBjbGFzcyBQb3MgZXh0ZW5kcyBWZWN0b3Ige31cbmV4cG9ydCBjbGFzcyBTcGVlZCBleHRlbmRzIFZlY3RvciB7fVxuZXhwb3J0IGNsYXNzIEFjYyBleHRlbmRzIFZlY3RvciB7fVxuXG5leHBvcnQgY2xhc3MgU3Bhd24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNkID0gMzAwMFxuICAgICAgICB0aGlzLm1heEhvc3RpbGVzID0gM1xuICAgIH1cbiAgICBcbn1cblxuY29uc3QgcGkyID0gTWF0aC5QSSAqIDJcblxuXG5jb25zdCBaID0gOTBcbmNvbnN0IFcgPSA4N1xuY29uc3QgUSA9IDgxXG5jb25zdCBBID0gNjVcbmNvbnN0IFMgPSA4M1xuY29uc3QgRCA9IDY4XG5jb25zdCBFU1BBQ0UgPSAzMlxuZXhwb3J0IGNsYXNzIENvbnRyb2xhYmxlIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc1VwID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc0xlZnQgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzUmlnaHQgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNNYWluID0gZmFsc2VcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBaIHx8IGV2ZW50LmtleUNvZGUgPT09IFcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVXAgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBFU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTWFpbiA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IFEgfHwgZXZlbnQua2V5Q29kZSA9PT0gQSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMZWZ0ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNSaWdodCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IFMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRG93biA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IFogfHwgZXZlbnQua2V5Q29kZSA9PT0gVykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNVcCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBFU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTWFpbiA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBRIHx8IGV2ZW50LmtleUNvZGUgPT09IEEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTGVmdCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IFMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJpYWxTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNVcFByZXNzZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzRG93blByZXNzZWQgPSBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvbWIge1xuICAgIGNvbnN0cnVjdG9yKHRpbWVyKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSB0aW1lclxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvb2xkb3duIHtcbiAgICBjb25zdHJ1Y3Rvcih0aW1lcikge1xuXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgQ0lSQ0xFID0gMFxuZXhwb3J0IGNvbnN0IFNRVUFSRSA9IDFcbmV4cG9ydCBjb25zdCBTTUFMTF9DSVJDTEUgPSAyXG5leHBvcnQgY2xhc3MgU2hhcGUge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuZHJhdyA9IChjdHgsIHBvcykgPT4ge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZT0gXCIjMTM0XCJcblxuICAgICAgICAgICAgaWYoc2hhcGUgPT09IENJUkNMRSkge1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICAgICAgICAgIGN0eC5hcmMocG9zLngsIHBvcy55LCAxNiwgMCwgcGkyKVxuICAgICAgICAgICAgICAgIGN0eC5maWxsKClcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgICAgIH0gZWxzZSBpZihzaGFwZSA9PT0gU01BTExfQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgICAgICAgICAgY3R4LmFyYyhwb3MueCwgcG9zLnksIDgsIDAsIHBpMilcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChwb3MueCAtIDgsIHBvcy55IC0gOCwgMTYsIDE2KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSG9zdGlsZSB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyIHt9XG5cbmV4cG9ydCBjbGFzcyBVSSB7XG4gICAgY29uc3RydWN0b3IodGV4dCwgeCwgeSwgZm4pIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dFxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKE1hdGguYWJzKGUucGFnZVggLSB4KSA8IDEwMCAmJiBNYXRoLmFicyhlLnBhZ2VZIC0geSkgPCAxMDApIHtcbiAgICAgICAgICAgICAgICBmbigpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCB7U291bmR9IGZyb20gXCIuL2xpYnMvYXVkaW8uanNcIlxuaW1wb3J0IG1lbG9kaWUgZnJvbSBcIi4vYXNzZXRzL2F1ZGlvL21lbG8xLmpzb25cIjtcblxuaW1wb3J0IGVjcyBmcm9tIFwianMxM2stZWNzXCI7XG5cbmltcG9ydCB7IFBvcywgQ29udHJvbGFibGUsIFRyaWFsU3RhdGUsIFNoYXBlLCBDSVJDTEUsIEJvbWIsIFBsYXllciwgSG9zdGlsZSwgU3Bhd24sIFNwZWVkLCBBY2MsIFVJIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY29udHJvbCwgZHJhdywgdHJpYWxEaXNwbGF5LCBsaXZlQm9tYnMsIGxpdmVTcGF3biwgaWEsIGxpdmVVaSB9IGZyb20gXCIuL3N5c3RlbXNcIjtcbmltcG9ydCB7IHRpdGxlLCBhcmVuYSB9IGZyb20gXCIuL3NjcmVlbnMuanNcIlxuXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSlcbmNvbnN0IGN2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKVxuY3Yud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuY3YuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cbmNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoXCIyZFwiKSBcblxuZWNzLnJlZ2lzdGVyKFBvcywgU3BlZWQsIEFjYywgQ29udHJvbGFibGUsIFRyaWFsU3RhdGUsIFNoYXBlLCBCb21iLCBQbGF5ZXIsIEhvc3RpbGUsIFNwYXduLCBVSSlcblxuZWNzLnByb2Nlc3MoZHJhdyhlY3MsIGN0eCksIGNvbnRyb2woZWNzKSwgdHJpYWxEaXNwbGF5KGVjcywgY3R4KSwgXG4gICAgICAgICAgICBsaXZlQm9tYnMoZWNzKSwgbGl2ZVNwYXduKGVjcyksIGlhKGVjcyksIGxpdmVVaShlY3MsIGN0eCkpXG5cbi8qIHN5bmMgKCkgPT4ge1xuICBjb25zdCBtZWxvZGllQ3VycnkgPSBhd2FpdCBTb3VuZChtZWxvZGllKVxuICAgY29uc3Qgc291bmRIYW5kbGUgPSBtZWxvZGllQ3VycnkoZmFsc2UpXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc291bmRIYW5kbGUuc3RvcCgpXG4gIH0sIDUwMClcbn0pKCkqL1xuXG53aW5kb3cuY3VycmVudFNjcmVlbiA9IHRpdGxlKGVjcywgY3YpXG50aXRsZShlY3MsIGN2KS5sb2FkKClcblxuXG4gIGxldCBsYXN0ID0gMFxuICBsZXQgbm93ICBcbmNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gIG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIGN2LndpZHRoICs9IDBcbiAgZWNzLnVwZGF0ZShub3cgLSBsYXN0KVxuXG4gIGxhc3QgPSBub3dcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG59XG5cbmxvb3AoKSIsImltcG9ydCB7IHNvbmFudHhyX2dlbmVyYXRlX3NvbmcgfSBmcm9tIFwiLi9zb25hbnRfd3JhcHBlci5qc1wiXG5cbnZhciBhdWRpb19jdHggPSBuZXcgKHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHR8fHdpbmRvdy5BdWRpb0NvbnRleHQpKClcblxuY29uc3QgbWFrZUFzeW5jID0gYXN5bmMgKHJhd1NvdW5kKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNvbmFudHhyX2dlbmVyYXRlX3NvbmcoYXVkaW9fY3R4LCByYXdTb3VuZCwgYnVmZmVyID0+IHtcbiAgICAgIHJlc29sdmUoYnVmZmVyKVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBTb3VuZCA9IGFzeW5jIChyYXdTb3VuZCkgPT4ge1xuICAgIFxuICBjb25zdCBidWZmZXIgPSBhd2FpdCBtYWtlQXN5bmMocmF3U291bmQpXG4gIGNvbnN0IHNvdXJjZSA9IGF1ZGlvX2N0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuICBzb3VyY2UuYnVmZmVyID0gYnVmZmVyXG4gIHNvdXJjZS5jb25uZWN0KGF1ZGlvX2N0eC5kZXN0aW5hdGlvbilcblxuICByZXR1cm4gKGxvb3ApID0+IHtcbiAgICBzb3VyY2UubG9vcCA9IGxvb3BcbiAgICBzb3VyY2Uuc3RhcnQoKVxuICAgIHJldHVybiBzb3VyY2VcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHNvbmFudHhyX2dlbmVyYXRlX3NvbmcgPSBmdW5jdGlvbihhdWRpb19jdHgsIHNvbmdfZGF0YSwgY2FsbGJhY2spIHtcblx0dmFyIG11c2ljX2dlbmVyYXRvciA9IG5ldyBNdXNpY0dlbmVyYXRvcihhdWRpb19jdHgsIHNvbmdfZGF0YSk7XG5cdG11c2ljX2dlbmVyYXRvci5fY3JlYXRlQXVkaW9CdWZmZXIoY2FsbGJhY2spO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvbmFudHhyX2dlbmVyYXRlX3NvdW5kID0gZnVuY3Rpb24oYXVkaW9fY3R4LCBpbnN0cnVtZW50LCBub3RlLCBjYWxsYmFjaykge1xuXHR2YXIgc291bmRfZ2VuZXJhdG9yID0gbmV3IFNvdW5kR2VuZXJhdG9yKGF1ZGlvX2N0eCwgaW5zdHJ1bWVudCk7XG5cdHNvdW5kX2dlbmVyYXRvci5fY3JlYXRlQXVkaW9CdWZmZXIobm90ZSwgY2FsbGJhY2spO1xufTtcblxuXG5jb25zdCBfbWF0aCA9IE1hdGhcbnZhciBXQVZFX1NQUyA9IDQ0MTAwO1x0XHRcdFx0XHQvLyBTYW1wbGVzIHBlciBzZWNvbmRcbnZhciBNQVhfVElNRSA9IDMzOyAvLyBtYXhpbXVtIHRpbWUsIGluIG1pbGxpcywgdGhhdCB0aGUgZ2VuZXJhdG9yIGNhbiB1c2UgY29uc2VjdXRpdmVseVxuXG52YXIgYXVkaW9DdHggPSBudWxsO1xuXG4vLyBPc2NpbGxhdG9yc1xuZnVuY3Rpb24gb3NjX3Npbih2YWx1ZSlcbntcblx0cmV0dXJuIF9tYXRoLnNpbih2YWx1ZSAqIDYuMjgzMTg0KTtcbn1cblxuZnVuY3Rpb24gb3NjX3NxdWFyZSh2YWx1ZSlcbntcblx0cmV0dXJuIG9zY19zaW4odmFsdWUpIDwgMCA/IC0xIDogMTtcbn1cblxuZnVuY3Rpb24gb3NjX3Nhdyh2YWx1ZSlcbntcblx0cmV0dXJuICh2YWx1ZSAlIDEpIC0gMC41O1xufVxuXG5mdW5jdGlvbiBvc2NfdHJpKHZhbHVlKVxue1xuXHR2YXIgdjIgPSAodmFsdWUgJSAxKSAqIDQ7XG5cdHJldHVybiB2MiA8IDIgPyB2MiAtIDEgOiAzIC0gdjI7XG59XG5cbi8vIEFycmF5IG9mIG9zY2lsbGF0b3IgZnVuY3Rpb25zXG52YXIgb3NjaWxsYXRvcnMgPVxuW1xuXHRvc2Nfc2luLFxuXHRvc2Nfc3F1YXJlLFxuXHRvc2Nfc2F3LFxuXHRvc2NfdHJpXG5dO1xuXG5mdW5jdGlvbiBnZXRub3RlZnJlcShuKVxue1xuXHRyZXR1cm4gMC4wMDM5MDYyNSAqIF9tYXRoLnBvdygxLjA1OTQ2MzA5NCwgbiAtIDEyOCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQnVmZmVyKHNhbXBsZXMpIHtcbiAgIHJldHVybiB7XG5cdFx0bGVmdDogbmV3IEZsb2F0MzJBcnJheShzYW1wbGVzKSxcblx0XHRyaWdodDogbmV3IEZsb2F0MzJBcnJheShzYW1wbGVzKVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhcHBseURlbGF5KGNobkJ1Ziwgd2F2ZVNhbXBsZXMsIGluc3RyLCByb3dMZW4pIHtcblx0dmFyIHAxID0gKGluc3RyLmZ4X2RlbGF5X3RpbWUgKiByb3dMZW4pID4+IDE7XG5cdHZhciB0MSA9IGluc3RyLmZ4X2RlbGF5X2FtdCAvIDI1NTtcblxuXHR2YXIgbjEgPSAwO1xuXHR3aGlsZShuMSA8IHdhdmVTYW1wbGVzIC0gcDEpIHtcblx0XHR2YXIgYjEgPSBuMTtcblx0XHR2YXIgbCA9IChuMSArIHAxKTtcblx0XHRjaG5CdWYubGVmdFtsXSArPSBjaG5CdWYucmlnaHRbYjFdICogdDE7XG5cdFx0Y2huQnVmLnJpZ2h0W2xdICs9IGNobkJ1Zi5sZWZ0W2IxXSAqIHQxO1xuXHRcdG4xKys7XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBnZXRBdWRpb0J1ZmZlcihjdHgsIG1peEJ1Zikge1xuXHR2YXIgYnVmZmVyID0gY3R4LmNyZWF0ZUJ1ZmZlcigyLCBtaXhCdWYubGVmdC5sZW5ndGgsIFdBVkVfU1BTKTsgLy8gQ3JlYXRlIE1vbm8gU291cmNlIEJ1ZmZlciBmcm9tIFJhdyBCaW5hcnlcblx0YnVmZmVyLmdldENoYW5uZWxEYXRhKDApLnNldChtaXhCdWYubGVmdCk7XG5cdGJ1ZmZlci5nZXRDaGFubmVsRGF0YSgxKS5zZXQobWl4QnVmLnJpZ2h0KTtcblx0cmV0dXJuIGJ1ZmZlcjtcbn1cblxudmFyIFNvdW5kR2VuZXJhdG9yID0gZnVuY3Rpb24oY3R4LCBpbnN0ciwgcm93TGVuKSB7XG5cdHRoaXMuY3R4ID0gY3R4O1xuXHR0aGlzLmluc3RyID0gaW5zdHI7XG5cdHRoaXMucm93TGVuID0gcm93TGVuIHx8IDU2MDU7XG5cblx0dGhpcy5vc2NfbGZvID0gb3NjaWxsYXRvcnNbaW5zdHIubGZvX3dhdmVmb3JtXTtcblx0dGhpcy5vc2MxID0gb3NjaWxsYXRvcnNbaW5zdHIub3NjMV93YXZlZm9ybV07XG5cdHRoaXMub3NjMiA9IG9zY2lsbGF0b3JzW2luc3RyLm9zYzJfd2F2ZWZvcm1dO1xuXHR0aGlzLmF0dGFjayA9IGluc3RyLmVudl9hdHRhY2s7XG5cdHRoaXMuc3VzdGFpbiA9IGluc3RyLmVudl9zdXN0YWluO1xuXHR0aGlzLnJlbGVhc2UgPSBpbnN0ci5lbnZfcmVsZWFzZTtcblx0dGhpcy5wYW5GcmVxID0gX21hdGgucG93KDIsIGluc3RyLmZ4X3Bhbl9mcmVxIC0gOCkgLyB0aGlzLnJvd0xlbjtcblx0dGhpcy5sZm9GcmVxID0gX21hdGgucG93KDIsIGluc3RyLmxmb19mcmVxIC0gOCkgLyB0aGlzLnJvd0xlbjtcbn07XG5cblNvdW5kR2VuZXJhdG9yLnByb3RvdHlwZS5fZ2VuU291bmQgPSBmdW5jdGlvbihuLCBjaG5CdWYsIGN1cnJlbnRwb3MpIHtcblx0dmFyIGMxID0gMDtcblx0dmFyIGMyID0gMDtcblxuXHQvLyBQcmVjYWxjdWxhdGUgZnJlcXVlbmN1ZXNcblx0dmFyIG8xdCA9IGdldG5vdGVmcmVxKG4gKyAodGhpcy5pbnN0ci5vc2MxX29jdCAtIDgpICogMTIgKyB0aGlzLmluc3RyLm9zYzFfZGV0KSAqICgxICsgMC4wMDA4ICogdGhpcy5pbnN0ci5vc2MxX2RldHVuZSk7XG5cdHZhciBvMnQgPSBnZXRub3RlZnJlcShuICsgKHRoaXMuaW5zdHIub3NjMl9vY3QgLSA4KSAqIDEyICsgdGhpcy5pbnN0ci5vc2MyX2RldCkgKiAoMSArIDAuMDAwOCAqIHRoaXMuaW5zdHIub3NjMl9kZXR1bmUpO1xuXG5cdC8vIFN0YXRlIHZhcmlhYmxlIGluaXRcblx0dmFyIHEgPSB0aGlzLmluc3RyLmZ4X3Jlc29uYW5jZSAvIDI1NTtcblx0dmFyIGxvdyA9IDA7XG5cdHZhciBiYW5kID0gMDtcblxuXHR2YXIgY2huYnVmTGVuZ3RoID0gY2huQnVmLmxlZnQubGVuZ3RoO1xuXHR2YXIgbnVtU2FtcGxlcyA9IHRoaXMuYXR0YWNrICsgdGhpcy5zdXN0YWluICsgdGhpcy5yZWxlYXNlIC0gMTtcblx0XG5cdGZvciAodmFyIGogPSBudW1TYW1wbGVzOyBqID49IDA7IC0taikge1xuXHRcdHZhciBrID0gaiArIGN1cnJlbnRwb3M7XG5cblx0XHQvLyBMRk9cblx0XHR2YXIgbGZvciA9IHRoaXMub3NjX2xmbyhrICogdGhpcy5sZm9GcmVxKSAqIHRoaXMuaW5zdHIubGZvX2FtdCAvIDUxMiArIDAuNTtcblxuXHRcdC8vIEVudmVsb3BlXG5cdFx0dmFyIGUgPSAxO1xuXHRcdGlmIChqIDwgdGhpcy5hdHRhY2spIHtcblx0XHRcdGUgPSBqIC8gdGhpcy5hdHRhY2s7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGogPj0gdGhpcy5hdHRhY2sgKyB0aGlzLnN1c3RhaW4pIHtcblx0XHRcdGUgLT0gKGogLSB0aGlzLmF0dGFjayAtIHRoaXMuc3VzdGFpbikgLyB0aGlzLnJlbGVhc2U7XG5cdFx0fVxuXG5cdFx0Ly8gT3NjaWxsYXRvciAxXG5cdFx0dmFyIHQgPSBvMXQ7XG5cdFx0aWYgKHRoaXMuaW5zdHIubGZvX29zYzFfZnJlcSkge1xuXHRcdFx0dCArPSBsZm9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5pbnN0ci5vc2MxX3hlbnYpIHtcblx0XHRcdHQgKj0gZSAqIGUgXG5cdFx0fVxuXHRcdGMxICs9IHQ7XG5cdFx0dmFyIHJzYW1wbGUgPSB0aGlzLm9zYzEoYzEpICogdGhpcy5pbnN0ci5vc2MxX3ZvbDtcblxuXHRcdC8vIE9zY2lsbGF0b3IgMlxuXHRcdHQgPSBvMnQ7XG5cdFx0aWYgKHRoaXMuaW5zdHIub3NjMl94ZW52KSB7XG5cdFx0XHR0ICo9IGUgKiBlO1xuXHRcdH07XG5cdFx0YzIgKz0gdDtcblx0XHRyc2FtcGxlICs9IHRoaXMub3NjMihjMikgKiB0aGlzLmluc3RyLm9zYzJfdm9sO1xuXG5cdFx0Ly8gTm9pc2Ugb3NjaWxsYXRvclxuXHRcdGlmICh0aGlzLmluc3RyLm5vaXNlX2ZhZGVyKSB7XG5cdFx0XHRyc2FtcGxlICs9ICgyKl9tYXRoLnJhbmRvbSgpLTEpICogdGhpcy5pbnN0ci5ub2lzZV9mYWRlciAqIGU7XG5cdFx0fVxuXG5cdFx0cnNhbXBsZSAqPSBlIC8gMjU1O1xuXG5cdFx0Ly8gU3RhdGUgdmFyaWFibGUgZmlsdGVyXG5cdFx0dmFyIGYgPSB0aGlzLmluc3RyLmZ4X2ZyZXE7XG5cdFx0aWYgKHRoaXMuaW5zdHIubGZvX2Z4X2ZyZXEpIHtcblx0XHRcdGYgKj0gbGZvcjtcblx0XHR9XG5cdFx0ZiA9IDEuNSAqIF9tYXRoLnNpbihmICogMy4xNDE1OTIgLyBXQVZFX1NQUyk7XG5cdFx0bG93ICs9IGYgKiBiYW5kO1xuXHRcdHZhciBoaWdoID0gcSAqIChyc2FtcGxlIC0gYmFuZCkgLSBsb3c7XG5cdFx0YmFuZCArPSBmICogaGlnaDtcblx0XHRzd2l0Y2ggKHRoaXMuaW5zdHIuZnhfZmlsdGVyKSB7XG5cdFx0XHRjYXNlIDE6IC8vIEhpcGFzc1xuXHRcdFx0XHRyc2FtcGxlID0gaGlnaDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6IC8vIExvcGFzc1xuXHRcdFx0XHRyc2FtcGxlID0gbG93O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzogLy8gQmFuZHBhc3Ncblx0XHRcdFx0cnNhbXBsZSA9IGJhbmQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0OiAvLyBOb3RjaFxuXHRcdFx0XHRyc2FtcGxlID0gbG93ICsgaGlnaDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdH1cblxuXHRcdC8vIFBhbm5pbmcgJiBtYXN0ZXIgdm9sdW1lXG5cdFx0dCA9IG9zY19zaW4oayAqIHRoaXMucGFuRnJlcSkgKiB0aGlzLmluc3RyLmZ4X3Bhbl9hbXQgLyA1MTIgKyAwLjU7XG5cdFx0cnNhbXBsZSAqPSAwLjAwNDc2ICogdGhpcy5pbnN0ci5lbnZfbWFzdGVyOyAvLyAzOSAvIDgxOTIgPSAwLjAwNDc2XG5cblx0XHQvLyBBZGQgdG8gMTYtYml0IGNoYW5uZWwgYnVmZmVyXG5cdFx0Ly8gayA9IGsgKiAyO1xuXHRcdGlmIChrIDwgY2huYnVmTGVuZ3RoKSB7XG5cdFx0XHRjaG5CdWYubGVmdFtrXSArPSByc2FtcGxlICogKDEtdCkgO1xuXHRcdFx0Y2huQnVmLnJpZ2h0W2tdICs9IHJzYW1wbGUgKiB0O1xuXHRcdH1cblx0fVxufTtcblxuU291bmRHZW5lcmF0b3IucHJvdG90eXBlLl9jcmVhdGVBdWRpb0J1ZmZlciA9IGZ1bmN0aW9uKG4sIGNhbGxCYWNrKSB7XG5cdHZhciBidWZmZXJTaXplID0gKHRoaXMuYXR0YWNrICsgdGhpcy5zdXN0YWluICsgdGhpcy5yZWxlYXNlIC0gMSkgKyAoMzIgKiB0aGlzLnJvd0xlbik7XG5cdHZhciBidWZmZXIgPSBnZW5lcmF0ZUJ1ZmZlcihidWZmZXJTaXplKTtcblx0dGhpcy5fZ2VuU291bmQobiwgYnVmZmVyLCAwKTtcblx0YXBwbHlEZWxheShidWZmZXIsIGJ1ZmZlclNpemUsIHRoaXMuaW5zdHIsIHRoaXMucm93TGVuKTtcblxuXHRjYWxsQmFjayhnZXRBdWRpb0J1ZmZlcih0aGlzLmN0eCwgYnVmZmVyKSk7XG59O1xuXG5cblxuXG52YXIgTXVzaWNHZW5lcmF0b3IgPSBmdW5jdGlvbihjdHgsIHNvbmcpIHtcblx0dGhpcy5jdHggPSBjdHg7XG5cdHRoaXMuc29uZyA9IHNvbmc7XG5cdC8vIFdhdmUgZGF0YSBjb25maWd1cmF0aW9uXG5cdHRoaXMud2F2ZVNpemUgPSBXQVZFX1NQUyAqIHNvbmcuc29uZ0xlbjsgLy8gVG90YWwgc29uZyBzaXplIChpbiBzYW1wbGVzKVxufTtcblxuTXVzaWNHZW5lcmF0b3IucHJvdG90eXBlLl9nZW5lcmF0ZVRyYWNrID0gZnVuY3Rpb24gKGluc3RyLCBtaXhCdWYsIGNhbGxCYWNrKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblx0dmFyIGNobkJ1ZiA9IGdlbmVyYXRlQnVmZmVyKHRoaXMud2F2ZVNpemUpO1xuXHQvLyBQcmVsb2FkL3ByZWNhbGMgc29tZSBwcm9wZXJ0aWVzL2V4cHJlc3Npb25zIChmb3IgaW1wcm92ZWQgcGVyZm9ybWFuY2UpXG5cdHZhciB3YXZlU2FtcGxlcyA9IHNlbGYud2F2ZVNpemUsXG5cdFx0cm93TGVuID0gc2VsZi5zb25nLnJvd0xlbixcblx0XHRlbmRQYXR0ZXJuID0gc2VsZi5zb25nLmVuZFBhdHRlcm4sXG5cdFx0c291bmRHZW4gPSBuZXcgU291bmRHZW5lcmF0b3Ioc2VsZi5jdHgsIGluc3RyLCByb3dMZW4pO1xuXG5cdHZhciBjdXJyZW50cG9zID0gMDtcblx0dmFyIHAgPSAwO1xuXHR2YXIgcm93ID0gMDtcblx0dmFyIHJlY29yZFNvdW5kcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBiZWdpbm5pbmcgPSBEYXRlLm5vdygpO1xuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAocm93ID09PSAzMikge1xuXHRcdFx0XHRyb3cgPSAwO1xuXHRcdFx0XHRwICs9IDE7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHAgPT09IGVuZFBhdHRlcm4gLSAxKSB7XG5cdFx0XHRcdHJldHVybiBmaW5hbGl6ZSgpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNwID0gaW5zdHIucFtwXTtcblx0XHRcdGlmIChjcCkge1xuXHRcdFx0XHR2YXIgbiA9IGluc3RyLmNbY3AgLSAxXS5uW3Jvd107XG5cdFx0XHRcdGlmIChuKSB7XG5cdFx0XHRcdFx0c291bmRHZW4uX2dlblNvdW5kKG4sIGNobkJ1ZiwgY3VycmVudHBvcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGN1cnJlbnRwb3MgKz0gcm93TGVuO1xuXHRcdFx0cm93ICs9IDE7XG5cdFx0XHRpZiAoRGF0ZS5ub3coKSAtIGJlZ2lubmluZyA+IE1BWF9USU1FKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVjb3JkU291bmRzLCAwKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHR2YXIgZmluYWxpemUgPSBmdW5jdGlvbigpIHtcblx0XHRhcHBseURlbGF5KGNobkJ1Ziwgd2F2ZVNhbXBsZXMsIGluc3RyLCByb3dMZW4pO1xuXHRcdGZvciAodmFyIGIyID0gMDsgYjIgPCB3YXZlU2FtcGxlczsgYjIrKykge1xuXHRcdFx0bWl4QnVmLmxlZnRbYjJdICs9IGNobkJ1Zi5sZWZ0W2IyXTtcblx0XHR9XG5cdFx0Zm9yICh2YXIgYjIgPSAwOyBiMiA8IHdhdmVTYW1wbGVzOyBiMisrKSB7XG5cdFx0XHRtaXhCdWYucmlnaHRbYjJdICs9IGNobkJ1Zi5yaWdodFtiMl07XG5cdFx0fVxuXHRcdGNhbGxCYWNrKCk7XG5cdH07XG5cblx0cmVjb3JkU291bmRzKCk7XG59O1xuXG5NdXNpY0dlbmVyYXRvci5wcm90b3R5cGUuX2NyZWF0ZUF1ZGlvQnVmZmVyID0gZnVuY3Rpb24oY2FsbEJhY2spIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHR2YXIgbWl4QnVmID0gZ2VuZXJhdGVCdWZmZXIodGhpcy53YXZlU2l6ZSk7XG5cdHZhciB0cmFjayA9IDA7XG5cblx0dmFyIG5leHRUcmFjayA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0cmFjayA8IHNlbGYuc29uZy5zb25nRGF0YS5sZW5ndGgpIHtcblx0XHRcdHRyYWNrICs9IDE7XG5cdFx0XHRzZWxmLl9nZW5lcmF0ZVRyYWNrKHNlbGYuc29uZy5zb25nRGF0YVt0cmFjayAtIDFdLCBtaXhCdWYsIG5leHRUcmFjayk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y2FsbEJhY2soZ2V0QXVkaW9CdWZmZXIoc2VsZi5jdHgsIG1peEJ1ZikpO1xuXHRcdH1cblx0fTtcblx0bmV4dFRyYWNrKCk7XG59O1xuXG5cbiIsImV4cG9ydCBjbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHgseSx6KSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLnogPSB6XG4gICAgfVxuICAgIHNldFgoeCkge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgfVxuICAgIHNldFkoeSkge1xuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuICAgIHNldFooeikge1xuICAgICAgICB0aGlzLnogPSB6XG4gICAgfVxuICAgIGRvdCh2KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2LnpcbiAgICB9XG4gICAgc2V0U2NhbGFyKHNjYWxhcikge1xuICAgICAgICB0aGlzLnggPSBzY2FsYXJcbiAgICAgICAgdGhpcy55ID0gc2NhbGFyXG4gICAgICAgIHRoaXMueiA9IHNjYWxhclxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBtdWx0aXBseVNjYWxhcihzY2FsYXIpIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhclxuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyXG4gICAgICAgIHRoaXMueiAqPSBzY2FsYXJcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgZGl2aWRlU2NhbGFyKHNjYWxhcikge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhcigxL3NjYWxhcilcbiAgICB9XG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKVxuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnksIHRoaXMueilcbiAgICB9XG4gICAgY2xhbXAobWluLCBtYXgpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgoIG1pbi54LCBNYXRoLm1pbiggbWF4LngsIHRoaXMueCApIClcblx0XHR0aGlzLnkgPSBNYXRoLm1heCggbWluLnksIE1hdGgubWluKCBtYXgueSwgdGhpcy55ICkgKVxuICAgICAgICB0aGlzLnogPSBNYXRoLm1heCggbWluLnosIE1hdGgubWluKCBtYXgueiwgdGhpcy56ICkgKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBhZGQodikge1xuICAgICAgICB0aGlzLnggKz0gdi54XG4gICAgICAgIHRoaXMueSArPSB2LnlcbiAgICAgICAgdGhpcy56ICs9IHYuelxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBzdWIodikge1xuICAgICAgICB0aGlzLnggLT0gdi54XG4gICAgICAgIHRoaXMueSAtPSB2LnlcbiAgICAgICAgdGhpcy56IC09IHYuelxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBtdWx0aXBseSh2KSB7XG4gICAgICAgIHRoaXMueCAqPSB2LnhcbiAgICAgICAgdGhpcy55ICo9IHYueVxuICAgICAgICB0aGlzLnogKj0gdi56XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIG5vcm1hbGlzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKHRoaXMubGVuZ3RoKCkpXG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYCR7eH0gJHt5fSAke3p9YFxuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBTaGFwZSwgUG9zLCBTcGVlZCwgQWNjLCBDb250cm9sYWJsZSwgUGxheWVyLCBTcGF3biwgVHJpYWxTdGF0ZSwgQ0lSQ0xFLCBVSSB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxuXG5leHBvcnQgY29uc3QgdGl0bGUgPSAoZWNzLCBjdikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWQ6ICgpID0+IHtcbiAgICAgICAgICAgIGVjcy5jcmVhdGUoKVxuICAgICAgICAgICAgICAgIC5hZGQobmV3IFVJKFwiU3RhcnRcIiwgY3Yud2lkdGggLyAyLCBjdi5oZWlnaHQgLyAyLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50U2NyZWVuLnVubG9hZCgpXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50U2NyZWVuID0gYXJlbmEoZWNzLCBjdilcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAgdW5sb2FkOiAoKSA9PiB7XG4gICAgICAgICAgICBlY3Muc2VsZWN0KFVJKS5pdGVyYXRlKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRpdHkuZWplY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuXG5leHBvcnQgY29uc3QgYXJlbmEgPSAoZWNzLCBjdikgPT4ge1xuXG4gICAgZWNzXG4gICAgICAgIC5jcmVhdGUoKVxuICAgICAgICAuYWRkKFxuICAgICAgICAgICAgbmV3IFNoYXBlKENJUkNMRSksXG4gICAgICAgICAgICBuZXcgUG9zKGN2LndpZHRoIC8gMiwgY3YuaGVpZ2h0IC8gMiwgMCksXG4gICAgICAgICAgICBuZXcgU3BlZWQoMCwgMCwgMCksXG4gICAgICAgICAgICBuZXcgQWNjKDAsIDAsIDApLFxuICAgICAgICAgICAgbmV3IENvbnRyb2xhYmxlKCksXG4gICAgICAgICAgICBuZXcgUGxheWVyKClcbiAgICAgICAgKVxuICAgIGVjc1xuICAgICAgICAuY3JlYXRlKClcbiAgICAgICAgLmFkZChcbiAgICAgICAgICAgIG5ldyBTcGF3bigpLFxuICAgICAgICAgICAgbmV3IFBvcygxNTAsIDE1MCwgMCksXG4gICAgICAgIClcbiAgICBlY3NcbiAgICAgICAgLmNyZWF0ZSgpXG4gICAgICAgIC5hZGQoXG4gICAgICAgICAgICBuZXcgVHJpYWxTdGF0ZSgpLFxuICAgICAgICAgICAgbmV3IENvbnRyb2xhYmxlKCksXG4gICAgICAgIClcbn0iLCJpbXBvcnQgeyBQb3MsIENvbnRyb2xhYmxlLCBUcmlhbFN0YXRlLCBCb21iLCBTaGFwZSwgU1FVQVJFLCBIb3N0aWxlLCBTcGF3biwgU01BTExfQ0lSQ0xFLCBQbGF5ZXIsIFNwZWVkLCBVSSB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vbGlicy92ZWN0b3JcIlxuXG5leHBvcnQgY29uc3QgY29udHJvbCA9IChlY3MpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGVjcy5zZWxlY3QoUG9zLCBDb250cm9sYWJsZSlcbiAgICBjb25zdCB0cmlhbHMgPSBlY3Muc2VsZWN0KFRyaWFsU3RhdGUsIENvbnRyb2xhYmxlKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlIDogKGR0KSA9PiB7XG5cbiAgICAgICAgICAgIHRyaWFscy5pdGVyYXRlKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7aXNVcCwgaXNEb3dufSA9IGVudGl0eS5nZXQoQ29udHJvbGFibGUpXG4gICAgICAgICAgICAgICAgaWYoaXNVcCkge1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZ2V0KFRyaWFsU3RhdGUpLmlzVXBQcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpc0Rvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmdldChUcmlhbFN0YXRlKS5pc0Rvd25QcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGVjdGVkLml0ZXJhdGUoKGVudGl0eSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtpc1VwLCBpc0Rvd24sIGlzTGVmdCwgaXNSaWdodCwgaXNNYWlufSA9IGVudGl0eS5nZXQoQ29udHJvbGFibGUpXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gZW50aXR5LmdldChQb3MpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBlbnRpdHkuZ2V0KFNwZWVkKVxuICAgICAgICAgICAgICAgIGlmKGlzVXApIHtcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQuc2V0WSgtMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwZWVkLnNldFkoMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoaXNMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNwZWVkLnNldFgoLTEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGlzUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQuc2V0WCgxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3MuYWRkKHNwZWVkKVxuICAgICAgICAgICAgICAgIGlmKGlzTWFpbikge1xuICAgICAgICAgICAgICAgICAgICBlY3NcbiAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIC5hZGQoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQm9tYigzMDAwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9zKHBvcy54LCBwb3MueSwgMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFNoYXBlKFNRVUFSRSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGRyYXcgPSAoZWNzLCBjdHgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGVjcy5zZWxlY3QoUG9zLCBTaGFwZSlcbiBcbiAgICByZXR1cm4ge1xuXG4gICAgICAgIHVwZGF0ZSA6IChkdCkgPT4ge1xuICAgICAgICAgICAgc2VsZWN0ZWQuaXRlcmF0ZSgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gZW50aXR5LmdldChQb3MpXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBlbnRpdHkuZ2V0KFNoYXBlKVxuICAgICAgICAgICAgICAgIHNoYXBlLmRyYXcoY3R4LCBwb3MpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBsaXZlU3Bhd24gPSAoZWNzKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBlY3Muc2VsZWN0KFNwYXduKVxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZTogKGR0KSA9PiB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pdGVyYXRlKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBlbnRpdHkuZ2V0KFBvcylcbiAgICAgICAgICAgICAgICBjb25zdCBzcGF3bmVyID0gZW50aXR5LmdldChTcGF3bilcbiAgICAgICAgICAgICAgICBzcGF3bmVyLmNkIC09IGR0XG4gICAgICAgICAgICAgICAgaWYoc3Bhd25lci5jZCA8IDAgJiYgc3Bhd25lci5tYXhIb3N0aWxlcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3Bhd25lci5tYXhIb3N0aWxlcyAtLVxuICAgICAgICAgICAgICAgICAgICBzcGF3bmVyLmNkID0gMzAwMFxuICAgICAgICAgICAgICAgICAgICBlY3MuY3JlYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQobmV3IEhvc3RpbGUoKSwgbmV3IFBvcyhwb3MueCwgcG9zLnksIHBvcy56KSwgbmV3IFNoYXBlKFNNQUxMX0NJUkNMRSkpXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaWEgPSAoZWNzKSA9PiB7XG4gICAgY29uc3QgaG9zdGlsZVNlbGVjdG9yID0gZWNzLnNlbGVjdChQb3MsIEhvc3RpbGUpXG4gICAgY29uc3QgcGxheWVyU2VsZWN0b3IgPSBlY3Muc2VsZWN0KFBvcywgUGxheWVyKVxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZSA6IChkdCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyU2VsZWN0b3IuaXRlcmF0ZSgocGxheWVyRW50aXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyUG9zID0gcGxheWVyRW50aXR5LmdldChQb3MpIFxuICAgICAgICAgICAgICAgIGhvc3RpbGVTZWxlY3Rvci5pdGVyYXRlKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG9zdGlsZVBvcyA9IGVudGl0eS5nZXQoUG9zKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gcGxheWVyUG9zLmNsb25lKClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYiA9IGQuc3ViKGVudGl0eS5nZXQoUG9zKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IGIubm9ybWFsaXNlKCkubXVsdGlwbHlTY2FsYXIoMC41KVxuICAgICAgICAgICAgICAgICAgICBob3N0aWxlUG9zLmFkZChuKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJpYWxEaXNwbGF5ID0gKGVjcywgY3R4KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlY3Muc2VsZWN0KFRyaWFsU3RhdGUpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlIDogKGR0KSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RlZC5pdGVyYXRlKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICBpZighZW50aXR5LmdldChUcmlhbFN0YXRlKS5pc1VwUHJlc3NlZCAmJiAhZW50aXR5LmdldChUcmlhbFN0YXRlKS5pc1VwUHJlc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXCJQcmVzcyBVcFwiLCAxMCwgNTApXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGVudGl0eS5nZXQoVHJpYWxTdGF0ZSkuaXNEb3duUHJlc3NlZCYmZW50aXR5LmdldChUcmlhbFN0YXRlKS5pc1VwUHJlc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXCJHb29kIERvZyAhXCIsIDEwLCA1MClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZW50aXR5LmdldChUcmlhbFN0YXRlKS5pc1VwUHJlc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXCJQcmVzcyBET1dOXCIsIDEwLCA1MClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbGl2ZUJvbWJzID0gKGVjcykgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gZWNzLnNlbGVjdChCb21iKVxuICAgIGNvbnN0IGhvc3RpbGVTZWxlY3RlZCA9IGVjcy5zZWxlY3QoSG9zdGlsZSwgUG9zKVxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZTogKGR0KSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RlZC5pdGVyYXRlKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBib21iID0gZW50aXR5LmdldChCb21iKVxuICAgICAgICAgICAgICAgIGJvbWIudGltZXIgLT0gZHRcbiAgICAgICAgICAgICAgICBpZihib21iLnRpbWVyIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZWplY3QoKVxuICAgICAgICAgICAgICAgICAgICBob3N0aWxlU2VsZWN0ZWQuaXRlcmF0ZSgoaG9zdGlsZUVudGl0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbGl2ZVVpID0gKGVjcywgY3R4KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlY3Muc2VsZWN0KFVJKVxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgc2VsZWN0ZWQuaXRlcmF0ZSgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdWkgPSBlbnRpdHkuZ2V0KFVJKVxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh1aS50ZXh0LCB1aS54LCB1aS55KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=