import{r as n,i as C,j as e,T as y,d as p,F as T,t as i,B as s,I as v,n as r,h as U,a as j,f as D,D as P}from"./index.b13d347f.js";import{b as A,a as R,d as E}from"./index.7dbda1c3.js";import{u as L,D as M,B as N}from"./index.2133eac1.js";import{T as S}from"./TemplatePreview.13c17158.js";const W=r(s)`
  position: relative;
  height: 908px;
`,q=r(s)`
  position: relative;
  width: 100%;
  height: 800px;
  border-radius: 8px;
  background-color: ${i.colors.ipaintter[1]};
  overflow: hidden;
  &:hover > div.previewInfo {
    display: flex;
  }
`,F=r(U)`
  display: block;
  width: 800px;
  height: 800px;
  margin: 0 auto;
  object-fit: scale-down;
`,$=r(v)`
  position: absolute;
  top: 50%;
  ${({arrow:t})=>t==="left"?"left: 20px;transform: translateY(-50%);":"right: 20px;transform: translateY(-50%) rotate(180deg);"}
  width: 40px;
  height: 40px;
  cursor: pointer;
`,Y=r(s)`
  display: none;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 76px;
  padding: 0 240px;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 20px;
  font-weight: 400;
  color: ${i.colors.emphasis[0]};
`,_=r(s)`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    border-radius: 3px;
    width: 80px;
    height: 6px;
    margin: 0 5px;
    background-color: ${i.colors.ipaintter[1]};
  }
  ${({active:t})=>`
    > div:nth-of-type(${t}) {
      background-color: ${i.colors.gray[40]};
    }
  `}
`,G=r(s)`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 40px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${i.colors.emphasis[50]};
  > span {
    margin-left: 5px;
  }
`;function H({dataSource:t,visible:l}){const[a,x]=n.exports.useState(),[c,g]=n.exports.useState(),d=C.use(),h=n.exports.useRef();n.exports.useLayoutEffect(()=>{t.sampleImageUrls.length>0&&(x(0),g(t.sampleImageUrls[0]))},[t.sampleImageUrls]);const u=n.exports.useCallback(()=>{if(t.sampleImageUrls.length===0)return;let o=a-1;o<0&&(o=t.sampleImageUrls.length-1),x(o),g(t.sampleImageUrls[o])},[a,t.sampleImageUrls]),f=n.exports.useCallback(()=>{if(t.sampleImageUrls.length===0)return;let o=a+1;o>t.sampleImageUrls.length-1&&(o=0),x(o),g(t.sampleImageUrls[o])},[a,t.sampleImageUrls]),m=n.exports.useMemo(()=>e(Y,{className:"previewInfo",children:t.exposureInfos.map(o=>e(y,{children:`${o.type} > ${o.value}`},o.code))}),[t.exposureInfos]);return n.exports.useEffect(()=>(window.clearInterval(h.current),l&&(h.current=window.setInterval(()=>{f()},3e3)),()=>window.clearInterval(h.current)),[f,l]),p(W,{children:[p(q,{children:[e(F,{src:c},`${a}_${c}`),t.sampleImageUrls.length>1&&p(T,{children:[a>0&&e($,{arrow:"left",type:"a-yulantudanchuanglunbozuo",color:i.colors.gray[40],onClick:u}),a<t.sampleImageUrls.length-1&&e($,{arrow:"right",type:"a-yulantudanchuanglunbozuo",color:i.colors.gray[40],onClick:f})]}),m]}),t.sampleImageUrls.length>1&&e(_,{active:a+1,children:t.sampleImageUrls.map((o,b)=>e(s,{},`${b+1}`))}),p(G,{children:[e(v,{type:"a-anlixiangqingbeizhu",size:14,color:i.colors.emphasis[40]}),e(y,{children:d.Case.DataTip})]})]})}const J=r(s)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-first;
  padding-bottom: 60px;
  & > div {
    margin: 0 19px 20px 0 !important;
  }
  & > div:nth-of-type(3n) {
    margin: 0 0 20px !important;
  }
`;function K({caseID:t}){const[l,a]=n.exports.useState([]),{onClose:x,onNext:c,onPrev:g,setPreviewTemplate:d,previewTemplate:h}=L({list:l}),u=C.use(),f=n.exports.useMemo(()=>{const m={width:"320px",height:"234px"};return l.map(o=>e(M,{setPreviewTemplate:d,path:"/market",dataSource:o,name:u.Button.Template,showDesc:!1,customStyle:m},o.id))},[u.Button.Template,l,d]);return n.exports.useEffect(()=>{A({id:t,pageRequest:{pageNo:1,pageSize:6}}).then(m=>a(m)).catch(()=>{})},[t]),p(T,{children:[e(J,{children:f}),h&&e(S,{dataSource:h,onClose:x,onPrev:g,onNext:c})]})}const O=r(s)`
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  border-radius: 25px 25px 0 0;
  background-color: ${i.colors.emphasis[0]};
  overflow: auto;
`,Q=r(s)`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  padding: 17px;
  cursor: pointer;
`,V=r(s)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 0 30px;
  color: ${i.colors.emphasis[80]};
`,X=r(y)`
  line-height: 28px;
  font-size: 20px;
  font-weight: 500;
  word-break: break-all;
  max-width: calc(100% - 180px);
`,Z=r(U)`
  width: 28px;
  height: 28px;
  margin: 0 auto 0 16px;
`,ee=r(s)`
  width: 95px;
  height: 28px;
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  > span {
    line-height: 22px;
    font-size: 16px;
    font-weight: 500;
  }
`,k=r(s)`
  line-height: 33px;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 30px;
  color: ${i.colors.emphasis[80]};
`,te=r(s)`
  line-height: 28px;
  font-size: 20px;
  font-weight: 400;
  padding: 10px 0 40px;
  color: ${i.colors.emphasis[80]};
  border-top: 1px solid ${i.colors.emphasis[20]};
  display: flex;
  > div:first-of-type {
    width: 130px;
    padding: 30px 50px 0 0;
  }
  > div:last-of-type {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`,se=r(s)`
  width: ${({row:t})=>t?"870":"290"}px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > span:first-of-type {
    width: 113px;
    color: ${i.colors.emphasis[50]};
  }
  > span:last-of-type {
    flex: 1;
    word-break: break-all;
  }
`,oe=r(s)`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`,ne=["text","title"];function ie(t){const{caseID:l,visible:a,onClose:x}=t,[c,g]=n.exports.useState(),d=C.use(),h=n.exports.useRef(),{state:u}=j(),{location:f}=u,{pathname:m}=f,o=n.exports.useMemo(()=>m!=="/design-space",[m]),b=n.exports.useCallback(()=>{R({id:l}).then(()=>D.show({type:"success",message:d.Toast.AddSuccess})).catch(()=>{})},[l,d.Toast.AddSuccess]),z=n.exports.useMemo(()=>e(oe,{onClick:b,children:e(v,{type:"a-xuantingtianjia",size:28,color:"#fff"})}),[b]);n.exports.useEffect(()=>{!l||E({id:l}).then(w=>g(w)).catch(()=>{})},[l]);const B={backgroundColor:`${i.colors.emphasis[80]}cc`,boxShadow:"none",padding:0};return n.exports.useEffect(()=>{h.current&&h.current.scrollTo(0,0)}),p(P,{zIndex:801,width:"100vw",height:"100vh",mask:!1,visible:a,placement:"bottom",drawerStyle:B,onClose:x,children:[e(s,{width:"100%",height:"50px",onClick:x,children:e(Q,{children:e(v,{type:"a-tishiguanbi",size:16,color:i.colors.emphasis[0]})})}),e(O,{id:"drawer-wrap",ref:h,children:c&&p(s,{width:"1000px",margin:"0 auto",children:[p(V,{children:[e(X,{children:c.name}),e(Z,{src:c.placementTypeIcon},c.id),o&&p(ee,{onClick:b,children:[e(v,{type:"a-xuantingtianjia",size:24,color:i.colors.emphasis[100]}),e(y,{children:d.Case.Add})]})]}),e(H,{dataSource:c,visible:a}),p(s,{marginBottom:"40px",borderBottom:`1px solid ${i.colors.emphasis[20]}`,children:[e(k,{children:d.Case.Detail}),c.tagDetailInfos.map(w=>p(te,{children:[e(s,{children:w.title}),e(s,{children:w.sampleDetailInfos.map(I=>p(se,{row:ne.includes(I.code),children:[e(y,{children:I.type}),e(y,{children:I.value})]},I.type+I.code))})]},w.title+w.code))]}),p(s,{children:[e(k,{children:d.Case.RecommendTemplate}),e(K,{caseID:l})]})]})}),a&&e(N,{getContainer:h.current,step:500,topElement:o&&z})]})}ie.defaultProps={visible:!1};export{ie as C};
