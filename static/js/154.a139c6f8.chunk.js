(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[154],{5154:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(9439),i=n(2791),s=n(1087),a=n(6842),c=n(184),o=function(e){var t=e.data;return(0,c.jsx)("article",{className:"degree-container",children:(0,c.jsxs)("header",{children:[(0,c.jsx)("h4",{className:"degree",children:t.degree}),(0,c.jsxs)("p",{className:"school",children:[(0,c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},u=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"education",children:[(0,c.jsx)("div",{className:"link-to",id:"education"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,c.jsx)(o,{data:e},e.school)}))]})};u.defaultProps={data:[]};var l=u,d=n(7892),h=n.n(d),f=n(2773),m=function(e){var t=e.data,n=t.name,r=t.position,i=t.url,s=t.startDate,a=t.endDate,o=t.summary,u=t.highlights;return(0,c.jsxs)("article",{className:"jobs-container",children:[(0,c.jsxs)("header",{children:[(0,c.jsxs)("h4",{children:[(0,c.jsx)("a",{href:i,children:n})," - ",r]}),(0,c.jsxs)("p",{className:"daterange",children:[" ",h()(s).format("MMMM YYYY")," - ",a?h()(a).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,c.jsx)(f.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,u?(0,c.jsx)("ul",{className:"points",children:u.map((function(e){return(0,c.jsx)("li",{children:e},e)}))}):null]})},y=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"experience",children:[(0,c.jsx)("div",{className:"link-to",id:"experience"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,c.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};y.defaultProps={data:[]};var v=y,p=n(9142);function g(e,t,n){return(t=(0,p.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,c.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},$=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,s=t.title,a={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},o=j(j({},a),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,c.jsxs)("div",{className:"skillbar clearfix",children:[(0,c.jsx)("div",{className:"skillbar-title",style:a,children:(0,c.jsx)("span",{children:s})}),(0,c.jsx)("div",{className:"skillbar-bar",style:o}),(0,c.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};$.defaultProps={categories:[]};var k=$,M=function(e){var t=e.skills,n=e.categories,s=Object.fromEntries([["All",!1]].concat(n.map((function(e){return[e.name,!1]})))),a=(0,i.useState)(s),o=(0,r.Z)(a,2),u=o[0],l=o[1],d=function(e){var t=Object.keys(u).reduce((function(t,n){return j(j({},t),{},g({},n,e===n&&!u[n]))}),{});t.All=!Object.keys(u).some((function(e){return t[e]})),l(t)};return(0,c.jsxs)("div",{className:"skills",children:[(0,c.jsx)("div",{className:"link-to",id:"skills"}),(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h3",{children:"Skills"}),(0,c.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,c.jsx)("div",{className:"skill-button-container",children:Object.keys(u).map((function(e){return(0,c.jsx)(x,{label:e,active:u,handleClick:d},e)}))}),(0,c.jsx)("div",{className:"skill-row-container",children:function(){var e=Object.keys(u).reduce((function(e,t){return u[t]?t:e}),"All");return t.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(t){return"All"===e||t.category.includes(e)})).map((function(e){return(0,c.jsx)(k,{categories:n,data:e},e.title)}))}()})]})};M.defaultProps={skills:[],categories:[]};var N=M,D=function(e){var t=e.data,n=e.last;return(0,c.jsxs)("li",{className:"course-container",children:[(0,c.jsxs)("a",{href:t.link,children:[(0,c.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,c.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,c.jsx)("div",{className:"course-dot",children:(0,c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var S=D,O=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,c.jsx)(S,{data:t,last:n===e.length-1},t.title)}))},w=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"courses",children:[(0,c.jsx)("div",{className:"link-to",id:"courses"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Selected Courses"})}),(0,c.jsx)("ul",{className:"course-list",children:O(t)})]})};w.defaultProps={data:[]};var I=w,T=function(){return(0,c.jsxs)("div",{className:"references",children:[(0,c.jsx)("div",{className:"link-to",id:"references"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)(s.rU,{to:"/contact",children:(0,c.jsx)("h3",{children:"References are available upon request"})})})]})},C=[{title:"Calculus",number:"MAT 112",link:"",university:"NIIT University"},{title:"Communication Skills",number:"TA 102",link:"",university:"NIIT University"},{title:"Community Connect",number:"NU 111",link:"",university:"NIIT University"},{title:"Engineering Graphics",number:"TA 202",link:"",university:"NIIT University"},{title:"Fundamentals of Computer Programming",number:"TA 111",link:"",university:"NIIT University"},{title:"Fundamentals of Electronics",number:"EL 111",link:"",university:"NIIT University"},{title:"Organizing and Managing University/Students activity or events",number:"AOC 131",link:"",university:"NIIT University"},{title:"Physics",number:"PHY 101",link:"",university:"NIIT University"},{title:"Algebra & Differential Equations",number:"MAT 101",link:"",university:"NIIT University"},{title:"Chemistry",number:"CHM 111",link:"",university:"NIIT University"},{title:"Data Structures",number:"CS 102",link:"",university:"NIIT University"},{title:"Economics",number:"ECON 102",link:"",university:"NIIT University"},{title:"Environmental Science",number:"ENV 301",link:"",university:"NIIT University"},{title:"Workshop Practice",number:"TA 212",link:"",university:"NIIT University"}],E=[{school:"City Montessori School",degree:"Secured 95.4% in 10th Boards and 94% in 12th Boards.",year:2022},{school:"NIIT University",degree:"B.Tech Computer Science Engineering",link:"https://niituniversity.in/",year:2026}],P=[{name:"NUmunch",position:"Co-founder & CTO",url:"https://numunch1-2.onrender.com/",startDate:"2024-4-08",summary:"NUmunch is an online food ordering company. It helps student to order and get their food without having to wait in long queues for multiple hours. It is loved by many students.",highlights:["Cuts the traditional way of ordering food at the university","Easy to use app"]},{name:"CoEET",position:"Learning Assistant",startDate:"2023-2-20",endDate:"2023-5-9",summary:"CoEET is responsible for the planning, coordination, and execution of more than 60 Educational Technology projects at NU each semester, through its various desks. ",highlights:["I helped in the development of ETIC Portal"]}],U=n(3433),L=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:4,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"MongoDB",competency:2,category:["Web Development","Databases"]},{title:"SQLite3/SQL",competency:1,category:["Web Development","Databases","Languages"]},{title:"Git",competency:3,category:["Tools"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Jupyter",competency:1,category:["Data Science","Python"]},{title:"HTML + CSS",competency:4,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"Express.js",competency:1,category:["Data Engineering","ML Engineering","Python"]},{title:"C++",competency:1,category:["Languages"]},{title:"Matplotlib",competency:2,category:["Data Engineering","ML Engineering","Python"]},{title:"JAVA",competency:3,category:["Data Engineering","ML Engineering","Python"]}].map((function(e){return j(j({},e),{},{category:e.category.sort()})})),A=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],Y=(0,U.Z)(new Set(L.flatMap((function(e){return e.category})))).sort().map((function(e,t){return{name:e,color:A[t]}})),_={Education:function(){return(0,c.jsx)(l,{data:E})},Experience:function(){return(0,c.jsx)(v,{data:P})},Skills:function(){return(0,c.jsx)(N,{skills:L,categories:Y})},Courses:function(){return(0,c.jsx)(I,{data:C})},References:function(){return(0,c.jsx)(T,{})}},H=function(){return(0,c.jsx)(a.Z,{title:"Resume",description:"Michael D'Angelo's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook.",children:(0,c.jsxs)("article",{className:"post",id:"resume",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{children:(0,c.jsx)(s.rU,{to:"resume",children:"Resume"})}),(0,c.jsx)("div",{className:"link-container",children:Object.keys(_).map((function(e){return(0,c.jsx)("h4",{children:(0,c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(_).map((function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,c.jsx)(i,{},n)}))]})})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",c="day",o="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},p=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},g={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),s=n-i<0,a=t.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:o,d:c,D:h,h:a,m:s,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",j={};j[b]=v;var x=function(e){return e instanceof N},$=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var s=t.toLowerCase();j[s]&&(i=s),n&&(j[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var c=t.name;j[c]=t,i=c}return!r&&i&&(b=i),i||!r&&b},k=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new N(n)},M=g;M.l=$,M.i=x,M.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var N=function(){function v(e){this.$L=$(e.locale,null,!0),this.parse(e)}var p=v.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return M},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return k(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<k(e)},p.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,r=!!M.u(t)||t,l=M.p(e),f=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(c)},m=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},y=this.$W,v=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case d:return r?f(1,0):f(31,11);case u:return r?f(1,v):f(0,v+1);case o:var b=this.$locale().weekStart||0,j=(y<b?y+7:y)-b;return f(r?p-j:p+(6-j),v);case c:case h:return m(g+"Hours",0);case a:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case i:return m(g+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,o=M.p(e),l="set"+(this.$u?"UTC":""),f=(n={},n[c]=l+"Date",n[h]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===c?this.$D+(t-this.$W):t;if(o===u||o===d){var y=this.clone().set(h,1);y.$d[f](m),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[M.p(e)]()},p.add=function(r,l){var h,f=this;r=Number(r);var m=M.p(l),y=function(e){var t=k(f);return M.w(t.date(t.date()+Math.round(e*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===c)return y(1);if(m===o)return y(7);var v=(h={},h[s]=t,h[a]=n,h[i]=e,h)[m]||1,p=this.$d.getTime()+r*v;return M.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$H,a=this.$m,c=this.$M,o=n.weekdays,u=n.months,l=n.meridiem,d=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},h=function(e){return M.s(s%12||12,e,"0")},m=l||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return c+1;case"MM":return M.s(c+1,2,"0");case"MMM":return d(n.monthsShort,c,u,3);case"MMMM":return d(u,c);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return M.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return M.s(a,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,h,f){var m,y=this,v=M.p(h),p=k(r),g=(p.utcOffset()-this.utcOffset())*t,b=this-p,j=function(){return M.m(y,p)};switch(v){case d:m=j()/12;break;case u:m=j();break;case l:m=j()/3;break;case o:m=(b-g)/6048e5;break;case c:m=(b-g)/864e5;break;case a:m=b/n;break;case s:m=b/t;break;case i:m=b/e;break;default:m=b}return f?m:M.a(m)},p.daysInMonth=function(){return this.endOf(u).$D},p.$locale=function(){return j[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},p.clone=function(){return M.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},v}(),D=N.prototype;return k.prototype=D,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",c],["$M",u],["$y",d],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,N,k),e.$i=!0),k},k.locale=$,k.isDayjs=x,k.unix=function(e){return k(1e3*e)},k.en=j[b],k.Ls=j,k.p={},k}()}}]);
//# sourceMappingURL=154.a139c6f8.chunk.js.map