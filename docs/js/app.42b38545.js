(function(a){function t(t){for(var n,r,o=t[0],l=t[1],u=t[2],d=0,m=[];d<o.length;d++)r=o[d],i[r]&&m.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(a[n]=l[n]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var a,t=0;t<s.length;t++){for(var e=s[t],n=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(n=!1)}n&&(s.splice(t--,1),a=r(r.s=e[0]))}return a}var n={},i={1:0},s=[];function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=a,r.c=n,r.d=function(a,t,e){r.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},r.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,t){if(1&t&&(a=r(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)r.d(e,n,function(t){return a[t]}.bind(null,n));return e},r.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(t,"a",t),t},r.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;s.push([21,0]),e()})({"/3Hx":function(a,t,e){},"/JhF":function(a,t,e){},"1gy1":function(a,t,e){"use strict";var n=e("3g0a"),i=e.n(n);i.a},21:function(a,t,e){a.exports=e("Vtdi")},"3g0a":function(a,t,e){},BtTU:function(a,t,e){},ONil:function(a,t,e){"use strict";var n=e("/3Hx"),i=e.n(n);i.a},RACm:function(a,t,e){},TKI7:function(a,t,e){"use strict";var n=e("/JhF"),i=e.n(n);i.a},Ugm6:function(a,t,e){},VR3G:function(a,t,e){"use strict";var n=e("khzu"),i=e.n(n);i.a},Vtdi:function(a,t,e){"use strict";e.r(t);e("VRzm");var n=e("Kw5r"),i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"navbar navbar-light sticky-top shadow-sm p-3 mb-5 bg-white rounded"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("h3",[a._v("HINDU")])]),e("ul",{staticClass:"nav justify-content-end"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/","active-class":"active"}},[a._v("Home")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/doa/mantra","active-class":"active"}},[a._v("Doa & Kidung")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/login","active-class":"active"}},[a._v(" Dashboard ")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/about","active-class":"active"}},[a._v("About")])],1)],1),e("router-view"),a._m(0)],1)},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("footer",[e("h3",[a._v("Ngobrol yuk!\n      "),e("a",{staticClass:"email",attrs:{href:"mailto:yogiwisesa@gmail.com"}},[a._v("Email")]),a._v("\n      saya\n    ")]),e("p",[a._v("Saya siap ngobrol tentang apapun! "),e("br"),a._v(" kritik, saran, keluh kesah, inovasi, tawaran kerja sama maupun kerjaan :D")])])}],r={},o=r,l=(e("nNx0"),e("KHd+")),u=Object(l["a"])(o,i,s,!1,null,null,null),c=u.exports,d=e("jE9Z"),m=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"home container"},[e("div",{staticClass:"header row"},[e("div",{staticClass:"offset-md-1 col-md-10"},[e("h1",{staticClass:"title"},[a._v("Dapatkan daftar doa & kidung Hindu!")]),e("h3",{staticClass:"subtitle"},[a._v("Sebuah proyek open source untuk umat Hindu di Indonesia")]),e("p",[a._v("Mari berkontribusi untuk menambahkan dan mengoreksi doa & kidung yang ada. Para developer dapat menggunakan REST API untuk mengembangkan aplikasinya sendiri.")]),e("router-link",{staticClass:"btn btn-outline-dark btn-login",attrs:{to:"/main/mantra"}},[a._v("Login")]),e("a",{staticClass:"btn btn-outline-dark btn-github",attrs:{href:"http://github.com/yogiwisesa",target:"_blank"}},[a._v("Github")])],1)]),e("div",{staticClass:"api-documentation row"},[e("div",{staticClass:"offset-sm-1 col-sm-10"},a._l(a.endpoints,function(a){return e("p",[e("Card",{staticClass:"endpoint-container",attrs:{endpointItem:a}})],1)}))])])},p=[],v=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("h4",{staticClass:"card-title"},[a._v(a._s(a.endpointItem.title))])]),e("div",{staticClass:"card-body"},[e("p",{staticClass:"card-text"},[e("button",{staticClass:"btn btn-outline-dark"},[a._v(" "+a._s(a.endpointItem.method))]),a._v("\n            "+a._s(a.endpointItem.url)+"\n        ")]),e("table",{staticClass:"table"},[a._m(0),e("tbody",a._l(a.endpointItem.parameters,function(t){return e("tr",[e("td",[a._v(a._s(t.key))]),e("td",[a._v(a._s(t.value))])])}))])])])},h=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[a._v("Parameter")]),e("th",{attrs:{scope:"col"}},[a._v("Key")])])])}],g={name:"Card",props:["endpointItem"]},f=g,_=(e("VR3G"),Object(l["a"])(f,v,h,!1,null,"700f5c82",null)),b=_.exports,k={data:function(){return{endpoints:[{title:"Get semua mantra",method:"GET",url:"http://hindu-id.herokuapp.com/allmantras",parameters:[{key:"page",value:"int"}]},{title:"Get mantra yang telah diverifikasi",method:"GET",url:"http://hindu-id.herokuapp.com/mantra",parameters:[{key:"page",value:"int"}]},{title:"Get semua kidung",method:"GET",url:"http://hindu-id.herokuapp.com/allkidungs",parameters:[{key:"page",value:"int"}]},{title:"Get kidung yang telah diverifikasi",method:"GET",url:"http://hindu-id.herokuapp.com/kidung",parameters:[{key:"page",value:"int"}]}]}},components:{Card:b}},C=k,y=(e("a57n"),Object(l["a"])(C,m,p,!1,null,"b282632c",null)),w=y.exports,x=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},j=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("h3",[a._v("Apa itu guna website ini?")]),e("p",[a._v("Website ini merupakan website yang menyediakan daftar doa & kidung umat Hindu di Indonesia yang bersifat open source dan semua orang dapat menambahkan maupun mengoreksi daftar doa & kidung yang ada.")]),e("p",[a._v("Selain itu website ini menyediakan pula REST API yang dapat digunakan pengembang perangkat lunak secara cuma- cuma sehinga diharapkan aplikasi pendukung sarana umat Hindu Indonesia semakin canggih ;)")]),e("h3",[a._v("Latar Belakang")]),e("p",[a._v("Saya melihat Agama lain sudah memiliki perangkat lunak yang canggih seperti "),e("a",{attrs:{href:"https://github.com/sonnylazuardi/bibleify-mobile"}},[a._v("Bibleify-mobile")]),a._v(" dan masih banyak lagi. Oleh karena itu saya membangun perangkat lunak ini, mulai dari backend, frontend (website ini) dan mobile (iOS dan android) dan tentunya open source sehingga dapat dikembangkan lagi oleh para developer lainnya.")]),e("h3",[a._v("Teknologi")]),e("p",[a._v("Saya membangun perangkat lunak ini menggunakan teknologi: \n\n    "),e("ul",[e("li",[a._v("Backend: Node Js")]),e("li",[a._v("Frontend: Vue.js & SCSS")]),e("li",[a._v("Mobile: Flutter")])]),a._v("\n\n    Semua kode sumber dapat digunakan untuk keperluan "),e("b",[a._v("sosial")]),a._v(" dan "),e("b",[a._v("tanpa mengomersialkan ")]),a._v(" (baik menjual ataupun menyisipkan iklan didalamnya). Mari kita majukan agama Hindu di Indonesia :D\n  ")]),e("h3",[a._v("Selanjutnya?")]),e("p",[a._v("Pengembangan terhadap perangkat lunak ini tidak terbatas sampai disini, saya membuka diri terhadap semua kritik & saran, tawaran kerja sama, keluh kesah pada email saya \n    "),e("a",{attrs:{href:"mailto:yogiwisesa@gmail.com"}},[a._v("yogiwisesa@gmail.com")]),a._v(". Saya juga merupakan seorang programmer yang pekerjaan saya dapat dilihat pada halaman\n    "),e("a",{attrs:{href:"http://github.com/yogiwisesa"}},[a._v("github")]),a._v(" saya. Siapa tau mau menawari kerja sama :P\n     ")])])}],M=(e("zjiM"),{}),S=Object(l["a"])(M,x,j,!1,null,"6bf70032",null),E=S.exports,P=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"offset-sm-3 col-sm-6"},[e("div",{staticClass:"card"},[a._m(0),e("div",{staticClass:"card-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[a._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:a.email},on:{input:function(t){t.target.composing||(a.email=t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[a._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:a.password},on:{input:function(t){t.target.composing||(a.password=t.target.value)}}})]),e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"submit"},on:{click:a.login}},[a._v("Login")]),e("div",{staticClass:"create-account"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/register","active-class":"active"}},[a._v("Registrasi akun baru")])],1),e("b-alert",{attrs:{variant:"danger",show:a.isLoginFailed,dismissible:""}},[a._v(a._s(a.loginFailedMessage))])],1)])])])])])},$=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",[a._v("Login")])])}],O=e("vDqi"),I=e.n(O),L={name:"login",data:function(){return{email:"",password:"",isLoginFailed:!1,loginFailedMessage:""}},computed:{},created:function(){this.$store.state.authenticated&&this.$router.push({path:"/main/mantra"})},methods:{login:function(){var a=this,t=new FormData;t.append("email",this.email),t.append("password",this.password),I()({method:"post",url:"http://hindu-id.herokuapp.com/login",data:t,config:{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0,credentials:"same-origin"}}).then(function(t){var e=t.data.token;a.$store.commit("setLogin",{email:a.email,token:"bearer ".concat(e)}),a.$router.push({path:"/main/mantra"})}).catch(function(t){a.isLoginFailed=!0,a.loginFailedMessage="Login gagal: ".concat(t)})}}},F=L,K=(e("1gy1"),Object(l["a"])(F,P,$,!1,null,"d3717a30",null)),T=K.exports,R=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"card text-center"},[e("div",{staticClass:"card-header"},[e("ul",{staticClass:"nav nav-tabs card-header-tabs"},[e("router-link",{staticClass:"nav-item nav-link",attrs:{tag:"li",to:"/main/mantra","active-class":"active"}},[a._v("Mantra")]),e("router-link",{staticClass:"nav-item nav-link",attrs:{tag:"li",to:"/main/kidung","active-class":"active"}},[a._v("Kidung")])],1)]),e("div",{staticClass:"card-body"},[e("router-view")],1)])])])])},A=[],D={name:"MainPage",data:function(){return{namaMantra:"",mantra:"",terjemahanMantra:"",urlSuara:""}},created:function(){this.routeBackToLogin()},computed:{getCredentials:function(){return{email:this.$store.state.email,token:this.$store.state.token}}},methods:{routeBackToLogin:function(){this.$store.state.authenticated||this.$router.push({path:"/login"})}}},N=D,U=(e("au4D"),Object(l["a"])(N,R,A,!1,null,"fbc7b73a",null)),B=U.exports,V=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"offset-sm-3 col-sm-6"},[e("div",{staticClass:"card"},[a._m(0),e("div",{staticClass:"card-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[a._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:a.email},on:{input:function(t){t.target.composing||(a.email=t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[a._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:a.password},on:{input:function(t){t.target.composing||(a.password=t.target.value)}}})]),e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"submit"},on:{click:a.login}},[a._v("Registrasi")]),e("b-alert",{attrs:{variant:"danger",show:a.isLoginFailed,dismissible:""}},[a._v(a._s(a.loginFailedMessage))])],1)])])])])])},H=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",[a._v("Registrasi Akun Baru")])])}],G={name:"login",data:function(){return{email:"",password:"",isLoginFailed:!1,loginFailedMessage:""}},computed:{},created:function(){this.$store.state.authenticated&&this.$router.push({path:"/main/mantra"})},methods:{login:function(){var a=this,t=new FormData;t.append("email",this.email),t.append("password",this.password),I()({method:"post",url:"http://hindu-id.herokuapp.com/register",data:t,config:{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0,credentials:"same-origin"}}).then(function(t){var e=t.data.token;a.$store.commit("setLogin",{email:a.email,token:"bearer ".concat(e)}),a.$router.push({path:"/main/mantra"})}).catch(function(t){a.isLoginFailed=!0,a.loginFailedMessage="Registrasi gagal: ".concat(t)})}}},W=G,z=(e("YyO4"),Object(l["a"])(W,V,H,!1,null,"0780067e",null)),J=z.exports,Z=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("h1",[a._v("Mantra / Doa Sehari-hari")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("Form",{attrs:{form:"Mantra",isMantra:!0}})],1),e("div",{staticClass:"offset-sm-1 col-sm-7"},[a._l(a.mantras,function(a){return e("p",[e("Item",{attrs:{item:a}})],1)}),e("button",{staticClass:"btn btn-outline-dark",on:{click:a.fetchMantra}},[a._v("\n        Load More\n      ")])],2)])])},q=[],Y=e("iv4g"),Q=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",[a._v("Nama "+a._s(a.form))]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"}],staticClass:"form-control",attrs:{placeholder:"Nama"},domProps:{value:a.name},on:{input:function(t){t.target.composing||(a.name=t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[a._v(a._s(a.form))]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.mantra,expression:"mantra"}],staticClass:"form-control",attrs:{placeholder:a.form},domProps:{value:a.mantra},on:{input:function(t){t.target.composing||(a.mantra=t.target.value)}}})]),a.isMantra?e("div",{staticClass:"form-group"},[e("label",[a._v("Terjemahan "+a._s(a.form))]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.translated,expression:"translated"}],staticClass:"form-control",attrs:{placeholder:"Terjemahan"},domProps:{value:a.translated},on:{input:function(t){t.target.composing||(a.translated=t.target.value)}}})]):a._e(),e("div",{staticClass:"form-group"},[e("label",[a._v("URL Suara (opsional)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.url_suara,expression:"url_suara"}],staticClass:"form-control",attrs:{placeholder:"URL Suara"},domProps:{value:a.url_suara},on:{input:function(t){t.target.composing||(a.url_suara=t.target.value)}}})]),e("button",{staticClass:"btn btn-outline-dark",on:{click:a.WhichPost}},[a._v("Simpan")]),e("b-alert",{attrs:{variant:a.alertVariant,show:a.isVisible,dismissible:""}},[a._v(a._s(a.message))])],1)])])},X=[],aa=(e("f3/d"),{props:{form:{},isMantra:{}},data:function(){return{name:"",mantra:"",translated:"",url_suara:"",isVisible:!1,message:"",alertVariant:""}},methods:{WhichPost:function(){this.isMantra&&this.postMantra(),this.postKidung()},postMantra:function(){var a=this.$store.state.email,t=new FormData;t.append("nama_mantra",this.name),t.append("mantra",this.mantra),t.append("translated_mantra",this.translated),t.append("sound_url",this.url_suara),t.append("submitted_by",a),t.append("status","Pending"),this.postWithAxios(t)},postKidung:function(){var a=this.$store.state.email,t=new FormData;t.append("nama_kidung",this.name),t.append("kidung",this.mantra),t.append("sound_url",this.url_suara),t.append("submitted_by",a),t.append("status","Pending"),this.postWithAxios(t)},postWithAxios:function(a){var t,e=this,n=this.$store.state.token;I.a.defaults.headers.common["Authorization"]=n,t="kidung",this.isMantra&&(t="mantra"),I()({method:"post",url:"http://hindu-id.herokuapp.com/".concat(t),data:a,config:{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0,credentials:"same-origin"}}).then(function(a){e.isVisible=!0,e.message="Berhasil menambahkan!",e.alertVariant="success"}).catch(function(a){e.isVisible=!1,e.message="Gagal menambahkan :(",e.alertVariant="danger"})}}}),ta=aa,ea=(e("onvB"),Object(l["a"])(ta,Q,X,!1,null,"643e67d5",null)),na=ea.exports,ia=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card"},[e("h3",{staticClass:"card-title"},[a._v(a._s(a.item.nama_mantra))]),e("div",{staticClass:"mantra-box"},[e("p",{staticClass:"mantra"},[a._v(a._s(a.item.mantra))]),e("p",{staticClass:"translated"},[a._v(a._s(a.item.translated_mantra))])]),e("p"),e("p",[a._v("\n        URL Suara: "+a._s(a.getSoundUrl())+" "),e("br"),a._v("\n        Kontributor: "+a._s(a.item.submitted_by)+" "),e("br"),a._v("\n        Status: "+a._s(a.item.status)+" "),e("br")])])},sa=[],ra={props:{item:{}},data:function(){return{}},methods:{getSoundUrl:function(){return""==this.item.sound_url?"-":this.item.sound_url}}},oa=ra,la=(e("TKI7"),Object(l["a"])(oa,ia,sa,!1,null,"40a35e3b",null)),ua=la.exports,ca={components:{Form:na,Item:ua},data:function(){return{mantras:[],page:1}},created:function(){this.fetchMantra()},methods:{fetchMantra:function(){var a=this;I.a.get("http://hindu-id.herokuapp.com/allmantras",{headers:{page:this.page,Pragma:"no-cache"}}).then(function(t){var e;(e=a.mantras).push.apply(e,Object(Y["a"])(t.data.result.data)),a.page=a.page+1}).catch(function(a){console.log(a)})}}},da=ca,ma=(e("klZr"),Object(l["a"])(da,Z,q,!1,null,"930a1104",null)),pa=ma.exports,va=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("h1",[a._v("Kidung")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("Form",{attrs:{form:"Kidung",isMantra:!1}})],1),e("div",{staticClass:"offset-sm-1 col-sm-7"},[a._l(a.kidungs,function(a){return e("p",[e("Item",{attrs:{item:a}})],1)}),e("button",{staticClass:"btn btn-outline-dark",on:{click:a.fetchKidung}},[a._v("\n          Load More\n        ")])],2)])])},ha=[],ga=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card"},[e("h3",{staticClass:"card-title"},[a._v(a._s(a.item.nama_kidung))]),e("div",{staticClass:"mantra-box"},[e("p",{staticClass:"mantra"},[a._v(a._s(a.item.kidung))])]),e("p"),e("p",[a._v("\n        URL Suara: "+a._s(a.getSoundUrl())+" "),e("br"),a._v("\n        Kontributor: "+a._s(a.item.submitted_by)+" "),e("br"),a._v("\n        Status: "+a._s(a.item.status)+" "),e("br")])])},fa=[],_a={props:{item:{}},data:function(){return{}},methods:{getSoundUrl:function(){return""==this.item.sound_url?"-":this.item.sound_url}}},ba=_a,ka=(e("ONil"),Object(l["a"])(ba,ga,fa,!1,null,"6130a1f1",null)),Ca=ka.exports,ya={components:{Form:na,Item:Ca},data:function(){return{kidungs:[],page:1}},created:function(){this.fetchKidung()},methods:{fetchKidung:function(){var a=this;I.a.get("http://hindu-id.herokuapp.com/allkidungs",{headers:{page:this.page,Pragma:"no-cache"}}).then(function(t){var e;(e=a.kidungs).push.apply(e,Object(Y["a"])(t.data.result.data)),a.page=a.page+1}).catch(function(a){console.log(a)})}}},wa=ya,xa=(e("oFkS"),Object(l["a"])(wa,va,ha,!1,null,"8e77f76c",null)),ja=xa.exports,Ma=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"card text-center"},[e("div",{staticClass:"card-header"},[e("ul",{staticClass:"nav nav-tabs card-header-tabs"},[e("router-link",{staticClass:"nav-item nav-link",attrs:{tag:"li",to:"/doa/mantra","active-class":"active"}},[a._v("Mantra")]),e("router-link",{staticClass:"nav-item nav-link",attrs:{tag:"li",to:"/doa/kidung","active-class":"active"}},[a._v("Kidung")])],1)]),e("div",{staticClass:"card-body"},[e("router-view")],1)])])])])},Sa=[],Ea={name:"MainPage",data:function(){return{}},created:function(){},computed:{},methods:{}},Pa=Ea,$a=(e("iCAC"),Object(l["a"])(Pa,Ma,Sa,!1,null,"78556b4b",null)),Oa=$a.exports,Ia=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("h1",[a._v("Kidung")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[a._l(a.kidungs,function(a){return e("p",[e("Item",{attrs:{item:a}})],1)}),e("button",{staticClass:"btn btn-outline-dark",on:{click:a.fetchKidung}},[a._v("\n          Load More\n        ")])],2)])])},La=[],Fa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card"},[e("h3",{staticClass:"card-title"},[a._v(a._s(a.item.nama_kidung))]),e("div",{staticClass:"mantra-box"},[e("p",{staticClass:"mantra"},[a._v(a._s(a.item.kidung))])]),e("p"),e("p",[a._v("\n        URL Suara: "+a._s(a.getSoundUrl())+" "),e("br"),a._v("\n        Kontributor: "+a._s(a.item.submitted_by)+" "),e("br"),a._v("\n        Status: "+a._s(a.item.status)+" "),e("br")])])},Ka=[],Ta={props:{item:{}},data:function(){return{}},methods:{getSoundUrl:function(){return""==this.item.sound_url?"-":this.item.sound_url}}},Ra=Ta,Aa=(e("tDpL"),Object(l["a"])(Ra,Fa,Ka,!1,null,"2331e27f",null)),Da=Aa.exports,Na={components:{Item:Da},data:function(){return{kidungs:[],page:1}},created:function(){this.fetchKidung()},methods:{fetchKidung:function(){var a=this;I.a.get("http://hindu-id.herokuapp.com/kidung",{headers:{page:this.page,Pragma:"no-cache"}}).then(function(t){var e;(e=a.kidungs).push.apply(e,Object(Y["a"])(t.data.result.data)),a.page=a.page+1}).catch(function(a){})}}},Ua=Na,Ba=Object(l["a"])(Ua,Ia,La,!1,null,null,null),Va=Ba.exports,Ha=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("h1",[a._v("Mantra / Doa Sehari-hari")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[a._l(a.mantras,function(a){return e("p",[e("Item",{attrs:{item:a}})],1)}),e("button",{staticClass:"btn btn-outline-dark",on:{click:a.fetchMantra}},[a._v("\n        Load More\n      ")])],2)])])},Ga=[],Wa={components:{Item:ua},data:function(){return{mantras:[],page:1}},created:function(){this.fetchMantra()},methods:{fetchMantra:function(){var a=this;I.a.get("http://hindu-id.herokuapp.com/mantra",{headers:{page:this.page,Pragma:"no-cache"}}).then(function(t){var e;(e=a.mantras).push.apply(e,Object(Y["a"])(t.data.result.data)),a.page=a.page+1,console.log("======================"),console.log(t.data.result.data),console.log("======================")}).catch(function(a){console.log("======================"),console.log(a),console.log("======================")})}}},za=Wa,Ja=Object(l["a"])(za,Ha,Ga,!1,null,null,null),Za=Ja.exports;n["a"].use(d["a"]);var qa=new d["a"]({routes:[{path:"/",component:w},{path:"/about",component:E},{path:"/register",component:J},{path:"/login",component:T},{path:"/doa",component:Oa,children:[{path:"mantra",component:Za},{path:"kidung",component:Va}]},{path:"/main",component:B,children:[{path:"mantra",component:pa},{path:"kidung",component:ja}]}]}),Ya=e("L2JU");n["a"].use(Ya["a"]);var Qa=new Ya["a"].Store({state:{email:{},token:{},authenticated:!1},mutations:{setLogin:function(a,t){a.email=t.email,a.token=t.token,a.authenticated=!0}},actions:{}}),Xa=e("n3sq");e("+eM2"),e("LdiE");n["a"].use(Xa["a"]),n["a"].use(VueAlert),n["a"].config.productionTip=!1,new n["a"]({router:qa,store:Qa,render:function(a){return a(c)}}).$mount("#app")},YyO4:function(a,t,e){"use strict";var n=e("BtTU"),i=e.n(n);i.a},a57n:function(a,t,e){"use strict";var n=e("Ugm6"),i=e.n(n);i.a},au4D:function(a,t,e){"use strict";var n=e("s6n5"),i=e.n(n);i.a},cHBR:function(a,t,e){},gBlF:function(a,t,e){},hPM4:function(a,t,e){},hilZ:function(a,t,e){},iCAC:function(a,t,e){"use strict";var n=e("k6Aj"),i=e.n(n);i.a},k6Aj:function(a,t,e){},khzu:function(a,t,e){},klZr:function(a,t,e){"use strict";var n=e("hPM4"),i=e.n(n);i.a},nNx0:function(a,t,e){"use strict";var n=e("uWEC"),i=e.n(n);i.a},oFkS:function(a,t,e){"use strict";var n=e("hilZ"),i=e.n(n);i.a},onvB:function(a,t,e){"use strict";var n=e("RACm"),i=e.n(n);i.a},s6n5:function(a,t,e){},tDpL:function(a,t,e){"use strict";var n=e("cHBR"),i=e.n(n);i.a},uWEC:function(a,t,e){},zjiM:function(a,t,e){"use strict";var n=e("gBlF"),i=e.n(n);i.a}});
//# sourceMappingURL=app.42b38545.js.map