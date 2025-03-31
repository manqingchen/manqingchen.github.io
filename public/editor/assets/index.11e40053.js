import{aX as m,n as a,B as o,t,u as v,r as s,aY as F,d as n,j as e,I as p,F as A,a as w}from"./index.b13d347f.js";const D={Topbar:{Index:"\u9996\u9875",Save:"\u4FDD\u5B58",Download:"\u4E0B\u8F7D"},SidePanel:{Template:"\u6A21\u7248",Text:"\u6587\u5B57",Image:"\u56FE\u7247",Element:"\u5143\u7D20",Background:"\u80CC\u666F",Layer:"\u56FE\u5C42",Upload:"\u4E0A\u4F20",Size:"\u5C3A\u5BF8"},toolbar:{opacity:"\u4E0D\u900F\u660E\u5EA6",effects:"\u7279\u6548",blur:"\u6A21\u7CCA",brightness:"\u4EAE\u5EA6",sepia:"\u9971\u548C\u5EA6",grayscale:"\u7070\u5EA6",textStroke:"\u63CF\u8FB9",shadow:"\u9634\u5F71",border:"\u8FB9\u6846",cornerRadius:"\u5706\u89D2",position:"\u4F4D\u7F6E",layering:"\u8C03\u6574\u56FE\u5C42",toForward:"\u6700\u4E0A\u5C42",up:"\u4E0A\u4E00\u5C42",down:"\u4E0B\u4E00\u5C42",toBottom:"\u6700\u4E0B\u5C42",alignLeft:"\u5C45\u5DE6",alignCenter:"\u6A2A\u5411\u5C45\u4E2D",alignRight:"\u5C45\u53F3",alignTop:"\u5C45\u4E0A",alignMiddle:"\u7EB5\u5411\u5C45\u4E2D",alignBottom:"\u5C45\u4E0B",flip:"\u7FFB\u8F6C",flipHorizontally:"\u6A2A\u5411\u7FFB\u8F6C",flipVertically:"\u7EB5\u5411\u7FFB\u8F6C",fitToBackground:"\u586B\u6EE1\u753B\u5E03",removeBackground:"\u79FB\u9664\u80CC\u666F",cancelRemoveBackground:"\u53D6\u6D88",confirmRemoveBackground:"\u786E\u5B9A",crop:"\u88C1\u526A",cropDone:"\u5B8C\u6210",cropCancel:"\u53D6\u6D88",removeClip:"Remove clip",removeMask:"Remove mask",transparency:"\u900F\u660E\u5EA6",lockedDescription:"\u89E3\u9501",unlockedDescription:"\u9501\u5B9A",removeElements:"\u79FB\u9664\u5143\u7D20",duplicateElements:"\u590D\u5236\u5143\u7D20",download:"\u4E0B\u8F7D\u56FE\u7247",saveAsImage:"\u5BFC\u51FA\u56FE\u7247",saveAsPDF:"\u5BFC\u51FAPDF",selectable:"\u662F\u5426\u53EF\u9009",alwaysOnTop:"\u59CB\u7EC8\u5728\u9876\u5C42",showInExport:"\u662F\u5426\u53EF\u5BFC\u51FA"},workspace:{noPages:"\u6CA1\u6709\u753B\u5E03...",addPage:"\u65B0\u5EFA\u753B\u5E03",removePage:"\u79FB\u9664\u753B\u5E03",duplicatePage:"\u590D\u5236\u753B\u5E03",moveUp:"\u5411\u4E0A\u79FB\u52A8",moveDown:"\u5411\u4E0B\u79FB\u52A8"},scale:{reset:"\u91CD\u7F6E"},error:{removeBackground:"Ops! Something went wrong. Background can not be removed."},sidePanel:{templates:"\u6A21\u7248",searchTemplatesWithSameSize:"Show templates with the same size",searchPlaceholder:"Search...",otherFormats:"Other formats",noResults:"\u7A7A\u7A7A\u5982\u4E5F~",error:"\u52A0\u8F7D\u5931\u8D25...",text:"\u6587\u5B57",uploadFont:"\u4E0A\u4F20\u5B57\u4F53",myFonts:"\u6211\u7684\u5B57\u4F53",photos:"\u56FE\u7247",elements:"\u5143\u7D20",upload:"\u4E0A\u4F20",uploadImage:"\u4E0A\u4F20\u56FE\u7247",uploadTip:"\u4E0A\u4F20\u56FE\u7247\u5230\u4E91\u7AEF",background:"\u80CC\u666F",resize:"\u5C3A\u5BF8",layers:"\u56FE\u5C42",layersTip:"\u5F53\u524D\u753B\u5E03\u4E0A\u7684\u5143\u7D20:",noLayers:"\u6CA1\u6709\u5143\u7D20...",useMagicResize:"Use magic resize",width:"\u5BBD\u5EA6",height:"\u9AD8\u5EA6",magicResizeDescription:"Magic resize will automatically resize and move all elements on the canvas",headerText:"Header",createHeader:"Create header",subHeaderText:"Sub Header",createSubHeader:"Create sub header",bodyText:"Body text",createBody:"Create body text"}},g={Topbar:{Index:"\u9996\u9875",Save:"\u4FDD\u5B58",Download:"\u4E0B\u8F7D"},SidePanel:{Template:"\u6A21\u7248",Text:"\u6587\u5B57",Image:"\u56FE\u7247",Element:"\u5143\u7D20",Background:"\u80CC\u666F",Layer:"\u56FE\u5C42",Upload:"\u4E0A\u4F20",Size:"\u5C3A\u5BF8"},toolbar:{opacity:"\u4E0D\u900F\u660E\u5EA6",effects:"\u7279\u6548",blur:"\u6A21\u7CCA",brightness:"\u4EAE\u5EA6",sepia:"\u9971\u548C\u5EA6",grayscale:"\u7070\u5EA6",textStroke:"\u63CF\u8FB9",shadow:"\u9634\u5F71",border:"\u8FB9\u6846",cornerRadius:"\u5706\u89D2",position:"\u4F4D\u7F6E",layering:"\u8C03\u6574\u56FE\u5C42",toForward:"\u6700\u4E0A\u5C42",up:"\u4E0A\u4E00\u5C42",down:"\u4E0B\u4E00\u5C42",toBottom:"\u6700\u4E0B\u5C42",alignLeft:"\u5C45\u5DE6",alignCenter:"\u6A2A\u5411\u5C45\u4E2D",alignRight:"\u5C45\u53F3",alignTop:"\u5C45\u4E0A",alignMiddle:"\u7EB5\u5411\u5C45\u4E2D",alignBottom:"\u5C45\u4E0B",flip:"\u7FFB\u8F6C",flipHorizontally:"\u6A2A\u5411\u7FFB\u8F6C",flipVertically:"\u7EB5\u5411\u7FFB\u8F6C",fitToBackground:"\u586B\u6EE1\u753B\u5E03",removeBackground:"\u79FB\u9664\u80CC\u666F",cancelRemoveBackground:"\u53D6\u6D88",confirmRemoveBackground:"\u786E\u5B9A",crop:"\u88C1\u526A",cropDone:"\u5B8C\u6210",cropCancel:"\u53D6\u6D88",removeClip:"Remove clip",removeMask:"Remove mask",transparency:"\u900F\u660E\u5EA6",lockedDescription:"\u89E3\u9501",unlockedDescription:"\u9501\u5B9A",removeElements:"\u79FB\u9664\u5143\u7D20",duplicateElements:"\u590D\u5236\u5143\u7D20",download:"\u4E0B\u8F7D\u56FE\u7247",saveAsImage:"\u5BFC\u51FA\u56FE\u7247",saveAsPDF:"\u5BFC\u51FAPDF",selectable:"\u662F\u5426\u53EF\u9009",alwaysOnTop:"\u59CB\u7EC8\u5728\u9876\u5C42",showInExport:"\u662F\u5426\u53EF\u5BFC\u51FA"},workspace:{noPages:"\u6CA1\u6709\u753B\u5E03...",addPage:"\u65B0\u5EFA\u753B\u5E03",removePage:"\u79FB\u9664\u753B\u5E03",duplicatePage:"\u590D\u5236\u753B\u5E03",moveUp:"\u5411\u4E0A\u79FB\u52A8",moveDown:"\u5411\u4E0B\u79FB\u52A8"},scale:{reset:"\u91CD\u7F6E"},error:{removeBackground:"Ops! Something went wrong. Background can not be removed."},sidePanel:{templates:"\u6A21\u7248",searchTemplatesWithSameSize:"Show templates with the same size",searchPlaceholder:"Search...",otherFormats:"Other formats",noResults:"\u7A7A\u7A7A\u5982\u4E5F~",error:"\u52A0\u8F7D\u5931\u8D25...",text:"\u6587\u5B57",uploadFont:"\u4E0A\u4F20\u5B57\u4F53",myFonts:"\u6211\u7684\u5B57\u4F53",photos:"\u56FE\u7247",elements:"\u5143\u7D20",upload:"\u4E0A\u4F20",uploadImage:"\u4E0A\u4F20\u56FE\u7247",uploadTip:"\u4E0A\u4F20\u56FE\u7247\u5230\u4E91\u7AEF",background:"\u80CC\u666F",resize:"\u5C3A\u5BF8",layers:"\u56FE\u5C42",layersTip:"\u5F53\u524D\u753B\u5E03\u4E0A\u7684\u5143\u7D20:",noLayers:"\u6CA1\u6709\u5143\u7D20...",useMagicResize:"Use magic resize",width:"\u5BBD\u5EA6",height:"\u9AD8\u5EA6",magicResizeDescription:"Magic resize will automatically resize and move all elements on the canvas",headerText:"Header",createHeader:"Create header",subHeaderText:"Sub Header",createSubHeader:"Create sub header",bodyText:"Body text",createBody:"Create body text"}},h=m({defaultLocale:{key:"zh",values:g}});h.define("en",D);h.define("zh",g);const x=a(o)`
  width: 100%;
  height: 50px;
  background-color: ${t.colors.designer[3]};
  color: ${t.colors.designer[1]};
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
`,E=a(o)`
  padding: 0 10px;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function z(){const u=v(),i=h.use(),r=s.exports.useCallback(()=>{u({to:"/creativeCase"})},[u]),c=s.exports.useCallback(()=>{F.show({type:"warn",message:"TODO..."})},[]),l=s.exports.useCallback(()=>{F.show({type:"warn",message:"TODO..."})},[]);return n(x,{children:[n(E,{onClick:r,children:[e(p,{type:"a-daohangfanhui",size:24,color:t.colors.designer[1]}),i.Topbar.Index]}),n(E,{onClick:c,children:[e(p,{type:"a-titleshangchuan",size:24,color:t.colors.designer[1]}),e(o,{marginLeft:"5px",children:i.Topbar.Save})]}),n(E,{onClick:l,children:[e(p,{type:"a-shejikongjianxiazai",size:24,color:t.colors.designer[1]}),i.Topbar.Download]})]})}const f=a(o)`
  height: 72px;
  width: 72px;
  padding-top: 15px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  &:hover,
  &.active {
    background-color: ${t.colors.designer[2]};
  }
  & path {
    fill: currentColor;
  }
  & > div {
    height: 16px;
  }
  & > p {
    width: 100%;
    padding-top: 5px;
  }
`,y={Template:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:e("path",{d:"M13 8H8v5h5V8zm0-5H8v4h5V3zm2-3H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V2h12v12zM7 3H3v10h4V3z",fillRule:"evenodd"})}),Text:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:e("path",{d:"M5 6.5c0 .28.22.5.5.5H7v3.5c0 .28.22.5.5.5s.5-.22.5-.5V7h1.5c.28 0 .5-.22.5-.5S9.78 6 9.5 6h-4c-.28 0-.5.22-.5.5zM15 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1zm-2 5c-.55 0-1 .45-1 1v5H3V4h5c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1z",fillRule:"evenodd"})}),Image:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:e("path",{d:"M11.99 6.99c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3-5h-14c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-10c0-.55-.45-1-1-1zm-1 9l-5-3-1 2-3-4-3 5v-7h12v7z",fillRule:"evenodd"})}),Element:e("svg",{width:"16",height:"16",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M128,256A128,128,0,1,0,256,384,128,128,0,0,0,128,256Zm379-54.86L400.07,18.29a37.26,37.26,0,0,0-64.14,0L229,201.14C214.76,225.52,232.58,256,261.09,256H474.91C503.42,256,521.24,225.52,507,201.14ZM480,288H320a32,32,0,0,0-32,32V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V320A32,32,0,0,0,480,288Z"})}),Background:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:e("path",{d:"M2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 0C6.9 0 6 .9 6 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",fillRule:"evenodd"})}),Layer:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:e("path",{d:"M.55 4.89l7 3.5c.14.07.29.11.45.11s.31-.04.45-.11l7-3.5a.998.998 0 00-.06-1.81L8.4.08a1.006 1.006 0 00-.79 0l-6.99 3a.992.992 0 00-.07 1.81zM15 10c-.16 0-.31.04-.45.11L8 13.38 1.45 10.1c-.14-.06-.29-.1-.45-.1-.55 0-1 .45-1 1 0 .39.23.73.55.89l7 3.5c.14.07.29.11.45.11s.31-.04.45-.11l7-3.5c.32-.16.55-.5.55-.89 0-.55-.45-1-1-1zm0-3.5c-.16 0-.31.04-.45.11L8 9.88 1.45 6.61A.997.997 0 001 6.5c-.55 0-1 .45-1 1 0 .39.23.73.55.89l7 3.5c.14.07.29.11.45.11s.31-.04.45-.11l7-3.5c.32-.16.55-.5.55-.89 0-.55-.45-1-1-1z",fillRule:"evenodd"})}),Upload:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:e("path",{d:"M8.71 7.29C8.53 7.11 8.28 7 8 7s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L7 10.41V15c0 .55.45 1 1 1s1-.45 1-1v-4.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zM12 4c-.03 0-.07 0-.1.01A5 5 0 002 5c0 .11.01.22.02.33a3.495 3.495 0 00.07 6.37c-.05-.23-.09-.46-.09-.7 0-.83.34-1.58.88-2.12l3-3a2.993 2.993 0 014.24 0l3 3c.54.54.88 1.29.88 2.12 0 .16-.02.32-.05.47C15.17 10.78 16 9.5 16 8c0-2.21-1.79-4-4-4z",fillRule:"evenodd"})}),Size:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:e("path",{d:"M3.41 2H5c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v4c0 .55.45 1 1 1s1-.45 1-1V3.41L5.29 6.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L3.41 2zM6 9c-.28 0-.53.11-.71.29L2 12.59V11c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.41l3.29-3.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1zm9 1c-.55 0-1 .45-1 1v1.59L10.71 9.3A.965.965 0 0010 9a1.003 1.003 0 00-.71 1.71l3.3 3.29H11c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm0-10h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 001.42 1.42L14 3.41V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z",fillRule:"evenodd"})})};function k({name:u,onClick:i,active:r}){const c=h.use(),l=s.exports.useMemo(()=>n(A,{children:[e("div",{children:y[u]}),e("p",{children:c.SidePanel[u]})]}),[c.SidePanel,u]);return e(f,{className:r?"active":"",onClick:()=>i(u),children:l})}const b=a(o)`
  display: flex;
  height: 100%;
  width: auto;
  position: relative;
  color: ${t.colors.designer[1]};
`,T=a(o)`
  overflow-y: auto;
  overflow-x: hidden;
`,S=a(o)`
  padding: 10px;
  width: 350px;
  height: 100%;
  background-color: ${t.colors.designer[2]};
`,H=a(o)`
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translate(0, -50%);
  height: 96px;
  width: 15px;
  cursor: pointer;
  z-index: 10;
  & path {
    fill: ${t.colors.designer[2]};
  }
  & > div:last-of-type {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleY(2);
    font-size: 0.5rem;
  }
`,M=["Template","Text","Image","Element","Background","Layer","Upload","Size"];function C({sections:u,defaultSection:i}){const[r,c]=s.exports.useState(i),l=s.exports.useCallback(d=>{c(d)},[]),B=s.exports.useMemo(()=>n(H,{onClick:()=>c(null),children:[e("svg",{width:"15",height:"96",viewBox:"0 0 15 96",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M3 0 C3.0011 4.42584 3.9102 9.9 7.2 13.28C7.45 13.4625 7.6 13.6 7.7 13.8048L7.8 13.8C9.8 15.8 11.6 17.6 12.9 19.7C14.0 21.6 14.7 23.9 14.9 27H15V68C15 71.7 14.3 74.3 13.0 76.6C11.7 78.8 9.9 80.5 7.8 82.6344L7.79 82.6C7.6 82.8 7.4507 83 7.27295 83.2127C3.9102 86.5228 3.0011 92.0739 3 95.4938"})}),e("div",{children:"<"})]}),[]);return n(b,{children:[e(T,{children:u.map(d=>e(k,{name:d,onClick:l,active:r===d},d))}),r&&e(S,{}),r&&B]})}C.defaultProps={sections:M,defaultSection:null};const L=a(o)`
  width: 100vw;
  height: 100vh;
  background-color: ${t.colors.designer[8]};
`,R=a(o)`
  display: flex;
  width: 100%;
  height: calc(100% - 50px);
`,P=a(o)`
  height: 100%;
  width: auto;
  background-color: ${t.colors.designer[3]};
`,V=a(o)`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
  position: relative;
`,I=()=>{const[u,i]=s.exports.useState(window.innerHeight);return s.exports.useEffect(()=>{const r=()=>{i(window.innerHeight)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),u};function O(){return I(),n(L,{children:[e(z,{}),n(R,{children:[e(P,{children:e(C,{})}),e(V,{children:"Workspace"})]})]})}function $(){const{state:u}=w();return u.location.search,e(O,{})}export{$ as default};
