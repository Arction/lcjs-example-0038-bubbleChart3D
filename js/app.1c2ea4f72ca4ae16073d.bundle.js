(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,a,t)=>{const n=t(377),{lightningChart:i,PointShape:s,Themes:r}=n,d=i({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Chart3D({theme:r[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Bubble Chart with 4 KPIs and data grouping");new Array(3).fill(0).map((e=>{const a=new Array(1e3);for(let e=0;e<1e3;e+=1){const t=Math.random(),n=Math.random()**10,i=Math.random(),s=1+19*Math.random()**3;a[e]={x:t,y:n,z:i,size:s}}return a})).map(((e,a)=>d.addPointSeries({individualPointSizeEnabled:!0}).setName(`Group ${a+1}`).add(e))),d.getDefaultAxisX().setTitle("KPI X").fit(!1),d.getDefaultAxisY().setTitle("KPI Y").fit(!1),d.getDefaultAxisZ().setTitle("KPI Z").fit(!1),d.addLegendBox().add(d)}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);