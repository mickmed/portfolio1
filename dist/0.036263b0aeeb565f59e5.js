(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{73:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(0);c(74);const a=(e,t,c,a)=>{let o=Object(n.c)("div","project-img"),i=Object(n.c)("div","img-wrapper");o.appendChild(i);let d=Object(n.c)("div","inner-img-wrap");if(i.appendChild(d),d.appendChild(Object(n.c)("img","img")).src=e,!0===c){let e=d.appendChild(Object(n.c)("div","modal"));e.classList.add("project-modal","modal-slide");e.appendChild(Object(n.c)("span","modal-span")),e.childNodes[0].appendChild(Object(n.c)("h2","project-title"));e.childNodes[0].childNodes[0].innerText=t}return o}},74:function(e,t,c){var n=c(1),a=c(75);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(n(a,o),a.locals?a.locals:{});e.exports=i},75:function(e,t,c){},76:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(5);const a=Object(n.a)();let o=async e=>await fetch(`${a}/technologies`).then(e=>e.json()).then(e=>e)},77:function(e,t,c){"use strict";c.d(t,"c",(function(){return o})),c.d(t,"a",(function(){return i})),c.d(t,"d",(function(){return d})),c.d(t,"b",(function(){return s}));var n=c(5);const a=Object(n.a)();let o=async()=>await fetch(`${a}/projects`).then(e=>e.json()).then(e=>e);const i=async e=>{console.log("ere"),console.log(JSON.stringify(e));const t=await fetch(`${a}/projects`,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e);console.log(t)},d=async(e,t)=>{console.log(JSON.stringify(e));await fetch(`${a}/projects/${t}`,{method:"put",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e)},s=async e=>{const t=await fetch(`${a}/projects/${e}`,{method:"delete",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e);console.log(t)}},80:function(e,t,c){"use strict";c.r(t),c.d(t,"Projects",(function(){return r}));var n=c(0),a=c(6),o=(c(76),c(73)),i=c(77),d=c(4),s=c(81);c(82);const l=e=>{for(;e.childNodes.length;)e.removeChild(e.lastChild)};async function r(){let e=Object(n.e)(".main-content-scrollable");l(e),e.appendChild(Object(n.c)("div","loading")).innerHTML="loading...";const t=await Object(i.c)();l(e);const c=e.clientHeight;if(console.log(c),t.forEach(async(t,c)=>{let l=e.appendChild(Object(n.c)("div","project-wrap")),p=(l.appendChild(Object(o.a)(`src/img/${t.img_url}`,t.name,!0,t.site_url)),"false"),h=Object(n.c)("div","link-modal"),j=Object(n.f)(".img-wrapper"),u=Object(n.f)(".inner-img-wrap"),b=Object(n.c)("div","tech-icons");t.technologies.forEach(e=>{b.appendChild(Object(n.c)("img","tech-icon")).src=`src/img/${e.icon_url}`}),h.appendChild(b);let f=h.appendChild(Object(n.c)("div","link-modal-icons"));if(f.innerHTML=`<a href=${t.site_url} target='_blank'><i class="fas fa-home fa-fw"></i></a>`,j[c].addEventListener("click",async()=>{if("true"===p)p="false",u[c].classList.add("close-curtain"),u[c].classList.remove("open-curtain"),j[c].lastChild.remove();else if("false"===p){p="true",u[c].classList.add("open-curtain"),u[c].classList.remove("close-curtain"),j[c].appendChild(h),j[c].style.setProperty("--animation","animate-img-wrapper 1.5s linear forwards"),u[c].appendChild(f)}}),await Object(a.d)()){const e=Object(n.c)("div","edit-project-wrapper"),c=Object(d.a)("show-edit-button","submit","update");c.addEventListener("click",()=>{console.log(l.lastChild.className),"edit-project-form"!==l.lastChild.className?Object(s.EditProject)(l,t):l.lastChild.remove()}),e.appendChild(c);const a=Object(d.a)("delete-project","submit","delete");a.addEventListener("click",async()=>{let e=confirm(`Are you sure you want to delete ${t.name}?`);e&&await Object(i.b)(t.id),e&&await r()}),e.appendChild(a),l.appendChild(e)}}),await Object(a.d)()){let c=Object(d.a)("show-add-form","submit","add project");c.addEventListener("click",()=>{console.log(e.lastChild.className),"show-add-form"===e.lastChild.className?Object(s.EditProject)(e,t[0],"addProject"):e.lastChild.remove()}),Object(n.b)(e,c)}}},81:function(e,t,c){"use strict";c.r(t),c.d(t,"EditProject",(function(){return s}));var n=c(4),a=c(76),o=c(77),i=c(80),d=c(0);const s=async(e,t,c)=>{if(console.log("add",c),"addProject"===c)for(let e in t)t[e]="";let s={},l=e=>{s[e.target.name]=e.target.value},r=Object(n.c)("edit-project-form"),p=Object(d.c)("div","edit-form-inputs");r.appendChild(p),Object.keys(t).forEach(e=>{if("id"!==e&&"technologies"!==e&&"created_at"!==e&&"updated_at"!==e){s[e]=t[e];const a=Object(n.d)({className:"edit-form-input",name:e,type:"text",value:"addProject"===c?"":s[e],placeholder:e,handleChange:l});p.appendChild(a)}});const h=Object(d.c)("div","edit-form-checkboxes");r.appendChild(h),(await Object(a.a)()).map(e=>{let a;void 0===c&&t.technologies.forEach(t=>{e.name===t.name&&(console.log(e.name,t.name),a="checked")});let o=Object(n.b)({className:"edit-project-chkbox",name:e.name,id:e.name,value:e.id,checked:"addProject"===c?"":a});h.appendChild(o),h.appendChild(Object(n.e)("tech-box-label",e.name,"tech-box"))}),r.appendChild(Object(n.a)("edit-project-button","submit","addProject"===c?"add new project":"submit")),Object(d.b)(e,r),r.addEventListener("submit",async e=>{e.preventDefault(),console.log("add",c);const n=document.querySelectorAll("input[type=checkbox]:checked");console.log(n),s.technologies=[],n.forEach(e=>{s.technologies.push(e.value)}),console.log("add",s),"addProject"===c?await Object(o.a)(s):await Object(o.d)(s,t.id),await Object(i.Projects)()})}},82:function(e,t,c){var n=c(1),a=c(83);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(n(a,o),a.locals?a.locals:{});e.exports=i},83:function(e,t,c){}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TaGFyZWQvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2hhcmVkL2ltYWdlLnNjc3M/NDQ2MSIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TZXJ2aWNlcy9BcGlUZWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NlcnZpY2VzL0FwaVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdHMvRWRpdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdHMvcHJvamVjdHMuc2NzcyJdLCJuYW1lcyI6WyJJbWFnZSIsInNyYyIsInRpdGxlIiwibW9kYWwiLCJzaXRlX3VybCIsInByb2plY3RJbWciLCJpbWdXcmFwcGVyIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaGlsZE5vZGVzIiwiaW5uZXJUZXh0IiwiYXBpIiwiY29udGVudCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwibW9kdWxlIiwiaSIsIm9wdGlvbnMiLCJleHBvcnRlZCIsImxvY2FscyIsImV4cG9ydHMiLCJiYXNlVXJsIiwiZ2V0VGVjaG5vbG9naWVzIiwiYXN5bmMiLCJ0eXBlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImFucyIsImdldFByb2plY3RzIiwiYWRkUHJvamVjdCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwidXBkYXRlUHJvamVjdCIsImlkIiwiZGVsZXRlUHJvamVjdCIsImNsZWFyUGFnZSIsImVsZW1lbnQiLCJsZW5ndGgiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsIlByb2plY3RzIiwibWFpbkNvbnRlbnQiLCJpbm5lckhUTUwiLCJyZXNwIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZm9yRWFjaCIsInByb2plY3QiLCJpbmRleCIsInByb2plY3RXcmFwIiwiYm9vbCIsImltZ191cmwiLCJuYW1lIiwibGlua01vZGFsIiwiaW5uZXJJbWdXcmFwIiwidGVjaEljb25zIiwidGVjaG5vbG9naWVzIiwiaWNvbiIsImljb25fdXJsIiwibGlua01vZGFsSWNvbnMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImVkaXRQcm9qZWN0V3JhcHBlciIsImVkaXRCdXR0b24iLCJjbGFzc05hbWUiLCJkZWxldGVCdXR0b24iLCJhbnN3ZXIiLCJjb25maXJtIiwiYWRkQnRuIiwiRWRpdFByb2plY3QiLCJpdGVtIiwibmV3UHJvamVjdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm0iLCJpbnB1dHMiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImNoZWNrcyIsIm1hcCIsInRlY2hub2xvZ3kiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwicHJvamVjdFRlY2hub2xvZ3kiLCJieCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY2hlY2tib3hlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJveCIsInB1c2giXSwibWFwcGluZ3MiOiJ5RkFBQSxtREFFTyxNQUFNQSxFQUFRLENBQUNDLEVBQUtDLEVBQU9DLEVBQU9DLEtBRXZDLElBQUlDLEVBQWEsWUFBSyxNQUFPLGVBRXpCQyxFQUFhLFlBQUssTUFBTyxlQUM3QkQsRUFBV0UsWUFBWUQsR0FDdkIsSUFBSUUsRUFBTSxZQUFLLE1BQU8sa0JBUXRCLEdBUEFGLEVBQVdDLFlBQVlDLEdBR2JBLEVBQUlELFlBQVksWUFBSyxNQUFPLFFBQ2xDTixJQUFNQSxHQUdJLElBQVZFLEVBQWdCLENBQ2xCLElBQUlBLEVBQVFLLEVBQUlELFlBQVksWUFBSyxN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QUNqQm5CLEdBQUlzRCxFQUFXbkMsS0FDZnlCLE1BQVFVLEVBQVd0RCxHQUNuQnVELFFBQXdCLGVBQWZqRSxFQUE4QixHQUFLaUUsSUFHOUNILEVBQU94RixZQUFZOEYsR0FDbkJOLEVBQU94RixZQUFZLFlBQU0saUJBQWtCMEYsRUFBV25DLEtBQU0sZUFHOUQwQixFQUFLakYsWUFDSCxZQUNFLHNCQUNBLFNBQ2UsZUFBZjBCLEVBQThCLGtCQUFvQixXQUt0RCxZQUFHMEIsRUFBYTZCLEdBTWhCQSxFQUFLbEIsaUJBQWlCLFNBQVU3QyxNQUFPNkUsSUFDckNBLEVBQUlDLGlCQUNKcEUsUUFBUUMsSUFBSSxNQUFPSCxHQUVuQixNQUFNdUUsRUFBYUMsU0FBU0MsaUJBQWlCLGdDQUM3Q3ZFLFFBQVFDLElBQUlvRSxHQUNackIsRUFBV2pCLGFBQWUsR0FDMUJzQyxFQUFXaEQsUUFBU21ELElBQ2xCeEIsRUFBV2pCLGFBQWEwQyxLQUFLRCxFQUFJcEIsU0FFbkNwRCxRQUFRQyxJQUFJLE1BQU8rQyxHQUNKLGVBQWZsRCxRQUNVLFlBQWNrRCxTQUNkLFlBQWNBLEVBQVkxQixFQUFRZCxVQUV0Qyx5QixtQkMzR1YsSUFBSTlCLEVBQU0sRUFBUSxHQUNGQyxFQUFVLEVBQVEsSUFJQyxpQkFGdkJBLEVBQVVBLEVBQVFDLFdBQWFELEVBQVFFLFFBQVVGLEtBRy9DQSxFQUFVLENBQUMsQ0FBQ0csRUFBT0MsRUFBSUosRUFBUyxNQUc5QyxJQUFJSyxFQUFVLENBRWQsT0FBaUIsT0FDakIsV0FBb0IsR0FJaEJDLEdBRlNQLEVBQUlDLEVBQVNLLEdBRVhMLEVBQVFPLE9BQVNQLEVBQVFPLE9BQVMsSUFJakRKLEVBQU9LLFFBQVVGLEciLCJmaWxlIjoiMC4wMzYyNjNiMGFlZWI1NjVmNTllNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNlY2wsIHFzIH0gZnJvbSBcIi4uL0hlbHBlcnMvZG9tSGVscGVyLmpzXCJcbmltcG9ydCBcIi4vaW1hZ2Uuc2Nzc1wiXG5leHBvcnQgY29uc3QgSW1hZ2UgPSAoc3JjLCB0aXRsZSwgbW9kYWwsIHNpdGVfdXJsKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHNyYylcbiAgbGV0IHByb2plY3RJbWcgPSBjZWNsKFwiZGl2XCIsIFwicHJvamVjdC1pbWdcIilcblxuICBsZXQgaW1nV3JhcHBlciA9IGNlY2woXCJkaXZcIiwgXCJpbWctd3JhcHBlclwiKVxuICBwcm9qZWN0SW1nLmFwcGVuZENoaWxkKGltZ1dyYXBwZXIpXG4gIGxldCBkaXYgPSBjZWNsKFwiZGl2XCIsIFwiaW5uZXItaW1nLXdyYXBcIilcbiAgaW1nV3JhcHBlci5hcHBlbmRDaGlsZChkaXYpXG5cblxuICBsZXQgaW1nID0gZGl2LmFwcGVuZENoaWxkKGNlY2woXCJpbWdcIiwgXCJpbWdcIikpXG4gIGltZy5zcmMgPSBzcmNcblxuXG4gIGlmIChtb2RhbCA9PT0gdHJ1ZSkge1xuICAgIGxldCBtb2RhbCA9IGRpdi5hcHBlbmRDaGlsZChjZWNsKFwiZGl2XCIsIFwibW9kYWxcIikpXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbW9kYWxcIiwgXCJtb2RhbC1zbGlkZVwiKVxuICAgIGxldCBtb2RhbFNwYW4gPSBtb2RhbC5hcHBlbmRDaGlsZChjZWNsKFwic3BhblwiLCBcIm1vZGFsLXNwYW5cIikpXG4gICAgbGV0IGgyID0gbW9kYWwuY2hpbGROb2Rlc1swXS5hcHBlbmRDaGlsZChjZWNsKFwiaDJcIiwgXCJwcm9qZWN0LXRpdGxlXCIpKVxuICAgIG1vZGFsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5pbm5lclRleHQgPSB0aXRsZVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJwcm9qZWN0dGl0bGVcIiwgaDIpXG4gICAgLy8gaWYgKGltZy5oZWlnaHQgPiBpbWcud2lkdGgpIHtcbiAgICAvLyAgIG1vZGFsU3Bhbi5zdHlsZS50cmFuc2Zvcm0gPSBcInNrZXcoLTEwZGVnKSB0cmFuc2xhdGVYKC0zMCUpXCJcbiAgICAvLyAgIG1vZGFsU3Bhbi5zdHlsZS53aWR0aCA9ICc2MCUnXG4gICAgLy8gICBoMi5zdHlsZS50cmFuc2Zvcm0gPSBcInNrZXcoMTBkZWcpIHRyYW5zbGF0ZSgxJSlcIlxuICAgIC8vICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpXG4gICAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCk9PntcbiAgICAvLyAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCl7XG4gICAgLy8gICAgIGltZ1dyYXBwZXIuc3R5bGUud2lkdGggPSAnNDAlJ1xuICAgIC8vICAgfWVsc2V7XG4gICAgLy8gICAgIGltZ1dyYXBwZXIuc3R5bGUud2lkdGggPSAnNzAlJ1xuICAgIC8vICAgfVxuICAgIC8vICAgfSlcbiAgICBcbiAgICAvLyAgIC8vIGltZ1dyYXBwZXIuc3R5bGUud2lkdGggPSAnNDAlJ1xuICAgIC8vICAgLy8gaDIuc3R5bGUuXG4gICAgLy8gfVxuICAgIFxuXG4gIFxuXG4gICAgLy8gbGlua01vZGFsTW9yZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZXZ0ID0+IHtcbiAgICAvLyAgIGxldCByZXMgPSBhd2FpdCBzaG93U2luZ2xlSXRlbW0oZXZ0LCBlLCBcInByb2plY3RzXCIpO1xuXG4gICAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIC8vICAgbmF2YmFyKHsgcHJvamVjdDogZSB9KTtcbiAgICAvLyAgIHByb2plY3RzKFwicHJvamVjdFwiLCB7XG4gICAgLy8gICAgIHByb2plY3Q6IGUsXG4gICAgLy8gICAgIHRlY2hub2xvZ2llczogcmVzLnRlY2hub2xvZ2llcyxcbiAgICAvLyAgICAgdHJhaXRzOiByZXMudHJhaXRzXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIHRlY2hub2xvZ2llcyhcInRlY2hub2xvZ2llc1wiLCB7IHRlY2hub2xvZ2llczogcmVzLnRlY2hub2xvZ2llcyB9KTtcbiAgICAvLyB9KTtcblxuICAgIC8vIGxldCBsaW5rTW9kYWxTaXRlQnRuID0gbWFrZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzaXRlLWJ1dHRvblwiLCBsaW5rTW9kYWwsIHtcbiAgICAvLyAgIGlubmVyVGV4dDogXCJ2aXNpdCBzaXRlXCJcbiAgICAvLyB9KTtcbiAgICAvLyBsaW5rTW9kYWxTaXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldnQgPT4ge1xuICAgIC8vICAgbG9jYXRpb24uaHJlZiA9IGUuc2l0ZV91cmw7XG4gICAgLy8gICB0YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3RJbWdcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ltYWdlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHsgQmFzZVVybH0gZnJvbSAnLi9CYXNlVXJsLmpzJ1xuY29uc3QgYmFzZVVybCA9IEJhc2VVcmwoKVxuXG5cblxuXG5leHBvcnQgbGV0IGdldFRlY2hub2xvZ2llcyA9IGFzeW5jICh0eXBlKSA9PiB7XG4gIGxldCByZXN1bHRzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vdGVjaG5vbG9naWVzYClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgIFxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKChhbnMpID0+IHtcbiAgICAgIHJldHVybiBhbnNcbiAgICB9KVxuXG4gIHJldHVybiB0eXBlLCByZXN1bHRzXG59IiwiaW1wb3J0IHsgQmFzZVVybH0gZnJvbSAnLi9CYXNlVXJsLmpzJ1xuY29uc3QgYmFzZVVybCA9IEJhc2VVcmwoKVxuXG5cbmV4cG9ydCBsZXQgZ2V0UHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG4gIGxldCByZXN1bHRzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vcHJvamVjdHNgKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIFxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKChhbnMpID0+IHtcbiAgICAgIHJldHVybiBhbnNcbiAgICB9KVxuXG4gIHJldHVybiByZXN1bHRzXG59XG5cbmV4cG9ydCBsZXQgZ2V0UHJvamVjdCA9IGFzeW5jIChpZCkgPT4ge1xuICBsZXQgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vcHJvamVjdHMvJHtpZH1gKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIFxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKChhbnMpID0+IHtcbiAgICAgIHJldHVybiBhbnNcbiAgICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gYXN5bmMgKGJvZHkpID0+IHtcbiAgY29uc29sZS5sb2coJ2VyZScpXG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9wcm9qZWN0c2AsIHtcbiAgICBtZXRob2Q6IGBwb3N0YCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICBjb25zb2xlLmxvZyhyZXMpXG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2plY3QgPSBhc3luYyAoYm9keSwgaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShib2R5KSlcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9wcm9qZWN0cy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogYHB1dGAsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICByZXR1cm4ganNvbi5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiBcbiAgfVxuLy9cbiAgZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSBhc3luYyAoaWQpID0+IHtcblxuICBcbiAgIFxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L3Byb2plY3RzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiBgZGVsZXRlYCxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHJldHVybiBqc29uLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlcylcbiAgfVxuXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9qZWN0VGVjaG5vbG9naWVzID0gYXN5bmMocHJvamVjdF9pZCwgaWQpPT57XG4gIGNvbnNvbGUubG9nKCd1cHQnKVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9wcm9qZWN0cy8ke3Byb2plY3RfaWR9L3RlY2hub2xvZ2llcy8ke2lkfWAsIHtcbiAgICBtZXRob2Q6IGBwdXRgLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gIH0pXG4gIC50aGVuKChqc29uKSA9PiB7XG4gICAgcmV0dXJuIGpzb24uanNvbigpXG4gIH0pXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIGRhdGFcbiAgfSlcbmNvbnNvbGUubG9nKHJlcylcblxufSIsIi8vIGltcG9ydCBcIi4uL1NoYXJlZC9JbWFnZVwiXG5pbXBvcnQgeyBxcywgcXNhLCBjZWNsLCBhYywgYnRuIH0gZnJvbSBcIi4uL0hlbHBlcnMvZG9tSGVscGVyXCJcbmltcG9ydCB7IHZlcmlmeSB9IGZyb20gXCIuLi9TZXJ2aWNlcy9BcGlBdXRoLmpzXCJcbmltcG9ydCB7IGdldFRlY2hub2xvZ2llcyB9IGZyb20gXCIuLi9TZXJ2aWNlcy9BcGlUZWNoLmpzXCJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIi4uL1NoYXJlZC9JbWFnZS5qc1wiXG5cbmltcG9ydCB7XG4gIGdldFByb2plY3RzLFxuICBhZGRQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0LFxuICBkZWxldGVQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0VGVjaG5vbG9naWVzLFxufSBmcm9tIFwiLi4vU2VydmljZXMvQXBpUHJvamVjdC5qc1wiXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja2JveCwgTGFiZWwgfSBmcm9tIFwiLi4vU2hhcmVkL0Zvcm0uanNcIlxuaW1wb3J0IHsgRWRpdFByb2plY3QgfSBmcm9tIFwiLi9FZGl0UHJvamVjdFwiXG5pbXBvcnQgXCIuL3Byb2plY3RzLnNjc3NcIlxuXG4vKioqKioqKioqKlxuIENMRUFSIFBBR0VcbioqKioqKioqKioqL1xuY29uc3QgY2xlYXJQYWdlID0gKGVsZW1lbnQpID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgbGV0IG1haW5Db250ZW50ID0gcXMoXCIubWFpbi1jb250ZW50LXNjcm9sbGFibGVcIilcbiAgY2xlYXJQYWdlKG1haW5Db250ZW50KVxuICBsZXQgbG9hZGluZyAgPSBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjZWNsKFwiZGl2XCIsIFwibG9hZGluZ1wiKSlcbiAgbG9hZGluZy5pbm5lckhUTUwgPSBcImxvYWRpbmcuLi5cIlxuXG5cbiAgLyoqKioqKioqKioqKioqXG4gIFJFTkRFUiBQUk9KRUNUU1xuICAqKioqKioqKioqKioqKiovXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBnZXRQcm9qZWN0cygpXG4gIGNsZWFyUGFnZShtYWluQ29udGVudClcblxuXG4gIGNvbnN0IGhlaWdodCA9IG1haW5Db250ZW50LmNsaWVudEhlaWdodFxuICBjb25zb2xlLmxvZyhoZWlnaHQpXG4gIHJlc3AuZm9yRWFjaChhc3luYyAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBsZXQgcHJvamVjdFdyYXAgPSBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjZWNsKFwiZGl2XCIsIFwicHJvamVjdC13cmFwXCIpKVxuICAgIGxldCBpbWFnZSA9IHByb2plY3RXcmFwLmFwcGVuZENoaWxkKFxuICAgICAgSW1hZ2UoYHNyYy9pbWcvJHtwcm9qZWN0LmltZ191cmx9YCwgcHJvamVjdC5uYW1lLCB0cnVlLCBwcm9qZWN0LnNpdGVfdXJsKVxuICAgIClcbiAgICBsZXQgYm9vbCA9IFwiZmFsc2VcIlxuICAgIGxldCBsaW5rTW9kYWwgPSBjZWNsKFwiZGl2XCIsIFwibGluay1tb2RhbFwiKVxuXG4gICAgbGV0IGltZ1dyYXBwZXIgPSBxc2EoXCIuaW1nLXdyYXBwZXJcIilcbiAgICBsZXQgaW5uZXJJbWdXcmFwID0gcXNhKFwiLmlubmVyLWltZy13cmFwXCIpXG4gICAgbGV0IHRlY2hJY29ucyA9IGNlY2woXCJkaXZcIiwgXCJ0ZWNoLWljb25zXCIpXG4gICAgcHJvamVjdC50ZWNobm9sb2dpZXMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgbGV0IHRlY2hJY29uID0gdGVjaEljb25zLmFwcGVuZENoaWxkKGNlY2woXCJpbWdcIiwgXCJ0ZWNoLWljb25cIikpXG4gICAgICB0ZWNoSWNvbi5zcmMgPSBgc3JjL2ltZy8ke2ljb24uaWNvbl91cmx9YFxuICAgIH0pXG4gICAgbGlua01vZGFsLmFwcGVuZENoaWxkKHRlY2hJY29ucylcbiAgICBsZXQgbGlua01vZGFsSWNvbnMgPSBsaW5rTW9kYWwuYXBwZW5kQ2hpbGQoY2VjbChcImRpdlwiLCBcImxpbmstbW9kYWwtaWNvbnNcIikpXG4gICAgbGlua01vZGFsSWNvbnMuaW5uZXJIVE1MID0gYDxhIGhyZWY9JHtwcm9qZWN0LnNpdGVfdXJsfSB0YXJnZXQ9J19ibGFuayc+PGkgY2xhc3M9XCJmYXMgZmEtaG9tZSBmYS1md1wiPjwvaT48L2E+YFxuXG4gICAgLyoqKioqKioqKioqKioqXG4gICAgQUREIExJTksgTU9EQUxcbiAgICAqKioqKioqKioqKioqKiovXG4gICAgaW1nV3JhcHBlcltpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChib29sID09PSBcInRydWVcIikge1xuICAgICAgICBib29sID0gXCJmYWxzZVwiXG4gICAgICAgIGlubmVySW1nV3JhcFtpbmRleF0uY2xhc3NMaXN0LmFkZChcImNsb3NlLWN1cnRhaW5cIilcbiAgICAgICAgaW5uZXJJbWdXcmFwW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1jdXJ0YWluXCIpXG4gICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLmxhc3RDaGlsZC5yZW1vdmUoKVxuICAgICAgfSBlbHNlIGlmIChib29sID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgYm9vbCA9IFwidHJ1ZVwiXG4gICAgICAgIGlubmVySW1nV3JhcFtpbmRleF0uY2xhc3NMaXN0LmFkZChcIm9wZW4tY3VydGFpblwiKVxuICAgICAgICBpbm5lckltZ1dyYXBbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZS1jdXJ0YWluXCIpXG4gICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLmFwcGVuZENoaWxkKGxpbmtNb2RhbClcbiAgICAgICAgLy8gbGV0IHN0eWxlRWxlbSA9IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpKTtcbiAgICAgICAgLy8gc3R5bGVFbGVtLmlubmVySFRNTCA9IFwiLmltZy13cmFwcGVyOmJlZm9yZSB7YW5pbWF0aW9uOiBhbmltYXRlLWltZy13cmFwcGVyIDEuNXMgbGluZWFyIGZvcndhcmRzO31cIlxuICAgICAgICBsZXQgaXcgPSBpbWdXcmFwcGVyW2luZGV4XS5zdHlsZVxuICAgICAgICBpdy5zZXRQcm9wZXJ0eShcbiAgICAgICAgICBcIi0tYW5pbWF0aW9uXCIsXG4gICAgICAgICAgXCJhbmltYXRlLWltZy13cmFwcGVyIDEuNXMgbGluZWFyIGZvcndhcmRzXCJcbiAgICAgICAgKVxuICAgICAgICBpbm5lckltZ1dyYXBbaW5kZXhdLmFwcGVuZENoaWxkKGxpbmtNb2RhbEljb25zKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKlxuICAgICBFRElUIFBST0pFQ1QgQlVUVE9OXG4gICAgKioqKioqKioqKioqKioqKioqKiovXG4gICAgaWYgKGF3YWl0IHZlcmlmeSgpKSB7XG4gICAgICBjb25zdCBlZGl0UHJvamVjdFdyYXBwZXIgPSBjZWNsKFwiZGl2XCIsIFwiZWRpdC1wcm9qZWN0LXdyYXBwZXJcIilcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBCdXR0b24oXCJzaG93LWVkaXQtYnV0dG9uXCIsIFwic3VibWl0XCIsIFwidXBkYXRlXCIpXG4gICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RXcmFwLmxhc3RDaGlsZC5jbGFzc05hbWUpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9qZWN0V3JhcC5sYXN0Q2hpbGQuY2xhc3NOYW1lICE9PSBcImVkaXQtcHJvamVjdC1mb3JtXCJcbiAgICAgICAgKVxuICAgICAgICAgIEVkaXRQcm9qZWN0KHByb2plY3RXcmFwLCBwcm9qZWN0KVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwcm9qZWN0V3JhcC5sYXN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGVkaXRQcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBERUxFVEUgUFJPSkVDVCBCVVRUT05cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBCdXR0b24oXCJkZWxldGUtcHJvamVjdFwiLCBcInN1Ym1pdFwiLCBcImRlbGV0ZVwiKVxuICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBhbnN3ZXIgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7cHJvamVjdC5uYW1lfT9gKVxuICAgICAgICBhbnN3ZXIgJiYgYXdhaXQgZGVsZXRlUHJvamVjdChwcm9qZWN0LmlkKVxuICAgICAgICBhbnN3ZXIgJiYgYXdhaXQgUHJvamVjdHMoKVxuICAgICAgfSlcbiAgICAgIGVkaXRQcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG5cbiAgICAgIHByb2plY3RXcmFwLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0V3JhcHBlcilcbiAgICB9XG4gIH0pXG5cbiAgLyoqKioqKioqKioqXG4gIEFERCBQUk9KRUNUIFxuICAqKioqKioqKioqKiovXG4gIGlmIChhd2FpdCB2ZXJpZnkoKSkge1xuICAgIGxldCBhZGRCdG4gPSBCdXR0b24oXCJzaG93LWFkZC1mb3JtXCIsIFwic3VibWl0XCIsIFwiYWRkIHByb2plY3RcIilcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1haW5Db250ZW50Lmxhc3RDaGlsZC5jbGFzc05hbWUpXG4gICAgICBpZiAobWFpbkNvbnRlbnQubGFzdENoaWxkLmNsYXNzTmFtZSA9PT0gXCJzaG93LWFkZC1mb3JtXCIpXG4gICAgICAgIEVkaXRQcm9qZWN0KG1haW5Db250ZW50LCByZXNwWzBdLCBcImFkZFByb2plY3RcIilcbiAgICAgIGVsc2Uge1xuICAgICAgICBtYWluQ29udGVudC5sYXN0Q2hpbGQucmVtb3ZlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYWMobWFpbkNvbnRlbnQsIGFkZEJ0bilcbiAgfVxuXG4gIC8vIC8vZG93biBidXR0b25cblxuICAvLyBjb25zdCBzZWVNb3JlQnRuID0gQnV0dG9uKCdzZWUtbW9yZS1idG4nLCAnc3VibWl0JywgJ3NlZSBtb3JlJylcblxuICAvLyBhYyhtYWluQ29udGVudCwgc2VlTW9yZUJ0bilcblxuXG5cbn1cbiIsImltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94LCBMYWJlbCB9IGZyb20gXCIuLi9TaGFyZWQvRm9ybS5qc1wiXG5pbXBvcnQgeyBnZXRUZWNobm9sb2dpZXMgfSBmcm9tIFwiLi4vU2VydmljZXMvQXBpVGVjaC5qc1wiXG5pbXBvcnQge1xuICBnZXRQcm9qZWN0LFxuICBhZGRQcm9qZWN0IGFzIGFkZE5ld1Byb2plY3QsXG4gIHVwZGF0ZVByb2plY3QsXG4gIGRlbGV0ZVByb2plY3QsXG4gIHVwZGF0ZVByb2plY3RUZWNobm9sb2dpZXMsXG59IGZyb20gXCIuLi9TZXJ2aWNlcy9BcGlQcm9qZWN0LmpzXCJcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vUHJvamVjdHMuanNcIlxuaW1wb3J0IHsgYWMsIGNlY2wgfSBmcm9tIFwiLi4vSGVscGVycy9kb21IZWxwZXIuanNcIlxuXG5leHBvcnQgY29uc3QgRWRpdFByb2plY3QgPSBhc3luYyAocHJvamVjdFdyYXAsIHByb2plY3QsIGFkZFByb2plY3QpID0+IHtcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKlxuICBNQUtFIEFORCBTRVQgRk9STSAgSU5QVVRTXG4gICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIGNvbnNvbGUubG9nKFwiYWRkXCIsIGFkZFByb2plY3QpXG4gIGlmIChhZGRQcm9qZWN0ID09PSBcImFkZFByb2plY3RcIikge1xuICAgIGZvciAobGV0IGl0ZW0gaW4gcHJvamVjdCkge1xuICAgICAgcHJvamVjdFtpdGVtXSA9IFwiXCJcbiAgICB9XG4gIH1cbiAgbGV0IG5ld1Byb2plY3QgPSB7fVxuICBsZXQgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBuZXdQcm9qZWN0W2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWVcbiAgfVxuICBsZXQgZm9ybSA9IEZvcm0oXCJlZGl0LXByb2plY3QtZm9ybVwiKVxuICBsZXQgaW5wdXRzID0gY2VjbCgnZGl2JywgJ2VkaXQtZm9ybS1pbnB1dHMnKVxuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0cylcbiAgT2JqZWN0LmtleXMocHJvamVjdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKFxuICAgICAga2V5ICE9PSBcImlkXCIgJiZcbiAgICAgIGtleSAhPT0gXCJ0ZWNobm9sb2dpZXNcIiAmJlxuICAgICAga2V5ICE9PSBcImNyZWF0ZWRfYXRcIiAmJlxuICAgICAga2V5ICE9PSBcInVwZGF0ZWRfYXRcIlxuICAgICkge1xuICAgICAgbmV3UHJvamVjdFtrZXldID0gcHJvamVjdFtrZXldXG4gICAgICBjb25zdCBpbnB1dCA9IElucHV0KHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImVkaXQtZm9ybS1pbnB1dFwiLFxuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWx1ZTogYWRkUHJvamVjdCA9PT0gXCJhZGRQcm9qZWN0XCIgPyBcIlwiIDogbmV3UHJvamVjdFtrZXldLFxuICAgICAgICBwbGFjZWhvbGRlcjoga2V5LFxuICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgIH0pXG4gICAgICBpbnB1dHMuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgfVxuICB9KVxuXG4gIC8qKioqKioqKioqKioqKlxuICAgU0VUIENIRUNLQk9YRVNcbiAgKioqKioqKioqKioqKioqL1xuICBjb25zdCBjaGVja3MgPSBjZWNsKCdkaXYnLCAnZWRpdC1mb3JtLWNoZWNrYm94ZXMnKVxuICBmb3JtLmFwcGVuZENoaWxkKGNoZWNrcylcbiAgbGV0IHRlY2hub2xvZ2llcyA9IGF3YWl0IGdldFRlY2hub2xvZ2llcygpXG4gIHRlY2hub2xvZ2llcy5tYXAoKHRlY2hub2xvZ3kpID0+IHtcbiAgICBcbiAgbGV0IGNoZWNrZWRcbiAgICBhZGRQcm9qZWN0ID09PSB1bmRlZmluZWQgJiZcbiAgICAgIHByb2plY3QudGVjaG5vbG9naWVzLmZvckVhY2goKHByb2plY3RUZWNobm9sb2d5KSA9PiB7XG4gICAgICAgIGlmICh0ZWNobm9sb2d5Lm5hbWUgPT09IHByb2plY3RUZWNobm9sb2d5Lm5hbWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0ZWNobm9sb2d5Lm5hbWUsIHByb2plY3RUZWNobm9sb2d5Lm5hbWUpXG4gICAgICAgICAgY2hlY2tlZCA9IFwiY2hlY2tlZFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgbGV0IGJ4ID0gQ2hlY2tib3goe1xuICAgICAgY2xhc3NOYW1lOiBcImVkaXQtcHJvamVjdC1jaGtib3hcIixcbiAgICAgIG5hbWU6IHRlY2hub2xvZ3kubmFtZSxcbiAgICAgIGlkOiB0ZWNobm9sb2d5Lm5hbWUsXG4gICAgICB2YWx1ZTogIHRlY2hub2xvZ3kuaWQsXG4gICAgICBjaGVja2VkOiBhZGRQcm9qZWN0ID09PSBcImFkZFByb2plY3RcIiA/IFwiXCIgOiBjaGVja2VkLFxuXG4gICAgfSlcbiAgICBjaGVja3MuYXBwZW5kQ2hpbGQoYngpXG4gICAgY2hlY2tzLmFwcGVuZENoaWxkKExhYmVsKFwidGVjaC1ib3gtbGFiZWxcIiwgdGVjaG5vbG9neS5uYW1lLCBcInRlY2gtYm94XCIpKVxuICAgIFxuICB9KVxuICBmb3JtLmFwcGVuZENoaWxkKFxuICAgIEJ1dHRvbihcbiAgICAgIFwiZWRpdC1wcm9qZWN0LWJ1dHRvblwiLFxuICAgICAgXCJzdWJtaXRcIixcbiAgICAgIGFkZFByb2plY3QgPT09IFwiYWRkUHJvamVjdFwiID8gXCJhZGQgbmV3IHByb2plY3RcIiA6IFwic3VibWl0XCJcbiAgICApXG4gIClcblxuXG4gIGFjKHByb2plY3RXcmFwLCBmb3JtKVxuXG5cbiAgLyoqKioqKioqKipcbiAgIFNVQk1JVCBGT1JNXG4gICoqKioqKioqKioqL1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coXCJhZGRcIiwgYWRkUHJvamVjdClcblxuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZFwiKVxuICAgIGNvbnNvbGUubG9nKGNoZWNrYm94ZXMpXG4gICAgbmV3UHJvamVjdC50ZWNobm9sb2dpZXMgPSBbXVxuICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBuZXdQcm9qZWN0LnRlY2hub2xvZ2llcy5wdXNoKGJveC52YWx1ZSlcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKFwiYWRkXCIsIG5ld1Byb2plY3QpXG4gICAgYWRkUHJvamVjdCA9PT0gXCJhZGRQcm9qZWN0XCJcbiAgICAgID8gYXdhaXQgYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0KVxuICAgICAgOiBhd2FpdCB1cGRhdGVQcm9qZWN0KG5ld1Byb2plY3QsIHByb2plY3QuaWQpXG5cbiAgICBhd2FpdCBQcm9qZWN0cygpXG4gIH0pXG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0cy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=