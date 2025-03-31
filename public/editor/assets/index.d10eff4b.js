import{n as g,B as u,C as H,b as W,a as E,r as f,i as K,d as a,j as r,G as A,x as J,I as O,y as U}from"./index.b13d347f.js";const F=g(u)`
  height: 20px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  text-align: right;
  font-weight: 400;
`,S=g(u)`
  margin-bottom: 16px;
  height: 20px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222222;
  font-weight: 400;
`,$=g(u)`
  display: flex;
  justify-content: space-between;
`,N=g(u)`
  padding-left: 24px;
  padding-right: 23px;
  padding-top: 30px;
`,z=g(H)`
  margin-bottom: 18px;
`,L=g(u)`
  font-size: 14px;
  margin-left: 8px;
`,I=g(u)`
  display: flex;
  flex-direction: column;
`,q=g(u)`
  height: 62px;
  padding-left: 24px;
  padding-right: 23px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #222222;
  font-weight: 500;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,D=g(u)``,R=g(u)`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222222;
  margin-left: 4px;
`;function T({dataSource:e,reset:o,type:c}){const s=W(n=>n.setFilterList),{state:i}=E(),[d,t]=f.exports.useState([]),[p,x]=f.exports.useState([]),y=f.exports.useMemo(()=>i.location.search.source==="/creativeCase"?"case":"market",[i.location.search.source]),k=f.exports.useMemo(()=>e.length,[e.length]),m=f.exports.useRef(!0),l=K.use(),{size:M,type:w}=i.location.search,B={market:{Style:l.TemplateMMarket.TemplateType,Size:l.TemplateMMarket.TemplateSize,Color:l.TemplateMMarket.TemplateColor,ItemType:l.TemplateMMarket.TemplateStyle},case:{Style:l.Case.CaseType,Size:l.Case.CaseSize,Color:l.Case.CaseColor,ItemType:l.Case.CaseStyle}}[y][c];f.exports.useEffect(()=>{t([])},[o]);const b=f.exports.useCallback(n=>{!n||(t(h=>h.includes(n==null?void 0:n.categoryName)?h.filter(C=>C!==(n==null?void 0:n.categoryName)):[...h,n==null?void 0:n.categoryName]),x(h=>{const C=(n==null?void 0:n.code)||(n==null?void 0:n.categoryName);return h.includes(C)?h.filter(G=>G!==C):[...h,C]}))},[t]);return f.exports.useEffect(()=>{if(M){const n=e==null?void 0:e.find(h=>(h==null?void 0:h.code)===M);b(n)}if(w){const n=e==null?void 0:e.find(h=>(h==null?void 0:h.code)===w);b(n)}},[e,b,M,w]),f.exports.useEffect(()=>{if(m.current){m.current=!1;return}t([]),x([])},[o]),f.exports.useEffect(()=>{s(c,p)},[d.toString()]),{len:k,chain:l,checked:d,titleName:B,onChecked:b,checkedKey:p,setFilterList:s}}function P({dataSource:e,reset:o}){const{checked:c,titleName:s,onChecked:i,len:d,checkedKey:t}=T({dataSource:e,reset:o,type:"Size"});return a(N,{children:[a($,{children:[r(S,{children:s}),a(F,{children:[" ",`${c.length}/${d}`]})]}),r(I,{children:e.map(p=>r(z,{checked:t.includes(p.code),onChange:()=>i(p),children:r(L,{children:p.categoryName})},p.categoryName))})]})}function Q({dataSource:e,reset:o}){const{checked:c,titleName:s,onChecked:i,len:d}=T({dataSource:e,reset:o,type:"ItemType"});return a(N,{children:[a($,{children:[r(S,{children:s}),a(F,{children:[" ",`${c.length}/${d}`]})]}),r(I,{children:e.map(t=>r(z,{checked:c.includes(t.categoryName),onChange:()=>i(t),children:r(L,{children:t.categoryName})},t.categoryName))})]})}const V=g(A)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,X=g(u)`
  ${({checked:e})=>`
    border-radius: 4px;
    margin-bottom: 12px !important;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${e&&"border: 2px solid #0166FA;"}
  `}
`,Y=g(u)`
  ${({checked:e,color:o})=>`
    width: 36px;
    height: 36px;
    background-color: ${o};
    border-radius: 4px;
    cursor: pointer;
    ${e&&"border: 2px solid #fff;"}
  `}
`;function j({dataSource:e,reset:o}){const{checked:c,titleName:s,onChecked:i,len:d}=T({dataSource:e,reset:o,type:"Color"});return a(N,{style:{marginBottom:"30px"},children:[a($,{children:[r(S,{children:s}),a(F,{children:[" ",`${c.length}/${d}`]})]}),r(V,{children:e.map(t=>r(X,{checked:c.includes(t.categoryName),children:r(Y,{color:t.color,checked:c.includes(t.id),onClick:()=>i(t)})},t.id))})]})}function v({dataSource:e,reset:o}){const{checked:c,titleName:s,onChecked:i,len:d,checkedKey:t}=T({dataSource:e,reset:o,type:"Style"});return a(N,{children:[a($,{children:[r(S,{children:s}),a(F,{children:[" ",`${c.length}/${d}`]})]}),r(I,{children:e.map(p=>r(z,{checked:t.includes(p.categoryName),onChange:()=>i(p),children:r(L,{children:p.categoryName})},p.categoryName))})]})}function Z({reset:e,isTemplateMarket:o}){const c=J(l=>l.globalConfig)||{},{Style:s=[],Color:i=[],Form:d=[],Size:t=[]}=c,{state:p}=E(),{source:x}=p.location.search,y=f.exports.useMemo(()=>[{title:v,dataSource:d},{title:P,dataSource:t},{title:Q,dataSource:s},{title:j,dataSource:i}],[i,d,t,s]),k=f.exports.useMemo(()=>[{title:v,dataSource:d},{title:j,dataSource:i}],[i,d]),m=f.exports.useMemo(()=>x==="/creativeCase"?y.filter(l=>l.title!==P):o?y:k,[k,o,x,y]);return r("div",{children:m.map(l=>r(l.title,{dataSource:l.dataSource,reset:e},JSON.stringify(l.dataSource)))})}function _({setReset:e}){const o=K.use(),c=()=>{e(s=>!s)};return a(q,{children:[r(D,{children:o.TemplateEditorPage.Filter}),a(R,{children:[r(O,{type:"shuaxin"}),a(R,{onClick:c,children:[" ",o.Button.Reset," "]})]})]})}const ee=g(u)`
  ${({isTemplateMarket:e})=>`
    width: 280px;
    height: 100%;
    background: #fff;
    ${e?"border-radius: 8px; height: calc(100vh - 142px); overflow-y: scroll":"border-right: 1px solid #d8d8d8;"}
  `}
`;function oe(){const[e,o]=f.exports.useState(!1),{pathname:c}=U(),s=c==="/waterFilterList";return a(ee,{isTemplateMarket:s,children:[r(_,{setReset:o}),r(Z,{reset:e,isTemplateMarket:s})]})}export{oe as F};
