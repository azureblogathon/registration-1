(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{212:function(t,e,n){var content=n(217);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("d0697e68",content,!0,{sourceMap:!1})},216:function(t,e,n){"use strict";n(212)},217:function(t,e,n){var r=n(44)(!1);r.push([t.i,"#home[data-v-6316df6c]{height:calc(100vh - 60px);position:relative}.banner[data-v-6316df6c]{width:100vw;-o-object-fit:cover;object-fit:cover}",""]),t.exports=r},219:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(43),n(1)),o=(n(222),n(220)),l=n(218);l.a.initializeApp({apiKey:"AIzaSyBlVpuwBfpe-n6KIn1oz418z2Aqewv3c6M",authDomain:"azureblogathon.firebaseapp.com",projectId:"azureblogathon",storageBucket:"azureblogathon.appspot.com",messagingSenderId:"309587433623",appId:"1:309587433623:web:b1cdd2b5fd3c96031e31d2",measurementId:"G-M7PR0DCZLN"});var d=l.a,m="USER_RESPONSES";function f(t){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.firestore(),t.next=3,n.collection(m).doc(e.uid).set(e.toJson());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var C=n(111),h=n(112),w=n(223),_=n(221),x=function(){function t(e,n,r,c,o,l,d){Object(C.a)(this,t),this.uid=Object(w.a)(),this.firstName=e,this.secondName=n,this.email=r,this.phone=c,this.city=o,this.comment=l,this.uploadedFileUri=d,this.submittedOn=(new Date).toUTCString()}return Object(h.a)(t,[{key:"toJson",value:function(){return Object(_.a)(this)}}]),t}(),j=c.a.extend({name:"Home",mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.b)(Object(o.a)());case 2:return e=new x("Souvik2","Das","aaasasas","+91-22222","Au","Comment","szss"),t.next=5,f(e);case 5:case"end":return t.stop()}}),t)})))()}}),y=(n(216),n(21)),component=Object(y.a)(j,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-dark",attrs:{id:"home"}},[n("img",{staticClass:"banner",attrs:{src:"banner.jpg"}}),n("div",{staticClass:"row mt-3 text-center"},[n("h4",[t._v("Submit your blogging ideas!")])]),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-5"},[n("span",{staticClass:"anchor",attrs:{id:"formRegister"}}),n("div",{staticClass:"mb-3"}),n("div",{staticClass:"card card-outline-secondary"},[n("div",{staticClass:"card-body"},[n("fieldset",[n("label",{staticClass:"mb-0"},[t._v("First name")]),n("div",{staticClass:"row mb-1"},[n("div",{staticClass:"col-lg-12"},[n("input",{staticClass:"form-control"})])]),n("label",{staticClass:"mb-0"},[t._v("Last name")]),n("div",{staticClass:"row mb-1"},[n("div",{staticClass:"col-lg-12"},[n("input",{staticClass:"form-control"})])]),n("label",{staticClass:"mb-0"},[t._v("Email")]),n("div",{staticClass:"row mb-1"},[n("div",{staticClass:"col-lg-12"},[n("input",{staticClass:"form-control"})])]),n("label",{staticClass:"mb-0"},[t._v("Phone number")]),n("div",{staticClass:"row mb-1"},[n("div",{staticClass:"col-lg-12"},[n("input",{staticClass:"form-control"})])]),n("label",{staticClass:"mb-0"},[t._v("City")]),n("div",{staticClass:"row mb-1"},[n("div",{staticClass:"col-lg-12"},[n("input",{staticClass:"form-control"})])]),n("label",{staticClass:"mb-0",attrs:{for:"formFile"}},[t._v("Choose file (.pdf, .doc, .txt)")]),n("div",{staticClass:"row mb-1"},[n("div",{staticClass:"col-lg-12"},[n("input",{staticClass:"form-control",attrs:{type:"file",id:"formFile"}})])]),n("label",{staticClass:"mb-0"},[t._v("Comment")]),n("div",{staticClass:"row mb-1"},[n("div",{staticClass:"col-lg-12"},[n("textarea",{staticClass:"form-control"})])]),n("div",{staticClass:"w-100 text-center"},[n("button",{staticClass:"btn btn-primary btn-lg float-right"},[t._v("Submit")])])])])]),n("div",{staticClass:"mb-5"})])])])}],!1,null,"6316df6c",null);e.default=component.exports},238:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(219),o=r.a.extend({components:{Home:c.default}}),l=n(21),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row g-0"},[e("Home")],1)}),[],!1,null,null,null);e.default=component.exports}}]);