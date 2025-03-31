import{u as N,aK as $,r,aL as z,aM as U,M as j,i as q,aN as O,j as a,O as W,d as y,F as H,I as G,n as c,B as F,k as S,T as P,l as K}from"./index.b13d347f.js";import{D as e,a as b}from"./index.11830267.js";import{E as V}from"./index.1020cbf5.js";import{b as J}from"./index.6be00e2e.js";import{e as Q}from"./index.7dbda1c3.js";import{T as X}from"./TemplatePreview.13c17158.js";import{C as Y}from"./index.89c59b66.js";import"./index.383a2cf9.js";import"./index.2133eac1.js";async function v(s,i){return{[e.Case]:Q,[e.Content]:J,[e.Template]:z,[e.Image]:U,[e.ResourcePack]:j}[s](i)}const L=[{type:e.Case,name:"\u6848\u4F8B"},{type:e.Content,name:"\u5185\u5BB9"},{type:e.Template,name:"\u6A21\u7248"},{type:e.Image,name:"\u56FE\u7247"}];var Z=()=>{const s=N(),{type:i=L[0].type}=$(),[d,B]=r.exports.useState(""),[o,C]=r.exports.useState(i),[g,m]=r.exports.useState([]),[u,D]=r.exports.useState([]),[p,l]=r.exports.useState(),x=r.exports.useCallback(async()=>{const{list:t}=await v(e.Content,{limit:4,pageRequest:{pageNo:1,startRow:0,pageSize:4}});m(t)},[]),h=r.exports.useCallback(async()=>{const{list:t}=await v(o,{limit:1e4,pageRequest:{pageNo:1,startRow:0,pageSize:1e4}});D(t)},[o]),E=async()=>{await x(),await h()};r.exports.useEffect(()=>{(async()=>await x())()},[x]),r.exports.useEffect(()=>{(async()=>await h())()},[h]);const w=t=>{C(t)},T=t=>{l(t)},n=()=>{l(null)},R=()=>{let t=u.findIndex(A=>A.id===p.id);t>0?t-=1:t=u.length-1,l(u[t])},k=()=>{let t=u.findIndex(A=>A.id===p.id);t<u.length-1?t+=1:t=0,l(u[t])},f=()=>{o===e.Content&&s({to:"/designer"}),o===e.Template&&s({to:"/market"}),o===e.Case&&s({to:"/creativeCase"})},M={[e.Case]:{description:"\u60A8\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6848\u4F8B\u8D44\u6E90\u54E6\uFF0C\u8D76\u5FEB\u53BB\u770B\u770B\u5427\uFF5E",actionText:"\u6848\u4F8B\u5E02\u573A",onAction:f},[e.Content]:{description:"\u60A8\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6A21\u7248\u8D44\u6E90\u54E6\uFF0C\u8D76\u5FEB\u53BB\u770B\u770B\u5427\uFF5E",actionText:"\u8BBE\u8BA1\u6A21\u7248",onAction:f},[e.Template]:{description:"\u60A8\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6A21\u7248\u8D44\u6E90\u54E6\uFF0C\u8D76\u5FEB\u53BB\u770B\u770B\u5427\uFF5E",actionText:"\u6A21\u7248\u5E02\u573A",onAction:f},[e.Image]:{description:"\u60A8\u8FD8\u6CA1\u6709\u4EFB\u4F55\u56FE\u7247\u8D44\u6E90\u54E6\uFF0C\u8D76\u5FEB\u53BB\u4E0A\u4F20\u5427\uFF5E"},[e.ResourcePack]:{description:"\u60A8\u8FD8\u6CA1\u6709\u4EFB\u4F55\u8D44\u6E90\u5305\u54E6\uFF0C\u8D76\u5FEB\u53BB\u4E0A\u4F20\u5427\uFF5E"}};return{tabList:L,designList:u,recentDesignList:g,designSpaceType:o,previewData:p,showCaseDetail:d,setShowCaseDetail:t=>{B(t.id.toString())},handleChangeTab:w,$onRefreshList:E,handlePreviewTemplate:T,handleClosePreviewTemplate:n,handlePreviewTemplatePrev:R,handlePreviewTemplateNext:k,handleGotoCaseMarket:f,emptyInfo:M[o]}};const _=c(F)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 26px;
  border-radius: 8px;
  background-color: ${()=>S("colors.emphasis.0")};
  box-shadow: 0px 0px 4px 1px rgba(237, 237, 237, 0.5);
`,ee=c(P)`
  font-size: 20px;
  font-weight: 500;
  color: ${()=>S("colors.emphasis.80")};
`,I=c(F)`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  margin: 24px 0 40px 0;
`,te=c(F)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`,ae=c(P)`
  padding: 0 12px 8px 12px;
  font-size: 20px;
  margin-right: 40px;
  cursor: pointer;

  ${({active:s,theme:i})=>({fontWeight:s?500:"initial",color:s?i.colors.ipaintter[5]:i.colors.ipaintter[6],borderBottom:`2px solid ${s?i.colors.ipaintter[4]:"transparent"}`})}

  &:hover {
    color: ${()=>S("colors.ipaintter.5")};
  }
`,se=c(F)`
  width: 100%;
  height: 58px !important;
  text-align: center;
  line-height: 58px;
  cursor: pointer;
`,ne=c(K)`
  width: 116px;
  height: 36px;
  border: 1px solid rgba(34, 34, 34, 1);
  border-radius: 4px;
  font-size: 13px;
  color: #000;
  text-align: center;
  font-weight: 600;
  margin-right: 20px;
`,ie=c(F)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;function he(){const s=q.use(),{designSpaceType:i,designList:d,tabList:B,recentDesignList:o,previewData:C,emptyInfo:g,showCaseDetail:m,setShowCaseDetail:u,handleChangeTab:D,$onRefreshList:p,handlePreviewTemplate:l,handleClosePreviewTemplate:x,handlePreviewTemplatePrev:h,handlePreviewTemplateNext:E}=Z(),w=O({type:"image",to:"/design-space?type=image",cb:()=>{D(e.Image)}}),T=a(W,{accept:"image/*",onChange:w,children:a(se,{children:s.Header.UploadResource.UploadPic})});return y(_,{children:[o.length>0&&y(H,{children:[a(ee,{children:s.DesignSpace.RecentDesigns}),a(I,{children:o.map(n=>a(b,{type:e.Content,$onRefreshList:p,...n},n.id))})]}),y(ie,{children:[a(te,{children:B.map(n=>a(ae,{onClick:()=>D(n.type),active:i===n.type,children:n.name},n.type))}),a(ne,{type:"secondary",leftElement:a(G,{size:24,type:"a-titleshangchuan"}),children:T})]}),y(I,{flex:1,children:[d.map(n=>a(b,{type:i,handlePreviewTemplate:l,setShowCaseDetail:u,$onRefreshList:p,...n},n.id)),d.length===0&&a(V,{description:g.description,actionText:g.actionText,onAction:g.onAction})]}),a(X,{visible:!!C,dataSource:C,onClose:x,onPrev:h,onNext:E}),m&&a(Y,{visible:!!m,onClose:()=>u({id:""}),caseID:m})]})}export{he as default};
