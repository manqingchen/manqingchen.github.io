import{n as t,h as m,B as x,T as s,k as c,l as d,d as g,j as n}from"./index.b13d347f.js";var u="./assets/page_empty.afa248bf.png";const f=t(m)`
  width: 288px;
`,y=t(x)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,h=t(s)`
  display: block;
  font-size: 24px;
  margin-top: 32px;
  margin-bottom: 10px;
  color: ${()=>c("colors.ipaintter.5")};
`,T=t(s)`
  font-size: 16px;
  color: ${()=>c("colors.ipaintter.6")};
`,j=t(d)`
  margin-top: 30px;
`;function B(r){const{img:a,text:e,description:o,actionText:i,onAction:l,...p}=r;return g(y,{...p,children:[n(f,{src:a}),e&&n(h,{children:e}),o&&n(T,{children:o}),i&&n(j,{type:"primary",onClick:l,children:i})]})}B.defaultProps={img:u,text:null,description:null,actionText:null,onAction:()=>{},style:void 0};export{B as E};
