(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const i=a(89),{lightningChart:n,PointShape:s,Themes:d}=i,r=n().Chart3D({}).setTitle("Bubble Chart with 4 KPIs and data grouping");new Array(3).fill(0).map((e=>{const t=new Array(1e3);for(let e=0;e<1e3;e+=1){const a=Math.random(),i=Math.random()**10,n=Math.random(),s=1+19*Math.random()**3;t[e]={x:a,y:i,z:n,size:s}}return t})).map(((e,t)=>r.addPointSeries({individualPointSizeEnabled:!0}).setName(`Group ${t+1}`).add(e))),r.getDefaultAxisX().setTitle("KPI X").fit(!1),r.getDefaultAxisY().setTitle("KPI Y").fit(!1),r.getDefaultAxisZ().setTitle("KPI Z").fit(!1),r.addLegendBox().add(r)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);