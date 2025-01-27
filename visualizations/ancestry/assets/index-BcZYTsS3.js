(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="171",hs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vl=0,Va=1,wl=2,Yo=1,Wl=2,is=3,vs=0,Rt=1,as=2,Gs=0,Sn=1,wa=2,Wa=3,Ja=4,Jl=5,Vs=100,Xl=101,Zl=102,Il=103,Ul=104,Yl=200,Ql=201,Ol=202,zl=203,Ri=204,Di=205,kl=206,$l=207,ql=208,jl=209,eh=210,th=211,sh=212,nh=213,rh=214,vi=0,xi=1,bi=2,Cn=3,Ei=4,Pi=5,yi=6,Hi=7,Qo=0,ih=1,ah=2,Rs=0,oh=1,lh=2,hh=3,ch=4,dh=5,uh=6,fh=7,Oo=300,Gn=301,Rn=302,Ai=303,Ki=304,wr=306,Bi=1e3,Ws=1001,Ni=1002,bt=1003,ph=1004,er=1005,Qt=1006,Yr=1007,Js=1008,us=1009,zo=1010,ko=1011,Un=1012,La=1013,Xs=1014,Ot=1015,On=1016,Ma=1017,ga=1018,Dn=1020,$o=35902,qo=1021,jo=1022,It=1023,el=1024,tl=1025,_n=1026,vn=1027,Sa=1028,_a=1029,sl=1030,Ta=1031,Ca=1033,xr=33776,br=33777,Er=33778,Pr=33779,Fi=35840,Vi=35841,wi=35842,Wi=35843,Ji=36196,Xi=37492,Zi=37496,Ii=37808,Ui=37809,Yi=37810,Qi=37811,Oi=37812,zi=37813,ki=37814,$i=37815,qi=37816,ji=37817,ea=37818,ta=37819,sa=37820,na=37821,yr=36492,ra=36494,ia=36495,nl=36283,aa=36284,oa=36285,la=36286,mh=3200,Lh=3201,rl=0,Mh=1,_s="",Kt="srgb",xn="srgb-linear",Ar="linear",ze="srgb",ks=7680,Xa=519,gh=512,Sh=513,_h=514,il=515,Th=516,Ch=517,Gh=518,Rh=519,ha=35044,Dh=35048,Za="300 es",os=2e3,Kr=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const r=s.slice(0);for(let i=0,a=r.length;i<a;i++)r[i].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ia=1234567;const Zn=Math.PI/180,Yn=180/Math.PI;function cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]).toLowerCase()}function Ae(n,e,t){return Math.max(e,Math.min(t,n))}function Ga(n,e){return(n%e+e)%e}function vh(n,e,t,s,r){return s+(n-e)*(r-s)/(t-e)}function xh(n,e,t){return n!==e?(t-n)/(e-n):0}function In(n,e,t){return(1-t)*n+t*e}function bh(n,e,t,s){return In(n,e,1-Math.exp(-t*s))}function Eh(n,e=1){return e-Math.abs(Ga(n,e*2)-e)}function Ph(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function yh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Hh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ah(n,e){return n+Math.random()*(e-n)}function Kh(n){return n*(.5-Math.random())}function Bh(n){n!==void 0&&(Ia=n);let e=Ia+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nh(n){return n*Zn}function Fh(n){return n*Yn}function Vh(n){return(n&n-1)===0&&n!==0}function wh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jh(n,e,t,s,r){const i=Math.cos,a=Math.sin,o=i(t/2),l=a(t/2),h=i((e+s)/2),c=a((e+s)/2),u=i((e-s)/2),f=a((e-s)/2),p=i((s-e)/2),M=a((s-e)/2);switch(r){case"XYX":n.set(o*c,l*u,l*f,o*h);break;case"YZY":n.set(l*f,o*c,l*u,o*h);break;case"ZXZ":n.set(l*u,l*f,o*c,o*h);break;case"XZX":n.set(o*c,l*M,l*p,o*h);break;case"YXY":n.set(l*p,o*c,l*M,o*h);break;case"ZYZ":n.set(l*M,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xh={DEG2RAD:Zn,RAD2DEG:Yn,generateUUID:cs,clamp:Ae,euclideanModulo:Ga,mapLinear:vh,inverseLerp:xh,lerp:In,damp:bh,pingpong:Eh,smoothstep:Ph,smootherstep:yh,randInt:Hh,randFloat:Ah,randFloatSpread:Kh,seededRandom:Bh,degToRad:Nh,radToDeg:Fh,isPowerOfTwo:Vh,ceilPowerOfTwo:wh,floorPowerOfTwo:Wh,setQuaternionFromProperEuler:Jh,normalize:Oe,denormalize:Zt};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,r=e.elements;return this.x=r[0]*t+r[3]*s+r[6],this.y=r[1]*t+r[4]*s+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ae(this.x,e.x,t.x),this.y=Ae(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ae(this.x,e,t),this.y=Ae(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ae(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*s-a*r+e.x,this.y=i*r+a*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,s,r,i,a,o,l,h){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,r,i,a,o,l,h)}set(e,t,s,r,i,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=i,c[5]=l,c[6]=s,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,r=t.elements,i=this.elements,a=s[0],o=s[3],l=s[6],h=s[1],c=s[4],u=s[7],f=s[2],p=s[5],M=s[8],_=r[0],m=r[3],d=r[6],R=r[1],D=r[4],C=r[7],B=r[2],E=r[5],v=r[8];return i[0]=a*_+o*R+l*B,i[3]=a*m+o*D+l*E,i[6]=a*d+o*C+l*v,i[1]=h*_+c*R+u*B,i[4]=h*m+c*D+u*E,i[7]=h*d+c*C+u*v,i[2]=f*_+p*R+M*B,i[5]=f*m+p*D+M*E,i[8]=f*d+p*C+M*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-s*i*c+s*o*l+r*i*h-r*a*l}invert(){const e=this.elements,t=e[0],s=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,f=o*l-c*i,p=h*i-a*l,M=t*u+s*f+r*p;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/M;return e[0]=u*_,e[1]=(r*h-c*s)*_,e[2]=(o*s-r*a)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*i-o*t)*_,e[6]=p*_,e[7]=(s*l-h*t)*_,e[8]=(a*t-s*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,r,i,a,o){const l=Math.cos(i),h=Math.sin(i);return this.set(s*l,s*h,-s*(l*a+h*o)+a+e,-r*h,r*l,-r*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let r=0;r<9;r++)if(t[r]!==s[r])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Pe;function al(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zh(){const n=Br("canvas");return n.style.display="block",n}const Ua={};function Ln(n){n in Ua||(Ua[n]=!0,console.warn(n))}function Ih(n,e,t){return new Promise(function(s,r){function i(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:s()}}setTimeout(i,t)})}function Uh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ya=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qa=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qh(){const n={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(r,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===ze&&(r.r=ds(r.r),r.g=ds(r.g),r.b=ds(r.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[i].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ze&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b))),r},fromWorkingColorSpace:function(r,i){return this.convert(r,this.workingColorSpace,i)},toWorkingColorSpace:function(r,i){return this.convert(r,i,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_s?Ar:this.spaces[r].transfer},getLuminanceCoefficients:function(r,i=this.workingColorSpace){return r.fromArray(this.spaces[i].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,i,a){return r.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return n.define({[xn]:{primaries:e,whitePoint:s,transfer:Ar,toXYZ:Ya,fromXYZ:Qa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:s,transfer:ze,toXYZ:Ya,fromXYZ:Qa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}const Ze=Qh();function ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $s;class Oh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=Br("canvas")),$s.width=e.width,$s.height=e.height;const s=$s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=$s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const r=s.getImageData(0,0,e.width,e.height),i=r.data;for(let a=0;a<i.length;a++)i[a]=ds(i[a]/255)*255;return s.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ds(t[s]/255)*255):t[s]=ds(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zh=0;class ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?i.push(Or(r[a].image)):i.push(Or(r[a]))}else i=Or(r);s.url=i}return t||(e.images[this.uuid]=s),s}}function Or(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kh=0;class gt extends Ys{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,s=Ws,r=Ws,i=Qt,a=Js,o=It,l=us,h=gt.DEFAULT_ANISOTROPY,c=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=cs(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=i,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Ws:e.x=e.x<0?0:1;break;case Ni:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Ws:e.y=e.y<0?0:1;break;case Ni:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Oo;gt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,s=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,r){return this.x=e,this.y=t,this.z=s,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*s+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*s+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*s+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*s+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,r,i;const l=e.elements,h=l[0],c=l[4],u=l[8],f=l[1],p=l[5],M=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-_)<.01&&Math.abs(M-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+_)<.1&&Math.abs(M+m)<.1&&Math.abs(h+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,C=(p+1)/2,B=(d+1)/2,E=(c+f)/4,v=(u+_)/4,K=(M+m)/4;return D>C&&D>B?D<.01?(s=0,r=.707106781,i=.707106781):(s=Math.sqrt(D),r=E/s,i=v/s):C>B?C<.01?(s=.707106781,r=0,i=.707106781):(r=Math.sqrt(C),s=E/r,i=K/r):B<.01?(s=.707106781,r=.707106781,i=0):(i=Math.sqrt(B),s=v/i,r=K/i),this.set(s,r,i,t),this}let R=Math.sqrt((m-M)*(m-M)+(u-_)*(u-_)+(f-c)*(f-c));return Math.abs(R)<.001&&(R=1),this.x=(m-M)/R,this.y=(u-_)/R,this.z=(f-c)/R,this.w=Math.acos((h+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ae(this.x,e.x,t.x),this.y=Ae(this.y,e.y,t.y),this.z=Ae(this.z,e.z,t.z),this.w=Ae(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ae(this.x,e,t),this.y=Ae(this.y,e,t),this.z=Ae(this.z,e,t),this.w=Ae(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $h extends Ys{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const i=new gt(r,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);i.flipY=!1,i.generateMipmaps=s.generateMipmaps,i.internalFormat=s.internalFormat,this.textures=[];const a=s.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,r=e.textures.length;s<r;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zs extends $h{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class ll extends gt{constructor(e=null,t=1,s=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qh extends gt{constructor(e=null,t=1,s=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(e=0,t=0,s=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=r}static slerpFlat(e,t,s,r,i,a,o){let l=s[r+0],h=s[r+1],c=s[r+2],u=s[r+3];const f=i[a+0],p=i[a+1],M=i[a+2],_=i[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=M,e[t+3]=_;return}if(u!==_||l!==f||h!==p||c!==M){let m=1-o;const d=l*f+h*p+c*M+u*_,R=d>=0?1:-1,D=1-d*d;if(D>Number.EPSILON){const B=Math.sqrt(D),E=Math.atan2(B,d*R);m=Math.sin(m*E)/B,o=Math.sin(o*E)/B}const C=o*R;if(l=l*m+f*C,h=h*m+p*C,c=c*m+M*C,u=u*m+_*C,m===1-o){const B=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=B,h*=B,c*=B,u*=B}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,s,r,i,a){const o=s[r],l=s[r+1],h=s[r+2],c=s[r+3],u=i[a],f=i[a+1],p=i[a+2],M=i[a+3];return e[t]=o*M+c*u+l*p-h*f,e[t+1]=l*M+c*f+h*u-o*p,e[t+2]=h*M+c*p+o*f-l*u,e[t+3]=c*M-o*u-l*f-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,r){return this._x=e,this._y=t,this._z=s,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(s/2),c=o(r/2),u=o(i/2),f=l(s/2),p=l(r/2),M=l(i/2);switch(a){case"XYZ":this._x=f*c*u+h*p*M,this._y=h*p*u-f*c*M,this._z=h*c*M+f*p*u,this._w=h*c*u-f*p*M;break;case"YXZ":this._x=f*c*u+h*p*M,this._y=h*p*u-f*c*M,this._z=h*c*M-f*p*u,this._w=h*c*u+f*p*M;break;case"ZXY":this._x=f*c*u-h*p*M,this._y=h*p*u+f*c*M,this._z=h*c*M+f*p*u,this._w=h*c*u-f*p*M;break;case"ZYX":this._x=f*c*u-h*p*M,this._y=h*p*u+f*c*M,this._z=h*c*M-f*p*u,this._w=h*c*u+f*p*M;break;case"YZX":this._x=f*c*u+h*p*M,this._y=h*p*u+f*c*M,this._z=h*c*M-f*p*u,this._w=h*c*u-f*p*M;break;case"XZY":this._x=f*c*u-h*p*M,this._y=h*p*u-f*c*M,this._z=h*c*M+f*p*u,this._w=h*c*u+f*p*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,r=Math.sin(s);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],r=t[4],i=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],f=s+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(i-h)*p,this._z=(a-r)*p}else if(s>o&&s>u){const p=2*Math.sqrt(1+s-o-u);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(i+h)/p}else if(o>u){const p=2*Math.sqrt(1+o-s-u);this._w=(i-h)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+u-s-o);this._w=(a-r)/p,this._x=(i+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ae(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const r=Math.min(1,t/s);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,r=e._y,i=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=s*c+a*o+r*h-i*l,this._y=r*c+a*l+i*o-s*h,this._z=i*c+a*h+s*l-r*o,this._w=a*c-s*o-r*l-i*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,r=this._y,i=this._z,a=this._w;let o=a*e._w+s*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=s,this._y=r,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*s+t*this._x,this._y=p*r+t*this._y,this._z=p*i+t*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,f=Math.sin(t*c)/h;return this._w=a*u+this._w*f,this._x=s*u+this._x*f,this._y=r*u+this._y*f,this._z=i*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),r=Math.sqrt(1-s),i=Math.sqrt(s);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,s=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*s+i[6]*r,this.y=i[1]*t+i[4]*s+i[7]*r,this.z=i[2]*t+i[5]*s+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*s+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*s+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*s+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*s+i[10]*r+i[14])*a,this}applyQuaternion(e){const t=this.x,s=this.y,r=this.z,i=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*r-o*s),c=2*(o*t-i*r),u=2*(i*s-a*t);return this.x=t+l*h+a*u-o*c,this.y=s+l*c+o*h-i*u,this.z=r+l*u+i*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*s+i[8]*r,this.y=i[1]*t+i[5]*s+i[9]*r,this.z=i[2]*t+i[6]*s+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ae(this.x,e.x,t.x),this.y=Ae(this.y,e.y,t.y),this.z=Ae(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ae(this.x,e,t),this.y=Ae(this.y,e,t),this.z=Ae(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,r=e.y,i=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-i*o,this.y=i*a-s*l,this.z=s*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return zr.copy(this).projectOnVector(e),this.sub(zr)}reflect(e){return this.sub(zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ae(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,r=this.z-e.z;return t*t+s*s+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const r=Math.sin(t)*e;return this.x=r*Math.sin(s),this.y=Math.cos(t)*e,this.z=r*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new A,Oa=new Is;class Qs{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const i=s.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(i,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tr.copy(s.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const r=e.children;for(let i=0,a=r.length;i<a;i++)this.expandByObject(r[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(An),sr.subVectors(this.max,An),qs.subVectors(e.a,An),js.subVectors(e.b,An),en.subVectors(e.c,An),fs.subVectors(js,qs),ps.subVectors(en,js),ys.subVectors(qs,en);let t=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-ys.z,ys.y,fs.z,0,-fs.x,ps.z,0,-ps.x,ys.z,0,-ys.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-ys.y,ys.x,0];return!kr(t,qs,js,en,sr)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,qs,js,en,sr))?!1:(nr.crossVectors(fs,ps),t=[nr.x,nr.y,nr.z],kr(t,qs,js,en,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const es=[new A,new A,new A,new A,new A,new A,new A,new A],Wt=new A,tr=new Qs,qs=new A,js=new A,en=new A,fs=new A,ps=new A,ys=new A,An=new A,sr=new A,nr=new A,Hs=new A;function kr(n,e,t,s,r){for(let i=0,a=n.length-3;i<=a;i+=3){Hs.fromArray(n,i);const o=r.x*Math.abs(Hs.x)+r.y*Math.abs(Hs.y)+r.z*Math.abs(Hs.z),l=e.dot(Hs),h=t.dot(Hs),c=s.dot(Hs);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const jh=new Qs,Kn=new A,$r=new A;class zn{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):jh.setFromPoints(e).getCenter(s);let r=0;for(let i=0,a=e.length;i<a;i++)r=Math.max(r,s.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kn.subVectors(e,this.center);const t=Kn.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),r=(s-this.radius)*.5;this.center.addScaledVector(Kn,r/s),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kn.copy(e.center).add($r)),this.expandByPoint(Kn.copy(e.center).sub($r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ts=new A,qr=new A,rr=new A,ms=new A,jr=new A,ir=new A,ei=new A;class hl{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,s,r){qr.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),ms.copy(this.origin).sub(qr);const i=e.distanceTo(t)*.5,a=-this.direction.dot(rr),o=ms.dot(this.direction),l=-ms.dot(rr),h=ms.lengthSq(),c=Math.abs(1-a*a);let u,f,p,M;if(c>0)if(u=a*l-o,f=a*o-l,M=i*c,u>=0)if(f>=-M)if(f<=M){const _=1/c;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+h}else f=i,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+h;else f=-i,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+h;else f<=-M?(u=Math.max(0,-(-a*i+o)),f=u>0?-i:Math.min(Math.max(-i,-l),i),p=-u*u+f*(f+2*l)+h):f<=M?(u=0,f=Math.min(Math.max(-i,-l),i),p=f*(f+2*l)+h):(u=Math.max(0,-(a*i+o)),f=u>0?i:Math.min(Math.max(-i,-l),i),p=-u*u+f*(f+2*l)+h);else f=a>0?-i:i,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qr).addScaledVector(rr,f),p}intersectSphere(e,t){ts.subVectors(e.center,this.origin);const s=ts.dot(this.direction),r=ts.dot(ts)-s*s,i=e.radius*e.radius;if(r>i)return null;const a=Math.sqrt(i-r),o=s-a,l=s+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,r,i,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(s=(e.min.x-f.x)*h,r=(e.max.x-f.x)*h):(s=(e.max.x-f.x)*h,r=(e.min.x-f.x)*h),c>=0?(i=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(i=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),s>a||i>r||((i>s||isNaN(s))&&(s=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),s>l||o>r)||((o>s||s!==s)&&(s=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(s>=0?s:r,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,s,r,i){jr.subVectors(t,e),ir.subVectors(s,e),ei.crossVectors(jr,ir);let a=this.direction.dot(ei),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ms.subVectors(this.origin,e);const l=o*this.direction.dot(ir.crossVectors(ms,ir));if(l<0)return null;const h=o*this.direction.dot(jr.cross(ms));if(h<0||l+h>a)return null;const c=-o*ms.dot(ei);return c<0?null:this.at(c/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,s,r,i,a,o,l,h,c,u,f,p,M,_,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,r,i,a,o,l,h,c,u,f,p,M,_,m)}set(e,t,s,r,i,a,o,l,h,c,u,f,p,M,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=s,d[12]=r,d[1]=i,d[5]=a,d[9]=o,d[13]=l,d[2]=h,d[6]=c,d[10]=u,d[14]=f,d[3]=p,d[7]=M,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,r=1/tn.setFromMatrixColumn(e,0).length(),i=1/tn.setFromMatrixColumn(e,1).length(),a=1/tn.setFromMatrixColumn(e,2).length();return t[0]=s[0]*r,t[1]=s[1]*r,t[2]=s[2]*r,t[3]=0,t[4]=s[4]*i,t[5]=s[5]*i,t[6]=s[6]*i,t[7]=0,t[8]=s[8]*a,t[9]=s[9]*a,t[10]=s[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,r=e.y,i=e.z,a=Math.cos(s),o=Math.sin(s),l=Math.cos(r),h=Math.sin(r),c=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const f=a*c,p=a*u,M=o*c,_=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=p+M*h,t[5]=f-_*h,t[9]=-o*l,t[2]=_-f*h,t[6]=M+p*h,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,p=l*u,M=h*c,_=h*u;t[0]=f+_*o,t[4]=M*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=p*o-M,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,p=l*u,M=h*c,_=h*u;t[0]=f-_*o,t[4]=-a*u,t[8]=M+p*o,t[1]=p+M*o,t[5]=a*c,t[9]=_-f*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,p=a*u,M=o*c,_=o*u;t[0]=l*c,t[4]=M*h-p,t[8]=f*h+_,t[1]=l*u,t[5]=_*h+f,t[9]=p*h-M,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*h,M=o*l,_=o*h;t[0]=l*c,t[4]=_-f*u,t[8]=M*u+p,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*u+M,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,p=a*h,M=o*l,_=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=f*u+_,t[5]=a*c,t[9]=p*u-M,t[2]=M*u-p,t[6]=o*c,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ec,e,tc)}lookAt(e,t,s){const r=this.elements;return vt.subVectors(e,t),vt.lengthSq()===0&&(vt.z=1),vt.normalize(),Ls.crossVectors(s,vt),Ls.lengthSq()===0&&(Math.abs(s.z)===1?vt.x+=1e-4:vt.z+=1e-4,vt.normalize(),Ls.crossVectors(s,vt)),Ls.normalize(),ar.crossVectors(vt,Ls),r[0]=Ls.x,r[4]=ar.x,r[8]=vt.x,r[1]=Ls.y,r[5]=ar.y,r[9]=vt.y,r[2]=Ls.z,r[6]=ar.z,r[10]=vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,r=t.elements,i=this.elements,a=s[0],o=s[4],l=s[8],h=s[12],c=s[1],u=s[5],f=s[9],p=s[13],M=s[2],_=s[6],m=s[10],d=s[14],R=s[3],D=s[7],C=s[11],B=s[15],E=r[0],v=r[4],K=r[8],T=r[12],S=r[1],b=r[5],W=r[9],w=r[13],I=r[2],z=r[6],Z=r[10],$=r[14],X=r[3],re=r[7],ce=r[11],Me=r[15];return i[0]=a*E+o*S+l*I+h*X,i[4]=a*v+o*b+l*z+h*re,i[8]=a*K+o*W+l*Z+h*ce,i[12]=a*T+o*w+l*$+h*Me,i[1]=c*E+u*S+f*I+p*X,i[5]=c*v+u*b+f*z+p*re,i[9]=c*K+u*W+f*Z+p*ce,i[13]=c*T+u*w+f*$+p*Me,i[2]=M*E+_*S+m*I+d*X,i[6]=M*v+_*b+m*z+d*re,i[10]=M*K+_*W+m*Z+d*ce,i[14]=M*T+_*w+m*$+d*Me,i[3]=R*E+D*S+C*I+B*X,i[7]=R*v+D*b+C*z+B*re,i[11]=R*K+D*W+C*Z+B*ce,i[15]=R*T+D*w+C*$+B*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],r=e[8],i=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],f=e[10],p=e[14],M=e[3],_=e[7],m=e[11],d=e[15];return M*(+i*l*u-r*h*u-i*o*f+s*h*f+r*o*p-s*l*p)+_*(+t*l*p-t*h*f+i*a*f-r*a*p+r*h*c-i*l*c)+m*(+t*h*u-t*o*p-i*a*u+s*a*p+i*o*c-s*h*c)+d*(-r*o*c-t*l*u+t*o*f+r*a*u-s*a*f+s*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],f=e[10],p=e[11],M=e[12],_=e[13],m=e[14],d=e[15],R=u*m*h-_*f*h+_*l*p-o*m*p-u*l*d+o*f*d,D=M*f*h-c*m*h-M*l*p+a*m*p+c*l*d-a*f*d,C=c*_*h-M*u*h+M*o*p-a*_*p-c*o*d+a*u*d,B=M*u*l-c*_*l-M*o*f+a*_*f+c*o*m-a*u*m,E=t*R+s*D+r*C+i*B;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/E;return e[0]=R*v,e[1]=(_*f*i-u*m*i-_*r*p+s*m*p+u*r*d-s*f*d)*v,e[2]=(o*m*i-_*l*i+_*r*h-s*m*h-o*r*d+s*l*d)*v,e[3]=(u*l*i-o*f*i-u*r*h+s*f*h+o*r*p-s*l*p)*v,e[4]=D*v,e[5]=(c*m*i-M*f*i+M*r*p-t*m*p-c*r*d+t*f*d)*v,e[6]=(M*l*i-a*m*i-M*r*h+t*m*h+a*r*d-t*l*d)*v,e[7]=(a*f*i-c*l*i+c*r*h-t*f*h-a*r*p+t*l*p)*v,e[8]=C*v,e[9]=(M*u*i-c*_*i-M*s*p+t*_*p+c*s*d-t*u*d)*v,e[10]=(a*_*i-M*o*i+M*s*h-t*_*h-a*s*d+t*o*d)*v,e[11]=(c*o*i-a*u*i-c*s*h+t*u*h+a*s*p-t*o*p)*v,e[12]=B*v,e[13]=(c*_*r-M*u*r+M*s*f-t*_*f-c*s*m+t*u*m)*v,e[14]=(M*o*r-a*_*r-M*s*l+t*_*l+a*s*m-t*o*m)*v,e[15]=(a*u*r-c*o*r+c*s*l-t*u*l-a*s*f+t*o*f)*v,this}scale(e){const t=this.elements,s=e.x,r=e.y,i=e.z;return t[0]*=s,t[4]*=r,t[8]*=i,t[1]*=s,t[5]*=r,t[9]*=i,t[2]*=s,t[6]*=r,t[10]*=i,t[3]*=s,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,r))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),r=Math.sin(t),i=1-s,a=e.x,o=e.y,l=e.z,h=i*a,c=i*o;return this.set(h*a+s,h*o-r*l,h*l+r*o,0,h*o+r*l,c*o+s,c*l-r*a,0,h*l-r*o,c*l+r*a,i*l*l+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,r,i,a){return this.set(1,s,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,s){const r=this.elements,i=t._x,a=t._y,o=t._z,l=t._w,h=i+i,c=a+a,u=o+o,f=i*h,p=i*c,M=i*u,_=a*c,m=a*u,d=o*u,R=l*h,D=l*c,C=l*u,B=s.x,E=s.y,v=s.z;return r[0]=(1-(_+d))*B,r[1]=(p+C)*B,r[2]=(M-D)*B,r[3]=0,r[4]=(p-C)*E,r[5]=(1-(f+d))*E,r[6]=(m+R)*E,r[7]=0,r[8]=(M+D)*v,r[9]=(m-R)*v,r[10]=(1-(f+_))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,s){const r=this.elements;let i=tn.set(r[0],r[1],r[2]).length();const a=tn.set(r[4],r[5],r[6]).length(),o=tn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const h=1/i,c=1/a,u=1/o;return Jt.elements[0]*=h,Jt.elements[1]*=h,Jt.elements[2]*=h,Jt.elements[4]*=c,Jt.elements[5]*=c,Jt.elements[6]*=c,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),s.x=i,s.y=a,s.z=o,this}makePerspective(e,t,s,r,i,a,o=os){const l=this.elements,h=2*i/(t-e),c=2*i/(s-r),u=(t+e)/(t-e),f=(s+r)/(s-r);let p,M;if(o===os)p=-(a+i)/(a-i),M=-2*a*i/(a-i);else if(o===Kr)p=-a/(a-i),M=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,s,r,i,a,o=os){const l=this.elements,h=1/(t-e),c=1/(s-r),u=1/(a-i),f=(t+e)*h,p=(s+r)*c;let M,_;if(o===os)M=(a+i)*u,_=-2*u;else if(o===Kr)M=i*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let r=0;r<16;r++)if(t[r]!==s[r])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const tn=new A,Jt=new $e,ec=new A(0,0,0),tc=new A(1,1,1),Ls=new A,ar=new A,vt=new A,za=new $e,ka=new Is;class $t{constructor(e=0,t=0,s=0,r=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,r=this._order){return this._x=e,this._y=t,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const r=e.elements,i=r[0],a=r[4],o=r[8],l=r[1],h=r[5],c=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(za,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ka.setFromEuler(this),this.setFromQuaternion(ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sc=0;const $a=new A,sn=new Is,ss=new $e,or=new A,Bn=new A,nc=new A,rc=new Is,qa=new A(1,0,0),ja=new A(0,1,0),eo=new A(0,0,1),to={type:"added"},ic={type:"removed"},nn={type:"childadded",child:null},ti={type:"childremoved",child:null};class ct extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new A,t=new $t,s=new Is,r=new A(1,1,1);function i(){s.setFromEuler(t,!1)}function a(){t.setFromQuaternion(s,void 0,!1)}t._onChange(i),s._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new Pe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sn.setFromAxisAngle(e,t),this.quaternion.multiply(sn),this}rotateOnWorldAxis(e,t){return sn.setFromAxisAngle(e,t),this.quaternion.premultiply(sn),this}rotateX(e){return this.rotateOnAxis(qa,e)}rotateY(e){return this.rotateOnAxis(ja,e)}rotateZ(e){return this.rotateOnAxis(eo,e)}translateOnAxis(e,t){return $a.copy(e).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qa,e)}translateY(e){return this.translateOnAxis(ja,e)}translateZ(e){return this.translateOnAxis(eo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?or.copy(e):or.set(e,t,s);const r=this.parent;this.updateWorldMatrix(!0,!1),Bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(Bn,or,this.up):ss.lookAt(or,Bn,this.up),this.quaternion.setFromRotationMatrix(ss),r&&(ss.extractRotation(r.matrixWorld),sn.setFromRotationMatrix(ss),this.quaternion.premultiply(sn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(to),nn.child=e,this.dispatchEvent(nn),nn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ic),ti.child=e,this.dispatchEvent(ti),ti.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(to),nn.child=e,this.dispatchEvent(nn),nn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,e,nc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,rc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,r=t.length;s<r;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,r=t.length;s<r;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,r=t.length;s<r;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];i(e.shapes,u)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(i(e.materials,this.material[l]));r.material=o}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(i(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),M=a(e.nodes);o.length>0&&(s.geometries=o),l.length>0&&(s.materials=l),h.length>0&&(s.textures=h),c.length>0&&(s.images=c),u.length>0&&(s.shapes=u),f.length>0&&(s.skeletons=f),p.length>0&&(s.animations=p),M.length>0&&(s.nodes=M)}return s.object=r,s;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const r=e.children[s];this.add(r.clone())}return this}}ct.DEFAULT_UP=new A(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new A,ns=new A,si=new A,rs=new A,rn=new A,an=new A,so=new A,ni=new A,ri=new A,ii=new A,ai=new it,oi=new it,li=new it;class Nt{constructor(e=new A,t=new A,s=new A){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,r){r.subVectors(s,t),Xt.subVectors(e,t),r.cross(Xt);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,s,r,i){Xt.subVectors(r,t),ns.subVectors(s,t),si.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(ns),l=Xt.dot(si),h=ns.dot(ns),c=ns.dot(si),u=a*h-o*o;if(u===0)return i.set(0,0,0),null;const f=1/u,p=(h*l-o*c)*f,M=(a*c-o*l)*f;return i.set(1-p-M,M,p)}static containsPoint(e,t,s,r){return this.getBarycoord(e,t,s,r,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,t,s,r,i,a,o,l){return this.getBarycoord(e,t,s,r,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,rs.x),l.addScaledVector(a,rs.y),l.addScaledVector(o,rs.z),l)}static getInterpolatedAttribute(e,t,s,r,i,a){return ai.setScalar(0),oi.setScalar(0),li.setScalar(0),ai.fromBufferAttribute(e,t),oi.fromBufferAttribute(e,s),li.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ai,i.x),a.addScaledVector(oi,i.y),a.addScaledVector(li,i.z),a}static isFrontFacing(e,t,s,r){return Xt.subVectors(s,t),ns.subVectors(e,t),Xt.cross(ns).dot(r)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,r){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,s,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),Xt.cross(ns).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,r,i){return Nt.getInterpolation(e,this.a,this.b,this.c,t,s,r,i)}containsPoint(e){return Nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,r=this.b,i=this.c;let a,o;rn.subVectors(r,s),an.subVectors(i,s),ni.subVectors(e,s);const l=rn.dot(ni),h=an.dot(ni);if(l<=0&&h<=0)return t.copy(s);ri.subVectors(e,r);const c=rn.dot(ri),u=an.dot(ri);if(c>=0&&u<=c)return t.copy(r);const f=l*u-c*h;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(s).addScaledVector(rn,a);ii.subVectors(e,i);const p=rn.dot(ii),M=an.dot(ii);if(M>=0&&p<=M)return t.copy(i);const _=p*h-l*M;if(_<=0&&h>=0&&M<=0)return o=h/(h-M),t.copy(s).addScaledVector(an,o);const m=c*M-p*u;if(m<=0&&u-c>=0&&p-M>=0)return so.subVectors(i,r),o=(u-c)/(u-c+(p-M)),t.copy(r).addScaledVector(so,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(s).addScaledVector(rn,a).addScaledVector(an,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},lr={h:0,s:0,l:0};function hi(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ie{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,s,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=s,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,s,r=Ze.workingColorSpace){if(e=Ga(e,1),t=Ae(t,0,1),s=Ae(s,0,1),t===0)this.r=this.g=this.b=s;else{const i=s<=.5?s*(1+t):s+t-s*t,a=2*s-i;this.r=hi(a,i,e+1/3),this.g=hi(a,i,e),this.b=hi(a,i,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function s(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return s(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return s(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return s(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=r[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const s=dl[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ze.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Ae(Mt.r*255,0,255))*65536+Math.round(Ae(Mt.g*255,0,255))*256+Math.round(Ae(Mt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Mt.copy(this),t);const s=Mt.r,r=Mt.g,i=Mt.b,a=Math.max(s,r,i),o=Math.min(s,r,i);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case s:l=(r-i)/u+(r<i?6:0);break;case r:l=(i-s)/u+2;break;case i:l=(s-r)/u+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Kt){Ze.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,s=Mt.g,r=Mt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(r*255)})`}offsetHSL(e,t,s){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+t,Ms.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Ms),e.getHSL(lr);const s=In(Ms.h,lr.h,t),r=In(Ms.s,lr.s,t),i=In(Ms.l,lr.l,t);return this.setHSL(s,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*s+i[6]*r,this.g=i[1]*t+i[4]*s+i[7]*r,this.b=i[2]*t+i[5]*s+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ie;Ie.NAMES=dl;let ac=0;class En extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Sn,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ri,this.blendDst=Di,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Cn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(s):r&&r.isVector3&&s&&s.isVector3?r.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Sn&&(s.blending=this.blending),this.side!==vs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ri&&(s.blendSrc=this.blendSrc),this.blendDst!==Di&&(s.blendDst=this.blendDst),this.blendEquation!==Vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cn&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function r(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(t){const i=r(e.textures),a=r(e.images);i.length>0&&(s.textures=i),a.length>0&&(s.images=a)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const r=t.length;s=new Array(r);for(let i=0;i!==r;++i)s[i]=t[i].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ul extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new A,hr=new Ge;class Et{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=ha,this.updateRanges=[],this.gpuType=Ot,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[s+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Zt(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Oe(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Oe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Oe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Oe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Oe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Oe(t,this.array),s=Oe(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,r){return e*=this.itemSize,this.normalized&&(t=Oe(t,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=r,this}setXYZW(e,t,s,r,i){return e*=this.itemSize,this.normalized&&(t=Oe(t,this.array),s=Oe(s,this.array),r=Oe(r,this.array),i=Oe(i,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ha&&(e.usage=this.usage),e}}class fl extends Et{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class pl extends Et{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class zt extends Et{constructor(e,t,s){super(new Float32Array(e),t,s)}}let oc=0;const At=new $e,ci=new ct,on=new A,xt=new Qs,Nn=new Qs,ft=new A;class qt extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(al(e)?pl:fl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const i=new Pe().getNormalMatrix(e);s.applyNormalMatrix(i),s.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return At.makeRotationFromQuaternion(e),this.applyMatrix4(At),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,s){return At.makeTranslation(e,t,s),this.applyMatrix4(At),this}scale(e,t,s){return At.makeScale(e,t,s),this.applyMatrix4(At),this}lookAt(e){return ci.lookAt(e),ci.updateMatrix(),this.applyMatrix4(ci.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(on).negate(),this.translate(on.x,on.y,on.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let r=0,i=e.length;r<i;r++){const a=e[r];s.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(s,3))}else{const s=Math.min(e.length,t.count);for(let r=0;r<s;r++){const i=e[r];t.setXYZ(r,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const i=t[s];xt.setFromBufferAttribute(i),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,xt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,xt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(xt.min),this.boundingBox.expandByPoint(xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const s=this.boundingSphere.center;if(xt.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Nn.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(xt.min,Nn.min),xt.expandByPoint(ft),ft.addVectors(xt.max,Nn.max),xt.expandByPoint(ft)):(xt.expandByPoint(Nn.min),xt.expandByPoint(Nn.max))}xt.getCenter(s);let r=0;for(let i=0,a=e.count;i<a;i++)ft.fromBufferAttribute(e,i),r=Math.max(r,s.distanceToSquared(ft));if(t)for(let i=0,a=t.length;i<a;i++){const o=t[i],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)ft.fromBufferAttribute(o,h),l&&(on.fromBufferAttribute(e,h),ft.add(on)),r=Math.max(r,s.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,r=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*s.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let K=0;K<s.count;K++)o[K]=new A,l[K]=new A;const h=new A,c=new A,u=new A,f=new Ge,p=new Ge,M=new Ge,_=new A,m=new A;function d(K,T,S){h.fromBufferAttribute(s,K),c.fromBufferAttribute(s,T),u.fromBufferAttribute(s,S),f.fromBufferAttribute(i,K),p.fromBufferAttribute(i,T),M.fromBufferAttribute(i,S),c.sub(h),u.sub(h),p.sub(f),M.sub(f);const b=1/(p.x*M.y-M.x*p.y);isFinite(b)&&(_.copy(c).multiplyScalar(M.y).addScaledVector(u,-p.y).multiplyScalar(b),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-M.x).multiplyScalar(b),o[K].add(_),o[T].add(_),o[S].add(_),l[K].add(m),l[T].add(m),l[S].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let K=0,T=R.length;K<T;++K){const S=R[K],b=S.start,W=S.count;for(let w=b,I=b+W;w<I;w+=3)d(e.getX(w+0),e.getX(w+1),e.getX(w+2))}const D=new A,C=new A,B=new A,E=new A;function v(K){B.fromBufferAttribute(r,K),E.copy(B);const T=o[K];D.copy(T),D.sub(B.multiplyScalar(B.dot(T))).normalize(),C.crossVectors(E,T);const b=C.dot(l[K])<0?-1:1;a.setXYZW(K,D.x,D.y,D.z,b)}for(let K=0,T=R.length;K<T;++K){const S=R[K],b=S.start,W=S.count;for(let w=b,I=b+W;w<I;w+=3)v(e.getX(w+0)),v(e.getX(w+1)),v(e.getX(w+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let f=0,p=s.count;f<p;f++)s.setXYZ(f,0,0,0);const r=new A,i=new A,a=new A,o=new A,l=new A,h=new A,c=new A,u=new A;if(e)for(let f=0,p=e.count;f<p;f+=3){const M=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,M),i.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),c.subVectors(a,i),u.subVectors(r,i),c.cross(u),o.fromBufferAttribute(s,M),l.fromBufferAttribute(s,_),h.fromBufferAttribute(s,m),o.add(c),l.add(c),h.add(c),s.setXYZ(M,o.x,o.y,o.z),s.setXYZ(_,l.x,l.y,l.z),s.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,i),u.subVectors(r,i),c.cross(u),s.setXYZ(f+0,c.x,c.y,c.z),s.setXYZ(f+1,c.x,c.y,c.z),s.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,u=o.normalized,f=new h.constructor(l.length*c);let p=0,M=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let d=0;d<c;d++)f[M++]=h[p++]}return new Et(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,s=this.index.array,r=this.attributes;for(const o in r){const l=r[o],h=e(l,s);t.setAttribute(o,h)}const i=this.morphAttributes;for(const o in i){const l=[],h=i[o];for(let c=0,u=h.length;c<u;c++){const f=h[c],p=e(f,s);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const l in s){const h=s[l];e.data.attributes[l]=h.toJSON(e.data)}const r={};let i=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,f=h.length;u<f;u++){const p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const r=e.attributes;for(const h in r){const c=r[h];this.setAttribute(h,c.clone(t))}const i=e.morphAttributes;for(const h in i){const c=[],u=i[h];for(let f=0,p=u.length;f<p;f++)c.push(u[f].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const no=new $e,As=new hl,cr=new zn,ro=new A,dr=new A,ur=new A,fr=new A,di=new A,pr=new A,io=new A,mr=new A;class Ft extends ct{constructor(e=new qt,t=new ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const r=t[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const s=this.geometry,r=s.attributes.position,i=s.morphAttributes.position,a=s.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(i&&o){pr.set(0,0,0);for(let l=0,h=i.length;l<h;l++){const c=o[l],u=i[l];c!==0&&(di.fromBufferAttribute(u,e),a?pr.addScaledVector(di,c):pr.addScaledVector(di.sub(t),c))}t.add(pr)}return t}raycast(e,t){const s=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cr.copy(s.boundingSphere),cr.applyMatrix4(i),As.copy(e.ray).recast(e.near),!(cr.containsPoint(As.origin)===!1&&(As.intersectSphere(cr,ro)===null||As.origin.distanceToSquared(ro)>(e.far-e.near)**2))&&(no.copy(i).invert(),As.copy(e.ray).applyMatrix4(no),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,s){let r;const i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,h=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,f=i.groups,p=i.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,_=f.length;M<_;M++){const m=f[M],d=a[m.materialIndex],R=Math.max(m.start,p.start),D=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let C=R,B=D;C<B;C+=3){const E=o.getX(C),v=o.getX(C+1),K=o.getX(C+2);r=Lr(this,d,e,s,h,c,u,E,v,K),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const M=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=M,d=_;m<d;m+=3){const R=o.getX(m),D=o.getX(m+1),C=o.getX(m+2);r=Lr(this,a,e,s,h,c,u,R,D,C),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let M=0,_=f.length;M<_;M++){const m=f[M],d=a[m.materialIndex],R=Math.max(m.start,p.start),D=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let C=R,B=D;C<B;C+=3){const E=C,v=C+1,K=C+2;r=Lr(this,d,e,s,h,c,u,E,v,K),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const M=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=M,d=_;m<d;m+=3){const R=m,D=m+1,C=m+2;r=Lr(this,a,e,s,h,c,u,R,D,C),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function lc(n,e,t,s,r,i,a,o){let l;if(e.side===Rt?l=s.intersectTriangle(a,i,r,!0,o):l=s.intersectTriangle(r,i,a,e.side===vs,o),l===null)return null;mr.copy(o),mr.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(mr);return h<t.near||h>t.far?null:{distance:h,point:mr.clone(),object:n}}function Lr(n,e,t,s,r,i,a,o,l,h){n.getVertexPosition(o,dr),n.getVertexPosition(l,ur),n.getVertexPosition(h,fr);const c=lc(n,e,t,s,dr,ur,fr,io);if(c){const u=new A;Nt.getBarycoord(io,dr,ur,fr,u),r&&(c.uv=Nt.getInterpolatedAttribute(r,o,l,h,u,new Ge)),i&&(c.uv1=Nt.getInterpolatedAttribute(i,o,l,h,u,new Ge)),a&&(c.normal=Nt.getInterpolatedAttribute(a,o,l,h,u,new A),c.normal.dot(s.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:h,normal:new A,materialIndex:0};Nt.getNormal(dr,ur,fr,f.normal),c.face=f,c.barycoord=u}return c}class kn extends qt{constructor(e=1,t=1,s=1,r=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:r,heightSegments:i,depthSegments:a};const o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);const l=[],h=[],c=[],u=[];let f=0,p=0;M("z","y","x",-1,-1,s,t,e,a,i,0),M("z","y","x",1,-1,s,t,-e,a,i,1),M("x","z","y",1,1,e,s,t,r,a,2),M("x","z","y",1,-1,e,s,-t,r,a,3),M("x","y","z",1,-1,e,t,s,r,i,4),M("x","y","z",-1,-1,e,t,-s,r,i,5),this.setIndex(l),this.setAttribute("position",new zt(h,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(u,2));function M(_,m,d,R,D,C,B,E,v,K,T){const S=C/v,b=B/K,W=C/2,w=B/2,I=E/2,z=v+1,Z=K+1;let $=0,X=0;const re=new A;for(let ce=0;ce<Z;ce++){const Me=ce*b-w;for(let Ke=0;Ke<z;Ke++){const qe=Ke*S-W;re[_]=qe*R,re[m]=Me*D,re[d]=I,h.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[d]=E>0?1:-1,c.push(re.x,re.y,re.z),u.push(Ke/v),u.push(1-ce/K),$+=1}}for(let ce=0;ce<K;ce++)for(let Me=0;Me<v;Me++){const Ke=f+Me+z*ce,qe=f+Me+z*(ce+1),Y=f+(Me+1)+z*(ce+1),ee=f+(Me+1)+z*ce;l.push(Ke,qe,ee),l.push(qe,Y,ee),X+=6}o.addGroup(p,X,T),p+=X,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bn(n){const e={};for(const t in n){e[t]={};for(const s in n[t]){const r=n[t][s];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=r.clone():Array.isArray(r)?e[t][s]=r.slice():e[t][s]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const s=bn(n[t]);for(const r in s)e[r]=s[r]}return e}function hc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ml(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const cc={clone:bn,merge:Tt};var dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dc,this.fragmentShader=uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bn(e.uniforms),this.uniformsGroups=hc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const r in this.extensions)this.extensions[r]===!0&&(s[r]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Ll extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=os}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new A,ao=new Ge,oo=new Ge;class Bt extends Ll{constructor(e=50,t=1,s=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yn*2*Math.atan(Math.tan(Zn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,ao,oo),t.subVectors(oo,ao)}setViewOffset(e,t,s,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zn*.5*this.fov)/this.zoom,s=2*t,r=this.aspect*s,i=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;i+=a.offsetX*r/l,t-=a.offsetY*s/h,r*=a.width/l,s*=a.height/h}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ln=-90,hn=1;class fc extends ct{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(ln,hn,e,t);r.layers=this.layers,this.add(r);const i=new Bt(ln,hn,e,t);i.layers=this.layers,this.add(i);const a=new Bt(ln,hn,e,t);a.layers=this.layers,this.add(a);const o=new Bt(ln,hn,e,t);o.layers=this.layers,this.add(o);const l=new Bt(ln,hn,e,t);l.layers=this.layers,this.add(l);const h=new Bt(ln,hn,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,r,i,a,o,l]=t;for(const h of t)this.remove(h);if(e===os)s.up.set(0,1,0),s.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)s.up.set(0,-1,0),s.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,l,h,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const _=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,r),e.render(t,i),e.setRenderTarget(s,1,r),e.render(t,a),e.setRenderTarget(s,2,r),e.render(t,o),e.setRenderTarget(s,3,r),e.render(t,l),e.setRenderTarget(s,4,r),e.render(t,h),s.texture.generateMipmaps=_,e.setRenderTarget(s,5,r),e.render(t,c),e.setRenderTarget(u,f,p),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class Ml extends gt{constructor(e,t,s,r,i,a,o,l,h,c){e=e!==void 0?e:[],t=t!==void 0?t:Gn,super(e,t,s,r,i,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pc extends Zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},r=[s,s,s,s,s,s];this.texture=new Ml(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new kn(5,5,5),i=new xs({name:"CubemapFromEquirect",uniforms:bn(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Rt,blending:Gs});i.uniforms.tEquirect.value=t;const a=new Ft(r,i),o=t.minFilter;return t.minFilter===Js&&(t.minFilter=Qt),new fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,s,r){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,s,r);e.setRenderTarget(i)}}class mc extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ha,this.updateRanges=[],this.version=0,this.uuid=cs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[s+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _t=new A;class Nr{constructor(e,t,s,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=Zt(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Oe(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=Oe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Oe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Oe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Oe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Oe(t,this.array),s=Oe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Oe(t,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=r,this}setXYZW(e,t,s,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Oe(t,this.array),s=Oe(s,this.array),r=Oe(r,this.array),i=Oe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const r=s*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const r=s*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gl extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cn;const Fn=new A,dn=new A,un=new A,fn=new Ge,Vn=new Ge,Sl=new $e,Mr=new A,wn=new A,gr=new A,lo=new Ge,ui=new Ge,ho=new Ge;class Mc extends ct{constructor(e=new gl){if(super(),this.isSprite=!0,this.type="Sprite",cn===void 0){cn=new qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Lc(t,5);cn.setIndex([0,1,2,0,2,3]),cn.setAttribute("position",new Nr(s,3,0,!1)),cn.setAttribute("uv",new Nr(s,2,3,!1))}this.geometry=cn,this.material=e,this.center=new Ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dn.setFromMatrixScale(this.matrixWorld),Sl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),un.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dn.multiplyScalar(-un.z);const s=this.material.rotation;let r,i;s!==0&&(i=Math.cos(s),r=Math.sin(s));const a=this.center;Sr(Mr.set(-.5,-.5,0),un,a,dn,r,i),Sr(wn.set(.5,-.5,0),un,a,dn,r,i),Sr(gr.set(.5,.5,0),un,a,dn,r,i),lo.set(0,0),ui.set(1,0),ho.set(1,1);let o=e.ray.intersectTriangle(Mr,wn,gr,!1,Fn);if(o===null&&(Sr(wn.set(-.5,.5,0),un,a,dn,r,i),ui.set(0,1),o=e.ray.intersectTriangle(Mr,gr,wn,!1,Fn),o===null))return;const l=e.ray.origin.distanceTo(Fn);l<e.near||l>e.far||t.push({distance:l,point:Fn.clone(),uv:Nt.getInterpolation(Fn,Mr,wn,gr,lo,ui,ho,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sr(n,e,t,s,r,i){fn.subVectors(n,t).addScalar(.5).multiply(s),r!==void 0?(Vn.x=i*fn.x-r*fn.y,Vn.y=r*fn.x+i*fn.y):Vn.copy(fn),n.copy(e),n.x+=Vn.x,n.y+=Vn.y,n.applyMatrix4(Sl)}class gc extends gt{constructor(e=null,t=1,s=1,r,i,a,o,l,h=bt,c=bt,u,f){super(null,a,o,l,h,c,r,i,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class co extends Et{constructor(e,t,s,r=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pn=new $e,uo=new $e,_r=[],fo=new Qs,Sc=new $e,Wn=new Ft,Jn=new zn;class _c extends Ft{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new co(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<s;r++)this.setMatrixAt(r,Sc)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,pn),fo.copy(e.boundingBox).applyMatrix4(pn),this.boundingBox.union(fo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,pn),Jn.copy(e.boundingSphere).applyMatrix4(pn),this.boundingSphere.union(Jn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const s=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=s.length+1,a=e*i+1;for(let o=0;o<s.length;o++)s[o]=r[a+o]}raycast(e,t){const s=this.matrixWorld,r=this.count;if(Wn.geometry=this.geometry,Wn.material=this.material,Wn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jn.copy(this.boundingSphere),Jn.applyMatrix4(s),e.ray.intersectsSphere(Jn)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,pn),uo.multiplyMatrices(s,pn),Wn.matrixWorld=uo,Wn.raycast(e,_r);for(let a=0,o=_r.length;a<o;a++){const l=_r[a];l.instanceId=i,l.object=this,t.push(l)}_r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const s=t.morphTargetInfluences,r=s.length+1;this.morphTexture===null&&(this.morphTexture=new gc(new Float32Array(r*this.count),r,this.count,Sa,Ot));const i=this.morphTexture.source.data.data;let a=0;for(let h=0;h<s.length;h++)a+=s[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;i[l]=o,i.set(s,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const fi=new A,Tc=new A,Cc=new Pe;class Ss{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,r){return this.normal.set(e,t,s),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const r=fi.subVectors(s,t).cross(Tc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(fi),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(s,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Cc.getNormalMatrix(e),r=this.coplanarPoint(fi).applyMatrix4(e),i=this.normal.applyMatrix3(s).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new zn,Tr=new A;class Ra{constructor(e=new Ss,t=new Ss,s=new Ss,r=new Ss,i=new Ss,a=new Ss){this.planes=[e,t,s,r,i,a]}set(e,t,s,r,i,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(s),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=os){const s=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],l=r[3],h=r[4],c=r[5],u=r[6],f=r[7],p=r[8],M=r[9],_=r[10],m=r[11],d=r[12],R=r[13],D=r[14],C=r[15];if(s[0].setComponents(l-i,f-h,m-p,C-d).normalize(),s[1].setComponents(l+i,f+h,m+p,C+d).normalize(),s[2].setComponents(l+a,f+c,m+M,C+R).normalize(),s[3].setComponents(l-a,f-c,m-M,C-R).normalize(),s[4].setComponents(l-o,f-u,m-_,C-D).normalize(),t===os)s[5].setComponents(l+o,f+u,m+_,C+D).normalize();else if(t===Kr)s[5].setComponents(o,u,_,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){return Ks.center.set(0,0,0),Ks.radius=.7071067811865476,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const t=this.planes,s=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(s)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const r=t[s];if(Tr.x=r.normal.x>0?e.max.x:e.min.x,Tr.y=r.normal.y>0?e.max.y:e.min.y,Tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cr extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Gc extends gt{constructor(e,t,s,r,i,a,o,l,h){super(e,t,s,r,i,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _l extends gt{constructor(e,t,s,r,i,a,o,l,h,c=_n){if(c!==_n&&c!==vn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&c===_n&&(s=Xs),s===void 0&&c===vn&&(s=Dn),super(null,r,i,a,o,l,c,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fr extends qt{constructor(e=1,t=1,s=1,r=32,i=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:l};const h=this;r=Math.floor(r),i=Math.floor(i);const c=[],u=[],f=[],p=[];let M=0;const _=[],m=s/2;let d=0;R(),a===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(c),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(p,2));function R(){const C=new A,B=new A;let E=0;const v=(t-e)/s;for(let K=0;K<=i;K++){const T=[],S=K/i,b=S*(t-e)+e;for(let W=0;W<=r;W++){const w=W/r,I=w*l+o,z=Math.sin(I),Z=Math.cos(I);B.x=b*z,B.y=-S*s+m,B.z=b*Z,u.push(B.x,B.y,B.z),C.set(z,v,Z).normalize(),f.push(C.x,C.y,C.z),p.push(w,1-S),T.push(M++)}_.push(T)}for(let K=0;K<r;K++)for(let T=0;T<i;T++){const S=_[T][K],b=_[T+1][K],W=_[T+1][K+1],w=_[T][K+1];(e>0||T!==0)&&(c.push(S,b,w),E+=3),(t>0||T!==i-1)&&(c.push(b,W,w),E+=3)}h.addGroup(d,E,0),d+=E}function D(C){const B=M,E=new Ge,v=new A;let K=0;const T=C===!0?e:t,S=C===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),M++;const b=M;for(let W=0;W<=r;W++){const I=W/r*l+o,z=Math.cos(I),Z=Math.sin(I);v.x=T*Z,v.y=m*S,v.z=T*z,u.push(v.x,v.y,v.z),f.push(0,S,0),E.x=z*.5+.5,E.y=Z*.5*S+.5,p.push(E.x,E.y),M++}for(let W=0;W<r;W++){const w=B+W,I=b+W;C===!0?c.push(I,I+1,w):c.push(I+1,I,w),K+=3}h.addGroup(d,K,C===!0?1:2),d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wr extends qt{constructor(e=1,t=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:r};const i=e/2,a=t/2,o=Math.floor(s),l=Math.floor(r),h=o+1,c=l+1,u=e/o,f=t/l,p=[],M=[],_=[],m=[];for(let d=0;d<c;d++){const R=d*f-a;for(let D=0;D<h;D++){const C=D*u-i;M.push(C,-R,0),_.push(0,0,1),m.push(D/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<o;R++){const D=R+h*d,C=R+h*(d+1),B=R+1+h*(d+1),E=R+1+h*d;p.push(D,C,E),p.push(C,B,E)}this.setIndex(p),this.setAttribute("position",new zt(M,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rc extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dc extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vc extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tl extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const pi=new $e,po=new A,mo=new A;class xc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;po.setFromMatrixPosition(e.matrixWorld),t.position.copy(po),mo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mo),t.updateMatrixWorld(),pi.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pi),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(pi)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cl extends Ll{constructor(e=-1,t=1,s=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=s-e,a=s+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=h*this.view.offsetX,a=i+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bc extends xc{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ec extends Tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new bc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pc extends Tl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yc extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lo{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Ae(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hc extends Ys{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Mo(n,e,t,s){const r=Ac(s);switch(t){case qo:return n*e;case el:return n*e;case tl:return n*e*2;case Sa:return n*e/r.components*r.byteLength;case _a:return n*e/r.components*r.byteLength;case sl:return n*e*2/r.components*r.byteLength;case Ta:return n*e*2/r.components*r.byteLength;case jo:return n*e*3/r.components*r.byteLength;case It:return n*e*4/r.components*r.byteLength;case Ca:return n*e*4/r.components*r.byteLength;case xr:case br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Er:case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vi:case Wi:return Math.max(n,16)*Math.max(e,8)/4;case Fi:case wi:return Math.max(n,8)*Math.max(e,8)/2;case Ji:case Xi:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zi:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ii:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ui:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yi:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qi:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Oi:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zi:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ki:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $i:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qi:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ji:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case na:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yr:case ra:case ia:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nl:case aa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oa:case la:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ac(n){switch(n){case us:case zo:return{byteLength:1,components:1};case Un:case ko:case On:return{byteLength:2,components:1};case Ma:case ga:return{byteLength:2,components:4};case Xs:case La:case Ot:return{byteLength:4,components:1};case $o:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gl(){let n=null,e=!1,t=null,s=null;function r(i,a){t(i,a),s=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(s=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){n=i}}}function Kc(n){const e=new WeakMap;function t(o,l){const h=o.array,c=o.usage,u=h.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=n.SHORT;else if(h instanceof Uint32Array)p=n.UNSIGNED_INT;else if(h instanceof Int32Array)p=n.INT;else if(h instanceof Int8Array)p=n.BYTE;else if(h instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function s(o,l,h){const c=l.array,u=l.updateRanges;if(n.bindBuffer(h,o),u.length===0)n.bufferSubData(h,0,c);else{u.sort((p,M)=>p.start-M.start);let f=0;for(let p=1;p<u.length;p++){const M=u[f],_=u[p];_.start<=M.start+M.count+1?M.count=Math.max(M.count,_.start+_.count-M.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,M=u.length;p<M;p++){const _=u[p];n.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,o,l),h.version=o.version}}return{get:r,remove:i,update:a}}var Bc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ic=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ru=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,au=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Su=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_u=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Au=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ju=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ou=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ku=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$u=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ju=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,af=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ff=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Bc,alphahash_pars_fragment:Nc,alphamap_fragment:Fc,alphamap_pars_fragment:Vc,alphatest_fragment:wc,alphatest_pars_fragment:Wc,aomap_fragment:Jc,aomap_pars_fragment:Xc,batching_pars_vertex:Zc,batching_vertex:Ic,begin_vertex:Uc,beginnormal_vertex:Yc,bsdfs:Qc,iridescence_fragment:Oc,bumpmap_pars_fragment:zc,clipping_planes_fragment:kc,clipping_planes_pars_fragment:$c,clipping_planes_pars_vertex:qc,clipping_planes_vertex:jc,color_fragment:ed,color_pars_fragment:td,color_pars_vertex:sd,color_vertex:nd,common:rd,cube_uv_reflection_fragment:id,defaultnormal_vertex:ad,displacementmap_pars_vertex:od,displacementmap_vertex:ld,emissivemap_fragment:hd,emissivemap_pars_fragment:cd,colorspace_fragment:dd,colorspace_pars_fragment:ud,envmap_fragment:fd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:xd,envmap_vertex:Md,fog_vertex:gd,fog_pars_vertex:Sd,fog_fragment:_d,fog_pars_fragment:Td,gradientmap_pars_fragment:Cd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Dd,lights_pars_begin:vd,lights_toon_fragment:bd,lights_toon_pars_fragment:Ed,lights_phong_fragment:Pd,lights_phong_pars_fragment:yd,lights_physical_fragment:Hd,lights_physical_pars_fragment:Ad,lights_fragment_begin:Kd,lights_fragment_maps:Bd,lights_fragment_end:Nd,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:Wd,map_fragment:Jd,map_pars_fragment:Xd,map_particle_fragment:Zd,map_particle_pars_fragment:Id,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Yd,morphinstance_vertex:Qd,morphcolor_vertex:Od,morphnormal_vertex:zd,morphtarget_pars_vertex:kd,morphtarget_vertex:$d,normal_fragment_begin:qd,normal_fragment_maps:jd,normal_pars_fragment:eu,normal_pars_vertex:tu,normal_vertex:su,normalmap_pars_fragment:nu,clearcoat_normal_fragment_begin:ru,clearcoat_normal_fragment_maps:iu,clearcoat_pars_fragment:au,iridescence_pars_fragment:ou,opaque_fragment:lu,packing:hu,premultiplied_alpha_fragment:cu,project_vertex:du,dithering_fragment:uu,dithering_pars_fragment:fu,roughnessmap_fragment:pu,roughnessmap_pars_fragment:mu,shadowmap_pars_fragment:Lu,shadowmap_pars_vertex:Mu,shadowmap_vertex:gu,shadowmask_pars_fragment:Su,skinbase_vertex:_u,skinning_pars_vertex:Tu,skinning_vertex:Cu,skinnormal_vertex:Gu,specularmap_fragment:Ru,specularmap_pars_fragment:Du,tonemapping_fragment:vu,tonemapping_pars_fragment:xu,transmission_fragment:bu,transmission_pars_fragment:Eu,uv_pars_fragment:Pu,uv_pars_vertex:yu,uv_vertex:Hu,worldpos_vertex:Au,background_vert:Ku,background_frag:Bu,backgroundCube_vert:Nu,backgroundCube_frag:Fu,cube_vert:Vu,cube_frag:wu,depth_vert:Wu,depth_frag:Ju,distanceRGBA_vert:Xu,distanceRGBA_frag:Zu,equirect_vert:Iu,equirect_frag:Uu,linedashed_vert:Yu,linedashed_frag:Qu,meshbasic_vert:Ou,meshbasic_frag:zu,meshlambert_vert:ku,meshlambert_frag:$u,meshmatcap_vert:qu,meshmatcap_frag:ju,meshnormal_vert:ef,meshnormal_frag:tf,meshphong_vert:sf,meshphong_frag:nf,meshphysical_vert:rf,meshphysical_frag:af,meshtoon_vert:of,meshtoon_frag:lf,points_vert:hf,points_frag:cf,shadow_vert:df,shadow_frag:uf,sprite_vert:ff,sprite_frag:pf},te={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Yt={basic:{uniforms:Tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Tt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Tt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Tt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Tt([te.points,te.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Tt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Tt([te.common,te.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Tt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Tt([te.sprite,te.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Tt([te.common,te.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Tt([te.lights,te.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Yt.physical={uniforms:Tt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Gr={r:0,b:0,g:0},Bs=new $t,mf=new $e;function Lf(n,e,t,s,r,i,a){const o=new Ie(0);let l=i===!0?0:1,h,c,u=null,f=0,p=null;function M(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?t:e).get(C)),C}function _(D){let C=!1;const B=M(D);B===null?d(o,l):B&&B.isColor&&(d(B,1),C=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?s.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,a),(n.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(D,C){const B=M(C);B&&(B.isCubeTexture||B.mapping===wr)?(c===void 0&&(c=new Ft(new kn(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:bn(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,v,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Bs.copy(C.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),c.material.uniforms.envMap.value=B,c.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mf.makeRotationFromEuler(Bs)),c.material.toneMapped=Ze.getTransfer(B.colorSpace)!==ze,(u!==B||f!==B.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=B,f=B.version,p=n.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null)):B&&B.isTexture&&(h===void 0&&(h=new Ft(new Wr(2,2),new xs({name:"BackgroundMaterial",uniforms:bn(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=B,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(B.colorSpace)!==ze,B.matrixAutoUpdate===!0&&B.updateMatrix(),h.material.uniforms.uvTransform.value.copy(B.matrix),(u!==B||f!==B.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=B,f=B.version,p=n.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function d(D,C){D.getRGB(Gr,ml(n)),s.buffers.color.setClear(Gr.r,Gr.g,Gr.b,C,a)}function R(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(D,C=1){o.set(D),l=C,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,d(o,l)},render:_,addToRenderList:m,dispose:R}}function Mf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),s={},r=f(null);let i=r,a=!1;function o(S,b,W,w,I){let z=!1;const Z=u(w,W,b);i!==Z&&(i=Z,h(i.object)),z=p(S,w,W,I),z&&M(S,w,W,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,C(S,b,W,w),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function h(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function u(S,b,W){const w=W.wireframe===!0;let I=s[S.id];I===void 0&&(I={},s[S.id]=I);let z=I[b.id];z===void 0&&(z={},I[b.id]=z);let Z=z[w];return Z===void 0&&(Z=f(l()),z[w]=Z),Z}function f(S){const b=[],W=[],w=[];for(let I=0;I<t;I++)b[I]=0,W[I]=0,w[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:W,attributeDivisors:w,object:S,attributes:{},index:null}}function p(S,b,W,w){const I=i.attributes,z=b.attributes;let Z=0;const $=W.getAttributes();for(const X in $)if($[X].location>=0){const ce=I[X];let Me=z[X];if(Me===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),ce===void 0||ce.attribute!==Me||Me&&ce.data!==Me.data)return!0;Z++}return i.attributesNum!==Z||i.index!==w}function M(S,b,W,w){const I={},z=b.attributes;let Z=0;const $=W.getAttributes();for(const X in $)if($[X].location>=0){let ce=z[X];ce===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));const Me={};Me.attribute=ce,ce&&ce.data&&(Me.data=ce.data),I[X]=Me,Z++}i.attributes=I,i.attributesNum=Z,i.index=w}function _(){const S=i.newAttributes;for(let b=0,W=S.length;b<W;b++)S[b]=0}function m(S){d(S,0)}function d(S,b){const W=i.newAttributes,w=i.enabledAttributes,I=i.attributeDivisors;W[S]=1,w[S]===0&&(n.enableVertexAttribArray(S),w[S]=1),I[S]!==b&&(n.vertexAttribDivisor(S,b),I[S]=b)}function R(){const S=i.newAttributes,b=i.enabledAttributes;for(let W=0,w=b.length;W<w;W++)b[W]!==S[W]&&(n.disableVertexAttribArray(W),b[W]=0)}function D(S,b,W,w,I,z,Z){Z===!0?n.vertexAttribIPointer(S,b,W,I,z):n.vertexAttribPointer(S,b,W,w,I,z)}function C(S,b,W,w){_();const I=w.attributes,z=W.getAttributes(),Z=b.defaultAttributeValues;for(const $ in z){const X=z[$];if(X.location>=0){let re=I[$];if(re===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const ce=re.normalized,Me=re.itemSize,Ke=e.get(re);if(Ke===void 0)continue;const qe=Ke.buffer,Y=Ke.type,ee=Ke.bytesPerElement,me=Y===n.INT||Y===n.UNSIGNED_INT||re.gpuType===La;if(re.isInterleavedBufferAttribute){const ie=re.data,Re=ie.stride,be=re.offset;if(ie.isInstancedInterleavedBuffer){for(let Be=0;Be<X.locationSize;Be++)d(X.location+Be,ie.meshPerAttribute);S.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Be=0;Be<X.locationSize;Be++)m(X.location+Be);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Be=0;Be<X.locationSize;Be++)D(X.location+Be,Me/X.locationSize,Y,ce,Re*ee,(be+Me/X.locationSize*Be)*ee,me)}else{if(re.isInstancedBufferAttribute){for(let ie=0;ie<X.locationSize;ie++)d(X.location+ie,re.meshPerAttribute);S.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ie=0;ie<X.locationSize;ie++)m(X.location+ie);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ie=0;ie<X.locationSize;ie++)D(X.location+ie,Me/X.locationSize,Y,ce,Me*ee,Me/X.locationSize*ie*ee,me)}}else if(Z!==void 0){const ce=Z[$];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(X.location,ce);break;case 3:n.vertexAttrib3fv(X.location,ce);break;case 4:n.vertexAttrib4fv(X.location,ce);break;default:n.vertexAttrib1fv(X.location,ce)}}}}R()}function B(){K();for(const S in s){const b=s[S];for(const W in b){const w=b[W];for(const I in w)c(w[I].object),delete w[I];delete b[W]}delete s[S]}}function E(S){if(s[S.id]===void 0)return;const b=s[S.id];for(const W in b){const w=b[W];for(const I in w)c(w[I].object),delete w[I];delete b[W]}delete s[S.id]}function v(S){for(const b in s){const W=s[b];if(W[S.id]===void 0)continue;const w=W[S.id];for(const I in w)c(w[I].object),delete w[I];delete W[S.id]}}function K(){T(),a=!0,i!==r&&(i=r,h(i.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:K,resetDefaultState:T,dispose:B,releaseStatesOfGeometry:E,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:m,disableUnusedAttributes:R}}function gf(n,e,t){let s;function r(h){s=h}function i(h,c){n.drawArrays(s,h,c),t.update(c,s,1)}function a(h,c,u){u!==0&&(n.drawArraysInstanced(s,h,c,u),t.update(c,s,u))}function o(h,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,c,0,u);let p=0;for(let M=0;M<u;M++)p+=c[M];t.update(p,s,1)}function l(h,c,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let M=0;M<h.length;M++)a(h[M],c[M],f[M]);else{p.multiDrawArraysInstancedWEBGL(s,h,0,c,0,f,0,u);let M=0;for(let _=0;_<u;_++)M+=c[_]*f[_];t.update(M,s,1)}}this.setMode=r,this.render=i,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sf(n,e,t,s){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(v){return!(v!==It&&s.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const K=v===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==us&&s.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Ot&&!K)}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:M,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:B,maxSamples:E}}function _f(n){const e=this;let t=null,s=0,r=!1,i=!1;const a=new Ss,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||s!==0||r;return r=f,s=u.length,p},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,f){t=c(u,f,0)},this.setState=function(u,f,p){const M=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!r||M===null||M.length===0||i&&!m)i?c(null):h();else{const R=i?0:s,D=R*4;let C=d.clippingState||null;l.value=C,C=c(M,f,D,p);for(let B=0;B!==D;++B)C[B]=t[B];d.clippingState=C,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function c(u,f,p,M){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,M!==!0||m===null){const d=p+_*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let D=0,C=p;D!==_;++D,C+=4)a.copy(u[D]).applyMatrix4(R,o),a.normal.toArray(m,C),m[C+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Tf(n){let e=new WeakMap;function t(a,o){return o===Ai?a.mapping=Gn:o===Ki&&(a.mapping=Rn),a}function s(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ai||o===Ki)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new pc(l.height);return h.fromEquirectangularTexture(n,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:s,dispose:i}}const Mn=4,go=[.125,.215,.35,.446,.526,.582],ws=20,mi=new Cl,So=new Ie;let Li=null,Mi=0,gi=0,Si=!1;const Fs=(1+Math.sqrt(5))/2,mn=1/Fs,_o=[new A(-Fs,mn,0),new A(Fs,mn,0),new A(-mn,0,Fs),new A(mn,0,Fs),new A(0,Fs,-mn),new A(0,Fs,mn),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class To{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,r=100){Li=this._renderer.getRenderTarget(),Mi=this._renderer.getActiveCubeFace(),gi=this._renderer.getActiveMipmapLevel(),Si=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,s,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Li,Mi,gi),this._renderer.xr.enabled=Si,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gn||e.mapping===Rn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Li=this._renderer.getRenderTarget(),Mi=this._renderer.getActiveCubeFace(),gi=this._renderer.getActiveMipmapLevel(),Si=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:On,format:It,colorSpace:xn,depthBuffer:!1},r=Co(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(e,t,s);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cf(i)),this._blurMaterial=Gf(i,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,mi)}_sceneToCubeUV(e,t,s,r){const o=new Bt(90,1,t,s),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(So),c.toneMapping=Rs,c.autoClear=!1;const p=new ul({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),M=new Ft(new kn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(So),_=!0);for(let d=0;d<6;d++){const R=d%3;R===0?(o.up.set(0,l[d],0),o.lookAt(h[d],0,0)):R===1?(o.up.set(0,0,l[d]),o.lookAt(0,h[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,h[d]));const D=this._cubeSize;Rr(r,R*D,d>2?D:0,D,D),c.setRenderTarget(r),_&&c.render(M,o),c.render(e,o)}M.geometry.dispose(),M.material.dispose(),c.toneMapping=f,c.autoClear=u,e.background=m}_textureToCubeUV(e,t){const s=this._renderer,r=e.mapping===Gn||e.mapping===Rn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());const i=r?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Rr(t,0,0,3*l,2*l),s.setRenderTarget(t),s.render(a,mi)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let i=1;i<r;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=_o[(r-i-1)%_o.length];this._blur(e,i-1,i,a,o)}t.autoClear=s}_blur(e,t,s,r,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,s,r,"latitudinal",i),this._halfBlur(a,e,s,s,r,"longitudinal",i)}_halfBlur(e,t,s,r,i,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ft(this._lodPlanes[r],h),f=h.uniforms,p=this._sizeLods[s]-1,M=isFinite(i)?Math.PI/(2*p):2*Math.PI/(2*ws-1),_=i/M,m=isFinite(i)?1+Math.floor(c*_):ws;m>ws&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);const d=[];let R=0;for(let v=0;v<ws;++v){const K=v/_,T=Math.exp(-K*K/2);d.push(T),v===0?R+=T:v<m&&(R+=2*T)}for(let v=0;v<d.length;v++)d[v]=d[v]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:D}=this;f.dTheta.value=M,f.mipInt.value=D-s;const C=this._sizeLods[r],B=3*C*(r>D-Mn?r-D+Mn:0),E=4*(this._cubeSize-C);Rr(t,B,E,3*C,2*C),l.setRenderTarget(t),l.render(u,mi)}}function Cf(n){const e=[],t=[],s=[];let r=n;const i=n-Mn+1+go.length;for(let a=0;a<i;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Mn?l=go[a-n+Mn-1]:a===0&&(l=0),s.push(l);const h=1/(o-2),c=-h,u=1+h,f=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,M=6,_=3,m=2,d=1,R=new Float32Array(_*M*p),D=new Float32Array(m*M*p),C=new Float32Array(d*M*p);for(let E=0;E<p;E++){const v=E%3*2/3-1,K=E>2?0:-1,T=[v,K,0,v+2/3,K,0,v+2/3,K+1,0,v,K,0,v+2/3,K+1,0,v,K+1,0];R.set(T,_*M*E),D.set(f,m*M*E);const S=[E,E,E,E,E,E];C.set(S,d*M*E)}const B=new qt;B.setAttribute("position",new Et(R,_)),B.setAttribute("uv",new Et(D,m)),B.setAttribute("faceIndex",new Et(C,d)),e.push(B),r>Mn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Co(n,e,t){const s=new Zs(n,e,t);return s.texture.mapping=wr,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rr(n,e,t,s,r){n.viewport.set(e,t,s,r),n.scissor.set(e,t,s,r)}function Gf(n,e,t){const s=new Float32Array(ws),r=new A(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function Go(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function Ro(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function Da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rf(n){let e=new WeakMap,t=null;function s(o){if(o&&o.isTexture){const l=o.mapping,h=l===Ai||l===Ki,c=l===Gn||l===Rn;if(h||c){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new To(n)),u=h?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return h&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new To(n)),u=h?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",i),u.texture):null}}}return o}function r(o){let l=0;const h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function i(o){const l=o.target;l.removeEventListener("dispose",i);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:a}}function Df(n){const e={};function t(s){if(e[s]!==void 0)return e[s];let r;switch(s){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(s)}return e[s]=r,r}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const r=t(s);return r===null&&Ln("THREE.WebGLRenderer: "+s+" extension not supported."),r}}}function vf(n,e,t,s){const r={},i=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const M in f.attributes)e.remove(f.attributes[M]);f.removeEventListener("dispose",a),delete r[f.id];const p=i.get(f);p&&(e.remove(p),i.delete(f)),s.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function h(u){const f=[],p=u.index,M=u.attributes.position;let _=0;if(p!==null){const R=p.array;_=p.version;for(let D=0,C=R.length;D<C;D+=3){const B=R[D+0],E=R[D+1],v=R[D+2];f.push(B,E,E,v,v,B)}}else if(M!==void 0){const R=M.array;_=M.version;for(let D=0,C=R.length/3-1;D<C;D+=3){const B=D+0,E=D+1,v=D+2;f.push(B,E,E,v,v,B)}}else return;const m=new(al(f)?pl:fl)(f,1);m.version=_;const d=i.get(u);d&&e.remove(d),i.set(u,m)}function c(u){const f=i.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&h(u)}else h(u);return i.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function xf(n,e,t){let s;function r(f){s=f}let i,a;function o(f){i=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(s,p,i,f*a),t.update(p,s,1)}function h(f,p,M){M!==0&&(n.drawElementsInstanced(s,p,i,f*a,M),t.update(p,s,M))}function c(f,p,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,p,0,i,f,0,M);let m=0;for(let d=0;d<M;d++)m+=p[d];t.update(m,s,1)}function u(f,p,M,_){if(M===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)h(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(s,p,0,i,f,0,_,0,M);let d=0;for(let R=0;R<M;R++)d+=p[R]*_[R];t.update(d,s,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function bf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(i,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(i/3);break;case n.LINES:t.lines+=o*(i/2);break;case n.LINE_STRIP:t.lines+=o*(i-1);break;case n.LINE_LOOP:t.lines+=o*i;break;case n.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:s}}function Ef(n,e,t){const s=new WeakMap,r=new it;function i(a,o,l){const h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let f=s.get(o);if(f===void 0||f.count!==u){let S=function(){K.dispose(),s.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const M=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],D=o.morphAttributes.color||[];let C=0;M===!0&&(C=1),_===!0&&(C=2),m===!0&&(C=3);let B=o.attributes.position.count*C,E=1;B>e.maxTextureSize&&(E=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const v=new Float32Array(B*E*4*u),K=new ll(v,B,E,u);K.type=Ot,K.needsUpdate=!0;const T=C*4;for(let b=0;b<u;b++){const W=d[b],w=R[b],I=D[b],z=B*E*4*b;for(let Z=0;Z<W.count;Z++){const $=Z*T;M===!0&&(r.fromBufferAttribute(W,Z),v[z+$+0]=r.x,v[z+$+1]=r.y,v[z+$+2]=r.z,v[z+$+3]=0),_===!0&&(r.fromBufferAttribute(w,Z),v[z+$+4]=r.x,v[z+$+5]=r.y,v[z+$+6]=r.z,v[z+$+7]=0),m===!0&&(r.fromBufferAttribute(I,Z),v[z+$+8]=r.x,v[z+$+9]=r.y,v[z+$+10]=r.z,v[z+$+11]=I.itemSize===4?r.w:1)}}f={count:u,texture:K,size:new Ge(B,E)},s.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let M=0;for(let m=0;m<h.length;m++)M+=h[m];const _=o.morphTargetsRelative?1:1-M;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:i}}function Pf(n,e,t,s){let r=new WeakMap;function i(l){const h=s.render.frame,c=l.geometry,u=e.get(l,c);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:i,dispose:a}}const Rl=new gt,Do=new _l(1,1),Dl=new ll,vl=new qh,xl=new Ml,vo=[],xo=[],bo=new Float32Array(16),Eo=new Float32Array(9),Po=new Float32Array(4);function Pn(n,e,t){const s=n[0];if(s<=0||s>0)return n;const r=e*t;let i=vo[r];if(i===void 0&&(i=new Float32Array(r),vo[r]=i),e!==0){s.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(i,o)}return i}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,s=n.length;t<s;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,s=e.length;t<s;t++)n[t]=e[t]}function Jr(n,e){let t=xo[e];t===void 0&&(t=new Int32Array(e),xo[e]=t);for(let s=0;s!==e;++s)t[s]=n.allocateTextureUnit();return t}function yf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function Af(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function Kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function Bf(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(dt(t,s))return;Po.set(s),n.uniformMatrix2fv(this.addr,!1,Po),ut(t,s)}}function Nf(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(dt(t,s))return;Eo.set(s),n.uniformMatrix3fv(this.addr,!1,Eo),ut(t,s)}}function Ff(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(dt(t,s))return;bo.set(s),n.uniformMatrix4fv(this.addr,!1,bo),ut(t,s)}}function Vf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function Wf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function Jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function Xf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function If(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function Uf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function Yf(n,e,t){const s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r);let i;this.type===n.SAMPLER_2D_SHADOW?(Do.compareFunction=il,i=Do):i=Rl,t.setTexture2D(e||i,r)}function Qf(n,e,t){const s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTexture3D(e||vl,r)}function Of(n,e,t){const s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTextureCube(e||xl,r)}function zf(n,e,t){const s=this.cache,r=t.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),t.setTexture2DArray(e||Dl,r)}function kf(n){switch(n){case 5126:return yf;case 35664:return Hf;case 35665:return Af;case 35666:return Kf;case 35674:return Bf;case 35675:return Nf;case 35676:return Ff;case 5124:case 35670:return Vf;case 35667:case 35671:return wf;case 35668:case 35672:return Wf;case 35669:case 35673:return Jf;case 5125:return Xf;case 36294:return Zf;case 36295:return If;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return Qf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return zf}}function $f(n,e){n.uniform1fv(this.addr,e)}function qf(n,e){const t=Pn(e,this.size,2);n.uniform2fv(this.addr,t)}function jf(n,e){const t=Pn(e,this.size,3);n.uniform3fv(this.addr,t)}function ep(n,e){const t=Pn(e,this.size,4);n.uniform4fv(this.addr,t)}function tp(n,e){const t=Pn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sp(n,e){const t=Pn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function np(n,e){const t=Pn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rp(n,e){n.uniform1iv(this.addr,e)}function ip(n,e){n.uniform2iv(this.addr,e)}function ap(n,e){n.uniform3iv(this.addr,e)}function op(n,e){n.uniform4iv(this.addr,e)}function lp(n,e){n.uniform1uiv(this.addr,e)}function hp(n,e){n.uniform2uiv(this.addr,e)}function cp(n,e){n.uniform3uiv(this.addr,e)}function dp(n,e){n.uniform4uiv(this.addr,e)}function up(n,e,t){const s=this.cache,r=e.length,i=Jr(t,r);dt(s,i)||(n.uniform1iv(this.addr,i),ut(s,i));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Rl,i[a])}function fp(n,e,t){const s=this.cache,r=e.length,i=Jr(t,r);dt(s,i)||(n.uniform1iv(this.addr,i),ut(s,i));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||vl,i[a])}function pp(n,e,t){const s=this.cache,r=e.length,i=Jr(t,r);dt(s,i)||(n.uniform1iv(this.addr,i),ut(s,i));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||xl,i[a])}function mp(n,e,t){const s=this.cache,r=e.length,i=Jr(t,r);dt(s,i)||(n.uniform1iv(this.addr,i),ut(s,i));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dl,i[a])}function Lp(n){switch(n){case 5126:return $f;case 35664:return qf;case 35665:return jf;case 35666:return ep;case 35674:return tp;case 35675:return sp;case 35676:return np;case 5124:case 35670:return rp;case 35667:case 35671:return ip;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return hp;case 36295:return cp;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}class Mp{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=kf(t.type)}}class gp{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lp(t.type)}}class Sp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const r=this.seq;for(let i=0,a=r.length;i!==a;++i){const o=r[i];o.setValue(e,t[o.id],s)}}}const _i=/(\w+)(\])?(\[|\.)?/g;function yo(n,e){n.seq.push(e),n.map[e.id]=e}function _p(n,e,t){const s=n.name,r=s.length;for(_i.lastIndex=0;;){const i=_i.exec(s),a=_i.lastIndex;let o=i[1];const l=i[2]==="]",h=i[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===r){yo(t,h===void 0?new Mp(o,n,e):new gp(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Sp(o),yo(t,u)),t=u}}}class Hr{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){const i=e.getActiveUniform(t,r),a=e.getUniformLocation(t,i.name);_p(i,a,this)}}setValue(e,t,s,r){const i=this.map[t];i!==void 0&&i.setValue(e,s,r)}setOptional(e,t,s){const r=t[s];r!==void 0&&this.setValue(e,s,r)}static upload(e,t,s,r){for(let i=0,a=t.length;i!==a;++i){const o=t[i],l=s[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const s=[];for(let r=0,i=e.length;r!==i;++r){const a=e[r];a.id in t&&s.push(a)}return s}}function Ho(n,e,t){const s=n.createShader(e);return n.shaderSource(s,t),n.compileShader(s),s}const Tp=37297;let Cp=0;function Gp(n,e){const t=n.split(`
`),s=[],r=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=r;a<i;a++){const o=a+1;s.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return s.join(`
`)}const Ao=new Pe;function Rp(n){Ze._getMatrix(Ao,Ze.workingColorSpace,n);const e=`mat3( ${Ao.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Ar:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ko(n,e,t){const s=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(s&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const a=parseInt(i[1]);return t.toUpperCase()+`

`+r+`

`+Gp(n.getShaderSource(e),a)}else return r}function Dp(n,e){const t=Rp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vp(n,e){let t;switch(e){case oh:t="Linear";break;case lh:t="Reinhard";break;case hh:t="Cineon";break;case ch:t="ACESFilmic";break;case uh:t="AgX";break;case fh:t="Neutral";break;case dh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dr=new A;function xp(){Ze.getLuminanceCoefficients(Dr);const n=Dr.x.toFixed(4),e=Dr.y.toFixed(4),t=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xn).join(`
`)}function Ep(n){const e=[];for(const t in n){const s=n[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Pp(n,e){const t={},s=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){const i=n.getActiveAttrib(e,r),a=i.name;let o=1;i.type===n.FLOAT_MAT2&&(o=2),i.type===n.FLOAT_MAT3&&(o=3),i.type===n.FLOAT_MAT4&&(o=4),t[a]={type:i.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Xn(n){return n!==""}function Bo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function No(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(n){return n.replace(yp,Ap)}const Hp=new Map;function Ap(n,e){let t=He[e];if(t===void 0){const s=Hp.get(e);if(s!==void 0)t=He[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ca(t)}const Kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fo(n){return n.replace(Kp,Bp)}function Bp(n,e,t,s){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function Vo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Np(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===is&&(e="SHADOWMAP_TYPE_VSM"),e}function Fp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gn:case Rn:e="ENVMAP_TYPE_CUBE";break;case wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rn:e="ENVMAP_MODE_REFRACTION";break}return e}function wp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qo:e="ENVMAP_BLENDING_MULTIPLY";break;case ih:e="ENVMAP_BLENDING_MIX";break;case ah:e="ENVMAP_BLENDING_ADD";break}return e}function Wp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function Jp(n,e,t,s){const r=n.getContext(),i=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Np(t),h=Fp(t),c=Vp(t),u=wp(t),f=Wp(t),p=bp(t),M=Ep(i),_=r.createProgram();let m,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xn).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xn).join(`
`),d.length>0&&(d+=`
`)):(m=[Vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xn).join(`
`),d=[Vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rs?"#define TONE_MAPPING":"",t.toneMapping!==Rs?He.tonemapping_pars_fragment:"",t.toneMapping!==Rs?vp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Dp("linearToOutputTexel",t.outputColorSpace),xp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xn).join(`
`)),a=ca(a),a=Bo(a,t),a=No(a,t),o=ca(o),o=Bo(o,t),o=No(o,t),a=Fo(a),o=Fo(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const D=R+m+a,C=R+d+o,B=Ho(r,r.VERTEX_SHADER,D),E=Ho(r,r.FRAGMENT_SHADER,C);r.attachShader(_,B),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function v(b){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(_).trim(),w=r.getShaderInfoLog(B).trim(),I=r.getShaderInfoLog(E).trim();let z=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,B,E);else{const $=Ko(r,B,"vertex"),X=Ko(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+W+`
`+$+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(w===""||I==="")&&(Z=!1);Z&&(b.diagnostics={runnable:z,programLog:W,vertexShader:{log:w,prefix:m},fragmentShader:{log:I,prefix:d}})}r.deleteShader(B),r.deleteShader(E),K=new Hr(r,_),T=Pp(r,_)}let K;this.getUniforms=function(){return K===void 0&&v(this),K};let T;this.getAttributes=function(){return T===void 0&&v(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Tp)),S},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=E,this}let Xp=0;class Zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(s),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Ip(e),t.set(e,s)),s}}class Ip{constructor(e){this.id=Xp++,this.code=e,this.usedTimes=0}}function Up(n,e,t,s,r,i,a){const o=new cl,l=new Zp,h=new Set,c=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return h.add(T),T===0?"uv":`uv${T}`}function m(T,S,b,W,w){const I=W.fog,z=w.geometry,Z=T.isMeshStandardMaterial?W.environment:null,$=(T.isMeshStandardMaterial?t:e).get(T.envMap||Z),X=$&&$.mapping===wr?$.image.height:null,re=M[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Me=ce!==void 0?ce.length:0;let Ke=0;z.morphAttributes.position!==void 0&&(Ke=1),z.morphAttributes.normal!==void 0&&(Ke=2),z.morphAttributes.color!==void 0&&(Ke=3);let qe,Y,ee,me;if(re){const Qe=Yt[re];qe=Qe.vertexShader,Y=Qe.fragmentShader}else qe=T.vertexShader,Y=T.fragmentShader,l.update(T),ee=l.getVertexShaderID(T),me=l.getFragmentShaderID(T);const ie=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),be=w.isInstancedMesh===!0,Be=w.isBatchedMesh===!0,st=!!T.map,we=!!T.matcap,at=!!$,x=!!T.aoMap,Pt=!!T.lightMap,Ne=!!T.bumpMap,Fe=!!T.normalMap,ge=!!T.displacementMap,et=!!T.emissiveMap,Se=!!T.metalnessMap,G=!!T.roughnessMap,L=T.anisotropy>0,N=T.clearcoat>0,Q=T.dispersion>0,k=T.iridescence>0,U=T.sheen>0,Le=T.transmission>0,ae=L&&!!T.anisotropyMap,de=N&&!!T.clearcoatMap,We=N&&!!T.clearcoatNormalMap,j=N&&!!T.clearcoatRoughnessMap,ue=k&&!!T.iridescenceMap,Ce=k&&!!T.iridescenceThicknessMap,De=U&&!!T.sheenColorMap,fe=U&&!!T.sheenRoughnessMap,Ve=!!T.specularMap,ye=!!T.specularColorMap,je=!!T.specularIntensityMap,P=Le&&!!T.transmissionMap,se=Le&&!!T.thicknessMap,J=!!T.gradientMap,O=!!T.alphaMap,le=T.alphaTest>0,oe=!!T.alphaHash,Ee=!!T.extensions;let nt=Rs;T.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(nt=n.toneMapping);const mt={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:qe,fragmentShader:Y,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Be,batchingColor:Be&&w._colorsTexture!==null,instancing:be,instancingColor:be&&w.instanceColor!==null,instancingMorph:be&&w.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:xn,alphaToCoverage:!!T.alphaToCoverage,map:st,matcap:we,envMap:at,envMapMode:at&&$.mapping,envMapCubeUVHeight:X,aoMap:x,lightMap:Pt,bumpMap:Ne,normalMap:Fe,displacementMap:f&&ge,emissiveMap:et,normalMapObjectSpace:Fe&&T.normalMapType===Mh,normalMapTangentSpace:Fe&&T.normalMapType===rl,metalnessMap:Se,roughnessMap:G,anisotropy:L,anisotropyMap:ae,clearcoat:N,clearcoatMap:de,clearcoatNormalMap:We,clearcoatRoughnessMap:j,dispersion:Q,iridescence:k,iridescenceMap:ue,iridescenceThicknessMap:Ce,sheen:U,sheenColorMap:De,sheenRoughnessMap:fe,specularMap:Ve,specularColorMap:ye,specularIntensityMap:je,transmission:Le,transmissionMap:P,thicknessMap:se,gradientMap:J,opaque:T.transparent===!1&&T.blending===Sn&&T.alphaToCoverage===!1,alphaMap:O,alphaTest:le,alphaHash:oe,combine:T.combine,mapUv:st&&_(T.map.channel),aoMapUv:x&&_(T.aoMap.channel),lightMapUv:Pt&&_(T.lightMap.channel),bumpMapUv:Ne&&_(T.bumpMap.channel),normalMapUv:Fe&&_(T.normalMap.channel),displacementMapUv:ge&&_(T.displacementMap.channel),emissiveMapUv:et&&_(T.emissiveMap.channel),metalnessMapUv:Se&&_(T.metalnessMap.channel),roughnessMapUv:G&&_(T.roughnessMap.channel),anisotropyMapUv:ae&&_(T.anisotropyMap.channel),clearcoatMapUv:de&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:We&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(T.sheenRoughnessMap.channel),specularMapUv:Ve&&_(T.specularMap.channel),specularColorMapUv:ye&&_(T.specularColorMap.channel),specularIntensityMapUv:je&&_(T.specularIntensityMap.channel),transmissionMapUv:P&&_(T.transmissionMap.channel),thicknessMapUv:se&&_(T.thicknessMap.channel),alphaMapUv:O&&_(T.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Fe||L),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!z.attributes.uv&&(st||O),fog:!!I,useFog:T.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Re,skinning:w.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:st&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===ze,decodeVideoTextureEmissive:et&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===as,flipSided:T.side===Rt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ee&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&T.extensions.multiDraw===!0||Be)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return mt.vertexUv1s=h.has(1),mt.vertexUv2s=h.has(2),mt.vertexUv3s=h.has(3),h.clear(),mt}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)S.push(b),S.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(R(S,T),D(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function R(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function D(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function C(T){const S=M[T.type];let b;if(S){const W=Yt[S];b=cc.clone(W.uniforms)}else b=T.uniforms;return b}function B(T,S){let b;for(let W=0,w=c.length;W<w;W++){const I=c[W];if(I.cacheKey===S){b=I,++b.usedTimes;break}}return b===void 0&&(b=new Jp(n,S,T,i),c.push(b)),b}function E(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function v(T){l.remove(T)}function K(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:C,acquireProgram:B,releaseProgram:E,releaseShaderCache:v,programs:c,dispose:K}}function Yp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function s(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function i(){n=new WeakMap}return{has:e,get:t,remove:s,update:r,dispose:i}}function Qp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wo(){const n=[];let e=0;const t=[],s=[],r=[];function i(){e=0,t.length=0,s.length=0,r.length=0}function a(u,f,p,M,_,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:M,renderOrder:u.renderOrder,z:_,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=M,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function o(u,f,p,M,_,m){const d=a(u,f,p,M,_,m);p.transmission>0?s.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(u,f,p,M,_,m){const d=a(u,f,p,M,_,m);p.transmission>0?s.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function h(u,f){t.length>1&&t.sort(u||Qp),s.length>1&&s.sort(f||wo),r.length>1&&r.sort(f||wo)}function c(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:s,transparent:r,init:i,push:o,unshift:l,finish:c,sort:h}}function Op(){let n=new WeakMap;function e(s,r){const i=n.get(s);let a;return i===void 0?(a=new Wo,n.set(s,[a])):r>=i.length?(a=new Wo,i.push(a)):a=i[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function zp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ie};break;case"SpotLight":t={position:new A,direction:new A,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new A,halfWidth:new A,halfHeight:new A};break}return n[e.id]=t,t}}}function kp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $p=0;function qp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jp(n){const e=new zp,t=kp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new A);const r=new A,i=new $e,a=new $e;function o(h){let c=0,u=0,f=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let p=0,M=0,_=0,m=0,d=0,R=0,D=0,C=0,B=0,E=0,v=0;h.sort(qp);for(let T=0,S=h.length;T<S;T++){const b=h[T],W=b.color,w=b.intensity,I=b.distance,z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)c+=W.r*w,u+=W.g*w,f+=W.b*w;else if(b.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(b.sh.coefficients[Z],w);v++}else if(b.isDirectionalLight){const Z=e.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const $=b.shadow,X=t.get(b);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,s.directionalShadow[p]=X,s.directionalShadowMap[p]=z,s.directionalShadowMatrix[p]=b.shadow.matrix,R++}s.directional[p]=Z,p++}else if(b.isSpotLight){const Z=e.get(b);Z.position.setFromMatrixPosition(b.matrixWorld),Z.color.copy(W).multiplyScalar(w),Z.distance=I,Z.coneCos=Math.cos(b.angle),Z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Z.decay=b.decay,s.spot[_]=Z;const $=b.shadow;if(b.map&&(s.spotLightMap[B]=b.map,B++,$.updateMatrices(b),b.castShadow&&E++),s.spotLightMatrix[_]=$.matrix,b.castShadow){const X=t.get(b);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,s.spotShadow[_]=X,s.spotShadowMap[_]=z,C++}_++}else if(b.isRectAreaLight){const Z=e.get(b);Z.color.copy(W).multiplyScalar(w),Z.halfWidth.set(b.width*.5,0,0),Z.halfHeight.set(0,b.height*.5,0),s.rectArea[m]=Z,m++}else if(b.isPointLight){const Z=e.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),Z.distance=b.distance,Z.decay=b.decay,b.castShadow){const $=b.shadow,X=t.get(b);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,s.pointShadow[M]=X,s.pointShadowMap[M]=z,s.pointShadowMatrix[M]=b.shadow.matrix,D++}s.point[M]=Z,M++}else if(b.isHemisphereLight){const Z=e.get(b);Z.skyColor.copy(b.color).multiplyScalar(w),Z.groundColor.copy(b.groundColor).multiplyScalar(w),s.hemi[d]=Z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=te.LTC_FLOAT_1,s.rectAreaLTC2=te.LTC_FLOAT_2):(s.rectAreaLTC1=te.LTC_HALF_1,s.rectAreaLTC2=te.LTC_HALF_2)),s.ambient[0]=c,s.ambient[1]=u,s.ambient[2]=f;const K=s.hash;(K.directionalLength!==p||K.pointLength!==M||K.spotLength!==_||K.rectAreaLength!==m||K.hemiLength!==d||K.numDirectionalShadows!==R||K.numPointShadows!==D||K.numSpotShadows!==C||K.numSpotMaps!==B||K.numLightProbes!==v)&&(s.directional.length=p,s.spot.length=_,s.rectArea.length=m,s.point.length=M,s.hemi.length=d,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=C+B-E,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=E,s.numLightProbes=v,K.directionalLength=p,K.pointLength=M,K.spotLength=_,K.rectAreaLength=m,K.hemiLength=d,K.numDirectionalShadows=R,K.numPointShadows=D,K.numSpotShadows=C,K.numSpotMaps=B,K.numLightProbes=v,s.version=$p++)}function l(h,c){let u=0,f=0,p=0,M=0,_=0;const m=c.matrixWorldInverse;for(let d=0,R=h.length;d<R;d++){const D=h[d];if(D.isDirectionalLight){const C=s.directional[u];C.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),u++}else if(D.isSpotLight){const C=s.spot[p];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),p++}else if(D.isRectAreaLight){const C=s.rectArea[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(m),a.identity(),i.copy(D.matrixWorld),i.premultiply(m),a.extractRotation(i),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),M++}else if(D.isPointLight){const C=s.point[f];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(m),f++}else if(D.isHemisphereLight){const C=s.hemi[_];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:s}}function Jo(n){const e=new jp(n),t=[],s=[];function r(c){h.camera=c,t.length=0,s.length=0}function i(c){t.push(c)}function a(c){s.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:a}}function em(n){let e=new WeakMap;function t(r,i=0){const a=e.get(r);let o;return a===void 0?(o=new Jo(n),e.set(r,[o])):i>=a.length?(o=new Jo(n),a.push(o)):o=a[i],o}function s(){e=new WeakMap}return{get:t,dispose:s}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nm(n,e,t){let s=new Ra;const r=new Ge,i=new Ge,a=new it,o=new Dc({depthPacking:Lh}),l=new vc,h={},c=t.maxTextureSize,u={[vs]:Rt,[Rt]:vs,[as]:as},f=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:tm,fragmentShader:sm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const M=new qt;M.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(M,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let d=this.type;this.render=function(E,v,K){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Gs),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const w=d!==is&&this.type===is,I=d===is&&this.type!==is;for(let z=0,Z=E.length;z<Z;z++){const $=E[z],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const re=X.getFrameExtents();if(r.multiply(re),i.copy(X.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(i.x=Math.floor(c/re.x),r.x=i.x*re.x,X.mapSize.x=i.x),r.y>c&&(i.y=Math.floor(c/re.y),r.y=i.y*re.y,X.mapSize.y=i.y)),X.map===null||w===!0||I===!0){const Me=this.type!==is?{minFilter:bt,magFilter:bt}:{};X.map!==null&&X.map.dispose(),X.map=new Zs(r.x,r.y,Me),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ce=X.getViewportCount();for(let Me=0;Me<ce;Me++){const Ke=X.getViewport(Me);a.set(i.x*Ke.x,i.y*Ke.y,i.x*Ke.z,i.y*Ke.w),W.viewport(a),X.updateMatrices($,Me),s=X.getFrustum(),C(v,K,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===is&&R(X,K),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,b)};function R(E,v){const K=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Zs(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(v,null,K,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(v,null,K,p,_,null)}function D(E,v,K,T){let S=null;const b=K.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)S=b;else if(S=K.isPointLight===!0?l:o,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const W=S.uuid,w=v.uuid;let I=h[W];I===void 0&&(I={},h[W]=I);let z=I[w];z===void 0&&(z=S.clone(),I[w]=z,v.addEventListener("dispose",B)),S=z}if(S.visible=v.visible,S.wireframe=v.wireframe,T===is?S.side=v.shadowSide!==null?v.shadowSide:v.side:S.side=v.shadowSide!==null?v.shadowSide:u[v.side],S.alphaMap=v.alphaMap,S.alphaTest=v.alphaTest,S.map=v.map,S.clipShadows=v.clipShadows,S.clippingPlanes=v.clippingPlanes,S.clipIntersection=v.clipIntersection,S.displacementMap=v.displacementMap,S.displacementScale=v.displacementScale,S.displacementBias=v.displacementBias,S.wireframeLinewidth=v.wireframeLinewidth,S.linewidth=v.linewidth,K.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=n.properties.get(S);W.light=K}return S}function C(E,v,K,T,S){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===is)&&(!E.frustumCulled||s.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld);const w=e.update(E),I=E.material;if(Array.isArray(I)){const z=w.groups;for(let Z=0,$=z.length;Z<$;Z++){const X=z[Z],re=I[X.materialIndex];if(re&&re.visible){const ce=D(E,re,T,S);E.onBeforeShadow(n,E,v,K,w,ce,X),n.renderBufferDirect(K,null,w,ce,E,X),E.onAfterShadow(n,E,v,K,w,ce,X)}}}else if(I.visible){const z=D(E,I,T,S);E.onBeforeShadow(n,E,v,K,w,z,null),n.renderBufferDirect(K,null,w,z,E,null),E.onAfterShadow(n,E,v,K,w,z,null)}}const W=E.children;for(let w=0,I=W.length;w<I;w++)C(W[w],v,K,T,S)}function B(E){E.target.removeEventListener("dispose",B);for(const K in h){const T=h[K],S=E.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const rm={[vi]:xi,[bi]:yi,[Ei]:Hi,[Cn]:Pi,[xi]:vi,[yi]:bi,[Hi]:Ei,[Pi]:Cn};function im(n,e){function t(){let P=!1;const se=new it;let J=null;const O=new it(0,0,0,0);return{setMask:function(le){J!==le&&!P&&(n.colorMask(le,le,le,le),J=le)},setLocked:function(le){P=le},setClear:function(le,oe,Ee,nt,mt){mt===!0&&(le*=nt,oe*=nt,Ee*=nt),se.set(le,oe,Ee,nt),O.equals(se)===!1&&(n.clearColor(le,oe,Ee,nt),O.copy(se))},reset:function(){P=!1,J=null,O.set(-1,0,0,0)}}}function s(){let P=!1,se=!1,J=null,O=null,le=null;return{setReversed:function(oe){if(se!==oe){const Ee=e.get("EXT_clip_control");se?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT);const nt=le;le=null,this.setClear(nt)}se=oe},getReversed:function(){return se},setTest:function(oe){oe?ie(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(oe){J!==oe&&!P&&(n.depthMask(oe),J=oe)},setFunc:function(oe){if(se&&(oe=rm[oe]),O!==oe){switch(oe){case vi:n.depthFunc(n.NEVER);break;case xi:n.depthFunc(n.ALWAYS);break;case bi:n.depthFunc(n.LESS);break;case Cn:n.depthFunc(n.LEQUAL);break;case Ei:n.depthFunc(n.EQUAL);break;case Pi:n.depthFunc(n.GEQUAL);break;case yi:n.depthFunc(n.GREATER);break;case Hi:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}O=oe}},setLocked:function(oe){P=oe},setClear:function(oe){le!==oe&&(se&&(oe=1-oe),n.clearDepth(oe),le=oe)},reset:function(){P=!1,J=null,O=null,le=null,se=!1}}}function r(){let P=!1,se=null,J=null,O=null,le=null,oe=null,Ee=null,nt=null,mt=null;return{setTest:function(Qe){P||(Qe?ie(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!P&&(n.stencilMask(Qe),se=Qe)},setFunc:function(Qe,Vt,jt){(J!==Qe||O!==Vt||le!==jt)&&(n.stencilFunc(Qe,Vt,jt),J=Qe,O=Vt,le=jt)},setOp:function(Qe,Vt,jt){(oe!==Qe||Ee!==Vt||nt!==jt)&&(n.stencilOp(Qe,Vt,jt),oe=Qe,Ee=Vt,nt=jt)},setLocked:function(Qe){P=Qe},setClear:function(Qe){mt!==Qe&&(n.clearStencil(Qe),mt=Qe)},reset:function(){P=!1,se=null,J=null,O=null,le=null,oe=null,Ee=null,nt=null,mt=null}}}const i=new t,a=new s,o=new r,l=new WeakMap,h=new WeakMap;let c={},u={},f=new WeakMap,p=[],M=null,_=!1,m=null,d=null,R=null,D=null,C=null,B=null,E=null,v=new Ie(0,0,0),K=0,T=!1,S=null,b=null,W=null,w=null,I=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,$=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=$>=2);let re=null,ce={};const Me=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),qe=new it().fromArray(Me),Y=new it().fromArray(Ke);function ee(P,se,J,O){const le=new Uint8Array(4),oe=n.createTexture();n.bindTexture(P,oe),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<J;Ee++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,O,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(se+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return oe}const me={};me[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Cn),Ne(!1),Fe(Va),ie(n.CULL_FACE),x(Gs);function ie(P){c[P]!==!0&&(n.enable(P),c[P]=!0)}function Re(P){c[P]!==!1&&(n.disable(P),c[P]=!1)}function be(P,se){return u[P]!==se?(n.bindFramebuffer(P,se),u[P]=se,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=se),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Be(P,se){let J=p,O=!1;if(P){J=f.get(se),J===void 0&&(J=[],f.set(se,J));const le=P.textures;if(J.length!==le.length||J[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ee=le.length;oe<Ee;oe++)J[oe]=n.COLOR_ATTACHMENT0+oe;J.length=le.length,O=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,O=!0);O&&n.drawBuffers(J)}function st(P){return M!==P?(n.useProgram(P),M=P,!0):!1}const we={[Vs]:n.FUNC_ADD,[Xl]:n.FUNC_SUBTRACT,[Zl]:n.FUNC_REVERSE_SUBTRACT};we[Il]=n.MIN,we[Ul]=n.MAX;const at={[Yl]:n.ZERO,[Ql]:n.ONE,[Ol]:n.SRC_COLOR,[Ri]:n.SRC_ALPHA,[eh]:n.SRC_ALPHA_SATURATE,[ql]:n.DST_COLOR,[kl]:n.DST_ALPHA,[zl]:n.ONE_MINUS_SRC_COLOR,[Di]:n.ONE_MINUS_SRC_ALPHA,[jl]:n.ONE_MINUS_DST_COLOR,[$l]:n.ONE_MINUS_DST_ALPHA,[th]:n.CONSTANT_COLOR,[sh]:n.ONE_MINUS_CONSTANT_COLOR,[nh]:n.CONSTANT_ALPHA,[rh]:n.ONE_MINUS_CONSTANT_ALPHA};function x(P,se,J,O,le,oe,Ee,nt,mt,Qe){if(P===Gs){_===!0&&(Re(n.BLEND),_=!1);return}if(_===!1&&(ie(n.BLEND),_=!0),P!==Jl){if(P!==m||Qe!==T){if((d!==Vs||C!==Vs)&&(n.blendEquation(n.FUNC_ADD),d=Vs,C=Vs),Qe)switch(P){case Sn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wa:n.blendFunc(n.ONE,n.ONE);break;case Wa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ja:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Sn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ja:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}R=null,D=null,B=null,E=null,v.set(0,0,0),K=0,m=P,T=Qe}return}le=le||se,oe=oe||J,Ee=Ee||O,(se!==d||le!==C)&&(n.blendEquationSeparate(we[se],we[le]),d=se,C=le),(J!==R||O!==D||oe!==B||Ee!==E)&&(n.blendFuncSeparate(at[J],at[O],at[oe],at[Ee]),R=J,D=O,B=oe,E=Ee),(nt.equals(v)===!1||mt!==K)&&(n.blendColor(nt.r,nt.g,nt.b,mt),v.copy(nt),K=mt),m=P,T=!1}function Pt(P,se){P.side===as?Re(n.CULL_FACE):ie(n.CULL_FACE);let J=P.side===Rt;se&&(J=!J),Ne(J),P.blending===Sn&&P.transparent===!1?x(Gs):x(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),i.setMask(P.colorWrite);const O=P.stencilWrite;o.setTest(O),O&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),et(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(P){S!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),S=P)}function Fe(P){P!==Vl?(ie(n.CULL_FACE),P!==b&&(P===Va?n.cullFace(n.BACK):P===wl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),b=P}function ge(P){P!==W&&(Z&&n.lineWidth(P),W=P)}function et(P,se,J){P?(ie(n.POLYGON_OFFSET_FILL),(w!==se||I!==J)&&(n.polygonOffset(se,J),w=se,I=J)):Re(n.POLYGON_OFFSET_FILL)}function Se(P){P?ie(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function G(P){P===void 0&&(P=n.TEXTURE0+z-1),re!==P&&(n.activeTexture(P),re=P)}function L(P,se,J){J===void 0&&(re===null?J=n.TEXTURE0+z-1:J=re);let O=ce[J];O===void 0&&(O={type:void 0,texture:void 0},ce[J]=O),(O.type!==P||O.texture!==se)&&(re!==J&&(n.activeTexture(J),re=J),n.bindTexture(P,se||me[P]),O.type=P,O.texture=se)}function N(){const P=ce[re];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(P){qe.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),qe.copy(P))}function fe(P){Y.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Ve(P,se){let J=h.get(se);J===void 0&&(J=new WeakMap,h.set(se,J));let O=J.get(P);O===void 0&&(O=n.getUniformBlockIndex(se,P.name),J.set(P,O))}function ye(P,se){const O=h.get(se).get(P);l.get(se)!==O&&(n.uniformBlockBinding(se,O,P.__bindingPointIndex),l.set(se,O))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},re=null,ce={},u={},f=new WeakMap,p=[],M=null,_=!1,m=null,d=null,R=null,D=null,C=null,B=null,E=null,v=new Ie(0,0,0),K=0,T=!1,S=null,b=null,W=null,w=null,I=null,qe.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:ie,disable:Re,bindFramebuffer:be,drawBuffers:Be,useProgram:st,setBlending:x,setMaterial:Pt,setFlipSided:Ne,setCullFace:Fe,setLineWidth:ge,setPolygonOffset:et,setScissorTest:Se,activeTexture:G,bindTexture:L,unbindTexture:N,compressedTexImage2D:Q,compressedTexImage3D:k,texImage2D:ue,texImage3D:Ce,updateUBOMapping:Ve,uniformBlockBinding:ye,texStorage2D:We,texStorage3D:j,texSubImage2D:U,texSubImage3D:Le,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:De,viewport:fe,reset:je}}function am(n,e,t,s,r,i,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ge,c=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(G,L){return p?new OffscreenCanvas(G,L):Br("canvas")}function _(G,L,N){let Q=1;const k=Se(G);if((k.width>N||k.height>N)&&(Q=N/Math.max(k.width,k.height)),Q<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const U=Math.floor(Q*k.width),Le=Math.floor(Q*k.height);u===void 0&&(u=M(U,Le));const ae=L?M(U,Le):u;return ae.width=U,ae.height=Le,ae.getContext("2d").drawImage(G,0,0,U,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+U+"x"+Le+")."),ae}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),G;return G}function m(G){return G.generateMipmaps}function d(G){n.generateMipmap(G)}function R(G){return G.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?n.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(G,L,N,Q,k=!1){if(G!==null){if(n[G]!==void 0)return n[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let U=L;if(L===n.RED&&(N===n.FLOAT&&(U=n.R32F),N===n.HALF_FLOAT&&(U=n.R16F),N===n.UNSIGNED_BYTE&&(U=n.R8)),L===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(U=n.R8UI),N===n.UNSIGNED_SHORT&&(U=n.R16UI),N===n.UNSIGNED_INT&&(U=n.R32UI),N===n.BYTE&&(U=n.R8I),N===n.SHORT&&(U=n.R16I),N===n.INT&&(U=n.R32I)),L===n.RG&&(N===n.FLOAT&&(U=n.RG32F),N===n.HALF_FLOAT&&(U=n.RG16F),N===n.UNSIGNED_BYTE&&(U=n.RG8)),L===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(U=n.RG8UI),N===n.UNSIGNED_SHORT&&(U=n.RG16UI),N===n.UNSIGNED_INT&&(U=n.RG32UI),N===n.BYTE&&(U=n.RG8I),N===n.SHORT&&(U=n.RG16I),N===n.INT&&(U=n.RG32I)),L===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(U=n.RGB8UI),N===n.UNSIGNED_SHORT&&(U=n.RGB16UI),N===n.UNSIGNED_INT&&(U=n.RGB32UI),N===n.BYTE&&(U=n.RGB8I),N===n.SHORT&&(U=n.RGB16I),N===n.INT&&(U=n.RGB32I)),L===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(U=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(U=n.RGBA16UI),N===n.UNSIGNED_INT&&(U=n.RGBA32UI),N===n.BYTE&&(U=n.RGBA8I),N===n.SHORT&&(U=n.RGBA16I),N===n.INT&&(U=n.RGBA32I)),L===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(U=n.RGB9_E5),L===n.RGBA){const Le=k?Ar:Ze.getTransfer(Q);N===n.FLOAT&&(U=n.RGBA32F),N===n.HALF_FLOAT&&(U=n.RGBA16F),N===n.UNSIGNED_BYTE&&(U=Le===ze?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(U=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(U=n.RGB5_A1)}return(U===n.R16F||U===n.R32F||U===n.RG16F||U===n.RG32F||U===n.RGBA16F||U===n.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function C(G,L){let N;return G?L===null||L===Xs||L===Dn?N=n.DEPTH24_STENCIL8:L===Ot?N=n.DEPTH32F_STENCIL8:L===Un&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Xs||L===Dn?N=n.DEPTH_COMPONENT24:L===Ot?N=n.DEPTH_COMPONENT32F:L===Un&&(N=n.DEPTH_COMPONENT16),N}function B(G,L){return m(G)===!0||G.isFramebufferTexture&&G.minFilter!==bt&&G.minFilter!==Qt?Math.log2(Math.max(L.width,L.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?L.mipmaps.length:1}function E(G){const L=G.target;L.removeEventListener("dispose",E),K(L),L.isVideoTexture&&c.delete(L)}function v(G){const L=G.target;L.removeEventListener("dispose",v),S(L)}function K(G){const L=s.get(G);if(L.__webglInit===void 0)return;const N=G.source,Q=f.get(N);if(Q){const k=Q[L.__cacheKey];k.usedTimes--,k.usedTimes===0&&T(G),Object.keys(Q).length===0&&f.delete(N)}s.remove(G)}function T(G){const L=s.get(G);n.deleteTexture(L.__webglTexture);const N=G.source,Q=f.get(N);delete Q[L.__cacheKey],a.memory.textures--}function S(G){const L=s.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),s.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(L.__webglFramebuffer[Q]))for(let k=0;k<L.__webglFramebuffer[Q].length;k++)n.deleteFramebuffer(L.__webglFramebuffer[Q][k]);else n.deleteFramebuffer(L.__webglFramebuffer[Q]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[Q])}else{if(Array.isArray(L.__webglFramebuffer))for(let Q=0;Q<L.__webglFramebuffer.length;Q++)n.deleteFramebuffer(L.__webglFramebuffer[Q]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let Q=0;Q<L.__webglColorRenderbuffer.length;Q++)L.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[Q]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const N=G.textures;for(let Q=0,k=N.length;Q<k;Q++){const U=s.get(N[Q]);U.__webglTexture&&(n.deleteTexture(U.__webglTexture),a.memory.textures--),s.remove(N[Q])}s.remove(G)}let b=0;function W(){b=0}function w(){const G=b;return G>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+r.maxTextures),b+=1,G}function I(G){const L=[];return L.push(G.wrapS),L.push(G.wrapT),L.push(G.wrapR||0),L.push(G.magFilter),L.push(G.minFilter),L.push(G.anisotropy),L.push(G.internalFormat),L.push(G.format),L.push(G.type),L.push(G.generateMipmaps),L.push(G.premultiplyAlpha),L.push(G.flipY),L.push(G.unpackAlignment),L.push(G.colorSpace),L.join()}function z(G,L){const N=s.get(G);if(G.isVideoTexture&&ge(G),G.isRenderTargetTexture===!1&&G.version>0&&N.__version!==G.version){const Q=G.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,G,L);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+L)}function Z(G,L){const N=s.get(G);if(G.version>0&&N.__version!==G.version){Y(N,G,L);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+L)}function $(G,L){const N=s.get(G);if(G.version>0&&N.__version!==G.version){Y(N,G,L);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+L)}function X(G,L){const N=s.get(G);if(G.version>0&&N.__version!==G.version){ee(N,G,L);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+L)}const re={[Bi]:n.REPEAT,[Ws]:n.CLAMP_TO_EDGE,[Ni]:n.MIRRORED_REPEAT},ce={[bt]:n.NEAREST,[ph]:n.NEAREST_MIPMAP_NEAREST,[er]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Yr]:n.LINEAR_MIPMAP_NEAREST,[Js]:n.LINEAR_MIPMAP_LINEAR},Me={[gh]:n.NEVER,[Rh]:n.ALWAYS,[Sh]:n.LESS,[il]:n.LEQUAL,[_h]:n.EQUAL,[Gh]:n.GEQUAL,[Th]:n.GREATER,[Ch]:n.NOTEQUAL};function Ke(G,L){if(L.type===Ot&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Qt||L.magFilter===Yr||L.magFilter===er||L.magFilter===Js||L.minFilter===Qt||L.minFilter===Yr||L.minFilter===er||L.minFilter===Js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(G,n.TEXTURE_WRAP_S,re[L.wrapS]),n.texParameteri(G,n.TEXTURE_WRAP_T,re[L.wrapT]),(G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY)&&n.texParameteri(G,n.TEXTURE_WRAP_R,re[L.wrapR]),n.texParameteri(G,n.TEXTURE_MAG_FILTER,ce[L.magFilter]),n.texParameteri(G,n.TEXTURE_MIN_FILTER,ce[L.minFilter]),L.compareFunction&&(n.texParameteri(G,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(G,n.TEXTURE_COMPARE_FUNC,Me[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===bt||L.minFilter!==er&&L.minFilter!==Js||L.type===Ot&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||s.get(L).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(G,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),s.get(L).__currentAnisotropy=L.anisotropy}}}function qe(G,L){let N=!1;G.__webglInit===void 0&&(G.__webglInit=!0,L.addEventListener("dispose",E));const Q=L.source;let k=f.get(Q);k===void 0&&(k={},f.set(Q,k));const U=I(L);if(U!==G.__cacheKey){k[U]===void 0&&(k[U]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),k[U].usedTimes++;const Le=k[G.__cacheKey];Le!==void 0&&(k[G.__cacheKey].usedTimes--,Le.usedTimes===0&&T(L)),G.__cacheKey=U,G.__webglTexture=k[U].texture}return N}function Y(G,L,N){let Q=n.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),L.isData3DTexture&&(Q=n.TEXTURE_3D);const k=qe(G,L),U=L.source;t.bindTexture(Q,G.__webglTexture,n.TEXTURE0+N);const Le=s.get(U);if(U.version!==Le.__version||k===!0){t.activeTexture(n.TEXTURE0+N);const ae=Ze.getPrimaries(Ze.workingColorSpace),de=L.colorSpace===_s?null:Ze.getPrimaries(L.colorSpace),We=L.colorSpace===_s||ae===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let j=_(L.image,!1,r.maxTextureSize);j=et(L,j);const ue=i.convert(L.format,L.colorSpace),Ce=i.convert(L.type);let De=D(L.internalFormat,ue,Ce,L.colorSpace,L.isVideoTexture);Ke(Q,L);let fe;const Ve=L.mipmaps,ye=L.isVideoTexture!==!0,je=Le.__version===void 0||k===!0,P=U.dataReady,se=B(L,j);if(L.isDepthTexture)De=C(L.format===vn,L.type),je&&(ye?t.texStorage2D(n.TEXTURE_2D,1,De,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,De,j.width,j.height,0,ue,Ce,null));else if(L.isDataTexture)if(Ve.length>0){ye&&je&&t.texStorage2D(n.TEXTURE_2D,se,De,Ve[0].width,Ve[0].height);for(let J=0,O=Ve.length;J<O;J++)fe=Ve[J],ye?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,ue,Ce,fe.data):t.texImage2D(n.TEXTURE_2D,J,De,fe.width,fe.height,0,ue,Ce,fe.data);L.generateMipmaps=!1}else ye?(je&&t.texStorage2D(n.TEXTURE_2D,se,De,j.width,j.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,ue,Ce,j.data)):t.texImage2D(n.TEXTURE_2D,0,De,j.width,j.height,0,ue,Ce,j.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){ye&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,De,Ve[0].width,Ve[0].height,j.depth);for(let J=0,O=Ve.length;J<O;J++)if(fe=Ve[J],L.format!==It)if(ue!==null)if(ye){if(P)if(L.layerUpdates.size>0){const le=Mo(fe.width,fe.height,L.format,L.type);for(const oe of L.layerUpdates){const Ee=fe.data.subarray(oe*le/fe.data.BYTES_PER_ELEMENT,(oe+1)*le/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,oe,fe.width,fe.height,1,ue,Ee)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,j.depth,ue,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,De,fe.width,fe.height,j.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,j.depth,ue,Ce,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,De,fe.width,fe.height,j.depth,0,ue,Ce,fe.data)}else{ye&&je&&t.texStorage2D(n.TEXTURE_2D,se,De,Ve[0].width,Ve[0].height);for(let J=0,O=Ve.length;J<O;J++)fe=Ve[J],L.format!==It?ue!==null?ye?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,De,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,ue,Ce,fe.data):t.texImage2D(n.TEXTURE_2D,J,De,fe.width,fe.height,0,ue,Ce,fe.data)}else if(L.isDataArrayTexture)if(ye){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,De,j.width,j.height,j.depth),P)if(L.layerUpdates.size>0){const J=Mo(j.width,j.height,L.format,L.type);for(const O of L.layerUpdates){const le=j.data.subarray(O*J/j.data.BYTES_PER_ELEMENT,(O+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,O,j.width,j.height,1,ue,Ce,le)}L.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ue,Ce,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,j.width,j.height,j.depth,0,ue,Ce,j.data);else if(L.isData3DTexture)ye?(je&&t.texStorage3D(n.TEXTURE_3D,se,De,j.width,j.height,j.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ue,Ce,j.data)):t.texImage3D(n.TEXTURE_3D,0,De,j.width,j.height,j.depth,0,ue,Ce,j.data);else if(L.isFramebufferTexture){if(je)if(ye)t.texStorage2D(n.TEXTURE_2D,se,De,j.width,j.height);else{let J=j.width,O=j.height;for(let le=0;le<se;le++)t.texImage2D(n.TEXTURE_2D,le,De,J,O,0,ue,Ce,null),J>>=1,O>>=1}}else if(Ve.length>0){if(ye&&je){const J=Se(Ve[0]);t.texStorage2D(n.TEXTURE_2D,se,De,J.width,J.height)}for(let J=0,O=Ve.length;J<O;J++)fe=Ve[J],ye?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ue,Ce,fe):t.texImage2D(n.TEXTURE_2D,J,De,ue,Ce,fe);L.generateMipmaps=!1}else if(ye){if(je){const J=Se(j);t.texStorage2D(n.TEXTURE_2D,se,De,J.width,J.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Ce,j)}else t.texImage2D(n.TEXTURE_2D,0,De,ue,Ce,j);m(L)&&d(Q),Le.__version=U.version,L.onUpdate&&L.onUpdate(L)}G.__version=L.version}function ee(G,L,N){if(L.image.length!==6)return;const Q=qe(G,L),k=L.source;t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+N);const U=s.get(k);if(k.version!==U.__version||Q===!0){t.activeTexture(n.TEXTURE0+N);const Le=Ze.getPrimaries(Ze.workingColorSpace),ae=L.colorSpace===_s?null:Ze.getPrimaries(L.colorSpace),de=L.colorSpace===_s||Le===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const We=L.isCompressedTexture||L.image[0].isCompressedTexture,j=L.image[0]&&L.image[0].isDataTexture,ue=[];for(let O=0;O<6;O++)!We&&!j?ue[O]=_(L.image[O],!0,r.maxCubemapSize):ue[O]=j?L.image[O].image:L.image[O],ue[O]=et(L,ue[O]);const Ce=ue[0],De=i.convert(L.format,L.colorSpace),fe=i.convert(L.type),Ve=D(L.internalFormat,De,fe,L.colorSpace),ye=L.isVideoTexture!==!0,je=U.__version===void 0||Q===!0,P=k.dataReady;let se=B(L,Ce);Ke(n.TEXTURE_CUBE_MAP,L);let J;if(We){ye&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ve,Ce.width,Ce.height);for(let O=0;O<6;O++){J=ue[O].mipmaps;for(let le=0;le<J.length;le++){const oe=J[le];L.format!==It?De!==null?ye?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,le,0,0,oe.width,oe.height,De,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,le,Ve,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,le,0,0,oe.width,oe.height,De,fe,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,le,Ve,oe.width,oe.height,0,De,fe,oe.data)}}}else{if(J=L.mipmaps,ye&&je){J.length>0&&se++;const O=Se(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ve,O.width,O.height)}for(let O=0;O<6;O++)if(j){ye?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ue[O].width,ue[O].height,De,fe,ue[O].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ve,ue[O].width,ue[O].height,0,De,fe,ue[O].data);for(let le=0;le<J.length;le++){const Ee=J[le].image[O].image;ye?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,le+1,0,0,Ee.width,Ee.height,De,fe,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,le+1,Ve,Ee.width,Ee.height,0,De,fe,Ee.data)}}else{ye?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,De,fe,ue[O]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ve,De,fe,ue[O]);for(let le=0;le<J.length;le++){const oe=J[le];ye?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,le+1,0,0,De,fe,oe.image[O]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,le+1,Ve,De,fe,oe.image[O])}}}m(L)&&d(n.TEXTURE_CUBE_MAP),U.__version=k.version,L.onUpdate&&L.onUpdate(L)}G.__version=L.version}function me(G,L,N,Q,k,U){const Le=i.convert(N.format,N.colorSpace),ae=i.convert(N.type),de=D(N.internalFormat,Le,ae,N.colorSpace),We=s.get(L),j=s.get(N);if(j.__renderTarget=L,!We.__hasExternalTextures){const ue=Math.max(1,L.width>>U),Ce=Math.max(1,L.height>>U);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,U,de,ue,Ce,L.depth,0,Le,ae,null):t.texImage2D(k,U,de,ue,Ce,0,Le,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,G),Fe(L)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,k,j.__webglTexture,0,Ne(L)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,k,j.__webglTexture,U),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(G,L,N){if(n.bindRenderbuffer(n.RENDERBUFFER,G),L.depthBuffer){const Q=L.depthTexture,k=Q&&Q.isDepthTexture?Q.type:null,U=C(L.stencilBuffer,k),Le=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Ne(L);Fe(L)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,U,L.width,L.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,U,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,U,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,G)}else{const Q=L.textures;for(let k=0;k<Q.length;k++){const U=Q[k],Le=i.convert(U.format,U.colorSpace),ae=i.convert(U.type),de=D(U.internalFormat,Le,ae,U.colorSpace),We=Ne(L);N&&Fe(L)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,de,L.width,L.height):Fe(L)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,de,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,de,L.width,L.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(G,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,G),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=s.get(L.depthTexture);Q.__renderTarget=L,(!Q.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),z(L.depthTexture,0);const k=Q.__webglTexture,U=Ne(L);if(L.depthTexture.format===_n)Fe(L)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(L.depthTexture.format===vn)Fe(L)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function be(G){const L=s.get(G),N=G.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==G.depthTexture){const Q=G.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),Q){const k=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,Q.removeEventListener("dispose",k)};Q.addEventListener("dispose",k),L.__depthDisposeCallback=k}L.__boundDepthTexture=Q}if(G.depthTexture&&!L.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Re(L.__webglFramebuffer,G)}else if(N){L.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer[Q]),L.__webglDepthbuffer[Q]===void 0)L.__webglDepthbuffer[Q]=n.createRenderbuffer(),ie(L.__webglDepthbuffer[Q],G,!1);else{const k=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=L.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,U)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=n.createRenderbuffer(),ie(L.__webglDepthbuffer,G,!1);else{const Q=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=L.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,k)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(G,L,N){const Q=s.get(G);L!==void 0&&me(Q.__webglFramebuffer,G,G.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&be(G)}function st(G){const L=G.texture,N=s.get(G),Q=s.get(L);G.addEventListener("dispose",v);const k=G.textures,U=G.isWebGLCubeRenderTarget===!0,Le=k.length>1;if(Le||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=L.version,a.memory.textures++),U){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(L.mipmaps&&L.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let de=0;de<L.mipmaps.length;de++)N.__webglFramebuffer[ae][de]=n.createFramebuffer()}else N.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<L.mipmaps.length;ae++)N.__webglFramebuffer[ae]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Le)for(let ae=0,de=k.length;ae<de;ae++){const We=s.get(k[ae]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),a.memory.textures++)}if(G.samples>0&&Fe(G)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<k.length;ae++){const de=k[ae];N.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const We=i.convert(de.format,de.colorSpace),j=i.convert(de.type),ue=D(de.internalFormat,We,j,de.colorSpace,G.isXRRenderTarget===!0),Ce=Ne(G);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ue,G.width,G.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),G.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(N.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,L);for(let ae=0;ae<6;ae++)if(L.mipmaps&&L.mipmaps.length>0)for(let de=0;de<L.mipmaps.length;de++)me(N.__webglFramebuffer[ae][de],G,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else me(N.__webglFramebuffer[ae],G,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(L)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ae=0,de=k.length;ae<de;ae++){const We=k[ae],j=s.get(We);t.bindTexture(n.TEXTURE_2D,j.__webglTexture),Ke(n.TEXTURE_2D,We),me(N.__webglFramebuffer,G,We,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(We)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ae=G.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),Ke(ae,L),L.mipmaps&&L.mipmaps.length>0)for(let de=0;de<L.mipmaps.length;de++)me(N.__webglFramebuffer[de],G,L,n.COLOR_ATTACHMENT0,ae,de);else me(N.__webglFramebuffer,G,L,n.COLOR_ATTACHMENT0,ae,0);m(L)&&d(ae),t.unbindTexture()}G.depthBuffer&&be(G)}function we(G){const L=G.textures;for(let N=0,Q=L.length;N<Q;N++){const k=L[N];if(m(k)){const U=R(G),Le=s.get(k).__webglTexture;t.bindTexture(U,Le),d(U),t.unbindTexture()}}}const at=[],x=[];function Pt(G){if(G.samples>0){if(Fe(G)===!1){const L=G.textures,N=G.width,Q=G.height;let k=n.COLOR_BUFFER_BIT;const U=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=s.get(G),ae=L.length>1;if(ae)for(let de=0;de<L.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let de=0;de<L.length;de++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[de]);const We=s.get(L[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,N,Q,0,0,N,Q,k,n.NEAREST),l===!0&&(at.length=0,x.length=0,at.push(n.COLOR_ATTACHMENT0+de),G.depthBuffer&&G.resolveDepthBuffer===!1&&(at.push(U),x.push(U),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let de=0;de<L.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Le.__webglColorRenderbuffer[de]);const We=s.get(L[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&l){const L=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[L])}}}function Ne(G){return Math.min(r.maxSamples,G.samples)}function Fe(G){const L=s.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function ge(G){const L=a.render.frame;c.get(G)!==L&&(c.set(G,L),G.update())}function et(G,L){const N=G.colorSpace,Q=G.format,k=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||N!==xn&&N!==_s&&(Ze.getTransfer(N)===ze?(Q!==It||k!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),L}function Se(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(h.width=G.naturalWidth||G.width,h.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(h.width=G.displayWidth,h.height=G.displayHeight):(h.width=G.width,h.height=G.height),h}this.allocateTextureUnit=w,this.resetTextureUnits=W,this.setTexture2D=z,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=st,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Fe}function om(n,e){function t(s,r=_s){let i;const a=Ze.getTransfer(r);if(s===us)return n.UNSIGNED_BYTE;if(s===Ma)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ga)return n.UNSIGNED_SHORT_5_5_5_1;if(s===$o)return n.UNSIGNED_INT_5_9_9_9_REV;if(s===zo)return n.BYTE;if(s===ko)return n.SHORT;if(s===Un)return n.UNSIGNED_SHORT;if(s===La)return n.INT;if(s===Xs)return n.UNSIGNED_INT;if(s===Ot)return n.FLOAT;if(s===On)return n.HALF_FLOAT;if(s===qo)return n.ALPHA;if(s===jo)return n.RGB;if(s===It)return n.RGBA;if(s===el)return n.LUMINANCE;if(s===tl)return n.LUMINANCE_ALPHA;if(s===_n)return n.DEPTH_COMPONENT;if(s===vn)return n.DEPTH_STENCIL;if(s===Sa)return n.RED;if(s===_a)return n.RED_INTEGER;if(s===sl)return n.RG;if(s===Ta)return n.RG_INTEGER;if(s===Ca)return n.RGBA_INTEGER;if(s===xr||s===br||s===Er||s===Pr)if(a===ze)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(s===xr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===br)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Er)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(s===xr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===br)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Er)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pr)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fi||s===Vi||s===wi||s===Wi)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(s===Fi)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vi)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wi)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wi)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ji||s===Xi||s===Zi)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(s===Ji||s===Xi)return a===ze?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(s===Zi)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ii||s===Ui||s===Yi||s===Qi||s===Oi||s===zi||s===ki||s===$i||s===qi||s===ji||s===ea||s===ta||s===sa||s===na)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(s===Ii)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ui)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yi)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qi)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oi)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zi)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ki)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$i)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qi)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ji)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ea)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ta)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sa)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===na)return a===ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yr||s===ra||s===ia)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(s===yr)return a===ze?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ra)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ia)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===nl||s===aa||s===oa||s===la)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(s===yr)return i.COMPRESSED_RED_RGTC1_EXT;if(s===aa)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===oa)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===la)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dn?n.UNSIGNED_INT_24_8:n[s]!==void 0?n[s]:null}return{convert:t}}const lm={type:"move"};class Ti{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let r=null,i=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,s),d=this._getHandJoint(h,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=c.position.distanceTo(u.position),p=.02,M=.005;h.inputState.pinching&&f>p+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=p-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,s),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=i!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Cr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const r=new gt,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new xs({vertexShader:hm,fragmentShader:cm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Wr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class um extends Ys{constructor(e,t){super();const s=this;let r=null,i=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,f=null,p=null,M=null;const _=new dm,m=t.getContextAttributes();let d=null,R=null;const D=[],C=[],B=new Ge;let E=null;const v=new Bt;v.viewport=new it;const K=new Bt;K.viewport=new it;const T=[v,K],S=new yc;let b=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=D[Y];return ee===void 0&&(ee=new Ti,D[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=D[Y];return ee===void 0&&(ee=new Ti,D[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=D[Y];return ee===void 0&&(ee=new Ti,D[Y]=ee),ee.getHandSpace()};function w(Y){const ee=C.indexOf(Y.inputSource);if(ee===-1)return;const me=D[ee];me!==void 0&&(me.update(Y.inputSource,Y.frame,h||a),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function I(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",z);for(let Y=0;Y<D.length;Y++){const ee=C[Y];ee!==null&&(C[Y]=null,D[Y].disconnect(ee))}b=null,W=null,_.reset(),e.setRenderTarget(d),p=null,f=null,u=null,r=null,R=null,qe.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){i=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",I),r.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Zs(p.framebufferWidth,p.framebufferHeight,{format:It,type:us,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,me=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?vn:_n,me=m.stencil?Dn:Xs);const Re={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:i};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new Zs(f.textureWidth,f.textureHeight,{format:It,type:us,depthTexture:new _l(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(Y){for(let ee=0;ee<Y.removed.length;ee++){const me=Y.removed[ee],ie=C.indexOf(me);ie>=0&&(C[ie]=null,D[ie].disconnect(me))}for(let ee=0;ee<Y.added.length;ee++){const me=Y.added[ee];let ie=C.indexOf(me);if(ie===-1){for(let be=0;be<D.length;be++)if(be>=C.length){C.push(me),ie=be;break}else if(C[be]===null){C[be]=me,ie=be;break}if(ie===-1)break}const Re=D[ie];Re&&Re.connect(me)}}const Z=new A,$=new A;function X(Y,ee,me){Z.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(me.matrixWorld);const ie=Z.distanceTo($),Re=ee.projectionMatrix.elements,be=me.projectionMatrix.elements,Be=Re[14]/(Re[10]-1),st=Re[14]/(Re[10]+1),we=(Re[9]+1)/Re[5],at=(Re[9]-1)/Re[5],x=(Re[8]-1)/Re[0],Pt=(be[8]+1)/be[0],Ne=Be*x,Fe=Be*Pt,ge=ie/(-x+Pt),et=ge*-x;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(et),Y.translateZ(ge),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Se=Be+ge,G=st+ge,L=Ne-et,N=Fe+(ie-et),Q=we*st/G*Se,k=at*st/G*Se;Y.projectionMatrix.makePerspective(L,N,Q,k,Se,G),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,me=Y.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(me=_.depthFar)),S.near=K.near=v.near=ee,S.far=K.far=v.far=me,(b!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,W=S.far),v.layers.mask=Y.layers.mask|2,K.layers.mask=Y.layers.mask|4,S.layers.mask=v.layers.mask|K.layers.mask;const ie=Y.parent,Re=S.cameras;re(S,ie);for(let be=0;be<Re.length;be++)re(Re[be],ie);Re.length===2?X(S,v,K):S.projectionMatrix.copy(v.projectionMatrix),ce(Y,S,ie)};function ce(Y,ee,me){me===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yn*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Me=null;function Ke(Y,ee){if(c=ee.getViewerPose(h||a),M=ee,c!==null){const me=c.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let ie=!1;me.length!==S.cameras.length&&(S.cameras.length=0,ie=!0);for(let be=0;be<me.length;be++){const Be=me[be];let st=null;if(p!==null)st=p.getViewport(Be);else{const at=u.getViewSubImage(f,Be);st=at.viewport,be===0&&(e.setRenderTargetTextures(R,at.colorTexture,f.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(R))}let we=T[be];we===void 0&&(we=new Bt,we.layers.enable(be),we.viewport=new it,T[be]=we),we.matrix.fromArray(Be.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Be.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(st.x,st.y,st.width,st.height),be===0&&(S.matrix.copy(we.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ie===!0&&S.cameras.push(we)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const be=u.getDepthInformation(me[0]);be&&be.isValid&&be.texture&&_.init(e,be,r.renderState)}}for(let me=0;me<D.length;me++){const ie=C[me],Re=D[me];ie!==null&&Re!==void 0&&Re.update(ie,ee,h||a)}Me&&Me(Y,ee),ee.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ee}),M=null}const qe=new Gl;qe.setAnimationLoop(Ke),this.setAnimationLoop=function(Y){Me=Y},this.dispose=function(){}}}const Ns=new $t,fm=new $e;function pm(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function s(m,d){d.color.getRGB(m.fogColor.value,ml(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,R,D,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(m,d):d.isMeshToonMaterial?(i(m,d),u(m,d)):d.isMeshPhongMaterial?(i(m,d),c(m,d)):d.isMeshStandardMaterial?(i(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,C)):d.isMeshMatcapMaterial?(i(m,d),M(m,d)):d.isMeshDepthMaterial?i(m,d):d.isMeshDistanceMaterial?(i(m,d),_(m,d)):d.isMeshNormalMaterial?i(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,R,D):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const R=e.get(d),D=R.envMap,C=R.envMapRotation;D&&(m.envMap.value=D,Ns.copy(C),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),m.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Ns)),m.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,R,D){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=D*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function M(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const R=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function mm(n,e,t,s){let r={},i={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,D){const C=D.program;s.uniformBlockBinding(R,C)}function h(R,D){let C=r[R.id];C===void 0&&(M(R),C=c(R),r[R.id]=C,R.addEventListener("dispose",m));const B=D.program;s.updateUBOMapping(R,B);const E=e.render.frame;i[R.id]!==E&&(f(R),i[R.id]=E)}function c(R){const D=u();R.__bindingPointIndex=D;const C=n.createBuffer(),B=R.__size,E=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,B,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,C),C}function u(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const D=r[R.id],C=R.uniforms,B=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let E=0,v=C.length;E<v;E++){const K=Array.isArray(C[E])?C[E]:[C[E]];for(let T=0,S=K.length;T<S;T++){const b=K[T];if(p(b,E,T,B)===!0){const W=b.__offset,w=Array.isArray(b.value)?b.value:[b.value];let I=0;for(let z=0;z<w.length;z++){const Z=w[z],$=_(Z);typeof Z=="number"||typeof Z=="boolean"?(b.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,W+I,b.__data)):Z.isMatrix3?(b.__data[0]=Z.elements[0],b.__data[1]=Z.elements[1],b.__data[2]=Z.elements[2],b.__data[3]=0,b.__data[4]=Z.elements[3],b.__data[5]=Z.elements[4],b.__data[6]=Z.elements[5],b.__data[7]=0,b.__data[8]=Z.elements[6],b.__data[9]=Z.elements[7],b.__data[10]=Z.elements[8],b.__data[11]=0):(Z.toArray(b.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(R,D,C,B){const E=R.value,v=D+"_"+C;if(B[v]===void 0)return typeof E=="number"||typeof E=="boolean"?B[v]=E:B[v]=E.clone(),!0;{const K=B[v];if(typeof E=="number"||typeof E=="boolean"){if(K!==E)return B[v]=E,!0}else if(K.equals(E)===!1)return K.copy(E),!0}return!1}function M(R){const D=R.uniforms;let C=0;const B=16;for(let v=0,K=D.length;v<K;v++){const T=Array.isArray(D[v])?D[v]:[D[v]];for(let S=0,b=T.length;S<b;S++){const W=T[S],w=Array.isArray(W.value)?W.value:[W.value];for(let I=0,z=w.length;I<z;I++){const Z=w[I],$=_(Z),X=C%B,re=X%$.boundary,ce=X+re;C+=re,ce!==0&&B-ce<$.storage&&(C+=B-ce),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=C,C+=$.storage}}}const E=C%B;return E>0&&(C+=B-E),R.__size=C,R.__cache={},this}function _(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),D}function m(R){const D=R.target;D.removeEventListener("dispose",m);const C=a.indexOf(D.__bindingPointIndex);a.splice(C,1),n.deleteBuffer(r[D.id]),delete r[D.id],delete i[D.id]}function d(){for(const R in r)n.deleteBuffer(r[R]);a=[],r={},i={}}return{bind:l,update:h,dispose:d}}class Lm{constructor(e={}){const{canvas:t=Zh(),context:s=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=s.getContextAttributes().alpha}else p=a;const M=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const R=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Rs,this.toneMappingExposure=1;const C=this;let B=!1,E=0,v=0,K=null,T=-1,S=null;const b=new it,W=new it;let w=null;const I=new Ie(0);let z=0,Z=t.width,$=t.height,X=1,re=null,ce=null;const Me=new it(0,0,Z,$),Ke=new it(0,0,Z,$);let qe=!1;const Y=new Ra;let ee=!1,me=!1;const ie=new $e,Re=new $e,be=new A,Be=new it,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function at(){return K===null?X:1}let x=s;function Pt(g,y){return t.getContext(g,y)}try{const g={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ma}`),t.addEventListener("webglcontextlost",O,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",oe,!1),x===null){const y="webgl2";if(x=Pt(y,g),x===null)throw Pt(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Ne,Fe,ge,et,Se,G,L,N,Q,k,U,Le,ae,de,We,j,ue,Ce,De,fe,Ve,ye,je,P;function se(){Ne=new Df(x),Ne.init(),ye=new om(x,Ne),Fe=new Sf(x,Ne,e,ye),ge=new im(x,Ne),Fe.reverseDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),et=new bf(x),Se=new Yp,G=new am(x,Ne,ge,Se,Fe,ye,et),L=new Tf(C),N=new Rf(C),Q=new Kc(x),je=new Mf(x,Q),k=new vf(x,Q,et,je),U=new Pf(x,k,Q,et),De=new Ef(x,Fe,G),j=new _f(Se),Le=new Up(C,L,N,Ne,Fe,je,j),ae=new pm(C,Se),de=new Op,We=new em(Ne),Ce=new Lf(C,L,N,ge,U,p,l),ue=new nm(C,U,Fe),P=new mm(x,et,Fe,ge),fe=new gf(x,Ne,et),Ve=new xf(x,Ne,et),et.programs=Le.programs,C.capabilities=Fe,C.extensions=Ne,C.properties=Se,C.renderLists=de,C.shadowMap=ue,C.state=ge,C.info=et}se();const J=new um(C,x);this.xr=J,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const g=Ne.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Ne.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(g){g!==void 0&&(X=g,this.setSize(Z,$,!1))},this.getSize=function(g){return g.set(Z,$)},this.setSize=function(g,y,F=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=g,$=y,t.width=Math.floor(g*X),t.height=Math.floor(y*X),F===!0&&(t.style.width=g+"px",t.style.height=y+"px"),this.setViewport(0,0,g,y)},this.getDrawingBufferSize=function(g){return g.set(Z*X,$*X).floor()},this.setDrawingBufferSize=function(g,y,F){Z=g,$=y,X=F,t.width=Math.floor(g*F),t.height=Math.floor(y*F),this.setViewport(0,0,g,y)},this.getCurrentViewport=function(g){return g.copy(b)},this.getViewport=function(g){return g.copy(Me)},this.setViewport=function(g,y,F,V){g.isVector4?Me.set(g.x,g.y,g.z,g.w):Me.set(g,y,F,V),ge.viewport(b.copy(Me).multiplyScalar(X).round())},this.getScissor=function(g){return g.copy(Ke)},this.setScissor=function(g,y,F,V){g.isVector4?Ke.set(g.x,g.y,g.z,g.w):Ke.set(g,y,F,V),ge.scissor(W.copy(Ke).multiplyScalar(X).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(g){ge.setScissorTest(qe=g)},this.setOpaqueSort=function(g){re=g},this.setTransparentSort=function(g){ce=g},this.getClearColor=function(g){return g.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(g=!0,y=!0,F=!0){let V=0;if(g){let H=!1;if(K!==null){const q=K.texture.format;H=q===Ca||q===Ta||q===_a}if(H){const q=K.texture.type,ne=q===us||q===Xs||q===Un||q===Dn||q===Ma||q===ga,he=Ce.getClearColor(),pe=Ce.getClearAlpha(),ve=he.r,xe=he.g,_e=he.b;ne?(M[0]=ve,M[1]=xe,M[2]=_e,M[3]=pe,x.clearBufferuiv(x.COLOR,0,M)):(_[0]=ve,_[1]=xe,_[2]=_e,_[3]=pe,x.clearBufferiv(x.COLOR,0,_))}else V|=x.COLOR_BUFFER_BIT}y&&(V|=x.DEPTH_BUFFER_BIT),F&&(V|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",O,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Ce.dispose(),de.dispose(),We.dispose(),Se.dispose(),L.dispose(),N.dispose(),U.dispose(),je.dispose(),P.dispose(),Le.dispose(),J.dispose(),J.removeEventListener("sessionstart",ya),J.removeEventListener("sessionend",Ha),Es.stop()};function O(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const g=et.autoReset,y=ue.enabled,F=ue.autoUpdate,V=ue.needsUpdate,H=ue.type;se(),et.autoReset=g,ue.enabled=y,ue.autoUpdate=F,ue.needsUpdate=V,ue.type=H}function oe(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function Ee(g){const y=g.target;y.removeEventListener("dispose",Ee),nt(y)}function nt(g){mt(g),Se.remove(g)}function mt(g){const y=Se.get(g).programs;y!==void 0&&(y.forEach(function(F){Le.releaseProgram(F)}),g.isShaderMaterial&&Le.releaseShaderCache(g))}this.renderBufferDirect=function(g,y,F,V,H,q){y===null&&(y=st);const ne=H.isMesh&&H.matrixWorld.determinant()<0,he=Al(g,y,F,V,H);ge.setMaterial(V,ne);let pe=F.index,ve=1;if(V.wireframe===!0){if(pe=k.getWireframeAttribute(F),pe===void 0)return;ve=2}const xe=F.drawRange,_e=F.attributes.position;let Je=xe.start*ve,Ue=(xe.start+xe.count)*ve;q!==null&&(Je=Math.max(Je,q.start*ve),Ue=Math.min(Ue,(q.start+q.count)*ve)),pe!==null?(Je=Math.max(Je,0),Ue=Math.min(Ue,pe.count)):_e!=null&&(Je=Math.max(Je,0),Ue=Math.min(Ue,_e.count));const ot=Ue-Je;if(ot<0||ot===1/0)return;je.setup(H,V,he,F,pe);let rt,Xe=fe;if(pe!==null&&(rt=Q.get(pe),Xe=Ve,Xe.setIndex(rt)),H.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*at()),Xe.setMode(x.LINES)):Xe.setMode(x.TRIANGLES);else if(H.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),ge.setLineWidth(Te*at()),H.isLineSegments?Xe.setMode(x.LINES):H.isLineLoop?Xe.setMode(x.LINE_LOOP):Xe.setMode(x.LINE_STRIP)}else H.isPoints?Xe.setMode(x.POINTS):H.isSprite&&Xe.setMode(x.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Xe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Xe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Te=H._multiDrawStarts,pt=H._multiDrawCounts,Ye=H._multiDrawCount,wt=pe?Q.get(pe).bytesPerElement:1,zs=Se.get(V).currentProgram.getUniforms();for(let Dt=0;Dt<Ye;Dt++)zs.setValue(x,"_gl_DrawID",Dt),Xe.render(Te[Dt]/wt,pt[Dt])}else if(H.isInstancedMesh)Xe.renderInstances(Je,ot,H.count);else if(F.isInstancedBufferGeometry){const Te=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,pt=Math.min(F.instanceCount,Te);Xe.renderInstances(Je,ot,pt)}else Xe.render(Je,ot)};function Qe(g,y,F){g.transparent===!0&&g.side===as&&g.forceSinglePass===!1?(g.side=Rt,g.needsUpdate=!0,jn(g,y,F),g.side=vs,g.needsUpdate=!0,jn(g,y,F),g.side=as):jn(g,y,F)}this.compile=function(g,y,F=null){F===null&&(F=g),d=We.get(F),d.init(y),D.push(d),F.traverseVisible(function(H){H.isLight&&H.layers.test(y.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),g!==F&&g.traverseVisible(function(H){H.isLight&&H.layers.test(y.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const V=new Set;return g.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const q=H.material;if(q)if(Array.isArray(q))for(let ne=0;ne<q.length;ne++){const he=q[ne];Qe(he,F,H),V.add(he)}else Qe(q,F,H),V.add(q)}),D.pop(),d=null,V},this.compileAsync=function(g,y,F=null){const V=this.compile(g,y,F);return new Promise(H=>{function q(){if(V.forEach(function(ne){Se.get(ne).currentProgram.isReady()&&V.delete(ne)}),V.size===0){H(g);return}setTimeout(q,10)}Ne.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let Vt=null;function jt(g){Vt&&Vt(g)}function ya(){Es.stop()}function Ha(){Es.start()}const Es=new Gl;Es.setAnimationLoop(jt),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(g){Vt=g,J.setAnimationLoop(g),g===null?Es.stop():Es.start()},J.addEventListener("sessionstart",ya),J.addEventListener("sessionend",Ha),this.render=function(g,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(y),y=J.getCamera()),g.isScene===!0&&g.onBeforeRender(C,g,y,K),d=We.get(g,D.length),d.init(y),D.push(d),Re.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),Y.setFromProjectionMatrix(Re),me=this.localClippingEnabled,ee=j.init(this.clippingPlanes,me),m=de.get(g,R.length),m.init(),R.push(m),J.enabled===!0&&J.isPresenting===!0){const q=C.xr.getDepthSensingMesh();q!==null&&Ir(q,y,-1/0,C.sortObjects)}Ir(g,y,0,C.sortObjects),m.finish(),C.sortObjects===!0&&m.sort(re,ce),we=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,we&&Ce.addToRenderList(m,g),this.info.render.frame++,ee===!0&&j.beginShadows();const F=d.state.shadowsArray;ue.render(F,g,y),ee===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,H=m.transmissive;if(d.setupLights(),y.isArrayCamera){const q=y.cameras;if(H.length>0)for(let ne=0,he=q.length;ne<he;ne++){const pe=q[ne];Ka(V,H,g,pe)}we&&Ce.render(g);for(let ne=0,he=q.length;ne<he;ne++){const pe=q[ne];Aa(m,g,pe,pe.viewport)}}else H.length>0&&Ka(V,H,g,y),we&&Ce.render(g),Aa(m,g,y);K!==null&&(G.updateMultisampleRenderTarget(K),G.updateRenderTargetMipmap(K)),g.isScene===!0&&g.onAfterRender(C,g,y),je.resetDefaultState(),T=-1,S=null,D.pop(),D.length>0?(d=D[D.length-1],ee===!0&&j.setGlobalState(C.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Ir(g,y,F,V){if(g.visible===!1)return;if(g.layers.test(y.layers)){if(g.isGroup)F=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(y);else if(g.isLight)d.pushLight(g),g.castShadow&&d.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Y.intersectsSprite(g)){V&&Be.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Re);const ne=U.update(g),he=g.material;he.visible&&m.push(g,ne,he,F,Be.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Y.intersectsObject(g))){const ne=U.update(g),he=g.material;if(V&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Be.copy(g.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Be.copy(ne.boundingSphere.center)),Be.applyMatrix4(g.matrixWorld).applyMatrix4(Re)),Array.isArray(he)){const pe=ne.groups;for(let ve=0,xe=pe.length;ve<xe;ve++){const _e=pe[ve],Je=he[_e.materialIndex];Je&&Je.visible&&m.push(g,ne,Je,F,Be.z,_e)}}else he.visible&&m.push(g,ne,he,F,Be.z,null)}}const q=g.children;for(let ne=0,he=q.length;ne<he;ne++)Ir(q[ne],y,F,V)}function Aa(g,y,F,V){const H=g.opaque,q=g.transmissive,ne=g.transparent;d.setupLightsView(F),ee===!0&&j.setGlobalState(C.clippingPlanes,F),V&&ge.viewport(b.copy(V)),H.length>0&&qn(H,y,F),q.length>0&&qn(q,y,F),ne.length>0&&qn(ne,y,F),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ka(g,y,F,V){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Zs(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?On:us,minFilter:Js,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const q=d.state.transmissionRenderTarget[V.id],ne=V.viewport||b;q.setSize(ne.z,ne.w);const he=C.getRenderTarget();C.setRenderTarget(q),C.getClearColor(I),z=C.getClearAlpha(),z<1&&C.setClearColor(16777215,.5),C.clear(),we&&Ce.render(F);const pe=C.toneMapping;C.toneMapping=Rs;const ve=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),ee===!0&&j.setGlobalState(C.clippingPlanes,V),qn(g,F,V),G.updateMultisampleRenderTarget(q),G.updateRenderTargetMipmap(q),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let _e=0,Je=y.length;_e<Je;_e++){const Ue=y[_e],ot=Ue.object,rt=Ue.geometry,Xe=Ue.material,Te=Ue.group;if(Xe.side===as&&ot.layers.test(V.layers)){const pt=Xe.side;Xe.side=Rt,Xe.needsUpdate=!0,Ba(ot,F,V,rt,Xe,Te),Xe.side=pt,Xe.needsUpdate=!0,xe=!0}}xe===!0&&(G.updateMultisampleRenderTarget(q),G.updateRenderTargetMipmap(q))}C.setRenderTarget(he),C.setClearColor(I,z),ve!==void 0&&(V.viewport=ve),C.toneMapping=pe}function qn(g,y,F){const V=y.isScene===!0?y.overrideMaterial:null;for(let H=0,q=g.length;H<q;H++){const ne=g[H],he=ne.object,pe=ne.geometry,ve=V===null?ne.material:V,xe=ne.group;he.layers.test(F.layers)&&Ba(he,y,F,pe,ve,xe)}}function Ba(g,y,F,V,H,q){g.onBeforeRender(C,y,F,V,H,q),g.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),H.onBeforeRender(C,y,F,V,g,q),H.transparent===!0&&H.side===as&&H.forceSinglePass===!1?(H.side=Rt,H.needsUpdate=!0,C.renderBufferDirect(F,y,V,H,g,q),H.side=vs,H.needsUpdate=!0,C.renderBufferDirect(F,y,V,H,g,q),H.side=as):C.renderBufferDirect(F,y,V,H,g,q),g.onAfterRender(C,y,F,V,H,q)}function jn(g,y,F){y.isScene!==!0&&(y=st);const V=Se.get(g),H=d.state.lights,q=d.state.shadowsArray,ne=H.state.version,he=Le.getParameters(g,H.state,q,y,F),pe=Le.getProgramCacheKey(he);let ve=V.programs;V.environment=g.isMeshStandardMaterial?y.environment:null,V.fog=y.fog,V.envMap=(g.isMeshStandardMaterial?N:L).get(g.envMap||V.environment),V.envMapRotation=V.environment!==null&&g.envMap===null?y.environmentRotation:g.envMapRotation,ve===void 0&&(g.addEventListener("dispose",Ee),ve=new Map,V.programs=ve);let xe=ve.get(pe);if(xe!==void 0){if(V.currentProgram===xe&&V.lightsStateVersion===ne)return Fa(g,he),xe}else he.uniforms=Le.getUniforms(g),g.onBeforeCompile(he,C),xe=Le.acquireProgram(he,pe),ve.set(pe,xe),V.uniforms=he.uniforms;const _e=V.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(_e.clippingPlanes=j.uniform),Fa(g,he),V.needsLights=Bl(g),V.lightsStateVersion=ne,V.needsLights&&(_e.ambientLightColor.value=H.state.ambient,_e.lightProbe.value=H.state.probe,_e.directionalLights.value=H.state.directional,_e.directionalLightShadows.value=H.state.directionalShadow,_e.spotLights.value=H.state.spot,_e.spotLightShadows.value=H.state.spotShadow,_e.rectAreaLights.value=H.state.rectArea,_e.ltc_1.value=H.state.rectAreaLTC1,_e.ltc_2.value=H.state.rectAreaLTC2,_e.pointLights.value=H.state.point,_e.pointLightShadows.value=H.state.pointShadow,_e.hemisphereLights.value=H.state.hemi,_e.directionalShadowMap.value=H.state.directionalShadowMap,_e.directionalShadowMatrix.value=H.state.directionalShadowMatrix,_e.spotShadowMap.value=H.state.spotShadowMap,_e.spotLightMatrix.value=H.state.spotLightMatrix,_e.spotLightMap.value=H.state.spotLightMap,_e.pointShadowMap.value=H.state.pointShadowMap,_e.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=xe,V.uniformsList=null,xe}function Na(g){if(g.uniformsList===null){const y=g.currentProgram.getUniforms();g.uniformsList=Hr.seqWithValue(y.seq,g.uniforms)}return g.uniformsList}function Fa(g,y){const F=Se.get(g);F.outputColorSpace=y.outputColorSpace,F.batching=y.batching,F.batchingColor=y.batchingColor,F.instancing=y.instancing,F.instancingColor=y.instancingColor,F.instancingMorph=y.instancingMorph,F.skinning=y.skinning,F.morphTargets=y.morphTargets,F.morphNormals=y.morphNormals,F.morphColors=y.morphColors,F.morphTargetsCount=y.morphTargetsCount,F.numClippingPlanes=y.numClippingPlanes,F.numIntersection=y.numClipIntersection,F.vertexAlphas=y.vertexAlphas,F.vertexTangents=y.vertexTangents,F.toneMapping=y.toneMapping}function Al(g,y,F,V,H){y.isScene!==!0&&(y=st),G.resetTextureUnits();const q=y.fog,ne=V.isMeshStandardMaterial?y.environment:null,he=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:xn,pe=(V.isMeshStandardMaterial?N:L).get(V.envMap||ne),ve=V.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,xe=!!F.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),_e=!!F.morphAttributes.position,Je=!!F.morphAttributes.normal,Ue=!!F.morphAttributes.color;let ot=Rs;V.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ot=C.toneMapping);const rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xe=rt!==void 0?rt.length:0,Te=Se.get(V),pt=d.state.lights;if(ee===!0&&(me===!0||g!==S)){const St=g===S&&V.id===T;j.setState(V,g,St)}let Ye=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==pt.state.version||Te.outputColorSpace!==he||H.isBatchedMesh&&Te.batching===!1||!H.isBatchedMesh&&Te.batching===!0||H.isBatchedMesh&&Te.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Te.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||H.isInstancedMesh&&Te.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Te.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Te.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Te.instancingMorph===!1&&H.morphTexture!==null||Te.envMap!==pe||V.fog===!0&&Te.fog!==q||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==j.numPlanes||Te.numIntersection!==j.numIntersection)||Te.vertexAlphas!==ve||Te.vertexTangents!==xe||Te.morphTargets!==_e||Te.morphNormals!==Je||Te.morphColors!==Ue||Te.toneMapping!==ot||Te.morphTargetsCount!==Xe)&&(Ye=!0):(Ye=!0,Te.__version=V.version);let wt=Te.currentProgram;Ye===!0&&(wt=jn(V,y,H));let zs=!1,Dt=!1,Hn=!1;const tt=wt.getUniforms(),yt=Te.uniforms;if(ge.useProgram(wt.program)&&(zs=!0,Dt=!0,Hn=!0),V.id!==T&&(T=V.id,Dt=!0),zs||S!==g){ge.buffers.depth.getReversed()?(ie.copy(g.projectionMatrix),Uh(ie),Yh(ie),tt.setValue(x,"projectionMatrix",ie)):tt.setValue(x,"projectionMatrix",g.projectionMatrix),tt.setValue(x,"viewMatrix",g.matrixWorldInverse);const Ct=tt.map.cameraPosition;Ct!==void 0&&Ct.setValue(x,be.setFromMatrixPosition(g.matrixWorld)),Fe.logarithmicDepthBuffer&&tt.setValue(x,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&tt.setValue(x,"isOrthographic",g.isOrthographicCamera===!0),S!==g&&(S=g,Dt=!0,Hn=!0)}if(H.isSkinnedMesh){tt.setOptional(x,H,"bindMatrix"),tt.setOptional(x,H,"bindMatrixInverse");const St=H.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),tt.setValue(x,"boneTexture",St.boneTexture,G))}H.isBatchedMesh&&(tt.setOptional(x,H,"batchingTexture"),tt.setValue(x,"batchingTexture",H._matricesTexture,G),tt.setOptional(x,H,"batchingIdTexture"),tt.setValue(x,"batchingIdTexture",H._indirectTexture,G),tt.setOptional(x,H,"batchingColorTexture"),H._colorsTexture!==null&&tt.setValue(x,"batchingColorTexture",H._colorsTexture,G));const Ht=F.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&De.update(H,F,wt),(Dt||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,tt.setValue(x,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(yt.envMap.value=pe,yt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&y.environment!==null&&(yt.envMapIntensity.value=y.environmentIntensity),Dt&&(tt.setValue(x,"toneMappingExposure",C.toneMappingExposure),Te.needsLights&&Kl(yt,Hn),q&&V.fog===!0&&ae.refreshFogUniforms(yt,q),ae.refreshMaterialUniforms(yt,V,X,$,d.state.transmissionRenderTarget[g.id]),Hr.upload(x,Na(Te),yt,G)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Hr.upload(x,Na(Te),yt,G),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&tt.setValue(x,"center",H.center),tt.setValue(x,"modelViewMatrix",H.modelViewMatrix),tt.setValue(x,"normalMatrix",H.normalMatrix),tt.setValue(x,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const St=V.uniformsGroups;for(let Ct=0,Ur=St.length;Ct<Ur;Ct++){const Ps=St[Ct];P.update(Ps,wt),P.bind(Ps,wt)}}return wt}function Kl(g,y){g.ambientLightColor.needsUpdate=y,g.lightProbe.needsUpdate=y,g.directionalLights.needsUpdate=y,g.directionalLightShadows.needsUpdate=y,g.pointLights.needsUpdate=y,g.pointLightShadows.needsUpdate=y,g.spotLights.needsUpdate=y,g.spotLightShadows.needsUpdate=y,g.rectAreaLights.needsUpdate=y,g.hemisphereLights.needsUpdate=y}function Bl(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(g,y,F){Se.get(g.texture).__webglTexture=y,Se.get(g.depthTexture).__webglTexture=F;const V=Se.get(g);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=F===void 0,V.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,y){const F=Se.get(g);F.__webglFramebuffer=y,F.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(g,y=0,F=0){K=g,E=y,v=F;let V=!0,H=null,q=!1,ne=!1;if(g){const pe=Se.get(g);if(pe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(x.FRAMEBUFFER,null),V=!1;else if(pe.__webglFramebuffer===void 0)G.setupRenderTarget(g);else if(pe.__hasExternalTextures)G.rebindTextures(g,Se.get(g.texture).__webglTexture,Se.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const _e=g.depthTexture;if(pe.__boundDepthTexture!==_e){if(_e!==null&&Se.has(_e)&&(g.width!==_e.image.width||g.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(g)}}const ve=g.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ne=!0);const xe=Se.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(xe[y])?H=xe[y][F]:H=xe[y],q=!0):g.samples>0&&G.useMultisampledRTT(g)===!1?H=Se.get(g).__webglMultisampledFramebuffer:Array.isArray(xe)?H=xe[F]:H=xe,b.copy(g.viewport),W.copy(g.scissor),w=g.scissorTest}else b.copy(Me).multiplyScalar(X).floor(),W.copy(Ke).multiplyScalar(X).floor(),w=qe;if(ge.bindFramebuffer(x.FRAMEBUFFER,H)&&V&&ge.drawBuffers(g,H),ge.viewport(b),ge.scissor(W),ge.setScissorTest(w),q){const pe=Se.get(g.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+y,pe.__webglTexture,F)}else if(ne){const pe=Se.get(g.texture),ve=y||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,pe.__webglTexture,F||0,ve)}T=-1},this.readRenderTargetPixels=function(g,y,F,V,H,q,ne){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Se.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ne!==void 0&&(he=he[ne]),he){ge.bindFramebuffer(x.FRAMEBUFFER,he);try{const pe=g.texture,ve=pe.format,xe=pe.type;if(!Fe.textureFormatReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=g.width-V&&F>=0&&F<=g.height-H&&x.readPixels(y,F,V,H,ye.convert(ve),ye.convert(xe),q)}finally{const pe=K!==null?Se.get(K).__webglFramebuffer:null;ge.bindFramebuffer(x.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(g,y,F,V,H,q,ne){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Se.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ne!==void 0&&(he=he[ne]),he){const pe=g.texture,ve=pe.format,xe=pe.type;if(!Fe.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(y>=0&&y<=g.width-V&&F>=0&&F<=g.height-H){ge.bindFramebuffer(x.FRAMEBUFFER,he);const _e=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,_e),x.bufferData(x.PIXEL_PACK_BUFFER,q.byteLength,x.STREAM_READ),x.readPixels(y,F,V,H,ye.convert(ve),ye.convert(xe),0);const Je=K!==null?Se.get(K).__webglFramebuffer:null;ge.bindFramebuffer(x.FRAMEBUFFER,Je);const Ue=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Ih(x,Ue,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,_e),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,q),x.deleteBuffer(_e),x.deleteSync(Ue),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,y=null,F=0){g.isTexture!==!0&&(Ln("WebGLRenderer: copyFramebufferToTexture function signature has changed."),y=arguments[0]||null,g=arguments[1]);const V=Math.pow(2,-F),H=Math.floor(g.image.width*V),q=Math.floor(g.image.height*V),ne=y!==null?y.x:0,he=y!==null?y.y:0;G.setTexture2D(g,0),x.copyTexSubImage2D(x.TEXTURE_2D,F,0,0,ne,he,H,q),ge.unbindTexture()};const Nl=x.createFramebuffer(),Fl=x.createFramebuffer();this.copyTextureToTexture=function(g,y,F=null,V=null,H=0,q=null){g.isTexture!==!0&&(Ln("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,g=arguments[1],y=arguments[2],q=arguments[3]||0,F=null),q===null&&(H!==0?(Ln("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),q=H,H=0):q=0);let ne,he,pe,ve,xe,_e,Je,Ue,ot;const rt=g.isCompressedTexture?g.mipmaps[q]:g.image;if(F!==null)ne=F.max.x-F.min.x,he=F.max.y-F.min.y,pe=F.isBox3?F.max.z-F.min.z:1,ve=F.min.x,xe=F.min.y,_e=F.isBox3?F.min.z:0;else{const Ht=Math.pow(2,-H);ne=Math.floor(rt.width*Ht),he=Math.floor(rt.height*Ht),g.isDataArrayTexture?pe=rt.depth:g.isData3DTexture?pe=Math.floor(rt.depth*Ht):pe=1,ve=0,xe=0,_e=0}V!==null?(Je=V.x,Ue=V.y,ot=V.z):(Je=0,Ue=0,ot=0);const Xe=ye.convert(y.format),Te=ye.convert(y.type);let pt;y.isData3DTexture?(G.setTexture3D(y,0),pt=x.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(G.setTexture2DArray(y,0),pt=x.TEXTURE_2D_ARRAY):(G.setTexture2D(y,0),pt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,y.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,y.unpackAlignment);const Ye=x.getParameter(x.UNPACK_ROW_LENGTH),wt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),zs=x.getParameter(x.UNPACK_SKIP_PIXELS),Dt=x.getParameter(x.UNPACK_SKIP_ROWS),Hn=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,rt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,rt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ve),x.pixelStorei(x.UNPACK_SKIP_ROWS,xe),x.pixelStorei(x.UNPACK_SKIP_IMAGES,_e);const tt=g.isDataArrayTexture||g.isData3DTexture,yt=y.isDataArrayTexture||y.isData3DTexture;if(g.isDepthTexture){const Ht=Se.get(g),St=Se.get(y),Ct=Se.get(Ht.__renderTarget),Ur=Se.get(St.__renderTarget);ge.bindFramebuffer(x.READ_FRAMEBUFFER,Ct.__webglFramebuffer),ge.bindFramebuffer(x.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let Ps=0;Ps<pe;Ps++)tt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Se.get(g).__webglTexture,H,_e+Ps),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Se.get(y).__webglTexture,q,ot+Ps)),x.blitFramebuffer(ve,xe,ne,he,Je,Ue,ne,he,x.DEPTH_BUFFER_BIT,x.NEAREST);ge.bindFramebuffer(x.READ_FRAMEBUFFER,null),ge.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(H!==0||g.isRenderTargetTexture||Se.has(g)){const Ht=Se.get(g),St=Se.get(y);ge.bindFramebuffer(x.READ_FRAMEBUFFER,Nl),ge.bindFramebuffer(x.DRAW_FRAMEBUFFER,Fl);for(let Ct=0;Ct<pe;Ct++)tt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ht.__webglTexture,H,_e+Ct):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ht.__webglTexture,H),yt?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,St.__webglTexture,q,ot+Ct):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,St.__webglTexture,q),H!==0?x.blitFramebuffer(ve,xe,ne,he,Je,Ue,ne,he,x.COLOR_BUFFER_BIT,x.NEAREST):yt?x.copyTexSubImage3D(pt,q,Je,Ue,ot+Ct,ve,xe,ne,he):x.copyTexSubImage2D(pt,q,Je,Ue,ve,xe,ne,he);ge.bindFramebuffer(x.READ_FRAMEBUFFER,null),ge.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else yt?g.isDataTexture||g.isData3DTexture?x.texSubImage3D(pt,q,Je,Ue,ot,ne,he,pe,Xe,Te,rt.data):y.isCompressedArrayTexture?x.compressedTexSubImage3D(pt,q,Je,Ue,ot,ne,he,pe,Xe,rt.data):x.texSubImage3D(pt,q,Je,Ue,ot,ne,he,pe,Xe,Te,rt):g.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,q,Je,Ue,ne,he,Xe,Te,rt.data):g.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,q,Je,Ue,rt.width,rt.height,Xe,rt.data):x.texSubImage2D(x.TEXTURE_2D,q,Je,Ue,ne,he,Xe,Te,rt);x.pixelStorei(x.UNPACK_ROW_LENGTH,Ye),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,wt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,zs),x.pixelStorei(x.UNPACK_SKIP_ROWS,Dt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Hn),q===0&&y.generateMipmaps&&x.generateMipmap(pt),ge.unbindTexture()},this.copyTextureToTexture3D=function(g,y,F=null,V=null,H=0){return g.isTexture!==!0&&(Ln("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,V=arguments[1]||null,g=arguments[2],y=arguments[3],H=arguments[4]||0),Ln('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(g,y,F,V,H)},this.initRenderTarget=function(g){Se.get(g).__webglFramebuffer===void 0&&G.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?G.setTextureCube(g,0):g.isData3DTexture?G.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?G.setTexture2DArray(g,0):G.setTexture2D(g,0),ge.unbindTexture()},this.resetState=function(){E=0,v=0,K=null,ge.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Xo={type:"change"},va={type:"start"},bl={type:"end"},vr=new hl,Zo=new Ss,Mm=Math.cos(70*Xh.DEG2RAD),ht=new A,Gt=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ci=1e-6;class gm extends Hc{constructor(e,t=null){super(e,t),this.state=ke.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Is,this._lastTargetPosition=new A,this._quat=new Is().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lo,this._sphericalDelta=new Lo,this._scale=1,this._panOffset=new A,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new A,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_m.bind(this),this._onPointerDown=Sm.bind(this),this._onPointerUp=Tm.bind(this),this._onContextMenu=bm.bind(this),this._onMouseWheel=Rm.bind(this),this._onKeyDown=Dm.bind(this),this._onTouchStart=vm.bind(this),this._onTouchMove=xm.bind(this),this._onMouseDown=Cm.bind(this),this._onMouseMove=Gm.bind(this),this._interceptControlDown=Em.bind(this),this._interceptControlUp=Pm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xo),this.update(),this.state=ke.NONE}update(e=null){const t=this.object.position;ht.copy(t).sub(this.target),ht.applyQuaternion(this._quat),this._spherical.setFromVector3(ht),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(s)&&isFinite(r)&&(s<-Math.PI?s+=Gt:s>Math.PI&&(s-=Gt),r<-Math.PI?r+=Gt:r>Math.PI&&(r-=Gt),s<=r?this._spherical.theta=Math.max(s,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+r)/2?Math.max(s,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=a!=this._spherical.radius}if(ht.setFromSpherical(this._spherical),ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ht.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),i=!!l}else if(this.object.isOrthographicCamera){const o=new A(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=l!==this.object.zoom;const h=new A(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<Mm?this.object.lookAt(this.target):(Zo.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane(Zo,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Ci||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ci||this._lastTargetPosition.distanceToSquared(this.target)>Ci?(this.dispatchEvent(Xo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ht.setFromMatrixColumn(t,0),ht.multiplyScalar(-e),this._panOffset.add(ht)}_panUp(e,t){this.screenSpacePanning===!0?ht.setFromMatrixColumn(t,1):(ht.setFromMatrixColumn(t,0),ht.crossVectors(this.object.up,ht)),ht.multiplyScalar(e),this._panOffset.add(ht)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ht.copy(r).sub(this.target);let i=ht.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/s.clientHeight,this.object.matrix),this._panUp(2*t*i/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),r=e-s.left,i=t-s.top,a=s.width,o=s.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(s,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(s,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(s*s+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),r=.5*(e.pageX+s.x),i=.5*(e.pageY+s.y);this._rotateEnd.set(r,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(s,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(s*s+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Sm(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function _m(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Tm(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bl),this.state=ke.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Cm(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ke.DOLLY;break;case hs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ke.ROTATE}break;case hs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(va)}function Gm(n){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Rm(n){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(n.preventDefault(),this.dispatchEvent(va),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bl))}function Dm(n){this.enabled!==!1&&this._handleKeyDown(n)}function vm(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ke.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ke.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(va)}function xm(n){switch(this._trackPointer(n),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ke.NONE}}function bm(n){this.enabled!==!1&&n.preventDefault()}function Em(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pm(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ym extends gm{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:hs.PAN,MIDDLE:hs.DOLLY,RIGHT:hs.ROTATE},this.touches={ONE:Ts.PAN,TWO:Ts.DOLLY_ROTATE}}}function Hm(n,e=!1){const t=n[0].index!==null,s=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),i={},a={},o=n[0].morphTargetsRelative,l=new qt;let h=0;for(let c=0;c<n.length;++c){const u=n[c];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;i[p]===void 0&&(i[p]=[]),i[p].push(u.attributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(t){let c=0;const u=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let M=0;M<p.count;++M)u.push(p.getX(M)+c);c+=n[f].attributes.position.count}l.setIndex(u)}for(const c in i){const u=Io(i[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in a){const u=a[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<u;++f){const p=[];for(let _=0;_<a[c].length;++_)p.push(a[c][_][f]);const M=Io(p);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(M)}}return l}function Io(n){let e,t,s,r=-1,i=0;for(let h=0;h<n.length;++h){const c=n[h];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=c.normalized),s!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;i+=c.count*t}const a=new e(i),o=new Et(a,t,s);let l=0;for(let h=0;h<n.length;++h){const c=n[h];if(c.isInterleavedBufferAttribute){const u=l/t;for(let f=0,p=c.count;f<p;f++)for(let M=0;M<t;M++){const _=c.getComponent(f,M);o.setComponent(f+u,M,_)}}else a.set(c.array,l);l+=c.count*t}return r!==void 0&&(o.gpuType=r),o}class Xr extends ct{constructor(e,t,s=1,r=.1,i=1,a=16776960,o=!1){super();const l=.15*i,h=r*s,c=(1-r)*s,u=12,f=.05*i,p=new Fr(0,l,h,u,1),M=new $e().makeTranslation(0,s-r/2,0);p.applyMatrix4(M);const _=new Fr(f,f,c,6,1),m=new $e().makeTranslation(0,c/2,0);_.applyMatrix4(m);const d=Hm([_,p]);o&&d.translate(0,-s/2,0),d.rotateX(Math.PI/2),this.mesh=new Ft(d,new Rc({color:a})),this.mesh.matrixAutoUpdate=!1,this.add(this.mesh),this.position.copy(t),this.setDirection(e)}setDirection(e){this.lookAt(e)}setScale(e){this.mesh.scale.set(e,e,e),this.mesh.updateMatrix()}setColor(e){this.mesh.material.color.set(e)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class kt{constructor(e,t,s,r,i="div"){this.parent=e,this.object=t,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(i),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),kt.nextNameID=kt.nextNameID||0,this.$name.id=`lil-gui-name-${++kt.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Am extends kt{constructor(e,t,s){super(e,t,s,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function da(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Km={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:da,toHexString:da},Qn={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},Bm={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const s=Qn.fromHexString(n);e[0]=(s>>16&255)/255*t,e[1]=(s>>8&255)/255*t,e[2]=(s&255)/255*t},toHexString([n,e,t],s=1){s=255/s;const r=n*s<<16^e*s<<8^t*s<<0;return Qn.toHexString(r)}},Nm={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const s=Qn.fromHexString(n);e.r=(s>>16&255)/255*t,e.g=(s>>8&255)/255*t,e.b=(s&255)/255*t},toHexString({r:n,g:e,b:t},s=1){s=255/s;const r=n*s<<16^e*s<<8^t*s<<0;return Qn.toHexString(r)}},Fm=[Km,Qn,Bm,Nm];function Vm(n){return Fm.find(e=>e.match(n))}class wm extends kt{constructor(e,t,s,r){super(e,t,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Vm(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const i=da(this.$text.value);i&&this._setValueFromHexString(i)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Gi extends kt{constructor(e,t,s){super(e,t,s,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Wm extends kt{constructor(e,t,s,r,i,a){super(e,t,s,"number"),this._initInput(),this.min(r),this.max(i);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let R=parseFloat(this.$input.value);isNaN(R)||(this._stepExplicit&&(R=this._snap(R)),this.setValue(this._clamp(R)))},s=R=>{const D=parseFloat(this.$input.value);isNaN(D)||(this._snapClampSetValue(D+R),this.$input.value=this.getValue())},r=R=>{R.key==="Enter"&&this.$input.blur(),R.code==="ArrowUp"&&(R.preventDefault(),s(this._step*this._arrowKeyMultiplier(R))),R.code==="ArrowDown"&&(R.preventDefault(),s(this._step*this._arrowKeyMultiplier(R)*-1))},i=R=>{this._inputFocused&&(R.preventDefault(),s(this._step*this._normalizeMouseWheel(R)))};let a=!1,o,l,h,c,u;const f=5,p=R=>{o=R.clientX,l=h=R.clientY,a=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",M),window.addEventListener("mouseup",_)},M=R=>{if(a){const D=R.clientX-o,C=R.clientY-l;Math.abs(C)>f?(R.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(D)>f&&_()}if(!a){const D=R.clientY-h;u-=D*this._step*this._arrowKeyMultiplier(R),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}h=R.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(d,R,D,C,B)=>(d-R)/(D-R)*(B-C)+C,t=d=>{const R=this.$slider.getBoundingClientRect();let D=e(d,R.left,R.right,this._min,this._max);this._snapClampSetValue(D)},s=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",i)},r=d=>{t(d.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",i)};let a=!1,o,l;const h=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),a=!1},c=d=>{d.touches.length>1||(this._hasScrollBar?(o=d.touches[0].clientX,l=d.touches[0].clientY,a=!0):h(d),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=d=>{if(a){const R=d.touches[0].clientX-o,D=d.touches[0].clientY-l;Math.abs(R)>Math.abs(D)?h(d):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else d.preventDefault(),t(d.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),M=400;let _;const m=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const D=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+D),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,M)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:s}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,s=-e.wheelDelta/120,s*=this._stepExplicit?1:10),t+-s}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Jm extends kt{constructor(e,t,s,r){super(e,t,s,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const s=document.createElement("option");s.textContent=t,this.$select.appendChild(s)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class Xm extends kt{constructor(e,t,s){super(e,t,s,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Zm=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Im(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Uo=!1;class xa{constructor({parent:e,autoPlace:t=e===void 0,container:s,width:r,title:i="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Uo&&o&&(Im(Zm),Uo=!0),s?s.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(e,t,s,r,i){if(Object(s)===s)return new Jm(this,e,t,s);const a=e[t];switch(typeof a){case"number":return new Wm(this,e,t,s,r,i);case"boolean":return new Am(this,e,t);case"string":return new Xm(this,e,t);case"function":return new Gi(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,s=1){return new wm(this,e,t,s)}addFolder(e){const t=new xa({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(s=>{s instanceof Gi||s._name in e.controllers&&s.load(e.controllers[s._name])}),t&&e.folders&&this.folders.forEach(s=>{s._title in e.folders&&s.load(e.folders[s._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof Gi)){if(s._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);t.controllers[s._name]=s.save()}}),e&&this.folders.forEach(s=>{if(s._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);t.folders[s._title]=s.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const s=i=>{i.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Um={"G3C3-6WS":{first:"Peter",last:"Moser II",dates:"",father:"unscraped",mother:"unscraped",spouses:["K4XN-WX6"],children:["LTD1-DRB"]},"K4XN-WX6":{first:"Elssbeth",last:"Thomi",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3C3-6WS"],children:["LTD1-DRB"]},"G492-V3F":{first:"Christian",last:"Hirschi",dates:"1627-1682",father:"LDJN-KKC",mother:"G49L-79Z",spouses:["LHFL-G95"],children:["LRGN-W4J"]},"LHFL-G95":{first:"Anna",last:"Rehs",dates:"1623-1672",father:null,mother:null,spouses:["G492-V3F"],children:["LRGN-W4J"]},"M6MW-YDX":{first:"Bendicht",last:"Scholli",dates:"1631-1682",father:"L7PC-1JW",mother:"L7PC-1LC",spouses:["KJPX-G8R"],children:["93JZ-DX9"]},"KJPX-G8R":{first:"Elisabeth",last:"Bertschinger",dates:"1646-1685",father:"GGPM-KQG",mother:"L199-7X1",spouses:["M6MW-YDX"],children:["93JZ-DX9"]},"M7ZW-JNQ":{first:"Johann",last:"Müller",dates:"",father:"unscraped",mother:"unscraped",spouses:["M7ZW-KMB"],children:["M7ZS-CH9"]},"M7ZW-KMB":{first:"Eva",last:"Pfaff",dates:"",father:"unscraped",mother:"unscraped",spouses:["M7ZW-JNQ"],children:["M7ZS-CH9"]},"M74W-G6D":{first:"Christoph",last:"Ulrich",dates:"",father:"unscraped",mother:"unscraped",spouses:["M74W-G6L"],children:["M74W-GD9"]},"M74W-G6L":{first:"Engel",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["M74W-G6D"],children:["M74W-GD9"]},"KFR6-VF6":{first:"Rev Hans",last:"Herr",dates:"1639-1725",father:"9438-6C1",mother:"LCPL-2F6",spouses:["LHXB-NR2","LHXB-NR2","LHXB-NR2","LHXB-NR2","LHXB-NR2","LHXB-NR2"],children:["LJLL-G5X","LYQZ-3M2","LDQB-2W8","LYQC-6L9","MPGQ-1SN","LHTS-X7G"]},"LHXB-NR2":{first:"Elisabeth",last:"Kundig",dates:"1639-1730",father:"LVJ9-FL6",mother:"GMB4-YDM",spouses:["KFR6-VF6","KFR6-VF6","KFR6-VF6","KFR6-VF6","KFR6-VF6","KFR6-VF6"],children:["LJLL-G5X","LYQZ-3M2","LDQB-2W8","LYQC-6L9","MPGQ-1SN","LHTS-X7G"]},"9MRQ-BVQ":{first:"Heinrich",last:"Bär",dates:"1640-1700",father:"K41M-SNY",mother:"GZ45-MNW",spouses:["MD1G-JRP"],children:["LVZ1-C2P"]},"MD1G-JRP":{first:"Verena",last:"Meyer",dates:"1644-1686",father:"L1W9-JY4",mother:"LL4C-DQT",spouses:["9MRQ-BVQ"],children:["LVZ1-C2P"]},"LR53-BB9":{first:"Heinrich",last:"Hoffstetter",dates:"",father:"unscraped",mother:"unscraped",spouses:["LR53-BD9"],children:["9K6X-GJM"]},"LR53-BD9":{first:"Margreth",last:"Vollenweider",dates:"",father:"unscraped",mother:"unscraped",spouses:["LR53-BB9"],children:["9K6X-GJM"]},"LZKH-RCG":{first:'Michael  "Th...',last:"Schenck or S...",dates:"1639-1687",father:"L55B-TJC",mother:"LH2X-Y32",spouses:["LT2X-K1L","LT2X-K1L","LT2X-K1L"],children:["LVM3-X2Q","L8W3-T9N","LDQZ-7ZN"]},"LT2X-K1L":{first:"Anna",last:"Stauffer",dates:"1643-Deceased",father:"MX9C-VQH",mother:"9V96-6QK",spouses:["LZKH-RCG","LZKH-RCG","LZKH-RCG"],children:["LVM3-X2Q","L8W3-T9N","LDQZ-7ZN"]},"GPQW-2C3":{first:"Hans",last:"Habegger",dates:"",father:"unscraped",mother:"unscraped",spouses:["K6QL-7BJ"],children:["GPQ4-9QZ"]},"K6QL-7BJ":{first:"Anna",last:"Fankhauser",dates:"",father:"unscraped",mother:"unscraped",spouses:["GPQW-2C3"],children:["GPQ4-9QZ"]},"KD98-K3K":{first:"Hans",last:"Hunziker",dates:"",father:"unscraped",mother:"unscraped",spouses:["K8T7-MVY"],children:["K8BL-DYM"]},"K8T7-MVY":{first:"Barbli",last:"Huber",dates:"",father:"unscraped",mother:"unscraped",spouses:["KD98-K3K"],children:["K8BL-DYM"]},"LTD1-DRB":{first:"Peter",last:"Moser III",dates:"1671-1759",father:"G3C3-6WS",mother:"K4XN-WX6",spouses:["GKCQ-XXH"],children:["L8RH-T6J"]},"GKCQ-XXH":{first:"Johanna",last:"Maise",dates:"1676-1715",father:null,mother:null,spouses:["LTD1-DRB"],children:["L8RH-T6J"]},"LRGN-W4J":{first:"Christian H",last:"Hershey",dates:"1662-1722",father:"G492-V3F",mother:"LHFL-G95",spouses:["93JZ-DX9","93JZ-DX9","93JZ-DX9","93JZ-DX9"],children:["LVPT-WDR","L6BB-ZR4","LDFL-R3C","LZX4-XMC"]},"93JZ-DX9":{first:"Adelheid or Oade",last:"Schölli",dates:"1660-1729",father:"M6MW-YDX",mother:"KJPX-G8R",spouses:["LRGN-W4J","LRGN-W4J","LRGN-W4J","LRGN-W4J"],children:["LVPT-WDR","L6BB-ZR4","LDFL-R3C","LZX4-XMC"]},"LTPV-9P5":{first:"Liza",last:"Winterhausen",dates:"1655-1715",father:null,mother:null,spouses:[null],children:["LH6R-JK1"]},"M7ZS-CH9":{first:"Johann Peter",last:"Mueller",dates:"1672-1738",father:"M7ZW-JNQ",mother:"M7ZW-KMB",spouses:["M74W-GD9"],children:["K2YR-VYM"]},"M74W-GD9":{first:"Maria Margar...",last:"Ulrich",dates:"1677-Deceased",father:"M74W-G6D",mother:"M74W-G6L",spouses:["M7ZS-CH9"],children:["K2YR-VYM"]},"LJLL-G5X":{first:"Abraham",last:"Herr",dates:"1660-1735",father:"KFR6-VF6",mother:"LHXB-NR2",spouses:["LVZ1-C2P","LVZ1-C2P"],children:["LY1Q-VF1","LYLT-K2J"]},"LVZ1-C2P":{first:"Anna Elisabeth",last:"Bär",dates:"1670-1749",father:"9MRQ-BVQ",mother:"MD1G-JRP",spouses:["LJLL-G5X","LJLL-G5X"],children:["LY1Q-VF1","LYLT-K2J"]},"9K6X-GJM":{first:"Oswald",last:"Hochstetter",dates:"1671-1761",father:"LR53-BB9",mother:"LR53-BD9",spouses:["LJ1N-7NV","LJ1N-7NV"],children:["G9M9-FZ3","LZ2N-D38"]},"LJ1N-7NV":{first:"Mary",last:"Schenk",dates:"1671-1754",father:null,mother:null,spouses:["9K6X-GJM","9K6X-GJM"],children:["G9M9-FZ3","LZ2N-D38"]},"LVM3-X2Q":{first:"Hans",last:"Schenck",dates:"1664-1733",father:"LZKH-RCG",mother:"LT2X-K1L",spouses:["LHPV-YVY"],children:["G9M9-Z19"]},"LHPV-YVY":{first:"Mrs",last:"Schenk",dates:"1668-1730",father:null,mother:null,spouses:["LVM3-X2Q"],children:["G9M9-Z19"]},"GPQ4-9QZ":{first:"Uli",last:"Habegger",dates:"Deceased",father:"GPQW-2C3",mother:"K6QL-7BJ",spouses:["GPQW-2CZ"],children:["GPQW-LDW"]},"GPQW-2CZ":{first:"Magdalena",last:"Muller",dates:"Deceased",father:null,mother:null,spouses:["GPQ4-9QZ"],children:["GPQW-LDW"]},"K8BL-DYM":{first:"Hans Heinrich",last:"Hunziker",dates:"1660-1720",father:"KD98-K3K",mother:"K8T7-MVY",spouses:["K6WF-4SS"],children:["LZC5-2TK"]},"K6WF-4SS":{first:"Maria",last:"Stamm",dates:"1660-1745",father:null,mother:null,spouses:["K8BL-DYM"],children:["LZC5-2TK"]},"L8RH-T6J":{first:"Hans Michael",last:"Musser",dates:"1695-1752",father:"LTD1-DRB",mother:"GKCQ-XXH",spouses:["MW8D-MTQ"],children:["MSKD-3SY"]},"MW8D-MTQ":{first:"Veronica Brook",last:"Funk",dates:"1702-1750",father:null,mother:null,spouses:["L8RH-T6J"],children:["MSKD-3SY"]},"LVPT-WDR":{first:"Benedict Benjamin",last:"Hershey",dates:"1696-1789",father:"LRGN-W4J",mother:"93JZ-DX9",spouses:["LZGB-VV7","LZGB-VV7"],children:["9KXZ-LMT","L5X8-RQ3"]},"LZGB-VV7":{first:"Maria",last:"",dates:"1700-1762",father:null,mother:null,spouses:["LVPT-WDR","LVPT-WDR"],children:["9KXZ-LMT","L5X8-RQ3"]},"LH6R-JK1":{first:"Johannes",last:"Bassler",dates:"1700-Deceased",father:null,mother:"LTPV-9P5",spouses:["G1BX-TWF"],children:["LHKM-TXX"]},"G1BX-TWF":{first:"Anna",last:"Weiler",dates:"1720-1790",father:null,mother:null,spouses:["LH6R-JK1"],children:["LHKM-TXX"]},"K2YR-VYM":{first:"Heinrich",last:"Miller",dates:"1695-1728",father:"M7ZS-CH9",mother:"M74W-GD9",spouses:["LY1Q-VF1"],children:["9KDX-245"]},"LY1Q-VF1":{first:"Barbara",last:"Herr",dates:"1702-1742",father:"LJLL-G5X",mother:"LVZ1-C2P",spouses:["K2YR-VYM","LRKB-YFQ"],children:["9KDX-245","L12Z-FPQ"]},"G9M9-FZ3":{first:"Oswald",last:"Hostetter",dates:"1702-1749",father:"9K6X-GJM",mother:"LJ1N-7NV",spouses:["G9M9-Z19"],children:["GPHC-CMV"]},"G9M9-Z19":{first:"Maria",last:"Schenck",dates:"1704-1754",father:"LVM3-X2Q",mother:"LHPV-YVY",spouses:["G9M9-FZ3"],children:["GPHC-CMV"]},"GPQW-LDW":{first:"Christian",last:"Habecker",dates:"1665-1737",father:"GPQ4-9QZ",mother:"GPQW-2CZ",spouses:[null],children:["KG9B-9BL"]},"LZC5-2TK":{first:"Maria",last:"Hunziker",dates:"1691-1741",father:"K8BL-DYM",mother:"K6WF-4SS",spouses:[null],children:["KG9B-9Y8"]},"MSKD-3SY":{first:"Jacob",last:"Musser",dates:"1727-1766",father:"L8RH-T6J",mother:"MW8D-MTQ",spouses:["9KXZ-LMT"],children:["LZ24-X8K"]},"9KXZ-LMT":{first:"Maria Rhode",last:"Hershey",dates:"1728-1785",father:"LVPT-WDR",mother:"LZGB-VV7",spouses:["MSKD-3SY"],children:["LZ24-X8K"]},"LHKM-TXX":{first:"Jacob",last:"Bosler",dates:"1731-1817",father:"LH6R-JK1",mother:"G1BX-TWF",spouses:["LZK1-WTZ"],children:["LZ24-XFR"]},"LZK1-WTZ":{first:"Barbara",last:"Oberhauser",dates:"1735-1820",father:null,mother:null,spouses:["LHKM-TXX"],children:["LZ24-XFR"]},"9KDX-245":{first:"Abraham Herr",last:"Miller",dates:"1723-1791",father:"K2YR-VYM",mother:"LY1Q-VF1",spouses:["GPHC-CMV"],children:["LTKC-TW9"]},"GPHC-CMV":{first:"Anna Schenk",last:"Hostetter",dates:"1726-1798",father:"G9M9-FZ3",mother:"G9M9-Z19",spouses:["9KDX-245"],children:["LTKC-TW9"]},"KG9B-9BL":{first:"Joseph",last:"Habecker",dates:"1716-1798",father:"GPQW-LDW",mother:null,spouses:["KG9B-9Y8"],children:["9Q2R-Y92"]},"KG9B-9Y8":{first:"Barbara",last:"Erismann",dates:"1730-1770",father:null,mother:"LZC5-2TK",spouses:["KG9B-9BL"],children:["9Q2R-Y92"]},"LZ24-X8K":{first:"Dr Benjamin Hershey",last:"Musser",dates:"1749-1820",father:"MSKD-3SY",mother:"9KXZ-LMT",spouses:["LZ24-XFR","K29F-D7Z","LZ24-XFR"],children:["G4FH-SRG","29SD-SJK","LZLF-8BJ"]},"LZ24-XFR":{first:"Magdalena Oberha...",last:"Bossler",dates:"1764-1840",father:"LHKM-TXX",mother:"LZK1-WTZ",spouses:["LZ24-X8K","LZ24-X8K"],children:["G4FH-SRG","LZLF-8BJ"]},"LTKC-TW9":{first:"Abraham Hostetter",last:"Miller II",dates:"1756-1834",father:"9KDX-245",mother:"GPHC-CMV",spouses:["9Q2R-Y92"],children:["G4FH-MMP"]},"9Q2R-Y92":{first:"Barbara",last:"Habecker",dates:"1759-1836",father:"KG9B-9BL",mother:"KG9B-9Y8",spouses:["LTKC-TW9"],children:["G4FH-MMP"]},"G4FH-SRG":{first:"Benjamin",last:"Musser",dates:"1790-1865",father:"LZ24-X8K",mother:"LZ24-XFR",spouses:["G4FH-MMP"],children:["29C7-3HW"]},"G4FH-MMP":{first:"Barbara",last:"Miller",dates:"1790-1871",father:"LTKC-TW9",mother:"9Q2R-Y92",spouses:["G4FH-SRG"],children:["29C7-3HW"]},"29C7-3HW":{first:"Magdalena",last:"Musser",dates:"1816-1861",father:"G4FH-SRG",mother:"G4FH-MMP",spouses:["unscraped","K415-T5Q"],children:[null,"2BJ5-3RP"]},"GMJC-BY4":{first:"Hans Jacob",last:"Brubacher",dates:"1634-1685",father:"G478-XC3",mother:"2SC7-PS1",spouses:["KVVC-813","KVVC-813"],children:["9ZHH-Z85","LRW9-724"]},"KVVC-813":{first:"Kliana",last:"Hiestand",dates:"1637-1713",father:"LJBL-ZQR",mother:"L874-CX7",spouses:["GMJC-BY4","GMJC-BY4"],children:["9ZHH-Z85","LRW9-724"]},"LJL7-DYZ":{first:"Hans Jacob",last:"Meyer Sr",dates:"",father:"unscraped",mother:"unscraped",spouses:["L2GR-WH1"],children:["LDBW-NM3"]},"L2GR-WH1":{first:"Margaretha",last:"Kündig",dates:"",father:"unscraped",mother:"unscraped",spouses:["LJL7-DYZ"],children:["LDBW-NM3"]},"LHZT-QT6":{first:"Ernesti",last:"Ernst",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHZT-Q5Z"],children:["GMY5-R9Z"]},"LHZT-Q5Z":{first:"Anna",last:"Verh",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHZT-QT6"],children:["GMY5-R9Z"]},"LHZT-BLZ":{first:"Toma",last:"Lackhner",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHZT-BLY"],children:["LHZT-BGB"]},"LHZT-BLY":{first:"Maria",last:"Staiynpei",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHZT-BLZ"],children:["LHZT-BGB"]},"LHKC-KF5":{first:"Hans Jacob",last:"Tanner",dates:"",father:"unscraped",mother:"unscraped",spouses:["K2J3-1KD"],children:["MT6L-RFC"]},"K2J3-1KD":{first:"Wilbrath",last:"Schlumpf",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHKC-KF5"],children:["MT6L-RFC"]},"K2NB-SVP":{first:"Johannes",last:"Schläpfer",dates:"",father:"unscraped",mother:"unscraped",spouses:["KCPJ-WYP"],children:["LC5V-5HN"]},"KCPJ-WYP":{first:"Elisabeth",last:"Schoch",dates:"",father:"unscraped",mother:"unscraped",spouses:["K2NB-SVP"],children:["LC5V-5HN"]},"K6M4-L5X":{first:"Hans Heinrich",last:"Landis",dates:"",father:"unscraped",mother:"unscraped",spouses:["LKH1-RWM"],children:["G6NQ-QMF"]},"LKH1-RWM":{first:"Barbara",last:"Buehler",dates:"",father:"unscraped",mother:"unscraped",spouses:["K6M4-L5X"],children:["G6NQ-QMF"]},"GN4K-SLS":{first:"Ulrich",last:"Witmer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LC55-QR6","LC55-QR6"],children:["LR58-5K6","LT8D-77M"]},"LC55-QR6":{first:"Barbli",last:"Aebi",dates:"",father:"unscraped",mother:"unscraped",spouses:["GN4K-SLS","GN4K-SLS"],children:["LR58-5K6","LT8D-77M"]},"LC84-BPG":{first:"Hanss",last:"Erb",dates:"1653-1752",father:"L8Y7-4XS",mother:"G9T5-9SM",spouses:["L2KP-4VT"],children:["LT2L-RRL"]},"L2KP-4VT":{first:"Anna",last:"Haldimann",dates:"1653-Deceased",father:"K1K4-YKY",mother:"GB2K-JLB",spouses:["LC84-BPG"],children:["LT2L-RRL"]},"GP62-HX5":{first:"Martin",last:"Widmer",dates:"Deceased",father:"GPX9-2BS",mother:null,spouses:["GP62-S6Y"],children:["G9P4-5CL"]},"GP62-S6Y":{first:"Maria",last:"Grieder",dates:"1641-1693",father:"GPX9-4Q1",mother:null,spouses:["GP62-HX5"],children:["G9P4-5CL"]},"K8SY-RL2":{first:"Peter",last:"Wenger",dates:"",father:"unscraped",mother:"unscraped",spouses:["KH96-BS2"],children:["K4XJ-15Z"]},"KH96-BS2":{first:"Verena",last:"Rubi",dates:"",father:"unscraped",mother:"unscraped",spouses:["K8SY-RL2"],children:["K4XJ-15Z"]},"LT5T-352":{first:"Peter",last:"Schürch",dates:"",father:"unscraped",mother:"unscraped",spouses:["G6V7-RZF"],children:["KZ5M-NB8"]},"G6V7-RZF":{first:"Verena",last:"Eggimann",dates:"",father:"unscraped",mother:"unscraped",spouses:["LT5T-352"],children:["KZ5M-NB8"]},"L4WN-YXM":{first:"Michel Graber",last:"Grundbacher",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHX1-LHX"],children:["GDMM-9XL"]},"LHX1-LHX":{first:"Anna Maria",last:"Brand",dates:"",father:"unscraped",mother:"unscraped",spouses:["L4WN-YXM"],children:["GDMM-9XL"]},"G9XT-ZS9":{first:"Durs",last:"Aebi",dates:"",father:"unscraped",mother:"unscraped",spouses:["G9XT-W47"],children:["GD7S-TD3"]},"G9XT-W47":{first:"Elsbeth",last:"Aeschlimann",dates:"",father:"unscraped",mother:"unscraped",spouses:["G9XT-ZS9"],children:["GD7S-TD3"]},"L6Q2-RPN":{first:"Ulrich Zum",last:"Stein",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT9X-4HB"],children:["GSZR-PKZ"]},"GT9X-4HB":{first:"Margretha",last:"Lüthi",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6Q2-RPN"],children:["GSZR-PKZ"]},"G31R-RHK":{first:"Johannes",last:"Kaer",dates:"",father:"unscraped",mother:"unscraped",spouses:["GM2D-9RV"],children:["GMVV-571"]},"GM2D-9RV":{first:"Anna",last:"Bremmeman",dates:"",father:"unscraped",mother:"unscraped",spouses:["G31R-RHK"],children:["GMVV-571"]},"L1W9-JY4":{first:"Michael",last:"Meyer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LL4C-DQT","LL4C-DQT"],children:["LH34-141","MD1G-JRP"]},"LL4C-DQT":{first:"Anna Katherina",last:"Haas",dates:"",father:"unscraped",mother:"unscraped",spouses:["L1W9-JY4","L1W9-JY4"],children:["LH34-141","MD1G-JRP"]},"M1VL-82C":{first:"Hannss Caspar",last:"Engeller",dates:"",father:"unscraped",mother:"unscraped",spouses:["9NDN-715"],children:["L9GD-3CT"]},"9NDN-715":{first:"Barbara",last:"Obrist",dates:"",father:"unscraped",mother:"unscraped",spouses:["M1VL-82C"],children:["L9GD-3CT"]},"KNZ9-KQ4":{first:"David",last:"Rösti",dates:"",father:"unscraped",mother:"unscraped",spouses:["KNZ3-9QZ"],children:["G34C-MFZ"]},"KNZ3-9QZ":{first:"Anna",last:"Niggli",dates:"",father:"unscraped",mother:"unscraped",spouses:["KNZ9-KQ4"],children:["G34C-MFZ"]},"LHHB-6N5":{first:"Daniel",last:"Germann",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHHB-DFL"],children:["K4GK-6XP"]},"LHHB-DFL":{first:"Margretha",last:"Schranz",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHHB-6N5"],children:["K4GK-6XP"]},"GQVN-578":{first:"Fabian",last:"Becker",dates:"",father:"unscraped",mother:"unscraped",spouses:["L5TX-YP5"],children:["MBZ8-51R"]},"L5TX-YP5":{first:"Thekla",last:"Zahm",dates:"",father:"unscraped",mother:"unscraped",spouses:["GQVN-578"],children:["MBZ8-51R"]},"GF87-CD7":{first:"Franciscus o...",last:"Mayer",dates:"",father:"unscraped",mother:"unscraped",spouses:["GF87-DGJ"],children:["MBZ8-RMW"]},"GF87-DGJ":{first:"Anna",last:"Schöndienst",dates:"",father:"unscraped",mother:"unscraped",spouses:["GF87-CD7"],children:["MBZ8-RMW"]},"9M5H-V43":{first:"Hans Caspar",last:"Stumpff",dates:"",father:"unscraped",mother:"unscraped",spouses:["9M5H-V46"],children:["GMSP-P5L"]},"9M5H-V46":{first:"Margaretha",last:"Steinmüller",dates:"",father:"unscraped",mother:"unscraped",spouses:["9M5H-V43"],children:["GMSP-P5L"]},"GS9W-4Z8":{first:"Hans Henrich",last:"Körper",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["MP37-NJP"]},"9ZHH-Z85":{first:"Hans Jacob",last:"Brupbacher",dates:"1658-1738",father:"GMJC-BY4",mother:"KVVC-813",spouses:["LDBW-NM3"],children:["MP5C-XSJ"]},"LDBW-NM3":{first:"Maria Anna",last:"Meyer",dates:"1668-1730",father:"LJL7-DYZ",mother:"L2GR-WH1",spouses:["9ZHH-Z85"],children:["MP5C-XSJ"]},"GMY5-R9Z":{first:"Melchior",last:"Ernst",dates:"1664-1736",father:"LHZT-QT6",mother:"LHZT-Q5Z",spouses:["LHZT-BGB"],children:["G41P-PBB"]},"LHZT-BGB":{first:"Catharina",last:"Lackhner",dates:"1670-1741",father:"LHZT-BLZ",mother:"LHZT-BLY",spouses:["GMY5-R9Z"],children:["G41P-PBB"]},"MT6L-RFC":{first:"Johannes",last:"Tanner",dates:"1662-1724",father:"LHKC-KF5",mother:"K2J3-1KD",spouses:["LC5V-5HN"],children:["9VSM-WVY"]},"LC5V-5HN":{first:"Anna",last:"Schläpfer",dates:"1664-1728",father:"K2NB-SVP",mother:"KCPJ-WYP",spouses:["MT6L-RFC"],children:["9VSM-WVY"]},"G6NQ-QMF":{first:"Hans Jacob",last:"Landis",dates:"1667-1730",father:"K6M4-L5X",mother:"LKH1-RWM",spouses:["LR58-5K6","LR58-5K6","LR58-5K6"],children:["LZFZ-HYF","LZ6N-RJ1","LBYK-M2F"]},"LR58-5K6":{first:"Anna Barbara",last:"Witmer",dates:"1671-1725",father:"GN4K-SLS",mother:"LC55-QR6",spouses:["G6NQ-QMF","G6NQ-QMF","G6NQ-QMF","KHFJ-54S","KHFJ-54S"],children:["LZFZ-HYF","LZ6N-RJ1","LBYK-M2F","GJ3M-83R","LTXH-CXG"]},"LT2L-RRL":{first:"Nicholas Claus",last:"Erb",dates:"1680-1752",father:"LC84-BPG",mother:"L2KP-4VT",spouses:["G9P4-5CL","G9P4-5CL"],children:["L1XS-K2C","LTCM-835"]},"G9P4-5CL":{first:"Catharina Magd...",last:"Widmer",dates:"1680-1747",father:"GP62-HX5",mother:"GP62-S6Y",spouses:["LT2L-RRL","LT2L-RRL"],children:["L1XS-K2C","LTCM-835"]},"K4XJ-15Z":{first:"Peter",last:"Wenger",dates:"1688-Deceased",father:"K8SY-RL2",mother:"KH96-BS2",spouses:["G597-WN5"],children:["G8Z6-HZ3"]},"G597-WN5":{first:"Maria",last:"",dates:"1690-Deceased",father:null,mother:null,spouses:["K4XJ-15Z"],children:["G8Z6-HZ3"]},"KZ5M-NB8":{first:"Peter Ulrich",last:"Shirk",dates:"1663-1739",father:"LT5T-352",mother:"G6V7-RZF",spouses:["GDMM-9XL"],children:["9WH9-K33"]},"GDMM-9XL":{first:"Barbara",last:"Grundbacher",dates:"1672-1736",father:"L4WN-YXM",mother:"LHX1-LHX",spouses:["KZ5M-NB8"],children:["9WH9-K33"]},"G6WL-GPK":{first:"John",last:"Furrey",dates:"1680-Deceased",father:null,mother:null,spouses:["GJ5N-NHF"],children:["GCMC-23T"]},"GJ5N-NHF":{first:"Mrs. John",last:"Furrey",dates:"1682-Deceased",father:null,mother:null,spouses:["G6WL-GPK"],children:["GCMC-23T"]},"GD7S-TD3":{first:"Andreas",last:"Aebi",dates:"1631-1683",father:"G9XT-ZS9",mother:"G9XT-W47",spouses:["GWQ2-FXC"],children:["LCJ8-RP6"]},"GWQ2-FXC":{first:"Elsbeth",last:"Blatti",dates:"1632-Deceased",father:null,mother:null,spouses:["GD7S-TD3"],children:["LCJ8-RP6"]},"GSZR-PKZ":{first:"Hans Friderich",last:"Steiner",dates:"1640-1706",father:"L6Q2-RPN",mother:"GT9X-4HB",spouses:["GMVV-571"],children:["GSMN-L94"]},"GMVV-571":{first:"Anna Magdalena",last:"Kaer",dates:"1640-Deceased",father:"G31R-RHK",mother:"GM2D-9RV",spouses:["GSZR-PKZ"],children:["GSMN-L94"]},"LH34-141":{first:"Samuel",last:"Meyer",dates:"1645-1719",father:"L1W9-JY4",mother:"LL4C-DQT",spouses:["L9GD-3CT"],children:["LCR9-Q9K"]},"L9GD-3CT":{first:"Anna",last:"Engeler",dates:"1652-1722",father:"M1VL-82C",mother:"9NDN-715",spouses:["LH34-141"],children:["LCR9-Q9K"]},"9JPM-7K5":{first:"Johannes",last:"Jacob",dates:"Deceased",father:null,mother:null,spouses:["9JPM-72M"],children:["LL4C-D7D"]},"9JPM-72M":{first:"Barbara",last:"",dates:"Deceased",father:null,mother:null,spouses:["9JPM-7K5"],children:["LL4C-D7D"]},"G34C-MFZ":{first:"David",last:"Rosti",dates:"1645-Deceased",father:"KNZ9-KQ4",mother:"KNZ3-9QZ",spouses:["K4GK-6XP"],children:["G56R-69J"]},"K4GK-6XP":{first:"Anna",last:"Germann",dates:"1657-Deceased",father:"LHHB-6N5",mother:"LHHB-DFL",spouses:["G34C-MFZ"],children:["G56R-69J"]},"MBZ8-51R":{first:"Jacob",last:"Becker",dates:"1659-Deceased",father:"GQVN-578",mother:"L5TX-YP5",spouses:["MBZ8-RMW"],children:["GQ91-3PN"]},"MBZ8-RMW":{first:"Anna Otilia",last:"Mayer",dates:"1660-1705",father:"GF87-CD7",mother:"GF87-DGJ",spouses:["MBZ8-51R"],children:["GQ91-3PN"]},"GMSP-P5L":{first:"Johann Jacob",last:"Stumpff",dates:"1656-1725",father:"9M5H-V43",mother:"9M5H-V46",spouses:["MP37-NJP"],children:["L3QN-CWR"]},"MP37-NJP":{first:"Anna Margaretha",last:"Körper",dates:"1656-1740",father:"GS9W-4Z8",mother:null,spouses:["GMSP-P5L"],children:["L3QN-CWR"]},"MP5C-XSJ":{first:"Hans",last:"Brubacher",dates:"1685-1748",father:"9ZHH-Z85",mother:"LDBW-NM3",spouses:["G41P-PBB","G41P-PBB"],children:["LJTM-5R8","MXT6-5DP"]},"G41P-PBB":{first:"Anna Eulalia",last:"Ernst",dates:"1695-1759",father:"GMY5-R9Z",mother:"LHZT-BGB",spouses:["MP5C-XSJ","MP5C-XSJ"],children:["LJTM-5R8","MXT6-5DP"]},"9VSM-WVY":{first:"Michael",last:"Tanner",dates:"1690-1762",father:"MT6L-RFC",mother:"LC5V-5HN",spouses:["LZFZ-HYF"],children:["LR79-SZD"]},"LZFZ-HYF":{first:"Magdalena",last:"Landis",dates:"1692-1789",father:"G6NQ-QMF",mother:"LR58-5K6",spouses:["9VSM-WVY"],children:["LR79-SZD"]},"L1XS-K2C":{first:"Christian Widmer",last:"Erb",dates:"1714-1780",father:"LT2L-RRL",mother:"G9P4-5CL",spouses:["G8Z6-HZ3"],children:["LHZJ-SYD"]},"G8Z6-HZ3":{first:"Mary",last:"Wenger",dates:"1714-1765",father:"K4XJ-15Z",mother:"G597-WN5",spouses:["L1XS-K2C"],children:["LHZJ-SYD"]},"9WH9-K33":{first:"Joseph Grundba...",last:"Shirk",dates:"1712-1770",father:"KZ5M-NB8",mother:"GDMM-9XL",spouses:["GCMC-23T"],children:["LHJ3-P2N"]},"GCMC-23T":{first:"Catharine Scott",last:"Furrey",dates:"1705-1772",father:"G6WL-GPK",mother:"GJ5N-NHF",spouses:["9WH9-K33"],children:["LHJ3-P2N"]},"LCJ8-RP6":{first:"Theodorus",last:"Aebi",dates:"1663-1727",father:"GD7S-TD3",mother:"GWQ2-FXC",spouses:["GSMN-L94","GSMN-L94"],children:["LZG5-3CM","9311-X6Q"]},"GSMN-L94":{first:"Anna Margretha",last:"Steiner",dates:"1663-1704",father:"GSZR-PKZ",mother:"GMVV-571",spouses:["LCJ8-RP6","LCJ8-RP6"],children:["LZG5-3CM","9311-X6Q"]},"LCR9-Q9K":{first:"Hans Georg",last:"Meyer",dates:"1674-1751",father:"LH34-141",mother:"L9GD-3CT",spouses:["LL4C-D7D"],children:["L13F-Z42"]},"LL4C-D7D":{first:"Anna Elizabetha",last:"Jacob",dates:"1676-Deceased",father:"9JPM-7K5",mother:"9JPM-72M",spouses:["LCR9-Q9K"],children:["L13F-Z42"]},"G56R-M8B":{first:"Peter",last:"Bruegger",dates:"1663-Deceased",father:null,mother:null,spouses:["G56R-69J"],children:["LVJV-L42"]},"G56R-69J":{first:"Margaretha",last:"Roesti",dates:"1665-Deceased",father:"G34C-MFZ",mother:"K4GK-6XP",spouses:["G56R-M8B"],children:["LVJV-L42"]},"GQ91-3PN":{first:"Joh. Valentinus",last:"Becker",dates:"1684-1760",father:"MBZ8-51R",mother:"MBZ8-RMW",spouses:["L3QN-CWR"],children:["G8C7-7X4"]},"L3QN-CWR":{first:"Christiana",last:"Stumpf",dates:"1686-1779",father:"GMSP-P5L",mother:"MP37-NJP",spouses:["GQ91-3PN"],children:["G8C7-7X4"]},"LJTM-5R8":{first:"Hans John",last:"Brubaker",dates:"1719-1804",father:"MP5C-XSJ",mother:"G41P-PBB",spouses:["LR79-SZD"],children:["L8RC-Q76"]},"LR79-SZD":{first:"Maria",last:"Dohner",dates:"1728-1802",father:"9VSM-WVY",mother:"LZFZ-HYF",spouses:["LJTM-5R8"],children:["L8RC-Q76"]},"LHZJ-SYD":{first:"Christian Wenger",last:"Erb",dates:"1734-1810",father:"L1XS-K2C",mother:"G8Z6-HZ3",spouses:["LHJ3-P2N"],children:["L8RC-7M6"]},"LHJ3-P2N":{first:"Maria Forry",last:"Scherch",dates:"1737-1814",father:"9WH9-K33",mother:"GCMC-23T",spouses:["LHZJ-SYD"],children:["L8RC-7M6"]},"LZG5-3CM":{first:"Christian",last:"EBY",dates:"1698-1756",father:"LCJ8-RP6",mother:"GSMN-L94",spouses:["L13F-Z42"],children:["L13B-SDL"]},"L13F-Z42":{first:"Elizabeth Landis",last:"MAYER",dates:"1708-1787",father:"LCR9-Q9K",mother:"LL4C-D7D",spouses:["LZG5-3CM"],children:["L13B-SDL"]},"LVJV-L42":{first:"Peter",last:"Brucher Bricker",dates:"1700-1761",father:"G56R-M8B",mother:"G56R-69J",spouses:["G8C7-7X4"],children:["KDQL-C19"]},"G8C7-7X4":{first:"Elizabeth L",last:"Becker Brindle",dates:"1703-1765",father:"GQ91-3PN",mother:"L3QN-CWR",spouses:["LVJV-L42"],children:["KDQL-C19"]},"L8RC-Q76":{first:"Jacob Dohner",last:"Brubacher",dates:"1758-1798",father:"LJTM-5R8",mother:"LR79-SZD",spouses:["L8RC-7M6"],children:["LHJJ-TSY"]},"L8RC-7M6":{first:"Susanna Shirk",last:"Erb",dates:"1762-1844",father:"LHZJ-SYD",mother:"LHJ3-P2N",spouses:["L8RC-Q76"],children:["LHJJ-TSY"]},"L13B-SDL":{first:"Christian Mayer",last:"Eby",dates:"1734-1807",father:"LZG5-3CM",mother:"L13F-Z42",spouses:["KDQL-C19"],children:["LH6D-SGM"]},"KDQL-C19":{first:"Catherine Rebecca",last:"Bricker",dates:"1743-1810",father:"LVJV-L42",mother:"G8C7-7X4",spouses:["L13B-SDL"],children:["LH6D-SGM"]},"LHJJ-TSY":{first:"Jacob Erb",last:"Brubacher",dates:"1782-1854",father:"L8RC-Q76",mother:"L8RC-7M6",spouses:["LH6D-SGM"],children:["2Z89-2Q3"]},"LH6D-SGM":{first:"Maria Bricker",last:"Eby",dates:"1787-1864",father:"L13B-SDL",mother:"KDQL-C19",spouses:["LHJJ-TSY"],children:["2Z89-2Q3"]},"2Z89-2Q3":{first:"Anna E",last:"Brubaker",dates:"1824-1873",father:"LHJJ-TSY",mother:"LH6D-SGM",spouses:["unscraped","LC5D-BX1"],children:[null,"2BJ5-3BR"]},"9CBD-Y41":{first:"Conrad",last:"Kraft",dates:"",father:"unscraped",mother:"unscraped",spouses:["9CBD-YHM"],children:["KZM1-QGP"]},"9CBD-YHM":{first:"Anna Gerdraut",last:"Kraft",dates:"",father:"unscraped",mother:"unscraped",spouses:["9CBD-Y41"],children:["KZM1-QGP"]},"L6HJ-JGT":{first:"Johann Tobias",last:"Weigold",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZGK-2WW"],children:["L6HJ-FRL"]},"LZGK-2WW":{first:"Appollonia",last:"Wilch",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6HJ-JGT"],children:["L6HJ-FRL"]},"G7R2-RW4":{first:"Johann Chris...",last:"Hechler",dates:"",father:"unscraped",mother:"unscraped",spouses:["G7R2-6NH"],children:["LZKR-BXS"]},"G7R2-6NH":{first:"Anna Catharina",last:"Vogt",dates:"",father:"unscraped",mother:"unscraped",spouses:["G7R2-RW4"],children:["LZKR-BXS"]},"MD18-VBD":{first:"Nicolas",last:"Schwab",dates:"",father:"unscraped",mother:"unscraped",spouses:["MD18-V1M"],children:["MD18-VYS"]},"MD18-V1M":{first:"Anna Margretha",last:"Bendler",dates:"",father:"unscraped",mother:"unscraped",spouses:["MD18-VBD"],children:["MD18-VYS"]},"KCSZ-SNM":{first:"Johann Tobias",last:"Krichbaum",dates:"",father:"unscraped",mother:"unscraped",spouses:["KHD9-ZP7"],children:["L5YM-QWY"]},"KHD9-ZP7":{first:"Elisabeth",last:"Elgarth",dates:"",father:"unscraped",mother:"unscraped",spouses:["KCSZ-SNM"],children:["L5YM-QWY"]},"GHLX-XDX":{first:"Johann Sebas...",last:"Krauss",dates:"",father:"unscraped",mother:"unscraped",spouses:["GD3Y-TGZ"],children:["GH8J-PN9"]},"GD3Y-TGZ":{first:"Elisabetha",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["GHLX-XDX"],children:["GH8J-PN9"]},"GHL5-CWG":{first:"David",last:"Schneider",dates:"",father:"unscraped",mother:"unscraped",spouses:["GHL5-Z3X"],children:["MD1C-L55"]},"GHL5-Z3X":{first:"Anna Maria",last:"Haas",dates:"",father:"unscraped",mother:"unscraped",spouses:["GHL5-CWG"],children:["MD1C-L55"]},"GH8J-17X":{first:"Christian Ni...",last:"Hechler",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["GH8J-1K2"]},"MD14-6C1":{first:"Johann Martin",last:"Brückman",dates:"",father:"unscraped",mother:"unscraped",spouses:["KC9Y-9X2"],children:["GH8J-YJ9"]},"KC9Y-9X2":{first:"Anna Barbara",last:"Bendler",dates:"",father:"unscraped",mother:"unscraped",spouses:["MD14-6C1"],children:["GH8J-YJ9"]},"KC8Z-ZFB":{first:"Georg",last:"Wilch",dates:"",father:"unscraped",mother:"unscraped",spouses:["K418-Z5L"],children:["KCS3-6VB"]},"K418-Z5L":{first:"Elisabeth Ba...",last:"Krichbaum",dates:"",father:"unscraped",mother:"unscraped",spouses:["KC8Z-ZFB"],children:["KCS3-6VB"]},"KLLY-YZS":{first:"Johannes",last:"Seybert",dates:"Deceased",father:null,mother:null,spouses:["KLLY-YZC"],children:["KCJM-RTM"]},"KLLY-YZC":{first:"Anna Margareta",last:"Merkel",dates:"Deceased",father:null,mother:null,spouses:["KLLY-YZS"],children:["KCJM-RTM"]},"KCPJ-QWC":{first:"Johann Andreas",last:"Berck",dates:"1685-1734",father:null,mother:null,spouses:["KZM1-QGP"],children:["KLLY-Y66"]},"KZM1-QGP":{first:"Anna Elisabetha",last:"Kraft",dates:"1683-1757",father:"9CBD-Y41",mother:"9CBD-YHM",spouses:["KCPJ-QWC"],children:["KLLY-Y66"]},"9CK8-G2K":{first:"Andreas",last:"Mattern",dates:"Deceased",father:null,mother:null,spouses:["9CK8-G22"],children:["KLLY-Y3S"]},"9CK8-G22":{first:"Elisabeth Ba...",last:"Wolf",dates:"Deceased",father:null,mother:null,spouses:["9CK8-G2K"],children:["KLLY-Y3S"]},"9CK8-G2X":{first:"Johann Georg",last:"Haupt",dates:"Deceased",father:null,mother:null,spouses:[null],children:["KNDC-YK2"]},"L6HJ-FRL":{first:"Johann Tobias",last:"Weigold",dates:"1681-1736",father:"L6HJ-JGT",mother:"LZGK-2WW",spouses:["LZKR-BXS"],children:["K8CT-MQD"]},"LZKR-BXS":{first:"Sophia Eleonora",last:"Hechler",dates:"1688-1772",father:"G7R2-RW4",mother:"G7R2-6NH",spouses:["L6HJ-FRL"],children:["K8CT-MQD"]},"MD18-VYS":{first:"Johann Tobias",last:"Schwab",dates:"Deceased",father:"MD18-VBD",mother:"MD18-V1M",spouses:["L5YM-QWY","L5YM-QWY"],children:["L5YM-3RG","KC73-6BJ"]},"L5YM-QWY":{first:"Elisabetha B...",last:"Kriechbaum",dates:"1682-1734",father:"KCSZ-SNM",mother:"KHD9-ZP7",spouses:["MD18-VYS","MD18-VYS"],children:["L5YM-3RG","KC73-6BJ"]},"GH8J-PN9":{first:"Johann Fried...",last:"Krauss",dates:"1683-1732",father:"GHLX-XDX",mother:"GD3Y-TGZ",spouses:["MD1C-L55"],children:["LZPN-TQ9"]},"MD1C-L55":{first:"Christina Anna",last:"Schneider",dates:"1692-1769",father:"GHL5-CWG",mother:"GHL5-Z3X",spouses:["GH8J-PN9"],children:["LZPN-TQ9"]},"GH8J-1K2":{first:"Sophia Eleanor",last:"Hechler",dates:"1687-1772",father:"GH8J-17X",mother:null,spouses:[null],children:["GH8J-54Y"]},"GH8J-YJ9":{first:"Johann Michael",last:"Brueckmann",dates:"1693-1735",father:"MD14-6C1",mother:"KC9Y-9X2",spouses:["KCS3-6VB"],children:["GH8J-RCY"]},"KCS3-6VB":{first:"Anna Margaretha",last:"Wilch",dates:"1682-Deceased",father:"KC8Z-ZFB",mother:"K418-Z5L",spouses:["GH8J-YJ9"],children:["GH8J-RCY"]},"KCJM-RTM":{first:"Johann Georg",last:"Seibert",dates:"1719-1801",father:"KLLY-YZS",mother:"KLLY-YZC",spouses:["KLLY-Y66"],children:["LV63-QXT"]},"KLLY-Y66":{first:"Anna Barbara",last:"Berck",dates:"1720-1801",father:"KCPJ-QWC",mother:"KZM1-QGP",spouses:["KCJM-RTM"],children:["LV63-QXT"]},"KLLY-Y3S":{first:"Johann Lorentz",last:"Mattern",dates:"1700-Deceased",father:"9CK8-G2K",mother:"9CK8-G22",spouses:["KNDC-YK2"],children:["L7XL-TPK"]},"KNDC-YK2":{first:"Elisabetha Cat...",last:"Haupt",dates:"-1766",father:"9CK8-G2X",mother:null,spouses:["KLLY-Y3S"],children:["L7XL-TPK"]},"K8CT-MQD":{first:"Johann Peter",last:"Weygold",dates:"1720-1759",father:"L6HJ-FRL",mother:"LZKR-BXS",spouses:["L5YM-3RG"],children:["K871-VY6"]},"L5YM-3RG":{first:"Anna Margretha",last:"Schwab",dates:"1712-1773",father:"MD18-VYS",mother:"L5YM-QWY",spouses:["K8CT-MQD"],children:["K871-VY6"]},"LZPN-TQ9":{first:"Johann Friederich",last:"Krauss",dates:"1716-1784",father:"GH8J-PN9",mother:"MD1C-L55",spouses:["KC73-6BJ"],children:["LZLW-NSM"]},"KC73-6BJ":{first:"Maria Eleonora",last:"Schwab",dates:"1715-1792",father:"MD18-VYS",mother:"L5YM-QWY",spouses:["LZPN-TQ9"],children:["LZLW-NSM"]},"GH8J-54Y":{first:"Johann Friedrich",last:"Weigold",dates:"1714-1808",father:null,mother:"GH8J-1K2",spouses:["GH8J-RCY"],children:["GH8J-81Y"]},"GH8J-RCY":{first:"Maria Barbara",last:"Brueckmann",dates:"1717-1787",father:"GH8J-YJ9",mother:"KCS3-6VB",spouses:["GH8J-54Y"],children:["GH8J-81Y"]},"LV63-QXT":{first:"Johann Peter",last:"Seibert",dates:"1740-Deceased",father:"KCJM-RTM",mother:"KLLY-Y66",spouses:["L7XL-TPK"],children:["LRD6-215"]},"L7XL-TPK":{first:"Anna Catharina",last:"Mattern",dates:"1743-1813",father:"KLLY-Y3S",mother:"KNDC-YK2",spouses:["LV63-QXT"],children:["LRD6-215"]},"K871-VY6":{first:"Johann Christian",last:"Weygold",dates:"1747-1829",father:"K8CT-MQD",mother:"L5YM-3RG",spouses:["KZR9-V5K"],children:["M5LF-Q9D"]},"KZR9-V5K":{first:"Anna Catharina",last:"Weiss",dates:"1756-Deceased",father:null,mother:null,spouses:["K871-VY6"],children:["M5LF-Q9D"]},"LZLW-NSM":{first:"Johann Tobias",last:"Krauss",dates:"1740-1795",father:"LZPN-TQ9",mother:"KC73-6BJ",spouses:["GH8J-81Y"],children:["LRDD-TJK"]},"GH8J-81Y":{first:"Maria Eleanora",last:"Weigold",dates:"1747-1838",father:"GH8J-54Y",mother:"GH8J-RCY",spouses:["LZLW-NSM"],children:["LRDD-TJK"]},"LRD6-GFR":{first:"Philipp Peter",last:"Weigold",dates:"Deceased",father:null,mother:null,spouses:[null],children:["MTZ1-2PP"]},"LRD6-215":{first:"Johann Peter",last:"Seibert",dates:"1783-1858",father:"LV63-QXT",mother:"L7XL-TPK",spouses:["M5LF-Q9D"],children:["KZD1-FF9"]},"M5LF-Q9D":{first:"Anna Margaretha",last:"Weigold",dates:"1776-Deceased",father:"K871-VY6",mother:"KZR9-V5K",spouses:["LRD6-215"],children:["KZD1-FF9"]},"LRDD-TJK":{first:"Johann Henrich",last:"Kraus",dates:"1776-Deceased",father:"LZLW-NSM",mother:"GH8J-81Y",spouses:["MTZ1-2PP"],children:["KCRT-D3R"]},"MTZ1-2PP":{first:"Anna Margaretha",last:"Weigold",dates:"Deceased",father:"LRD6-GFR",mother:null,spouses:["LRDD-TJK"],children:["KCRT-D3R"]},"KZD1-FF9":{first:"Johann Philip",last:"Seibert",dates:"1810-Deceased",father:"LRD6-215",mother:"M5LF-Q9D",spouses:["KCRT-D3R"],children:["941H-KFR"]},"KCRT-D3R":{first:"Anna Margaretha",last:"Krauss",dates:"1808-1860",father:"LRDD-TJK",mother:"MTZ1-2PP",spouses:["KZD1-FF9"],children:["941H-KFR"]},"941H-KFR":{first:"Anna Christina",last:"Seibert",dates:"1835-1885",father:"KZD1-FF9",mother:"KCRT-D3R",spouses:["unscraped","M5LF-2G3"],children:[null,"GKTH-HTL"]},"9XFH-TVP":{first:"Hans  John",last:"Brubaker",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["GGDR-KLR"]},"G1J7-XJ1":{first:'Heinrich "He...',last:"Funke",dates:"",father:"unscraped",mother:"unscraped",spouses:["M5T1-544"],children:["LHD1-52M"]},"M5T1-544":{first:"Veronica",last:"Fronica",dates:"",father:"unscraped",mother:"unscraped",spouses:["G1J7-XJ1"],children:["LHD1-52M"]},"G4XX-JJ8":{first:"Johannes Fra...",last:"Lotscher",dates:"",father:"unscraped",mother:"unscraped",spouses:["G4XX-NKK"],children:["L6H7-376"]},"G4XX-NKK":{first:"Elizabeth",last:"Esleman",dates:"",father:"unscraped",mother:"unscraped",spouses:["G4XX-JJ8"],children:["L6H7-376"]},"LHLH-QP6":{first:"Samuel",last:"Oberholtzer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LQ5N-V5F"],children:["KZQ8-B8M"]},"LQ5N-V5F":{first:"Elizabeth",last:"Streler",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHLH-QP6"],children:["KZQ8-B8M"]},"G9VF-F7Q":{first:"Jakob",last:"Greiter",dates:"1649-1709",father:"GT5X-37F",mother:"GT5X-QHD",spouses:["GX46-KMC"],children:["L2TG-P68"]},"GX46-KMC":{first:"Barbara",last:"Schenck",dates:"1667-1706",father:"GTBT-XWX",mother:"GTBT-MFZ",spouses:["G9VF-F7Q"],children:["L2TG-P68"]},"G7J5-L72":{first:"Heinrich",last:"Fiechter",dates:"1650-Deceased",father:"LZGQ-MRR",mother:"LZGQ-MRT",spouses:["KZHP-4FG"],children:["LBG9-VD7"]},"KZHP-4FG":{first:"Verena",last:"Gersterin",dates:"1660-Deceased",father:"GT5X-F3V",mother:"GT5X-Q3D",spouses:["G7J5-L72"],children:["LBG9-VD7"]},"L8P1-2JG":{first:"Francis Bough",last:"Buchwalter",dates:"1665-1723",father:"GZSN-PGF",mother:"L5FW-8BC",spouses:["LCQK-4CP","LCQK-4CP"],children:["MF6V-B64","LV9Y-9QK"]},"LCQK-4CP":{first:"Mary Durst",last:"Mellinger",dates:"1668-1723",father:"L513-FV4",mother:"L19M-YY7",spouses:["L8P1-2JG","L8P1-2JG"],children:["MF6V-B64","LV9Y-9QK"]},"LY8Q-JKR":{first:"Johann Anton",last:"Weber",dates:"1658-1724",father:"L18X-7QG",mother:"LB1L-KKQ",spouses:["LDQB-2W8","LDQB-2W8","LDQB-2W8"],children:["L7JS-BCK","GDWX-CSD","L2L8-2JB"]},"LDQB-2W8":{first:"Maria Margar...",last:"Herr",dates:"1663-1725",father:"KFR6-VF6",mother:"LHXB-NR2",spouses:["LY8Q-JKR","LY8Q-JKR","LY8Q-JKR"],children:["L7JS-BCK","GDWX-CSD","L2L8-2JB"]},"KCVL-2PP":{first:"Jacob",last:"Ottmann",dates:"1658-1748",father:"K819-CQ3",mother:"KC8J-6GR",spouses:["KZTH-Q72"],children:["L1ZP-DNR"]},"KZTH-Q72":{first:"Barbara",last:"Stupfel",dates:"1658-1727",father:"GQD8-YC3",mother:"G9X5-KK4",spouses:["KCVL-2PP"],children:["L1ZP-DNR"]},"KH2J-W69":{first:"Marx",last:"Heller",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8QG-X31"],children:["MYRX-96K"]},"L8QG-X31":{first:"Anna Godlieb",last:"Schlintwein",dates:"",father:"unscraped",mother:"unscraped",spouses:["KH2J-W69"],children:["MYRX-96K"]},"L697-49N":{first:"Johannes Mic...",last:"Pfautz",dates:"",father:"unscraped",mother:"unscraped",spouses:["GQMW-R38"],children:["LTZH-PT7"]},"GQMW-R38":{first:"Anna Catrina",last:"Schlauch",dates:"",father:"unscraped",mother:"unscraped",spouses:["L697-49N"],children:["LTZH-PT7"]},"GP4D-9W2":{first:"Hans Jacob",last:"Muehlenhauser",dates:"",father:"unscraped",mother:"unscraped",spouses:["GG57-4PN"],children:["MBR9-PSD"]},"GG57-4PN":{first:"Anna Margaretha",last:"Bauman",dates:"",father:"unscraped",mother:"unscraped",spouses:["GP4D-9W2"],children:["MBR9-PSD"]},"LVKS-GSX":{first:"Marx",last:"Graff",dates:"",father:"unscraped",mother:"unscraped",spouses:["KZ9L-M8T","KZ9L-M8T"],children:["LVZ4-THL","LRXJ-8KK"]},"KZ9L-M8T":{first:"Anna",last:"Heller",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVKS-GSX","LVKS-GSX"],children:["LVZ4-THL","LRXJ-8KK"]},"G69N-K8W":{first:"Hans Heinrich",last:"Bär",dates:"",father:"unscraped",mother:"unscraped",spouses:["G692-MFV"],children:["GD99-TSX"]},"G692-MFV":{first:"Anna",last:"Hauser",dates:"",father:"unscraped",mother:"unscraped",spouses:["G69N-K8W"],children:["GD99-TSX"]},"GGDR-KLR":{first:"Jacob",last:"Brubaker",dates:"1680-1751",father:"9XFH-TVP",mother:null,spouses:["LHD1-52M"],children:["GKY4-P5H"]},"LHD1-52M":{first:"Veronica Mag...",last:"Funk",dates:"1686-1761",father:"G1J7-XJ1",mother:"M5T1-544",spouses:["GGDR-KLR"],children:["GKY4-P5H"]},"LYQZ-3M2":{first:"Isaac",last:"Herr",dates:"1691-1747",father:"KFR6-VF6",mother:"LHXB-NR2",spouses:["L6H7-376"],children:["MP1J-W23"]},"L6H7-376":{first:"Elizabeth",last:"Lotscher",dates:"1690-1750",father:"G4XX-JJ8",mother:"G4XX-NKK",spouses:["LYQZ-3M2"],children:["MP1J-W23"]},"KZQ8-B8M":{first:"Hans Jakob",last:"Oberholtzer",dates:"1679-Deceased",father:"LHLH-QP6",mother:"LQ5N-V5F",spouses:["KHTC-ZVY"],children:["GLV3-PYM"]},"KHTC-ZVY":{first:"Susanna",last:"Kunz",dates:"1632-1752",father:null,mother:null,spouses:["KZQ8-B8M"],children:["GLV3-PYM"]},"L2TG-P68":{first:"Hans Jacob",last:"Kreider",dates:"1686-1741",father:"G9VF-F7Q",mother:"GX46-KMC",spouses:["LBG9-VD7","LBG9-VD7"],children:["LR5H-9TB","LVMN-25D"]},"LBG9-VD7":{first:"Anna Magdalena",last:"Fiechter",dates:"1680-1744",father:"G7J5-L72",mother:"KZHP-4FG",spouses:["L2TG-P68","L2TG-P68"],children:["LR5H-9TB","LVMN-25D"]},"MF6V-B64":{first:"Theodorus Yost",last:"Buchwalter",dates:"1702-1782",father:"L8P1-2JG",mother:"LCQK-4CP",spouses:["LZ6N-RJ1","LZ6N-RJ1"],children:["LCRQ-4DJ","LJBM-XQQ"]},"LZ6N-RJ1":{first:"Barbara",last:"Landis",dates:"1705-1782",father:"G6NQ-QMF",mother:"LR58-5K6",spouses:["MF6V-B64","MF6V-B64"],children:["LCRQ-4DJ","LJBM-XQQ"]},"LBYK-M2F":{first:"Rev Benjamin",last:"Landis Sr",dates:"1697-1781",father:"G6NQ-QMF",mother:"LR58-5K6",spouses:["L7JS-BCK","L7JS-BCK","L7JS-BCK","L7JS-BCK"],children:["LZK1-KV2","LV9Y-QJC","L4WC-YWX","L84K-BF9"]},"L7JS-BCK":{first:"Maria",last:"Weber",dates:"1705-1787",father:"LY8Q-JKR",mother:"LDQB-2W8",spouses:["LBYK-M2F","LBYK-M2F","LBYK-M2F","LBYK-M2F"],children:["LZK1-KV2","LV9Y-QJC","L4WC-YWX","L84K-BF9"]},"MZ77-RKW":{first:"Hans John",last:"Schnebele",dates:"1687-Deceased",father:null,mother:null,spouses:["L1ZP-DNR"],children:["L1ZP-HG9"]},"L1ZP-DNR":{first:"Anne",last:"Ottmann",dates:"1691-1755",father:"KCVL-2PP",mother:"KZTH-Q72",spouses:["MZ77-RKW"],children:["L1ZP-HG9"]},"MYRX-96K":{first:"Rudolff",last:"Heller",dates:"1680-1734",father:"KH2J-W69",mother:"L8QG-X31",spouses:["GK8J-SM4"],children:["LDK9-R2P"]},"GK8J-SM4":{first:"Anna Catharina",last:"",dates:"1690-Deceased",father:null,mother:null,spouses:["MYRX-96K"],children:["LDK9-R2P"]},"LTZH-PT7":{first:"Hans Michael",last:"Pfautz",dates:"1682-1740",father:"L697-49N",mother:"GQMW-R38",spouses:["MBR9-PSD"],children:["LDK9-RKP"]},"MBR9-PSD":{first:"Ursula",last:"Mühlhäuser",dates:"1682-1772",father:"GP4D-9W2",mother:"GG57-4PN",spouses:["LTZH-PT7"],children:["LDK9-RKP"]},"LVZ4-THL":{first:"Martin",last:"Groff",dates:"1690-1759",father:"LVKS-GSX",mother:"KZ9L-M8T",spouses:["GD99-TSX"],children:["LZG1-M2D"]},"GD99-TSX":{first:"Catharina",last:"Bär",dates:"1695-1754",father:"G69N-K8W",mother:"G692-MFV",spouses:["LVZ4-THL"],children:["LZG1-M2D"]},"GKY4-P5H":{first:"John",last:"Brubaker",dates:"1710-1743",father:"GGDR-KLR",mother:"LHD1-52M",spouses:["MP1J-W23"],children:["GNF6-H8T"]},"MP1J-W23":{first:"Elizabeth",last:"Herr",dates:"1716-1749",father:"LYQZ-3M2",mother:"L6H7-376",spouses:["GKY4-P5H"],children:["GNF6-H8T"]},"GLV3-PYM":{first:"Henry",last:"Owerwasser/Obe...",dates:"1706-1767",father:"KZQ8-B8M",mother:"KHTC-ZVY",spouses:[null],children:["K2T5-SRS"]},"LR5H-9TB":{first:"Tobias",last:"Kreider Sr.",dates:"1714-1791",father:"L2TG-P68",mother:"LBG9-VD7",spouses:["LCRQ-4DJ","LCRQ-4DJ"],children:["L7NK-F59","LT1J-BFT"]},"LCRQ-4DJ":{first:"Anlea 'Ann'",last:"Buckwalter",dates:"1725-1805",father:"MF6V-B64",mother:"LZ6N-RJ1",spouses:["LR5H-9TB","LR5H-9TB"],children:["L7NK-F59","LT1J-BFT"]},"LZK1-KV2":{first:"Benjamin",last:"Landis Jr",dates:"1730-1787",father:"LBYK-M2F",mother:"L7JS-BCK",spouses:["L1ZP-HG9"],children:["K2XQ-LTX"]},"L1ZP-HG9":{first:"Anna",last:"Snavely",dates:"1731-1792",father:"MZ77-RKW",mother:"L1ZP-DNR",spouses:["LZK1-KV2"],children:["K2XQ-LTX"]},"LDK9-R2P":{first:"Johann Jacob",last:"Heller Sr.",dates:"1712-1787",father:"MYRX-96K",mother:"GK8J-SM4",spouses:["LDK9-RKP"],children:["L1H7-282"]},"LDK9-RKP":{first:"Anna Barbara",last:"Pfautz",dates:"1714-1790",father:"LTZH-PT7",mother:"MBR9-PSD",spouses:["LDK9-R2P"],children:["L1H7-282"]},"9311-X6Q":{first:"Peter S",last:"Eby",dates:"1690-1749",father:"LCJ8-RP6",mother:"GSMN-L94",spouses:["LZG1-M2D"],children:["MRPV-9VT"]},"LZG1-M2D":{first:"Barbara",last:"Groff",dates:"1719-Deceased",father:"LVZ4-THL",mother:"GD99-TSX",spouses:["9311-X6Q"],children:["MRPV-9VT"]},"GNF6-H8T":{first:"John Herr",last:"Brubaker",dates:"1732-1792",father:"GKY4-P5H",mother:"MP1J-W23",spouses:["K2T5-SRS"],children:["K2T5-7YP"]},"K2T5-SRS":{first:"Barbara",last:"Oberholtzer",dates:"1733-Deceased",father:"GLV3-PYM",mother:null,spouses:["GNF6-H8T"],children:["K2T5-7YP"]},"L7NK-F59":{first:"Johannes",last:"Kreider",dates:"1747-1825",father:"LR5H-9TB",mother:"LCRQ-4DJ",spouses:["K2XQ-LTX","K2XQ-LTX"],children:["L1H6-GZT","2Z1B-HZN"]},"K2XQ-LTX":{first:"Maria Snavely",last:"Landis",dates:"1751-1826",father:"LZK1-KV2",mother:"L1ZP-HG9",spouses:["L7NK-F59","L7NK-F59"],children:["L1H6-GZT","2Z1B-HZN"]},"L1H7-282":{first:"Johannes Pfautz",last:"Heller",dates:"1739-1822",father:"LDK9-R2P",mother:"LDK9-RKP",spouses:["MRPV-9VT"],children:["KZDV-FGG"]},"MRPV-9VT":{first:"Anna Groff",last:"Eby",dates:"1741-1821",father:"9311-X6Q",mother:"LZG1-M2D",spouses:["L1H7-282"],children:["KZDV-FGG"]},"K2T5-7YP":{first:"Abraham",last:"Brubaker",dates:"1760-1831",father:"GNF6-H8T",mother:"K2T5-SRS",spouses:["L1H6-GZT"],children:["21JV-6YZ"]},"L1H6-GZT":{first:"Anna",last:"Kreider",dates:"1768-1826",father:"L7NK-F59",mother:"K2XQ-LTX",spouses:["K2T5-7YP"],children:["21JV-6YZ"]},"KZDV-FGG":{first:"John Eby",last:"Heller",dates:"1769-1827",father:"L1H7-282",mother:"MRPV-9VT",spouses:["LY4R-D8Y"],children:["218F-D57"]},"LY4R-D8Y":{first:"Maria",last:"Roland",dates:"1771-1836",father:null,mother:null,spouses:["KZDV-FGG"],children:["218F-D57"]},"21JV-6YZ":{first:"Abraham Kreider",last:"Brubaker",dates:"1797-1887",father:"K2T5-7YP",mother:"L1H6-GZT",spouses:["218F-D57"],children:["9WKV-CM9"]},"218F-D57":{first:"Veronica",last:"Heller",dates:"1799-1860",father:"KZDV-FGG",mother:"LY4R-D8Y",spouses:["21JV-6YZ"],children:["9WKV-CM9"]},"9WKV-CM9":{first:"John Heller",last:"Brubaker",dates:"1822-1896",father:"21JV-6YZ",mother:"218F-D57",spouses:["unscraped","LZ2D-BZX"],children:[null,"G4L8-NGC"]},"LZP4-3FD":{first:"Hans",last:"Keller",dates:"",father:"unscraped",mother:"unscraped",spouses:["KN1J-PGP"],children:["KC7X-16L"]},"KN1J-PGP":{first:"Barbli",last:"Luginbühl",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZP4-3FD"],children:["KC7X-16L"]},"MFQ1-6T6":{first:"Christen",last:"Geissbühler",dates:"",father:"unscraped",mother:"unscraped",spouses:["G2ZS-LDP"],children:["MGNV-81Y"]},"G2ZS-LDP":{first:"Anna",last:"Geissbühler",dates:"",father:"unscraped",mother:"unscraped",spouses:["MFQ1-6T6"],children:["MGNV-81Y"]},"LM96-9V1":{first:"Durs",last:"Liechti",dates:"",father:"unscraped",mother:"unscraped",spouses:["GZG2-PJ1"],children:["KH28-2VT"]},"GZG2-PJ1":{first:"Barbli",last:"Fankhauser",dates:"",father:"unscraped",mother:"unscraped",spouses:["LM96-9V1"],children:["KH28-2VT"]},"L2CG-BVX":{first:"Hans",last:"Hiestand",dates:"",father:"unscraped",mother:"unscraped",spouses:["G6RL-SS3"],children:["L28V-LRJ"]},"G6RL-SS3":{first:"Anna",last:"Strickler",dates:"",father:"unscraped",mother:"unscraped",spouses:["L2CG-BVX"],children:["L28V-LRJ"]},"L6GH-LSL":{first:"Hans",last:"Wenger",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6GH-L4Q"],children:["9HHN-745"]},"L6GH-L4Q":{first:"Verena",last:"Krebs",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6GH-LSL"],children:["9HHN-745"]},"G2RD-2BR":{first:"Ulrich",last:"Blum",dates:"",father:"unscraped",mother:"unscraped",spouses:["97LK-QFD"],children:["LHM9-CVK"]},"97LK-QFD":{first:"Anna",last:"Opliger",dates:"",father:"unscraped",mother:"unscraped",spouses:["G2RD-2BR"],children:["LHM9-CVK"]},"LJM3-FKL":{first:"Michel",last:"Mosimann",dates:"",father:"unscraped",mother:"unscraped",spouses:["GZ9L-41P"],children:["L5YQ-2R3"]},"GZ9L-41P":{first:"Anne Judith",last:"Schoutti",dates:"",father:"unscraped",mother:"unscraped",spouses:["LJM3-FKL"],children:["L5YQ-2R3"]},"KHFJ-54S":{first:"Hans Jacob",last:"Landis",dates:"1667-1730",father:"KZPZ-MBD",mother:"GFT3-R1J",spouses:["LR58-5K6","LR58-5K6"],children:["GJ3M-83R","LTXH-CXG"]},"K8LN-Y9K":{first:"Jacob",last:"Bassler",dates:"1695-1750",father:null,mother:null,spouses:["KLLX-ZTP","KLLX-ZTP"],children:["GZ9L-6DH","MYWW-XJ1"]},"KLLX-ZTP":{first:"Veronica",last:"Krehbiel",dates:"1695-Deceased",father:null,mother:null,spouses:["K8LN-Y9K","K8LN-Y9K"],children:["GZ9L-6DH","MYWW-XJ1"]},"GBNY-RZR":{first:"Christen",last:"Gäumann",dates:"1645-Deceased",father:null,mother:null,spouses:["KC7X-16L"],children:["G9B3-C2Y"]},"KC7X-16L":{first:"Madlena",last:"Keller",dates:"1646-Deceased",father:"LZP4-3FD",mother:"KN1J-PGP",spouses:["GBNY-RZR"],children:["G9B3-C2Y"]},"MGNV-81Y":{first:"Christen",last:"Geissbühler",dates:"1652-Deceased",father:"MFQ1-6T6",mother:"G2ZS-LDP",spouses:["KH28-2VT"],children:["GN7C-V4H"]},"KH28-2VT":{first:"Babi",last:"Liechti",dates:"1653-Deceased",father:"LM96-9V1",mother:"GZG2-PJ1",spouses:["MGNV-81Y"],children:["GN7C-V4H"]},"L5PD-PBY":{first:"Hans",last:"Stauffer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LJG3-Q9V"],children:["LCT1-RP6"]},"LJG3-Q9V":{first:"Madlena",last:"Neuenschwander",dates:"",father:"unscraped",mother:"unscraped",spouses:["L5PD-PBY"],children:["LCT1-RP6"]},"LKYX-C17":{first:"Hans",last:"Hiestand",dates:"",father:"unscraped",mother:"unscraped",spouses:["GDMM-M8L"],children:["LCC2-9TL"]},"GDMM-M8L":{first:"Regula Tring...",last:"Äschmannin",dates:"",father:"unscraped",mother:"unscraped",spouses:["LKYX-C17"],children:["LCC2-9TL"]},"GB7S-YJ2":{first:"Jorg Matthaeus",last:"Merckle",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHG7-1JG"],children:["L78F-RC8"]},"LHG7-1JG":{first:"Eva",last:"Moser",dates:"",father:"unscraped",mother:"unscraped",spouses:["GB7S-YJ2"],children:["L78F-RC8"]},"L28V-LRJ":{first:"Hans Jakob",last:"Hiestand",dates:"1681-1758",father:"L2CG-BVX",mother:"G6RL-SS3",spouses:["LDLD-V96"],children:["LRQJ-SMX"]},"LDLD-V96":{first:"Anna",last:"Schelli",dates:"1678-1777",father:null,mother:null,spouses:["L28V-LRJ"],children:["LRQJ-SMX"]},"9HHN-745":{first:"Heinrich",last:"Wenger",dates:"1680-1753",father:"L6GH-LSL",mother:"L6GH-L4Q",spouses:["LHM9-CVK"],children:["LDLD-LS9"]},"LHM9-CVK":{first:"Elisabeth",last:"Blum",dates:"1684-1751",father:"G2RD-2BR",mother:"97LK-QFD",spouses:["9HHN-745"],children:["LDLD-LS9"]},"L5YQ-2R3":{first:"Jacob",last:"Musselman",dates:"1700-1754",father:"LJM3-FKL",mother:"GZ9L-41P",spouses:["GJ3M-83R"],children:["L78Y-SQ4"]},"GJ3M-83R":{first:"Anna Witmer",last:"Landis",dates:"1704-1756",father:"KHFJ-54S",mother:"LR58-5K6",spouses:["L5YQ-2R3"],children:["L78Y-SQ4"]},"GZ9L-6DH":{first:"Michael",last:"Bassler",dates:"1713-1738",father:"K8LN-Y9K",mother:"KLLX-ZTP",spouses:["LZFZ-PLG"],children:["LHWK-CDY"]},"LZFZ-PLG":{first:"Anna",last:"Gertraut",dates:"1717-Deceased",father:null,mother:null,spouses:["GZ9L-6DH"],children:["LHWK-CDY"]},"G9B3-C2Y":{first:"Bendicht",last:"Gäumann",dates:"1687-Deceased",father:"GBNY-RZR",mother:"KC7X-16L",spouses:["GN7C-V4H"],children:["9WRH-T9P"]},"GN7C-V4H":{first:"Anna",last:"Geissbühler",dates:"1685-1720",father:"MGNV-81Y",mother:"KH28-2VT",spouses:["G9B3-C2Y"],children:["9WRH-T9P"]},"GBLH-BR5":{first:"Rudli",last:"Meyer",dates:"Deceased",father:null,mother:null,spouses:["9MPH-NCW"],children:["K87L-L76"]},"9MPH-NCW":{first:"Margretha",last:"Müller",dates:"Deceased",father:null,mother:null,spouses:["GBLH-BR5"],children:["K87L-L76"]},"LCT1-RP6":{first:"johannes Hans",last:"Stauffer",dates:"1645-1710",father:"L5PD-PBY",mother:"LJG3-Q9V",spouses:["LCC2-9TL"],children:["LCC2-SHD"]},"LCC2-9TL":{first:"Kinget Kungo...",last:"Hiestand",dates:"1658-1710",father:"LKYX-C17",mother:"GDMM-M8L",spouses:["LCT1-RP6"],children:["LCC2-SHD"]},"L78F-RC8":{first:"Balthasar",last:"Merckle",dates:"1651-1723",father:"GB7S-YJ2",mother:"LHG7-1JG",spouses:["LT7G-1ZN"],children:["KZRB-3FV"]},"LT7G-1ZN":{first:"Maria Elisab...",last:"Buri",dates:"1655-Deceased",father:null,mother:null,spouses:["L78F-RC8"],children:["KZRB-3FV"]},"LRQJ-SMX":{first:"Johann Abraham",last:"Hiestand",dates:"1711-1788",father:"L28V-LRJ",mother:"LDLD-V96",spouses:["LDLD-LS9"],children:["MQBQ-K8L"]},"LDLD-LS9":{first:"Barbara",last:"Wenger",dates:"1716-1775",father:"9HHN-745",mother:"LHM9-CVK",spouses:["LRQJ-SMX"],children:["MQBQ-K8L"]},"L78Y-SQ4":{first:"Jacob",last:"Musselman Jr.",dates:"1730-1784",father:"L5YQ-2R3",mother:"GJ3M-83R",spouses:["LHWK-CDY"],children:["L62D-KWJ"]},"LHWK-CDY":{first:"Maria",last:"Bassler",dates:"1739-1823",father:"GZ9L-6DH",mother:"LZFZ-PLG",spouses:["L78Y-SQ4"],children:["L62D-KWJ"]},"9WRH-T9P":{first:"Christian Geis...",last:"Gehman",dates:"1706-1772",father:"G9B3-C2Y",mother:"GN7C-V4H",spouses:["K87L-L76","K87L-L76"],children:["GZ5P-1VS","LHKF-J4K"]},"K87L-L76":{first:"Magdalena",last:"Meyer",dates:"1707-Deceased",father:"GBLH-BR5",mother:"9MPH-NCW",spouses:["9WRH-T9P","9WRH-T9P"],children:["GZ5P-1VS","LHKF-J4K"]},"LCC2-SHD":{first:"Daniel",last:"Stauffer",dates:"1697-1793",father:"LCT1-RP6",mother:"LCC2-9TL",spouses:["KZRB-3FV"],children:["LC7L-CDD"]},"KZRB-3FV":{first:"Maria Catharina",last:"Merckle",dates:"1695-1760",father:"L78F-RC8",mother:"LT7G-1ZN",spouses:["LCC2-SHD"],children:["LC7L-CDD"]},"MQBQ-K8L":{first:"Jacob",last:"Hiestand I",dates:"1750-1833",father:"LRQJ-SMX",mother:"LDLD-LS9",spouses:["L62D-KWJ"],children:["LHWV-S8Z"]},"L62D-KWJ":{first:"Catherine",last:"Mussleman",dates:"1757-1847",father:"L78Y-SQ4",mother:"LHWK-CDY",spouses:["MQBQ-K8L"],children:["LHWV-S8Z"]},"GZ5P-1VS":{first:"Johannes",last:"Gehman",dates:"1741-1806",father:"9WRH-T9P",mother:"K87L-L76",spouses:["LC7L-CDD"],children:["LHWJ-1NW"]},"LC7L-CDD":{first:"Anna Merkle",last:"Stauffer",dates:"1738-1817",father:"LCC2-SHD",mother:"KZRB-3FV",spouses:["GZ5P-1VS"],children:["LHWJ-1NW"]},"LHKF-J4K":{first:"Jacob",last:"Gehman",dates:"1753-1811",father:"9WRH-T9P",mother:"K87L-L76",spouses:["KN92-PF1"],children:["KN92-PZH"]},"KN92-PF1":{first:"Anna Maria",last:"Fretz",dates:"1761-1842",father:null,mother:null,spouses:["LHKF-J4K"],children:["KN92-PZH"]},"LHWV-S8Z":{first:"Jacob",last:"Hiestand II",dates:"1770-1854",father:"MQBQ-K8L",mother:"L62D-KWJ",spouses:["LHWJ-1NW"],children:["L17K-1GY"]},"LHWJ-1NW":{first:"Elizabeth Stauffer",last:"Gehman",dates:"1772-1849",father:"GZ5P-1VS",mother:"LC7L-CDD",spouses:["LHWV-S8Z"],children:["L17K-1GY"]},"KN92-PZH":{first:"Jacob",last:"Gehman",dates:"1793-1863",father:"LHKF-J4K",mother:"KN92-PF1",spouses:["L17K-1GY"],children:["G3JB-CDY"]},"L17K-1GY":{first:"Maria",last:"Hiestand",dates:"1800-1868",father:"LHWV-S8Z",mother:"LHWJ-1NW",spouses:["KN92-PZH"],children:["G3JB-CDY"]},"G3JB-CDY":{first:"Harrison Hie...",last:"Gehman",dates:"1839-1906",father:"KN92-PZH",mother:"L17K-1GY",spouses:["unscraped","LZ5M-BHF"],children:[null,"LH2C-97X"]},"GTY7-HV1":{first:"Johann Peter",last:"Semler",dates:"Deceased",father:null,mother:null,spouses:[null],children:["GTTK-TXG"]},"GTTK-TXG":{first:"Johann Thomas",last:"Semmler",dates:"1712-1785",father:"GTY7-HV1",mother:null,spouses:["GTTK-RBC"],children:["GTTK-N96"]},"GTTK-RBC":{first:"Anna Margaretha",last:"Schmitt",dates:"1717-1795",father:null,mother:null,spouses:["GTTK-TXG"],children:["GTTK-N96"]},"GTTK-N96":{first:"Johann Adam",last:"Semmler",dates:"1748-1823",father:"GTTK-TXG",mother:"GTTK-RBC",spouses:["GTTK-1S7"],children:["G9DN-43T"]},"GTTK-1S7":{first:"Anna Margreth",last:"Nungesser",dates:"1749-1797",father:null,mother:null,spouses:["GTTK-N96"],children:["G9DN-43T"]},"G9DN-43T":{first:"Johann Adam",last:"Semmler",dates:"1785-1862",father:"GTTK-N96",mother:"GTTK-1S7",spouses:["G9DN-431"],children:["G96Q-P1X"]},"G9DN-431":{first:"Maria Elisabetha",last:"Riebel",dates:"1786-1842",father:null,mother:null,spouses:["G9DN-43T"],children:["G96Q-P1X"]},"G96Q-P1X":{first:"Philipp Peter",last:"Semmler",dates:"1822-1881",father:"G9DN-43T",mother:"G9DN-431",spouses:["unscraped","M5LF-QBY"],children:[null,"GDMS-NW9"]},"GDWM-XKW":{first:"Christian B.",last:"Herr",dates:"1812-1895",father:null,mother:null,spouses:["GDWM-Q8V"],children:["GDWM-CRK"]},"GDWM-Q8V":{first:"Elizabeth",last:"Shenk",dates:"1814-1884",father:null,mother:null,spouses:["GDWM-XKW"],children:["GDWM-CRK"]},"GDWM-CRK":{first:"Anna Shenk",last:"Herr",dates:"1837-1860",father:"GDWM-XKW",mother:"GDWM-Q8V",spouses:["unscraped","L4WR-G6X"],children:[null,"L4WG-JVP"]},"K415-T5Q":{first:"John H.",last:"Shenk",dates:"1816-1892",father:"LBR6-QDG",mother:"L7XK-YM8",spouses:["29C7-3HW","unscraped"],children:["2BJ5-3RP",null]},"LC5D-BX1":{first:"Abraham",last:"Horst",dates:"1821-1905",father:"KLYJ-1J4",mother:"KL4J-TK9",spouses:["2Z89-2Q3","unscraped"],children:["2BJ5-3BR",null]},"LCXQ-QLQ":{first:"Daniel Stehman",last:"Erb",dates:"1814-1898",father:"KGMJ-ZDN",mother:"LHJV-W7R",spouses:["K26K-32T","unscraped"],children:["L9HS-C8Y",null]},"K26K-32T":{first:"Mary Risser",last:"Hess",dates:"1815-1888",father:"K26K-31T",mother:"K26K-QQT",spouses:["LCXQ-QLQ","unscraped"],children:["L9HS-C8Y",null]},"L9HS-ZD2":{first:"Samuel Martin",last:"Zimmerman",dates:"1810-1877",father:"LC7H-17V",mother:"L41N-R31",spouses:["L9HS-ZC2","unscraped"],children:["KCCS-N1K",null]},"L9HS-ZC2":{first:"Susanna Hess",last:"Plough",dates:"1817-1899",father:"KL8C-5MY",mother:"LDMX-5WQ",spouses:["L9HS-ZD2","unscraped"],children:["KCCS-N1K",null]},"LZ2D-BZX":{first:"Frances Fannie",last:"Hess",dates:"1826-1915",father:"LZLF-8Y5",mother:"LZLF-8BJ",spouses:["9WKV-CM9","unscraped"],children:["G4L8-NGC",null]},"LH6D-2TZ":{first:"Isaack",last:"Bowman",dates:"1802-1875",father:"LHNL-WN7",mother:"LHP4-SNF",spouses:["LHSP-KKJ","unscraped"],children:["2BVC-LGJ",null]},"LHSP-KKJ":{first:"Hannah",last:"Musser",dates:"1805-1875",father:"29SD-SJK",mother:"29QN-88Q",spouses:["LH6D-2TZ","unscraped"],children:["2BVC-LGJ",null]},"LC7J-N3Z":{first:"Tobias Kreider",last:"Leaman",dates:"1817-1859",father:"LCFM-CSL",mother:"G7W6-RN6",spouses:["LQ5R-YYX","unscraped"],children:["LBZ8-SMJ",null]},"LQ5R-YYX":{first:"Elizabeth La...",last:"Denlinger",dates:"1825-1902",father:"K2X7-M52",mother:"K636-71D",spouses:["LC7J-N3Z","unscraped"],children:["LBZ8-SMJ",null]},"LHZ7-L4F":{first:"Benjamin Witwer",last:"Groff",dates:"1814-1899",father:"KH2Q-75R",mother:"9JSY-LFJ",spouses:["LHZ7-LCY","unscraped"],children:["LBZZ-YVR",null]},"LHZ7-LCY":{first:"Esther",last:"Landis",dates:"1831-1905",father:"LZPM-KWX",mother:"GQXZ-NZ8",spouses:["LHZ7-L4F","unscraped"],children:["LBZZ-YVR",null]},"LCX5-N9M":{first:"Benjamin Landis",last:"Denlinger",dates:"1814-1888",father:"K2X7-M52",mother:"K636-71D",spouses:["LCX5-NQ8","unscraped"],children:["KP7Z-F3J",null]},"LCX5-NQ8":{first:"Anna Denlinger",last:"Kreider",dates:"1818-1900",father:"2Z1B-HZN",mother:"218N-5PR",spouses:["LCX5-N9M","unscraped"],children:["KP7Z-F3J",null]},"LC6B-KG7":{first:"Jacob Siegrist",last:"Hershey",dates:"1812-1889",father:"LC6B-K15",mother:"LC6B-2MY",spouses:["LC6B-L7Y","unscraped"],children:["KP7Z-FJ7",null]},"LC6B-L7Y":{first:"Esther Susan...",last:"Martin",dates:"1818-1877",father:"K2V6-FY1",mother:"LVJM-HMK",spouses:["LC6B-KG7","unscraped"],children:["KP7Z-FJ7",null]},"L7XM-TYT":{first:"David Witwer",last:"Groff",dates:"1818-1905",father:"KH2Q-75R",mother:"9JSY-LFJ",spouses:["L7XM-BZM","unscraped"],children:["LHPV-3RP",null]},"L7XM-BZM":{first:"Elizabeth Wi...",last:"Buckwalter",dates:"1818-1874",father:"2CPW-SNP",mother:"2HXS-M8N",spouses:["L7XM-TYT","unscraped"],children:["LHPV-3RP",null]},"L4WR-G6X":{first:"Christian Be...",last:"Brubaker",dates:"1832-1910",father:"KHHJ-65L",mother:"KNQC-CSQ",spouses:["GDWM-CRK","unscraped"],children:["L4WG-JVP",null]},"K4NQ-6NM":{first:'Johannes "John"',last:"Neff",dates:"1814-1865",father:"KZKX-SNZ",mother:"LCRT-283",spouses:["LRS1-VQQ","unscraped"],children:["LR39-TVG",null]},"LRS1-VQQ":{first:"Mary",last:"Buckwalter",dates:"1819-1896",father:"2MGL-GTZ",mother:"2MGL-P7Y",spouses:["K4NQ-6NM","unscraped"],children:["LR39-TVG",null]},"MKBH-31R":{first:"Jacob",last:"Otto",dates:"1830-1875",father:"GX6Z-8DF",mother:"GX6Z-DXC",spouses:["MKBH-QM6","unscraped"],children:["LR3S-Z1D",null]},"MKBH-QM6":{first:"Amanda",last:"Rinehardt",dates:"1834-1899",father:"GX6Z-816",mother:"L15V-8XV",spouses:["MKBH-31R","unscraped"],children:["LR3S-Z1D",null]},"KH9L-NR3":{first:"Jacob",last:"Kraemer",dates:"1813-Deceased",father:null,mother:null,spouses:["K8S9-1X1","unscraped"],children:["M615-WMG",null]},"K8S9-1X1":{first:"Elisabeth, K...",last:"Edelmann",dates:"1816-Deceased",father:null,mother:null,spouses:["KH9L-NR3","unscraped"],children:["M615-WMG",null]},"L5VB-KSX":{first:"Johann Georg",last:"Seeger",dates:"1818-1892",father:"M8ZM-HJL",mother:"M8ZM-HRC",spouses:["L5VB-4VK","unscraped"],children:["L2GQ-42T",null]},"L5VB-4VK":{first:"Elisabetha C...",last:"Grimmelbein",dates:"1812-1864",father:"L5VB-DCN",mother:"L5VB-W6G",spouses:["L5VB-KSX","unscraped"],children:["L2GQ-42T",null]},"M5LF-QBY":{first:"Elisabetha B...",last:"Schallert",dates:"1818-1879",father:"G96Q-NSW",mother:"M5LX-BS6",spouses:["G96Q-P1X","unscraped"],children:["GDMS-NW9",null]},"M5LF-2G3":{first:"Johann Christan",last:"Voltz",dates:"1835-1876",father:"LR6W-37X",mother:"LR6W-372",spouses:["941H-KFR","unscraped"],children:["GKTH-HTL",null]},"K418-M9G":{first:"Johannes",last:"Trayser",dates:"1833-1902",father:null,mother:"LRDK-W9T",spouses:["LRDV-D5C","unscraped"],children:["M5MS-SLH",null]},"LRDV-D5C":{first:"Anna Katharina",last:"Schallert",dates:"1835-1908",father:"LRD6-MXV",mother:"M5LX-B32",spouses:["K418-M9G","unscraped"],children:["M5MS-SLH",null]},"LJK8-6VQ":{first:"George",last:"Hixson",dates:"1820-1899",father:"LJKZ-2K7",mother:"MD8M-CYK",spouses:["LJKZ-KL9","unscraped"],children:["L1CW-F1T",null]},"LJKZ-KL9":{first:"Margaret Reb...",last:"Young",dates:"1828-1908",father:"LHRR-1H8",mother:"MNSS-P69",spouses:["LJK8-6VQ","unscraped"],children:["L1CW-F1T",null]},"LZLV-FDY":{first:"Aaron",last:"Washburn",dates:"1826-1876",father:"KJPW-LGP",mother:"KHNM-YXH",spouses:["LZLV-FFZ","unscraped"],children:["LT9R-5XT",null]},"LZLV-FFZ":{first:"Elizabeth",last:"Boyer",dates:"1832-1914",father:"2CNL-CSH",mother:"2CNL-CMT",spouses:["LZLV-FDY","unscraped"],children:["LT9R-5XT",null]},"LH2H-CF8":{first:"Daniel",last:"Rissmiller",dates:"1805-1888",father:"KCLH-ZL1",mother:"K465-4D9",spouses:["LH2H-CC1","unscraped"],children:["LH2C-978",null]},"LH2H-CC1":{first:"Louisa",last:"Werner",dates:"1810-1863",father:"KDW6-JSP",mother:"LHZ3-NDM",spouses:["LH2H-CF8","unscraped"],children:["LH2C-978",null]},"LZ5M-BHF":{first:"Sarah E.",last:"Reinhard",dates:"1840-1909",father:"LTJX-7SN",mother:"LTJX-73W",spouses:["G3JB-CDY","unscraped"],children:["LH2C-97X",null]},"LRZT-2RZ":{first:"Jacob L",last:"Thomas",dates:"1825-1899",father:"LVX9-NCD",mother:"LKDP-MRN",spouses:["KF57-264","unscraped"],children:["29WR-ZSZ",null]},"KF57-264":{first:"Catherine",last:"Ream",dates:"1828-1915",father:"LBQT-5W9",mother:"L4BM-FFD",spouses:["LRZT-2RZ","unscraped"],children:["29WR-ZSZ",null]},"LB8D-STZ":{first:"Michael",last:"Miller",dates:"1830-1918",father:"27MP-XHH",mother:"L7P3-9H4",spouses:["LJKV-BMV","unscraped"],children:["KH28-WG9",null]},"LJKV-BMV":{first:"Hannah",last:"Beneigh",dates:"1834-1911",father:"L2R2-KJM",mother:"L2R2-PJS",spouses:["LB8D-STZ","unscraped"],children:["KH28-WG9",null]},"LWMH-N8M":{first:"Jacob C.",last:"Wingard",dates:"1802-1880",father:"K2H1-2SC",mother:"LZVR-5NT",spouses:["K2H1-5WS","unscraped"],children:["KP4D-CZQ",null]},"K2H1-5WS":{first:"Mary",last:"Lehman",dates:"1800-1882",father:"LDLP-KR4",mother:"KLGN-VTX",spouses:["LWMH-N8M","unscraped"],children:["KP4D-CZQ",null]},"KP4D-CBG":{first:"Christian",last:"Weaver",dates:"1813-1877",father:"K2FK-PQ9",mother:"K2FK-PQ6",spouses:["KP4D-ZLH","unscraped"],children:["KP4D-C6T",null]},"KP4D-ZLH":{first:"Lydia",last:"Miller",dates:"1809-1847",father:"LZV1-BV5",mother:"LZV1-BFW",spouses:["KP4D-CBG","unscraped"],children:["KP4D-C6T",null]},"2BJ5-3RP":{first:"Henry Musser",last:"Shenk",dates:"1842-1917",father:"K415-T5Q",mother:"29C7-3HW",spouses:["2BJ5-3BR"],children:["LHP4-9SG"]},"2BJ5-3BR":{first:"Susanna Brub...",last:"Horst",dates:"1850-1923",father:"LC5D-BX1",mother:"2Z89-2Q3",spouses:["2BJ5-3RP"],children:["LHP4-9SG"]},"L9HS-C8Y":{first:"Samuel Hess",last:"Erb",dates:"1841-1907",father:"LCXQ-QLQ",mother:"K26K-32T",spouses:["KCCS-N1K"],children:["LHP4-9CJ"]},"KCCS-N1K":{first:"Esther Mae",last:"Zimmerman",dates:"1846-1898",father:"L9HS-ZD2",mother:"L9HS-ZC2",spouses:["L9HS-C8Y"],children:["LHP4-9CJ"]},"GJD4-2CL":{first:"Elias",last:"Groff",dates:"Deceased",father:null,mother:null,spouses:["GJD4-FXP"],children:["L7FZ-R1Z"]},"GJD4-FXP":{first:"Mary",last:"Herr",dates:"Deceased",father:null,mother:null,spouses:["GJD4-2CL"],children:["L7FZ-R1Z"]},"G4L8-NGC":{first:"Rev Abraham H.",last:"Brubaker",dates:"1846-1916",father:"9WKV-CM9",mother:"LZ2D-BZX",spouses:["2BVC-LGJ"],children:["2YGZ-DX8"]},"2BVC-LGJ":{first:"Anna M.",last:"Bowman",dates:"1846-1924",father:"LH6D-2TZ",mother:"LHSP-KKJ",spouses:["G4L8-NGC"],children:["2YGZ-DX8"]},"LBZ8-SMJ":{first:"Tobias Denli...",last:"Leaman",dates:"1853-1931",father:"LC7J-N3Z",mother:"LQ5R-YYX",spouses:["LBZZ-YVR"],children:["LHFK-9KZ"]},"LBZZ-YVR":{first:"Susan Landis",last:"Groff",dates:"1858-1940",father:"LHZ7-L4F",mother:"LHZ7-LCY",spouses:["LBZ8-SMJ"],children:["LHFK-9KZ"]},"KP7Z-F3J":{first:"Daniel Kreider",last:"Denlinger",dates:"1850-1935",father:"LCX5-N9M",mother:"LCX5-NQ8",spouses:["KP7Z-FJ7"],children:["K2VQ-6D5"]},"KP7Z-FJ7":{first:"Esther Martin",last:"Hershey",dates:"1855-1910",father:"LC6B-KG7",mother:"LC6B-L7Y",spouses:["KP7Z-F3J"],children:["K2VQ-6D5"]},"LHPV-3RP":{first:"Elias Buckwa...",last:"Groff",dates:"1856-1922",father:"L7XM-TYT",mother:"L7XM-BZM",spouses:["L4WG-JVP"],children:["L2HF-YFH"]},"L4WG-JVP":{first:"Susanna H.",last:"Brubaker",dates:"1856-1927",father:"L4WR-G6X",mother:"GDWM-CRK",spouses:["LHPV-3RP"],children:["L2HF-YFH"]},"LR39-TVG":{first:"Harry Buckwa...",last:"Neff",dates:"1846-1928",father:"K4NQ-6NM",mother:"LRS1-VQQ",spouses:["LR3S-Z1D"],children:["L2HN-JZP"]},"LR3S-Z1D":{first:"Mary Elnoro",last:"Otto",dates:"1857-1923",father:"MKBH-31R",mother:"MKBH-QM6",spouses:["LR39-TVG"],children:["L2HN-JZP"]},"GR43-QD1":{first:"Georg Peter",last:"Neff",dates:"1838-1913",father:null,mother:null,spouses:["M615-WMG"],children:["GR43-HBF"]},"M615-WMG":{first:"Elisabeth, K...",last:"Kraemer",dates:"1841-Deceased",father:"KH9L-NR3",mother:"K8S9-1X1",spouses:["GR43-QD1"],children:["GR43-HBF"]},"L2GQ-42T":{first:"Georg",last:"Seeger",dates:"1848-1924",father:"L5VB-KSX",mother:"L5VB-4VK",spouses:["GDMS-NW9"],children:["LB3F-WDX"]},"GDMS-NW9":{first:"Katharina",last:"Semmler",dates:"1860-1929",father:"G96Q-P1X",mother:"M5LF-QBY",spouses:["L2GQ-42T"],children:["LB3F-WDX"]},"GKTH-HTL":{first:"Johann Chris...",last:"Voltz II",dates:"1866-Deceased",father:"M5LF-2G3",mother:"941H-KFR",spouses:["M5MS-SLH"],children:["GKT9-DGF"]},"M5MS-SLH":{first:"Philippine E...",last:"Trayser",dates:"1870-1893",father:"K418-M9G",mother:"LRDV-D5C",spouses:["GKTH-HTL"],children:["GKT9-DGF"]},"L1CW-F1T":{first:"Isaiah",last:"Hixson",dates:"1861-1936",father:"LJK8-6VQ",mother:"LJKZ-KL9",spouses:["LT9R-5XT"],children:["LH2C-93S"]},"LT9R-5XT":{first:"Mary A",last:"Washburn",dates:"1864-1910",father:"LZLV-FDY",mother:"LZLV-FFZ",spouses:["L1CW-F1T"],children:["LH2C-93S"]},"LH2C-978":{first:"Josiah",last:"Rissmiller",dates:"1850-1921",father:"LH2H-CF8",mother:"LH2H-CC1",spouses:["LH2C-97X"],children:["LH2C-MXL"]},"LH2C-97X":{first:"Ellena",last:"Gehman",dates:"1854-1903",father:"G3JB-CDY",mother:"LZ5M-BHF",spouses:["LH2C-978"],children:["LH2C-MXL"]},"29WR-ZSZ":{first:"Henry John",last:"Thomas",dates:"1856-1924",father:"LRZT-2RZ",mother:"KF57-264",spouses:["KH28-WG9"],children:["MS2Y-36X"]},"KH28-WG9":{first:"Christina",last:"Miller",dates:"1859-1935",father:"LB8D-STZ",mother:"LJKV-BMV",spouses:["29WR-ZSZ"],children:["MS2Y-36X"]},"KP4D-CZQ":{first:"John J",last:"Wingard",dates:"1836-1923",father:"LWMH-N8M",mother:"K2H1-5WS",spouses:["KP4D-C6T"],children:["LRSC-QM3"]},"KP4D-C6T":{first:"Susan",last:"Weaver",dates:"1838-1924",father:"KP4D-CBG",mother:"KP4D-ZLH",spouses:["KP4D-CZQ"],children:["LRSC-QM3"]},"LHP4-9SG":{first:"Benjamin Horst",last:"Shenk",dates:"1881-1970",father:"2BJ5-3RP",mother:"2BJ5-3BR",spouses:["LHP4-9CJ"],children:["L1YR-2L2"]},"LHP4-9CJ":{first:"Ella Zimmerman",last:"Erb",dates:"1886-1960",father:"L9HS-C8Y",mother:"KCCS-N1K",spouses:["LHP4-9SG"],children:["L1YR-2L2"]},"L7FZ-R1Z":{first:"Enos H.",last:"Groff",dates:"1864-1940",father:"GJD4-2CL",mother:"GJD4-FXP",spouses:["2YGZ-DX8"],children:["L2ZG-8L5"]},"2YGZ-DX8":{first:"Martha E.",last:"Brubaker",dates:"1873-1964",father:"G4L8-NGC",mother:"2BVC-LGJ",spouses:["L7FZ-R1Z"],children:["L2ZG-8L5"]},"LHFK-9KZ":{first:"Benjamin Franklin",last:"Leaman",dates:"1879-1953",father:"LBZ8-SMJ",mother:"LBZZ-YVR",spouses:["K2VQ-6D5"],children:["L4VQ-VX3"]},"K2VQ-6D5":{first:"Elizabeth Hershey",last:"Denlinger",dates:"1880-1976",father:"KP7Z-F3J",mother:"KP7Z-FJ7",spouses:["LHFK-9KZ"],children:["L4VQ-VX3"]},"L2HF-YFH":{first:"Christian Brub...",last:"Groff",dates:"1879-1946",father:"LHPV-3RP",mother:"L4WG-JVP",spouses:["L2HN-JZP"],children:["L2HN-J8J"]},"L2HN-JZP":{first:"Emma E.",last:"Neff",dates:"1880-1924",father:"LR39-TVG",mother:"LR3S-Z1D",spouses:["L2HF-YFH"],children:["L2HN-J8J"]},"GR4S-5G9":{first:"Peter",last:"Belzner",dates:"Deceased",father:null,mother:null,spouses:["GR43-HBF"],children:["GR49-G58"]},"GR43-HBF":{first:"Elisabeth",last:"Neff",dates:"Deceased",father:"GR43-QD1",mother:"M615-WMG",spouses:["GR4S-5G9"],children:["GR49-G58"]},"LB3F-WDX":{first:"Philipp",last:"Seeger",dates:"1890-1955",father:"L2GQ-42T",mother:"GDMS-NW9",spouses:["GKT9-DGF"],children:["GKT9-YVL"]},"GKT9-DGF":{first:"Anna Margaretha",last:"Voltz",dates:"1892-Deceased",father:"GKTH-HTL",mother:"M5MS-SLH",spouses:["LB3F-WDX"],children:["GKT9-YVL"]},"LH2C-93S":{first:"Ralph Washburn",last:"Hixson",dates:"1892-1918",father:"L1CW-F1T",mother:"LT9R-5XT",spouses:["LH2C-MXL"],children:["LH2C-9QP"]},"LH2C-MXL":{first:"Eva May",last:"Rissmiller",dates:"1893-1972",father:"LH2C-978",mother:"LH2C-97X",spouses:["LH2C-93S"],children:["LH2C-9QP"]},"MS2Y-36X":{first:"John Henry",last:"Thomas",dates:"1881-1963",father:"29WR-ZSZ",mother:"KH28-WG9",spouses:["LRSC-QM3"],children:["L1NB-TSW"]},"LRSC-QM3":{first:"Maria",last:"Wingard",dates:"1874-1955",father:"KP4D-CZQ",mother:"KP4D-C6T",spouses:["MS2Y-36X"],children:["L1NB-TSW"]},"L1YR-2L2":{first:"Henry Erb",last:"Shenk",dates:"1908-1988",father:"LHP4-9SG",mother:"LHP4-9CJ",spouses:["L2ZG-8L5"],children:["GR4M-8D8"]},"L2ZG-8L5":{first:"Margaret B",last:"Groff",dates:"1909-1990",father:"L7FZ-R1Z",mother:"2YGZ-DX8",spouses:["L1YR-2L2"],children:["GR4M-8D8"]},"L4VQ-VX3":{first:"Sanford Denlinger",last:"Leaman",dates:"1902-1994",father:"LHFK-9KZ",mother:"K2VQ-6D5",spouses:["L2HN-J8J"],children:["GRPV-Q1K"]},"L2HN-J8J":{first:"Mary Neff",last:"Groff",dates:"1903-1998",father:"L2HF-YFH",mother:"L2HN-JZP",spouses:["L4VQ-VX3"],children:["GRPV-Q1K"]},"GR49-G58":{first:"Friedrich Ludwig",last:"Belzner",dates:"1902-Deceased",father:"GR4S-5G9",mother:"GR43-HBF",spouses:["GKT9-YVL"],children:["GGGL-BRV"]},"GKT9-YVL":{first:"Anna Margaretha",last:"Seeger",dates:"1909-2002",father:"LB3F-WDX",mother:"GKT9-DGF",spouses:["GR49-G58"],children:["GGGL-BRV"]},"LH2C-9QP":{first:"Dale Willard",last:"Hixson",dates:"1915-1996",father:"LH2C-93S",mother:"LH2C-MXL",spouses:["L1NB-TSW"],children:["G3LD-5QK"]},"L1NB-TSW":{first:"Mary Esther",last:"Thomas",dates:"1917-2015",father:"MS2Y-36X",mother:"LRSC-QM3",spouses:["LH2C-9QP"],children:["G3LD-5QK"]},"GR4M-8D8":{first:"Henry Groff",last:"Shenk",dates:"1934-2024",father:"L1YR-2L2",mother:"L2ZG-8L5",spouses:["GRPV-Q1K"],children:["GGGG-4NN"]},"GRPV-Q1K":{first:"Irene Groff",last:"Leaman",dates:"1935-Living",father:"L4VQ-VX3",mother:"L2HN-J8J",spouses:["GR4M-8D8"],children:["GGGG-4NN"]},"GGGL-BRV":{first:"Wilhelm Friedrich",last:"Belzner",dates:"1940-1997",father:"GR49-G58",mother:"GKT9-YVL",spouses:["G3LD-5QK"],children:["GGGL-18B"]},"G3LD-5QK":{first:"Sylvia Ann",last:"Hixson",dates:"1939-2012",father:"LH2C-9QP",mother:"L1NB-TSW",spouses:["GGGL-BRV"],children:["GGGL-18B"]},"GGGG-4NN":{first:"Mervin",last:"Shenk",dates:"1963-Living",father:"GR4M-8D8",mother:"GRPV-Q1K",spouses:["GGGL-18B"],children:["GGGL-BWJ"]},"GGGL-18B":{first:"Angela",last:"Belzner",dates:"1970-Living",father:"GGGL-BRV",mother:"G3LD-5QK",spouses:["GGGG-4NN"],children:["GGGL-BWJ"]},"GGGL-BWJ":{first:"Philip",last:"Shenk",dates:"1998-Living",father:"GGGG-4NN",mother:"GGGL-18B",spouses:["unscraped"],children:[null]},"LJG3-3VJ":{first:"Samuel",last:"Hess",dates:"1657-1744",father:"L6J8-H4K",mother:"L1WL-HM4",spouses:["L5LC-9ZD"],children:["LBJF-X1F"]},"L5LC-9ZD":{first:"Anna Barbel",last:"Reimann",dates:"1661-1769",father:"GZNG-XYG",mother:"L14F-X41",spouses:["LJG3-3VJ"],children:["LBJF-X1F"]},"GG92-XSY":{first:"",last:"Zindell",dates:"Deceased",father:null,mother:null,spouses:["G14V-DJQ"],children:["L19M-FMG"]},"G14V-DJQ":{first:"Mrs",last:"Zindell",dates:"Deceased",father:null,mother:null,spouses:["GG92-XSY"],children:["L19M-FMG"]},"LYB6-B99":{first:"Hans Jacob",last:"Bar",dates:"",father:"unscraped",mother:"unscraped",spouses:["GDDM-4NL"],children:["LTKZ-SHJ"]},"GDDM-4NL":{first:"Verena",last:"Huber",dates:"",father:"unscraped",mother:"unscraped",spouses:["LYB6-B99"],children:["LTKZ-SHJ"]},"GTTD-JR5":{first:"Isaac",last:"Frederick",dates:"",father:"unscraped",mother:"unscraped",spouses:["L5X6-H64"],children:["L58H-C8G"]},"L5X6-H64":{first:"Maria",last:"Baer",dates:"",father:"unscraped",mother:"unscraped",spouses:["GTTD-JR5"],children:["L58H-C8G"]},"KZPZ-MBD":{first:"Heinrich",last:"Landis",dates:"",father:"unscraped",mother:"unscraped",spouses:["GFT3-R1J"],children:["KHFJ-54S"]},"GFT3-R1J":{first:"Verena",last:"Schneider",dates:"",father:"unscraped",mother:"unscraped",spouses:["KZPZ-MBD"],children:["KHFJ-54S"]},"LX34-KZH":{first:"Hans Jacob",last:"Kündig",dates:"",father:"unscraped",mother:"unscraped",spouses:["9X6P-ZZL"],children:["LW3R-Q1M"]},"9X6P-ZZL":{first:"Elsbeth Jane",last:"Meili",dates:"",father:"unscraped",mother:"unscraped",spouses:["LX34-KZH"],children:["LW3R-Q1M"]},"9XTK-BKZ":{first:"Valentin",last:"Hörnlein",dates:"",father:"unscraped",mother:"unscraped",spouses:["274Z-FD7"],children:["MTC3-2W1"]},"274Z-FD7":{first:"Maria Margar...",last:"Münch",dates:"",father:"unscraped",mother:"unscraped",spouses:["9XTK-BKZ"],children:["MTC3-2W1"]},"KLXN-ZVK":{first:"Jacob",last:"Reusser",dates:"",father:"unscraped",mother:"unscraped",spouses:["K4JF-18B"],children:["L4MS-DT5"]},"K4JF-18B":{first:"Anna",last:"Meier",dates:"",father:"unscraped",mother:"unscraped",spouses:["KLXN-ZVK"],children:["L4MS-DT5"]},"L7F9-WRY":{first:"Hans",last:"Reüsser",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6DT-RV8"],children:["L5NK-LFG"]},"L6DT-RV8":{first:"Catharina",last:"Roethlisberger",dates:"",father:"unscraped",mother:"unscraped",spouses:["L7F9-WRY"],children:["L5NK-LFG"]},"KC91-3M6":{first:"Hans Heinric...",last:"Brunner",dates:"",father:"unscraped",mother:"unscraped",spouses:["K8QN-RH6"],children:["LCZF-Q4H"]},"K8QN-RH6":{first:"Anna",last:"Brunner",dates:"",father:"unscraped",mother:"unscraped",spouses:["KC91-3M6"],children:["LCZF-Q4H"]},"LDZG-MVR":{first:"Jacob Reisz",last:"Schneider",dates:"",father:"unscraped",mother:"unscraped",spouses:["GXQH-QNB"],children:["GXQH-KPH"]},"GXQH-QNB":{first:"Anna Marie",last:"Muller",dates:"",father:"unscraped",mother:"unscraped",spouses:["LDZG-MVR"],children:["GXQH-KPH"]},"GZ3G-J5S":{first:"Josephus",last:"Schmidt",dates:"",father:"unscraped",mother:"unscraped",spouses:["GZ3G-FHD"],children:["LDZL-YB9"]},"GZ3G-FHD":{first:"Anna Maria C...",last:"Koek-Dautel",dates:"",father:"unscraped",mother:"unscraped",spouses:["GZ3G-J5S"],children:["LDZL-YB9"]},"LBJF-X1F":{first:"Hans",last:"Hess",dates:"1683-1733",father:"LJG3-3VJ",mother:"L5LC-9ZD",spouses:["L19M-FMG","L19M-FMG"],children:["LH1C-VT9","LBBH-KZ5"]},"L19M-FMG":{first:"Maria Magdalena",last:"Zindell",dates:"1688-1767",father:"GG92-XSY",mother:"G14V-DJQ",spouses:["LBJF-X1F","LBJF-X1F"],children:["LH1C-VT9","LBBH-KZ5"]},"LTKZ-SHJ":{first:"Hans Jakob",last:"Bär",dates:"1677-1759",father:"LYB6-B99",mother:"GDDM-4NL",spouses:["L58H-C8G","L58H-C8G"],children:["LTCG-WRT","GPPS-CDD"]},"L58H-C8G":{first:"Anna Barbara",last:"Friedrich",dates:"1680-1759",father:"GTTD-JR5",mother:"L5X6-H64",spouses:["LTKZ-SHJ","LTKZ-SHJ"],children:["LTCG-WRT","GPPS-CDD"]},"LRXJ-8KK":{first:"Hans",last:"Groff",dates:"1661-1746",father:"LVKS-GSX",mother:"KZ9L-M8T",spouses:["LW3R-Q1M","LW3R-Q1M","LW3R-Q1M","LW3R-Q1M","LW3R-Q1M"],children:["KZ33-KKM","LJY7-W4V","LY4T-49S","L6WN-D56","LCTT-GJ7"]},"LW3R-Q1M":{first:"Susanna",last:"Kündig",dates:"1680-1746",father:"LX34-KZH",mother:"9X6P-ZZL",spouses:["LRXJ-8KK","LRXJ-8KK","LRXJ-8KK","LRXJ-8KK","LRXJ-8KK"],children:["KZ33-KKM","LJY7-W4V","LY4T-49S","L6WN-D56","LCTT-GJ7"]},"MTC3-2W1":{first:"Hans Dieterich",last:"Hörnlein",dates:"1679-Deceased",father:"9XTK-BKZ",mother:"274Z-FD7",spouses:[null],children:["LVPV-6D6"]},"L4MS-DT5":{first:"Hans",last:"Reusser",dates:"1638-1685",father:"KLXN-ZVK",mother:"K4JF-18B",spouses:["L5NK-LFG"],children:["LHZS-RH3"]},"L5NK-LFG":{first:"Verena",last:"Reusser",dates:"1651-1685",father:"L7F9-WRY",mother:"L6DT-RV8",spouses:["L4MS-DT5"],children:["LHZS-RH3"]},"GHJZ-13Q":{first:"Peter Hans",last:"Lehman",dates:"1678-1720",father:null,mother:null,spouses:["G6J6-CRX"],children:["GLRT-36G"]},"G6J6-CRX":{first:"Magdalena",last:"Light",dates:"1678-1691",father:null,mother:null,spouses:["GHJZ-13Q"],children:["GLRT-36G"]},"LRHX-KCV":{first:"Abraham",last:"Egli",dates:"1670-1740",father:null,mother:null,spouses:["LCZF-Q4H"],children:["LZGQ-B9X"]},"LCZF-Q4H":{first:"Adeli",last:"Brunneri",dates:"1670-1750",father:"KC91-3M6",mother:"K8QN-RH6",spouses:["LRHX-KCV"],children:["LZGQ-B9X"]},"GXQH-KPH":{first:"Jacob Muller",last:"Schneider",dates:"1663-1727",father:"LDZG-MVR",mother:"GXQH-QNB",spouses:["LDZL-YB9"],children:["LJK2-H5G"]},"LDZL-YB9":{first:"Veronica",last:"Schmidt",dates:"1662-1723",father:"GZ3G-J5S",mother:"GZ3G-FHD",spouses:["GXQH-KPH"],children:["LJK2-H5G"]},"LH1C-VT9":{first:"Jacob",last:"Hess",dates:"1706-1741",father:"LBJF-X1F",mother:"L19M-FMG",spouses:["LTCG-WRT"],children:["LC32-CNZ"]},"LTCG-WRT":{first:"Veronica",last:"Bär",dates:"1707-1760",father:"LTKZ-SHJ",mother:"L58H-C8G",spouses:["LH1C-VT9"],children:["LC32-CNZ"]},"LTXH-CXG":{first:"Heinrich",last:"Landis",dates:"1700-1760",father:"KHFJ-54S",mother:"LR58-5K6",spouses:["KZ33-KKM"],children:["L47B-R76"]},"KZ33-KKM":{first:"Veronica",last:"Groff",dates:"1710-1751",father:"LRXJ-8KK",mother:"LW3R-Q1M",spouses:["LTXH-CXG"],children:["L47B-R76"]},"LVPV-6D6":{first:"John Ulrich",last:"Horn",dates:"1700-1784",father:"MTC3-2W1",mother:null,spouses:["KHPL-L6B"],children:["LCJ5-7N7"]},"KHPL-L6B":{first:"Catharine",last:"Hoernli",dates:"1703-1813",father:null,mother:null,spouses:["LVPV-6D6"],children:["LCJ5-7N7"]},"LHZS-RH3":{first:"Hans Johannes",last:"Risser",dates:"1680-1725",father:"L4MS-DT5",mother:"L5NK-LFG",spouses:["GLRT-36G"],children:["L6BB-ZXR"]},"GLRT-36G":{first:"Brennemann",last:"Lehman",dates:"1691-1725",father:"GHJZ-13Q",mother:"G6J6-CRX",spouses:["LHZS-RH3"],children:["L6BB-ZXR"]},"L6BB-ZR4":{first:"Christian",last:"Hershey",dates:"1692-1745",father:"LRGN-W4J",mother:"93JZ-DX9",spouses:["LZGQ-B9X"],children:["L8WZ-4CY"]},"LZGQ-B9X":{first:"Esther",last:"Egli",dates:"1695-1792",father:"LRHX-KCV",mother:"LCZF-Q4H",spouses:["L6BB-ZR4"],children:["L8WZ-4CY"]},"LJK2-H5G":{first:"Johannes Jacob",last:"SCHNEIDER",dates:"1697-1763",father:"GXQH-KPH",mother:"LDZL-YB9",spouses:["L6LV-3BH"],children:["LKQX-9LT"]},"L6LV-3BH":{first:"Susanna Veronica",last:"Bauman",dates:"1700-1745",father:null,mother:null,spouses:["LJK2-H5G"],children:["LKQX-9LT"]},"LDFL-R3C":{first:"Andrew",last:"Hershey",dates:"1702-1792",father:"LRGN-W4J",mother:"93JZ-DX9",spouses:["29H3-QH7","29H3-QH7"],children:["LDNB-NRN","97QZ-9R1"]},"29H3-QH7":{first:"Mary Catharine",last:"Kreiter",dates:"1706-Deceased",father:null,mother:null,spouses:["LDFL-R3C","LDFL-R3C"],children:["LDNB-NRN","97QZ-9R1"]},"LC32-CNZ":{first:"Johannes",last:"Hess",dates:"1735-1778",father:"LH1C-VT9",mother:"LTCG-WRT",spouses:["L47B-R76"],children:["LCJ5-7NL"]},"L47B-R76":{first:"Susanna",last:"Landis",dates:"1734-1811",father:"LTXH-CXG",mother:"KZ33-KKM",spouses:["LC32-CNZ"],children:["LCJ5-7NL"]},"L5X8-RQ3":{first:"Christian “Lan...",last:"HERSHEY",dates:"1719-1782",father:"LVPT-WDR",mother:"LZGB-VV7",spouses:["LCJ5-7N7"],children:["LCX7-M82"]},"LCJ5-7N7":{first:"Anna",last:"Hernley",dates:"1737-1812",father:"LVPV-6D6",mother:"KHPL-L6B",spouses:["L5X8-RQ3"],children:["LCX7-M82"]},"L6BB-ZXR":{first:"Reverend Peter...",last:"Risser",dates:"1713-1804",father:"LHZS-RH3",mother:"GLRT-36G",spouses:["L8WZ-4CY"],children:["LDJK-G2D"]},"L8WZ-4CY":{first:"Elizabeth Egli",last:"Hershey",dates:"1714-1786",father:"L6BB-ZR4",mother:"LZGQ-B9X",spouses:["L6BB-ZXR"],children:["LDJK-G2D"]},"LKQX-9LT":{first:"Hans Jacob Bauman",last:"Schneider",dates:"1727-1803",father:"LJK2-H5G",mother:"L6LV-3BH",spouses:["LDNB-NRN"],children:["2XL5-5YV"]},"LDNB-NRN":{first:"Maria or Mary",last:"Hershey",dates:"1730-1798",father:"LDFL-R3C",mother:"29H3-QH7",spouses:["LKQX-9LT"],children:["2XL5-5YV"]},"LCJ5-7NL":{first:"Preacher Johanne...",last:"Hess",dates:"1768-1830",father:"LC32-CNZ",mother:"L47B-R76",spouses:["LCX7-M82"],children:["K26K-31T"]},"LCX7-M82":{first:"Esther",last:"Hershey",dates:"1769-1824",father:"L5X8-RQ3",mother:"LCJ5-7N7",spouses:["LCJ5-7NL"],children:["K26K-31T"]},"LDJK-G2D":{first:"Jacob",last:"Risser",dates:"1764-1835",father:"L6BB-ZXR",mother:"L8WZ-4CY",spouses:["2XL5-5YV"],children:["K26K-QQT"]},"2XL5-5YV":{first:"Mary Hershey",last:"Schneider",dates:"1762-1843",father:"LKQX-9LT",mother:"LDNB-NRN",spouses:["LDJK-G2D"],children:["K26K-QQT"]},"K26K-31T":{first:"John Hershey",last:"Hess",dates:"1791-1831",father:"LCJ5-7NL",mother:"LCX7-M82",spouses:["K26K-QQT"],children:["K26K-32T"]},"K26K-QQT":{first:"Elizabeth",last:"Risser",dates:"1794-1879",father:"LDJK-G2D",mother:"2XL5-5YV",spouses:["K26K-31T"],children:["K26K-32T"]},"GNCQ-YTH":{first:"Benedict",last:"Lehmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZTG-WVP"],children:["LVC3-182"]},"LZTG-WVP":{first:"Veronica",last:"Staubs",dates:"",father:"unscraped",mother:"unscraped",spouses:["GNCQ-YTH"],children:["LVC3-182"]},"96H7-4MB":{first:"Ulrich",last:"Jost",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZZ6-PH2"],children:["LCRS-TJG"]},"LZZ6-PH2":{first:"Magdalena",last:"Gfellar",dates:"",father:"unscraped",mother:"unscraped",spouses:["96H7-4MB"],children:["LCRS-TJG"]},"L1FP-JC5":{first:"Luther Wyatt",last:"Müller",dates:"",father:"unscraped",mother:"unscraped",spouses:["LX74-TZF"],children:["GM51-9FZ"]},"LX74-TZF":{first:"Frances",last:"Walker",dates:"",father:"unscraped",mother:"unscraped",spouses:["L1FP-JC5"],children:["GM51-9FZ"]},"LJ6Y-B59":{first:"Ray",last:"Rogers",dates:"",father:"unscraped",mother:"unscraped",spouses:["LTKG-MLC"],children:["LDL6-SQN"]},"LTKG-MLC":{first:"Donna",last:"Maiden Rogers",dates:"",father:"unscraped",mother:"unscraped",spouses:["LJ6Y-B59"],children:["LDL6-SQN"]},"LV4J-2DQ":{first:"Hans Adam",last:"Miller",dates:"",father:"unscraped",mother:"unscraped",spouses:["MNYJ-9CB"],children:["GSYD-X27"]},"MNYJ-9CB":{first:"Anna Ottilia",last:"Saachen",dates:"",father:"unscraped",mother:"unscraped",spouses:["LV4J-2DQ"],children:["GSYD-X27"]},"K2N3-HYW":{first:"Johannes Jacob",last:"Batdorf",dates:"",father:"unscraped",mother:"unscraped",spouses:["K2N3-HBH"],children:["LZF9-2XQ"]},"K2N3-HBH":{first:"Elisabetha C...",last:"Zeller",dates:"",father:"unscraped",mother:"unscraped",spouses:["K2N3-HYW"],children:["LZF9-2XQ"]},"LHP9-FS7":{first:"Joachim",last:"Walborn",dates:"",father:"unscraped",mother:"unscraped",spouses:["L28G-VQ9"],children:["LY8C-JWS"]},"L28G-VQ9":{first:"Anna Maria",last:"Zeitz",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHP9-FS7"],children:["LY8C-JWS"]},"GDJM-6SB":{first:"Johann Peter",last:"Zietz",dates:"",father:"unscraped",mother:"unscraped",spouses:["GDJM-6KF"],children:["KND9-6QC"]},"GDJM-6KF":{first:"Anna Marie",last:"Risch",dates:"",father:"unscraped",mother:"unscraped",spouses:["GDJM-6SB"],children:["KND9-6QC"]},"GWV3-SVG":{first:"",last:"Karthonitz",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["LDFZ-NT5"]},"GWV3-Y56":{first:"",last:"Euphrosina",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["LDFZ-NRG"]},"GFC9-NY4":{first:"Hieronymus",last:"Borntraeger",dates:"",father:"unscraped",mother:"unscraped",spouses:["G128-X6J"],children:["LZP5-HP8"]},"G128-X6J":{first:"Elisabetha J...",last:"Lips",dates:"",father:"unscraped",mother:"unscraped",spouses:["GFC9-NY4"],children:["LZP5-HP8"]},"K69W-JSB":{first:"Michael",last:"Eckele",dates:"",father:"unscraped",mother:"unscraped",spouses:["GKWL-VB7"],children:["KN1W-KK3"]},"GKWL-VB7":{first:"Anna",last:"Erbin",dates:"",father:"unscraped",mother:"unscraped",spouses:["K69W-JSB"],children:["KN1W-KK3"]},"M3RQ-WKC":{first:"Heinrich",last:"Antebringer",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-9YT"],children:["M3RQ-WND"]},"G3G5-9YT":{first:"Maria",last:"Mayer",dates:"",father:"unscraped",mother:"unscraped",spouses:["M3RQ-WKC"],children:["M3RQ-WND"]},"G3G5-M5K":{first:"Wilhelm",last:"Andbachter",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-449"],children:["G3G5-9YG"]},"G3G5-449":{first:"Katherina",last:"Shultz",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-M5K"],children:["G3G5-9YG"]},"G3G5-N2H":{first:"Casper",last:"Hanaur",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-C6G"],children:["G3G5-824"]},"G3G5-C6G":{first:"Anna",last:"Bowne",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-N2H"],children:["G3G5-824"]},"G3G5-L3F":{first:"James",last:"Hannes",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-DW1"],children:["G3G5-83N"]},"G3G5-DW1":{first:"Mary",last:"Hess",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-L3F"],children:["G3G5-83N"]},"G3G5-9D7":{first:"Michael",last:"Klink",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-N23"],children:["G3G5-44Q"]},"G3G5-N23":{first:"Theresa",last:"Hauser",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-9D7"],children:["G3G5-44Q"]},"G3G5-ZMX":{first:"Sebastian",last:"Gehrig",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-X6G"],children:["G3G5-7N1"]},"G3G5-X6G":{first:"Katharina",last:"Schmidt",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3G5-ZMX"],children:["G3G5-7N1"]},"LVC3-182":{first:"Hans Nickel ...",last:"Lehmann",dates:"1674-1723",father:"GNCQ-YTH",mother:"LZTG-WVP",spouses:["LCRS-TJG"],children:["LYNH-Y87"]},"LCRS-TJG":{first:"Anna Barbara",last:"JOST",dates:"1671-1726",father:"96H7-4MB",mother:"LZZ6-PH2",spouses:["LVC3-182"],children:["LYNH-Y87"]},"GM51-9FZ":{first:"Gary Wyatt",last:"Müller",dates:"1675-1710",father:"L1FP-JC5",mother:"LX74-TZF",spouses:["LDL6-SQN"],children:["LKGP-71R"]},"LDL6-SQN":{first:"Donna Ray",last:"Rogers",dates:"1678-Deceased",father:"LJ6Y-B59",mother:"LTKG-MLC",spouses:["GM51-9FZ"],children:["LKGP-71R"]},"GSYD-X27":{first:"Christian Da...",last:"Miller",dates:"1680-1733",father:"LV4J-2DQ",mother:"MNYJ-9CB",spouses:["GHKX-KLF"],children:["L2XK-6C8"]},"GHKX-KLF":{first:"Hermione",last:"Billard-Nessie",dates:"1685-1738",father:null,mother:null,spouses:["GSYD-X27"],children:["L2XK-6C8"]},"GYKW-YKC":{first:"",last:"Miller",dates:"1690-1750",father:null,mother:null,spouses:[null],children:["G832-LQ1"]},"LZF9-2XQ":{first:"Johann Peter...",last:"Batdorf",dates:"1663-1709",father:"K2N3-HYW",mother:"K2N3-HBH",spouses:["LK2T-3NN"],children:["933K-SQF"]},"LK2T-3NN":{first:"Kunigunda",last:"Weygand",dates:"1662-1702",father:null,mother:null,spouses:["LZF9-2XQ"],children:["933K-SQF"]},"LY8C-JWS":{first:"Johann Adam",last:"Walborn",dates:"1666-1741",father:"LHP9-FS7",mother:"L28G-VQ9",spouses:["KND9-6QC"],children:["LR2F-C2M"]},"KND9-6QC":{first:"Anna Elisabetha",last:"Zietz",dates:"1666-1741",father:"GDJM-6SB",mother:"GDJM-6KF",spouses:["LY8C-JWS"],children:["LR2F-C2M"]},"LDFZ-NT5":{first:"",last:"Karthonitz",dates:"1665-Deceased",father:"GWV3-SVG",mother:null,spouses:[null],children:["L4TT-RTP"]},"LDFZ-NRG":{first:"",last:"Euphrosina",dates:"1668-Deceased",father:"GWV3-Y56",mother:null,spouses:[null],children:["L4TT-R1K"]},"LZP5-HP8":{first:"Johan Philip",last:"Borntraeger",dates:"1642-1687",father:"GFC9-NY4",mother:"G128-X6J",spouses:["KN1W-KK3"],children:["L5PV-T8T"]},"KN1W-KK3":{first:"Anna Marie",last:"Eckel",dates:"1642-1684",father:"K69W-JSB",mother:"GKWL-VB7",spouses:["LZP5-HP8"],children:["L5PV-T8T"]},"M3RQ-WND":{first:"Simon",last:"Antebringer",dates:"1646-1722",father:"M3RQ-WKC",mother:"G3G5-9YT",spouses:["G3G5-9YG"],children:["MW31-GJ7"]},"G3G5-9YG":{first:"Margeta",last:"Andbachter",dates:"1662-1680",father:"G3G5-M5K",mother:"G3G5-449",spouses:["M3RQ-WND"],children:["MW31-GJ7"]},"G3G5-824":{first:"Johann",last:"Hanaur",dates:"1679-Deceased",father:"G3G5-N2H",mother:"G3G5-C6G",spouses:["G3G5-83N"],children:["G3G5-39N"]},"G3G5-83N":{first:"Wilhomina",last:"Hannes",dates:"1680-Deceased",father:"G3G5-L3F",mother:"G3G5-DW1",spouses:["G3G5-824"],children:["G3G5-39N"]},"G3G5-44Q":{first:"Mathias",last:"Klink",dates:"1670-Deceased",father:"G3G5-9D7",mother:"G3G5-N23",spouses:["G3G5-7N1"],children:["G3GP-BJN"]},"G3G5-7N1":{first:"Susanne",last:"Gehrig",dates:"1664-1736",father:"G3G5-ZMX",mother:"G3G5-X6G",spouses:["G3G5-44Q"],children:["G3GP-BJN"]},"LYNH-Y87":{first:"Benedict",last:"Lehman I",dates:"1692-1734",father:"LVC3-182",mother:"LCRS-TJG",spouses:["LKGP-71R"],children:["LRQK-QQ4"]},"LKGP-71R":{first:"Veronica Ann",last:"Miller",dates:"1700-1733",father:"GM51-9FZ",mother:"LDL6-SQN",spouses:["LYNH-Y87"],children:["LRQK-QQ4"]},"L2XK-6C8":{first:"Christian Daniel",last:"Miller ML",dates:"1706-1785",father:"GSYD-X27",mother:"GHKX-KLF",spouses:["G832-LQ1"],children:["GMD3-7BM"]},"G832-LQ1":{first:"Elizabetha",last:"Miller",dates:"1711-1806",father:"GYKW-YKC",mother:null,spouses:["L2XK-6C8"],children:["GMD3-7BM"]},"933K-SQF":{first:"Johannes Martin",last:"Batdorf",dates:"1695-1782",father:"LZF9-2XQ",mother:"LK2T-3NN",spouses:["LR2F-C2M"],children:["LDMG-BS5"]},"LR2F-C2M":{first:"Maria Elisabetha",last:"Walborn",dates:"1696-1796",father:"LY8C-JWS",mother:"KND9-6QC",spouses:["933K-SQF"],children:["LDMG-BS5"]},"L4TT-RTP":{first:"Johan Peter",last:"Karthonitz",dates:"1689-Deceased",father:"LDFZ-NT5",mother:null,spouses:["L4TT-R1K"],children:["MR8Y-2KQ"]},"L4TT-R1K":{first:"Catherine Euph...",last:"Weichenberger",dates:"1693-Deceased",father:"LDFZ-NRG",mother:null,spouses:["L4TT-RTP"],children:["MR8Y-2KQ"]},"L5PV-T8T":{first:"Johann Caspar",last:"Borntrager",dates:"1681-1751",father:"LZP5-HP8",mother:"KN1W-KK3",spouses:["MW31-GJ7"],children:["LZTG-7RK"]},"MW31-GJ7":{first:"Anna Marie  Ma...",last:"Antebringer",dates:"1680-1737",father:"M3RQ-WND",mother:"G3G5-9YG",spouses:["L5PV-T8T"],children:["LZTG-7RK"]},"G3G5-39N":{first:"Christian",last:"Hanaur",dates:"1698-1773",father:"G3G5-824",mother:"G3G5-83N",spouses:["G3GP-BJN"],children:["9KDT-K8H"]},"G3GP-BJN":{first:"Margaret",last:"Klink",dates:"1700-1760",father:"G3G5-44Q",mother:"G3G5-7N1",spouses:["G3G5-39N"],children:["9KDT-K8H"]},"GS7S-NVG":{first:"Johann Wilhelm",last:"Falb",dates:"Deceased",father:null,mother:null,spouses:["GS7S-NVR"],children:["LZVR-R8Y"]},"GS7S-NVR":{first:"Maria Elisabetha",last:"",dates:"Deceased",father:null,mother:null,spouses:["GS7S-NVG"],children:["LZVR-R8Y"]},"GLGH-8WJ":{first:"Jacobi",last:"Holhauser",dates:"Deceased",father:null,mother:null,spouses:["GLGH-M28"],children:["LZVR-T7H"]},"GLGH-M28":{first:"Agatha",last:"Schumacher",dates:"Deceased",father:null,mother:null,spouses:["GLGH-8WJ"],children:["LZVR-T7H"]},"LRQK-QQ4":{first:"Benedict",last:"Lehman II",dates:"1733-1766",father:"LYNH-Y87",mother:"LKGP-71R",spouses:["GMD3-7BM"],children:["L8PG-NWR"]},"GMD3-7BM":{first:"Veronica",last:"Miller ML1",dates:"1729-1810",father:"L2XK-6C8",mother:"G832-LQ1",spouses:["LRQK-QQ4"],children:["L8PG-NWR"]},"LDMG-BS5":{first:"Christian",last:"Batdorf Sr.",dates:"1724-1781",father:"933K-SQF",mother:"LR2F-C2M",spouses:["MR8Y-2KQ"],children:["LYDR-PYK"]},"MR8Y-2KQ":{first:"Eva Regina",last:"Karsnitz",dates:"1725-Deceased",father:"L4TT-RTP",mother:"L4TT-R1K",spouses:["LDMG-BS5"],children:["LYDR-PYK"]},"LZTG-7RK":{first:"Martin",last:"Borntraeger",dates:"1723-1802",father:"L5PV-T8T",mother:"MW31-GJ7",spouses:["9KDT-K8H"],children:["LZVR-TJK"]},"9KDT-K8H":{first:"Anna Elizabeth",last:"Hanauer",dates:"1723-1767",father:"G3G5-39N",mother:"G3GP-BJN",spouses:["LZTG-7RK"],children:["LZVR-TJK"]},"LZVR-R8Y":{first:"Johann Alexander",last:"Falb",dates:"1738-Deceased",father:"GS7S-NVG",mother:"GS7S-NVR",spouses:["LZVR-T7H"],children:["LZVR-RHT"]},"LZVR-T7H":{first:"Anna Maria",last:"Holzhauser",dates:"1740-Deceased",father:"GLGH-8WJ",mother:"GLGH-M28",spouses:["LZVR-R8Y"],children:["LZVR-RHT"]},"L8PG-NWR":{first:"John Miller",last:"Lehman I",dates:"1749-1842",father:"LRQK-QQ4",mother:"GMD3-7BM",spouses:["LYDR-PYK"],children:["LDLP-KR4"]},"LYDR-PYK":{first:"Maria Elizabeth",last:"Batdorf",dates:"1746-Deceased",father:"LDMG-BS5",mother:"MR8Y-2KQ",spouses:["L8PG-NWR"],children:["LDLP-KR4"]},"LZVR-TJK":{first:"Johann",last:"Borntreger I",dates:"1755-1820",father:"LZTG-7RK",mother:"9KDT-K8H",spouses:["LZVR-RHT"],children:["KLGN-VTX"]},"LZVR-RHT":{first:"Mary",last:"Falb",dates:"1756-1871",father:"LZVR-R8Y",mother:"LZVR-T7H",spouses:["LZVR-TJK"],children:["KLGN-VTX"]},"LDLP-KR4":{first:"John Hans",last:"Lehman",dates:"1780-1851",father:"L8PG-NWR",mother:"LYDR-PYK",spouses:["KLGN-VTX"],children:["K2H1-5WS"]},"KLGN-VTX":{first:"Elizabeth",last:"Borntreger",dates:"1773-1839",father:"LZVR-TJK",mother:"LZVR-RHT",spouses:["LDLP-KR4"],children:["K2H1-5WS"]},"9VV6-SVR":{first:"Benedicht",last:"Brechbühl",dates:"1630-1691",father:"9V2Z-FVQ",mother:"L9H3-395",spouses:["LF5Q-GVK","LF5Q-GVK"],children:["LVXK-PF7","LD8C-6G4"]},"LF5Q-GVK":{first:"Anna Madleni",last:"Müller",dates:"1630-1720",father:"KCPH-7WR",mother:"L2D1-1WS",spouses:["9VV6-SVR","9VV6-SVR"],children:["LVXK-PF7","LD8C-6G4"]},"GW7J-76Q":{first:"Isaac Christian",last:"Martin",dates:"1640-1729",father:"GWZ7-JF4",mother:"GWZ7-T3J",spouses:["LVHK-1PQ"],children:["LTPF-7SX"]},"LVHK-1PQ":{first:"Anna Maria",last:"Dold",dates:"1647-1757",father:"LH5N-8N8",mother:"LH5R-RSD",spouses:["GW7J-76Q"],children:["LTPF-7SX"]},"GX7W-9X6":{first:"Heinrich",last:"Brupbacher",dates:"1640-Deceased",father:"9MD7-R4P",mother:"LBJL-X7P",spouses:["LBDJ-Z3V"],children:["LTPX-7HM"]},"LBDJ-Z3V":{first:"Elsbeth",last:"Salenberg",dates:"1640-Deceased",father:null,mother:null,spouses:["GX7W-9X6"],children:["LTPX-7HM"]},"L8W3-T9N":{first:"Christian",last:"Schenck",dates:"1662-1724",father:"LZKH-RCG",mother:"LT2X-K1L",spouses:["LVXK-PF7","LVXK-PF7","LVXK-PF7"],children:["LTBM-BS3","L5GC-J7L","L8W3-T9T"]},"LVXK-PF7":{first:"Barbara",last:"Brackbill",dates:"1674-1714",father:"9VV6-SVR",mother:"LF5Q-GVK",spouses:["L8W3-T9N","L8W3-T9N","L8W3-T9N"],children:["LTBM-BS3","L5GC-J7L","L8W3-T9T"]},"LTPF-7SX":{first:"Christian Andreas",last:"Martin",dates:"1669-1748",father:"GW7J-76Q",mother:"LVHK-1PQ",spouses:["LTPX-7HM","LTPX-7HM"],children:["LRKB-YFQ","G3JR-G31"]},"LTPX-7HM":{first:"Elsbeth",last:"Ells",dates:"1674-1732",father:"GX7W-9X6",mother:"LBDJ-Z3V",spouses:["LTPF-7SX","LTPF-7SX"],children:["LRKB-YFQ","G3JR-G31"]},"LTBM-BS3":{first:"Michael",last:"Schenk",dates:"1695-1759",father:"L8W3-T9N",mother:"LVXK-PF7",spouses:["GL9Y-9B6"],children:["G6NY-P4M"]},"GL9Y-9B6":{first:"Mary",last:"",dates:"1703-1759",father:null,mother:null,spouses:["LTBM-BS3"],children:["G6NY-P4M"]},"KNQH-YTS":{first:"Hans Ulrich",last:"Huber",dates:"1706-1757",father:null,mother:null,spouses:["GS52-HM9"],children:["2H61-8BQ"]},"GS52-HM9":{first:"Margaret",last:"Koch",dates:"Deceased",father:null,mother:null,spouses:["KNQH-YTS"],children:["2H61-8BQ"]},"LRKB-YFQ":{first:"David",last:"Martin",dates:"1691-1784",father:"LTPF-7SX",mother:"LTPX-7HM",spouses:["LY1Q-VF1","MTZ8-GVP"],children:["L12Z-FPQ","LCPH-58Q"]},"G6NY-P4M":{first:"Henry E.",last:"Schenk",dates:"1726-1805",father:"LTBM-BS3",mother:"GL9Y-9B6",spouses:["2H61-8BQ"],children:["GYMC-8TP"]},"2H61-8BQ":{first:"Magdalena Anna",last:"Huber",dates:"1735-1801",father:"KNQH-YTS",mother:"GS52-HM9",spouses:["G6NY-P4M"],children:["GYMC-8TP"]},"L12Z-FPQ":{first:"Henrich",last:"Martin",dates:"1741-1825",father:"LRKB-YFQ",mother:"LY1Q-VF1",spouses:["LK7K-ML8","LK7K-ML8"],children:["L7JS-BL8","L41N-R31"]},"LK7K-ML8":{first:"Mary",last:"Burkhart",dates:"1745-1813",father:null,mother:null,spouses:["L12Z-FPQ","L12Z-FPQ"],children:["L7JS-BL8","L41N-R31"]},"GYMC-8TP":{first:"John",last:"Shank",dates:"1747-1813",father:"G6NY-P4M",mother:"2H61-8BQ",spouses:["L7JS-BL8"],children:["LBR6-QDG"]},"L7JS-BL8":{first:"Maria",last:"Martin",dates:"1764-1832",father:"L12Z-FPQ",mother:"LK7K-ML8",spouses:["GYMC-8TP"],children:["LBR6-QDG"]},"LBR6-QDG":{first:"Bishop Henry M",last:"Shenk",dates:"1794-1865",father:"GYMC-8TP",mother:"L7JS-BL8",spouses:["L7XK-YM8"],children:["K415-T5Q"]},"L7XK-YM8":{first:"Susanna",last:"Huber",dates:"1790-1872",father:null,mother:null,spouses:["LBR6-QDG"],children:["K415-T5Q"]},"LRDK-W9T":{first:"Elisabetha",last:"Reibel",dates:"Deceased",father:null,mother:null,spouses:[null],children:["K418-M9G"]},"L4TP-GSX":{first:"Hans Heinrich",last:"Näf",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVXN-Q7L"],children:["LVXN-3BS"]},"LVXN-Q7L":{first:"Anneli",last:"Haegi",dates:"",father:"unscraped",mother:"unscraped",spouses:["L4TP-GSX"],children:["LVXN-3BS"]},"LTVD-PC2":{first:"Hans Jacob",last:"Bär",dates:"",father:"unscraped",mother:"unscraped",spouses:["LB5Y-DRR"],children:["LVHK-TPV"]},"LB5Y-DRR":{first:"Verena",last:"Huber",dates:"",father:"unscraped",mother:"unscraped",spouses:["LTVD-PC2"],children:["LVHK-TPV"]},"K41M-SNY":{first:"Oswald",last:"Bar",dates:"",father:"unscraped",mother:"unscraped",spouses:["GZ45-MNW","GZ45-MNW"],children:["LWMQ-CXH","9MRQ-BVQ"]},"GZ45-MNW":{first:"Elisabeth",last:"Lamprecht",dates:"",father:"unscraped",mother:"unscraped",spouses:["K41M-SNY","K41M-SNY"],children:["LWMQ-CXH","9MRQ-BVQ"]},"LWX8-N5R":{first:"Rudolf",last:"Frey",dates:"",father:"unscraped",mother:"unscraped",spouses:["LWX8-KGJ"],children:["27SR-J8P"]},"LWX8-KGJ":{first:"Barbara",last:"Lang",dates:"",father:"unscraped",mother:"unscraped",spouses:["LWX8-N5R"],children:["27SR-J8P"]},"KC28-8J9":{first:"Hans Jacob",last:"Weidner",dates:"",father:"unscraped",mother:"unscraped",spouses:["ML4R-9XF"],children:["GVMY-37G"]},"ML4R-9XF":{first:"Appolonia",last:"Scheu",dates:"",father:"unscraped",mother:"unscraped",spouses:["KC28-8J9"],children:["GVMY-37G"]},"LDB4-8F1":{first:"Klaus",last:"Stadtmann",dates:"1613-1674",father:"LDB4-82H",mother:"LK61-ZHK",spouses:["LDB4-8JK"],children:["GX3P-D83"]},"LDB4-8JK":{first:"Elisabetha",last:"Vogelmann",dates:"1614-Deceased",father:"LK61-JNX",mother:"GSM1-33J",spouses:["LDB4-8F1"],children:["GX3P-D83"]},"LV1L-DDZ":{first:"Johan Michel",last:"Kauffmann Kh...",dates:"",father:"unscraped",mother:"unscraped",spouses:["MT93-Z81","MT93-Z81"],children:["L2MJ-4YJ","MSPF-2VL"]},"MT93-Z81":{first:"Anna Katheri...",last:"Brendli",dates:"",father:"unscraped",mother:"unscraped",spouses:["LV1L-DDZ","LV1L-DDZ"],children:["L2MJ-4YJ","MSPF-2VL"]},"L89D-RJ6":{first:"Johannes",last:"Kropf",dates:"",father:"unscraped",mother:"unscraped",spouses:["L89D-R2N"],children:["G47Q-4FT"]},"L89D-R2N":{first:"Anna",last:"Vögeli",dates:"",father:"unscraped",mother:"unscraped",spouses:["L89D-RJ6"],children:["G47Q-4FT"]},"G478-XC3":{first:"Peter B",last:"Bruppacher",dates:"",father:"unscraped",mother:"unscraped",spouses:["2SC7-PS1"],children:["GMJC-BY4"]},"2SC7-PS1":{first:"Anna Maria",last:"Pfister",dates:"",father:"unscraped",mother:"unscraped",spouses:["G478-XC3"],children:["GMJC-BY4"]},"LJBL-ZQR":{first:"Hans",last:"Hiestand",dates:"",father:"unscraped",mother:"unscraped",spouses:["L874-CX7"],children:["KVVC-813"]},"L874-CX7":{first:"Verena",last:"Aeppli",dates:"",father:"unscraped",mother:"unscraped",spouses:["LJBL-ZQR"],children:["KVVC-813"]},"GPBD-ZQR":{first:"Heinrich",last:"Funk",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8WY-3V1","L8WY-3V1"],children:["LKB7-15F","L2R2-1HP"]},"L8WY-3V1":{first:"Katharina",last:"Meili",dates:"",father:"unscraped",mother:"unscraped",spouses:["GPBD-ZQR","GPBD-ZQR"],children:["LKB7-15F","L2R2-1HP"]},"G8FY-JVW":{first:"Hans Michael",last:"Brook",dates:"",father:"unscraped",mother:"unscraped",spouses:["G8VV-6P1"],children:["9939-BMZ"]},"G8VV-6P1":{first:"Dorothea Cat...",last:"Voß",dates:"",father:"unscraped",mother:"unscraped",spouses:["G8FY-JVW"],children:["9939-BMZ"]},"GT6X-KH6":{first:"Hans Jacob",last:"Knussli",dates:"",father:"unscraped",mother:"unscraped",spouses:["GZN7-ZM4"],children:["GXFP-1K5"]},"GZN7-ZM4":{first:"Elsbeth Verena",last:"Meyer",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT6X-KH6"],children:["GXFP-1K5"]},"LVXN-3BS":{first:"Heinrich",last:"Näf",dates:"1640-1714",father:"L4TP-GSX",mother:"LVXN-Q7L",spouses:["LVHK-TPV"],children:["LVXN-3G2"]},"LVHK-TPV":{first:"Veronika",last:"Bär",dates:"1642-1715",father:"LTVD-PC2",mother:"LB5Y-DRR",spouses:["LVXN-3BS"],children:["LVXN-3G2"]},"KC31-FWT":{first:"Josephus",last:"Hiestand",dates:"1661-Deceased",father:null,mother:null,spouses:["2HX6-S59"],children:["LVF3-ST6"]},"2HX6-S59":{first:"Magdalena",last:"Buggin",dates:"1663-Deceased",father:null,mother:null,spouses:["KC31-FWT"],children:["LVF3-ST6"]},"LWMQ-CXH":{first:"Galli",last:"Bär",dates:"1644-1750",father:"K41M-SNY",mother:"GZ45-MNW",spouses:["27SR-J8P"],children:["KL7W-NLH"]},"27SR-J8P":{first:"Margretha",last:"Frey",dates:"1656-Deceased",father:"LWX8-N5R",mother:"LWX8-KGJ",spouses:["LWMQ-CXH"],children:["KL7W-NLH"]},"LT8D-77M":{first:"Benjamin J.",last:"Witmer",dates:"1669-1756",father:"GN4K-SLS",mother:"LC55-QR6",spouses:["GVMY-37G","GVMY-37G"],children:["9KL5-C96","LWJ5-JJP"]},"GVMY-37G":{first:"Maria Barbara",last:"Weidner",dates:"1679-1744",father:"KC28-8J9",mother:"ML4R-9XF",spouses:["LT8D-77M","LT8D-77M"],children:["9KL5-C96","LWJ5-JJP"]},"GX3P-D83":{first:"Hans Jacob",last:"Stadtmann",dates:"1647-1695",father:"LDB4-8F1",mother:"LDB4-8JK",spouses:["G6Q4-J14","G6Q4-J14"],children:["L1HW-86H","L61F-2NC"]},"G6Q4-J14":{first:"Elisabeth",last:"Bauersachs",dates:"1650-1691",father:null,mother:null,spouses:["GX3P-D83","GX3P-D83"],children:["L1HW-86H","L61F-2NC"]},"L2MJ-4YJ":{first:"Jacob",last:"Kauffmann",dates:"1656-1732",father:"LV1L-DDZ",mother:"MT93-Z81",spouses:["G47Q-4FT"],children:["L5RG-1D3"]},"G47Q-4FT":{first:"Anna",last:"Kropf",dates:"1661-Deceased",father:"L89D-RJ6",mother:"L89D-R2N",spouses:["L2MJ-4YJ"],children:["L5RG-1D3"]},"LKB7-15F":{first:"Heinrich Fri...",last:"Funk",dates:"1663-1734",father:"GPBD-ZQR",mother:"L8WY-3V1",spouses:["9939-BMZ","9939-BMZ"],children:["GH5M-7JM","LVJH-T3X"]},"9939-BMZ":{first:"Frances Frey",last:"Brook",dates:"1670-1741",father:"G8FY-JVW",mother:"G8VV-6P1",spouses:["LKB7-15F","LKB7-15F"],children:["GH5M-7JM","LVJH-T3X"]},"GXFP-1K5":{first:"Hans",last:"Nissley",dates:"1663-Deceased",father:"GT6X-KH6",mother:"GZN7-ZM4",spouses:["GZPG-LBM"],children:["LVJH-T7X"]},"GZPG-LBM":{first:"Anna",last:"Bar",dates:"1666-1702",father:null,mother:null,spouses:["GXFP-1K5"],children:["LVJH-T7X"]},"LVXN-3G2":{first:"Hans Heinrich",last:"Näf",dates:"1679-1750",father:"LVXN-3BS",mother:"LVHK-TPV",spouses:["LVF3-ST6","LVF3-ST6"],children:["L23L-LNX","LHD7-1HF"]},"LVF3-ST6":{first:"Barbara",last:"Hiestand",dates:"1690-1774",father:"KC31-FWT",mother:"2HX6-S59",spouses:["LVXN-3G2","LVXN-3G2"],children:["L23L-LNX","LHD7-1HF"]},"KL7W-NLH":{first:"Henry",last:"Bear",dates:"1692-1750",father:"LWMQ-CXH",mother:"27SR-J8P",spouses:["9KL5-C96"],children:["9N8V-5KW"]},"9KL5-C96":{first:"Barbara D.",last:"Witmer",dates:"1692-1744",father:"LT8D-77M",mother:"GVMY-37G",spouses:["KL7W-NLH"],children:["9N8V-5KW"]},"L1HW-86H":{first:"Joseph",last:"Stehman",dates:"1670-1756",father:"GX3P-D83",mother:"G6Q4-J14",spouses:["LH2P-52Q","LH2P-52Q"],children:["LH52-WR7","9MCL-W4Y"]},"LH2P-52Q":{first:"Veronica Eliza...",last:"Plumstead",dates:"1674-1731",father:null,mother:null,spouses:["L1HW-86H","L1HW-86H"],children:["LH52-WR7","9MCL-W4Y"]},"L5RG-1D3":{first:"Rev. Isaac K",last:"Kauffman",dates:"1693-1738",father:"L2MJ-4YJ",mother:"G47Q-4FT",spouses:["L89D-PK1"],children:["LDHS-G71"]},"L89D-PK1":{first:"Barbara",last:"Walder",dates:"1695-1751",father:null,mother:null,spouses:["L5RG-1D3"],children:["LDHS-G71"]},"LRW9-724":{first:"Jacob",last:"Brubacher",dates:"1678-1751",father:"GMJC-BY4",mother:"KVVC-813",spouses:["GH5M-7JM"],children:["LKYX-19V"]},"GH5M-7JM":{first:"Mary Ann",last:"Funck",dates:"1697-1756",father:"LKB7-15F",mother:"9939-BMZ",spouses:["LRW9-724"],children:["LKYX-19V"]},"LVJH-T7X":{first:"Jacob Bar",last:"Nissley",dates:"1697-1749",father:"GXFP-1K5",mother:"GZPG-LBM",spouses:["LVJH-T3X"],children:["LKYX-1WR"]},"LVJH-T3X":{first:"Mary Brook",last:"Funk",dates:"1698-1752",father:"LKB7-15F",mother:"9939-BMZ",spouses:["LVJH-T7X"],children:["LKYX-1WR"]},"L23L-LNX":{first:"Henry",last:"Neff",dates:"1715-1777",father:"LVXN-3G2",mother:"LVF3-ST6",spouses:["9N8V-5KW"],children:["LCV5-GQQ"]},"9N8V-5KW":{first:"Magdalena Witmer",last:"Bear",dates:"1715-1775",father:"KL7W-NLH",mother:"9KL5-C96",spouses:["L23L-LNX"],children:["LCV5-GQQ"]},"LH52-WR7":{first:"Hans",last:"Stehman",dates:"1702-1766",father:"L1HW-86H",mother:"LH2P-52Q",spouses:["K2XF-G9F"],children:["L7JS-BLX"]},"K2XF-G9F":{first:"Barbara",last:"Keagy",dates:"1725-1795",father:null,mother:null,spouses:["LH52-WR7"],children:["L7JS-BLX"]},"LHD7-1HF":{first:"John Henry",last:"Neff",dates:"1719-1760",father:"LVXN-3G2",mother:"LVF3-ST6",spouses:["LDHS-G71"],children:["L6S4-3NN"]},"LDHS-G71":{first:"Elizabeth",last:"Kauffman",dates:"1723-1753",father:"L5RG-1D3",mother:"L89D-PK1",spouses:["LHD7-1HF"],children:["L6S4-3NN"]},"LKYX-19V":{first:"John Jacob",last:"Brubaker",dates:"1722-1764",father:"LRW9-724",mother:"GH5M-7JM",spouses:["LKYX-1WR","LKYX-1WR","LKYX-1WR"],children:["KH7N-DYK","KHXH-62N","L254-2X6"]},"LKYX-1WR":{first:"Mary Funk",last:"Nissley",dates:"1727-1763",father:"LVJH-T7X",mother:"LVJH-T3X",spouses:["LKYX-19V","LKYX-19V","LKYX-19V"],children:["KH7N-DYK","KHXH-62N","L254-2X6"]},"LCV5-GQQ":{first:"John George",last:"Neff",dates:"1744-1788",father:"L23L-LNX",mother:"9N8V-5KW",spouses:["L7JS-BLX"],children:["KZKX-SNZ"]},"L7JS-BLX":{first:"Maria Margaretha",last:"Stehman",dates:"1756-1822",father:"LH52-WR7",mother:"K2XF-G9F",spouses:["LCV5-GQQ"],children:["KZKX-SNZ"]},"L6S4-3NN":{first:"Henry",last:"Neff",dates:"1752-1829",father:"LHD7-1HF",mother:"LDHS-G71",spouses:["KH7N-DYK","KH7N-DYK"],children:["LCRT-283","29QN-88Q"]},"KH7N-DYK":{first:"Elizabeth Nissley",last:"Brubaker",dates:"1758-1839",father:"LKYX-19V",mother:"LKYX-1WR",spouses:["L6S4-3NN","L6S4-3NN"],children:["LCRT-283","29QN-88Q"]},"KZKX-SNZ":{first:"Henry Stehman",last:"Neff",dates:"1787-1854",father:"LCV5-GQQ",mother:"L7JS-BLX",spouses:["LCRT-283"],children:["K4NQ-6NM"]},"LCRT-283":{first:"Susannah Brubaker",last:"Neff",dates:"1787-1870",father:"L6S4-3NN",mother:"KH7N-DYK",spouses:["KZKX-SNZ"],children:["K4NQ-6NM"]},"LLM7-7JN":{first:"Hans Andreas",last:"Riehm",dates:"",father:"unscraped",mother:"unscraped",spouses:["GPTX-ZZT"],children:["L1JL-QQ2"]},"GPTX-ZZT":{first:"Barbara",last:"Schwartzwaller",dates:"",father:"unscraped",mother:"unscraped",spouses:["LLM7-7JN"],children:["L1JL-QQ2"]},"L7K3-2V5":{first:"Edward",last:"Weynandt",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCFX-3PW"],children:["G8KX-N26"]},"LCFX-3PW":{first:"Sibylla",last:"Kleister",dates:"",father:"unscraped",mother:"unscraped",spouses:["L7K3-2V5"],children:["G8KX-N26"]},"LKVS-G82":{first:"Johann Georg",last:"Schwab",dates:"",father:"unscraped",mother:"unscraped",spouses:["M3QM-FDT"],children:["LVXL-1L7"]},"M3QM-FDT":{first:"Margaretha",last:"Zimmermann",dates:"",father:"unscraped",mother:"unscraped",spouses:["LKVS-G82"],children:["LVXL-1L7"]},"LDFK-BDG":{first:"Johann Georg...",last:"Wolfhardt",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCXR-DN6"],children:["KNZ6-XD9"]},"LCXR-DN6":{first:"Anna Katharina",last:"Haagen",dates:"",father:"unscraped",mother:"unscraped",spouses:["LDFK-BDG"],children:["KNZ6-XD9"]},"LHF8-G1G":{first:"Johann Jacob",last:"Fusser",dates:"",father:"unscraped",mother:"unscraped",spouses:["GPSF-44C"],children:["M1L2-7XF"]},"GPSF-44C":{first:"Anna Margare...",last:"Heinrich",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHF8-G1G"],children:["M1L2-7XF"]},"M5XN-277":{first:"Hanns Jacob",last:"Hautz",dates:"",father:"unscraped",mother:"unscraped",spouses:["M5XN-27K"],children:["M5XN-2WH"]},"M5XN-27K":{first:"Anna Margaretha",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["M5XN-277"],children:["M5XN-2WH"]},"K8XR-1LP":{first:"Anna Ottilia",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["M5XN-PHF"],children:["2CB1-8B3"]},"M5XN-PHF":{first:"Hanss Adam",last:"Neu",dates:"",father:"unscraped",mother:"unscraped",spouses:["K8XR-1LP"],children:["2CB1-8B3"]},"KZ3P-GPQ":{first:"Tias",last:"SASSCHE",dates:"1650-1729",father:"LVGW-3Y7",mother:"LVGW-Q7N",spouses:["K45Y-ZNN"],children:["MSR7-7YH"]},"K45Y-ZNN":{first:"Anna",last:"TIMMERMANN",dates:"1661-1732",father:"LVGW-7H5",mother:"LVGW-WSX",spouses:["KZ3P-GPQ"],children:["MSR7-7YH"]},"GWVQ-7MC":{first:"",last:"Meyers",dates:"1673-Deceased",father:"GWVQ-7JC",mother:null,spouses:[null],children:["LVGW-3CJ"]},"KCN3-1HM":{first:"Hans Jacob",last:"Oberholzer",dates:"1620-Deceased",father:"LHCN-W8G",mother:"LR3C-MKY",spouses:["LK47-FYF"],children:["G6Y1-5V4"]},"LK47-FYF":{first:"Anna",last:"Buchmann",dates:"1626-1689",father:"L4Q1-4KP",mother:"L7FW-FLQ",spouses:["KCN3-1HM"],children:["G6Y1-5V4"]},"GZJC-456":{first:"Felix",last:"Frey",dates:"1617-Deceased",father:"K2MG-LBQ",mother:"KNS9-LJ6",spouses:["9NPM-BHQ"],children:["GJG6-LRT"]},"9NPM-BHQ":{first:"Elsbeth",last:"Stierli",dates:"1620-1675",father:"LHGX-DTR",mother:"LHGX-X73",spouses:["GZJC-456"],children:["GJG6-LRT"]},"L8P8-359":{first:"Joannes Geor...",last:"Kieffer",dates:"1657-1729",father:"GT26-YWQ",mother:null,spouses:["L8P8-3RC"],children:["G9JR-NNR"]},"L8P8-3RC":{first:"Magdalena",last:"Weiland",dates:"1657-1714",father:"L8PD-4RB",mother:"L8PD-3NB",spouses:["L8P8-359"],children:["G9JR-NNR"]},"G6M9-KNN":{first:"Nicolaus",last:"Gross",dates:"Deceased",father:null,mother:null,spouses:["G6M9-JYL"],children:["G6MM-PTT"]},"G6M9-JYL":{first:"",last:"Johanna",dates:"Deceased",father:null,mother:null,spouses:["G6M9-KNN"],children:["G6MM-PTT"]},"MSPF-2VL":{first:"Isaac Jsac B...",last:"Brendli Kauf...",dates:"1653-1741",father:"LV1L-DDZ",mother:"MT93-Z81",spouses:["L2GB-RV8"],children:["LZR1-3JT"]},"L2GB-RV8":{first:"Elsbeth",last:"Megert",dates:"1657-1715",father:"94V8-W4S",mother:"MP9D-FSC",spouses:["MSPF-2VL"],children:["LZR1-3JT"]},"L7J9-4PV":{first:"Hans B",last:"Streit",dates:"1653-1730",father:"LV91-V4T",mother:"GGHK-ZL5",spouses:["GP12-GB2"],children:["L8PG-NWK"]},"GP12-GB2":{first:"Christina",last:"Wolffenter",dates:"1655-Deceased",father:null,mother:null,spouses:["L7J9-4PV"],children:["L8PG-NWK"]},"MMDW-SV3":{first:"Josephus",last:"Seiler",dates:"",father:"unscraped",mother:"unscraped",spouses:["GSGC-B43"],children:["LDHS-ZHQ"]},"GSGC-B43":{first:"Anna Maria",last:"Mayer",dates:"",father:"unscraped",mother:"unscraped",spouses:["MMDW-SV3"],children:["LDHS-ZHQ"]},"LHTV-XSV":{first:"Dr. jur. Fra...",last:"Petri",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT9Q-9J1"],children:["GT9Q-273"]},"GT9Q-9J1":{first:"Elisabeth Th...",last:"Schroder",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHTV-XSV"],children:["GT9Q-273"]},"MTQT-K6T":{first:"Johann Georg",last:"Leister",dates:"",father:"unscraped",mother:"unscraped",spouses:["GL6V-MSG"],children:["L19K-L78"]},"GL6V-MSG":{first:"Maria Magdalena",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["MTQT-K6T"],children:["L19K-L78"]},"G4JB-XNG":{first:"Hans Johan Adam",last:"Bürcki",dates:"",father:"unscraped",mother:"unscraped",spouses:["GZ7N-J36"],children:["LZW7-9H3"]},"GZ7N-J36":{first:"Anna Margaretha",last:"Bachmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["G4JB-XNG"],children:["LZW7-9H3"]},"LHDJ-B7F":{first:"Leo",last:"Facesh",dates:"",father:"unscraped",mother:"unscraped",spouses:["G2KY-NJ9"],children:["LJRW-5TM"]},"G2KY-NJ9":{first:"WIFE OF LEO",last:"Facesh",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHDJ-B7F"],children:["LJRW-5TM"]},"L1JL-QQ2":{first:"Hans Andreas",last:"Riehm",dates:"1642-1719",father:"LLM7-7JN",mother:"GPTX-ZZT",spouses:["G8KX-N26"],children:["LHD7-81Y"]},"G8KX-N26":{first:"Maria Elizabeth",last:"Weyhart",dates:"1645-1699",father:"L7K3-2V5",mother:"LCFX-3PW",spouses:["L1JL-QQ2"],children:["LHD7-81Y"]},"LVXL-1L7":{first:"Jost Conrad",last:"Schwab",dates:"1656-1735",father:"LKVS-G82",mother:"M3QM-FDT",spouses:["KNZ6-XD9"],children:["M3VT-PWQ"]},"KNZ6-XD9":{first:"Anna Katharina",last:"Wolfhardt",dates:"1663-1720",father:"LDFK-BDG",mother:"LCXR-DN6",spouses:["LVXL-1L7"],children:["M3VT-PWQ"]},"M1L2-7XF":{first:"Johann Chris...",last:"Fuesser",dates:"1673-1734",father:"LHF8-G1G",mother:"GPSF-44C",spouses:["LTD8-XFJ"],children:["LXSY-SXT"]},"LTD8-XFJ":{first:"Anna Margretha",last:"Gummersheimer",dates:"1677-1753",father:null,mother:null,spouses:["M1L2-7XF"],children:["LXSY-SXT"]},"M5XN-2WH":{first:"Johann Chris...",last:"Hautz",dates:"1688-Deceased",father:"M5XN-277",mother:"M5XN-27K",spouses:["2CB1-8B3"],children:["LZJ7-24L"]},"2CB1-8B3":{first:"Anna Margretha",last:"Neu",dates:"1691-Deceased",father:"K8XR-1LP",mother:"M5XN-PHF",spouses:["M5XN-2WH"],children:["LZJ7-24L"]},"ML87-4H4":{first:"Johan",last:"Wever",dates:"1680-Deceased",father:null,mother:null,spouses:[null],children:["L19L-3D9"]},"MSR7-7YH":{first:"Matthias",last:"Sassche",dates:"1693-Deceased",father:"KZ3P-GPQ",mother:"K45Y-ZNN",spouses:["LVGW-3CJ"],children:["LZ22-JCP"]},"LVGW-3CJ":{first:"Anne Cathrin",last:"Meyers",dates:"1698-1732",father:"GWVQ-7MC",mother:null,spouses:["MSR7-7YH"],children:["LZ22-JCP"]},"G6Y1-5V4":{first:"Johannes",last:"Oberholtzer",dates:"1650-1700",father:"KCN3-1HM",mother:"LK47-FYF",spouses:["GJG6-LRT"],children:["GHCD-7XG"]},"GJG6-LRT":{first:"Anna",last:"Frey",dates:"1651-1700",father:"GZJC-456",mother:"9NPM-BHQ",spouses:["G6Y1-5V4"],children:["GHCD-7XG"]},"G9JR-NNR":{first:"Josephus",last:"Kieffer",dates:"1680-1764",father:"L8P8-359",mother:"L8P8-3RC",spouses:["G6MM-PTT"],children:["GXGZ-Q56"]},"G6MM-PTT":{first:"Anna Maria Sch...",last:"Gross",dates:"1683-1714",father:"G6M9-KNN",mother:"G6M9-JYL",spouses:["G9JR-NNR"],children:["GXGZ-Q56"]},"GSG3-92N":{first:"Johannes",last:"Blough",dates:"1687-1765",father:null,mother:null,spouses:["GSYH-23Z"],children:["LYBR-5QL"]},"GSYH-23Z":{first:"Anna",last:"Kuffman",dates:"1694-Deceased",father:null,mother:null,spouses:["GSG3-92N"],children:["LYBR-5QL"]},"LZR1-3JT":{first:"Isaac",last:"Kauffmann",dates:"1685-1738",father:"MSPF-2VL",mother:"L2GB-RV8",spouses:["L8PG-NWK","L8PG-NWK"],children:["LC5N-4VB","LRGY-JGL"]},"L8PG-NWK":{first:"Anna Maria",last:"Streit",dates:"1687-1730",father:"L7J9-4PV",mother:"GP12-GB2",spouses:["LZR1-3JT","LZR1-3JT"],children:["LC5N-4VB","LRGY-JGL"]},"LDHS-ZHQ":{first:"Joseph Jacob",last:"Saylor",dates:"1687-1739",father:"MMDW-SV3",mother:"GSGC-B43",spouses:["GT9Q-273"],children:["LZKL-8ZK"]},"GT9Q-273":{first:"Anna Nmn",last:"Seiler",dates:"1687-1724",father:"LHTV-XSV",mother:"GT9Q-9J1",spouses:["LDHS-ZHQ"],children:["LZKL-8ZK"]},"G88L-H91":{first:"William",last:"Stalderas",dates:"1700-1734",father:null,mother:null,spouses:["L19K-L78"],children:["LZJD-LBL"]},"L19K-L78":{first:"Maria Magdalena",last:"Leister",dates:"1694-1766",father:"MTQT-K6T",mother:"GL6V-MSG",spouses:["G88L-H91"],children:["LZJD-LBL"]},"LZW7-9H3":{first:"Leonard",last:"Bürgi",dates:"1688-1763",father:"G4JB-XNG",mother:"GZ7N-J36",spouses:["LJRW-5TM"],children:["LZ2X-KFK"]},"LJRW-5TM":{first:"Anna Catherine",last:"Faesch",dates:"1690-1768",father:"LHDJ-B7F",mother:"G2KY-NJ9",spouses:["LZW7-9H3"],children:["LZ2X-KFK"]},"LHD7-81Y":{first:"Johann Eberhart",last:"Riehm",dates:"1687-1779",father:"L1JL-QQ2",mother:"G8KX-N26",spouses:["M3VT-PWQ"],children:["LHVM-4L9"]},"M3VT-PWQ":{first:"Anna Elisabetha",last:"Schwab",dates:"1692-1761",father:"LVXL-1L7",mother:"KNZ6-XD9",spouses:["LHD7-81Y"],children:["LHVM-4L9"]},"LXSY-SXT":{first:"Johann Nikolaus",last:"Fuesser",dates:"1697-1765",father:"M1L2-7XF",mother:"LTD8-XFJ",spouses:["LZJ7-24L"],children:["L8BV-PHG"]},"LZJ7-24L":{first:"Juliana Sophia",last:"Hautz",dates:"1715-1784",father:"M5XN-2WH",mother:"2CB1-8B3",spouses:["LXSY-SXT"],children:["L8BV-PHG"]},"L19L-3D9":{first:"Johan Henrich",last:"Weaver",dates:"1709-1755",father:"ML87-4H4",mother:null,spouses:["LZ22-JCP"],children:["L852-337"]},"LZ22-JCP":{first:"Anna Gertrude",last:"Sassche",dates:"1710-1777",father:"MSR7-7YH",mother:"LVGW-3CJ",spouses:["L19L-3D9"],children:["L852-337"]},"GHCD-7XG":{first:"Jacob",last:"Oberholtzer",dates:"1704-1755",father:"G6Y1-5V4",mother:"GJG6-LRT",spouses:["GXGZ-Q56"],children:["LZ58-ZSR"]},"GXGZ-Q56":{first:"Barbara",last:"Killhefer",dates:"1705-1790",father:"G9JR-NNR",mother:"G6MM-PTT",spouses:["GHCD-7XG"],children:["LZ58-ZSR"]},"LYBR-5QL":{first:"Christian V",last:"Blauch I",dates:"1715-1786",father:"GSG3-92N",mother:"GSYH-23Z",spouses:["LYBR-G6K"],children:["2DXR-XP1"]},"LYBR-G6K":{first:"Elizabeth",last:"Gastelli",dates:"1715-1749",father:null,mother:null,spouses:["LYBR-5QL"],children:["2DXR-XP1"]},"LC5N-4VB":{first:"Hans",last:"Kauffman",dates:"1710-1747",father:"LZR1-3JT",mother:"L8PG-NWK",spouses:["GK9B-PTR"],children:["2DXR-X16"]},"GK9B-PTR":{first:"Ann",last:"Bomberger",dates:"1722-1832",father:null,mother:null,spouses:["LC5N-4VB"],children:["2DXR-X16"]},"LZKL-8ZK":{first:"Jacob",last:"Seiler",dates:"1715-1793",father:"LDHS-ZHQ",mother:"GT9Q-273",spouses:["LZJD-LBL"],children:["LZKM-F27"]},"LZJD-LBL":{first:"Magdalena",last:"Staldt",dates:"1718-1784",father:"G88L-H91",mother:"L19K-L78",spouses:["LZKL-8ZK"],children:["LZKM-F27"]},"LZ2X-KFK":{first:"Jacob",last:"Bürkey BK1",dates:"1705-1763",father:"LZW7-9H3",mother:"LJRW-5TM",spouses:["LZW7-9PF"],children:["LZKM-F5P"]},"LZW7-9PF":{first:"wife of Jacob",last:"Berkey BK1",dates:"1716-1768",father:null,mother:null,spouses:["LZ2X-KFK"],children:["LZKM-F5P"]},"LHVM-4L9":{first:"Captain Andreas",last:"Ream",dates:"1737-1813",father:"LHD7-81Y",mother:"M3VT-PWQ",spouses:["L8BV-PHG"],children:["LZGH-3TQ"]},"L8BV-PHG":{first:"Susanna",last:"Fiesser",dates:"1741-1816",father:"LXSY-SXT",mother:"LZJ7-24L",spouses:["LHVM-4L9"],children:["LZGH-3TQ"]},"L852-337":{first:"Jacob",last:"Weaver Sr",dates:"1748-1820",father:"L19L-3D9",mother:"LZ22-JCP",spouses:["LZ58-ZSR","LZ58-ZSR"],children:["LZGH-QQQ","K2FK-PQ9"]},"LZ58-ZSR":{first:"Magdalena K",last:"Oberholtzer",dates:"1748-1791",father:"GHCD-7XG",mother:"GXGZ-Q56",spouses:["L852-337","L852-337"],children:["LZGH-QQQ","K2FK-PQ9"]},"2DXR-XP1":{first:"Pvt Jacob",last:"Blough Sr",dates:"1736-1810",father:"LYBR-5QL",mother:"LYBR-G6K",spouses:["2DXR-X16"],children:["LZK5-QK8"]},"2DXR-X16":{first:"Anna Maria",last:"Kauffman",dates:"1736-1815",father:"LC5N-4VB",mother:"GK9B-PTR",spouses:["2DXR-XP1"],children:["LZK5-QK8"]},"LZKM-F27":{first:"John Saylor",last:"Seiler Sr",dates:"1740-1822",father:"LZKL-8ZK",mother:"LZJD-LBL",spouses:["LZKM-F5P"],children:["LVNL-3LL"]},"LZKM-F5P":{first:"Catherina",last:"Berkey",dates:"1740-1809",father:"LZ2X-KFK",mother:"LZW7-9PF",spouses:["LZKM-F27"],children:["LVNL-3LL"]},"LZGH-3TQ":{first:"Garrett",last:"Ream",dates:"1777-1847",father:"LHVM-4L9",mother:"L8BV-PHG",spouses:["LZGH-QQQ"],children:["LBQT-5W9"]},"LZGH-QQQ":{first:"Catherine",last:"Weaver",dates:"1777-1864",father:"L852-337",mother:"LZ58-ZSR",spouses:["LZGH-3TQ"],children:["LBQT-5W9"]},"LZK5-QK8":{first:"Jacob W",last:"Blough Jr",dates:"1775-1849",father:"2DXR-XP1",mother:"2DXR-X16",spouses:["LVNL-3LL"],children:["L4BM-FFD"]},"LVNL-3LL":{first:"Catharine",last:"Saylor",dates:"1776-1848",father:"LZKM-F27",mother:"LZKM-F5P",spouses:["LZK5-QK8"],children:["L4BM-FFD"]},"LBQT-5W9":{first:"John David",last:"Ream",dates:"1805-1864",father:"LZGH-3TQ",mother:"LZGH-QQQ",spouses:["L4BM-FFD"],children:["KF57-264"]},"L4BM-FFD":{first:"Anna Nancy",last:"Blough",dates:"1803-1890",father:"LZK5-QK8",mother:"LVNL-3LL",spouses:["LBQT-5W9"],children:["KF57-264"]},"LVGW-3Y7":{first:"Hans",last:"Saßche",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVGW-Q7N"],children:["KZ3P-GPQ"]},"LVGW-Q7N":{first:"Trine",last:"Jauch",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVGW-3Y7"],children:["KZ3P-GPQ"]},"LVGW-7H5":{first:"Hans",last:"TIMMERMANN",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVGW-WSX"],children:["K45Y-ZNN"]},"LVGW-WSX":{first:"Catrin",last:"HEINCKE",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVGW-7H5"],children:["K45Y-ZNN"]},"GWVQ-7JC":{first:"",last:"Meyers",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["GWVQ-7MC"]},"LHCN-W8G":{first:"Marti",last:"Oberholtzer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LR3C-MKY"],children:["KCN3-1HM"]},"LR3C-MKY":{first:"Margret",last:"Schollenberger",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHCN-W8G"],children:["KCN3-1HM"]},"L4Q1-4KP":{first:"Kaspar",last:"Buchmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["L7FW-FLQ"],children:["LK47-FYF"]},"L7FW-FLQ":{first:"Verena",last:"Wyss",dates:"",father:"unscraped",mother:"unscraped",spouses:["L4Q1-4KP"],children:["LK47-FYF"]},"K2MG-LBQ":{first:"Lienhardt",last:"Frey",dates:"",father:"unscraped",mother:"unscraped",spouses:["KNS9-LJ6"],children:["GZJC-456"]},"KNS9-LJ6":{first:"Anna",last:"Foster",dates:"",father:"unscraped",mother:"unscraped",spouses:["K2MG-LBQ"],children:["GZJC-456"]},"LHGX-DTR":{first:"Heinrich",last:"Stierli",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHGX-X73"],children:["9NPM-BHQ"]},"LHGX-X73":{first:"Margret",last:"Haeberlig",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHGX-DTR"],children:["9NPM-BHQ"]},"GT26-YWQ":{first:"Hanss",last:"Kieffer",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["L8P8-359"]},"L8PD-4RB":{first:"Clauss",last:"Weiland",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8PD-3NB"],children:["L8P8-3RC"]},"L8PD-3NB":{first:"Mrs.",last:"Weiland",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8PD-4RB"],children:["L8P8-3RC"]},"94V8-W4S":{first:"Melchior",last:"Mergedt",dates:"",father:"unscraped",mother:"unscraped",spouses:["MP9D-FSC"],children:["L2GB-RV8"]},"MP9D-FSC":{first:"Magdalena ou...",last:"Mueller, müller",dates:"",father:"unscraped",mother:"unscraped",spouses:["94V8-W4S"],children:["L2GB-RV8"]},"LV91-V4T":{first:"Benediki",last:"Streit",dates:"",father:"unscraped",mother:"unscraped",spouses:["GGHK-ZL5"],children:["L7J9-4PV"]},"GGHK-ZL5":{first:"Anna",last:"Burren",dates:"",father:"unscraped",mother:"unscraped",spouses:["LV91-V4T"],children:["L7J9-4PV"]},"LVTX-LRQ":{first:"Hans",last:"Joder",dates:"",father:"unscraped",mother:"unscraped",spouses:["L5NK-BDZ"],children:["G4QW-XQF"]},"L5NK-BDZ":{first:"Catharina",last:"Reüsser",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVTX-LRQ"],children:["G4QW-XQF"]},"LVDK-9BD":{first:"Peter",last:"Farni",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVDK-SMT"],children:["GX6R-RZP"]},"LVDK-SMT":{first:"Elssbeth",last:"Hoffstetter",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVDK-9BD"],children:["GX6R-RZP"]},"KNHW-9YW":{first:"Welti",last:"Gerber",dates:"",father:"unscraped",mother:"unscraped",spouses:["M9DX-K8T"],children:["9VTL-4WQ"]},"M9DX-K8T":{first:"Barbara",last:"Buergi",dates:"",father:"unscraped",mother:"unscraped",spouses:["KNHW-9YW"],children:["9VTL-4WQ"]},"K6QH-68W":{first:"Christen",last:"Schertenleib",dates:"",father:"unscraped",mother:"unscraped",spouses:["K871-T1H"],children:["GDR4-3TP"]},"K871-T1H":{first:"Elsbeth",last:"Gugger",dates:"",father:"unscraped",mother:"unscraped",spouses:["K6QH-68W"],children:["GDR4-3TP"]},"G4QW-XQF":{first:"Jost",last:"Joder",dates:"1673-Deceased",father:"LVTX-LRQ",mother:"L5NK-BDZ",spouses:["GX6R-RZP"],children:["9CKV-H87"]},"GX6R-RZP":{first:"Magdalena",last:"Farni",dates:"1669-Deceased",father:"LVDK-9BD",mother:"LVDK-SMT",spouses:["G4QW-XQF"],children:["9CKV-H87"]},"9VTL-4WQ":{first:"Hans",last:"Gerber",dates:"1682-1768",father:"KNHW-9YW",mother:"M9DX-K8T",spouses:["GDR4-3TP"],children:["LV87-6JX"]},"GDR4-3TP":{first:"Katharina",last:"Schertenleib",dates:"1689-1768",father:"K6QH-68W",mother:"K871-T1H",spouses:["9VTL-4WQ"],children:["LV87-6JX"]},"9CKV-H87":{first:"Christen",last:"Joder",dates:"1699-1775",father:"G4QW-XQF",mother:"GX6R-RZP",spouses:["LV87-6JX"],children:["LRG1-985"]},"LV87-6JX":{first:"Anna Barbara",last:"Gerber",dates:"1705-1786",father:"9VTL-4WQ",mother:"GDR4-3TP",spouses:["9CKV-H87"],children:["LRG1-985"]},"GZH3-2ZG":{first:"Johannes Jacob",last:"Baumann",dates:"1700-Deceased",father:null,mother:null,spouses:["GFPT-8M4"],children:["LJ2J-6Y2"]},"GFPT-8M4":{first:"Mary Elizabeth",last:"Baumgardner",dates:"1701-Deceased",father:null,mother:null,spouses:["GZH3-2ZG"],children:["LJ2J-6Y2"]},"LRGY-JGL":{first:"Steven S",last:"Kauffman",dates:"1725-1800",father:"LZR1-3JT",mother:"L8PG-NWK",spouses:["LRG1-985"],children:["9KBN-8H6"]},"LRG1-985":{first:"Barbara",last:"Yoder",dates:"1725-1785",father:"9CKV-H87",mother:"LV87-6JX",spouses:["LRGY-JGL"],children:["9KBN-8H6"]},"LRK8-D6Z":{first:"Johannes",last:"Gerber",dates:"1721-1777",father:null,mother:null,spouses:["LJ2J-6Y2"],children:["9KBN-8HX"]},"LJ2J-6Y2":{first:"Christiana",last:"Baumann",dates:"1727-1769",father:"GZH3-2ZG",mother:"GFPT-8M4",spouses:["LRK8-D6Z"],children:["9KBN-8HX"]},"9KBN-8H6":{first:"Christian",last:"Kauffman",dates:"1764-1830",father:"LRGY-JGL",mother:"LRG1-985",spouses:["9KBN-8HX"],children:["K2FK-PQ6"]},"9KBN-8HX":{first:"Magdalena",last:"Gerber",dates:"1758-1833",father:"LRK8-D6Z",mother:"LJ2J-6Y2",spouses:["9KBN-8H6"],children:["K2FK-PQ6"]},"K2FK-PQ9":{first:"Abraham",last:"Weaver",dates:"1782-1845",father:"L852-337",mother:"LZ58-ZSR",spouses:["K2FK-PQ6"],children:["KP4D-CBG"]},"K2FK-PQ6":{first:"Christina",last:"Kauffman",dates:"1792-1848",father:"9KBN-8H6",mother:"9KBN-8HX",spouses:["K2FK-PQ9"],children:["KP4D-CBG"]},"G61Q-PRC":{first:"Nicholas",last:"Miller",dates:"1730-Deceased",father:null,mother:null,spouses:[null],children:["L1VY-441"]},"L6JC-VHB":{first:"Anna Marie Bar...",last:"Eaker",dates:"1724-1758",father:null,mother:null,spouses:[null],children:["L1VT-J2M"]},"L1VY-441":{first:"Christian",last:"Miller MLB",dates:"1757-1839",father:"G61Q-PRC",mother:null,spouses:["L1VT-J2M"],children:["LZV1-BV5"]},"L1VT-J2M":{first:"Christina",last:"MLB",dates:"1757-Deceased",father:null,mother:"L6JC-VHB",spouses:["L1VY-441"],children:["LZV1-BV5"]},"LZV1-BV5":{first:"Tobias",last:"Miller",dates:"1776-1847",father:"L1VY-441",mother:"L1VT-J2M",spouses:["LZV1-BFW"],children:["KP4D-ZLH"]},"LZV1-BFW":{first:"Mary",last:"Guthart",dates:"1782-1857",father:null,mother:null,spouses:["LZV1-BV5"],children:["KP4D-ZLH"]},"GK4M-L57":{first:"Heinrich",last:"Müller",dates:"1665-Deceased",father:"GK4M-4VF",mother:"GK4M-Z8Q",spouses:["GD4P-GBP"],children:["LRLM-XCM"]},"GD4P-GBP":{first:"Barbara",last:"Hess",dates:"1665-1709",father:null,mother:null,spouses:["GK4M-L57"],children:["LRLM-XCM"]},"G1HG-Z57":{first:"Hans Caspar",last:"Schneider",dates:"",father:"unscraped",mother:"unscraped",spouses:["9SJW-2W3"],children:["KP3L-FNR"]},"9SJW-2W3":{first:"Anna Magdalena",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["G1HG-Z57"],children:["KP3L-FNR"]},"G6GC-BWQ":{first:"Hans Jacob",last:"Grieder",dates:"",father:"unscraped",mother:"unscraped",spouses:["LT2X-WGF"],children:["LTVY-7BB"]},"LT2X-WGF":{first:"Barbara",last:"Schenk",dates:"",father:"unscraped",mother:"unscraped",spouses:["G6GC-BWQ"],children:["LTVY-7BB"]},"L41Z-8MZ":{first:"Christian",last:"Long Sr",dates:"",father:"unscraped",mother:"unscraped",spouses:["L2PX-MDT"],children:["L4BP-G8L"]},"L2PX-MDT":{first:"Anna Maria",last:"Boshaar",dates:"",father:"unscraped",mother:"unscraped",spouses:["L41Z-8MZ"],children:["L4BP-G8L"]},"LYLT-K2J":{first:"Abraham",last:"Herr Jr.",dates:"1700-1785",father:"LJLL-G5X",mother:"LVZ1-C2P",spouses:["LRLM-XCM","LRLM-XCM"],children:["L8H5-14Q","LH62-SK3"]},"LRLM-XCM":{first:"Anna Kattarina",last:"Miller",dates:"1705-1783",father:"GK4M-L57",mother:"GD4P-GBP",spouses:["LYLT-K2J","LYLT-K2J"],children:["L8H5-14Q","LH62-SK3"]},"G3JR-G31":{first:"Christian Mi...",last:"Martin",dates:"1694-1758",father:"LTPF-7SX",mother:"LTPX-7HM",spouses:["KP3L-FNR"],children:["GWQ6-187"]},"KP3L-FNR":{first:"Maria Magdalena",last:"Schneider",dates:"1695-1770",father:"G1HG-Z57",mother:"9SJW-2W3",spouses:["G3JR-G31"],children:["GWQ6-187"]},"LZ2N-D38":{first:"Jacob",last:"Hochstetler",dates:"1695-1761",father:"9K6X-GJM",mother:"LJ1N-7NV",spouses:["LTVY-7BB"],children:["LHJP-X1V"]},"LTVY-7BB":{first:"Anna Schenk",last:"Kreider",dates:"1700-1790",father:"G6GC-BWQ",mother:"LT2X-WGF",spouses:["LZ2N-D38"],children:["LHJP-X1V"]},"L4BP-G8L":{first:"Herman",last:"Long Sr",dates:"1694-1773",father:"L41Z-8MZ",mother:"L2PX-MDT",spouses:["LZX4-XMC"],children:["LC3X-WWT"]},"LZX4-XMC":{first:"Anna",last:"Hirschi",dates:"1698-1754",father:"LRGN-W4J",mother:"93JZ-DX9",spouses:["L4BP-G8L"],children:["LC3X-WWT"]},"GSRL-Z7B":{first:"Abraham",last:"Meyer",dates:"1684-1748",father:null,mother:null,spouses:["GSM2-X9F"],children:["9NTS-JGS"]},"GSM2-X9F":{first:"Barbara",last:"Landis",dates:"1688-1748",father:null,mother:null,spouses:["GSRL-Z7B"],children:["9NTS-JGS"]},"LBXD-LMG":{first:"Christian Martin",last:"Herr",dates:"1726-1796",father:null,mother:null,spouses:[null],children:["K4K4-V79"]},"L8H5-14Q":{first:"Abraham Miller",last:"Herr",dates:"1724-1803",father:"LYLT-K2J",mother:"LRLM-XCM",spouses:["GWQ6-187"],children:["LCVM-K7Q"]},"GWQ6-187":{first:"Frances Veronica",last:"Martin",dates:"1725-1806",father:"G3JR-G31",mother:"KP3L-FNR",spouses:["L8H5-14Q"],children:["LCVM-K7Q"]},"LHJP-X1V":{first:"Abraham",last:"Hostetter",dates:"1723-1796",father:"LZ2N-D38",mother:"LTVY-7BB",spouses:["LC3X-WWT"],children:["LHV3-45H"]},"LC3X-WWT":{first:"Catherine",last:"Long",dates:"1736-1796",father:"L4BP-G8L",mother:"LZX4-XMC",spouses:["LHJP-X1V"],children:["LHV3-45H"]},"GLM4-4FS":{first:"Andrew",last:"Hershey",dates:"1698-1754",father:null,mother:null,spouses:["M4B5-B8V","M4B5-B8V"],children:["LDNB-2Z8","MTD1-T7J"]},"M4B5-B8V":{first:"Maria Catherine",last:"Schnabley",dates:"1702-1759",father:null,mother:null,spouses:["GLM4-4FS","GLM4-4FS"],children:["LDNB-2Z8","MTD1-T7J"]},"LJY7-W4V":{first:"Daniel",last:"Groff",dates:"1714-1768",father:"LRXJ-8KK",mother:"LW3R-Q1M",spouses:["LTNK-V67"],children:["GHB3-NFL"]},"LTNK-V67":{first:"Anna Maria",last:"Huber",dates:"1715-1783",father:null,mother:null,spouses:["LJY7-W4V"],children:["GHB3-NFL"]},"9NTS-JGS":{first:"John Landis",last:"Meyer",dates:"1725-1789",father:"GSRL-Z7B",mother:"GSM2-X9F",spouses:["9VH9-QL5"],children:["KHNV-F2Q"]},"9VH9-QL5":{first:"Barbara Agatha",last:"",dates:"1730-1797",father:null,mother:null,spouses:["9NTS-JGS"],children:["KHNV-F2Q"]},"KHXH-62N":{first:"Rev Jacob Nissley",last:"Brubaker",dates:"1751-1832",father:"LKYX-19V",mother:"LKYX-1WR",spouses:["K4K4-V79"],children:["LZL8-91D"]},"K4K4-V79":{first:"Anna",last:"Herr",dates:"1754-1791",father:"LBXD-LMG",mother:null,spouses:["KHXH-62N"],children:["LZL8-91D"]},"LCVM-K7Q":{first:"Christian",last:"Herr",dates:"1753-1821",father:"L8H5-14Q",mother:"GWQ6-187",spouses:["LHV3-45H"],children:["LYKK-XLX"]},"LHV3-45H":{first:"Anna Long",last:"Hostetter",dates:"1756-1821",father:"LHJP-X1V",mother:"LC3X-WWT",spouses:["LCVM-K7Q"],children:["LYKK-XLX"]},"MXT6-5DP":{first:"David",last:"Brubaker",dates:"1739-1824",father:"MP5C-XSJ",mother:"G41P-PBB",spouses:["LDNB-2Z8"],children:["9Q1B-3WF"]},"LDNB-2Z8":{first:"Elizabeth Schn...",last:"Hershey",dates:"1742-Deceased",father:"GLM4-4FS",mother:"M4B5-B8V",spouses:["MXT6-5DP"],children:["9Q1B-3WF"]},"GHB3-NFL":{first:"Christian",last:"Groff",dates:"1755-1834",father:"LJY7-W4V",mother:"LTNK-V67",spouses:["KHNV-F2Q"],children:["9D45-3KL"]},"KHNV-F2Q":{first:"Barbara",last:"Myer",dates:"1754-1821",father:"9NTS-JGS",mother:"9VH9-QL5",spouses:["GHB3-NFL"],children:["9D45-3KL"]},"LZL8-91D":{first:"Jacob Herr",last:"Brubaker",dates:"1779-1804",father:"KHXH-62N",mother:"K4K4-V79",spouses:["LYKK-XLX"],children:["KHHJ-65L"]},"LYKK-XLX":{first:"Anna Hostetter",last:"Herr",dates:"1782-1817",father:"LCVM-K7Q",mother:"LHV3-45H",spouses:["LZL8-91D"],children:["KHHJ-65L"]},"9Q1B-3WF":{first:"David",last:"Brubaker",dates:"1768-1825",father:"MXT6-5DP",mother:"LDNB-2Z8",spouses:["9D45-3KL"],children:["KNQC-CSQ"]},"9D45-3KL":{first:"Maria",last:"Groff",dates:"1776-1808",father:"GHB3-NFL",mother:"KHNV-F2Q",spouses:["9Q1B-3WF"],children:["KNQC-CSQ"]},"KHHJ-65L":{first:"Christian H.",last:"Brubaker",dates:"1802-1871",father:"LZL8-91D",mother:"LYKK-XLX",spouses:["KNQC-CSQ"],children:["L4WR-G6X"]},"KNQC-CSQ":{first:"Susanna Groff",last:"Brubaker",dates:"1809-1875",father:"9Q1B-3WF",mother:"9D45-3KL",spouses:["KHHJ-65L"],children:["L4WR-G6X"]},"G3XT-NPL":{first:"Georg",last:"Kaltwasser",dates:"",father:"unscraped",mother:"unscraped",spouses:["GK5D-9F9"],children:["K8GX-35X"]},"GK5D-9F9":{first:"Margaretha",last:"NN",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3XT-NPL"],children:["K8GX-35X"]},"G4X3-YMY":{first:"Michael",last:"Wentzel der ...",dates:"",father:"unscraped",mother:"unscraped",spouses:["GPCW-6SK"],children:["LVVM-48J"]},"GPCW-6SK":{first:"Unknown",last:"Name",dates:"",father:"unscraped",mother:"unscraped",spouses:["G4X3-YMY"],children:["LVVM-48J"]},"KHDV-9RR":{first:"Henrich",last:"Biedenbaender",dates:"",father:"unscraped",mother:"unscraped",spouses:["KC1K-Y5S"],children:["K8XX-FLQ"]},"KC1K-Y5S":{first:"Margaretha",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["KHDV-9RR"],children:["K8XX-FLQ"]},"L63Q-9ZQ":{first:"Hanss Jacob",last:"SCHMIDT",dates:"",father:"unscraped",mother:"unscraped",spouses:["K631-H91"],children:["K638-VMD"]},"K631-H91":{first:"Anna",last:"Richter",dates:"",father:"unscraped",mother:"unscraped",spouses:["L63Q-9ZQ"],children:["K638-VMD"]},"KG3W-X31":{first:"Andreas",last:"Rudolph",dates:"",father:"unscraped",mother:"unscraped",spouses:["MJ9Y-L25"],children:["GJT2-M3B"]},"MJ9Y-L25":{first:"Christina Su...",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["KG3W-X31"],children:["GJT2-M3B"]},"9STS-LJG":{first:"Johann Jakob",last:"Kupper",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["L7FL-XDP"]},"MBF5-1YH":{first:"Johan Georg",last:"Nicolai",dates:"",father:"unscraped",mother:"unscraped",spouses:["MWRK-JPD"],children:["L7FL-X66"]},"MWRK-JPD":{first:"Anna Margareta",last:"Pfeffer",dates:"",father:"unscraped",mother:"unscraped",spouses:["MBF5-1YH"],children:["L7FL-X66"]},"GKR4-BGS":{first:"Paul",last:"Krömmelbein",dates:"1622-1695",father:null,mother:null,spouses:["GKRH-W8V"],children:["G3HS-WW3"]},"GKRH-W8V":{first:"Margaretha",last:"Harnisch",dates:"Deceased",father:null,mother:null,spouses:["GKR4-BGS"],children:["G3HS-WW3"]},"K8GX-35X":{first:"Hans",last:"Kaltwasser",dates:"1624-1685",father:"G3XT-NPL",mother:"GK5D-9F9",spouses:["K85D-8K9"],children:["KZFZ-7N6"]},"K85D-8K9":{first:"Susanna",last:"",dates:"1625-1681",father:null,mother:null,spouses:["K8GX-35X"],children:["KZFZ-7N6"]},"LVVM-48J":{first:"Michael",last:"Wenzel II",dates:"1622-1682",father:"G4X3-YMY",mother:"GPCW-6SK",spouses:["M6NM-KQR"],children:["KHSY-RGM"]},"M6NM-KQR":{first:"Anna",last:"",dates:"1635-1691",father:null,mother:null,spouses:["LVVM-48J"],children:["KHSY-RGM"]},"K8XX-FLQ":{first:"Johannes",last:"Biedenbaender",dates:"1617-1686",father:"KHDV-9RR",mother:"KC1K-Y5S",spouses:["K638-VMD"],children:["KCG9-5ZZ"]},"K638-VMD":{first:"Anna Catharina",last:"Schmidt",dates:"1625-1687",father:"L63Q-9ZQ",mother:"K631-H91",spouses:["K8XX-FLQ"],children:["KCG9-5ZZ"]},"G551-95J":{first:"Georg",last:"Hartmann",dates:"1636-Deceased",father:null,mother:null,spouses:["G551-ML4"],children:["KHZF-GFS"]},"G551-ML4":{first:"Rosina",last:"",dates:"1639-Deceased",father:null,mother:null,spouses:["G551-95J"],children:["KHZF-GFS"]},"L4BV-L6R":{first:"Johannes",last:"Bär",dates:"1648-1690",father:null,mother:null,spouses:["GJT2-M3B"],children:["946C-L7Z"]},"GJT2-M3B":{first:"Anna Elisabetha",last:"Rudolph",dates:"1657-1720",father:"KG3W-X31",mother:"MJ9Y-L25",spouses:["L4BV-L6R"],children:["946C-L7Z"]},"L7FL-XDP":{first:"Johann Jacob",last:"Küpper",dates:"1650-1696",father:"9STS-LJG",mother:null,spouses:["L7FL-X66"],children:["946C-L7V"]},"L7FL-X66":{first:"Maria Margar...",last:"Nicolai",dates:"1663-Deceased",father:"MBF5-1YH",mother:"MWRK-JPD",spouses:["L7FL-XDP"],children:["946C-L7V"]},"G3HS-WW3":{first:"Johann",last:"Grimmelbein",dates:"1658-Deceased",father:"GKR4-BGS",mother:"GKRH-W8V",spouses:["GKRH-H9B"],children:["G3HS-448"]},"GKRH-H9B":{first:"Elisabeth Cath...",last:"Lang",dates:"Deceased",father:null,mother:null,spouses:["G3HS-WW3"],children:["G3HS-448"]},"GKKL-S2G":{first:"Johann Paul",last:"Buechler",dates:"Deceased",father:null,mother:null,spouses:[null],children:["MD1H-T9D"]},"KZFZ-7N6":{first:"Johann Adrian",last:"Kaltwasser",dates:"1657-1690",father:"K8GX-35X",mother:"K85D-8K9",spouses:["KHSY-RGM"],children:["K86W-W3R"]},"KHSY-RGM":{first:"Anna Maria",last:"Wentzel",dates:"1661-1729",father:"LVVM-48J",mother:"M6NM-KQR",spouses:["KZFZ-7N6"],children:["K86W-W3R"]},"KCG9-5ZZ":{first:"Christoph",last:"Biedenbaender",dates:"1666-1752",father:"K8XX-FLQ",mother:"K638-VMD",spouses:["KHZF-GFS"],children:["KD9L-LYV"]},"KHZF-GFS":{first:"Anna Rosina",last:"Hartmann",dates:"1663-1720",father:"G551-95J",mother:"G551-ML4",spouses:["KCG9-5ZZ"],children:["KD9L-LYV"]},"9VHC-3K2":{first:"Gabriel",last:"Gerisch",dates:"1684-1713",father:null,mother:null,spouses:["9VHC-3KL"],children:["MPPH-C8J"]},"9VHC-3KL":{first:"Anna",last:"Margaretha",dates:"1688-Deceased",father:null,mother:null,spouses:["9VHC-3K2"],children:["MPPH-C8J"]},"946C-L7Z":{first:"Johann Andreas",last:"Bär",dates:"1686-1756",father:"L4BV-L6R",mother:"GJT2-M3B",spouses:["946C-L7V"],children:["MPPH-C8B"]},"946C-L7V":{first:"Anna Margaretha",last:"Küpfer",dates:"1685-1747",father:"L7FL-XDP",mother:"L7FL-X66",spouses:["946C-L7Z"],children:["MPPH-C8B"]},"G3HS-448":{first:"Johann Conrad",last:"Grimmelbein",dates:"Deceased",father:"G3HS-WW3",mother:"GKRH-H9B",spouses:["MD1H-T9D"],children:["L5VB-NYC"]},"MD1H-T9D":{first:"Maria Elisabetha",last:"Buechler",dates:"Deceased",father:"GKKL-S2G",mother:null,spouses:["G3HS-448"],children:["L5VB-NYC"]},"K86W-W3R":{first:"Johann Adrian",last:"Kaltwasser",dates:"1691-1742",father:"KZFZ-7N6",mother:"KHSY-RGM",spouses:["KD9L-LYV"],children:["G3HS-M48"]},"KD9L-LYV":{first:"Anna Catharina",last:"Biedenbender",dates:"1695-1770",father:"KCG9-5ZZ",mother:"KHZF-GFS",spouses:["K86W-W3R"],children:["G3HS-M48"]},"MPPH-C8J":{first:"Gabriel",last:"Gerisch",dates:"1710-1785",father:"9VHC-3K2",mother:"9VHC-3KL",spouses:["MPPH-C8B"],children:["L5VB-LLN"]},"MPPH-C8B":{first:"Anna Barbara",last:"Bär",dates:"1709-1782",father:"946C-L7Z",mother:"946C-L7V",spouses:["MPPH-C8J"],children:["L5VB-LLN"]},"GXYS-ZLP":{first:"Johann Adam",last:"Moesinger",dates:"Deceased",father:null,mother:null,spouses:[null],children:["L5VB-GHC"]},"L5VB-NYC":{first:"Johann Michael",last:"Grimmelbein",dates:"1731-Deceased",father:"G3HS-448",mother:"MD1H-T9D",spouses:["G3HS-M48"],children:["L5VB-DCN"]},"G3HS-M48":{first:"Eva Magdalena",last:"Kaltwasser",dates:"1730-1802",father:"K86W-W3R",mother:"KD9L-LYV",spouses:["L5VB-NYC"],children:["L5VB-DCN"]},"L5VB-LLN":{first:"Georg Adam",last:"Gerisch",dates:"1751-1805",father:"MPPH-C8J",mother:"MPPH-C8B",spouses:["L5VB-GHC"],children:["L5VB-W6G"]},"L5VB-GHC":{first:"Anna Catharina",last:"Moesinger",dates:"1751-1839",father:"GXYS-ZLP",mother:null,spouses:["L5VB-LLN"],children:["L5VB-W6G"]},"L5VB-DCN":{first:"Johann Adam",last:"Kraemmelbein",dates:"1763-1837",father:"L5VB-NYC",mother:"G3HS-M48",spouses:["L5VB-W6G"],children:["L5VB-4VK"]},"L5VB-W6G":{first:"Anna Dorothea",last:"Gerisch",dates:"1773-1846",father:"L5VB-LLN",mother:"L5VB-GHC",spouses:["L5VB-DCN"],children:["L5VB-4VK"]},"M8ZM-HJL":{first:"Johann Philipp",last:"Pfeiffer",dates:"Deceased",father:null,mother:null,spouses:["M8ZM-HRC"],children:["L5VB-KSX"]},"M8ZM-HRC":{first:"Anna Barbara",last:"Seeger",dates:"1782-1855",father:null,mother:null,spouses:["M8ZM-HJL"],children:["L5VB-KSX"]},"GZSN-PGF":{first:"Jacob",last:"Burkhalter",dates:"",father:"unscraped",mother:"unscraped",spouses:["L5FW-8BC"],children:["L8P1-2JG"]},"L5FW-8BC":{first:"Barbara Whitmer",last:"Landis",dates:"",father:"unscraped",mother:"unscraped",spouses:["GZSN-PGF"],children:["L8P1-2JG"]},"L513-FV4":{first:"Durst",last:"Mellinger",dates:"",father:"unscraped",mother:"unscraped",spouses:["L19M-YY7"],children:["LCQK-4CP"]},"L19M-YY7":{first:"Anna Magdalena",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["L513-FV4"],children:["LCQK-4CP"]},"L18X-7QG":{first:"Heinrich",last:"Weber",dates:"",father:"unscraped",mother:"unscraped",spouses:["LB1L-KKQ"],children:["LY8Q-JKR"]},"LB1L-KKQ":{first:"Elsbeth",last:"Rüegg",dates:"",father:"unscraped",mother:"unscraped",spouses:["L18X-7QG"],children:["LY8Q-JKR"]},"L1XZ-9KS":{first:"Hans Rudolf",last:"Baumann",dates:"1636-1690",father:"L6JD-FMF",mother:"LZK3-47D",spouses:["L2R2-1HP"],children:["LZW3-K47"]},"L2R2-1HP":{first:"Anna",last:"Funk",dates:"1635-1681",father:"GPBD-ZQR",mother:"L8WY-3V1",spouses:["L1XZ-9KS"],children:["LZW3-K47"]},"GV7R-37M":{first:"Phillipp",last:"Rauscher",dates:"",father:"unscraped",mother:"unscraped",spouses:["9H5Z-WDX"],children:["GMC5-7XX"]},"9H5Z-WDX":{first:"Anna Margaretha",last:"Graesel",dates:"",father:"unscraped",mother:"unscraped",spouses:["GV7R-37M"],children:["GMC5-7XX"]},"G968-3H1":{first:"Heinrich Abr...",last:"Kassel",dates:"",father:"unscraped",mother:"unscraped",spouses:["G968-FQ1"],children:["LRSG-7JG"]},"G968-FQ1":{first:"Josephine Ka...",last:"Pletjes Op d...",dates:"",father:"unscraped",mother:"unscraped",spouses:["G968-3H1"],children:["LRSG-7JG"]},"L5T2-XMQ":{first:"Herman Isaac...",last:"Op den Graeff",dates:"",father:"unscraped",mother:"unscraped",spouses:["LY58-FSJ"],children:["LDBH-97Q"]},"LY58-FSJ":{first:"Deborah",last:"van Bebber",dates:"",father:"unscraped",mother:"unscraped",spouses:["L5T2-XMQ"],children:["LDBH-97Q"]},"GFQY-59L":{first:"Joseph",last:"Gochenour",dates:"",father:"unscraped",mother:"unscraped",spouses:["9JHP-NGK"],children:["K169-CSV"]},"9JHP-NGK":{first:"Elsbeth",last:"Naff",dates:"",father:"unscraped",mother:"unscraped",spouses:["GFQY-59L"],children:["K169-CSV"]},"LH6H-DSH":{first:"Christian",last:"Mosimann",dates:"",father:"unscraped",mother:"unscraped",spouses:["99WX-CCC"],children:["MZVK-578"]},"99WX-CCC":{first:"Elizabeth Mary",last:"Meyer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LH6H-DSH"],children:["MZVK-578"]},"LZW3-K47":{first:"Wendel Santmann",last:"Bauman",dates:"1665-1735",father:"L1XZ-9KS",mother:"L2R2-1HP",spouses:["LYQC-6L9","LYQC-6L9"],children:["LYK6-P5P","L69M-QPQ"]},"LYQC-6L9":{first:"Anna Marie Kundig",last:"Herr",dates:"1679-1735",father:"KFR6-VF6",mother:"LHXB-NR2",spouses:["LZW3-K47","LZW3-K47"],children:["LYK6-P5P","L69M-QPQ"]},"L6LN-DQ7":{first:"Johannes",last:"Roland",dates:"1694-1756",father:null,mother:null,spouses:["GMC5-7XX"],children:["L898-7JL"]},"GMC5-7XX":{first:"Anna Maria",last:"Rauscher",dates:"1698-1763",father:"GV7R-37M",mother:"9H5Z-WDX",spouses:["L6LN-DQ7"],children:["L898-7JL"]},"LRSG-7JG":{first:"Hupert H.",last:"Cassel",dates:"1687-1745",father:"G968-3H1",mother:"G968-FQ1",spouses:["LDBH-97Q"],children:["LCZS-9B7"]},"LDBH-97Q":{first:"Sytge Van Be...",last:"Op Den Graeff",dates:"1690-1742",father:"L5T2-XMQ",mother:"LY58-FSJ",spouses:["LRSG-7JG"],children:["LCZS-9B7"]},"K169-CSV":{first:"Joseph",last:"Gochenauer",dates:"1700-1764",father:"GFQY-59L",mother:"9JHP-NGK",spouses:["MZVK-578"],children:["K1DT-CHJ"]},"MZVK-578":{first:"Feronica",last:"Musselman",dates:"1700-1760",father:"LH6H-DSH",mother:"99WX-CCC",spouses:["K169-CSV"],children:["K1DT-CHJ"]},"LV9Y-9QK":{first:"Joseph",last:"Buchwalter",dates:"1692-1748",father:"L8P1-2JG",mother:"LCQK-4CP",spouses:["LV9T-1GF"],children:["L51B-6KC"]},"LV9T-1GF":{first:"Magdalena",last:"Fritz",dates:"1692-1735",father:null,mother:null,spouses:["LV9Y-9QK"],children:["L51B-6KC"]},"GYPK-T5X":{first:"Rev John",last:"Herr",dates:"-1783",father:null,mother:null,spouses:[null],children:["LHJP-58W"]},"LYK6-P5P":{first:"Benjamin",last:"Bauman",dates:"1718-1788",father:"LZW3-K47",mother:"LYQC-6L9",spouses:["G5GL-QJW","G5GL-QJW"],children:["KCMF-LCN","LVFF-4L9"]},"G5GL-QJW":{first:"Anna Mary",last:"Landis",dates:"1716-1803",father:null,mother:null,spouses:["LYK6-P5P","LYK6-P5P"],children:["KCMF-LCN","LVFF-4L9"]},"LWJ5-JJP":{first:"John",last:"Witmer",dates:"1719-1794",father:"LT8D-77M",mother:"GVMY-37G",spouses:["L898-7JL"],children:["GFNW-351"]},"L898-7JL":{first:"Feronica",last:"Roland",dates:"1720-1789",father:"L6LN-DQ7",mother:"GMC5-7XX",spouses:["LWJ5-JJP"],children:["GFNW-351"]},"LCZS-9B7":{first:"Abraham O.",last:"Cassel",dates:"1728-1776",father:"LRSG-7JG",mother:"LDBH-97Q",spouses:["K1DT-CHJ"],children:["K19N-834"]},"K1DT-CHJ":{first:"Catherine Muss...",last:"Gochenauer",dates:"1726-1767",father:"K169-CSV",mother:"MZVK-578",spouses:["LCZS-9B7"],children:["K19N-834"]},"L51B-6KC":{first:"Abraham",last:"Buchwalter Sr",dates:"1726-1819",father:"LV9Y-9QK",mother:"LV9T-1GF",spouses:["LV9Y-QJC"],children:["LWR2-2CX"]},"LV9Y-QJC":{first:"Maria Weber",last:"Landis",dates:"1738-1804",father:"LBYK-M2F",mother:"L7JS-BCK",spouses:["L51B-6KC"],children:["LWR2-2CX"]},"LHJP-58W":{first:"Christian",last:"Herr",dates:"1732-1815",father:"GYPK-T5X",mother:null,spouses:["KCMF-LCN"],children:["GSYB-DLX"]},"KCMF-LCN":{first:"Maria",last:"Bowman",dates:"1738-1815",father:"LYK6-P5P",mother:"G5GL-QJW",spouses:["LHJP-58W"],children:["GSYB-DLX"]},"GFNW-351":{first:"Benjamin Roland",last:"Witmer",dates:"1743-1822",father:"LWJ5-JJP",mother:"L898-7JL",spouses:["L254-2X6"],children:["LC5H-998"]},"L254-2X6":{first:"Anna Nissley",last:"Brubaker",dates:"1746-1820",father:"LKYX-19V",mother:"LKYX-1WR",spouses:["GFNW-351"],children:["LC5H-998"]},"LJBM-XQQ":{first:"Heinrich Landis",last:"Buckwalter",dates:"1742-1805",father:"MF6V-B64",mother:"LZ6N-RJ1",spouses:["K19N-834"],children:["LC5H-93V"]},"K19N-834":{first:"Barbara Gochen...",last:"Cassel",dates:"1742-1780",father:"LCZS-9B7",mother:"K1DT-CHJ",spouses:["LJBM-XQQ"],children:["LC5H-93V"]},"LWR2-2CX":{first:"Benjamin Landis",last:"Buchwalter",dates:"1764-1800",father:"L51B-6KC",mother:"LV9Y-QJC",spouses:["GSYB-DLX","GSYB-DLX"],children:["2CPW-SNP","2MGL-GTZ"]},"GSYB-DLX":{first:"Barbara",last:"Herr",dates:"1771-Deceased",father:"LHJP-58W",mother:"KCMF-LCN",spouses:["LWR2-2CX","LWR2-2CX"],children:["2CPW-SNP","2MGL-GTZ"]},"LC5H-998":{first:"Benjamin Brubaker",last:"Witmer",dates:"1772-1851",father:"GFNW-351",mother:"L254-2X6",spouses:["LC5H-93V"],children:["2HXS-M8N"]},"LC5H-93V":{first:"Esther",last:"Buckwalter",dates:"1775-1824",father:"LJBM-XQQ",mother:"K19N-834",spouses:["LC5H-998"],children:["2HXS-M8N"]},"2CPW-SNP":{first:"Abraham Herr",last:"Buckwalter",dates:"1791-1840",father:"LWR2-2CX",mother:"GSYB-DLX",spouses:["2HXS-M8N"],children:["L7XM-BZM"]},"2HXS-M8N":{first:"Anna",last:"Witmer",dates:"1795-1886",father:"LC5H-998",mother:"LC5H-93V",spouses:["2CPW-SNP"],children:["L7XM-BZM"]},"G69Q-MT6":{first:"Anthoni",last:"Wittwer",dates:"",father:"unscraped",mother:"unscraped",spouses:["MMJ3-C9C"],children:["K4PG-F9F"]},"MMJ3-C9C":{first:"Margreth",last:"Heimann",dates:"",father:"unscraped",mother:"unscraped",spouses:["G69Q-MT6"],children:["K4PG-F9F"]},"KF5H-YBV":{first:"David",last:"Kratzer",dates:"",father:"unscraped",mother:"unscraped",spouses:["KC4S-JVT"],children:["KHW9-783"]},"KC4S-JVT":{first:"Barbli",last:"Wittwer",dates:"",father:"unscraped",mother:"unscraped",spouses:["KF5H-YBV"],children:["KHW9-783"]},"LZL9-325":{first:"Christen",last:"Gerber",dates:"",father:"unscraped",mother:"unscraped",spouses:["LRTT-85Y"],children:["LVJV-ZD2"]},"LRTT-85Y":{first:"Barbli",last:"Farni",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZL9-325"],children:["LVJV-ZD2"]},"GGRV-7PP":{first:"John",last:"Krey",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["LDVM-ZM5"]},"LVSC-FVF":{first:"Wilhelm",last:"Kreÿ",dates:"",father:"unscraped",mother:"unscraped",spouses:["GDY2-RLF"],children:["L6PX-Q51"]},"GDY2-RLF":{first:"Catharina",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVSC-FVF"],children:["L6PX-Q51"]},"LHDQ-L7B":{first:"Hans Heinrich",last:"(Raff) Reiff",dates:"",father:"unscraped",mother:"unscraped",spouses:["LDYZ-F4M"],children:["MDJY-J7B"]},"LDYZ-F4M":{first:"Anna",last:"Hitz",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHDQ-L7B"],children:["MDJY-J7B"]},"LJL7-D2S":{first:"Jacob",last:"Meyer",dates:"",father:"unscraped",mother:"unscraped",spouses:["GWM2-1TJ"],children:["LRY8-539"]},"GWM2-1TJ":{first:"Agnes Otilia",last:"Mueller",dates:"",father:"unscraped",mother:"unscraped",spouses:["LJL7-D2S"],children:["LRY8-539"]},"LKYD-862":{first:"Jacob",last:"Berger",dates:"",father:"unscraped",mother:"unscraped",spouses:["G47D-DJN"],children:["LDZF-RZ3"]},"G47D-DJN":{first:"Magdalena",last:"Bertschin La...",dates:"",father:"unscraped",mother:"unscraped",spouses:["LKYD-862"],children:["LDZF-RZ3"]},"LBRQ-WW1":{first:"Hans Jakob",last:"Huber",dates:"",father:"unscraped",mother:"unscraped",spouses:["MS38-BR3"],children:["MTDT-2V7"]},"MS38-BR3":{first:"Barbara",last:"Baumann",dates:"",father:"unscraped",mother:"unscraped",spouses:["LBRQ-WW1"],children:["MTDT-2V7"]},"GLV6-QJB":{first:"Michael",last:"Koch",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZLN-8TP"],children:["KLVP-TJ9"]},"LZLN-8TP":{first:"Appolonia",last:"Oberdoerffer",dates:"",father:"unscraped",mother:"unscraped",spouses:["GLV6-QJB"],children:["KLVP-TJ9"]},"GSRK-WD3":{first:"Hans Heinrich",last:"Graf",dates:"1636-1724",father:null,mother:null,spouses:["LD11-7G9","LD11-7G9"],children:["G9MN-WNS","KCZW-NB8"]},"LD11-7G9":{first:"Anna",last:"Lichti",dates:"1647-1726",father:null,mother:null,spouses:["GSRK-WD3","GSRK-WD3"],children:["G9MN-WNS","KCZW-NB8"]},"K4PG-F9F":{first:"Samuel",last:"Wittwer",dates:"1662-1740",father:"G69Q-MT6",mother:"MMJ3-C9C",spouses:["KHW9-783"],children:["MMJW-ZSB"]},"KHW9-783":{first:"Anna",last:"Krätzer",dates:"1664-Deceased",father:"KF5H-YBV",mother:"KC4S-JVT",spouses:["K4PG-F9F"],children:["MMJW-ZSB"]},"LVJV-ZD2":{first:"Niclaus",last:"Gerber",dates:"1661-Deceased",father:"LZL9-325",mother:"LRTT-85Y",spouses:["LCCS-D81"],children:["9V9Q-MHF"]},"LCCS-D81":{first:"Anna",last:"Bachmann",dates:"1661-Deceased",father:null,mother:null,spouses:["LVJV-ZD2"],children:["9V9Q-MHF"]},"KNHD-ZJT":{first:"Michael",last:"Sensenig",dates:"1664-Deceased",father:null,mother:null,spouses:["LDVM-ZM5"],children:["GMPX-X6L"]},"LDVM-ZM5":{first:"Maria Mary B...",last:"Krey",dates:"1684-1785",father:"GGRV-7PP",mother:null,spouses:["KNHD-ZJT"],children:["GMPX-X6L"]},"L6PX-Q51":{first:"John",last:"Krey",dates:"1657-1720",father:"LVSC-FVF",mother:"GDY2-RLF",spouses:["L61P-95G"],children:["L5T2-N4P"]},"L61P-95G":{first:"Hilken",last:"Winnertzkamp",dates:"1662-1709",father:null,mother:null,spouses:["L6PX-Q51"],children:["L5T2-N4P"]},"MDJY-J7B":{first:"Joseph Hitz",last:"Reiff",dates:"1657-1750",father:"LHDQ-L7B",mother:"LDYZ-F4M",spouses:["GZVM-1G7"],children:["LK48-DQL"]},"GZVM-1G7":{first:"Anna",last:"Hiestand",dates:"1662-Deceased",father:null,mother:null,spouses:["MDJY-J7B"],children:["LK48-DQL"]},"LRY8-539":{first:"Christian Mu...",last:"Meyer",dates:"1676-1751",father:"LJL7-D2S",mother:"GWM2-1TJ",spouses:["LDZF-RZ3"],children:["LTC4-TBD"]},"LDZF-RZ3":{first:"Anna Barbara",last:"Bergey",dates:"1677-1748",father:"LKYD-862",mother:"G47D-DJN",spouses:["LRY8-539"],children:["LTC4-TBD"]},"MTDT-2V7":{first:"Hanss",last:"Huber",dates:"1663-1750",father:"LBRQ-WW1",mother:"MS38-BR3",spouses:["KLVP-TJ9"],children:["LR26-74M"]},"KLVP-TJ9":{first:"Margaret",last:"Koch",dates:"1675-1745",father:"GLV6-QJB",mother:"LZLN-8TP",spouses:["MTDT-2V7"],children:["LR26-74M"]},"G9MN-WNS":{first:"Hans",last:"Groff",dates:"1695-1749",father:"GSRK-WD3",mother:"LD11-7G9",spouses:["GPPS-CDD"],children:["LZNN-4PH"]},"GPPS-CDD":{first:"Anna",last:"Bar",dates:"1703-1730",father:"LTKZ-SHJ",mother:"L58H-C8G",spouses:["G9MN-WNS"],children:["LZNN-4PH"]},"MMJW-ZSB":{first:"Hans",last:"Witwer",dates:"1683-1741",father:"K4PG-F9F",mother:"KHW9-783",spouses:["9V9Q-MHF"],children:["MHDX-SW6"]},"9V9Q-MHF":{first:"Maria Barbara",last:"Gerber",dates:"1682-1745",father:"LVJV-ZD2",mother:"LCCS-D81",spouses:["MMJW-ZSB"],children:["MHDX-SW6"]},"GMPX-X6L":{first:"Jacob",last:"Sensenig",dates:"1693-1772",father:"KNHD-ZJT",mother:"LDVM-ZM5",spouses:["L5T2-N4P"],children:["LH16-KR7"]},"L5T2-N4P":{first:"Maria",last:"Krey",dates:"1693-1738",father:"L6PX-Q51",mother:"L61P-95G",spouses:["GMPX-X6L"],children:["LH16-KR7"]},"LK48-DQL":{first:"Abraham",last:"Reiff",dates:"1696-1763",father:"MDJY-J7B",mother:"GZVM-1G7",spouses:["LTC4-TBD"],children:["LZG4-6VG"]},"LTC4-TBD":{first:"Barbara",last:"Meyer",dates:"1701-1773",father:"LRY8-539",mother:"LDZF-RZ3",spouses:["LK48-DQL"],children:["LZG4-6VG"]},"LY4T-49S":{first:"Samuel",last:"Groff",dates:"1708-1768",father:"LRXJ-8KK",mother:"LW3R-Q1M",spouses:["LR26-74M","LR26-74M"],children:["LTQX-89L","MTZ8-GVP"]},"LR26-74M":{first:"Christina",last:"Huber",dates:"1710-1802",father:"MTDT-2V7",mother:"KLVP-TJ9",spouses:["LY4T-49S","LY4T-49S"],children:["LTQX-89L","MTZ8-GVP"]},"LZNN-4PH":{first:"Martin Bar",last:"Groff",dates:"1724-1759",father:"G9MN-WNS",mother:"GPPS-CDD",spouses:["LTJ7-XCD"],children:["LC7N-ZQD"]},"LTJ7-XCD":{first:"Eva",last:"Boyer",dates:"1724-Deceased",father:null,mother:null,spouses:["LZNN-4PH"],children:["LC7N-ZQD"]},"MHDX-SW6":{first:"Michael Gerber",last:"Witwer",dates:"1714-1778",father:"MMJW-ZSB",mother:"9V9Q-MHF",spouses:["LH16-KR7"],children:["L2VC-TNN"]},"LH16-KR7":{first:"Mary Krey",last:"Sensenig",dates:"1725-1788",father:"GMPX-X6L",mother:"L5T2-N4P",spouses:["MHDX-SW6"],children:["L2VC-TNN"]},"LZG4-6VG":{first:"Abraham",last:"Reiff Jr",dates:"1730-1788",father:"LK48-DQL",mother:"LTC4-TBD",spouses:["LTQX-89L"],children:["L2VC-T52"]},"LTQX-89L":{first:"Barbara",last:"Groff",dates:"1736-1787",father:"LY4T-49S",mother:"LR26-74M",spouses:["LZG4-6VG"],children:["L2VC-T52"]},"LC7N-ZQD":{first:"David",last:"Groff",dates:"1748-1839",father:"LZNN-4PH",mother:"LTJ7-XCD",spouses:["LC7N-Z4H"],children:["KH2Q-75R"]},"LC7N-Z4H":{first:"Catharina",last:"Schumacher",dates:"1751-1817",father:null,mother:null,spouses:["LC7N-ZQD"],children:["KH2Q-75R"]},"L2VC-TNN":{first:"David Sensenig",last:"Witwer",dates:"1765-1829",father:"MHDX-SW6",mother:"LH16-KR7",spouses:["L2VC-T52"],children:["9JSY-LFJ"]},"L2VC-T52":{first:"Maria",last:"Reiff Witwer",dates:"1765-1845",father:"LZG4-6VG",mother:"LTQX-89L",spouses:["L2VC-TNN"],children:["9JSY-LFJ"]},"KH2Q-75R":{first:"David Schumacher",last:"Groff",dates:"1788-1826",father:"LC7N-ZQD",mother:"LC7N-Z4H",spouses:["9JSY-LFJ","9JSY-LFJ"],children:["L7XM-TYT","LHZ7-L4F"]},"9JSY-LFJ":{first:"Elizabeth Reiff",last:"Witwer",dates:"1788-1826",father:"L2VC-TNN",mother:"L2VC-T52",spouses:["KH2Q-75R","KH2Q-75R"],children:["L7XM-TYT","LHZ7-L4F"]},"L6J8-H4K":{first:"Hans",last:"Hess",dates:"",father:"unscraped",mother:"unscraped",spouses:["L1WL-HM4"],children:["LJG3-3VJ"]},"L1WL-HM4":{first:"Barbel",last:"Honegger",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6J8-H4K"],children:["LJG3-3VJ"]},"GZNG-XYG":{first:"Christian",last:"Reimann",dates:"",father:"unscraped",mother:"unscraped",spouses:["L14F-X41"],children:["L5LC-9ZD"]},"L14F-X41":{first:"Margaretha",last:"Gubler",dates:"",father:"unscraped",mother:"unscraped",spouses:["GZNG-XYG"],children:["L5LC-9ZD"]},"G6GZ-CX7":{first:"Johann Sebas...",last:"Graf",dates:"1665-1726",father:null,mother:null,spouses:[null],children:["GNPV-5YG"]},"LVMN-25D":{first:"George",last:"Kreider",dates:"1703-1744",father:"L2TG-P68",mother:"LBG9-VD7",spouses:["GNPV-5YG"],children:["LK66-HXG"]},"GNPV-5YG":{first:"Barbara",last:"Graf",dates:"Deceased",father:"G6GZ-CX7",mother:null,spouses:["LVMN-25D"],children:["LK66-HXG"]},"GBN1-TVD":{first:"Hans",last:"Blauch I",dates:"1710-1765",father:null,mother:null,spouses:["GBJM-ZTG"],children:["GBJ9-958"]},"GBJM-ZTG":{first:"Anna Gosteli",last:"Blank",dates:"1710-Deceased",father:null,mother:null,spouses:["GBN1-TVD"],children:["GBJ9-958"]},"LBBH-KZ5":{first:"Johannes Michael",last:"Hess",dates:"1715-1760",father:"LBJF-X1F",mother:"L19M-FMG",spouses:["LK66-HXG","LK66-HXG"],children:["LVMN-PHY","MHN9-F8W"]},"LK66-HXG":{first:"Barbara",last:"Kreider",dates:"1721-1790",father:"LVMN-25D",mother:"GNPV-5YG",spouses:["LBBH-KZ5","LBBH-KZ5"],children:["LVMN-PHY","MHN9-F8W"]},"GBJ9-958":{first:"Hans",last:"Plough II",dates:"1740-1819",father:"GBN1-TVD",mother:"GBJM-ZTG",spouses:["GBJ9-WQ1"],children:["KL8C-5MY"]},"GBJ9-WQ1":{first:"Anna",last:"",dates:"1745-Deceased",father:null,mother:null,spouses:["GBJ9-958"],children:["KL8C-5MY"]},"LVMN-PHY":{first:"Samuel Kreider",last:"Hess",dates:"1753-1819",father:"LBBH-KZ5",mother:"LK66-HXG",spouses:["LDMX-5G2"],children:["LDMX-5WQ"]},"LDMX-5G2":{first:"Anna Shirk",last:"Martin",dates:"1760-1822",father:null,mother:null,spouses:["LVMN-PHY"],children:["LDMX-5WQ"]},"KL8C-5MY":{first:"John",last:"Plough",dates:"1775-1840",father:"GBJ9-958",mother:"GBJ9-WQ1",spouses:["LDMX-5WQ"],children:["L9HS-ZC2"]},"LDMX-5WQ":{first:"Susanna Martin",last:"Hess",dates:"1785-1851",father:"LVMN-PHY",mother:"LDMX-5G2",spouses:["KL8C-5MY"],children:["L9HS-ZC2"]},"KC45-29R":{first:"Christian",last:"Zimmerman",dates:"",father:"unscraped",mother:"unscraped",spouses:["KZ5K-5DL"],children:["9MT5-J6P"]},"KZ5K-5DL":{first:"Anna",last:"Buoss",dates:"",father:"unscraped",mother:"unscraped",spouses:["KC45-29R"],children:["9MT5-J6P"]},"LCJZ-PYM":{first:"Peter Hans",last:"Gilgen",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCJZ-P5Z"],children:["LCF6-LW1"]},"LCJZ-P5Z":{first:"Elsbeth",last:"Rohrbach",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCJZ-PYM"],children:["LCF6-LW1"]},"LXW3-JYT":{first:"Hans Heinrich",last:"Kündig",dates:"",father:"unscraped",mother:"unscraped",spouses:["GXWF-BMX"],children:["LRYX-2T7"]},"GXWF-BMX":{first:"Dorothea",last:"Schärer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LXW3-JYT"],children:["LRYX-2T7"]},"GFK3-M52":{first:"Jacob",last:"Wymann",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZRC-RX2"],children:["K84H-5DP"]},"LZRC-RX2":{first:"Regel",last:"Weber",dates:"",father:"unscraped",mother:"unscraped",spouses:["GFK3-M52"],children:["K84H-5DP"]},"GX3C-WN3":{first:"Conradus",last:"Rutt",dates:"",father:"unscraped",mother:"unscraped",spouses:["GX3C-XS3"],children:["9N5H-Q9C"]},"GX3C-XS3":{first:"Catharine",last:"Fest",dates:"",father:"unscraped",mother:"unscraped",spouses:["GX3C-WN3"],children:["9N5H-Q9C"]},"M35G-XYJ":{first:"Johann Adam",last:"Weber",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZLF-PRG"],children:["LZLF-DBF"]},"LZLF-PRG":{first:"Christina",last:"Reichler",dates:"",father:"unscraped",mother:"unscraped",spouses:["M35G-XYJ"],children:["LZLF-DBF"]},"LZCP-5PC":{first:"Johann Adam",last:"Mohr",dates:"",father:"unscraped",mother:"unscraped",spouses:["LXQ5-R4F"],children:["LZLF-6SD"]},"LXQ5-R4F":{first:"Anna Sibilla",last:"Eberhard",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZCP-5PC"],children:["LZLF-6SD"]},"GWZ7-JF4":{first:"Jacob Guillaume",last:"Martin",dates:"",father:"unscraped",mother:"unscraped",spouses:["GWZ7-T3J"],children:["GW7J-76Q"]},"GWZ7-T3J":{first:"Perette",last:"Herbillon",dates:"",father:"unscraped",mother:"unscraped",spouses:["GWZ7-JF4"],children:["GW7J-76Q"]},"LH5N-8N8":{first:"Sigmund",last:"Dold",dates:"",father:"unscraped",mother:"unscraped",spouses:["LH5R-RSD"],children:["LVHK-1PQ"]},"LH5R-RSD":{first:"Barbara",last:"Fattlin",dates:"",father:"unscraped",mother:"unscraped",spouses:["LH5N-8N8"],children:["LVHK-1PQ"]},"9MD7-R4P":{first:"Jacob",last:"Brupbacher",dates:"",father:"unscraped",mother:"unscraped",spouses:["LBJL-X7P"],children:["GX7W-9X6"]},"LBJL-X7P":{first:"Barbara",last:"Sennhauser",dates:"",father:"unscraped",mother:"unscraped",spouses:["9MD7-R4P"],children:["GX7W-9X6"]},"9438-6C1":{first:"Hans Christian",last:"Herr",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCPL-2F6"],children:["KFR6-VF6"]},"LCPL-2F6":{first:"Anna Catherine",last:"Haas",dates:"",father:"unscraped",mother:"unscraped",spouses:["9438-6C1"],children:["KFR6-VF6"]},"LVJ9-FL6":{first:"Hans Jacob",last:"Kündig",dates:"",father:"unscraped",mother:"unscraped",spouses:["GMB4-YDM"],children:["LHXB-NR2"]},"GMB4-YDM":{first:"Elspeth Jane",last:"Meili",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVJ9-FL6"],children:["LHXB-NR2"]},"9MT5-J6P":{first:"Hans",last:"Zimmerman",dates:"1635-1708",father:"KC45-29R",mother:"KZ5K-5DL",spouses:["LCF6-LW1"],children:["LH5V-WQC"]},"LCF6-LW1":{first:'Barbara "Bar...',last:"",dates:"1639-1700",father:"LCJZ-PYM",mother:"LCJZ-P5Z",spouses:["9MT5-J6P"],children:["LH5V-WQC"]},"LRYX-2T7":{first:"Hans Jacob",last:"Kündig",dates:"1671-1735",father:"LXW3-JYT",mother:"GXWF-BMX",spouses:["K84H-5DP"],children:["G3XG-L1H"]},"K84H-5DP":{first:"Susanna",last:"Wymann",dates:"1674-1715",father:"GFK3-M52",mother:"LZRC-RX2",spouses:["LRYX-2T7"],children:["G3XG-L1H"]},"9N5H-Q9C":{first:"Peter",last:"Rutt",dates:"1679-Deceased",father:"GX3C-WN3",mother:"GX3C-XS3",spouses:["GD3P-6BX"],children:["LZGB-4SC"]},"GD3P-6BX":{first:"Anna",last:"Rinsler",dates:"1675-Deceased",father:null,mother:null,spouses:["9N5H-Q9C"],children:["LZGB-4SC"]},"LZLF-DBF":{first:"Joannis Mich...",last:"Weber",dates:"1667-1731",father:"M35G-XYJ",mother:"LZLF-PRG",spouses:["LZLF-6SD"],children:["G2F4-3V8"]},"LZLF-6SD":{first:"Anna Catharina",last:"Mohr",dates:"1674-1727",father:"LZCP-5PC",mother:"LXQ5-R4F",spouses:["LZLF-DBF"],children:["G2F4-3V8"]},"LH5V-WQC":{first:"Niclaus",last:"Zimmermann",dates:"1670-1739",father:"9MT5-J6P",mother:"LCF6-LW1",spouses:["G22C-774"],children:["MPTQ-Q3N"]},"G22C-774":{first:"Verena",last:"Spring",dates:"1669-Deceased",father:null,mother:null,spouses:["LH5V-WQC"],children:["MPTQ-Q3N"]},"GDWX-CSD":{first:"Henry",last:"Weber",dates:"1690-1745",father:"LY8Q-JKR",mother:"LDQB-2W8",spouses:["G3XG-L1H"],children:["L7BF-8VS"]},"G3XG-L1H":{first:"Magdalena Maudlin",last:"Kundig",dates:"1703-1758",father:"LRYX-2T7",mother:"K84H-5DP",spouses:["GDWX-CSD"],children:["L7BF-8VS"]},"LZGB-4SC":{first:"Christian Rinsler",last:"Rutt",dates:"1703-1801",father:"9N5H-Q9C",mother:"GD3P-6BX",spouses:["G2F4-3V8"],children:["LZLD-FL5"]},"G2F4-3V8":{first:"Anna",last:"Weber",dates:"1707-1777",father:"LZLF-DBF",mother:"LZLF-6SD",spouses:["LZGB-4SC"],children:["LZLD-FL5"]},"L2L8-2JB":{first:"Rev Jacob Hein...",last:"Weber",dates:"1688-1747",father:"LY8Q-JKR",mother:"LDQB-2W8",spouses:["L69M-QPQ"],children:["LD1F-6FL"]},"L69M-QPQ":{first:"Anna Cecilia",last:"Baumann",dates:"1703-1777",father:"LZW3-K47",mother:"LYQC-6L9",spouses:["L2L8-2JB"],children:["LD1F-6FL"]},"MPTQ-Q3N":{first:"Hans",last:"Zimmerman",dates:"1720-1786",father:"LH5V-WQC",mother:"G22C-774",spouses:["L7BF-8VS"],children:["G3VQ-DB3"]},"L7BF-8VS":{first:"Anna Elisabetha",last:"Weber",dates:"1720-1784",father:"GDWX-CSD",mother:"G3XG-L1H",spouses:["MPTQ-Q3N"],children:["G3VQ-DB3"]},"LZLD-FL5":{first:"Christian Weber",last:"Rutt",dates:"1727-1804",father:"LZGB-4SC",mother:"G2F4-3V8",spouses:["LD1F-6FL"],children:["LD5G-SDD"]},"LD1F-6FL":{first:"Anna",last:"Weber",dates:"1727-1805",father:"L2L8-2JB",mother:"L69M-QPQ",spouses:["LZLD-FL5"],children:["LD5G-SDD"]},"G3VQ-DB3":{first:"Christian Weber",last:"Zimmerman",dates:"1750-1817",father:"MPTQ-Q3N",mother:"L7BF-8VS",spouses:["LD5G-SDD"],children:["LC7H-17V"]},"LD5G-SDD":{first:"Barbara Weber",last:"Rutt",dates:"1750-1811",father:"LZLD-FL5",mother:"LD1F-6FL",spouses:["G3VQ-DB3"],children:["LC7H-17V"]},"LC7H-17V":{first:"Peter",last:"Zimmerman",dates:"1776-1862",father:"G3VQ-DB3",mother:"LD5G-SDD",spouses:["L41N-R31"],children:["L9HS-ZD2"]},"L41N-R31":{first:"Esther",last:"Martin",dates:"1776-1835",father:"L12Z-FPQ",mother:"LK7K-ML8",spouses:["LC7H-17V"],children:["L9HS-ZD2"]},"G6S9-J4L":{first:"Hans Jacob",last:"Müller",dates:"",father:"unscraped",mother:"unscraped",spouses:["GCB5-TQX"],children:["L24W-HSL"]},"GCB5-TQX":{first:"Salome",last:"Huber",dates:"",father:"unscraped",mother:"unscraped",spouses:["G6S9-J4L"],children:["L24W-HSL"]},"9K61-N6F":{first:"Johann Jacob",last:"Berchtol",dates:"",father:"unscraped",mother:"unscraped",spouses:["GD66-KBG"],children:["LRPT-YXM"]},"GD66-KBG":{first:"Mrs Johann J...",last:"Berchtol",dates:"",father:"unscraped",mother:"unscraped",spouses:["9K61-N6F"],children:["LRPT-YXM"]},"KVL3-SPJ":{first:"Christen",last:"Lutz II",dates:"",father:"unscraped",mother:"unscraped",spouses:["L71Y-2J9"],children:["LD3Q-91S"]},"L71Y-2J9":{first:"Catharina",last:"Tobler",dates:"",father:"unscraped",mother:"unscraped",spouses:["KVL3-SPJ"],children:["LD3Q-91S"]},"LVFJ-GXV":{first:"Melchior",last:"Brönnimann",dates:"1631-1672",father:"MWTC-QSY",mother:"LL7M-6SV",spouses:["LKDQ-Z1B"],children:["L6QG-9BJ"]},"LKDQ-Z1B":{first:"Christina",last:"Reusser",dates:"1636-1675",father:"L6D1-JBN",mother:"L7FB-6CZ",spouses:["LVFJ-GXV"],children:["L6QG-9BJ"]},"LTVD-MSX":{first:"Hans Heinrich",last:"Guth Good",dates:"1653-1745",father:"G1CT-YR5",mother:"G1B2-XNH",spouses:["LKV5-SQ4"],children:["GGKX-4C8"]},"LKV5-SQ4":{first:"Anna",last:"Leuenberger",dates:"1653-1750",father:null,mother:null,spouses:["LTVD-MSX"],children:["GGKX-4C8"]},"L24W-HSL":{first:"Johann Michael",last:"Müller Sr",dates:"1655-1695",father:"G6S9-J4L",mother:"GCB5-TQX",spouses:["GPL5-62B"],children:["L5TF-M4F"]},"GPL5-62B":{first:"Irene",last:"Charitas",dates:"1670-1692",father:null,mother:null,spouses:["L24W-HSL"],children:["L5TF-M4F"]},"LRPT-YXM":{first:"Hanss",last:"Berchtoll",dates:"1641-1711",father:"9K61-N6F",mother:"GD66-KBG",spouses:["LD3Q-91S"],children:["LYY8-LPC"]},"LD3Q-91S":{first:"Anna Christina",last:"Lutz",dates:"1655-1697",father:"KVL3-SPJ",mother:"L71Y-2J9",spouses:["LRPT-YXM"],children:["LYY8-LPC"]},"G8NM-5Z2":{first:"Johannes",last:"Brombach",dates:"Deceased",father:null,mother:null,spouses:["G8NM-TVM"],children:["G7FW-KJN"]},"G8NM-TVM":{first:"Anna Margaret",last:"Waffenschmidt",dates:"Deceased",father:null,mother:null,spouses:["G8NM-5Z2"],children:["G7FW-KJN"]},"MY2Y-2J5":{first:"Pancratio",last:"Kaller",dates:"1670-Deceased",father:null,mother:null,spouses:["MY2Y-2KG"],children:["M73C-VKZ"]},"MY2Y-2KG":{first:"Elisabetha",last:"Strieder",dates:"1670-Deceased",father:null,mother:null,spouses:["MY2Y-2J5"],children:["M73C-VKZ"]},"L6QG-9BJ":{first:"Melchior",last:"Brenneman",dates:"1665-1736",father:"LVFJ-GXV",mother:"LKDQ-Z1B",spouses:["L61F-2NC","L61F-2NC","L61F-2NC","L61F-2NC"],children:["KCKH-F54","L6S3-BQR","LZL8-B5D","L61V-K6H"]},"L61F-2NC":{first:"Elizabeth Jane",last:"Stehman",dates:"1670-1737",father:"GX3P-D83",mother:"G6Q4-J14",spouses:["L6QG-9BJ","L6QG-9BJ","L6QG-9BJ","L6QG-9BJ"],children:["KCKH-F54","L6S3-BQR","LZL8-B5D","L61V-K6H"]},"GGKX-4C8":{first:"Peter Guth",last:"Good",dates:"1685-1754",father:"LTVD-MSX",mother:"LKV5-SQ4",spouses:["LTV8-LHL"],children:["L61F-5B7"]},"LTV8-LHL":{first:"Margareth",last:"Geetha",dates:"1685-1770",father:null,mother:null,spouses:["GGKX-4C8"],children:["L61F-5B7"]},"L5TF-M4F":{first:'Johann "Michael"',last:"Müller Jr",dates:"1692-1771",father:"L24W-HSL",mother:"GPL5-62B",spouses:["LYY8-LPC"],children:["MDBF-VWG"]},"LYY8-LPC":{first:"Susanna Agnes",last:"Berchtol",dates:"1688-1752",father:"LRPT-YXM",mother:"LD3Q-91S",spouses:["L5TF-M4F"],children:["MDBF-VWG"]},"G7FW-KJN":{first:"Johann Friederich",last:"Brumbaugh",dates:"1700-1792",father:"G8NM-5Z2",mother:"G8NM-TVM",spouses:["M73C-VKZ"],children:["LYFZ-DG2"]},"M73C-VKZ":{first:"Susanna",last:"Kaller",dates:"1706-1790",father:"MY2Y-2J5",mother:"MY2Y-2KG",spouses:["G7FW-KJN"],children:["LYFZ-DG2"]},"KCKH-F54":{first:"Melchior",last:"Brenneman Jr",dates:"1718-1794",father:"L6QG-9BJ",mother:"L61F-2NC",spouses:["L61F-5B7","L61F-5B7"],children:["L23N-K45","LHP4-SNF"]},"L61F-5B7":{first:"Anna",last:"Good",dates:"1722-1800",father:"GGKX-4C8",mother:"LTV8-LHL",spouses:["KCKH-F54","KCKH-F54"],children:["L23N-K45","LHP4-SNF"]},"9F3Y-QY6":{first:"Christian",last:"Bucher",dates:"1716-Deceased",father:null,mother:null,spouses:["4Q95-269"],children:["L79W-PB5"]},"4Q95-269":{first:"?",last:"",dates:"1721-Deceased",father:null,mother:null,spouses:["9F3Y-QY6"],children:["L79W-PB5"]},"MDBF-VWG":{first:"Johannes Michael",last:"Müller-Miller",dates:"1719-1784",father:"L5TF-M4F",mother:"LYY8-LPC",spouses:["LYFZ-DG2"],children:["2MGP-HFS"]},"LYFZ-DG2":{first:"Elisabeth A",last:"Brumbaugh",dates:"1728-1795",father:"G7FW-KJN",mother:"M73C-VKZ",spouses:["MDBF-VWG"],children:["2MGP-HFS"]},"LJK6-X87":{first:"Michael",last:"King",dates:"1740-Deceased",father:null,mother:null,spouses:["LK7M-JVR"],children:["27M8-L7F"]},"LK7M-JVR":{first:"Mrs Michael",last:"King",dates:"1740-Deceased",father:null,mother:null,spouses:["LJK6-X87"],children:["27M8-L7F"]},"L23N-K45":{first:"Melchior",last:"Brenneman 3rd",dates:"1741-1818",father:"KCKH-F54",mother:"L61F-5B7",spouses:["L79W-PB5"],children:["KZ3N-VRX"]},"L79W-PB5":{first:"Susanna",last:"Bucher",dates:"1745-1837",father:"9F3Y-QY6",mother:"4Q95-269",spouses:["L23N-K45"],children:["KZ3N-VRX"]},"2MGP-HFS":{first:"Adam",last:"Miller",dates:"1768-1833",father:"MDBF-VWG",mother:"LYFZ-DG2",spouses:["27M8-L7F"],children:["27MP-XHH"]},"27M8-L7F":{first:"Eva",last:"Rummel",dates:"1764-1866",father:"LJK6-X87",mother:"LK7M-JVR",spouses:["2MGP-HFS"],children:["27MP-XHH"]},"KZ3N-VRX":{first:"Melchior Bucher",last:"Brenneman - IV",dates:"1769-1812",father:"L23N-K45",mother:"L79W-PB5",spouses:[null],children:["L7P3-9H4"]},"27MP-XHH":{first:"Michael",last:"Miller",dates:"1793-1883",father:"2MGP-HFS",mother:"27M8-L7F",spouses:["L7P3-9H4"],children:["LB8D-STZ"]},"L7P3-9H4":{first:"Rebecca",last:"Brenneman",dates:"1796-1882",father:"KZ3N-VRX",mother:null,spouses:["27MP-XHH"],children:["LB8D-STZ"]},"G5QG-7MZ":{first:"Durs",last:"Hurst",dates:"",father:"unscraped",mother:"unscraped",spouses:["G5Q2-YWF"],children:["MM2T-P61"]},"G5Q2-YWF":{first:"Barbli",last:"Koler",dates:"",father:"unscraped",mother:"unscraped",spouses:["G5QG-7MZ"],children:["MM2T-P61"]},"MM2T-PXB":{first:"Benedikt",last:"Werd",dates:"",father:"unscraped",mother:"unscraped",spouses:["MM2T-PFX"],children:["MM2T-PXF"]},"MM2T-PFX":{first:"Ursi",last:"Waeber",dates:"",father:"unscraped",mother:"unscraped",spouses:["MM2T-PXB"],children:["MM2T-PXF"]},"2Z3K-D1B":{first:"Ulrich",last:"Bär",dates:"",father:"unscraped",mother:"unscraped",spouses:["GNP3-7Q7"],children:["G5FB-TRK"]},"GNP3-7Q7":{first:"Anna",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["2Z3K-D1B"],children:["G5FB-TRK"]},"L6HB-RNS":{first:"Michel",last:"Bachmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT5M-7N6"],children:["LTJX-GKJ"]},"GT5M-7N6":{first:"Maria Agatha",last:"Küntzi",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6HB-RNS"],children:["LTJX-GKJ"]},"2Q1T-BJF":{first:"Heinrich",last:"Schindler",dates:"",father:"unscraped",mother:"unscraped",spouses:["K233-6XN"],children:["L69C-76C"]},"K233-6XN":{first:"Barbara",last:"Luchsinger",dates:"",father:"unscraped",mother:"unscraped",spouses:["2Q1T-BJF"],children:["L69C-76C"]},"GSQ3-5C1":{first:"Rudolph",last:"Siegrist",dates:"",father:"unscraped",mother:"unscraped",spouses:["9DZV-JBW"],children:["K8JY-SGX"]},"9DZV-JBW":{first:"Barbara",last:"Matthiß",dates:"",father:"unscraped",mother:"unscraped",spouses:["GSQ3-5C1"],children:["K8JY-SGX"]},"LZLG-4HW":{first:"Andreas",last:"Heise",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZLG-4H6"],children:["LBJM-8B4"]},"LZLG-4H6":{first:"Margarethe",last:"Engelking",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZLG-4HW"],children:["LBJM-8B4"]},"GDRH-38X":{first:"Stephen",last:"Tappe",dates:"",father:"unscraped",mother:"unscraped",spouses:["GDRH-KXR"],children:["LBJM-H34"]},"GDRH-KXR":{first:"Mrs.",last:"Tappe",dates:"",father:"unscraped",mother:"unscraped",spouses:["GDRH-38X"],children:["LBJM-H34"]},"LYHX-3KZ":{first:"Andreas",last:"Bödecker",dates:"",father:"unscraped",mother:"unscraped",spouses:["G8Y9-392"],children:["LYHX-3KQ"]},"G8Y9-392":{first:"Catherine",last:"Sprouse",dates:"",father:"unscraped",mother:"unscraped",spouses:["LYHX-3KZ"],children:["LYHX-3KQ"]},"LYHX-WCF":{first:"Erich",last:"Erbsen",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["LYHX-SJ7"]},"MM2T-P61":{first:"Joseph",last:"Hurst",dates:"1665-Deceased",father:"G5QG-7MZ",mother:"G5Q2-YWF",spouses:["MM2T-PXF"],children:["GQ37-RP8"]},"MM2T-PXF":{first:"Barbara",last:"Werdtmueller",dates:"1670-Deceased",father:"MM2T-PXB",mother:"MM2T-PFX",spouses:["MM2T-P61"],children:["GQ37-RP8"]},"LDQZ-7ZN":{first:"Michael",last:"Schenk",dates:"1670-1727",father:"LZKH-RCG",mother:"LT2X-K1L",spouses:["G5FB-TRK"],children:["G6Y2-RXR"]},"G5FB-TRK":{first:"Anna",last:"Bär",dates:"1670-1763",father:"2Z3K-D1B",mother:"GNP3-7Q7",spouses:["LDQZ-7ZN"],children:["G6Y2-RXR"]},"LTJX-GKJ":{first:"Jacob",last:"Bachmann",dates:"1652-1700",father:"L6HB-RNS",mother:"GT5M-7N6",spouses:["L69C-76C"],children:["LDR5-W3Y"]},"L69C-76C":{first:"Barbara",last:"Schindler",dates:"1650-1700",father:"2Q1T-BJF",mother:"K233-6XN",spouses:["LTJX-GKJ"],children:["LDR5-W3Y"]},"K8JY-SGX":{first:"Jacob",last:"Sigrist",dates:"1663-1713",father:"GSQ3-5C1",mother:"9DZV-JBW",spouses:["GTYG-GYF"],children:["GT5B-N4S"]},"GTYG-GYF":{first:"Anna Maria\\M...",last:"Brenneman",dates:"1665-1702",father:null,mother:null,spouses:["K8JY-SGX"],children:["GT5B-N4S"]},"LBJM-8B4":{first:"Andreas",last:"Heise",dates:"1634-1711",father:"LZLG-4HW",mother:"LZLG-4H6",spouses:["LBJM-H34"],children:["LYHX-C6K"]},"LBJM-H34":{first:"Anna Margreta",last:"Tappe",dates:"1653-1729",father:"GDRH-38X",mother:"GDRH-KXR",spouses:["LBJM-8B4"],children:["LYHX-C6K"]},"LYHX-3KQ":{first:"Hans Heinrich",last:"Bödecker",dates:"1657-1717",father:"LYHX-3KZ",mother:"G8Y9-392",spouses:["LYHX-SJ7"],children:["LYHX-HD6"]},"LYHX-SJ7":{first:"Ilse Cathrine",last:"Erbsen",dates:"1657-1731",father:"LYHX-WCF",mother:null,spouses:["LYHX-3KQ"],children:["LYHX-HD6"]},"GQ37-RP8":{first:"Durs or Theodore",last:"Horsch",dates:"1690-1731",father:"MM2T-P61",mother:"MM2T-PXF",spouses:["G6Y2-RXR"],children:["LDJH-TB3"]},"G6Y2-RXR":{first:"Barbara",last:"Schenk",dates:"1691-1772",father:"LDQZ-7ZN",mother:"G5FB-TRK",spouses:["GQ37-RP8"],children:["LDJH-TB3"]},"GDQC-633":{first:"Ben",last:"Witmer",dates:"Deceased",father:null,mother:null,spouses:[null],children:["GZTW-61L"]},"LDR5-W3Y":{first:"Michael Melchior",last:"Bachmann",dates:"1692-1756",father:"LTJX-GKJ",mother:"L69C-76C",spouses:["GT5B-N4S"],children:["MNM1-475"]},"GT5B-N4S":{first:"Catherine Anna",last:"Sigrist or Ste...",dates:"1702-1766",father:"K8JY-SGX",mother:"GTYG-GYF",spouses:["LDR5-W3Y"],children:["MNM1-475"]},"LYHX-C6K":{first:"Andreas Heinrich",last:"Heise",dates:"1683-1751",father:"LBJM-8B4",mother:"LBJM-H34",spouses:["LYHX-HD6"],children:["LH3D-BGJ"]},"LYHX-HD6":{first:"Catharina Eliz...",last:"Bödecker",dates:"1683-1739",father:"LYHX-3KQ",mother:"LYHX-SJ7",spouses:["LYHX-C6K"],children:["LH3D-BGJ"]},"M6B2-GWB":{first:"Joannes Wilhelmus",last:"Brandt",dates:"Deceased",father:null,mother:null,spouses:["M6YP-231"],children:["LHR1-D6L"]},"M6YP-231":{first:"Anna Catharina",last:"Schickhaussen",dates:"Deceased",father:null,mother:null,spouses:["M6B2-GWB"],children:["LHR1-D6L"]},"LDJH-TB3":{first:"Michael",last:"Horst",dates:"1713-1772",father:"GQ37-RP8",mother:"G6Y2-RXR",spouses:["L23D-K3Z"],children:["L23D-DWR"]},"L23D-K3Z":{first:"Barbara",last:"",dates:"1720-1772",father:null,mother:null,spouses:["LDJH-TB3"],children:["L23D-DWR"]},"GZTW-61L":{first:"Peter",last:"Witmer",dates:"1708-1795",father:"GDQC-633",mother:null,spouses:["MNM1-475"],children:["KXJY-CZP"]},"MNM1-475":{first:"Anna Catharine",last:"Baughman",dates:"1720-1792",father:"LDR5-W3Y",mother:"GT5B-N4S",spouses:["GZTW-61L","LZRN-WVZ"],children:["KXJY-CZP","KFKT-M5X"]},"LH3D-BGJ":{first:"Johann Hans",last:"Heise",dates:"1707-1759",father:"LYHX-C6K",mother:"LYHX-HD6",spouses:["LHR1-D6L"],children:["MFFM-CK7"]},"LHR1-D6L":{first:"Charlotte Justine",last:"Brandt",dates:"1705-1811",father:"M6B2-GWB",mother:"M6YP-231",spouses:["LH3D-BGJ"],children:["MFFM-CK7"]},"L23D-DWR":{first:"Joseph",last:"Horst",dates:"1743-1791",father:"LDJH-TB3",mother:"L23D-K3Z",spouses:["KXJY-CZP"],children:["KLYJ-1J4"]},"KXJY-CZP":{first:"Catharine",last:"Witmer",dates:"1749-1788",father:"GZTW-61L",mother:"MNM1-475",spouses:["L23D-DWR"],children:["KLYJ-1J4"]},"MFFM-CK7":{first:"Michael",last:"Heisey",dates:"1745-1800",father:"LH3D-BGJ",mother:"LHR1-D6L",spouses:["LHR1-DWS"],children:["KL4J-TK9"]},"LHR1-DWS":{first:"Barbara",last:"Yordy",dates:"1748-1811",father:null,mother:null,spouses:["MFFM-CK7"],children:["KL4J-TK9"]},"KLYJ-1J4":{first:"Peter Witmer",last:"Horst",dates:"1770-1843",father:"L23D-DWR",mother:"KXJY-CZP",spouses:["KL4J-TK9"],children:["LC5D-BX1"]},"KL4J-TK9":{first:"Elizabeth Margarita",last:"Heisey",dates:"1780-1833",father:"MFFM-CK7",mother:"LHR1-DWS",spouses:["KLYJ-1J4"],children:["LC5D-BX1"]},"LDJN-KKC":{first:"Andreas",last:"Hirschi",dates:"",father:"unscraped",mother:"unscraped",spouses:["G49L-79Z"],children:["G492-V3F"]},"G49L-79Z":{first:"Christina M",last:"Danner",dates:"",father:"unscraped",mother:"unscraped",spouses:["LDJN-KKC"],children:["G492-V3F"]},"L7PC-1JW":{first:"Bendicht",last:"Scholl",dates:"",father:"unscraped",mother:"unscraped",spouses:["L7PC-1LC"],children:["M6MW-YDX"]},"L7PC-1LC":{first:"Christina",last:"Baumgarter",dates:"",father:"unscraped",mother:"unscraped",spouses:["L7PC-1JW"],children:["M6MW-YDX"]},"GGPM-KQG":{first:"Hans",last:"Bertschinger",dates:"",father:"unscraped",mother:"unscraped",spouses:["L199-7X1"],children:["KJPX-G8R"]},"L199-7X1":{first:"Verena",last:"Rellstab",dates:"",father:"unscraped",mother:"unscraped",spouses:["GGPM-KQG"],children:["KJPX-G8R"]},"G1RN-HS1":{first:"Bartti",last:"Sieg",dates:"",father:"unscraped",mother:"unscraped",spouses:["G1RN-CP2"],children:["LVJ8-DNL"]},"G1RN-CP2":{first:"Elizabeth",last:"Fischer",dates:"",father:"unscraped",mother:"unscraped",spouses:["G1RN-HS1"],children:["LVJ8-DNL"]},"LV2N-7YK":{first:"Antonio",last:"Barbier",dates:"",father:"unscraped",mother:"unscraped",spouses:["KJW4-G6Y"],children:["L3ML-X2S"]},"KJW4-G6Y":{first:"Vittoria",last:"Cavassa",dates:"",father:"unscraped",mother:"unscraped",spouses:["LV2N-7YK"],children:["L3ML-X2S"]},"MMRS-4W9":{first:"Wolfgang",last:"Neukommet",dates:"",father:"unscraped",mother:"unscraped",spouses:["K2NL-F6D"],children:["LCZ8-5V2"]},"K2NL-F6D":{first:"Elsbeth or E...",last:"Opplinger St...",dates:"",father:"unscraped",mother:"unscraped",spouses:["MMRS-4W9"],children:["LCZ8-5V2"]},"GK4M-4VF":{first:"Felix",last:"Müller",dates:"",father:"unscraped",mother:"unscraped",spouses:["GK4M-Z8Q"],children:["GK4M-L57"]},"GK4M-Z8Q":{first:"Esther",last:"Kerez",dates:"",father:"unscraped",mother:"unscraped",spouses:["GK4M-4VF"],children:["GK4M-L57"]},"LVJ8-DNL":{first:"Bartholomaeus",last:"Siegrist",dates:"1663-1735",father:"G1RN-HS1",mother:"G1RN-CP2",spouses:["L3ML-X2S"],children:["LHDF-2BV"]},"L3ML-X2S":{first:"Anna Maria B...",last:"Barbier",dates:"1672-1710",father:"LV2N-7YK",mother:"KJW4-G6Y",spouses:["LVJ8-DNL"],children:["LHDF-2BV"]},"LCZ8-5V2":{first:"Christian",last:"Neukommet",dates:"1660-Deceased",father:"MMRS-4W9",mother:"K2NL-F6D",spouses:["9N8V-RT4"],children:["L7B1-X5D"]},"9N8V-RT4":{first:"Anna Elizabeth",last:"Brecht",dates:"1663-1788",father:null,mother:null,spouses:["LCZ8-5V2"],children:["L7B1-X5D"]},"GMSX-5LP":{first:"Daniel",last:"Newcomer",dates:"1644-1700",father:null,mother:null,spouses:[null],children:["KH59-3QP"]},"LHDF-2BV":{first:"Michael",last:"Siegrist",dates:"1695-1750",father:"LVJ8-DNL",mother:"L3ML-X2S",spouses:["LHDF-LSY"],children:["LVJ8-6QN"]},"LHDF-LSY":{first:"Anna Margaret",last:"Garber",dates:"1696-1781",father:null,mother:null,spouses:["LHDF-2BV"],children:["LVJ8-6QN"]},"L7B1-X5D":{first:"Hans",last:"Neukommet",dates:"1695-1732",father:"LCZ8-5V2",mother:"9N8V-RT4",spouses:["MSDV-VPR"],children:["KCQJ-81Y"]},"MSDV-VPR":{first:"Elizabeth",last:"",dates:"1699-Deceased",father:null,mother:null,spouses:["L7B1-X5D"],children:["KCQJ-81Y"]},"K2XH-6GM":{first:"John",last:"Myers",dates:"1711-1814",father:null,mother:null,spouses:["MWR7-D49"],children:["L44L-7T7"]},"MWR7-D49":{first:"Mrs.",last:"Myers",dates:"1707-1817",father:null,mother:null,spouses:["K2XH-6GM"],children:["L44L-7T7"]},"KH59-3QP":{first:"Johannes",last:"Newcomer",dates:"1700-1805",father:"GMSX-5LP",mother:null,spouses:["KHCL-MGF"],children:["LKTJ-62L"]},"KHCL-MGF":{first:"Anna Elizabeth",last:"Brecht",dates:"1700-1788",father:null,mother:null,spouses:["KH59-3QP"],children:["LKTJ-62L"]},"LVJ8-6QN":{first:"Michael",last:"Siegrist II",dates:"1721-1797",father:"LHDF-2BV",mother:"LHDF-LSY",spouses:["KCQJ-81Y"],children:["L7TY-LQP"]},"KCQJ-81Y":{first:"Magdalena",last:"Neukommet",dates:"1722-1788",father:"L7B1-X5D",mother:"MSDV-VPR",spouses:["LVJ8-6QN"],children:["L7TY-LQP"]},"LH62-SK3":{first:"Johannes",last:"Herr",dates:"1726-1796",father:"LYLT-K2J",mother:"LRLM-XCM",spouses:["L44L-7T7"],children:["LBWM-D5Q"]},"L44L-7T7":{first:"Mary",last:"Myers",dates:"1731-1807",father:"K2XH-6GM",mother:"MWR7-D49",spouses:["LH62-SK3"],children:["LBWM-D5Q"]},"97QZ-9R1":{first:"Jacob",last:"Hershey",dates:"1742-1825",father:"LDFL-R3C",mother:"29H3-QH7",spouses:["LKTJ-62L"],children:["LC6B-K15"]},"LKTJ-62L":{first:"Anna",last:"Newcomer",dates:"1752-1832",father:"KH59-3QP",mother:"KHCL-MGF",spouses:["97QZ-9R1"],children:["LC6B-K15"]},"L7TY-LQP":{first:"John Heistand",last:"Siegrist",dates:"1758-1823",father:"LVJ8-6QN",mother:"KCQJ-81Y",spouses:["LBWM-D5Q"],children:["LC6B-2MY"]},"LBWM-D5Q":{first:"Fanny",last:"Herr",dates:"1765-1845",father:"LH62-SK3",mother:"L44L-7T7",spouses:["L7TY-LQP"],children:["LC6B-2MY"]},"LC6B-K15":{first:"Abraham Newcomer",last:"Hershey",dates:"1787-1844",father:"97QZ-9R1",mother:"LKTJ-62L",spouses:["LC6B-2MY"],children:["LC6B-KG7"]},"LC6B-2MY":{first:"Maria Herr",last:"Siegrist",dates:"1794-1820",father:"L7TY-LQP",mother:"LBWM-D5Q",spouses:["LC6B-K15"],children:["LC6B-KG7"]},"LT6T-3J2":{first:"Heinrich",last:"Bär",dates:"",father:"unscraped",mother:"unscraped",spouses:["K643-D44"],children:["LHXG-WF6"]},"K643-D44":{first:"Barbara",last:"Frick",dates:"",father:"unscraped",mother:"unscraped",spouses:["LT6T-3J2"],children:["LHXG-WF6"]},"MGJ7-WK9":{first:"",last:"Rech",dates:"",father:"unscraped",mother:"unscraped",spouses:["4GYZ-1W9"],children:["KFY8-6DK"]},"4GYZ-1W9":{first:"?",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["MGJ7-WK9"],children:["KFY8-6DK"]},"LZ42-Q4N":{first:"Ulrich",last:"Meister",dates:"",father:"unscraped",mother:"unscraped",spouses:["K2W1-P24"],children:["G759-WTG"]},"K2W1-P24":{first:"Barbara",last:"Ruch",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZ42-Q4N"],children:["G759-WTG"]},"G5LZ-FRD":{first:"Hanss",last:"Huber",dates:"Deceased",father:null,mother:null,spouses:["LHXG-WF6"],children:["G5L8-769"]},"LHXG-WF6":{first:"Barbara",last:"Bär",dates:"1684-Deceased",father:"LT6T-3J2",mother:"K643-D44",spouses:["G5LZ-FRD"],children:["G5L8-769"]},"K4DS-CYK":{first:"Georg",last:"Berr",dates:"1660-Deceased",father:null,mother:null,spouses:["KZD9-G7S"],children:["MT5J-LZJ"]},"KZD9-G7S":{first:"Mrs. Georg",last:"Berr",dates:"1664-Deceased",father:null,mother:null,spouses:["K4DS-CYK"],children:["MT5J-LZJ"]},"KFY8-6DK":{first:"Samuel",last:"Rech",dates:"1672-Deceased",father:"MGJ7-WK9",mother:"4GYZ-1W9",spouses:["K6WQ-THB"],children:["9MG9-2RJ"]},"K6WQ-THB":{first:"Anna",last:"Sibylle",dates:"1676-Deceased",father:null,mother:null,spouses:["KFY8-6DK"],children:["9MG9-2RJ"]},"LD8C-6G4":{first:"Reverend Ben...",last:"Brechbühl",dates:"1666-1720",father:"9VV6-SVR",mother:"LF5Q-GVK",spouses:["G759-WTG","G759-WTG","G759-WTG"],children:["LJ2W-DK7","LZJM-JCK","LRSD-ZW6"]},"G759-WTG":{first:"Verena",last:"Meister",dates:"1678-1725",father:"LZ42-Q4N",mother:"K2W1-P24",spouses:["LD8C-6G4","LD8C-6G4","LD8C-6G4"],children:["LJ2W-DK7","LZJM-JCK","LRSD-ZW6"]},"MTZ8-GVP":{first:"Anna Catharina",last:"Groff",dates:"1720-1759",father:"LY4T-49S",mother:"LR26-74M",spouses:["LRKB-YFQ"],children:["LCPH-58Q"]},"L6WN-D56":{first:"Marcus",last:"Groff",dates:"1712-1791",father:"LRXJ-8KK",mother:"LW3R-Q1M",spouses:["G5L8-769"],children:["LKHL-3D2"]},"G5L8-769":{first:"Anna Elizabeth",last:"Huber",dates:"1713-1779",father:"G5LZ-FRD",mother:"LHXG-WF6",spouses:["L6WN-D56"],children:["LKHL-3D2"]},"MT5J-LZJ":{first:"Johannes",last:"Berr",dates:"1692-Deceased",father:"K4DS-CYK",mother:"KZD9-G7S",spouses:["9MG9-2RJ"],children:["LHQH-Y1B"]},"9MG9-2RJ":{first:"Eva Catharina",last:"Rech",dates:"1698-Deceased",father:"KFY8-6DK",mother:"K6WQ-THB",spouses:["MT5J-LZJ"],children:["LHQH-Y1B"]},"MPGQ-1SN":{first:"Emanuel",last:"Herr",dates:"1689-1740",father:"KFR6-VF6",mother:"LHXB-NR2",spouses:["LJ2W-DK7"],children:["LJ2W-4HV"]},"LJ2W-DK7":{first:"Maudlin Magdalena",last:"Brackbill",dates:"1699-1760",father:"LD8C-6G4",mother:"G759-WTG",spouses:["MPGQ-1SN"],children:["LJ2W-4HV"]},"L5GC-J7L":{first:"Henry",last:"Shenk",dates:"1700-1762",father:"L8W3-T9N",mother:"LVXK-PF7",spouses:["L226-3J2"],children:["L22D-BS5"]},"L226-3J2":{first:"Mrs. Margaret",last:"Schenk",dates:"1705-Deceased",father:null,mother:null,spouses:["L5GC-J7L"],children:["L22D-BS5"]},"LCPH-58Q":{first:"Michael Groff",last:"Martin",dates:"1747-1831",father:"LRKB-YFQ",mother:"MTZ8-GVP",spouses:["LKHL-3D2"],children:["LKHL-34Y"]},"LKHL-3D2":{first:"Barbara",last:"Groff",dates:"1744-1813",father:"L6WN-D56",mother:"G5L8-769",spouses:["LCPH-58Q"],children:["LKHL-34Y"]},"LHQH-Y1B":{first:"Peter",last:"Baer",dates:"1736-1790",father:"MT5J-LZJ",mother:"9MG9-2RJ",spouses:["L2WS-GXW"],children:["K2VS-WNC"]},"L2WS-GXW":{first:"Magdalena",last:"Engle",dates:"1750-1814",father:null,mother:null,spouses:["LHQH-Y1B"],children:["K2VS-WNC"]},"LJ2W-4HV":{first:"John Brackbill",last:"Herr",dates:"1719-1797",father:"MPGQ-1SN",mother:"LJ2W-DK7",spouses:["L22D-BS5"],children:["LH7W-MM8"]},"L22D-BS5":{first:"Esther",last:"Shenk",dates:"1731-1801",father:"L5GC-J7L",mother:"L226-3J2",spouses:["LJ2W-4HV"],children:["LH7W-MM8"]},"LKHL-34Y":{first:"David Groff",last:"Martin",dates:"1766-1836",father:"LCPH-58Q",mother:"LKHL-3D2",spouses:["K2VS-WNC"],children:["K2V6-FY1"]},"K2VS-WNC":{first:"Anna Mary",last:"Groff",dates:"1771-1830",father:"LHQH-Y1B",mother:"L2WS-GXW",spouses:["LKHL-34Y"],children:["K2V6-FY1"]},"LW35-XMW":{first:"Peter",last:"Witmer",dates:"1760-1833",father:null,mother:null,spouses:["LH7W-MM8"],children:["LVJM-HMK"]},"LH7W-MM8":{first:"Esther Shenk",last:"Herr",dates:"1762-1813",father:"LJ2W-4HV",mother:"L22D-BS5",spouses:["LW35-XMW"],children:["LVJM-HMK"]},"K2V6-FY1":{first:"Michael Groff",last:"Martin",dates:"1791-1823",father:"LKHL-34Y",mother:"K2VS-WNC",spouses:["LVJM-HMK"],children:["LC6B-L7Y"]},"LVJM-HMK":{first:"Anna 'Nancy'",last:"Witmer",dates:"1793-1832",father:"LW35-XMW",mother:"LH7W-MM8",spouses:["K2V6-FY1"],children:["LC6B-L7Y"]},"L6JD-FMF":{first:"Rudolph",last:"Baumann",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZK3-47D"],children:["L1XZ-9KS"]},"LZK3-47D":{first:"Margaretha",last:"Landis",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6JD-FMF"],children:["L1XZ-9KS"]},"GT5X-37F":{first:"",last:"Greiter",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT5X-QHD"],children:["G9VF-F7Q"]},"GT5X-QHD":{first:"",last:"Greiter",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT5X-37F"],children:["G9VF-F7Q"]},"GTBT-XWX":{first:"",last:"Schenck",dates:"",father:"unscraped",mother:"unscraped",spouses:["GTBT-MFZ"],children:["GX46-KMC"]},"GTBT-MFZ":{first:"",last:"Schenck",dates:"",father:"unscraped",mother:"unscraped",spouses:["GTBT-XWX"],children:["GX46-KMC"]},"LZGQ-MRR":{first:"Heinrich",last:"Fiechter",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZGQ-MRT"],children:["G7J5-L72"]},"LZGQ-MRT":{first:"Eva",last:"Anishaenslin",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZGQ-MRR"],children:["G7J5-L72"]},"GT5X-F3V":{first:"",last:"Gersterin",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT5X-Q3D"],children:["KZHP-4FG"]},"GT5X-Q3D":{first:"",last:"Gersterin",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT5X-F3V"],children:["KZHP-4FG"]},"GYJL-LDC":{first:"Peter",last:"Lemann",dates:"1679-Deceased",father:null,mother:null,spouses:["GYLN-MCG"],children:["LZFX-J5G"]},"GYLN-MCG":{first:"Anna",last:"Lehmann",dates:"1679-Deceased",father:null,mother:null,spouses:["GYJL-LDC"],children:["LZFX-J5G"]},"L6S3-BQR":{first:"Christopher St...",last:"Brenneman",dates:"1702-1758",father:"L6QG-9BJ",mother:"L61F-2NC",spouses:["MMNQ-KJH"],children:["LKTV-GBD"]},"MMNQ-KJH":{first:"Mrs Margaret",last:"Brenneman",dates:"1696-1755",father:null,mother:null,spouses:["L6S3-BQR"],children:["LKTV-GBD"]},"LZL8-B5D":{first:"Hans",last:"Brenneman",dates:"1698-1747",father:"L6QG-9BJ",mother:"L61F-2NC",spouses:["KDB8-QJK"],children:["L5N5-G94"]},"KDB8-QJK":{first:"Mary",last:"Schultz",dates:"1700-1786",father:null,mother:null,spouses:["LZL8-B5D"],children:["L5N5-G94"]},"LZFX-J5G":{first:"John",last:"Leman",dates:"1726-1759",father:"GYJL-LDC",mother:"GYLN-MCG",spouses:["LKTV-GBD"],children:["LRV3-8DM"]},"LKTV-GBD":{first:"Elizabeth",last:"Brenneman",dates:"1727-1767",father:"L6S3-BQR",mother:"MMNQ-KJH",spouses:["LZFX-J5G"],children:["LRV3-8DM"]},"L5YB-1GV":{first:"Jacob",last:"Stoner",dates:"1735-1783",father:null,mother:null,spouses:["L5N5-G94"],children:["LRGC-C2G"]},"L5N5-G94":{first:"Catharine",last:"Brenneman",dates:"1734-1768",father:"LZL8-B5D",mother:"KDB8-QJK",spouses:["L5YB-1GV"],children:["LRGC-C2G"]},"LRV3-8DM":{first:"Abraham",last:"Leaman",dates:"1746-1817",father:"LZFX-J5G",mother:"LKTV-GBD",spouses:["LVFF-4L9"],children:["LCFM-CSL"]},"LVFF-4L9":{first:"Susanna Landis",last:"Bowman",dates:"1753-1822",father:"LYK6-P5P",mother:"G5GL-QJW",spouses:["LRV3-8DM"],children:["LCFM-CSL"]},"LT1J-BFT":{first:"Tobias Buckwalter",last:"Kreider",dates:"1749-1838",father:"LR5H-9TB",mother:"LCRQ-4DJ",spouses:["LRGC-C2G"],children:["G7W6-RN6"]},"LRGC-C2G":{first:"Barbara",last:"Stoner",dates:"1761-1820",father:"L5YB-1GV",mother:"L5N5-G94",spouses:["LT1J-BFT"],children:["G7W6-RN6"]},"LCFM-CSL":{first:"Benjamin Bowman",last:"Leaman",dates:"1787-1857",father:"LRV3-8DM",mother:"LVFF-4L9",spouses:["G7W6-RN6"],children:["LC7J-N3Z"]},"G7W6-RN6":{first:"Catherine Diffen...",last:"Kreider",dates:"1789-1838",father:"LT1J-BFT",mother:"LRGC-C2G",spouses:["LCFM-CSL"],children:["LC7J-N3Z"]},"K2TD-3FT":{first:"Andaras",last:"Dandliker",dates:"",father:"unscraped",mother:"unscraped",spouses:["L77D-LDM"],children:["L77D-G8C"]},"L77D-LDM":{first:"Elisabetha",last:"Bertschinger",dates:"",father:"unscraped",mother:"unscraped",spouses:["K2TD-3FT"],children:["L77D-G8C"]},"L55B-TJC":{first:"Michael",last:"Schenck",dates:"",father:"unscraped",mother:"unscraped",spouses:["LH2X-Y32"],children:["LZKH-RCG"]},"LH2X-Y32":{first:"Barbli",last:"Risser",dates:"",father:"unscraped",mother:"unscraped",spouses:["L55B-TJC"],children:["LZKH-RCG"]},"MX9C-VQH":{first:"Mathias",last:"Stauffer",dates:"",father:"unscraped",mother:"unscraped",spouses:["9V96-6QK"],children:["LT2X-K1L"]},"9V96-6QK":{first:"Barbli",last:"Stalder",dates:"",father:"unscraped",mother:"unscraped",spouses:["MX9C-VQH"],children:["LT2X-K1L"]},"9V2Z-FVQ":{first:"Hans",last:"Brächbül",dates:"",father:"unscraped",mother:"unscraped",spouses:["L9H3-395"],children:["9VV6-SVR"]},"L9H3-395":{first:"Christina",last:"Althaus",dates:"",father:"unscraped",mother:"unscraped",spouses:["9V2Z-FVQ"],children:["9VV6-SVR"]},"KCPH-7WR":{first:"Christen",last:"Müller",dates:"",father:"unscraped",mother:"unscraped",spouses:["L2D1-1WS"],children:["LF5Q-GVK"]},"L2D1-1WS":{first:"Barbara",last:"Glaus",dates:"",father:"unscraped",mother:"unscraped",spouses:["KCPH-7WR"],children:["LF5Q-GVK"]},"LCMG-BG2":{first:"Hans Ulrich",last:"Mellinger",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCMG-BPH"],children:["L7J9-SQQ"]},"LCMG-BPH":{first:"Marie",last:"Ludin",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCMG-BG2"],children:["L7J9-SQQ"]},"LZK1-WR3":{first:"Martin",last:"Bar",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZ28-YNP"],children:["LCCS-GXY"]},"LZ28-YNP":{first:"Anna Magdalena",last:"Meyer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZK1-WR3"],children:["LCCS-GXY"]},"L77D-G8C":{first:"Jacob",last:"Dandliker",dates:"1660-Deceased",father:"K2TD-3FT",mother:"L77D-LDM",spouses:["L77D-VHK"],children:["LHMS-L5V"]},"L77D-VHK":{first:"Barbara",last:"Haegni",dates:"1662-Deceased",father:null,mother:null,spouses:["L77D-G8C"],children:["LHMS-L5V"]},"L8F3-LTY":{first:"Daniel",last:"Yoder",dates:"1665-Deceased",father:null,mother:null,spouses:["LV75-W2S"],children:["LHMS-L2J"]},"LV75-W2S":{first:"Mrs Daniel",last:"Yoder",dates:"1665-Deceased",father:null,mother:null,spouses:["L8F3-LTY"],children:["LHMS-L2J"]},"L7J9-SQQ":{first:"Vincent",last:"Möllinger",dates:"1668-1748",father:"LCMG-BG2",mother:"LCMG-BPH",spouses:["274Q-GZ1"],children:["LVFF-MZQ"]},"274Q-GZ1":{first:"Veronika",last:"Naglin",dates:"1674-1753",father:null,mother:null,spouses:["L7J9-SQQ"],children:["LVFF-MZQ"]},"LCCS-GXY":{first:"Rev John Martin",last:"Bar",dates:"1686-1758",father:"LZK1-WR3",mother:"LZ28-YNP",spouses:["KCZW-NB8","KCZW-NB8"],children:["LKGH-15C","LH6L-SN9"]},"KCZW-NB8":{first:"Anna Elizabeth",last:"Graf",dates:"1691-1758",father:"GSRK-WD3",mother:"LD11-7G9",spouses:["LCCS-GXY","LCCS-GXY"],children:["LKGH-15C","LH6L-SN9"]},"LHTS-X7G":{first:"Hans",last:"Herr",dates:"1685-1756",father:"KFR6-VF6",mother:"LHXB-NR2",spouses:["LZJM-JCK"],children:["LHQF-MGY"]},"LZJM-JCK":{first:"Frances Vero...",last:"Brechbuehl",dates:"1695-1756",father:"LD8C-6G4",mother:"G759-WTG",spouses:["LHTS-X7G"],children:["LHQF-MGY"]},"LHMS-L5V":{first:"Michael",last:"Denlinger",dates:"1680-1736",father:"L77D-G8C",mother:"L77D-VHK",spouses:["LHMS-L2J"],children:["LHMS-LT9"]},"LHMS-L2J":{first:"Veronica Frances",last:"Yoder",dates:"1680-1736",father:"L8F3-LTY",mother:"LV75-W2S",spouses:["LHMS-L5V"],children:["LHMS-LT9"]},"GCQK-9JW":{first:"Jacob",last:"Bozart",dates:"1696-1757",father:null,mother:null,spouses:["LVFF-MZQ"],children:["9VWK-89S"]},"LVFF-MZQ":{first:"Esther",last:"Mellinger",dates:"1703-1792",father:"L7J9-SQQ",mother:"274Q-GZ1",spouses:["GCQK-9JW"],children:["9VWK-89S"]},"LKGH-15C":{first:"Hans Martin",last:"Barr Sr",dates:"1715-1784",father:"LCCS-GXY",mother:"KCZW-NB8",spouses:["LHQF-MGY"],children:["MTRN-6ZV"]},"LHQF-MGY":{first:"Elizabeth",last:"Herr",dates:"1719-1807",father:"LHTS-X7G",mother:"LZJM-JCK",spouses:["LKGH-15C"],children:["MTRN-6ZV"]},"LHMS-LT9":{first:"Jacob Yoder",last:"Denlinger",dates:"1715-1787",father:"LHMS-L5V",mother:"LHMS-L2J",spouses:["L8W3-T9T","L8W3-T9T"],children:["K2XP-FYC","218N-R56"]},"L8W3-T9T":{first:"Anna",last:"Schenk",dates:"1715-1787",father:"L8W3-T9N",mother:"LVXK-PF7",spouses:["LHMS-LT9","LHMS-LT9"],children:["K2XP-FYC","218N-R56"]},"MYWW-XJ1":{first:"Joseph",last:"Bassler",dates:"1728-1808",father:"K8LN-Y9K",mother:"KLLX-ZTP",spouses:["9VWK-89S","9VWK-89S"],children:["9VWK-8M9","9VWK-Z1R"]},"9VWK-89S":{first:"Esther",last:"Bozart",dates:"1727-1809",father:"GCQK-9JW",mother:"LVFF-MZQ",spouses:["MYWW-XJ1","MYWW-XJ1"],children:["9VWK-8M9","9VWK-Z1R"]},"L4WC-YWX":{first:"Abraham Weber",last:"Landis",dates:"1739-1790",father:"LBYK-M2F",mother:"L7JS-BCK",spouses:["MTRN-6ZV"],children:["L4WW-H2N"]},"MTRN-6ZV":{first:"Anna Maria",last:"Barr",dates:"1736-1802",father:"LKGH-15C",mother:"LHQF-MGY",spouses:["L4WC-YWX"],children:["L4WW-H2N"]},"GKCS-TJ3":{first:"JOHANNES",last:"BURKHOLDER",dates:"1736-1800",father:null,mother:null,spouses:["GKCS-T9N"],children:["9NCF-VS5"]},"GKCS-T9N":{first:"ANN",last:"BRENNEMAN",dates:"1738-1784",father:null,mother:null,spouses:["GKCS-TJ3"],children:["9NCF-VS5"]},"K2XP-FYC":{first:"Abraham Shenk",last:"Denlinger",dates:"1760-1785",father:"LHMS-LT9",mother:"L8W3-T9T",spouses:["9VWK-8M9"],children:["K2X7-M52"]},"9VWK-8M9":{first:"Maria E.",last:"Bossler",dates:"1761-1826",father:"MYWW-XJ1",mother:"9VWK-89S",spouses:["K2XP-FYC"],children:["K2X7-M52"]},"L4WW-H2N":{first:"Benjamin Bare",last:"Landis",dates:"1759-1829",father:"L4WC-YWX",mother:"MTRN-6ZV",spouses:["9NCF-VS5","9NCF-VS5"],children:["K636-71D","GQXZ-NZ8"]},"9NCF-VS5":{first:"Barbara Brenneman",last:"Burkholder",dates:"1767-1833",father:"GKCS-TJ3",mother:"GKCS-T9N",spouses:["L4WW-H2N","L4WW-H2N"],children:["K636-71D","GQXZ-NZ8"]},"K2X7-M52":{first:"Abraham Bossler",last:"Denlinger",dates:"1785-1836",father:"K2XP-FYC",mother:"9VWK-8M9",spouses:["K636-71D","K636-71D"],children:["LCX5-N9M","LQ5R-YYX"]},"K636-71D":{first:"Anna Burkholder",last:"Landis",dates:"1791-1875",father:"L4WW-H2N",mother:"9NCF-VS5",spouses:["K2X7-M52","K2X7-M52"],children:["LCX5-N9M","LQ5R-YYX"]},"K819-CQ3":{first:"Jacob",last:"Ottmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["KC8J-6GR"],children:["KCVL-2PP"]},"KC8J-6GR":{first:"Catherine",last:"Ott",dates:"",father:"unscraped",mother:"unscraped",spouses:["K819-CQ3"],children:["KCVL-2PP"]},"GQD8-YC3":{first:"Nicolas",last:"Stupfel",dates:"",father:"unscraped",mother:"unscraped",spouses:["G9X5-KK4"],children:["KZTH-Q72"]},"G9X5-KK4":{first:"Catherine",last:"Scherer",dates:"",father:"unscraped",mother:"unscraped",spouses:["GQD8-YC3"],children:["KZTH-Q72"]},"218N-R56":{first:"John",last:"Denlinger",dates:"1751-1792",father:"LHMS-LT9",mother:"L8W3-T9T",spouses:["9VWK-Z1R"],children:["218N-5PR"]},"9VWK-Z1R":{first:"Catherine",last:"Bastler",dates:"1759-1806",father:"MYWW-XJ1",mother:"9VWK-89S",spouses:["218N-R56"],children:["218N-5PR"]},"2Z1B-HZN":{first:"Johannes Landis",last:"Kreider",dates:"1784-1847",father:"L7NK-F59",mother:"K2XQ-LTX",spouses:["218N-5PR"],children:["LCX5-NQ8"]},"218N-5PR":{first:"Esther Bassler",last:"Denlinger",dates:"1788-1863",father:"218N-R56",mother:"9VWK-Z1R",spouses:["2Z1B-HZN"],children:["LCX5-NQ8"]},"L8Y7-4XS":{first:"Peter",last:"Erb",dates:"",father:"unscraped",mother:"unscraped",spouses:["G9T5-9SM"],children:["LC84-BPG"]},"G9T5-9SM":{first:"Magdalena",last:"Kupferschmid",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8Y7-4XS"],children:["LC84-BPG"]},"K1K4-YKY":{first:"Christen",last:"Haldimann",dates:"",father:"unscraped",mother:"unscraped",spouses:["GB2K-JLB"],children:["L2KP-4VT"]},"GB2K-JLB":{first:"Anna",last:"Ruch",dates:"",father:"unscraped",mother:"unscraped",spouses:["K1K4-YKY"],children:["L2KP-4VT"]},"GPX9-2BS":{first:"Hansen",last:"Weissmer",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["GP62-HX5"]},"GPX9-4Q1":{first:"Jacob",last:"Grieder",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["GP62-S6Y"]},"GLS3-JMV":{first:"Jacob",last:"Schantz",dates:"1688-Deceased",father:null,mother:null,spouses:["LBD3-PHG"],children:["LCF8-RLM"]},"LBD3-PHG":{first:"Catrina",last:"Johns",dates:"1688-Deceased",father:null,mother:null,spouses:["GLS3-JMV"],children:["LCF8-RLM"]},"9MCL-W4Y":{first:"Christian",last:"Steinman",dates:"1696-1755",father:"L1HW-86H",mother:"LH2P-52Q",spouses:["LZJQ-DJZ"],children:["LH23-RGX"]},"LZJQ-DJZ":{first:"Anna",last:"Huber",dates:"1700-Deceased",father:null,mother:null,spouses:["9MCL-W4Y"],children:["LH23-RGX"]},"L61V-K6H":{first:"Christian",last:"Brenneman",dates:"1695-1757",father:"L6QG-9BJ",mother:"L61F-2NC",spouses:["L478-QWS"],children:["LCMJ-SW2"]},"L478-QWS":{first:"Susanna",last:"Levering",dates:"1699-1777",father:null,mother:null,spouses:["L61V-K6H"],children:["LCMJ-SW2"]},"LTCM-835":{first:"Johannes",last:"Erb",dates:"1713-1778",father:"LT2L-RRL",mother:"G9P4-5CL",spouses:["LCF8-RLM"],children:["D4WP-366"]},"LCF8-RLM":{first:"Barbara Johns",last:"Schantz",dates:"1716-1795",father:"GLS3-JMV",mother:"LBD3-PHG",spouses:["LTCM-835"],children:["D4WP-366"]},"LH23-RGX":{first:"Johann",last:"Stehman",dates:"1723-1785",father:"9MCL-W4Y",mother:"LZJQ-DJZ",spouses:["LCMJ-SW2"],children:["LH8Z-TN3"]},"LCMJ-SW2":{first:"Maria Christina",last:"Brenneman",dates:"1725-1814",father:"L61V-K6H",mother:"L478-QWS",spouses:["LH23-RGX"],children:["LH8Z-TN3"]},"9K64-Y9C":{first:"John H.",last:"Huber",dates:"1737-1803",father:null,mother:null,spouses:["MTD1-T7J"],children:["LZJQ-8G4"]},"MTD1-T7J":{first:"Anna Schnebele",last:"Hershey",dates:"1735-1822",father:"GLM4-4FS",mother:"M4B5-B8V",spouses:["9K64-Y9C"],children:["LZJQ-8G4"]},"D4WP-366":{first:"Daniel",last:"Erb",dates:"1756-1829",father:"LTCM-835",mother:"LCF8-RLM",spouses:["LWL3-JH4"],children:["KGMJ-ZDN"]},"LWL3-JH4":{first:"Elizabeth Hostetter",last:"Bomberger",dates:"1766-1836",father:null,mother:null,spouses:["D4WP-366"],children:["KGMJ-ZDN"]},"LH8Z-TN3":{first:"Christian Brenneman",last:"Stehman",dates:"1771-1844",father:"LH23-RGX",mother:"LCMJ-SW2",spouses:["LZJQ-8G4"],children:["LHJV-W7R"]},"LZJQ-8G4":{first:"Anna Elizabeth",last:"Huber",dates:"1768-1852",father:"9K64-Y9C",mother:"MTD1-T7J",spouses:["LH8Z-TN3"],children:["LHJV-W7R"]},"KGMJ-ZDN":{first:"Joseph Bomberger",last:"Erb",dates:"1791-1858",father:"D4WP-366",mother:"LWL3-JH4",spouses:["LHJV-W7R"],children:["LCXQ-QLQ"]},"LHJV-W7R":{first:"Anna Huber",last:"Stehman",dates:"1797-1857",father:"LH8Z-TN3",mother:"LZJQ-8G4",spouses:["KGMJ-ZDN"],children:["LCXQ-QLQ"]},"LBD3-SSD":{first:"Johann",last:"Goeckenlar",dates:"",father:"unscraped",mother:"unscraped",spouses:["L74Z-ZSF"],children:["GDV2-DST"]},"L74Z-ZSF":{first:"Anna Maria",last:"Mumm",dates:"",father:"unscraped",mother:"unscraped",spouses:["LBD3-SSD"],children:["GDV2-DST"]},"KD1W-LR7":{first:"Theodosius",last:"Riess",dates:"",father:"unscraped",mother:"unscraped",spouses:["K648-BCB"],children:["L16X-523"]},"K648-BCB":{first:"Barbara",last:"Mueller",dates:"",father:"unscraped",mother:"unscraped",spouses:["KD1W-LR7"],children:["L16X-523"]},"LHKH-7NW":{first:"Conrad",last:"Schaeffer",dates:"",father:"unscraped",mother:"unscraped",spouses:["L89C-7CK"],children:["GZDK-TND"]},"L89C-7CK":{first:"Johanna Elis...",last:"Schlauch",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHKH-7NW"],children:["GZDK-TND"]},"GP79-H74":{first:"Bernard",last:"Sigler",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["KHJT-YP5"]},"GP79-WMD":{first:"",last:"Zeller",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["KCG6-1C3"]},"GM88-RY9":{first:"Abraham",last:"Massack",dates:"",father:"unscraped",mother:"unscraped",spouses:["KJZF-N4M"],children:["KJZF-NJ9"]},"KJZF-N4M":{first:"Mrs Anna Chr...",last:"Massack",dates:"",father:"unscraped",mother:"unscraped",spouses:["GM88-RY9"],children:["KJZF-NJ9"]},"KNWR-39N":{first:"Nickolas",last:"Hesser",dates:"",father:"unscraped",mother:"unscraped",spouses:["KNW5-KV4"],children:["LCQM-CVL"]},"KNW5-KV4":{first:"Felizitas Ba...",last:"Gussmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["KNWR-39N"],children:["LCQM-CVL"]},"GT4D-QW8":{first:"Hans Bernhard",last:"Abel",dates:"",father:"unscraped",mother:"unscraped",spouses:["KNXP-9TB"],children:["L7NQ-J36"]},"KNXP-9TB":{first:"Agnesa",last:"Ubhardts",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT4D-QW8"],children:["L7NQ-J36"]},"MT6G-GTT":{first:"Jacob",last:"Rümmelin",dates:"",father:"unscraped",mother:"unscraped",spouses:["MT6G-GYW"],children:["KNX5-SLV"]},"MT6G-GYW":{first:"Anna",last:"Lenz",dates:"",father:"unscraped",mother:"unscraped",spouses:["MT6G-GTT"],children:["KNX5-SLV"]},"G8L7-R5X":{first:"Hanss Jacob",last:"Fechtlin",dates:"",father:"unscraped",mother:"unscraped",spouses:["GGC6-FMD"],children:["LX7M-MF2"]},"GGC6-FMD":{first:"Anna Margarethe",last:"Wollenbar",dates:"1651-1696",father:"GQDB-5PW",mother:"M57D-N27",spouses:["G8L7-R5X","LX7M-MF2"],children:["LX7M-MF2","GM67-PXR"]},"GQDB-5PW":{first:"Daniel",last:"Wollenbar",dates:"",father:"unscraped",mother:"unscraped",spouses:["M57D-N27"],children:["GGC6-FMD"]},"M57D-N27":{first:"Barbara",last:"Guderer",dates:"",father:"unscraped",mother:"unscraped",spouses:["GQDB-5PW"],children:["GGC6-FMD"]},"MSWN-8S6":{first:"Hans",last:"Uler",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZ66-TFY"],children:["9J9R-JQ3"]},"LZ66-TFY":{first:"Maria",last:"Scheirt",dates:"",father:"unscraped",mother:"unscraped",spouses:["MSWN-8S6"],children:["9J9R-JQ3"]},"LQRP-7W6":{first:"Ulrich",last:"Doell",dates:"",father:"unscraped",mother:"unscraped",spouses:["LQRP-7HB"],children:["MSWG-K41"]},"LQRP-7HB":{first:"Barbel",last:"Ackermaenn",dates:"",father:"unscraped",mother:"unscraped",spouses:["LQRP-7W6"],children:["MSWG-K41"]},"GDV2-LYD":{first:"Hans",last:"Werner",dates:"1595-1684",father:null,mother:null,spouses:["GDV2-DST"],children:["GP3B-5TH"]},"GDV2-DST":{first:"Margaretha",last:"Göckenlar",dates:"1624-1687",father:"LBD3-SSD",mother:"L74Z-ZSF",spouses:["GDV2-LYD"],children:["GP3B-5TH"]},"L16X-523":{first:"Johannes",last:"Ries",dates:"1651-1690",father:"KD1W-LR7",mother:"K648-BCB",spouses:["GZDK-TND"],children:["M4V4-YDV"]},"GZDK-TND":{first:"Anna Maria",last:"Schaeffer",dates:"1654-1718",father:"LHKH-7NW",mother:"L89C-7CK",spouses:["L16X-523"],children:["M4V4-YDV"]},"KHJT-YP5":{first:"Bernhard",last:"Sigler",dates:"1625-1721",father:"GP79-H74",mother:null,spouses:["KCG6-1C3"],children:["KLQD-N6B"]},"KCG6-1C3":{first:"Maria Barbara",last:"Zeller",dates:"Deceased",father:"GP79-WMD",mother:null,spouses:["KHJT-YP5"],children:["KLQD-N6B"]},"KJZF-NJ9":{first:"Hans Jacob",last:"Massack",dates:"1652-1723",father:"GM88-RY9",mother:"KJZF-N4M",spouses:["LCQM-CVL"],children:["LTVC-VYY"]},"LCQM-CVL":{first:"Anna Sibylla",last:"Hesser",dates:"1653-1691",father:"KNWR-39N",mother:"KNW5-KV4",spouses:["KJZF-NJ9"],children:["LTVC-VYY"]},"L7NQ-J36":{first:"Hans Jakob",last:"Abel",dates:"1667-1732",father:"GT4D-QW8",mother:"KNXP-9TB",spouses:["KNX5-SLV"],children:["GM67-XDS"]},"KNX5-SLV":{first:"Eva Barbara",last:"Rümmelin",dates:"1660-1712",father:"MT6G-GTT",mother:"MT6G-GYW",spouses:["L7NQ-J36"],children:["GM67-XDS"]},"LX7M-MF2":{first:"Johann Jacob",last:"Fechtlin",dates:"1655-1692",father:"G8L7-R5X",mother:"GGC6-FMD",spouses:["GGC6-FMD"],children:["GM67-PXR"]},"GLXG-BRH":{first:"Adam",last:"Mösinger",dates:"Deceased",father:null,mother:null,spouses:["96F5-DPG"],children:["GLXG-TXX"]},"96F5-DPG":{first:"Barbara",last:"Moser",dates:"Deceased",father:null,mother:null,spouses:["GLXG-BRH"],children:["GLXG-TXX"]},"9J9R-JQ3":{first:"Zacharias",last:"Uler",dates:"1657-1725",father:"MSWN-8S6",mother:"LZ66-TFY",spouses:["MSWG-K41"],children:["G9L8-PFZ"]},"MSWG-K41":{first:"Elssbeth",last:"Dülli",dates:"1663-Deceased",father:"LQRP-7W6",mother:"LQRP-7HB",spouses:["9J9R-JQ3"],children:["G9L8-PFZ"]},"GP3B-5TH":{first:"Johann Jerg",last:"Werner",dates:"1661-1734",father:"GDV2-LYD",mother:"GDV2-DST",spouses:["M4V4-YDV"],children:["K457-GVV"]},"M4V4-YDV":{first:"Maria Ursula",last:"Ries",dates:"1671-1734",father:"L16X-523",mother:"GZDK-TND",spouses:["GP3B-5TH"],children:["K457-GVV"]},"KLQD-N6B":{first:"Hans Bernhard",last:"Sigler",dates:"1665-Deceased",father:"KHJT-YP5",mother:"KCG6-1C3",spouses:["LTVC-VYY"],children:["LTVC-NQ5"]},"LTVC-VYY":{first:"Maria Barbara",last:"Melsbach",dates:"Deceased",father:"KJZF-NJ9",mother:"LCQM-CVL",spouses:["KLQD-N6B"],children:["LTVC-NQ5"]},"GM67-XDS":{first:"Johann Adam",last:"Abel",dates:"1688-1766",father:"L7NQ-J36",mother:"KNX5-SLV",spouses:["GM67-PXR"],children:["LDB7-367"]},"GM67-PXR":{first:"Anna Marie",last:"Fechtlin",dates:"1683-1785",father:"LX7M-MF2",mother:"GGC6-FMD",spouses:["GM67-XDS"],children:["LDB7-367"]},"GLXG-TXX":{first:"Johannes Jacob",last:"Messenger",dates:"1699-1791",father:"GLXG-BRH",mother:"96F5-DPG",spouses:["G9L8-PFZ"],children:["G4NM-D4H"]},"G9L8-PFZ":{first:"Elssbeth",last:"Ueler",dates:"1697-1750",father:"9J9R-JQ3",mother:"MSWG-K41",spouses:["GLXG-TXX"],children:["G4NM-D4H"]},"K457-GVV":{first:"Johann  Adam",last:"Werner",dates:"1708-1775",father:"GP3B-5TH",mother:"M4V4-YDV",spouses:["LTVC-NQ5"],children:["KVGM-4YF"]},"LTVC-NQ5":{first:"Catharina Barbara",last:"Sigler",dates:"1699-1764",father:"KLQD-N6B",mother:"LTVC-VYY",spouses:["K457-GVV"],children:["KVGM-4YF"]},"LDB7-367":{first:"Johann Jacob",last:"Abel",dates:"1716-1807",father:"GM67-XDS",mother:"GM67-PXR",spouses:["G4NM-D4H"],children:["LKKT-ZXN"]},"G4NM-D4H":{first:"Marie Catherine",last:"Messinger",dates:"1723-1785",father:"GLXG-TXX",mother:"G9L8-PFZ",spouses:["LDB7-367"],children:["LKKT-ZXN"]},"KVGM-4YF":{first:"Jacob Nicol",last:"Werner",dates:"1741-1820",father:"K457-GVV",mother:"LTVC-NQ5",spouses:["LKKT-ZXN"],children:["KDW6-JSP"]},"LKKT-ZXN":{first:"Elizabeth",last:"Abel",dates:"1751-1835",father:"LDB7-367",mother:"G4NM-D4H",spouses:["KVGM-4YF"],children:["KDW6-JSP"]},"LHZ3-NW9":{first:"Tobias",last:"King",dates:"1758-1820",father:null,mother:null,spouses:["LHZ3-NWP"],children:["LHZ3-NDM"]},"LHZ3-NWP":{first:"Elizabeth",last:"Repsher",dates:"1760-1838",father:null,mother:null,spouses:["LHZ3-NW9"],children:["LHZ3-NDM"]},"KDW6-JSP":{first:"Johann Nicolaus",last:"Werner",dates:"1779-1847",father:"KVGM-4YF",mother:"LKKT-ZXN",spouses:["LHZ3-NDM"],children:["LH2H-CC1"]},"LHZ3-NDM":{first:"Sarah",last:"King",dates:"1779-1850",father:"LHZ3-NW9",mother:"LHZ3-NWP",spouses:["KDW6-JSP"],children:["LH2H-CC1"]},"GF8L-KMD":{first:"Cordt",last:"Rischmüller",dates:"",father:"unscraped",mother:"unscraped",spouses:["GF8L-4CJ"],children:["GF8L-NB5"]},"GF8L-4CJ":{first:"Anna",last:"Dreyer",dates:"",father:"unscraped",mother:"unscraped",spouses:["GF8L-KMD"],children:["GF8L-NB5"]},"GF8L-NB5":{first:"Arendt",last:"Rischmüller",dates:"1663-1739",father:"GF8L-KMD",mother:"GF8L-4CJ",spouses:["GF8L-XK7"],children:["GD8J-41K"]},"GF8L-XK7":{first:"Anna",last:"Knickmeyer",dates:"1661-1744",father:null,mother:null,spouses:["GF8L-NB5"],children:["GD8J-41K"]},"GYLX-CTG":{first:"Hans Hinrich",last:"Kuhlmann",dates:"1673-Deceased",father:null,mother:null,spouses:["GYLF-WGR"],children:["GF8L-ZC3"]},"GYLF-WGR":{first:"Anna Catharina",last:"Poeck",dates:"1676-Deceased",father:null,mother:null,spouses:["GYLX-CTG"],children:["GF8L-ZC3"]},"GD8J-41K":{first:"Johan Wilhelm",last:"Rischmüller",dates:"1689-1755",father:"GF8L-NB5",mother:"GF8L-XK7",spouses:["GF8L-ZC3"],children:["29HC-5KJ"]},"GF8L-ZC3":{first:"Anna Elisabeth",last:"Kuhlmann",dates:"1694-1755",father:"GYLX-CTG",mother:"GYLF-WGR",spouses:["GD8J-41K"],children:["29HC-5KJ"]},"29HC-5KJ":{first:"Johan Peter",last:"Rischmueller",dates:"1705-1759",father:"GD8J-41K",mother:"GF8L-ZC3",spouses:["29HC-5KG"],children:["29HC-529"]},"29HC-5KG":{first:"Thrine Maria",last:"Kunnen",dates:"1714-1759",father:null,mother:null,spouses:["29HC-5KJ"],children:["29HC-529"]},"29HC-529":{first:"Ernst Henrich",last:"Rischmueller",dates:"1756-1820",father:"29HC-5KJ",mother:"29HC-5KG",spouses:["MGJW-YYS"],children:["KCLH-ZL1"]},"MGJW-YYS":{first:"Eva Rosina",last:"Hill",dates:"1758-Deceased",father:null,mother:null,spouses:["29HC-529"],children:["KCLH-ZL1"]},"KCLH-ZL1":{first:"Johannes",last:"Rissmiller",dates:"1782-1846",father:"29HC-529",mother:"MGJW-YYS",spouses:["K465-4D9"],children:["LH2H-CF8"]},"K465-4D9":{first:"Catherine",last:"Koehring",dates:"1789-1860",father:null,mother:null,spouses:["KCLH-ZL1"],children:["LH2H-CF8"]},"GT9N-6L6":{first:"Michael Veit",last:"Baumann",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT9N-XPN"],children:["GT9C-R1P"]},"GT9N-XPN":{first:"Anna Catharina",last:"Luipold",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT9N-6L6"],children:["GT9C-R1P"]},"GT9C-18X":{first:"Philipp",last:"Edinger",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["GT9Z-M12"]},"LL9C-T63":{first:"Peter",last:"Brönnimann",dates:"",father:"unscraped",mother:"unscraped",spouses:["LLHN-VD9"],children:["MWTC-QSY"]},"LLHN-VD9":{first:"Elizabeth 'E...",last:"Reusser",dates:"",father:"unscraped",mother:"unscraped",spouses:["LL9C-T63"],children:["MWTC-QSY"]},"9V1G-4RZ":{first:"Niklaus",last:"Reusser",dates:"",father:"unscraped",mother:"unscraped",spouses:["GBM3-PQ6"],children:["L6D1-JBN"]},"GBM3-PQ6":{first:"Verena",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["9V1G-4RZ"],children:["L6D1-JBN"]},"GNV7-T18":{first:"Hans",last:"Steiner",dates:"",father:"unscraped",mother:"unscraped",spouses:["GNV7-KRZ"],children:["L7FB-6CZ"]},"GNV7-KRZ":{first:"Maria",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["GNV7-T18"],children:["L7FB-6CZ"]},"LDB4-82H":{first:"Heinz",last:"Stadtmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["LK61-ZHK"],children:["LDB4-8F1"]},"LK61-ZHK":{first:"Mrs. Heinz",last:"Stadtmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["LDB4-82H"],children:["LDB4-8F1"]},"LK61-JNX":{first:"Hans",last:"Vogelmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["GSM1-33J"],children:["LDB4-8JK"]},"GSM1-33J":{first:"Joanna",last:"Kendig",dates:"",father:"unscraped",mother:"unscraped",spouses:["LK61-JNX"],children:["LDB4-8JK"]},"G1BK-GFV":{first:"ISAAC",last:"Koenig",dates:"",father:"unscraped",mother:"unscraped",spouses:["G1B2-MGH"],children:["G1B2-XNH"]},"G1B2-MGH":{first:"MAGDALENA",last:"GUGLER",dates:"",father:"unscraped",mother:"unscraped",spouses:["G1BK-GFV"],children:["G1B2-XNH"]},"GT9C-R1P":{first:"Michael",last:"Baumann",dates:"1626-Deceased",father:"GT9N-6L6",mother:"GT9N-XPN",spouses:["GT9Z-M12"],children:["GT9Z-QVS"]},"GT9Z-M12":{first:"Margaretha",last:"Edinger",dates:"1643-1675",father:"GT9C-18X",mother:null,spouses:["GT9C-R1P"],children:["GT9Z-QVS"]},"MWTC-QSY":{first:"Niclaus Melc...",last:"Brönimann",dates:"1605-1654",father:"LL9C-T63",mother:"LLHN-VD9",spouses:["LL7M-6SV"],children:["LVFJ-GXV"]},"LL7M-6SV":{first:"Elizabeth",last:"Pierren",dates:"1603-1668",father:null,mother:null,spouses:["MWTC-QSY"],children:["LVFJ-GXV"]},"L6D1-JBN":{first:"Stephan",last:"Reusser",dates:"1599-1636",father:"9V1G-4RZ",mother:"GBM3-PQ6",spouses:["L7FB-6CZ"],children:["LKDQ-Z1B"]},"L7FB-6CZ":{first:"Anna",last:"Steiner",dates:"1603-Deceased",father:"GNV7-T18",mother:"GNV7-KRZ",spouses:["L6D1-JBN"],children:["LKDQ-Z1B"]},"G1CT-YR5":{first:'Nichlas "Claus"',last:"Gutt (Good)",dates:"1611-1700",father:null,mother:null,spouses:["G1B2-XNH"],children:["LTVD-MSX"]},"G1B2-XNH":{first:"Regula",last:"Koenig",dates:"1631-1677",father:"G1BK-GFV",mother:"G1B2-MGH",spouses:["G1CT-YR5"],children:["LTVD-MSX"]},"GT9Z-QVS":{first:'Antonius "Stefan"',last:"Baumann",dates:"1659-1739",father:"GT9C-R1P",mother:"GT9Z-M12",spouses:[null],children:["GT9Z-QM9"]},"GT9Z-QM9":{first:"Johann Jacob",last:"Baumann",dates:"1693-1781",father:"GT9Z-QVS",mother:null,spouses:["G8RZ-LC1"],children:["LDM7-HMQ"]},"G8RZ-LC1":{first:"Anna Elizabeth",last:"Krueger",dates:"1694-1770",father:null,mother:null,spouses:["GT9Z-QM9"],children:["LDM7-HMQ"]},"LDM7-HMQ":{first:"Rev. Johann Jakob",last:"Bowman",dates:"1718-1803",father:"GT9Z-QM9",mother:"G8RZ-LC1",spouses:["GQVK-RGP"],children:["LHNL-WN7"]},"GQVK-RGP":{first:"Barbara",last:"Shank",dates:"1720-1758",father:null,mother:null,spouses:["LDM7-HMQ"],children:["LHNL-WN7"]},"LHNL-WN7":{first:"Johannes",last:"Bauman",dates:"1755-1813",father:"LDM7-HMQ",mother:"GQVK-RGP",spouses:["LHP4-SNF"],children:["LH6D-2TZ"]},"LHP4-SNF":{first:"Eve",last:"Brenneman",dates:"1757-1824",father:"KCKH-F54",mother:"L61F-5B7",spouses:["LHNL-WN7"],children:["LH6D-2TZ"]},"LZVK-RGD":{first:"Ulrich",last:"Engel",dates:"",father:"unscraped",mother:"unscraped",spouses:["97L2-JHL"],children:["L4LR-G68"]},"97L2-JHL":{first:"Anna",last:"Oppliger",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZVK-RGD"],children:["L4LR-G68"]},"L4TK-7YF":{first:"Durs",last:"Rohrer",dates:"",father:"unscraped",mother:"unscraped",spouses:["MLXM-5N9"],children:["KFBY-S2W"]},"MLXM-5N9":{first:"Anna",last:"Rohrer",dates:"",father:"unscraped",mother:"unscraped",spouses:["L4TK-7YF"],children:["KFBY-S2W"]},"LZJR-QBG":{first:"Niklaus",last:"Stettler",dates:"",father:"unscraped",mother:"unscraped",spouses:["KZ6P-Z5T"],children:["G66L-QBB"]},"KZ6P-Z5T":{first:"Barbara",last:"Selhofer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZJR-QBG"],children:["G66L-QBB"]},"L4LR-G68":{first:"Jost",last:"Engel I",dates:"1639-1713",father:"LZVK-RGD",mother:"97L2-JHL",spouses:["LKT5-BJ8"],children:["K1YG-GS3"]},"LKT5-BJ8":{first:"Catharina",last:"Russer",dates:"1639-1686",father:null,mother:null,spouses:["L4LR-G68"],children:["K1YG-GS3"]},"KFBY-S2W":{first:"Ursus",last:"Rohrer",dates:"1635-Deceased",father:"L4TK-7YF",mother:"MLXM-5N9",spouses:["G66L-QBB"],children:["LHW8-ZH1"]},"G66L-QBB":{first:"Christina",last:"Stettler",dates:"1638-1682",father:"LZJR-QBG",mother:"KZ6P-Z5T",spouses:["KFBY-S2W"],children:["LHW8-ZH1"]},"GFB6-FLL":{first:"Bentz",last:"Brechbühl",dates:"1630-Deceased",father:null,mother:null,spouses:["GFB6-W64"],children:["LHVT-NBN"]},"GFB6-W64":{first:"Anna",last:"Müller",dates:"Deceased",father:null,mother:null,spouses:["GFB6-FLL"],children:["LHVT-NBN"]},"G689-JBT":{first:"Bendicht",last:"Steiner",dates:"1650-Deceased",father:null,mother:null,spouses:["K4GZ-D2T"],children:["G689-Z34"]},"K4GZ-D2T":{first:"Maria",last:"Ganter",dates:"1654-Deceased",father:null,mother:null,spouses:["G689-JBT"],children:["G689-Z34"]},"K1YG-GS3":{first:"Jost",last:"Engel II",dates:"1676-1751",father:"L4LR-G68",mother:"LKT5-BJ8",spouses:["LHW8-ZH1"],children:["9KSX-PPS"]},"LHW8-ZH1":{first:"Christina",last:"Rohrer",dates:"1675-Deceased",father:"KFBY-S2W",mother:"G66L-QBB",spouses:["K1YG-GS3"],children:["9KSX-PPS"]},"LHVT-NBN":{first:"Christen",last:"Brechbühl",dates:"1663-Deceased",father:"GFB6-FLL",mother:"GFB6-W64",spouses:["G689-Z34"],children:["LHW8-PGX"]},"G689-Z34":{first:"Anna",last:"Steiner",dates:"1688-1751",father:"G689-JBT",mother:"K4GZ-D2T",spouses:["LHVT-NBN"],children:["LHW8-PGX"]},"9KSX-PPS":{first:"Ulrich",last:"Engel",dates:"1711-1757",father:"K1YG-GS3",mother:"LHW8-ZH1",spouses:["LHW8-PGX"],children:["K29F-D7Z"]},"LHW8-PGX":{first:"Anna",last:"Brechbühl",dates:"1715-1764",father:"LHVT-NBN",mother:"G689-Z34",spouses:["9KSX-PPS"],children:["K29F-D7Z"]},"K29F-D7Z":{first:"Barbara Brechbill",last:"Engel",dates:"1748-1783",father:"9KSX-PPS",mother:"LHW8-PGX",spouses:["LZ24-X8K"],children:["29SD-SJK"]},"29SD-SJK":{first:"Dr John",last:"Mosser",dates:"1777-1826",father:"LZ24-X8K",mother:"K29F-D7Z",spouses:["29QN-88Q"],children:["LHSP-KKJ"]},"29QN-88Q":{first:"Elizabeth",last:"Neff",dates:"1779-1845",father:"L6S4-3NN",mother:"KH7N-DYK",spouses:["29SD-SJK"],children:["LHSP-KKJ"]},"LCTT-GJ7":{first:"Jacob",last:"Groff Sr.",dates:"1699-1766",father:"LRXJ-8KK",mother:"LW3R-Q1M",spouses:["LRSD-ZW6"],children:["LB4C-TVS"]},"LRSD-ZW6":{first:"Barbara",last:"Brackbill",dates:"1707-1766",father:"LD8C-6G4",mother:"G759-WTG",spouses:["LCTT-GJ7"],children:["LB4C-TVS"]},"MB7N-SPY":{first:"Jacob",last:"Barr",dates:"1716-Deceased",father:null,mother:null,spouses:["LHFC-F8K"],children:["MB7N-SPX"]},"LHFC-F8K":{first:"Barbara",last:"Baumann",dates:"1717-1776",father:null,mother:null,spouses:["MB7N-SPY"],children:["MB7N-SPX"]},"LH6L-SN9":{first:"Jacob",last:"Barr",dates:"1723-1803",father:"LCCS-GXY",mother:"KCZW-NB8",spouses:["LB4C-TVS"],children:["G4SN-QR3"]},"LB4C-TVS":{first:"Anna",last:"Groff",dates:"1728-1777",father:"LCTT-GJ7",mother:"LRSD-ZW6",spouses:["LH6L-SN9"],children:["G4SN-QR3"]},"L84K-BF9":{first:"Jacob Weber",last:"Landis",dates:"1738-1794",father:"LBYK-M2F",mother:"L7JS-BCK",spouses:["MB7N-SPX"],children:["L1J4-L8G"]},"MB7N-SPX":{first:"Esther Ann",last:"Barr",dates:"1744-1795",father:"MB7N-SPY",mother:"LHFC-F8K",spouses:["L84K-BF9"],children:["L1J4-L8G"]},"LZ2Z-TC7":{first:"John Kreider",last:"Snavely",dates:"1745-1794",father:null,mother:null,spouses:["G4SN-QR3"],children:["L6MF-Z1Z"]},"G4SN-QR3":{first:"Elizabeth",last:"Barr",dates:"1751-1828",father:"LH6L-SN9",mother:"LB4C-TVS",spouses:["LZ2Z-TC7"],children:["L6MF-Z1Z"]},"L1J4-L8G":{first:"Johannes Barr",last:"Landis",dates:"1766-1826",father:"L84K-BF9",mother:"MB7N-SPX",spouses:["L6MF-Z1Z"],children:["LZPM-KWX"]},"L6MF-Z1Z":{first:"Barbara",last:"Snavely",dates:"1779-1854",father:"LZ2Z-TC7",mother:"G4SN-QR3",spouses:["L1J4-L8G"],children:["LZPM-KWX"]},"LZPM-KWX":{first:"Abraham Snavely",last:"Landis",dates:"1798-1874",father:"L1J4-L8G",mother:"L6MF-Z1Z",spouses:["GQXZ-NZ8"],children:["LHZ7-LCY"]},"GQXZ-NZ8":{first:"Barbara Burkholder",last:"Landis",dates:"1799-1881",father:"L4WW-H2N",mother:"9NCF-VS5",spouses:["LZPM-KWX"],children:["LHZ7-LCY"]},"L41Z-LYG":{first:"William",last:"Hixson",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZ8S-N1B"],children:["LC82-37N"]},"LZ8S-N1B":{first:"Mary",last:"Pattison",dates:"",father:"unscraped",mother:"unscraped",spouses:["L41Z-LYG"],children:["LC82-37N"]},"2CTY-1GZ":{first:"Nicholas",last:"Stillwell",dates:"",father:"unscraped",mother:"unscraped",spouses:["GHJW-3DS"],children:["G7SB-C5F"]},"GHJW-3DS":{first:"Mary",last:"Moore",dates:"",father:"unscraped",mother:"unscraped",spouses:["2CTY-1GZ"],children:["G7SB-C5F"]},"M53Y-YJ3":{first:"Edward",last:"Lord",dates:"",father:"unscraped",mother:"unscraped",spouses:["M53Y-YJX"],children:["LV68-7LJ"]},"M53Y-YJX":{first:"Elizabeth",last:"Doetl",dates:"",father:"unscraped",mother:"unscraped",spouses:["M53Y-YJ3"],children:["LV68-7LJ"]},"G821-M23":{first:"Johannes",last:"von Oberbeck",dates:"",father:"unscraped",mother:"unscraped",spouses:["G821-978"],children:["26LH-TCZ"]},"G821-978":{first:"Anna Barbara",last:"von Falckenburg",dates:"",father:"unscraped",mother:"unscraped",spouses:["G821-M23"],children:["26LH-TCZ"]},"G7J1-Z26":{first:"Andreas",last:"Scherer",dates:"",father:"unscraped",mother:"unscraped",spouses:["G7JB-X6H"],children:["G7ZC-7N3"]},"G7JB-X6H":{first:"Maria",last:"Magna",dates:"",father:"unscraped",mother:"unscraped",spouses:["G7J1-Z26"],children:["G7ZC-7N3"]},"2BLT-CCD":{first:"Johann Georg",last:"Drach",dates:"",father:"unscraped",mother:"unscraped",spouses:["GLND-9KH"],children:["LCT5-H93"]},"GLND-9KH":{first:"Helena Catha...",last:"Meyer",dates:"",father:"unscraped",mother:"unscraped",spouses:["2BLT-CCD"],children:["LCT5-H93"]},"L41G-658":{first:"Johannes",last:"Metzler",dates:"",father:"unscraped",mother:"unscraped",spouses:["L41G-6P6"],children:["LH52-RGJ"]},"L41G-6P6":{first:"Anna Cathari...",last:"Bender",dates:"",father:"unscraped",mother:"unscraped",spouses:["L41G-658"],children:["LH52-RGJ"]},"K4NQ-C3J":{first:"Hubertus",last:"Stein",dates:"",father:"unscraped",mother:"unscraped",spouses:["KZ58-BW9"],children:["LZTL-8B6"]},"KZ58-BW9":{first:"Maria Margar...",last:"Steinin",dates:"",father:"unscraped",mother:"unscraped",spouses:["K4NQ-C3J"],children:["LZTL-8B6"]},"MNYJ-D9P":{first:"Balthasar",last:"Mueller",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["LY6M-SRY"]},"LY6M-SJT":{first:"Servatius",last:"Schleich",dates:"",father:"unscraped",mother:"unscraped",spouses:["LY6M-MD8"],children:["LZTL-8BJ"]},"LY6M-MD8":{first:"Gertrud",last:"Schmitz",dates:"",father:"unscraped",mother:"unscraped",spouses:["LY6M-SJT"],children:["LZTL-8BJ"]},"G6JM-3R7":{first:"Johannes",last:"Schmiden",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["LZTL-8BK"]},"KXYH-5MQ":{first:'Class "Claus...',last:"Franckenfeld",dates:"",father:"unscraped",mother:"unscraped",spouses:["KXRL-D3P"],children:["LW1Y-34L"]},"KXRL-D3P":{first:"Anna",last:"Deum",dates:"",father:"unscraped",mother:"unscraped",spouses:["KXYH-5MQ"],children:["LW1Y-34L"]},"L2J9-THQ":{first:"Hans Ludwig",last:"Wallrabenstein",dates:"",father:"unscraped",mother:"unscraped",spouses:["L2J9-1WN"],children:["KD1K-QXR"]},"L2J9-1WN":{first:"Anna",last:"Wallrabenstein",dates:"",father:"unscraped",mother:"unscraped",spouses:["L2J9-THQ"],children:["KD1K-QXR"]},"G5C4-66S":{first:"Hanss Johannes",last:"Becker",dates:"",father:"unscraped",mother:"unscraped",spouses:["G584-ZLB"],children:["9NKJ-6HL"]},"G584-ZLB":{first:"Margaretha",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["G5C4-66S"],children:["9NKJ-6HL"]},"G5C4-JRM":{first:"Hanss",last:"Veith",dates:"",father:"unscraped",mother:"unscraped",spouses:["G5C4-JHN"],children:["9NKJ-6HP"]},"G5C4-JHN":{first:"Barbel",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["G5C4-JRM"],children:["9NKJ-6HP"]},"GL1N-BDH":{first:"Jacob",last:"Beutelmann II",dates:"",father:"unscraped",mother:"unscraped",spouses:["GP21-W6B"],children:["LCCB-QK2"]},"GP21-W6B":{first:"Anna",last:"Kräll",dates:"",father:"unscraped",mother:"unscraped",spouses:["GL1N-BDH"],children:["LCCB-QK2"]},"G94T-C3H":{first:"Hans Henrichs",last:"Hammans",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["G94T-98N"]},"LL48-SK2":{first:"Antonii",last:"Oberman",dates:"",father:"unscraped",mother:"unscraped",spouses:["LYG9-MLQ"],children:["MKNW-C36"]},"LYG9-MLQ":{first:"Maria",last:"Kremm",dates:"",father:"unscraped",mother:"unscraped",spouses:["LL48-SK2"],children:["MKNW-C36"]},"LC82-37N":{first:"John",last:"Hixson",dates:"1675-1736",father:"L41Z-LYG",mother:"LZ8S-N1B",spouses:["G7SB-C5F"],children:["M5RM-67N"]},"G7SB-C5F":{first:"Elizabeth Ann",last:"Stillwell",dates:"1683-1740",father:"2CTY-1GZ",mother:"GHJW-3DS",spouses:["LC82-37N"],children:["M5RM-67N"]},"LV68-7JM":{first:"William",last:"Everett",dates:"1670-1740",father:null,mother:null,spouses:["LV68-7LJ"],children:["KD34-HP9"]},"LV68-7LJ":{first:"Elizabeth",last:"Lord",dates:"1672-1741",father:"M53Y-YJ3",mother:"M53Y-YJX",spouses:["LV68-7JM"],children:["KD34-HP9"]},"26LH-TCZ":{first:"Adrian",last:"Oberbeck",dates:"1655-1685",father:"G821-M23",mother:"G821-978",spouses:["G7ZC-7N3"],children:["LCXH-KGH"]},"G7ZC-7N3":{first:"Maria Margar...",last:"Scherer",dates:"1656-1696",father:"G7J1-Z26",mother:"G7JB-X6H",spouses:["26LH-TCZ"],children:["LCXH-KGH"]},"LCT5-H93":{first:"Johann Peter",last:"Drach",dates:"1669-1738",father:"2BLT-CCD",mother:"GLND-9KH",spouses:["LH52-RGJ"],children:["276S-VCQ"]},"LH52-RGJ":{first:"Anna Christina",last:"Metzler",dates:"1665-1707",father:"L41G-658",mother:"L41G-6P6",spouses:["LCT5-H93"],children:["276S-VCQ"]},"LZTL-8B6":{first:"Franz Wolrab",last:"Stein",dates:"1665-1736",father:"K4NQ-C3J",mother:"KZ58-BW9",spouses:["LY6M-SRY"],children:["LY6M-92G"]},"LY6M-SRY":{first:"Juliana Kath...",last:"Adam",dates:"1665-1738",father:"MNYJ-D9P",mother:null,spouses:["LZTL-8B6"],children:["LY6M-92G"]},"LZTL-8BJ":{first:"Johann Valentin",last:"Schleich",dates:"1665-1729",father:"LY6M-SJT",mother:"LY6M-MD8",spouses:["LZTL-8BK"],children:["GXJ4-5YN"]},"LZTL-8BK":{first:"Anna Elisabeth",last:"Schmieden",dates:"1670-1736",father:"G6JM-3R7",mother:null,spouses:["LZTL-8BJ"],children:["GXJ4-5YN"]},"LW1Y-34L":{first:"Hubert",last:"Franckenfield",dates:"1644-1724",father:"KXYH-5MQ",mother:"KXRL-D3P",spouses:["KD1K-QXR"],children:["LHF8-NSY"]},"KD1K-QXR":{first:"Anna Dorothea",last:"Wallrabstein",dates:"1637-1678",father:"L2J9-THQ",mother:"L2J9-1WN",spouses:["LW1Y-34L"],children:["LHF8-NSY"]},"9NKJ-6HL":{first:"Hans Jost",last:"Becker",dates:"1644-1705",father:"G5C4-66S",mother:"G584-ZLB",spouses:["9NKJ-6HP"],children:["G89P-K2S"]},"9NKJ-6HP":{first:"Anna Margaretha",last:"Veith",dates:"1647-1723",father:"G5C4-JRM",mother:"G5C4-JHN",spouses:["9NKJ-6HL"],children:["G89P-K2S"]},"LCCB-QK2":{first:"Johannes",last:"Beutelmann",dates:"1643-1711",father:"GL1N-BDH",mother:"GP21-W6B",spouses:["G94T-98N"],children:["LCCB-QWM"]},"G94T-98N":{first:"Anna Margaret",last:"Hamann",dates:"1645-1730",father:"G94T-C3H",mother:null,spouses:["LCCB-QK2"],children:["LCCB-QWM"]},"MKNW-C36":{first:"Hannß Martin",last:"Obermann",dates:"1665-1717",father:"LL48-SK2",mother:"LYG9-MLQ",spouses:["G9R9-69W"],children:["LCCB-Q3W"]},"G9R9-69W":{first:"Anna Barbara",last:"",dates:"1669-Deceased",father:null,mother:null,spouses:["MKNW-C36"],children:["LCCB-Q3W"]},"M5RM-67N":{first:"Mathew Joseph",last:"Hixson",dates:"1704-1774",father:"LC82-37N",mother:"G7SB-C5F",spouses:["KD34-HP9"],children:["LCZ1-2KJ"]},"KD34-HP9":{first:"Phebe",last:"Everett",dates:"1706-1811",father:"LV68-7JM",mother:"LV68-7LJ",spouses:["M5RM-67N"],children:["LCZ1-2KJ"]},"LCXH-KGH":{first:"Andreas",last:"Oberbeck",dates:"1684-1765",father:"26LH-TCZ",mother:"G7ZC-7N3",spouses:["276S-VCQ"],children:["26LH-G7Q"]},"276S-VCQ":{first:"Maria Elisabetha",last:"Drach",dates:"1692-1774",father:"LCT5-H93",mother:"LH52-RGJ",spouses:["LCXH-KGH"],children:["26LH-G7Q"]},"LY6M-92G":{first:"Johann Wilhelm",last:"Stein",dates:"1692-1760",father:"LZTL-8B6",mother:"LY6M-SRY",spouses:["GXJ4-5YN"],children:["KV27-T8V"]},"GXJ4-5YN":{first:"Katharina Anna",last:"Scheig",dates:"1693-1762",father:"LZTL-8BJ",mother:"LZTL-8BK",spouses:["LY6M-92G"],children:["KV27-T8V"]},"LHF8-NSY":{first:"Peter Phillip",last:"Frankenfield",dates:"1678-1752",father:"LW1Y-34L",mother:"KD1K-QXR",spouses:["G89P-K2S"],children:["KT76-TMB"]},"G89P-K2S":{first:"Anna Maria Sabina",last:"Becker",dates:"1680-1755",father:"9NKJ-6HL",mother:"9NKJ-6HP",spouses:["LHF8-NSY"],children:["KT76-TMB"]},"LCCB-QWM":{first:"Johannes Hans ...",last:"Beutelmann",dates:"1685-1730",father:"LCCB-QK2",mother:"G94T-98N",spouses:["LCCB-Q3W"],children:["KXRL-D3X"]},"LCCB-Q3W":{first:"Anna Clara",last:"Biermann",dates:"1689-1722",father:"MKNW-C36",mother:"G9R9-69W",spouses:["LCCB-QWM"],children:["KXRL-D3X"]},"LCZ1-2KJ":{first:"Judiah",last:"Hixson",dates:"1729-1808",father:"M5RM-67N",mother:"KD34-HP9",spouses:["L4MY-MZY"],children:["L6BY-M3D"]},"L4MY-MZY":{first:"Rachel",last:"Lacey",dates:"1731-1786",father:null,mother:null,spouses:["LCZ1-2KJ"],children:["L6BY-M3D"]},"26LH-G7Q":{first:"J. George",last:"Oberbeck",dates:"1715-1798",father:"LCXH-KGH",mother:"276S-VCQ",spouses:["KV27-T8V"],children:["968S-WLW"]},"KV27-T8V":{first:"Margaretha Cat...",last:"Stein",dates:"1719-1760",father:"LY6M-92G",mother:"GXJ4-5YN",spouses:["26LH-G7Q"],children:["968S-WLW"]},"KT76-TMB":{first:"Johann Simon",last:"Frankenfield",dates:"1709-1763",father:"LHF8-NSY",mother:"G89P-K2S",spouses:["KXRL-D3X"],children:["LZPZ-VNB"]},"KXRL-D3X":{first:"Anna Eva",last:"Beidelman",dates:"1712-1775",father:"LCCB-QWM",mother:"LCCB-Q3W",spouses:["KT76-TMB"],children:["LZPZ-VNB"]},"L6BY-M3D":{first:"Daniel",last:"Hixson",dates:"1752-1831",father:"LCZ1-2KJ",mother:"L4MY-MZY",spouses:["LJK8-XBN"],children:["LJKZ-2K7"]},"LJK8-XBN":{first:"Elsie",last:"",dates:"1753-1829",father:null,mother:null,spouses:["L6BY-M3D"],children:["LJKZ-2K7"]},"968S-WLW":{first:"Jacob Andreas",last:"Overpeck",dates:"1758-1804",father:"26LH-G7Q",mother:"KV27-T8V",spouses:["LZPZ-VNB"],children:["MD8M-CYK"]},"LZPZ-VNB":{first:"Anna Maria",last:"Frankenfield",dates:"1753-1835",father:"KT76-TMB",mother:"KXRL-D3X",spouses:["968S-WLW"],children:["MD8M-CYK"]},"LJKZ-2K7":{first:"Andrew",last:"Hixson",dates:"1793-1837",father:"L6BY-M3D",mother:"LJK8-XBN",spouses:["MD8M-CYK"],children:["LJK8-6VQ"]},"MD8M-CYK":{first:"Anna Maria",last:"Overpeck",dates:"1775-1837",father:"968S-WLW",mother:"LZPZ-VNB",spouses:["LJKZ-2K7"],children:["LJK8-6VQ"]},"LVBV-3HL":{first:"Johannes Peter",last:"Doll",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCW2-XLD"],children:["KLVK-Z6R"]},"LCW2-XLD":{first:"Gertraud",last:"Fick",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVBV-3HL"],children:["KLVK-Z6R"]},"LCP5-G33":{first:"Hannss Peter",last:"Schuch",dates:"",father:"unscraped",mother:"unscraped",spouses:["MMD4-Y2T"],children:["9X1W-N7P"]},"MMD4-Y2T":{first:"Anna Maria",last:"Käppel",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCP5-G33"],children:["9X1W-N7P"]},"LBSM-3R8":{first:"Johann Chris...",last:"Dromm",dates:"",father:"unscraped",mother:"unscraped",spouses:["GVWF-2G1"],children:["L8TK-37S"]},"GVWF-2G1":{first:"Anna Catherina",last:"Diel",dates:"",father:"unscraped",mother:"unscraped",spouses:["LBSM-3R8"],children:["L8TK-37S"]},"LZFW-HG1":{first:"Johann Jacob",last:"Mumbauer",dates:"",father:"unscraped",mother:"unscraped",spouses:["L4QZ-KBK"],children:["L6J4-1MV"]},"L4QZ-KBK":{first:"Anna Catharina",last:"Doll",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZFW-HG1"],children:["L6J4-1MV"]},"MD3N-SNB":{first:"Claude",last:"Mathieu",dates:"",father:"unscraped",mother:"unscraped",spouses:["MD3N-SJF"],children:["9N23-QN6"]},"MD3N-SJF":{first:"Elizabet",last:"Brisson",dates:"",father:"unscraped",mother:"unscraped",spouses:["MD3N-SNB"],children:["9N23-QN6"]},"G7G4-DV5":{first:"Benoist",last:"Hottelain",dates:"",father:"unscraped",mother:"unscraped",spouses:["G7G4-KRX"],children:["KLFB-YKV"]},"G7G4-KRX":{first:"Catherine",last:"Gregoire",dates:"",father:"unscraped",mother:"unscraped",spouses:["G7G4-DV5"],children:["KLFB-YKV"]},"KND1-DKK":{first:"Pierre",last:"Lanternier",dates:"",father:"unscraped",mother:"unscraped",spouses:["KNDT-H13"],children:["KND1-DLB"]},"KNDT-H13":{first:"Anne",last:"Briolet ou B...",dates:"",father:"unscraped",mother:"unscraped",spouses:["KND1-DKK"],children:["KND1-DLB"]},"KNDB-XZV":{first:"Christophe",last:"Boulanger",dates:"",father:"unscraped",mother:"unscraped",spouses:["KND1-D1H"],children:["KNWB-4FV"]},"KND1-D1H":{first:"Anne-marie",last:"Marchal",dates:"",father:"unscraped",mother:"unscraped",spouses:["KNDB-XZV"],children:["KNWB-4FV"]},"M96S-RLD":{first:"John Lewis",last:"Junkin",dates:"",father:"unscraped",mother:"unscraped",spouses:["G371-R9L","G371-R9L"],children:["MSXC-LP8","HMCJ-WKT"]},"G371-R9L":{first:"Margaret",last:"Lynn",dates:"",father:"unscraped",mother:"unscraped",spouses:["M96S-RLD","M96S-RLD"],children:["MSXC-LP8","HMCJ-WKT"]},"LCFJ-CRH":{first:"John",last:"Wallace",dates:"",father:"unscraped",mother:"unscraped",spouses:["GNV4-2RJ"],children:["GXST-3MR"]},"GNV4-2RJ":{first:"Martha",last:"Hays",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCFJ-CRH"],children:["GXST-3MR"]},"LZVP-ZCJ":{first:"Samuel",last:"Galloway",dates:"",father:"unscraped",mother:"unscraped",spouses:["LJBS-5ZP"],children:["LD3J-2CG"]},"LJBS-5ZP":{first:"Elizabeth",last:"Graham",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZVP-ZCJ"],children:["LD3J-2CG"]},"LKDD-RJX":{first:"Andrew Robert",last:"Bratton",dates:"",father:"unscraped",mother:"unscraped",spouses:["LKDD-TKX"],children:["GLTB-VDQ"]},"LKDD-TKX":{first:"Audrea",last:"Dunlop",dates:"",father:"unscraped",mother:"unscraped",spouses:["LKDD-RJX"],children:["GLTB-VDQ"]},"GGYF-BRK":{first:"James",last:"Armstrong",dates:"",father:"unscraped",mother:"unscraped",spouses:["GGYN-QZT"],children:["GGYN-WF2"]},"GGYN-QZT":{first:'Janet "Janey"',last:"Porter",dates:"",father:"unscraped",mother:"unscraped",spouses:["GGYF-BRK"],children:["GGYN-WF2"]},"G5Z4-5WV":{first:"Edmund",last:"Holliday",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCPD-1F2"],children:["K2XR-9GR"]},"LCPD-1F2":{first:"Mary",last:"Jones",dates:"",father:"unscraped",mother:"unscraped",spouses:["G5Z4-5WV"],children:["K2XR-9GR"]},"MJLF-6QR":{first:"John",last:"Blair",dates:"",father:"unscraped",mother:"unscraped",spouses:["L1WB-9GW"],children:["MTKY-4WP"]},"L1WB-9GW":{first:"Elizabeth",last:"Pearson",dates:"",father:"unscraped",mother:"unscraped",spouses:["MJLF-6QR"],children:["MTKY-4WP"]},"G66Z-BPF":{first:"Hans Sigmund",last:"Derr",dates:"1687-1745",father:null,mother:null,spouses:["L7G9-1HG"],children:["G694-8BB"]},"L7G9-1HG":{first:"Margaretha",last:"Hachel",dates:"1688-1746",father:null,mother:null,spouses:["G66Z-BPF"],children:["G694-8BB"]},"G66Y-8YL":{first:"Friederich W...",last:"SCHLAGEL",dates:"1693-Deceased",father:null,mother:null,spouses:["G66Y-88Z"],children:["L75M-39G"]},"G66Y-88Z":{first:"Eva",last:"SCHLAGEL",dates:"1695-Deceased",father:null,mother:null,spouses:["G66Y-8YL"],children:["L75M-39G"]},"KLVK-Z6R":{first:"Johann Chris...",last:"Doll",dates:"1671-1739",father:"LVBV-3HL",mother:"LCW2-XLD",spouses:["9X1W-N7P"],children:["M1GK-L7V"]},"9X1W-N7P":{first:"Sara Margaretha",last:"Schuch",dates:"1686-1760",father:"LCP5-G33",mother:"MMD4-Y2T",spouses:["KLVK-Z6R"],children:["M1GK-L7V"]},"L8TK-37S":{first:"Johann Simon",last:"Drumm",dates:"1689-1757",father:"LBSM-3R8",mother:"GVWF-2G1",spouses:["L6J4-1MV"],children:["LZXH-8P9"]},"L6J4-1MV":{first:"Anna Elisabetha",last:"Mumbauer",dates:"1692-Deceased",father:"LZFW-HG1",mother:"L4QZ-KBK",spouses:["L8TK-37S"],children:["LZXH-8P9"]},"9N23-QN6":{first:"Claude",last:"Mathieu",dates:"1708-Deceased",father:"MD3N-SNB",mother:"MD3N-SJF",spouses:["KLFB-YKV"],children:["GQ59-X9L"]},"KLFB-YKV":{first:"Catherine",last:"Hottelain",dates:"1710-Deceased",father:"G7G4-DV5",mother:"G7G4-KRX",spouses:["9N23-QN6"],children:["GQ59-X9L"]},"KND1-DLB":{first:"Antoine",last:"Lanternier",dates:"1694-1770",father:"KND1-DKK",mother:"KNDT-H13",spouses:["KNWB-4FV"],children:["KNWY-ZWW"]},"KNWB-4FV":{first:"Marie",last:"Boulanger",dates:"1700-1750",father:"KNDB-XZV",mother:"KND1-D1H",spouses:["KND1-DLB"],children:["KNWY-ZWW"]},"MSXC-LP8":{first:"Joseph",last:"Junkin",dates:"1715-1777",father:"M96S-RLD",mother:"G371-R9L",spouses:["GXST-3MR"],children:["LC79-JKP"]},"GXST-3MR":{first:"Elizabeth",last:"Wallace",dates:"1724-1796",father:"LCFJ-CRH",mother:"GNV4-2RJ",spouses:["MSXC-LP8"],children:["LC79-JKP"]},"LD3J-2CG":{first:"George",last:"Galloway",dates:"1723-1800",father:"LZVP-ZCJ",mother:"LJBS-5ZP",spouses:["HMCJ-WKT"],children:["LC79-JLB"]},"HMCJ-WKT":{first:"Rebekah",last:"Junkin",dates:"1720-1780",father:"M96S-RLD",mother:"G371-R9L",spouses:["LD3J-2CG"],children:["LC79-JLB"]},"GLTB-VDQ":{first:"Samuel Andrew",last:"Bratton",dates:"1716-1786",father:"LKDD-RJX",mother:"LKDD-TKX",spouses:["GGYN-WF2"],children:["LZ3J-M94"]},"GGYN-WF2":{first:"E Jennie",last:"Armstrong",dates:"1716-1769",father:"GGYF-BRK",mother:"GGYN-QZT",spouses:["GLTB-VDQ"],children:["LZ3J-M94"]},"K2XR-9GR":{first:"John",last:"Holliday",dates:"1700-1770",father:"G5Z4-5WV",mother:"LCPD-1F2",spouses:["MTKY-4WP"],children:["G9JQ-RGZ"]},"MTKY-4WP":{first:"Jean",last:"Blair",dates:"1703-1776",father:"MJLF-6QR",mother:"L1WB-9GW",spouses:["K2XR-9GR"],children:["G9JQ-RGZ"]},"G694-8BB":{first:"Jacob",last:"Derr",dates:"1720-1789",father:"G66Z-BPF",mother:"L7G9-1HG",spouses:["L75M-39G"],children:["G7D4-BZT"]},"L75M-39G":{first:"Maria Margaret...",last:"Schlaeger",dates:"1720-1812",father:"G66Y-8YL",mother:"G66Y-88Z",spouses:["G694-8BB"],children:["G7D4-BZT"]},"M1GK-L7V":{first:"Johann Christian",last:"Doll",dates:"1712-1758",father:"KLVK-Z6R",mother:"9X1W-N7P",spouses:["LZXH-8P9"],children:["29WQ-BD3"]},"LZXH-8P9":{first:"Maria Catharina",last:"Drumm",dates:"1716-1779",father:"L8TK-37S",mother:"L6J4-1MV",spouses:["M1GK-L7V"],children:["29WQ-BD3"]},"GQ59-X9L":{first:"Louis",last:"Mathieu",dates:"1732-Deceased",father:"9N23-QN6",mother:"KLFB-YKV",spouses:["KNWY-ZWW"],children:["L8TN-JDX"]},"KNWY-ZWW":{first:"Anne",last:"Lanternier",dates:"1733-Deceased",father:"KND1-DLB",mother:"KNWB-4FV",spouses:["GQ59-X9L"],children:["L8TN-JDX"]},"LC79-JKP":{first:"William",last:"Junkin",dates:"1744-1825",father:"MSXC-LP8",mother:"GXST-3MR",spouses:["LC79-JLB"],children:["LC79-JZZ"]},"LC79-JLB":{first:"Jane",last:"Galloway",dates:"1745-1786",father:"LD3J-2CG",mother:"HMCJ-WKT",spouses:["LC79-JKP"],children:["LC79-JZZ"]},"LZ3J-M94":{first:"James",last:"Bratton Sr.",dates:"1735-1799",father:"GLTB-VDQ",mother:"GGYN-WF2",spouses:["G9JQ-RGZ"],children:["LC79-JHX"]},"G9JQ-RGZ":{first:'Mary "Nancy"',last:"Holliday",dates:"1740-Deceased",father:"K2XR-9GR",mother:"MTKY-4WP",spouses:["LZ3J-M94"],children:["LC79-JHX"]},"G7D4-BZT":{first:"Christian",last:"Derr",dates:"1747-1824",father:"G694-8BB",mother:"L75M-39G",spouses:["LZ3Q-R5Z"],children:["LKJ7-M1C"]},"LZ3Q-R5Z":{first:"Magdalena",last:"Smelchner",dates:"1748-1818",father:null,mother:null,spouses:["G7D4-BZT"],children:["LKJ7-M1C"]},"29WQ-BD3":{first:"Casper",last:"Dull",dates:"1748-1829",father:"M1GK-L7V",mother:"LZXH-8P9",spouses:["L8TN-JDX"],children:["KLLF-2S1"]},"L8TN-JDX":{first:"Hannah Catherine",last:"Matthews",dates:"1758-1826",father:"GQ59-X9L",mother:"KNWY-ZWW",spouses:["29WQ-BD3"],children:["KLLF-2S1"]},"LC79-JZZ":{first:"James",last:"Junkin",dates:"1772-1823",father:"LC79-JKP",mother:"LC79-JLB",spouses:["LC79-JHX"],children:["LC73-FZ8"]},"LC79-JHX":{first:'Agnes "Nancy"',last:"Bratton",dates:"1777-1853",father:"LZ3J-M94",mother:"G9JQ-RGZ",spouses:["LC79-JZZ"],children:["LC73-FZ8"]},"LKJ7-M5V":{first:"Christian",last:"Beneigh",dates:"1768-1852",father:null,mother:null,spouses:["LKJ7-M1C"],children:["L2R2-KJM"]},"LKJ7-M1C":{first:"Catherine",last:"Darr",dates:"1770-1824",father:"G7D4-BZT",mother:"LZ3Q-R5Z",spouses:["LKJ7-M5V"],children:["L2R2-KJM"]},"KLLF-2S1":{first:"Casper",last:"Dull",dates:"1791-1874",father:"29WQ-BD3",mother:"L8TN-JDX",spouses:["LC73-FZ8"],children:["L2R2-PJS"]},"LC73-FZ8":{first:"Jane",last:"Junkin",dates:"1798-1885",father:"LC79-JZZ",mother:"LC79-JHX",spouses:["KLLF-2S1"],children:["L2R2-PJS"]},"L2R2-KJM":{first:"George",last:"Beneigh",dates:"1805-1887",father:"LKJ7-M5V",mother:"LKJ7-M1C",spouses:["L2R2-PJS"],children:["LJKV-BMV"]},"L2R2-PJS":{first:"Nancy",last:"Dull",dates:"1810-1890",father:"KLLF-2S1",mother:"LC73-FZ8",spouses:["L2R2-KJM"],children:["LJKV-BMV"]},"LWFV-J5L":{first:"Hans Jakob",last:"Goetz",dates:"",father:"unscraped",mother:"unscraped",spouses:["KJ4H-7PG"],children:["L1X6-9JH"]},"KJ4H-7PG":{first:"Anna",last:"Fuchs",dates:"",father:"unscraped",mother:"unscraped",spouses:["LWFV-J5L"],children:["L1X6-9JH"]},"LZK3-2Z6":{first:"Hanß Michael",last:"Kuentzel",dates:"",father:"unscraped",mother:"unscraped",spouses:["KZ9D-XP3"],children:["GWZ7-LV4"]},"KZ9D-XP3":{first:"Elisabetha",last:"Schmidt",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZK3-2Z6"],children:["GWZ7-LV4"]},"LV6C-539":{first:"Johan Ulrich",last:"Shearer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LV6C-57R"],children:["GSY4-VWM"]},"LV6C-57R":{first:"Catherine",last:"Deem",dates:"",father:"unscraped",mother:"unscraped",spouses:["LV6C-539"],children:["GSY4-VWM"]},"GQG5-378":{first:"Peter Pallio",last:"Ballie",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCRF-7P1"],children:["GDS7-568"]},"LCRF-7P1":{first:"Susanna",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["GQG5-378"],children:["GDS7-568"]},"G64C-V72":{first:"Hans Johann ...",last:"Böehme IV",dates:"",father:"unscraped",mother:"unscraped",spouses:["G64C-BF9"],children:["G64Z-STN"]},"G64C-BF9":{first:"Barbli",last:"Fredley",dates:"",father:"unscraped",mother:"unscraped",spouses:["G64C-V72"],children:["G64Z-STN"]},"KZ1R-XNP":{first:"Joannis Georgii",last:"Wetter",dates:"",father:"unscraped",mother:"unscraped",spouses:["K6C5-BSX"],children:["KHRV-4XS"]},"K6C5-BSX":{first:"Annae Margre...",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["KZ1R-XNP"],children:["KHRV-4XS"]},"L4WJ-VRW":{first:"Hanns  Heinr...",last:"Hubler",dates:"",father:"unscraped",mother:"unscraped",spouses:["L4WJ-KXD"],children:["L4WJ-V8T"]},"L4WJ-KXD":{first:"Germaine Jeanne",last:"Pillou",dates:"",father:"unscraped",mother:"unscraped",spouses:["L4WJ-VRW"],children:["L4WJ-V8T"]},"LHJL-XWH":{first:"Peter",last:"Graupi",dates:"",father:"unscraped",mother:"unscraped",spouses:["LW9Q-RLW"],children:["LW66-688"]},"LW9Q-RLW":{first:"Anna",last:"Perro",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHJL-XWH"],children:["LW66-688"]},"KVLT-3K1":{first:"Melchior",last:"Becker",dates:"",father:"unscraped",mother:"unscraped",spouses:["27CC-5RH"],children:["L5FW-J9T"]},"27CC-5RH":{first:"Barbara",last:"Altmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["KVLT-3K1"],children:["L5FW-J9T"]},"K67H-TFK":{first:"Hans Peter",last:"Heer",dates:"",father:"unscraped",mother:"unscraped",spouses:["27CC-RQK"],children:["L5FW-F13"]},"27CC-RQK":{first:"Anna",last:"Stapfer",dates:"",father:"unscraped",mother:"unscraped",spouses:["K67H-TFK"],children:["L5FW-F13"]},"GGZP-1SF":{first:"Ulrich",last:"Freÿ",dates:"Deceased",father:null,mother:null,spouses:[null],children:["LCPY-DCP"]},"L1X6-9JH":{first:"Johann Andreas",last:"Götzschallfer",dates:"1678-1750",father:"LWFV-J5L",mother:"KJ4H-7PG",spouses:["GWZ7-LV4"],children:["GWZ7-YJC"]},"GWZ7-LV4":{first:"Anna Catharina",last:"Kuentzel",dates:"1691-1746",father:"LZK3-2Z6",mother:"KZ9D-XP3",spouses:["L1X6-9JH"],children:["GWZ7-YJC"]},"GSY4-VWM":{first:"Johan Ulrich",last:"Schearer",dates:"-1754",father:"LV6C-539",mother:"LV6C-57R",spouses:["GDS7-568"],children:["L2GW-RTG"]},"GDS7-568":{first:"Maria Dorothea",last:"Ballie",dates:"1710-1771",father:"GQG5-378",mother:"LCRF-7P1",spouses:["GSY4-VWM"],children:["L2GW-RTG"]},"G64Z-STN":{first:"Rudolph",last:"Behm",dates:"1690-1773",father:"G64C-V72",mother:"G64C-BF9",spouses:["GWZ7-BKT"],children:["LHLB-GZK"]},"GWZ7-BKT":{first:"Elisabeth",last:"Bachman",dates:"1704-1782",father:null,mother:null,spouses:["G64Z-STN"],children:["LHLB-GZK"]},"LKVW-W62":{first:"Joannis Ottonis",last:"Glass",dates:"1688-Deceased",father:null,mother:null,spouses:["L8WT-D31"],children:["M824-6V2"]},"L8WT-D31":{first:"Anna Dorothea",last:"Dengel",dates:"1689-Deceased",father:null,mother:null,spouses:["LKVW-W62"],children:["M824-6V2"]},"GFMC-64P":{first:"Johann Nickel",last:"Wolff",dates:"1704-1800",father:null,mother:null,spouses:["KHRV-4XS"],children:["M82C-SWV"]},"KHRV-4XS":{first:"Maria Agnes",last:"Vetter",dates:"1706-Deceased",father:"KZ1R-XNP",mother:"K6C5-BSX",spouses:["GFMC-64P"],children:["M82C-SWV"]},"L4WJ-V8T":{first:"Hans Jacob",last:"Hubler",dates:"1683-1731",father:"L4WJ-VRW",mother:"L4WJ-KXD",spouses:["LW66-688"],children:["LCFC-5GW"]},"LW66-688":{first:"Anna Margaretha",last:"Graupi",dates:"1683-1781",father:"LHJL-XWH",mother:"LW9Q-RLW",spouses:["L4WJ-V8T"],children:["LCFC-5GW"]},"L5FW-J9T":{first:"Hans",last:"Becker",dates:"1680-1735",father:"KVLT-3K1",mother:"27CC-5RH",spouses:["L5FW-F13"],children:["LY5V-3JN"]},"L5FW-F13":{first:"Maria  Magde...",last:"Heer",dates:"1685-1748",father:"K67H-TFK",mother:"27CC-RQK",spouses:["L5FW-J9T"],children:["LY5V-3JN"]},"LCPY-DCP":{first:"Johannes",last:"Freÿ",dates:"1718-1753",father:"GGZP-1SF",mother:null,spouses:["GWZ7-YJC"],children:["LCR8-TK3"]},"GWZ7-YJC":{first:"Maria Catharina",last:"Götzschallfer",dates:"1717-1789",father:"L1X6-9JH",mother:"GWZ7-LV4",spouses:["LCPY-DCP"],children:["LCR8-TK3"]},"L2GW-RTG":{first:"Heinrich",last:"Shearer",dates:"1738-1812",father:"GSY4-VWM",mother:"GDS7-568",spouses:["LHLB-GZK"],children:["LDNB-23X"]},"LHLB-GZK":{first:"Barbara",last:"Beam",dates:"1740-1812",father:"G64Z-STN",mother:"GWZ7-BKT",spouses:["L2GW-RTG"],children:["LDNB-23X"]},"M824-6V2":{first:"Joh. Michael",last:"Glass",dates:"1716-1775",father:"LKVW-W62",mother:"L8WT-D31",spouses:["M82C-SWV"],children:["L4D6-6P8"]},"M82C-SWV":{first:"Marie Margaretha",last:"Wolff",dates:"1719-1750",father:"GFMC-64P",mother:"KHRV-4XS",spouses:["M824-6V2"],children:["L4D6-6P8"]},"LCFC-5GW":{first:"Johann Jacob",last:"Hubler",dates:"1711-1789",father:"L4WJ-V8T",mother:"LW66-688",spouses:["LY5V-3JN"],children:["GW34-MVD"]},"LY5V-3JN":{first:"Anna Barbara",last:"Becker",dates:"1712-1795",father:"L5FW-J9T",mother:"L5FW-F13",spouses:["LCFC-5GW"],children:["GW34-MVD"]},"LCR8-TK3":{first:"Johann Martin",last:"Freÿ",dates:"1748-1834",father:"LCPY-DCP",mother:"GWZ7-YJC",spouses:["LDNB-23X"],children:["L1XX-81P"]},"LDNB-23X":{first:"Maria Magdalena",last:"Scherer",dates:"1760-1815",father:"L2GW-RTG",mother:"LHLB-GZK",spouses:["LCR8-TK3"],children:["L1XX-81P"]},"L4D6-6P8":{first:"Johann Michael",last:"Glass",dates:"1737-1808",father:"M824-6V2",mother:"M82C-SWV",spouses:["GW34-MVD"],children:["LZBN-Z7Q"]},"GW34-MVD":{first:"Christina",last:"Hubler",dates:"1747-1813",father:"LCFC-5GW",mother:"LY5V-3JN",spouses:["L4D6-6P8"],children:["LZBN-Z7Q"]},"LCTC-V49":{first:"John Daniel",last:"Jung",dates:"1764-1852",father:null,mother:null,spouses:["K4R1-42S"],children:["LHRR-1H8"]},"K4R1-42S":{first:"Elizabeth",last:"Kern",dates:"1773-1851",father:null,mother:null,spouses:["LCTC-V49"],children:["LHRR-1H8"]},"L1XX-81P":{first:"John Jacob",last:"Frey",dates:"1781-1838",father:"LCR8-TK3",mother:"LDNB-23X",spouses:["LZBN-Z7Q"],children:["MNSS-P69"]},"LZBN-Z7Q":{first:"Maria Margaret",last:"Glass",dates:"1782-1857",father:"L4D6-6P8",mother:"GW34-MVD",spouses:["L1XX-81P"],children:["MNSS-P69"]},"LHRR-1H8":{first:"Jacob",last:"Young",dates:"1797-1891",father:"LCTC-V49",mother:"K4R1-42S",spouses:["MNSS-P69"],children:["LJKZ-KL9"]},"MNSS-P69":{first:"Elizabeth Matilda",last:"Frey",dates:"1809-1890",father:"L1XX-81P",mother:"LZBN-Z7Q",spouses:["LHRR-1H8"],children:["LJKZ-KL9"]},"L3MJ-5NT":{first:"Johann Valentin",last:"Göbel",dates:"",father:"unscraped",mother:"unscraped",spouses:["L3MJ-TKB"],children:["LQ52-FLG"]},"L3MJ-TKB":{first:"Anna Catharina",last:"Riehm",dates:"",father:"unscraped",mother:"unscraped",spouses:["L3MJ-5NT"],children:["LQ52-FLG"]},"G9PY-7RJ":{first:"Johann Chris...",last:"Bernhard",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCVL-JMD"],children:["KCM8-VSF"]},"LCVL-JMD":{first:"Anna Margaretha",last:"Haas",dates:"",father:"unscraped",mother:"unscraped",spouses:["G9PY-7RJ"],children:["KCM8-VSF"]},"GG96-CDP":{first:"Friedrich",last:"Hanstein",dates:"",father:"unscraped",mother:"unscraped",spouses:["KZHZ-69C"],children:["K832-6JW"]},"KZHZ-69C":{first:"Katharina",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["GG96-CDP"],children:["K832-6JW"]},"MY6Z-2FM":{first:"Johann Heinrich",last:"Gerlach",dates:"1658-Deceased",father:null,mother:null,spouses:["MY6Z-2F4"],children:["L4ST-MPN"]},"MY6Z-2F4":{first:"Elisabetha B...",last:"Reichard",dates:"1659-Deceased",father:null,mother:null,spouses:["MY6Z-2FM"],children:["L4ST-MPN"]},"LQ52-FLG":{first:"Johannes",last:"Göbel",dates:"1679-1755",father:"L3MJ-5NT",mother:"L3MJ-TKB",spouses:["KCM8-VSF","KCM8-VSF"],children:["LS67-NTB","K42W-4WK"]},"KCM8-VSF":{first:"Maria Margar...",last:"Bernhard",dates:"1684-1752",father:"G9PY-7RJ",mother:"LCVL-JMD",spouses:["LQ52-FLG","LQ52-FLG"],children:["LS67-NTB","K42W-4WK"]},"LJ21-SQB":{first:"Michael",last:"Riedel",dates:"1658-1721",father:null,mother:null,spouses:["LJ21-SC7"],children:["KHYL-TVS"]},"LJ21-SC7":{first:"Margaretha E...",last:"Riedel",dates:"1678-1741",father:null,mother:null,spouses:["LJ21-SQB"],children:["KHYL-TVS"]},"K832-6JW":{first:"Friedrich Da...",last:"Hanstein",dates:"1686-1750",father:"GG96-CDP",mother:"KZHZ-69C",spouses:["KH2C-FDV"],children:["K897-3KT"]},"KH2C-FDV":{first:"Elisabetha M...",last:"",dates:"1685-1730",father:null,mother:null,spouses:["K832-6JW"],children:["K897-3KT"]},"MNQ7-857":{first:"Johann Heinrich",last:"Schellmann",dates:"1675-Deceased",father:null,mother:null,spouses:["L6XN-1TX"],children:["MVSN-43V"]},"L6XN-1TX":{first:"Anna Johanna...",last:"Herbst",dates:"Deceased",father:null,mother:null,spouses:["MNQ7-857"],children:["MVSN-43V"]},"L4ST-MPN":{first:"Johann Adam",last:"Gerlach",dates:"1702-1752",father:"MY6Z-2FM",mother:"MY6Z-2F4",spouses:["LS67-NTB"],children:["KHT9-5N9"]},"LS67-NTB":{first:"Anna Magdalena",last:"Göbel",dates:"1714-1800",father:"LQ52-FLG",mother:"KCM8-VSF",spouses:["L4ST-MPN"],children:["KHT9-5N9"]},"KHYL-TVS":{first:"Johann Heinrich",last:"Riedel",dates:"1714-1787",father:"LJ21-SQB",mother:"LJ21-SC7",spouses:["K897-3KT"],children:["KHW9-9YS"]},"K897-3KT":{first:"Anna Katharina...",last:"Hanstein",dates:"1724-1792",father:"K832-6JW",mother:"KH2C-FDV",spouses:["KHYL-TVS"],children:["KHW9-9YS"]},"K42W-4WK":{first:"Johann Christian",last:"Göbel",dates:"1708-1797",father:"LQ52-FLG",mother:"KCM8-VSF",spouses:["MVSN-43V"],children:["KCZ3-L6H"]},"MVSN-43V":{first:"Catharina Loui...",last:"Schellmann",dates:"1711-1788",father:"MNQ7-857",mother:"L6XN-1TX",spouses:["K42W-4WK"],children:["KCZ3-L6H"]},"94HR-T5Y":{first:"Johann Adam",last:"Rückert",dates:"Deceased",father:null,mother:null,spouses:["94HR-TRD"],children:["KHPW-B5B"]},"94HR-TRD":{first:"Ernestina Phil...",last:"Schultheiss",dates:"1718-1790",father:null,mother:null,spouses:["94HR-T5Y"],children:["KHPW-B5B"]},"KHT9-5N9":{first:"Ludwig Peter",last:"Gerlach",dates:"1741-1814",father:"L4ST-MPN",mother:"LS67-NTB",spouses:["KHW9-9YS"],children:["LRD6-ZG3"]},"KHW9-9YS":{first:"Johannetta Eli...",last:"Riedel",dates:"1744-1800",father:"KHYL-TVS",mother:"K897-3KT",spouses:["KHT9-5N9"],children:["LRD6-ZG3"]},"KCZ3-L6H":{first:"Johann Michael",last:"Göbel",dates:"1751-1798",father:"K42W-4WK",mother:"MVSN-43V",spouses:["KHPW-B5B"],children:["KZZF-TDS"]},"KHPW-B5B":{first:"Anna Johannetta",last:"Rückert",dates:"1758-1814",father:"94HR-T5Y",mother:"94HR-TRD",spouses:["KCZ3-L6H"],children:["KZZF-TDS"]},"LRD6-4KV":{first:"Johann Georg",last:"Schallert",dates:"Deceased",father:null,mother:null,spouses:["LRD6-HV8"],children:["LRD6-MXV"]},"LRD6-HV8":{first:"Maria Magdalena",last:"Wiemer",dates:"Deceased",father:null,mother:null,spouses:["LRD6-4KV"],children:["LRD6-MXV"]},"LRD6-ZG3":{first:"Johann Christoph",last:"Gerlach",dates:"1767-1841",father:"KHT9-5N9",mother:"KHW9-9YS",spouses:["KZZF-TDS"],children:["M5LX-B32"]},"KZZF-TDS":{first:"Ernestina Philip...",last:"Göbel",dates:"1774-1855",father:"KCZ3-L6H",mother:"KHPW-B5B",spouses:["LRD6-ZG3"],children:["M5LX-B32"]},"LRD6-MXV":{first:"Johann Christian",last:"Schallert",dates:"1798-1859",father:"LRD6-4KV",mother:"LRD6-HV8",spouses:["M5LX-B32"],children:["LRDV-D5C"]},"M5LX-B32":{first:"Maria Dorothea",last:"Gerlach",dates:"1803-1866",father:"LRD6-ZG3",mother:"KZZF-TDS",spouses:["LRD6-MXV"],children:["LRDV-D5C"]},"MM3F-W1G":{first:"Johann Jacob",last:"Schmidt",dates:"",father:"unscraped",mother:"unscraped",spouses:["MM3F-4M7"],children:["LKZH-8N3"]},"MM3F-4M7":{first:"Anna Maria",last:"Heid",dates:"",father:"unscraped",mother:"unscraped",spouses:["MM3F-W1G"],children:["LKZH-8N3"]},"LR9B-G2B":{first:"Michael",last:"Witmer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LRGG-M91"],children:["LVLY-62X"]},"LRGG-M91":{first:"Margaret",last:"Wolff",dates:"",father:"unscraped",mother:"unscraped",spouses:["LR9B-G2B"],children:["LVLY-62X"]},"LZ2V-PT5":{first:"Joris George",last:"Broich",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZBP-DQM"],children:["LZG9-389"]},"LZBP-DQM":{first:"Mrs Joris",last:"Broich",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZ2V-PT5"],children:["LZG9-389"]},"K4GF-65V":{first:"Johann Michael",last:"Röderer",dates:"1676-1735",father:null,mother:null,spouses:["LKZH-8N3"],children:["G389-C68"]},"LKZH-8N3":{first:"Anna Maria E...",last:"Schmidt",dates:"1680-1753",father:"MM3F-W1G",mother:"MM3F-4M7",spouses:["K4GF-65V"],children:["G389-C68"]},"LVLY-62X":{first:"Christopher",last:"Witmer",dates:"1636-1726",father:"LR9B-G2B",mother:"LRGG-M91",spouses:["LZG9-389"],children:["LR8D-JF8"]},"LZG9-389":{first:"Agnes",last:"Broich",dates:"1648-1732",father:"LZ2V-PT5",mother:"LZBP-DQM",spouses:["LVLY-62X"],children:["LR8D-JF8"]},"L9CN-2DR":{first:"Hans",last:"Eschbacher",dates:"1702-1772",father:null,mother:null,spouses:[null],children:["LKZH-FXP"]},"G389-M2L":{first:"Johann Jacob",last:"Kopp",dates:"-1778",father:null,mother:null,spouses:["G389-C68"],children:["MG85-VB1"]},"G389-C68":{first:"Maria Elisabetha",last:"Röder",dates:"1708-1766",father:"K4GF-65V",mother:"LKZH-8N3",spouses:["G389-M2L"],children:["MG85-VB1"]},"LR8D-JF8":{first:"Michael Broich",last:"Witmer",dates:"1668-1763",father:"LVLY-62X",mother:"LZG9-389",spouses:["K42D-D9K"],children:["LZRN-WVZ"]},"K42D-D9K":{first:"Anna",last:"Roth",dates:"1678-1735",father:null,mother:null,spouses:["LR8D-JF8"],children:["LZRN-WVZ"]},"LKZH-FXP":{first:"Johann Georg",last:"Eschbach",dates:"1738-Deceased",father:"L9CN-2DR",mother:null,spouses:["MG85-VB1"],children:["9W8P-NN7"]},"MG85-VB1":{first:"Maria Elisabeth",last:"Kopp",dates:"1740-Deceased",father:"G389-M2L",mother:"G389-C68",spouses:["LKZH-FXP"],children:["9W8P-NN7"]},"LZRN-WVZ":{first:"Johann Peter",last:"Witmer",dates:"1712-1792",father:"LR8D-JF8",mother:"K42D-D9K",spouses:["MNM1-475"],children:["KFKT-M5X"]},"9W8P-NN7":{first:"Johannes",last:"Eshbach",dates:"1759-1840",father:"LKZH-FXP",mother:"MG85-VB1",spouses:["KFKT-M5X"],children:["2MGL-P7Y"]},"KFKT-M5X":{first:"Catharine",last:"Witmer",dates:"1758-1806",father:"LZRN-WVZ",mother:"MNM1-475",spouses:["9W8P-NN7"],children:["2MGL-P7Y"]},"2MGL-GTZ":{first:"Jacob",last:"Buckwalter",dates:"1794-1853",father:"LWR2-2CX",mother:"GSYB-DLX",spouses:["2MGL-P7Y"],children:["LRS1-VQQ"]},"2MGL-P7Y":{first:"Veronica",last:"Eshbach",dates:"1801-1857",father:"9W8P-NN7",mother:"KFKT-M5X",spouses:["2MGL-GTZ"],children:["LRS1-VQQ"]},"MJMF-VDH":{first:"William",last:"Thomas",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCDW-9HM"],children:["2X9Y-TKY"]},"LCDW-9HM":{first:"Bathsheba",last:"Oates",dates:"",father:"unscraped",mother:"unscraped",spouses:["MJMF-VDH"],children:["2X9Y-TKY"]},"GQ2Z-Z7N":{first:"Hugh",last:"TONKIN",dates:"",father:"unscraped",mother:"unscraped",spouses:["GHPP-KRG"],children:["G335-G5V"]},"GHPP-KRG":{first:"Elizabeth",last:"Deane",dates:"",father:"unscraped",mother:"unscraped",spouses:["GQ2Z-Z7N"],children:["G335-G5V"]},"KNZ3-78R":{first:"Johann Jacob",last:"Bößhaars Sr.",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8QT-QQW"],children:["GTQS-72S"]},"L8QT-QQW":{first:"Anna Gertrudt",last:"Meÿer",dates:"",father:"unscraped",mother:"unscraped",spouses:["KNZ3-78R"],children:["GTQS-72S"]},"GX9F-4F7":{first:"Joh. Frantz ...",last:"Lorentz",dates:"",father:"unscraped",mother:"unscraped",spouses:["GX9F-HJ7"],children:["GXD9-D5C"]},"GX9F-HJ7":{first:"Charlotha Ma...",last:"Heiliger",dates:"",father:"unscraped",mother:"unscraped",spouses:["GX9F-4F7"],children:["GXD9-D5C"]},"L5R8-LNT":{first:"Hannss Chris...",last:"Stumpff",dates:"",father:"unscraped",mother:"unscraped",spouses:["K64N-BHH"],children:["MKD6-3XT"]},"K64N-BHH":{first:"Anna Margarethe",last:"Stumpf",dates:"",father:"unscraped",mother:"unscraped",spouses:["L5R8-LNT"],children:["MKD6-3XT"]},"LCCD-JJ4":{first:"Johann Matth...",last:"Treibel",dates:"",father:"unscraped",mother:"unscraped",spouses:["K8CL-LD2"],children:["L2GZ-JSQ"]},"K8CL-LD2":{first:"Sara",last:"Neuer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCCD-JJ4"],children:["L2GZ-JSQ"]},"9MKT-K7S":{first:"Andres",last:"Stentz",dates:"",father:"unscraped",mother:"unscraped",spouses:["4R9C-KVL"],children:["LZ6T-7XZ"]},"4R9C-KVL":{first:"?",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["9MKT-K7S"],children:["LZ6T-7XZ"]},"9MKY-VNP":{first:"Hanss Veltin",last:"Strohschneider",dates:"",father:"unscraped",mother:"unscraped",spouses:["GDD8-8GW"],children:["LC87-6CJ"]},"GDD8-8GW":{first:"",last:"unknown",dates:"",father:"unscraped",mother:"unscraped",spouses:["9MKY-VNP"],children:["LC87-6CJ"]},"LRCG-WGT":{first:"Hans Jacob",last:"Bosshart",dates:"",father:"unscraped",mother:"unscraped",spouses:["LH9S-1C9"],children:["MGPS-TRY"]},"LH9S-1C9":{first:"Susanna Anna...",last:"Keller",dates:"",father:"unscraped",mother:"unscraped",spouses:["LRCG-WGT"],children:["MGPS-TRY"]},"MPSL-75J":{first:"Henrich",last:"Lucas",dates:"",father:"unscraped",mother:"unscraped",spouses:["9MKT-Y5D"],children:["LHV1-TQJ"]},"9MKT-Y5D":{first:"Veronica Fro...",last:"Laeublein",dates:"",father:"unscraped",mother:"unscraped",spouses:["MPSL-75J"],children:["LHV1-TQJ"]},"L73D-LCB":{first:"Marti",last:"Lehmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["L73D-Y8G"],children:["GMRH-6V5"]},"L73D-Y8G":{first:"Madlen",last:"Joss",dates:"",father:"unscraped",mother:"unscraped",spouses:["L73D-LCB"],children:["GMRH-6V5"]},"L6F5-YMR":{first:"Jacobus",last:"Willems",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6F5-B3V"],children:["LVHZ-H2J"]},"L6F5-B3V":{first:"Adriana Stevens",last:"Fransse",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6F5-YMR"],children:["LVHZ-H2J"]},"21JK-QVF":{first:"James",last:"Cuninghame",dates:"",father:"unscraped",mother:"unscraped",spouses:["97SB-82S"],children:["9QVZ-2F4"]},"97SB-82S":{first:"Isabell Isso...",last:"Broun",dates:"",father:"unscraped",mother:"unscraped",spouses:["21JK-QVF"],children:["9QVZ-2F4"]},"2X9Y-TKY":{first:"William",last:"Thomas",dates:"1693-Deceased",father:"MJMF-VDH",mother:"LCDW-9HM",spouses:["G335-G5V"],children:["LCD7-121"]},"G335-G5V":{first:"Thomasine",last:"Tonkin",dates:"1695-1754",father:"GQ2Z-Z7N",mother:"GHPP-KRG",spouses:["2X9Y-TKY"],children:["LCD7-121"]},"GTQS-72S":{first:"Johann Hans ...",last:"Bashore",dates:"1681-1751",father:"KNZ3-78R",mother:"L8QT-QQW",spouses:["GXD9-D5C"],children:["9HH5-X3C"]},"GXD9-D5C":{first:"Anna Catheri...",last:"Lorentz",dates:"1685-1785",father:"GX9F-4F7",mother:"GX9F-HJ7",spouses:["GTQS-72S"],children:["9HH5-X3C"]},"MKD6-3XT":{first:'Hans "Johann...',last:"Stumpf",dates:"1676-1735",father:"L5R8-LNT",mother:"K64N-BHH",spouses:["L2GZ-JSQ"],children:["LR2V-GDD"]},"L2GZ-JSQ":{first:"Anna Margarete",last:"Treibel",dates:"1680-1723",father:"LCCD-JJ4",mother:"K8CL-LD2",spouses:["MKD6-3XT"],children:["LR2V-GDD"]},"LZ6T-7XZ":{first:"Johann Rudolf",last:"Stentz",dates:"1619-1699",father:"9MKT-K7S",mother:"4R9C-KVL",spouses:["LC87-6CJ"],children:["LZ62-NXZ"]},"LC87-6CJ":{first:"Anna Catharina",last:"Strohschneider",dates:"1662-1737",father:"9MKY-VNP",mother:"GDD8-8GW",spouses:["LZ6T-7XZ"],children:["LZ62-NXZ"]},"MGPS-TRY":{first:"Johannes",last:"Bosserth",dates:"1674-1733",father:"LRCG-WGT",mother:"LH9S-1C9",spouses:["LHV1-TQJ"],children:["LZRV-ZHY"]},"LHV1-TQJ":{first:"Anna Margaretha",last:"Lucas",dates:"1679-Deceased",father:"MPSL-75J",mother:"9MKT-Y5D",spouses:["MGPS-TRY"],children:["LZRV-ZHY"]},"GMRH-6V5":{first:"Peter",last:"Leman",dates:"1666-1741",father:"L73D-LCB",mother:"L73D-Y8G",spouses:["LVHZ-H2J"],children:["MMMB-N83"]},"LVHZ-H2J":{first:"Anna Maria",last:"Willems",dates:"1684-1742",father:"L6F5-YMR",mother:"L6F5-B3V",spouses:["GMRH-6V5"],children:["MMMB-N83"]},"9QVZ-2F4":{first:"John",last:"Cunningham",dates:"1638-Deceased",father:"21JK-QVF",mother:"97SB-82S",spouses:["LQRJ-W1V"],children:["LT14-FPJ"]},"LQRJ-W1V":{first:"Janet",last:"Williamson",dates:"1637-Deceased",father:null,mother:null,spouses:["9QVZ-2F4"],children:["LT14-FPJ"]},"LCD7-121":{first:"Hugh",last:"Thomas",dates:"1717-1759",father:"2X9Y-TKY",mother:"G335-G5V",spouses:["LCDW-M96"],children:["L718-4W4"]},"LCDW-M96":{first:"Mary",last:"Launder",dates:"1720-Deceased",father:null,mother:null,spouses:["LCD7-121"],children:["L718-4W4"]},"9HH5-X3C":{first:"Johan Georg",last:"Bösshaur Bashore",dates:"1717-1787",father:"GTQS-72S",mother:"GXD9-D5C",spouses:["LR2V-GDD"],children:["LHN8-9PR"]},"LR2V-GDD":{first:"Maria Catharina",last:"Stump",dates:"1719-1785",father:"MKD6-3XT",mother:"L2GZ-JSQ",spouses:["9HH5-X3C"],children:["LHN8-9PR"]},"LZ62-NXZ":{first:"Johan Heinrich",last:"Stentz",dates:"1694-1758",father:"LZ6T-7XZ",mother:"LC87-6CJ",spouses:["LZRV-ZHY"],children:["LCCT-NCG"]},"LZRV-ZHY":{first:"Maria Dorothea",last:"Bosserth",dates:"1702-1782",father:"MGPS-TRY",mother:"LHV1-TQJ",spouses:["LZ62-NXZ"],children:["LCCT-NCG"]},"MMMB-N83":{first:"Peter",last:"Lehman",dates:"1706-1758",father:"GMRH-6V5",mother:"LVHZ-H2J",spouses:["LT14-FPJ"],children:["LZJQ-1NP"]},"LT14-FPJ":{first:"Janet",last:"Cunningham",dates:"1671-Deceased",father:"9QVZ-2F4",mother:"LQRJ-W1V",spouses:["MMMB-N83"],children:["LZJQ-1NP"]},"L718-4W4":{first:"Alexander",last:"Thomas Jr",dates:"1740-1802",father:"LCD7-121",mother:"LCDW-M96",spouses:["LHN8-9PR"],children:["L2PF-XTM"]},"LHN8-9PR":{first:"Catharina Elis...",last:"Bosshaur",dates:"1742-1824",father:"9HH5-X3C",mother:"LR2V-GDD",spouses:["L718-4W4"],children:["L2PF-XTM"]},"LXWG-TH6":{first:"Michael",last:"Miller",dates:"1740-1816",father:null,mother:null,spouses:["LXWP-MLL"],children:["LXWG-CVG"]},"LXWP-MLL":{first:"Catherine",last:"",dates:"1745-1816",father:null,mother:null,spouses:["LXWG-TH6"],children:["LXWG-CVG"]},"LCCT-NCG":{first:"Johann Jacob",last:"Stentz",dates:"1732-1784",father:"LZ62-NXZ",mother:"LZRV-ZHY",spouses:["LZJQ-1NP"],children:["LTQV-1J6"]},"LZJQ-1NP":{first:"Juliana",last:"Lehman",dates:"1729-1794",father:"MMMB-N83",mother:"LT14-FPJ",spouses:["LCCT-NCG"],children:["LTQV-1J6"]},"L2PF-XTM":{first:"Benjamin",last:"Thomas",dates:"1767-1840",father:"L718-4W4",mother:"LHN8-9PR",spouses:["2DXT-6HV"],children:["LVX9-NCD"]},"2DXT-6HV":{first:"Anna Nancy",last:"Alexander",dates:"1775-1837",father:null,mother:null,spouses:["L2PF-XTM"],children:["LVX9-NCD"]},"LXWG-CVG":{first:"David M.",last:"Miller",dates:"1765-1839",father:"LXWG-TH6",mother:"LXWP-MLL",spouses:["LTQV-1J6"],children:["LKDP-MRN"]},"LTQV-1J6":{first:"Elizabeth",last:"Stentz",dates:"1769-1802",father:"LCCT-NCG",mother:"LZJQ-1NP",spouses:["LXWG-CVG"],children:["LKDP-MRN"]},"LVX9-NCD":{first:"George",last:"Thomas",dates:"1798-1836",father:"L2PF-XTM",mother:"2DXT-6HV",spouses:["LKDP-MRN"],children:["LRZT-2RZ"]},"LKDP-MRN":{first:"Eve",last:"Miller",dates:"1799-1884",father:"LXWG-CVG",mother:"LTQV-1J6",spouses:["LVX9-NCD"],children:["LRZT-2RZ"]},"KCZN-SN4":{first:"Hans",last:"Wenger",dates:"",father:"unscraped",mother:"unscraped",spouses:["KCWL-29T"],children:["KZR2-4K5"]},"KCWL-29T":{first:"Christine",last:"Kohler",dates:"",father:"unscraped",mother:"unscraped",spouses:["KCZN-SN4"],children:["KZR2-4K5"]},"L8RD-YF9":{first:"Hans",last:"Waber",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8RD-YN7"],children:["KHQS-2WP"]},"L8RD-YN7":{first:"Christina",last:"Reber",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8RD-YF9"],children:["KHQS-2WP"]},"K8SC-F5W":{first:"Peter",last:"Ruefenacht",dates:"",father:"unscraped",mother:"unscraped",spouses:["KZBY-KRK"],children:["KHX9-J81"]},"KZBY-KRK":{first:"Verena",last:"Voegeler",dates:"",father:"unscraped",mother:"unscraped",spouses:["K8SC-F5W"],children:["KHX9-J81"]},"2W99-3QF":{first:"Ulrich",last:"Sommer",dates:"",father:"unscraped",mother:"unscraped",spouses:["KHD7-V4V"],children:["KHDY-25G"]},"KHD7-V4V":{first:"Elsbeth",last:"Beck",dates:"",father:"unscraped",mother:"unscraped",spouses:["2W99-3QF"],children:["KHDY-25G"]},"G4QC-7J9":{first:"Caspar",last:"Bühler",dates:"",father:"unscraped",mother:"unscraped",spouses:["G4QC-Q6T"],children:["KZFY-ZV4"]},"G4QC-Q6T":{first:"Barbara",last:"Bruegimann",dates:"",father:"unscraped",mother:"unscraped",spouses:["G4QC-7J9"],children:["KZFY-ZV4"]},"KHMK-VVY":{first:"Andreas",last:"Mumenthaler",dates:"",father:"unscraped",mother:"unscraped",spouses:["KHQH-MBC"],children:["K8CC-3H5"]},"KHQH-MBC":{first:"Anna",last:"Schneeberger",dates:"",father:"unscraped",mother:"unscraped",spouses:["KHMK-VVY"],children:["K8CC-3H5"]},"2Z8Q-WGV":{first:"Jacob",last:"Schärer",dates:"",father:"unscraped",mother:"unscraped",spouses:["2SNP-7HN"],children:["KCBJ-F7R"]},"2SNP-7HN":{first:"Anna",last:"Gugelmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["2Z8Q-WGV"],children:["KCBJ-F7R"]},"2ZS7-XXP":{first:"Niclaus",last:"Zingg",dates:"",father:"unscraped",mother:"unscraped",spouses:["2N34-9D3"],children:["K2WJ-CZY"]},"2N34-9D3":{first:"Barbara",last:"Schär",dates:"",father:"unscraped",mother:"unscraped",spouses:["2ZS7-XXP"],children:["K2WJ-CZY"]},"KZR2-4K5":{first:"Bendicht",last:"Wänger",dates:"1604-Deceased",father:"KCZN-SN4",mother:"KCWL-29T",spouses:["KHQS-2WP"],children:["LC1Y-XDW"]},"KHQS-2WP":{first:"Anna",last:"Waber",dates:"1612-Deceased",father:"L8RD-YF9",mother:"L8RD-YN7",spouses:["KZR2-4K5"],children:["LC1Y-XDW"]},"L7FB-66R":{first:"Daniel",last:"Reusser",dates:"1612-Deceased",father:null,mother:null,spouses:["KHX9-J81"],children:["LHT9-WV6"]},"KHX9-J81":{first:"Anna",last:"Ruefenacht",dates:"1613-Deceased",father:"K8SC-F5W",mother:"KZBY-KRK",spouses:["L7FB-66R"],children:["LHT9-WV6"]},"KHDY-25G":{first:"Sebastian",last:"Sommer",dates:"1621-1680",father:"2W99-3QF",mother:"KHD7-V4V",spouses:["KZFY-ZV4"],children:["KC8S-KRG"]},"KZFY-ZV4":{first:"Elsbeth",last:"Büler",dates:"1624-Deceased",father:"G4QC-7J9",mother:"G4QC-Q6T",spouses:["KHDY-25G"],children:["KC8S-KRG"]},"KCQ6-CKT":{first:"Joerg",last:"Bracher",dates:"1620-Deceased",father:null,mother:null,spouses:["KCDQ-HPQ"],children:["KD9K-KJX"]},"KCDQ-HPQ":{first:"Trina",last:"Gugelmann",dates:"1624-Deceased",father:null,mother:null,spouses:["KCQ6-CKT"],children:["KD9K-KJX"]},"K8CC-3H5":{first:"Claus",last:"Mumenthaler",dates:"1619-Deceased",father:"KHMK-VVY",mother:"KHQH-MBC",spouses:["KCBJ-F7R"],children:["K8YW-V96"]},"KCBJ-F7R":{first:"Barbli",last:"Schaerar",dates:"1625-Deceased",father:"2Z8Q-WGV",mother:"2SNP-7HN",spouses:["K8CC-3H5"],children:["K8YW-V96"]},"K2WJ-CZY":{first:"Hans",last:"Zingg",dates:"1631-Deceased",father:"2ZS7-XXP",mother:"2N34-9D3",spouses:["KHQC-8ZV"],children:["K8JV-RYP"]},"KHQC-8ZV":{first:"Elsbeth",last:"Reiniger",dates:"1632-Deceased",father:null,mother:null,spouses:["K2WJ-CZY"],children:["K8JV-RYP"]},"LC1Y-XDW":{first:"Hans",last:"Wenger",dates:"1636-Deceased",father:"KZR2-4K5",mother:"KHQS-2WP",spouses:["LHT9-WV6"],children:["LHT9-WZD"]},"LHT9-WV6":{first:"Barbara",last:"Reusser",dates:"1643-Deceased",father:"L7FB-66R",mother:"KHX9-J81",spouses:["LC1Y-XDW"],children:["LHT9-WZD"]},"KC8S-KRG":{first:"Hans",last:"Sommer",dates:"1649-Deceased",father:"KHDY-25G",mother:"KZFY-ZV4",spouses:["KD9K-KJX"],children:["KCMQ-GBF"]},"KD9K-KJX":{first:"Verena",last:"Bracher",dates:"1654-Deceased",father:"KCQ6-CKT",mother:"KCDQ-HPQ",spouses:["KC8S-KRG"],children:["KCMQ-GBF"]},"K8YW-V96":{first:"Han Ulrich",last:"Mumenthaler",dates:"1657-Deceased",father:"K8CC-3H5",mother:"KCBJ-F7R",spouses:["K8JV-RYP"],children:["K8XG-W98"]},"K8JV-RYP":{first:"Elsbeth",last:"Zingg",dates:"1659-Deceased",father:"K2WJ-CZY",mother:"KHQC-8ZV",spouses:["K8YW-V96"],children:["K8XG-W98"]},"LHT9-WZD":{first:"Matthias",last:"Wenger",dates:"1679-1763",father:"LC1Y-XDW",mother:"LHT9-WV6",spouses:["LHT9-WL6"],children:["GQ43-4CD"]},"LHT9-WL6":{first:"Madlena",last:"Wyler",dates:"1692-1761",father:null,mother:null,spouses:["LHT9-WZD"],children:["GQ43-4CD"]},"KCMQ-GBF":{first:"Hans",last:"Sommer",dates:"1688-Deceased",father:"KC8S-KRG",mother:"KD9K-KJX",spouses:["K8XG-W98"],children:["LHGY-LKS"]},"K8XG-W98":{first:"Elsbeth",last:"Mumenthaler",dates:"1694-1739",father:"K8YW-V96",mother:"K8JV-RYP",spouses:["KCMQ-GBF"],children:["LHGY-LKS"]},"GQ43-4CD":{first:"John",last:"Wenger",dates:"1725-1801",father:"LHT9-WZD",mother:"LHT9-WL6",spouses:["LZVT-QNH"],children:["K2H1-2SC"]},"LZVT-QNH":{first:"Susanne",last:"Ryer",dates:"1717-1789",father:null,mother:null,spouses:["GQ43-4CD"],children:["K2H1-2SC"]},"LHGY-LKS":{first:"Isaac",last:"Sommer",dates:"1730-Deceased",father:"KCMQ-GBF",mother:"K8XG-W98",spouses:["LHGY-LJZ"],children:["LZVR-5NT"]},"LHGY-LJZ":{first:"Barbara",last:"Bichsel",dates:"1730-Deceased",father:null,mother:null,spouses:["LHGY-LKS"],children:["LZVR-5NT"]},"K2H1-2SC":{first:"Christian Jacob",last:"Wingard",dates:"1760-1805",father:"GQ43-4CD",mother:"LZVT-QNH",spouses:["LZVR-5NT"],children:["LWMH-N8M"]},"LZVR-5NT":{first:"Anna",last:"Sommers",dates:"1760-1802",father:"LHGY-LKS",mother:"LHGY-LJZ",spouses:["K2H1-2SC"],children:["LWMH-N8M"]},"KVLX-NMJ":{first:"Daniel",last:"Schoch",dates:"",father:"unscraped",mother:"unscraped",spouses:["KVLX-NS7"],children:["KC52-GKQ"]},"KVLX-NS7":{first:"Margaretha",last:"Wieland",dates:"",father:"unscraped",mother:"unscraped",spouses:["KVLX-NMJ"],children:["KC52-GKQ"]},"KHJM-72T":{first:"Simon",last:"Weiss",dates:"",father:"unscraped",mother:"unscraped",spouses:["K8M5-ZB6"],children:["K887-251"]},"K8M5-ZB6":{first:"Maria",last:"Koppenhoefer",dates:"",father:"unscraped",mother:"unscraped",spouses:["KHJM-72T"],children:["K887-251"]},"KG3S-1WG":{first:"Albrecht",last:"Ickinger",dates:"",father:"unscraped",mother:"unscraped",spouses:["KG3S-1DP"],children:["KCQR-ZKX"]},"KG3S-1DP":{first:"Barbara",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["KG3S-1WG"],children:["KCQR-ZKX"]},"KG3S-1JH":{first:"Jacob",last:"Lentz",dates:"",father:"unscraped",mother:"unscraped",spouses:["KG33-MWP"],children:["K87K-8WM"]},"KG33-MWP":{first:"Maria",last:"Reinhardt",dates:"",father:"unscraped",mother:"unscraped",spouses:["KG3S-1JH"],children:["K87K-8WM"]},"KC52-GKQ":{first:"Martin",last:"Schoch",dates:"1653-1715",father:"KVLX-NMJ",mother:"KVLX-NS7",spouses:["K887-251"],children:["MY67-LZ3"]},"K887-251":{first:"Eva",last:"Weiss",dates:"1653-Deceased",father:"KHJM-72T",mother:"K8M5-ZB6",spouses:["KC52-GKQ"],children:["MY67-LZ3"]},"KCQR-ZKX":{first:"Adam",last:"Ickinger",dates:"1645-1724",father:"KG3S-1WG",mother:"KG3S-1DP",spouses:["K87K-8WM"],children:["KCD5-Z35"]},"K87K-8WM":{first:"Margareth",last:"Lentz",dates:"1647-1723",father:"KG3S-1JH",mother:"KG33-MWP",spouses:["KCQR-ZKX"],children:["KCD5-Z35"]},"MY67-LZ3":{first:"Johann Jacob",last:"Schoch",dates:"1692-1748",father:"KC52-GKQ",mother:"K887-251",spouses:["KCD5-Z35"],children:["M79B-WN2"]},"KCD5-Z35":{first:"Magdalena",last:"Ickinger",dates:"1687-1771",father:"KCQR-ZKX",mother:"K87K-8WM",spouses:["MY67-LZ3"],children:["M79B-WN2"]},"M79B-WN2":{first:"Johann Jacob",last:"Schock",dates:"1720-1781",father:"MY67-LZ3",mother:"KCD5-Z35",spouses:["LZ2B-CVQ"],children:["LZ2D-YV6"]},"LZ2B-CVQ":{first:"Esther",last:"Grove",dates:"1725-1770",father:null,mother:null,spouses:["M79B-WN2"],children:["LZ2D-YV6"]},"MHN9-F8W":{first:"Michael",last:"Hess",dates:"1757-1820",father:"LBBH-KZ5",mother:"LK66-HXG",spouses:["LZ2D-YV6"],children:["LZLF-8Y5"]},"LZ2D-YV6":{first:"Maria",last:"Schock",dates:"1752-1822",father:"M79B-WN2",mother:"LZ2B-CVQ",spouses:["MHN9-F8W"],children:["LZLF-8Y5"]},"LZLF-8Y5":{first:"John Schock",last:"Hess",dates:"1788-1842",father:"MHN9-F8W",mother:"LZ2D-YV6",spouses:["LZLF-8BJ"],children:["LZ2D-BZX"]},"LZLF-8BJ":{first:"Magdalena Martha",last:"Musser",dates:"1792-1876",father:"LZ24-X8K",mother:"LZ24-XFR",spouses:["LZLF-8Y5"],children:["LZ2D-BZX"]},"KLGD-85H":{first:"Johann Georg",last:"Reinhard",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZXJ-CMG"],children:["L84W-294"]},"LZXJ-CMG":{first:"Anna Margaretha",last:"Geyger",dates:"",father:"unscraped",mother:"unscraped",spouses:["KLGD-85H"],children:["L84W-294"]},"KFDY-P2Y":{first:"Johann Peter",last:"Wambold Sr.",dates:"",father:"unscraped",mother:"unscraped",spouses:["L614-T9P"],children:["LB8B-46F"]},"L614-T9P":{first:"Anna Margretha",last:"Zimmerman",dates:"",father:"unscraped",mother:"unscraped",spouses:["KFDY-P2Y"],children:["LB8B-46F"]},"G3ZV-VCJ":{first:"Johann Georg",last:"Hartmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["G8MP-8X3"],children:["K238-ZZQ"]},"G8MP-8X3":{first:"Anna Catharina",last:"Meaerkle",dates:"",father:"unscraped",mother:"unscraped",spouses:["G3ZV-VCJ"],children:["K238-ZZQ"]},"G1J5-YPB":{first:"Johann Simon",last:"Kautzmann",dates:"",father:"unscraped",mother:"unscraped",spouses:["KD1G-KHK"],children:["KLJB-1Z5"]},"KD1G-KHK":{first:"Anna Margaretha",last:"Keilbachs",dates:"",father:"unscraped",mother:"unscraped",spouses:["G1J5-YPB"],children:["KLJB-1Z5"]},"L44G-JNK":{first:"Georg",last:"Kammerer III",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCXX-Y8C"],children:["KVL7-5H9"]},"LCXX-Y8C":{first:"Agnes",last:"Kittelberger",dates:"",father:"unscraped",mother:"unscraped",spouses:["L44G-JNK"],children:["KVL7-5H9"]},"9DQZ-NV8":{first:"Johannes Jac...",last:"Fischer",dates:"",father:"unscraped",mother:"unscraped",spouses:["9DQC-819"],children:["LVC5-Z9V"]},"9DQC-819":{first:"Maria Barbara",last:"Berger",dates:"",father:"unscraped",mother:"unscraped",spouses:["9DQZ-NV8"],children:["LVC5-Z9V"]},"GQ34-YRD":{first:"Joh. Valetin",last:"Stahl",dates:"",father:"unscraped",mother:"unscraped",spouses:["KP34-Q8X"],children:["L2RT-RB2"]},"KP34-Q8X":{first:"Anna Maria",last:"Kühlwein",dates:"",father:"unscraped",mother:"unscraped",spouses:["GQ34-YRD"],children:["L2RT-RB2"]},"G4VD-FZ2":{first:"Hans Georg",last:"Strupp",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["LVM7-DY6"]},"LZ6L-8MJ":{first:"Nicholas",last:"Wagner",dates:"",father:"unscraped",mother:"unscraped",spouses:["GD3L-HXJ"],children:["LBKX-1PG"]},"GD3L-HXJ":{first:"Catharina",last:"Schneider",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZ6L-8MJ"],children:["LBKX-1PG"]},"LH65-PN1":{first:"Johann Jacob",last:"Jung",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8PW-8RW"],children:["LBKF-Q7T"]},"L8PW-8RW":{first:"Anna Catharina",last:"Kust",dates:"",father:"unscraped",mother:"unscraped",spouses:["LH65-PN1"],children:["LBKF-Q7T"]},"LBZJ-SBT":{first:"Hans Bürgi",last:"Ryser",dates:"",father:"unscraped",mother:"unscraped",spouses:["26KF-P84"],children:["LXQ8-XGK"]},"26KF-P84":{first:"Anna",last:"Bertschinger",dates:"",father:"unscraped",mother:"unscraped",spouses:["LBZJ-SBT"],children:["LXQ8-XGK"]},"G864-7JG":{first:"Johann Martin",last:"Klein",dates:"",father:"unscraped",mother:"unscraped",spouses:["LDQ8-JTC"],children:["GGLQ-XRZ"]},"LDQ8-JTC":{first:"Anna Elisabetha",last:"Rencker",dates:"",father:"unscraped",mother:"unscraped",spouses:["G864-7JG"],children:["GGLQ-XRZ"]},"MB6N-8YX":{first:"Andreas",last:"Poerfrer",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["GGLQ-VLT"]},"G6MY-L35":{first:"Johann Peter",last:"Walbert",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["GQKH-4BR"]},"GQKH-N2G":{first:"Johannes",last:"Bast",dates:"",father:"unscraped",mother:"unscraped",spouses:["LB5G-KRZ"],children:["GQK4-RHN"]},"LB5G-KRZ":{first:"Apollonia",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["GQKH-N2G"],children:["GQK4-RHN"]},"L84W-294":{first:"Arnold",last:"Reinhardt",dates:"1684-1727",father:"KLGD-85H",mother:"LZXJ-CMG",spouses:["LB8B-46F"],children:["LJFY-VVV"]},"LB8B-46F":{first:"Anna Elizabetha",last:"Wambold",dates:"1693-1760",father:"KFDY-P2Y",mother:"L614-T9P",spouses:["L84W-294"],children:["LJFY-VVV"]},"K238-ZZQ":{first:"Johann Fried...",last:"Hartmann",dates:"1699-1787",father:"G3ZV-VCJ",mother:"G8MP-8X3",spouses:["KLJB-1Z5"],children:["KGP7-FK1"]},"KLJB-1Z5":{first:"Rosina Marga...",last:"Kautzmann",dates:"1697-1787",father:"G1J5-YPB",mother:"KD1G-KHK",spouses:["K238-ZZQ"],children:["KGP7-FK1"]},"G6Q1-CXY":{first:"John",last:"Zellner",dates:"1689-Deceased",father:null,mother:null,spouses:["KZS7-SYK"],children:["LH8D-LKD"]},"KZS7-SYK":{first:"Catharina",last:"",dates:"1693-Deceased",father:null,mother:null,spouses:["G6Q1-CXY"],children:["LH8D-LKD"]},"KVL7-5H9":{first:"Georg",last:"Kammerer IV",dates:"1672-Deceased",father:"L44G-JNK",mother:"LCXX-Y8C",spouses:["G6H2-F16"],children:["LZRZ-KW7"]},"G6H2-F16":{first:"Anna Barbara",last:"",dates:"1688-Deceased",father:null,mother:null,spouses:["KVL7-5H9"],children:["LZRZ-KW7"]},"LVC5-Z9V":{first:"Christianus",last:"Fisher",dates:"1700-1765",father:"9DQZ-NV8",mother:"9DQC-819",spouses:["LVC5-ZSL"],children:["9K8G-PNH"]},"LVC5-ZSL":{first:"Waldhurga",last:"Weigand",dates:"1705-Deceased",father:null,mother:null,spouses:["LVC5-Z9V"],children:["9K8G-PNH"]},"LR1C-QPF":{first:"Leonard",last:"Gebhart",dates:"1703-1777",father:null,mother:null,spouses:["LR1C-Q4X"],children:["LR1C-4TB"]},"LR1C-Q4X":{first:"Justina",last:"",dates:"-1779",father:null,mother:null,spouses:["LR1C-QPF"],children:["LR1C-4TB"]},"L2RT-RB2":{first:"Joh. Jacob",last:"Stahl Sr.",dates:"1697-1786",father:"GQ34-YRD",mother:"KP34-Q8X",spouses:["LVM7-DY6"],children:["G9FW-W19"]},"LVM7-DY6":{first:"Anna Maria",last:"Strupp",dates:"1717-1768",father:"G4VD-FZ2",mother:null,spouses:["L2RT-RB2"],children:["G9FW-W19"]},"9CQB-D6K":{first:"Heinrich Ludwig",last:"Reis",dates:"1716-1765",father:null,mother:null,spouses:["L2M4-319"],children:["G8V8-HH6"]},"L2M4-319":{first:"Elisabeth",last:"Kissel",dates:"1700-1780",father:null,mother:null,spouses:["9CQB-D6K"],children:["G8V8-HH6"]},"LBKX-1PG":{first:"Hanss Jacob",last:"Wagner",dates:"1693-1754",father:"LZ6L-8MJ",mother:"GD3L-HXJ",spouses:["LBKF-Q7T"],children:["LHN1-T9R"]},"LBKF-Q7T":{first:"Anna Maria",last:"Jung",dates:"1693-1751",father:"LH65-PN1",mother:"L8PW-8RW",spouses:["LBKX-1PG"],children:["LHN1-T9R"]},"LXQ8-XGK":{first:"Hans Jacob",last:"Rieser",dates:"1685-1761",father:"LBZJ-SBT",mother:"26KF-P84",spouses:["LVQD-8ZX"],children:["L7JY-C2C"]},"LVQD-8ZX":{first:"Elisabeth",last:"",dates:"1694-1795",father:null,mother:null,spouses:["LXQ8-XGK"],children:["L7JY-C2C"]},"GGLQ-XRZ":{first:"Theobald",last:"Klein",dates:"1680-1760",father:"G864-7JG",mother:"LDQ8-JTC",spouses:["GGLQ-VLT"],children:["LVRF-3QR"]},"GGLQ-VLT":{first:"Anna Catharina",last:"Poerfrer",dates:"1684-1775",father:"MB6N-8YX",mother:null,spouses:["GGLQ-XRZ"],children:["LVRF-3QR"]},"GQKH-4BR":{first:"Johan Peter",last:"Walbert",dates:"1690-Deceased",father:"G6MY-L35",mother:null,spouses:["GQK4-RHN"],children:["M6WQ-RTB"]},"GQK4-RHN":{first:"Anna Sybilla",last:"Bast",dates:"1694-1732",father:"GQKH-N2G",mother:"LB5G-KRZ",spouses:["GQKH-4BR"],children:["M6WQ-RTB"]},"LJFY-VVV":{first:"Pvt. J. Adam",last:"Reinhard",dates:"1724-1806",father:"L84W-294",mother:"LB8B-46F",spouses:["KGP7-FK1"],children:["9WM5-FKB"]},"KGP7-FK1":{first:"Maria Magdalena",last:"Hartmann",dates:"1721-1782",father:"K238-ZZQ",mother:"KLJB-1Z5",spouses:["LJFY-VVV"],children:["9WM5-FKB"]},"LH8D-LKD":{first:"Joh. Conrad",last:"Zellner Sr.",dates:"1725-1812",father:"G6Q1-CXY",mother:"KZS7-SYK",spouses:["LZRZ-KW7"],children:["LH8D-N7D"]},"LZRZ-KW7":{first:"Anna Margaretha",last:"Kemmerer",dates:"1714-1812",father:"KVL7-5H9",mother:"G6H2-F16",spouses:["LH8D-LKD"],children:["LH8D-N7D"]},"KG85-TV8":{first:"Johannes",last:"Orth",dates:"1710-1785",father:null,mother:null,spouses:["KG39-SVL"],children:["K2C3-QFW"]},"KG39-SVL":{first:"Sabina",last:"Koch",dates:"1710-1792",father:null,mother:null,spouses:["KG85-TV8"],children:["K2C3-QFW"]},"9K8G-PNH":{first:"Christian",last:"Fischer Sr.",dates:"1724-1779",father:"LVC5-Z9V",mother:"LVC5-ZSL",spouses:["LR1C-4TB"],children:["LCS1-8LX"]},"LR1C-4TB":{first:"Maria Magdalena",last:"Gebhart",dates:"1728-1807",father:"LR1C-QPF",mother:"LR1C-Q4X",spouses:["9K8G-PNH"],children:["LCS1-8LX"]},"G9FW-W19":{first:"J. George",last:"Stahl",dates:"1736-1777",father:"L2RT-RB2",mother:"LVM7-DY6",spouses:["G8V8-HH6"],children:["G9FW-4Z8"]},"G8V8-HH6":{first:"Maria Barbara",last:"Reiss",dates:"1736-1820",father:"9CQB-D6K",mother:"L2M4-319",spouses:["G9FW-W19"],children:["G9FW-4Z8"]},"KH2R-YB1":{first:"Sgt. Joh. Adam",last:"Desch",dates:"1736-1810",father:null,mother:null,spouses:["LHN1-T9R"],children:["K45Z-KPN"]},"LHN1-T9R":{first:"Maria Gertraut",last:"Wagner",dates:"1740-1826",father:"LBKX-1PG",mother:"LBKF-Q7T",spouses:["KH2R-YB1"],children:["K45Z-KPN"]},"L7JY-C2C":{first:"Ulrich",last:"Rieser",dates:"1709-1784",father:"LXQ8-XGK",mother:"LVQD-8ZX",spouses:["L85B-SKB"],children:["KNSW-8YV"]},"L85B-SKB":{first:"Anna Barbara",last:"Steinman",dates:"1714-1782",father:null,mother:null,spouses:["L7JY-C2C"],children:["KNSW-8YV"]},"LVRF-3QR":{first:"George",last:"Klein Sr.",dates:"1719-1803",father:"GGLQ-XRZ",mother:"GGLQ-VLT",spouses:["M6WQ-RTB"],children:["9NTC-DD7"]},"M6WQ-RTB":{first:"Maria Catharina",last:"Walbert",dates:"1725-1796",father:"GQKH-4BR",mother:"GQK4-RHN",spouses:["LVRF-3QR"],children:["9NTC-DD7"]},"9WM5-FKB":{first:"Johann Valentin",last:"Reinhard",dates:"1751-1798",father:"LJFY-VVV",mother:"KGP7-FK1",spouses:["LH8D-N7D"],children:["LY37-VQD"]},"LH8D-N7D":{first:"Eva Margaret",last:"Zellner",dates:"1765-1842",father:"LH8D-LKD",mother:"LZRZ-KW7",spouses:["9WM5-FKB"],children:["LY37-VQD"]},"K2C3-QFW":{first:"Pvt. Johannes ...",last:"Ortt Sr.",dates:"1749-1797",father:"KG85-TV8",mother:"KG39-SVL",spouses:["LCS1-8LX"],children:["LY37-LDV"]},"LCS1-8LX":{first:"Mary Rosina",last:"Fisher",dates:"1750-1839",father:"9K8G-PNH",mother:"LR1C-4TB",spouses:["K2C3-QFW"],children:["LY37-LDV"]},"G9FW-4Z8":{first:"Johannes",last:"Stahl Sr.",dates:"1765-1851",father:"G9FW-W19",mother:"G8V8-HH6",spouses:["K45Z-KPN"],children:["M846-FGR"]},"K45Z-KPN":{first:"Elisabetha",last:"Desch",dates:"1770-1847",father:"KH2R-YB1",mother:"LHN1-T9R",spouses:["G9FW-4Z8"],children:["M846-FGR"]},"KNSW-8YV":{first:"Andreas",last:"Rieser",dates:"1747-1818",father:"L7JY-C2C",mother:"L85B-SKB",spouses:["9NTC-DD7"],children:["L8M4-4RC"]},"9NTC-DD7":{first:"Anna Sybilla",last:"Kline",dates:"1758-1828",father:"LVRF-3QR",mother:"M6WQ-RTB",spouses:["KNSW-8YV"],children:["L8M4-4RC"]},"LY37-VQD":{first:"Johann Adam",last:"Reinhard",dates:"1787-1833",father:"9WM5-FKB",mother:"LH8D-N7D",spouses:["LY37-LDV"],children:["LTJX-7SN"]},"LY37-LDV":{first:"Maria Susanna",last:"Ortt",dates:"1788-1858",father:"K2C3-QFW",mother:"LCS1-8LX",spouses:["LY37-VQD"],children:["LTJX-7SN"]},"M846-FGR":{first:"Jonathan",last:"Stahl Jr.",dates:"1791-1826",father:"G9FW-4Z8",mother:"K45Z-KPN",spouses:["L8M4-4RC"],children:["LTJX-73W"]},"L8M4-4RC":{first:"Sarah",last:"Rieser",dates:"1790-1865",father:"KNSW-8YV",mother:"9NTC-DD7",spouses:["M846-FGR"],children:["LTJX-73W"]},"LTJX-7SN":{first:"Johannes Ortt John",last:"Reinhard",dates:"1813-1874",father:"LY37-VQD",mother:"LY37-LDV",spouses:["LTJX-73W"],children:["LZ5M-BHF"]},"LTJX-73W":{first:"Laura Matilda",last:"Stahl",dates:"1818-1905",father:"M846-FGR",mother:"L8M4-4RC",spouses:["LTJX-7SN"],children:["LZ5M-BHF"]},"K23N-JMK":{first:"John",last:"Portman",dates:"1750-1833",father:null,mother:null,spouses:["MCMV-GJL"],children:["KHNM-YXH"]},"MCMV-GJL":{first:"Catherine",last:"Gudbling",dates:"1767-1851",father:null,mother:null,spouses:["K23N-JMK"],children:["KHNM-YXH"]},"KJPW-LGP":{first:"Alfred",last:"Washburn",dates:"1802-1850",father:null,mother:null,spouses:["KHNM-YXH"],children:["LZLV-FDY"]},"KHNM-YXH":{first:"Catherine",last:"Portman",dates:"1806-1860",father:"K23N-JMK",mother:"MCMV-GJL",spouses:["KJPW-LGP"],children:["LZLV-FDY"]},"LK6D-WD6":{first:"Franz",last:"Bayer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LK6D-WJ8"],children:["L4QF-B63"]},"LK6D-WJ8":{first:"",last:"Barr",dates:"",father:"unscraped",mother:"unscraped",spouses:["LK6D-WD6"],children:["L4QF-B63"]},"277Y-N7R":{first:"Johann Conrad",last:"Lerch",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHWW-DWV"],children:["GTPP-5JN"]},"LHWW-DWV":{first:"Maria Gertra...",last:"Bien",dates:"",father:"unscraped",mother:"unscraped",spouses:["277Y-N7R"],children:["GTPP-5JN"]},"LH77-LWR":{first:"John",last:"Faust",dates:"",father:"unscraped",mother:"unscraped",spouses:["G319-ZMZ"],children:["LB63-K8X"]},"G319-ZMZ":{first:"Kunigunda",last:"Mohn",dates:"",father:"unscraped",mother:"unscraped",spouses:["LH77-LWR"],children:["LB63-K8X"]},"L8PL-PR3":{first:"Hans Michael",last:"Lauer",dates:"",father:"unscraped",mother:"unscraped",spouses:["L87S-F98"],children:["L4BG-QG9"]},"L87S-F98":{first:"Mary Catharine",last:"Bruch",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8PL-PR3"],children:["L4BG-QG9"]},"LH58-S83":{first:"Hans Jacob",last:"Steffan",dates:"",father:"unscraped",mother:"unscraped",spouses:["LH58-SZP"],children:["LQRY-SNM"]},"LH58-SZP":{first:"Anna Catharina",last:"Baum",dates:"",father:"unscraped",mother:"unscraped",spouses:["LH58-S83"],children:["LQRY-SNM"]},"L6MP-M5T":{first:"Johan Michael",last:"Welsch",dates:"",father:"unscraped",mother:"unscraped",spouses:["L7GM-GFX"],children:["LHNF-76V"]},"L7GM-GFX":{first:"Anna Eva",last:"Hoeth",dates:"",father:"unscraped",mother:"unscraped",spouses:["L6MP-M5T"],children:["LHNF-76V"]},"K8S6-76W":{first:"David",last:"Schaefer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LRXJ-HSL"],children:["LCPP-JQQ"]},"LRXJ-HSL":{first:"Katharina",last:"Barbara",dates:"",father:"unscraped",mother:"unscraped",spouses:["K8S6-76W"],children:["LCPP-JQQ"]},"L437-J79":{first:"Thomas",last:"Nachbar",dates:"",father:"unscraped",mother:"unscraped",spouses:["L437-JW4"],children:["LC8H-F3K"]},"L437-JW4":{first:"Elisabeth Ma...",last:"Lerchner",dates:"",father:"unscraped",mother:"unscraped",spouses:["L437-J79"],children:["LC8H-F3K"]},"L8SL-5SG":{first:"Joseph",last:"Marble Sr.",dates:"",father:"unscraped",mother:"unscraped",spouses:["WRTQ-WT1"],children:["LC8H-FNZ"]},"WRTQ-WT1":{first:"Mary",last:"Faulkner",dates:"",father:"unscraped",mother:"unscraped",spouses:["L8SL-5SG"],children:["LC8H-FNZ"]},"LVVF-SRQ":{first:"Hans Johann ...",last:"Laubach",dates:"",father:"unscraped",mother:"unscraped",spouses:["G8MR-DVL"],children:["2DXT-C78"]},"G8MR-DVL":{first:"Agnes",last:"",dates:"",father:"unscraped",mother:"unscraped",spouses:["LVVF-SRQ"],children:["2DXT-C78"]},"GT1W-DT7":{first:"Hanß Jacob",last:"Gries",dates:"",father:"unscraped",mother:"unscraped",spouses:["KLVT-K6T"],children:["2W9M-1SZ"]},"KLVT-K6T":{first:"Susanna",last:"Schiffman",dates:"",father:"unscraped",mother:"unscraped",spouses:["GT1W-DT7"],children:["2W9M-1SZ"]},"G9K6-92P":{first:"Johann Jacob",last:"Reimer",dates:"",father:"unscraped",mother:"unscraped",spouses:["GDXW-P5D"],children:["L6QX-N1T"]},"GDXW-P5D":{first:"Margaretha",last:"Hol",dates:"",father:"unscraped",mother:"unscraped",spouses:["G9K6-92P"],children:["L6QX-N1T"]},"G6XH-9NW":{first:"Johannes",last:"Lindenmayer",dates:"",father:"unscraped",mother:"unscraped",spouses:["G6XH-DC9"],children:["L6QX-J3P"]},"G6XH-DC9":{first:"Sara",last:"De Fraine",dates:"",father:"unscraped",mother:"unscraped",spouses:["G6XH-9NW"],children:["L6QX-J3P"]},"GX1L-VLG":{first:"Johann Cunrado",last:"Stey",dates:"",father:"unscraped",mother:"unscraped",spouses:["GX1L-FBG"],children:["GDX4-314"]},"GX1L-FBG":{first:"Anna Catharina",last:"Kraft",dates:"",father:"unscraped",mother:"unscraped",spouses:["GX1L-VLG"],children:["GDX4-314"]},"LCJC-CDX":{first:"Rev Johannes",last:"Naas",dates:"",father:"unscraped",mother:"unscraped",spouses:["L7FW-XS5"],children:["L4SP-WPL"]},"L7FW-XS5":{first:"Anna Margaretha",last:"Rehnen",dates:"",father:"unscraped",mother:"unscraped",spouses:["LCJC-CDX"],children:["L4SP-WPL"]},"L4QF-B63":{first:"Johan Adam",last:"Bayer I",dates:"1681-1777",father:"LK6D-WD6",mother:"LK6D-WJ8",spouses:["LYDK-JZ8"],children:["K2WT-ZGH"]},"LYDK-JZ8":{first:"Anna Maria J...",last:"Janssen",dates:"1686-Deceased",father:null,mother:null,spouses:["L4QF-B63"],children:["K2WT-ZGH"]},"G5Z1-4DT":{first:"Johann Hienrich",last:"Clapper",dates:"1695-1736",father:null,mother:null,spouses:["G5ZB-2BS"],children:["M6SS-NXC"]},"G5ZB-2BS":{first:"Mary",last:"Swank",dates:"1700-1740",father:null,mother:null,spouses:["G5Z1-4DT"],children:["M6SS-NXC"]},"GHS1-FPZ":{first:"Sigmund",last:"Fouse Fasse",dates:"1700-Deceased",father:null,mother:null,spouses:["G5ZB-L8P"],children:["L1W2-B4K"]},"G5ZB-L8P":{first:"Elizabeth",last:"",dates:"Deceased",father:null,mother:null,spouses:["GHS1-FPZ"],children:["L1W2-B4K"]},"GTPP-5JN":{first:"Andreas",last:"Lerch (Lorch)",dates:"1688-1738",father:"277Y-N7R",mother:"LHWW-DWV",spouses:["LB63-K8X"],children:["KD3G-82Q"]},"LB63-K8X":{first:"Elizabeth M.",last:"Faust",dates:"1686-1725",father:"LH77-LWR",mother:"G319-ZMZ",spouses:["GTPP-5JN"],children:["KD3G-82Q"]},"L4BG-QG9":{first:"Johann Jakob",last:"Lauer",dates:"1686-1746",father:"L8PL-PR3",mother:"L87S-F98",spouses:["LQRY-SNM"],children:["LWHX-8NF"]},"LQRY-SNM":{first:"Maria Barbara",last:"Stephan",dates:"1683-Deceased",father:"LH58-S83",mother:"LH58-SZP",spouses:["L4BG-QG9"],children:["LWHX-8NF"]},"LHNF-76V":{first:"Johannes",last:"Welsch",dates:"1687-1752",father:"L6MP-M5T",mother:"L7GM-GFX",spouses:["LCPP-JQQ"],children:["L7KM-562"]},"LCPP-JQQ":{first:"Magdalena El...",last:"Schäfer",dates:"1692-1763",father:"K8S6-76W",mother:"LRXJ-HSL",spouses:["LHNF-76V"],children:["L7KM-562"]},"LC8H-F3K":{first:"Johann Leonhard",last:"Nachbar",dates:"1698-1766",father:"L437-J79",mother:"L437-JW4",spouses:["LC8H-FNZ"],children:["L84W-C1M"]},"LC8H-FNZ":{first:"Maria Margareta",last:"Marble",dates:"1698-1770",father:"L8SL-5SG",mother:"WRTQ-WT1",spouses:["LC8H-F3K"],children:["L84W-C1M"]},"2DXT-C78":{first:"Johann Reinhart",last:"Laubach",dates:"1667-1739",father:"LVVF-SRQ",mother:"G8MR-DVL",spouses:["2W9M-1SZ"],children:["LVVF-S3G"]},"2W9M-1SZ":{first:"Anna Elisabeth",last:"Gries",dates:"1678-1733",father:"GT1W-DT7",mother:"KLVT-K6T",spouses:["2DXT-C78"],children:["LVVF-S3G"]},"K23V-X76":{first:"Paulus",last:"Zimler",dates:"1670-1728",father:null,mother:null,spouses:["K23V-XWH"],children:["L6MK-CP6"]},"K23V-XWH":{first:"Mrs. Anna El...",last:"Zimler",dates:"1679-1707",father:null,mother:null,spouses:["K23V-X76"],children:["L6MK-CP6"]},"GCQ2-6NZ":{first:"",last:"Peachman",dates:"0168-Deceased",father:null,mother:null,spouses:[null],children:["LV7Z-W4G"]},"L6QX-N1T":{first:"Hanss Jacob",last:"Reimer",dates:"1689-1742",father:"G9K6-92P",mother:"GDXW-P5D",spouses:["L6QX-J3P"],children:["KPQ4-49V"]},"L6QX-J3P":{first:"Anna Maria",last:"Lindenmayer",dates:"1685-1725",father:"G6XH-9NW",mother:"G6XH-DC9",spouses:["L6QX-N1T"],children:["KPQ4-49V"]},"GDX4-314":{first:"Johann Peter",last:"Stay",dates:"1702-Deceased",father:"GX1L-VLG",mother:"GX1L-FBG",spouses:["L4SP-WPL"],children:["KPQ4-47W"]},"L4SP-WPL":{first:"Anna Margaretha",last:"Naas",dates:"1707-1780",father:"LCJC-CDX",mother:"L7FW-XS5",spouses:["GDX4-314"],children:["KPQ4-47W"]},"K2WT-ZGH":{first:"Adam",last:"Bayer II",dates:"1710-1754",father:"L4QF-B63",mother:"LYDK-JZ8",spouses:["L5F5-XJM"],children:["KH8W-HCZ"]},"L5F5-XJM":{first:"Maria Sarah",last:"",dates:"1715-1779",father:null,mother:null,spouses:["K2WT-ZGH"],children:["KH8W-HCZ"]},"M6SS-NXC":{first:"Henry",last:"Clapper I",dates:"1718-1797",father:"G5Z1-4DT",mother:"G5ZB-2BS",spouses:["L1W2-B4K"],children:["LKD3-YQZ"]},"L1W2-B4K":{first:"Christena   Eve",last:"Fouse",dates:"1726-1810",father:"GHS1-FPZ",mother:"G5ZB-L8P",spouses:["M6SS-NXC"],children:["LKD3-YQZ"]},"KD3G-82Q":{first:"Anton Anthony",last:"Lerch",dates:"1720-1793",father:"GTPP-5JN",mother:"LB63-K8X",spouses:["LWHX-8NF"],children:["K2QS-VQJ"]},"LWHX-8NF":{first:"Anna Margaretha",last:"Lauer",dates:"1728-1796",father:"L4BG-QG9",mother:"LQRY-SNM",spouses:["KD3G-82Q"],children:["K2QS-VQJ"]},"L7KM-562":{first:"Johann Wilhelm",last:"Welsch",dates:"1719-1805",father:"LHNF-76V",mother:"LCPP-JQQ",spouses:["L84W-C1M"],children:["L7LL-TJ1"]},"L84W-C1M":{first:"Maria Elisabeth",last:"Neighbor Nachbar",dates:"1719-1767",father:"LC8H-F3K",mother:"LC8H-FNZ",spouses:["L7KM-562"],children:["L7LL-TJ1"]},"LVVF-S3G":{first:"Johann Christian",last:"Laubach",dates:"1699-1768",father:"2DXT-C78",mother:"2W9M-1SZ",spouses:["L6MK-CP6"],children:["LVVF-9BB"]},"L6MK-CP6":{first:"Susanna Catharina",last:"Zimler",dates:"1701-1770",father:"K23V-X76",mother:"K23V-XWH",spouses:["LVVF-S3G"],children:["LVVF-9BB"]},"LV7Z-76J":{first:"Michael",last:"Janssen",dates:"1710-Deceased",father:null,mother:null,spouses:["LV7Z-W4G"],children:["L6MK-CZV"]},"LV7Z-W4G":{first:"Maria Magdalena",last:"Peachman",dates:"1710-Deceased",father:"GCQ2-6NZ",mother:null,spouses:["LV7Z-76J"],children:["L6MK-CZV"]},"KPQ4-49V":{first:"Johann Valentin",last:"Reimer",dates:"1714-1794",father:"L6QX-N1T",mother:"L6QX-J3P",spouses:["KPQ4-47W"],children:["27PD-WBH"]},"KPQ4-47W":{first:"Anna Margaretha",last:"Stey",dates:"1725-1812",father:"GDX4-314",mother:"L4SP-WPL",spouses:["KPQ4-49V"],children:["27PD-WBH"]},"KH8W-HCZ":{first:"Michael",last:"Boyer",dates:"1746-1820",father:"K2WT-ZGH",mother:"L5F5-XJM",spouses:["LKD3-YQZ"],children:["KC1F-X61"]},"LKD3-YQZ":{first:"Margaret Freeman",last:"Clapper",dates:"1747-1823",father:"M6SS-NXC",mother:"L1W2-B4K",spouses:["KH8W-HCZ"],children:["KC1F-X61"]},"K2QS-VQJ":{first:"Anthony",last:"Lerch",dates:"1750-1798",father:"KD3G-82Q",mother:"LWHX-8NF",spouses:["L7LL-TJ1"],children:["LKSR-X2D"]},"L7LL-TJ1":{first:"Anna Margretha",last:"Welsch",dates:"1752-1803",father:"L7KM-562",mother:"L84W-C1M",spouses:["K2QS-VQJ"],children:["LKSR-X2D"]},"LVVF-9BB":{first:"Johann George",last:"Laubach",dates:"1726-1802",father:"LVVF-S3G",mother:"L6MK-CP6",spouses:["L6MK-CZV"],children:["KH8X-GG5"]},"L6MK-CZV":{first:"Anna Margaretha",last:"Jansen",dates:"1730-1799",father:"LV7Z-76J",mother:"LV7Z-W4G",spouses:["LVVF-9BB"],children:["KH8X-GG5"]},"27PD-7JL":{first:"Johannes",last:"Riehl, Sr",dates:"1751-1840",father:null,mother:null,spouses:["27PD-WBH"],children:["LJ5P-H4C"]},"27PD-WBH":{first:"Margaretha",last:"Reimer",dates:"1752-1821",father:"KPQ4-49V",mother:"KPQ4-47W",spouses:["27PD-7JL"],children:["LJ5P-H4C"]},"KC1F-X61":{first:"Johannes",last:"Boyer",dates:"1769-1844",father:"KH8W-HCZ",mother:"LKD3-YQZ",spouses:["LKSR-X2D"],children:["2CNL-CSH"]},"LKSR-X2D":{first:"Catherine",last:"Lerch",dates:"1775-1848",father:"K2QS-VQJ",mother:"L7LL-TJ1",spouses:["KC1F-X61"],children:["2CNL-CSH"]},"KH8X-GG5":{first:"Joh. George",last:"Laubach",dates:"1774-1863",father:"LVVF-9BB",mother:"L6MK-CZV",spouses:["LJ5P-H4C"],children:["2CNL-CMT"]},"LJ5P-H4C":{first:"Elizabeth",last:"Riehl",dates:"1777-1843",father:"27PD-7JL",mother:"27PD-WBH",spouses:["KH8X-GG5"],children:["2CNL-CMT"]},"2CNL-CSH":{first:"Jacob",last:"Boyer",dates:"1795-1858",father:"KC1F-X61",mother:"LKSR-X2D",spouses:["2CNL-CMT"],children:["LZLV-FFZ"]},"2CNL-CMT":{first:"Maria",last:"Laubach",dates:"1799-1897",father:"KH8X-GG5",mother:"LJ5P-H4C",spouses:["2CNL-CSH"],children:["LZLV-FFZ"]},"LR6W-37X":{first:"Friedrich",last:"Voltz",dates:"Deceased",father:null,mother:null,spouses:["LR6W-372"],children:["M5LF-2G3"]},"LR6W-372":{first:"Anna Katharine",last:"Scherer",dates:"Deceased",father:null,mother:null,spouses:["LR6W-37X"],children:["M5LF-2G3"]},"L84S-CXM":{first:"Johann Martin",last:"Schallert",dates:"Deceased",father:null,mother:null,spouses:["L84S-CF2"],children:["G96Q-Y1C"]},"L84S-CF2":{first:"Anna Rebecca",last:"Spaethen",dates:"1706-Deceased",father:null,mother:null,spouses:["L84S-CXM"],children:["G96Q-Y1C"]},"L84S-C5B":{first:"Johann Georg",last:"Boerndraeger",dates:"Deceased",father:null,mother:null,spouses:["L84S-CTF"],children:["L84S-ML7"]},"L84S-CTF":{first:"Catharina",last:"",dates:"Deceased",father:null,mother:null,spouses:["L84S-C5B"],children:["L84S-ML7"]},"G96Q-Y1C":{first:"Johannes",last:"Schallert",dates:"1743-1811",father:"L84S-CXM",mother:"L84S-CF2",spouses:["L84S-ML7"],children:["G96Q-NSW"]},"L84S-ML7":{first:"Anna Barbara",last:"Bornträger",dates:"1744-1812",father:"L84S-C5B",mother:"L84S-CTF",spouses:["G96Q-Y1C"],children:["G96Q-NSW"]},"G96Q-NSW":{first:"Johannes",last:"Schallert",dates:"1785-1857",father:"G96Q-Y1C",mother:"L84S-ML7",spouses:["M5LX-BS6"],children:["M5LF-QBY"]},"M5LX-BS6":{first:"Elisabetha Katha...",last:"Rippert",dates:"1787-1847",father:null,mother:null,spouses:["G96Q-NSW"],children:["M5LF-QBY"]},"GX6Z-8DF":{first:"William",last:"Otto",dates:"1800-Deceased",father:null,mother:null,spouses:["GX6Z-DXC"],children:["MKBH-31R"]},"GX6Z-DXC":{first:"Elizabeth",last:"",dates:"1800-Deceased",father:null,mother:null,spouses:["GX6Z-8DF"],children:["MKBH-31R"]},"LHPP-BQ9":{first:"Johannes Kneer",last:"Reiner",dates:"",father:"unscraped",mother:"unscraped",spouses:["2MGL-CCX"],children:["2MGK-DTP"]},"2MGL-CCX":{first:"Dorothea",last:"Weber",dates:"",father:"unscraped",mother:"unscraped",spouses:["LHPP-BQ9"],children:["2MGK-DTP"]},"LZVR-J3H":{first:"Matthias",last:"Boger",dates:"",father:"unscraped",mother:"unscraped",spouses:["LYSJ-KS5"],children:["M1G2-8QZ"]},"LYSJ-KS5":{first:"Agnes Maria",last:"Hestroffer",dates:"",father:"unscraped",mother:"unscraped",spouses:["LZVR-J3H"],children:["M1G2-8QZ"]},"G8DV-D2C":{first:"Hanß Johann ...",last:"Börtz",dates:"",father:"unscraped",mother:"unscraped",spouses:[null],children:["G88Q-T54"]},"G8DB-99H":{first:"Hans",last:"Neun",dates:"",father:"unscraped",mother:"unscraped",spouses:["L1KH-G5L"],children:["G88Q-T5C"]},"L1KH-G5L":{first:"Maria Ursula",last:"Burckhardt",dates:"",father:"unscraped",mother:"unscraped",spouses:["G8DB-99H"],children:["G88Q-T5C"]},"G9V7-J5S":{first:"Conrad",last:"Reith",dates:"",father:"unscraped",mother:"unscraped",spouses:["G9V7-F3J"],children:["G9V7-4WF"]},"G9V7-F3J":{first:"Anna Maria",last:"Möller",dates:"",father:"unscraped",mother:"unscraped",spouses:["G9V7-J5S"],children:["G9V7-4WF"]},"2MGK-DTP":{first:"Hans Michel",last:"Reiner",dates:"1652-1711",father:"LHPP-BQ9",mother:"2MGL-CCX",spouses:["2MGG-S7R"],children:["29H3-7VG"]},"2MGG-S7R":{first:"Maria Catharina",last:"",dates:"1655-1701",father:null,mother:null,spouses:["2MGK-DTP"],children:["29H3-7VG"]},"M1G2-8QZ":{first:"Johann Paulus",last:"Boger",dates:"1663-1739",father:"LZVR-J3H",mother:"LYSJ-KS5",spouses:["G1TM-VY4"],children:["29H3-7P6"]},"G1TM-VY4":{first:"Anna Margaretha",last:"Karg",dates:"Deceased",father:null,mother:null,spouses:["M1G2-8QZ"],children:["29H3-7P6"]},"G88Q-T54":{first:"Hans Johann",last:"Börtz",dates:"1708-1771",father:"G8DV-D2C",mother:null,spouses:["G88Q-T5C"],children:["LVKR-68H"]},"G88Q-T5C":{first:"Eva Margaretha",last:"Trugemiller ...",dates:"1712-1782",father:"G8DB-99H",mother:"L1KH-G5L",spouses:["G88Q-T54"],children:["LVKR-68H"]},"G9V7-4WF":{first:"Johann Casper",last:"Rieth",dates:"1707-1788",father:"G9V7-J5S",mother:"G9V7-F3J",spouses:["G9V7-HP5"],children:["GSBG-66D"]},"G9V7-HP5":{first:"Magdalena",last:"Vogel",dates:"1710-1776",father:null,mother:null,spouses:["G9V7-4WF"],children:["GSBG-66D"]},"29H3-7VG":{first:"Hans Wolfgang",last:"Reiner",dates:"1683-1752",father:"2MGK-DTP",mother:"2MGG-S7R",spouses:["29H3-7P6"],children:["LVPW-XS6"]},"29H3-7P6":{first:"Agnes Maria",last:"Boger",dates:"1688-1746",father:"M1G2-8QZ",mother:"G1TM-VY4",spouses:["29H3-7VG"],children:["LVPW-XS6"]},"G6QS-TQZ":{first:"Johan Conrad",last:"Flores",dates:"1690-1764",father:null,mother:null,spouses:["LVFG-B3H"],children:["29H3-W3M"]},"LVFG-B3H":{first:"Maria Barbara",last:"Steffan",dates:"1680-1772",father:null,mother:null,spouses:["G6QS-TQZ"],children:["29H3-W3M"]},"LVKR-68H":{first:"George Adam",last:"Bortz",dates:"1732-1791",father:"G88Q-T54",mother:"G88Q-T5C",spouses:["GSBG-66D"],children:["G63T-VWW"]},"GSBG-66D":{first:"Maria Barbara",last:"Reith",dates:"1736-1770",father:"G9V7-4WF",mother:"G9V7-HP5",spouses:["LVKR-68H"],children:["G63T-VWW"]},"LTGS-8RT":{first:"Ludwig Lewis",last:"Wertz",dates:"1728-1772",father:null,mother:null,spouses:["G86X-LX2"],children:["L2NX-MKD"]},"G86X-LX2":{first:"Elizabeth Marg...",last:"Hendee",dates:"1730-1807",father:null,mother:null,spouses:["LTGS-8RT"],children:["L2NX-MKD"]},"LVPW-XS6":{first:"Hans Georg",last:"Reiner",dates:"1721-1779",father:"29H3-7VG",mother:"29H3-7P6",spouses:["29H3-W3M"],children:["KDMR-ZYH"]},"29H3-W3M":{first:"Savia Sabilla",last:"Flores",dates:"1723-Deceased",father:"G6QS-TQZ",mother:"LVFG-B3H",spouses:["LVPW-XS6"],children:["KDMR-ZYH"]},"G63T-VWW":{first:"Johan Jacob",last:"Bortz",dates:"1754-1845",father:"LVKR-68H",mother:"GSBG-66D",spouses:["L2NX-MKD"],children:["K4JC-X9C"]},"L2NX-MKD":{first:"Elizabeth",last:"Wertz",dates:"1765-1799",father:"LTGS-8RT",mother:"G86X-LX2",spouses:["G63T-VWW"],children:["K4JC-X9C"]},"KDMR-ZYH":{first:"Johann Peter",last:"Reinert",dates:"1771-1859",father:"LVPW-XS6",mother:"29H3-W3M",spouses:["K4JC-X9C"],children:["GX6Z-816"]},"K4JC-X9C":{first:"Anna Maria Wertz",last:"Bortz",dates:"1782-1861",father:"G63T-VWW",mother:"L2NX-MKD",spouses:["KDMR-ZYH"],children:["GX6Z-816"]},"MWFF-YQ4":{first:"David Potts",last:"O'Brien",dates:"1770-1822",father:null,mother:null,spouses:["MWFF-YQ8"],children:["L15V-8XV"]},"MWFF-YQ8":{first:"Mary Ellen",last:"Knox",dates:"1774-1850",father:null,mother:null,spouses:["MWFF-YQ4"],children:["L15V-8XV"]},"GX6Z-816":{first:"Jacob",last:"Rinehardt",dates:"1810-Deceased",father:"KDMR-ZYH",mother:"K4JC-X9C",spouses:["L15V-8XV"],children:["MKBH-QM6"]},"L15V-8XV":{first:"Anna Elizabeth",last:"O'Brien",dates:"1808-1869",father:"MWFF-YQ4",mother:"MWFF-YQ8",spouses:["GX6Z-816"],children:["MKBH-QM6"]}},Ds=Um,bs=new mc,ba=new Bt(75,window.innerWidth/window.innerHeight,.1,1e3),Ym=new Pc(11206570,.5);bs.add(Ym);const El=new Ec(16777215,1);El.position.set(10,10,10);bs.add(El);const yn=new Lm;yn.setSize(window.innerWidth,window.innerHeight);yn.setPixelRatio(window.devicePixelRatio);yn.setAnimationLoop(qm);document.body.appendChild(yn.domElement);const Os=new ym(ba,yn.domElement);Os.enableDamping=!0;Os.dampingFactor=.05;Os.screenSpacePanning=!1;Os.minDistance=1;Os.maxDistance=500;Os.maxPolarAngle=Math.PI/2;const Qm=new Xr(new A(1,0,0),new A(0,0,0),2,.1,1,16711680);bs.add(Qm);const Om=new Xr(new A(0,1,0),new A(0,0,0),2,.1,1,65280);bs.add(Om);const zm=new Xr(new A(0,0,1),new A(0,0,0),2,.1,1,255);bs.add(zm);ba.position.set(0,10,0);const gn={generationSpacing:5,arrowOffset:.2},Ea=4096,Vr=24,Cs=Math.floor(Ea/512),km=Math.ceil(Object.keys(Ds).length/Cs),ua=km*Vr,Zr=document.createElement("canvas");Zr.width=Ea;Zr.height=ua;const $n=Zr.getContext("2d");$n.fillStyle="white";$n.font="20px Garamond";$n.textBaseline="top";$n.textAlign="left";console.log("Rendering text...");let ls=0;for(const[n,e]of Object.entries(Ds)){const t=e,s=`${t.first} ${t.last} ${t.dates}`,r=Math.floor(ls/Cs),a=ls%Cs*(Ea/Cs),o=r*Vr;$n.fillText(s,a,o),Ds[n].renderedIndex=ls,ls++}const Pl=new Gc(Zr);Pl.needsUpdate=!0;function $m(n,e,t,s){const r=Pl.clone(),i=Math.floor(e/Cs),a=e%Cs,o=a/Cs,l=(a+1)/Cs,h=i*Vr/ua,c=(i+1)*Vr/ua,u=new gl({map:r});u.map.offset.set(o,1-c),u.map.repeat.set(l-o,c-h);const f=(s+.25)/2**(t-1)*2*Math.PI;let p=Math.PI/2;t>100&&(p+=(s+.25)/2**(t-4)*2*Math.PI);const M=t*gn.generationSpacing,_=M*Math.sin(p)*Math.cos(f),m=M*Math.sin(p)*Math.sin(f),d=M*Math.cos(p),R=new Mc(u);R.position.set(_,d,m);const D=.85;return R.scale.set(16*D**t,1*D**t,1*D**t),bs.add(R),Ds[n].sprites||(Ds[n].sprites=[]),Ds[n].sprites.push(R),R}let Pa=0;function fa(n,e,t,s){const r=n[e];if(r){const i=$m(e,r.renderedIndex,t,s);if(r.father&&r.father!=="unscraped"&&r.father!=="UNKNOWN"){const a=fa(n,r.father,t+1,s*2);i.userData.fatherSprite=a}if(r.mother&&r.mother!=="unscraped"&&r.mother!=="UNKNOWN"){const a=fa(n,r.mother,t+1,s*2+1);i.userData.motherSprite=a}return Pa++,i}return null}console.log("Positioning nodes...");fa(Ds,"GGGL-BWJ",1,0);console.log("Done!");const yl=new xa;let Us=null;const Ut=new ct,Hl=new Xr(new A(1,1,1),new A(0,0,0),1,.1,1,8930525);console.log(Hl);const pa=Hl.mesh;console.log("MESH",pa);Us=new _c(pa.geometry,pa.material,Pa-1);Us.instanceMatrix.setUsage(Dh);bs.add(Us);yl.add(Us,"count",0,Pa-1);yl.add(gn,"generationSpacing",0,10,.01);ls=0;for(const[n,e]of Object.entries(Ds))if(e.sprites)for(const t of e.sprites){if(t.userData.fatherSprite){const s=t.position.clone().sub(new A(0,gn.arrowOffset,0)),r=t.userData.fatherSprite.position.clone().sub(new A(0,gn.arrowOffset,0));Ut.position.set(s.x,s.y,s.z);const i=s.distanceTo(r);Ut.scale.set(1,1,i),Ut.lookAt(r),Ut.updateMatrix(),Us.setMatrixAt(ls,Ut.matrix),ls++}if(t.userData.motherSprite){const s=t.position.clone().sub(new A(0,gn.arrowOffset,0)),r=t.userData.motherSprite.position.clone().sub(new A(0,gn.arrowOffset,0));Ut.position.set(s.x,s.y,s.z);const i=s.distanceTo(r);Ut.scale.set(1,1,i),Ut.lookAt(r),Ut.updateMatrix(),Us.setMatrixAt(ls,Ut.matrix),ls++}}Us.instanceMatrix.needsUpdate=!0;function qm(){Os.update(),yn.render(bs,ba)}
//# sourceMappingURL=index-BcZYTsS3.js.map
