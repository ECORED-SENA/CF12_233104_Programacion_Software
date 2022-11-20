export default {
  global: {
    componenteFormativo: 'Diseño de interfaces web',
    descripcionCurso:
      'El diseño de un sitio web corresponde a un componente fundamental en la creación de aplicaciones web, por ello este componente se orienta a la comprensión de los conceptos más importantes y la forma en que se deben codificar para construir de manera propia un sitio web o de apoyarse en sistemas gestores de contenidos denominados CMS.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'HTML 5',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tags',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Textos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Imágenes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Hiperenlaces',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Tablas',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Formularios',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Hojas de estilo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Introducción CSS3',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estructura',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Formularios CSS3',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Introducción',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Versiones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sintaxis',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Tipos de datos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Estructuras de control',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestores de contenido',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Definición',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Funciones',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Características',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Clasificación CMS',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Tipos CMS',
            hash: 't_4_5',
          },
        ],
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
      tema: '1. HTML 5',
      referencia:
        'HTMLed.it. (2021). Editor HTML gratuito en línea, limpiador y convertidor.',
      tipo: 'Página web',
      link: 'https://htmled.it/or/',
    },
    {
      tema: '3. JavaScript',
      referencia: 'Cubic Factory. (2021). Ejecutar JavaScript.',
      tipo: 'Página web',
      link: 'https://www.cubicfactory.com/jseditor/',
    },
  ],
  glosario: [
    {
      termino: 'CMS',
      significado: 'sistema manejador de contenidos.',
    },
    {
      termino: 'CSS3',
      significado: 'hojas de estilo en cascada versión 3.',
    },
    {
      termino: 'ES6',
      significado: 'abreviación del estándar ECMA SCRIPT Versión 6.',
    },
    {
      termino: '<em>Frontend</em>',
      significado: 'capa de presentación de una aplicación web.',
    },
    {
      termino: '<em>GET</em>',
      significado: 'método de envío de datos por URL web.',
    },
    {
      termino: 'HTML',
      significado: 'lenguaje de marcado de hipertexto.',
    },
    {
      termino: 'JavaScript',
      significado: 'lenguaje de programación.',
    },
    {
      termino: '<em>Landing Page</em>',
      significado: 'tipo de página web denominada de aterrizaje.',
    },
    {
      termino: 'LAN',
      significado: 'red de área local.',
    },
    {
      termino: 'LESS',
      significado: 'extensión de tipos de archivos CSS3.',
    },
    {
      termino: 'NODE.js',
      significado: 'servidor de aplicaciones.',
    },
    {
      termino: 'MAN',
      significado: 'red de área metropolitana',
    },
    {
      termino: '<em>Post</em>',
      significado: 'método de envío de datos por formulario web.',
    },
    {
      termino: '<em>Plugin</em>',
      significado:
        'aplicación que extiende las funcionalidades de un componente.',
    },
    {
      termino: 'SEO',
      significado: 'posicionamiento de páginas web en los motores de búsqueda.',
    },
    {
      termino: 'WAN',
      significado: 'red de área mundial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acibeiro. M. (2021). Qué es un gestor de contenidos y para qué se utiliza.',
      link: 'https://www.lucushost.com/blog/gestor-de-contenidos/',
    },
    {
      referencia: 'Beati. H. (2016). HTML5 y CSS3.',
    },
    {
      referencia: 'Cuervo. P. V. (2019). 10 Características de un CMS.',
      link: 'https://www.arquitectoit.com/cms/10-caracteristicas-cms/',
    },
    {
      referencia:
        'Gutierrez. R. (2018). Understanding the role of digital commons in the web; The making of HTML5.',
    },
    {
      referencia:
        'Hverbeke. M. (2018). Eloquent JavaScript: A Modern Introduction to Programming.',
    },
    {
      referencia: 'Java desde 0. (2020). Introducción a JavaScript.',
      link: 'https://javadesde0.com/introduccion-a-javascript/',
    },
    {
      referencia: 'Java Script en español. (2021). Bucles e iteraciones.',
      link: 'https://lenguajejs.com/javascript/introduccion/bucles/',
    },
    {
      referencia:
        'Mooc,Aprendizaje Online.(2015). Clasificación de los sistemas de gestión de contenidos.',
      link:
        'https://mooccontenidosweb.wordpress.com/2015/05/01/clasificacion-de-los-sistemas-de-gestion-de-contenidos/',
    },
    {
      referencia: 'Mora. S. L (2021). HTML5 y CSS3: 6 HTML5 - Formularios.',
      link:
        'http://desarrolloweb.dlsi.ua.es/cursos/2011/html5-css3-es/html5-formularios',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo de Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Hernán Muñoz Carvajal',
        cargo: 'Experto Temático',
        centro:
          'Regional-Cauca Centro de teleinformática y producción industrial.',
      },
      {
        nombre: 'Deivis Eduard Ramírez Martínez',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
      {
        nombre: 'David Eduardo Lozada Ceron',
        cargo: 'Experto Temático',
        centro:
          'Regional-Cauca Centro de teleinformática y producción industrial.',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y Los Servicios CIES',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Regional distrito capital - Centro de Diseño y metrología.',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yeimmy Bibiana Barrera Maldonado',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
