var a=document.querySelector("ul"),r=function(a){return Number(a.replace(/[$,]/g,""))};Array.from(a.children).map(function(a){return{name:a.textContent.trim(),position:a.dataset.position,salary:r(a.dataset.salary),age:parseInt(a.dataset.age,10)}}),function(a){Array.from(a.children).sort(function(a,t){var e=r(a.dataset.salary);return r(t.dataset.salary)-e}).forEach(function(r){return a.appendChild(r)})}(a);
//# sourceMappingURL=index.1cf1127b.js.map
