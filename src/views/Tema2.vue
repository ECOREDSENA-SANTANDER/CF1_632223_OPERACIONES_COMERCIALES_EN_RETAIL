<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Gestión de inventario
    
    .row.justify-content-center.align-items-end(data-aos="fade-right")
      .col-lg-4.col-md-7.col-7.mb-4
        img.img-a.img-t(src='@/assets/curso/tema2/img1.png', alt='tema1')
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 Es el proceso de pedido, almacenamiento y uso del inventario, desde las materias primas hasta el producto terminado, o desde el producto terminado hasta la góndola o exhibición en el punto de venta del cliente o retail determinado. 
        p.mb-4 La política de inventarios debe establecerse para lograr el cumplimiento de dos objetivos muy importantes y específicos: 
        .row
          .col-md-6.col-xl.mb-xl-0.mb-4
            .tarjeta-numerada.color-secundario.p-5
              .tarjeta-numerada__numero
                .h2 1
              p.mb-0 Controlar el nivel de inventario, que permita suplir las necesidades del usuario final en oportunidad, calidad y competitividad de precios.
          .col-md-6.col-xl.mb-xl-0
            .tarjeta-numerada.color-secundario.p-5
              .tarjeta-numerada__numero
                .h2 2
              p.mb-0 Inspeccionar que efectivamente, la inversión en inventario sea controlada, reducida y adaptada a los requerimientos del cliente. 
        
    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Toma física: Concepto, herramientas 
    
    .row.justify-content-center.align-items-end.mb-4
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 El inventario físico consiste en corroborar la presencia real de bienes almacenados y verificar su estado y condiciones de seguridad tanto en el almacenamiento como en las respectivas góndolas o lineal del retail o formato comercial. 
        .cajon.color-acento-contenido.p-4
          p.mb-0 En consecuencia, la elaboración y verificación de los inventarios físicos (toma física) se debe diligenciar el formato #[b Acta de inicio y terminación de la verificación física del mismo.] Por esta razón, el formato de control de inventarios es un documento que  permite detallar las existencias de productos que se encuentran bajo protección en cada dependencia.
      .col-lg-4.col-md-7.col-7.mb-4
        img.img-a.img-t(src='@/assets/curso/tema2/img2.png', alt='tema1')
    
    p.mb-4(data-aos="fade-left") Un ejemplo de Formato es: 
    
    .row.fondo2.align-items-center.p-3(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5
        .row.justify-content-center.mb-4

        .row.justify-content-center.align-items-end.mb-4(data-aos="fade-right")
          .col-lg-12.col-md-12.col-12.mb-2
            .cajablanca.p-4
              .row.justify-content-center.align-items-end.mb-4
                .col-lg-8.col-md-12.col-12.mb-4
                  h4.text-center.mb-5 Acta de Inicio y Terminación de la Verificación Física del Inventario
                  p.mb-2 #[b I. Datos Generales]
                  ul.lista-ul.mb-0.ps-3
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 #[b Fecha de Inicio:] [Fecha de inicio de la verificación]
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 #[b Fecha de Terminación:] [Fecha de terminación de la verificación]
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 #[b Lugar:] [Ubicación donde se realiza la verificación]
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 #[b Responsable del Proceso:] [Nombre del responsable]
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-4 #[b Equipo de Verificación:] [Nombres de los miembros del equipo]
                  p.mb-2 #[b II. Objetivo de la Verificación]
                  p.mb-4 El objetivo de esta verificación física del inventario es asegurar la exactitud y confiabilidad de los registros de inventario, y garantizar que el inventario físico coincide con los registros contables.
                  p.mb-2 #[b III. Procedimiento de Verificación]
                  p.mb-2 #[b 1. Preparación:]
                  ul.lista-ul.mb-0.ps-3
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 Revisión de los registros de inventario actuales.
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-4 Asignación de áreas y secciones específicas a cada miembro del equipo de verificación.
                  p.mb-2 #[b 2. Ejecución:]
                  ul.lista-ul.mb-0.ps-3
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 Inspección física de los bienes en el inventario.
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 Comparación de los bienes físicos con los registros contables.
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-4 Registro de discrepancias y ajustes necesarios.
                  p.mb-2 #[b 3. Finalización:]
                  ul.lista-ul.mb-0.ps-3
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 Consolidación de los datos recopilados.
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 Revisión y validación de los resultados por el responsable del proceso.
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-4 Preparación del informe final de verificación.
                  p.mb-2 #[b IV. Resultados de la Verificación]
                  ul.lista-ul.mb-0.ps-3
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 #[b Total, de Ítems Verificados:] [Número total de ítems verificados]
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-0 #[b Discrepancias Encontradas:] [Detalle de las discrepancias encontradas]
                    li.d-flex.mb-0
                      i.fas.fa-circle
                      p.mb-4 #[b Ajustes Realizados:] [Detalle de los ajustes realizados en los registros de inventario]
                  p.mb-2 #[b V. Conclusiones y Recomendaciones]
                  p.mb-4 [Conclusiones derivadas del proceso de verificación y recomendaciones para futuras acciones.]
                  p.mb-4 #[b VI. Firma de los responsables]
                  p.mb-2.ps-4 Nombre del responsable del Proceso: [Nombre]
                  p.mb-4.ps-4 Firma: _______________________________
                  p.mb-4 #[b VII. Aprobación Final]
                  p.mb-2.ps-4 Nombre del Supervisor/Director: [Nombre]
                  p.mb-4.ps-4 Firma: _______________________________
    
    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Toma digital: Concepto, herramientas 

    p.mb-4(data-aos="fade-left") La toma digital, como su nombre lo define, es la utilización y automatización para administrar cualquier almacén, donde se sigue cada movimiento de #[em stock] con un sistema único de inventario de doble entrada.
    p.mb-4(data-aos="fade-right") Entre las herramientas más comunes para realizar esta actividad, tanto en la toma física como en la digital, se incluyen:

    .row.justify-content-center.align-items-center
      .col-lg-4(data-aos="fade-left" data-aos-delay="500")
        figure.m-auto.col-7.col-md-7.col-lg-12.mb-4
          img(src="@/assets/curso/tema2/img3.svg")
      .col-lg-8.col-md-12.col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="<em>Software</em> de alerta de restock")
            .row.justify-content-center.align-items-center
              .col-lg-2.mb-4
                img.img-a.img-t(src="@/assets/curso/tema2/img4.svg")
              .col-lg-10.mb-4
                p.mb-0 Recuerda o avisa que es tiempo de recolocar cierto producto, activándose cuando este alcanza determinado nivel de #[em stock].
          .row.col-xl-11.m-auto(titulo="<em>Software</em> de reporte en el inventario")
            .row.justify-content-center.align-items-center
              .col-lg-2.mb-4
                img.img-a.img-t(src="@/assets/curso/tema2/img5.svg")
              .col-lg-10.mb-4
                p.mb-0 Solución de gestión en la organización empresarial integrando procesos financieros, administrativos y comerciales.
          .row.col-xl-11.m-auto(titulo="Recolección de data a través del código de barras")
            .row.justify-content-center
              .col-lg-2.mb-4
                img.img-a.img-t(src="@/assets/curso/tema2/img6.svg")
              .col-lg-10.mb-4
                ul.lista-ul.ps-2
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Proporciona una identificación única a cada producto, servicio o localización.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Permite la captura automática de la información.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Posibilita la automatización de varios procesos a lo largo de la cadena de abastecimiento.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Permite obtener información rápida y oportuna sobre productos servicios o localizaciones.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Incrementa la productividad y la eficiencia porque optimiza el tiempo en captura de información.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Disminuye la posibilidad del error humano
          .row.col-xl-11.m-auto(titulo="<em>Dashboards</em> (tableros)")
            .row.justify-content-center.align-items-center
              .col-lg-2.mb-4
                img.img-a.img-t(src="@/assets/curso/tema2/img7.svg")
              .col-lg-10.mb-4
                p.mb-0 Herramienta que sirve para visualizar y dar seguimiento a determinados indicadores de desempeño o estado.
          .row.col-xl-11.m-auto(titulo="<em>NCR Counterpoint</em>")
            .row.justify-content-center.align-items-center
              .col-lg-2.mb-4
                img.img-a.img-t(src="@/assets/curso/tema2/img8.svg")
              .col-lg-10.mb-4
                p.mb-0 Tiene la capacidad de generar facturas rápidamente (en cuestión de segundos) utilizando una solución de punto de venta (POS, por sus siglas en inglés: Point of Sale) que opera a través de la nube. 

    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Técnicas de conteo: Tipos, características, clases 
    
    p.mb-5(data-aos="fade-left") Se define el conteo para el inventario como la acción o el proceso de cuantificar la cantidad de #[em stock] en poder de un retail o la existencia de productos en una organización. Existen diversas técnicas para inventariar las existencias de productos, definidas de la siguiente manera:
    
    .row.mb-4(data-aos="fade-right")
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-primario
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Conteo periódico de <em>stock</em>")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b Conteo periódico de #[em stock]]
                p.mb-0 Como su nombre lo indica, se definirá su realización con una periodicidad definida en días o meses, dependiendo de la cantidad.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Conteo continuo de <em>stock</em>")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b Conteo continuo de #[em stock]] 
                p.mb-0 Este va acompañado de un plan de acción y se realiza de forma continua para el conocimiento del inventario a tiempo real
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Conteo de precisión")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b Conteo de precisión] 
                p.mb-0 Se realiza al momento de recibir mercancía de los proveedores o al preparar los pedidos para clientes. 
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Validación de <em>stock</em> agotado")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b Validación de #[em stock] agotado]
                p.mb-0 Se utiliza como validación de la no disponibilidad de producto o para validar y cuantificar cantidades muy pequeñas.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Inventario anual de <em>stock</em>")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-12
                p.mb-3 #[b Inventario anual de #[em stock]] 
                p.mb-0 Este sistema entra en funcionamiento cuando no se realiza un inventario periódico o continuo, y se lleva a cabo un único proceso de inventario para el año en curso. 
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        img.img-a.img-t(src='@/assets/curso/tema2/img9.png', alt='tema1')

    p.mb-4(data-aos="fade-left") A continuación, se verá un paso a paso en el proceso de conteo en el retail o almacenamiento de la organización:
    
    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-12.col-12
        PasosA.color-secundario.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-6.col-8(data-aos="fade-left")
              img.mb-3(src="@/assets/curso/tema2/img10.svg")
            .col-lg-10.mb-lg-0.mb-4(data-aos="fade-right")
              p.mb-0 La mercancía en la góndola se contará de izquierda a derecha, de arriba hacia abajo y de atrás hacia adelante.
          .row.justify-content-center.align-items-center
            .col-lg-10.mb-lg-0.mb-4(data-aos="fade-right")
              p.mb-0 En el proceso deberán participar personas que cumplan las veces de auditor y contador.
            .col-lg-2.col-md-6.col-8(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img11.svg")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-6.col-8.order-lg-1.order-2(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img12.svg")
            .col-lg-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              p.mb-0 Se procederá a una división por anaqueles para mejor distribución y control.
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              p.mb-0 Se hará un conteo independiente desde diferentes puntos, por parte del auditor y contador, comenzando el primero de un punto A hacia el B y el otro de forma contraria.
            .col-lg-2.col-md-6.col-8.order-lg-2.order-2(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img13.svg")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-6.col-8.order-lg-1.order-2(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img14.svg")
            .col-lg-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              p.mb-0 Se listarán todos los productos del anaquel de izquierda a derecha, de arriba hacia abajo y de atrás hacia delante, esto para facilitar más el conteo.
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              p.mb-0 Se hará un reconteo en las partes donde haya dudas y se pondrán nuevamente en el mismo lugar.
            .col-lg-2.col-md-6.col-8.order-lg-2.order-2(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img15.svg")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-6.col-8.order-lg-1.order-2(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img16.svg")
            .col-lg-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              p.mb-0 Se validará con la apertura de las cajas, que se tenga la cantidad correcta y esperada en las mismas.
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              p.mb-0 Si se encuentra un producto que no esté anotado en la lista, se le dará un número de secuencia intermedia dependiendo la ubicación del producto y se anotará al final de la hoja.
            .col-lg-2.col-md-6.col-8.order-lg-2.order-2(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img17.svg")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-6.col-8.order-lg-1.order-2(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img18.svg")
            .col-lg-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              p.mb-0 Los números de secuencia de la mercancía listada, serán de 10 en 10 y por anaquel, es decir en el anaquel 1 abra la secuencia 10, 20, 30, etc. y hasta el número que se necesite según la cantidad de mercancía que haya; y en el anaquel 2 será lo mismo comenzando por el número 10 y continuando de 10 en 10.
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              p.mb-0 Al finalizar se contrastarán los listados del auditor y contador para la validación de errores y, en el caso de que existan, corregirlos para luego ingresar la información al sistema.
            .col-lg-2.col-md-6.col-8.order-lg-2.order-2(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img19.svg")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-6.col-8.order-lg-1.order-2(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img20.svg")
            .col-lg-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              p.mb-0 Imprimir lo capturado en sistema y revisar que no haya ningún faltante físico de mercancía, en caso de haberlo se volverá a contar la mercancía con faltante y se buscará en todos los lugares posibles que pueda estar antes de tomarla como faltante real.

    p.mb-5(data-aos="fade-left") A su vez, en el proceso de conteo se pueden encontrar tipos de conteo, por  fecha, producto y ubicación:

    .cont_5_1.mt-4.mb-5(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema2/img21.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Conteo cíclico por fecha
              p.mt-4.text-white.mb-0.text-center Este conteo establece que una vez se define un periodo de tiempo constante, cada vez que se cumpla ese periodo se realiza un conteo de lo que se tiene físicamente en el almacén; si se establece el 15 de cada mes o, por ejemplo, todos los lunes.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema2/img22.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Conteo por producto
              p.mt-4.text-white.mb-0.text-center Este consiste en realizar el conteo por orden de referencias de producto y en cualquier momento sin importar la fecha. En este caso se llevan a cabo conteos independientes para cada una de las referencias o tipos de producto que se manejan en el almacén.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema2/img23.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Por ubicación
              p.mt-4.text-white.mb-0.text-center Dependiendo la distribución espacial y física del almacén. Es decir que, en orden de ubicación sin importar la fecha y la referencia, se realiza el conteo de las existencias.
    
    p.mb-0(data-aos="fade-left") Para la realización del proceso de conteo se debe hacer una mediación tecnológica, a través de herramientas que ayuden en el proceso de contabilización y que permita una gestión en vivo de la información recolectada. Herramientas como estas permiten almacenar, organizar y generar reportes, y mucho más, que ayuden a conocer las unidades exactas que quedan en resguardo, permitiendo cruzar la información y colaborar en la toma de decisiones y evitando una posible ruptura en la cadena de servicio.

    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Mercancía: Concepto, clases, normativa para manejo de mercancía 
    
    .row.justify-content-center.align-items-end.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-7.col-7.mb-4
        img.img-a.img-t(src='@/assets/curso/tema2/img24.svg', alt='tema1')
      .col-lg-5.col-md-12.col-12
        .bg3.p-4.mb-2
          p.mb-3 Es un bien material que se puede usar o poseer. A diferencia de otros bienes, como los que se producen para el autoconsumo, la fabricación, transformación y distribución de mercancías tienen como finalidades fundamentales:
          ul.lista-ul.ps-2
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 La actividad económica.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 El intercambio.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 La relación mercantil. 

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-8.col-md-12.col-12
        .bg1.p-3.mb-2
          ul.lista-ul.ps-2
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 #[b Como elemento material,] siempre está relacionada con un momento y un lugar acordados entre dos o más partes donde se produce una entrega y una recepción, en los que la mercancía realiza su función de intercambiable. 
        .bg1.p-3.mb-3
          ul.lista-ul.ps-2
            li.d-flex.mb-0
              i.fas.fa-circle
              p.mb-0 #[b Como bien material,] la mercancía puede ser un elemento o producto que resulte necesario trasladar en un momento determinado desde un lugar de fabricación a otro por necesidades de manufactura, ensamblaje o de consumo, entre otros motivos.
      .col-lg-4.col-md-7.col-7.mb-3
        img.img-a.img-t(src='@/assets/curso/tema2/img25.png', alt='tema1')

    p.mb-4(data-aos="fade-left") Cuando eso sucede, es decir, cuando se transporta, la mercancía adquiere la consideración de “carga”. Así, la mercancía se considera una carga desde el momento en que pasa a ser un elemento que va a ser movido y trasladado o enviado desde un punto de origen a otro de destino, para lo que con toda probabilidad deberá ser embalado, manipulado, manejado o almacenado.
    p.mb-4(data-aos="fade-right") Las mercancías o productos pueden ser sólidos, líquidos o gaseosos y se clasifican en: 

    .row.justify-content-center(data-aos="zoom-in-left")(alt="La imagen expone cómo los bienes materiales se clasifican en cuatro categorías: materias primas, que son sustancias naturales no transformadas; productos en bruto, que requieren acondicionamiento o transporte especializado debido a sus características; semiproductos o productos intermedios, que han pasado por un proceso de transformación y se integrarán en etapas productivas posteriores; y productos elaborados, que son bienes terminados destinados al consumo final tras haber sido transformados a partir de materias primas o productos intermedios.")
      .col-lg-8.col-md-12.col-12
        .titulo-sexto.colorr
          h5 Figura 1. 
          | Clasificación mercancías o productos

        .row.justify-content-center.mb-2(data-aos="fade-down")
          .col-md-6.col-lg-6.mb-3
            .tarjeta.bg9.cuad
              .p-4
                h5.mb-4 Materias primas
                p Sustancias, minerales o materiales naturales que no han sido sometidos a un proceso de transformación.
            img.img-a.img-t.d-none.d-lg-block.mov1(src='@/assets/curso/tema2/img30.svg', alt='tema1')
          
          .col-md-6.col-lg-6.mb-3
            .tarjeta.bg9.cuad
              .p-4
                h5.text-right.mb-4 Productos en bruto
                p.text-right Sustancias, minerales o materiales, ya sean naturales o artificiales, que debido a sus características de volumen o requerimientos específicos necesitan acondicionamiento o transporte especializado para su traslado. 
            img.img-a.img-t.d-none.d-lg-block.mov2(src='@/assets/curso/tema2/img31.svg', alt='tema1')

        .row.justify-content-center.mb-5(data-aos="fade-down")
          .col-md-6.col-lg-6.mb-3
            .tarjeta.bg9.cuad
              .p-4
                h5.mb-0 Semiproductos o 
                h5.mb-4 productos intermedios
                p Sustancias o materiales naturales o artificiales que han sido sometidos a un proceso de transformación, estos posteriormente se integrarán dentro de un proceso productivo posterior.
            img.img-a.img-t.d-none.d-lg-block.mov3(src='@/assets/curso/tema2/img32.svg', alt='tema1')
          
          .col-md-6.col-lg-6.mb-3
            .tarjeta.bg9.cuad
              .p-4
                h5.text-right.mb-5 Productos elaborados
                p.text-right Bienes obtenidos mediante un proceso de transformación de materia prima o productos intermedios destinados al consumo final.
            img.img-a.img-t.d-none.d-lg-block.mov4(src='@/assets/curso/tema2/img33.svg', alt='tema1')

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Normativa para manejo de mercancía
        img.icon(src='@/assets/curso/tema1/icon.svg')

    p.mb-4(data-aos="fade-left") Entendemos por normatividad a un conjunto de normas, y las más frecuentes para el manejo de mercancías son:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-6.col-lg.mb-3
        .tarjeta-avatar
          img.my-2(src='@/assets/curso/tema2/img26.svg' alt='')
          .tarjeta.bg5
            .p-5
              p.mb-0.text-center Ley 34 de 1989 para el régimen de las aduanas y el Decreto 402 de 2005 que aprueba el Reglamento para el Despacho Expreso de Envíos.
    
      .col-md-6.col-lg.mb-3
        .tarjeta-avatar
          img.my-2(src='@/assets/curso/tema2/img27.svg' alt='')
          .tarjeta.bg5
            .p-5
              p.mb-0.text-center Resolución 4100 del 26 de diciembre de 2004 para el transporte de carga.


      .col-md-6.col-lg.mb-3
        .tarjeta-avatar
          img.my-2(src='@/assets/curso/tema2/img28.svg' alt='')
          .tarjeta.bg5
            .p-5
              p.mb-0.text-center Código internacional de mercancías peligrosas.
    
    p.mb-4(data-aos="fade-left") Es importante tener en cuenta en el retail:
    
    .row.justify-content-center.align-items-end(data-aos="fade-right")
      .col-lg-3.col-md-7.col-7.mb-3
        img.img-a.img-t(src='@/assets/curso/tema2/img29.png', alt='tema1')
      .col-lg-5.col-md-12.col-12
        .bg3.p-4.mb-2
          ul.lista-ul.ps-2
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 La correcta presentación de los productos que se encuentran en las góndolas. 
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 No utilizar utensilios sucios. 
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Buena rotación de utensilios o instrumentos.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 No recoger del suelo utensilios o instrumentos, aplicando siempre unas buenas prácticas de manufactura. 
    
    


</template>

<script>
export default {
  name: 'Tema2',
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
