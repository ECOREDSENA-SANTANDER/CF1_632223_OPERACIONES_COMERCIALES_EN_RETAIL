<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 4
      h1 Gestión de devolución
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-4 La gestión de devoluciones, también conocida como logística inversa, es un proceso de supervisión de productos que se devuelven a la empresa proveedora.
    
    p.mb-4 Ahora, se analizarán los siguientes conceptos, relacionados con la gestión de devolución.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") a) Devolución: Concepto, procedimiento, formatos
        img.icon(src='@/assets/curso/tema1/icon.svg')

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 La devolución de pedidos o logística inversa se utiliza para coordinar los movimientos de los productos. Su función principal es recuperar el stock teniendo presentes distintas variables, como diferentes trámites administrativos, Re etiquetado, destrucción y reciclaje.
        .cajon.color-acento-contenido.p-4
          p.mb-0 El procedimiento de devolución está regulado, según la legislación comercial de cada país, ya que es un procedimiento de gestión tributaria adherido por la declaración que cada organización debe presentar a su sistema tributario. 
      .col-lg-4.col-md-9.col-9.mb-4
        img.img-a.img-t(src='@/assets/curso/tema4/img2.png', alt='tema1')
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") b) Averías: Concepto, tipos, características
        img.icon(src='@/assets/curso/tema1/icon.svg')

    p.mb-4 En la logística, se conoce como avería a los defectos o desperfectos de los productos, que se ofrecen en la góndola y en la exhibición. 
    p.mb-4 Existen diferentes tipos de averías para un elemento, así: 
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.bd.p-4
        .row.justify-content-center.mb-4
          h4.text-center Avería permanente
          .col-6
            figure
              img.img-a.img-t(src='@/assets/curso/tema4/img3.svg', alt='Texto que describa la imagen')
        p.text-center Avería que persiste hasta que no se elimina por una intervención del surtidor, ejemplo, la fecha de vigencia en los lácteos.
      .col-md.tarjeta.color-primario.bdd.p-4
        .row.justify-content-center.mb-4
          h4.text-center Avería intermitente
          .col-6
            figure
              img.img-a.img-t(src='@/assets/curso/tema4/img4.svg', alt='Texto que describa la imagen')
        p.text-center Avería temporal cuya manifestación se repite.
      .col-md.tarjeta.color-primario.bd.p-4
        .row.justify-content-center.mb-4
          h4.text-center Avería latente
          .col-6
            figure
              img.img-a.img-t(src='@/assets/curso/tema4/img5.svg', alt='Texto que describa la imagen')
        p.text-center Avería que no se hace aparente.

    p.mb-4 Estas averías poseen diferentes características, según como ocurrieron:

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-3.col-md-9.col-9.mb-3
        img.img-a.img-t(src='@/assets/curso/tema4/img6.svg', alt='tema1')
      .col-lg-5.col-md-12.col-12
        .bg3.p-4.mb-2
          ul.lista-ul.ps-2
            li.d-flex.mb-3
              i.fas.fa-circle-check
              p.mb-0 Los daños que sobrevinieren al cargamento desde su embarque empresarial hasta su descarga.
            li.d-flex.mb-3
              i.fas.fa-circle-check
              p.mb-0 Los daños sufridos por las mercancías cargadas sobre cubierta, bajo ningún nivel de protección y prevención.
            li.d-flex.mb-3
              i.fas.fa-circle-check
              p.mb-0 Los daños ocasionados por el mal almacenamiento.
            li.d-flex.mb-3
              i.fas.fa-circle-check
              p.mb-0 Los daños producidos en la góndola por la manipulación del cliente. 

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") c) Reconteo: Concepto, usos Reconteo
        img.icon(src='@/assets/curso/tema1/icon.svg')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img7.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-4 Es un proceso logístico útil porque permite visualizar las ventas, lo que demuestra y permite analizar el tráfico y el número de tickets  que pueden conocer las tasas de conversión.
    
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") d) Reportes: Concepto, tipos 
        img.icon(src='@/assets/curso/tema1/icon.svg')

    .row.justify-content-center.align-items-end
      .col-lg-4.col-md-9.col-9.mb-2
        img.img-a.img-t(src='@/assets/curso/tema4/img8.png', alt='tema1')
      .col-lg-8.col-md-12.col-12.mb-2
        p.mb-4 El reporte, también llamado informe, es un documento que puede ser impreso, digital o en audiovisual, que busca transferir una información del comportamiento de las ventas de un producto determinado en la góndola.
        p.mb-4 Independientemente de su naturaleza escrita u oral, los informes según su contenido son: 
        .row
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-5
              .tarjeta-numerada__numero
                .h2 1
              h4.mb-3 Reportes de ventas diarias
              p.mb-0 Trata de la cantidad de actividades comerciales realizadas en las últimas 24 horas. Ejemplo, el comportamiento del producto en la góndola.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-5
              .tarjeta-numerada__numero
                .h2 2
              h4.mb-3 Análisis de ventas semanal
              p.mb-0 En este punto los informes semanales comenzarán a revelar cualquier situación que deba abordarse de manera inmediata con tu proceso de ventas.









</template>

<script>
export default {
  name: 'Tema4',
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
