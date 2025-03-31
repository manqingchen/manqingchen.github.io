import{g as D,i as B,u as L,r as z,f as k,aO as q,s as N,aP as V,aQ as W,aR as K,n as c,B as x,k as r,T as b,aS as Q,I as A,j as i,aT as G,d as C,v as H,Q as J,aU as X,aV as Y,aW as Z,L as _}from"./index.b13d347f.js";import{g as ee,d as F,a as ne}from"./index.383a2cf9.js";import{d as te,e as ae,f as oe,c as ie}from"./index.6be00e2e.js";import{f as se,g as ce}from"./index.7dbda1c3.js";var n=(e=>(e.Case="case",e.Content="content",e.Template="template",e.Image="image",e.ResourcePack="resourcePack",e.RecycleBin="recycleBin",e))(n||{});async function nn(e){return D({url:"/design/recycle/v1/list",data:e})}async function le(e){return D({url:"/design/content/v1/addToRecycleBin",data:e})}async function tn(e){return D({url:"/design/recycle/v1/batchDelete",data:e})}async function re(e){return D({url:"/design/recycle/v1/delete",data:e})}async function de(e){return D({url:"/design/recycle/v1/restore",data:e})}const ue=[n.Content],pe=[n.Content],he=[n.Content],ge=[n.Template],me=[n.Image],xe=[n.Template,n.ResourcePack],we=[n.Case,n.Content,n.Template,n.Image,n.ResourcePack],fe=[n.RecycleBin],ye=[n.RecycleBin],Ce=ee(),be=[{id:"png",name:"PNG"}],ke=[n.Case];async function Te(e,a){return{[n.Case]:se,[n.Content]:le,[n.Template]:V,[n.Image]:W,[n.ResourcePack]:K}[e](a)}function ve(e){const{type:a,$onRefreshList:s,handlePreviewTemplate:w,setShowCaseDetail:d}=e,o=B.use(),u=L(),[m,f]=z.exports.useState(!1),y=()=>{f(!0)},p=()=>{f(!1)},T=async t=>{await te({contentId:t.id})&&(p(),await s(),k.show({message:o.Toast.SuccessCopy}))},l=async(t,g)=>{const I=await ae({contentId:t.id,targetLanguage:g});p(),u({to:`/designer?contentId=${String(I)}`})},P=(t,g)=>{F(t.title,t.previewUrl),k.show({message:o.Toast.SuccessDownload})},v=t=>{w(t)},R=t=>{F(t.title,t.previewUrl),k.show({message:o.Toast.SuccessDownload})},j=async t=>{let g="";if(t.type===n.ResourcePack){const{url:I}=await q({id:t.id});g=I}t.type===n.Template&&(g=t.sampleUrl),g&&(ne(`${t.title}`,g),k.show({message:o.Toast.SuccessDownload}))},h=async t=>{await Te(a,{id:t.id})&&(p(),await s(),k.show({message:o.DesignCard.MoveRecycleBinSuccess}))},$=async t=>{await de({id:t.id})&&(p(),await s(),k.show({message:o.Toast.RestSuccess}))},M=t=>{p(),N.confirm({width:382,height:204,title:o.RecycleBin.Delete,content:o.RecycleBin.DeletePermanentlyDesc,onOk:async()=>{await re({id:t.id})&&(await s(),k.show({message:o.Toast.DeleteSuccess}))}})},U=t=>{d(t)};return{actionList:[{arrow:!1,auth:ue.includes(a),icon:"a-shejikongjianfuzhifuben",name:o.CardOperate.Duplicate,onClick:T},{arrow:!0,auth:pe.includes(a),icon:"a-shejikongjianduoyuyanfuben",name:o.CardOperate.CreateMultilingualCopies,menu:Ce.map(t=>({...t,onClick:l}))},{arrow:!0,auth:he.includes(a),icon:"a-shejikongjianxiazai",name:o.CardOperate.Download,menu:be.map(t=>({...t,onClick:P}))},{arrow:!1,auth:ge.includes(a),icon:"a-shejikongjianyulanmoban",name:o.CardOperate.PreviewThisTemplate,onClick:v,menu:[]},{arrow:!1,auth:me.includes(a),icon:"a-shejikongjianxiazai",name:o.CardOperate.DownloadImageOriginalFile,onClick:R},{arrow:!1,auth:xe.includes(a),icon:"a-shejikongjianxiazai",name:o.CardOperate.DownloadThisResourcePackFile,onClick:j},{arrow:!1,auth:ke.includes(a),icon:"a-shejikongjianyulanmoban",name:o.CardOperate.ViewThisCaseDetail,onClick:U},{arrow:!1,auth:we.includes(a),icon:"a-mobanshanchu",name:o.CardOperate.MoveRecycleBin,onClick:h},{arrow:!1,auth:fe.includes(a),icon:"a-huishouzhanhuanyuan",name:o.RecycleBin.Revert,onClick:$},{arrow:!1,auth:ye.includes(a),icon:"a-mobanshanchu",name:o.CardOperate.DeletePermanently,onClick:M}].filter(t=>t.auth),openActionPanel:m,handleOpenActionPanel:y,handleCloseActionPanel:p}}const De=c(x)`
  width: 254px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px 0px rgba(0, 0, 0, 0.08),
    0px 9px 28px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${()=>r("colors.emphasis.0")};
  //max-height: 325px;
  //overflow: scroll;
`,Pe=c(x)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 8px;
  right: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(1, 102, 250, 0.7);
  }
`,$e=c(x)`
  padding: 16px;
  border-bottom: 1px solid ${()=>r("colors.ipaintter.7")};
`,Ae=c(b)`
  display: block;
  font-weight: 500;
  font-size: 14px;
  color: ${()=>r("colors.ipaintter.3")};
`,Re=c(b)`
  display: block;
  margin: 8px 0;
  color: ${()=>r("colors.ipaintter.5")};
  font-size: ${()=>r("sizes.s3")};
`,je=c(b)`
  display: block;
  color: ${()=>r("colors.ipaintter.6")};
  font-size: ${()=>r("sizes.s3")};
`,S=c(b)`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${()=>r("colors.ipaintter.5")};
`,Ie=c(x)`
  padding: 16px;
  max-height: 140px;
  overflow: hidden;
  border-bottom: 1px solid ${()=>r("colors.ipaintter.7")};
`,ze=c(x)`
  display: flex;
  flex-wrap: wrap;
`,Be=c(Q)`
  margin-top: 10px;
  margin-right: 10px;
`,Fe=c(x)`
  padding: 8px 0;
`,Le=c(A)`
  margin-right: 8px;
`,O=c(x)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(1, 102, 250, 0.1);

    .menu-list {
      display: block;
    }
  }
`,Se=c(x)`
  width: 254px;
  position: absolute;
  top: 0;
  left: 253px;
  background-color: ${()=>r("colors.emphasis.0")};
  box-shadow: 6px 3px 6px -4px rgb(0 0 0 / 12%), 16px 6px 16px 0px rgb(0 0 0 / 8%),
    28px 9px 28px 8px rgb(0 0 0 / 5%);
  display: none;
`;function Oe({tags:e=[],type:a}){const s=B.use(),w={[n.Template]:s.CardOperate.TemplateLabelSet,[n.Case]:s.CardOperate.CaseLabelSet},d=["#52C41A","#1890FF","#FAAD14","#FF4D4F"];return![n.Template,n.Case].includes(a)||!(e!=null&&e.length)?null:C(Ie,{children:[i(S,{children:w[a]}),i(ze,{children:e.map((u,m)=>i(Be,{color:d[m%4],children:u},u))})]})}function Ee({menu:e=[],cardItem:a}){return i(Se,{className:"menu-list",children:e.map(s=>i(O,{onClick:()=>s.onClick(a,s.id),children:i(b,{children:s.name})},s.id))})}function E(e){const{type:a,tags:s,width:w,height:d,unit:o,title:u,subTitle:m,gmtModifiedI18n:f,handlePreviewTemplate:y,$onRefreshList:p,setShowCaseDetail:T}=e,l=B.use(),{actionList:P,openActionPanel:v,handleOpenActionPanel:R,handleCloseActionPanel:j}=ve({type:a,$onRefreshList:p,handlePreviewTemplate:y,setShowCaseDetail:T});return i(G,{trigger:i(Pe,{className:"actions",onClick:R,children:i(A,{type:"a-shejikongjiangengduocaozuo",color:"#fff"})}),zIndex:700,visible:v,onClose:j,children:C(De,{children:[C($e,{children:[i(Ae,{lineClamp:2,children:u}),C(Re,{children:[`${m}\uFF0C`||"",`${w} \xD7 ${d} ${o}`]}),i(je,{children:`${l.DesignSpace.EditedAt}  ${f}`})]}),i(Oe,{type:a,tags:s}),i(Fe,{children:P.map(h=>C(O,{onClick:()=>{var $;return($=h.onClick)==null?void 0:$.call(h,e)},children:[C(S,{children:[i(Le,{type:h.icon,size:24}),h.name]}),h.arrow&&i(A,{type:"a-shejikongjianxiayibu",size:24}),h.arrow&&i(Ee,{menu:h.menu,cardItem:e})]},h.name))})]})})}E.defaultProps={handlePreviewTemplate:()=>{},setShowCaseDetail:()=>{},$onRefreshList:()=>Promise.resolve()};const Me=c(x)`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    text-decoration: underline;

    svg {
      display: block !important;
    }
  }
`,Ue=c(b)`
  font-weight: 500;
  color: ${()=>r("colors.ipaintter.3")};
  font-size: 14px;
  max-width: calc(100% - 24px);
`,qe=c(H)`
  height: initial;
  font-weight: 500;
  color: ${()=>r("colors.ipaintter.3")};
  font-size: 14px;
  padding: 0;
`,Ne=c(A)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: none !important;
`,Ve=c(b)`
  display: inline-block;
  padding: 7px 9px;
  max-width: 256px;
  font-size: 14px;
  line-height: 22px;
  color: ${()=>r("colors.ipaintter.0")};
  background-color: ${()=>r("colors.ipaintter.3")};
  border-radius: ${()=>r("radii.s")};
`;async function We(e,a){return{[n.Case]:ce,[n.Content]:oe,[n.Template]:X,[n.Image]:Y,[n.ResourcePack]:Z}[e](a)}function Ke(e){const{id:a,type:s,title:w}=e,[d,o]=z.exports.useState(w),[u,m]=z.exports.useState(!1),f=l=>{l.stopPropagation(),m(!0)},y=async()=>{await We(s,{id:a,name:d})&&m(!1)},p=async l=>{l.key==="Enter"&&await y()};return C(Me,{children:[!u&&i(J,{arrowStyle:{color:"#333"},title:i(Ve,{children:d}),children:i(Ue,{truncated:!0,children:d})}),u&&i(qe,{autoFocus:!0,value:d,shape:"simple",onChange:l=>{o(l)},onBlur:y,onKeyDown:l=>p(l)}),s!==n.RecycleBin&&i(Ne,{size:24,color:"#333",type:"a-mobanbianji",onClick:l=>f(l)})]})}const Qe=c(x)`
  position: relative;
  width: 254px;
  margin-right: 32px;

  &:hover {
    .actions {
      display: flex;
    }

    img {
      transition: all 0.3s;
      transform: scale(1.1);
    }
  }

  &:nth-of-type(4n) {
    margin-right: 0;
  }
`,Ge=c(_)`
  width: 100%;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 16px;
  transition: all 0.3s;
  cursor: pointer;
  object-fit: cover;
`,He=c(b)`
  display: block;
  margin: 8px 0 15px 0;
  color: ${()=>r("colors.ipaintter.6")};
  font-size: ${()=>r("sizes.s3")};
`;function an(e){const{id:a,type:s,previewUrl:w,title:d,subTitle:o,width:u,height:m,unit:f,subTitleEnable:y=!0,setShowCaseDetail:p,...T}=e,l=L();return C(Qe,{...T,children:[i(Ge,{src:w,onClick:()=>{s===n.Content&&l({to:`/designer?contentId=${String(a)}`}),s===n.Template&&ie({templateId:a}).then(v=>l({to:`/designer?contentId=${String(v)}`})).catch(()=>{})}}),i(Ke,{id:a,type:s,title:d}),i(He,{truncated:!0,children:y?`${o}\uFF0C${u} x ${m} ${f}`:""}),i(E,{...e})]})}export{n as D,an as a,tn as b,nn as r};
