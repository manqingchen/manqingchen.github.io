import{aA as at,aB as ct,aC as lt,a9 as pt,aD as ut,N as oe,$ as xe,aE as me,au as $,n as e,B as n,h as K,i as Y,u as _,P as gt,d as p,j as t,I as U,aF as Je,C as dt,aG as ht,v as Fe,_ as ft,Q as xt,r as a,aH as mt,O as Se,f as re,a as ve,b as pe,G as At,x as Te,F as je,D as Ne,aI as Oe,aJ as wt,s as Ct,X as yt}from"./index.b13d347f.js";import{T as bt,a as It,G as Bt}from"./index.6be00e2e.js";import{a as Et,c as kt,u as Ae,b as ke,P as Pe,n as Le}from"./App.c0b721e3.js";import{L as Ft}from"./index.35817cc7.js";import{n as Qe}from"./index.383a2cf9.js";import"./debounce.609f38a4.js";import"./ResizeObserver.1403e5c6.js";function St(i){var r=at(i),o=r%1;return r===r?o?r-o:r:0}var vt=Math.ceil,Tt=Math.max;function ze(i,r,o){(o?ct(i,r,o):r===void 0)?r=1:r=Tt(St(r),0);var s=i==null?0:i.length;if(!s||r<1)return[];for(var c=0,u=0,g=Array(vt(s/r));c<s;)g[u++]=lt(i,c,c+=r);return g}function Pt(i,r,o,s){for(var c=-1,u=i==null?0:i.length;++c<u;){var g=i[c];r(s,g,o(g),i)}return s}function Qt(i,r,o,s){return Et(i,function(c,u,g){r(s,c,o(c),g)}),s}function Rt(i,r){return function(o,s){var c=pt(o)?Pt:Qt,u=r?r():{};return c(o,i,kt(s),u)}}var Mt=Object.prototype,Lt=Mt.hasOwnProperty,Ut=Rt(function(i,r,o){Lt.call(i,o)?i[o].push(r):ut(i,o,[r])}),Dt=Ut;function He(){const{setStep:i}=oe(),{clearMaterial:r}=xe(),{clearFilter:o}=me(),{clearAll:s}=$();return{clearCache:()=>{i(1),s(),o(),r()}}}const Jt=e(n)`
  width: 100%;
  height: 68px;
  background: #000;
  display: flex;
  flex-direction: row;
  padding: 18px 16px 18px 10px;
  justify-content: space-between;
`,jt=e(n)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 200;
`,Nt=e(n)`
  height: 32px;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #ffffff;
  line-height: 32px;
  font-weight: 400;
`,Ot=e(n)`
  display: flex;
  flex-direction: row;
  padding: 18px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,zt=e(n)`
  color: #fff;
  cursor: pointer;
`;e(n)`
  width: 85px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 32px;
  margin-right: 16px;
  cursor: pointer;
`;e(n)`
  width: 85px;
  height: 36px;
  background-image: linear-gradient(66deg, #0166fa 2%, #00e0e2 96%);
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;const Ht=e(K)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;function Vt(){const i=Y.use(),r=_(),{userData:o}=gt(),{clearCache:s}=He();return p(Jt,{children:[p(jt,{onClick:()=>{s(),r({to:"/creativeCase"})},children:[t(U,{type:"a-daohangfanhui",size:36,color:"#fff"}),t(Nt,{children:i.Button.BackHome})]}),t(Ot,{children:t(zt,{children:t(Ht,{src:o==null?void 0:o.avatar})})})]})}const Wt=e(n)``,Gt=e(n)`
  background-color: #f5f6fa;
  height: 100vh;
  overflow: hidden;
`,Kt=e(n)`
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.15);
`,Yt=e(n)`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,qt=e(n)`
  ${({active:i})=>`
  height: 80px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  font-size: 16px;

  ${i?`
        color: #0166FA;
        font-family: PingFangSC-Semibold;
      `:`
          color: #999999;
          font-family: PingFangSC-Medium;
        `}
  
  `}
`,Zt=e(n)`
  display: flex;
  flex-direction: row;
`,Xt=e(n)`
  margin-right: 20px;
`,$t=e(n)``,_t=e(n)`
  height: 4px;
  width: 200px;
  background: #0166fa;
  position: absolute;
  bottom: 0;
`,en=e(n)`
  width: 100%;
  height: 100%;
  overflow: hidden !important;
`,tn=e(n)`
  // width: 1440px;
  // margin: 0 auto;
  // overflow-y: scroll;
`,Ve=e(n)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 1000px;
`,nn=e(n)`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: calc(100vh - 284px);
`,rn=e(n)`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 600px;
  height: 25px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: ${({theme:i})=>i.colors.ipaintter[3]};
`;e(n)``;const on=e(n)`
  background: ${({theme:i})=>i.colors.ipaintter[0]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: calc(760px * 0.9);
  height: calc(478px * 0.9);
  border: 0.8px solid rgba(216, 216, 216, 1);
  border-radius: 6.4px;
`,sn=e(n)`
  width: 240px;
  height: 52px;
  background: #2f5bff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  cursor: pointer;
`,an=e(n)`
  width: 144px;
  height: 24px;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: ${({theme:i})=>i.colors.ipaintter[0]};
  text-align: right;
  line-height: 24px;
  margin-left: 15.25px;
`;e(n)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 28px;
`;e(n)`
  margin-left: 12px;
  width: 80px;
  height: 28px;
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #222222;
  text-align: right;
  line-height: 28px;
`;e("img")`
  width: 26px;
  heightL 26px;
`;const cn=e(n)`
  height: 14px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  text-align: right;
  line-height: 14px;
`,ln=e(n)`
  margin-top: 20px;
  margin-bottom: 6px;
  height: 25px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: ${({theme:i})=>i.colors.ipaintter[3]};
`,pn=e(n)`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 116px;
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: center;
  background: ${({theme:i})=>i.colors.ipaintter[0]};
`,un=e(n)`
  width: 116px;
  height: 36px;
  border-radius: 4px;
  background: ${({theme:i})=>i.colors.ipaintter[4]};
  font-family: PingFangSC-Semibold;
  font-size: 13px;
  color: ${({theme:i})=>i.colors.ipaintter[0]};
  text-align: center;
  line-height: 36px;
  cursor: pointer;
  ${({disabled:i,theme:r})=>i?`
      background: ${r.colors.ipaintter[9]};
      color: #999999;
    `:""}
`,gn=e(n)`
  margin-top: 30px;
  width: 100%;
  padding-bottom: 116px;
  overflow-y: scroll;
`,dn=e(n)`
  width: 165px;
  height: 165px;
  background: ${({theme:i})=>i.colors.ipaintter[0]};
  border: 0.5px solid rgba(216, 216, 216, 1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`,hn=e(K)`
  height: 100%;
  width: 100%;
`,fn=e(n)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 60px;
  overflow-y: auto;
  // pointer-events: none;
`,xn=e(n)`
  display: flex;
  flex-direction: row;
  margin-right: 27px;
  margin-bottom: 27px;
  &:nth-of-type(7n) {
    margin-right: 0;
  }
`,mn=e(n)`
  position: absolute;
  height: 60px;
  width: 100%;
  z-index: 3;
  & > svg {
    display: none !important;
  }
  display: none;

  background: rgba(0, 0, 0, 0.5);
`,An=e(n)`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: none;
  position: absolute;
  z-index: 3;
`,wn=e(n)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover {
    .mask {
      display: block !important;
    }
    .icon {
      display: flex !important;
      justify-content: center;
      align-items: center;
      & > svg {
        display: block !important;
      }
    }
  }
`,Cn=e(n)`
  width: 248px;
  height: 248px;
  background: #000000;
  border-radius: 8px;
  position: absolute;
  opacity: 0.5;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,yn=e("progress")``,bn=e(n)`
  color: #fff;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
`,In=e(n)``,Bn=e(n)`
  // margin-top: 30.24px;
  height: 136px;
  width: 100vw;
  border-top: 0.5px solid #dddddd;
  padding-top: 19.6px;
  background: ${({theme:i})=>i.colors.ipaintter[0]};
`,En=e(n)`
  margin: 0 auto;
  width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
`;e(n)`
  height: 25px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  color: ${({theme:i})=>i.colors.ipaintter[3]};
`;const kn=e(n)`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
`,Fn=e(n)`
  width: 83px;
  height: 83px;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  border-radius: 5.12px;
  ${({active:i,index:r})=>i&&r===0||r===14?`
        margin-left: 0px;
        margin-right: 14px;
        width: 96px;
        height: 96px;
      `:i&&r===13?`
        margin-right: 0px; 
        width: 96px;
        height: 96px;
      `:i?`
      width: 96px;
      height: 96px;
      margin-left: -6px;
      margin-right: 14px;
    `:""};
  &:nth-of-type(13n) {
    margin-right: 0;
  }
`,Ue=e(K)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`,Sn=e(n)`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background: #000000;
  position: absolute;
  border-radius: 8px;
`,vn=e(n)``,Tn=e(n)`
  width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 60px;
  margin: 30.83px auto 30px;
  position: relative;
`,Pn=e(n)`
  height: 32px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222222;
  line-height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Qn=e(n)`
  display: flex;
  flex-direction: row;
`;e(Je)``;const Rn=e(n)`
  // width: 190px;
  height: 32px;
  background: #ffffff;
  border: 1px solid rgba(34, 34, 34, 1);
  border-radius: 4px;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`,Mn=e(n)`
  height: 14px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222222;
  line-height: 14px;
`;e(U)``;const Ln=e(n)`
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #222222;
  line-height: 32px;
  display: inline-block;
`,Un=e(n)`
  // width: 110px;
  height: 32px;
  padding: 10px;
  border: 1px solid rgba(34, 34, 34, 1);
  border-radius: 4px;
  display: flex;
  margin-left: 20px;
  align-items: center;
  cursor: pointer;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #222222;
  line-height: 12px;
  white-space: nowrap;
`;e(U)`
  margin-left: 10px;
  margin-right: 2px;
`;const Dn=e(n)`
  width: 100%;
  min-height: 325px;
  background: #ffffff;
`,Jn=e(n)`
  width: 1440px;
  height: 100%;
  padding: 0 60px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`,jn=e(n)`
  height: 25px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Nn=e(n)`
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #222222;
`,On=e(n)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  // margin-top: 224px;
`,zn=e(n)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`,We=e(n)`
  margin-right: 10px;
  width: 116px;
  height: 36px;
  background: #ffffff;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,Ge=e(n)`
  width: 116px;
  height: 36px;
  background: #0166fa;
  border-radius: 4px;
  font-family: PingFangSC-Semibold;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  ${({disabled:i,theme:r})=>i?`
      background: ${r.colors.ipaintter[9]};
      color: #999999;
      pointer-events: none;
    `:""}
`;e(U)`
  position: absolute;
  z-index: 3;
  left: 4px;
  transform: rotate(180deg);
  cursor: pointer;
`;e(U)`
  position: absolute;
  z-index: 3;
  right: 4px;
  cursor: pointer;
`;e(U)`
  position: absolute;
  z-index: 3;
  left: 4px;
  transform: rotate(180deg);
  cursor: pointer;
`;e(U)`
  position: absolute;
  z-index: 3;
  right: 4px;
  cursor: pointer;
`;const Hn=e(K)`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`,Vn=e(n)`
  background: #ffffff;
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;e(n)`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 2;
`;const Ke=e(n)`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`,Ye=e(n)`
  height: 24px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 24px;
  font-weight: 500;
`,qe=e(n)`
  cursor: pointer;
`,Wn=e(n)`
  width: 688px;
  // height: 611px;
  height: calc(100% - 122px);
  overflow-y: auto;
`,Gn=e(n)`
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,Kn=e(n)`
  width: 200px;
  height: 200px;
  background: #f5f6fa;
  border-radius: 7px;
  margin-right: 20px;
  margin-top: 23.9px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
  ${({active:i})=>i?"border: 2px solid rgba(1, 102, 250, 1);":""}
`,Yn=e(n)`
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6.5px;
  position: relative;
`;e(K)``;e(K)``;const qn=e(n)`
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  text-align: center;
`,Zn=e(n)`
  margin-top: 10px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #222222;
  text-align: center;
  font-weight: 400;
`,Ze=e(n)`
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  height: 66px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`,Xe=e(n)`
  display: flex;
  margin-right: 24px;
  cursor: pointer;
`,$e=e(n)`
  width: 71.96px;
  height: 32px;
  background: #ffffff;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10.75px;
`,_e=e(n)`
  width: 71.96px;
  height: 32px;
  background: #0166fa;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`,Xn=e(n)`
  // position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,$n=e(n)`
  height: 655px;
  overflow-y: auto;
  padding: 24px;
`,we=e(n)``,_n=e(n)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,Ce=e(n)`
  display: flex;
  justify-content: space-between;
`,ei=e(n)`
  font-size: 14px;
  margin-left: 8px;
  width: 70px;
`,ye=e(n)`
  margin-bottom: 16px;
  height: 22px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 22px;
`,ti=e(dt)`
  margin-bottom: 18px;
  width: 25%;
`,ni=e(ht)`
  width: 100%;
`,ii=e(n)`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  flex-wrap: wrap;
`,ri=e(Fe)`
  border: none;
  width: 100%;
  height: 100%;
  padding-left: 12px;
  height: 32px;
`;e(n)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
`;e(n)`
  padding: 2px;
  margin-right: 2px;
  display: flex;
  flex-direction: row;
  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.06);
  align-items: center;
`;e(n)``;const oi=e(n)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  min-height: 300px;
`,si=e(n)`
  height: calc(100vh - 284px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,ai=e(n)`
  width: 314px;
  height: 164px;
  margin-right: 21.33px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ddd;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
  &:hover {
    .mask {
      display: block;
    }
    .operator {
      display: flex;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ci=e(n)`
  width: 100%;
  height: 100%;
  width: 314px;
  height: 164px;
  position: absolute;
  opacity: 0.3;
  background: #000000;
  border-radius: 8px;
  z-index: 1;
  display: none;
`,li=e(n)`
  position: absolute;
  z-index: 2;
  width: 314px;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
`,pi=e(n)`
  display: flex;
  flex-direction: row;
  margin: 20px auto 40px;
  position: relative;
  align-items: center;
  height: 164px;
`,ui=e(K)`
  width: 314px;
  height: 164px;
  object-fit: contain;
`,gi=e(n)`
  width: 314px;
  height: 164px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 21.33px;
  display: flex;
  border: 1px solid #ddd;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
  &:hover {
    .operate {
      display: flex;
    }
  }
`,di=e(n)`
  position: absolute;
  z-index: 2;
  display: none;
  align-items: center;
  justify-content: center;
  width: 314px;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
`,hi=e(n)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`,fi=e(n)`
  width: 80px;
  height: 32px;
  background: #0166fa;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
`,xi=e(n)`
  display: flex;
  flex-direction: row;
`,mi=e(n)`
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #ffffff;
  line-height: 16px;
  margin-left: 4px;
`,Ai=e(n)`
  display: flex;
  flex-direction: row-reverse;
`,wi=e(n)`
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #cccccc;
  line-height: 18px;
  max-width: 610px;
  margin-right: 60px;
`,et=e(n)`
  width: 100%;
`,Ci=e(n)`
  font-family: PingFangSC-Medium;
  color: #333333;
  margin: 0 auto;
  text-align: center;
  margin-top: 20.39px;
  margin-bottom: 6px;
  font-size: 16px;
`,yi=e(n)`
  font-family: PingFangSC-Regular;
  color: #666666;
  text-align: right;
  line-height: 14px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
`,bi=e(n)`
  width: 1440px;
  text-align: center;
  // margin-top: 30px;
  display: flex;
  align-items: center;
  margin: 30px auto 0;
  justify-content: space-between;
`,Ii=e(n)`
  margin-left: 30px;
  display: flex;
`,Bi=e(n)`
  width: 100px;
  height: 36px;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({active:i})=>i?`
        background: #222222;
        border-radius: 3px;
        color: #ffffff;
      `:`
      background: #ffffff;
      border-radius: 4px;
      `}
`,Ei=e(n)`
  width: 100px;
  height: 36px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({active:i})=>i?`
        background: #222222;
        border-radius: 3px;
        color: #ffffff;
      `:`
      background: #ffffff;
      border-radius: 4px;
      `}
`,De=e(n)`
  width: 8.43px;
  height: 8.43px;
  background: #222222;
  position: absolute;
  bottom: calc(-8.43px / 2);
  left: 50%;
  transform: rotate(45deg) translateX(-50%) translateY(50%);
  ${({active:i})=>i?"":" display: none;"}
`,ki=e(n)`
  width: 314px;
  height: 164px;
  border-radius: 8px;
  margin-right: 21.33px;
  margin-top: 20px;
  position: relative;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
  &:hover {
    .mask {
      display: flex;
    }
    .operate {
      display: flex;
    }
  }
`,Fi=e(n)`
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #222222;
`,Si=e(K)`
  width: 314px;
  height: 164px;
  border-radius: 8px;
  object-fit: contain;
  border: 1px solid #e6e6e6;
`,vi=e(n)`
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: absolute;
  display: none;
`,Ti=e(n)`
  width: 100%;
  height: 100%;
  z-index: 3;
  border-radius: 8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Pi=e(n)`
  width: 100%;
  height: 60px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`,Qi=e(n)`
  width: 100%;
  height: 60px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`,Ri=e(n)`
  width: 100%;
  // height: 692px;
  background: #ffffff;
  overflow-y: auto;
  margin: 35.37px auto 40px;
  position: relative;
`,Mi=e(n)`
  width: 1440px;
  margin: 0 auto;
  position: relative;
`,Li=e(Je)`
  width: 1440px;
`,Ui=e(n)`
  // position: absolute;
  // right: 60px;
  // top: -6px;
  width: 100px;
  height: 32px;
  border: 1px solid rgba(34, 34, 34, 1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 30px;
`;e(U)``;const Di=e(n)`
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #222222;
  line-height: 12px;
  font-weight: 400;
  // margin-left: 4.49px;
`,Ji=e(n)`
  background: #fff;
  padding-left: 20px;
  background: #ffffff;
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
`,ji=e(n)`
  height: 50px;
  display: flex;
  align-items: center;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #222222;
  cursor: pointer;
`,Ni=e(n)`
  width: 1440px;
  padding: 0 60px 0;
  margin: 0 auto;
  height: calc(100vh - 448px);
`,Oi=e(n)`
  display: flex;
  flex-direction: column;
  min-height: 224px;
  margin-top: 20px;
  width: 100%;
  // height: 100%;
`,zi=e(n)`
  display: flex;
  flex-wrap: wrap;
`,Hi=e(n)`
  width: 1440px;
  height: 116px;
  background: #ffffff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`,Vi=e(n)`
  width: 100%;
  height: 116px;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  z-index: 100;
`,Wi=e(n)`
  display: flex;
  flex-direction: row;
`,Gi=e(n)`
  height: 60px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
`,Ki=e(n)`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Yi=e(n)`
  cursor: pointer;
  margin-right: 15px;
  display: flex;
  align-items: center;
  ${({saving:i})=>i?`
        color: #CCCCCC;
        pointer: event-none;
      `:""}
`,qi=e(n)`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Zi=e(n)`
  width: 1px;
  height: 16px;
  background: #d8d8d8;
  border-radius: 0.5px;
  margin-left: 21px;
  margin-right: 20px;
`,Xi=e(n)``,$i=e(n)``,_i=e(n)`
  flex: 1;
`,er=e(n)`
  display: flex;
  flex-direction: row;
  // justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;e(U)``;const tr=e(n)`
  margin-left: 4px;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #222222;
`,nr=e(n)`
  width: 240px;
  height: calc(100vh - 68px);
  overflow-y: scroll;
  background: #ffffff;
`,ir=e(n)`
  width: calc(100vw - 240px);
  height: calc(100vh - 128px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,rr=e(n)`
  width: 1000px;
  height: 524px;
  pointer-events: none;
  border-radius: 2px;
  overflow: hidden;
`;e(U)`
  transform: rotate(90deg);
  cursor: pointer;
`;e(U)`
  transform: rotate(-90deg);
  cursor: pointer;
`;const or=e(n)`
  width: 130px;
  height: 40px;
  background: #ffffff;
  border-radius: 20px;
  position: absolute;
  bottom: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 16px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.07);
`;e(U)`
  cursor: pointer;
`;e(U)`
  cursor: pointer;
`;const sr=e(n)`
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222222;
  font-weight: 400;
`,ar=e(n)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`,cr=e(n)`
  width: 1200px;
  // height: 100%;
  padding-top: 60px;
  padding-left: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`,lr=e(n)`
  width: 235px;
  height: 122px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
  margin-right: 20px;
  margin-bottom: 20px;
  pointer-events: none;
`;e(n)`
  position: absolute;
  top: 68px;
  right: 10px;
  width: 384px;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;const pr=e(n)``,ur=e(n)`
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #0166fa;
  line-height: 22px;
  display: inline-block;
`,gr=e(K)`
  width: 100%;
  height: 100%;
`,dr=e(ft)`
  background-color: #fffbe6;
  border: 1px solid rgba(255, 229, 143, 1);
  border-radius: 2px;
`,hr=e("img")`
  width: 16px;
  height: 16px;
  margin-right: 2px;
`,fr=e("img")`
  width: 16px;
  height: 16px;
  margin-left: 16px;
`,xr=e("img")`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 44.07px;
  height: 19.46px;
  opacity: 0.17;
  background: #d7dbea;
  transform: translate(-50%, -50%);
`,mr=e("img")`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`,tt=e("img")`
  position: absolute;
  left: -34px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`,nt=e("img")`
  position: absolute;
  right: -34px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`,Ar=e("img")`
  height: 16px;
  width: 16px;
`,wr=e(xt)`
  max-width: 610px;
  word-wrap: break-word;
`,Cr=e(n)`
  overflow: hidden;
  margin-top: 10px;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`,yr=e(n)``,br=e("img")`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;function Ir(){const i=Y.use(),{setStep:r,currentStep:o}=oe(),s=a.exports.useMemo(()=>[{title:i.SmartContentRecommendation.UploadMyProductPictures,desc:"STEP 1",id:1,active:o===1},{title:i.SmartContentRecommendation.IntelligentRecommendationContentPreview,desc:"STEP 2",id:2,active:o===2},{title:i.SmartContentRecommendation.OneClickExportDesignContent,desc:"STEP 3",id:3,active:o===3}],[o]);return t(Kt,{children:t(Yt,{children:s.map(({title:c,active:u,id:g,desc:d},I,b)=>p(qt,{active:u,last:I+1===b.length,children:[p(Zt,{children:[t(Xt,{children:d}),t($t,{children:c})]}),u&&t(_t,{})]},g))})})}function Br(i){let{value:r}=i;return Number.isNaN(Number(r))&&(r=0),t(yn,{value:r,max:"100"})}function it(i){const r=a.exports.useRef("imgMain"),{id:o,max:s,fileKey:c,url:u}=i,{material:g,setMaterial:d}=xe(),I=mt(),b=a.exports.useRef("empty"),{deleteItem:k,getItem:x}=I,l=x(o),[C,h]=a.exports.useState(0),v=(l==null?void 0:l.status)!=="failed"?C:l==null?void 0:l.progress,Q=a.exports.useRef();return a.exports.useEffect(()=>{C>=85&&clearInterval(Q.current)},[C]),a.exports.useEffect(()=>{(l==null?void 0:l.status)==="uploading"&&(h(0),Q.current=setInterval(()=>{h(y=>+y+3)},100)),l==null||l.onProgress(y=>h(y.progress))},[l,l==null?void 0:l.status]),p(dn,{onClick:y=>{u&&y.stopPropagation()},children:[u?p(wn,{children:[t(An,{className:"mask"}),t(mn,{className:"icon",onClick:y=>{if(!u)return;y.stopPropagation();const F=g.get(r.current).filter(S=>S.id!==o);k(o),(F==null?void 0:F.length)<s&&!F.find(S=>S.id===b.current)&&F.push({url:"",id:b.current}),d(r.current,F)},children:t(U,{type:"a-shejikongjianshanchu",size:36,color:"#fff"})}),t(hn,{src:u})]}):t(U,{type:"a-mobanxuanze",size:29.75,color:"#666666"}),["uploading"].includes(l==null?void 0:l.status)&&p(Cn,{children:[t(bn,{children:"\u4E0A\u4F20\u4E2D"}),t(Br,{value:v}),(l==null?void 0:l.status)==="uploading"&&p(In,{children:[v," %"]})]})]},c)}it.defaultProps={materialKey:void 0};function Er(i){var B,y;const{reopen:r=!1}=i,o=Y.use(),{setStep:s}=oe(),c=_(),[u,g]=a.exports.useState(!1),{setMaterial:d,material:I}=xe(),k=a.exports.useMemo(()=>I.get("imgMain")||[],[I]).map(m=>m.file),x=a.exports.useRef({url:"",id:"empty"}),l=((y=(B=I.get("imgMain"))==null?void 0:B.filter(m=>m.id!=="empty"))==null?void 0:y.length)||0,C=a.exports.useRef(20),h=m=>{const F=URL.createObjectURL(m);return{url:F,revoke:()=>{URL.revokeObjectURL(F)}}},v=a.exports.useCallback((m,F)=>{const S=m,A=Array.isArray(S)?S:[S];if(A.some(f=>f.status==="init")){g(!0);const f=[];A.forEach(w=>{if(w.file){const{url:R}=h(w.file);f.push({url:R,id:w.fileKey})}}),f.length<C.current&&f.push(x.current),d("imgMain",f)}A.filter(f=>f.id!==x.current.id).every(f=>f.status!=="init")&&(A.length<C.current&&A.push(x.current),d("imgMain",A),g(!1))},[d]),Q=a.exports.useCallback(()=>{const m=I.get("imgMain"),F=(m==null?void 0:m.length)===0||!m?[x.current]:m;return t(fn,{children:t(Se,{multiple:!0,accept:".png,.jpg,.jpeg",defaultValue:r&&k.filter(Boolean),maxLen:C.current-(l||0),onMaxFilesError:()=>{re.show({message:o.TemplateEditorPage.ImgHint({a:C.current})})},style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},onChange:v,children:F==null?void 0:F.map(S=>t(xn,{children:t(it,{...S,max:C.current},S.id)},S.id||x.current.id))})})},[o.TemplateEditorPage,k,l,I,v,r]),M=()=>{!l||u||(s(2),c({to:"/intelligentRecommendationContent?step=2"}))};return p(Ve,{children:[p(nn,{children:[t(ln,{children:o.SmartContentRecommendation.UploadedImages({a:l})}),t(cn,{children:o.SmartContentRecommendation.UploadHint}),t(gn,{children:Q()})]}),t(pn,{children:t(un,{onClick:M,disabled:!l||u,children:o.Button.Continue})})]})}var kr="./assets/chahua.46af0cf1.jpg";function Fr(i){const{setStep:r}=i,o=Y.use(),s=_(),c=()=>{r(2),s({to:"/intelligentRecommendationContent?step=1-2"})};return p(Ve,{children:[t(rn,{children:o.SmartContentRecommendation.StepOneTitle}),p(sn,{onClick:c,children:[t(U,{type:"a-xuantingfanhuidingbu",color:"#fff",size:24}),t(an,{children:o.SmartContentRecommendation.StartUploadPictures})]}),t(on,{children:t(gr,{src:kr})})]})}function ue(){const{state:i}=ve(),{location:r}=i,{search:o}=r,{singel:s,imgUrl:c,templateId:u,groupKey:g,edit:d,step:I,reopen:b}=o;return{singel:s,imgUrl:c,templateId:u,groupKey:g,edit:d,step:I,reopen:b}}function Sr(){const[i,r]=a.exports.useState(1),{step:o,reopen:s}=ue();a.exports.useEffect(()=>{switch(o){case"1-1":r(1);break;case"1-2":r(2);break;default:r(1);break}},[o]);const c=a.exports.useMemo(()=>{switch(i){case 1:return t(Fr,{setStep:r});case 2:return document.documentElement.scrollTo(0,0),t(Er,{reopen:s});default:return r(1),null}},[s,i]);return t(tn,{children:c})}var vr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAQCAYAAAB6Hg0eAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJqADAAQAAAABAAAAEAAAAACqk219AAAAwElEQVRIDc3QywnCQBAG4BlQ0BQgWIFnS7AGL5boJRcbsATPVmAFjmKE3ySgIG42M7N5uLCnefwfQ/Snj1NdIs8dEbbEWNe7wCcizrNssk/d7ZoHsBApDld5IPSrWtXjWl4OuS5WBi5v9+II0CoWzEzn+Wy6YeZLrC9UM8O0qHeYF2eCWVEpODXMi/LiVLBUlAfXCusKZcVFYV2jLLhGWF8oLS4I6xulwf3AhkK14b5gQ6NiuA9sLFQTroaNjQrhXlHOvL8VixA+AAAAAElFTkSuQmCC";const rt=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>2-3.\u9F20\u6807\u60AC\u505C\u6309\u94AE\u533A\u57DF-\u6DFB\u52A0\u6210\u529F\u63D0\u793A</title>
    <g id="&lt;V2.0&gt;\u5546\u54C1\u4E3B\u56FE\u5957\u7248" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2-3.\u9F20\u6807\u60AC\u505C\u6309\u94AE\u533A\u57DF-\u6DFB\u52A0\u6210\u529F\u63D0\u793A" transform="translate(-63.000000, -214.000000)" fill="rgba(0,0,0,0.5)">
            <g id="\u7F16\u7EC4-5" transform="translate(63.000000, 214.000000)">
                <g id="\u7F16\u7EC4" transform="translate(1.000000, 1.000000)">
                    <g id="\u5DE6\u7FFB\u9875" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ">
                        <path d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M13.9810131,7.86190178 C13.8454686,7.82558104 13.7008435,7.8643314 13.6016166,7.96355595 L13.6016166,7.96355595 L9.84290161,11.722271 C9.68951582,11.8756597 9.68951582,12.1243489 9.84290161,12.2777376 L9.84290161,12.2777376 L13.6016166,16.0364526 C13.7550054,16.1898384 14.0036945,16.1898384 14.1570833,16.0364526 C14.2307498,15.9627916 14.2721377,15.8628825 14.2721377,15.7587062 C14.2721377,15.6545299 14.2307498,15.5546208 14.1570833,15.4809598 L14.1570833,15.4809598 L10.6761277,12.0000043 L14.1570833,8.51903566 C14.2563102,8.4198111 14.2950639,8.27518692 14.2587464,8.13964163 C14.2224288,8.00409634 14.1165575,7.89822251 13.9810131,7.86190178 Z" id="\u5F62\u72B6\u7ED3\u5408" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`,ot=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>2-3.\u9F20\u6807\u60AC\u505C\u6309\u94AE\u533A\u57DF-\u6DFB\u52A0\u6210\u529F\u63D0\u793A</title>
    <g id="&lt;V2.0&gt;\u5546\u54C1\u4E3B\u56FE\u5957\u7248" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2-3.\u9F20\u6807\u60AC\u505C\u6309\u94AE\u533A\u57DF-\u6DFB\u52A0\u6210\u529F\u63D0\u793A" transform="translate(-807.000000, -214.000000)" fill="rgba(0,0,0,0.5)">
            <g id="\u7F16\u7EC4-7" transform="translate(807.000000, 214.000000)">
                <g id="\u5DE6\u7FFB\u9875\u5907\u4EFD" transform="translate(1.000000, 1.000000)">
                    <path d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M13.9810131,7.86190178 C13.8454686,7.82558104 13.7008435,7.8643314 13.6016166,7.96355595 L13.6016166,7.96355595 L9.84290161,11.722271 C9.68951582,11.8756597 9.68951582,12.1243489 9.84290161,12.2777376 L9.84290161,12.2777376 L13.6016166,16.0364526 C13.7550054,16.1898384 14.0036945,16.1898384 14.1570833,16.0364526 C14.2307498,15.9627916 14.2721377,15.8628825 14.2721377,15.7587062 C14.2721377,15.6545299 14.2307498,15.5546208 14.1570833,15.4809598 L14.1570833,15.4809598 L10.6761277,12.0000043 L14.1570833,8.51903566 C14.2563102,8.4198111 14.2950639,8.27518692 14.2587464,8.13964163 C14.2224288,8.00409634 14.1165575,7.89822251 13.9810131,7.86190178 Z" id="\u5F62\u72B6\u7ED3\u5408" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "></path>
                </g>
            </g>
        </g>
    </g>
</svg>`;function Tr(i){var l;Y.use();const{setFilterList:r}=me(),{imgMainList:o}=i,s=a.exports.useMemo(()=>(o==null?void 0:o.length)>13,[o]),[c]=a.exports.useState(ze(o,13)),[u,g]=a.exports.useState(0),[d,I]=a.exports.useState(0),b=C=>{const h=C==="left"?u-1:u+1;h>c.length-1||h<=0?g(0):g(h),I(0)},k=(C,h)=>{r("imgUrl",C.url),I(h)},x=C=>{const h=C.target.naturalWidth,v=C.target.naturalHeight;r("imgSize",`${h}_${v}`)};return a.exports.useEffect(()=>{r("imgUrl",c[u][0].url)},[u]),t(Bn,{children:t(En,{children:p(kn,{className:"mainwrap",children:[s&&u!==0&&t(tt,{src:`data:image/svg+xml;utf-8,${encodeURIComponent(rt)}`,onClick:()=>b("left")}),(l=c[u])==null?void 0:l.map((C,h)=>{const v=h===d;return p(Fn,{active:v,index:h,onClick:()=>k(C,h),children:[!v&&t(Sn,{}),v&&t(Ue,{onLoad:x,src:C.url}),!v&&t(Ue,{src:C.url}),v&&t(Hn,{src:vr})]},C.id)}),s&&u!==c.length-1&&t(nt,{src:`data:image/svg+xml;utf-8,${encodeURIComponent(ot)}`,onClick:()=>b("right")})]})})})}function Pr(){var v;const i=_(),{setStep:r}=oe(),{clearFilter:o}=pe(),[s,c]=a.exports.useState(0),{removePreviewInfo:u}=Ae(),{changePreviewList:g,previewList:d}=$(),I=ze(d,4),b=a.exports.useRef({width:36,height:36}),k=a.exports.useMemo(()=>(d==null?void 0:d.length)>4,[d.length]),x=Q=>{u(Q.key),g(Q)},l=Q=>{const M=Q==="left"?s-1:s+1;M>I.length-1||M<=0?c(0):c(M)},C=()=>{i({to:"/intelligentRecommendationContent?step=1-2&reopen=true"}),r(1)},h=()=>{i({to:"/intelligentRecommendationContent?step=3-1"}),r(3)};return a.exports.useEffect(()=>()=>{o()},[]),t(Dn,{children:p(Jn,{children:[t(jn,{children:p(Nn,{children:["\u6211\u9009\u62E9\u7684\u5185\u5BB9 (",(d==null?void 0:d.length)||0,"/20)"]})}),p(pi,{children:[k&&s!==0&&t(tt,{color:"#000",style:{...b.current,left:-46},src:`data:image/svg+xml;utf-8,${encodeURIComponent(rt)}`,onClick:()=>l("left")}),(v=I[s])==null?void 0:v.map(Q=>{const M=Q.url;return p(gi,{children:[t(di,{className:"operate",children:t(U,{type:"a-shejikongjianshanchu",size:36,color:"#fff",onClick:()=>x(Q)})}),t(ui,{src:M})]},M)}),k&&s!==I.length-1&&t(nt,{color:"#000",style:{...b.current,right:-46},src:`data:image/svg+xml;utf-8,${encodeURIComponent(ot)}`,onClick:()=>l("right")})]}),t(On,{children:p(zn,{children:[t(We,{onClick:C,children:"\u4E0A\u4E00\u6B65"}),t(Ge,{disabled:(d==null?void 0:d.length)===0,onClick:h,children:"\u7EE7\u7EED"})]})})]})})}function st({dataSource:i,type:r}){const[o,s]=a.exports.useState([]),[c,u]=a.exports.useState([]),g=a.exports.useMemo(()=>i.length,[i.length]),d=pe(x=>x.setFilterList),I=Y.use(),{state:b}=ve();b.location.search;const k=a.exports.useCallback(x=>{!x||(s(l=>l.includes(x==null?void 0:x.categoryName)?l.filter(C=>C!==(x==null?void 0:x.categoryName)):[...l,x==null?void 0:x.categoryName]),u(l=>{const C=(x==null?void 0:x.code)||(x==null?void 0:x.categoryName);return l.includes(C)?l.filter(h=>h!==C):[...l,C]}))},[s]);return a.exports.useEffect(()=>{d(r,c)},[o.toString()]),{len:g,chain:I,checked:o,onChecked:k,checkedKey:c,setFilterList:d}}function Qr({dataSource:i,type:r,title:o}){const{onChecked:s,checkedKey:c}=st({dataSource:i,type:r});return p(we,{children:[t(Ce,{children:t(ye,{children:o})}),t(_n,{children:i.map(u=>t(ti,{checked:c.includes(u.code),onChange:()=>s(u),children:t(ei,{children:u.categoryName})},u.categoryName))})]})}const Rr=e(At)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,Mr=e(n)`
  ${({checked:i})=>`
    border-radius: 4px;
    margin-bottom: 12px !important;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${i&&"border: 2px solid #0166FA;"}
  `}
`,Lr=e(n)`
  ${({checked:i,color:r})=>`
    width: 36px;
    height: 36px;
    background-color: ${r};
    border-radius: 4px;
    cursor: pointer;
    ${i&&"border: 2px solid #fff;"}
  `}
`;function Ur({dataSource:i}){const{checked:r,chain:o,onChecked:s}=st({dataSource:i,type:"Color"});return p(we,{children:[t(Ce,{children:t(ye,{children:"\u63A8\u8350\u7684\u5185\u5BB9\u8272\u7CFB"})}),t(Rr,{children:i.map(c=>t(Mr,{checked:r.includes(c.categoryName),children:t(Lr,{color:c.color,checked:r.includes(c.id),onClick:()=>s(c)})},c.id))})]})}function Dr(){const{globalConfig:i}=Te(),{allCategory:r=[]}=i,o=pe(u=>u.setFilterList),s=a.exports.useMemo(()=>r.map(u=>({label:u.categoryName,value:u.code})),[r]);return p(we,{style:{marginBottom:20},children:[t(Ce,{children:t(ye,{children:"\u63A8\u8350\u7684\u5185\u5BB9\u9700\u8981\u9002\u914D\u4EE5\u4E0B\u4EA7\u54C1\u7C7B\u76EE"})}),t(ni,{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u76EE",dataSource:s,onChange:u=>{o("Category",u)}})]})}function Jr(){const[i,r]=a.exports.useState(""),o=pe(u=>u.setFilterList);return p(we,{style:{marginBottom:20},children:[t(Ce,{children:t(ye,{children:"\u63A8\u8350\u7684\u5185\u5BB9\u9700\u8981\u5305\u542B\u4EE5\u4E0B\u6807\u7B7E"})}),t(ii,{children:t(ri,{placeholder:"\u8BF7\u8F93\u5165\u6807\u7B7E \u7528\u7A7A\u683C\u9694\u5F00",value:i,onBlur:()=>{o("Tag",i)},onChange:u=>{r(u)}})})]})}function jr(){const i=Te(g=>g.globalConfig)||{},{Style:r=[],Color:o=[],Component:s=[],Topic:c=[]}=i,u=a.exports.useMemo(()=>[{type:"Subject",title:"\u63A8\u8350\u7684\u5185\u5BB9\u4E3B\u8981\u76EE\u6807",dataSource:c},{type:"Component",title:"\u63A8\u8350\u7684\u5185\u5BB9\u5305\u62EC\u4E0B\u9762\u7684\u4FE1\u606F",dataSource:s},{type:"Style",title:"\u63A8\u8350\u7684\u5185\u5BB9\u9700\u8981\u5305\u62EC\u4EE5\u4E0B\u98CE\u683C",dataSource:r}],[s,r,c]);return p(je,{children:[u.map(g=>t(Qr,{dataSource:g.dataSource,type:g.type,...g},g.type)),t(Dr,{}),t(Jr,{}),t(Ur,{dataSource:o})]})}function Nr(i){const{drawerVisible:r,closeDrawer:o,onConfirm:s}=i,c=Y.use();return t(Ne,{visible:r,mask:!1,maskClosable:!0,drawerStyle:{width:"520px",top:"148px",height:"80vh",padding:"0",display:"flex",flexDirection:"column",boxShadow:"0px 2px 8px 0px rgba(0,0,0,0.15)"},onClose:o,placement:"right",children:p(Xn,{children:[p(Ke,{children:[t(Ye,{children:"\u63A8\u8350\u53C2\u6570\u8BBE\u7F6E"}),t(qe,{onClick:o,children:t(Oe,{type:"a-tishiguanbi"})})]}),t($n,{children:t(jr,{})}),t(Ze,{children:p(Xe,{children:[t($e,{onClick:o,children:c.Button.Cancel}),t(_e,{onClick:s,children:c.Button.Confirm})]})})]})})}var Or="data:image/png;base64,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",zr="data:image/png;base64,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",Hr="./assets/TemplateSize.7f0e12e6.png";function Vr(i){const r=Y.use(),{handleConfirm:o,handleCancel:s,handleActive:c,active:u,sizeList:g,drawerVisible:d}=i,I=(b,k)=>{let x=100,l=100;return b/k>1&&(x=140,l=k*140/b),b/k<1&&(l=140,x=b*140/k),(!b||!k)&&(l=100,x=100),{width:x,height:l}};return t(Ne,{visible:d,mask:!1,maskClosable:!0,drawerStyle:{padding:0,width:"687px",height:"80vh",top:"148px",background:"#FFFFFF",boxShadow:"0px 2px 8px 0px rgba(0,0,0,0.15)",overflow:"hidden",borderRadius:"8px"},onClose:s,placement:"right",children:p(Vn,{children:[p(Ke,{children:[t(Ye,{children:"\u8C03\u6574\u5C3A\u5BF8"}),t(qe,{onClick:s,children:t(Oe,{type:"a-tishiguanbi"})})]}),t(Wn,{children:t(Gn,{children:g.map(b=>{const{categoryName:k,placementTypes:x,code:l}=b,C=l.split("_")[0],h=l.split("_")[1],{width:v,height:Q}=I(+C,+h);return p(Kn,{onClick:()=>c(b),active:(u==null?void 0:u.categoryName)===k,children:[p(Yn,{style:{width:v,height:Q,backgroundColor:C==="null"?"transparent":"#fff"},children:[t(qn,{children:k}),t(xr,{src:Hr})]}),x&&t(wr,{position:"top-left",title:t(Zn,{children:x}),children:t(Cr,{children:x})})]},k)})})}),t(Ze,{children:p(Xe,{children:[t($e,{onClick:s,children:r.Button.Cancel}),t(_e,{onClick:o,children:r.Button.Confirm})]})})]})})}function Wr(){const[i,r]=a.exports.useState(!1),[o,s]=a.exports.useState(!1),{loading:c,setLoading:u}=wt(),[g,d]=a.exports.useState(!1),[I,b]=a.exports.useState(!1),[k,x]=a.exports.useState(0),[l,C]=a.exports.useState([]),{stores:h,previewInfos:v,setPreviewInfo:Q}=Ae(),{setFilterList:M,getFilterList:B}=me(),{changePreviewList:y,previewList:m,changeInitList:F}=$(),{imgUrl:S,width:A,height:f,contextKey:w,imgSize:R}=B(),{filterList:E}=pe(),{Category:L,Color:J,Component:P,Style:z,Subject:N,Tag:q}=E,{globalConfig:be}=Te(),{Size:ge}=be,se=a.exports.useMemo(()=>({code:"null_null",categoryName:"\u4E0D\u9650\u5C3A\u5BF8"}),[]),ae=a.exports.useMemo(()=>[se,...ge],[ge,se]),[ce,Ie]=a.exports.useState(ae[0]),[T,j]=a.exports.useState(ce),V=D=>{const{code:O}=D,H=O.split("_")[0],ne=O.split("_")[1];M("width",H),M("height",ne),Ie(D)},W=()=>{r(!1)},Z=()=>{r(!1),b(!0),j(ce)},ee=()=>s(!1),X=a.exports.useCallback(D=>{if(m.find(ie=>ie.key===D.templateId&&ie.imgUrl===S)){re.show({message:"\u4E0D\u80FD\u91CD\u590D\u6DFB\u52A0",type:"success"});return}if(m.length>=20){re.show({message:"\u4E0D\u80FD\u8D85\u8FC720\u6761",type:"success"});return}const{templateId:O,json:H}=D,ne=O;if(h.has(ne)){const ie=[ne,h.get(ne)];u(!0),ke([ie],(G,Ee,he)=>{const{url:fe}=he,Re=v.get(G)||[];Re[Ee]=he,Q(G,Re);const Me={key:G,url:fe,json:H,imgUrl:S};y(Me),F(Me),u(!1),re.show({message:"\u8BE5\u5185\u5BB9\u5DF2\u6210\u529F\u6DFB\u52A0\u5230\u6211\u9009\u62E9\u7684\u5185\u5BB9",type:"success",style:{width:400,display:"flex",flexDirection:"row",justifyContent:"center"}})})}},[y,S,m.length,v,Q,l,h]),te=a.exports.useCallback(()=>{s(!0)},[]),de=a.exports.useMemo(()=>t(oi,{children:Array.isArray(l)&&l.length>0&&l.map(D=>{const{templateId:O,json:H}=D;return p(ai,{children:[t(ci,{className:"mask"}),t(li,{className:"operator",children:t(U,{type:"a-mobangouxuan",size:36,color:"#fff",onClick:()=>X(D)})}),t(Pe,{width:314,height:164,pageIndex:0,json:H==null?void 0:H.layout,storeID:O},O)]},O)})}),[X,l]),Be=()=>{b(!0),ee()};a.exports.useEffect(()=>{const{code:D}=ae[0],O=D.split("_")[0],H=D.split("_")[1];M("width",O),M("height",H)},[M]);const le=a.exports.useCallback(D=>{const O=R==null?void 0:R.split("_")[0],H=R==null?void 0:R.split("_")[1],ie={contextKey:w,mainImgHeight:H,mainImgUrl:D,mainImgWidth:O,width:A,height:f,filterArray:[[L],J,P,z,N==="fomo"?[""]:N,[q]]};let G=0;G+=L?1:0,G+=(J==null?void 0:J.length)>0?J.length:0,G+=(P==null?void 0:P.length)>0?P.length:0,G+=(z==null?void 0:z.length)>0?z.length:0,G+=(N==null?void 0:N.length)>0?N==="fomo"?0:N.length:0,G+=q?1:0,x(G),u(!0),bt(ie).then(Ee=>{const he=Ee.map(fe=>({templateId:fe.templateId.toString(),json:JSON.parse(fe.json)}));return C(he),null}).catch(()=>{}).finally(()=>{b(!1),u(!1)})},[L,J,P,z,N,q,w,R,S,A,f]);return a.exports.useEffect(()=>{!S||!R||le(S)},[S,R,g]),a.exports.useEffect(()=>{!I||le(S)},[I]),a.exports.useEffect(()=>{const D=document.getElementById("content-wrap");i?D.setAttribute("style","overflow: hidden"):D.setAttribute("style","overflow: auto")},[i]),p(Tn,{children:[p(yr,{children:[p(Pn,{children:[p(Qn,{children:["\u4E3A\u60A8\u63A8\u8350\u4EE5\u4E0B",(l==null?void 0:l.length)||0,"\u6761\u5185\u5BB9\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u5408\u9002\u7684\u5185\u5BB9\u6DFB\u52A0\u5230",t(Ln,{children:"\u201C\u6211\u7684\u9009\u62E9\u201D"})]}),p(xi,{children:[p(Rn,{onClick:()=>r(!0),children:[p(Mn,{children:["\u5C3A\u5BF8\uFF1A",T.categoryName]}),t(fr,{src:zr})]}),p(Un,{onClick:te,children:[t(hr,{src:Or}),"\u63A8\u8350\u53C2\u6570 (",k,")"]}),p(fi,{onClick:()=>d(D=>!D),children:[t(U,{type:"shuaxin",color:"#FFF",size:16}),t(mi,{children:"\u6362\u4E00\u6362"})]})]})]}),de]}),t(Vr,{drawerVisible:i,active:ce,sizeList:ae,handleActive:V,handleCancel:W,handleConfirm:Z}),t(Nr,{drawerVisible:o,closeDrawer:ee,onConfirm:Be}),t(Ai,{children:T.placementTypes&&p(wi,{children:["\u4EE5\u4E0A\u5185\u5BB9\u9002\u7528\u4E8E\uFF1A",T.placementTypes]})}),c&&t(hi,{children:t(Ft,{color:"transparent",style:{background:"transparent",width:"0",height:"0"},imgStyle:{background:"transparent",width:40,height:40},visible:c})})]})}function Gr(){var o;const{material:i}=xe(),r=(o=i.get("imgMain"))==null?void 0:o.filter(s=>s.id!=="empty");return p(vn,{children:[t(Tr,{imgMainList:r}),p(si,{children:[t(Wr,{}),t(Pr,{})]})]})}const Kr=e(n)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;e(n)`
  width: 530px;
  height: 530px;
  display: inline-block;
`;const Yr=e(n)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 20px;
`,qr=e(n)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 20px;
`,Zr=e(n)`
  width: 200px;
  height: 36px;
  display: flex;
  padding: 0 10px;
  // margin-top: 20px;
  align-items: center;
  background: #f5f6fa;
  border-radius: 2px;
  line-height: 14px;
  justify-content: space-between;
`,Xr=e(n)`
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #222222;
`;e(n)``;const $r=e(K)`
  position: absolute;
  width: 100%;
  height: 100%;
`,_r=e(n)`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
`,eo=e(n)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  border: 1px dashed #ccc;
  margin-bottom: 20px;
  cursor: pointer;
`,to=e(n)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 16px;
`,no=e(U)``,io=e(Fe)`
  width: 200px;
  height: 32px;
  background: #ffffff;
  border: 1px solid rgba(216, 216, 216, 1);
  border-radius: 4px;
  margin-bottom: 10px;
`;function ro(i){const{layoutJSON:r}=i,{layout:o}=r.json,s=o.pages[0],[c,u]=a.exports.useState(),{changePreviewItem:g}=$(),d=Y.use(),I="\u8BF7\u8F93\u5165",b=a.exports.useMemo(()=>({imgBackground:{title:d.TemplateEditorPage.ImgBackground,type:"img"},imgMain:{title:d.TemplateEditorPage.ImgMain,type:"img"},imgBrandIcon:{title:d.TemplateEditorPage.ImgBrandIcon,type:"img"},imgSecondary:{title:d.TemplateEditorPage.ImgSecondary,type:"img"},txtTitle:{title:"\u6807\u9898",type:"txt"},txtSubTitle:{title:"\u526F\u6807\u9898",type:"txt"},txtNormal:{title:d.TemplateEditorPage.TxtNormal,type:"txt",placeholder:["\u8BF7\u8F93\u5165\u6807\u9898","\u8BF7\u8F93\u5165\u526F\u6807\u9898","\u8BF7\u8F93\u5165\u9644\u52A0\u6587\u5B57","\u8BF7\u8F93\u5165\u5176\u5B83\u6587\u672C","\u8BF7\u8F93\u5165\u5176\u5B83\u6587\u672C"]},txtPrice:{title:d.TemplateEditorPage.TextPrice,type:"txt"},txtDiscount:{title:d.TemplateEditorPage.TextDiscount,type:"txt"},txtProduct:{title:d.TemplateEditorPage.TxtProduct,type:"txt"},txtService:{title:d.TemplateEditorPage.TxtService,type:"txt"},txtMarket:{title:d.TemplateEditorPage.TxtMarket,type:"txt"}}),[d.TemplateEditorPage.ImgBackground,d.TemplateEditorPage.ImgBrandIcon,d.TemplateEditorPage.ImgMain,d.TemplateEditorPage.ImgSecondary,d.TemplateEditorPage.TextDiscount,d.TemplateEditorPage.TextPrice,d.TemplateEditorPage.TxtMarket,d.TemplateEditorPage.TxtNormal,d.TemplateEditorPage.TxtProduct,d.TemplateEditorPage.TxtService]),k=a.exports.useMemo(()=>s.children.reduce((B,y)=>{const m=B,F=y.gmGroup.trim();return m[F]=B[F]||[],B[F].push(y),B},{}),[s.children]),x=a.exports.useCallback(B=>{const y=!(c!=null&&c[B]);u(m=>({...m,[B]:y}))},[c]),l=(B,y)=>{const m=B;y?m.visible=!0:m.visible=!1},C=a.exports.useMemo(()=>(B,y)=>{const m=o.pages[0].children.find(F=>F.id===y);m.text=B,l(m,B),g(r)},[g,o.pages,r]),h=a.exports.useMemo(()=>(B,y)=>{const m=o.pages[0].children.find(F=>F.id===y);!m||(m!=null&&m.maskSrc?m.maskSrc=B:m.src=B,m.type="image",m.cropX=0,m.cropY=0,m.cropHeight=1,m.cropWidth=1,l(m,B),g(r))},[g,o.pages,r]),v=a.exports.useCallback((B,y)=>{const m=B;switch(m.status){case"uploaded":h(m.url,y);break}},[h]),Q=a.exports.useCallback((B,y)=>B?t(_r,{onClick:()=>h("",y),children:t($r,{src:B})},B):t(eo,{children:t(Se,{accept:".png,.jpg,.jpeg",onChange:m=>v(m,y),children:t(no,{type:"a-mobanxuanze",color:"#ccc"})})},y),[h,v]),M=a.exports.useCallback(()=>Object.keys(b).map(B=>{if(b[B]){const{title:y="",type:m="",placeholder:F=[]}=b[B],S=k[B],A=c==null?void 0:c[y];if(S){const f={transform:A?"rotate(180deg)":"rotate(0deg)",cursor:"pointer"};return p(qr,{children:[p(Zr,{children:[p(Xr,{children:[y,"(",S==null?void 0:S.length,")"]}),t("iconpark-icon",{name:"icpiliangchulixialajian",style:f,size:28,onClick:()=>x(y)})]}),t(to,{children:!A&&(S==null?void 0:S.map((w,R)=>{const E=w,{id:L}=E;(F==null?void 0:F.length)===0&&new Array(S.length).fill("").forEach((P,z,N)=>{const q=N.length>1?`${I}${y}${Qe(z+1)}`:`${I}${y}`;F.push(q)});const J=F==null?void 0:F[R];switch(m){case"img":return E!=null&&E.maskSrc?Q(E.maskSrc,E.id):Q(E.src,E.id);case"txt":return t(io,{value:E.text,placeholder:J,onChange:P=>C(P,L)},L);default:return null}}))})]},y)}}return null}),[b,c,k,C,Q,x]);return t(Kr,{children:t(Yr,{children:M()})})}function oo(i){const{findTemp:r,coefficient:o}=i;return r?t(rr,{style:{width:1e3*o,height:522*o},children:t(Pe,{json:r==null?void 0:r.json.layout,storeID:r==null?void 0:r.key,width:1e3*o,height:522*o})}):null}function so(i){const{scaleWidth:r}=i,{state:o}=ve(),{location:s}=o,{search:c}=s,{groupKey:u}=c,[g,d]=a.exports.useState(!1),{previewList:I}=$(),b=I.filter(h=>{var v;return((v=h==null?void 0:h.imgUrl)==null?void 0:v.substring(10))===(u==null?void 0:u.substring(9))}),k=()=>d(!1),x=235,l=122,C=a.exports.useMemo(()=>r/25,[r]);return p(ar,{children:[g&&t(dr,{status:"warning",closeable:!0,onClose:k,title:`\u4F60\u5DF2\u7ECF\u9009\u62E9\u6279\u5904\u7406\u7F16\u8F91\u6A21\u5F0F\uFF0C\u7F16\u8F91\u4F1A\u540C\u65F6\u66F4\u65B0\u4E0B\u9762\u6240\u6709\u7684\uFF08${(b==null?void 0:b.length)||0}\uFF09\u4E2A\u5185\u5BB9`}),t(cr,{children:b.map(h=>t(lr,{scaleWidth:r,style:{width:x*C,height:l*C},children:t(Pe,{json:h==null?void 0:h.json.layout,storeID:`${h==null?void 0:h.key}_${h.imgUrl}`,width:x*C,height:l*C})},h.url))})]})}const ao=e(n)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;e(n)`
  width: 530px;
  height: 530px;
  display: inline-block;
`;const co=e(n)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  overflow-y: auto;
`,lo=e(n)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 20px;
`,po=e(n)`
  width: 200px;
  height: 36px;
  display: flex;
  padding: 0 10px;
  // margin-top: 20px;
  align-items: center;
  background: #f5f6fa;
  border-radius: 2px;
  line-height: 14px;
  justify-content: space-between;
`,uo=e(n)`
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #222222;
`;e(n)``;const go=e(K)`
  position: absolute;
  width: 100%;
  height: 100%;
`,ho=e(n)`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
`,fo=e(n)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  border: 1px dashed #ccc;
  margin-bottom: 20px;
  cursor: pointer;
`,xo=e(n)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 16px;
`,mo=e(U)``,Ao=e(Fe)`
  width: 200px;
  height: 32px;
  background: #ffffff;
  border: 1px solid rgba(216, 216, 216, 1);
  border-radius: 4px;
  margin-bottom: 10px;
`;function wo(){const{groupKey:i}=ue(),{changePreviewItems:r,previewList:o}=$(),[s,c]=a.exports.useState([]),u=new Array(5).fill(""),[g,d]=a.exports.useState({txtTitle:[""],txtSubTitle:[""],txtNormal:u,txtProduct:u,txtMarket:u,txtService:u,txtPrice:[""],txtDiscount:[""]});a.exports.useEffect(()=>{const A=o.filter(f=>{var w;return((w=f==null?void 0:f.imgUrl)==null?void 0:w.substring(10))===(i==null?void 0:i.substring(9))});console.log("list",A),c(A)},[i,JSON.stringify(o)]);const I=JSON.parse(JSON.stringify(s)),b="\u8BF7\u8F93\u5165",[k,x]=a.exports.useState({imgBackground:"",imgLogo:"",imgMain:""}),[l,C]=a.exports.useState();a.exports.useEffect(()=>{i&&x(A=>({...A,imgMain:`http://${i.substring(7)}`}))},[i]);const h=Y.use(),v=a.exports.useMemo(()=>({imgBackground:{title:h.TemplateEditorPage.ImgBackground,size:1,type:"img",key:"imgBackground"},imgMain:{title:h.TemplateEditorPage.ImgMain,size:1,type:"img",key:"imgMain"},imgBrandIcon:{title:h.TemplateEditorPage.ImgBrandIcon,size:1,type:"img",key:"imgLogo"},txtTitle:{title:"\u6807\u9898",size:1,type:"txt"},txtSubTitle:{title:"\u526F\u6807\u9898",size:1,type:"txt"},txtNormal:{title:h.TemplateEditorPage.TxtNormal,size:5,placeholders:["\u8BF7\u8F93\u5165\u6807\u9898","\u8BF7\u8F93\u5165\u526F\u6807\u9898","\u8BF7\u8F93\u5165\u9644\u52A0\u6587\u5B57","\u8BF7\u8F93\u5165\u5176\u5B83\u6587\u672C","\u8BF7\u8F93\u5165\u5176\u5B83\u6587\u672C"],type:"txt"},txtPrice:{title:h.TemplateEditorPage.TextPrice,type:"txt",size:1},txtDiscount:{title:h.TemplateEditorPage.TextDiscount,type:"txt",size:1},txtProduct:{title:h.TemplateEditorPage.TxtProduct,size:5,type:"txt"},txtService:{title:h.TemplateEditorPage.TxtService,size:5,type:"txt"},txtMarket:{title:h.TemplateEditorPage.TxtMarket,size:5,type:"txt"}}),[h.TemplateEditorPage.ImgBackground,h.TemplateEditorPage.ImgBrandIcon,h.TemplateEditorPage.ImgMain,h.TemplateEditorPage.TextDiscount,h.TemplateEditorPage.TextPrice,h.TemplateEditorPage.TxtMarket,h.TemplateEditorPage.TxtNormal,h.TemplateEditorPage.TxtProduct,h.TemplateEditorPage.TxtService]),Q=a.exports.useCallback((A,f,w)=>{const R=A,E=JSON.parse(JSON.stringify(g)),L=E[f];L[w]=R,d(E),r(s,I)},[r,s,I,g]),M=a.exports.useMemo(()=>(A,f,w)=>{s.forEach(R=>{R.json.layout.pages.forEach(E=>{const L=E.children.filter(P=>P.gmGroup.trim()===f),J=+w;L[J]&&(L[J].text=A)})}),Q(A,f,+w)},[Q,s]),B=a.exports.useCallback((A,f)=>{x(w=>({...w,[f]:A})),console.log("findList",s),s.forEach(w=>{w.json.layout.pages.forEach(R=>{const E=R.children.find(L=>L.gmGroup.trim()===f);E&&(E.type="image",E.cropX=0,E.cropY=0,E.cropHeight=1,E.cropWidth=1,A?E.visible=!0:E.visible=!1,E!=null&&E.maskSrc?E.maskSrc=A:E.src=A)})}),r(s,I)},[r,s,I,i]),y=a.exports.useCallback((A,f)=>{const w=A;switch(w.status){case"uploaded":B(w.url,f);break}},[B,i,s]),m=a.exports.useCallback(A=>{const f=!(l!=null&&l[A]);C(w=>({...w,[A]:f}))},[l]),F=a.exports.useCallback(A=>k[A]?t(ho,{onClick:()=>B("",A),children:t(go,{src:k[A]})},A):t(fo,{children:t(Se,{accept:".png,.jpg,.jpeg",onChange:f=>y(f,A),children:t(mo,{type:"a-mobanxuanze",color:"#ccc"})})},A),[k,B,y,i,s]),S=a.exports.useCallback((A,f,w,R,E)=>{if(A==="img")return F(w);if(A==="txt"){const L=R;return(L==null?void 0:L.length)===0&&new Array(f).fill("").forEach((J,P,z)=>{const N=z.length>1?`${b}${E}${Qe(P+1)}`:`${b}${E}`;L.push(N)}),L.map((J,P)=>{const N=g[w][P]||"";return t(Ao,{placeholder:J,defaultValue:N,onChange:q=>M(q,w,P.toString())},`${P+1}`)})}return null},[M,F,g,i,s]);return t(ao,{children:t(co,{children:Object.keys(v).map(A=>{if(v[A]){const{title:f="",size:w=0,type:R="",placeholders:E=[]}=v[A],L=l==null?void 0:l[f];return p(lo,{children:[p(po,{children:[p(uo,{children:[f,"(",w,")"]}),t("iconpark-icon",{name:"icpiliangchulixialajian",style:{transform:L?"rotate(180deg)":"rotate(0deg)",cursor:"pointer"},size:28,onClick:()=>m(f)})]}),t(xo,{children:!L&&S(R,+w,A,E,f)})]},f)}return null})})})}var Co="./assets/openedit.8adad53b.png",yo="data:image/png;base64,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";function bo(i){const{back:r}=i,o=_(),[s,c]=a.exports.useState(100),[u,g]=a.exports.useState(!1),{singel:d,imgUrl:I,templateId:b,groupKey:k}=ue(),{stores:x,previewInfos:l,setPreviewInfo:C}=Ae(),{saveList:h,undoList:v,redoList:Q,hasChange:M,previewList:B,initPreviewLists:y,undo:m,redo:F,noChange:S,currentIndex:A,clearUndoList:f,clearRedoList:w,changeSaveList:R,changeInitList:E,changePreviewItem:L,changePreviewItems:J}=$(),P=B.find(T=>+T.key==+b&&T.imgUrl.substring(10)===I.substring(9)),z=a.exports.useCallback(()=>{const T=s/100;return d?t(oo,{coefficient:T,findTemp:P}):t(so,{scaleWidth:s})},[P,s,d]);a.exports.useEffect(()=>()=>{w(),f()},[w,f]),a.exports.useEffect(()=>{c(d?100:25)},[d]);const N=()=>{if(d){if(s===10)return;c(T=>T-10)}else{if(s===25)return;c(T=>T-10)}},q=()=>{s!==150&&c(T=>T+10>150?150:T+10)},be=a.exports.useCallback(()=>d?t(Wt,{children:P!=null&&P.json.layout?t(ro,{layoutJSON:P}):null}):t(wo,{}),[P,d]),ge=()=>{const{key:T,imgUrl:j}=P;!T&&!j||o({to:`/designer?templateId=${T}&imgUrl=${j}`})},se=()=>{w(),f(),o({to:"/intelligentRecommendationContent?step=3"}),r()},ae=T=>T.filter(j=>{var V;return((V=j==null?void 0:j.imgUrl)==null?void 0:V.substring(10))===(k==null?void 0:k.substring(9))}),ce=()=>{u||(M?Ct.confirm({title:"\u786E\u8BA4\u8981\u9000\u51FA\u5417\uFF1F",content:"\u672C\u6B21\u4FEE\u6539\u672A\u4FDD\u5B58\uFF0C\u662F\u5426\u7EE7\u7EED\u9000\u51FA\u3002",okText:"\u9000\u51FA",onOk:()=>{if(d){const T=A(P),j=h.pop()||y[T];L(JSON.parse(JSON.stringify(j)))}else{const T=JSON.parse(JSON.stringify(ae(y))),V=h.pop()||T;J(JSON.parse(JSON.stringify(V)),T)}se()}}):se())},Ie=()=>{if(g(!0),d){const{key:T}=P,j=T;if(x.has(j)){const V=[j,x.get(j)];ke([V],(W,Z,ee)=>{const{url:X}=ee,te=l.get(W)||[];te[Z]=ee,C(W,te),P.url=X,L(P),R(P),E(P,!0),S(),g(!1),re.show({type:"success",message:"\u4FDD\u5B58\u6210\u529F"})})}}else{const T=B.filter(W=>{var Z;return((Z=W==null?void 0:W.imgUrl)==null?void 0:Z.substring(10))===(k==null?void 0:k.substring(9))}),j=(T==null?void 0:T.length)||0;let V=0;T.forEach(W=>{const{key:Z,imgUrl:ee}=W,X=`${Z}_${ee}`;if(x.has(X)){const te=[X,x.get(X)];ke([te],(de,Be,le)=>{const{url:D}=le,O=l.get(de)||[];O[Be]=le,C(de,O),W.url=D,V+=1,j===V&&(re.show({type:"success",message:"\u4FDD\u5B58\u6210\u529F"}),R([T]),T.forEach(H=>{E(H,!0)}),S(),g(!1))})}})}};return a.exports.useEffect(()=>{S()},[S]),p(Wi,{children:[p(_i,{children:[p(Gi,{children:[p(Ki,{children:[p(Yi,{saving:!!u,onClick:ce,children:[t(U,{type:"a-daohangfanhui",color:u?"#ccc":"#000",size:16,style:{marginRight:4}}),"\u9000\u51FA"]}),p(qi,{onClick:Ie,children:[t(br,{src:yo}),"\u4FDD\u5B58"]}),t(Zi,{}),t(Xi,{onClick:()=>m(d),color:"#ddd",children:t("iconpark-icon",{name:"icpiliangchulichexiao",size:16,color:v.length===0?"#ddd":"#000"})}),t($i,{onClick:()=>F(d),children:t("iconpark-icon",{name:"icpiliangchulihuifuchexiao",size:16,color:Q.length===0?"#ddd":"#000"})})]}),d&&p(er,{onClick:ge,children:[t(Ar,{src:Co}),t(tr,{children:"\u6253\u5F00\u7F16\u8F91\u5668"})]})]}),p(ir,{children:[z(),p(or,{children:[t("iconpark-icon",{name:"icpiliangchulisuoxiao",size:22,onClick:N}),p(sr,{children:[s,"%"]}),t("iconpark-icon",{name:"icpiliangchulifangda",size:22,onClick:q})]})]})]}),t(nr,{children:be()})]})}function Io(i){const{groupName:r,previewListGrouped:o,toEdit:s}=i,c=_(),u=g=>{s(),c({to:`/intelligentRecommendationContent?edit=true&groupKey=${g}`})};return t(Ji,{children:Object.keys(o).map((g,d)=>p(ji,{onClick:()=>u(g),children:[r,d+1]},g))})}var Bo="./assets/BatchImgIcon.ee578f3e.png";function Eo(i){const{toEdit:r}=i,o=_(),{setStep:s}=oe(),{removePreviewInfo:c}=Ae(),{changePreviewList:u,previewList:g,initPreviewLists:d}=$(),[I,b]=a.exports.useState("imgUrl"),[k,x]=a.exports.useState(!1),l=a.exports.useMemo(()=>I==="imgUrl"?"\u4EA7\u54C1":"\u6A21\u7248",[I]),{clearCache:C}=He();a.exports.useState(!1);const h=a.exports.useMemo(()=>Dt(g,I),[I,JSON.stringify(g)]),v=()=>{o({to:"/design-space?type=content",replace:!0})},Q=()=>{const f=p(pr,{children:["\u60A8\u5DF2\u6210\u529F\u5BFC\u51FA",(g==null?void 0:g.length)||0,"\u4E2A\u6A21\u7248\uFF0C\u53EF\u524D\u5F80",t(ur,{onClick:v,children:"\u3010\u8BBE\u8BA1\u7A7A\u95F4\u3011"}),"\u67E5\u770B\u7F16\u8F91\u3002"]});yt.open({type:"success",message:"\u6A21\u7248\u5BFC\u51FA\u6210\u529F\uFF01",description:f,duration:1500})},[M,B]=a.exports.useState("prod"),y=()=>{s(2),o({to:"/intelligentRecommendationContent?step=2"})};a.exports.useEffect(()=>{((g==null?void 0:g.length)===0||!g)&&y()},[g.length]);const m=()=>{const f=g.map(w=>({json:JSON.stringify(w.json),previewHeight:w.json.layout.height,previewWidth:w.json.layout.width,publicImgs:[w.url],previewImg:w.url,templateId:w.key,contentId:(w==null?void 0:w.contentId)||null}));x(!0),It({contentList:f}).then(w=>(Q(),setTimeout(()=>{C(),v()},1500),w)).catch(()=>{}).finally(()=>x(!1))},F=f=>{c(f.key),u(f)},S=f=>{B(f),b(f==="prod"?"imgUrl":"key")},A=f=>{r(),o({to:`/intelligentRecommendationContent?step=3-2&edit=true&imgUrl=${f.imgUrl}&templateId=${f.key}&singel=true`})};return p(et,{children:[p(Ci,{children:["\u667A\u80FD\u751F\u6210\u5185\u5BB9\uFF08",(g==null?void 0:g.length)||0,"/20\uFF09"]}),p(yi,{children:["\u6211\u4EEC\u5DF2\u4E3A\u60A8\u751F\u6210\u4E0B\u9762\u5185\u5BB9\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u7F16\u8F91\u529F\u80FD\u5BF9\u8FD9\u4E9B\u5185\u5BB9\u8FDB\u884C\u8C03\u6574"," "]}),p(bi,{children:[p(Ii,{children:[p(Bi,{active:M==="prod",onClick:()=>S("prod"),children:["\u6309\u4EA7\u54C1\u5206\u7EC4",t(De,{active:M==="prod"})]}),p(Ei,{active:M==="temp",onClick:()=>S("temp"),children:["\u6309\u6A21\u7248\u5206\u7EC4",t(De,{active:M==="temp"})]})]}),I==="imgUrl"&&t(Li,{lockScroll:!0,overlay:t(Io,{groupName:l,previewListGrouped:h,toEdit:r}),children:p(Ui,{children:[t(mr,{src:Bo}),t(Di,{children:"\u6279\u5904\u7406\u7F16\u8F91"})]})})]}),t(Ri,{children:t(Mi,{children:t(Ni,{children:Object.keys(h).map((f,w)=>{const R=h[f];return p(Oi,{children:[p(Fi,{children:[l,Qe(w+1)]}),t(zi,{children:R.map(E=>p(ki,{children:[t(vi,{className:"mask"}),p(Ti,{children:[t(Pi,{className:"operate",children:t(U,{type:"a-mobanbianji",color:"#fff",size:36,onClick:()=>A(E)})}),t(Qi,{className:"operate",children:t(U,{type:"a-mobanshanchu",color:"#fff",size:36,onClick:()=>F(E)})})]}),t(Si,{src:E.url,alt:""})]},Le()))})]},Le())})})})}),t(Vi,{children:p(Hi,{children:[t(We,{onClick:y,children:"\u4E0A\u4E00\u6B65"}),t(Ge,{disabled:(g==null?void 0:g.length)===0,onClick:m,children:"\u5BFC\u51FA\u5230\u6211\u7684\u5185\u5BB9"})]})})]})}function ko(){const{step:i,edit:r}=ue(),[o,s]=a.exports.useState(1);a.exports.useEffect(()=>{document.getElementById("content-wrap").scrollTo(0,0)},[]);const c=a.exports.useMemo(()=>{switch(o){case 1:return t(Eo,{toEdit:()=>s(2)});case 2:return t(bo,{back:()=>s(1)});default:return s(1),null}},[o]);return a.exports.useEffect(()=>{switch(i){case"3-1":s(1);break;case"3-2":s(2);break;default:s(1);break}s(r?2:1)},[r,i]),t(et,{children:c})}function Fo(){const i=_(),{currentStep:r}=oe(),{edit:o,step:s}=ue(),c=()=>{switch(r){case 1:return t(Sr,{});case 2:return t(Gr,{});case 3:return t(ko,{});default:return null}};return a.exports.useEffect(()=>{},[r,o,i,s]),p(je,{children:[!o&&t(Ir,{}),t(en,{id:"content-wrap",children:c()})]})}function Lo(){const{setFilterList:i}=me();return a.exports.useEffect(()=>{Bt().then(r=>(i("contextKey",r),r)).catch(()=>{})},[i]),p(Gt,{children:[t(Vt,{}),t(Fo,{})]})}export{Lo as default};
