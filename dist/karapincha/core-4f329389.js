let t,e,n,l=0,s=!1,o=!1,r=!1,c=!1;const i=window,a=document,f={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},u=(()=>!!a.documentElement.attachShadow)(),m=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),p=new WeakMap,d=t=>p.get(t),h=(t,e)=>p.set(e.s=t,e),$=(t,e)=>e in t,w=t=>console.error(t),y=new Map,b=new Map,_=[],j=[],k=[],g=(t,e)=>n=>{t.push(n),s||(s=!0,e&&4&f.t?M(S):f.raf(S))},v=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(s){w(s)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},S=()=>{l++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){w(e)}t.length=0})(_);const t=2==(6&f.t)?performance.now()+10*Math.ceil(l*(1/22)):1/0;v(j,t),v(k,t),j.length>0&&(k.push(...j),j.length=0),(s=_.length+j.length+k.length>0)?f.raf(S):l=0},M=t=>Promise.resolve().then(t),R=g(j,!0),O={},U=t=>"object"==(t=typeof t)||"function"===t,L=()=>i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_karapincha("./css-shim-978387b1-1e75855f.js").then(()=>{f.o=i.__stencil_cssshim}),P=async()=>{f.o=i.__stencil_cssshim;const t=new RegExp("/karapincha(\\.esm)?\\.js($|\\?|#)"),e=Array.from(a.querySelectorAll("script")).find(e=>t.test(e.src)||"karapincha"===e.getAttribute("data-stencil-namespace")),n=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,i.location.href));return C(t.href),window.customElements||await __sc_import_karapincha("./dom-96781eef-a2fb04dd.js"),Object.assign(Object.assign({},n),{resourcesUrl:t.href})}},C=t=>{const e=(()=>`__sc_import_${"karapincha".replace(/\s|-/g,"_")}`)();try{i[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;i[e]=n=>{const s=new URL(n,t).href;let o=l.get(s);if(!o){const t=a.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${e}.m = m;`],{type:"application/javascript"})),o=new Promise(n=>{t.onload=()=>{n(i[e].m),t.remove()}}),l.set(s,o),a.head.appendChild(t)}return o}}},x=new WeakMap,E=t=>"sc-"+t,T=(t,e,...n)=>{let l=null,s=null,o=!1,r=!1,c=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!U(l))&&(l=String(l)),o&&r?c[c.length-1].i+=l:c.push(o?A(null,l):l),r=o)};if(i(n),e){e.name&&(s=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=A(t,null);return a.u=e,c.length>0&&(a.p=c),a.h=s,a},A=(t,e)=>({t:0,$:t,i:e,_:null,p:null,u:null,h:null}),F={},H=(t,e,n,l,s,o)=>{if(n===l)return;let r=$(t,e),c=e.toLowerCase();if("class"===e){const e=t.classList,s=W(n),o=W(l);e.remove(...s.filter(t=>t&&!o.includes(t))),e.add(...o.filter(t=>t&&!s.includes(t)))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if(r||"o"!==e[0]||"n"!==e[1]){const c=U(l);if((r||c&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let s=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(a){}null==l||!1===l?t.removeAttribute(e):(!r||4&o||s)&&!c&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):$(i,c)?c.slice(2):c[2]+e.slice(3),n&&f.rel(t,e,n,!1),l&&f.ael(t,e,l,!1)},N=/\s/,W=t=>t?t.split(N):[],q=(t,e,n,l)=>{const s=11===e._.nodeType&&e._.host?e._.host:e._,o=t&&t.u||O,r=e.u||O;for(l in o)l in r||H(s,l,o[l],void 0,n,e.t);for(l in r)H(s,l,o[l],r[l],n,e.t)},B=(l,s,r,i)=>{let f,u,m,p=s.p[r],d=0;if(o||(c=!0,"slot"===p.$&&(t&&i.classList.add(t+"-s"),p.t|=p.p?2:1)),null!==p.i)f=p._=a.createTextNode(p.i);else if(1&p.t)f=p._=a.createTextNode("");else if(f=p._=a.createElement(2&p.t?"slot-fb":p.$),q(null,p,!1),(t=>null!=t)(t)&&f["s-si"]!==t&&f.classList.add(f["s-si"]=t),p.p)for(d=0;d<p.p.length;++d)(u=B(l,p,d,f))&&f.appendChild(u);return f["s-hn"]=n,3&p.t&&(f["s-sr"]=!0,f["s-cr"]=e,f["s-sn"]=p.h||"",(m=l&&l.p&&l.p[r])&&m.$===p.$&&l._&&D(l._,!1)),f},D=(t,e)=>{f.t|=1;const l=t.childNodes;for(let s=l.length-1;s>=0;s--){const t=l[s];t["s-hn"]!==n&&t["s-ol"]&&(J(t).insertBefore(t,I(t)),t["s-ol"].remove(),t["s-ol"]=void 0,c=!0),e&&D(t,e)}f.t&=-2},V=(t,e,l,s,o,r)=>{let c,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=B(null,l,o,t))&&(s[o]._=c,i.insertBefore(c,I(e)))},z=(t,e,n,l,s)=>{for(;e<=n;++e)(l=t[e])&&(r=!0,(s=l._)["s-ol"]?s["s-ol"].remove():D(s,!0),s.remove())},G=(t,e)=>t.$===e.$&&("slot"!==t.$||t.h===e.h),I=t=>t&&t["s-ol"]||t,J=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,K=(t,e)=>{const n=e._=t._,l=t.p,s=e.p;let o;null===e.i?("slot"===e.$||q(t,e,!1),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,c=e.length-1,i=e[0],a=e[c],f=l.length-1,u=l[0],m=l[f];for(;o<=c&&r<=f;)null==i?i=e[++o]:null==a?a=e[--c]:null==u?u=l[++r]:null==m?m=l[--f]:G(i,u)?(K(i,u),i=e[++o],u=l[++r]):G(a,m)?(K(a,m),a=e[--c],m=l[--f]):G(i,m)?("slot"!==i.$&&"slot"!==m.$||D(i._.parentNode,!1),K(i,m),t.insertBefore(i._,a._.nextSibling),i=e[++o],m=l[--f]):G(a,u)?("slot"!==i.$&&"slot"!==m.$||D(a._.parentNode,!1),K(a,u),t.insertBefore(a._,i._),a=e[--c],u=l[++r]):(s=B(e&&e[r],n,r,t),u=l[++r],s&&J(i._).insertBefore(s,I(i._)));o>c?V(t,null==l[f+1]?null:l[f+1]._,n,l,r,f):r>f&&z(e,o,c)})(n,l,e,s):null!==s?(null!==t.i&&(n.textContent=""),V(n,null,e,s,0,s.length-1)):null!==l&&z(l,0,l.length-1)):(o=n["s-cr"])?o.parentNode.textContent=e.i:t.i!==e.i&&(n.data=e.i)},Q=t=>{let e,n,l,s,o,r,c=t.childNodes;for(n=0,l=c.length;n<l;n++)if(1===(e=c[n]).nodeType){if(e["s-sr"])for(o=e["s-sn"],e.hidden=!1,s=0;s<l;s++)if(c[s]["s-hn"]!==e["s-hn"])if(r=c[s].nodeType,""!==o){if(1===r&&o===c[s].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==c[s].textContent.trim()){e.hidden=!0;break}Q(e)}},X=[],Y=t=>{let e,n,l,s,o=t.childNodes,c=o.length,i=0,a=0,f=0;for(c=o.length;i<c;i++){if((e=o[i])["s-sr"]&&(n=e["s-cr"]))for(s=e["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===s||1===f&&null===n.getAttribute("slot")&&""===s||1===f&&n.getAttribute("slot")===s)&&(X.some(t=>t.j===n)||(r=!0,n["s-sn"]=s,X.push({k:e,j:n})));1===e.nodeType&&Y(e)}},Z=(t,e)=>{e&&!t.g&&e["s-p"].push(new Promise(e=>t.g=e))},tt=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const s=e.s,o=()=>et(t,e,n,s,l);return Z(e,e.v),l&&(e.t|=256,e.S&&(e.S.forEach(([t,e])=>st(s,t,e)),e.S=null)),ot(void 0,()=>R(o))},et=(l,s,i,m,p)=>{const d=l["s-rc"];p&&((t,e)=>{const n=((t,e)=>{let n=E(e.M),l=b.get(n);if(t=11===t.nodeType?t:a,l)if("string"==typeof l){let e,s=x.get(t=t.head||t);s||x.set(t,s=new Set),s.has(n)||((e=a.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(u&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(l,i);try{((l,s,i,m)=>{n=l.tagName;const p=s.R||A(null,null),d=(t=>t&&t.$===F)(m)?m:T(null,null,m);if(i.O&&(d.u=d.u||{},i.O.forEach(([t,e])=>d.u[e]=l[t])),d.$=null,d.t|=4,s.R=d,d._=p._=l.shadowRoot||l,t=l["s-sc"],e=l["s-cr"],o=u&&0!=(1&i.t),c=r=!1,K(p,d),c){Y(d._);for(let t=0;t<X.length;t++){const e=X[t];if(!e.j["s-ol"]){const t=a.createTextNode("");t["s-nr"]=e.j,e.j.parentNode.insertBefore(e.j["s-ol"]=t,e.j)}}f.t|=1;for(let t=0;t<X.length;t++){const e=X[t],n=e.k.parentNode;let l=e.k.nextSibling,s=e.j["s-ol"];for(;s=s.previousSibling;){let t=s["s-nr"];if(t&&t["s-sn"]===e.j["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){l=t;break}}(!l&&n!==e.j.parentNode||e.j.nextSibling!==l)&&e.j!==l&&n.insertBefore(e.j,l)}f.t&=-2}r&&Q(d._),X.length=0})(l,s,i,m.render())}catch(h){w(h)}s.t&=-17,s.t|=2,d&&(d.forEach(t=>t()),l["s-rc"]=void 0);{const t=l["s-p"],e=()=>nt(l,s,i);0===t.length?e():(Promise.all(t).then(e),s.t|=4,t.length=0)}},nt=(t,e,n)=>{const l=e.s,s=e.v;64&e.t||(e.t|=64,t.classList.add("hydrated"),st(l,"componentDidLoad"),e.U(t),s||lt()),e.L(t),e.g&&(e.g(),e.g=void 0),512&e.t&&M(()=>tt(t,e,n,!1)),e.t&=-517},lt=()=>{a.documentElement.classList.add("hydrated"),f.t|=2},st=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){w(l)}},ot=(t,e)=>t&&t.then?t.then(e):e(),rt=(t,e,n)=>{if(e.P){t.watchers&&(e.C=t.watchers);const l=Object.entries(e.P),s=t.prototype;if(l.forEach(([t,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,t,{get(){return((t,e)=>d(t).T.get(e))(this,t)},set(n){((t,e,n,l)=>{const s=d(this),o=s.A,r=s.T.get(e),c=s.t,i=s.s;if(!((n=((t,e)=>null==t||U(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?String(t):t)(n,l.P[e][0]))===r||8&c&&void 0!==r)&&(s.T.set(e,n),i)){if(l.C&&128&c){const t=l.C[e];t&&t.forEach(t=>{try{i[t](n,r,e)}catch(l){w(l)}})}2==(18&c)&&tt(o,s,l,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,t,{value(...e){const n=d(this);return n.F.then(()=>n.s[t](...e))}})}),1&n){const n=new Map;s.attributeChangedCallback=function(t,e,l){f.jmp(()=>{const e=n.get(t);this[e]=(null!==l||"boolean"!=typeof this[e])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,l])=>{const s=l[1]||t;return n.set(s,t),512&l[0]&&e.O.push([t,s]),s})}}return t},ct=t=>{const e=t["s-cr"]=a.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},it=(t,e={})=>{const n=[],l=e.exclude||[],s=a.head,o=i.customElements,r=s.querySelector("meta[charset]"),c=a.createElement("style"),h=[];let $,_=!0;Object.assign(f,e),f.l=new URL(e.resourcesUrl||"./",a.baseURI).href,e.syncQueue&&(f.t|=4),t.forEach(t=>t[1].forEach(e=>{const s={t:e[0],M:e[1],P:e[2],H:e[3]};s.P=e[2],s.H=e[3],s.O=[],s.C={},!u&&1&s.t&&(s.t|=8);const r=s.M,c=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,A:t,T:new Map};e.F=new Promise(t=>e.L=t),e.N=new Promise(t=>e.U=t),t["s-p"]=[],t["s-rc"]=[],p.set(t,e)})(t=this),1&s.t&&(u?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){$&&(clearTimeout($),$=null),_?h.push(this):f.jmp(()=>((t,e)=>{if(0==(1&f.t)){const n=()=>{},l=d(t);if(e.H&&(l.W=((t,e,n)=>{e.S=e.S||[];const l=n.map(([n,l,s])=>{const o=((t,e)=>4&e?a:t)(t,n),r=((t,e)=>n=>{256&t.t?t.s[e](n):t.S.push([e,n])})(e,s),c=(t=>({passive:0!=(1&t),capture:0!=(2&t)}))(n);return f.ael(o,l,r,c),()=>f.rel(o,l,r,c)});return()=>l.forEach(t=>t())})(t,l,e.H)),!(1&l.t)){let n;l.t|=1,n||(4&e.t||8&e.t)&&ct(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){Z(l,l.v=e);break}}e.P&&Object.entries(e.P).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),M(()=>(async(t,e,n,l,s)=>{if(0==(32&e.t)){e.t|=32;{if((s=(t=>{const e=t.M.replace(/-/g,"_"),n=t.q,l=y.get(n);return l?l[e]:__sc_import_karapincha(`./${n}.entry.js`).then(t=>(y.set(n,t),t[e]),w)})(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.C=s.watchers,rt(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(c){w(c)}e.t&=-9,e.t|=128,t()}const t=E(n.M);if(!b.has(t)&&s.style){const e=()=>{};let l=s.style;8&n.t&&(l=await __sc_import_karapincha("./shadow-css-4889ae62-23996f3f.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=b.get(t);m&&n?(l=l||new CSSStyleSheet).replace(e):l=e,b.set(t,l)})(t,l,!!(1&n.t)),e()}}const o=e.v,r=()=>tt(t,e,n,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(t,l,e))}n()}})(this,s))}disconnectedCallback(){f.jmp(()=>(()=>{if(0==(1&f.t)){const t=d(this);t.W&&(t.W(),t.W=void 0)}})())}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=d(t);2==(18&n.t)&&tt(t,n,e,!1)}})(this,s)}componentOnReady(){return d(this).N}};s.q=t[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,rt(c,s,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,r?r.nextSibling:s.firstChild),_=!1,h.length>0?h.forEach(t=>t.connectedCallback()):f.jmp(()=>$=setTimeout(lt,30,"timeout"))},at=(t,e,n)=>{const l=ft(t);return{emit:t=>l.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},ft=t=>d(t).A;export{F as H,L as a,it as b,at as c,ft as g,T as h,P as p,h as r};