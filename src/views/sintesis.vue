<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El manejo de inventarios en el #[em retail] implica una serie de procesos integrados que abarcan desde la logística y clasificación de inventarios en el punto de venta hasta la toma física y digital de estos. Se utilizan herramientas tecnológicas como códigos de barras y #[em software] especializado para garantizar una gestión eficiente. Además, se presta atención a la naturaleza y atributos de los productos, asegurando una rotación adecuada y una gestión óptima del #[em stock]. Finalmente, se incluyen procesos para gestionar devoluciones, identificando averías y realizando los reportes correspondientes para mantener un control riguroso y actualizado del inventario.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.png", alt="Incluye la gestión logística en el punto de venta, que abarca la clasificación y características del inventario, el uso de herramientas como códigos de barras y software especializado. Además, se enfoca en la toma física y digital de inventarios mediante técnicas de conteo y manejo de mercancías. También se presta atención a la gestión de productos, considerando su naturaleza, atributos, rotación y niveles de stock. Finalmente, se abordan las devoluciones, explicando qué son, cómo identificar averías y realizar recuentos y reportes necesarios.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
