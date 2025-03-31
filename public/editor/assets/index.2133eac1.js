import{n as o,B as i,L as A,T as z,i as E,R as k,r as d,e as $,f as T,d as m,j as l,I as b,g as D}from"./index.b13d347f.js";import{a as F}from"./index.7dbda1c3.js";import{s as L}from"./index.383a2cf9.js";const B=o(i)`
  position: relative;
  width: 300px;
  height: 254px;
  margin-right: 40px;
  background-color: ${({theme:e})=>e.colors.ipaintter[0]};
  border-radius: 8px;
  cursor: pointer;
  &.case {
    margin-bottom: 30px;
  }
  &.market {
    margin-bottom: 47px;
  }
  &:hover {
    .add {
      display: flex;
    }
    .image-mask {
      display: flex;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 8px;
    }
  }
  &:nth-of-type(4n) {
    margin-right: 0;
  }
  // &:hover {
  //   .actions {
  //     display: flex;
  //   }

  //   img {
  //     transition: all 0.3s;
  //     transform: scale(1.1);
  //   }
  // }
  ${({customStyle:e})=>e?`
        width: ${e.width};
        height: ${e.height};
        margin: ${e.margin};
      `:""}
`,M=o(A)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  // border-radius: 0;
  object-fit: cover;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  & > img {
    // border-radius: 0 !important;
  }
`,W=o(z)`
  width: 196px;
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.ipaintter[5]};
  line-height: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 17px 0 17px 10px;
`,Y=o(i)`
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 8px 8px;
`,N=o(i)`
  display: flex;
  flex-direction: row;
  padding-right: 10px;
  align-items: center;
  & > svg {
    margin-right: 6px;
  }
`,R=o(i)`
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #222222;
  line-height: 16px;
  font-weight: 500;
`,H=o(i)`
  position: relative;
  width: 100%;
  ${({showDesc:e})=>e?"height: calc(100% - 34px);":"height: 100%;"}
`,q=o(i)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
  cursor: pointer;
`,O=o(i)`
  display: none;
  width: 86px;
  height: 32px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: #fff;
  transform: translate(10px, 10px);
  padding: 0 12px;
  z-index: 1;
  & > svg {
    margin-right: 6px;
  }
`,U=o(i)`
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #ffffff;
`;function V({name:e,path:c,dataSource:r,showDrawer:p,setPreviewTemplate:a,customStyle:g,showDesc:f}){const u=E.use(),[h,t]=k.useState(!1),{previewUrl:x="",name:w="",title:C="",localExposure:v="0"}=r,P=s=>{switch(c){case"/market":a(s);break;case"/creativeCase":p(s);break;default:throw new Error("path error")}},I=d.exports.useCallback(s=>{$({code:s.code,id:s.id}).then(n=>(n&&T.show({type:"success",message:u.Toast.AddSuccess}),n)).catch(n=>console.log("err",n)).finally(()=>t(!1))},[u.Toast.AddSuccess]),S=d.exports.useCallback(s=>{F({id:s.id}).then(n=>(n&&T.show({type:"success",message:u.Toast.AddSuccess}),n)).catch(n=>console.log("err",n)).finally(()=>t(!1))},[u.Toast.AddSuccess]),j=(s,n)=>{if(s.stopPropagation(),!h)switch(t(!0),c){case"/market":I(n);break;case"/creativeCase":S(n);break;default:throw t(!1),new Error("path error")}};return m(B,{customStyle:g,className:c==="/market"?"market":"case",onClick:()=>P(r),children:[m(H,{showDesc:f,children:[m(O,{className:"add",onClick:s=>j(s,r),children:[l(b,{type:"a-xuantingtianjia",size:24,color:"#FFF"}),l(U,{children:e||w})]}),l(q,{className:"image-mask"}),l(M,{src:x})]}),f&&m(Y,{children:[l(W,{children:C}),+v==0?null:m(N,{children:[l(b,{type:"a-shejikongjianyulanmoban",size:14,color:"#ccc"}),l(R,{children:v})]})]})]})}V.defaultProps={showDrawer:()=>{},setPreviewTemplate:()=>{},customStyle:null,showDesc:!0};async function G(e){return D({url:"/design/exposure/v2/exposure",params:e})}function ee({list:e,code:c="TEMPLATE"}){const[r,p]=d.exports.useState(),a=d.exports.useCallback(t=>{const{id:x}=t;G({id:x,code:c}).then(w=>w).catch(()=>{})},[c]),g=d.exports.useCallback(()=>{p(null)},[]),f=d.exports.useCallback(()=>{if(!r)return;let t=e.findIndex(x=>r.id===x.id)-1;t<0&&(t=e.length-1),a(e[t]),p(e[t])},[a,e,r]),u=d.exports.useCallback(()=>{if(!r)return;let t=e.findIndex(x=>r.id===x.id)+1;t>e.length-1&&(t=0),a(e[t]),p(e[t])},[a,e,r]);return{setPreviewTemplate:t=>{a(t),p(t)},previewTemplate:r,onClose:g,onPrev:f,onNext:u}}const J=o(i)`
  position: fixed;
  bottom: 80px;
  left: calc(50vw + 720px - 100px);
  z-index: 2;
  cursor: pointer;
  // opacity: 0.4;
  text-align: center;
`,K=o(i)`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`,Q=o(b)`
  &:hover {
    // opacity: 1;
    // animation: aaa 1s ease;
    // animation-iteration-count: 1;
  }
  // @keyframes aaa {
  //   20% {
  //     transform: translateY(6px);
  //   }
  //   40% {
  //     transform: translateY(-6px);
  //   }
  //   60% {
  //     transform: translateY(4px);
  //   }
  //   80% {
  //     transform: translateY(-2px);
  //   }
  //   100% {
  //     transform: translateY(0);
  //   }
  // }
`;function y({getContainer:e,topElement:c,bottomElement:r,step:p}){const[a,g]=k.useState(!1),f=d.exports.useCallback(()=>{const{clientHeight:h}=e;e.scrollTop>h&&!a?g(!0):e.scrollTop<h&&a&&g(!1)},[e,a]);d.exports.useEffect(()=>(window.addEventListener("scroll",f,!0),()=>{window.removeEventListener("scroll",f,!0)}),[e,f]);const u=()=>{const h=e.scrollTop||document.body.scrollTop;L(e,h,0,p)};return a?m(J,{children:[c&&c,l(K,{onClick:u,children:l(Q,{type:"a-xuantingfanhuidingbu",size:28,color:"#fff"})}),r&&r]}):null}y.defaultProps={getContainer:document.documentElement,topElement:void 0,bottomElement:void 0,step:2e3};var te=k.memo(y);export{te as B,V as D,G as e,ee as u};
