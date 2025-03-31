import{i as M,r,j as e,B as s,n,d as l,s as L,l as I,k as B,T as w,v as j,aZ as K,f as V,a_ as Q,a$ as X,F as k,b0 as ee,b1 as te,I as oe,b2 as ne,b3 as re,b4 as se,b5 as ie,b6 as ce,b7 as ae,b8 as le,b9 as z,P as G,O as pe,aG as ue,ba as he,bb as de}from"./index.b13d347f.js";import{m as N}from"./index.383a2cf9.js";const ge=n(s)`
  font-family: PingFangSC-Medium;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  height: 55px;
  padding: 15px 0;
  line-height: '25px';
  text-align: center;
  cursor: pointer;
  color: ${({theme:t,active:c})=>t.colors.emphasis[c?80:50]};
`;function xe(t){const{changeTab:c,tabValue:o}=t,a=M.use(),d=r.exports.useMemo(()=>{const i={MyAccount:a.User.MyAccount,AccountSecurity:a.User.AccountSecurity};return Object.entries(i).map(h=>{const u=h[0];return e(ge,{active:u===o,onClick:()=>c(u),children:h[1]},u)})},[a.User,c,o]);return console.log("LeftTabs section render"),e(s,{width:"100%",marginTop:"25px",children:d})}const fe=n(s)`
  padding: 24px 0px 50px 32px;
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  line-height: 20px;
  color: #222222;
  font-weight: 600;
  margin-bottom: 18px;
`,me=n(s)`
  font-size: 18px;
  color: #222222;
  font-weight: 600;
  margin-left: 60px;
  margin-bottom: 20px;
`,be=n(s)`
  font-size: 14px;
  color: #666666;
  font-weight: 400;
  margin-left: 60px;
  margin-bottom: 40px;
`,Ce=n(I)`
  width: 292px;
  margin-left: 60px;
`,$=n(I)`
  position: absolute;
  bottom: 30px;
  width: 90px;
  right: ${t=>t.right};
`,we=n(s)`
  position: relative;
  overflow: hidden;
  width: 460px;
  height: 308px;
  border-radius: 8px;
  background-color: ${()=>B("colors.emphasis.0")};
`,Se=n(w)`
  display: block;
  line-height: 24px;
  font-size: 20px;
  font-weight: 500;
  margin: 40px 40px 0;
  color: ${()=>B("colors.emphasis.80")};
`,ye=n(w)`
  display: block;
  line-height: 22px;
  font-size: 16px;
  font-weight: 400;
  margin: 14px 40px 0;
  color: ${()=>B("colors.emphasis.60")};
`,ve=n(w)`
  display: block;
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  margin: 30px 40px 0;
  color: ${()=>B("colors.emphasis.80")};
`,Ie=n(j)`
  width: 232px;
  height: 32px;
  margin: 8px 40px 0;
`,Be=n(w)`
  display: block;
  line-height: 18px;
  font-size: 12px;
  font-weight: 400;
  margin: 0 40px;
  color: ${()=>B("colors.red.60")};
`;function Te(){const t=M.use(),c=r.exports.useRef(null),[o,a]=r.exports.useState(!1),[d,i]=r.exports.useState(!1),h=()=>{a(!1),i(!1)},u=()=>{if(c.current!==t.Sign.DeleteInputConfirm){a(!0);return}K().then(()=>(V.show({type:"success",message:t.Toast.DeleteSuccess}),Q())).catch(()=>{})},g=()=>l(we,{children:[e(Se,{children:t.Sign.DeleteConfirm}),e(ye,{children:t.Sign.DeleteDesc}),e(ve,{children:t.Sign.DeleteToast}),e(Ie,{status:o?"error":void 0,onChange:S=>{c.current=S}}),o&&e(Be,{children:t.Sign.DeleteTip}),e($,{right:"30px",type:"primary",onClick:u,children:t.Button.ConfirmDelete}),e($,{right:"130px",type:"normal",onClick:h,children:t.Button.Cancel})]});return console.log("AccountSafe section render"),l(s,{children:[e(fe,{children:t.User.AccountSecurity}),e(me,{children:t.User.DeleteYourAccount}),e(be,{children:t.Sign.DeleteDesc}),e(Ce,{type:"primary",onClick:()=>i(!0),children:t.Button.DeleteAccount}),d&&e(L,{visible:!0,renderContainer:g})]})}const Me=n(s)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  & > svg {
    width: 20px;
    height: 20px;
    margin: 4px auto;
  }
`,Ue=n(s)`
  position: relative;
  padding: 60px 40px 0;
  overflow: hidden;
  width: 372px;
  height: 510px;
  background: #ffffff;
  box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
`,Ae=n(s)`
  width: 100%;
  height: 33px;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  margin-bottom: 60px;
`,R=n(s)`
  line-height: 20px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  font-weight: 400;
  margin-bottom: 30px;
`,De=n(s)`
  height: 17px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #f5222d;
  font-weight: 400;
  position: absolute;
  transform: translateY(2px);
`,F=n(w)`
  line-height: 17px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  font-weight: 400;
  margin-top: 20px;
`,E=n(I)`
  width: 100%;
  margin-top: ${t=>{var c;return(c=t.marginTop)!=null?c:"20px"}};
`,O=60;function Ve(t){const{onClose:c}=t,o=M.use(),[a,d]=r.exports.useState(0),i=r.exports.useRef(),h=r.exports.useRef(),[u,g]=r.exports.useState(!1),[S,T]=r.exports.useState(!1),[y,U]=r.exports.useState(!1),[b,v]=r.exports.useState(O),[p,x]=r.exports.useState(!1),C=r.exports.useRef(),W=r.exports.useRef(/^1[3456789]\d{9}$/),Y=r.exports.useMemo(()=>y?p?o.Button.Again:o.Button.GetVerificationCodeAgain:o.Button.VerificationCode,[p,y,o.Button.Again,o.Button.GetVerificationCodeAgain,o.Button.VerificationCode]);r.exports.useEffect(()=>(C.current&&clearInterval(C.current),()=>clearInterval(C.current)),[]),r.exports.useEffect(()=>{b<=0&&(v(O),clearInterval(C.current),x(!1))},[b,C]);const _=[{label:le(),value:"cn"}],q=()=>{if(a===0)W.current.test(i.current)?(T(!1),d(1)):T(!0);else if(a===1)if(h.current){g(!1);const f={region:"cn",mobile:i.current,smsCode:h.current};z({url:"/uc/user/v1/updateMobile",method:"post",data:f}).then(m=>(m.success&&(c(),V.show({type:"success",message:o.Toast.LoginSuccess}),window.location.reload()),m)).catch(()=>{})}else g(!0)},Z=()=>{if(p)return;const f={region:"cn",mobile:i.current,bizType:"ACCOUNT_MOBILE_MODIFY"};z({url:"/uc/user/v1/sendSmsCode",method:"post",data:f}).then(m=>(m.success&&(U(!0),x(!0),C.current=window.setInterval(()=>{v(J=>J-1)},1e3)),m)).catch(m=>m)},H=()=>l(Ue,{children:[e(Me,{children:e(X,{name:"a-tishiguanbi",onClick:c})}),e(Ae,{children:a===0?o.User.InputMobile:o.User.ConfirmMobile}),a===0&&l(k,{children:[e(R,{children:o.User.ConfirmMobileDesc}),l(ee,{marginBottom:"20px",children:[e(te,{shape:"simple",defaultValue:"cn",arrow:e(oe,{type:"a-dengluxiala"}),dataSource:_}),l(ne,{children:[e(re,{type:"text",shape:"simple",placeholder:o.Sign.CorrectMobile,onChange:f=>{i.current=f},hasClear:!0}),S&&e(De,{children:o.Sign.CorrectMobile})]})]}),e(F,{children:o.User.ConfirmMobileTip})]}),a===1&&l(k,{children:[e(R,{children:o.User.ConfirmMobileByVCode({x:i.current})}),l(se,{marginBottom:"20px",children:[e(ie,{shape:"simple",placeholder:o.Sign.Enter,onChange:f=>{h.current=f},hasClear:!0}),u&&e(ce,{children:o.Sign.CorrectCode}),l(ae,{onClick:Z,disabled:p,children:[Y," ",p&&b]})]}),e(F,{children:o.User.ConfirmVCodeTip})]}),e(E,{type:"primary",size:"large",onClick:q,children:o.Button.Confirm}),e(E,{type:"secondary",size:"large",marginTop:"10px",onClick:c,children:o.Button.Cancel})]});return console.log("MobileChange section render"),e(L,{visible:!0,footer:null,renderContainer:H,maskClose:!0,onCancel:c})}const ke=n(s)``,ze=n(s)`
  padding: 24px 0px 0px 32px;
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #222222;
  font-weight: 600;
  margin-bottom: 60px;
`,$e=n(s)`
  display: flex;
  align-items: center;
`,Re=n("img")`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-left: 60px;
  margin-right: 40px;
`,Fe=n(I)`
  width: 116px;
  height: 36px;
  background: #0166fa !important;
  border-radius: 4px;
  color: #fff !important;
  border: none;
`,Ee=n(s)`
  padding: 60px 0px 50px 60px;
`,A=n(s)`
  position: relative;
  width: 700px;
  margin-bottom: 30px;
  color: ${({theme:t})=>t.colors.emphasis[80]};
`,D=n(s)`
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`,P=n(j)`
  height: 52px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:t})=>t.colors.emphasis[80]};
  -webkit-text-fill-color: ${({theme:t})=>t.colors.emphasis[80]};
`,Oe=n(w)`
  position: absolute;
  right: 20px;
  bottom: 0;
  color: ${({theme:t})=>t.colors.emphasis[60]};
  padding: 15px 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
`,Pe=n(ue)`
  height: 52px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:t})=>t.colors.emphasis[80]};
  -webkit-text-fill-color: ${({theme:t})=>t.colors.emphasis[80]};
`,Le=n(I)`
  width: 116px;
  height: 36px;
`;function je(){var b,v;const[t,c]=r.exports.useState(!1),o=M.use(),a=r.exports.useRef("zh"),d=[{value:"en",label:"English"},{value:"zh",label:"\u4E2D\u6587"}],{userData:i,setUserDataInfo:h}=G(),u=r.exports.useRef(i.name),[g,S]=r.exports.useState(i.avatar),T=()=>{const p={avatar:g,name:u.current};he(p).then(x=>{x&&(h(Object.assign(i,p)),V.show({type:"success",message:o.Toast.SaveSuccess}))}).catch(()=>{})},y=p=>{c(p)},U=p=>{const x=p;switch(x.status){case"uploaded":S(x.url);break}};return console.log("MyAccount section render",i),l(ke,{children:[e(ze,{children:o.User.MyAccount}),l($e,{children:[e(Re,{src:g}),e(pe,{accept:".png,.jpg,.jpeg",onChange:U,children:e(Fe,{type:"primary",children:o.Button.AddAvatar})})]}),l(Ee,{children:[l(A,{children:[e(D,{children:o.User.Name}),e(P,{defaultValue:(b=u.current)!=null?b:"",onChange:p=>{u.current=p},fill:!0})]}),l(A,{children:[e(D,{children:o.User.Mobile}),e(P,{value:N(i.mobile),fill:!0,disabled:!0}),e(Oe,{onClick:()=>y(!0),children:o.Button.Revise})]}),l(A,{children:[e(D,{children:o.User.Language}),e(Pe,{fill:!0,disabled:!0,dataSource:d,defaultValue:(v=a.current)!=null?v:"",hasArrow:!1,onChange:p=>{a.current=p}})]}),e(Le,{type:"primary",onClick:T,children:o.Button.Save})]}),t&&e(Ve,{onClose:()=>y(!1)})]})}const Ge=n(s)`
  width: 100%;
  display: flex;
  height: 100%;
`,Ne=n(s)`
  width: 240px;
`,We=n(s)`
  flex: 1;
  background-color: #fff;
  box-shadow: 0px 0px 8px 2px rgba(237, 237, 237, 0.5);
  border-radius: 8px;
`,Ye=n("img")`
  display: block;
  margin: 0 auto;
  width: 88px;
  height: 88px;
  margin: 0 auto;
  border-radius: 44px;
  margin-top: 20px;
`,_e=n(s)`
  height: 192px;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
`,qe=n(s)`
  font-size: 24px;
  color: ${({theme:t})=>t.colors.emphasis[80]};
  font-weight: 500;
  text-align: center;
  line-height: 52px;
`;function Je(){const[t,c]=r.exports.useState("MyAccount"),{userData:o,setUserDataInfo:a}=G(),d=r.exports.useCallback(i=>{c(i)},[]);return r.exports.useEffect(()=>{de().then(i=>a(i)).catch(()=>{})},[a]),console.log("UserInfo page render"),o.mobile&&l(Ge,{children:[l(Ne,{children:[l(_e,{children:[e(Ye,{src:o.avatar}),e(qe,{children:o.name?o.name:N(o.mobile)})]}),e(xe,{tabValue:t,changeTab:d})]}),e(We,{children:t==="MyAccount"?e(je,{}):e(Te,{})})]})}export{Je as default};
