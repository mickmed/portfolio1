(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{81:function(e,t,n){var o=n(1),i=n(82);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var l={insert:"head",singleton:!1},a=(o(i,l),i.locals?i.locals:{});e.exports=a},82:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t),n.d(t,"SignUp",(function(){return l}));var o=n(4),i=n(0);n(81);const l=async()=>{console.log("EDIT PROJECTS");let e=Object(i.e)(".main-content");for(;e.childNodes.length>1;)e.removeChild(e.lastChild);let t={user:{}},n=Object(i.c)("div","signUp"),l=Object(i.c)("form","login-form");["username","email","password"].map(e=>{let n=l.appendChild(Object(i.c)("label","login-label"));n.setAttribute("for",e),n.innerText=e;let o=l.appendChild(Object(i.c)("input",`login-${e}`));o.setAttribute("id",e),o.setAttribute("name",e),o.addEventListener("keyup",e=>{console.log(e.target.name,e.target.value),t.user[e.target.name]=e.target.value})});const a=Object(i.c)("button","submit-login");a.innerText="signUp",l.appendChild(a),l.addEventListener("submit",async e=>{e.preventDefault(),console.log("body",t);let n=await Object(o.c)(t);console.log(n)});let c=Object(i.c)("button","login"),s=await Object(o.d)();if(s.errors){console.log("logout due to error"),Object(o.b)();Object(i.c)("button","login")}c.innerText=s?"logout":"login",c.addEventListener("click",async()=>{if(s||0===Object.keys(t.user).length){await Object(o.b)()&&(c.innerText="login")}else{t={auth:{...t.user}};await Object(o.a)(t);let e=await Object(o.d)();c.innerText=e&&"logout"}}),n.appendChild(l),n.appendChild(c),e.appendChild(n)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2dpbi9zaWdudXAuc2Nzcz9lNThmIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0xvZ2luL1NpZ25VcC5qcyJdLCJuYW1lcyI6WyJhcGkiLCJjb250ZW50IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsImV4cG9ydGVkIiwibG9jYWxzIiwiZXhwb3J0cyIsIlNpZ25VcCIsImFzeW5jIiwiY29uc29sZSIsImxvZyIsIm1haW5Db250ZW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYm9keSIsInVzZXIiLCJzaWduVXBEaXYiLCJmb3JtIiwibWFwIiwiZWwiLCJsYWJlbCIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwiaW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0Iiwic2lnblVwUmVzIiwibG9naW5CdXR0b24iLCJjdXJyZW50VXNlciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJhdXRoIl0sIm1hcHBpbmdzIjoiNEVBQUEsSUFBSUEsRUFBTSxFQUFRLEdBQ0ZDLEVBQVUsRUFBUSxJQUlDLGlCQUZ2QkEsRUFBVUEsRUFBUUMsV0FBYUQsRUFBUUUsUUFBVUYsS0FHL0NBLEVBQVUsQ0FBQyxDQUFDRyxFQUFPQyxFQUFJSixFQUFTLE1BRzlDLElBQUlLLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUloQkMsR0FGU1AsRUFBSUMsRUFBU0ssR0FFWEwsRUFBUU8sT0FBU1AsRUFBUU8sT0FBUyxJQUlqREosRUFBT0ssUUFBVUYsRyxxRENwQmpCLHNFQWFPLE1BQU1HLEVBQVNDLFVBS3BCQyxRQUFRQyxJQUFJLGlCQUNaLElBQUlDLEVBQWMsWUFBRyxpQkFDckIsS0FBT0EsRUFBWUMsV0FBV0MsT0FBUyxHQUNyQ0YsRUFBWUcsWUFBWUgsRUFBWUksV0FLdEMsSUFBSUMsRUFBTyxDQUFFQyxLQUFNLElBRWZDLEVBQVksWUFBSyxNQUFPLFVBQ3hCQyxFQUFPLFlBQUssT0FBUSxjQUxULENBQUMsV0FBWSxRQUFTLFlBTzlCQyxJQUFLQyxJQUNWLElBQUlDLEVBQVFILEVBQUtJLFlBQVksWUFBSyxRQUFTLGdCQUMzQ0QsRUFBTUUsYUFBYSxNQUFPSCxHQUMxQkMsRUFBTUcsVUFBWUosRUFDbEIsSUFBSUssRUFBUVAsRUFBS0ksWUFBWSxZQUFLLFFBQVMsU0FBU0YsTUFDcERLLEVBQU1GLGFBQWEsS0FBTUgsR0FDekJLLEVBQU1GLGFBQWEsT0FBUUgsR0FDM0JLLEVBQU1DLGlCQUFpQixRQUFVQyxJQUMvQm5CLFFBQVFDLElBQUlrQixFQUFFQyxPQUFPQyxLQUFNRixFQUFFQyxPQUFPRSxPQUNwQ2YsRUFBS0MsS0FBS1csRUFBRUMsT0FBT0MsTUFBUUYsRUFBRUMsT0FBT0UsVUFHeEMsTUFBTUMsRUFBUyxZQUFLLFNBQVUsZ0JBQzlCQSxFQUFPUCxVQUFZLFNBQ25CTixFQUFLSSxZQUFZUyxHQUNqQmIsRUFBS1EsaUJBQWlCLFNBQVVuQixNQUFPb0IsSUFDckNBLEVBQUVLLGlCQUNGeEIsUUFBUUMsSUFBSSxPQUFRTSxHQUNwQixJQUFJa0IsUUFBa0IsWUFBT2xCLEdBQzdCUCxRQUFRQyxJQUFJd0IsS0FHZCxJQUFJQyxFQUFjLFlBQUssU0FBVSxTQUc3QkMsUUFBb0IsY0FDeEIsR0FBR0EsRUFBWUMsT0FBTyxDQUNwQjVCLFFBQVFDLElBQUksdUJBQ1osY0FDa0IsWUFBSyxTQUFVLFNBTW5DeUIsRUFBWVYsVUFBWVcsRUFBYyxTQUFXLFFBR2pERCxFQUFZUixpQkFBaUIsUUFBU25CLFVBR3BDLEdBQUs0QixHQUFpRCxJQUFsQ0UsT0FBT0MsS0FBS3ZCLEVBQUtDLE1BQU1KLE9BTXBDLE9BQ2lCLGdCQUdwQnNCLEVBQVlWLFVBQVksYUFWNkIsQ0FDdkRULEVBQU8sQ0FBRXdCLEtBQU0sSUFBS3hCLEVBQUtDLGFBRVIsWUFBTUQsR0FBdkIsSUFDSW9CLFFBQW9CLGNBQ3hCRCxFQUFZVixVQUFZVyxHQUFlLFlBVzNDbEIsRUFBVUssWUFBWUosR0FDdEJELEVBQVVLLFlBQVlZLEdBQ3RCeEIsRUFBWVksWUFBWUwiLCJmaWxlIjoiNC41ZjJkOTlkZDQ5ZWIyMmNjZjI1Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZ251cC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7XG4gXG4gIHNpZ25VcCxcbiAgbG9naW4sXG4gIHZlcmlmeSxcbiAgbG9nb3V0LFxufSBmcm9tIFwiLi4vU2VydmljZXMvQXBpQXV0aC5qc1wiXG5pbXBvcnQgeyBjZWNsLCBxcyB9IGZyb20gXCIuLi9IZWxwZXJzL2RvbUhlbHBlci5qc1wiXG5pbXBvcnQgXCIuL3NpZ251cC5zY3NzXCJcblxuXG5cblxuZXhwb3J0IGNvbnN0IFNpZ25VcCA9IGFzeW5jICgpID0+IHtcblxuICAvLyBjb25zdCBib2R5ID0ge1xuICAvLyAgIHVzZXI6IHsgdXNlcm5hbWU6IFwidGVkXCIsIGVtYWlsOiBcInRlZEB0ZWQuY29tXCIsIHBhc3N3b3JkOiBcIjEyMzQ1NlwiIH0sXG4gIC8vIH1cbiAgY29uc29sZS5sb2coXCJFRElUIFBST0pFQ1RTXCIpXG4gIGxldCBtYWluQ29udGVudCA9IHFzKFwiLm1haW4tY29udGVudFwiKVxuICB3aGlsZSAobWFpbkNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQubGFzdENoaWxkKVxuICB9XG5cbiAgY29uc3QgaW5wdXRzID0gW1widXNlcm5hbWVcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCJdXG4gIC8vIGNvbnN0IGJvZHkgPSB7dXNlcm5hbWU6JycsIGVtYWlsOicnLCBwYXNzd29yZDonJ31cbiAgbGV0IGJvZHkgPSB7IHVzZXI6IHt9IH1cblxuICBsZXQgc2lnblVwRGl2ID0gY2VjbChcImRpdlwiLCBcInNpZ25VcFwiKVxuICBsZXQgZm9ybSA9IGNlY2woXCJmb3JtXCIsIFwibG9naW4tZm9ybVwiKVxuXG4gIGlucHV0cy5tYXAoKGVsKSA9PiB7XG4gICAgbGV0IGxhYmVsID0gZm9ybS5hcHBlbmRDaGlsZChjZWNsKGBsYWJlbGAsIGBsb2dpbi1sYWJlbGApKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShgZm9yYCwgZWwpXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gZWxcbiAgICBsZXQgaW5wdXQgPSBmb3JtLmFwcGVuZENoaWxkKGNlY2woXCJpbnB1dFwiLCBgbG9naW4tJHtlbH1gKSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYGlkYCwgZWwpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBuYW1lYCwgZWwpXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgIGJvZHkudXNlcltlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfSlcbiAgY29uc3QgYnV0dG9uID0gY2VjbChcImJ1dHRvblwiLCBcInN1Ym1pdC1sb2dpblwiKVxuICBidXR0b24uaW5uZXJUZXh0ID0gXCJzaWduVXBcIlxuICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coXCJib2R5XCIsIGJvZHkpXG4gICAgbGV0IHNpZ25VcFJlcyA9IGF3YWl0IHNpZ25VcChib2R5KVxuICAgIGNvbnNvbGUubG9nKHNpZ25VcFJlcylcbiAgfSlcblxuICBsZXQgbG9naW5CdXR0b24gPSBjZWNsKFwiYnV0dG9uXCIsIFwibG9naW5cIilcblxuICBcbiAgbGV0IGN1cnJlbnRVc2VyID0gYXdhaXQgdmVyaWZ5KClcbiAgaWYoY3VycmVudFVzZXIuZXJyb3JzKXtcbiAgICBjb25zb2xlLmxvZygnbG9nb3V0IGR1ZSB0byBlcnJvcicpXG4gICAgbG9nb3V0KClcbiAgICBsZXQgbG9naW5CdXR0b24gPSBjZWNsKFwiYnV0dG9uXCIsIFwibG9naW5cIilcblxuXG4gIH1cbiAgXG5cbiAgbG9naW5CdXR0b24uaW5uZXJUZXh0ID0gY3VycmVudFVzZXIgPyAnbG9nb3V0JyA6ICdsb2dpbicgXG4gIFxuXG4gIGxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gbGV0IGN1cnJlbnRVc2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKVxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxuICAgIGlmICghY3VycmVudFVzZXIgJiYgT2JqZWN0LmtleXMoYm9keS51c2VyKS5sZW5ndGggIT09IDApIHtcbiAgICAgIGJvZHkgPSB7IGF1dGg6IHsgLi4uYm9keS51c2VyIH0gfVxuICAgICBcbiAgICAgIGxldCB1c2VyID0gYXdhaXQgbG9naW4oYm9keSlcbiAgICAgIGxldCBjdXJyZW50VXNlciA9IGF3YWl0IHZlcmlmeSgpXG4gICAgICBsb2dpbkJ1dHRvbi5pbm5lclRleHQgPSBjdXJyZW50VXNlciAmJiAnbG9nb3V0J1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmVzTG9nb3V0ID0gYXdhaXQgbG9nb3V0KClcblxuICAgICAgaWYgKHJlc0xvZ291dCkge1xuICAgICAgICBsb2dpbkJ1dHRvbi5pbm5lclRleHQgPSBcImxvZ2luXCJcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHNpZ25VcERpdi5hcHBlbmRDaGlsZChmb3JtKVxuICBzaWduVXBEaXYuYXBwZW5kQ2hpbGQobG9naW5CdXR0b24pXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHNpZ25VcERpdilcblxuICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=