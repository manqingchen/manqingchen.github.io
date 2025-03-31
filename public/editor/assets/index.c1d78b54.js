import{i as d,r as h,s as y,f as u,d as l,j as n,I as f,n as a,B as r,k as t,T as g,l as m}from"./index.b13d347f.js";import{r as B,b as R,a as w,D}from"./index.11830267.js";import{E as b}from"./index.1020cbf5.js";import"./index.383a2cf9.js";import"./index.6be00e2e.js";import"./index.7dbda1c3.js";function T(){const e=d.use(),[s,o]=h.exports.useState([]),c=async()=>{const{list:p}=await B({pageRequest:{pageNo:1,pageSize:1e4}});o(p)},i=async()=>{await c()},x=()=>{y.confirm({width:382,height:204,title:e.RecycleBin.ClearRecycleBin,content:e.RecycleBin.ClearRecycleBinDesc,onOk:async()=>{await R()&&(await i(),u.show({message:e.Toast.RecycleClearSuccess}))}})};return h.exports.useEffect(()=>{(async()=>await c())()},[]),{recycleBinList:s,$onRefreshList:i,handleBatchDelete:x}}const L=a(r)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  background-color: ${()=>t("colors.emphasis.0")};
  box-shadow: 0px 0px 4px 1px rgba(237, 237, 237, 0.5);
`,$=a(r)`
  height: 77px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${()=>t("colors.ipaintter.7")};
`,C=a(g)`
  font-size: 20px;
  font-weight: 500;
  color: ${()=>t("colors.emphasis.80")};
`,j=a(m)`
  padding: 0 !important;
  font-size: 14px;
  color: ${()=>t("colors.ipaintter.5")};

  &:hover {
    color: ${()=>t("colors.ipaintter.5")} !important;

    svg path {
      fill: ${()=>t("colors.ipaintter.5")} !important;
    }
  }
`,E=a(r)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  padding: 24px 31px;
`;function N(){const e=d.use(),{recycleBinList:s,$onRefreshList:o,handleBatchDelete:c}=T();return l(L,{children:[l($,{children:[n(C,{children:e.RecycleBin.Title}),n(j,{shape:"text",onClick:c,disabled:s.length===0,leftElement:n(f,{size:24,type:"a-shejikongjianshanchu"}),children:"\u6E05\u7A7A\u56DE\u6536\u7AD9"})]}),l(E,{children:[s.map(i=>n(w,{type:D.RecycleBin,$onRefreshList:o,...i},i.id)),s.length===0&&n(b,{text:e.RecycleBin.None,description:e.RecycleBin.DeleteDesc})]})]})}export{N as default};
