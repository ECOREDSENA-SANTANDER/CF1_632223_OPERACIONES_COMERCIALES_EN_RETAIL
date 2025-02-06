<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Gestión logística de inventarios en el punto de venta
      
    .row.justify-content-center.align-items-end
      .col-lg-4.col-md-7.col-7.mb-4
        img.img-a.img-t(src='@/assets/curso/tema1/img1.png', alt='tema1')
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 El inventario es una organización de elementos de forma ordenada y valorada mediante un proceso de recopilación de datos. Este  sistema ayuda a las empresas a mantener el control y el orden de sus bienes, almacenes y bodegas, facilitando todo el proceso comercial y de producción para garantizar la disponibilidad del producto final para los consumidores.
        .cajon.color-acento-contenido.p-4
          p.mb-0 El inventario tiene una estructura predefinida que contiene información valiosa sobre los productos, como su volumen, tamaño y características, asociadas a las funciones de provisión y distribución, las cuales están integradas en la estrategia logística a desarrollar.

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1. Conceptos básicos
    
    p.mb-4(data-aos="fade-left") Para explicar la logística  comercial, se puede decir que es la responsabilidad y actividad que lleva a cabo una empresa para organizar, prever y controlar el movimiento de información, materias primas y productos finales, desde las fases de aprovisionamiento hasta su llegada al usuario final.
    p.mb-4(data-aos="fade-left") Es así como la logística comercial se apoya de los siguientes conceptos :

    .row.justify-content-center.align-items-end(data-aos="fade-right")
      .col-lg-8.col-md-12.col-12
        .bg8.p-4
          SlyderF(columnas="col-lg-12 col-md-12 col-12")
            .tarjeta.tarjeta--slyder.blanco.p-3
              .row.justify-content-center.align-items-center(titulo="Aseguramiento de la calidad")
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Abastecimiento de materiales
                  p.mb-4 Es el conjunto de actividades que permiten identificar y adquirir los bienes y servicios que una organización requiere, para su operación adecuada y eficiente, ya sea de fuentes internas o externas.
            .tarjeta.tarjeta--slyder.blanco.p-3
              .row.justify-content-center.align-items-center(titulo="Aseguramiento de la calidad")
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Cumplimiento de pedidos
                  p.mb-4 Es el proceso de registrar el inventario de mercancías, pedidos a los proveedores, evitando las roturas de #[em stock], entre otras acciones.
            .tarjeta.tarjeta--slyder.blanco.p-3
              .row.justify-content-center.align-items-center(titulo="Aseguramiento de la calidad")
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img5.svg', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Almacenamiento
                  p.mb-4 Es el manejo temporal de insumos o mercancías, manteniéndolos bajo control en un determinado espacio para evitar su deterioro y reducir los desperdicios.
            .tarjeta.tarjeta--slyder.blanco.p-3
              .row.justify-content-center.align-items-center(titulo="Aseguramiento de la calidad")
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img6.svg', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Previsión de la demanda
                  p.mb-4 Es el cálculo de las compras que debemos realizar sobre el producto para estar siempre abastecidos de #[em stock].
            .tarjeta.tarjeta--slyder.blanco.p-3
              .row.justify-content-center.align-items-center(titulo="Aseguramiento de la calidad")
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img7.svg', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Gestión del inventario
                  p.mb-4 Es el proceso de dirigir, acumular y utilizar el inventario, desde las materias primas hasta el producto terminado.
            .tarjeta.tarjeta--slyder.blanco.p-3
              .row.justify-content-center.align-items-center(titulo="Aseguramiento de la calidad")
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img8.svg', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Gestión de la cadena de suministro
                  p.mb-4 De acuerdo con las siglas en inglés #[em SCM (Supply Chain Management)], se describe a la gestión de la cadena de suministro como la optimización del espacio y el flujo de un producto desde el abastecimiento de la materia prima hasta la producción, la logística y la entrega al cliente final.
      .col-lg-4.col-md-7.col-7
        img(src="@/assets/curso/tema1/img2.png")

    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2. Inventario: concepto, característica, clasificación 

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-4.col-md-7.col-7.mb-4
        img.img-a.img-t(src='@/assets/curso/tema1/img9.png', alt='tema1')
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 El concepto “inventariar”, es cuando se  procede a tener un número real y contrastado de elementos que hay en el almacenamiento, donde se valida no solo número, sino también estado y valor. Es un proceso vital para conocer la magnitud de elementos que se tienen en resguardo, #[b convirtiéndose en un elemento de validación y control.]
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 El marco normativo de nuestro país exige que, al menos una  vez al año, se realice de forma obligatoria.
        p.mb-4 La función contable va de la mano de este y suele coincidir su realización con los cierres económicos de la organización, ya que el mismo se convierte en insumo para los cierres y balances económicos que también son normativos establecidos en la legislación.
    
    p.mb-4(data-aos="fade-left") Clasificación de frecuencia y método con el que se revisan y actualizan los niveles  de inventario. 

    .row.justify-content-center.align-items-end.mb-4(data-aos="fade-right")
      .col-lg-5.col-md-12.col-12
        .bg1.p-3.mb-2
          ul.lista-ul.ps-2
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 #[b Periódico:] se realiza al cumplimiento de periodos contables. Con el mismo se hace el levantamiento de los elementos disponibles en el momento de su realización. 
        .bg1.p-3.mb-3
          ul.lista-ul.ps-2
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 #[b Continuo:] cuando se hace de forma constante para obtener el #[em stock] en disposición a tiempo real, descontando las salidas que se realicen. 
      .col-lg-3.col-md-7.col-7.mb-3
        img.img-a.img-t(src='@/assets/curso/tema1/img10.svg', alt='tema1')

    p.mb-4(data-aos="fade-left") Existen otros  tipos de clasificaciones de inventarios, que se basan en diferentes criterios según las necesidades de la empresa o industria. A continuación, se presentan algunas de las clasificaciones más comunes:
  
    .tarjeta--container.row(data-aos="fade-right")
      .col-md.tarjeta.color-primario.bd.p-5
        .row.justify-content-center.mb-4
          h4.text-center Materias primas
          .col-6
            figure
              img(src='@/assets/curso/tema1/img11.svg', alt='Texto que describa la imagen')
        p Registran material que forma parte del proceso productivo y es suministrado por el proveedor.
      .col-md.tarjeta.color-primario.bdd.p-5
        .row.justify-content-center.mb-4
          h4.text-center Productos semiterminados
          .col-6
            figure
              img(src='@/assets/curso/tema1/img12.svg', alt='Texto que describa la imagen')
        p Registran las fases por las que pasa el producto dentro de su proceso de fabricación o producción.
      .col-md.tarjeta.color-primario.bd.p-5
        .row.justify-content-center.mb-4
          h4.text-center Productos terminados
          .col-6
            figure
              img(src='@/assets/curso/tema1/img13.svg', alt='Texto que describa la imagen')
        p Recogen los productos que tienen como destino la venta al cliente.

    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Recursos: concepto, tipo, herramientas, clases 

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.col-md-7.col-7.mb-3
        img.mb-3(src='@/assets/curso/tema1/img14.png', alt='Texto que describa la imagen')
      .col-lg-4.col-md-12.col-12.mb-3
        .bg1.p-3
          p.mb-2 Se entiende por recursos los componentes disponibles para la actividad logística que permiten llevar a cabo las tareas necesarias. Estos recursos, esenciales para cumplir con las funciones en el #[em Retail], pueden ser tanto de tipo humano como material. 
          p.mb-0 Los recursos y sus herramientas dependen del tipo de proceso logístico que se van a desempeñar, en lo relacionado al #[em Retail], generalmente se pueden tener las famosas #[em Manitou], elevadores, grúas, transportadoras, remolcadoras, cintas de transportación, #[em pallets], #[em containers], plataformas móviles, entre otros.

    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Herramientas: concepto, clases, usos

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 En otro orden de ideas, las aplicaciones informáticas de base de datos y hojas de cálculo aplicado a la gestión de inventarios son las más comunes, como herramientas de control en los diferentes #[em Retail] o formatos comerciales del mercado.
        p.mb-4 Para la gestión y control de los inventarios existen en el mercado multitud de #[em softwares] que permiten dicha labor de la manera más eficiente. Evidentemente, dichas aplicaciones son generalmente de pago y producidas por grandes compañías como Microsoft o SAP cuyos costes, en la mayoría de los casos, son imposibles de sufragar para muchas empresas.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Existen diferentes empresas, con presupuestos y recursos que varían notablemente en cuantía, esto no debería ser un impedimento para la consecución de herramientas para este fin, ya que a través de aplicaciones como #[em Excel] o la utilización de #[em software] libre o gratuito le permitirían tener una gestión aceptable de su proceso de control y gestión de inventarios.
        p.mb-4 En aquellas empresas donde los inventarios adquieren volúmenes realmente grandes, la utilización de estas herramientas ofimáticas no resulta viable ni eficaz, por lo que recurrir a las aplicaciones de pago antes mencionadas es la única opción que tienen para realizar una correcta gestión de sus inventarios.
      .col-lg-4.col-md-7.col-7
        img.img-a.img-t(src='@/assets/curso/tema1/img15.svg', alt='tema1')
    
    separador
    #t_1_5.titulo-segundo.mb-5
      h2 1.5 Código de barras: concepto, características, tipos 

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-4.col-md-7.col-7.mb-4
        img.img-a.img-t(src='@/assets/curso/tema1/img16.png', alt='tema1')
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 La tecnología siempre ha traído innovaciones a diferentes campos, en este caso el código de barras es un elemento de gran valor que se usa desde hace muchos años y ha permitido almacenar gran cantidad de datos de un producto, servicio o localización.
        .cajon.color-secundario.p-4.mb-4
          p.mb-3 Un código de barras está compuesto por números y barras que identifican un producto, además, es obligatorio incluirlo en la mayoría de los artículos. 
          p.mb-0 El mismo es fácilmente distinguible por su composición de barras y números que dan identidad a todo producto y cuyo uso es obligatorio para la mayoría de estos.
        p.mb-0 Los códigos de barras son muy útiles a la hora de gestionar los productos en un comercio, muestra una información esencial del artículo cuando se pasa a través de unos lectores láser, esta acción se lleva a cabo principalmente para hacer inventario en la empresa y el registro en el punto de pago de manera eficaz y eficiente para que queden perfectamente identificados o registrados. 

    .bg2.mb-5
      .mb-4.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
          h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") ¿Qué significado tienen los números y las barras que están incluidos en este tipo de códigos?
          img.icon(src='@/assets/curso/tema1/icon.svg') 
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-10.col-md-12.col-12.mb-4
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img23.png', alt='Texto que describa la imagen')
            .tarjeta.colore.p-4(x="23.6%" y="85.2%" numero="1")
              img.mb-4(src='@/assets/curso/tema1/img24.png', alt='Texto que describa la imagen')
              .h5.mb-2 1. País
              p Los dos primeros dígitos identifican al país del que proviene el artículo.
            .tarjeta.colore.p-4(x="40.6%" y="85.2%" numero="2")
              img.mb-4(src='@/assets/curso/tema1/img26.png', alt='Texto que describa la imagen')
              .h5.mb-2 2. Código empresa
              p Los siguientes números, que abarcan la cantidad de cinco, indican el número que dispone la empresa en consecuencia.
            .tarjeta.colore.p-4(x="62.2%" y="85.2%" numero="3")
              img.mb-4(src='@/assets/curso/tema1/img25.png', alt='Texto que describa la imagen')
              .h5.mb-2 3. Código producto
              p Se incluyen los números del producto que sirven para identificarlo.
            .tarjeta.colore.p-4(x="74.5%" y="85.2%" numero="4")
              img.mb-4(src='@/assets/curso/tema1/img27.png', alt='Texto que describa la imagen')
              .h5.mb-2 4. Dígito verificación
              p El dígito de control es el último número que se vislumbra en un código de barras y es la comprobación de que todo está correcto y aporta seguridad para la gestión del producto.
            .tarjeta.colore.p-4(x="50%" y="47%" numero="5")
              img.mb-4(src='@/assets/curso/tema1/img28.png', alt='Texto que describa la imagen')
              p Las barras que se incluyen en un código de barras tienen valores diferentes dependiendo siempre de la cantidad y la anchura que tengan. Habitualmente cada una de estas barras se compone de 8 sub barras situadas horizontalmente y de distinto color: blanco o negro. Aquí entra a formar parte el lenguaje binario, siendo el negro 1 y el blanco 0.

            

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") ¿Por qué es importante el uso del código de barras?
        img.icon(src='@/assets/curso/tema1/icon.svg')   

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-6.col-md-12.col-12.mb-4
        .bg3.p-2.mb-2
          ul.lista-ul.ps-2.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 Ayudan en el proceso de inventariar al interior de las empresas de forma fácil y óptima de cada al proceso.
        .bg3.p-2.mb-2
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 A la hora de la facturación de cada compra, ayuda a ubicar y contabilizar el mismo dentro de la cuenta sin dar paso al error de una digitalización manual.
        .bg3.p-2.mb-2
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 En la lista de compra gracias al mismo se puede ver con claridad cada artículo adquirido y facilitar la validación por parte del comprador.
        .bg3.p-2.mb-2
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 Permite tener un control y visión estadística que ayude en la toma de decisiones dentro de la estrategia empresarial.
        .bg3.p-2.mb-2
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 Su uso es difundido a multitud de artículos y sectores, a tal punto que la mayoría de los productos que se disponen a la venta lo poseen.
        .bg3.p-2.mb-2
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 Su uso ha permitido agilizar todas las tareas y facilitar la labor humana al utilizar dichos códigos. 
      .col-lg-4.col-md-7.col-7.mb-4
        img.img-a.img-t(src='@/assets/curso/tema1/img17.png', alt='tema1')

    p.mb-4(data-aos="fade-left") Los tipos de códigos de barras más comunes son los siguientes: 

    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-7.col-7.mb-4.mb-lg-0(data-aos="fade-right")
        img.img-a.img-t(src='@/assets/curso/tema1/img18.svg', alt='tema1')
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-primario
          .tarjeta.color-acento-botones.bg7.p-4(titulo="EAN")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b Código de barras EAN #[em (European Article Number)]]
                p.mb-0 También conocido como GTIN-13 o EAN-13, es un tipo de código de barras utilizado internacionalmente para identificar productos individuales en un punto de venta.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="UPC")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b Código de barras UPC #[em (Universal Product Code)]]
                p.mb-0 El código UPC (siglas de #[em Universal Product Code]) es un código de barras diseñado especialmente para identificar de manera inequívoca productos y consiste en un número único de 12 dígitos que se representan por barras de diferentes anchos y separación entre ellas para ser legibles por un #[em scanner] especializado.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Code 39")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b Código de barras Code 39 (Code 3 of 9)]
                p.mb-0 Este es el tipo de código de barras más utilizado en aplicaciones personalizadas. Su popularidad se debe a que puede codificar tanto texto como números (A-Z, 0-9, +, -, ., y < espacio >). Además, puede ser leído por prácticamente cualquier lector de código de barras en su configuración predeterminada. 
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Code 128")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b CODE 128]
                p.mb-0 CODE 128 es un código de barras desarrollado por Computer Identics Corporation (EE. UU.) en 1981. El código de barras CODE 128 puede representar todos los 128 caracteres del código ASCII (números, mayúsculas/minúsculas de alfabetos, símbolos y códigos de control).
          .tarjeta.color-acento-botones.bg7.p-4(titulo="ITF")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b #[em Interleaved Two of Five (ITF)]]
                p.mb-0 Es ampliamente utilizado como el código de distribución estándar impreso en cajas de cartón corrugado. Hay varios tipos llamados “2 of 5”. Aunque su composición es similar, el código es completamente diferente.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="<em>POSTNET</em>")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b #[em POSTNET]]
                p.mb-0 Es una técnica postal de codificación numérica que se utiliza para clasificar el correo para la entrega, con el código postal de destino.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="PDF 417")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b PDF 417] 
                p.mb-0 Es un código de barras apiladas que se puede utilizar para codificar grandes cantidades de información a través de múltiples códigos. Cada patrón en un código de barras individual consiste exactamente de 4 barras y 4 espacios, y cada patrón es de 17 unidades de longitud.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="QR")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b QR]
                p.mb-0 Combinación de barras y cuadros que acompaña a un producto o unidad de consumo para que pueda ser leído y descifrado mediante un lector óptico que transmite los datos a una máquina o una computadora.
      
    separador
    #t_1_6.titulo-segundo.mb-5
      h2 1.6 #[em Software] para la captura de código de barras

    p.mb-4(data-aos="fade-left") Existen diversos #[em software] para la captura de los códigos de barras, algunos de ellos son:

    .row.fondo1.align-items-center.p-3(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-3.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.p-4
              .col-lg-12.my-3
                h4.mb-4 Barcode Studio #[em (Windows y Mac® OS)]
                p.mb-4 Proporciona una forma fácil y adecuada de crear códigos de barras visualmente y exportarlos como imagen o como un fichero de gráficos vectoriales, ofreciendo capacidades muy eficientes de impresión en las etiquetas.
                img(alt="" src="@/assets/curso/tema1/img19.png")
            .row.justify-content-center.p-4
              .col-lg-12.my-3
                h4.mb-4 #[em TBarCode Office]
                p.mb-4 El complemento de código de barras #[em TBarCode Office] se integra perfectamente en #[em Microsoft Office] y es fácil de utilizar gracias a su intuitiva interfaz de usuario. Además, proporciona acceso a todos los parámetros del código de barras. Esta combinación hace de #[em TBarCode Office] el complemento de código de barras más avanzado del mercado.
                img(alt="" src="@/assets/curso/tema1/img20.png")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 #[em TBarCode SDK]
                p.mb-4 El componente de #[em software] de código de barras #[em TBarCode] “Todo En Uno” (para Microsoft® Windows), genera e imprime todos los códigos de barras con aplicaciones diversas y cualquier tipo de impresora. Este flexible generador de código de barras soporta más de 100 tipos de códigos de barras diferentes. Entre ellos se encuentran códigos de barras lineales y 2D como Code128, EAN128, Datamatrix, QR Code, PDF417, Aztec Code, GS1 DataBar.
              .col-lg-4.col-md-7.my-3
                img(alt="" src="@/assets/curso/tema1/img21.png")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 #[em TBarCode/X]
                p.mb-4 Es un complemento de #[em software] de código de barras para Linux®, UNIX® y Mac OS X. Permite producir todos los formatos más comunes de código de barras (lineales, 2D y compuestos) con una calidad perfecta creando códigos de barras automáticamente durante la impresión “sobre la marcha”. De este modo, puede convertir cada impresora de la empresa en una impresora de código de barras sin costes adicionales.
              .col-lg-4.col-md-7.my-3
                img(alt="" src="@/assets/curso/tema1/img22.png")





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
