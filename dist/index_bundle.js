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

module.exports = JSON.parse("{\"rowLen\":7350,\"endPattern\":4,\"songData\":[{\"osc1_oct\":7,\"osc1_det\":0,\"osc1_detune\":0,\"osc1_xenv\":0,\"osc1_vol\":192,\"osc1_waveform\":2,\"osc2_oct\":7,\"osc2_det\":0,\"osc2_detune\":0,\"osc2_xenv\":0,\"osc2_vol\":201,\"osc2_waveform\":3,\"noise_fader\":0,\"env_attack\":100,\"env_sustain\":150,\"env_release\":13636,\"env_master\":92,\"fx_filter\":2,\"fx_freq\":4280,\"fx_resonance\":111,\"fx_delay_time\":6,\"fx_delay_amt\":121,\"fx_pan_freq\":6,\"fx_pan_amt\":64,\"lfo_osc1_freq\":0,\"lfo_fx_freq\":1,\"lfo_freq\":6,\"lfo_amt\":75,\"lfo_waveform\":0,\"p\":[1,1,3],\"c\":[{\"n\":[147,0,0,0,147,0,0,0,149,0,0,0,147,0,0,0,151,0,0,0,154,0,0,0,153,0,0,0,157,0,0,0]},{\"n\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{\"n\":[157,0,0,0,158,0,0,0,156,0,0,0,157,0,0,0,157,0,0,0,160,0,0,0,159,0,0,0,158,0,0,0]}]},{\"osc1_oct\":7,\"osc1_det\":0,\"osc1_detune\":0,\"osc1_xenv\":1,\"osc1_vol\":255,\"osc1_waveform\":0,\"osc2_oct\":7,\"osc2_det\":0,\"osc2_detune\":0,\"osc2_xenv\":1,\"osc2_vol\":255,\"osc2_waveform\":0,\"noise_fader\":0,\"env_attack\":50,\"env_sustain\":150,\"env_release\":4800,\"env_master\":200,\"fx_filter\":2,\"fx_freq\":600,\"fx_resonance\":254,\"fx_delay_time\":0,\"fx_delay_amt\":0,\"fx_pan_freq\":0,\"fx_pan_amt\":0,\"lfo_osc1_freq\":0,\"lfo_fx_freq\":0,\"lfo_freq\":0,\"lfo_amt\":0,\"lfo_waveform\":0,\"p\":[0,2,2],\"c\":[{\"n\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{\"n\":[152,0,0,0,152,0,0,0,152,0,0,0,154,0,0,0,154,0,0,0,152,0,0,0,152,0,0,0,152,0,0,0]}]},{\"osc1_oct\":8,\"osc1_det\":0,\"osc1_detune\":0,\"osc1_xenv\":0,\"osc1_vol\":0,\"osc1_waveform\":0,\"osc2_oct\":8,\"osc2_det\":0,\"osc2_detune\":0,\"osc2_xenv\":0,\"osc2_vol\":0,\"osc2_waveform\":0,\"noise_fader\":60,\"env_attack\":50,\"env_sustain\":419,\"env_release\":4607,\"env_master\":130,\"fx_filter\":1,\"fx_freq\":10332,\"fx_resonance\":120,\"fx_delay_time\":4,\"fx_delay_amt\":16,\"fx_pan_freq\":5,\"fx_pan_amt\":108,\"lfo_osc1_freq\":0,\"lfo_fx_freq\":0,\"lfo_freq\":5,\"lfo_amt\":187,\"lfo_waveform\":0,\"p\":[0,0,4],\"c\":[{\"n\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{\"n\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{\"n\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{\"n\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,147,147,147,147]}]}],\"songLen\":23}");

/***/ }),

/***/ "./src/assets/maps/home.json":
/*!***********************************!*\
  !*** ./src/assets/maps/home.json ***!
  \***********************************/
/*! exports provided: compressionlevel, editorsettings, height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"home.json\"}},\"height\":12,\"infinite\":false,\"layers\":[{\"draworder\":\"topdown\",\"id\":2,\"name\":\"Calque d'Objets 1\",\"objects\":[{\"height\":0,\"id\":1,\"name\":\"\",\"point\":true,\"properties\":[{\"name\":\"isRed\",\"type\":\"bool\",\"value\":true},{\"name\":\"status\",\"type\":\"string\",\"value\":\"sleep\"}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":0,\"x\":12.9536011080332,\"y\":7.89127423822715}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":12,\"id\":1,\"name\":\"Calque de Tuiles 1\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":22,\"x\":0,\"y\":0}],\"nextlayerid\":3,\"nextobjectid\":2,\"orientation\":\"orthogonal\",\"renderorder\":\"right-down\",\"tiledversion\":\"1.4.2\",\"tileheight\":1,\"tilesets\":[{\"firstgid\":1,\"source\":\"aos.tsx\"}],\"tilewidth\":1,\"type\":\"map\",\"version\":1.4,\"width\":22}");

/***/ }),

/***/ "./src/assets/maps/welcome.json":
/*!**************************************!*\
  !*** ./src/assets/maps/welcome.json ***!
  \**************************************/
/*! exports provided: compressionlevel, editorsettings, height, infinite, layers, properties, width, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"compressionlevel\":-1,\"editorsettings\":{\"export\":{\"format\":\"json\",\"target\":\"welcome.json\"}},\"height\":12,\"infinite\":false,\"layers\":[{\"draworder\":\"topdown\",\"id\":2,\"name\":\"Calque d'Objets 1\",\"objects\":[{\"height\":0,\"id\":1,\"name\":\"\",\"point\":true,\"properties\":[{\"name\":\"isStart\",\"type\":\"bool\",\"value\":true}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":0,\"x\":4.78233,\"y\":6.00282},{\"height\":19,\"id\":2,\"name\":\"\",\"properties\":[{\"name\":\"doors\",\"type\":\"int\",\"value\":2}],\"rotation\":0,\"text\":{\"fontfamily\":\"MS Shell Dlg 2\",\"pixelsize\":3,\"text\":\"Move with zqsd or wasd\",\"wrap\":true},\"type\":\"\",\"visible\":true,\"width\":108,\"x\":10.8364,\"y\":3.23701},{\"height\":0,\"id\":3,\"name\":\"\",\"point\":true,\"properties\":[{\"name\":\"isSpawn\",\"type\":\"bool\",\"value\":true},{\"name\":\"max\",\"type\":\"int\",\"value\":2},{\"name\":\"total\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":0,\"x\":15.1117,\"y\":7.05213},{\"height\":0,\"id\":4,\"name\":\"\",\"point\":true,\"properties\":[{\"name\":\"isDestroyable\",\"type\":\"bool\",\"value\":true}],\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":0,\"x\":15.3995481549661,\"y\":9.57074721780604}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"width\":22,\"x\":0,\"y\":0}],\"properties\":[{\"name\":\"bombs\",\"type\":\"string\",\"value\":\"3,4,1\"},{\"name\":\"canRoll\",\"type\":\"bool\",\"value\":true}],\"width\":22}");

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/*! exports provided: Pos, Speed, Acc, Spawn, Controlable, TrialState, Bomb, CIRCLE, SQUARE, SMALL_CIRCLE, Agent, Dead, EXPLODE_TYPE, Hostile, PreBlast, Player, UI, Collidable, Wall, BombSlot, BombBag, Blast, Door, Explosion, Particle, Eyes, Status, Explodable */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIRCLE", function() { return CIRCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE", function() { return SQUARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMALL_CIRCLE", function() { return SMALL_CIRCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agent", function() { return Agent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dead", function() { return Dead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPLODE_TYPE", function() { return EXPLODE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hostile", function() { return Hostile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreBlast", function() { return PreBlast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collidable", function() { return Collidable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return Wall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BombSlot", function() { return BombSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BombBag", function() { return BombBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blast", function() { return Blast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Door", function() { return Door; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Explosion", function() { return Explosion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eyes", function() { return Eyes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Explodable", function() { return Explodable; });
/* harmony import */ var _libs_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/vector */ "./src/libs/vector.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/utils */ "./src/libs/utils.js");
/* harmony import */ var _draw_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw_helpers */ "./src/draw_helpers.js");





class Pos extends _libs_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] {}
class Speed extends _libs_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] {}
class Acc extends _libs_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] {}

class Spawn {
    constructor(ecs, max, total, type) {
        this.type = type
        this.cd = _config__WEBPACK_IMPORTED_MODULE_1__["SPAWNER_CD"]
        this.maxHostiles = max
        this.total = total
        this.hostiles = []

        for(let i = 0; i < this.maxHostiles; i ++) {
            this.hostiles.push(Object(_libs_utils__WEBPACK_IMPORTED_MODULE_2__["createRed"])(ecs, new Pos(0, 0, 0), false, null, type))
        }
    }
    remaining() {
        let remainingAlive = 0
        for(let i = 0; i < this.hostiles.length; i ++) {
            if(this.hostiles[i].get(Hostile).isActive) {
                remainingAlive ++
            }
        }
        return this.total + remainingAlive
    }
    hasOne() {
        for(let i = 0; i < this.hostiles.length; i ++) {
            if(this.hostiles[i].get(Hostile).isActive === false) {
                return this.hostiles[i]
            }
        }
        return false
    }
    active(pos) {
        const hostile = this.hasOne()
        if(hostile) {
            hostile.get(Hostile).isActive = true
            hostile.get(Pos).set(pos)
        }
    }
}

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
    constructor(sc) {
        this.sc = sc
    }
}

class Bomb {
    constructor(type, time, radius) {
        this.triggered = false
        this.armed = false
        this.type = type
        this.remaining = time
        this.total = time
        this.radius = radius
    }
}


const CIRCLE = 0
const SQUARE = 1
const SMALL_CIRCLE = 2
class Agent {
    constructor(draw) {
        this.draw = draw
    }
}

class Dead {
    constructor(diedAt) {
        this.diedAt = diedAt
    }
}

const EXPLODE_TYPE = 1
class Hostile {
    constructor(target, type, isActive, status) {
        this.status = status
        this.target = target
        this.isActive = isActive
        this.type = type
        this.isAttacking = false
        this.effect = null
        this.effectTime = 0
    }
}

class PreBlast {
    constructor(hostile, remaining, type) {
        this.hostile = hostile
        this.type = type
        this.remaining = remaining
    }
}

class Player {
    constructor() {
        this.hp = 100
    }
}

class UI {
    constructor(text, x, y, fn, isButton) {
        this.text = text
        this.x = x
        this.y = y
        this.isButton = isButton
        this.isHover = false
        this.add = (e) => {
            if (e.pageY > y && e.pageY < y + 150 ) {
                fn()
            }
        }
        this.move = (e) => {
            if (e.pageY > y && e.pageY < y + 150 ) {
                this.isHover = true
            } else {
                this.isHover = false
            }
        }
        if(this.isButton) {
            window.addEventListener("mousedown", this.add)
            window.addEventListener("mousemove", this.move)
        }
    }
    destructor() {
        if(this.isButton) {
            window.removeEventListener("mousedown", this.add)
        }
    }
}

class Collidable {
    constructor(xMin, yMin, xMax, yMax) {
        this.xMin = xMin
        this.yMin = yMin
        this.xMax = xMax
        this.yMax = yMax
    }
} 

class Wall extends _libs_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] {}

class BombSlot {
    constructor(cd) {
        this.cd = cd
        this.isAvailable = true
        this.isDisabled = false
        this.roll()
        this.bomb = null
    }
    use() {
        this.bomb = new Bomb(this.type, (this.type === _config__WEBPACK_IMPORTED_MODULE_1__["DETECT_BOMB_TYPE"] || this.type === _config__WEBPACK_IMPORTED_MODULE_1__["TURTLE_BOMB_TYPE"]) ? _config__WEBPACK_IMPORTED_MODULE_1__["BOMB_PROPERTIES_MAX_TIMER"] : _config__WEBPACK_IMPORTED_MODULE_1__["BOMB_PROPERTIES_TIMER"], _config__WEBPACK_IMPORTED_MODULE_1__["BOMB_PROPERTIES_RADIUS"])
        this.isAvailable = false
        return this.bomb
    }
    roll() {
        this.type = Math.floor(Math.random() * 5)
        this.isAvailable = true
    }
    set(bomb) {
        this.type = bomb
        this.isAvailable = true
    }
}

class BombBag {
    constructor(maxSize, cd) {
        this.maxSize = maxSize 
        this.disabled = 0
        this.bombSlots = []
        this.isRolling = false
        this.canRoll = true
        this.rollAt = -1
        for(let i = 0; i < maxSize; i ++) {
            this.bombSlots.push(new BombSlot(cd))
        }
    }
    isAvailable() {
        for(let i = 0; i < this.bombSlots.length; i ++) {
            if (this.bombSlots[i].isAvailable && !this.bombSlots[i].isDisabled) {
                return true
            }
        }
        return false
    }
    isAllExploded() {
        for (let i = 0; i < this.bombSlots.length; i++) {
            if (!this.bombSlots[i].bomb) {
                return false
            }
        }
        for(let i = 0; i < this.bombSlots.length; i++) {
             if(this.bombSlots[i].bomb.timer > 0) {
                 return false
             }
        }
        return true
    }
    useBomb() {
        for(let i = 0; i < this.bombSlots.length; i ++) {
            if (this.bombSlots[i].isAvailable && !this.bombSlots[i].isDisabled) {
                return this.bombSlots[i].use()
            }
        }
    }
    initRoll() {
        this.isRolling = true
        this.rollTime = 0
    }
    roll() {
        this.isRolling = false

        for (let i = 0; i < this.bombSlots.length; i++) {
            if (!this.bombSlots[i].isDisabled) {
                this.bombSlots[i].roll()
            }
        }
    }

    set(bombs) {
        bombs.forEach((bomb, i) => {
            this.bombSlots[i].set(bomb)
        })
    }

    disable(ecs, cv) {
        this.disabled ++
        if(this.disabled === this.maxSize) {
           
        }
        for(let i = 0; i < this.bombSlots.length; i ++) {
            if(!this.bombSlots[i].isDisabled) {
                this.bombSlots[i].isDisabled = true
                return
            }
        }
    }
    enable() {
        this.disabled --
        for (let i = 0; i < this.bombSlots.length; i++) {
            if (this.bombSlots[i].isDisabled) {
                this.bombSlots[i].isDisabled = false
                return
            }
        }
    }
}



class Blast {
    constructor(at) {
        this.at = at
    }
}

class Door {
    constructor(to) {
        this.to = to
        this.timer = -1
    }
}

class Explosion {
    constructor(bombType) {
        this.remaining = _config__WEBPACK_IMPORTED_MODULE_1__["EXPLOSION_SFX_DURATION"]
        this.points = []
        this.bombType = bombType

        for(let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_1__["EXPLOSION_SFX_COUNT"]; i++) {
            const angle = Math.random() * _libs_utils__WEBPACK_IMPORTED_MODULE_2__["pi2"]
            this.points.push(new _libs_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](Math.cos(angle), Math.sin(angle)))
        }
    }
}

// 19

class Particle {}

class Eyes {}

class Status {}

class Explodable {
    constructor() {
        this.blink = 0
        this.exploded = false
    }
}



/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: X_TILE_COUNT, Y_TILE_COUNT, PLAYER_SPEED, PLAYER_BASE_ACC, PLAYER_BASE_FRICTION, PLAYER_WIDTH, PLAYER_HEIGHT, RED_WIDTH, RED_HEIGHT, BOMB_PROPERTIES_RADIUS, BOMB_PROPERTIES_TIMER, BOMB_PROPERTIES_MAX_TIMER, EXPLOSION_SFX_DURATION, EXPLOSION_SFX_COUNT, EXPLOSION_SFX_SIZE, EXPLOSION_SFX_PROPAGATION, PREBLAST_SFX_LINE_COUNT, BOMBAG_ROLL_DURATION, HOSTILE_WIDTH, HOSTILE_SPEED, HOSTILE_BOMB_DAMAGE, SPAWNER_CD, HOSTILE_TYPE_PPAOE, HOSTILE_TYPE_RANGE, HOSTILE_EFFECT_NONE, HOSTILE_EFFECT_FREEZE, HOSTILE_EFFECT_DISORIENTED, HOSTILE_EFFECT_SLEEP, HOSTILE_EFFECT_RELOAD, HOSTILE_EFFECT_RELOAD_TIME, HOSTILE_SLEEP_AWAKE_RANGE, DEAD_LIVE, BLAST_RADIUS, PRE_BLAST_DURATION, BLAST_DURATION, ATOMIC_BOMB_TYPE, FREEZE_BOMB_TYPE, FLASH_BOMB_TYPE, DETECT_BOMB_TYPE, TURTLE_BOMB_TYPE, HOSTILE_FREEZE_TIME, HOSTILE_DISORIENTED_TIME, TIME_BOMB_DETONATE_DELAY, LOADING_DURATION, BOMB_COLLISON_RADIUS, BOMB_ARM_RADIUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X_TILE_COUNT", function() { return X_TILE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y_TILE_COUNT", function() { return Y_TILE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_SPEED", function() { return PLAYER_SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_BASE_ACC", function() { return PLAYER_BASE_ACC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_BASE_FRICTION", function() { return PLAYER_BASE_FRICTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_WIDTH", function() { return PLAYER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_HEIGHT", function() { return PLAYER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_WIDTH", function() { return RED_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_HEIGHT", function() { return RED_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOMB_PROPERTIES_RADIUS", function() { return BOMB_PROPERTIES_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOMB_PROPERTIES_TIMER", function() { return BOMB_PROPERTIES_TIMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOMB_PROPERTIES_MAX_TIMER", function() { return BOMB_PROPERTIES_MAX_TIMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPLOSION_SFX_DURATION", function() { return EXPLOSION_SFX_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPLOSION_SFX_COUNT", function() { return EXPLOSION_SFX_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPLOSION_SFX_SIZE", function() { return EXPLOSION_SFX_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPLOSION_SFX_PROPAGATION", function() { return EXPLOSION_SFX_PROPAGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREBLAST_SFX_LINE_COUNT", function() { return PREBLAST_SFX_LINE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOMBAG_ROLL_DURATION", function() { return BOMBAG_ROLL_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_WIDTH", function() { return HOSTILE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_SPEED", function() { return HOSTILE_SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_BOMB_DAMAGE", function() { return HOSTILE_BOMB_DAMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPAWNER_CD", function() { return SPAWNER_CD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_TYPE_PPAOE", function() { return HOSTILE_TYPE_PPAOE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_TYPE_RANGE", function() { return HOSTILE_TYPE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_EFFECT_NONE", function() { return HOSTILE_EFFECT_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_EFFECT_FREEZE", function() { return HOSTILE_EFFECT_FREEZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_EFFECT_DISORIENTED", function() { return HOSTILE_EFFECT_DISORIENTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_EFFECT_SLEEP", function() { return HOSTILE_EFFECT_SLEEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_EFFECT_RELOAD", function() { return HOSTILE_EFFECT_RELOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_EFFECT_RELOAD_TIME", function() { return HOSTILE_EFFECT_RELOAD_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_SLEEP_AWAKE_RANGE", function() { return HOSTILE_SLEEP_AWAKE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEAD_LIVE", function() { return DEAD_LIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLAST_RADIUS", function() { return BLAST_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRE_BLAST_DURATION", function() { return PRE_BLAST_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLAST_DURATION", function() { return BLAST_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATOMIC_BOMB_TYPE", function() { return ATOMIC_BOMB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FREEZE_BOMB_TYPE", function() { return FREEZE_BOMB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLASH_BOMB_TYPE", function() { return FLASH_BOMB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETECT_BOMB_TYPE", function() { return DETECT_BOMB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TURTLE_BOMB_TYPE", function() { return TURTLE_BOMB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_FREEZE_TIME", function() { return HOSTILE_FREEZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTILE_DISORIENTED_TIME", function() { return HOSTILE_DISORIENTED_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_BOMB_DETONATE_DELAY", function() { return TIME_BOMB_DETONATE_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_DURATION", function() { return LOADING_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOMB_COLLISON_RADIUS", function() { return BOMB_COLLISON_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOMB_ARM_RADIUS", function() { return BOMB_ARM_RADIUS; });
const X_TILE_COUNT = 22
const Y_TILE_COUNT = 12

const PLAYER_SPEED = 1 / 8
const PLAYER_BASE_ACC = .01
const PLAYER_BASE_FRICTION = .02

const PLAYER_WIDTH = 1
const PLAYER_HEIGHT = 1

const RED_WIDTH = 1
const RED_HEIGHT = 1

const BOMB_PROPERTIES_RADIUS = 3 
const BOMB_PROPERTIES_TIMER = 2500
const BOMB_PROPERTIES_MAX_TIMER = 5000

const EXPLOSION_SFX_DURATION = 300
const EXPLOSION_SFX_COUNT = 9
const EXPLOSION_SFX_SIZE = .5
const EXPLOSION_SFX_PROPAGATION = 1

const PREBLAST_SFX_LINE_COUNT = 16

const BOMBAG_ROLL_DURATION = 2000

const HOSTILE_WIDTH = .5
const HOSTILE_SPEED = .07
const HOSTILE_BOMB_DAMAGE = 15
const SPAWNER_CD = 1000

const HOSTILE_TYPE_PPAOE = 0
const HOSTILE_TYPE_RANGE = 1

const HOSTILE_EFFECT_NONE = -1
const HOSTILE_EFFECT_FREEZE = 0
const HOSTILE_EFFECT_DISORIENTED = 1
const HOSTILE_EFFECT_SLEEP = 3
const HOSTILE_EFFECT_RELOAD = 4
const HOSTILE_EFFECT_RELOAD_TIME = 3000

const HOSTILE_SLEEP_AWAKE_RANGE = 2

const DEAD_LIVE = 3000

const BLAST_RADIUS = 2
const PRE_BLAST_DURATION = 500

const BLAST_DURATION = 300


const ATOMIC_BOMB_TYPE = 0
const FREEZE_BOMB_TYPE = 1
const FLASH_BOMB_TYPE = 2
const DETECT_BOMB_TYPE = 3
const TURTLE_BOMB_TYPE = 4 

const HOSTILE_FREEZE_TIME = 1100
const HOSTILE_DISORIENTED_TIME = 3300

const TIME_BOMB_DETONATE_DELAY = 200

const LOADING_DURATION = 1000
const BOMB_COLLISON_RADIUS = .5
const BOMB_ARM_RADIUS = 1


/***/ }),

/***/ "./src/draw_helpers.js":
/*!*****************************!*\
  !*** ./src/draw_helpers.js ***!
  \*****************************/
/*! exports provided: drawBombCard, drawBombEffect, blueAgent, redAgent, deadAgent, bombAgent, drawExplodable, drawEyes, drawSoil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBombCard", function() { return drawBombCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBombEffect", function() { return drawBombEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueAgent", function() { return blueAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redAgent", function() { return redAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deadAgent", function() { return deadAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bombAgent", function() { return bombAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawExplodable", function() { return drawExplodable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawEyes", function() { return drawEyes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSoil", function() { return drawSoil; });
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/utils */ "./src/libs/utils.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.js");




const square = (uiPos, ctx, x, y, i, color) => {
    ctx.fillStyle = color
    ctx.fillRect(uiPos.x + i * 90 + (x + 1)* 10, uiPos.y + (y + 1) * 10, 10, 10)
}

const drawBombCard = (pos, bombSlot, i, ctx, isRolling, rollingRatio) => {
    ctx.fillStyle = "#000"
    ctx.fillRect(pos.x + i * 90, pos.y, 100, 100)
    ctx.fillStyle = bombSlot.isAvailable ? "#010C14" : "#470605"
    ctx.fillRect(pos.x + i * 90 + 10, pos.y + 10, 80, 80)
    
    if(isRolling) {
        ctx.fillStyle = "rgba(30, 130, 30, 1)"
        ctx.fillRect(pos.x + i * 90 + 10, pos.y + 10, 80 * rollingRatio, 80)
    }
    ctx.fillStyle = "#000"
    switch(bombSlot.type) {
        case 0:
            square(pos, ctx, 1,0,i,"#D98A14")
            square(pos, ctx, 1,1,i,"#F0740A")
            square(pos, ctx, 4,1,i,"#D98A14")
            square(pos, ctx, 5,1,i,"#E64F09")
            square(pos, ctx, 7,2,i,"#F0AB0A")

            square(pos, ctx, 3,3,i,"#F0AB0A")
            square(pos, ctx, 4,3,i,"#F0AB0A")
            square(pos, ctx, 3,4,i,"#F0AB0A")
            square(pos, ctx, 4,4,i,"#F0AB0A")

            square(pos, ctx, 1, 4,i,"#D98A14")
            square(pos, ctx, 2, 7,i,"#F0740A")
            square(pos, ctx, 3, 7,i,"#D98A14")
            square(pos, ctx, 5, 6,i,"#F0AB0A")
            square(pos, ctx, 5, 7,i,"#E64F09")

            break
        case 1:
            square(pos, ctx, 2,1,i,"#8CC1E9")
            square(pos, ctx, 2,3,i,"#8CC1E9")
            square(pos, ctx, 2,4,i,"#8CC1E9")
            square(pos, ctx, 2,6,i,"#8CC1E9")
            square(pos, ctx, 2,7,i,"#8CC1E9")

            square(pos, ctx, 0, 3,i,"#8CC1E9")
            square(pos, ctx, 0, 5,i,"#8CC1E9")
            square(pos, ctx, 1, 5,i,"#8CC1E9")
            square(pos, ctx, 0, 7,i,"#8CC1E9")

            square(pos, ctx, 3,5,i,"#8CC1E9")
            square(pos, ctx, 4,5,i,"#8CC1E9")
            square(pos, ctx, 6,5,i,"#8CC1E9")

            square(pos, ctx, 5,2,i,"#8CC1E9")
            square(pos, ctx, 4,3,i,"#8CC1E9")
            square(pos, ctx, 4,7,i,"#8CC1E9")
            break
        case 2:
            square(pos, ctx, 5,0,i,"#eee")
            square(pos, ctx, 5,1,i,"#eee")
            square(pos, ctx, 4,2,i,"#eee")
            square(pos, ctx, 1,3,i,"#eee")
            square(pos, ctx, 3,3,i,"#eee")
            square(pos, ctx, 4,3,i,"#eee")
            square(pos, ctx, 6,3,i,"#eee")

            square(pos, ctx, 3,4,i,"#eee")
            square(pos, ctx, 2,5,i,"#eee")
            square(pos, ctx, 2,6,i,"#eee")
            break
        case 3:
            square(pos, ctx, 3,3,i,"#B11913")
            square(pos, ctx, 3,4,i,"#B11913")
            square(pos, ctx, 4,3,i,"#B11913")
            square(pos, ctx, 4,4,i,"#B11913")

            square(pos, ctx, 2,1,i,"#B11913")
            square(pos, ctx, 1,2,i,"#B11913")
            square(pos, ctx, 1,3,i,"#B11913")
            square(pos, ctx, 1,4,i,"#B11913")
            square(pos, ctx, 1,5,i,"#B11913")
            square(pos, ctx, 2,6,i,"#B11913")

            square(pos, ctx, 5,1,i,"#B11913")
            square(pos, ctx, 6,2,i,"#B11913")
            square(pos, ctx, 6,3,i,"#B11913")
            square(pos, ctx, 6,4,i,"#B11913")
            square(pos, ctx, 6,5,i,"#B11913")
            square(pos, ctx, 5,6,i,"#B11913")

            break
        case 4:
            square(pos, ctx, 1,3,i,"#97E614")
            square(pos, ctx, 1,4,i,"#97E614")
            square(pos, ctx, 2,3,i,"#97E614")
            square(pos, ctx, 2,4,i,"#97E614")

            square(pos, ctx, 4,4,i,"#97E614")
            square(pos, ctx, 6,4,i,"#97E614")
            break
        case 5:
            
            break 
    }
}

const drawBombEffect = (bomb, pos, ctx) => {
    // area
    ctx.lineWidth = 2
    
    switch(bomb.type) {
        case _config__WEBPACK_IMPORTED_MODULE_1__["ATOMIC_BOMB_TYPE"]:
            ctx.strokeStyle = "#ffbd18"; break
        case _config__WEBPACK_IMPORTED_MODULE_1__["FLASH_BOMB_TYPE"]:
            ctx.strokeStyle = "#fff"; break
        case _config__WEBPACK_IMPORTED_MODULE_1__["FREEZE_BOMB_TYPE"]:
            ctx.strokeStyle = "#00f"; break
        case _config__WEBPACK_IMPORTED_MODULE_1__["DETECT_BOMB_TYPE"]:
            ctx.strokeStyle = "#f00"; break
        case _config__WEBPACK_IMPORTED_MODULE_1__["TURTLE_BOMB_TYPE"]:
            ctx.strokeStyle = "#0f0"; break
    }

    const sides = 16
    const radius = bomb.radius * tileSize + 5
    ctx.beginPath()
    ctx.moveTo (pos.x +  radius * Math.cos(0), pos.y +  radius *  Math.sin(0))     
    for (let i = 1; i <= sides;i ++) {
        ctx.lineTo (pos.x + radius * Math.cos(i * 2 * Math.PI / sides), pos.y + radius * Math.sin(i * 2 * Math.PI / sides))
    }
    ctx.lineWidth = 1
    ctx.closePath()
    ctx.stroke()
    
    // time
    ctx.beginPath()
    ctx.arc(pos.x, pos.y, bomb.radius * tileSize / 2, -Math.PI / 2,  -Math.PI / 2 + (bomb.total - bomb.remaining) / bomb.total * _libs_utils__WEBPACK_IMPORTED_MODULE_0__["pi2"])
    ctx.strokeStyle = "rgba(255, 255, 255, .3)"
    ctx.lineWidth = tileSize / 2
    ctx.stroke()
}

const blueAgent = (pos, ctx, agent) => { // you
    ctx.fillStyle = "#fff"
    ctx.fillRect(pos.x, pos.y, _config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_WIDTH"] * tileSize, _config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_HEIGHT"] * tileSize)
    ctx.fillStyle = "#57D0EB"
    ctx.fillRect(pos.x + 2, pos.y + 2, _config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_WIDTH"] * tileSize - 4, _config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_HEIGHT"] * tileSize - 4)
}

const redAgent = (pos, ctx, agent) => { // you
    ctx.fillStyle = "#fff"
    ctx.fillRect(pos.x, pos.y, 1 * tileSize, 1 * tileSize)
    ctx.fillStyle = "#520E0E"
    ctx.fillRect(pos.x + 2, pos.y + 2, 1 * tileSize - 4, 1 * tileSize - 4)
}

const deadAgent = (pos, ctx, agent) => { // you
    ctx.fillStyle = "#fff"
    ctx.fillRect(pos.x * tileSize, pos.y * tileSize, 1 * tileSize, 1 * tileSize)
    ctx.fillStyle = "#000"
    ctx.fillRect(pos.x * tileSize + 2, pos.y * tileSize + 2, 1 * tileSize - 4, 1 * tileSize - 4)
}

const bombAgent = (pos, ctx, agent) => {
    ctx.fillStyle = "#fff"
    ctx.beginPath()
    ctx.arc(pos.x, pos.y, .5 * tileSize, 0, _libs_utils__WEBPACK_IMPORTED_MODULE_0__["pi2"])
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = "#000"
    ctx.beginPath()
    ctx.arc(pos.x, pos.y, .5 * tileSize - 2, 0, _libs_utils__WEBPACK_IMPORTED_MODULE_0__["pi2"])
    ctx.closePath()
    ctx.fill()
}

const drawExplodable = (ctx, pos, explodableEntity) => {
    ctx.fillStyle = "#040B0F"
    ctx.fillRect(pos.x * tileSize, pos.y * tileSize, tileSize, tileSize)
    ctx.beginPath()
    ctx.rect(pos.x * tileSize + 2, pos.y * tileSize + 2, tileSize - 4, tileSize -4)
    ctx.strokeStyle = explodableEntity.exploded ? "#444" : "#C21111"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.beginPath()
    ctx.rect(pos.x * tileSize - 10, pos.y * tileSize -10, tileSize +20, tileSize +20)
    ctx.strokeStyle = "#9E4D06"
    ctx.lineWidth = 2
    ctx.stroke()
}

const drawEyes = (pos, ctx, eye) => {


}

const drawSoil = (ctx) => {
    ctx.fillStyle = "#522906"
    ctx.fillRect(0,0,_config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] * tileSize, _config__WEBPACK_IMPORTED_MODULE_1__["Y_TILE_COUNT"] * tileSize)
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
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _libs_mapLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./libs/mapLoader.js */ "./src/libs/mapLoader.js");












document.body.appendChild(document.createElement("canvas"))
const cv = document.querySelector("canvas")
cv.width = window.innerWidth
cv.height = window.innerHeight
const cpTileSize = () => (Math.min(window.innerWidth / _config_js__WEBPACK_IMPORTED_MODULE_6__["X_TILE_COUNT"], window.innerHeight / _config_js__WEBPACK_IMPORTED_MODULE_6__["Y_TILE_COUNT"]))
window.tileSize = cpTileSize()

window.addEventListener("resize", () => {
  cv.width = window.innerWidth
  cv.height = window.innerHeight
  window.tileSize = cpTileSize()
})


const ctx = cv.getContext("2d") 
window.mapLoader = Object(_libs_mapLoader_js__WEBPACK_IMPORTED_MODULE_7__["mapLoader"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"])
js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].register(_components__WEBPACK_IMPORTED_MODULE_3__["Pos"], _components__WEBPACK_IMPORTED_MODULE_3__["Speed"], _components__WEBPACK_IMPORTED_MODULE_3__["Acc"], _components__WEBPACK_IMPORTED_MODULE_3__["Controlable"], _components__WEBPACK_IMPORTED_MODULE_3__["TrialState"], _components__WEBPACK_IMPORTED_MODULE_3__["Bomb"], _components__WEBPACK_IMPORTED_MODULE_3__["Player"], _components__WEBPACK_IMPORTED_MODULE_3__["Hostile"], _components__WEBPACK_IMPORTED_MODULE_3__["Spawn"], _components__WEBPACK_IMPORTED_MODULE_3__["UI"], _components__WEBPACK_IMPORTED_MODULE_3__["Wall"],
  _components__WEBPACK_IMPORTED_MODULE_3__["Collidable"], _components__WEBPACK_IMPORTED_MODULE_3__["Dead"], _components__WEBPACK_IMPORTED_MODULE_3__["BombBag"], _components__WEBPACK_IMPORTED_MODULE_3__["PreBlast"], _components__WEBPACK_IMPORTED_MODULE_3__["Blast"], _components__WEBPACK_IMPORTED_MODULE_3__["Door"], _components__WEBPACK_IMPORTED_MODULE_3__["Explosion"], _components__WEBPACK_IMPORTED_MODULE_3__["Agent"], _components__WEBPACK_IMPORTED_MODULE_3__["Explodable"])



js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"].process(Object(_systems__WEBPACK_IMPORTED_MODULE_4__["drawAgent"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["trialDisplay"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["control"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"]), 
  Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveBombs"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveSpawn"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["ia"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveDoors"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["collide"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveBombBag"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx, tileSize), 
  Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveDead"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveExplosions"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveExplodable"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["livePreBlast"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx, cv), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveBlast"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveUi"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx, cv), Object(_systems__WEBPACK_IMPORTED_MODULE_4__["liveHp"])(js13k_ecs__WEBPACK_IMPORTED_MODULE_2__["default"], ctx, cv));

(async () => {
  const melodieCurry = await Object(_libs_audio_js__WEBPACK_IMPORTED_MODULE_0__["Sound"])(_assets_audio_melo1_json__WEBPACK_IMPORTED_MODULE_1__)
   
  cv.onclick = () => {
    const soundHandle = melodieCurry(true)
  }
  
})()

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

/***/ "./src/libs/astar.js":
/*!***************************!*\
  !*** ./src/libs/astar.js ***!
  \***************************/
/*! exports provided: astar, Graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "astar", function() { return astar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return Graph; });
function pathTo(node) {
    var curr = node;
    var path = [];
    while (curr.parent) {
      path.unshift(curr);
      curr = curr.parent;
    }
    return path;
  }
  
  function getHeap() {
    return new BinaryHeap(function(node) {
      return node.f;
    });
  }
  
  const astar = {
    /**
    * Perform an A* Search on a graph given a start and end node.
    * @param {Graph} graph
    * @param {GridNode} start
    * @param {GridNode} end
    * @param {Object} [options]
    * @param {bool} [options.closest] Specifies whether to return the
               path to the closest node if the target is unreachable.
    * @param {Function} [options.heuristic] Heuristic function (see
    *          astar.heuristics).
    */
    search: function(graph, start, end, options) {
      graph.cleanDirty();
      options = options || {};
      var heuristic = options.heuristic || astar.heuristics.manhattan;
      var closest = options.closest || false;
  
      var openHeap = getHeap();
      var closestNode = start; // set the start node to be the closest if required
  
      start.h = heuristic(start, end);
      graph.markDirty(start);
  
      openHeap.push(start);
  
      while (openHeap.size() > 0) {
  
        // Grab the lowest f(x) to process next.  Heap keeps this sorted for us.
        var currentNode = openHeap.pop();
  
        // End case -- result has been found, return the traced path.
        if (currentNode === end) {
          return pathTo(currentNode);
        }
  
        // Normal case -- move currentNode from open to closed, process each of its neighbors.
        currentNode.closed = true;
  
        // Find all neighbors for the current node.
        var neighbors = graph.neighbors(currentNode);
  
        for (var i = 0, il = neighbors.length; i < il; ++i) {
          var neighbor = neighbors[i];
  
          if (neighbor.closed || neighbor.isWall()) {
            // Not a valid node to process, skip to next neighbor.
            continue;
          }
  
          // The g score is the shortest distance from start to current node.
          // We need to check if the path we have arrived at this neighbor is the shortest one we have seen yet.
          var gScore = currentNode.g + neighbor.getCost(currentNode);
          var beenVisited = neighbor.visited;
  
          if (!beenVisited || gScore < neighbor.g) {
  
            // Found an optimal (so far) path to this node.  Take score for node to see how good it is.
            neighbor.visited = true;
            neighbor.parent = currentNode;
            neighbor.h = neighbor.h || heuristic(neighbor, end);
            neighbor.g = gScore;
            neighbor.f = neighbor.g + neighbor.h;
            graph.markDirty(neighbor);
            if (closest) {
              // If the neighbour is closer than the current closestNode or if it's equally close but has
              // a cheaper path than the current closest node then it becomes the closest node
              if (neighbor.h < closestNode.h || (neighbor.h === closestNode.h && neighbor.g < closestNode.g)) {
                closestNode = neighbor;
              }
            }
  
            if (!beenVisited) {
              // Pushing to heap will put it in proper place based on the 'f' value.
              openHeap.push(neighbor);
            } else {
              // Already seen the node, but since it has been rescored we need to reorder it in the heap
              openHeap.rescoreElement(neighbor);
            }
          }
        }
      }
  
      if (closest) {
        return pathTo(closestNode);
      }
  
      // No result was found - empty array signifies failure to find path.
      return [];
    },
    // See list of heuristics: http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html
    heuristics: {
      manhattan: function(pos0, pos1) {
        var d1 = Math.abs(pos1.x - pos0.x);
        var d2 = Math.abs(pos1.y - pos0.y);
        return d1 + d2;
      },
      diagonal: function(pos0, pos1) {
        var D = 1;
        var D2 = Math.sqrt(2);
        var d1 = Math.abs(pos1.x - pos0.x);
        var d2 = Math.abs(pos1.y - pos0.y);
        return (D * (d1 + d2)) + ((D2 - (2 * D)) * Math.min(d1, d2));
      }
    },
    cleanNode: function(node) {
      node.f = 0;
      node.g = 0;
      node.h = 0;
      node.visited = false;
      node.closed = false;
      node.parent = null;
    }
  };
  
  /**
   * A graph memory structure
   * @param {Array} gridIn 2D array of input weights
   * @param {Object} [options]
   * @param {bool} [options.diagonal] Specifies whether diagonal moves are allowed
   */
  function Graph(gridIn, options) {
    options = options || {};
    this.nodes = [];
    this.diagonal = !!options.diagonal;
    this.grid = [];
    for (var x = 0; x < gridIn.length; x++) {
      this.grid[x] = [];
  
      for (var y = 0, row = gridIn[x]; y < row.length; y++) {
        var node = new GridNode(x, y, row[y]);
        this.grid[x][y] = node;
        this.nodes.push(node);
      }
    }
    this.init();
  }
  
  Graph.prototype.init = function() {
    this.dirtyNodes = [];
    for (var i = 0; i < this.nodes.length; i++) {
      astar.cleanNode(this.nodes[i]);
    }
  };
  
  Graph.prototype.cleanDirty = function() {
    for (var i = 0; i < this.dirtyNodes.length; i++) {
      astar.cleanNode(this.dirtyNodes[i]);
    }
    this.dirtyNodes = [];
  };
  
  Graph.prototype.markDirty = function(node) {
    this.dirtyNodes.push(node);
  };
  
  Graph.prototype.neighbors = function(node) {
    var ret = [];
    var x = node.x;
    var y = node.y;
    var grid = this.grid;
  
    // West
    if (grid[x - 1] && grid[x - 1][y]) {
      ret.push(grid[x - 1][y]);
    }
  
    // East
    if (grid[x + 1] && grid[x + 1][y]) {
      ret.push(grid[x + 1][y]);
    }
  
    // South
    if (grid[x] && grid[x][y - 1]) {
      ret.push(grid[x][y - 1]);
    }
  
    // North
    if (grid[x] && grid[x][y + 1]) {
      ret.push(grid[x][y + 1]);
    }
  
    if (this.diagonal) {
      // Southwest
      if (grid[x - 1] && grid[x - 1][y - 1]) {
        ret.push(grid[x - 1][y - 1]);
      }
  
      // Southeast
      if (grid[x + 1] && grid[x + 1][y - 1]) {
        ret.push(grid[x + 1][y - 1]);
      }
  
      // Northwest
      if (grid[x - 1] && grid[x - 1][y + 1]) {
        ret.push(grid[x - 1][y + 1]);
      }
  
      // Northeast
      if (grid[x + 1] && grid[x + 1][y + 1]) {
        ret.push(grid[x + 1][y + 1]);
      }
    }
  
    return ret;
  };
  
  Graph.prototype.toString = function() {
    var graphString = [];
    var nodes = this.grid;
    for (var x = 0; x < nodes.length; x++) {
      var rowDebug = [];
      var row = nodes[x];
      for (var y = 0; y < row.length; y++) {
        rowDebug.push(row[y].weight);
      }
      graphString.push(rowDebug.join(" "));
    }
    return graphString.join("\n");
  };
  
  function GridNode(x, y, weight) {
    this.x = x;
    this.y = y;
    this.weight = weight;
  }
  
  GridNode.prototype.toString = function() {
    return "[" + this.x + " " + this.y + "]";
  };
  
  GridNode.prototype.getCost = function(fromNeighbor) {
    // Take diagonal weight into consideration.
    if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
      return this.weight * 1.41421;
    }
    return this.weight;
  };
  
  GridNode.prototype.isWall = function() {
    return this.weight === 0;
  };
  
  function BinaryHeap(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }
  
  BinaryHeap.prototype = {
    push: function(element) {
      // Add the new element to the end of the array.
      this.content.push(element);
  
      // Allow it to sink down.
      this.sinkDown(this.content.length - 1);
    },
    pop: function() {
      // Store the first element so we can return it later.
      var result = this.content[0];
      // Get the element at the end of the array.
      var end = this.content.pop();
      // If there are any elements left, put the end element at the
      // start, and let it bubble up.
      if (this.content.length > 0) {
        this.content[0] = end;
        this.bubbleUp(0);
      }
      return result;
    },
    remove: function(node) {
      var i = this.content.indexOf(node);
  
      // When it is found, the process seen in 'pop' is repeated
      // to fill up the hole.
      var end = this.content.pop();
  
      if (i !== this.content.length - 1) {
        this.content[i] = end;
  
        if (this.scoreFunction(end) < this.scoreFunction(node)) {
          this.sinkDown(i);
        } else {
          this.bubbleUp(i);
        }
      }
    },
    size: function() {
      return this.content.length;
    },
    rescoreElement: function(node) {
      this.sinkDown(this.content.indexOf(node));
    },
    sinkDown: function(n) {
      // Fetch the element that has to be sunk.
      var element = this.content[n];
  
      // When at 0, an element can not sink any further.
      while (n > 0) {
  
        // Compute the parent element's index, and fetch it.
        var parentN = ((n + 1) >> 1) - 1;
        var parent = this.content[parentN];
        // Swap the elements if the parent is greater.
        if (this.scoreFunction(element) < this.scoreFunction(parent)) {
          this.content[parentN] = element;
          this.content[n] = parent;
          // Update 'n' to continue at the new position.
          n = parentN;
        }
        // Found a parent that is less, no need to sink any further.
        else {
          break;
        }
      }
    },
    bubbleUp: function(n) {
      // Look up the target element and its score.
      var length = this.content.length;
      var element = this.content[n];
      var elemScore = this.scoreFunction(element);
  
      while (true) {
        // Compute the indices of the child elements.
        var child2N = (n + 1) << 1;
        var child1N = child2N - 1;
        // This is used to store the new position of the element, if any.
        var swap = null;
        var child1Score;
        // If the first child exists (is inside the array)...
        if (child1N < length) {
          // Look it up and compute its score.
          var child1 = this.content[child1N];
          child1Score = this.scoreFunction(child1);
  
          // If the score is less than our element's, we need to swap.
          if (child1Score < elemScore) {
            swap = child1N;
          }
        }
  
        // Do the same checks for the other child.
        if (child2N < length) {
          var child2 = this.content[child2N];
          var child2Score = this.scoreFunction(child2);
          if (child2Score < (swap === null ? elemScore : child1Score)) {
            swap = child2N;
          }
        }
  
        // If the element needs to be moved, swap it, and continue.
        if (swap !== null) {
          this.content[n] = this.content[swap];
          this.content[swap] = element;
          n = swap;
        }
        // Otherwise, we are done.
        else {
          break;
        }
      }
    }
  };
  


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

/***/ "./src/libs/mapLoader.js":
/*!*******************************!*\
  !*** ./src/libs/mapLoader.js ***!
  \*******************************/
/*! exports provided: mapLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapLoader", function() { return mapLoader; });
/* harmony import */ var _assets_maps_welcome_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/maps/welcome.json */ "./src/assets/maps/welcome.json");
var _assets_maps_welcome_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/maps/welcome.json */ "./src/assets/maps/welcome.json", 1);
/* harmony import */ var _assets_maps_home_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/maps/home.json */ "./src/assets/maps/home.json");
var _assets_maps_home_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/maps/home.json */ "./src/assets/maps/home.json", 1);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./src/components.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/libs/utils.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.js");





 

const getObjects = (objectName, objects, ...properties) => {
    return objects.reduce((accs, current) => {
        const object = current.properties.find((propertie) => {
            return propertie.name === objectName
        })
        if(object) {
            accs.push(
                {
                    x: current.x, y: current.y, ...current.properties.reduce((acc, propertie) => {
                        if (properties.indexOf(propertie.name) !== -1) {
                            acc[propertie.name] = propertie.value
                        }
                        return acc
                    }, {})
                }
            )
        }
        return accs
    }, [])

}


const process = (map, ecs, cv) => {
    

   
    

    const objects = map.layers[0].objects
    // player
    const startObjects = getObjects("isStart", objects)
    if(startObjects.length > 0) {
        const start = new _components__WEBPACK_IMPORTED_MODULE_2__["Pos"](startObjects[0].x, startObjects[0].y)
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createPlayer"])(ecs, new _components__WEBPACK_IMPORTED_MODULE_2__["Pos"](start.x,start.y,0))
    }
    if(map.properties) {
        const bombsProperties = map.properties.find((propertie) => propertie.name === "bombs")

        if(bombsProperties) {
            const bombs = bombsProperties.value.split(",").map((bomb) => parseInt(bomb, 10))
            ecs.select(_components__WEBPACK_IMPORTED_MODULE_2__["BombBag"]).iterate((bombBagEntity) => {
                bombBagEntity.get(_components__WEBPACK_IMPORTED_MODULE_2__["BombBag"]).set(bombs)
            })
        }
        const canRollProperties = map.properties.find((propertie) => propertie.name === "canRoll")
    
        if(canRollProperties) {
            ecs.select(_components__WEBPACK_IMPORTED_MODULE_2__["BombBag"]).iterate((bombBagEntity) => {
                bombBagEntity.get(_components__WEBPACK_IMPORTED_MODULE_2__["BombBag"]).canRoll = canRollProperties.value
            })
        }
    }
 
    // door
    ecs.create() 
    .add(
        new _components__WEBPACK_IMPORTED_MODULE_2__["Door"](),
        new _components__WEBPACK_IMPORTED_MODULE_2__["Pos"](1)
    )
    

    // spawns
    const spawnObjects = getObjects("isSpawn", objects, "max", "total", "type")
    spawnObjects.forEach((spawnObject) => {
        ecs
        .create()
        .add(
            new _components__WEBPACK_IMPORTED_MODULE_2__["Spawn"](ecs, spawnObject.max, spawnObject.total, spawnObject.type ? spawnObject.type : _config__WEBPACK_IMPORTED_MODULE_4__["HOSTILE_TYPE_PPAOE"]),
            new _components__WEBPACK_IMPORTED_MODULE_2__["Pos"](spawnObject.x, spawnObject.y, 0),
        )
    })

    const reds = getObjects("isRed", objects, "status")
    reds.forEach((red) => {
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createRed"])(ecs, new _components__WEBPACK_IMPORTED_MODULE_2__["Pos"](red.x, red.y, 0), true, red.status)
    })
    
    const destroyables = getObjects("isDestroyable", objects)
    destroyables.forEach((destroyable) => {
        ecs
            .create()
            .add(
                new _components__WEBPACK_IMPORTED_MODULE_2__["Explodable"](),
                new _components__WEBPACK_IMPORTED_MODULE_2__["Pos"](destroyable.x, destroyable.y, 0)
            )
    })


    
    // Text
    const textObject = objects.find((object) => {
        return object.text && object.text.text.length > 0
    })
    if(textObject) {
        ecs
        .create()
        .add(
            new _components__WEBPACK_IMPORTED_MODULE_2__["TrialState"](textObject.text.text),
            new _components__WEBPACK_IMPORTED_MODULE_2__["Pos"](textObject.x, textObject.y),
            new _components__WEBPACK_IMPORTED_MODULE_2__["Controlable"](),
        )
    }
    // walls
    const tiles = map.layers[1]
    tiles.data.forEach((element, index) => {
        if(element !== 0) {
            ecs
            .create()
            .add(
                new _components__WEBPACK_IMPORTED_MODULE_2__["Wall"](index % _config__WEBPACK_IMPORTED_MODULE_4__["X_TILE_COUNT"], Math.floor(index / _config__WEBPACK_IMPORTED_MODULE_4__["X_TILE_COUNT"]))
            )
        }
    })
} 

const cleanMap = (ecs) => {
    const Entities = [_components__WEBPACK_IMPORTED_MODULE_2__["Explodable"] ,_components__WEBPACK_IMPORTED_MODULE_2__["Wall"], _components__WEBPACK_IMPORTED_MODULE_2__["Spawn"], _components__WEBPACK_IMPORTED_MODULE_2__["TrialState"], _components__WEBPACK_IMPORTED_MODULE_2__["Hostile"], _components__WEBPACK_IMPORTED_MODULE_2__["Door"], _components__WEBPACK_IMPORTED_MODULE_2__["Dead"], _components__WEBPACK_IMPORTED_MODULE_2__["Bomb"], _components__WEBPACK_IMPORTED_MODULE_2__["PreBlast"], _components__WEBPACK_IMPORTED_MODULE_2__["Blast"]]
    Entities.forEach((entityName) => {
        ecs.select(entityName).iterate((entityEntity) => {
            entityEntity.eject()
        })
    })
    const bb = ecs.select(_components__WEBPACK_IMPORTED_MODULE_2__["BombBag"])
    bb.iterate((bbEntity) => {
        bbEntity.get(_components__WEBPACK_IMPORTED_MODULE_2__["BombBag"]).roll()
    })
}

const mapLoader = (ecs) => {
    const maps = [_assets_maps_welcome_json__WEBPACK_IMPORTED_MODULE_0__, _assets_maps_home_json__WEBPACK_IMPORTED_MODULE_1__]
    let currentMap = -1
    
    return {
        unload: () => {
            cleanMap(ecs)
        },

        init: () => {
            cleanMap(ecs)
            currentMap = 0
            ecs.select(_components__WEBPACK_IMPORTED_MODULE_2__["Player"]).iterate((playerEntity) => {
                playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_2__["Player"]).hp = 100
            }) 
            process(maps[currentMap], ecs)
        },

        next: () => {
            cleanMap(ecs)
            currentMap++
            if(currentMap < maps.length ) {
                process(maps[currentMap], ecs)
            }
        }
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

/***/ "./src/libs/utils.js":
/*!***************************!*\
  !*** ./src/libs/utils.js ***!
  \***************************/
/*! exports provided: clamp, pi2, createPlayer, createRed, isPlayerOverlap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi2", function() { return pi2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayer", function() { return createPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRed", function() { return createRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlayerOverlap", function() { return isPlayerOverlap; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components.js");
/* harmony import */ var _draw_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../draw_helpers */ "./src/draw_helpers.js");




const clamp = (val, min, max) => {
    return Math.max(min, Math.min(max, val))
}

const pi2 = Math.PI * 2

const createPlayer = (ecs, pos) =>  {
    ecs.create() 
    .add(
        new _components__WEBPACK_IMPORTED_MODULE_1__["BombBag"](3, 3000)
    )
    ecs
    .create()
    .add(
        new _components__WEBPACK_IMPORTED_MODULE_1__["Agent"](_draw_helpers__WEBPACK_IMPORTED_MODULE_2__["blueAgent"]),
        new _components__WEBPACK_IMPORTED_MODULE_1__["Pos"](pos.x, pos.y, pos.z),
        new _components__WEBPACK_IMPORTED_MODULE_1__["Speed"](0, 0, 0),
        new _components__WEBPACK_IMPORTED_MODULE_1__["Acc"](0, 0, 0),
        new _components__WEBPACK_IMPORTED_MODULE_1__["Controlable"](),
        new _components__WEBPACK_IMPORTED_MODULE_1__["Player"](),
        new _components__WEBPACK_IMPORTED_MODULE_1__["Collidable"](0, 0, _config__WEBPACK_IMPORTED_MODULE_0__["PLAYER_WIDTH"], _config__WEBPACK_IMPORTED_MODULE_0__["PLAYER_HEIGHT"])
    )
}

const createRed = (ecs, pos, isActive, status, type) => {
    const red = ecs.create()
    red.add(
        new _components__WEBPACK_IMPORTED_MODULE_1__["Hostile"](null, type, isActive, status), 
        new _components__WEBPACK_IMPORTED_MODULE_1__["Pos"](pos.x, pos.y, pos.z), 
        new _components__WEBPACK_IMPORTED_MODULE_1__["Agent"](_draw_helpers__WEBPACK_IMPORTED_MODULE_2__["redAgent"]), 
        new _components__WEBPACK_IMPORTED_MODULE_1__["Speed"](0, 0, 0), 
        new _components__WEBPACK_IMPORTED_MODULE_1__["Collidable"](0, 0, _config__WEBPACK_IMPORTED_MODULE_0__["RED_WIDTH"], _config__WEBPACK_IMPORTED_MODULE_0__["RED_HEIGHT"])
    )
    return red
}


const isPlayerOverlap = (playerPos, pos, hitBox) => {
    return (
        playerPos.x + _config__WEBPACK_IMPORTED_MODULE_0__["PLAYER_WIDTH"] > pos.x && playerPos.x < pos.x + hitBox.x &&
        playerPos.y + _config__WEBPACK_IMPORTED_MODULE_0__["PLAYER_HEIGHT"] > pos.y && playerPos.y < pos.y + hitBox.y
    )
}


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
    dot2D(v) {
       return this.x * v.x + this.y * v.y
    }
    angle() {
        return Math.atan2(- this.y, - this.x) + Math.PI
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

    addScalar(scalar) {
        this.x += scalar
        this.y += scalar
        this.z += scalar
        return this
    }

    multiply(v) {
        this.x *= v.x
        this.y *= v.y
        this.z *= v.z
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
    distance2D(v2) {
        return Math.hypot(this.x - v2.x, this.y - v2.y)   
    }
    clamp(min, max) {
        this.x = Math.max( min.x, Math.min( max.x, this.x ) )
		this.y = Math.max( min.y, Math.min( max.y, this.y ) )
        this.z = Math.max( min.z, Math.min( max.z, this.z ) )
        return this
    }
    clampScalar(minScalar, maxScalar) {
        this.x = Math.max(minScalar, Math.min(maxScalar, this.x))
        this.y = Math.max(minScalar, Math.min(maxScalar, this.y))
        this.z = Math.max(minScalar, Math.min(maxScalar, this.z))
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
    set(v) {
        this.x = v.x
        this.y = v.y
        this.z = v.z
        return this
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
/*! exports provided: title, gameScreen, dieScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameScreen", function() { return gameScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dieScreen", function() { return dieScreen; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.js");


      
const cleanScreen = (ecs) => {
    const Entities = [_components__WEBPACK_IMPORTED_MODULE_0__["UI"], _components__WEBPACK_IMPORTED_MODULE_0__["Player"], _components__WEBPACK_IMPORTED_MODULE_0__["BombBag"]]
    Entities.forEach((entityName) => {
        ecs.select(entityName).iterate((entityEntity) => {
            entityEntity.eject()
        })
    })

}

const title = (ecs, cv) => {
            return {
                isGame : false,
                load: () => {
                    ecs.create()
                        .add(new _components__WEBPACK_IMPORTED_MODULE_0__["UI"]("Play game !", cv.width / 2 - 150, cv.height / 2, () => {
                            window.currentScreen.unload()
                            window.currentScreen = gameScreen(ecs)
                            window.currentScreen.load()
                        }, true))
                },
                unload: () => {
                    ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["UI"]).iterate((entity) => {
                        entity.eject()
                    })
                }
            }
        }
        const gameScreen = (ecs) => {
            return {
                isGame: true,
                load: () => {
                    window.mapLoader.next(ecs)
                },
                unload : () => {
                    cleanScreen(ecs)
                    window.mapLoader.unload(ecs)
                }
            }
            
        }
        const dieScreen = (ecs, tileSize, cv) => {
            return {
                isGame: false,
                load : () => {
                    ecs.create()
                        .add(new _components__WEBPACK_IMPORTED_MODULE_0__["UI"]("You died",cv.width / 2 - 150, cv.height / 2, () => { }, false))
                    ecs.create()
                        .add(new _components__WEBPACK_IMPORTED_MODULE_0__["UI"]("Restart",cv.width / 2 - 150, cv.height / 2 + 150, () => {
                            window.currentScreen.unload()
                            window.currentScreen = gameScreen(ecs)
                            window.mapLoader.init()
                        }, true))
                },
                unload : () => {
                    cleanScreen(ecs)
                }
            }
            
        }
    



/***/ }),

/***/ "./src/systems.js":
/*!************************!*\
  !*** ./src/systems.js ***!
  \************************/
/*! exports provided: control, drawAgent, liveSpawn, ia, livePreBlast, trialDisplay, liveBombs, liveDead, liveUi, collide, liveBombBag, liveBlast, liveDoors, liveHp, liveExplosions, liveExplodable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "control", function() { return control; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawAgent", function() { return drawAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveSpawn", function() { return liveSpawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ia", function() { return ia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "livePreBlast", function() { return livePreBlast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trialDisplay", function() { return trialDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveBombs", function() { return liveBombs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveDead", function() { return liveDead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveUi", function() { return liveUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collide", function() { return collide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveBombBag", function() { return liveBombBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveBlast", function() { return liveBlast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveDoors", function() { return liveDoors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveHp", function() { return liveHp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveExplosions", function() { return liveExplosions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveExplodable", function() { return liveExplodable; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/utils */ "./src/libs/utils.js");
/* harmony import */ var _libs_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/vector */ "./src/libs/vector.js");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens */ "./src/screens.js");
/* harmony import */ var _draw_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draw_helpers */ "./src/draw_helpers.js");
/* harmony import */ var _libs_astar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs/astar */ "./src/libs/astar.js");








const control = (ecs) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"], _components__WEBPACK_IMPORTED_MODULE_0__["Controlable"], _components__WEBPACK_IMPORTED_MODULE_0__["Acc"], _components__WEBPACK_IMPORTED_MODULE_0__["Speed"])
    const bombBagSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["BombBag"])
    let bombAvailable = true

    return {
        update : (dt) => {
            selected.iterate((entity) => {
                const {isUp, isDown, isLeft, isRight, isMain} = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Controlable"])
                const pos = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                const speed = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Speed"])
                const acc = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Acc"])
                acc.setScalar(0)
                if(isUp) {
                    acc.setY(-_config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_BASE_ACC"])
                } else if (speed.y < 0 && !isDown) { 
                    speed.setY(Object(_libs_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(_config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_BASE_FRICTION"] + speed.y, -Number.MAX_VALUE, 0))
                }
                if(isDown) {
                    acc.setY(_config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_BASE_ACC"])
                } else if (speed.y > 0 && !isUp) {
                    speed.setY(Object(_libs_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(-_config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_BASE_FRICTION"] + speed.y, 0, Number.MAX_VALUE))
                }
                if(isLeft) {
                    acc.setX(-_config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_BASE_ACC"])
                } else if(speed.x < 0 && !isRight) {
                    speed.setX(Object(_libs_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(_config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_BASE_FRICTION"] + speed.x, -Number.MAX_VALUE, 0))
                }
                if(isRight) {
                    acc.setX(_config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_BASE_ACC"])
                } else if(speed.x > 0 && !isLeft) {
                    speed.setX(Object(_libs_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(-_config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_BASE_FRICTION"] + speed.x, 0, Number.MAX_VALUE))
                }
                speed.add(acc).clampScalar(-_config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_SPEED"], _config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_SPEED"])
                
                if (!isMain && !bombAvailable) {
                    bombAvailable = true
                }
                if (isMain && bombAvailable) {
                    bombAvailable = false
                    bombBagSelector.iterate((bombBagEntity) => {
                        const bombBag = bombBagEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["BombBag"])
                        if (bombBag.isAvailable()) {
                            const bomb = bombBag.useBomb()
                            ecs
                                .create()
                                .add(
                                    bomb,
                                    new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](pos.x + _config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_WIDTH"] / 2, pos.y + _config__WEBPACK_IMPORTED_MODULE_1__["PLAYER_HEIGHT"] / 2, 0),
                                    new _components__WEBPACK_IMPORTED_MODULE_0__["Agent"](_draw_helpers__WEBPACK_IMPORTED_MODULE_5__["bombAgent"])
                                )
                        }
                        
                    })
                    
                }
            })
        }
    }
}

const drawAgent = (ecs, ctx) => {
    const selectedAgent = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"], _components__WEBPACK_IMPORTED_MODULE_0__["Agent"])
    const selectedWalls = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Wall"])
    return {
        update : (dt) => {
            Object(_draw_helpers__WEBPACK_IMPORTED_MODULE_5__["drawSoil"])(ctx)
            
            selectedAgent.iterate((entityAgent) => {
                const pos = entityAgent.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                const agent = entityAgent.get(_components__WEBPACK_IMPORTED_MODULE_0__["Agent"])
                agent.draw(pos.clone().multiplyScalar(tileSize), ctx, agent)
            })

            selectedWalls.iterate((entityWall) => {
                const wall = entityWall.get(_components__WEBPACK_IMPORTED_MODULE_0__["Wall"])
                ctx.fillStyle = "#030917"
                ctx.fillRect(wall.x * tileSize, wall.y * tileSize, tileSize, tileSize)
            })
            /* add border walls */
            if(selectedWalls.list) {
                ctx.fillRect(0, 0, _config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] * tileSize, tileSize)
                ctx.fillRect(0, (_config__WEBPACK_IMPORTED_MODULE_1__["Y_TILE_COUNT"] - 1) * tileSize, _config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] * tileSize, tileSize)
                ctx.fillRect(0, 0, tileSize, _config__WEBPACK_IMPORTED_MODULE_1__["Y_TILE_COUNT"] * tileSize)
                ctx.fillRect((_config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] - 1) * tileSize, 0, tileSize, _config__WEBPACK_IMPORTED_MODULE_1__["Y_TILE_COUNT"] * tileSize)
            }
           
        }
    }
}


const liveSpawn = (ecs, ctx) => {
    const selector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Spawn"])

    return {
        update: (dt) => {
            selector.iterate((entity) => {
                const pos = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                const spawner = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Spawn"])
                spawner.cd -= dt
                if(spawner.cd <= 0 && spawner.total > 0 && spawner.hasOne()) {
                    spawner.cd = _config__WEBPACK_IMPORTED_MODULE_1__["SPAWNER_CD"]
                    spawner.active(pos)
                    spawner.total --
                } else if(spawner.cd > 0 && spawner.total > 0) {
                    // spawning load
                    ctx.beginPath()
                  //  
                    ctx.closePath()
                    ctx.fillStyle = "rgba(255, 255, 255, .3)"
                    ctx.fill()

                    //const rad = Math.ceil(spawner.cd / SPAWNER_CD * 3)
                    //ctx.fillStyle = rad % 2 === 0 ? "#000" : "#fff"
                    //ctx.fillRect((pos.x * tileSize) - (rad * tileSize / 2), (pos.y * tileSize) - (rad * tileSize / 2),rad * tileSize, rad * tileSize)
                }

                ctx.fillStyle = "#000"
                ctx.fillRect(pos.x * tileSize, pos.y * tileSize , tileSize , tileSize)
            }) 
        }
    }
}

const ia = (ecs, ctx) => {
    const hostileSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"], _components__WEBPACK_IMPORTED_MODULE_0__["Hostile"])
    const playerSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"], _components__WEBPACK_IMPORTED_MODULE_0__["Player"])
    const wallSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Wall"])
    return {
        update : (dt) => {
            const mappedGrid = []
            for(let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"]; i ++) {
                mappedGrid[i] = []
                for(let j = 0; j < _config__WEBPACK_IMPORTED_MODULE_1__["Y_TILE_COUNT"]; j ++) {
                    mappedGrid[i].push(1)
                }
            }

            wallSelector.iterate((entityWall) => {
                const wall = entityWall.get(_components__WEBPACK_IMPORTED_MODULE_0__["Wall"])
                mappedGrid[wall.x][wall.y] = 0
                if(wall.x < _config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"]) {
                    mappedGrid[wall.x + 1][wall.y] = 0
                } 
                if(wall.x > 0) {
                    mappedGrid[wall.x - 1][wall.y] = 0
                } 
                if(wall.y < _config__WEBPACK_IMPORTED_MODULE_1__["Y_TILE_COUNT"]) {
                    mappedGrid[wall.x][wall.y + 1] = 0
                } 
                if(wall.y > 0) {
                    mappedGrid[wall.x][wall.y - 1] = 0
                } 
                mappedGrid[wall.x][wall.y] = 0
            })
            
            const graph = new _libs_astar__WEBPACK_IMPORTED_MODULE_6__["Graph"](mappedGrid)

            playerSelector.iterate((playerEntity) => {
                const playerPos = playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"]) 

                

                hostileSelector.iterate((entity) => {
                    const hostile = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Hostile"])
                    if(hostile.effect) {
                        hostile.effectTime -= dt
                    }
                    if(hostile.effectTime < 0 && hostile.effect) {
                        hostile.effect = false
                    }
                    if (hostile.status === _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_EFFECT_SLEEP"]) {
                        return
                    }
                    if (hostile.isActive) {
                        const hostilePos = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                        const hostileSpeed = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Speed"])

                        // move toward player if no attacking
                        if(hostile.isAttacking || hostile.effect === _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_EFFECT_FREEZE"]) {
                            hostileSpeed.setScalar(0)
                        } else if(hostile.effect === _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_EFFECT_DISORIENTED"]) {
                            // do nothing; TODO may change direction
                        } else if(hostile.type === _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_TYPE_PPAOE"] || (hostile.type === _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_TYPE_RANGE"] && hostilePos.distance2D(playerPos) > 7)) {
                            let res = []
                            if(hostilePos) {
                                res = _libs_astar__WEBPACK_IMPORTED_MODULE_6__["astar"].search(graph, graph.grid[Math.floor(playerPos.x + .5)][Math.floor(playerPos.y + .5)], 
                                graph.grid[Math.floor(hostilePos.x)][Math.floor(hostilePos.y)])
                        
                            }
                            
                            let nextPos
                            if(res.length > 1) {
                                nextPos = new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](res[res.length - 2].x + 0.5, res[res.length - 2].y + 0.5, 0)
                            } else {
                                nextPos = playerPos.clone()
                            }
                            
                            const nextMove = nextPos.sub(hostilePos)
                            hostileSpeed.set(nextMove.normalise().multiplyScalar(_config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_SPEED"]))
                        } else {
                            hostileSpeed.setScalar(0)
                        }
                        
                        // try an attack
                        if (!hostile.isAttacking && hostile.effect !== _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_EFFECT_RELOAD"]) {

                            if (playerPos.distance2D(hostilePos) < 1 && hostile.type === _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_TYPE_PPAOE"] &&
                                hostile.effect !== _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_EFFECT_NONE"]
                            ) {
                                hostile.isAttacking = true
                                ecs.create()
                                    .add(
                                        new _components__WEBPACK_IMPORTED_MODULE_0__["PreBlast"](hostile, _config__WEBPACK_IMPORTED_MODULE_1__["PRE_BLAST_DURATION"], _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_TYPE_PPAOE"]),
                                        new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](hostilePos.x + _config__WEBPACK_IMPORTED_MODULE_1__["RED_WIDTH"] / 2, hostilePos.y + _config__WEBPACK_IMPORTED_MODULE_1__["RED_HEIGHT"] / 2, hostilePos.z)
                                    )
                            } else if (!hostile.isAttacking && hostile.type === _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_TYPE_RANGE"]) {
                                hostile.isAttacking = true
                                ecs.create()
                                    .add(
                                        new _components__WEBPACK_IMPORTED_MODULE_0__["PreBlast"](hostile, _config__WEBPACK_IMPORTED_MODULE_1__["PRE_BLAST_DURATION"], _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_TYPE_RANGE"]),
                                        new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](hostilePos.x + _config__WEBPACK_IMPORTED_MODULE_1__["RED_WIDTH"] / 2, hostilePos.y + _config__WEBPACK_IMPORTED_MODULE_1__["RED_HEIGHT"] / 2, hostilePos.z)
                                    )
                            }
                        }

                    }
                })
            })
        }
    }
}

const livePreBlast = (ecs, ctx, cv) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["PreBlast"])
    const selectedPlayer = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Player"])
    const bombBagSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["BombBag"])
    const wallSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Wall"])


    return {
        update : (dt) => {
            selected.iterate((preblasEntity) => {
                const preblast = preblasEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["PreBlast"])
                const pos = preblasEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])

                if (preblast.type === _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_TYPE_PPAOE"]) {
                    ctx.beginPath()
                    ctx.arc(pos.x * tileSize, pos.y * tileSize, tileSize * _config__WEBPACK_IMPORTED_MODULE_1__["BLAST_RADIUS"], 0, _libs_utils__WEBPACK_IMPORTED_MODULE_2__["pi2"])
                    ctx.lineWidth = 2
                    ctx.closePath()
                    ctx.strokeStyle = "#971313"
                    ctx.stroke()
                    const bRadius = tileSize * _config__WEBPACK_IMPORTED_MODULE_1__["BLAST_RADIUS"]
                    const dY = 2 * bRadius / (_config__WEBPACK_IMPORTED_MODULE_1__["PREBLAST_SFX_LINE_COUNT"] + 1)
                    var cosA = Math.cos(1);
                    var sinA = Math.sin(1);
                    for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_1__["PREBLAST_SFX_LINE_COUNT"]; i++) {
                        const y = dY * (i + 1) - bRadius
                        const x = Math.sqrt(bRadius * bRadius - y * y)

                        const lX = y * sinA + x *  cosA + pos.x * tileSize
                        const rX = y *  sinA - x *  cosA + pos.x * tileSize
                        const lY = y *  cosA - x *  sinA + pos.y * tileSize
                        const rY = y *  cosA + x *  sinA + pos.y * tileSize
                        

                        ctx.beginPath()
                        ctx.moveTo(lX, lY)
                        ctx.lineTo(rX, rY)
                        ctx.stroke()
                    }
                    ctx.beginPath()
                    ctx.fillStyle = "rgba(245, 88, 21, .3)"
                    ctx.arc(pos.x * tileSize, pos.y * tileSize, (1 - preblast.remaining / _config__WEBPACK_IMPORTED_MODULE_1__["PRE_BLAST_DURATION"]) * tileSize * _config__WEBPACK_IMPORTED_MODULE_1__["BLAST_RADIUS"], 0, _libs_utils__WEBPACK_IMPORTED_MODULE_2__["pi2"])
                    ctx.fill()
                    preblast.remaining -= dt

                    if (preblast.remaining < 0) {
                        selectedPlayer.iterate((playerEntity) => {
                            const playerPos = playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                            const player = playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Player"])
                            if (pos.distance2D(playerPos) < _config__WEBPACK_IMPORTED_MODULE_1__["BLAST_RADIUS"]) {
                                player.hp -= _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_BOMB_DAMAGE"]
                            }
                        })


                        preblast.hostile.isAttacking = false
                        preblasEntity.eject()
                        ecs.create()
                            .add(
                                new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](pos.x, pos.y, pos.z),
                                new _components__WEBPACK_IMPORTED_MODULE_0__["Blast"](performance.now())
                            )
                    }
                } else { // line blast
                    let foundWall = false
                    ctx.fillStyle = `rgba(255, 0, 0, ${1 - preblast.remaining / _config__WEBPACK_IMPORTED_MODULE_1__["PRE_BLAST_DURATION"]})`
                    let isExplode = false
                    let playerPos
                    let player 
                    preblast.remaining -= dt
                    if (preblast.remaining < 0) {
                        selectedPlayer.iterate((playerEntity) => {
                            playerPos = playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                            player = playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Player"])
                            isExplode = true
                            preblasEntity.eject()
                        })

                        preblasEntity.eject()
                        preblast.hostile.isAttacking = false
                        preblast.hostile.effect = _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_EFFECT_RELOAD"]
                        preblast.hostile.effectTime = _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_EFFECT_RELOAD_TIME"]
             
                    }
                    for(let i = Math.floor(pos.x); i < _config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] && !foundWall; i ++) {
                        if(isExplode&&Math.floor(playerPos.x) === i && (Math.floor(playerPos.y) === Math.floor(pos.y) || Math.floor(playerPos.y + 1) === Math.floor(pos.y))) {
                            player.hp -= _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_BOMB_DAMAGE"]
                        }
                        ctx.fillRect(i * tileSize, Math.floor(pos.y) * tileSize, tileSize, tileSize)
                
                        wallSelector.iterate((wallEntity) => {
                            const wall = wallEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Wall"])
                            if(i + 1 === wall.x && Math.floor(pos.y) === wall.y ) {
                                foundWall = true
                            }
                        })
                    }
                    foundWall = false
                    for(let i = Math.floor(pos.x); i > 0 && !foundWall; i --) {
                        if(isExplode&&Math.floor(playerPos.x) === i && (Math.floor(playerPos.y) === Math.floor(pos.y) || Math.floor(playerPos.y + 1) === Math.floor(pos.y))) {
                            player.hp -= _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_BOMB_DAMAGE"]
                        }
                        ctx.fillRect(i * tileSize, Math.floor(pos.y) * tileSize, tileSize, tileSize)
                
                        wallSelector.iterate((wallEntity) => {
                            const wall = wallEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Wall"])
                            if(i === wall.x + 1 && Math.floor(pos.y) === wall.y ) {
                                foundWall = true
                            }
                        })
                    }

                    
                    
                }
                
            })
        }
    }
}

const trialDisplay = (ecs, ctx) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"], _components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
    const spawnerSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Spawn"])

    return {
        update: () => {
            let remaining = -1
            spawnerSelector.iterate((spawnerEntities) => {
                remaining += spawnerEntities.get(_components__WEBPACK_IMPORTED_MODULE_0__["Spawn"]).remaining()
            })
            selected.iterate((entity) => {
                const trialState = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["TrialState"])
                const pos = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                ctx.textAlign = "center"
                ctx.font = "50px sans-serif"
                ctx.fillStyle = "rgba(100, 170, 220)"
                const txt = trialState.sc.replace("%remain", remaining)
                ctx.fillStyle = "#9E622B"
                ctx.fillText(txt, pos.x * tileSize, pos.y * tileSize)
            })
        }
    }
}

const liveBombs = (ecs, ctx) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Bomb"])
    const hostileSelected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Hostile"], _components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
    const playerSelected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Player"])
    const explodableSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Explodable"], _components__WEBPACK_IMPORTED_MODULE_0__["Pos"])

    return {
        update: (dt) => {
            selected.iterate((entity) => {
                const bomb = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Bomb"])
                const pos = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                bomb.remaining -= dt
                // atomic bomb
                Object(_draw_helpers__WEBPACK_IMPORTED_MODULE_5__["drawBombEffect"])(bomb, pos.clone().multiplyScalar(tileSize), ctx)
                switch(bomb.type) {
                    case _config__WEBPACK_IMPORTED_MODULE_1__["ATOMIC_BOMB_TYPE"]:
                    case _config__WEBPACK_IMPORTED_MODULE_1__["FREEZE_BOMB_TYPE"]:
                    case _config__WEBPACK_IMPORTED_MODULE_1__["FLASH_BOMB_TYPE"]:
                    case _config__WEBPACK_IMPORTED_MODULE_1__["DETECT_BOMB_TYPE"]:
                    case _config__WEBPACK_IMPORTED_MODULE_1__["TURTLE_BOMB_TYPE"]:
                        if(bomb.remaining < 0) {
                            bomb.triggered = false
                            bomb.isArmed = false
                            entity.eject()
                            explodableSelector.iterate((explodableEntity) => {
                                const explodablePos = explodableEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                                const explodable = explodableEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Explodable"])
                                if (explodablePos.distance2D(pos) < bomb.radius) {
                                    explodable.exploded = true
                                }
                            })
                            hostileSelected.iterate((hostileEntity) => {
                                const hostilePos = hostileEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                                const hostileSpeed = hostileEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Speed"])
                                const hostile = hostileEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Hostile"])
                                if(hostile.status === _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_EFFECT_SLEEP"]) {
                                    hostile.status = null
                                }
                                
                                if (hostilePos.distance2D(pos) < bomb.radius) {
                                    if(bomb.type === _config__WEBPACK_IMPORTED_MODULE_1__["FREEZE_BOMB_TYPE"]) {
                                        hostile.effect = _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_EFFECT_FREEZE"]
                                        hostile.freezeTime = _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_FREEZE_TIME"]
                                    } else if(bomb.type === _config__WEBPACK_IMPORTED_MODULE_1__["FLASH_BOMB_TYPE"]) {
                                        hostile.effect = _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_EFFECT_DISORIENTED"]
                                        hostile.effectTime = _config__WEBPACK_IMPORTED_MODULE_1__["HOSTILE_DISORIENTED_TIME"]
                                    } else {
                                        hostile.isActive = false
                                        hostile.effect = false
                                        hostileSpeed.setScalar(0)
                                        ecs.create()
                                        .add(
                                            new _components__WEBPACK_IMPORTED_MODULE_0__["Agent"](_draw_helpers__WEBPACK_IMPORTED_MODULE_5__["deadAgent"]),
                                            new _components__WEBPACK_IMPORTED_MODULE_0__["Dead"](performance.now()), 
                                            new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](hostilePos.x, hostilePos.y, hostilePos.z)
                                        )
                                    }
                                    
                                }
                            })
                            ecs.create()
                            .add(
                                new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"](pos.x, pos.y, pos.z),
                                new _components__WEBPACK_IMPORTED_MODULE_0__["Explosion"](bomb.type)
                                )
        
                        } else if(bomb.type === _config__WEBPACK_IMPORTED_MODULE_1__["DETECT_BOMB_TYPE"] && bomb.triggered === false){
                            hostileSelected.iterate((hostileEntity) => {
                                const hostilePos = hostileEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                                const hostileSpeed = hostileEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Speed"])
                                const hostile = hostileEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Hostile"])
                                
                                if (hostilePos.distance2D(pos) < bomb.radius) { 
                                    bomb.triggered = true
                                    bomb.remaining = _config__WEBPACK_IMPORTED_MODULE_1__["TIME_BOMB_DETONATE_DELAY"]
                                }

                            })
                        } else if(bomb.type === _config__WEBPACK_IMPORTED_MODULE_1__["TURTLE_BOMB_TYPE"] && bomb.triggered === false){
                            playerSelected.iterate((playerEntity) => {
                                const playerPos = playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                                const playerSpeed = playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Speed"])

                                const aac = playerPos.clone().addScalar(0.5)
                                
                                if (aac.distance2D(pos) < _config__WEBPACK_IMPORTED_MODULE_1__["BOMB_COLLISON_RADIUS"] && bomb.isArmed && !entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Speed"])) { 
                                    const speedVector = pos.clone().sub(aac).normalise().multiplyScalar(0.1)
                                    entity.add(new _components__WEBPACK_IMPORTED_MODULE_0__["Speed"](speedVector.x, speedVector.y, speedVector.z), new _components__WEBPACK_IMPORTED_MODULE_0__["Collidable"](0,0,.4,.4))
                                }
                                if(aac.distance2D(pos) > _config__WEBPACK_IMPORTED_MODULE_1__["BOMB_ARM_RADIUS"]) {
                                    bomb.isArmed = true
                                }

                            })
                        }
                        break
                    

                }
                
            })
            
        }
    }
}

const liveDead = (ecs, ctx) => {
    const deadSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Dead"], _components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
    return {
        update: () => {
            deadSelector.iterate((deadEndity) => {
                const pos = deadEndity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                const dead = deadEndity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Dead"])
                Object(_draw_helpers__WEBPACK_IMPORTED_MODULE_5__["deadAgent"])(pos, ctx)
            })
        }
    }
}

const liveUi = (ecs, ctx, cv) => {
    const selected = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["UI"])
    return {
        update: () => {
            selected.iterate((entity) => {
                const ui = entity.get(_components__WEBPACK_IMPORTED_MODULE_0__["UI"])
                if(ui.isHover) {
                    ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
                    ctx.fillRect(0, ui.y - 10, cv.width, 120)
                }
                ctx.font = `${tileSize}px Arial`
                if (ui.isButton) {
                    ctx.fillStyle = "#fff"
                    ctx.fillRect(ui.x, ui.y, 300, 100)
                    ctx.textAlign = "center"
                    ctx.fillStyle = "#000"
                    ctx.fillText(ui.text, ui.x + 150, ui.y + 60)
                } else {
                    ctx.fillStyle = "#000"
                    ctx.fillText(ui.text, ui.x + 150, ui.y + 50)
                }
               
                
            })
        }
    }
}

const collide = (ecs, ctx) => {
    const selectedCollidable = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Collidable"], _components__WEBPACK_IMPORTED_MODULE_0__["Speed"], _components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
    const selectedWalls = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Wall"])
    let collided = false
    return {
        update: () => {
            selectedCollidable.iterate((entityCollidable) => {
                const pos = entityCollidable.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                const speed = entityCollidable.get(_components__WEBPACK_IMPORTED_MODULE_0__["Speed"])
                if(speed.x === 0 && speed.y === 0) {
                    return
                }
                const box = entityCollidable.get(_components__WEBPACK_IMPORTED_MODULE_0__["Collidable"])
                if (pos.x + box.xMin < 1) {
                    pos.x = -box.xMin + 1
                    speed.x = -speed.x
                }
                if (pos.y + box.yMin < 1) {
                    pos.y = -box.yMin + 1
                    speed.y = -speed.y
                }
                if (pos.x + box.xMax > _config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] - 1 ) {
                    pos.x = _config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] - 1 - box.xMax
                    speed.x = -speed.x
                }
                if (pos.y + box.yMax > _config__WEBPACK_IMPORTED_MODULE_1__["Y_TILE_COUNT"] - 1 ) {
                    pos.y = _config__WEBPACK_IMPORTED_MODULE_1__["Y_TILE_COUNT"] - 1 - box.yMax
                    speed.y = -speed.y
                }
                collided = false
                selectedWalls.iterate((entityWall) => {
                    //AABB 
                    const wall = entityWall.get(_components__WEBPACK_IMPORTED_MODULE_0__["Wall"])
                    const fPos = pos.clone()
                    fPos.add(speed)
                    if (
                        fPos.x + box.xMax > wall.x  
                        && fPos.x + box.xMax < wall.x + 1) {
                        if (fPos.y + box.yMax > wall.y && fPos.y + box.yMax < wall.y + 1) {
                            // bottom right point collide
                            if(speed.angle() < new _libs_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"]((fPos.x + box.xMax) - wall.x, (fPos.y + box.yMax) - wall.y).angle()) {
                                // with vertical wall
                                pos.x = wall.x - box.xMax
                                pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                speed.x = -speed.x
                                collided = true
                            } else {
                                // by horizontal wall
                                pos.y = wall.y -  box.yMax
                                pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                speed.y = -speed.y
                            }
                        } else if(fPos.y + box.yMin > wall.y && fPos.y + box.yMin < wall.y + 1) {
                            // top right point collide
                            if(speed.angle() > new _libs_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"]((fPos.x + box.xMax) - wall.x, (fPos.y + box.yMax) - (wall.y + 1)).angle()) {
                                // with horiztona wall
                                pos.y = wall.y + box.xMax
                                pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                speed.y = -speed.y
                                collided = true
                            } else {
                                // with vertical wall
                                pos.x = wall.x - box.xMax
                                pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                speed.x = -speed.x
                                collided = true
                            }
                        }
                    } else if (fPos.x + box.xMin > wall.x  
                        && fPos.x + box.xMin < (wall.x + 1)) {
                            if (fPos.y + box.yMax > wall.y && fPos.y + box.yMax < wall.y + 1) {
                                // bottom left point collide
                                if(speed.angle() > new _libs_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"]((fPos.x + box.xMin) - (wall.x + 1), (fPos.y + box.yMax) - wall.y).angle()) {
                                    // vertical wall
                                    pos.x = wall.x + 1 + box.xMin
                                    pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                    speed.x = -speed.x
                                    collided = true
                                } else {
                                    // hozizontal wall
                                    pos.y = wall.y - box.yMax
                                    pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                    speed.y = -speed.y
                                    collided = true
                                }
                            } else if(fPos.y + box.yMin > wall.y && fPos.y + box.yMin < wall.y + 1) {
                                // top left point collide
                                if(speed.angle() < new _libs_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"]((fPos.x + box.xMin) - (wall.x + 1), (fPos.y + box.yMin) - (wall.y + 1)).angle()) { 
                                    // vertical wall
                                    pos.x = wall.x + box.xMax
                                    pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                    speed.x = -speed.x
                                    collided = true
                                } else {
                                    // hozizontal wall
                                    pos.y = wall.y + box.yMax
                                    pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                    speed.y = -speed.y
                                    collided = true
                                }
                            }
                        }
        
                })
                if(!collided) {
                    pos.add(speed)
                }
            })
        }
    }
}

const liveBombBag = (ecs, ctx, tileSize) => {
    const pos = new _libs_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"](_config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] / 2 * tileSize - 300, _config__WEBPACK_IMPORTED_MODULE_1__["Y_TILE_COUNT"] * tileSize - 50)

    const bombBagSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["BombBag"])
    return {
        update(dt) {
            bombBagSelector.iterate((bombBagEntity) => {
                const bombBag = bombBagEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["BombBag"])
                bombBag.rollTime += dt
                
                if(bombBag.rollTime > _config__WEBPACK_IMPORTED_MODULE_1__["BOMBAG_ROLL_DURATION"] && bombBag.isRolling) {
                    bombBag.roll()
                }

                for(let i = 1; i <= bombBag.bombSlots.length; i ++) {
                    let bombSlot = bombBag.bombSlots[i-1]
                    Object(_draw_helpers__WEBPACK_IMPORTED_MODULE_5__["drawBombCard"])(pos, bombSlot, i, ctx, bombBag.isRolling, bombBag.rollTime / _config__WEBPACK_IMPORTED_MODULE_1__["BOMBAG_ROLL_DURATION"])
                }

                if (!bombBag.isAvailable() && bombBag.isAllExploded() && !bombBag.isRolling && bombBag.canRoll) {
                    bombBag.initRoll()
                }
            })
            
        }
    }
}

const liveBlast = (ecs, ctx) => {
    const selector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Blast"])
    return {
        update : (dt) => {  
            selector.iterate((blastEntity) => {
                const blast = blastEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Blast"])
                if (performance.now() - blast.at > _config__WEBPACK_IMPORTED_MODULE_1__["BLAST_DURATION"]) {
                    blastEntity.eject()
                    return
                }
                const pos = blastEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                ctx.beginPath()
                ctx.fillStyle = "rgba(200, 30, 30, .7)"
                ctx.arc(pos.x * tileSize, pos.y * tileSize, _config__WEBPACK_IMPORTED_MODULE_1__["BLAST_RADIUS"] * tileSize, 0, _libs_utils__WEBPACK_IMPORTED_MODULE_2__["pi2"])
                ctx.closePath()
                ctx.fill()
            })
        }
    }
}

const liveDoors = (ecs, ctx) => {
    const doorSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Door"], _components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
    const playerSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Player"], _components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
    const spawnerSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Spawn"])
    let remaining = 0
    let hasHostiles = false
    return {
        update: () => {
            remaining = 0
            spawnerSelector.iterate((spawnerEntities) => {
                hasHostiles = true
                remaining += spawnerEntities.get(_components__WEBPACK_IMPORTED_MODULE_0__["Spawn"]).remaining()
            })
            playerSelector.iterate((playerEntity) => {
                
                const playerPos = playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                doorSelector.iterate((doorEntity) => {
                    const pos = doorEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                    const isOpen = remaining === 0 && hasHostiles
                    ctx.fillStyle = isOpen ? "#31cd39" : "#9e333d"
                    switch(pos.x) { 
                        case 0://top
                            ctx.fillRect(5 * tileSize, 0 * tileSize, 4 * tileSize, tileSize); break
                        case 1: //right
                            if(isOpen && Object(_libs_utils__WEBPACK_IMPORTED_MODULE_2__["isPlayerOverlap"])(playerPos, new _libs_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"](_config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] - 1, 3), new _libs_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"](1, 4))) {
                               window.mapLoader.next()
                               playerPos.x = 1

                            }
                            if(isOpen) {

                           
                                ctx.fillRect((_config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] - 1) * tileSize, 4 * tileSize, tileSize, 4 * tileSize); 
                                    const arrowPos = new _components__WEBPACK_IMPORTED_MODULE_0__["Pos"]((_config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] - 3) * tileSize, 5 * tileSize + tileSize / 2)
                                ctx.beginPath()
                                ctx.moveTo(arrowPos.x, arrowPos.y)
                                ctx.lineTo(arrowPos.x + tileSize, arrowPos.y)
                                ctx.lineTo(arrowPos.x + tileSize, arrowPos.y - tileSize / 2)
                                ctx.lineTo(arrowPos.x + tileSize * 2, arrowPos.y + tileSize / 2)
                                ctx.lineTo(arrowPos.x + tileSize, arrowPos.y + tileSize + tileSize / 2)
                                ctx.lineTo(arrowPos.x +tileSize, arrowPos.y + tileSize) 
                                ctx.lineTo(arrowPos.x, arrowPos.y + tileSize) 
                                ctx.fill()

                            }
                            break
                            
                        case 2: //bottom
                            ctx.fillRect(5 * tileSize, (_config__WEBPACK_IMPORTED_MODULE_1__["Y_TILE_COUNT"] - 1) * tileSize, 4 * tileSize, tileSize); break
                        case 3: //left
                            ctx.fillRect(0 * tileSize, 3 * tileSize, tileSize, 4 * tileSize); break
                    }
                    
                })
            })
        }
    }
}

const liveHp = (ecs, ctx, cv) => {
    const playerSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Player"])
    const uiPos = new _libs_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"]((_config__WEBPACK_IMPORTED_MODULE_1__["X_TILE_COUNT"] / 2 * tileSize) - 210, 10)

    return {
        update: () => {
            playerSelector.iterate((playerEntity) => {
                const playerComponent = playerEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Player"])
                if(playerComponent.hp <= 0 && window.currentScreen.isGame) {
                    mapLoader.unload(ecs)
                    window.currentScreen.unload()
                    window.currentScreen = Object(_screens__WEBPACK_IMPORTED_MODULE_4__["dieScreen"])(ecs, tileSize, cv)
                    window.currentScreen.load()
                } else {
                    ctx.fillStyle = "#000"
                    ctx.fillRect(uiPos.x, uiPos.y, 420, 50)
                    ctx.fillStyle = "red"
                    ctx.fillRect(uiPos.x + 10, uiPos.y + 10, playerComponent.hp * 4, 30)
                    ctx.font='400 22px Arial';
                    ctx.fillStyle = "#000"
                    ctx.fillText("HP", uiPos.x + 17 , uiPos.y + 35)
                    ctx.fillStyle = "#fff"
                    ctx.fillText("HP", uiPos.x + 15, uiPos.y + 33)

                }
            })
        }
    }
}

const liveExplosions = (ecs, ctx) => {
    const explosionSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Explosion"], _components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
    return {
        update: (dt) => {
            explosionSelector.iterate((explosionEntity) => {
                const explosion = explosionEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Explosion"])
                explosion.remaining -= dt
                if(explosion.remaining < 0) {
                    explosionEntity.eject()
                } else {
                    const pos = explosionEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])

                    switch(explosion.bombType) {
                        case _config__WEBPACK_IMPORTED_MODULE_1__["ATOMIC_BOMB_TYPE"]:
                        case _config__WEBPACK_IMPORTED_MODULE_1__["TURTLE_BOMB_TYPE"]:
                        case _config__WEBPACK_IMPORTED_MODULE_1__["DETECT_BOMB_TYPE"]:
                            explosion.points.forEach(point => {
                                ctx.beginPath()
                                ctx.arc(point.x + pos.x * tileSize, point.y + pos.y * tileSize, _config__WEBPACK_IMPORTED_MODULE_1__["EXPLOSION_SFX_SIZE"] * tileSize, 0, _libs_utils__WEBPACK_IMPORTED_MODULE_2__["pi2"])
                                ctx.fillStyle = `rgba(255,255,255,${ 1 - explosion.remaining / _config__WEBPACK_IMPORTED_MODULE_1__["EXPLOSION_SFX_DURATION"]})`
                                ctx.fill()
                                point.multiplyScalar(1.33)
                            });
                            break
                        case _config__WEBPACK_IMPORTED_MODULE_1__["FREEZE_BOMB_TYPE"]: 
                            ctx.beginPath()
                            ctx.arc(pos.x * tileSize, pos.y * tileSize, 2 * tileSize, 0, _libs_utils__WEBPACK_IMPORTED_MODULE_2__["pi2"])
                            ctx.fillStyle = `rgba(0,0,255,${ 1 - explosion.remaining / _config__WEBPACK_IMPORTED_MODULE_1__["EXPLOSION_SFX_DURATION"]})`
                            ctx.fill()
                            break
                        case _config__WEBPACK_IMPORTED_MODULE_1__["FLASH_BOMB_TYPE"]: 
                            ctx.beginPath()
                            ctx.arc(pos.x * tileSize, pos.y * tileSize, 2 * tileSize, 0, _libs_utils__WEBPACK_IMPORTED_MODULE_2__["pi2"])
                            ctx.fillStyle = `rgba(255,255,255, 1)`
                            ctx.fill()
                            break
                        }

                        
                        // sfx
                        switch(explosion.bombType) {
                            case _config__WEBPACK_IMPORTED_MODULE_1__["ATOMIC_BOMB_TYPE"]:
                            case _config__WEBPACK_IMPORTED_MODULE_1__["DETECT_BOMB_TYPE"]:
                            case _config__WEBPACK_IMPORTED_MODULE_1__["TURTLE_BOMB_TYPE"]:
                                const adv = explosion.remaining / _config__WEBPACK_IMPORTED_MODULE_1__["EXPLOSION_SFX_DURATION"]
                                ctx.beginPath()
                                ctx.arc(pos.x * tileSize, pos.y * tileSize, (1+adv) * tileSize * 2, 0, _libs_utils__WEBPACK_IMPORTED_MODULE_2__["pi2"])
                                ctx.strokeStyle = `rgba(255,255,255,${(adv) * 0.5})`
                                ctx.lineWidth = 4
                                ctx.stroke()
                                ctx.beginPath()
                                ctx.arc(pos.x * tileSize, pos.y * tileSize, (1-adv) * tileSize * 3, 0, _libs_utils__WEBPACK_IMPORTED_MODULE_2__["pi2"])
                                ctx.stroke()
                        }

                    
                }
            })
        }
    }
}

const liveExplodable = (ecs, ctx) => {
    const explodableSelector = ecs.select(_components__WEBPACK_IMPORTED_MODULE_0__["Explodable"], _components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
    return {
        update: (dt) => {
            explodableSelector.iterate((explodableEntity) => {
                const pos = explodableEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Pos"])
                const explodable = explodableEntity.get(_components__WEBPACK_IMPORTED_MODULE_0__["Explodable"])
                explodable.blink++
                Object(_draw_helpers__WEBPACK_IMPORTED_MODULE_5__["drawExplodable"])(ctx, pos, explodable)
            })
        }
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzMTNrLWVjcy9kaXN0L2Vjcy5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd19oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9hc3Rhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9tYXBMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvc29uYW50X3dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9zeXN0ZW1zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxrQkFBa0IscUJBQXFCLHNEQUFzRCxvQkFBb0IsV0FBVyx5REFBeUQsU0FBUyxpREFBaUQsNEJBQTRCLGtCQUFrQixFQUFFLFNBQVMsZUFBZSw4REFBOEQsaUJBQWlCLDJCQUEyQix1Q0FBdUMsSUFBSSxtQkFBbUIsc0JBQXNCLDBEQUEwRCxVQUFVLCtCQUErQix1Q0FBdUMsSUFBSSxtQkFBbUIsc0JBQXNCLDZCQUE2Qix1RUFBdUUsVUFBVSw2QkFBNkIsOEJBQThCLDZCQUE2Qiw2QkFBNkIsOEJBQThCLGFBQWEsbUJBQW1CLDZEQUE2RCxXQUFXLGdDQUFnQyxzQkFBc0IsbUJBQW1CLHdCQUF3QixRQUFRLG9CQUFvQix5Q0FBeUMsZUFBZSx3Q0FBd0Msb0NBQW9DLDZGQUE2RixnQ0FBZ0Msb0JBQW9CLEVBQUUsc0JBQXNCLCtCQUErQiwwREFBMEQsNkJBQTZCLG9CQUFvQix5QkFBeUIsMEVBQTBFLGdDQUFnQyxxQkFBcUIsa0hBQWtILDRDQUEwRCxnRUFBQyxvQkFBb0IsZ0NBQWdDLElBQUksbUJBQW1CLHNCQUFzQixvREFBb0QsVUFBVSxxQkFBcUIsZ0NBQWdDLEVBQUUsb0JBQW9CLGdDQUFnQyxJQUFJLG1CQUFtQixzQkFBc0IsaUJBQWlCLEVBQUUsb0JBQW9CLGVBQWUsbURBQW1ELG1CQUFtQixpQkFBaUIsWUFBWSxtQkFBbUIsZ0NBQWdDLElBQUksbUJBQW1CLFFBQVEsc0JBQXNCLFFBQVEsRUFBRSxZQUFZLFdBQVcsaUNBQWlDLGVBQWUsbUJBQW1CLG9CQUFvQixTQUFTLDZCQUE2QixVQUFVLHdDQUF3QyxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUM2UTtBQUN0UTtBQUNKOztBQUVsQyxrQkFBa0IsbURBQU07QUFDeEIsb0JBQW9CLG1EQUFNO0FBQzFCLGtCQUFrQixtREFBTTs7QUFFeEI7QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFVO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0JBQXNCO0FBQzVDLCtCQUErQiw2REFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOztBQUVPLG1CQUFtQixtREFBTTs7QUFFekI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHdEQUFnQixrQkFBa0Isd0RBQWdCLElBQUksaUVBQXlCLEdBQUcsNkRBQXFCLEVBQUUsOERBQXNCO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHlCQUF5Qiw4REFBc0I7QUFDL0M7QUFDQTs7QUFFQSxzQkFBc0IsS0FBSywyREFBbUIsQ0FBQztBQUMvQywwQ0FBMEMsK0NBQUc7QUFDN0MsaUNBQWlDLG1EQUFNO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0QyQjtBQUN3STs7QUFFMUs7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsYUFBYSx3REFBZ0I7QUFDN0Isd0NBQXdDO0FBQ3hDLGFBQWEsdURBQWU7QUFDNUIscUNBQXFDO0FBQ3JDLGFBQWEsd0RBQWdCO0FBQzdCLHFDQUFxQztBQUNyQyxhQUFhLHdEQUFnQjtBQUM3QixxQ0FBcUM7QUFDckMsYUFBYSx3REFBZ0I7QUFDN0IscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUlBQWlJLCtDQUFHO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBOztBQUVPLHdDQUF3QztBQUMvQztBQUNBLCtCQUErQixvREFBWSxhQUFhLHFEQUFhO0FBQ3JFO0FBQ0EsdUNBQXVDLG9EQUFZLGlCQUFpQixxREFBYTtBQUNqRjs7QUFFTyx1Q0FBdUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyx3Q0FBd0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSw0Q0FBNEMsK0NBQUc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsK0NBQUc7QUFDbkQ7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87OztBQUdQOztBQUVPO0FBQ1A7QUFDQSxxQkFBcUIsb0RBQVksYUFBYSxvREFBWTtBQUMxRCxDOzs7Ozs7Ozs7Ozs7QUMxTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDVzs7QUFFcEI7O0FBR3FGO0FBQ2dHO0FBQzdLO0FBQ3FCO0FBQ1Q7OztBQUdoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCx1REFBWSx1QkFBdUIsdURBQVk7QUFDdEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBLG1CQUFtQixvRUFBUyxDQUFDLGlEQUFHO0FBQ2hDLGlEQUFHLFVBQVUsK0NBQUcsRUFBRSxpREFBSyxFQUFFLCtDQUFHLEVBQUUsdURBQVcsRUFBRSxzREFBVSxFQUFFLGdEQUFJLEVBQUUsa0RBQU0sRUFBRSxtREFBTyxFQUFFLGlEQUFLLEVBQUUsOENBQUUsRUFBRSxnREFBSTtBQUM3RixFQUFFLHNEQUFVLEVBQUUsZ0RBQUksRUFBRSxtREFBTyxFQUFFLG9EQUFRLEVBQUUsaURBQUssRUFBRSxnREFBSSxFQUFFLHFEQUFTLEVBQUUsaURBQUssRUFBRSxzREFBVTs7OztBQUloRixpREFBRyxTQUFTLDBEQUFTLENBQUMsaURBQUcsUUFBUSw2REFBWSxDQUFDLGlEQUFHLFFBQVEsd0RBQU8sQ0FBQyxpREFBRztBQUNwRSxFQUFFLDBEQUFTLENBQUMsaURBQUcsUUFBUSwwREFBUyxDQUFDLGlEQUFHLFFBQVEsbURBQUUsQ0FBQyxpREFBRyxRQUFRLDBEQUFTLENBQUMsaURBQUcsUUFBUSx3REFBTyxDQUFDLGlEQUFHLFFBQVEsNERBQVcsQ0FBQyxpREFBRztBQUNqSCxFQUFFLHlEQUFRLENBQUMsaURBQUcsUUFBUSwrREFBYyxDQUFDLGlEQUFHLFFBQVEsK0RBQWMsQ0FBQyxpREFBRyxRQUFRLDZEQUFZLENBQUMsaURBQUcsWUFBWSwwREFBUyxDQUFDLGlEQUFHLFFBQVEsdURBQU0sQ0FBQyxpREFBRyxZQUFZLHVEQUFNLENBQUMsaURBQUc7O0FBRTNKO0FBQ0EsNkJBQTZCLDREQUFLLENBQUMscURBQU87O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVELHVCQUF1Qix5REFBSyxDQUFDLGlEQUFHO0FBQ2hDLHlEQUFLLENBQUMsaURBQUc7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBRzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsTTs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsRUFBUztBQUNUO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsU0FBUztBQUN2QixjQUFjLE9BQU87QUFDckIsY0FBYyxLQUFLO0FBQ25CO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsS0FBSztBQUNsQjtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7O0FBRUEsc0NBQXNDLGdCQUFnQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pYQTtBQUFBO0FBQUE7QUFBNEQ7O0FBRTVEOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlGQUFzQjtBQUMxQjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRDtBQUNOOztBQUU2SDtBQUN2SDtBQUNXOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJB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QW9FLDJCQUEyQiw4REFBc0IsQ0FBQztBQUN0SDtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsNkJBQTZCLHdEQUFnQjtBQUM3QztBQUNBLHlGQUF5RiwrQ0FBRztBQUM1Riw0REFBNEQsMkJBQTJCLDhEQUFzQixDQUFDO0FBQzlHO0FBQ0E7QUFDQSw2QkFBNkIsdURBQWU7QUFDNUM7QUFDQSx5RkFBeUYsK0NBQUc7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxpQ0FBaUMsd0RBQWdCO0FBQ2pELGlDQUFpQyx3REFBZ0I7QUFDakQsaUNBQWlDLHdEQUFnQjtBQUNqRCxrRUFBa0UsOERBQXNCO0FBQ3hGO0FBQ0EsdUdBQXVHLCtDQUFHO0FBQzFHLHNFQUFzRSxZQUFZO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RywrQ0FBRztBQUMxRztBQUNBOzs7QUFHQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRU87QUFDUCwwQ0FBMEMsc0RBQVUsRUFBRSwrQ0FBRztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsK0NBQUc7QUFDcEQsd0RBQXdELHNEQUFVO0FBQ2xFO0FBQ0EsZ0JBQWdCLG9FQUFjO0FBQzlCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsQyIsImZpbGUiOiJpbmRleF9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciB0PVtdLG49W10scj17fSxlPVwiX3NpZ25cIixvPVwiX21hc2tcIjtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiYoZT1TeW1ib2woZSksbz1TeW1ib2wobykpO3ZhciBpPWZ1bmN0aW9uKHQsbil7dmFyIHI9blt0XTtpZighcil0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29tcG9uZW50IGlzIG5vdCByZWdpc3RlcmVkXCIpO3JldHVybiByfSxzPWkuYmluZChudWxsLGUpLGE9aS5iaW5kKG51bGwsbyksYz1mdW5jdGlvbihuKXtuLmlkJiZ0LmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHQubWF0Y2gobil9KX0saD0xLGY9e30sdT1mdW5jdGlvbih0KXt0aGlzLmlkPXR8fChoKyspLnRvU3RyaW5nKDM2KSx0aGlzLmNvbXBvbmVudHM9T2JqZWN0LmFzc2lnbih7fSxmKSx0aGlzLm1hc2s9MH07dS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMsbj1bXSxyPWFyZ3VtZW50cy5sZW5ndGg7ci0tOyluW3JdPWFyZ3VtZW50c1tyXTtuLmZvckVhY2goZnVuY3Rpb24obil7dC5jb21wb25lbnRzW3Mobi5jb25zdHJ1Y3RvcildPW4sdC5tYXNrfD1hKG4uY29uc3RydWN0b3IpfSksYyh0aGlzKX0sdS5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMsbj1bXSxyPWFyZ3VtZW50cy5sZW5ndGg7ci0tOyluW3JdPWFyZ3VtZW50c1tyXTtuLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHI9cyhuKSxlPXQuY29tcG9uZW50c1tyXTtlJiYoZS5kZXN0cnVjdG9yJiZlLmRlc3RydWN0b3IoKSxkZWxldGUgdC5jb21wb25lbnRzW3JdLHQubWFzayY9fmEobikpfSksYyh0aGlzKX0sdS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiBzKHQpaW4gdGhpcy5jb21wb25lbnRzfSx1LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY29tcG9uZW50c1t0W2VdXX0sdS5wcm90b3R5cGUuZWplY3Q9ZnVuY3Rpb24oKXshZnVuY3Rpb24obil7dmFyIGU9bi5jb21wb25lbnRzO2Zvcih2YXIgbyBpbiBlKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pKXt2YXIgaT1lW29dO2kmJmkuZGVzdHJ1Y3RvciYmaS5kZXN0cnVjdG9yKCl9dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlbW92ZShuKX0pLGRlbGV0ZSByW24uaWRdLG4uaWQ9MH0odGhpcyl9O3ZhciBwPWZ1bmN0aW9uKHQsbil7dGhpcy5lbnRpdHk9dCx0aGlzLnByZXY9bnVsbCx0aGlzLm5leHQ9bn0sbD1mdW5jdGlvbih0KXtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJFbXB0eSBzZWxlY3RvclwiKTtmb3IodmFyIG4gaW4gdGhpcy5tYXNrPXQsdGhpcy5tYXA9e30sdGhpcy5saXN0PW51bGwsdGhpcy5sZW5ndGg9MCxyKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLG4pJiZ0aGlzLm1hdGNoKHJbbl0pfTtsLnByb3RvdHlwZS5pdGVyYXRlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10aGlzLmxpc3Q7bjspdChuLmVudGl0eSksbj1uLm5leHR9LGwucHJvdG90eXBlLm1hdGNoPWZ1bmN0aW9uKHQpeyh0aGlzLm1hc2smdC5tYXNrKT09PXRoaXMubWFzaz90aGlzLmFkZCh0KTp0aGlzLnJlbW92ZSh0KX0sbC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe2lmKCF0aGlzLm1hcFt0LmlkXSl7dmFyIG49bmV3IHAodCx0aGlzLmxpc3QpO3RoaXMubGlzdCYmKHRoaXMubGlzdC5wcmV2PW4pLHRoaXMubGlzdD1uLHRoaXMubWFwW3QuaWRdPW4sdGhpcy5sZW5ndGgrK319LGwucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbih0KXt2YXIgbj10aGlzLm1hcFt0LmlkXTtuJiYobi5wcmV2P24ucHJldi5uZXh0PW4ubmV4dDp0aGlzLmxpc3Q9bi5uZXh0LG4ubmV4dCYmKG4ubmV4dC5wcmV2PW4ucHJldiksZGVsZXRlIHRoaXMubWFwW3QuaWRdLHRoaXMubGVuZ3RoLS0pfTt2YXIgbT0wLHY9cGVyZm9ybWFuY2V8fERhdGUsZD12Lm5vdy5iaW5kKHYpO2V4cG9ydCBkZWZhdWx0e3JlZ2lzdGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLG49YXJndW1lbnRzLmxlbmd0aDtuLS07KXRbbl09YXJndW1lbnRzW25dO3QuZm9yRWFjaChmdW5jdGlvbih0KXtpZihtPjMxKXRocm93IG5ldyBFcnJvcihcIkNvbXBvbmVudHMgbGltaXQgcmVhY2hlZFwiKTtpZighdFtlXSl7dmFyIG49bS50b1N0cmluZygzNik7ZltuXT1udWxsLHRbZV09bix0W29dPTE8PG0sbSsrfX0pfSxwcm9jZXNzOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLHI9YXJndW1lbnRzLmxlbmd0aDtyLS07KXRbcl09YXJndW1lbnRzW3JdO3QuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gbi5wdXNoKHQpfSl9LGNyZWF0ZTpmdW5jdGlvbih0KXt2YXIgbj1uZXcgdSh0KTtpZihyW24uaWRdKXRocm93IG5ldyBFcnJvcihcIlRoZSBJRCBhbHJlYWR5IGV4aXN0XCIpO3JldHVybiByW24uaWRdPW4sbn0sZ2V0OmZ1bmN0aW9uKHQpe3JldHVybiByW3RdfSxzZWxlY3Q6ZnVuY3Rpb24oKXtmb3IodmFyIG49W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspbltyXT1hcmd1bWVudHNbcl07dmFyIGU9MDtuLmZvckVhY2goZnVuY3Rpb24odCl7ZXw9YSh0KX0pO2Zvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKWlmKHRbb10ubWFzaz09PWUpcmV0dXJuIHRbb107dmFyIGk9bmV3IGwoZSk7cmV0dXJuIHQucHVzaChpKSxpfSx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIHI9e307cmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgZT1kKCk7bi51cGRhdGUodCkscltuLmNvbnN0cnVjdG9yLm5hbWVdPWQoKS1lfSkscn19O1xuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vbGlicy92ZWN0b3JcIlxyXG5pbXBvcnQgeyBQTEFZRVJfV0lEVEgsIEhPU1RJTEVfU1BFRUQsIEhPU1RJTEVfV0lEVEgsIFBMQVlFUl9IRUlHSFQsIFNQQVdORVJfQ0QgLCBFWFBMT1NJT05fU0ZYX0NPVU5ULCBCT01CX1BST1BFUlRJRVNfVElNRVIsIEJPTUJfUFJPUEVSVElFU19SQURJVVMsIEVYUExPU0lPTl9TRlhfRFVSQVRJT04sIEZSRUVaRV9CT01CX1RZUEUsIEZMQVNIX0JPTUJfVFlQRSwgREVURUNUX0JPTUJfVFlQRSwgQk9NQl9QUk9QRVJUSUVTX01BWF9USU1FUiwgVFVSVExFX0JPTUJfVFlQRSwgSE9TVElMRV9UWVBFX1JBTkdFIH0gZnJvbSBcIi4vY29uZmlnXCJcclxuaW1wb3J0IHsgcGkyLCBjcmVhdGVSZWQgfSBmcm9tIFwiLi9saWJzL3V0aWxzXCJcclxuaW1wb3J0IHsgcmVkQWdlbnQgfSBmcm9tIFwiLi9kcmF3X2hlbHBlcnNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFBvcyBleHRlbmRzIFZlY3RvciB7fVxyXG5leHBvcnQgY2xhc3MgU3BlZWQgZXh0ZW5kcyBWZWN0b3Ige31cclxuZXhwb3J0IGNsYXNzIEFjYyBleHRlbmRzIFZlY3RvciB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXduIHtcclxuICAgIGNvbnN0cnVjdG9yKGVjcywgbWF4LCB0b3RhbCwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGVcclxuICAgICAgICB0aGlzLmNkID0gU1BBV05FUl9DRFxyXG4gICAgICAgIHRoaXMubWF4SG9zdGlsZXMgPSBtYXhcclxuICAgICAgICB0aGlzLnRvdGFsID0gdG90YWxcclxuICAgICAgICB0aGlzLmhvc3RpbGVzID0gW11cclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubWF4SG9zdGlsZXM7IGkgKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0aWxlcy5wdXNoKGNyZWF0ZVJlZChlY3MsIG5ldyBQb3MoMCwgMCwgMCksIGZhbHNlLCBudWxsLCB0eXBlKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1haW5pbmcoKSB7XHJcbiAgICAgICAgbGV0IHJlbWFpbmluZ0FsaXZlID0gMFxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmhvc3RpbGVzLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLmhvc3RpbGVzW2ldLmdldChIb3N0aWxlKS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nQWxpdmUgKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b3RhbCArIHJlbWFpbmluZ0FsaXZlXHJcbiAgICB9XHJcbiAgICBoYXNPbmUoKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaG9zdGlsZXMubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaG9zdGlsZXNbaV0uZ2V0KEhvc3RpbGUpLmlzQWN0aXZlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdGlsZXNbaV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGFjdGl2ZShwb3MpIHtcclxuICAgICAgICBjb25zdCBob3N0aWxlID0gdGhpcy5oYXNPbmUoKVxyXG4gICAgICAgIGlmKGhvc3RpbGUpIHtcclxuICAgICAgICAgICAgaG9zdGlsZS5nZXQoSG9zdGlsZSkuaXNBY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGhvc3RpbGUuZ2V0KFBvcykuc2V0KHBvcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFogPSA5MFxyXG5jb25zdCBXID0gODdcclxuY29uc3QgUSA9IDgxXHJcbmNvbnN0IEEgPSA2NVxyXG5jb25zdCBTID0gODNcclxuY29uc3QgRCA9IDY4XHJcbmNvbnN0IEVTUEFDRSA9IDMyXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sYWJsZSB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXNVcCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc0xlZnQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNSaWdodCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNNYWluID0gZmFsc2VcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBaIHx8IGV2ZW50LmtleUNvZGUgPT09IFcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNVcCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBFU1BBQ0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNYWluID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IFEgfHwgZXZlbnQua2V5Q29kZSA9PT0gQSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xlZnQgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gRCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JpZ2h0ID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IFMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBaIHx8IGV2ZW50LmtleUNvZGUgPT09IFcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNVcCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gRVNQQUNFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTWFpbiA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gUSB8fCBldmVudC5rZXlDb2RlID09PSBBKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTGVmdCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gRCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JpZ2h0ID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBTKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYWxTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzYykge1xyXG4gICAgICAgIHRoaXMuc2MgPSBzY1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9tYiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCB0aW1lLCByYWRpdXMpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hcm1lZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxyXG4gICAgICAgIHRoaXMucmVtYWluaW5nID0gdGltZVxyXG4gICAgICAgIHRoaXMudG90YWwgPSB0aW1lXHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDSVJDTEUgPSAwXHJcbmV4cG9ydCBjb25zdCBTUVVBUkUgPSAxXHJcbmV4cG9ydCBjb25zdCBTTUFMTF9DSVJDTEUgPSAyXHJcbmV4cG9ydCBjbGFzcyBBZ2VudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkcmF3KSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ID0gZHJhd1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVhZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaWVkQXQpIHtcclxuICAgICAgICB0aGlzLmRpZWRBdCA9IGRpZWRBdFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRVhQTE9ERV9UWVBFID0gMVxyXG5leHBvcnQgY2xhc3MgSG9zdGlsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHR5cGUsIGlzQWN0aXZlLCBzdGF0dXMpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlXHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxyXG4gICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZWZmZWN0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuZWZmZWN0VGltZSA9IDBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByZUJsYXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3RpbGUsIHJlbWFpbmluZywgdHlwZSkge1xyXG4gICAgICAgIHRoaXMuaG9zdGlsZSA9IGhvc3RpbGVcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmcgPSByZW1haW5pbmdcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhwID0gMTAwXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVSSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCB4LCB5LCBmbiwgaXNCdXR0b24pIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLmlzQnV0dG9uID0gaXNCdXR0b25cclxuICAgICAgICB0aGlzLmlzSG92ZXIgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYWRkID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUucGFnZVkgPiB5ICYmIGUucGFnZVkgPCB5ICsgMTUwICkge1xyXG4gICAgICAgICAgICAgICAgZm4oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnBhZ2VZID4geSAmJiBlLnBhZ2VZIDwgeSArIDE1MCApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNIb3ZlciA9IHRydWVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNIb3ZlciA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pc0J1dHRvbikge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmFkZClcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3ZlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0J1dHRvbikge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmFkZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaWRhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHhNaW4sIHlNaW4sIHhNYXgsIHlNYXgpIHtcclxuICAgICAgICB0aGlzLnhNaW4gPSB4TWluXHJcbiAgICAgICAgdGhpcy55TWluID0geU1pblxyXG4gICAgICAgIHRoaXMueE1heCA9IHhNYXhcclxuICAgICAgICB0aGlzLnlNYXggPSB5TWF4XHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgY2xhc3MgV2FsbCBleHRlbmRzIFZlY3RvciB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvbWJTbG90IHtcclxuICAgIGNvbnN0cnVjdG9yKGNkKSB7XHJcbiAgICAgICAgdGhpcy5jZCA9IGNkXHJcbiAgICAgICAgdGhpcy5pc0F2YWlsYWJsZSA9IHRydWVcclxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucm9sbCgpXHJcbiAgICAgICAgdGhpcy5ib21iID0gbnVsbFxyXG4gICAgfVxyXG4gICAgdXNlKCkge1xyXG4gICAgICAgIHRoaXMuYm9tYiA9IG5ldyBCb21iKHRoaXMudHlwZSwgKHRoaXMudHlwZSA9PT0gREVURUNUX0JPTUJfVFlQRSB8fCB0aGlzLnR5cGUgPT09IFRVUlRMRV9CT01CX1RZUEUpID8gQk9NQl9QUk9QRVJUSUVTX01BWF9USU1FUiA6IEJPTUJfUFJPUEVSVElFU19USU1FUiwgQk9NQl9QUk9QRVJUSUVTX1JBRElVUylcclxuICAgICAgICB0aGlzLmlzQXZhaWxhYmxlID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpcy5ib21iXHJcbiAgICB9XHJcbiAgICByb2xsKCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpXHJcbiAgICAgICAgdGhpcy5pc0F2YWlsYWJsZSA9IHRydWVcclxuICAgIH1cclxuICAgIHNldChib21iKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gYm9tYlxyXG4gICAgICAgIHRoaXMuaXNBdmFpbGFibGUgPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb21iQmFnIHtcclxuICAgIGNvbnN0cnVjdG9yKG1heFNpemUsIGNkKSB7XHJcbiAgICAgICAgdGhpcy5tYXhTaXplID0gbWF4U2l6ZSBcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gMFxyXG4gICAgICAgIHRoaXMuYm9tYlNsb3RzID0gW11cclxuICAgICAgICB0aGlzLmlzUm9sbGluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYW5Sb2xsID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMucm9sbEF0ID0gLTFcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWF4U2l6ZTsgaSArKykge1xyXG4gICAgICAgICAgICB0aGlzLmJvbWJTbG90cy5wdXNoKG5ldyBCb21iU2xvdChjZCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNBdmFpbGFibGUoKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYm9tYlNsb3RzLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib21iU2xvdHNbaV0uaXNBdmFpbGFibGUgJiYgIXRoaXMuYm9tYlNsb3RzW2ldLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpc0FsbEV4cGxvZGVkKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib21iU2xvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJvbWJTbG90c1tpXS5ib21iKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ib21iU2xvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgIGlmKHRoaXMuYm9tYlNsb3RzW2ldLmJvbWIudGltZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICB1c2VCb21iKCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmJvbWJTbG90cy5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9tYlNsb3RzW2ldLmlzQXZhaWxhYmxlICYmICF0aGlzLmJvbWJTbG90c1tpXS5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib21iU2xvdHNbaV0udXNlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXRSb2xsKCkge1xyXG4gICAgICAgIHRoaXMuaXNSb2xsaW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMucm9sbFRpbWUgPSAwXHJcbiAgICB9XHJcbiAgICByb2xsKCkge1xyXG4gICAgICAgIHRoaXMuaXNSb2xsaW5nID0gZmFsc2VcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvbWJTbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYm9tYlNsb3RzW2ldLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9tYlNsb3RzW2ldLnJvbGwoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldChib21icykge1xyXG4gICAgICAgIGJvbWJzLmZvckVhY2goKGJvbWIsIGkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib21iU2xvdHNbaV0uc2V0KGJvbWIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlKGVjcywgY3YpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkICsrXHJcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCA9PT0gdGhpcy5tYXhTaXplKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmJvbWJTbG90cy5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYm9tYlNsb3RzW2ldLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9tYlNsb3RzW2ldLmlzRGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkIC0tXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvbWJTbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib21iU2xvdHNbaV0uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib21iU2xvdHNbaV0uaXNEaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmxhc3Qge1xyXG4gICAgY29uc3RydWN0b3IoYXQpIHtcclxuICAgICAgICB0aGlzLmF0ID0gYXRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvb3Ige1xyXG4gICAgY29uc3RydWN0b3IodG8pIHtcclxuICAgICAgICB0aGlzLnRvID0gdG9cclxuICAgICAgICB0aGlzLnRpbWVyID0gLTFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4cGxvc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib21iVHlwZSkge1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nID0gRVhQTE9TSU9OX1NGWF9EVVJBVElPTlxyXG4gICAgICAgIHRoaXMucG9pbnRzID0gW11cclxuICAgICAgICB0aGlzLmJvbWJUeXBlID0gYm9tYlR5cGVcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IEVYUExPU0lPTl9TRlhfQ09VTlQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBwaTJcclxuICAgICAgICAgICAgdGhpcy5wb2ludHMucHVzaChuZXcgVmVjdG9yKE1hdGguY29zKGFuZ2xlKSwgTWF0aC5zaW4oYW5nbGUpKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIDE5XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljbGUge31cclxuXHJcbmV4cG9ydCBjbGFzcyBFeWVzIHt9XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdHVzIHt9XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwbG9kYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJsaW5rID0gMFxyXG4gICAgICAgIHRoaXMuZXhwbG9kZWQgPSBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgY29uc3QgWF9USUxFX0NPVU5UID0gMjJcclxuZXhwb3J0IGNvbnN0IFlfVElMRV9DT1VOVCA9IDEyXHJcblxyXG5leHBvcnQgY29uc3QgUExBWUVSX1NQRUVEID0gMSAvIDhcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9CQVNFX0FDQyA9IC4wMVxyXG5leHBvcnQgY29uc3QgUExBWUVSX0JBU0VfRlJJQ1RJT04gPSAuMDJcclxuXHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfV0lEVEggPSAxXHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfSEVJR0hUID0gMVxyXG5cclxuZXhwb3J0IGNvbnN0IFJFRF9XSURUSCA9IDFcclxuZXhwb3J0IGNvbnN0IFJFRF9IRUlHSFQgPSAxXHJcblxyXG5leHBvcnQgY29uc3QgQk9NQl9QUk9QRVJUSUVTX1JBRElVUyA9IDMgXHJcbmV4cG9ydCBjb25zdCBCT01CX1BST1BFUlRJRVNfVElNRVIgPSAyNTAwXHJcbmV4cG9ydCBjb25zdCBCT01CX1BST1BFUlRJRVNfTUFYX1RJTUVSID0gNTAwMFxyXG5cclxuZXhwb3J0IGNvbnN0IEVYUExPU0lPTl9TRlhfRFVSQVRJT04gPSAzMDBcclxuZXhwb3J0IGNvbnN0IEVYUExPU0lPTl9TRlhfQ09VTlQgPSA5XHJcbmV4cG9ydCBjb25zdCBFWFBMT1NJT05fU0ZYX1NJWkUgPSAuNVxyXG5leHBvcnQgY29uc3QgRVhQTE9TSU9OX1NGWF9QUk9QQUdBVElPTiA9IDFcclxuXHJcbmV4cG9ydCBjb25zdCBQUkVCTEFTVF9TRlhfTElORV9DT1VOVCA9IDE2XHJcblxyXG5leHBvcnQgY29uc3QgQk9NQkFHX1JPTExfRFVSQVRJT04gPSAyMDAwXHJcblxyXG5leHBvcnQgY29uc3QgSE9TVElMRV9XSURUSCA9IC41XHJcbmV4cG9ydCBjb25zdCBIT1NUSUxFX1NQRUVEID0gLjA3XHJcbmV4cG9ydCBjb25zdCBIT1NUSUxFX0JPTUJfREFNQUdFID0gMTVcclxuZXhwb3J0IGNvbnN0IFNQQVdORVJfQ0QgPSAxMDAwXHJcblxyXG5leHBvcnQgY29uc3QgSE9TVElMRV9UWVBFX1BQQU9FID0gMFxyXG5leHBvcnQgY29uc3QgSE9TVElMRV9UWVBFX1JBTkdFID0gMVxyXG5cclxuZXhwb3J0IGNvbnN0IEhPU1RJTEVfRUZGRUNUX05PTkUgPSAtMVxyXG5leHBvcnQgY29uc3QgSE9TVElMRV9FRkZFQ1RfRlJFRVpFID0gMFxyXG5leHBvcnQgY29uc3QgSE9TVElMRV9FRkZFQ1RfRElTT1JJRU5URUQgPSAxXHJcbmV4cG9ydCBjb25zdCBIT1NUSUxFX0VGRkVDVF9TTEVFUCA9IDNcclxuZXhwb3J0IGNvbnN0IEhPU1RJTEVfRUZGRUNUX1JFTE9BRCA9IDRcclxuZXhwb3J0IGNvbnN0IEhPU1RJTEVfRUZGRUNUX1JFTE9BRF9USU1FID0gMzAwMFxyXG5cclxuZXhwb3J0IGNvbnN0IEhPU1RJTEVfU0xFRVBfQVdBS0VfUkFOR0UgPSAyXHJcblxyXG5leHBvcnQgY29uc3QgREVBRF9MSVZFID0gMzAwMFxyXG5cclxuZXhwb3J0IGNvbnN0IEJMQVNUX1JBRElVUyA9IDJcclxuZXhwb3J0IGNvbnN0IFBSRV9CTEFTVF9EVVJBVElPTiA9IDUwMFxyXG5cclxuZXhwb3J0IGNvbnN0IEJMQVNUX0RVUkFUSU9OID0gMzAwXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFUT01JQ19CT01CX1RZUEUgPSAwXHJcbmV4cG9ydCBjb25zdCBGUkVFWkVfQk9NQl9UWVBFID0gMVxyXG5leHBvcnQgY29uc3QgRkxBU0hfQk9NQl9UWVBFID0gMlxyXG5leHBvcnQgY29uc3QgREVURUNUX0JPTUJfVFlQRSA9IDNcclxuZXhwb3J0IGNvbnN0IFRVUlRMRV9CT01CX1RZUEUgPSA0IFxyXG5cclxuZXhwb3J0IGNvbnN0IEhPU1RJTEVfRlJFRVpFX1RJTUUgPSAxMTAwXHJcbmV4cG9ydCBjb25zdCBIT1NUSUxFX0RJU09SSUVOVEVEX1RJTUUgPSAzMzAwXHJcblxyXG5leHBvcnQgY29uc3QgVElNRV9CT01CX0RFVE9OQVRFX0RFTEFZID0gMjAwXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRElOR19EVVJBVElPTiA9IDEwMDBcclxuZXhwb3J0IGNvbnN0IEJPTUJfQ09MTElTT05fUkFESVVTID0gLjVcclxuZXhwb3J0IGNvbnN0IEJPTUJfQVJNX1JBRElVUyA9IDFcclxuIiwiXHJcbmltcG9ydCB7IHBpMiB9IGZyb20gXCIuL2xpYnMvdXRpbHNcIlxyXG5pbXBvcnQgeyBBVE9NSUNfQk9NQl9UWVBFLCBGTEFTSF9CT01CX1RZUEUsIEZSRUVaRV9CT01CX1RZUEUsIERFVEVDVF9CT01CX1RZUEUsIFRVUlRMRV9CT01CX1RZUEUsUExBWUVSX1dJRFRILCBQTEFZRVJfSEVJR0hULCBYX1RJTEVfQ09VTlQsIFlfVElMRV9DT1VOVCB9IGZyb20gXCIuL2NvbmZpZ1wiXHJcblxyXG5jb25zdCBzcXVhcmUgPSAodWlQb3MsIGN0eCwgeCwgeSwgaSwgY29sb3IpID0+IHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvclxyXG4gICAgY3R4LmZpbGxSZWN0KHVpUG9zLnggKyBpICogOTAgKyAoeCArIDEpKiAxMCwgdWlQb3MueSArICh5ICsgMSkgKiAxMCwgMTAsIDEwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0JvbWJDYXJkID0gKHBvcywgYm9tYlNsb3QsIGksIGN0eCwgaXNSb2xsaW5nLCByb2xsaW5nUmF0aW8pID0+IHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDBcIlxyXG4gICAgY3R4LmZpbGxSZWN0KHBvcy54ICsgaSAqIDkwLCBwb3MueSwgMTAwLCAxMDApXHJcbiAgICBjdHguZmlsbFN0eWxlID0gYm9tYlNsb3QuaXNBdmFpbGFibGUgPyBcIiMwMTBDMTRcIiA6IFwiIzQ3MDYwNVwiXHJcbiAgICBjdHguZmlsbFJlY3QocG9zLnggKyBpICogOTAgKyAxMCwgcG9zLnkgKyAxMCwgODAsIDgwKVxyXG4gICAgXHJcbiAgICBpZihpc1JvbGxpbmcpIHtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDMwLCAxMzAsIDMwLCAxKVwiXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHBvcy54ICsgaSAqIDkwICsgMTAsIHBvcy55ICsgMTAsIDgwICogcm9sbGluZ1JhdGlvLCA4MClcclxuICAgIH1cclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDBcIlxyXG4gICAgc3dpdGNoKGJvbWJTbG90LnR5cGUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMSwwLGksXCIjRDk4QTE0XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMSwxLGksXCIjRjA3NDBBXCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNCwxLGksXCIjRDk4QTE0XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNSwxLGksXCIjRTY0RjA5XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNywyLGksXCIjRjBBQjBBXCIpXHJcblxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDMsMyxpLFwiI0YwQUIwQVwiKVxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDQsMyxpLFwiI0YwQUIwQVwiKVxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDMsNCxpLFwiI0YwQUIwQVwiKVxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDQsNCxpLFwiI0YwQUIwQVwiKVxyXG5cclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAxLCA0LGksXCIjRDk4QTE0XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMiwgNyxpLFwiI0YwNzQwQVwiKVxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDMsIDcsaSxcIiNEOThBMTRcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCA1LCA2LGksXCIjRjBBQjBBXCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNSwgNyxpLFwiI0U2NEYwOVwiKVxyXG5cclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMiwxLGksXCIjOENDMUU5XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMiwzLGksXCIjOENDMUU5XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMiw0LGksXCIjOENDMUU5XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMiw2LGksXCIjOENDMUU5XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMiw3LGksXCIjOENDMUU5XCIpXHJcblxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDAsIDMsaSxcIiM4Q0MxRTlcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAwLCA1LGksXCIjOENDMUU5XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMSwgNSxpLFwiIzhDQzFFOVwiKVxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDAsIDcsaSxcIiM4Q0MxRTlcIilcclxuXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMyw1LGksXCIjOENDMUU5XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNCw1LGksXCIjOENDMUU5XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNiw1LGksXCIjOENDMUU5XCIpXHJcblxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDUsMixpLFwiIzhDQzFFOVwiKVxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDQsMyxpLFwiIzhDQzFFOVwiKVxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDQsNyxpLFwiIzhDQzFFOVwiKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCA1LDAsaSxcIiNlZWVcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCA1LDEsaSxcIiNlZWVcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCA0LDIsaSxcIiNlZWVcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAxLDMsaSxcIiNlZWVcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAzLDMsaSxcIiNlZWVcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCA0LDMsaSxcIiNlZWVcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCA2LDMsaSxcIiNlZWVcIilcclxuXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMyw0LGksXCIjZWVlXCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMiw1LGksXCIjZWVlXCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgMiw2LGksXCIjZWVlXCIpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDMsMyxpLFwiI0IxMTkxM1wiKVxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDMsNCxpLFwiI0IxMTkxM1wiKVxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDQsMyxpLFwiI0IxMTkxM1wiKVxyXG4gICAgICAgICAgICBzcXVhcmUocG9zLCBjdHgsIDQsNCxpLFwiI0IxMTkxM1wiKVxyXG5cclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAyLDEsaSxcIiNCMTE5MTNcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAxLDIsaSxcIiNCMTE5MTNcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAxLDMsaSxcIiNCMTE5MTNcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAxLDQsaSxcIiNCMTE5MTNcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAxLDUsaSxcIiNCMTE5MTNcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAyLDYsaSxcIiNCMTE5MTNcIilcclxuXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNSwxLGksXCIjQjExOTEzXCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNiwyLGksXCIjQjExOTEzXCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNiwzLGksXCIjQjExOTEzXCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNiw0LGksXCIjQjExOTEzXCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNiw1LGksXCIjQjExOTEzXCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNSw2LGksXCIjQjExOTEzXCIpXHJcblxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAxLDMsaSxcIiM5N0U2MTRcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAxLDQsaSxcIiM5N0U2MTRcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAyLDMsaSxcIiM5N0U2MTRcIilcclxuICAgICAgICAgICAgc3F1YXJlKHBvcywgY3R4LCAyLDQsaSxcIiM5N0U2MTRcIilcclxuXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNCw0LGksXCIjOTdFNjE0XCIpXHJcbiAgICAgICAgICAgIHNxdWFyZShwb3MsIGN0eCwgNiw0LGksXCIjOTdFNjE0XCIpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3Qm9tYkVmZmVjdCA9IChib21iLCBwb3MsIGN0eCkgPT4ge1xyXG4gICAgLy8gYXJlYVxyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDJcclxuICAgIFxyXG4gICAgc3dpdGNoKGJvbWIudHlwZSkge1xyXG4gICAgICAgIGNhc2UgQVRPTUlDX0JPTUJfVFlQRTpcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjZmZiZDE4XCI7IGJyZWFrXHJcbiAgICAgICAgY2FzZSBGTEFTSF9CT01CX1RZUEU6XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI2ZmZlwiOyBicmVha1xyXG4gICAgICAgIGNhc2UgRlJFRVpFX0JPTUJfVFlQRTpcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDBmXCI7IGJyZWFrXHJcbiAgICAgICAgY2FzZSBERVRFQ1RfQk9NQl9UWVBFOlxyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNmMDBcIjsgYnJlYWtcclxuICAgICAgICBjYXNlIFRVUlRMRV9CT01CX1RZUEU6XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzBmMFwiOyBicmVha1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpZGVzID0gMTZcclxuICAgIGNvbnN0IHJhZGl1cyA9IGJvbWIucmFkaXVzICogdGlsZVNpemUgKyA1XHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5tb3ZlVG8gKHBvcy54ICsgIHJhZGl1cyAqIE1hdGguY29zKDApLCBwb3MueSArICByYWRpdXMgKiAgTWF0aC5zaW4oMCkpICAgICBcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNpZGVzO2kgKyspIHtcclxuICAgICAgICBjdHgubGluZVRvIChwb3MueCArIHJhZGl1cyAqIE1hdGguY29zKGkgKiAyICogTWF0aC5QSSAvIHNpZGVzKSwgcG9zLnkgKyByYWRpdXMgKiBNYXRoLnNpbihpICogMiAqIE1hdGguUEkgLyBzaWRlcykpXHJcbiAgICB9XHJcbiAgICBjdHgubGluZVdpZHRoID0gMVxyXG4gICAgY3R4LmNsb3NlUGF0aCgpXHJcbiAgICBjdHguc3Ryb2tlKClcclxuICAgIFxyXG4gICAgLy8gdGltZVxyXG4gICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICBjdHguYXJjKHBvcy54LCBwb3MueSwgYm9tYi5yYWRpdXMgKiB0aWxlU2l6ZSAvIDIsIC1NYXRoLlBJIC8gMiwgIC1NYXRoLlBJIC8gMiArIChib21iLnRvdGFsIC0gYm9tYi5yZW1haW5pbmcpIC8gYm9tYi50b3RhbCAqIHBpMilcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuMylcIlxyXG4gICAgY3R4LmxpbmVXaWR0aCA9IHRpbGVTaXplIC8gMlxyXG4gICAgY3R4LnN0cm9rZSgpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBibHVlQWdlbnQgPSAocG9zLCBjdHgsIGFnZW50KSA9PiB7IC8vIHlvdVxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiXHJcbiAgICBjdHguZmlsbFJlY3QocG9zLngsIHBvcy55LCBQTEFZRVJfV0lEVEggKiB0aWxlU2l6ZSwgUExBWUVSX0hFSUdIVCAqIHRpbGVTaXplKVxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzU3RDBFQlwiXHJcbiAgICBjdHguZmlsbFJlY3QocG9zLnggKyAyLCBwb3MueSArIDIsIFBMQVlFUl9XSURUSCAqIHRpbGVTaXplIC0gNCwgUExBWUVSX0hFSUdIVCAqIHRpbGVTaXplIC0gNClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZEFnZW50ID0gKHBvcywgY3R4LCBhZ2VudCkgPT4geyAvLyB5b3VcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIlxyXG4gICAgY3R4LmZpbGxSZWN0KHBvcy54LCBwb3MueSwgMSAqIHRpbGVTaXplLCAxICogdGlsZVNpemUpXHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjNTIwRTBFXCJcclxuICAgIGN0eC5maWxsUmVjdChwb3MueCArIDIsIHBvcy55ICsgMiwgMSAqIHRpbGVTaXplIC0gNCwgMSAqIHRpbGVTaXplIC0gNClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWRBZ2VudCA9IChwb3MsIGN0eCwgYWdlbnQpID0+IHsgLy8geW91XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmXCJcclxuICAgIGN0eC5maWxsUmVjdChwb3MueCAqIHRpbGVTaXplLCBwb3MueSAqIHRpbGVTaXplLCAxICogdGlsZVNpemUsIDEgKiB0aWxlU2l6ZSlcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDBcIlxyXG4gICAgY3R4LmZpbGxSZWN0KHBvcy54ICogdGlsZVNpemUgKyAyLCBwb3MueSAqIHRpbGVTaXplICsgMiwgMSAqIHRpbGVTaXplIC0gNCwgMSAqIHRpbGVTaXplIC0gNClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJvbWJBZ2VudCA9IChwb3MsIGN0eCwgYWdlbnQpID0+IHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIlxyXG4gICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICBjdHguYXJjKHBvcy54LCBwb3MueSwgLjUgKiB0aWxlU2l6ZSwgMCwgcGkyKVxyXG4gICAgY3R4LmNsb3NlUGF0aCgpXHJcbiAgICBjdHguZmlsbCgpXHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwXCJcclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4LmFyYyhwb3MueCwgcG9zLnksIC41ICogdGlsZVNpemUgLSAyLCAwLCBwaTIpXHJcbiAgICBjdHguY2xvc2VQYXRoKClcclxuICAgIGN0eC5maWxsKClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdFeHBsb2RhYmxlID0gKGN0eCwgcG9zLCBleHBsb2RhYmxlRW50aXR5KSA9PiB7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDQwQjBGXCJcclxuICAgIGN0eC5maWxsUmVjdChwb3MueCAqIHRpbGVTaXplLCBwb3MueSAqIHRpbGVTaXplLCB0aWxlU2l6ZSwgdGlsZVNpemUpXHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5yZWN0KHBvcy54ICogdGlsZVNpemUgKyAyLCBwb3MueSAqIHRpbGVTaXplICsgMiwgdGlsZVNpemUgLSA0LCB0aWxlU2l6ZSAtNClcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGV4cGxvZGFibGVFbnRpdHkuZXhwbG9kZWQgPyBcIiM0NDRcIiA6IFwiI0MyMTExMVwiXHJcbiAgICBjdHgubGluZVdpZHRoID0gMVxyXG4gICAgY3R4LnN0cm9rZSgpXHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5yZWN0KHBvcy54ICogdGlsZVNpemUgLSAxMCwgcG9zLnkgKiB0aWxlU2l6ZSAtMTAsIHRpbGVTaXplICsyMCwgdGlsZVNpemUgKzIwKVxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjOUU0RDA2XCJcclxuICAgIGN0eC5saW5lV2lkdGggPSAyXHJcbiAgICBjdHguc3Ryb2tlKClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdFeWVzID0gKHBvcywgY3R4LCBleWUpID0+IHtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd1NvaWwgPSAoY3R4KSA9PiB7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjNTIyOTA2XCJcclxuICAgIGN0eC5maWxsUmVjdCgwLDAsWF9USUxFX0NPVU5UICogdGlsZVNpemUsIFlfVElMRV9DT1VOVCAqIHRpbGVTaXplKVxyXG59IiwiaW1wb3J0IHtTb3VuZH0gZnJvbSBcIi4vbGlicy9hdWRpby5qc1wiXHJcbmltcG9ydCBtZWxvZGllIGZyb20gXCIuL2Fzc2V0cy9hdWRpby9tZWxvMS5qc29uXCI7XHJcblxyXG5pbXBvcnQgZWNzIGZyb20gXCJqczEzay1lY3NcIjtcclxuXHJcbmltcG9ydCB7IFBvcywgQ29udHJvbGFibGUsIFRyaWFsU3RhdGUsIEJvbWIsIFBsYXllciwgSG9zdGlsZSwgU3Bhd24sIFNwZWVkLCBBY2MsIFxyXG4gIFVJLCBXYWxsLCBDb2xsaWRhYmxlLCBCb21iQmFnLCBEZWFkLCBQcmVCbGFzdCwgQmxhc3QsIERvb3IsIEV4cGxvc2lvbiwgQWdlbnQsIEV4cGxvZGFibGUgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbnRyb2wsIGRyYXcsIHRyaWFsRGlzcGxheSwgbGl2ZUJvbWJzLCBsaXZlU3Bhd24sIGlhLCBsaXZlVWksIGNvbGxpZGUsIGxpdmVCb21iQmFnLCBsaXZlRGVhZCwgbGl2ZVByZUJsYXN0LCBsaXZlQmxhc3QsIGxpdmVEb29ycywgbGl2ZUhwLCBsaXZlRXhwbG9zaW9ucywgZHJhd0FnZW50LCBsaXZlRXhwbG9kYWJsZSB9IGZyb20gXCIuL3N5c3RlbXNcIjtcclxuaW1wb3J0IHsgdGl0bGUgfSBmcm9tIFwiLi9zY3JlZW5zLmpzXCJcclxuaW1wb3J0IHsgWF9USUxFX0NPVU5ULCBZX1RJTEVfQ09VTlQgfSBmcm9tIFwiLi9jb25maWcuanNcIjtcclxuaW1wb3J0IHsgbWFwTG9hZGVyIH0gZnJvbSBcIi4vbGlicy9tYXBMb2FkZXIuanNcIjtcclxuXHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikpXHJcbmNvbnN0IGN2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKVxyXG5jdi53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbmN2LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG5jb25zdCBjcFRpbGVTaXplID0gKCkgPT4gKE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC8gWF9USUxFX0NPVU5ULCB3aW5kb3cuaW5uZXJIZWlnaHQgLyBZX1RJTEVfQ09VTlQpKVxyXG53aW5kb3cudGlsZVNpemUgPSBjcFRpbGVTaXplKClcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICBjdi53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgY3YuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgd2luZG93LnRpbGVTaXplID0gY3BUaWxlU2l6ZSgpXHJcbn0pXHJcblxyXG5cclxuY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dChcIjJkXCIpIFxyXG53aW5kb3cubWFwTG9hZGVyID0gbWFwTG9hZGVyKGVjcylcclxuZWNzLnJlZ2lzdGVyKFBvcywgU3BlZWQsIEFjYywgQ29udHJvbGFibGUsIFRyaWFsU3RhdGUsIEJvbWIsIFBsYXllciwgSG9zdGlsZSwgU3Bhd24sIFVJLCBXYWxsLFxyXG4gIENvbGxpZGFibGUsIERlYWQsIEJvbWJCYWcsIFByZUJsYXN0LCBCbGFzdCwgRG9vciwgRXhwbG9zaW9uLCBBZ2VudCwgRXhwbG9kYWJsZSlcclxuXHJcblxyXG5cclxuZWNzLnByb2Nlc3MoZHJhd0FnZW50KGVjcywgY3R4KSwgdHJpYWxEaXNwbGF5KGVjcywgY3R4KSwgY29udHJvbChlY3MpLCBcclxuICBsaXZlQm9tYnMoZWNzLCBjdHgpLCBsaXZlU3Bhd24oZWNzLCBjdHgpLCBpYShlY3MsIGN0eCksIGxpdmVEb29ycyhlY3MsIGN0eCksIGNvbGxpZGUoZWNzLCBjdHgpLCBsaXZlQm9tYkJhZyhlY3MsIGN0eCwgdGlsZVNpemUpLCBcclxuICBsaXZlRGVhZChlY3MsIGN0eCksIGxpdmVFeHBsb3Npb25zKGVjcywgY3R4KSwgbGl2ZUV4cGxvZGFibGUoZWNzLCBjdHgpLCBsaXZlUHJlQmxhc3QoZWNzLCBjdHgsIGN2KSwgbGl2ZUJsYXN0KGVjcywgY3R4KSwgbGl2ZVVpKGVjcywgY3R4LCBjdiksIGxpdmVIcChlY3MsIGN0eCwgY3YpKTtcclxuXHJcbihhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbWVsb2RpZUN1cnJ5ID0gYXdhaXQgU291bmQobWVsb2RpZSlcclxuICAgXHJcbiAgY3Yub25jbGljayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNvdW5kSGFuZGxlID0gbWVsb2RpZUN1cnJ5KHRydWUpXHJcbiAgfVxyXG4gIFxyXG59KSgpXHJcblxyXG53aW5kb3cuY3VycmVudFNjcmVlbiA9IHRpdGxlKGVjcywgY3YpXHJcbnRpdGxlKGVjcywgY3YpLmxvYWQoKVxyXG5cclxuXHJcbmxldCBsYXN0ID0gMFxyXG5sZXQgbm93ICBcclxuXHJcbmNvbnN0IGxvb3AgPSAoKSA9PiB7XHJcbiAgbm93ID0gcGVyZm9ybWFuY2Uubm93KClcclxuICBjdi53aWR0aCArPSAwXHJcbiAgZWNzLnVwZGF0ZShub3cgLSBsYXN0KVxyXG5cclxuICBsYXN0ID0gbm93XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXHJcbn1cclxuXHJcbmxvb3AoKSIsImZ1bmN0aW9uIHBhdGhUbyhub2RlKSB7XHJcbiAgICB2YXIgY3VyciA9IG5vZGU7XHJcbiAgICB2YXIgcGF0aCA9IFtdO1xyXG4gICAgd2hpbGUgKGN1cnIucGFyZW50KSB7XHJcbiAgICAgIHBhdGgudW5zaGlmdChjdXJyKTtcclxuICAgICAgY3VyciA9IGN1cnIucGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldEhlYXAoKSB7XHJcbiAgICByZXR1cm4gbmV3IEJpbmFyeUhlYXAoZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICByZXR1cm4gbm9kZS5mO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBhc3RhciA9IHtcclxuICAgIC8qKlxyXG4gICAgKiBQZXJmb3JtIGFuIEEqIFNlYXJjaCBvbiBhIGdyYXBoIGdpdmVuIGEgc3RhcnQgYW5kIGVuZCBub2RlLlxyXG4gICAgKiBAcGFyYW0ge0dyYXBofSBncmFwaFxyXG4gICAgKiBAcGFyYW0ge0dyaWROb2RlfSBzdGFydFxyXG4gICAgKiBAcGFyYW0ge0dyaWROb2RlfSBlbmRcclxuICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gICAgKiBAcGFyYW0ge2Jvb2x9IFtvcHRpb25zLmNsb3Nlc3RdIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcclxuICAgICAgICAgICAgICAgcGF0aCB0byB0aGUgY2xvc2VzdCBub2RlIGlmIHRoZSB0YXJnZXQgaXMgdW5yZWFjaGFibGUuXHJcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmhldXJpc3RpY10gSGV1cmlzdGljIGZ1bmN0aW9uIChzZWVcclxuICAgICogICAgICAgICAgYXN0YXIuaGV1cmlzdGljcykuXHJcbiAgICAqL1xyXG4gICAgc2VhcmNoOiBmdW5jdGlvbihncmFwaCwgc3RhcnQsIGVuZCwgb3B0aW9ucykge1xyXG4gICAgICBncmFwaC5jbGVhbkRpcnR5KCk7XHJcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICB2YXIgaGV1cmlzdGljID0gb3B0aW9ucy5oZXVyaXN0aWMgfHwgYXN0YXIuaGV1cmlzdGljcy5tYW5oYXR0YW47XHJcbiAgICAgIHZhciBjbG9zZXN0ID0gb3B0aW9ucy5jbG9zZXN0IHx8IGZhbHNlO1xyXG4gIFxyXG4gICAgICB2YXIgb3BlbkhlYXAgPSBnZXRIZWFwKCk7XHJcbiAgICAgIHZhciBjbG9zZXN0Tm9kZSA9IHN0YXJ0OyAvLyBzZXQgdGhlIHN0YXJ0IG5vZGUgdG8gYmUgdGhlIGNsb3Nlc3QgaWYgcmVxdWlyZWRcclxuICBcclxuICAgICAgc3RhcnQuaCA9IGhldXJpc3RpYyhzdGFydCwgZW5kKTtcclxuICAgICAgZ3JhcGgubWFya0RpcnR5KHN0YXJ0KTtcclxuICBcclxuICAgICAgb3BlbkhlYXAucHVzaChzdGFydCk7XHJcbiAgXHJcbiAgICAgIHdoaWxlIChvcGVuSGVhcC5zaXplKCkgPiAwKSB7XHJcbiAgXHJcbiAgICAgICAgLy8gR3JhYiB0aGUgbG93ZXN0IGYoeCkgdG8gcHJvY2VzcyBuZXh0LiAgSGVhcCBrZWVwcyB0aGlzIHNvcnRlZCBmb3IgdXMuXHJcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gb3BlbkhlYXAucG9wKCk7XHJcbiAgXHJcbiAgICAgICAgLy8gRW5kIGNhc2UgLS0gcmVzdWx0IGhhcyBiZWVuIGZvdW5kLCByZXR1cm4gdGhlIHRyYWNlZCBwYXRoLlxyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZSA9PT0gZW5kKSB7XHJcbiAgICAgICAgICByZXR1cm4gcGF0aFRvKGN1cnJlbnROb2RlKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLy8gTm9ybWFsIGNhc2UgLS0gbW92ZSBjdXJyZW50Tm9kZSBmcm9tIG9wZW4gdG8gY2xvc2VkLCBwcm9jZXNzIGVhY2ggb2YgaXRzIG5laWdoYm9ycy5cclxuICAgICAgICBjdXJyZW50Tm9kZS5jbG9zZWQgPSB0cnVlO1xyXG4gIFxyXG4gICAgICAgIC8vIEZpbmQgYWxsIG5laWdoYm9ycyBmb3IgdGhlIGN1cnJlbnQgbm9kZS5cclxuICAgICAgICB2YXIgbmVpZ2hib3JzID0gZ3JhcGgubmVpZ2hib3JzKGN1cnJlbnROb2RlKTtcclxuICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xyXG4gICAgICAgICAgdmFyIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xyXG4gIFxyXG4gICAgICAgICAgaWYgKG5laWdoYm9yLmNsb3NlZCB8fCBuZWlnaGJvci5pc1dhbGwoKSkge1xyXG4gICAgICAgICAgICAvLyBOb3QgYSB2YWxpZCBub2RlIHRvIHByb2Nlc3MsIHNraXAgdG8gbmV4dCBuZWlnaGJvci5cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAvLyBUaGUgZyBzY29yZSBpcyB0aGUgc2hvcnRlc3QgZGlzdGFuY2UgZnJvbSBzdGFydCB0byBjdXJyZW50IG5vZGUuXHJcbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSBwYXRoIHdlIGhhdmUgYXJyaXZlZCBhdCB0aGlzIG5laWdoYm9yIGlzIHRoZSBzaG9ydGVzdCBvbmUgd2UgaGF2ZSBzZWVuIHlldC5cclxuICAgICAgICAgIHZhciBnU2NvcmUgPSBjdXJyZW50Tm9kZS5nICsgbmVpZ2hib3IuZ2V0Q29zdChjdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICB2YXIgYmVlblZpc2l0ZWQgPSBuZWlnaGJvci52aXNpdGVkO1xyXG4gIFxyXG4gICAgICAgICAgaWYgKCFiZWVuVmlzaXRlZCB8fCBnU2NvcmUgPCBuZWlnaGJvci5nKSB7XHJcbiAgXHJcbiAgICAgICAgICAgIC8vIEZvdW5kIGFuIG9wdGltYWwgKHNvIGZhcikgcGF0aCB0byB0aGlzIG5vZGUuICBUYWtlIHNjb3JlIGZvciBub2RlIHRvIHNlZSBob3cgZ29vZCBpdCBpcy5cclxuICAgICAgICAgICAgbmVpZ2hib3IudmlzaXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLnBhcmVudCA9IGN1cnJlbnROb2RlO1xyXG4gICAgICAgICAgICBuZWlnaGJvci5oID0gbmVpZ2hib3IuaCB8fCBoZXVyaXN0aWMobmVpZ2hib3IsIGVuZCk7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLmcgPSBnU2NvcmU7XHJcbiAgICAgICAgICAgIG5laWdoYm9yLmYgPSBuZWlnaGJvci5nICsgbmVpZ2hib3IuaDtcclxuICAgICAgICAgICAgZ3JhcGgubWFya0RpcnR5KG5laWdoYm9yKTtcclxuICAgICAgICAgICAgaWYgKGNsb3Nlc3QpIHtcclxuICAgICAgICAgICAgICAvLyBJZiB0aGUgbmVpZ2hib3VyIGlzIGNsb3NlciB0aGFuIHRoZSBjdXJyZW50IGNsb3Nlc3ROb2RlIG9yIGlmIGl0J3MgZXF1YWxseSBjbG9zZSBidXQgaGFzXHJcbiAgICAgICAgICAgICAgLy8gYSBjaGVhcGVyIHBhdGggdGhhbiB0aGUgY3VycmVudCBjbG9zZXN0IG5vZGUgdGhlbiBpdCBiZWNvbWVzIHRoZSBjbG9zZXN0IG5vZGVcclxuICAgICAgICAgICAgICBpZiAobmVpZ2hib3IuaCA8IGNsb3Nlc3ROb2RlLmggfHwgKG5laWdoYm9yLmggPT09IGNsb3Nlc3ROb2RlLmggJiYgbmVpZ2hib3IuZyA8IGNsb3Nlc3ROb2RlLmcpKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZXN0Tm9kZSA9IG5laWdoYm9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICBpZiAoIWJlZW5WaXNpdGVkKSB7XHJcbiAgICAgICAgICAgICAgLy8gUHVzaGluZyB0byBoZWFwIHdpbGwgcHV0IGl0IGluIHByb3BlciBwbGFjZSBiYXNlZCBvbiB0aGUgJ2YnIHZhbHVlLlxyXG4gICAgICAgICAgICAgIG9wZW5IZWFwLnB1c2gobmVpZ2hib3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIEFscmVhZHkgc2VlbiB0aGUgbm9kZSwgYnV0IHNpbmNlIGl0IGhhcyBiZWVuIHJlc2NvcmVkIHdlIG5lZWQgdG8gcmVvcmRlciBpdCBpbiB0aGUgaGVhcFxyXG4gICAgICAgICAgICAgIG9wZW5IZWFwLnJlc2NvcmVFbGVtZW50KG5laWdoYm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZiAoY2xvc2VzdCkge1xyXG4gICAgICAgIHJldHVybiBwYXRoVG8oY2xvc2VzdE5vZGUpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8vIE5vIHJlc3VsdCB3YXMgZm91bmQgLSBlbXB0eSBhcnJheSBzaWduaWZpZXMgZmFpbHVyZSB0byBmaW5kIHBhdGguXHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH0sXHJcbiAgICAvLyBTZWUgbGlzdCBvZiBoZXVyaXN0aWNzOiBodHRwOi8vdGhlb3J5LnN0YW5mb3JkLmVkdS9+YW1pdHAvR2FtZVByb2dyYW1taW5nL0hldXJpc3RpY3MuaHRtbFxyXG4gICAgaGV1cmlzdGljczoge1xyXG4gICAgICBtYW5oYXR0YW46IGZ1bmN0aW9uKHBvczAsIHBvczEpIHtcclxuICAgICAgICB2YXIgZDEgPSBNYXRoLmFicyhwb3MxLnggLSBwb3MwLngpO1xyXG4gICAgICAgIHZhciBkMiA9IE1hdGguYWJzKHBvczEueSAtIHBvczAueSk7XHJcbiAgICAgICAgcmV0dXJuIGQxICsgZDI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRpYWdvbmFsOiBmdW5jdGlvbihwb3MwLCBwb3MxKSB7XHJcbiAgICAgICAgdmFyIEQgPSAxO1xyXG4gICAgICAgIHZhciBEMiA9IE1hdGguc3FydCgyKTtcclxuICAgICAgICB2YXIgZDEgPSBNYXRoLmFicyhwb3MxLnggLSBwb3MwLngpO1xyXG4gICAgICAgIHZhciBkMiA9IE1hdGguYWJzKHBvczEueSAtIHBvczAueSk7XHJcbiAgICAgICAgcmV0dXJuIChEICogKGQxICsgZDIpKSArICgoRDIgLSAoMiAqIEQpKSAqIE1hdGgubWluKGQxLCBkMikpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xlYW5Ob2RlOiBmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgIG5vZGUuZiA9IDA7XHJcbiAgICAgIG5vZGUuZyA9IDA7XHJcbiAgICAgIG5vZGUuaCA9IDA7XHJcbiAgICAgIG5vZGUudmlzaXRlZCA9IGZhbHNlO1xyXG4gICAgICBub2RlLmNsb3NlZCA9IGZhbHNlO1xyXG4gICAgICBub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICAvKipcclxuICAgKiBBIGdyYXBoIG1lbW9yeSBzdHJ1Y3R1cmVcclxuICAgKiBAcGFyYW0ge0FycmF5fSBncmlkSW4gMkQgYXJyYXkgb2YgaW5wdXQgd2VpZ2h0c1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge2Jvb2x9IFtvcHRpb25zLmRpYWdvbmFsXSBTcGVjaWZpZXMgd2hldGhlciBkaWFnb25hbCBtb3ZlcyBhcmUgYWxsb3dlZFxyXG4gICAqL1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBHcmFwaChncmlkSW4sIG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgdGhpcy5ub2RlcyA9IFtdO1xyXG4gICAgdGhpcy5kaWFnb25hbCA9ICEhb3B0aW9ucy5kaWFnb25hbDtcclxuICAgIHRoaXMuZ3JpZCA9IFtdO1xyXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCBncmlkSW4ubGVuZ3RoOyB4KyspIHtcclxuICAgICAgdGhpcy5ncmlkW3hdID0gW107XHJcbiAgXHJcbiAgICAgIGZvciAodmFyIHkgPSAwLCByb3cgPSBncmlkSW5beF07IHkgPCByb3cubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBHcmlkTm9kZSh4LCB5LCByb3dbeV0pO1xyXG4gICAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgXHJcbiAgR3JhcGgucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuZGlydHlOb2RlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFzdGFyLmNsZWFuTm9kZSh0aGlzLm5vZGVzW2ldKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIEdyYXBoLnByb3RvdHlwZS5jbGVhbkRpcnR5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGlydHlOb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhc3Rhci5jbGVhbk5vZGUodGhpcy5kaXJ0eU5vZGVzW2ldKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGlydHlOb2RlcyA9IFtdO1xyXG4gIH07XHJcbiAgXHJcbiAgR3JhcGgucHJvdG90eXBlLm1hcmtEaXJ0eSA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHRoaXMuZGlydHlOb2Rlcy5wdXNoKG5vZGUpO1xyXG4gIH07XHJcbiAgXHJcbiAgR3JhcGgucHJvdG90eXBlLm5laWdoYm9ycyA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHZhciByZXQgPSBbXTtcclxuICAgIHZhciB4ID0gbm9kZS54O1xyXG4gICAgdmFyIHkgPSBub2RlLnk7XHJcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZDtcclxuICBcclxuICAgIC8vIFdlc3RcclxuICAgIGlmIChncmlkW3ggLSAxXSAmJiBncmlkW3ggLSAxXVt5XSkge1xyXG4gICAgICByZXQucHVzaChncmlkW3ggLSAxXVt5XSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBFYXN0XHJcbiAgICBpZiAoZ3JpZFt4ICsgMV0gJiYgZ3JpZFt4ICsgMV1beV0pIHtcclxuICAgICAgcmV0LnB1c2goZ3JpZFt4ICsgMV1beV0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU291dGhcclxuICAgIGlmIChncmlkW3hdICYmIGdyaWRbeF1beSAtIDFdKSB7XHJcbiAgICAgIHJldC5wdXNoKGdyaWRbeF1beSAtIDFdKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIE5vcnRoXHJcbiAgICBpZiAoZ3JpZFt4XSAmJiBncmlkW3hdW3kgKyAxXSkge1xyXG4gICAgICByZXQucHVzaChncmlkW3hdW3kgKyAxXSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAodGhpcy5kaWFnb25hbCkge1xyXG4gICAgICAvLyBTb3V0aHdlc3RcclxuICAgICAgaWYgKGdyaWRbeCAtIDFdICYmIGdyaWRbeCAtIDFdW3kgLSAxXSkge1xyXG4gICAgICAgIHJldC5wdXNoKGdyaWRbeCAtIDFdW3kgLSAxXSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLy8gU291dGhlYXN0XHJcbiAgICAgIGlmIChncmlkW3ggKyAxXSAmJiBncmlkW3ggKyAxXVt5IC0gMV0pIHtcclxuICAgICAgICByZXQucHVzaChncmlkW3ggKyAxXVt5IC0gMV0pO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8vIE5vcnRod2VzdFxyXG4gICAgICBpZiAoZ3JpZFt4IC0gMV0gJiYgZ3JpZFt4IC0gMV1beSArIDFdKSB7XHJcbiAgICAgICAgcmV0LnB1c2goZ3JpZFt4IC0gMV1beSArIDFdKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAvLyBOb3J0aGVhc3RcclxuICAgICAgaWYgKGdyaWRbeCArIDFdICYmIGdyaWRbeCArIDFdW3kgKyAxXSkge1xyXG4gICAgICAgIHJldC5wdXNoKGdyaWRbeCArIDFdW3kgKyAxXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfTtcclxuICBcclxuICBHcmFwaC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBncmFwaFN0cmluZyA9IFtdO1xyXG4gICAgdmFyIG5vZGVzID0gdGhpcy5ncmlkO1xyXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCBub2Rlcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICB2YXIgcm93RGVidWcgPSBbXTtcclxuICAgICAgdmFyIHJvdyA9IG5vZGVzW3hdO1xyXG4gICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHJvdy5sZW5ndGg7IHkrKykge1xyXG4gICAgICAgIHJvd0RlYnVnLnB1c2gocm93W3ldLndlaWdodCk7XHJcbiAgICAgIH1cclxuICAgICAgZ3JhcGhTdHJpbmcucHVzaChyb3dEZWJ1Zy5qb2luKFwiIFwiKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3JhcGhTdHJpbmcuam9pbihcIlxcblwiKTtcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIEdyaWROb2RlKHgsIHksIHdlaWdodCkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcclxuICB9XHJcbiAgXHJcbiAgR3JpZE5vZGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gXCJbXCIgKyB0aGlzLnggKyBcIiBcIiArIHRoaXMueSArIFwiXVwiO1xyXG4gIH07XHJcbiAgXHJcbiAgR3JpZE5vZGUucHJvdG90eXBlLmdldENvc3QgPSBmdW5jdGlvbihmcm9tTmVpZ2hib3IpIHtcclxuICAgIC8vIFRha2UgZGlhZ29uYWwgd2VpZ2h0IGludG8gY29uc2lkZXJhdGlvbi5cclxuICAgIGlmIChmcm9tTmVpZ2hib3IgJiYgZnJvbU5laWdoYm9yLnggIT0gdGhpcy54ICYmIGZyb21OZWlnaGJvci55ICE9IHRoaXMueSkge1xyXG4gICAgICByZXR1cm4gdGhpcy53ZWlnaHQgKiAxLjQxNDIxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0O1xyXG4gIH07XHJcbiAgXHJcbiAgR3JpZE5vZGUucHJvdG90eXBlLmlzV2FsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0ID09PSAwO1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gQmluYXJ5SGVhcChzY29yZUZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcclxuICAgIHRoaXMuc2NvcmVGdW5jdGlvbiA9IHNjb3JlRnVuY3Rpb247XHJcbiAgfVxyXG4gIFxyXG4gIEJpbmFyeUhlYXAucHJvdG90eXBlID0ge1xyXG4gICAgcHVzaDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAvLyBBZGQgdGhlIG5ldyBlbGVtZW50IHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxyXG4gICAgICB0aGlzLmNvbnRlbnQucHVzaChlbGVtZW50KTtcclxuICBcclxuICAgICAgLy8gQWxsb3cgaXQgdG8gc2luayBkb3duLlxyXG4gICAgICB0aGlzLnNpbmtEb3duKHRoaXMuY29udGVudC5sZW5ndGggLSAxKTtcclxuICAgIH0sXHJcbiAgICBwb3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBTdG9yZSB0aGUgZmlyc3QgZWxlbWVudCBzbyB3ZSBjYW4gcmV0dXJuIGl0IGxhdGVyLlxyXG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5jb250ZW50WzBdO1xyXG4gICAgICAvLyBHZXQgdGhlIGVsZW1lbnQgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkuXHJcbiAgICAgIHZhciBlbmQgPSB0aGlzLmNvbnRlbnQucG9wKCk7XHJcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgZWxlbWVudHMgbGVmdCwgcHV0IHRoZSBlbmQgZWxlbWVudCBhdCB0aGVcclxuICAgICAgLy8gc3RhcnQsIGFuZCBsZXQgaXQgYnViYmxlIHVwLlxyXG4gICAgICBpZiAodGhpcy5jb250ZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnRbMF0gPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5idWJibGVVcCgwKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICB2YXIgaSA9IHRoaXMuY29udGVudC5pbmRleE9mKG5vZGUpO1xyXG4gIFxyXG4gICAgICAvLyBXaGVuIGl0IGlzIGZvdW5kLCB0aGUgcHJvY2VzcyBzZWVuIGluICdwb3AnIGlzIHJlcGVhdGVkXHJcbiAgICAgIC8vIHRvIGZpbGwgdXAgdGhlIGhvbGUuXHJcbiAgICAgIHZhciBlbmQgPSB0aGlzLmNvbnRlbnQucG9wKCk7XHJcbiAgXHJcbiAgICAgIGlmIChpICE9PSB0aGlzLmNvbnRlbnQubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHRoaXMuY29udGVudFtpXSA9IGVuZDtcclxuICBcclxuICAgICAgICBpZiAodGhpcy5zY29yZUZ1bmN0aW9uKGVuZCkgPCB0aGlzLnNjb3JlRnVuY3Rpb24obm9kZSkpIHtcclxuICAgICAgICAgIHRoaXMuc2lua0Rvd24oaSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYnViYmxlVXAoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2l6ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIHJlc2NvcmVFbGVtZW50OiBmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgIHRoaXMuc2lua0Rvd24odGhpcy5jb250ZW50LmluZGV4T2Yobm9kZSkpO1xyXG4gICAgfSxcclxuICAgIHNpbmtEb3duOiBmdW5jdGlvbihuKSB7XHJcbiAgICAgIC8vIEZldGNoIHRoZSBlbGVtZW50IHRoYXQgaGFzIHRvIGJlIHN1bmsuXHJcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5jb250ZW50W25dO1xyXG4gIFxyXG4gICAgICAvLyBXaGVuIGF0IDAsIGFuIGVsZW1lbnQgY2FuIG5vdCBzaW5rIGFueSBmdXJ0aGVyLlxyXG4gICAgICB3aGlsZSAobiA+IDApIHtcclxuICBcclxuICAgICAgICAvLyBDb21wdXRlIHRoZSBwYXJlbnQgZWxlbWVudCdzIGluZGV4LCBhbmQgZmV0Y2ggaXQuXHJcbiAgICAgICAgdmFyIHBhcmVudE4gPSAoKG4gKyAxKSA+PiAxKSAtIDE7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMuY29udGVudFtwYXJlbnROXTtcclxuICAgICAgICAvLyBTd2FwIHRoZSBlbGVtZW50cyBpZiB0aGUgcGFyZW50IGlzIGdyZWF0ZXIuXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVGdW5jdGlvbihlbGVtZW50KSA8IHRoaXMuc2NvcmVGdW5jdGlvbihwYXJlbnQpKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRlbnRbcGFyZW50Tl0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgdGhpcy5jb250ZW50W25dID0gcGFyZW50O1xyXG4gICAgICAgICAgLy8gVXBkYXRlICduJyB0byBjb250aW51ZSBhdCB0aGUgbmV3IHBvc2l0aW9uLlxyXG4gICAgICAgICAgbiA9IHBhcmVudE47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEZvdW5kIGEgcGFyZW50IHRoYXQgaXMgbGVzcywgbm8gbmVlZCB0byBzaW5rIGFueSBmdXJ0aGVyLlxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYnViYmxlVXA6IGZ1bmN0aW9uKG4pIHtcclxuICAgICAgLy8gTG9vayB1cCB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIGl0cyBzY29yZS5cclxuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XHJcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5jb250ZW50W25dO1xyXG4gICAgICB2YXIgZWxlbVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGVsZW1lbnQpO1xyXG4gIFxyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIGluZGljZXMgb2YgdGhlIGNoaWxkIGVsZW1lbnRzLlxyXG4gICAgICAgIHZhciBjaGlsZDJOID0gKG4gKyAxKSA8PCAxO1xyXG4gICAgICAgIHZhciBjaGlsZDFOID0gY2hpbGQyTiAtIDE7XHJcbiAgICAgICAgLy8gVGhpcyBpcyB1c2VkIHRvIHN0b3JlIHRoZSBuZXcgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQsIGlmIGFueS5cclxuICAgICAgICB2YXIgc3dhcCA9IG51bGw7XHJcbiAgICAgICAgdmFyIGNoaWxkMVNjb3JlO1xyXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBjaGlsZCBleGlzdHMgKGlzIGluc2lkZSB0aGUgYXJyYXkpLi4uXHJcbiAgICAgICAgaWYgKGNoaWxkMU4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgIC8vIExvb2sgaXQgdXAgYW5kIGNvbXB1dGUgaXRzIHNjb3JlLlxyXG4gICAgICAgICAgdmFyIGNoaWxkMSA9IHRoaXMuY29udGVudFtjaGlsZDFOXTtcclxuICAgICAgICAgIGNoaWxkMVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGNoaWxkMSk7XHJcbiAgXHJcbiAgICAgICAgICAvLyBJZiB0aGUgc2NvcmUgaXMgbGVzcyB0aGFuIG91ciBlbGVtZW50J3MsIHdlIG5lZWQgdG8gc3dhcC5cclxuICAgICAgICAgIGlmIChjaGlsZDFTY29yZSA8IGVsZW1TY29yZSkge1xyXG4gICAgICAgICAgICBzd2FwID0gY2hpbGQxTjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLy8gRG8gdGhlIHNhbWUgY2hlY2tzIGZvciB0aGUgb3RoZXIgY2hpbGQuXHJcbiAgICAgICAgaWYgKGNoaWxkMk4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgIHZhciBjaGlsZDIgPSB0aGlzLmNvbnRlbnRbY2hpbGQyTl07XHJcbiAgICAgICAgICB2YXIgY2hpbGQyU2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oY2hpbGQyKTtcclxuICAgICAgICAgIGlmIChjaGlsZDJTY29yZSA8IChzd2FwID09PSBudWxsID8gZWxlbVNjb3JlIDogY2hpbGQxU2NvcmUpKSB7XHJcbiAgICAgICAgICAgIHN3YXAgPSBjaGlsZDJOO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBuZWVkcyB0byBiZSBtb3ZlZCwgc3dhcCBpdCwgYW5kIGNvbnRpbnVlLlxyXG4gICAgICAgIGlmIChzd2FwICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRlbnRbbl0gPSB0aGlzLmNvbnRlbnRbc3dhcF07XHJcbiAgICAgICAgICB0aGlzLmNvbnRlbnRbc3dhcF0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgbiA9IHN3YXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIGRvbmUuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4iLCJpbXBvcnQgeyBzb25hbnR4cl9nZW5lcmF0ZV9zb25nIH0gZnJvbSBcIi4vc29uYW50X3dyYXBwZXIuanNcIlxyXG5cclxudmFyIGF1ZGlvX2N0eCA9IG5ldyAod2luZG93LndlYmtpdEF1ZGlvQ29udGV4dHx8d2luZG93LkF1ZGlvQ29udGV4dCkoKVxyXG5cclxuY29uc3QgbWFrZUFzeW5jID0gYXN5bmMgKHJhd1NvdW5kKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBzb25hbnR4cl9nZW5lcmF0ZV9zb25nKGF1ZGlvX2N0eCwgcmF3U291bmQsIGJ1ZmZlciA9PiB7XHJcbiAgICAgIHJlc29sdmUoYnVmZmVyKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU291bmQgPSBhc3luYyAocmF3U291bmQpID0+IHtcclxuICAgIFxyXG4gIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IG1ha2VBc3luYyhyYXdTb3VuZClcclxuICBjb25zdCBzb3VyY2UgPSBhdWRpb19jdHguY3JlYXRlQnVmZmVyU291cmNlKClcclxuICBzb3VyY2UuYnVmZmVyID0gYnVmZmVyXHJcbiAgc291cmNlLmNvbm5lY3QoYXVkaW9fY3R4LmRlc3RpbmF0aW9uKVxyXG5cclxuICByZXR1cm4gKGxvb3ApID0+IHtcclxuICAgIHNvdXJjZS5sb29wID0gbG9vcFxyXG4gICAgc291cmNlLnN0YXJ0KClcclxuICAgIHJldHVybiBzb3VyY2VcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHdlbGNvbWUgZnJvbSBcIi4uL2Fzc2V0cy9tYXBzL3dlbGNvbWUuanNvblwiXHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9hc3NldHMvbWFwcy9ob21lLmpzb25cIlxyXG5cclxuaW1wb3J0IHsgRG9vciwgUG9zLCBCb21iQmFnLCBUcmlhbFN0YXRlLCBDb250cm9sYWJsZSwgV2FsbCwgTG9hZCwgU3Bhd24sIEhvc3RpbGUsIERlYWQsIEJvbWIsIEV4cGxvZGFibGUsIENvbGxpZGFibGUsIFVJLCBQbGF5ZXIsIFByZUJsYXN0LCBCbGFzdCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgY3JlYXRlUGxheWVyLCBjcmVhdGVSZWQgfSBmcm9tIFwiLi91dGlsc1wiXHJcbmltcG9ydCB7IFhfVElMRV9DT1VOVCwgSE9TVElMRV9UWVBFX1BQQU9FIH0gZnJvbSBcIi4uL2NvbmZpZ1wiIFxyXG5cclxuY29uc3QgZ2V0T2JqZWN0cyA9IChvYmplY3ROYW1lLCBvYmplY3RzLCAuLi5wcm9wZXJ0aWVzKSA9PiB7XHJcbiAgICByZXR1cm4gb2JqZWN0cy5yZWR1Y2UoKGFjY3MsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBvYmplY3QgPSBjdXJyZW50LnByb3BlcnRpZXMuZmluZCgocHJvcGVydGllKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0aWUubmFtZSA9PT0gb2JqZWN0TmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYob2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGFjY3MucHVzaChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBjdXJyZW50LngsIHk6IGN1cnJlbnQueSwgLi4uY3VycmVudC5wcm9wZXJ0aWVzLnJlZHVjZSgoYWNjLCBwcm9wZXJ0aWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0aWUubmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NbcHJvcGVydGllLm5hbWVdID0gcHJvcGVydGllLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjY1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHt9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhY2NzXHJcbiAgICB9LCBbXSlcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBwcm9jZXNzID0gKG1hcCwgZWNzLCBjdikgPT4ge1xyXG4gICAgXHJcblxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IG9iamVjdHMgPSBtYXAubGF5ZXJzWzBdLm9iamVjdHNcclxuICAgIC8vIHBsYXllclxyXG4gICAgY29uc3Qgc3RhcnRPYmplY3RzID0gZ2V0T2JqZWN0cyhcImlzU3RhcnRcIiwgb2JqZWN0cylcclxuICAgIGlmKHN0YXJ0T2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgUG9zKHN0YXJ0T2JqZWN0c1swXS54LCBzdGFydE9iamVjdHNbMF0ueSlcclxuICAgICAgICBjcmVhdGVQbGF5ZXIoZWNzLCBuZXcgUG9zKHN0YXJ0Lngsc3RhcnQueSwwKSlcclxuICAgIH1cclxuICAgIGlmKG1hcC5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgY29uc3QgYm9tYnNQcm9wZXJ0aWVzID0gbWFwLnByb3BlcnRpZXMuZmluZCgocHJvcGVydGllKSA9PiBwcm9wZXJ0aWUubmFtZSA9PT0gXCJib21ic1wiKVxyXG5cclxuICAgICAgICBpZihib21ic1Byb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9tYnMgPSBib21ic1Byb3BlcnRpZXMudmFsdWUuc3BsaXQoXCIsXCIpLm1hcCgoYm9tYikgPT4gcGFyc2VJbnQoYm9tYiwgMTApKVxyXG4gICAgICAgICAgICBlY3Muc2VsZWN0KEJvbWJCYWcpLml0ZXJhdGUoKGJvbWJCYWdFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGJvbWJCYWdFbnRpdHkuZ2V0KEJvbWJCYWcpLnNldChib21icylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FuUm9sbFByb3BlcnRpZXMgPSBtYXAucHJvcGVydGllcy5maW5kKChwcm9wZXJ0aWUpID0+IHByb3BlcnRpZS5uYW1lID09PSBcImNhblJvbGxcIilcclxuICAgIFxyXG4gICAgICAgIGlmKGNhblJvbGxQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGVjcy5zZWxlY3QoQm9tYkJhZykuaXRlcmF0ZSgoYm9tYkJhZ0VudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYm9tYkJhZ0VudGl0eS5nZXQoQm9tYkJhZykuY2FuUm9sbCA9IGNhblJvbGxQcm9wZXJ0aWVzLnZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICAvLyBkb29yXHJcbiAgICBlY3MuY3JlYXRlKCkgXHJcbiAgICAuYWRkKFxyXG4gICAgICAgIG5ldyBEb29yKCksXHJcbiAgICAgICAgbmV3IFBvcygxKVxyXG4gICAgKVxyXG4gICAgXHJcblxyXG4gICAgLy8gc3Bhd25zXHJcbiAgICBjb25zdCBzcGF3bk9iamVjdHMgPSBnZXRPYmplY3RzKFwiaXNTcGF3blwiLCBvYmplY3RzLCBcIm1heFwiLCBcInRvdGFsXCIsIFwidHlwZVwiKVxyXG4gICAgc3Bhd25PYmplY3RzLmZvckVhY2goKHNwYXduT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgZWNzXHJcbiAgICAgICAgLmNyZWF0ZSgpXHJcbiAgICAgICAgLmFkZChcclxuICAgICAgICAgICAgbmV3IFNwYXduKGVjcywgc3Bhd25PYmplY3QubWF4LCBzcGF3bk9iamVjdC50b3RhbCwgc3Bhd25PYmplY3QudHlwZSA/IHNwYXduT2JqZWN0LnR5cGUgOiBIT1NUSUxFX1RZUEVfUFBBT0UpLFxyXG4gICAgICAgICAgICBuZXcgUG9zKHNwYXduT2JqZWN0LngsIHNwYXduT2JqZWN0LnksIDApLFxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVkcyA9IGdldE9iamVjdHMoXCJpc1JlZFwiLCBvYmplY3RzLCBcInN0YXR1c1wiKVxyXG4gICAgcmVkcy5mb3JFYWNoKChyZWQpID0+IHtcclxuICAgICAgICBjcmVhdGVSZWQoZWNzLCBuZXcgUG9zKHJlZC54LCByZWQueSwgMCksIHRydWUsIHJlZC5zdGF0dXMpXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBkZXN0cm95YWJsZXMgPSBnZXRPYmplY3RzKFwiaXNEZXN0cm95YWJsZVwiLCBvYmplY3RzKVxyXG4gICAgZGVzdHJveWFibGVzLmZvckVhY2goKGRlc3Ryb3lhYmxlKSA9PiB7XHJcbiAgICAgICAgZWNzXHJcbiAgICAgICAgICAgIC5jcmVhdGUoKVxyXG4gICAgICAgICAgICAuYWRkKFxyXG4gICAgICAgICAgICAgICAgbmV3IEV4cGxvZGFibGUoKSxcclxuICAgICAgICAgICAgICAgIG5ldyBQb3MoZGVzdHJveWFibGUueCwgZGVzdHJveWFibGUueSwgMClcclxuICAgICAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBUZXh0XHJcbiAgICBjb25zdCB0ZXh0T2JqZWN0ID0gb2JqZWN0cy5maW5kKChvYmplY3QpID0+IHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0LnRleHQgJiYgb2JqZWN0LnRleHQudGV4dC5sZW5ndGggPiAwXHJcbiAgICB9KVxyXG4gICAgaWYodGV4dE9iamVjdCkge1xyXG4gICAgICAgIGVjc1xyXG4gICAgICAgIC5jcmVhdGUoKVxyXG4gICAgICAgIC5hZGQoXHJcbiAgICAgICAgICAgIG5ldyBUcmlhbFN0YXRlKHRleHRPYmplY3QudGV4dC50ZXh0KSxcclxuICAgICAgICAgICAgbmV3IFBvcyh0ZXh0T2JqZWN0LngsIHRleHRPYmplY3QueSksXHJcbiAgICAgICAgICAgIG5ldyBDb250cm9sYWJsZSgpLFxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIC8vIHdhbGxzXHJcbiAgICBjb25zdCB0aWxlcyA9IG1hcC5sYXllcnNbMV1cclxuICAgIHRpbGVzLmRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZihlbGVtZW50ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGVjc1xyXG4gICAgICAgICAgICAuY3JlYXRlKClcclxuICAgICAgICAgICAgLmFkZChcclxuICAgICAgICAgICAgICAgIG5ldyBXYWxsKGluZGV4ICUgWF9USUxFX0NPVU5ULCBNYXRoLmZsb29yKGluZGV4IC8gWF9USUxFX0NPVU5UKSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gXHJcblxyXG5jb25zdCBjbGVhbk1hcCA9IChlY3MpID0+IHtcclxuICAgIGNvbnN0IEVudGl0aWVzID0gW0V4cGxvZGFibGUgLFdhbGwsIFNwYXduLCBUcmlhbFN0YXRlLCBIb3N0aWxlLCBEb29yLCBEZWFkLCBCb21iLCBQcmVCbGFzdCwgQmxhc3RdXHJcbiAgICBFbnRpdGllcy5mb3JFYWNoKChlbnRpdHlOYW1lKSA9PiB7XHJcbiAgICAgICAgZWNzLnNlbGVjdChlbnRpdHlOYW1lKS5pdGVyYXRlKChlbnRpdHlFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgZW50aXR5RW50aXR5LmVqZWN0KClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGJiID0gZWNzLnNlbGVjdChCb21iQmFnKVxyXG4gICAgYmIuaXRlcmF0ZSgoYmJFbnRpdHkpID0+IHtcclxuICAgICAgICBiYkVudGl0eS5nZXQoQm9tYkJhZykucm9sbCgpXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFwTG9hZGVyID0gKGVjcykgPT4ge1xyXG4gICAgY29uc3QgbWFwcyA9IFt3ZWxjb21lLCBIb21lXVxyXG4gICAgbGV0IGN1cnJlbnRNYXAgPSAtMVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVubG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhbk1hcChlY3MpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdDogKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhbk1hcChlY3MpXHJcbiAgICAgICAgICAgIGN1cnJlbnRNYXAgPSAwXHJcbiAgICAgICAgICAgIGVjcy5zZWxlY3QoUGxheWVyKS5pdGVyYXRlKChwbGF5ZXJFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHBsYXllckVudGl0eS5nZXQoUGxheWVyKS5ocCA9IDEwMFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgcHJvY2VzcyhtYXBzW2N1cnJlbnRNYXBdLCBlY3MpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbmV4dDogKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhbk1hcChlY3MpXHJcbiAgICAgICAgICAgIGN1cnJlbnRNYXArK1xyXG4gICAgICAgICAgICBpZihjdXJyZW50TWFwIDwgbWFwcy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzKG1hcHNbY3VycmVudE1hcF0sIGVjcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNvbmFudHhyX2dlbmVyYXRlX3NvbmcgPSBmdW5jdGlvbihhdWRpb19jdHgsIHNvbmdfZGF0YSwgY2FsbGJhY2spIHtcclxuXHR2YXIgbXVzaWNfZ2VuZXJhdG9yID0gbmV3IE11c2ljR2VuZXJhdG9yKGF1ZGlvX2N0eCwgc29uZ19kYXRhKTtcclxuXHRtdXNpY19nZW5lcmF0b3IuX2NyZWF0ZUF1ZGlvQnVmZmVyKGNhbGxiYWNrKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzb25hbnR4cl9nZW5lcmF0ZV9zb3VuZCA9IGZ1bmN0aW9uKGF1ZGlvX2N0eCwgaW5zdHJ1bWVudCwgbm90ZSwgY2FsbGJhY2spIHtcclxuXHR2YXIgc291bmRfZ2VuZXJhdG9yID0gbmV3IFNvdW5kR2VuZXJhdG9yKGF1ZGlvX2N0eCwgaW5zdHJ1bWVudCk7XHJcblx0c291bmRfZ2VuZXJhdG9yLl9jcmVhdGVBdWRpb0J1ZmZlcihub3RlLCBjYWxsYmFjayk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgX21hdGggPSBNYXRoXHJcbnZhciBXQVZFX1NQUyA9IDQ0MTAwO1x0XHRcdFx0XHQvLyBTYW1wbGVzIHBlciBzZWNvbmRcclxudmFyIE1BWF9USU1FID0gMzM7IC8vIG1heGltdW0gdGltZSwgaW4gbWlsbGlzLCB0aGF0IHRoZSBnZW5lcmF0b3IgY2FuIHVzZSBjb25zZWN1dGl2ZWx5XHJcblxyXG52YXIgYXVkaW9DdHggPSBudWxsO1xyXG5cclxuLy8gT3NjaWxsYXRvcnNcclxuZnVuY3Rpb24gb3NjX3Npbih2YWx1ZSlcclxue1xyXG5cdHJldHVybiBfbWF0aC5zaW4odmFsdWUgKiA2LjI4MzE4NCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9zY19zcXVhcmUodmFsdWUpXHJcbntcclxuXHRyZXR1cm4gb3NjX3Npbih2YWx1ZSkgPCAwID8gLTEgOiAxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvc2Nfc2F3KHZhbHVlKVxyXG57XHJcblx0cmV0dXJuICh2YWx1ZSAlIDEpIC0gMC41O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvc2NfdHJpKHZhbHVlKVxyXG57XHJcblx0dmFyIHYyID0gKHZhbHVlICUgMSkgKiA0O1xyXG5cdHJldHVybiB2MiA8IDIgPyB2MiAtIDEgOiAzIC0gdjI7XHJcbn1cclxuXHJcbi8vIEFycmF5IG9mIG9zY2lsbGF0b3IgZnVuY3Rpb25zXHJcbnZhciBvc2NpbGxhdG9ycyA9XHJcbltcclxuXHRvc2Nfc2luLFxyXG5cdG9zY19zcXVhcmUsXHJcblx0b3NjX3NhdyxcclxuXHRvc2NfdHJpXHJcbl07XHJcblxyXG5mdW5jdGlvbiBnZXRub3RlZnJlcShuKVxyXG57XHJcblx0cmV0dXJuIDAuMDAzOTA2MjUgKiBfbWF0aC5wb3coMS4wNTk0NjMwOTQsIG4gLSAxMjgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUJ1ZmZlcihzYW1wbGVzKSB7XHJcbiAgIHJldHVybiB7XHJcblx0XHRsZWZ0OiBuZXcgRmxvYXQzMkFycmF5KHNhbXBsZXMpLFxyXG5cdFx0cmlnaHQ6IG5ldyBGbG9hdDMyQXJyYXkoc2FtcGxlcylcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseURlbGF5KGNobkJ1Ziwgd2F2ZVNhbXBsZXMsIGluc3RyLCByb3dMZW4pIHtcclxuXHR2YXIgcDEgPSAoaW5zdHIuZnhfZGVsYXlfdGltZSAqIHJvd0xlbikgPj4gMTtcclxuXHR2YXIgdDEgPSBpbnN0ci5meF9kZWxheV9hbXQgLyAyNTU7XHJcblxyXG5cdHZhciBuMSA9IDA7XHJcblx0d2hpbGUobjEgPCB3YXZlU2FtcGxlcyAtIHAxKSB7XHJcblx0XHR2YXIgYjEgPSBuMTtcclxuXHRcdHZhciBsID0gKG4xICsgcDEpO1xyXG5cdFx0Y2huQnVmLmxlZnRbbF0gKz0gY2huQnVmLnJpZ2h0W2IxXSAqIHQxO1xyXG5cdFx0Y2huQnVmLnJpZ2h0W2xdICs9IGNobkJ1Zi5sZWZ0W2IxXSAqIHQxO1xyXG5cdFx0bjErKztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBdWRpb0J1ZmZlcihjdHgsIG1peEJ1Zikge1xyXG5cdHZhciBidWZmZXIgPSBjdHguY3JlYXRlQnVmZmVyKDIsIG1peEJ1Zi5sZWZ0Lmxlbmd0aCwgV0FWRV9TUFMpOyAvLyBDcmVhdGUgTW9ubyBTb3VyY2UgQnVmZmVyIGZyb20gUmF3IEJpbmFyeVxyXG5cdGJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKS5zZXQobWl4QnVmLmxlZnQpO1xyXG5cdGJ1ZmZlci5nZXRDaGFubmVsRGF0YSgxKS5zZXQobWl4QnVmLnJpZ2h0KTtcclxuXHRyZXR1cm4gYnVmZmVyO1xyXG59XHJcblxyXG52YXIgU291bmRHZW5lcmF0b3IgPSBmdW5jdGlvbihjdHgsIGluc3RyLCByb3dMZW4pIHtcclxuXHR0aGlzLmN0eCA9IGN0eDtcclxuXHR0aGlzLmluc3RyID0gaW5zdHI7XHJcblx0dGhpcy5yb3dMZW4gPSByb3dMZW4gfHwgNTYwNTtcclxuXHJcblx0dGhpcy5vc2NfbGZvID0gb3NjaWxsYXRvcnNbaW5zdHIubGZvX3dhdmVmb3JtXTtcclxuXHR0aGlzLm9zYzEgPSBvc2NpbGxhdG9yc1tpbnN0ci5vc2MxX3dhdmVmb3JtXTtcclxuXHR0aGlzLm9zYzIgPSBvc2NpbGxhdG9yc1tpbnN0ci5vc2MyX3dhdmVmb3JtXTtcclxuXHR0aGlzLmF0dGFjayA9IGluc3RyLmVudl9hdHRhY2s7XHJcblx0dGhpcy5zdXN0YWluID0gaW5zdHIuZW52X3N1c3RhaW47XHJcblx0dGhpcy5yZWxlYXNlID0gaW5zdHIuZW52X3JlbGVhc2U7XHJcblx0dGhpcy5wYW5GcmVxID0gX21hdGgucG93KDIsIGluc3RyLmZ4X3Bhbl9mcmVxIC0gOCkgLyB0aGlzLnJvd0xlbjtcclxuXHR0aGlzLmxmb0ZyZXEgPSBfbWF0aC5wb3coMiwgaW5zdHIubGZvX2ZyZXEgLSA4KSAvIHRoaXMucm93TGVuO1xyXG59O1xyXG5cclxuU291bmRHZW5lcmF0b3IucHJvdG90eXBlLl9nZW5Tb3VuZCA9IGZ1bmN0aW9uKG4sIGNobkJ1ZiwgY3VycmVudHBvcykge1xyXG5cdHZhciBjMSA9IDA7XHJcblx0dmFyIGMyID0gMDtcclxuXHJcblx0Ly8gUHJlY2FsY3VsYXRlIGZyZXF1ZW5jdWVzXHJcblx0dmFyIG8xdCA9IGdldG5vdGVmcmVxKG4gKyAodGhpcy5pbnN0ci5vc2MxX29jdCAtIDgpICogMTIgKyB0aGlzLmluc3RyLm9zYzFfZGV0KSAqICgxICsgMC4wMDA4ICogdGhpcy5pbnN0ci5vc2MxX2RldHVuZSk7XHJcblx0dmFyIG8ydCA9IGdldG5vdGVmcmVxKG4gKyAodGhpcy5pbnN0ci5vc2MyX29jdCAtIDgpICogMTIgKyB0aGlzLmluc3RyLm9zYzJfZGV0KSAqICgxICsgMC4wMDA4ICogdGhpcy5pbnN0ci5vc2MyX2RldHVuZSk7XHJcblxyXG5cdC8vIFN0YXRlIHZhcmlhYmxlIGluaXRcclxuXHR2YXIgcSA9IHRoaXMuaW5zdHIuZnhfcmVzb25hbmNlIC8gMjU1O1xyXG5cdHZhciBsb3cgPSAwO1xyXG5cdHZhciBiYW5kID0gMDtcclxuXHJcblx0dmFyIGNobmJ1Zkxlbmd0aCA9IGNobkJ1Zi5sZWZ0Lmxlbmd0aDtcclxuXHR2YXIgbnVtU2FtcGxlcyA9IHRoaXMuYXR0YWNrICsgdGhpcy5zdXN0YWluICsgdGhpcy5yZWxlYXNlIC0gMTtcclxuXHRcclxuXHRmb3IgKHZhciBqID0gbnVtU2FtcGxlczsgaiA+PSAwOyAtLWopIHtcclxuXHRcdHZhciBrID0gaiArIGN1cnJlbnRwb3M7XHJcblxyXG5cdFx0Ly8gTEZPXHJcblx0XHR2YXIgbGZvciA9IHRoaXMub3NjX2xmbyhrICogdGhpcy5sZm9GcmVxKSAqIHRoaXMuaW5zdHIubGZvX2FtdCAvIDUxMiArIDAuNTtcclxuXHJcblx0XHQvLyBFbnZlbG9wZVxyXG5cdFx0dmFyIGUgPSAxO1xyXG5cdFx0aWYgKGogPCB0aGlzLmF0dGFjaykge1xyXG5cdFx0XHRlID0gaiAvIHRoaXMuYXR0YWNrO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoaiA+PSB0aGlzLmF0dGFjayArIHRoaXMuc3VzdGFpbikge1xyXG5cdFx0XHRlIC09IChqIC0gdGhpcy5hdHRhY2sgLSB0aGlzLnN1c3RhaW4pIC8gdGhpcy5yZWxlYXNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIE9zY2lsbGF0b3IgMVxyXG5cdFx0dmFyIHQgPSBvMXQ7XHJcblx0XHRpZiAodGhpcy5pbnN0ci5sZm9fb3NjMV9mcmVxKSB7XHJcblx0XHRcdHQgKz0gbGZvcjtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmluc3RyLm9zYzFfeGVudikge1xyXG5cdFx0XHR0ICo9IGUgKiBlIFxyXG5cdFx0fVxyXG5cdFx0YzEgKz0gdDtcclxuXHRcdHZhciByc2FtcGxlID0gdGhpcy5vc2MxKGMxKSAqIHRoaXMuaW5zdHIub3NjMV92b2w7XHJcblxyXG5cdFx0Ly8gT3NjaWxsYXRvciAyXHJcblx0XHR0ID0gbzJ0O1xyXG5cdFx0aWYgKHRoaXMuaW5zdHIub3NjMl94ZW52KSB7XHJcblx0XHRcdHQgKj0gZSAqIGU7XHJcblx0XHR9O1xyXG5cdFx0YzIgKz0gdDtcclxuXHRcdHJzYW1wbGUgKz0gdGhpcy5vc2MyKGMyKSAqIHRoaXMuaW5zdHIub3NjMl92b2w7XHJcblxyXG5cdFx0Ly8gTm9pc2Ugb3NjaWxsYXRvclxyXG5cdFx0aWYgKHRoaXMuaW5zdHIubm9pc2VfZmFkZXIpIHtcclxuXHRcdFx0cnNhbXBsZSArPSAoMipfbWF0aC5yYW5kb20oKS0xKSAqIHRoaXMuaW5zdHIubm9pc2VfZmFkZXIgKiBlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJzYW1wbGUgKj0gZSAvIDI1NTtcclxuXHJcblx0XHQvLyBTdGF0ZSB2YXJpYWJsZSBmaWx0ZXJcclxuXHRcdHZhciBmID0gdGhpcy5pbnN0ci5meF9mcmVxO1xyXG5cdFx0aWYgKHRoaXMuaW5zdHIubGZvX2Z4X2ZyZXEpIHtcclxuXHRcdFx0ZiAqPSBsZm9yO1xyXG5cdFx0fVxyXG5cdFx0ZiA9IDEuNSAqIF9tYXRoLnNpbihmICogMy4xNDE1OTIgLyBXQVZFX1NQUyk7XHJcblx0XHRsb3cgKz0gZiAqIGJhbmQ7XHJcblx0XHR2YXIgaGlnaCA9IHEgKiAocnNhbXBsZSAtIGJhbmQpIC0gbG93O1xyXG5cdFx0YmFuZCArPSBmICogaGlnaDtcclxuXHRcdHN3aXRjaCAodGhpcy5pbnN0ci5meF9maWx0ZXIpIHtcclxuXHRcdFx0Y2FzZSAxOiAvLyBIaXBhc3NcclxuXHRcdFx0XHRyc2FtcGxlID0gaGlnaDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAyOiAvLyBMb3Bhc3NcclxuXHRcdFx0XHRyc2FtcGxlID0gbG93O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM6IC8vIEJhbmRwYXNzXHJcblx0XHRcdFx0cnNhbXBsZSA9IGJhbmQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDogLy8gTm90Y2hcclxuXHRcdFx0XHRyc2FtcGxlID0gbG93ICsgaGlnaDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdH1cclxuXHJcblx0XHQvLyBQYW5uaW5nICYgbWFzdGVyIHZvbHVtZVxyXG5cdFx0dCA9IG9zY19zaW4oayAqIHRoaXMucGFuRnJlcSkgKiB0aGlzLmluc3RyLmZ4X3Bhbl9hbXQgLyA1MTIgKyAwLjU7XHJcblx0XHRyc2FtcGxlICo9IDAuMDA0NzYgKiB0aGlzLmluc3RyLmVudl9tYXN0ZXI7IC8vIDM5IC8gODE5MiA9IDAuMDA0NzZcclxuXHJcblx0XHQvLyBBZGQgdG8gMTYtYml0IGNoYW5uZWwgYnVmZmVyXHJcblx0XHQvLyBrID0gayAqIDI7XHJcblx0XHRpZiAoayA8IGNobmJ1Zkxlbmd0aCkge1xyXG5cdFx0XHRjaG5CdWYubGVmdFtrXSArPSByc2FtcGxlICogKDEtdCkgO1xyXG5cdFx0XHRjaG5CdWYucmlnaHRba10gKz0gcnNhbXBsZSAqIHQ7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuU291bmRHZW5lcmF0b3IucHJvdG90eXBlLl9jcmVhdGVBdWRpb0J1ZmZlciA9IGZ1bmN0aW9uKG4sIGNhbGxCYWNrKSB7XHJcblx0dmFyIGJ1ZmZlclNpemUgPSAodGhpcy5hdHRhY2sgKyB0aGlzLnN1c3RhaW4gKyB0aGlzLnJlbGVhc2UgLSAxKSArICgzMiAqIHRoaXMucm93TGVuKTtcclxuXHR2YXIgYnVmZmVyID0gZ2VuZXJhdGVCdWZmZXIoYnVmZmVyU2l6ZSk7XHJcblx0dGhpcy5fZ2VuU291bmQobiwgYnVmZmVyLCAwKTtcclxuXHRhcHBseURlbGF5KGJ1ZmZlciwgYnVmZmVyU2l6ZSwgdGhpcy5pbnN0ciwgdGhpcy5yb3dMZW4pO1xyXG5cclxuXHRjYWxsQmFjayhnZXRBdWRpb0J1ZmZlcih0aGlzLmN0eCwgYnVmZmVyKSk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG52YXIgTXVzaWNHZW5lcmF0b3IgPSBmdW5jdGlvbihjdHgsIHNvbmcpIHtcclxuXHR0aGlzLmN0eCA9IGN0eDtcclxuXHR0aGlzLnNvbmcgPSBzb25nO1xyXG5cdC8vIFdhdmUgZGF0YSBjb25maWd1cmF0aW9uXHJcblx0dGhpcy53YXZlU2l6ZSA9IFdBVkVfU1BTICogc29uZy5zb25nTGVuOyAvLyBUb3RhbCBzb25nIHNpemUgKGluIHNhbXBsZXMpXHJcbn07XHJcblxyXG5NdXNpY0dlbmVyYXRvci5wcm90b3R5cGUuX2dlbmVyYXRlVHJhY2sgPSBmdW5jdGlvbiAoaW5zdHIsIG1peEJ1ZiwgY2FsbEJhY2spIHtcclxuXHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0dmFyIGNobkJ1ZiA9IGdlbmVyYXRlQnVmZmVyKHRoaXMud2F2ZVNpemUpO1xyXG5cdC8vIFByZWxvYWQvcHJlY2FsYyBzb21lIHByb3BlcnRpZXMvZXhwcmVzc2lvbnMgKGZvciBpbXByb3ZlZCBwZXJmb3JtYW5jZSlcclxuXHR2YXIgd2F2ZVNhbXBsZXMgPSBzZWxmLndhdmVTaXplLFxyXG5cdFx0cm93TGVuID0gc2VsZi5zb25nLnJvd0xlbixcclxuXHRcdGVuZFBhdHRlcm4gPSBzZWxmLnNvbmcuZW5kUGF0dGVybixcclxuXHRcdHNvdW5kR2VuID0gbmV3IFNvdW5kR2VuZXJhdG9yKHNlbGYuY3R4LCBpbnN0ciwgcm93TGVuKTtcclxuXHJcblx0dmFyIGN1cnJlbnRwb3MgPSAwO1xyXG5cdHZhciBwID0gMDtcclxuXHR2YXIgcm93ID0gMDtcclxuXHR2YXIgcmVjb3JkU291bmRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgYmVnaW5uaW5nID0gRGF0ZS5ub3coKTtcclxuXHRcdHdoaWxlICh0cnVlKSB7XHJcblx0XHRcdGlmIChyb3cgPT09IDMyKSB7XHJcblx0XHRcdFx0cm93ID0gMDtcclxuXHRcdFx0XHRwICs9IDE7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAgPT09IGVuZFBhdHRlcm4gLSAxKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZpbmFsaXplKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGNwID0gaW5zdHIucFtwXTtcclxuXHRcdFx0aWYgKGNwKSB7XHJcblx0XHRcdFx0dmFyIG4gPSBpbnN0ci5jW2NwIC0gMV0ubltyb3ddO1xyXG5cdFx0XHRcdGlmIChuKSB7XHJcblx0XHRcdFx0XHRzb3VuZEdlbi5fZ2VuU291bmQobiwgY2huQnVmLCBjdXJyZW50cG9zKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y3VycmVudHBvcyArPSByb3dMZW47XHJcblx0XHRcdHJvdyArPSAxO1xyXG5cdFx0XHRpZiAoRGF0ZS5ub3coKSAtIGJlZ2lubmluZyA+IE1BWF9USU1FKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dChyZWNvcmRTb3VuZHMsIDApO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHZhciBmaW5hbGl6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0YXBwbHlEZWxheShjaG5CdWYsIHdhdmVTYW1wbGVzLCBpbnN0ciwgcm93TGVuKTtcclxuXHRcdGZvciAodmFyIGIyID0gMDsgYjIgPCB3YXZlU2FtcGxlczsgYjIrKykge1xyXG5cdFx0XHRtaXhCdWYubGVmdFtiMl0gKz0gY2huQnVmLmxlZnRbYjJdO1xyXG5cdFx0fVxyXG5cdFx0Zm9yICh2YXIgYjIgPSAwOyBiMiA8IHdhdmVTYW1wbGVzOyBiMisrKSB7XHJcblx0XHRcdG1peEJ1Zi5yaWdodFtiMl0gKz0gY2huQnVmLnJpZ2h0W2IyXTtcclxuXHRcdH1cclxuXHRcdGNhbGxCYWNrKCk7XHJcblx0fTtcclxuXHJcblx0cmVjb3JkU291bmRzKCk7XHJcbn07XHJcblxyXG5NdXNpY0dlbmVyYXRvci5wcm90b3R5cGUuX2NyZWF0ZUF1ZGlvQnVmZmVyID0gZnVuY3Rpb24oY2FsbEJhY2spIHtcclxuXHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0dmFyIG1peEJ1ZiA9IGdlbmVyYXRlQnVmZmVyKHRoaXMud2F2ZVNpemUpO1xyXG5cdHZhciB0cmFjayA9IDA7XHJcblxyXG5cdHZhciBuZXh0VHJhY2sgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0cmFjayA8IHNlbGYuc29uZy5zb25nRGF0YS5sZW5ndGgpIHtcclxuXHRcdFx0dHJhY2sgKz0gMTtcclxuXHRcdFx0c2VsZi5fZ2VuZXJhdGVUcmFjayhzZWxmLnNvbmcuc29uZ0RhdGFbdHJhY2sgLSAxXSwgbWl4QnVmLCBuZXh0VHJhY2spO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNhbGxCYWNrKGdldEF1ZGlvQnVmZmVyKHNlbGYuY3R4LCBtaXhCdWYpKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdG5leHRUcmFjaygpO1xyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCB7IFBMQVlFUl9XSURUSCwgUExBWUVSX0hFSUdIVCwgUkVEX1dJRFRILCBSRURfSEVJR0hUIH0gZnJvbSBcIi4uL2NvbmZpZ1wiXHJcbmltcG9ydCB7IFBvcywgU3BlZWQsIEFjYywgQ29udHJvbGFibGUsIFBsYXllciwgQ29sbGlkYWJsZSwgQm9tYkJhZywgQWdlbnQsIEhvc3RpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IGJsdWVBZ2VudCwgcmVkQWdlbnQgfSBmcm9tIFwiLi4vZHJhd19oZWxwZXJzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBjbGFtcCA9ICh2YWwsIG1pbiwgbWF4KSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaTIgPSBNYXRoLlBJICogMlxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBsYXllciA9IChlY3MsIHBvcykgPT4gIHtcclxuICAgIGVjcy5jcmVhdGUoKSBcclxuICAgIC5hZGQoXHJcbiAgICAgICAgbmV3IEJvbWJCYWcoMywgMzAwMClcclxuICAgIClcclxuICAgIGVjc1xyXG4gICAgLmNyZWF0ZSgpXHJcbiAgICAuYWRkKFxyXG4gICAgICAgIG5ldyBBZ2VudChibHVlQWdlbnQpLFxyXG4gICAgICAgIG5ldyBQb3MocG9zLngsIHBvcy55LCBwb3MueiksXHJcbiAgICAgICAgbmV3IFNwZWVkKDAsIDAsIDApLFxyXG4gICAgICAgIG5ldyBBY2MoMCwgMCwgMCksXHJcbiAgICAgICAgbmV3IENvbnRyb2xhYmxlKCksXHJcbiAgICAgICAgbmV3IFBsYXllcigpLFxyXG4gICAgICAgIG5ldyBDb2xsaWRhYmxlKDAsIDAsIFBMQVlFUl9XSURUSCwgUExBWUVSX0hFSUdIVClcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZCA9IChlY3MsIHBvcywgaXNBY3RpdmUsIHN0YXR1cywgdHlwZSkgPT4ge1xyXG4gICAgY29uc3QgcmVkID0gZWNzLmNyZWF0ZSgpXHJcbiAgICByZWQuYWRkKFxyXG4gICAgICAgIG5ldyBIb3N0aWxlKG51bGwsIHR5cGUsIGlzQWN0aXZlLCBzdGF0dXMpLCBcclxuICAgICAgICBuZXcgUG9zKHBvcy54LCBwb3MueSwgcG9zLnopLCBcclxuICAgICAgICBuZXcgQWdlbnQocmVkQWdlbnQpLCBcclxuICAgICAgICBuZXcgU3BlZWQoMCwgMCwgMCksIFxyXG4gICAgICAgIG5ldyBDb2xsaWRhYmxlKDAsIDAsIFJFRF9XSURUSCwgUkVEX0hFSUdIVClcclxuICAgIClcclxuICAgIHJldHVybiByZWRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpc1BsYXllck92ZXJsYXAgPSAocGxheWVyUG9zLCBwb3MsIGhpdEJveCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBwbGF5ZXJQb3MueCArIFBMQVlFUl9XSURUSCA+IHBvcy54ICYmIHBsYXllclBvcy54IDwgcG9zLnggKyBoaXRCb3gueCAmJlxyXG4gICAgICAgIHBsYXllclBvcy55ICsgUExBWUVSX0hFSUdIVCA+IHBvcy55ICYmIHBsYXllclBvcy55IDwgcG9zLnkgKyBoaXRCb3gueVxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoeCx5LHopIHtcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMueiA9IHpcclxuICAgIH1cclxuICAgIHNldFgoeCkge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgIH1cclxuICAgIHNldFkoeSkge1xyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgIH1cclxuICAgIHNldFooeikge1xyXG4gICAgICAgIHRoaXMueiA9IHpcclxuICAgIH1cclxuICAgIGRvdCh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueSArIHRoaXMueiAqIHYuelxyXG4gICAgfVxyXG4gICAgZG90MkQodikge1xyXG4gICAgICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueVxyXG4gICAgfVxyXG4gICAgYW5nbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoLSB0aGlzLnksIC0gdGhpcy54KSArIE1hdGguUElcclxuICAgIH1cclxuICAgIHNldFNjYWxhcihzY2FsYXIpIHtcclxuICAgICAgICB0aGlzLnggPSBzY2FsYXJcclxuICAgICAgICB0aGlzLnkgPSBzY2FsYXJcclxuICAgICAgICB0aGlzLnogPSBzY2FsYXJcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgbXVsdGlwbHlTY2FsYXIoc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhclxyXG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXJcclxuICAgICAgICB0aGlzLnogKj0gc2NhbGFyXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBhZGRTY2FsYXIoc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhclxyXG4gICAgICAgIHRoaXMueSArPSBzY2FsYXJcclxuICAgICAgICB0aGlzLnogKz0gc2NhbGFyXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBseSh2KSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHYueFxyXG4gICAgICAgIHRoaXMueSAqPSB2LnlcclxuICAgICAgICB0aGlzLnogKj0gdi56XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIGRpdmlkZVNjYWxhcihzY2FsYXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhcigxL3NjYWxhcilcclxuICAgIH1cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKVxyXG4gICAgfVxyXG4gICAgY2xvbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnksIHRoaXMueilcclxuICAgIH1cclxuICAgIGRpc3RhbmNlMkQodjIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLnggLSB2Mi54LCB0aGlzLnkgLSB2Mi55KSAgIFxyXG4gICAgfVxyXG4gICAgY2xhbXAobWluLCBtYXgpIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLm1heCggbWluLngsIE1hdGgubWluKCBtYXgueCwgdGhpcy54ICkgKVxyXG5cdFx0dGhpcy55ID0gTWF0aC5tYXgoIG1pbi55LCBNYXRoLm1pbiggbWF4LnksIHRoaXMueSApIClcclxuICAgICAgICB0aGlzLnogPSBNYXRoLm1heCggbWluLnosIE1hdGgubWluKCBtYXgueiwgdGhpcy56ICkgKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBjbGFtcFNjYWxhcihtaW5TY2FsYXIsIG1heFNjYWxhcikge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgubWF4KG1pblNjYWxhciwgTWF0aC5taW4obWF4U2NhbGFyLCB0aGlzLngpKVxyXG4gICAgICAgIHRoaXMueSA9IE1hdGgubWF4KG1pblNjYWxhciwgTWF0aC5taW4obWF4U2NhbGFyLCB0aGlzLnkpKVxyXG4gICAgICAgIHRoaXMueiA9IE1hdGgubWF4KG1pblNjYWxhciwgTWF0aC5taW4obWF4U2NhbGFyLCB0aGlzLnopKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBhZGQodikge1xyXG4gICAgICAgIHRoaXMueCArPSB2LnhcclxuICAgICAgICB0aGlzLnkgKz0gdi55XHJcbiAgICAgICAgdGhpcy56ICs9IHYuelxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBzdWIodikge1xyXG4gICAgICAgIHRoaXMueCAtPSB2LnhcclxuICAgICAgICB0aGlzLnkgLT0gdi55XHJcbiAgICAgICAgdGhpcy56IC09IHYuelxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBtdWx0aXBseSh2KSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHYueFxyXG4gICAgICAgIHRoaXMueSAqPSB2LnlcclxuICAgICAgICB0aGlzLnogKj0gdi56XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIG5vcm1hbGlzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKSlcclxuICAgIH1cclxuICAgIHNldCh2KSB7XHJcbiAgICAgICAgdGhpcy54ID0gdi54XHJcbiAgICAgICAgdGhpcy55ID0gdi55XHJcbiAgICAgICAgdGhpcy56ID0gdi56XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt4fSAke3l9ICR7en1gXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhcGUsIFBvcywgU3BlZWQsIEFjYywgQ29udHJvbGFibGUsIFBsYXllciwgU3Bhd24sIFRyaWFsU3RhdGUsIENJUkNMRSwgVUksIFdhbGwsIENvbGxpZGFibGUsIEJvbWJCYWcsIERvb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgWF9USUxFX0NPVU5ULCBZX1RJTEVfQ09VTlQsIFBMQVlFUl9XSURUSCwgUExBWUVSX0hFSUdIVCB9IGZyb20gXCIuL2NvbmZpZ1wiXHJcbiAgICAgIFxyXG5jb25zdCBjbGVhblNjcmVlbiA9IChlY3MpID0+IHtcclxuICAgIGNvbnN0IEVudGl0aWVzID0gW1VJLCBQbGF5ZXIsIEJvbWJCYWddXHJcbiAgICBFbnRpdGllcy5mb3JFYWNoKChlbnRpdHlOYW1lKSA9PiB7XHJcbiAgICAgICAgZWNzLnNlbGVjdChlbnRpdHlOYW1lKS5pdGVyYXRlKChlbnRpdHlFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgZW50aXR5RW50aXR5LmVqZWN0KClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0aXRsZSA9IChlY3MsIGN2KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc0dhbWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlY3MuY3JlYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZChuZXcgVUkoXCJQbGF5IGdhbWUgIVwiLCBjdi53aWR0aCAvIDIgLSAxNTAsIGN2LmhlaWdodCAvIDIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50U2NyZWVuLnVubG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudFNjcmVlbiA9IGdhbWVTY3JlZW4oZWNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRTY3JlZW4ubG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVubG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVjcy5zZWxlY3QoVUkpLml0ZXJhdGUoKGVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGdhbWVTY3JlZW4gPSAoZWNzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc0dhbWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1hcExvYWRlci5uZXh0KGVjcylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1bmxvYWQgOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYW5TY3JlZW4oZWNzKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tYXBMb2FkZXIudW5sb2FkKGVjcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRpZVNjcmVlbiA9IChlY3MsIHRpbGVTaXplLCBjdikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNHYW1lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvYWQgOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWNzLmNyZWF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQobmV3IFVJKFwiWW91IGRpZWRcIixjdi53aWR0aCAvIDIgLSAxNTAsIGN2LmhlaWdodCAvIDIsICgpID0+IHsgfSwgZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgICAgIGVjcy5jcmVhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkKG5ldyBVSShcIlJlc3RhcnRcIixjdi53aWR0aCAvIDIgLSAxNTAsIGN2LmhlaWdodCAvIDIgKyAxNTAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50U2NyZWVuLnVubG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudFNjcmVlbiA9IGdhbWVTY3JlZW4oZWNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1hcExvYWRlci5pbml0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5sb2FkIDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuU2NyZWVuKGVjcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiIsImltcG9ydCB7IFBvcywgQ29udHJvbGFibGUsIFRyaWFsU3RhdGUsIEJvbWIsIEhvc3RpbGUsIFNwYXduLCBQbGF5ZXIsIFNwZWVkLCBVSSwgV2FsbCwgQ29sbGlkYWJsZSwgQWNjLCBCb21iQmFnLCBEZWFkLCBQcmVCbGFzdCwgQmxhc3QsIERvb3IsIEV4cGxvc2lvbiwgQWdlbnQsIEV4cGxvZGFibGUgfSBmcm9tIFwiLi9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgSE9TVElMRV9FRkZFQ1RfUkVMT0FEX1RJTUUsIEhPU1RJTEVfRUZGRUNUX1JFTE9BRCwgUFJFQkxBU1RfU0ZYX0xJTkVfQ09VTlQsIEJPTUJfQVJNX1JBRElVUywgUExBWUVSX1NQRUVELCBYX1RJTEVfQ09VTlQsIFlfVElMRV9DT1VOVCwgSE9TVElMRV9TUEVFRCwgUExBWUVSX0JBU0VfQUNDLCBQTEFZRVJfQkFTRV9GUklDVElPTiwgQkxBU1RfRFVSQVRJT04sIFBSRV9CTEFTVF9EVVJBVElPTiwgQkxBU1RfUkFESVVTLCBIT1NUSUxFX0JPTUJfREFNQUdFLCBCT01CQUdfUk9MTF9EVVJBVElPTiwgU1BBV05FUl9DRCwgRVhQTE9TSU9OX1NGWF9TSVpFLCBFWFBMT1NJT05fU0ZYX0RVUkFUSU9OLCBBVE9NSUNfQk9NQl9UWVBFLCBIT1NUSUxFX0ZSRUVaRV9USU1FLCBGUkVFWkVfQk9NQl9UWVBFLCBGTEFTSF9CT01CX1RZUEUsIEhPU1RJTEVfRElTT1JJRU5URURfVElNRSwgSE9TVElMRV9FRkZFQ1RfRlJFRVpFLCBIT1NUSUxFX0VGRkVDVF9ESVNPUklFTlRFRCwgREVURUNUX0JPTUJfVFlQRSwgVElNRV9CT01CX0RFVE9OQVRFX0RFTEFZLCBUVVJUTEVfQk9NQl9UWVBFLCBCT01CX0NPTExJU09OX1JBRElVUywgSE9TVElMRV9FRkZFQ1RfU0xFRVAsIEhPU1RJTEVfRUZGRUNUX05PTkUsIFJFRF9XSURUSCwgUkVEX0hFSUdIVCwgUExBWUVSX1dJRFRILCBQTEFZRVJfSEVJR0hULCBIT1NUSUxFX1RZUEVfUFBBT0UsIEhPU1RJTEVfVFlQRV9SQU5HRSB9IGZyb20gXCIuL2NvbmZpZ1wiXHJcbmltcG9ydCB7IGNsYW1wLCBwaTIsIGlzUGxheWVyT3ZlcmxhcCB9IGZyb20gXCIuL2xpYnMvdXRpbHNcIlxyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi9saWJzL3ZlY3RvclwiXHJcbmltcG9ydCB7IGRpZVNjcmVlbiB9IGZyb20gXCIuL3NjcmVlbnNcIlxyXG5pbXBvcnQgeyBkcmF3Qm9tYkNhcmQsIGRyYXdCb21iLCBkZWFkQWdlbnQsIHJlZEFnZW50LCBib21iQWdlbnQsIGRyYXdFeHBsb2RhYmxlLCBkcmF3Qm9tYkVmZmVjdCwgZHJhd1NvaWwgfSBmcm9tIFwiLi9kcmF3X2hlbHBlcnNcIlxyXG5cclxuaW1wb3J0IHthc3RhciwgR3JhcGh9IGZyb20gXCIuL2xpYnMvYXN0YXJcIlxyXG5leHBvcnQgY29uc3QgY29udHJvbCA9IChlY3MpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZWNzLnNlbGVjdChQb3MsIENvbnRyb2xhYmxlLCBBY2MsIFNwZWVkKVxyXG4gICAgY29uc3QgYm9tYkJhZ1NlbGVjdG9yID0gZWNzLnNlbGVjdChCb21iQmFnKVxyXG4gICAgbGV0IGJvbWJBdmFpbGFibGUgPSB0cnVlXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGUgOiAoZHQpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuaXRlcmF0ZSgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7aXNVcCwgaXNEb3duLCBpc0xlZnQsIGlzUmlnaHQsIGlzTWFpbn0gPSBlbnRpdHkuZ2V0KENvbnRyb2xhYmxlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gZW50aXR5LmdldChQb3MpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVlZCA9IGVudGl0eS5nZXQoU3BlZWQpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2MgPSBlbnRpdHkuZ2V0KEFjYylcclxuICAgICAgICAgICAgICAgIGFjYy5zZXRTY2FsYXIoMClcclxuICAgICAgICAgICAgICAgIGlmKGlzVXApIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2Muc2V0WSgtUExBWUVSX0JBU0VfQUNDKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcGVlZC55IDwgMCAmJiAhaXNEb3duKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkLnNldFkoY2xhbXAoUExBWUVSX0JBU0VfRlJJQ1RJT04gKyBzcGVlZC55LCAtTnVtYmVyLk1BWF9WQUxVRSwgMCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2Muc2V0WShQTEFZRVJfQkFTRV9BQ0MpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwZWVkLnkgPiAwICYmICFpc1VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQuc2V0WShjbGFtcCgtUExBWUVSX0JBU0VfRlJJQ1RJT04gKyBzcGVlZC55LCAwLCBOdW1iZXIuTUFYX1ZBTFVFKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGlzTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYy5zZXRYKC1QTEFZRVJfQkFTRV9BQ0MpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoc3BlZWQueCA8IDAgJiYgIWlzUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZC5zZXRYKGNsYW1wKFBMQVlFUl9CQVNFX0ZSSUNUSU9OICsgc3BlZWQueCwgLU51bWJlci5NQVhfVkFMVUUsIDApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaXNSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYy5zZXRYKFBMQVlFUl9CQVNFX0FDQylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihzcGVlZC54ID4gMCAmJiAhaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQuc2V0WChjbGFtcCgtUExBWUVSX0JBU0VfRlJJQ1RJT04gKyBzcGVlZC54LCAwLCBOdW1iZXIuTUFYX1ZBTFVFKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwZWVkLmFkZChhY2MpLmNsYW1wU2NhbGFyKC1QTEFZRVJfU1BFRUQsIFBMQVlFUl9TUEVFRClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc01haW4gJiYgIWJvbWJBdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBib21iQXZhaWxhYmxlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTWFpbiAmJiBib21iQXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9tYkF2YWlsYWJsZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgYm9tYkJhZ1NlbGVjdG9yLml0ZXJhdGUoKGJvbWJCYWdFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9tYkJhZyA9IGJvbWJCYWdFbnRpdHkuZ2V0KEJvbWJCYWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib21iQmFnLmlzQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvbWIgPSBib21iQmFnLnVzZUJvbWIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9tYixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvcyhwb3MueCArIFBMQVlFUl9XSURUSCAvIDIsIHBvcy55ICsgUExBWUVSX0hFSUdIVCAvIDIsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQWdlbnQoYm9tYkFnZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdBZ2VudCA9IChlY3MsIGN0eCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRBZ2VudCA9IGVjcy5zZWxlY3QoUG9zLCBBZ2VudClcclxuICAgIGNvbnN0IHNlbGVjdGVkV2FsbHMgPSBlY3Muc2VsZWN0KFdhbGwpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZSA6IChkdCkgPT4ge1xyXG4gICAgICAgICAgICBkcmF3U29pbChjdHgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZWxlY3RlZEFnZW50Lml0ZXJhdGUoKGVudGl0eUFnZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBlbnRpdHlBZ2VudC5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWdlbnQgPSBlbnRpdHlBZ2VudC5nZXQoQWdlbnQpXHJcbiAgICAgICAgICAgICAgICBhZ2VudC5kcmF3KHBvcy5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKHRpbGVTaXplKSwgY3R4LCBhZ2VudClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdGVkV2FsbHMuaXRlcmF0ZSgoZW50aXR5V2FsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FsbCA9IGVudGl0eVdhbGwuZ2V0KFdhbGwpXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDMwOTE3XCJcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCh3YWxsLnggKiB0aWxlU2l6ZSwgd2FsbC55ICogdGlsZVNpemUsIHRpbGVTaXplLCB0aWxlU2l6ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLyogYWRkIGJvcmRlciB3YWxscyAqL1xyXG4gICAgICAgICAgICBpZihzZWxlY3RlZFdhbGxzLmxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBYX1RJTEVfQ09VTlQgKiB0aWxlU2l6ZSwgdGlsZVNpemUpXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgKFlfVElMRV9DT1VOVCAtIDEpICogdGlsZVNpemUsIFhfVElMRV9DT1VOVCAqIHRpbGVTaXplLCB0aWxlU2l6ZSlcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aWxlU2l6ZSwgWV9USUxFX0NPVU5UICogdGlsZVNpemUpXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoKFhfVElMRV9DT1VOVCAtIDEpICogdGlsZVNpemUsIDAsIHRpbGVTaXplLCBZX1RJTEVfQ09VTlQgKiB0aWxlU2l6ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsaXZlU3Bhd24gPSAoZWNzLCBjdHgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gZWNzLnNlbGVjdChTcGF3bilcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZTogKGR0KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yLml0ZXJhdGUoKGVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gZW50aXR5LmdldChQb3MpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGF3bmVyID0gZW50aXR5LmdldChTcGF3bilcclxuICAgICAgICAgICAgICAgIHNwYXduZXIuY2QgLT0gZHRcclxuICAgICAgICAgICAgICAgIGlmKHNwYXduZXIuY2QgPD0gMCAmJiBzcGF3bmVyLnRvdGFsID4gMCAmJiBzcGF3bmVyLmhhc09uZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bhd25lci5jZCA9IFNQQVdORVJfQ0RcclxuICAgICAgICAgICAgICAgICAgICBzcGF3bmVyLmFjdGl2ZShwb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgc3Bhd25lci50b3RhbCAtLVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHNwYXduZXIuY2QgPiAwICYmIHNwYXduZXIudG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3Bhd25pbmcgbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAgICAgICAvLyAgXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuMylcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zdCByYWQgPSBNYXRoLmNlaWwoc3Bhd25lci5jZCAvIFNQQVdORVJfQ0QgKiAzKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY3R4LmZpbGxTdHlsZSA9IHJhZCAlIDIgPT09IDAgPyBcIiMwMDBcIiA6IFwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jdHguZmlsbFJlY3QoKHBvcy54ICogdGlsZVNpemUpIC0gKHJhZCAqIHRpbGVTaXplIC8gMiksIChwb3MueSAqIHRpbGVTaXplKSAtIChyYWQgKiB0aWxlU2l6ZSAvIDIpLHJhZCAqIHRpbGVTaXplLCByYWQgKiB0aWxlU2l6ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwXCJcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChwb3MueCAqIHRpbGVTaXplLCBwb3MueSAqIHRpbGVTaXplICwgdGlsZVNpemUgLCB0aWxlU2l6ZSlcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaWEgPSAoZWNzLCBjdHgpID0+IHtcclxuICAgIGNvbnN0IGhvc3RpbGVTZWxlY3RvciA9IGVjcy5zZWxlY3QoUG9zLCBIb3N0aWxlKVxyXG4gICAgY29uc3QgcGxheWVyU2VsZWN0b3IgPSBlY3Muc2VsZWN0KFBvcywgUGxheWVyKVxyXG4gICAgY29uc3Qgd2FsbFNlbGVjdG9yID0gZWNzLnNlbGVjdChXYWxsKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGUgOiAoZHQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWFwcGVkR3JpZCA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBYX1RJTEVfQ09VTlQ7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgIG1hcHBlZEdyaWRbaV0gPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IFlfVElMRV9DT1VOVDsgaiArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEdyaWRbaV0ucHVzaCgxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3YWxsU2VsZWN0b3IuaXRlcmF0ZSgoZW50aXR5V2FsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FsbCA9IGVudGl0eVdhbGwuZ2V0KFdhbGwpXHJcbiAgICAgICAgICAgICAgICBtYXBwZWRHcmlkW3dhbGwueF1bd2FsbC55XSA9IDBcclxuICAgICAgICAgICAgICAgIGlmKHdhbGwueCA8IFhfVElMRV9DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEdyaWRbd2FsbC54ICsgMV1bd2FsbC55XSA9IDBcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBpZih3YWxsLnggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkR3JpZFt3YWxsLnggLSAxXVt3YWxsLnldID0gMFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGlmKHdhbGwueSA8IFlfVElMRV9DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEdyaWRbd2FsbC54XVt3YWxsLnkgKyAxXSA9IDBcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBpZih3YWxsLnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkR3JpZFt3YWxsLnhdW3dhbGwueSAtIDFdID0gMFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIG1hcHBlZEdyaWRbd2FsbC54XVt3YWxsLnldID0gMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZ3JhcGggPSBuZXcgR3JhcGgobWFwcGVkR3JpZClcclxuXHJcbiAgICAgICAgICAgIHBsYXllclNlbGVjdG9yLml0ZXJhdGUoKHBsYXllckVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyUG9zID0gcGxheWVyRW50aXR5LmdldChQb3MpIFxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGhvc3RpbGVTZWxlY3Rvci5pdGVyYXRlKChlbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBob3N0aWxlID0gZW50aXR5LmdldChIb3N0aWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGhvc3RpbGUuZWZmZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RpbGUuZWZmZWN0VGltZSAtPSBkdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihob3N0aWxlLmVmZmVjdFRpbWUgPCAwICYmIGhvc3RpbGUuZWZmZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RpbGUuZWZmZWN0ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvc3RpbGUuc3RhdHVzID09PSBIT1NUSUxFX0VGRkVDVF9TTEVFUCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvc3RpbGUuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaG9zdGlsZVBvcyA9IGVudGl0eS5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBob3N0aWxlU3BlZWQgPSBlbnRpdHkuZ2V0KFNwZWVkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW92ZSB0b3dhcmQgcGxheWVyIGlmIG5vIGF0dGFja2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihob3N0aWxlLmlzQXR0YWNraW5nIHx8IGhvc3RpbGUuZWZmZWN0ID09PSBIT1NUSUxFX0VGRkVDVF9GUkVFWkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RpbGVTcGVlZC5zZXRTY2FsYXIoMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGhvc3RpbGUuZWZmZWN0ID09PSBIT1NUSUxFX0VGRkVDVF9ESVNPUklFTlRFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZzsgVE9ETyBtYXkgY2hhbmdlIGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaG9zdGlsZS50eXBlID09PSBIT1NUSUxFX1RZUEVfUFBBT0UgfHwgKGhvc3RpbGUudHlwZSA9PT0gSE9TVElMRV9UWVBFX1JBTkdFICYmIGhvc3RpbGVQb3MuZGlzdGFuY2UyRChwbGF5ZXJQb3MpID4gNykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG9zdGlsZVBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IGFzdGFyLnNlYXJjaChncmFwaCwgZ3JhcGguZ3JpZFtNYXRoLmZsb29yKHBsYXllclBvcy54ICsgLjUpXVtNYXRoLmZsb29yKHBsYXllclBvcy55ICsgLjUpXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGguZ3JpZFtNYXRoLmZsb29yKGhvc3RpbGVQb3MueCldW01hdGguZmxvb3IoaG9zdGlsZVBvcy55KV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gbmV3IFBvcyhyZXNbcmVzLmxlbmd0aCAtIDJdLnggKyAwLjUsIHJlc1tyZXMubGVuZ3RoIC0gMl0ueSArIDAuNSwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcyA9IHBsYXllclBvcy5jbG9uZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRNb3ZlID0gbmV4dFBvcy5zdWIoaG9zdGlsZVBvcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RpbGVTcGVlZC5zZXQobmV4dE1vdmUubm9ybWFsaXNlKCkubXVsdGlwbHlTY2FsYXIoSE9TVElMRV9TUEVFRCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0aWxlU3BlZWQuc2V0U2NhbGFyKDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyeSBhbiBhdHRhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFob3N0aWxlLmlzQXR0YWNraW5nICYmIGhvc3RpbGUuZWZmZWN0ICE9PSBIT1NUSUxFX0VGRkVDVF9SRUxPQUQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyUG9zLmRpc3RhbmNlMkQoaG9zdGlsZVBvcykgPCAxICYmIGhvc3RpbGUudHlwZSA9PT0gSE9TVElMRV9UWVBFX1BQQU9FICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdGlsZS5lZmZlY3QgIT09IEhPU1RJTEVfRUZGRUNUX05PTkVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RpbGUuaXNBdHRhY2tpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWNzLmNyZWF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHJlQmxhc3QoaG9zdGlsZSwgUFJFX0JMQVNUX0RVUkFUSU9OLCBIT1NUSUxFX1RZUEVfUFBBT0UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvcyhob3N0aWxlUG9zLnggKyBSRURfV0lEVEggLyAyLCBob3N0aWxlUG9zLnkgKyBSRURfSEVJR0hUIC8gMiwgaG9zdGlsZVBvcy56KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFob3N0aWxlLmlzQXR0YWNraW5nICYmIGhvc3RpbGUudHlwZSA9PT0gSE9TVElMRV9UWVBFX1JBTkdFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdGlsZS5pc0F0dGFja2luZyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlY3MuY3JlYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcmVCbGFzdChob3N0aWxlLCBQUkVfQkxBU1RfRFVSQVRJT04sIEhPU1RJTEVfVFlQRV9SQU5HRSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9zKGhvc3RpbGVQb3MueCArIFJFRF9XSURUSCAvIDIsIGhvc3RpbGVQb3MueSArIFJFRF9IRUlHSFQgLyAyLCBob3N0aWxlUG9zLnopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpdmVQcmVCbGFzdCA9IChlY3MsIGN0eCwgY3YpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZWNzLnNlbGVjdChQcmVCbGFzdClcclxuICAgIGNvbnN0IHNlbGVjdGVkUGxheWVyID0gZWNzLnNlbGVjdChQbGF5ZXIpXHJcbiAgICBjb25zdCBib21iQmFnU2VsZWN0b3IgPSBlY3Muc2VsZWN0KEJvbWJCYWcpXHJcbiAgICBjb25zdCB3YWxsU2VsZWN0b3IgPSBlY3Muc2VsZWN0KFdhbGwpXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlIDogKGR0KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLml0ZXJhdGUoKHByZWJsYXNFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZWJsYXN0ID0gcHJlYmxhc0VudGl0eS5nZXQoUHJlQmxhc3QpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBwcmVibGFzRW50aXR5LmdldChQb3MpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByZWJsYXN0LnR5cGUgPT09IEhPU1RJTEVfVFlQRV9QUEFPRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMocG9zLnggKiB0aWxlU2l6ZSwgcG9zLnkgKiB0aWxlU2l6ZSwgdGlsZVNpemUgKiBCTEFTVF9SQURJVVMsIDAsIHBpMilcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMlxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzk3MTMxM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYlJhZGl1cyA9IHRpbGVTaXplICogQkxBU1RfUkFESVVTXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZFkgPSAyICogYlJhZGl1cyAvIChQUkVCTEFTVF9TRlhfTElORV9DT1VOVCArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvc0EgPSBNYXRoLmNvcygxKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2luQSA9IE1hdGguc2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUFJFQkxBU1RfU0ZYX0xJTkVfQ09VTlQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gZFkgKiAoaSArIDEpIC0gYlJhZGl1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5zcXJ0KGJSYWRpdXMgKiBiUmFkaXVzIC0geSAqIHkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsWCA9IHkgKiBzaW5BICsgeCAqICBjb3NBICsgcG9zLnggKiB0aWxlU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByWCA9IHkgKiAgc2luQSAtIHggKiAgY29zQSArIHBvcy54ICogdGlsZVNpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbFkgPSB5ICogIGNvc0EgLSB4ICogIHNpbkEgKyBwb3MueSAqIHRpbGVTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJZID0geSAqICBjb3NBICsgeCAqICBzaW5BICsgcG9zLnkgKiB0aWxlU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKGxYLCBsWSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhyWCwgclkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI0NSwgODgsIDIxLCAuMylcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMocG9zLnggKiB0aWxlU2l6ZSwgcG9zLnkgKiB0aWxlU2l6ZSwgKDEgLSBwcmVibGFzdC5yZW1haW5pbmcgLyBQUkVfQkxBU1RfRFVSQVRJT04pICogdGlsZVNpemUgKiBCTEFTVF9SQURJVVMsIDAsIHBpMilcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlYmxhc3QucmVtYWluaW5nIC09IGR0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVibGFzdC5yZW1haW5pbmcgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGxheWVyLml0ZXJhdGUoKHBsYXllckVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyUG9zID0gcGxheWVyRW50aXR5LmdldChQb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJFbnRpdHkuZ2V0KFBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MuZGlzdGFuY2UyRChwbGF5ZXJQb3MpIDwgQkxBU1RfUkFESVVTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmhwIC09IEhPU1RJTEVfQk9NQl9EQU1BR0VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVibGFzdC5ob3N0aWxlLmlzQXR0YWNraW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlYmxhc0VudGl0eS5lamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVjcy5jcmVhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9zKHBvcy54LCBwb3MueSwgcG9zLnopLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCbGFzdChwZXJmb3JtYW5jZS5ub3coKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBsaW5lIGJsYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvdW5kV2FsbCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwgMCwgMCwgJHsxIC0gcHJlYmxhc3QucmVtYWluaW5nIC8gUFJFX0JMQVNUX0RVUkFUSU9OfSlgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzRXhwbG9kZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllclBvc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlYmxhc3QucmVtYWluaW5nIC09IGR0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWJsYXN0LnJlbWFpbmluZyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQbGF5ZXIuaXRlcmF0ZSgocGxheWVyRW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJQb3MgPSBwbGF5ZXJFbnRpdHkuZ2V0KFBvcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllciA9IHBsYXllckVudGl0eS5nZXQoUGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFeHBsb2RlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlYmxhc0VudGl0eS5lamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVibGFzRW50aXR5LmVqZWN0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlYmxhc3QuaG9zdGlsZS5pc0F0dGFja2luZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWJsYXN0Lmhvc3RpbGUuZWZmZWN0ID0gSE9TVElMRV9FRkZFQ1RfUkVMT0FEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWJsYXN0Lmhvc3RpbGUuZWZmZWN0VGltZSA9IEhPU1RJTEVfRUZGRUNUX1JFTE9BRF9USU1FXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gTWF0aC5mbG9vcihwb3MueCk7IGkgPCBYX1RJTEVfQ09VTlQgJiYgIWZvdW5kV2FsbDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc0V4cGxvZGUmJk1hdGguZmxvb3IocGxheWVyUG9zLngpID09PSBpICYmIChNYXRoLmZsb29yKHBsYXllclBvcy55KSA9PT0gTWF0aC5mbG9vcihwb3MueSkgfHwgTWF0aC5mbG9vcihwbGF5ZXJQb3MueSArIDEpID09PSBNYXRoLmZsb29yKHBvcy55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5ocCAtPSBIT1NUSUxFX0JPTUJfREFNQUdFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGkgKiB0aWxlU2l6ZSwgTWF0aC5mbG9vcihwb3MueSkgKiB0aWxlU2l6ZSwgdGlsZVNpemUsIHRpbGVTaXplKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxTZWxlY3Rvci5pdGVyYXRlKCh3YWxsRW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3YWxsID0gd2FsbEVudGl0eS5nZXQoV2FsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgKyAxID09PSB3YWxsLnggJiYgTWF0aC5mbG9vcihwb3MueSkgPT09IHdhbGwueSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFdhbGwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kV2FsbCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gTWF0aC5mbG9vcihwb3MueCk7IGkgPiAwICYmICFmb3VuZFdhbGw7IGkgLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNFeHBsb2RlJiZNYXRoLmZsb29yKHBsYXllclBvcy54KSA9PT0gaSAmJiAoTWF0aC5mbG9vcihwbGF5ZXJQb3MueSkgPT09IE1hdGguZmxvb3IocG9zLnkpIHx8IE1hdGguZmxvb3IocGxheWVyUG9zLnkgKyAxKSA9PT0gTWF0aC5mbG9vcihwb3MueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuaHAgLT0gSE9TVElMRV9CT01CX0RBTUFHRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChpICogdGlsZVNpemUsIE1hdGguZmxvb3IocG9zLnkpICogdGlsZVNpemUsIHRpbGVTaXplLCB0aWxlU2l6ZSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsU2VsZWN0b3IuaXRlcmF0ZSgod2FsbEVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2FsbCA9IHdhbGxFbnRpdHkuZ2V0KFdhbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSB3YWxsLnggKyAxICYmIE1hdGguZmxvb3IocG9zLnkpID09PSB3YWxsLnkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRXYWxsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmlhbERpc3BsYXkgPSAoZWNzLCBjdHgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZWNzLnNlbGVjdChUcmlhbFN0YXRlLCBQb3MpXHJcbiAgICBjb25zdCBzcGF3bmVyU2VsZWN0b3IgPSBlY3Muc2VsZWN0KFNwYXduKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5pbmcgPSAtMVxyXG4gICAgICAgICAgICBzcGF3bmVyU2VsZWN0b3IuaXRlcmF0ZSgoc3Bhd25lckVudGl0aWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5pbmcgKz0gc3Bhd25lckVudGl0aWVzLmdldChTcGF3bikucmVtYWluaW5nKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2VsZWN0ZWQuaXRlcmF0ZSgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmlhbFN0YXRlID0gZW50aXR5LmdldChUcmlhbFN0YXRlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gZW50aXR5LmdldChQb3MpXHJcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjUwcHggc2Fucy1zZXJpZlwiXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDEwMCwgMTcwLCAyMjApXCJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4dCA9IHRyaWFsU3RhdGUuc2MucmVwbGFjZShcIiVyZW1haW5cIiwgcmVtYWluaW5nKVxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzlFNjIyQlwiXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodHh0LCBwb3MueCAqIHRpbGVTaXplLCBwb3MueSAqIHRpbGVTaXplKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpdmVCb21icyA9IChlY3MsIGN0eCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlY3Muc2VsZWN0KEJvbWIpXHJcbiAgICBjb25zdCBob3N0aWxlU2VsZWN0ZWQgPSBlY3Muc2VsZWN0KEhvc3RpbGUsIFBvcylcclxuICAgIGNvbnN0IHBsYXllclNlbGVjdGVkID0gZWNzLnNlbGVjdChQbGF5ZXIpXHJcbiAgICBjb25zdCBleHBsb2RhYmxlU2VsZWN0b3IgPSBlY3Muc2VsZWN0KEV4cGxvZGFibGUsIFBvcylcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZTogKGR0KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLml0ZXJhdGUoKGVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9tYiA9IGVudGl0eS5nZXQoQm9tYilcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGVudGl0eS5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgYm9tYi5yZW1haW5pbmcgLT0gZHRcclxuICAgICAgICAgICAgICAgIC8vIGF0b21pYyBib21iXHJcbiAgICAgICAgICAgICAgICBkcmF3Qm9tYkVmZmVjdChib21iLCBwb3MuY2xvbmUoKS5tdWx0aXBseVNjYWxhcih0aWxlU2l6ZSksIGN0eClcclxuICAgICAgICAgICAgICAgIHN3aXRjaChib21iLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFUT01JQ19CT01CX1RZUEU6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGUkVFWkVfQk9NQl9UWVBFOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRkxBU0hfQk9NQl9UWVBFOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgREVURUNUX0JPTUJfVFlQRTpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFRVUlRMRV9CT01CX1RZUEU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJvbWIucmVtYWluaW5nIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9tYi50cmlnZ2VyZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9tYi5pc0FybWVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5lamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBsb2RhYmxlU2VsZWN0b3IuaXRlcmF0ZSgoZXhwbG9kYWJsZUVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGxvZGFibGVQb3MgPSBleHBsb2RhYmxlRW50aXR5LmdldChQb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwbG9kYWJsZSA9IGV4cGxvZGFibGVFbnRpdHkuZ2V0KEV4cGxvZGFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGxvZGFibGVQb3MuZGlzdGFuY2UyRChwb3MpIDwgYm9tYi5yYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9kYWJsZS5leHBsb2RlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdGlsZVNlbGVjdGVkLml0ZXJhdGUoKGhvc3RpbGVFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBob3N0aWxlUG9zID0gaG9zdGlsZUVudGl0eS5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvc3RpbGVTcGVlZCA9IGhvc3RpbGVFbnRpdHkuZ2V0KFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvc3RpbGUgPSBob3N0aWxlRW50aXR5LmdldChIb3N0aWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvc3RpbGUuc3RhdHVzID09PSBIT1NUSUxFX0VGRkVDVF9TTEVFUCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0aWxlLnN0YXR1cyA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvc3RpbGVQb3MuZGlzdGFuY2UyRChwb3MpIDwgYm9tYi5yYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYm9tYi50eXBlID09PSBGUkVFWkVfQk9NQl9UWVBFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0aWxlLmVmZmVjdCA9IEhPU1RJTEVfRUZGRUNUX0ZSRUVaRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdGlsZS5mcmVlemVUaW1lID0gSE9TVElMRV9GUkVFWkVfVElNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYm9tYi50eXBlID09PSBGTEFTSF9CT01CX1RZUEUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RpbGUuZWZmZWN0ID0gSE9TVElMRV9FRkZFQ1RfRElTT1JJRU5URURcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RpbGUuZWZmZWN0VGltZSA9IEhPU1RJTEVfRElTT1JJRU5URURfVElNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdGlsZS5pc0FjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0aWxlLmVmZmVjdCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0aWxlU3BlZWQuc2V0U2NhbGFyKDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlY3MuY3JlYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFnZW50KGRlYWRBZ2VudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERlYWQocGVyZm9ybWFuY2Uubm93KCkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9zKGhvc3RpbGVQb3MueCwgaG9zdGlsZVBvcy55LCBob3N0aWxlUG9zLnopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVjcy5jcmVhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9zKHBvcy54LCBwb3MueSwgcG9zLnopLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFeHBsb3Npb24oYm9tYi50eXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGJvbWIudHlwZSA9PT0gREVURUNUX0JPTUJfVFlQRSAmJiBib21iLnRyaWdnZXJlZCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdGlsZVNlbGVjdGVkLml0ZXJhdGUoKGhvc3RpbGVFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBob3N0aWxlUG9zID0gaG9zdGlsZUVudGl0eS5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvc3RpbGVTcGVlZCA9IGhvc3RpbGVFbnRpdHkuZ2V0KFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvc3RpbGUgPSBob3N0aWxlRW50aXR5LmdldChIb3N0aWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChob3N0aWxlUG9zLmRpc3RhbmNlMkQocG9zKSA8IGJvbWIucmFkaXVzKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib21iLnRyaWdnZXJlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9tYi5yZW1haW5pbmcgPSBUSU1FX0JPTUJfREVUT05BVEVfREVMQVlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGJvbWIudHlwZSA9PT0gVFVSVExFX0JPTUJfVFlQRSAmJiBib21iLnRyaWdnZXJlZCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU2VsZWN0ZWQuaXRlcmF0ZSgocGxheWVyRW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyUG9zID0gcGxheWVyRW50aXR5LmdldChQb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyU3BlZWQgPSBwbGF5ZXJFbnRpdHkuZ2V0KFNwZWVkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhYWMgPSBwbGF5ZXJQb3MuY2xvbmUoKS5hZGRTY2FsYXIoMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhYWMuZGlzdGFuY2UyRChwb3MpIDwgQk9NQl9DT0xMSVNPTl9SQURJVVMgJiYgYm9tYi5pc0FybWVkICYmICFlbnRpdHkuZ2V0KFNwZWVkKSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlZWRWZWN0b3IgPSBwb3MuY2xvbmUoKS5zdWIoYWFjKS5ub3JtYWxpc2UoKS5tdWx0aXBseVNjYWxhcigwLjEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5hZGQobmV3IFNwZWVkKHNwZWVkVmVjdG9yLngsIHNwZWVkVmVjdG9yLnksIHNwZWVkVmVjdG9yLnopLCBuZXcgQ29sbGlkYWJsZSgwLDAsLjQsLjQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhYWMuZGlzdGFuY2UyRChwb3MpID4gQk9NQl9BUk1fUkFESVVTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbWIuaXNBcm1lZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsaXZlRGVhZCA9IChlY3MsIGN0eCkgPT4ge1xyXG4gICAgY29uc3QgZGVhZFNlbGVjdG9yID0gZWNzLnNlbGVjdChEZWFkLCBQb3MpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICBkZWFkU2VsZWN0b3IuaXRlcmF0ZSgoZGVhZEVuZGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gZGVhZEVuZGl0eS5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVhZCA9IGRlYWRFbmRpdHkuZ2V0KERlYWQpXHJcbiAgICAgICAgICAgICAgICBkZWFkQWdlbnQocG9zLCBjdHgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGl2ZVVpID0gKGVjcywgY3R4LCBjdikgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlY3Muc2VsZWN0KFVJKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuaXRlcmF0ZSgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1aSA9IGVudGl0eS5nZXQoVUkpXHJcbiAgICAgICAgICAgICAgICBpZih1aS5pc0hvdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXCJcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgdWkueSAtIDEwLCBjdi53aWR0aCwgMTIwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHt0aWxlU2l6ZX1weCBBcmlhbGBcclxuICAgICAgICAgICAgICAgIGlmICh1aS5pc0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCh1aS54LCB1aS55LCAzMDAsIDEwMClcclxuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh1aS50ZXh0LCB1aS54ICsgMTUwLCB1aS55ICsgNjApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh1aS50ZXh0LCB1aS54ICsgMTUwLCB1aS55ICsgNTApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29sbGlkZSA9IChlY3MsIGN0eCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDb2xsaWRhYmxlID0gZWNzLnNlbGVjdChDb2xsaWRhYmxlLCBTcGVlZCwgUG9zKVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRXYWxscyA9IGVjcy5zZWxlY3QoV2FsbClcclxuICAgIGxldCBjb2xsaWRlZCA9IGZhbHNlXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENvbGxpZGFibGUuaXRlcmF0ZSgoZW50aXR5Q29sbGlkYWJsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gZW50aXR5Q29sbGlkYWJsZS5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBlbnRpdHlDb2xsaWRhYmxlLmdldChTcGVlZClcclxuICAgICAgICAgICAgICAgIGlmKHNwZWVkLnggPT09IDAgJiYgc3BlZWQueSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gZW50aXR5Q29sbGlkYWJsZS5nZXQoQ29sbGlkYWJsZSlcclxuICAgICAgICAgICAgICAgIGlmIChwb3MueCArIGJveC54TWluIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy54ID0gLWJveC54TWluICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkLnggPSAtc3BlZWQueFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvcy55ICsgYm94LnlNaW4gPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSAtYm94LnlNaW4gKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQueSA9IC1zcGVlZC55XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zLnggKyBib3gueE1heCA+IFhfVElMRV9DT1VOVCAtIDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggPSBYX1RJTEVfQ09VTlQgLSAxIC0gYm94LnhNYXhcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZC54ID0gLXNwZWVkLnhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3MueSArIGJveC55TWF4ID4gWV9USUxFX0NPVU5UIC0gMSApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3MueSA9IFlfVElMRV9DT1VOVCAtIDEgLSBib3gueU1heFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkLnkgPSAtc3BlZWQueVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29sbGlkZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRXYWxscy5pdGVyYXRlKChlbnRpdHlXYWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9BQUJCIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdhbGwgPSBlbnRpdHlXYWxsLmdldChXYWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZQb3MgPSBwb3MuY2xvbmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGZQb3MuYWRkKHNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZlBvcy54ICsgYm94LnhNYXggPiB3YWxsLnggIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBmUG9zLnggKyBib3gueE1heCA8IHdhbGwueCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZQb3MueSArIGJveC55TWF4ID4gd2FsbC55ICYmIGZQb3MueSArIGJveC55TWF4IDwgd2FsbC55ICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm90dG9tIHJpZ2h0IHBvaW50IGNvbGxpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNwZWVkLmFuZ2xlKCkgPCBuZXcgVmVjdG9yKChmUG9zLnggKyBib3gueE1heCkgLSB3YWxsLngsIChmUG9zLnkgKyBib3gueU1heCkgLSB3YWxsLnkpLmFuZ2xlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIHZlcnRpY2FsIHdhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MueCA9IHdhbGwueCAtIGJveC54TWF4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnkgKz0gc3BlZWQueSAqICgoZlBvcy54IC0gcG9zLngpICAvIHNwZWVkLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQueCA9IC1zcGVlZC54XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ5IGhvcml6b250YWwgd2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy55ID0gd2FsbC55IC0gIGJveC55TWF4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnggKz0gc3BlZWQueCAqICgoZlBvcy55IC0gcG9zLnkpICAvIHNwZWVkLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQueSA9IC1zcGVlZC55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihmUG9zLnkgKyBib3gueU1pbiA+IHdhbGwueSAmJiBmUG9zLnkgKyBib3gueU1pbiA8IHdhbGwueSArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvcCByaWdodCBwb2ludCBjb2xsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzcGVlZC5hbmdsZSgpID4gbmV3IFZlY3RvcigoZlBvcy54ICsgYm94LnhNYXgpIC0gd2FsbC54LCAoZlBvcy55ICsgYm94LnlNYXgpIC0gKHdhbGwueSArIDEpKS5hbmdsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCBob3JpenRvbmEgd2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy55ID0gd2FsbC55ICsgYm94LnhNYXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MueCArPSBzcGVlZC54ICogKChmUG9zLnkgLSBwb3MueSkgIC8gc3BlZWQueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZC55ID0gLXNwZWVkLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCB2ZXJ0aWNhbCB3YWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnggPSB3YWxsLnggLSBib3gueE1heFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IHNwZWVkLnkgKiAoKGZQb3MueCAtIHBvcy54KSAgLyBzcGVlZC54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkLnggPSAtc3BlZWQueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmUG9zLnggKyBib3gueE1pbiA+IHdhbGwueCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGZQb3MueCArIGJveC54TWluIDwgKHdhbGwueCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZlBvcy55ICsgYm94LnlNYXggPiB3YWxsLnkgJiYgZlBvcy55ICsgYm94LnlNYXggPCB3YWxsLnkgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm90dG9tIGxlZnQgcG9pbnQgY29sbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNwZWVkLmFuZ2xlKCkgPiBuZXcgVmVjdG9yKChmUG9zLnggKyBib3gueE1pbikgLSAod2FsbC54ICsgMSksIChmUG9zLnkgKyBib3gueU1heCkgLSB3YWxsLnkpLmFuZ2xlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmVydGljYWwgd2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MueCA9IHdhbGwueCArIDEgKyBib3gueE1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MueSArPSBzcGVlZC55ICogKChmUG9zLnggLSBwb3MueCkgIC8gc3BlZWQueClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQueCA9IC1zcGVlZC54XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhveml6b250YWwgd2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHdhbGwueSAtIGJveC55TWF4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ICs9IHNwZWVkLnggKiAoKGZQb3MueSAtIHBvcy55KSAgLyBzcGVlZC55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZC55ID0gLXNwZWVkLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGZQb3MueSArIGJveC55TWluID4gd2FsbC55ICYmIGZQb3MueSArIGJveC55TWluIDwgd2FsbC55ICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvcCBsZWZ0IHBvaW50IGNvbGxpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzcGVlZC5hbmdsZSgpIDwgbmV3IFZlY3RvcigoZlBvcy54ICsgYm94LnhNaW4pIC0gKHdhbGwueCArIDEpLCAoZlBvcy55ICsgYm94LnlNaW4pIC0gKHdhbGwueSArIDEpKS5hbmdsZSgpKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2ZXJ0aWNhbCB3YWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gd2FsbC54ICsgYm94LnhNYXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnkgKz0gc3BlZWQueSAqICgoZlBvcy54IC0gcG9zLngpICAvIHNwZWVkLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkLnggPSAtc3BlZWQueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBob3ppem9udGFsIHdhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB3YWxsLnkgKyBib3gueU1heFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MueCArPSBzcGVlZC54ICogKChmUG9zLnkgLSBwb3MueSkgIC8gc3BlZWQueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQueSA9IC1zcGVlZC55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKCFjb2xsaWRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy5hZGQoc3BlZWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGl2ZUJvbWJCYWcgPSAoZWNzLCBjdHgsIHRpbGVTaXplKSA9PiB7XHJcbiAgICBjb25zdCBwb3MgPSBuZXcgVmVjdG9yKFhfVElMRV9DT1VOVCAvIDIgKiB0aWxlU2l6ZSAtIDMwMCwgWV9USUxFX0NPVU5UICogdGlsZVNpemUgLSA1MClcclxuXHJcbiAgICBjb25zdCBib21iQmFnU2VsZWN0b3IgPSBlY3Muc2VsZWN0KEJvbWJCYWcpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgICAgICBib21iQmFnU2VsZWN0b3IuaXRlcmF0ZSgoYm9tYkJhZ0VudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9tYkJhZyA9IGJvbWJCYWdFbnRpdHkuZ2V0KEJvbWJCYWcpXHJcbiAgICAgICAgICAgICAgICBib21iQmFnLnJvbGxUaW1lICs9IGR0XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGJvbWJCYWcucm9sbFRpbWUgPiBCT01CQUdfUk9MTF9EVVJBVElPTiAmJiBib21iQmFnLmlzUm9sbGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvbWJCYWcucm9sbCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSBib21iQmFnLmJvbWJTbG90cy5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9tYlNsb3QgPSBib21iQmFnLmJvbWJTbG90c1tpLTFdXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd0JvbWJDYXJkKHBvcywgYm9tYlNsb3QsIGksIGN0eCwgYm9tYkJhZy5pc1JvbGxpbmcsIGJvbWJCYWcucm9sbFRpbWUgLyBCT01CQUdfUk9MTF9EVVJBVElPTilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWJvbWJCYWcuaXNBdmFpbGFibGUoKSAmJiBib21iQmFnLmlzQWxsRXhwbG9kZWQoKSAmJiAhYm9tYkJhZy5pc1JvbGxpbmcgJiYgYm9tYkJhZy5jYW5Sb2xsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9tYkJhZy5pbml0Um9sbCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpdmVCbGFzdCA9IChlY3MsIGN0eCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBlY3Muc2VsZWN0KEJsYXN0KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGUgOiAoZHQpID0+IHsgIFxyXG4gICAgICAgICAgICBzZWxlY3Rvci5pdGVyYXRlKChibGFzdEVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxhc3QgPSBibGFzdEVudGl0eS5nZXQoQmxhc3QpXHJcbiAgICAgICAgICAgICAgICBpZiAocGVyZm9ybWFuY2Uubm93KCkgLSBibGFzdC5hdCA+IEJMQVNUX0RVUkFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxhc3RFbnRpdHkuZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gYmxhc3RFbnRpdHkuZ2V0KFBvcylcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyMDAsIDMwLCAzMCwgLjcpXCJcclxuICAgICAgICAgICAgICAgIGN0eC5hcmMocG9zLnggKiB0aWxlU2l6ZSwgcG9zLnkgKiB0aWxlU2l6ZSwgQkxBU1RfUkFESVVTICogdGlsZVNpemUsIDAsIHBpMilcclxuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKVxyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpdmVEb29ycyA9IChlY3MsIGN0eCkgPT4ge1xyXG4gICAgY29uc3QgZG9vclNlbGVjdG9yID0gZWNzLnNlbGVjdChEb29yLCBQb3MpXHJcbiAgICBjb25zdCBwbGF5ZXJTZWxlY3RvciA9IGVjcy5zZWxlY3QoUGxheWVyLCBQb3MpXHJcbiAgICBjb25zdCBzcGF3bmVyU2VsZWN0b3IgPSBlY3Muc2VsZWN0KFNwYXduKVxyXG4gICAgbGV0IHJlbWFpbmluZyA9IDBcclxuICAgIGxldCBoYXNIb3N0aWxlcyA9IGZhbHNlXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICByZW1haW5pbmcgPSAwXHJcbiAgICAgICAgICAgIHNwYXduZXJTZWxlY3Rvci5pdGVyYXRlKChzcGF3bmVyRW50aXRpZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGhhc0hvc3RpbGVzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nICs9IHNwYXduZXJFbnRpdGllcy5nZXQoU3Bhd24pLnJlbWFpbmluZygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHBsYXllclNlbGVjdG9yLml0ZXJhdGUoKHBsYXllckVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSBwbGF5ZXJFbnRpdHkuZ2V0KFBvcylcclxuICAgICAgICAgICAgICAgIGRvb3JTZWxlY3Rvci5pdGVyYXRlKChkb29yRW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zID0gZG9vckVudGl0eS5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT3BlbiA9IHJlbWFpbmluZyA9PT0gMCAmJiBoYXNIb3N0aWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBpc09wZW4gPyBcIiMzMWNkMzlcIiA6IFwiIzllMzMzZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHBvcy54KSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6Ly90b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCg1ICogdGlsZVNpemUsIDAgKiB0aWxlU2l6ZSwgNCAqIHRpbGVTaXplLCB0aWxlU2l6ZSk7IGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogLy9yaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNPcGVuICYmIGlzUGxheWVyT3ZlcmxhcChwbGF5ZXJQb3MsIG5ldyBWZWN0b3IoWF9USUxFX0NPVU5UIC0gMSwgMyksIG5ldyBWZWN0b3IoMSwgNCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWFwTG9hZGVyLm5leHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyUG9zLnggPSAxXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNPcGVuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoKFhfVElMRV9DT1VOVCAtIDEpICogdGlsZVNpemUsIDQgKiB0aWxlU2l6ZSwgdGlsZVNpemUsIDQgKiB0aWxlU2l6ZSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJvd1BvcyA9IG5ldyBQb3MoKFhfVElMRV9DT1VOVCAtIDMpICogdGlsZVNpemUsIDUgKiB0aWxlU2l6ZSArIHRpbGVTaXplIC8gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKGFycm93UG9zLngsIGFycm93UG9zLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhhcnJvd1Bvcy54ICsgdGlsZVNpemUsIGFycm93UG9zLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhhcnJvd1Bvcy54ICsgdGlsZVNpemUsIGFycm93UG9zLnkgLSB0aWxlU2l6ZSAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhhcnJvd1Bvcy54ICsgdGlsZVNpemUgKiAyLCBhcnJvd1Bvcy55ICsgdGlsZVNpemUgLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oYXJyb3dQb3MueCArIHRpbGVTaXplLCBhcnJvd1Bvcy55ICsgdGlsZVNpemUgKyB0aWxlU2l6ZSAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhhcnJvd1Bvcy54ICt0aWxlU2l6ZSwgYXJyb3dQb3MueSArIHRpbGVTaXplKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKGFycm93UG9zLngsIGFycm93UG9zLnkgKyB0aWxlU2l6ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiAvL2JvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDUgKiB0aWxlU2l6ZSwgKFlfVElMRV9DT1VOVCAtIDEpICogdGlsZVNpemUsIDQgKiB0aWxlU2l6ZSwgdGlsZVNpemUpOyBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IC8vbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAgKiB0aWxlU2l6ZSwgMyAqIHRpbGVTaXplLCB0aWxlU2l6ZSwgNCAqIHRpbGVTaXplKTsgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpdmVIcCA9IChlY3MsIGN0eCwgY3YpID0+IHtcclxuICAgIGNvbnN0IHBsYXllclNlbGVjdG9yID0gZWNzLnNlbGVjdChQbGF5ZXIpXHJcbiAgICBjb25zdCB1aVBvcyA9IG5ldyBWZWN0b3IoKFhfVElMRV9DT1VOVCAvIDIgKiB0aWxlU2l6ZSkgLSAyMTAsIDEwKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllclNlbGVjdG9yLml0ZXJhdGUoKHBsYXllckVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyQ29tcG9uZW50ID0gcGxheWVyRW50aXR5LmdldChQbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXJDb21wb25lbnQuaHAgPD0gMCAmJiB3aW5kb3cuY3VycmVudFNjcmVlbi5pc0dhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXBMb2FkZXIudW5sb2FkKGVjcylcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudFNjcmVlbi51bmxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50U2NyZWVuID0gZGllU2NyZWVuKGVjcywgdGlsZVNpemUsIGN2KVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50U2NyZWVuLmxvYWQoKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QodWlQb3MueCwgdWlQb3MueSwgNDIwLCA1MClcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCh1aVBvcy54ICsgMTAsIHVpUG9zLnkgKyAxMCwgcGxheWVyQ29tcG9uZW50LmhwICogNCwgMzApXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZvbnQ9JzQwMCAyMnB4IEFyaWFsJztcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXCJIUFwiLCB1aVBvcy54ICsgMTcgLCB1aVBvcy55ICsgMzUpXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiSFBcIiwgdWlQb3MueCArIDE1LCB1aVBvcy55ICsgMzMpXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpdmVFeHBsb3Npb25zID0gKGVjcywgY3R4KSA9PiB7XHJcbiAgICBjb25zdCBleHBsb3Npb25TZWxlY3RvciA9IGVjcy5zZWxlY3QoRXhwbG9zaW9uLCBQb3MpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZTogKGR0KSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGxvc2lvblNlbGVjdG9yLml0ZXJhdGUoKGV4cGxvc2lvbkVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwbG9zaW9uID0gZXhwbG9zaW9uRW50aXR5LmdldChFeHBsb3Npb24pXHJcbiAgICAgICAgICAgICAgICBleHBsb3Npb24ucmVtYWluaW5nIC09IGR0XHJcbiAgICAgICAgICAgICAgICBpZihleHBsb3Npb24ucmVtYWluaW5nIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGxvc2lvbkVudGl0eS5lamVjdCgpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGV4cGxvc2lvbkVudGl0eS5nZXQoUG9zKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goZXhwbG9zaW9uLmJvbWJUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQVRPTUlDX0JPTUJfVFlQRTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBUVVJUTEVfQk9NQl9UWVBFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIERFVEVDVF9CT01CX1RZUEU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBsb3Npb24ucG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5hcmMocG9pbnQueCArIHBvcy54ICogdGlsZVNpemUsIHBvaW50LnkgKyBwb3MueSAqIHRpbGVTaXplLCBFWFBMT1NJT05fU0ZYX1NJWkUgKiB0aWxlU2l6ZSwgMCwgcGkyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyNTUsMjU1LDI1NSwkeyAxIC0gZXhwbG9zaW9uLnJlbWFpbmluZyAvIEVYUExPU0lPTl9TRlhfRFVSQVRJT059KWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQubXVsdGlwbHlTY2FsYXIoMS4zMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGUkVFWkVfQk9NQl9UWVBFOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyhwb3MueCAqIHRpbGVTaXplLCBwb3MueSAqIHRpbGVTaXplLCAyICogdGlsZVNpemUsIDAsIHBpMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgwLDAsMjU1LCR7IDEgLSBleHBsb3Npb24ucmVtYWluaW5nIC8gRVhQTE9TSU9OX1NGWF9EVVJBVElPTn0pYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGTEFTSF9CT01CX1RZUEU6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguYXJjKHBvcy54ICogdGlsZVNpemUsIHBvcy55ICogdGlsZVNpemUsIDIgKiB0aWxlU2l6ZSwgMCwgcGkyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwyNTUsMjU1LCAxKWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZnhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGV4cGxvc2lvbi5ib21iVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBBVE9NSUNfQk9NQl9UWVBFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBERVRFQ1RfQk9NQl9UWVBFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBUVVJUTEVfQk9NQl9UWVBFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdiA9IGV4cGxvc2lvbi5yZW1haW5pbmcgLyBFWFBMT1NJT05fU0ZYX0RVUkFUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyhwb3MueCAqIHRpbGVTaXplLCBwb3MueSAqIHRpbGVTaXplLCAoMSthZHYpICogdGlsZVNpemUgKiAyLCAwLCBwaTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoMjU1LDI1NSwyNTUsJHsoYWR2KSAqIDAuNX0pYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyhwb3MueCAqIHRpbGVTaXplLCBwb3MueSAqIHRpbGVTaXplLCAoMS1hZHYpICogdGlsZVNpemUgKiAzLCAwLCBwaTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGl2ZUV4cGxvZGFibGUgPSAoZWNzLCBjdHgpID0+IHtcclxuICAgIGNvbnN0IGV4cGxvZGFibGVTZWxlY3RvciA9IGVjcy5zZWxlY3QoRXhwbG9kYWJsZSwgUG9zKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGU6IChkdCkgPT4ge1xyXG4gICAgICAgICAgICBleHBsb2RhYmxlU2VsZWN0b3IuaXRlcmF0ZSgoZXhwbG9kYWJsZUVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gZXhwbG9kYWJsZUVudGl0eS5nZXQoUG9zKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwbG9kYWJsZSA9IGV4cGxvZGFibGVFbnRpdHkuZ2V0KEV4cGxvZGFibGUpXHJcbiAgICAgICAgICAgICAgICBleHBsb2RhYmxlLmJsaW5rKytcclxuICAgICAgICAgICAgICAgIGRyYXdFeHBsb2RhYmxlKGN0eCwgcG9zLCBleHBsb2RhYmxlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=