<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestores de Contenido CMS 
    
    figure(data-aos="zoom-in")
      img(src="@/assets/curso/tema4/img01.png")
    .row.justify-content-center.img01(data-aos="flip-up")
      .col-lg-10.BGR09.p-4
        p.mb-0 Los gestores de contenidos o CMS nacieron para facilitar el trabajo a los administradores de sitios #[em web] normalmente denominados #[em webmasters], y han logrado avanzar tanto que se han convertido en opciones importantes en el momento de exponer información y contenido propio en la #[em web] sin tener que externalizar el servicio o contratar a un profesional evitando así gastos innecesarios.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Definición
    
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          img(src="@/assets/curso/tema4/img02.svg")
        .col-lg-8(data-aos="fade-left")
          .bloque-texto-a__texto.p-4
            p.mb-0 Un gestor de contenidos o CMS es un sistema manejador de contenidos que corresponde a un #[em software] orientado a la #[em web] que permite crear, administrar y publicar una página #[em web] en la red #[em Internet] sin la necesidad de contar con conocimientos en desarrollo de #[em software] y mucho menos en programación de computadores. Estas aplicaciones cumplen un papel de administración virtual en línea que permiten crear, editar y publicar contenido #[em web].
    
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Funciones
    
    p A continuación se describen las principales funciones que debe cumplir un CMS.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Independencia entre el código y el contenido")
            p.mb-0 Permiten independizar la parte que corresponde a la gestión de la estructura y funcionalidad de la #[em web], de la parte de administración de contenidos. De esta manera, se puede mantener trabajando sobre el sistema CMS perfiles totalmente separados. Por un lado, el perfil desarrollador puede configurar las capacidades del CMS o extenderlas, mientras que el perfil constructor de contenidos estará enfocado en la publicación de los contenidos. 
          .row.justify-content-center(numero="2" titulo="Plantillas en el diseño <em>web</em>")
            p Permiten modificar la capa de visualización y el diseño de la estructura del sitio #[em web] de una forma sencilla mediante el uso de plantillas que corresponde a colores, tipos de letras, imágenes, posicionamiento etc. que son comunes en las diferentes páginas. De esta manera se puede aplicar cada plantilla con el diseño que se desee sobre el contenido común para que este pueda verse de múltiples formas.
            p.mb-0 Se pueden encontrar por un lado plantillas sencillas y de carácter gratuito y por otra parte plantillas de orden profesional con un gran diseño y así mismo con gran coste asociado.
          .row.justify-content-center(numero="3" titulo="Extensión de capacidades")
            p.mb-0 Los CMS o gestores de contenido ofrecen una serie de funcionalidades básicas que en ocasiones no pueden  llegar a cubrir todas las necesidades de un sitio #[em web] es así como se dispone de la posibilidad de crear   sistemas de extensión (#[em plugins]) para añadir nuevas funcionalidades de una forma sencilla sobre la estructura del sitio #[em web].
          .row.justify-content-center(numero="4" titulo="Enfocados al SEO")
            p.mb-0 Permiten implementar en los sitios #[em web] el posicionamiento SEO (#[em Search Engine Optimization]) el cual consiste en ejecutar las labores de posicionamiento, visualización en los principales motores de búsqueda de los navegadores por tanto el contenido que es la parte más importante debe quedar siempre bien posicionado cuando se realizan las búsquedas.
          .row.justify-content-center(numero="5" titulo="Gestión de enlaces")
            p.mb-0 Cada ingreso al sitio #[em web] denominado #[em landing] home tiene asignado un enlace o #[em permalink]. Los CMS o gestores de contenidos permiten gestionar de una forma muy ágil, rápida y sencilla el enlace asociado a cada contenido. Este elemento está correlacionado con el anterior en donde se busca llevar una buena concordancia entre el título, contenido y enlace de la #[em web] como técnica primordial en las técnicas SEO. Así se puede asociar de forma personalizada un enlace con cada contenido.
          .row.justify-content-center(numero="6" titulo="Flujos de trabajo")
            p Hace referencia a la posibilidad de definir responsabilidades dentro del grupo humano que contribuye en la administración del gestor de contenidos donde, normalmente, se encuentran dos perfiles, el perfil que genera el contenido y lo publica al CMS o gestor de contenidos y al perfil que revisa y aprueba el contenido y que finalmente lo hace  público.
            p.mb-0 Los CMS ofrecen flujos de trabajo de aprobación un poco complejos en los que estos dos perfiles puedan realizar el procedimiento de publicación de contenidos.
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img03.svg")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img04.svg")
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="7" titulo="Comentarios")
            p.mb-0 Mucho del contenido que se sirve es susceptible de ser comentado. De esta manera, casi todos los sistemas CMS o gestores de contenidos llevan incluido un sistema de gestión de comentarios donde se podrá validar el autor del comentario, así como hacer una administración de los mismos. 
          .row.justify-content-center(numero="8" titulo="Control de versiones")
            p.mb-0 El contenido cambia con el tiempo, incluso pueden existir varios usuarios que estén modificando el contenido, realizando modificaciones o anotaciones. En este punto es importante el control de versiones, es decir, que se guarde como versión, ya sea una versión importante o una simple revisión, el contenido modificado. Por ello, los CMS ofrecen el poder ir versionando el contenido, recuperar versiones anteriores a la que estamos trabajando y publicar una versión en concreto del contenido.
          .row.justify-content-center(numero="9" titulo="Múltiples idiomas")
            p.mb-0 Muchas de las #[em webs] que se construyen publican contenido en múltiples idiomas. La estructura de la página es la misma, pero el contenido está publicado en varios idiomas. Así, los CMS permiten realizar la gestión de contribuir el contenido en varios idiomas y la capacidad de mostrarlo atendiendo a las preferencias del visitante.
          .row.justify-content-center(numero="10" titulo="Múltiples sitios")
            p.mb-0 Las #[em webs] que desarrollamos ya no suelen tener un único sitio (o #[em site]) si no que suelen tener diferentes secciones de entrada o #[em landing pages]. Una de las características de los CMS es gestionar varios sitios desde una plataforma centralizada, evitando realizar operaciones de mantenimiento en diferentes sitios, con el consecuente coste asociado.
          .row.justify-content-center(numero="11" titulo="Seguridad")
            p.mb-0 La seguridad es uno de los puntos importantes de los CMS, de tal manera que se enfocan a que se pueda perfilar el tipo de contenido dependiendo del usuario que lo consume. Y ofrecen una seguridad general enfocada a dar protección a todo el sitio #[em web].

    p El resumen de las funcionalidades de un CMS se presenta a continuación:

    .row.mb-4(data-aos="zoom-in")
      .col-lg-12.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img05.svg")
      .col-lg-12.col-md-8.col-sm-10.d-lg-none.d-flex
        img(src="@/assets/curso/tema4/img06.svg")
    
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Características
    
    .BGM01.px-md-5.px-4.mb-4
      .row.justify-content-center.align-items-end
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema4/img07.png")
        .col-lg-8.p-3(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-4")
            .BGR11.m-2
              .row.justify-content-center.pt-1
                .col-lg-8.col-md-4.col-5.img02
                  img(src='@/assets/curso/tema4/img08.svg' alt='AvatarTop')
              .p-4
                p.text-center El #[em frontend], corresponde a la parte visible del CMS para los usuarios que acceden como  invitados o  usuarios registrados.
            .BGR11.m-2
              .row.justify-content-center.pt-1
                .col-lg-8.col-md-4.col-5.img02
                  img(src='@/assets/curso/tema4/img09.svg' alt='AvatarTop')
              .p-4
                p.text-center Conformación modular para la configuración y personalización de los sitios #[em web]
            .BGR11.m-2
              .row.justify-content-center.pt-1
                .col-lg-8.col-md-4.col-5.img02
                  img(src='@/assets/curso/tema4/img10.svg' alt='AvatarTop')
              .p-4
                p.text-center Administración de usuarios, roles, perfiles y permisos de acceso.
            .BGR11.m-2
              .row.justify-content-center.pt-1
                .col-lg-8.col-md-4.col-5.img02
                  img(src='@/assets/curso/tema4/img11.svg' alt='AvatarTop')
              .p-4
                p.text-center Componentes para la creación, edición, publicación de contenidos.
            .BGR11.m-2
              .row.justify-content-center.pt-1
                .col-lg-8.col-md-4.col-5.img02
                  img(src='@/assets/curso/tema4/img12.svg' alt='AvatarTop')
              .p-4
                p.text-center Plantillas para distribuir y mantener el diseño del sitio #[em web].
            .BGR11.m-2
              .row.justify-content-center.pt-1
                .col-lg-8.col-md-4.col-5.img02
                  img(src='@/assets/curso/tema4/img13.svg' alt='AvatarTop')
              .p-4
                p.text-center Posibilidad de extensiones que complementan las funcionalidades en el gestor de contenidos.
            .BGR11.m-2
              .row.justify-content-center.pt-1
                .col-lg-8.col-md-4.col-5.img02
                  img(src='@/assets/curso/tema4/img14.svg' alt='AvatarTop')
              .p-4
                p.text-center Características de manejo de  internacionalización en varios idiomas.

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Clasificación CMS
    
    p Se  clasifican normalmente teniendo en cuenta los siguientes tres aspectos: de acuerdo con el lenguaje de programación, la distribución de la licencias y las funcionalidades que presenta.
    
    AcordionA.mb-4(tipo="a" clase-tarjeta="BGR08")
      .row.justify-content-center(titulo="Teniendo en cuenta el lenguaje de programación")
        .col-lg-5.order-lg-1.order-2
          ul.lista-ul--color
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b Lenguaje Java]: jAPS, Liferay, DSpace, Fedora, Nuxeo EP, Magnolia, Hippo CMS, Calenco, Polopoly, IBM Lotus #[em web] Content Management, Day Communiqué WCM, Jarimba, Vignette.
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b Lenguaje PHP]: Drupal, CMS Made Simple, Joomla!, Mambo, PHP-Nuke, TikiWiki, TYPO3, WordPress, Xoops, Zikula, Jadu, ExpressionEngine, Accrisoft Freedom, CMS 10, Dim Works CMS, Content-SORT, Prodigia Easy Site Manager, PipePS, SiteAd CMS.
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b ASP.NET de Microsoft]: DotNetNuke Community Edition, Umbraco, mojoPortal, Kentico CMS, SharePoint Server, Telligent Community, Ektron CMS400.NET, Quantum Art QP7, #[em web] Control CMS.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img15.png')
      .row.justify-content-center(titulo="Con base en la licencia")
        .col-lg-5.order-lg-1.order-2
          ul.lista-ul--color
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b De #[em software] libre (#[em Open Source])]: significa que esta herramienta no presenta costos de licencia y el código fuente es accesible para ser modificado por los desarrolladores. El soporte técnico de este tipo de CMS es asumido por la entidad que lo implementa o por medio de comunidades online que comparten y mantienen su documentación. En esta categoría, algunos de los gestores más reconocidos son WordPress, Drupal, Joomla, Plone, TYPO3, OpenCMS, PHPNuke o Moodle.
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b De código privado]: presentan costos de licencia y servicio, el código fuente es propietario por tanto solo puede ser accedido y modificado por la compañía o personas que lo desarrollaron. En cuanto al soporte técnico es parte de la oportunidad de negocio y normalmente es de excelente calidad, así como una gran cantidad de información documental. Los gestores más destacados son CMS10, Eximius2 CMS, Contendo CMS, Jarimba, CMS HYDRAportal, OnBase, I#[em WEB], Oracle Portal, PipePS, Paloo, Smartone CMS, Vbulletin, XCM - Xeridia Content Manager, Z#[em web] Publisher CMS.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img16.png')
      .row.justify-content-center(titulo="De acuerdo con su funcionalidad")
        .col-lg-5.order-lg-1.order-2
          ul.lista-ul--color
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b Plataformas en general]: se destacan los siguientes nombres (Drupal, Gekko, E107, Joomla, Mambo, PHP-Nuke, TYPO3, TYPOLight, XOOPS, Z#[em web] Publisher CMS, ADSM Portal 2.0, 360 #[em web Manager software], GTLive).
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b Sitios de educación]: entre los cuales se encuentran (ATutor, Claroline, Dokeos, eCollege, FrogTeacher, Moodle, Sakai Project, Scholar360, Synergeia, Teleto).
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b #[em Blogs]]: WordPress, bBlog, DotClear, Lifetype, Plone, Nucleus CMS, Blogger, Textpatter.
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b Galerías]: Gallery, Pixelpost, Expression Engine.
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b #[em Wikis]]: sitios donde grupos de personas publican contenido de manera rápida (MediaWiki, TikiWiki, Twiki).
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b Comercio electrónico]: para ventas online (osCommerce, Magento, Zen Cart, Drupal e-Commerce, CubeCart, Open cart, VirtueMart).
            li
              <i class="fas fa-layer-group" style="color:#F4A338;"></i>
              p.mb-0 #[b #[em Groupware]]: para coordinar trabajo colaborativo en procesos de negocio (#[em web]collab, eGroupWare, Groupware).
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img17.png')

    p A continuación, se presenta la clasificación de los CMS:

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-8
        img(src='@/assets/curso/tema4/img18.svg')

    separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Tipos CMS
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img19.png")
      .col-lg-8(data-aos="fade-left")
        p Los tipos dependen a su vez de los tipos de páginas #[em web] en que se desee involucrar o que se desee crear para ello cuentan  con una serie de gestores de contenidos  muy especializados  equipados con herramientas y características  acordes a cada necesidad.
        p Se pueden encontrar los siguientes gestores de contenidos para utilizarlos en:
        .row.justify-content-center
          .col-lg-10.BG12.p-4
            .row.justify-content-center
              .col-lg-5.col-8.mb-lg-0.mb-4
                ul.lista-ul--color
                  li
                    <i class="fas fa-check-circle" style="color:#FDBE41;"></i>
                    p.mb-0 #[em Blogs].
                  li
                    <i class="fas fa-check-circle" style="color:#FDBE41;"></i>
                    | Páginas corporativas.
                  li
                    <i class="fas fa-check-circle" style="color:#FDBE41;"></i>
                    p.mb-0 Tiendas #[em online] o #[em e-commerce].
                  li
                    <i class="fas fa-check-circle" style="color:#FDBE41;"></i>
                    p.mb-0 Sitios de #[em e-learning].
                  li
                    <i class="fas fa-check-circle" style="color:#FDBE41;"></i>
                    | Foros.
                  li
                    <i class="fas fa-check-circle" style="color:#FDBE41;"></i>
                    | #[em Wikis].
              .col-lg-5.col-10
                img(src="@/assets/curso/tema4/img20.svg")

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
