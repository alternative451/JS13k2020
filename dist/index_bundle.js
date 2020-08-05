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
/*! exports provided: Pos, Spawn, Controlable, TrialState, Bomb, Cooldown, CIRCLE, SQUARE, SMALL_CIRCLE, Shape, Hostile, Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos", function() { return Pos; });
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
/* harmony import */ var _libs_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/vector */ "./src/libs/vector.js");


class Pos extends _libs_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] {}

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
cv.width = window.innerWidth
cv.height = window.innerHeight

const ctx = cv.getContext("2d") 

js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].register(_components_js__WEBPACK_IMPORTED_MODULE_3__["Pos"], _components_js__WEBPACK_IMPORTED_MODULE_3__["Controlable"], _components_js__WEBPACK_IMPORTED_MODULE_3__["TrialState"], _components_js__WEBPACK_IMPORTED_MODULE_3__["Shape"], _components_js__WEBPACK_IMPORTED_MODULE_3__["Bomb"], _components_js__WEBPACK_IMPORTED_MODULE_3__["Player"], _components_js__WEBPACK_IMPORTED_MODULE_3__["Hostile"], _components_js__WEBPACK_IMPORTED_MODULE_3__["Spawn"])

js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].process(Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["draw"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["control"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["trialDisplay"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["liveBombs"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["liveSpawn"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_systems_js__WEBPACK_IMPORTED_MODULE_4__["ia"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]))

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
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["Shape"](_components_js__WEBPACK_IMPORTED_MODULE_3__["CIRCLE"]),
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["Pos"](cv.width / 2, cv.height / 2, 0),
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["Controlable"](),
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["Player"]()
  )
  js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]
  .create()
  .add(
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["Spawn"](),
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["Pos"](150, 150, 0),
  )
js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]
  .create()
  .add(
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["TrialState"](),
    new _components_js__WEBPACK_IMPORTED_MODULE_3__["Controlable"](),
  )

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

/***/ "./src/systems.js":
/*!************************!*\
  !*** ./src/systems.js ***!
  \************************/
/*! exports provided: control, draw, liveSpawn, ia, trialDisplay, liveBombs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "control", function() { return control; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveSpawn", function() { return liveSpawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ia", function() { return ia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trialDisplay", function() { return trialDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveBombs", function() { return liveBombs; });
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
                if(isUp) {
                    entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"]).y--
                }
                if(isDown) {
                    entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"]).y++
                }
                if(isLeft) {
                    entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"]).x--
                }
                if(isRight) {
                    entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"]).x++
                }
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
                    spawner.maxHostiles ++
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzMTNrLWVjcy9kaXN0L2Vjcy5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2F1ZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3NvbmFudF93cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3lzdGVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsa0JBQWtCLHFCQUFxQixzREFBc0Qsb0JBQW9CLFdBQVcseURBQXlELFNBQVMsaURBQWlELDRCQUE0QixrQkFBa0IsRUFB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2UkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNIO0FBQ2hGOztBQUUvQjtBQUNQLGdDQUFnQywrQ0FBRyxFQUFFLHVEQUFXO0FBQ2hELDhCQUE4QixzREFBVSxFQUFFLHVEQUFXOztBQUVyRDtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGFBQWEsY0FBYyx1REFBVztBQUM3RDtBQUNBLCtCQUErQixzREFBVTtBQUN6QztBQUNBO0FBQ0EsK0JBQStCLHNEQUFVO0FBQ3pDO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLHVCQUF1QixzQ0FBc0MsY0FBYyx1REFBVztBQUN0Rix1Q0FBdUMsK0NBQUc7QUFDMUM7QUFDQSwrQkFBK0IsK0NBQUc7QUFDbEM7QUFDQTtBQUNBLCtCQUErQiwrQ0FBRztBQUNsQztBQUNBO0FBQ0EsK0JBQStCLCtDQUFHO0FBQ2xDO0FBQ0E7QUFDQSwrQkFBK0IsK0NBQUc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBSTtBQUNoQyw0QkFBNEIsK0NBQUc7QUFDL0IsNEJBQTRCLGlEQUFLLENBQUMsa0RBQU07QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7OztBQUdPO0FBQ1AsZ0NBQWdDLCtDQUFHLEVBQUUsaURBQUs7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsK0NBQUc7QUFDMUMseUNBQXlDLGlEQUFLO0FBQzlDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7O0FBR087QUFDUCxnQ0FBZ0MsaURBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLCtDQUFHO0FBQzFDLDJDQUEyQyxpREFBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1EQUFPLFFBQVEsK0NBQUcsMkJBQTJCLGlEQUFLLENBQUMsd0RBQVk7QUFDaEcsaUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVPO0FBQ1AsdUNBQXVDLCtDQUFHLEVBQUUsbURBQU87QUFDbkQsc0NBQXNDLCtDQUFHLEVBQUUsa0RBQU07QUFDakQ7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELCtDQUFHO0FBQ3REO0FBQ0Esa0RBQWtELCtDQUFHO0FBQ3JEO0FBQ0EsK0NBQStDLCtDQUFHO0FBQ2xEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGdDQUFnQyxzREFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0RBQVUsNkJBQTZCLHNEQUFVO0FBQ2hGO0FBQ0EsaUJBQWlCLG9CQUFvQixzREFBVSw0QkFBNEIsc0RBQVU7QUFDckY7QUFDQSxpQkFBaUIsb0JBQW9CLHNEQUFVO0FBQy9DO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVPO0FBQ1AsZ0NBQWdDLGdEQUFJO0FBQ3BDLHVDQUF1QyxtREFBTyxFQUFFLCtDQUFHO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnREFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckI7O0FBRUEsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsQyIsImZpbGUiOiJpbmRleF9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciB0PVtdLG49W10scj17fSxlPVwiX3NpZ25cIixvPVwiX21hc2tcIjtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiYoZT1TeW1ib2woZSksbz1TeW1ib2wobykpO3ZhciBpPWZ1bmN0aW9uKHQsbil7dmFyIHI9blt0XTtpZighcil0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29tcG9uZW50IGlzIG5vdCByZWdpc3RlcmVkXCIpO3JldHVybiByfSxzPWkuYmluZChudWxsLGUpLGE9aS5iaW5kKG51bGwsbyksYz1mdW5jdGlvbihuKXtuLmlkJiZ0LmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHQubWF0Y2gobil9KX0saD0xLGY9e30sdT1mdW5jdGlvbih0KXt0aGlzLmlkPXR8fChoKyspLnRvU3RyaW5nKDM2KSx0aGlzLmNvbXBvbmVudHM9T2JqZWN0LmFzc2lnbih7fSxmKSx0aGlzLm1hc2s9MH07dS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMsbj1bXSxyPWFyZ3VtZW50cy5sZW5ndGg7ci0tOyluW3JdPWFyZ3VtZW50c1tyXTtuLmZvckVhY2goZnVuY3Rpb24obil7dC5jb21wb25lbnRzW3Mobi5jb25zdHJ1Y3RvcildPW4sdC5tYXNrfD1hKG4uY29uc3RydWN0b3IpfSksYyh0aGlzKX0sdS5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMsbj1bXSxyPWFyZ3VtZW50cy5sZW5ndGg7ci0tOyluW3JdPWFyZ3VtZW50c1tyXTtuLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHI9cyhuKSxlPXQuY29tcG9uZW50c1tyXTtlJiYoZS5kZXN0cnVjdG9yJiZlLmRlc3RydWN0b3IoKSxkZWxldGUgdC5jb21wb25lbnRzW3JdLHQubWFzayY9fmEobikpfSksYyh0aGlzKX0sdS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiBzKHQpaW4gdGhpcy5jb21wb25lbnRzfSx1LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY29tcG9uZW50c1t0W2VdXX0sdS5wcm90b3R5cGUuZWplY3Q9ZnVuY3Rpb24oKXshZnVuY3Rpb24obil7dmFyIGU9bi5jb21wb25lbnRzO2Zvcih2YXIgbyBpbiBlKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pKXt2YXIgaT1lW29dO2kmJmkuZGVzdHJ1Y3RvciYmaS5kZXN0cnVjdG9yKCl9dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlbW92ZShuKX0pLGRlbGV0ZSByW24uaWRdLG4uaWQ9MH0odGhpcyl9O3ZhciBwPWZ1bmN0aW9uKHQsbil7dGhpcy5lbnRpdHk9dCx0aGlzLnByZXY9bnVsbCx0aGlzLm5leHQ9bn0sbD1mdW5jdGlvbih0KXtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJFbXB0eSBzZWxlY3RvclwiKTtmb3IodmFyIG4gaW4gdGhpcy5tYXNrPXQsdGhpcy5tYXA9e30sdGhpcy5saXN0PW51bGwsdGhpcy5sZW5ndGg9MCxyKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLG4pJiZ0aGlzLm1hdGNoKHJbbl0pfTtsLnByb3RvdHlwZS5pdGVyYXRlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10aGlzLmxpc3Q7bjspdChuLmVudGl0eSksbj1uLm5leHR9LGwucHJvdG90eXBlLm1hdGNoPWZ1bmN0aW9uKHQpeyh0aGlzLm1hc2smdC5tYXNrKT09PXRoaXMubWFzaz90aGlzLmFkZCh0KTp0aGlzLnJlbW92ZSh0KX0sbC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe2lmKCF0aGlzLm1hcFt0LmlkXSl7dmFyIG49bmV3IHAodCx0aGlzLmxpc3QpO3RoaXMubGlzdCYmKHRoaXMubGlzdC5wcmV2PW4pLHRoaXMubGlzdD1uLHRoaXMubWFwW3QuaWRdPW4sdGhpcy5sZW5ndGgrK319LGwucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbih0KXt2YXIgbj10aGlzLm1hcFt0LmlkXTtuJiYobi5wcmV2P24ucHJldi5uZXh0PW4ubmV4dDp0aGlzLmxpc3Q9bi5uZXh0LG4ubmV4dCYmKG4ubmV4dC5wcmV2PW4ucHJldiksZGVsZXRlIHRoaXMubWFwW3QuaWRdLHRoaXMubGVuZ3RoLS0pfTt2YXIgbT0wLHY9cGVyZm9ybWFuY2V8fERhdGUsZD12Lm5vdy5iaW5kKHYpO2V4cG9ydCBkZWZhdWx0e3JlZ2lzdGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLG49YXJndW1lbnRzLmxlbmd0aDtuLS07KXRbbl09YXJndW1lbnRzW25dO3QuZm9yRWFjaChmdW5jdGlvbih0KXtpZihtPjMxKXRocm93IG5ldyBFcnJvcihcIkNvbXBvbmVudHMgbGltaXQgcmVhY2hlZFwiKTtpZighdFtlXSl7dmFyIG49bS50b1N0cmluZygzNik7ZltuXT1udWxsLHRbZV09bix0W29dPTE8PG0sbSsrfX0pfSxwcm9jZXNzOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLHI9YXJndW1lbnRzLmxlbmd0aDtyLS07KXRbcl09YXJndW1lbnRzW3JdO3QuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gbi5wdXNoKHQpfSl9LGNyZWF0ZTpmdW5jdGlvbih0KXt2YXIgbj1uZXcgdSh0KTtpZihyW24uaWRdKXRocm93IG5ldyBFcnJvcihcIlRoZSBJRCBhbHJlYWR5IGV4aXN0XCIpO3JldHVybiByW24uaWRdPW4sbn0sZ2V0OmZ1bmN0aW9uKHQpe3JldHVybiByW3RdfSxzZWxlY3Q6ZnVuY3Rpb24oKXtmb3IodmFyIG49W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspbltyXT1hcmd1bWVudHNbcl07dmFyIGU9MDtuLmZvckVhY2goZnVuY3Rpb24odCl7ZXw9YSh0KX0pO2Zvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKWlmKHRbb10ubWFzaz09PWUpcmV0dXJuIHRbb107dmFyIGk9bmV3IGwoZSk7cmV0dXJuIHQucHVzaChpKSxpfSx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIHI9e307cmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgZT1kKCk7bi51cGRhdGUodCkscltuLmNvbnN0cnVjdG9yLm5hbWVdPWQoKS1lfSkscn19O1xuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vbGlicy92ZWN0b3JcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFBvcyBleHRlbmRzIFZlY3RvciB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXduIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2QgPSAzMDAwXHJcbiAgICAgICAgdGhpcy5tYXhIb3N0aWxlcyA9IDNcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBwaTIgPSBNYXRoLlBJICogMlxyXG5cclxuXHJcbmNvbnN0IFogPSA5MFxyXG5jb25zdCBXID0gODdcclxuY29uc3QgUSA9IDgxXHJcbmNvbnN0IEEgPSA2NVxyXG5jb25zdCBTID0gODNcclxuY29uc3QgRCA9IDY4XHJcbmNvbnN0IEVTUEFDRSA9IDMyXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sYWJsZSB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXNVcCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc0xlZnQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNSaWdodCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNNYWluID0gZmFsc2VcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBaIHx8IGV2ZW50LmtleUNvZGUgPT09IFcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNVcCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBFU1BBQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNYWluID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IFEgfHwgZXZlbnQua2V5Q29kZSA9PT0gQSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xlZnQgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gRCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JpZ2h0ID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IFMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBaIHx8IGV2ZW50LmtleUNvZGUgPT09IFcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNVcCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gRVNQQUNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTWFpbiA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gUSB8fCBldmVudC5rZXlDb2RlID09PSBBKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTGVmdCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gRCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JpZ2h0ID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBTKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYWxTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlzVXBQcmVzc2VkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzRG93blByZXNzZWQgPSBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9tYiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aW1lcikge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSB0aW1lclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29vbGRvd24ge1xyXG4gICAgY29uc3RydWN0b3IodGltZXIpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSVJDTEUgPSAwXHJcbmV4cG9ydCBjb25zdCBTUVVBUkUgPSAxXHJcbmV4cG9ydCBjb25zdCBTTUFMTF9DSVJDTEUgPSAyXHJcbmV4cG9ydCBjbGFzcyBTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaGFwZSkge1xyXG4gICAgICAgIHRoaXMuZHJhdyA9IChjdHgsIHBvcykgPT4ge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlPSBcIiMxMzRcIlxyXG5cclxuICAgICAgICAgICAgaWYoc2hhcGUgPT09IENJUkNMRSkge1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKHBvcy54LCBwb3MueSwgMTYsIDAsIHBpMilcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsKClcclxuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoc2hhcGUgPT09IFNNQUxMX0NJUkNMRSkge1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKHBvcy54LCBwb3MueSwgOCwgMCwgcGkyKVxyXG4gICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QocG9zLnggLSA4LCBwb3MueSAtIDgsIDE2LCAxNilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvc3RpbGUge1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7fVxyXG4iLCJpbXBvcnQge1NvdW5kfSBmcm9tIFwiLi9saWJzL2F1ZGlvLmpzXCJcclxuaW1wb3J0IG1lbG9kaWUgZnJvbSBcIi4vYXNzZXRzL2F1ZGlvL21lbG8xLmpzb25cIjtcclxuXHJcbmltcG9ydCBlY3MgZnJvbSBcImpzMTNrLWVjc1wiO1xyXG5cclxuaW1wb3J0IHsgUG9zLCBDb250cm9sYWJsZSwgVHJpYWxTdGF0ZSwgU2hhcGUsIENJUkNMRSwgQm9tYiwgUGxheWVyLCBIb3N0aWxlLCBTcGF3biB9IGZyb20gXCIuL2NvbXBvbmVudHMuanNcIjtcclxuaW1wb3J0IHsgY29udHJvbCwgZHJhdywgdHJpYWxEaXNwbGF5LCBsaXZlQm9tYnMsIGxpdmVTcGF3biwgaWEgfSBmcm9tIFwiLi9zeXN0ZW1zLmpzXCI7XHJcblxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpKVxyXG5jb25zdCBjdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIilcclxuY3Yud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG5jdi5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHJcbmNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoXCIyZFwiKSBcclxuXHJcbmVjcy5yZWdpc3RlcihQb3MsIENvbnRyb2xhYmxlLCBUcmlhbFN0YXRlLCBTaGFwZSwgQm9tYiwgUGxheWVyLCBIb3N0aWxlLCBTcGF3bilcclxuXHJcbmVjcy5wcm9jZXNzKGRyYXcoZWNzLCBjdHgpLCBjb250cm9sKGVjcyksIHRyaWFsRGlzcGxheShlY3MsIGN0eCksIGxpdmVCb21icyhlY3MpLCBsaXZlU3Bhd24oZWNzKSwgaWEoZWNzKSlcclxuXHJcbi8qIHN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG1lbG9kaWVDdXJyeSA9IGF3YWl0IFNvdW5kKG1lbG9kaWUpXHJcbiAgIGNvbnN0IHNvdW5kSGFuZGxlID0gbWVsb2RpZUN1cnJ5KGZhbHNlKVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNvdW5kSGFuZGxlLnN0b3AoKVxyXG4gIH0sIDUwMClcclxufSkoKSovXHJcblxyXG5cclxuZWNzXHJcbiAgLmNyZWF0ZSgpXHJcbiAgLmFkZChcclxuICAgIG5ldyBTaGFwZShDSVJDTEUpLFxyXG4gICAgbmV3IFBvcyhjdi53aWR0aCAvIDIsIGN2LmhlaWdodCAvIDIsIDApLFxyXG4gICAgbmV3IENvbnRyb2xhYmxlKCksXHJcbiAgICBuZXcgUGxheWVyKClcclxuICApXHJcbiAgZWNzXHJcbiAgLmNyZWF0ZSgpXHJcbiAgLmFkZChcclxuICAgIG5ldyBTcGF3bigpLFxyXG4gICAgbmV3IFBvcygxNTAsIDE1MCwgMCksXHJcbiAgKVxyXG5lY3NcclxuICAuY3JlYXRlKClcclxuICAuYWRkKFxyXG4gICAgbmV3IFRyaWFsU3RhdGUoKSxcclxuICAgIG5ldyBDb250cm9sYWJsZSgpLFxyXG4gIClcclxuXHJcbiAgbGV0IGxhc3QgPSAwXHJcbiAgbGV0IG5vdyAgXHJcbmNvbnN0IGxvb3AgPSAoKSA9PiB7XHJcbiAgbm93ID0gcGVyZm9ybWFuY2Uubm93KClcclxuICBjdi53aWR0aCArPSAwXHJcbiAgZWNzLnVwZGF0ZShub3cgLSBsYXN0KVxyXG5cclxuICBsYXN0ID0gbm93XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXHJcbn1cclxuXHJcbmxvb3AoKSIsImltcG9ydCB7IHNvbmFudHhyX2dlbmVyYXRlX3NvbmcgfSBmcm9tIFwiLi9zb25hbnRfd3JhcHBlci5qc1wiXHJcblxyXG52YXIgYXVkaW9fY3R4ID0gbmV3ICh3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0fHx3aW5kb3cuQXVkaW9Db250ZXh0KSgpXHJcblxyXG5jb25zdCBtYWtlQXN5bmMgPSBhc3luYyAocmF3U291bmQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIHNvbmFudHhyX2dlbmVyYXRlX3NvbmcoYXVkaW9fY3R4LCByYXdTb3VuZCwgYnVmZmVyID0+IHtcclxuICAgICAgcmVzb2x2ZShidWZmZXIpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTb3VuZCA9IGFzeW5jIChyYXdTb3VuZCkgPT4ge1xyXG4gICAgXHJcbiAgY29uc3QgYnVmZmVyID0gYXdhaXQgbWFrZUFzeW5jKHJhd1NvdW5kKVxyXG4gIGNvbnN0IHNvdXJjZSA9IGF1ZGlvX2N0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxyXG4gIHNvdXJjZS5idWZmZXIgPSBidWZmZXJcclxuICBzb3VyY2UuY29ubmVjdChhdWRpb19jdHguZGVzdGluYXRpb24pXHJcblxyXG4gIHJldHVybiAobG9vcCkgPT4ge1xyXG4gICAgc291cmNlLmxvb3AgPSBsb29wXHJcbiAgICBzb3VyY2Uuc3RhcnQoKVxyXG4gICAgcmV0dXJuIHNvdXJjZVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc29uYW50eHJfZ2VuZXJhdGVfc29uZyA9IGZ1bmN0aW9uKGF1ZGlvX2N0eCwgc29uZ19kYXRhLCBjYWxsYmFjaykge1xyXG5cdHZhciBtdXNpY19nZW5lcmF0b3IgPSBuZXcgTXVzaWNHZW5lcmF0b3IoYXVkaW9fY3R4LCBzb25nX2RhdGEpO1xyXG5cdG11c2ljX2dlbmVyYXRvci5fY3JlYXRlQXVkaW9CdWZmZXIoY2FsbGJhY2spO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvbmFudHhyX2dlbmVyYXRlX3NvdW5kID0gZnVuY3Rpb24oYXVkaW9fY3R4LCBpbnN0cnVtZW50LCBub3RlLCBjYWxsYmFjaykge1xyXG5cdHZhciBzb3VuZF9nZW5lcmF0b3IgPSBuZXcgU291bmRHZW5lcmF0b3IoYXVkaW9fY3R4LCBpbnN0cnVtZW50KTtcclxuXHRzb3VuZF9nZW5lcmF0b3IuX2NyZWF0ZUF1ZGlvQnVmZmVyKG5vdGUsIGNhbGxiYWNrKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBfbWF0aCA9IE1hdGhcclxudmFyIFdBVkVfU1BTID0gNDQxMDA7XHRcdFx0XHRcdC8vIFNhbXBsZXMgcGVyIHNlY29uZFxyXG52YXIgTUFYX1RJTUUgPSAzMzsgLy8gbWF4aW11bSB0aW1lLCBpbiBtaWxsaXMsIHRoYXQgdGhlIGdlbmVyYXRvciBjYW4gdXNlIGNvbnNlY3V0aXZlbHlcclxuXHJcbnZhciBhdWRpb0N0eCA9IG51bGw7XHJcblxyXG4vLyBPc2NpbGxhdG9yc1xyXG5mdW5jdGlvbiBvc2Nfc2luKHZhbHVlKVxyXG57XHJcblx0cmV0dXJuIF9tYXRoLnNpbih2YWx1ZSAqIDYuMjgzMTg0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3NjX3NxdWFyZSh2YWx1ZSlcclxue1xyXG5cdHJldHVybiBvc2Nfc2luKHZhbHVlKSA8IDAgPyAtMSA6IDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9zY19zYXcodmFsdWUpXHJcbntcclxuXHRyZXR1cm4gKHZhbHVlICUgMSkgLSAwLjU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9zY190cmkodmFsdWUpXHJcbntcclxuXHR2YXIgdjIgPSAodmFsdWUgJSAxKSAqIDQ7XHJcblx0cmV0dXJuIHYyIDwgMiA/IHYyIC0gMSA6IDMgLSB2MjtcclxufVxyXG5cclxuLy8gQXJyYXkgb2Ygb3NjaWxsYXRvciBmdW5jdGlvbnNcclxudmFyIG9zY2lsbGF0b3JzID1cclxuW1xyXG5cdG9zY19zaW4sXHJcblx0b3NjX3NxdWFyZSxcclxuXHRvc2Nfc2F3LFxyXG5cdG9zY190cmlcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldG5vdGVmcmVxKG4pXHJcbntcclxuXHRyZXR1cm4gMC4wMDM5MDYyNSAqIF9tYXRoLnBvdygxLjA1OTQ2MzA5NCwgbiAtIDEyOCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnVmZmVyKHNhbXBsZXMpIHtcclxuICAgcmV0dXJuIHtcclxuXHRcdGxlZnQ6IG5ldyBGbG9hdDMyQXJyYXkoc2FtcGxlcyksXHJcblx0XHRyaWdodDogbmV3IEZsb2F0MzJBcnJheShzYW1wbGVzKVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5RGVsYXkoY2huQnVmLCB3YXZlU2FtcGxlcywgaW5zdHIsIHJvd0xlbikge1xyXG5cdHZhciBwMSA9IChpbnN0ci5meF9kZWxheV90aW1lICogcm93TGVuKSA+PiAxO1xyXG5cdHZhciB0MSA9IGluc3RyLmZ4X2RlbGF5X2FtdCAvIDI1NTtcclxuXHJcblx0dmFyIG4xID0gMDtcclxuXHR3aGlsZShuMSA8IHdhdmVTYW1wbGVzIC0gcDEpIHtcclxuXHRcdHZhciBiMSA9IG4xO1xyXG5cdFx0dmFyIGwgPSAobjEgKyBwMSk7XHJcblx0XHRjaG5CdWYubGVmdFtsXSArPSBjaG5CdWYucmlnaHRbYjFdICogdDE7XHJcblx0XHRjaG5CdWYucmlnaHRbbF0gKz0gY2huQnVmLmxlZnRbYjFdICogdDE7XHJcblx0XHRuMSsrO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEF1ZGlvQnVmZmVyKGN0eCwgbWl4QnVmKSB7XHJcblx0dmFyIGJ1ZmZlciA9IGN0eC5jcmVhdGVCdWZmZXIoMiwgbWl4QnVmLmxlZnQubGVuZ3RoLCBXQVZFX1NQUyk7IC8vIENyZWF0ZSBNb25vIFNvdXJjZSBCdWZmZXIgZnJvbSBSYXcgQmluYXJ5XHJcblx0YnVmZmVyLmdldENoYW5uZWxEYXRhKDApLnNldChtaXhCdWYubGVmdCk7XHJcblx0YnVmZmVyLmdldENoYW5uZWxEYXRhKDEpLnNldChtaXhCdWYucmlnaHQpO1xyXG5cdHJldHVybiBidWZmZXI7XHJcbn1cclxuXHJcbnZhciBTb3VuZEdlbmVyYXRvciA9IGZ1bmN0aW9uKGN0eCwgaW5zdHIsIHJvd0xlbikge1xyXG5cdHRoaXMuY3R4ID0gY3R4O1xyXG5cdHRoaXMuaW5zdHIgPSBpbnN0cjtcclxuXHR0aGlzLnJvd0xlbiA9IHJvd0xlbiB8fCA1NjA1O1xyXG5cclxuXHR0aGlzLm9zY19sZm8gPSBvc2NpbGxhdG9yc1tpbnN0ci5sZm9fd2F2ZWZvcm1dO1xyXG5cdHRoaXMub3NjMSA9IG9zY2lsbGF0b3JzW2luc3RyLm9zYzFfd2F2ZWZvcm1dO1xyXG5cdHRoaXMub3NjMiA9IG9zY2lsbGF0b3JzW2luc3RyLm9zYzJfd2F2ZWZvcm1dO1xyXG5cdHRoaXMuYXR0YWNrID0gaW5zdHIuZW52X2F0dGFjaztcclxuXHR0aGlzLnN1c3RhaW4gPSBpbnN0ci5lbnZfc3VzdGFpbjtcclxuXHR0aGlzLnJlbGVhc2UgPSBpbnN0ci5lbnZfcmVsZWFzZTtcclxuXHR0aGlzLnBhbkZyZXEgPSBfbWF0aC5wb3coMiwgaW5zdHIuZnhfcGFuX2ZyZXEgLSA4KSAvIHRoaXMucm93TGVuO1xyXG5cdHRoaXMubGZvRnJlcSA9IF9tYXRoLnBvdygyLCBpbnN0ci5sZm9fZnJlcSAtIDgpIC8gdGhpcy5yb3dMZW47XHJcbn07XHJcblxyXG5Tb3VuZEdlbmVyYXRvci5wcm90b3R5cGUuX2dlblNvdW5kID0gZnVuY3Rpb24obiwgY2huQnVmLCBjdXJyZW50cG9zKSB7XHJcblx0dmFyIGMxID0gMDtcclxuXHR2YXIgYzIgPSAwO1xyXG5cclxuXHQvLyBQcmVjYWxjdWxhdGUgZnJlcXVlbmN1ZXNcclxuXHR2YXIgbzF0ID0gZ2V0bm90ZWZyZXEobiArICh0aGlzLmluc3RyLm9zYzFfb2N0IC0gOCkgKiAxMiArIHRoaXMuaW5zdHIub3NjMV9kZXQpICogKDEgKyAwLjAwMDggKiB0aGlzLmluc3RyLm9zYzFfZGV0dW5lKTtcclxuXHR2YXIgbzJ0ID0gZ2V0bm90ZWZyZXEobiArICh0aGlzLmluc3RyLm9zYzJfb2N0IC0gOCkgKiAxMiArIHRoaXMuaW5zdHIub3NjMl9kZXQpICogKDEgKyAwLjAwMDggKiB0aGlzLmluc3RyLm9zYzJfZGV0dW5lKTtcclxuXHJcblx0Ly8gU3RhdGUgdmFyaWFibGUgaW5pdFxyXG5cdHZhciBxID0gdGhpcy5pbnN0ci5meF9yZXNvbmFuY2UgLyAyNTU7XHJcblx0dmFyIGxvdyA9IDA7XHJcblx0dmFyIGJhbmQgPSAwO1xyXG5cclxuXHR2YXIgY2huYnVmTGVuZ3RoID0gY2huQnVmLmxlZnQubGVuZ3RoO1xyXG5cdHZhciBudW1TYW1wbGVzID0gdGhpcy5hdHRhY2sgKyB0aGlzLnN1c3RhaW4gKyB0aGlzLnJlbGVhc2UgLSAxO1xyXG5cdFxyXG5cdGZvciAodmFyIGogPSBudW1TYW1wbGVzOyBqID49IDA7IC0taikge1xyXG5cdFx0dmFyIGsgPSBqICsgY3VycmVudHBvcztcclxuXHJcblx0XHQvLyBMRk9cclxuXHRcdHZhciBsZm9yID0gdGhpcy5vc2NfbGZvKGsgKiB0aGlzLmxmb0ZyZXEpICogdGhpcy5pbnN0ci5sZm9fYW10IC8gNTEyICsgMC41O1xyXG5cclxuXHRcdC8vIEVudmVsb3BlXHJcblx0XHR2YXIgZSA9IDE7XHJcblx0XHRpZiAoaiA8IHRoaXMuYXR0YWNrKSB7XHJcblx0XHRcdGUgPSBqIC8gdGhpcy5hdHRhY2s7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChqID49IHRoaXMuYXR0YWNrICsgdGhpcy5zdXN0YWluKSB7XHJcblx0XHRcdGUgLT0gKGogLSB0aGlzLmF0dGFjayAtIHRoaXMuc3VzdGFpbikgLyB0aGlzLnJlbGVhc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gT3NjaWxsYXRvciAxXHJcblx0XHR2YXIgdCA9IG8xdDtcclxuXHRcdGlmICh0aGlzLmluc3RyLmxmb19vc2MxX2ZyZXEpIHtcclxuXHRcdFx0dCArPSBsZm9yO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuaW5zdHIub3NjMV94ZW52KSB7XHJcblx0XHRcdHQgKj0gZSAqIGUgXHJcblx0XHR9XHJcblx0XHRjMSArPSB0O1xyXG5cdFx0dmFyIHJzYW1wbGUgPSB0aGlzLm9zYzEoYzEpICogdGhpcy5pbnN0ci5vc2MxX3ZvbDtcclxuXHJcblx0XHQvLyBPc2NpbGxhdG9yIDJcclxuXHRcdHQgPSBvMnQ7XHJcblx0XHRpZiAodGhpcy5pbnN0ci5vc2MyX3hlbnYpIHtcclxuXHRcdFx0dCAqPSBlICogZTtcclxuXHRcdH07XHJcblx0XHRjMiArPSB0O1xyXG5cdFx0cnNhbXBsZSArPSB0aGlzLm9zYzIoYzIpICogdGhpcy5pbnN0ci5vc2MyX3ZvbDtcclxuXHJcblx0XHQvLyBOb2lzZSBvc2NpbGxhdG9yXHJcblx0XHRpZiAodGhpcy5pbnN0ci5ub2lzZV9mYWRlcikge1xyXG5cdFx0XHRyc2FtcGxlICs9ICgyKl9tYXRoLnJhbmRvbSgpLTEpICogdGhpcy5pbnN0ci5ub2lzZV9mYWRlciAqIGU7XHJcblx0XHR9XHJcblxyXG5cdFx0cnNhbXBsZSAqPSBlIC8gMjU1O1xyXG5cclxuXHRcdC8vIFN0YXRlIHZhcmlhYmxlIGZpbHRlclxyXG5cdFx0dmFyIGYgPSB0aGlzLmluc3RyLmZ4X2ZyZXE7XHJcblx0XHRpZiAodGhpcy5pbnN0ci5sZm9fZnhfZnJlcSkge1xyXG5cdFx0XHRmICo9IGxmb3I7XHJcblx0XHR9XHJcblx0XHRmID0gMS41ICogX21hdGguc2luKGYgKiAzLjE0MTU5MiAvIFdBVkVfU1BTKTtcclxuXHRcdGxvdyArPSBmICogYmFuZDtcclxuXHRcdHZhciBoaWdoID0gcSAqIChyc2FtcGxlIC0gYmFuZCkgLSBsb3c7XHJcblx0XHRiYW5kICs9IGYgKiBoaWdoO1xyXG5cdFx0c3dpdGNoICh0aGlzLmluc3RyLmZ4X2ZpbHRlcikge1xyXG5cdFx0XHRjYXNlIDE6IC8vIEhpcGFzc1xyXG5cdFx0XHRcdHJzYW1wbGUgPSBoaWdoO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI6IC8vIExvcGFzc1xyXG5cdFx0XHRcdHJzYW1wbGUgPSBsb3c7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMzogLy8gQmFuZHBhc3NcclxuXHRcdFx0XHRyc2FtcGxlID0gYmFuZDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0OiAvLyBOb3RjaFxyXG5cdFx0XHRcdHJzYW1wbGUgPSBsb3cgKyBoaWdoO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFBhbm5pbmcgJiBtYXN0ZXIgdm9sdW1lXHJcblx0XHR0ID0gb3NjX3NpbihrICogdGhpcy5wYW5GcmVxKSAqIHRoaXMuaW5zdHIuZnhfcGFuX2FtdCAvIDUxMiArIDAuNTtcclxuXHRcdHJzYW1wbGUgKj0gMC4wMDQ3NiAqIHRoaXMuaW5zdHIuZW52X21hc3RlcjsgLy8gMzkgLyA4MTkyID0gMC4wMDQ3NlxyXG5cclxuXHRcdC8vIEFkZCB0byAxNi1iaXQgY2hhbm5lbCBidWZmZXJcclxuXHRcdC8vIGsgPSBrICogMjtcclxuXHRcdGlmIChrIDwgY2huYnVmTGVuZ3RoKSB7XHJcblx0XHRcdGNobkJ1Zi5sZWZ0W2tdICs9IHJzYW1wbGUgKiAoMS10KSA7XHJcblx0XHRcdGNobkJ1Zi5yaWdodFtrXSArPSByc2FtcGxlICogdDtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5Tb3VuZEdlbmVyYXRvci5wcm90b3R5cGUuX2NyZWF0ZUF1ZGlvQnVmZmVyID0gZnVuY3Rpb24obiwgY2FsbEJhY2spIHtcclxuXHR2YXIgYnVmZmVyU2l6ZSA9ICh0aGlzLmF0dGFjayArIHRoaXMuc3VzdGFpbiArIHRoaXMucmVsZWFzZSAtIDEpICsgKDMyICogdGhpcy5yb3dMZW4pO1xyXG5cdHZhciBidWZmZXIgPSBnZW5lcmF0ZUJ1ZmZlcihidWZmZXJTaXplKTtcclxuXHR0aGlzLl9nZW5Tb3VuZChuLCBidWZmZXIsIDApO1xyXG5cdGFwcGx5RGVsYXkoYnVmZmVyLCBidWZmZXJTaXplLCB0aGlzLmluc3RyLCB0aGlzLnJvd0xlbik7XHJcblxyXG5cdGNhbGxCYWNrKGdldEF1ZGlvQnVmZmVyKHRoaXMuY3R4LCBidWZmZXIpKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbnZhciBNdXNpY0dlbmVyYXRvciA9IGZ1bmN0aW9uKGN0eCwgc29uZykge1xyXG5cdHRoaXMuY3R4ID0gY3R4O1xyXG5cdHRoaXMuc29uZyA9IHNvbmc7XHJcblx0Ly8gV2F2ZSBkYXRhIGNvbmZpZ3VyYXRpb25cclxuXHR0aGlzLndhdmVTaXplID0gV0FWRV9TUFMgKiBzb25nLnNvbmdMZW47IC8vIFRvdGFsIHNvbmcgc2l6ZSAoaW4gc2FtcGxlcylcclxufTtcclxuXHJcbk11c2ljR2VuZXJhdG9yLnByb3RvdHlwZS5fZ2VuZXJhdGVUcmFjayA9IGZ1bmN0aW9uIChpbnN0ciwgbWl4QnVmLCBjYWxsQmFjaykge1xyXG5cdHZhciBzZWxmID0gdGhpcztcclxuXHR2YXIgY2huQnVmID0gZ2VuZXJhdGVCdWZmZXIodGhpcy53YXZlU2l6ZSk7XHJcblx0Ly8gUHJlbG9hZC9wcmVjYWxjIHNvbWUgcHJvcGVydGllcy9leHByZXNzaW9ucyAoZm9yIGltcHJvdmVkIHBlcmZvcm1hbmNlKVxyXG5cdHZhciB3YXZlU2FtcGxlcyA9IHNlbGYud2F2ZVNpemUsXHJcblx0XHRyb3dMZW4gPSBzZWxmLnNvbmcucm93TGVuLFxyXG5cdFx0ZW5kUGF0dGVybiA9IHNlbGYuc29uZy5lbmRQYXR0ZXJuLFxyXG5cdFx0c291bmRHZW4gPSBuZXcgU291bmRHZW5lcmF0b3Ioc2VsZi5jdHgsIGluc3RyLCByb3dMZW4pO1xyXG5cclxuXHR2YXIgY3VycmVudHBvcyA9IDA7XHJcblx0dmFyIHAgPSAwO1xyXG5cdHZhciByb3cgPSAwO1xyXG5cdHZhciByZWNvcmRTb3VuZHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBiZWdpbm5pbmcgPSBEYXRlLm5vdygpO1xyXG5cdFx0d2hpbGUgKHRydWUpIHtcclxuXHRcdFx0aWYgKHJvdyA9PT0gMzIpIHtcclxuXHRcdFx0XHRyb3cgPSAwO1xyXG5cdFx0XHRcdHAgKz0gMTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocCA9PT0gZW5kUGF0dGVybiAtIDEpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmluYWxpemUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgY3AgPSBpbnN0ci5wW3BdO1xyXG5cdFx0XHRpZiAoY3ApIHtcclxuXHRcdFx0XHR2YXIgbiA9IGluc3RyLmNbY3AgLSAxXS5uW3Jvd107XHJcblx0XHRcdFx0aWYgKG4pIHtcclxuXHRcdFx0XHRcdHNvdW5kR2VuLl9nZW5Tb3VuZChuLCBjaG5CdWYsIGN1cnJlbnRwb3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjdXJyZW50cG9zICs9IHJvd0xlbjtcclxuXHRcdFx0cm93ICs9IDE7XHJcblx0XHRcdGlmIChEYXRlLm5vdygpIC0gYmVnaW5uaW5nID4gTUFYX1RJTUUpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KHJlY29yZFNvdW5kcywgMCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIGZpbmFsaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHRhcHBseURlbGF5KGNobkJ1Ziwgd2F2ZVNhbXBsZXMsIGluc3RyLCByb3dMZW4pO1xyXG5cdFx0Zm9yICh2YXIgYjIgPSAwOyBiMiA8IHdhdmVTYW1wbGVzOyBiMisrKSB7XHJcblx0XHRcdG1peEJ1Zi5sZWZ0W2IyXSArPSBjaG5CdWYubGVmdFtiMl07XHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBiMiA9IDA7IGIyIDwgd2F2ZVNhbXBsZXM7IGIyKyspIHtcclxuXHRcdFx0bWl4QnVmLnJpZ2h0W2IyXSArPSBjaG5CdWYucmlnaHRbYjJdO1xyXG5cdFx0fVxyXG5cdFx0Y2FsbEJhY2soKTtcclxuXHR9O1xyXG5cclxuXHRyZWNvcmRTb3VuZHMoKTtcclxufTtcclxuXHJcbk11c2ljR2VuZXJhdG9yLnByb3RvdHlwZS5fY3JlYXRlQXVkaW9CdWZmZXIgPSBmdW5jdGlvbihjYWxsQmFjaykge1xyXG5cdHZhciBzZWxmID0gdGhpcztcclxuXHR2YXIgbWl4QnVmID0gZ2VuZXJhdGVCdWZmZXIodGhpcy53YXZlU2l6ZSk7XHJcblx0dmFyIHRyYWNrID0gMDtcclxuXHJcblx0dmFyIG5leHRUcmFjayA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRyYWNrIDwgc2VsZi5zb25nLnNvbmdEYXRhLmxlbmd0aCkge1xyXG5cdFx0XHR0cmFjayArPSAxO1xyXG5cdFx0XHRzZWxmLl9nZW5lcmF0ZVRyYWNrKHNlbGYuc29uZy5zb25nRGF0YVt0cmFjayAtIDFdLCBtaXhCdWYsIG5leHRUcmFjayk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y2FsbEJhY2soZ2V0QXVkaW9CdWZmZXIoc2VsZi5jdHgsIG1peEJ1ZikpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0bmV4dFRyYWNrKCk7XHJcbn07XHJcblxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIFZlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LHkseikge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy56ID0gelxyXG4gICAgfVxyXG4gICAgZG90KHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55ICsgdGhpcy56ICogdi56XHJcbiAgICB9XHJcbiAgICBzZXRTY2FsYXIoc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy54ID0gc2NhbGFyXHJcbiAgICAgICAgdGhpcy55ID0gc2NhbGFyXHJcbiAgICAgICAgdGhpcy56ID0gc2NhbGFyXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIG11bHRpcGx5U2NhbGFyKHNjYWxhcikge1xyXG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXJcclxuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyXHJcbiAgICAgICAgdGhpcy56ICo9IHNjYWxhclxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBkaXZpZGVTY2FsYXIoc2NhbGFyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlTY2FsYXIoMS9zY2FsYXIpXHJcbiAgICB9XHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCggdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56IClcclxuICAgIH1cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55LCB0aGlzLnopXHJcbiAgICB9XHJcbiAgICBjbGFtcChtaW4sIG1heCkge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgubWF4KCBtaW4ueCwgTWF0aC5taW4oIG1heC54LCB0aGlzLnggKSApXHJcblx0XHR0aGlzLnkgPSBNYXRoLm1heCggbWluLnksIE1hdGgubWluKCBtYXgueSwgdGhpcy55ICkgKVxyXG4gICAgICAgIHRoaXMueiA9IE1hdGgubWF4KCBtaW4ueiwgTWF0aC5taW4oIG1heC56LCB0aGlzLnogKSApXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIGFkZCh2KSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHYueFxyXG4gICAgICAgIHRoaXMueSArPSB2LnlcclxuICAgICAgICB0aGlzLnogKz0gdi56XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIHN1Yih2KSB7XHJcbiAgICAgICAgdGhpcy54IC09IHYueFxyXG4gICAgICAgIHRoaXMueSAtPSB2LnlcclxuICAgICAgICB0aGlzLnogLT0gdi56XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIG11bHRpcGx5KHYpIHtcclxuICAgICAgICB0aGlzLnggKj0gdi54XHJcbiAgICAgICAgdGhpcy55ICo9IHYueVxyXG4gICAgICAgIHRoaXMueiAqPSB2LnpcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZVNjYWxhcih0aGlzLmxlbmd0aCgpKVxyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3h9ICR7eX0gJHt6fWBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IFBvcywgQ29udHJvbGFibGUsIFRyaWFsU3RhdGUsIEJvbWIsIFNoYXBlLCBTUVVBUkUsIEhvc3RpbGUsIFNwYXduLCBTTUFMTF9DSVJDTEUsIFBsYXllciB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi9saWJzL3ZlY3RvclwiXHJcblxyXG5leHBvcnQgY29uc3QgY29udHJvbCA9IChlY3MpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZWNzLnNlbGVjdChQb3MsIENvbnRyb2xhYmxlKVxyXG4gICAgY29uc3QgdHJpYWxzID0gZWNzLnNlbGVjdChUcmlhbFN0YXRlLCBDb250cm9sYWJsZSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZSA6IChkdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdHJpYWxzLml0ZXJhdGUoKGVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge2lzVXAsIGlzRG93bn0gPSBlbnRpdHkuZ2V0KENvbnRyb2xhYmxlKVxyXG4gICAgICAgICAgICAgICAgaWYoaXNVcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5nZXQoVHJpYWxTdGF0ZSkuaXNVcFByZXNzZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZ2V0KFRyaWFsU3RhdGUpLmlzRG93blByZXNzZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzZWxlY3RlZC5pdGVyYXRlKChlbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpc1VwLCBpc0Rvd24sIGlzTGVmdCwgaXNSaWdodCwgaXNNYWlufSA9IGVudGl0eS5nZXQoQ29udHJvbGFibGUpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBlbnRpdHkuZ2V0KFBvcylcclxuICAgICAgICAgICAgICAgIGlmKGlzVXApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZ2V0KFBvcykueS0tXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZ2V0KFBvcykueSsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpc0xlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZ2V0KFBvcykueC0tXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpc1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmdldChQb3MpLngrK1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWNzXHJcbiAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJvbWIoMzAwMCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9zKHBvcy54LCBwb3MueSwgMCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU2hhcGUoU1FVQVJFKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZHJhdyA9IChlY3MsIGN0eCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlY3Muc2VsZWN0KFBvcywgU2hhcGUpXHJcbiBcclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIHVwZGF0ZSA6IChkdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZC5pdGVyYXRlKChlbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGVudGl0eS5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBlbnRpdHkuZ2V0KFNoYXBlKVxyXG4gICAgICAgICAgICAgICAgc2hhcGUuZHJhdyhjdHgsIHBvcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbGl2ZVNwYXduID0gKGVjcykgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBlY3Muc2VsZWN0KFNwYXduKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGU6IChkdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3Rvci5pdGVyYXRlKChlbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGVudGl0eS5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Bhd25lciA9IGVudGl0eS5nZXQoU3Bhd24pXHJcbiAgICAgICAgICAgICAgICBzcGF3bmVyLmNkIC09IGR0XHJcbiAgICAgICAgICAgICAgICBpZihzcGF3bmVyLmNkIDwgMCAmJiBzcGF3bmVyLm1heEhvc3RpbGVzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYXduZXIubWF4SG9zdGlsZXMgKytcclxuICAgICAgICAgICAgICAgICAgICBzcGF3bmVyLmNkID0gMzAwMFxyXG4gICAgICAgICAgICAgICAgICAgIGVjcy5jcmVhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkKG5ldyBIb3N0aWxlKCksIG5ldyBQb3MocG9zLngsIHBvcy55LCBwb3MueiksIG5ldyBTaGFwZShTTUFMTF9DSVJDTEUpKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaWEgPSAoZWNzKSA9PiB7XHJcbiAgICBjb25zdCBob3N0aWxlU2VsZWN0b3IgPSBlY3Muc2VsZWN0KFBvcywgSG9zdGlsZSlcclxuICAgIGNvbnN0IHBsYXllclNlbGVjdG9yID0gZWNzLnNlbGVjdChQb3MsIFBsYXllcilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlIDogKGR0KSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllclNlbGVjdG9yLml0ZXJhdGUoKHBsYXllckVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyUG9zID0gcGxheWVyRW50aXR5LmdldChQb3MpIFxyXG4gICAgICAgICAgICAgICAgaG9zdGlsZVNlbGVjdG9yLml0ZXJhdGUoKGVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvc3RpbGVQb3MgPSBlbnRpdHkuZ2V0KFBvcylcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gcGxheWVyUG9zLmNsb25lKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiID0gZC5zdWIoZW50aXR5LmdldChQb3MpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBiLm5vcm1hbGlzZSgpLm11bHRpcGx5U2NhbGFyKDAuNSlcclxuICAgICAgICAgICAgICAgICAgICBob3N0aWxlUG9zLmFkZChuKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmlhbERpc3BsYXkgPSAoZWNzLCBjdHgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZWNzLnNlbGVjdChUcmlhbFN0YXRlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGUgOiAoZHQpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuaXRlcmF0ZSgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighZW50aXR5LmdldChUcmlhbFN0YXRlKS5pc1VwUHJlc3NlZCAmJiAhZW50aXR5LmdldChUcmlhbFN0YXRlKS5pc1VwUHJlc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlByZXNzIFVwXCIsIDEwLCA1MClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlbnRpdHkuZ2V0KFRyaWFsU3RhdGUpLmlzRG93blByZXNzZWQmJmVudGl0eS5nZXQoVHJpYWxTdGF0ZSkuaXNVcFByZXNzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXCJHb29kIERvZyAhXCIsIDEwLCA1MClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlbnRpdHkuZ2V0KFRyaWFsU3RhdGUpLmlzVXBQcmVzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiUHJlc3MgRE9XTlwiLCAxMCwgNTApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGl2ZUJvbWJzID0gKGVjcykgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlY3Muc2VsZWN0KEJvbWIpXHJcbiAgICBjb25zdCBob3N0aWxlU2VsZWN0ZWQgPSBlY3Muc2VsZWN0KEhvc3RpbGUsIFBvcylcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlOiAoZHQpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuaXRlcmF0ZSgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib21iID0gZW50aXR5LmdldChCb21iKVxyXG4gICAgICAgICAgICAgICAgYm9tYi50aW1lciAtPSBkdFxyXG4gICAgICAgICAgICAgICAgaWYoYm9tYi50aW1lciA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIGhvc3RpbGVTZWxlY3RlZC5pdGVyYXRlKChob3N0aWxlRW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9