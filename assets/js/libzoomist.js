!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Zoomist=e()}(this,function(){"use strict";let t="zoomist",e=["slider","zoomer"],i=`${t}-container`,s=`${t}-wrapper`,o=`${t}-image`,r=`${t}-slider`,a=`${t}-slider-main`,n=`${t}-slider-bar`,l=`${t}-slider-button`,h=`${t}-zoomer`,d=`${t}-in-zoomer`,u=`${t}-out-zoomer`,m=`${t}-zoomer-disable`,c="undefined"!=typeof window&&void 0!==window.document,g=!!(c&&"ontouchstart"in window),p=g?"touchstart":"mousedown",f=g?"touchmove":"mousemove",$=g?"touchend":"mouseup";var v={fill:"cover",src:"data-zoomist-src",draggable:!0,wheelable:!0,pinchable:!0,bounds:!0,zoomRatio:.1,maxRatio:!1,height:"auto"};let _={el:r,direction:"horizontal",maxRatio:2},E={inEl:d,outEl:u,disableOnBounds:!0},w={ready:null,zoom:null,wheel:null,dragStart:null,drag:null,dragEnd:null,pinchStart:null,pinch:null,pinchEnd:null,slideStart:null,slide:null,slideEnd:null,resize:null,reset:null,destroy:null,update:null},y=t=>"object"==typeof t&&null!==t,z=(t,e)=>{for(let[i,s]of(t||(t={}),Object.entries(e)))t[i]=s},x=t=>Object.assign({},t),Y=t=>"string"==typeof t&&""!==t,L=t=>"number"==typeof t&&!isNaN(t),X=t=>null!==b(t),b=t=>t instanceof HTMLElement?t:document.querySelector(t),R=t=>X(t)&&"IMG"===b(t).tagName,S=t=>"function"==typeof t,D=t=>t.indexOf("%")>-1,M=(t,e)=>{for(let[i,s]of Object.entries(e))t.style[i]=L(s)?`${s}px`:s},B=t=>{let e=!g||"wheel"===t.type;return{x:e?t.pageX:t.touches[0].pageX,y:e?t.pageY:t.touches[0].pageY,clientX:e?t.clientX:t.touches[0].clientX,clientY:e?t.clientY:t.touches[0].clientY}},C=t=>{let e=getComputedStyle(t).transform,i=e.match(/^matrix3d\((.+)\)$/);return i?parseFloat(i[1].split(", ")[12]):(i=e.match(/^matrix\((.+)\)$/))?parseFloat(i[1].split(", ")[4]):0},I=t=>{let e=getComputedStyle(t).transform,i=e.match(/^matrix3d\((.+)\)$/);return i?parseFloat(i[1].split(", ")[13]):(i=e.match(/^matrix\((.+)\)$/))?parseFloat(i[1].split(", ")[5]):0},O=t=>+(Math.round(t+"e+2")+"e-2"),T=(t,e,i)=>Math.min(Math.max(t,e),i),q=t=>t.charAt(0).toUpperCase()+t.slice(1);var H=t=>{let{element:e,wrapper:i,image:s,options:o,data:r}=t,{containerData:a,imageData:n,originImageData:l}=r,h=()=>{if(a.width===e.offsetWidth)return;let i=e.offsetWidth/a.width,o=e.offsetHeight/a.height,r=l.width*i,h=l.height*o,d=l.left*i,u=l.top*o,m=n.width*i,c=n.height*o,g=n.left*i,p=n.top*o,f=C(s)*i,$=I(s)*o;z(a,{width:e.offsetWidth,height:e.offsetHeight}),z(l,{width:r,height:h,left:d,top:u}),z(n,{width:m,height:c,left:g,top:p}),M(t.image,{width:m,height:c,left:g,top:p,transform:`translate(${f}px, ${$}px)`}),t.emit("resize")};window.addEventListener("resize",h),t.dragging=!1,t.data.dragData={startX:0,startY:0,transX:0,transY:0},"contain"===o.fill&&o.bounds&&(o.bounds=!1);let{dragData:d}=r,u=e=>{if(!o.draggable||2===e.which||3===e.which)return;let i=e.touches&&2===e.touches.length;z(d,{startX:i?(e.touches[0].pageX+e.touches[1].pageX)/2:B(e).x,startY:i?(e.touches[0].pageY+e.touches[1].pageY)/2:B(e).y,transX:C(s),transY:I(s)}),t.dragging=!0,t.emit("dragStart",{x:d.transX,y:d.transY},e),document.addEventListener(f,m),document.addEventListener($,c)},m=e=>{if(!t.dragging)return;let i=e.touches&&2===e.touches.length,r=i?(e.touches[0].pageX+e.touches[1].pageX)/2:B(e).x,a=i?(e.touches[0].pageY+e.touches[1].pageY)/2:B(e).y;if(o.bounds){let l=d.startX-(d.transX-n.left),h=d.startX-(d.transX+n.left),u=d.startY-(d.transY-n.top),m=d.startY-(d.transY+n.top);r<l&&(d.startX+=r-l),r>h&&(d.startX+=r-h),a<u&&(d.startY+=a-u),a>m&&(d.startY+=a-m)}let c=O(r-d.startX+d.transX),g=O(a-d.startY+d.transY);s.style.transform=`translate(${c}px, ${g}px)`,t.emit("drag",{x:c,y:g},e)},c=e=>{t.dragging=!1,z(d,{transX:C(s),transY:I(s)}),t.emit("dragEnd",{x:d.transX,y:d.transY},e),document.removeEventListener(f,m),document.removeEventListener($,c)};t.pinching=!1,t.data.pinchData={dist:0,startX:0,startY:0};let g=e=>{if(!o.pinchable||!e.touches||2!==e.touches.length)return;let{pinchData:i}=t.data;z(i,{dist:Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY),startX:e.touches[0].clientX,startY:e.touches[0].clientY}),t.pinching=!0,t.emit("pinchStart",e),document.addEventListener(f,v),document.addEventListener($,_)},v=e=>{if(!t.pinching)return;let{pinchData:i}=t.data,s=Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY),o=O((s-i.dist)/100),r={clientX:(e.touches[0].clientX+e.touches[1].clientX)/2,clientY:(e.touches[0].clientY+e.touches[1].clientY)/2};t.zoom(o,r),i.dist=s,t.emit("pinch",e)},_=e=>{t.pinching=!1,t.emit("pinchEnd",e),document.removeEventListener(f,v),document.removeEventListener($,_)},E=t=>{u(t),g(t)};i.addEventListener(p,E),t.wheeling=!1;let w=e=>{if(!o.wheelable)return;e.preventDefault();let{zoomRatio:i}=o;if(t.wheeling)return;t.wheeling=!0,setTimeout(()=>{t.wheeling=!1},30);let s;e.deltaY?s=e.deltaY>0?-1:1:e.wheelDelta?s=e.wheelDelta/120:e.detail&&(s=e.detail>0?-1:1),t.zoom(s*i,B(e)),t.emit("wheel",e)};i.addEventListener("wheel",w)};let Z=t=>{let{slider:e}=t.__modules__;e.sliding=!1;let i="horizontal"===e.direction,s=s=>{let o=e.sliderMain.getBoundingClientRect(),r=i?B(s).clientX:-B(s).clientY,a=i?o.width:o.height,n=i?o.left:-o.bottom,l=T(O((r-n)/a),0,1),h=t.ratio<1?t.ratio:1,d=t.ratio>e.maxRatio?t.ratio:e.maxRatio;t.zoomTo((d-h)*l+h)},o=i=>{s(i),e.sliding=!0,t.emit("slideStart",t.getSliderValue(),i),document.addEventListener(f,r),document.addEventListener($,a)},r=i=>{e.sliding&&(s(i),t.emit("slide",t.getSliderValue(),i))},a=i=>{e.sliding=!1,t.emit("slideEnd",t.getSliderValue(),i),document.removeEventListener(f,r),document.removeEventListener($,a)};e.sliderMain.addEventListener(p,o),e.sliderMain.event=o},V=t=>{let{zoomRatio:e}=t.options,{zoomer:i}=t.__modules__,s=()=>t.zoom(e),o=()=>t.zoom(-e);i.zoomerInEl.addEventListener("click",s),i.zoomerOutEl.addEventListener("click",o),i.zoomerInEl.event=s,i.zoomerOutEl.event=o},k=`
  <div class="${a}">
    <span class="${n}"></span>
    <span class="${l}"></span>
  </div>
`,P=`
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 12 12">
  <polygon points="12,5.5 6.5,5.5 6.5,0 5.5,0 5.5,5.5 0,5.5 0,6.5 5.5,6.5 5.5,12 6.5,12 6.5,6.5 12,6.5 "/>
</svg>
`,W=`
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 12 12">
  <rect y="5.5" width="12" height="1"/>
</svg>
`;class j{constructor(t,e={}){if(!t)throw Error("The first argument is required.");if(!X(t))throw Error("This element is not exist.");this.element=b(t),this.options=Object.assign({},v,(t=>{if(!y(t))return!1;try{let{constructor:e}=t,{prototype:i}=e,{hasOwnProperty:s}=Object.prototype;return e&&i&&s.call(i,"isPrototypeOf")}catch(o){return!1}})(e)&&e),this.init()}init(){let{element:e,options:i}=this,{src:s}=i;if(e[t])return;e[t]=this;let o=i.src=Y(s)||R(s)?s:v.src,r=R(o)?o.src:e.getAttribute(o);if(!r)throw Error(`Cannot find src from ${o}`);this.create(r)}create(t){if(!t)return;let{options:e}=this;if(this.url=t,this.data={},this.ratio=1,this.__events__=w,e.on)for(let[i,s]of Object.entries(e.on))this.__events__[i]=[s];this.mount()}mount(){if(this.mounted)return;let{element:t,options:e,data:i,url:r}=this,{fill:a,maxRatio:n,height:l}=e;this.wrapper&&this.wrapper.remove();let h=document.createElement("div");h.classList.add(s);let d=document.createElement("img");d.classList.add(o),d.src=r,d.onload=()=>{this.wrapper=h,this.image=d;let{naturalWidth:s,naturalHeight:o}=d,r=s/o;l&&(M(t,{width:"100%"}),"auto"===l?M(t,{paddingBottom:`${O(o/s*100)}%`}):L(l)?M(t,{height:l}):D(l)&&M(t,{paddingBottom:l}));let{offsetWidth:u,offsetHeight:m}=t;this.data.containerData={width:u,height:m,aspectRatio:u/m};let{containerData:c}=i,g;"cover"!==a&&"contain"!==a&&"none"!==a&&(e.fill="cover"),"contain"!==e.fill&&(g=c.aspectRatio===r?"both":c.aspectRatio>r?"width":"height"),"contain"===e.fill&&(g=c.aspectRatio===r?"both":c.aspectRatio>r?"height":"width");let p="none"===e.fill?s:"both"===g||"width"===g?c.width:c.height*r,f="none"===e.fill?o:"both"===g||"height"===g?c.height:c.width/r,$=(c.width-p)/2,v=(c.height-f)/2;this.data.originImageData={naturalWidth:s,naturalHeight:o,aspectRatio:r,width:p,height:f,left:$,top:v},this.data.imageData=Object.assign({},this.data.originImageData),M(d,{width:p,height:f,left:$,top:v}),(!L(n)||n<=1)&&!1!==n&&(e.maxRatio=!1),H(this),this.mounted=!0,this.render()}}render(){let{element:t,wrapper:e,image:s}=this;t.classList.add(i),e.append(s),t.append(e),this.createModules(),this.emit("ready")}}return Object.assign(j.prototype,{getContainerData(){return x(this.data.containerData)},getImageData(){return x(this.data.imageData)},getSliderValue(){return this.__modules__.slider?.value},getZoomRatio(){return this.ratio},zoom(t,e){let{image:i,data:s,options:o,ratio:r}=this,{bounds:a,maxRatio:n}=o;if(a&&1===r&&t<0||n&&r===n&&t>0)return;let{originImageData:l}=s,h=this.getContainerData(),d=this.getImageData(),u=i.getBoundingClientRect(),c=O(r*(t+1)),g=a&&c<1?1:n&&c>n?n:c,p=g/r-1,f=l.width*g,$=l.height*g,v=(h.width-f)/2,_=(h.height-$)/2,E=e?(d.width/2-e.clientX+u.left)*p+C(i):C(i),w=e?(d.height/2-e.clientY+u.top)*p+I(i):I(i),y=a?T(E,v,-v):E,x=a?T(w,_,-_):w,Y={width:f,height:$,left:v,top:_};if(z(s.imageData,Y),M(i,{...Y,transform:`translate(${y}px, ${x}px)`}),this.ratio=g,this.emit("zoom",g),o.slider){let{slider:L}=this.__modules__,X=100*O(1-(L.maxRatio-g)/(L.maxRatio-1));L.value=T(X,0,100),this.slideTo(X,!0)}if(o.zoomer){let{zoomer:b}=this.__modules__;if(b.disableOnBounds){let{bounds:R}=o,{zoomerInEl:S,zoomerOutEl:D}=this.__modules__.zoomer;R&&1===this.ratio?D.classList.add(m):D.classList.remove(m),this.ratio===n?S.classList.add(m):S.classList.remove(m)}}return this},zoomTo(t){let{ratio:e}=this;return t!==e&&this.zoom(t/e-1),this},move(t=0,e=0){let{image:i,data:s,options:o}=this,{imageData:r,dragData:a}=s,{top:n,left:l}=r,{transX:h,transY:d}=a,{bounds:u}=o,m=u?T(h-t,l,-l):h-t,c=u?T(d-e,n,-n):d-e,g=O(m),p=O(c);return z(a,{transX:g,transY:p}),i.style.transform=`translate(${g}px, ${p}px)`,this},moveTo(t,e){let{data:i,options:s}=this,{imageData:o,dragData:r}=i,{top:a,left:n}=o,{transX:l,transY:h}=r,{bounds:d}=s;t=t??Math.abs(n),e=e??Math.abs(a);let u=d?T(n+t+l,n,-n):n+t+l,m=d?T(a+e+h,a,-a):a+e+h;return this.move(u,m),this},slideTo(t,e){let{__modules__:i}=this;if(!i.slider)return;let{slider:s}=i,o="horizontal"===s.direction?"left":"top",r="horizontal"===s.direction?"":"-",a=T(t,0,100);if(s.sliderButton.style[o]=`${r}${a}%`,!e){let n=this.ratio<1?this.ratio:1,l=this.ratio>s.maxRatio?this.ratio:s.maxRatio;this.zoomTo((l-n)*(a/100)+n)}return this},reset(){let{image:t}=this;return this.zoomTo(1),M(t,{transform:"translate(0, 0)"}),this.emit("reset"),this},destroy(){let{element:e,wrapper:s}=this,{slider:o,zoomer:r}=this.__modules__;return e[t]=void 0,this.mounted=!1,o&&this.destroySlider(),r&&this.destroyZoomer(),s.remove(),e.style.removeProperty("width"),e.style.removeProperty("padding-bottom"),e.classList.remove(i),this.emit("destroy"),this},update(){return this.destroy().init(),this.emit("update"),this},on(t,e){if(!S(e))return this;let{__events__:i}=this;return t.split(" ").forEach(t=>{i[t]||(i[t]=[]),i[t].push(e)}),this},emit(...t){let{__events__:e}=this,i=t[0],s=t.slice(1,t.length);return e[i]&&e[i].forEach(t=>{S(t)&&t.apply(this,s)}),this}},{createModules(){let{options:t}=this;this.__modules__={},e.forEach(e=>{t[e]&&this[`create${q(e)}`]()})},createSlider(){let{element:t,options:e,__modules__:i}=this;i.slider=Object.assign({},_,e.slider);let{slider:s}=i;e.maxRatio&&Object.assign(s,{maxRatio:e.maxRatio}),"horizontal"!==s.direction&&"vertical"!==s.direction&&(s.direction="horizontal"),s.value=0,s.mounted&&s.sliderMain.remove();let o=s.isCustomEl=s.el&&X(s.el),h=o?b(s.el):document.createElement("div");o||h.classList.add(r),h.innerHTML=k,s.sliderEl=h,s.sliderMain=h.querySelector(`.${a}`),s.sliderBar=h.querySelector(`.${n}`),s.sliderButton=h.querySelector(`.${l}`),s.sliderMain.classList.add(`${r}-${s.direction}`),Z(this),s.mounted=!0,o||t.append(h)},destroySlider(){let{slider:t}=this.__modules__;t&&t.mounted&&(t.isCustomEl?t.sliderMain.remove():t.sliderEl.remove(),t.mounted=!1)},createZoomer(){let{element:t,options:e,__modules__:i}=this;i.zoomer=Object.assign({},E,e.zoomer);let{zoomer:s}=i;s.mounted&&s.zoomerEl&&s.sliderMain.remove();let o=s.isCustomInEl=s.inEl&&X(s.inEl),r=s.isCustomOutEl=s.outEl&&X(s.outEl),a=o?b(s.inEl):document.createElement("div"),n=r?b(s.outEl):document.createElement("div");if(o||(a.classList.add(d),a.innerHTML=P),r||(n.classList.add(u),n.innerHTML=W),s.zoomerInEl=a,s.zoomerOutEl=n,s.disableOnBounds){let{bounds:l,maxRatio:c}=e;l&&1===this.ratio&&n.classList.add(m),this.ratio===c&&a.classList.add(m)}if(V(this),s.mounted=!0,!o||!r){let g=document.createElement("div");g.classList.add(h),o||g.append(a),r||g.append(n),s.zoomerEl=g,t.append(g)}},destroyZoomer(){let{zoomer:t}=this.__modules__;if(!t||!t.mounted)return;let e=t=>{t.removeEventListener("click",t.event),t.event=void 0,t.classList.remove(m)};t.isCustomInEl?e(t.zoomerInEl):t.zoomerInEl.remove(),t.isCustomOutEl?e(t.zoomerOutEl):t.zoomerOutEl.remove(),t.zoomerEl&&t.zoomerEl.remove(),t.mounted=!1}}),j});