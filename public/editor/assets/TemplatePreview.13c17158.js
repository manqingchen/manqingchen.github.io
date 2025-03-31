import{i as j,u as z,j as o,s as I,n,B as l,h as A,T as c,t as r,l as E,I as u,d as s,F as D,e as M,f as P}from"./index.b13d347f.js";import{c as N}from"./index.6be00e2e.js";const O=n(l)`
  position: relative;
  background-color: #ffffff;
  border-radius: 8px;
  width: 1200px;
  height: 800px;
  margin: -80px 0 0 -120px;
  @media screen and (min-width: 1440px) {
  }
  @media screen and (max-width: 1440px) {
    transform: scale(0.8);
  }
`,d=n(l)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  height: 100%;
  ${({type:e})=>e==="0"?`
        left: 0;
        width: 681px;
        justify-content: center;
        align-items: flex-start;
      `:`
      right: 0;
      width: 519px;
      justify-content: flex-start;
      align-items: flex-start;
    `}
`,L=n(A)`
  margin-left: 10px;
  width: 600px;
  height: calc(100% - 20px);
  object-fit: scale-down;
`,W=n(c)`
  line-height: 33px;
  font-size: 24px;
  font-weight: 500;
  color: ${r.colors.emphasis[80]};
  margin: 148px 0 20px;
`,Y=n(c)`
  line-height: 22px;
  font-size: 16px;
  font-weight: 400;
  color: ${r.colors.emphasis[60]};
  margin-bottom: 50px;
`,x=n(c)`
  line-height: 22px;
  font-size: 16px;
  font-weight: 500;
  color: ${r.colors.emphasis[80]};
  margin: ${e=>e.margin};
  width: ${e=>e.width};
`,G=n(l)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,R=n(l)`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  margin-right: 6px;
  ${({backgroundColor:e})=>e==="#ffffff"?`
        background-color: ${e};
        border: 1px solid ${r.colors.emphasis[20]};
      `:`background-color: ${e};`};
`,g=n(l)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: ${e=>e.margin};
  width: 100%;
`,U=n(l)`
  line-height: 22px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 2px;
  border: 1px solid ${e=>e.borderColor};
  color: ${e=>e.color};
  background-color: ${e=>e.backgroundColor};
  margin: 0 10px 10px 0;
`,m=n(E)`
  width: 180px;
  margin-right: 10px;
`,_=n(u)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  cursor: pointer;
`,f=n(u)`
  position: absolute;
  top: 50%;
  ${({arrow:e})=>e==="left"?"left: -76px;transform: translateY(-50%);":"right: -76px;transform: translateY(-50%) rotate(180deg);"}
  width: 76px;
  height: 76px;
  cursor: pointer;
`,q=[["#52C41A","#B7EB8F","#F6FFED"],["#1890FF","#91D5FF","#E6F7FF"],["#FAAD14","#FFE58F","#FFFBE6"],["#FF4D4F","#FFA39E","#FFF1F0"]];function H(e){const{dataSource:t,visible:F,onClose:h,onPrev:w,onNext:b,solo:y,pure:C}=e,a=j.use(),T=z(),$=()=>{N({templateId:t.id}).then(i=>T({to:`/designer?contentId=${String(i)}`})).catch(()=>{})},k=()=>{M({id:t.id,code:t.code}).then(()=>P.show({type:"success",message:a.Toast.AddSuccess})).catch(()=>{})};console.log("dataSource",t);const v=()=>s(O,{children:[o(d,{type:"0",children:o(L,{src:t==null?void 0:t.previewUrl},t==null?void 0:t.id)}),s(d,{type:"1",children:[o(W,{children:t==null?void 0:t.title}),o(Y,{children:`${t==null?void 0:t.subTitle}\uFF08${t==null?void 0:t.width} x ${t==null?void 0:t.height} ${t==null?void 0:t.unit}\uFF09`}),s(G,{children:[o(x,{margin:"0 30px 0 0",children:a.TemplateMMarket.Modal.Color}),(t==null?void 0:t.colors)&&Object.values(t==null?void 0:t.colors).filter(i=>i).map(i=>o(R,{backgroundColor:i},i))]}),s(g,{margin:"50px 0 0",children:[o(x,{width:"100%",margin:"0 0 12px",children:a.TemplateMMarket.Modal.TemplateLabelSet}),t==null?void 0:t.tags.map((i,B)=>{const p=q[B%4];return o(U,{color:p[0],borderColor:p[1],backgroundColor:p[2],children:i},i)})]}),!C&&s(g,{margin:"auto 0 147px",children:[o(m,{type:"primary",size:"medium",onClick:$,children:a.Button.Editor}),o(m,{type:"secondary",size:"medium",marginTop:"10px",onClick:k,children:a.Button.FavoriteTemplate})]})]}),o(_,{type:"a-yulantudanchuangguanbi",color:r.colors.ipaintter[2],onClick:h}),!y&&s(D,{children:[o(f,{arrow:"left",type:"a-yulantudanchuanglunbozuo",color:r.colors.ipaintter[0],onClick:w}),o(f,{arrow:"right",type:"a-yulantudanchuanglunbozuo",color:r.colors.ipaintter[0],onClick:b})]})]});return console.log("TemplatePreview Dialog render"),o(I,{width:960,height:640,visible:F,footer:null,renderContainer:v,maskClose:!0,onCancel:h})}H.defaultProps={visible:!0,solo:!1,onPrev:null,onNext:null,pure:!1};export{H as T};
