import{n as a,B as l,r as o,j as t}from"./index.b13d347f.js";const m=a("img")`
  ${({visible:e})=>`
    width: 100vw;
    height: 100vh;
    display: ${e?"block":"none"};
  `}
`,d=a(l)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;function u({style:e,color:i,imgStyle:n,children:s,visible:r}){const c=o.exports.useMemo(()=>({title:"loading",source:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:${i};display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="30" cy="50" fill="#00e0e2" r="20">
      <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
    </circle>
    <circle cx="70" cy="50" fill="#0166fa" r="20">
      <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="0s"></animate>
    </circle>
    <circle cx="30" cy="50" fill="#00e0e2" r="20">
      <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
      <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"></animate>
    </circle>
    </svg>`}),[i]);return t(d,{style:e,children:t(m,{style:n,visible:r,className:"ErrorImg",src:`data:image/svg+xml;utf-8,${encodeURIComponent(c.source)}`,alt:"",children:s})})}u.defaultProps={style:void 0,children:void 0,color:"#ffffff",imgStyle:{width:"100%",height:"100%"}};export{u as L};
