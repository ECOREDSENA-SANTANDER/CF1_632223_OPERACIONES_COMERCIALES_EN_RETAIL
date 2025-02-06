<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 3
      h1 Gestión de inventario
    
    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-3
            .bg6.p-1.ps-1.pe-1
              h5.mb-0 Lo único constante en esta vida es el cambio.
            br
            br
            | 
            p Esta frase refleja una realidad natural que afecta tanto a las personas como a las empresas y, por supuesto, a sus productos, que constituyen su principal razón de ser y contribución a la sociedad. La gestión de productos es una función empresarial que guía el ciclo de vida y la innovación de nuevos productos, centrándose primero en el producto y en sus clientes.
    
    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Producto: concepto, naturaleza, atributos, clases

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-7.col-7.mb-3
        img.img-a.img-t(src='@/assets/curso/tema3/img2.png', alt='tema1')
      .col-lg-8.col-md-12.col-12
        .bg1.p-3.mb-3
          ul.lista-ul.ps-2.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 #[b Desde el punto de vista económico,] cualquier cosa externa al hombre, material o inmaterial que satisface un deseo humano, se considera producto.
        .bg1.p-3.mb-3
          ul.lista-ul.ps-2.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 #[b Desde el punto de vista comercial,]  un producto es lo que el consumidor recibe cuando realiza una compra.
        p.mb-3(data-aos="fade-left") Para una empresa que participa del concepto de marketing en su sentido más amplio, un bien o servicio es el medio por el cual cumple con su fin primordial: satisfacer necesidades. 
        p.mb-4(data-aos="fade-right") Es lo que la empresa destina a la venta y forma parte de sus ingresos comerciales. Se concibe como un conjunto de atributos tangibles e intangibles y cuando es adquirido por el comprador, este obtiene beneficios emocionales, racionales y sensoriales. 

    p.mb-4(data-aos="fade-left") En la gestión de productos se encuentran las siguientes clases: 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4.mb-3 Producto en curso
          p.mb-0 Es el producto que está siendo transformado en el proceso productivo. 
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          h4.mb-3 Producto semiterminado
          p.mb-0 Es el producto que ha sufrido la transformación y espera a seguir sufriendo transformaciones hasta convertirse en el producto final o terminado.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h4.mb-3 Producto terminado
          p.mb-0 Es el producto con el proceso de producción o transformación completo y destinado a la venta. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-12.mb-3
        .cajon.color-acento-contenido.p-4
          p.mb-0 Kotler (2017), define un producto como cualquier bien que se pueda ofrecer a un mercado para su atención, adquisición, uso o consumo, y que podría satisfacer un deseo o una necesidad.

    p.mb-4(data-aos="fade-left") Los atributos de los productos aportan utilidad al consumidor y son percibidos como tal; es decir, tienen la capacidad de satisfacer alguna de las necesidades del consumidor. Son propios de los productos los siguientes aspectos:

    .tarjeta--container.row.mb-5(data-aos="fade-right")
      .col-md.tarjeta.color-primario.bd.p-4
        .row.justify-content-center.mb-4
          h4.text-center Características funcionales
          .col-6
            figure
              img.img-a.img-t(src='@/assets/curso/tema3/img4.svg', alt='Texto que describa la imagen')
        p Estas se relacionan con los diferentes usos del producto y las metodologías de operación. Por lo tanto, es posible descubrir nuevas oportunidades de uso que, a su vez, pueden desarrollar el potencial del producto.
      .col-md.tarjeta.color-primario.bdd.p-4
        .row.justify-content-center.mb-4
          h4.text-center Funcionalidades
          .col-6
            figure
              img.img-a.img-t(src='@/assets/curso/tema3/img5.svg', alt='Texto que describa la imagen')
        p La funcionalidad puede variar de acuerdo con los mercados, por esa razón la estandarización de los productos cobra vital importancia.
      .col-md.tarjeta.color-primario.bd.p-4
        .row.justify-content-center.mb-4
          h4.text-center Características generales de un producto
          .col-6
            figure
              img.img-a.img-t(src='@/assets/curso/tema3/img6.svg', alt='Texto que describa la imagen')
        p Son el grupo de aspectos que se concentran en un producto y cuyo objetivo es llenar las expectativas o exigencias del consumidor, sin olvidar que las características pueden ser tangibles e intangibles, dependiendo si se pueden o no percibir por los sentidos. 
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-9.col-md-12.col-12
        p.mb-4 Dentro de las características generales de un producto, hay dos divisiones :
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Características perceptibles")
            p.mb-4 Entre las características perceptibles de los productos encontramos:
            ul.lista-ul.ps-2
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 El núcleo.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 El precio.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 El diseño.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 El envase.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 El etiquetado.
          .row.col-xl-11.m-auto(titulo="Características imperceptibles")
            p.mb-4 Entre las características imperceptibles podemos mencionar:
            ul.lista-ul.ps-2
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 #[b La calidad,] la podemos definir en función de comparar las características más básicas del producto, con aquellos estándares y/o los productos que posee la competencia.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 #[b Los signos distintivos o las marcas,] que son los que nos facultan para reconocer el producto y diferenciarlo de los que son exactos o muy símiles de la competencia.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 #[b La imagen corporativa,] es aquella que llega a constituir el reflejo de la información que se recibe sobre el producto en el subconsciente o en la mente del consumidor.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 #[b Los servicios,] son los que forman aquellos valores que se añaden o integran al producto y que pueden hacerlo distinto a cualquier otro.
      .col-lg-3(data-aos="fade-left" data-aos-delay="500")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/img3.svg")

    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Referencias: concepto, tipos
    
    .row.justify-content-center.align-items-end(data-aos="fade-right")
      .col-lg-4.col-md-7.col-7.mb-4
        img.img-a.img-t(src='@/assets/curso/tema3/img7.png', alt='tema1')
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 Al hablar de referencias se hace mención de aquellos productos que buscan llenar una necesidad puntual y específica. Las mismas abarcan el modelo, función, marca, contenido y pueden ser tantas como artículos disponibles.
        p.mb-4 Las referencias son claves para la satisfacción del cliente, para el cumplimiento de sus necesidades o deseos o creando nuevas necesidades con miras a posicionarse en el mercado, generando rentabilidad. 
        .cajon.color-acento-contenido.p-4
          p.mb-0 La profundidad del surtido en el formato comercial, o #[em Retail], mide qué tanto abarca cada referencia según su clasificación y cómo se componen las variaciones a existir, que son necesarias en todo establecimiento comercial.
    
    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3 Rotación: concepto, procedimiento
      
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-3 La rotación productos es un indicador que señala el total de veces que el inventario del almacén y el de la góndola requiere ser suministrado con nuevas existencias.
        p.mb-3 Los productos tienen una constante entrada y salida, con lo que se evitan multitud de pérdidas, como los productos caducados; este procedimiento permite tener en los almacenes productos frescos y con fecha vigentes en la rotación.
        p.mb-3 Ahora bien, la ausencia del producto se conoce como agotado, y se presenta cuando los artículos de consumo no están en condiciones de venta en ningún lugar del punto o cuando no se dispone de estos en el espacio accesible para el comprador.
      .col-lg-4.col-md-7.col-7.mb-4
        img.img-a.img-t(src='@/assets/curso/tema3/img8.png', alt='tema1')

    separador
    #t_3_4.titulo-segundo.mb-5
      h2 3.4 Agotados: concepto, características

    p.mb-4(data-aos="fade-left") El término "agotados inventarios" se refiere a una situación en la que una empresa no tiene existencias disponibles de uno o más productos en su inventario. Esto ocurre cuando la demanda de los productos supera la oferta disponible, resultando en una falta de #[em stock] para satisfacer las necesidades de los clientes.
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.col-md-6.col-7.mb-4
        img.img-a.img-t(src='@/assets/curso/tema3/img9.svg', alt='tema1')
      .col-lg-8.col-md-12.col-12.col-sm.mb-5.mb-sm-0
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span A
            p.mb-0 #[b Falta de Disponibilidad:] no hay existencias de ciertos productos, lo que impide su venta o distribución.
          li.d-flex
            .lista-ol--cuadro__vineta
              span B
            p.mb-0 #[b Pérdida de Ventas:] la ausencia de productos puede llevar a la pérdida de ventas, ya que los clientes no pueden adquirir lo que buscan y pueden recurrir a la competencia.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span C
            p.mb-0 #[b Impacto en la Satisfacción del Cliente:] la falta de disponibilidad de productos puede afectar negativamente la satisfacción y lealtad del cliente.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span D
            p.mb-0 #[b Problemas en la Cadena de Suministro:] puede ser resultado de problemas en la cadena de suministro, como retrasos en la producción, problemas de transporte o fallos en la gestión de inventarios.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span E
            p.mb-0 #[b Aumento de Costos:] las empresas pueden incurrir en costos adicionales al intentar acelerar la reposición de inventarios o al implementar medidas temporales para mitigar el impacto.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span F
            p.mb-0 #[b Oportunidades de Mejora:] la situación de inventarios agotados puede revelar áreas de mejora en la gestión de inventarios, previsión de demanda y eficiencia operativa.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span G
            p.mb-0 #[b Dependencia de Proveedores:] la falta de productos puede destacar la dependencia de ciertos proveedores y la necesidad de diversificar las fuentes de suministro.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span H
            p.mb-0 #[b Planificación y Estrategia:] requiere una planificación cuidadosa y la implementación de estrategias para evitar que se repita, como el uso de sistemas de inventario #[em just-in-time] o mantener niveles de inventario de seguridad. 
    
    separador
    #t_3_5.titulo-segundo.mb-5
      h2 3.5 #[em Stock] de mercancía

    p.mb-4(data-aos="fade-left") Se denominan #[em stock] de una empresa a las mercancías que se encuentran en ella, acumuladas en un lugar determinado, en tránsito o inmersas en el proceso de producción, y cuyo objetivo es su aplicación empresarial en procesos industriales o comerciales.
    p.mb-4(data-aos="fade-right") Se entiende por nivel de #[em stock] a la cantidad de existencias de un artículo almacenado en un momento dado, muy puntual para los #[em Retailers] en las temporadas de Navidad, madre, padre, escolar, entre otras, dependiendo del calendario comercial.
    p.mb-4(data-aos="fade-left") Existen diversas clases de #[em stock] de mercancía, a saber: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-primario
          .tarjeta.color-acento-botones.bg7.p-4(titulo="<em>Stock</em> no perecedero")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b #[em Stock] no perecedero]
                p.mb-0 Lo integran productos y material que no se deterioran con el paso del tiempo y que, por tanto, podrán estar almacenados durante mayores plazos sin perder sus propiedades originales.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="<em>Stock</em> perecedero")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b #[em Stock] perecedero] 
                p.mb-0 Los productos considerados perecederos son aquellos que, debido a su composición o condiciones, pueden deteriorarse rápidamente y perder sus características originales con el paso del tiempo debido a factores externos. 
          .tarjeta.color-acento-botones.bg7.p-4(titulo="<em>Stock</em> con fecha de caducidad")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b #[em Stock] con fecha de caducidad] 
                p.mb-0 Puede incluir también al #[em stock] perecedero, ya que muchos perecederos cuentan también una fecha limitada para su uso o consumo. Además, incluye aquellos materiales que, aunque no se deterioren con el tiempo, sí cuentan con una fecha límite para su correcta utilización.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="<em>Stock</em> de ciclo o <em>stock</em> activo")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b #[em Stock] de ciclo o #[em stock] activo]
                p.mb-0 El #[em stock] activo también se denomina #[em stock] de ciclo, pues hace referencia al número de artículos con los que debe contar una empresa en condiciones normales para satisfacer la demanda de sus consumidores.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="<em>Stock</em> mínimo")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b #[em Stock] mínimo] 
                p.mb-0 El #[em stock] mínimo es la cantidad básica de artículos que por seguridad se deben disponer en el almacén, para seguir ofreciendo el servicio o producto a los clientes. Consiste en el valor que permite atender la demanda del público, aún en los momentos de mayores ventas.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="<em>Stock</em> máximo")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b #[em Stock] máximo] 
                p.mb-3 El #[em stock] máximo es el mayor volumen de existencias que debe presentar el inventario sin afectar negativamente sus costos. 
                p.mb-0 Se determina periódicamente de acuerdo con el tipo de productos, las ventas y los recursos de almacenamiento disponibles.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="<em>Stock</em> de seguridad")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b #[em Stock] de seguridad] 
                p.mb-0 El #[em stock] de seguridad es el inventario extra que se tiene en el almacén para hacer frente a imprevistos relacionados con cambios en la demanda o retrasos de los proveedores.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="<em>Stock</em> en tránsito o en curso")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b #[em Stock] en tránsito o en curso] 
                p.mb-0 Es la mercancía que todavía está presente en la empresa porque está en un proceso de producción o comercialización: embalaje, fabricación, en proceso de entrega.
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-4 La principal función del #[em stock] es determinar las cantidades de productos que debe tener la empresa en cada momento. De esta forma se cumple el principio logístico básico de disponer en cada momento de los materiales necesarios con el menor coste posible, con varios fines: 
              br
              | 
              p 
              ul.lista-ul.ps-2
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Acercamiento de la mercancía necesaria para la actividad empresarial.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Compensación de las diferencias entre las previsiones de ventas y las ventas reales de una empresa. 
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Control de parte del valor del inmovilizado de la empresa.

</template>

<script>
export default {
  name: 'Tema3',
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
