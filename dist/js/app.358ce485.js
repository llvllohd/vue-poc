(function(t){function a(a){for(var s,i,o=a[0],c=a[1],l=a[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(f.length)f.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},n={app:0},r=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),n=e.n(s);n.a},"0ef1":function(t,a,e){t.exports=e.p+"img/restaurant_cover_square_McDonalds_logo.40557611.webp"},"0fca":function(t,a,e){},"336f":function(t,a,e){},"35d7":function(t,a,e){},"36ca":function(t,a,e){"use strict";var s=e("714d"),n=e.n(s);n.a},"37cc":function(t,a,e){"use strict";var s=e("d5e3"),n=e.n(s);n.a},4646:function(t,a,e){"use strict";var s=e("5a5e"),n=e.n(s);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Banner"),e("RestaurantDetails"),e("Address"),e("Dropdown"),e("FoodCatogery"),e("router-view")],1)},r=[],i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("header",[s("div",{staticClass:"header"},[s("span",{staticClass:"one"},[t._v("Preorder to ")]),s("span",{staticClass:"two"},[t._v("Your Address")])])]),s("div",{staticClass:"banner-img"},[s("img",{attrs:{src:e("7bc7"),alt:"banner"}})]),s("div",{staticClass:"logo"},[s("img",{attrs:{src:e("0ef1"),alt:"logo"}})])])}],c={name:"Banner"},l=c,u=(e("f230"),e("2877")),d=Object(u["a"])(l,i,o,!1,null,null,null),f=d.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("h1",{staticClass:"name"},[t._v("McDonald's")]),e("div",{staticClass:"details"},[e("span",{staticClass:"check-circle"},[e("fa-icon",{attrs:{icon:["fas","check-circle"],size:"1x",spin:t.spin=!1}}),t._v(" DashPass ")],1),e("span",{staticClass:"inner-details"},[t._v(" • Fast Food, Burger • 4.6 "),e("fa-icon",{staticClass:"star",attrs:{icon:["fas","star"],size:"x",spin:t.spin=!1}}),t._v(" (500+)")],1)])]),e("div",{staticClass:"address-details"},[e("div",{staticClass:"fee"},[e("h2",[t._v("$0.00")]),e("h3",[t._v(" delivery fee "),e("fa-icon",{staticClass:"star",attrs:{icon:["fas","info-circle"],size:"x",spin:t.spin=!1}})],1)]),e("div",{staticClass:"line"}),t._m(0)])])},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"address"},[e("h2",[t._v(" Enter your address for ")]),e("h2",[t._v("ETA")])])}],m={name:"RestaurantDetails"},h=m,_=(e("dc0d"),Object(u["a"])(h,v,p,!1,null,null,null)),y=_.exports,C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("span",{staticClass:"address"},[t._v("Enter your address")]),e("span",{staticClass:"detail"},[t._v("We'll confirm that you can have this restaurant delivered")]),e("div",{staticClass:"box"},[e("span",[e("fa-icon",{staticClass:"star",attrs:{icon:["fas","map-marker-alt"],size:"1x",spin:t.spin=!1}})],1),e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Address"}})])])])},g=[],b={name:"Address"},k=b,w=(e("72d2"),Object(u["a"])(k,C,g,!1,null,"8d522324",null)),M=w.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"borderup"}),e("div",{staticClass:"menu"},[e("div",{staticClass:"breakfast",on:{click:t.breakfast}},[e("h3",[t._v("Breakfast Menu")]),e("h4",[t._v("6:00 AM - 10:29AM")])]),e("div",{staticClass:"lunch",on:{click:t.lunch}},[e("h3",[t._v("Lunch Menu")]),e("h4",[t._v("10:30 AM - 4:59PM")])]),e("div",{staticClass:"dinner",on:{click:t.dinner}},[e("h3",[t._v("Dinner Menu")]),e("h4",[t._v("5:00 PM - 3:30AM")])])]),e("div",{staticClass:"borderdown"}),e("FoodCategory",{attrs:{data:t.menu}})],1)},j=[],O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("ul",{staticClass:"ul"},[t._l(t.data.slice(0,4),(function(a){return e("li",{key:a.name},[e("a",[e("router-link",{attrs:{to:a.link}},[t._v(t._s(a.category))])],1)])})),e("li",[e("a",{on:{click:t.display}},[e("router-link",{attrs:{to:"#"}},[t._v("More")]),e("span",[e("fa-icon",{staticClass:"caretdown",attrs:{icon:["fas","caret-down"],size:"1x",spin:t.spin=!1}})],1)],1),t.show?e("div",{staticClass:"dropdown"},t._l(t.data.slice(4,t.data.length-1),(function(a){return e("li",{key:a.name},[e("a",[e("router-link",{attrs:{to:a.link}},[t._v(t._s(a.category))])],1)])})),0):t._e()])],2)])])},P=[],E={name:"FoodCategory",props:["data"],data:function(){return{show:!1}},methods:{display:function(){this.show=!this.show}}},$=E,A=(e("5f28"),Object(u["a"])($,O,P,!1,null,"e68285fc",null)),D=A.exports,B={name:"Dropdown",components:{FoodCategory:D},data:function(){return{menu:[]}},mounted:function(){this.breakfast()},methods:{breakfast:function(){var t=[{category:"Most Popular",link:"/"},{category:"McCafe Bakery",link:"mccafebakery"},{category:"Condiments",link:"condiments"},{category:"Promotions",link:"promotions"},{category:"Bevarages",link:"bevarages"}];this.menu=t},lunch:function(){var t=[{category:"Most Popular",link:"/"},{category:"Combo Meals",link:"combomeals"},{category:"Promotions",link:"promotions"},{category:"Happy Meal",link:"happymeal"},{category:"McCafe",link:"mccafe"},{category:"McCafe Bakery",link:"mccafebakery"}];this.menu=t},dinner:function(){var t=[{category:"Most Popular",link:"/"},{category:"Combo Meals",link:"combomeals"},{category:"Promotions",link:"promotions"},{category:"Sweets&Treats",link:"sweets&treats"},{category:"HappyMeal",link:"happymeal"},{category:"condiments",link:"condiments"}];this.menu=t}}},S=B,T=(e("36ca"),Object(u["a"])(S,x,j,!1,null,"ce0b710e",null)),F=T.exports,z={name:"App",components:{Banner:f,RestaurantDetails:y,Address:M,Dropdown:F}},R=z,H=(e("034f"),Object(u["a"])(R,n,r,!1,null,null,null)),J=H.exports,q=e("ecee"),L=e("ad3d"),W=e("c074");q["c"].add(W["b"],W["e"],W["c"],W["d"],W["a"]),s["a"].component("fa-icon",L["a"]);var Y=e("8c4f"),G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"wrapper"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"food-container"},[e("div",{staticClass:"item-details"},[e("h2",[t._v(t._s(a.name))]),e("h3",[t._v(t._s(a.cal))]),e("h4",[t._v(t._s(a.amount))])]),e("div",{staticClass:"img"},[e("img",{attrs:{src:a.image}})])])})),0)])},I=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category-name"},[e("h2",[t._v("Most Popular")])])}],K=e("bc3a"),N=e.n(K),Q=e("a7fe"),U=e.n(Q);s["a"].use(U.a,N.a);var V={name:"MostPopular",data:function(){return{products:[]}},mounted:function(){var t=this;this.axios.get("https://my-json-server.typicode.com/llvllohd/json/mostpopular").then((function(a){t.products=a.data}))},method:{}},X=V,Z=(e("6bd5"),Object(u["a"])(X,G,I,!1,null,"151ae2d4",null)),tt=Z.exports,at=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"wrapper"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"food-container"},[e("div",{staticClass:"item-details"},[e("h2",[t._v(t._s(a.name))]),e("h3",[t._v(t._s(a.cal))]),e("h4",[t._v(t._s(a.amount))])]),e("div",{staticClass:"img"},[e("img",{attrs:{src:a.image}})])])})),0)])},et=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category-name"},[e("h2",[t._v("Combo Meals")])])}];s["a"].use(U.a,N.a);var st={name:"ComboMeals",data:function(){return{products:[]}},mounted:function(){var t=this;this.axios.get("https://my-json-server.typicode.com/llvllohd/json/combomeals").then((function(a){t.products=a.data}))},method:{}},nt=st,rt=(e("4646"),Object(u["a"])(nt,at,et,!1,null,"17d65c72",null)),it=rt.exports,ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"wrapper"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"food-container"},[e("div",{staticClass:"item-details"},[e("h2",[t._v(t._s(a.name))]),e("h3",[t._v(t._s(a.cal))]),e("h4",[t._v(t._s(a.amount))])]),e("div",{staticClass:"img"},[e("img",{attrs:{src:a.image}})])])})),0)])},ct=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category-name"},[e("h2",[t._v("Promotions")])])}];s["a"].use(U.a,N.a);var lt={name:"Promotions",data:function(){return{products:[]}},mounted:function(){var t=this;this.axios.get("https://my-json-server.typicode.com/llvllohd/json/promotions").then((function(a){t.products=a.data}))},method:{}},ut=lt,dt=(e("37cc"),Object(u["a"])(ut,ot,ct,!1,null,"b9273454",null)),ft=dt.exports,vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"wrapper"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"food-container"},[e("div",{staticClass:"item-details"},[e("h2",[t._v(t._s(a.name))]),e("h3",[t._v(t._s(a.cal))]),e("h4",[t._v(t._s(a.amount))])]),e("div",{staticClass:"img"},[e("img",{attrs:{src:a.image}})])])})),0)])},pt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category-name"},[e("h2",[t._v("Sweets & Treats")])])}];s["a"].use(U.a,N.a);var mt={name:"Sweets&Treats",data:function(){return{products:[]}},mounted:function(){var t=this;this.axios.get("https://my-json-server.typicode.com/llvllohd/json/sweets&treats").then((function(a){t.products=a.data}))},method:{}},ht=mt,_t=(e("e92c"),Object(u["a"])(ht,vt,pt,!1,null,"188a2f0e",null)),yt=_t.exports;s["a"].use(Y["a"]);var Ct=[{path:"/",component:tt},{path:"/combomeals",component:it},{path:"/promotions",component:ft},{path:"/sweets&treats",component:yt}],gt=new Y["a"]({routes:Ct});s["a"].config.productionTip=!1,new s["a"]({router:gt,render:function(t){return t(J)}}).$mount("#app")},"5a5e":function(t,a,e){},"5f28":function(t,a,e){"use strict";var s=e("35d7"),n=e.n(s);n.a},"6bd5":function(t,a,e){"use strict";var s=e("336f"),n=e.n(s);n.a},"714d":function(t,a,e){},"72d2":function(t,a,e){"use strict";var s=e("7795"),n=e.n(s);n.a},7795:function(t,a,e){},"7bc7":function(t,a,e){t.exports=e.p+"img/store_header_5579.19b125cd.webp"},"7fdb":function(t,a,e){},8199:function(t,a,e){},"85ec":function(t,a,e){},d5e3:function(t,a,e){},dc0d:function(t,a,e){"use strict";var s=e("8199"),n=e.n(s);n.a},e92c:function(t,a,e){"use strict";var s=e("0fca"),n=e.n(s);n.a},f230:function(t,a,e){"use strict";var s=e("7fdb"),n=e.n(s);n.a}});
//# sourceMappingURL=app.358ce485.js.map