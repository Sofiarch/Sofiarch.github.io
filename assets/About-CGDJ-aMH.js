import{i as G,f as B,a as O,J as H,u as D,r as f,M as P,b as q,c as J,d as $,e as I,g as X,j as r,L as K,t as Q,m as A}from"./index-DTlG5N9_.js";import{R as Y,T as Z,P as ee,M as te}from"./Triangle-DfWMHKQ0.js";function re(...e){const t=!Array.isArray(e[0]),o=t?0:-1,s=e[0+o],n=e[1+o],l=e[2+o],i=e[3+o],d=G(n,l,i);return t?d(s):d}function ne(e,t,o){const s=e.get();let n=null,l=s,i;const d=typeof s=="string"?s.replace(/[\d.-]/g,""):void 0,a=()=>{n&&(n.stop(),n=null)},u=()=>{a(),n=new H({keyframes:[R(e.get()),R(l)],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...o,onUpdate:i})};if(e.attach((c,m)=>{l=c,i=v=>m(M(v,d)),B.postRender(()=>{u(),e.events.animationStart?.notify(),n?.then(()=>{e.events.animationComplete?.notify()})})},a),O(t)){const c=t.on("change",v=>e.set(M(v,d))),m=e.on("destroy",c);return()=>{c(),m()}}return a}function M(e,t){return t?e+t:e}function R(e){return typeof e=="number"?e:parseFloat(e)}function L(e){const t=D(()=>q(e)),{isStatic:o}=f.useContext(P);if(o){const[,s]=f.useState(e);f.useEffect(()=>t.on("change",s),[])}return t}function W(e,t){const o=L(t()),s=()=>o.set(t());return s(),J(()=>{const n=()=>B.preRender(s,!1,!0),l=e.map(i=>i.on("change",n));return()=>{l.forEach(i=>i()),$(s)}}),o}function oe(e){I.current=[],e();const t=W(I.current,e);return I.current=void 0,t}function se(e,t,o,s){if(typeof e=="function")return oe(e);const l=re(t,o,s);return Array.isArray(e)?F(e,l):F([e],([i])=>l(i))}function F(e,t){const o=D(()=>[]);return W(e,()=>{o.length=0;const s=e.length;for(let n=0;n<s;n++)o[n]=e[n].get();return t(o)})}function ie(e,t={}){const{isStatic:o}=f.useContext(P),s=()=>O(e)?e.get():e;if(o)return se(s);const n=L(s());return f.useInsertionEffect(()=>ne(n,e,t),[n,JSON.stringify(t)]),n}const ae={some:0,all:1};function le(e,t,{root:o,margin:s,amount:n="some"}={}){const l=X(e),i=new WeakMap,d=u=>{u.forEach(c=>{const m=i.get(c.target);if(c.isIntersecting!==!!m)if(c.isIntersecting){const v=t(c.target,c);typeof v=="function"?i.set(c.target,v):a.unobserve(c.target)}else typeof m=="function"&&(m(c),i.delete(c.target))})},a=new IntersectionObserver(d,{root:o,rootMargin:s,threshold:typeof n=="number"?n:ae[n]});return l.forEach(u=>a.observe(u)),()=>a.disconnect()}function _(e,{root:t,margin:o,amount:s,once:n=!1,initial:l=!1}={}){const[i,d]=f.useState(l);return f.useEffect(()=>{if(!e.current||n&&i)return;const a=()=>(d(!0),n?void 0:()=>d(!1)),u={root:t&&t.current||void 0,margin:o,amount:s};return le(e.current,a,u)},[t,e,o,n,s]),i}const E={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function V(e){e.length===4&&(e=e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t||console.warn(`Unable to convert hex string ${e} to rgb values`),[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}function ce(e){return e=parseInt(e),[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function z(e){return e===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(e)?e[0]==="#"?V(e):E[e.toLowerCase()]?V(E[e.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):ce(e)}class T extends Array{constructor(t){return Array.isArray(t)?super(...t):super(...z(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(t){this[0]=t}set g(t){this[1]=t}set b(t){this[2]=t}set(t){return Array.isArray(t)?this.copy(t):this.copy(z(...arguments))}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this}}const ue=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,de=`#version 300 es
precision mediump float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  
  // FIX: Increased intensity from 0.6 to 0.8 to make it more visible
  float intensity = 0.8 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;function fe(e){const{colorStops:t=["#5227FF","#7cff67","#5227FF"],amplitude:o=1,blend:s=.5}=e,n=f.useRef(e);n.current=e;const l=f.useRef(null);return f.useEffect(()=>{const i=l.current;if(!i)return;const d=new Y({alpha:!0,premultipliedAlpha:!0,antialias:!1,dpr:.5}),a=d.gl;a.clearColor(0,0,0,0),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.canvas.style.backgroundColor="transparent";let u;function c(){if(!i)return;const p=i.offsetWidth,x=i.offsetHeight;d.setSize(p,x),u&&(u.uniforms.uResolution.value=[a.canvas.width,a.canvas.height])}window.addEventListener("resize",c);const m=new Z(a);m.attributes.uv&&delete m.attributes.uv;const v=t.map(p=>{const x=new T(p);return[x.r,x.g,x.b]});u=new ee(a,{vertex:ue,fragment:de,uniforms:{uTime:{value:0},uAmplitude:{value:o},uColorStops:{value:v},uResolution:{value:[a.canvas.width,a.canvas.height]},uBlend:{value:s}}});const N=new te(a,{geometry:m,program:u});i.appendChild(a.canvas);let h=0,y=!0;const j=new IntersectionObserver(([p])=>{y=p.isIntersecting,!y&&h?(cancelAnimationFrame(h),h=0):y&&!h&&(h=requestAnimationFrame(b))},{threshold:0});j.observe(i);const b=p=>{if(!y)return;h=requestAnimationFrame(b);const{time:x=p*.01,speed:g=1}=n.current;u.uniforms.uTime.value=x*g*.1,u.uniforms.uAmplitude.value=n.current.amplitude??1,u.uniforms.uBlend.value=n.current.blend??s;const w=n.current.colorStops??t;u.uniforms.uColorStops.value=w.map(k=>{const S=new T(k);return[S.r,S.g,S.b]}),d.render({scene:N})};return h=requestAnimationFrame(b),c(),()=>{j.disconnect(),cancelAnimationFrame(h),window.removeEventListener("resize",c),i&&a.canvas.parentNode===i&&i.removeChild(a.canvas),a.getExtension("WEBGL_lose_context")?.loseContext()}},[o]),r.jsx("div",{ref:l,className:"w-full h-full"})}function U({to:e,from:t=0,direction:o="up",delay:s=0,duration:n=2,className:l="",startWhen:i=!0,separator:d="",onStart:a,onEnd:u}){const c=f.useRef(null),m=L(o==="down"?e:t),v=20+40*(1/n),N=100*(1/n),h=ie(m,{damping:v,stiffness:N}),y=_(c,{once:!0,margin:"0px"}),j=x=>{const g=x.toString();if(g.includes(".")){const w=g.split(".")[1];if(parseInt(w)!==0)return w.length}return 0},b=Math.max(j(t),j(e)),p=f.useCallback(x=>{const g=b>0,w={useGrouping:!!d,minimumFractionDigits:g?b:0,maximumFractionDigits:g?b:0},k=Intl.NumberFormat("en-US",w).format(x);return d?k.replace(/,/g,d):k},[b,d]);return f.useEffect(()=>{c.current&&(c.current.textContent=p(o==="down"?e:t))},[t,e,o,p]),f.useEffect(()=>{if(y&&i){typeof a=="function"&&a();const x=setTimeout(()=>{m.set(o==="down"?t:e)},s*1e3),g=setTimeout(()=>{typeof u=="function"&&u()},s*1e3+n*1e3);return()=>{clearTimeout(x),clearTimeout(g)}}},[y,i,m,o,t,e,s,a,u,n]),f.useEffect(()=>{const x=h.on("change",g=>{c.current&&(c.current.textContent=p(g))});return()=>x()},[h,p]),r.jsx("span",{className:l,ref:c})}const C=({children:e,delay:t=0,className:o=""})=>r.jsx(A.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"0px",amount:.1},transition:{duration:.8,delay:t,ease:"easeOut"},className:o,children:e}),me=({to:e,duration:t})=>{const[o,s]=f.useState(!1),n=f.useRef(null),l=_(n,{once:!0,margin:"0px"});return f.useEffect(()=>{if(l){const i=setTimeout(()=>s(!0),t*1e3);return()=>clearTimeout(i)}},[l,t]),r.jsx("span",{ref:n,className:"inline-flex items-center justify-center",children:o?r.jsx(A.span,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:300},children:"∞"}):r.jsx(U,{from:0,to:e,duration:t,separator:",",className:"inline-block"})})};function he(){const{language:e}=f.useContext(K),t=Q[e].about,o=[r.jsxs("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 12l2 2 4-4"})]}),r.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),r.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),r.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),r.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),r.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})],s=[{label:t.stats.projects,value:50,suffix:"+"},{label:t.stats.clients,value:99.9,suffix:"%"},{label:t.stats.experience,value:4,suffix:"+"},{label:t.stats.coffee,value:1e5,isInfinite:!0}];return r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"relative pt-32 pb-40 px-6 min-h-[90vh] overflow-hidden flex flex-col justify-center items-center bg-white dark:bg-black",children:[r.jsx("div",{className:"absolute inset-0 z-0 opacity-60",children:r.jsx(fe,{colorStops:["#00c3ff","#3a8dff","#5227FF"],blend:.5,amplitude:1.2,speed:.5})}),r.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[r.jsx(A.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"font-display text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-2xl",children:t.title}),r.jsx(C,{delay:.2,children:r.jsx("p",{className:"text-xl md:text-2xl text-gray-600 dark:text-blue-200/80 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg",children:t.subtitle})})]})]}),r.jsx("section",{className:"py-24 px-6 bg-gray-50 dark:bg-black relative z-10",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mb-24",children:[r.jsx(C,{delay:.1,className:"h-full",children:r.jsxs("div",{className:"bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-10 rounded-2xl h-full hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white font-display mb-6",children:t.mission.title}),r.jsxs("div",{className:"space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed",children:[r.jsx("p",{children:t.mission.desc1}),r.jsx("p",{children:t.mission.desc2})]})]})}),r.jsx(C,{delay:.2,className:"h-full",children:r.jsxs("div",{className:"bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-10 rounded-2xl h-full hover:border-purple-500/30 transition-colors shadow-sm dark:shadow-none",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white font-display mb-6",children:t.vision.title}),r.jsxs("div",{className:"space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed",children:[r.jsx("p",{children:t.vision.desc1}),r.jsx("p",{children:t.vision.desc2})]})]})})]}),r.jsxs("div",{className:"mb-24",children:[r.jsxs(C,{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-display mb-4",children:t.values.title}),r.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-lg",children:t.values.subtitle}),r.jsx("div",{className:"h-1 w-20 bg-blue-600 rounded-full mx-auto mt-6"})]}),r.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.values.items.map((n,l)=>r.jsx(C,{delay:l*.1,className:"h-full",children:r.jsxs("div",{className:"bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-8 rounded-2xl h-full flex flex-col items-center text-center hover:bg-gray-100 dark:hover:bg-white/5 transition-all group shadow-sm dark:shadow-none",children:[r.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300",children:o[l]}),r.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-3 font-display",children:n.title}),r.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm leading-relaxed",children:n.desc})]})},l))})]}),r.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-white/10",children:s.map((n,l)=>r.jsxs(C,{delay:l*.1,className:"text-center p-8 bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors mt-8 shadow-sm dark:shadow-none",children:[r.jsx("div",{className:"text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 font-display mb-2 flex justify-center items-center gap-1",children:n.isInfinite?r.jsx(me,{to:n.value,duration:5}):n.isStatic?r.jsx("span",{children:n.value}):r.jsxs(r.Fragment,{children:[r.jsx(U,{from:0,to:n.value,separator:",",direction:"up",duration:2,className:"inline-block"}),n.suffix]})}),r.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold",children:n.label})]},l))})]})})]})}export{he as default};
