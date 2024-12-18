export default {
  global: {
    componenteFormativo: 'Manejo de inventarios en el <em>Retail</em>',
    descripcionCurso:
      'La logística en <em>retail</em> radica en el conjunto de técnicas necesarias para poder cumplir con el objetivo final de acercar y vender un producto al cliente en su respectiva sala de ventas del formato comercial o <em>retail</em> especializado. Este proceso abarca desde la gestión eficiente del inventario y el almacenamiento, hasta la distribución y transporte del producto, asegurando su disponibilidad en el momento y lugar adecuados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión logística de inventarios en el punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Inventario: concepto, característica, clasificación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Recursos: concepto, tipo, herramientas, clases',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas: concepto, clases, usos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Código de barras: concepto, características, tipos ',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              '<em>Software</em> para la captura de código de barras: características, funcionalidad, tipos',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de inventario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Toma física: concepto, herramientas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Toma digital: concepto, herramientas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas de conteo: tipos, características, clases',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Mercancía: concepto, clases, normativa para manejo de mercancía',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Producto: concepto, naturaleza, atributos, clases',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Referencias: concepto, tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Rotación: concepto, procedimiento',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Agotados: concepto, características',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              '<em>Stock</em> de mercancía: concepto, niveles, clases, funciones',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de devolución',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestión logística de inventarios en el punto de venta',
      referencia: 'Puerta, L.F. (s.f.). Seminario de carga.',
      tipo: 'PDF',
      link: 'downloads/seminario_de_carga.pdf',
    },
    {
      tema: 'Gestión logística de inventarios en el punto de venta',
      referencia:
        'Compartamos banco. (2016). ¿Por qué es importante controlar el inventario de mi negocio? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/AJaii3mpuJ4',
    },
    {
      tema: 'Gestión de devolución',
      referencia:
        'Martínez, I. (2018). Aprende a hacer un formato para devolución de mercancía al almacén.',
      tipo: 'Video',
      link: 'https://youtu.be/RMqWGZY-PWM',
    },
  ],
  glosario: [
    {
      termino: 'Almacén',
      significado:
        'lugar en el que se acumulan los productos de la empresa hasta que se venden.',
    },
    {
      termino: 'Control',
      significado:
        'acción de revisión para comprobar que todo se ajusta a los previsto y añadir las variaciones.',
    },
    {
      termino: 'Demanda',
      significado:
        'reclamo del producto de la empresa por parte de su cliente.',
    },
    {
      termino: 'Distribución',
      significado:
        'acción de poner a disposición del cliente el producto en el punto de venta.',
    },
    {
      termino: 'Inventario',
      significado: 'listado ordenado de la mercancía del almacén.',
    },
    {
      termino: 'Materia prima',
      significado:
        'aquello que se incorpora al proceso de fabricación o producción y tras su transformación forma parte del producto.',
    },
    {
      termino: 'Producto',
      significado:
        'lo que la empresa destina a la venta y forma parte de sus ingresos comerciales.',
    },
    {
      termino: 'Rotura de <em>stock</em>',
      significado:
        'se produce cuando la demanda no puede ser satisfecha, ya que no se cuenta con mercancía en el almacén.',
    },
    {
      termino: 'Salida de mercancía',
      significado:
        'registro por el que la mercancía sale del almacén de la empresa, principalmente, por las ventas.',
    },
    {
      termino: 'Sistema de clasificación',
      significado:
        'sistema implementado en el almacén para ordenar sus existencias.',
    },
    {
      termino: 'Sistema de valoración',
      significado:
        'sistema implementado en el almacén para poner precio a sus existencias.',
    },
    {
      termino: '<em>Stock</em>',
      significado: 'mercadería que se encuentra en el almacén de la empresa.',
    },
    {
      termino: 'Transporte',
      significado:
        'conjunto de acciones que se desarrollan desde que la mercancía sale del almacén de la empresa hasta que llega al cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Céspedes, A. (2010). Principios de mercadeo. Ecoe Ediciones. ',
      link:
        'https://archive.org/details/principiosdemerc0000cesp/page/466/mode/2up',
    },
    {
      referencia: 'Kotler, P. (2017). Fundamentos del marketing.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf',
    },
    {
      referencia:
        'Guía de control de inventarios: qué es, cómo hacerlo y ejemplos. (2023, 19 julio).',
      link:
        'https://blog.hubspot.es/sales/que-es-control-de-inventarios#:~:text=El%20control%20de%20inventarios%20es,recursos%20para%20su%20correcto%20almacenaje',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Alberto Pérez Posada',
          cargo: 'Instructor',
          centro: 'Comercio - Regional Antioquia',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñador instruccional',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
