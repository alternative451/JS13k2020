!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t){t.exports=JSON.parse("{}")},function(t,e,s){"use strict";s.r(e);const i=Math;function n(t){return i.sin(6.283184*t)}var r=[n,function(t){return n(t)<0?-1:1},function(t){return t%1-.5},function(t){var e=t%1*4;return e<2?e-1:3-e}];function o(t){return.00390625*i.pow(1.059463094,t-128)}function a(t){return{left:new Float32Array(t),right:new Float32Array(t)}}function h(t,e,s,i){for(var n=s.fx_delay_time*i>>1,r=s.fx_delay_amt/255,o=0;o<e-n;){var a=o,h=o+n;t.left[h]+=t.right[a]*r,t.right[h]+=t.left[a]*r,o++}}function c(t,e){var s=t.createBuffer(2,e.left.length,44100);return s.getChannelData(0).set(e.left),s.getChannelData(1).set(e.right),s}var l=function(t,e,s){this.ctx=t,this.instr=e,this.rowLen=s||5605,this.osc_lfo=r[e.lfo_waveform],this.osc1=r[e.osc1_waveform],this.osc2=r[e.osc2_waveform],this.attack=e.env_attack,this.sustain=e.env_sustain,this.release=e.env_release,this.panFreq=i.pow(2,e.fx_pan_freq-8)/this.rowLen,this.lfoFreq=i.pow(2,e.lfo_freq-8)/this.rowLen};l.prototype._genSound=function(t,e,s){for(var r=0,a=0,h=o(t+12*(this.instr.osc1_oct-8)+this.instr.osc1_det)*(1+8e-4*this.instr.osc1_detune),c=o(t+12*(this.instr.osc2_oct-8)+this.instr.osc2_det)*(1+8e-4*this.instr.osc2_detune),l=this.instr.fx_resonance/255,u=0,d=0,f=e.left.length,x=this.attack+this.sustain+this.release-1;x>=0;--x){var y=x+s,p=this.osc_lfo(y*this.lfoFreq)*this.instr.lfo_amt/512+.5,m=1;x<this.attack?m=x/this.attack:x>=this.attack+this.sustain&&(m-=(x-this.attack-this.sustain)/this.release);var g=h;this.instr.lfo_osc1_freq&&(g+=p),this.instr.osc1_xenv&&(g*=m*m),r+=g;var w=this.osc1(r)*this.instr.osc1_vol;g=c,this.instr.osc2_xenv&&(g*=m*m),a+=g,w+=this.osc2(a)*this.instr.osc2_vol,this.instr.noise_fader&&(w+=(2*i.random()-1)*this.instr.noise_fader*m),w*=m/255;var v=this.instr.fx_freq;this.instr.lfo_fx_freq&&(v*=p);var b=l*(w-d)-(u+=(v=1.5*i.sin(3.141592*v/44100))*d);switch(d+=v*b,this.instr.fx_filter){case 1:w=b;break;case 2:w=u;break;case 3:w=d;break;case 4:w=u+b}g=n(y*this.panFreq)*this.instr.fx_pan_amt/512+.5,w*=.00476*this.instr.env_master,y<f&&(e.left[y]+=w*(1-g),e.right[y]+=w*g)}},l.prototype._createAudioBuffer=function(t,e){var s=this.attack+this.sustain+this.release-1+32*this.rowLen,i=a(s);this._genSound(t,i,0),h(i,s,this.instr,this.rowLen),e(c(this.ctx,i))};var u=function(t,e){this.ctx=t,this.song=e,this.waveSize=44100*e.songLen};u.prototype._generateTrack=function(t,e,s){var i=a(this.waveSize),n=this.waveSize,r=this.song.rowLen,o=this.song.endPattern,c=new l(this.ctx,t,r),u=0,d=0,f=0,x=function(){for(var e=Date.now();;)if(32!==f){if(d===o-1)return y();var s=t.p[d];if(s){var n=t.c[s-1].n[f];n&&c._genSound(n,i,u)}if(u+=r,f+=1,Date.now()-e>33)return void setTimeout(x,0)}else f=0,d+=1},y=function(){h(i,n,t,r);for(var o=0;o<n;o++)e.left[o]+=i.left[o];for(o=0;o<n;o++)e.right[o]+=i.right[o];s()};x()},u.prototype._createAudioBuffer=function(t){var e=this,s=a(this.waveSize),i=0,n=function(){i<e.song.songData.length?(i+=1,e._generateTrack(e.song.songData[i-1],s,n)):t(c(e.ctx,s))};n()};new(window.webkitAudioContext||window.AudioContext);s(0);var d=[],f=[],p={},m="_sign",g="_mask";"undefined"!=typeof Symbol&&(m=Symbol(m),g=Symbol(g));var w=function(t,e){var s=e[t];if(!s)throw new Error("The component is not registered");return s},v=w.bind(null,m),b=w.bind(null,g),M=function(t){t.id&&d.forEach((function(e){return e.match(t)}))},_=1,S={},k=function(t){this.id=t||(_++).toString(36),this.components=Object.assign({},S),this.mask=0};k.prototype.add=function(){for(var t=this,e=[],s=arguments.length;s--;)e[s]=arguments[s];e.forEach((function(e){t.components[v(e.constructor)]=e,t.mask|=b(e.constructor)})),M(this)},k.prototype.remove=function(){for(var t=this,e=[],s=arguments.length;s--;)e[s]=arguments[s];e.forEach((function(e){var s=v(e),i=t.components[s];i&&(i.destructor&&i.destructor(),delete t.components[s],t.mask&=~b(e))})),M(this)},k.prototype.has=function(t){return v(t)in this.components},k.prototype.get=function(t){return this.components[t[m]]},k.prototype.eject=function(){!function(t){var e=t.components;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=e[s];i&&i.destructor&&i.destructor()}d.forEach((function(e){return e.remove(t)})),delete p[t.id],t.id=0}(this)};var A=function(t,e){this.entity=t,this.prev=null,this.next=e},P=function(t){if(!t)throw new Error("Empty selector");for(var e in this.mask=t,this.map={},this.list=null,this.length=0,p)Object.prototype.hasOwnProperty.call(p,e)&&this.match(p[e])};P.prototype.iterate=function(t){for(var e=this.list;e;)t(e.entity),e=e.next},P.prototype.match=function(t){(this.mask&t.mask)===this.mask?this.add(t):this.remove(t)},P.prototype.add=function(t){if(!this.map[t.id]){var e=new A(t,this.list);this.list&&(this.list.prev=e),this.list=e,this.map[t.id]=e,this.length++}},P.prototype.remove=function(t){var e=this.map[t.id];e&&(e.prev?e.prev.next=e.next:this.list=e.next,e.next&&(e.next.prev=e.prev),delete this.map[t.id],this.length--)};var E=0,C=performance||Date,D=C.now.bind(C),L={register:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];t.forEach((function(t){if(E>31)throw new Error("Components limit reached");if(!t[m]){var e=E.toString(36);S[e]=null,t[m]=e,t[g]=1<<E,E++}}))},process:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];t.forEach((function(t){return f.push(t)}))},create:function(t){var e=new k(t);if(p[e.id])throw new Error("The ID already exist");return p[e.id]=e,e},get:function(t){return p[t]},select:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var s=0;t.forEach((function(t){s|=b(t)}));for(var i=0;i<d.length;i++)if(d[i].mask===s)return d[i];var n=new P(s);return d.push(n),n},update:function(t){var e={};return f.forEach((function(s){var i=D();s.update(t),e[s.constructor.name]=D()-i})),e}};class U{constructor(t,e,s){this.x=t,this.y=e,this.z=s}setX(t){this.x=t}setY(t){this.y=t}setZ(t){this.z=t}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}setScalar(t){return this.x=t,this.y=t,this.z=t,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}divideScalar(t){return this.multiplyScalar(1/t)}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}clone(){return new U(this.x,this.y,this.z)}distance2D(t){return Math.hypot(this.x-t.x,this.y-t.y)}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}normalise(){return this.divideScalar(this.length())}set(t){this.x=t.x,this.y=t.y,this.z=t.z}toString(){return`${x} ${y} ${z}`}}const j=[{radius:1,timer:3e3},{radius:2,timer:3e3},{radius:3,timer:3e3},{radius:4,timer:3e3},{radius:5,timer:3e3},{radius:6,timer:3e3}],O=(t,e,s)=>Math.max(e,Math.min(s,t)),T=2*Math.PI;console.log(O(1,0,2));class q extends U{}class X extends U{}class F extends U{}class R{constructor(){this.cd=3e3,this.maxHostiles=3}}class N{constructor(){this.isUp=!1,this.isLeft=!1,this.isRight=!1,this.isDown=!1,this.isMain=!1,window.addEventListener("keydown",t=>{90!==t.keyCode&&87!==t.keyCode||(this.isUp=!0),32===t.keyCode&&(this.isMain=!0),81!==t.keyCode&&65!==t.keyCode||(this.isLeft=!0),68===t.keyCode&&(this.isRight=!0),83===t.keyCode&&(this.isDown=!0)}),window.addEventListener("keyup",t=>{90!==t.keyCode&&87!==t.keyCode||(this.isUp=!1),32===t.keyCode&&(this.isMain=!1),81!==t.keyCode&&65!==t.keyCode||(this.isLeft=!1),68===t.keyCode&&(this.isRight=!1),83===t.keyCode&&(this.isDown=!1)})}}class Y{constructor(){this.isUpPressed=!1,this.isDownPressed=!1}}class B{constructor(t,e){this.timer=t,this.radius=e}}class H{constructor(t){this.draw=(e,s,i)=>{e.fillStyle="#134",0===t?(e.beginPath(),e.arc(s.x,s.y,1*i/2,0,T),e.fill(),e.closePath()):2===t?(e.beginPath(),e.arc(s.x,s.y,.5*i/4,0,T),e.closePath(),e.fill()):(e.stroke(),e.fillRect(s.x-8,s.y-8,16,16))}}}class V{constructor(t){this.target=t}}class ${}class I{constructor(t,e,s,i){this.text=t,this.x=e,this.y=s,window.addEventListener("mousedown",t=>{Math.abs(t.pageX-e)<100&&Math.abs(t.pageY-s)<100&&i()})}}class W{constructor(t,e,s,i){this.xMin=t,this.yMin=e,this.xMax=s,this.yMax=i}}class G extends U{}class J{constructor(t){this.cd=t,this.isAvailable=!0,this.roll(),this.bomb=null}use(){const t=j[this.type];return this.bomb=new B(t.timer,t.radius),this.isAvailable=!1,this.bomb}roll(){this.type=Math.floor(6*Math.random()),this.isAvailable=!0}}class Z{constructor(t,e){this.maxSize=t,this.bombSlots=[];for(let s=0;s<t;s++)this.bombSlots.push(new J(e))}isAvailable(){for(let t=0;t<this.bombSlots.length;t++)if(this.bombSlots[t].isAvailable)return!0;return!1}isAllExploded(){for(let t=0;t<this.bombSlots.length;t++)if(!this.bombSlots[t].bomb)return!1;for(let t=0;t<this.bombSlots.length;t++)if(this.bombSlots[t].bomb.timer>0)return!1;return!0}useBomb(){for(let t=0;t<this.bombSlots.length;t++)if(this.bombSlots[t].isAvailable)return this.bombSlots[t].use()}roll(){for(let t=0;t<this.bombSlots.length;t++)this.bombSlots[t].roll()}}const K=(t,e)=>({load:()=>{t.create().add(new I("Start",e.width/2,e.height/2,()=>{window.currentScreen.unload(),window.currentScreen=Q(t,e)}))},unload:()=>{t.select(I).iterate(t=>{t.eject()})}}),Q=(t,e)=>{t.create().add(new Z(3,3e3)),t.create().add(new H(0),new q(10,5,0),new X(0,0,0),new F(0,0,0),new N,new $,new W(-.5,-.5,.5,.5)),t.create().add(new R,new q(1,5,0)),t.create().add(new Y,new N);const s=[0,0,19,0,0,9,19,9,5,5,6,5,7,5];for(let e=0;e<s.length;e+=2)t.create().add(new G(s[e],s[e+1]))};document.body.appendChild(document.createElement("canvas"));const tt=document.querySelector("canvas");tt.width=window.innerWidth,tt.height=window.innerHeight;const et=Math.min(tt.width/20,tt.height/10),st=tt.getContext("2d");L.register(q,X,F,N,Y,H,B,$,V,R,I,G,W,Z),L.process(((t,e,s)=>{const i=t.select(q,H),n=t.select(G);return{update:t=>{i.iterate(t=>{const i=t.get(q);t.get(H).draw(e,i.clone().multiplyScalar(s),s)}),n.iterate(t=>{const i=t.get(G);e.fillRect(i.x*s,i.y*s,s,s)})}}})(L,st,et),(t=>{const e=t.select(q,N),s=t.select(Y,N),i=t.select(Z);let n=!0;return{update:r=>{s.iterate(t=>{const{isUp:e,isDown:s}=t.get(N);e&&(t.get(Y).isUpPressed=!0),s&&(t.get(Y).isDownPressed=!0)}),e.iterate(e=>{const{isUp:s,isDown:r,isLeft:o,isRight:a,isMain:h}=e.get(N),c=e.get(q),l=e.get(X),u=e.get(F);u.setScalar(0),s?u.setY(-.01):l.y<0&&!r&&l.setY(O(.02+l.y,-Number.MAX_VALUE,0)),r?u.setY(.01):l.y>0&&!s&&l.setY(O(-.02+l.y,0,Number.MAX_VALUE)),o?u.setX(-.01):l.x<0&&!a&&l.setX(O(.02+l.x,-Number.MAX_VALUE,0)),a?u.setX(.01):l.x>0&&!o&&l.setX(O(-.02+l.x,0,Number.MAX_VALUE)),l.add(u).clampScalar(-.3,.3),c.add(l),h||n||(n=!0),h&&n&&(n=!1,i.iterate(e=>{const s=e.get(Z);if(s.isAvailable()){const e=s.useBomb();t.create().add(e,new q(c.x,c.y,0),new H(1))}}))})}}})(L),((t,e)=>{const s=t.select(Y);return{update:t=>{s.iterate(t=>{t.get(Y).isUpPressed||t.get(Y).isUpPressed?t.get(Y).isDownPressed&&t.get(Y).isUpPressed?e.fillText("Good Dog !",10,50):t.get(Y).isUpPressed&&e.fillText("Press DOWN",10,50):e.fillText("Press Up",10,50)})}}})(L,st),((t,e,s)=>{const i=t.select(B),n=t.select(V,q);return{update:t=>{i.iterate(i=>{const r=i.get(B),o=i.get(q);r.timer-=t;const a=o.x*s,h=o.y*s;e.beginPath(),e.arc(a,h,r.radius*s,0,T),e.closePath(),e.stroke(),e.fillText(Math.ceil(r.timer/1e3),a,h-20),r.timer<0&&(i.eject(),n.iterate(t=>{t.get(q).distance2D(o)<r.radius&&t.eject()}))})}}})(L,st,et),(t=>{const e=t.select(R);return{update:s=>{e.iterate(e=>{const i=e.get(q),n=e.get(R);n.cd-=s,n.cd<0&&n.maxHostiles>0&&(n.maxHostiles--,n.cd=3e3,t.create().add(new V,new q(i.x,i.y,i.z),new H(2)))})}}})(L),(t=>{const e=t.select(q,V),s=t.select(q,$);return{update:t=>{s.iterate(t=>{const s=t.get(q);e.iterate(t=>{const e=t.get(q),i=s.clone().sub(t.get(q)).normalise().multiplyScalar(.1);e.add(i)})})}}})(L),((t,e)=>{const s=t.select(I);return{update:()=>{s.iterate(t=>{const s=t.get(I);e.fillText(s.text,s.x,s.y)})}}})(L,st),(t=>{const e=t.select(W,X,q),s=t.select(G);return{update:()=>{e.iterate(t=>{const e=t.get(q),i=t.get(X),n=t.get(W);e.x+n.xMin<0&&(e.x=-n.xMin,i.x=-i.x),e.y+n.yMin<0&&(e.y=-n.yMin,i.y=-i.y),e.x-n.xMax>19&&(e.x=19+n.xMax,i.x=-i.x),e.y-n.yMax>9&&(e.y=9+n.yMax,i.y=-i.y),s.iterate(t=>{const s=t.get(G),r=e.clone();e.x+n.xMax>s.x&&e.x+n.xMax<s.x+1&&(e.y+n.yMax>s.y&&e.y+n.yMax<s.y+1||e.y+n.yMin>s.y&&e.y+n.yMin<s.y+1)&&(r.x=n.xMin+s.x,i.x=-i.x),e.x+n.xMin>s.x&&e.x+n.xMin<s.x+1&&(e.y+n.yMax>s.y&&e.y+n.yMax<s.y+1||e.y+n.yMin>s.y&&e.y+n.yMin<s.y+1)&&(r.x=n.xMax+s.x+1,i.x=-i.x),e.y+n.yMin>s.y&&e.y+n.yMin<s.y+1&&(e.x+n.xMin>s.x&&e.x+n.xMin<s.x+1||e.x+n.xMax>s.x&&e.x+n.xMax<s.x+1)&&(r.y=n.xMax+s.y+1,i.y=-i.y),e.y+n.xMax>s.y&&e.y+n.xMax<s.y+1&&(e.x+n.xMin>s.x&&e.x+n.xMin<s.x+1||e.x+n.xMax>s.x&&e.x+n.xMax<s.x+1)&&(r.y=n.xMin+s.y,i.y=-i.y),e.set(r)})})}}})(L),((t,e,s)=>{const i=t.select(Z);return{update(){i.iterate(t=>{const i=t.get(Z);for(let t=1;t<=i.bombSlots.length;t++){let n=i.bombSlots[t-1];e.fillRect(s.width-105*t,s.height-100,100,100),e.fillText(n.isAvailable,s.width-105*t,s.height-100),e.fillText(n.type,s.width-105*t,s.height-110)}!i.isAvailable()&&i.isAllExploded()&&i.roll()})}}})(L,st,tt)),window.currentScreen=K(L,tt),K(L,tt).load();let it,nt=0;const rt=()=>{it=performance.now(),tt.width+=0,L.update(it-nt),nt=it,requestAnimationFrame(rt)};rt()}]);