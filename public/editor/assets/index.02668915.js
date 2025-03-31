import{n,B as a,v as me,I as S,h as X,i as R,z as q,r as d,d as u,j as e,O as ye,L as Z,l as N,A as $,H as L,J as V,K as _,M as be,F as J,D as fe,N as ee,u as ue,P as ke,T as te,Q as De,S as O,U as B,V as ne,W as oe,f as se,X as Qe,b as j,w as Pe,Y as Fe,Z as Se,_ as Ge,a as Te,$ as Ie}from"./index.b13d347f.js";import{u as ve,b as Ee,P as we,n as Ue}from"./App.c0b721e3.js";import{a as ze}from"./index.6be00e2e.js";import{T as xe}from"./TemplatePreview.13c17158.js";import{F as Re}from"./index.d10eff4b.js";import{E as Be}from"./index.1020cbf5.js";import"./debounce.609f38a4.js";import"./ResizeObserver.1403e5c6.js";var U=(t=>(t.manual="manual",t.pack="pack",t))(U||{});const Le=n(a)`
  padding-left: 24px;
  padding-right: 24px;
`,Me=n(a)`
  padding-right: 10px;
`,Oe=n(a)`
  margin-top: 43px;
  margin-bottom: 16px;
`,je=n(a)``,He=n(a)`
  height: 20px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222222;
  font-weight: 400;
`,We=n(a)``,H=n(a)`
  height: 20px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 8px;
`,W=n(me)`
  border-radius: 4px;
  &: input::-webkit-input-placeholder {
    color: red;
  }
`,Je=n(a)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,Ne=n(a)`
  width: 103px;
  height: 100px;
  background: #ffffff;
  border: 0.5px solid rgba(216, 216, 216, 1);
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  text-align: center;
  line-height: 16px;
  font-weight: 400;
`,qe=n(S)`
  margin-bottom: 10px;
`,Ve=n(a)`
  position: relative;
  width: 103px;
  height: 100px;
  border: 0.5px solid rgba(216, 216, 216, 1);
  border-radius: 4px;
  margin-bottom: 16px;
  overflow: hidden;
`,Ke=n(S)`
  position: absolute;
  cursor: pointer;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,Ye=n(a)`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  transition: opacity 0.3s ease-in-out;
`,Xe=n(X)``;function Ze(){const t=R.use(),{changeManualResource:o,manualResource:i}=q(),c=(g,w)=>{o(g,w)},p=d.exports.useMemo(()=>[{title:t.TemplateEditorPage.UploadBackgroundImage,key:"UploadBackgroundImage"},{title:t.TemplateEditorPage.UploadMainImage,key:"UploadMainImage"},{title:t.TemplateEditorPage.UploadSecondaryImage,key:"UploadSecondaryImage"},{title:t.TemplateEditorPage.Logo1,key:"Logo1"},{title:t.TemplateEditorPage.Logo2,key:"Logo2"}],[t.TemplateEditorPage.Logo1,t.TemplateEditorPage.Logo2,t.TemplateEditorPage.UploadBackgroundImage,t.TemplateEditorPage.UploadMainImage,t.TemplateEditorPage.UploadSecondaryImage]),x=(g,w)=>{const A=g;let{key:h}=w;switch(A.status){case"uploaded":h==="Logo2"&&!i.Logo1&&(h="Logo1"),c(h,A.url);break}};return u(Le,{children:[u(Me,{children:[e(Oe,{children:t.TemplateEditorPage.UploadImage}),e(Je,{children:p.map(g=>i[g.key]?u(Ve,{children:[e(Ye,{children:e(Ke,{onClick:()=>c(g.key,""),color:"#fff",size:20,type:"a-mobanshanchu"})}),e(Xe,{style:{width:103,height:100},src:i[g.key]})]},g.key):e(ye,{accept:"image/*",onChange:w=>x(w,g),children:u(Ne,{children:[e(qe,{type:"a-mobanxuanze",color:"#ccc"}),g.title]})},g.key))})]}),u(je,{children:[e(He,{children:t.TemplateEditorPage.TestInput}),u(We,{children:[e(H,{children:t.TemplateEditorPage.ProductSellingPoint}),e(W,{style:{background:"#fff",fontSize:14},max:20,value:i.ProductSellingPoint,onChange:g=>c("ProductSellingPoint",g)}),e(H,{children:t.TemplateEditorPage.MarketingSellingPoint}),e(W,{style:{background:"#fff",fontSize:14},max:20,value:i.MarketingSellingPoint,onChange:g=>c("MarketingSellingPoint",g)}),e(H,{children:t.TemplateEditorPage.ServiceSellingPoint}),e(W,{style:{background:"#fff",fontSize:14},max:20,value:i.ServiceSellingPoint,onChange:g=>c("ServiceSellingPoint",g)}),e(H,{children:t.TemplateEditorPage.Text}),e(W,{style:{background:"#fff",fontSize:14},max:20,value:i.Text,onChange:g=>c("Text",g)})]})]})]})}const $e=n(a)`
  margin-left: 24px;
  margin-top: 30px;
  margin-bottom: 21px;
  height: 20px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222222;
  font-weight: 400;
`,_e=n(a)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 24px;
`,et=n(a)`
  width: 103px;
  height: 100px;
  background: #fff;
  padding: 5px 5px 0;
  margin-bottom: 16px;
  margin-right: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding-top: 5px;
  border: 0.5px dashed rgba(216, 216, 216, 1);
`,tt=n(a)`
  width: 93px;
  height: 70px;
  position: relative;
`,nt=n(a)`
  margin: 32px 0 0 40px;
  height: 28px;
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #222222;
  font-weight: 500;
`,ot=n(a)`
  margin: 32px 0 0 40px;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,rt=n(a)`
  width: 254px;
  height: 236px;
  background: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  margin-right: 32px;
`,at=n(a)`
  margin-top: 16px;
  margin-bottom: 8px;
  height: 20px;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #333333;
  font-weight: 500;
`,it=n(a)`
  height: 17px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  font-weight: 400;
`,st=n(Z)`
  width: 254px;
  height: 160px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ct=n(a)`
  z-index: 200;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  top: 0;
`,lt=n(S)``,pt=n(a)`
  height: 108px;
  display: flex;
  flex-direction: row;
  // justify-content: center;
  align-items: center;
  border-top: 1px solid #e8e8e8;
  padding-left: 32px;
`,dt=n(a)``,ce=n(N)`
  margin-left: 20px;
`,gt=n(a)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  width: 100%;
  height: 100%;
  z-index: 200;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  transition: opacity 0.3s ease-in-out;
`,ht=n(a)`
  width: 93px;
  height: 70px;
`,ft=n(a)`
  width: 93px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`,ut=n(a)`
  height: 16px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  text-align: center;
  line-height: 16px;
  font-weight: 400;
  margin-top: 10px;
`,wt=n(a)`
  overflow: hidden;
  height: 17px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #222222;
  font-weight: 400;
  text-align: center;
`;function xt(){const t=R.use(),[o,i]=d.exports.useState([]),[c,p]=d.exports.useState(!1),[x,g]=d.exports.useState(new Array(4).fill("")),{resourcePacks:w,changeResourcePackList:A,pushCheckedResourcePack:h}=$(),{clearTemplate:k}=L(),{setIconVisible:m}=V(),{isLoading:y}=_();d.exports.useEffect(()=>{c&&be({pageRequest:{pageNo:0,pageSize:100,startRow:0}}).then(r=>(i(r.list),r)).catch(r=>console.error(r))},[c]);const s=f=>{A(f)},l=f=>w.some(r=>(r==null?void 0:r.id)===(f==null?void 0:f.id)),b=()=>{p(!1),m(!0);let f=w.map(r=>r);f.length<4&&(f=f.concat(new Array(4-f.length).fill(""))),g(f),h(f.filter(Boolean)),k()},G=f=>{A(f);let r=w.map(C=>C);r.length<4&&(r=r.concat(new Array(4-r.length).fill(""))),g(r),h(r.filter(Boolean)),k()};d.exports.useEffect(()=>{let f=w.map(r=>r);f.length<4&&(f=f.concat(new Array(4-f.length).fill(""))),g(f),h(f.filter(Boolean))},[h,w]);const T=()=>{p(!0),m(!1)},z=()=>{p(!1),m(!0)};return u(J,{children:[e($e,{children:t.TemplateEditorPage.ResourcePackUpload}),e(_e,{children:x.map((f,r)=>e(et,{children:u(tt,{children:[(f==null?void 0:f.id)&&!y&&e(gt,{onClick:()=>G(f),children:e(S,{type:"a-mobanshanchu",color:"#fff",size:20})}),(f==null?void 0:f.previewUrl)&&u(ht,{children:[e(X,{style:{height:"100%",width:"100%"},src:f.previewUrl}),e(wt,{children:f.title})]}),!(f!=null&&f.id)&&u(ft,{onClick:T,children:[e(S,{type:"a-mobanxuanze",size:16,color:"#d8d8d8"}),u(ut,{children:[" ",t.TemplateEditorPage.UploadResourcePack," "]})]})]})},(f==null?void 0:f.id)||r))}),u(fe,{drawerStyle:{padding:0,display:"flex",flexDirection:"column",zIndex:999},onClose:z,width:"80%",visible:c,children:[e(nt,{children:t.TemplateEditorPage.DesignSpaceResourcePack}),e(ot,{children:o==null?void 0:o.map((f,r)=>{const{title:C,subTitle:P,previewUrl:D}=f;return u(rt,{children:[e(ct,{onClick:()=>s(f),children:e(lt,{size:24,type:l(f)?"a-mobanyigouxuan":"a-mobangouxuan",color:l(f)?"#00E0E2":"#fff"})}),e(st,{src:D}),e(at,{children:C}),e(it,{children:P})]},(f==null?void 0:f.id)||r)})}),u(pt,{children:[e(dt,{children:t.TemplateEditorPage.ResourcePackSelectedNum({a:(w==null?void 0:w.length)||0})}),e(ce,{onClick:b,type:"primary",children:t.Button.AddResourcePack}),e(ce,{onClick:z,children:t.Button.Cancel})]})]})]})}var Ct="data:image/png;base64,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",At="data:image/png;base64,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",mt="data:image/png;base64,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";const yt=n(a)`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: calc(100vh - 68px);
  overflow-y: scroll;
  background-color: #f2f2f2;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`,bt=n(a)`
  ${({active:t,last:o})=>`
    min-height: 120px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    padding-left: 40px;
    border-bottom: 1px solid #d8d8d8;
    ${t?"background-color: #fff;":""}
    transition: background-color 0.3s;
    ${o&&t&&"border-bottom: none;"}
    position: relative;
  `}
`,kt=n(a)`
  padding-top: 36px;
`,Dt=n(a)`
  ${({active:t})=>`
    height: 25px;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    font-weight: 500;
    color: ${t?"#0166FA":"#222222"};
    margin-bottom: 8px;
  `}
`,Qt=n(a)`
  height: 16px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #999999;
  line-height: 16px;
  font-weight: 400;
`,Pt=n(S)`
  width: 20px;
  height: 20px;
  margin-top: 39px;
  margin-right: 8px;
`,Ft=n("img")`
  width: 20px;
  height: 20px;
  margin-top: 39px;
  margin-right: 8px;
`,St=n(a)`
  width: 0px;
  height: 0px;
  border: 12px solid #000;
  border-top-color: #fff;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  margin: 0 auto;
`;function Gt({type:t}){const o=R.use(),{setStep:i,currentStep:c}=ee(),{clearTemplate:p}=L(),{clearManualResource:x}=q(),g=d.exports.useMemo(()=>[{title:o.TemplateEditorPage.ChooseTemplateType,desc:o.TemplateEditorPage.PleaseSelectAtLeastOneTemplateType,icon:"a-taobanbianjiqibuzhou1moren",url:Ct,id:1,active:c===1},{title:o.TemplateEditorPage.ChooseTemplate,desc:o.TemplateEditorPage.PleaseSelectAtLeastOneTemplate,icon:"a-taobanbianjiqibuzhou2moren",url:At,id:2,active:c===2},{title:o.TemplateEditorPage.ManuallyUploadAssets,desc:o.TemplateEditorPage.PleaseUploadTheRequiredMaterialManually,icon:"a-taobanbianjiqibuzhou3moren",url:mt,id:3,active:c===3}],[c]),w=h=>{i(h)},A=(h,k,m)=>h?e(Ft,{src:m}):e(Pt,{type:k,size:20});return d.exports.useEffect(()=>()=>{i(1)},[i]),d.exports.useEffect(()=>{c!==3&&x()},[x,p,c]),u(yt,{children:[g.map(({icon:h,title:k,desc:m,active:y,id:s,url:l},b,G)=>u(bt,{active:y,last:b+1===G.length,onClick:()=>w(s),children:[A(y,h,l),u(kt,{children:[e(Dt,{active:y,children:k}),e(Qt,{children:m})]})]},h)),c===3&&e(St,{}),c===3&&t===U.pack&&e(xt,{}),c===3&&t===U.manual&&e(Ze,{})]})}const Tt=n(a)`
  width: 100%;
  height: 68px;
  background: #000;
  display: flex;
  flex-direction: row;
  padding: 18px 16px 18px 10px;
  justify-content: space-between;
`,It=n(a)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 200;
`,vt=n(a)`
  height: 32px;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #ffffff;
  line-height: 32px;
  font-weight: 400;
`,Et=n(a)`
  display: flex;
  flex-direction: row;
  padding: 18px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ut=n(a)`
  color: #fff;
  cursor: pointer;
`;n(a)`
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
`;n(a)`
  width: 85px;
  height: 36px;
  background-image: linear-gradient(66deg, #0166fa 2%, #00e0e2 96%);
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;const zt=n(X)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;function Rt(){const t=R.use(),o=ue(),{userData:i}=ke();return u(Tt,{children:[u(It,{onClick:()=>{o({to:"/market",replace:!0})},children:[e(S,{type:"a-daohangfanhui",size:36,color:"#fff"}),e(vt,{children:t.Button.BackHome})]}),e(Et,{children:e(Ut,{children:e(zt,{src:i==null?void 0:i.avatar})})})]})}const Bt=n(a)`
  ${({isSelected:t,type:o})=>`
    width: 100px;
    height: 120px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px 0;
    margin: 10px 14px;
    background: #fff;
    border: ${t||o==="exhibit"?"1px solid rgba(1,102,250,1)":""};
    transition: border 0.3s;
    position: relative;
    &:hover {
      background: rgba(1, 102, 250, 0.09);
    }
    cursor: pointer;
  `}
`,Lt=n(te)`
  height: 18px;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #222222;
  text-align: center;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  // text-overflow: ellipsis;
  margin: 6px 0 4px;
`,Mt=n(te)`
  height: 16px;
  width: 100%;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  text-align: center;
  font-weight: 400;
`,le=n(S)`
  position: absolute;
  right: 0;
  top: 0;
`,Ot=n(De)`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,jt=n(a)`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 18px;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #222222;
  text-align: center;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  // text-overflow: ellipsis;
  margin: 6px 0 4px;
`;function re({item:t,type:o}){const{title:i,id:c,width:p,height:x,unit:g}=t,[w,A]=d.exports.useState(!1),{changeSelectedTemplateStyle:h,selectedTemplates:k}=O();return d.exports.useEffect(()=>{const y=k.findIndex(s=>s.id===c)===-1;A(!y)},[k.length]),u(Bt,{onClick:()=>h(t),isSelected:w,type:o,children:[(()=>o==="pick"&&w?e(le,{type:"a-mobanleixinggouxuan",size:24,color:"#0166FA"}):o==="exhibit"?e(le,{type:"a-mobanleixingquxiao",size:24,color:"#0166FA"}):null)(),e(S,{type:"a-mobanleixingtongyongtubiao",size:48}),e(Ot,{position:"top-center",title:e(Lt,{children:i}),children:e(jt,{children:i})}),u(Mt,{children:[p," * ",x,g]})]})}re.defaultProps={type:"pick"};const Ht=n(a)`
  width: 100%;
  display: flex;
  background: #f2f2f2;
  border-radius: 8px;
  margin-top: 20px;
  width: calc(100% - 280px);
`;function Wt({selectedTemplates:t}){return e(Ht,{children:t.map(o=>e(re,{item:o,type:"exhibit"},o.id))})}const Jt=n(a)`
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #d8d8d8;
  padding: 42px 40px;
  box-sizing: border-box;
  background: #fff;
`,K=n(N)`
  margin-left: 16px;
  width: 110px;
`,Nt=n(a)`
  display: flex;
  align-items: center;
`,Y=n(te)`
  height: 25px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #222222;
  font-weight: 500;
`,qt=n(a)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0);
  z-index: 300;
`,Vt=n(a)`
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
`;function Kt(){const{selectedTemplates:t}=O(),{setStep:o,currentStep:i}=ee(),{selectedTemplate:c}=L(),{selectedTemplate:p}=B(),{stores:x,previewInfos:g,setPreviewInfo:w}=ve(),{preViewLen:A}=ne(),{clearTemplate:h}=L(),{setUploadFile:k}=oe(),{setLoading:m,isLoading:y}=_(),{setIconVisible:s}=V(),l=R.use(),b=d.exports.useMemo(()=>t==null?void 0:t.length,[t.length]),G=d.exports.useMemo(()=>Object.values(p).flat(2).length,[Object.values(p).toString()]),T=()=>b===0?se.show({type:"error",message:l.Toast.PleaseSelectTemplateTypeFirst}):o(i+1),z=()=>{const r=c.length;if(r===0){se.show({message:l.Toast.PleaseSelectTemplateFirst});return}m(!0),s(!1);let C=0;const P=[],D=()=>{if(C!==r)return;const I=c.map(Q=>{var ie;P.push({packId:Q.packId,templateId:Q.templateId});const F=`${Q.templateId}_${Q.packId||null}`,ae=((ie=g.get(F)[0])==null?void 0:ie.url)||"";return{json:JSON.stringify(Q.json),packId:Q.packId,templateId:Q.templateId,previewHeight:Q.json.layout.height,previewImg:ae,previewWidth:Q.json.layout.width,publicImgs:[ae]}}),E=I.length||0;ze({contentList:I}).then(Q=>(Q&&(k(P),h(),Qe.open({position:"top-right",type:"success",message:l.Toast.TemplateExportedSuccessfully,description:e(Vt,{children:l.Toast.ViewEdit({a:E})})})),Q)).finally(()=>{m(!1),s(!0)})},v=c.map(I=>{const{templateId:E,packId:Q}=I,F=`${E}_${Q||null}`;return x.has(F)?[F,x.get(F)]:null}).filter(I=>I);Ee(v,(I,E,Q)=>{const F=g.get(I)||[];F[E]=Q,w(I,F),C+=1,D()})};return u(Jt,{children:[y&&e(qt,{}),e(Nt,{children:(()=>{switch(i){case 1:return u(J,{children:[u(Y,{children:[l.TemplateEditorPage.SelectedTemplateType,"\uFF08",b,"/4\uFF09"]}),e(K,{type:"primary",onClick:T,children:l.Button.Continue})]});case 2:return u(J,{children:[u(Y,{children:[l.TemplateEditorPage.SelectedTemplate," \uFF08",G,"\uFF09"]}),e(K,{type:"primary",onClick:T,children:l.Button.Continue})]});case 3:return u(J,{children:[e(Y,{children:l.TemplateEditorPage.CheckedNum({a:A,b:c.length})}),e(K,{type:"primary",loading:y,onClick:z,children:l.Button.Create})]});default:return null}})()}),!!b&&i===1&&e(Wt,{selectedTemplates:t})]})}const Yt=n(a)`
  ${({height:t,width:o,type:i,water:c})=>`
    position: ${i==="water-fall"?"absolute":"relative"};
    height: ${t?`${t}px`:"auto"};
    width: ${o}px;
    display: flex;
    ${c?null:"justify-content: space-around; align-items: center;"}
    cursor: pointer;
  `}
`,Xt=n(a)`
  ${({width:t,height:o,direction:i})=>`
    color: #fff;
    width: ${t}px;
    height: ${o}px;
    position: absolute;
    display: flex;
    flex-direction: ${i};
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.40);
    }
    transition: all 0.3s;
  `}
`,pe=n(a)`
  ${({direction:t})=>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${t==="column"?"100%":"40px"};
    height: 40px;
    transition: all 0.3s;
  `}
`,Zt=n(a)`
  ${({childrenCount:t})=>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    height: 40px;
    width: ${t*44+t-2}px;
    background: rgba(0,0,0,0);
    transition: all 0.3s;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  `}
`,$t=n(a)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;function Ce({width:t,height:o,direction:i,children:c,source:p,className:x,style:g,type:w,water:A,setLoaded:h}){const[k]=d.exports.useState(d.exports.Children.count(c)),m=A?t-20:t,y=A?o-20:o,s=()=>d.exports.Children.map(c,G=>e(pe,{direction:i,children:G})),l=()=>e(Zt,{childrenCount:k,children:d.exports.Children.map(c,G=>e(pe,{direction:i,children:G}))});return u(Yt,{water:A||!1,type:w,width:t,height:o,className:x,style:g,children:[e($t,{width:m,height:y,children:(()=>i==="column"?e(Xt,{width:t,height:o,direction:i,children:s()}):l())()}),e(Z,{style:{width:m,height:y,borderRadius:"8px",overflow:"hidden"},onLoaded:h,alt:"aaa",src:p})]})}Ce.defaultProps={type:void 0,width:186,height:140,direction:"row",className:"",style:void 0,children:void 0,water:!1,setLoaded:()=>{}};const _t=n(a)`
  display: flex;
  flex-wrap: wrap;
`,en=n(a)`
  cursor: pointer;
`,tn=n(a)`
  width: 206px;
  height: 160px;
  margin-top: 20px;
  background: #ffffff;
  border: 1px dashed rgba(216, 216, 216, 1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`,de=n(a)``;function nn({group:t,setVisible:o}){var y;const{selectedTemplate:i,changePickTempList:c}=B(),[p,x]=d.exports.useState(new Array(4).fill("")),[g,w]=d.exports.useState(),{setFilterList:A}=j(),h=s=>c(+t.id,s),k=s=>w(s),m=s=>{A("Platform",[s.title,String(s.width),String(s.height)]),A("ItemType",[s.title,String(s.width),String(s.height),s.unit]),A("Id",[t.id]),o(l=>!l)};return d.exports.useEffect(()=>{let l=(i[t.id]||[]).map(b=>b);l.length<4&&(l=l.concat(new Array(4-l.length).fill(""))),x(l)},[(y=i[t.id])==null?void 0:y.length]),u(_t,{children:[p==null?void 0:p.map((s,l)=>e(tn,{children:typeof s=="string"?e(en,{onClick:()=>m(t),children:e(S,{type:"a-mobanxuanze",color:"#D8D8D8",size:32})}):u(Ce,{width:186,height:140,direction:"column",source:s.previewUrl,children:[e(de,{onClick:()=>k(s),children:e(S,{type:"a-shejikongjianyulanmoban",color:"#fff",size:24})}),e(de,{onClick:()=>h(s),children:e(S,{type:"a-mobanshanchu",color:"#fff",size:24})})]})},l)),g&&e(xe,{pure:!0,solo:!0,dataSource:g,onClose:()=>w(null)})]})}const on=n(a)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
`,rn=n(a)`
  ${()=>`
    height: 40px;
    width: 40px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  `}
`,an=n(a)`
  ${()=>`
    height: 40px;
    width: 40px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  `}
`;n(a)`
  position: absolute;
  height: 108px;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 32px;
  background-color: #fff;
`;n(a)`
  width: 413px;
  height: 25px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #222222;
  font-weight: 500;
`;const sn=n(a)`
  ${({height:t,width:o})=>`
    width: ${o};
    height: ${t};
    margin: 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`,cn=n(a)`
  position: absolute;
  display: flex;
  align-items: center;
  width: 88px;
  height: 100%;
  cursor: pointer;
  justify-content: space-between;
  z-index: 1;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  ${({pick:t})=>t&&"opacity: 1;"}
`,ln=n(a)`
  position: absolute;
  width: 100%;
  height: 100%;
`,pn=n(Z)`
  overflow: hidden;
  border-radius: 8px;
`;function dn(){const[t,o]=d.exports.useState([]),[i,c]=d.exports.useState(),{filterList:p}=j(),{changePickTempList:x,selectedTemplate:g}=B(),{Color:w=[],Style:A=[],Platform:h=[]}=p,k=d.exports.useCallback(()=>{const s=(p==null?void 0:p.Id[0])||!1;return s?g[s]||[]:!1},[p==null?void 0:p.Id,g]),m=d.exports.useCallback(s=>{const l=k();return l?l==null?void 0:l.some(b=>b.id===s.id):!1},[JSON.stringify(k)]);d.exports.useEffect(()=>{var l;const s={platformJson:h[0]?JSON.stringify([h[0]]):JSON.stringify([]),width:h[1],height:h[2],styleJson:JSON.stringify(A),colorJson:JSON.stringify(w)};((l=h[0])==null?void 0:l.length)===0||!h[0]||Pe(s).then(b=>(o((b==null?void 0:b.list)||[]),b)).catch(()=>{})},[w.toString(),A.toString(),h.toString()]);const y=d.exports.useCallback(s=>{x(+p.Id[0],s)},[x,p.Id]);return(t==null?void 0:t.length)===0?e(Be,{style:{height:"calc(100vh - 108px)"}}):u(on,{children:[t.map(s=>{const G=165/s.aspectRatio||1,T=m(s);return u(sn,{height:G,width:165,children:[e(ln,{className:"mask",pick:T}),u(cn,{pick:T,children:[e(rn,{onClick:()=>y(s),children:e(S,{type:T?"a-mobanyigouxuan":"a-mobangouxuan",color:T?"#00E0E2":"#fff",size:24})}),e(an,{onClick:()=>c(s),children:e(S,{type:"a-shejikongjianyulanmoban",color:"#fff",size:24})})]}),e(pn,{style:{height:G,width:165,opacity:T?.4:1},src:s.previewUrl})]},s.id)}),i&&e(xe,{pure:!0,solo:!0,dataSource:i,onClose:()=>c(null)})]})}const gn=n(a)`
  flex: 1;
  overflow-y: scroll;
  height: calc(100vh - 108px);
`,hn=n(a)`
  position: absolute;
  height: 108px;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 32px;
  background-color: #fff;
`,fn=n(a)`
  width: 413px;
  height: 25px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #222222;
  font-weight: 500;
`;function un({setVisible:t}){const o=R.use(),{filterList:i}=j(),{selectedTemplate:c}=B(),{ItemType:p=[],Id:x=[]}=i,g=()=>{const A=x[0],h=c[A];return(h==null?void 0:h.length)||0},w=()=>{t(A=>!A)};return u(gn,{children:[e(dn,{}),u(hn,{children:[u(fn,{children:[`${p[0]} (${p[1]} * ${p[2]} ${p[3]})`," ",o.TemplateEditorPage.ChooseNum({a:g(),b:4})]}),e(N,{style:{width:110,height:36},onClick:w,type:"primary",children:o.Button.AddTemplate}),e(N,{style:{marginLeft:20},onClick:w,children:o.Button.Cancel})]})]})}const wn=n(a)``,xn=n(a)`
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #222222;
  font-weight: 500;
  padding-top: 20px;
`,Cn=n(a)`
  display: flex;
`,An=n(a)`
  text-indent: 30px;
`,mn=n(a)`
  height: 100%;
  display: flex;
  flex-direction: row;
`;function ge(){const{selectedTemplates:t}=O(),[o,i]=d.exports.useState(!1),{setFilterList:c}=j(),p=()=>{i(!1),c("Platform",[])};return u(wn,{children:[t.map(x=>u(xn,{children:[u(Cn,{children:[x.title,u(An,{children:["(",x.width," * ",x.height," ",x.unit,")"]})]}),e(nn,{setVisible:i,group:x})]},x.id)),e(fe,{onClose:p,drawerStyle:{padding:0},visible:o,placement:"right",width:"80%",children:u(mn,{children:[e(Re,{}),e(un,{setVisible:i})]})})]})}const yn=n(a)`
  width: 100%;
`,bn=n(a)`
  height: 25px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #222222;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 14px;
`,kn=n(a)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  border: 1px dashed rgba(216, 216, 216, 1);
  border-radius: 8px;
  padding: 0 18px;
`;function he(){const[t,o]=d.exports.useState([]),[i,c]=d.exports.useState();return d.exports.useEffect(()=>{Fe({}).then(p=>(o(Object.keys(p)),c(p),p)).catch(p=>console.error(p))},[]),e(yn,{children:t.map(p=>u(d.exports.Fragment,{children:[e(bn,{children:p}),e(kn,{children:i[p].map(x=>e(re,{item:x},x.id))})]},p))})}const Dn=n(a)`
  width: 530px;
  height: 530px;
  background: #f2f2f2;
  border: 1px solid rgba(216, 216, 216, 1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: 20px;
  pointer-events: none;
`,Qn=n(S)`
  position: absolute;
  z-index: 10;
  right: 12px;
  top: 12px;
  border-radius: 50%;
  ${({ischecked:t})=>t?"":`
      // border: 1px solid #0166fa;
    `};
  pointer-events: auto;
`;function Ae({children:t,item:o}){const{selectedTemplate:i,changeSelectedList:c}=L(),[p,x]=d.exports.useState(),g=d.exports.useRef("#0166fa"),[w,A]=d.exports.useState(!1),{iconVisible:h}=V();return d.exports.useEffect(()=>{const k=i.includes(o);x(k?"a-taobangouxuan":"a-taobanweigouxuan"),A(k)},[i.toString()]),u(Dn,{onClick:()=>c(o),children:[e(Qn,{type:p,ischecked:w?1:0,style:{zIndex:h?10:0},size:40,color:g.current}),t]})}function Pn(){const[t,o]=d.exports.useState([]),[i,c]=d.exports.useState([]),[p,x]=d.exports.useState([]),{setPreViewLen:g}=ne(),{selectedTemplate:w}=B(),{checkedResourcePack:A}=$(),{uploadFiles:h,clearUploadFiles:k}=oe();return d.exports.useEffect(()=>{const m=[];Object.values(w).forEach(y=>{m.push(y)}),o(m.flat(2))},[w]),d.exports.useEffect(()=>{const m=A.map(l=>l==null?void 0:l.id).filter(Boolean),y=t.map(l=>l==null?void 0:l.id).filter(Boolean);Se({packIds:m,templateIds:y}).then(l=>(x(l),l)).catch(l=>console.error(l))},[t,A.length]),d.exports.useEffect(()=>{const y=(Array.isArray(p)?[...p]:[p]).map(s=>({item:s==null?void 0:s.renderedItems,templateId:s==null?void 0:s.templateId})).map(s=>{var l;return(l=s==null?void 0:s.item)==null?void 0:l.map(b=>({...b,json:JSON.parse(b==null?void 0:b.json),templateId:s==null?void 0:s.templateId}))}).flat(2).slice(0,10);c(y)},[JSON.stringify(p)]),d.exports.useEffect(()=>{g((i==null?void 0:i.length)||0)},[i.length]),d.exports.useEffect(()=>{if(h.length===0)return;const y=[...i].filter(s=>{const l=h.find(b=>s.packId===b.packId&&s.templateId===b.templateId);return s.packId!==(l==null?void 0:l.packId)&&s.templateId!==(l==null?void 0:l.templateId)});c(y),k()},[k,i,h,h.length]),{preJsons:i}}const Fn=n(a)`
  display: flex;
  flex-wrap: wrap;
`,Sn=n(a)`
  width: 530px;
  height: 530px;
`;function Gn(){const{preJsons:t}=Pn();return e(Fn,{children:Array.isArray(t)&&t.length>0&&t.map((o,i)=>{var c;return e(Ae,{item:o,children:e(Sn,{children:e(we,{storeID:`${o==null?void 0:o.templateId}_${o==null?void 0:o.packId}`,width:530,height:530,pageIndex:0,json:(c=o==null?void 0:o.json)==null?void 0:c.layout})})},i)})})}const Tn=n(a)`
  display: flex;
  flex-wrap: wrap;
`,In=n(a)`
  width: 530px;
  height: 530px;
`;function vn(){const{selectedTemplate:t}=B(),[o,i]=d.exports.useState([]),{manualResource:c,clearManualResource:p}=q(),{uploadFiles:x,clearUploadFiles:g}=oe(),{ServiceSellingPoint:w,MarketingSellingPoint:A,ProductSellingPoint:h,Text:k,UploadBackgroundImage:m,UploadMainImage:y,UploadSecondaryImage:s,Logo1:l,Logo2:b}=c,{setPreViewLen:G}=ne();d.exports.useEffect(()=>{if(x.length===0)return;const C=[...o].filter(P=>{const D=x.find(v=>P.templateId===v.templateId);return P.templateId!==(D==null?void 0:D.templateId)});i(C),g()},[g,o,x,x.length]),d.exports.useEffect(()=>{Object.values(t).map(C=>C.map(P=>({url:P.gmUrl,id:P.id}))).forEach(C=>{C.forEach(P=>{fetch(P.url).then(D=>D.json()).then(D=>(i((v=[])=>[...v,{json:D,templateId:P.id}]),D)).catch(D=>console.error(D))})})},[]);const T=(r,C)=>{if(C._src||(C._src=C.src),C._maskSrc||(C._maskSrc=C.maskSrc),r&&C.maskSrc){delete C.maskSrc,C.maskSrc=r;return}r&&C.src&&(delete C.src,C.src=r),r||(delete C.src,delete C.maskSrc,C.src=C._src,C.maskSrc=C._maskSrc)},z=(r,C)=>{C._text||(C._text=C.text),r&&(C.text=r),r||(C.text=C._text)},f=({target:r,serviceSellingPoint:C,marketingSellingPoint:P,productSellingPoint:D,text:v,uploadBackgroundImage:I,uploadMainImage:E,uploadSecondaryImage:Q,logo1:F,logo2:M})=>{switch(r.gmGroup){case"imgBackground":r.type="image",T(I,r);break;case"imgMain":r.type="image",T(E,r);break;case"imgBrandIcon":if(r.type="image",r._src||(r._src=r.src),r.logo1&&F){delete r.src,r.src=F;break}if(r.logo1&&!F){delete r.src,r.src=r._src;break}if(F&&(delete r.src,r.src=F,r.logo1=F),M&&(delete r.src,r.src=M,r.logo2=M),r.logo2&&!M){delete r.src,r.src=r._src;break}break;case"imgSecondary":r.type="image",T(Q,r);break;case"txtNormal":z(v,r);break;case"txtProduct":z(D,r);break;case"txtMarket":z(P,r);break;case"txtService":z(C,r);break}};return d.exports.useEffect(()=>{const r=[...o];r.forEach(C=>{const{pages:P}=C.json.layout,D=P[0].children,v=[];D.forEach((I,E)=>{v.findIndex(F=>F.gmGroup===D[E].gmGroup)===-1?v.push(D[E]):v.splice(E,1)}),v.forEach(I=>{f({target:I,serviceSellingPoint:w,marketingSellingPoint:A,productSellingPoint:h,text:k,uploadBackgroundImage:m,uploadMainImage:y,uploadSecondaryImage:s,logo1:l,logo2:b})})}),i(r)},[w,A,h,k,m,y,s,l,b]),d.exports.useEffect(()=>{G((o==null?void 0:o.length)||0)},[o.length]),d.exports.useEffect(()=>()=>{p(),i([])},[p]),console.log("preJsons",o),e(Tn,{children:o.map(r=>e(Ae,{item:r,children:e(In,{children:e(we,{width:530,height:530,pageIndex:0,json:r.json.layout,storeID:`${r.templateId}_${(r==null?void 0:r.packId)||null}`},Ue())})},`${r.templateId}_${(r==null?void 0:r.packId)||null}`))})}const En=n(a)`
  flex: 1;
  background: #fff;
`,Un=n(a)`
  ${({height:t})=>`
    overflow-y: scroll;
    height: ${t};
    padding: 0 40px;
  `}
`,zn=n(Ge)`
  background-color: #fffbe6;
  margin-top: 20px;
  border: 1px solid rgba(255, 229, 143, 1);
  border-radius: 2px;
`;function Rn({type:t}){const{currentStep:o,setStep:i}=ee(),{selectedTemplates:c}=O(),p=d.exports.useMemo(()=>o===1&&c.length>0?"calc(100vh - 68px - 280px)":"calc(100vh - 68px - 120px)",[o,c.toString()]),x=R.use(),g=d.exports.useMemo(()=>({[U.pack]:e(he,{}),[U.manual]:e(he,{})}),[]),w=d.exports.useMemo(()=>({[U.pack]:e(ge,{}),[U.manual]:e(ge,{})}),[]),A=d.exports.useMemo(()=>({[U.pack]:e(Gn,{}),[U.manual]:e(vn,{})}),[]),h=()=>{switch(o){case 1:return g[t];case 2:return w[t];case 3:return A[t];default:return i(1),null}};return u(En,{children:[u(Un,{height:p,children:[e(zn,{status:"warning",title:x.Toast.FixToast}),h()]}),e(Kt,{})]})}function Bn(){const{state:t}=Te(),{resource:o}=t.location.search,i=ue(),c=U[o];return d.exports.useEffect(()=>{U[o]||i({to:"/creativeCase"})},[o,i]),{type:c}}const Ln=n(a)`
  width: 100%;
  // height: calc(100vh - 68px);
  display: flex;
  flex-direction: column;
`,Mn=n(a)`
  flex: 1;
  height: 100%;
  display: flex;
`;function Kn(){const{type:t}=Bn(),{clearTemplate:o}=L(),{clearFilter:i}=j(),{clearTemplates:c}=O(),{clearTemp:p}=B(),{clearResourcePack:x}=$(),{clearManualResource:g}=q(),{setLoading:w}=_(),{setIconVisible:A}=V(),{clearMaterial:h}=Ie();return d.exports.useEffect(()=>()=>{o(),i(),c(),p(),x(),g(),A(!0),w(!1),h()},[i,g,h,x,p,o,c,A,w]),u(Ln,{children:[e(Rt,{}),u(Mn,{children:[e(Gt,{type:t}),e(Rn,{type:t})]})]})}export{Kn as default};
