(function(e){function a(a){for(var o,t,c=a[0],s=a[1],u=a[2],l=0,d=[];l<c.length;l++)t=c[l],Object.prototype.hasOwnProperty.call(r,t)&&r[t]&&d.push(r[t][0]),r[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,a=0;a<i.length;a++){for(var n=i[a],o=!0,t=1;t<n.length;t++){var c=n[t];0!==r[c]&&(o=!1)}o&&(i.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},t={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"60c351a5","chunk-0206bfa0":"07f4fcb8","chunk-110f1f0b":"c729ecf3","chunk-13a6037e":"725eca6a","chunk-179248a2":"0882ec97","chunk-18f95272":"bb47be6d","chunk-2a9fce91":"79146cce","chunk-2c06842c":"f5617033","chunk-2d0c5615":"01eba69d","chunk-2d0e96ec":"ec734bee","chunk-2d208d90":"ab67193c","chunk-2d21d0e2":"f77c22e4","chunk-2d22c123":"c9115eca","chunk-2e80bb9a":"b3e4ecbc","chunk-319206de":"06f535cf","chunk-36769079":"0093655a","chunk-4cdd78c0":"b1eae698","chunk-515a8379":"471b9110","chunk-53ccb27e":"03f89fab","chunk-55d286b8":"69a8245e","chunk-59974754":"d7b5c639","chunk-5d1ce150":"33dbeb12","chunk-60cbc06b":"e7f70342","chunk-623f2040":"f9fac6f0","chunk-659152b8":"3f7b8817","chunk-6a43ec24":"3e891bb4","chunk-6e1e538a":"034b6f92","chunk-6e613899":"2a976d39","chunk-766a929b":"1ae4942d","chunk-7794bb60":"f954ae38","chunk-c796899c":"ed37a8e2","chunk-e8a7823a":"c0dd9220","chunk-fde47172":"7ec6a62b",comple:"33df24fe",creditos:"a69d078c",glosario:"1e836140",intro:"2b3e11e8",referencias:"7dd22887",sintesis:"c2fce337",tema1:"0e2897c8",tema2:"2243dca3",tema3:"fff4a323",tema4:"57daa291"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"0112a77f","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"da5fb782","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"8da28923","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"a5098b99",creditos:"8ecd0ea4",glosario:"a45d25c5",intro:"31d6cfe0",referencias:"87bd1f4a",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===o||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete t[e],m.parentNode.removeChild(m),n(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){t[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",d.name="ChunkLoadError",d.type=o,d.request=t,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=a,u=u.slice();for(var d=0;d<u.length;d++)a(u[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=i,s=n("2877"),u=Object(s["a"])(c,t,r,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");d["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Manejo de inventarios en el <em>Retail</em>",descripcionCurso:"La logística en <em>retail</em> radica en el conjunto de técnicas necesarias para poder cumplir con el objetivo final de acercar y vender un producto al cliente en su respectiva sala de ventas del formato comercial o <em>retail</em> especializado. Este proceso abarca desde la gestión eficiente del inventario y el almacenamiento, hasta la distribución y transporte del producto, asegurando su disponibilidad en el momento y lugar adecuados.",imagenBannerPrincipal:n("65fa"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Gestión logística de inventarios en el punto de venta",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Conceptos básicos",hash:"t_1_1"},{numero:"1.2",titulo:"Inventario: concepto, característica, clasificación",hash:"t_1_2"},{numero:"1.3",titulo:"Recursos: concepto, tipo, herramientas, clases",hash:"t_1_3"},{numero:"1.4",titulo:"Herramientas: concepto, clases, usos",hash:"t_1_4"},{numero:"1.5",titulo:"Código de barras: concepto, características, tipos ",hash:"t_1_5"},{numero:"1.6",titulo:"<em>Software</em> para la captura de código de barras: características, funcionalidad, tipos",hash:"t_1_6"}]},{nombreRuta:"tema2",numero:"2",titulo:"Gestión de inventario",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Toma física: concepto, herramientas",hash:"t_2_1"},{numero:"2.2",titulo:"Toma digital: concepto, herramientas",hash:"t_2_2"},{numero:"2.3",titulo:"Técnicas de conteo: tipos, características, clases",hash:"t_2_3"},{numero:"2.4",titulo:"Mercancía: concepto, clases, normativa para manejo de mercancía",hash:"t_2_4"}]},{nombreRuta:"tema3",numero:"3",titulo:"Gestión de productos",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Producto: concepto, naturaleza, atributos, clases",hash:"t_3_1"},{numero:"3.2",titulo:"Referencias: concepto, tipos",hash:"t_3_2"},{numero:"3.3",titulo:"Rotación: concepto, procedimiento",hash:"t_3_3"},{numero:"3.4",titulo:"Agotados: concepto, características",hash:"t_3_4"},{numero:"3.5",titulo:"<em>Stock</em> de mercancía: concepto, niveles, clases, funciones",hash:"t_3_5"}]},{nombreRuta:"tema4",numero:"4",titulo:"Gestión de devolución",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF1_632223_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Gestión logística de inventarios en el punto de venta",referencia:"Puerta, L.F. (s.f.). Seminario de carga.",tipo:"PDF",link:"downloads/seminario_de_carga.pdf"},{tema:"Gestión logística de inventarios en el punto de venta",referencia:"Compartamos banco. (2016). ¿Por qué es importante controlar el inventario de mi negocio? [Video]. YouTube.",tipo:"Video",link:"https://youtu.be/AJaii3mpuJ4"},{tema:"Gestión de devolución",referencia:"Martínez, I. (2018). Aprende a hacer un formato para devolución de mercancía al almacén.",tipo:"Video",link:"https://youtu.be/RMqWGZY-PWM"}],glosario:[{termino:"Almacén",significado:"lugar en el que se acumulan los productos de la empresa hasta que se venden."},{termino:"Control",significado:"acción de revisión para comprobar que todo se ajusta a los previsto y añadir las variaciones."},{termino:"Demanda",significado:"reclamo del producto de la empresa por parte de su cliente."},{termino:"Distribución",significado:"acción de poner a disposición del cliente el producto en el punto de venta."},{termino:"Inventario",significado:"listado ordenado de la mercancía del almacén."},{termino:"Materia prima",significado:"aquello que se incorpora al proceso de fabricación o producción y tras su transformación forma parte del producto."},{termino:"Producto",significado:"lo que la empresa destina a la venta y forma parte de sus ingresos comerciales."},{termino:"Rotura de <em>stock</em>",significado:"se produce cuando la demanda no puede ser satisfecha, ya que no se cuenta con mercancía en el almacén."},{termino:"Salida de mercancía",significado:"registro por el que la mercancía sale del almacén de la empresa, principalmente, por las ventas."},{termino:"Sistema de clasificación",significado:"sistema implementado en el almacén para ordenar sus existencias."},{termino:"Sistema de valoración",significado:"sistema implementado en el almacén para poner precio a sus existencias."},{termino:"<em>Stock</em>",significado:"mercadería que se encuentra en el almacén de la empresa."},{termino:"Transporte",significado:"conjunto de acciones que se desarrollan desde que la mercancía sale del almacén de la empresa hasta que llega al cliente."}],referencias:[{referencia:"Céspedes, A. (2010). Principios de mercadeo. Ecoe Ediciones. ",link:"https://archive.org/details/principiosdemerc0000cesp/page/466/mode/2up"},{referencia:"Kotler, P. (2017). Fundamentos del marketing.",link:"https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf"},{referencia:"Guía de control de inventarios: qué es, cómo hacerlo y ejemplos. (2023, 19 julio).",link:"https://blog.hubspot.es/sales/que-es-control-de-inventarios#:~:text=El%20control%20de%20inventarios%20es,recursos%20para%20su%20correcto%20almacenaje"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del ecosistema",centro:"Dirección General"},{nombre:"Claudia Johanna Gómez Pérez",cargo:"Responsable de línea de producción",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Jaime Alberto Pérez Posada",cargo:"Instructor",centro:"Comercio - Regional Antioquia"},{nombre:"Zvi Daniel Grosman",cargo:"Diseñador instruccional",centro:"Centro Agropecuario La Granja - Regional Tolima"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora metodológica y pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Sandra Paola Morales Páez",cargo:"Evaluadora instruccional",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Yazmin Rocio Figueroa Pacheco",cargo:"Diseñadora de contenidos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Pedro Alonso Bolivar Gonzalez",cargo:"Desarrollador <em>full stack</em>",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Maria Alejandra Vera Briceño",cargo:"Animadora y productora multimedia",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Yineth Ibette Gonzalez Quintero",cargo:"Validador de recursos educativos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Erika Fernanda Mejía Pinzón",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro Agroturístico - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"65fa":function(e,a,n){e.exports=n.p+"img/banner-principal.53587608.png"},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.7a038165.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.536a06b7.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.9c656f34.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.24144f7a.png"}});
//# sourceMappingURL=app.c49da0c9.js.map