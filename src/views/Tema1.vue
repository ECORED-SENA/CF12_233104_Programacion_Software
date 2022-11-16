<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 HTML 5
    
    .BGM01.p-md-5.p-4.mb-4
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img01.svg")
        .col-lg-8(data-aos="fade-left")
          p #[em Internet], en su contexto general, está programado por códigos internos, lo cuales cuando se accede a alguna página #[em web], siempre le llegarán esos códigos al navegador y los traduce de modo, que visualmente  el usuario o cibernauta vea lo que el diseñador de la #[em web] ha creado para brindar información.
          .row.justify-content-center.mb-4
            .col-auto
              img.w-75(src="@/assets/curso/temas/img01.png")
            .col
              p.mb-0 Al conjunto de característica de cada etiqueta y sus diferentes funcionalidades que han evolucionado en el tiempo se le llama HTML, que a fecha de hoy, ya va en la versión 5 y es regulado por el consorcio internacional W3C. El Consorcio WWW, #[em World Wide Web Consortium] (W3C), es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la #[em World Wide Web] a largo plazo.
          p.mb-0 En el siguiente video, se podrá conocer un poco más de HTML 5:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Etiquetas (#[em Tags])
    
    .bloque-texto-a.color-acento-contenido.p-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          img.wd75(src="@/assets/curso/tema1/img02.svg")
        .col-lg-8(data-aos="fade-left")
          .bloque-texto-a__texto.p-4
            p.mb-0 Representan el conjunto de funcionalidades que se puede implementar en una página #[em web] y cuentan con una sintaxis de escritura, es decir, la forma correcta como se debe escribir y que debe cumplir con unos atributos y una interdependencia entre ellas, es decir, existen algunas etiquetas que, para su funcionamiento, dependen de otras estas etiquetas se conocen como etiquetas padre, a continuación un ejemplo:
          
    p Las etiquetas padre mínimas con las que debe cumplir un archivo .html son las siguientes:
    
    .row.justify-content-center.mb-5
      .col-lg-10.BG02.p-4(data-aos="flip-up")
        p.text-white.mb-0.animation-1 &lt;<span style="color:#FF0000 !important">HTML</span>&gt; Indica el inicio del documento y que el documento está escrito en el lenguaje html.
          <br> &lt;<span style="color:#FF0000 !important">HEAD</span>&gt; Es el encabezado de la página y esta información va orientada al #[em browser].
          <br> &lt;/<span style="color:#FF0000 !important">HEAD</span>&gt; indica el fin de la etiqueta head ambas etiquetas deben quedar dentro de la etiqueta padre html.
          <br> &lt;<span style="color:#FF0000 !important">BODY</span>&gt; Representa el cuerpo del contenido de la información que va a visualizar el usuario.
          <br> &lt;/<span style="color:#FF0000 !important">BODY</span>&gt; Indica el fin del cuerpo
          <br> &lt;/<span style="color:#FF0000 !important">HTML</span>&gt; Indica el final del documento html 

    .BGIMG01.p-md-5.p-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          LineaTiempoD.color-acento-botones
            .row.justify-content-center.align-items-center(numero="1" titulo="&lt;!DOCTYPE&gt;")
              .col-lg-4.col-8.BG02.p-3.mb-lg-0.mb-4
                p.text-white.mb-0 &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
              .col-lg-8
                p.mb-0 Se utiliza inicialmente para indicar qué tipo de documento se debe interpretar o crear, en este caso HTML.
            .row.justify-content-center.align-items-center(numero="2" titulo="&lt;html&gt;")
              .col-lg-4.col-8.BG02.p-3.mb-lg-0.mb-4
                p.text-white.mb-0 &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
                  <br> &lt;<span style="color:#FF0000 !important">hmtl</span>&gt;
                  <br><br> &lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;
              .col-lg-8
                p.mb-0 Esta es la etiqueta principal de la estructura de un documento HTML, la cual encapsula todo el contenido del documento.
            .row.justify-content-center.align-items-center(numero="3" titulo="&lt;head&gt;")
              .col-lg-8.order-lg-1.order-2
                p.mb-0 El documento necesita una cabecera en donde se suministra información en la parte superior del documento.
              .col-lg-4.col-8.BG02.p-3.order-lg-2.order-1.mb-lg-0.mb-4
                p.text-white.mb-0 &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
                  <br> &lt;<span style="color:#FF0000 !important">hmtl</span>&gt;
                  <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">head</span>&gt;
                  <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:#FF0000 !important">&lt;----</span>
                  <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">head</span>&gt;
                  <br> &lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;
            .row.justify-content-center.align-items-center(numero="4" titulo="&lt;body&gt;")
              .col-lg-4.col-8.BG02.p-3.mb-lg-0.mb-4
                p.text-white.mb-0 &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
                  <br>&lt;<span style="color:#FF0000 !important">hmtl</span>&gt;
                  <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">head</span>&gt;
                  <br><br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">head</span>&gt;
                  <br> &nbsp;&nbsp;&nbsp; <span style="border: 2px solid #FF0000; padding: 2px">&lt;<span style="color:#FF0000 !important">body</span>&gt;</span> apertura
                  <br><br> &nbsp;&nbsp;&nbsp; <span style="border: 2px solid #FF0000; padding: 2px">&lt;/<span style="color:#FF0000 !important">body</span>&gt;</span> cierre
                  <br>&lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;
              .col-lg-8
                p.mb-0 Esta etiqueta permite encapsular todo el contenido que se va a mostrar en el documento HTML.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img03.png")

      .BG03.p-4.mb-4(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/img02.png")
          .col
            p.mb-0 También se pueden encontrar algunas etiquetas que permiten mostrar contenidos más específicos o permiten crear comportamientos en el documento, a continuación se presentan etiquetas que se utilizan con este fin al momento de construir el #[em head] o cabecera:

    .BGIMG02.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Etiqueta &lt;meta&gt;
            p Esta etiqueta, junto con el atributo específico, permite modificar el comportamiento de lo que se va a mostrar en el documento. Por ejemplo: el atributo charset=”iso-8859-1” permite especificar la codificación de los caracteres y cómo se mostrará el texto al usuario.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            .BG02.p-3
              p.text-white &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
                <br> &lt;<span style="color:#FF0000 !important">hmtl</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">head</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">charset</span>=<span style="color:#3FD8CE !important">“iso8859-1”</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">“description”</span> <span style="color:#5573C6 !important">content</span>=<span style="color:#3FD8CE !important">“Ejemplo de HTML5”</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">“keywords”</span> <span style="color:#5573C6 !important">content</span>=<span style="color:#3FD8CE !important">“HTML5, CSS3, Javascript”</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">head</span>&gt;
                <br> &nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">body</span>&gt;
                <br> &nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">body</span>&gt;
                <br>&lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 ¿Qué aporta el atributo &lt;meta&gt;?
            p Define otros aspectos al momento de mostrar un documento #[em web]. La forma correcta de escribir estas etiquetas y la forma de agregarlas a la estructura es dentro del bloque &lt;#[em head]&gt;&lt;/#[em head]&gt; del documento y se utilizará de forma global para todos los documentos HTML, enlazados al sitio o a la aplicación.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            .BG02.p-3
              p.text-white <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">”description”</span> 
                <br> <span style="color:#5573C6 !important">content</span>=<span style="color:#3FD8CE !important">”Ejemplo de HTML5”</span> y el <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">”keywords”</span> 
                <br> <span style="color:#5573C6 !important">content</span>=<span style="color:#3FD8CE !important">”HTML5, CSS3, Javascript”</span>
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Etiqueta &lt;#[em title]&gt;
            p Esta etiqueta permite ponerle un título al documento, este título se mostrará en la pestaña del #[em browser] donde se despliega el documento HTML. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            .BG02.p-3
              p.text-white &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
                <br> &lt;<span style="color:#FF0000 !important">hmtl</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">head</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt; <span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">charset</span><span style="color:#3FD8CE !important">=“iso8859-1”</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt; <span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">name</span><span style="color:#3FD8CE !important">=“description”</span> <span style="color:#5573C6 !important">content</span><span style="color:#3FD8CE !important">=“Ejemplo de HTML5”</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt; <span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">name</span><span style="color:#3FD8CE !important">=“keywords”</span> <span style="color:#5573C6 !important">content</span><span style="color:#3FD8CE !important">=“HTML5, CSS3, Javascript”</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="border: 2px solid #FF0000; padding: 2px">&lt; <span style="color:#FF0000 !important">title</span>&gt;Mi primer código html&lt;/<span style="color:#FF0000 !important">title</span>&gt;</span>
                <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">head</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">body</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">body</span>&gt;
                <br>&lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Etiqueta &lt;#[em link]&gt;
            p Esta etiqueta permite agregar estilo CSS y código #[em JavaScript].
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            .BG02.p-3
              p.text-white &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
                <br> &lt;<span style="color:#FF0000 !important">hmtl</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">head</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt; <span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">charset</span>=<span style="color:#4ADBD1 !important">“iso8859-1”</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt; <span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#4ADBD1 !important">“description”</span> <span style="color:#5573C6 !important">content</span>=<span style="color:#4ADBD1 !important">“Ejemplo de HTML5”</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt; <span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#4ADBD1 !important">“keywords”</span> <span style="color:#5573C6 !important">content</span>=<span style="color:#4ADBD1 !important">“HTML5, CSS3, Javascript”</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt; <span style="color:#FF0000 !important">title</span>&gt;Mi primer código html&lt;/<span style="color:#FF0000 !important">title</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="border: 2px solid #FF0000; padding: 2px">&lt; <span style="color:#FF0000 !important">link</span> <span style="color:#5573C6 !important">rel</span>=“<span style="color:#4ADBD1 !important">stylesheet</span>” <span style="color:#5573C6 !important">href</span>=“<span style="color:#4ADBD1 !important">miArchivoCss.css</span>”&gt;</span>
                <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">head</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">body</span>&gt;
                <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">body</span>&gt;
                <br>&lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;

    p El cuerpo no es más que la estructura que se crea dentro del #[em body], normalmente se le llama plantilla, pues permite enseñar de forma organizada por secciones la información que le llega al usuario.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2
        .cajon.color-acento-botones.p-4.mb-4(data-aos="fade-right")
          p.mb-0 Estas son algunas estructuras del #[em body] que normalmente se utilizan y se identifican al momento de ingresar a un sitio #[em web] o a una aplicación #[em web], estas estructuras pueden variar según el diseñador #[em web] pero, normalmente, se siguen algunos estándares:
        .row.justify-content-center(data-aos="fade-right")
          .col-6
            ol.lista-ol--cuadro.lista-ol--separador
              li
                <i class="fas fa-check-circle" style="color:#4ADBD1"></i>
                | &nbsp; Cabecera.
              li
                <i class="fas fa-check-circle" style="color:#4ADBD1"></i>
                | &nbsp; Barra de navegación.
              li
                <i class="fas fa-check-circle" style="color:#4ADBD1"></i>
                | &nbsp; Información principal.
          .col-6
            ol.lista-ol--cuadro.lista-ol--separador
              li
                <i class="fas fa-check-circle" style="color:#4ADBD1"></i>
                | &nbsp; Barra lateral.
              li
                <i class="fas fa-check-circle" style="color:#4ADBD1"></i>
                | &nbsp; Institucional.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img04.svg")
    
    p A continuación, se mostrará un ejemplo escrito en código HTML de esta estructura: 

    .row.justify-content-center.mb-5
      .col-lg-8
        .BG02.p-4(data-aos="flip-up")
          p.text-white &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
            <br> &lt;<span style="color:#FF0000 !important">hmtl</span> <span style="color:#5573C6 !important">lang</span>=<span style="color:#3FD8CE !important">"es"</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">head</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">charset</span>=<span style="color:#3FD8CE !important">“iso8859-1”</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">“description”</span> <span style="color:#5573C6 !important">content</span>=<span style="color:#3FD8CE !important">“Ejemplo de HTML5”</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">“keywords”</span> <span style="color:#5573C6 !important">content</span>=<span style="color:#3FD8CE !important">“HTML5, CSS3, Javascript”</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">title</span>&gt;Este texto es el título del documento&lt;/<span style="color:#FF0000 !important">title</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">link</span> <span style="color:#5573C6 !important">rel</span>=“<span style="color:#3FD8CE !important">stylesheet</span>” <span style="color:#5573C6 !important">href</span>=“<span style="color:#3FD8CE !important">miArchivoCss.css</span>”&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">head</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">body</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">header</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">h1</span>&gt;mi pagina web&lt;/<span style="color:#FF0000 !important">h1</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">header</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">nav</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">ul</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">li</span>&gt;home&lt;/<span style="color:#FF0000 !important">li</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">li</span>&gt;menu 1&lt;/<span style="color:#FF0000 !important">li</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">li</span>&gt;menu 2&lt;/<span style="color:#FF0000 !important">li</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">li</span>&gt;menu 3&lt;/<span style="color:#FF0000 !important">li</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">ul</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">nav</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">section</span>&gt;
            <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">section</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">aside</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">blockquote</span>&gt; datos personales &lt;/<span style="color:#FF0000 !important">blockquote</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">blockquote</span>&gt; datos de ubicación &lt;/<span style="color:#FF0000 !important">blockquote</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#5573C6 !important">href</span>=<span style="color:#3FD8CE !important">"https://www.mienlace.com"</span>&gt;&lt;/<span style="color:#FF0000 !important">a</span>
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">aside</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">footer</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Derechos reservados &amp;<span style="color:#FF0000 !important">copy</span>; 2010-2011
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">footer</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">body</span>&gt;
            <br>&lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;
    
    p.mb-5 En el siguiente recurso se podrán conocer los elementos que hacen parte de la estructura dentro del body:

    .row.mb-4(data-aos="fade-right")
      .col-auto.BG04.p-2
        .h4.mb-0 Estructura básica de HTML

    p HTML5 permite crear esta estructura básica utilizando nuevos elementos para dividir la plantilla y mostrar la sección correspondiente. 

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img05.svg')
          .BGR05.p-3(x="2.65%" y="50%" numero="1")
            .h5.mb-2 División de estructuras en el #[em body]
            p.mb-0 Al momento de crear la estructura de la plantilla dentro del body se utilizan etiquetas que permiten dividir y estructurar las secciones del sitio, página o aplicación #[em web].
          .BGR05.p-3(x="13.9%" y="8.4%" numero="2")
            .h5.mb-2 Etiqueta &lt;#[em header]&gt; 
            p.mb-0 La etiqueta &lt;#[em header]&gt; se utiliza para la cabecera, teniendo en cuenta que la etiqueta &lt;#[em head]&gt; y &lt;#[em header]&gt; son totalmente diferentes.
          .BGR05.p-3(x="13.75%" y="20.7%" numero="3")
            .h5.mb-2 Etiqueta &lt;nav&gt;
            p.mb-0 &lt;nav&gt; es utilizada para colocar el menú de navegación.
          .BGR05.p-3(x="13.75%" y="33%" numero="4")
            .h5.mb-2 Etiqueta &lt;#[em section]&gt;
            p.mb-0 &lt;#[em section]&gt; es la sección que mostrará la información dependiendo de lo que se quiere mostrar.
          .BGR05.p-3(x="75.8%" y="31.4%" numero="5")
            .h5.mb-2 &lt;#[em aside]&gt;  y  &lt;#[em footer]&gt;
            p.mb-0 &lt;#[em aside]&gt; es una sección que hace parte de la estructura del #[em body] y se puede utilizar para colocar información personal o enlaces importantes y por último el &lt;#[em footer]&gt;.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Textos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img06.png")
      .col-lg-8(data-aos="fade-left")
        p La inclusión de texto en una página #[em web] nace de la necesidad de presentar información a los visitantes. Todo el texto que se incluya se debe presentar dentro de los #[em tags] padres antes descritos, dentro de ese orden de ideas, la recomendación es ordenar estos textos a manera de párrafos que vienen dado por la utilización de la etiqueta &lt;p&gt; y a continuación el texto que se quiere incluir y se cierra con la respectiva etiqueta de cierre&lt;/p&gt;. En función de lo planteado, se puede considerar que el conjunto de párrafos comprende todo el documento y los respectivos saltos de línea dentro de un texto viene dado por la etiqueta &lt;br/&gt;.
        p Otros elementos importantes para enriquecer un texto son los siguientes:
        ol.lista-ol--cuadro.lista-ol--separador
          li
            <i class="fas fa-check-circle" style="color:#4ADBD1"></i>
            p.mb-0 &nbsp; &lt;#[em blockquote]/&gt; Párrafo que en sí mismo corresponde a una cita de reseña.
          li
            <i class="fas fa-check-circle" style="color:#4ADBD1"></i>
            | &nbsp; &lt;q/&gt;		Cita contenido dentro de un texto.
          li
            <i class="fas fa-check-circle" style="color:#4ADBD1"></i>
            | &nbsp; &lt;em/&gt; 		Enfatizando el texto de un párrafo.
          li
            <i class="fas fa-check-circle" style="color:#4ADBD1"></i>
            p.mb-0 &nbsp; &lt;#[em strong]/&gt;	Resaltado de texto.
    
    .BGIMG03.p-md-5.p-4
      .row.justify-content-center
        .col-lg-8.BG02.p-4.mb-4(data-aos="flip-up")
          p.text-white.mb-0 &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">head</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">head</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">body</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mi primer texto en una página #[em web] que no es un párrafo &lt;/<span style="color:#FF0000 !important">br</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">p</span>&gt;Mi primer párrafo página #[em web]&lt;/<span style="color:#FF0000 !important">p</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;<span style="color:#FF0000 !important">blockquote</span>&gt;MI PRIMER PÁRRAFO CITA EN UNA PAGINAWEB&lt;/<span style="color:#FF0000 !important">blockquote</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">p</span>&gt;Siempre se dice que este es el mejor sitio para ver videos online 
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	&lt;<span style="color:#FF0000 !important">q</span> <span style="color:#5573C6 !important">cite</span>=<span style="color:#3FD8CE !important">“http://youtube.com/“</span>&gt;www.youtube.com&lt;/<span style="color:#FF0000 !important">q</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">p</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	En ocasiones más vale &lt;<span style="color:#FF0000 !important">em</span>&gt;#[em correr lento]&lt;/<span style="color:#FF0000 !important">em</span>&gt; pero seguro.
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	&lt;<span style="color:#FF0000 !important">p</span>&gt;Cuando el río suena &lt;<span style="color:#FF0000 !important">strong</span>&gt; #[b piedras lleva]&lt;/<span style="color:#FF0000 !important">strong</span>&gt;.&lt;/<span style="color:#FF0000 !important">p</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">body</span>&gt;
            <br>&lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;
        .col-lg-8(data-aos="fade-right")
          .row
            .col-auto.px-0
              img(src="@/assets/curso/tema1/img07.png")
            .col.BGRS04.p-2
              a.boton.color-acento-contenido.mb-0.ms-5(:href="obtenerLink('/downloads/pagina01.html')" target="_blank")
                span #[b El resultado de la ejecución del código anterior se puede visualizar a continuación:]
                .indicador--click(v-if="mostrarIndicador")
                
    .BGR06.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.w-75(src="@/assets/curso/tema1/img08.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.text-white Textos
              p.text-white Estimado aprendiz a continuación descargar el siguiente documento para su consulta.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo_2.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Imágenes
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img09.png")
      .col-lg-8(data-aos="fade-left")
        p Para anexar una imagen a un documento HTML se usa la etiqueta &lt;img&gt; acompañada del atributo src que corresponde a la ubicación en donde se encuentra la imagen bien sea en formato *.jpeg, *.gif, *.png entre otros formatos.
        .row.justify-content-center.mb-4
          .col-auto
            img(src="@/assets/curso/temas/img03.png")
          .col
            .h5.mb-0 Otros atributos importantes para la etiqueta &lt;img&gt; son #[em width] y #[em height] que sirven para definir el ancho y el alto de la imagen dentro de la página #[em web].

    .row.justify-content-center.mb-4
      .col-lg-8.BG02.p-4(data-aos="flip-up")
        p.text-white.mb-0 &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
          <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">head</span>&gt;
          <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">head</span>&gt;
          <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">body</span>&gt;
          <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">img</span>&gt; <span style="color:#5573C6 !important">SRC</span>=<span style="color:#3FD8CE !important">“/misDocumentos/Imágenes/2301-03.png”</span>
          <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   <span style="color:#5573C6 !important"><span style="border: 2px solid #FF0000; padding: 2px; color:#5573C6 !important">width</span></span>=<span style="color:#3FD8CE !important">“50%”</span> <span style="color:#5573C6 !important"><span style="border: 2px solid #FF0000; padding: 2px; color:#5573C6 !important">height</span></span>=<span style="color:#3FD8CE !important">“40%”</span>&gt;&lt;/<span style="color:#FF0000 !important">img</span>&gt;
          <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">body</span>&gt;
          <br>&lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Hiperenlaces
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img10.svg")
      .col-lg-7(data-aos="fade-left")
        p Es la funcionalidad que permite navegar entre diferentes páginas #[em web], es decir, poder desplazarse por donde el contenido HTML se ha almacenado en archivos con nombres diferentes, incluso almacenados en diversas carpetas donde también se puede navegar hacia otras páginas #[em web] ya publicadas en la red #[em internet].
        .row.justify-content-center.mb-4
          .col-auto
            img(src="@/assets/curso/temas/img04.png")
          .col
            .h5.mb-0 Para lograr un hiperenlace se debe utilizar la etiqueta &lt;a&gt; acompañada del atributo href=”” que indica el destino hacia la página a la que se quiere llegar y dentro de la etiqueta el texto que describe el sitio destino.
        .h4 Ejemplo
        .BG02.p-4(data-aos="flip-up")
          p.text-white.mb-0 &lt;!<span style="color:#FF0000 !important">DOCTYPE</span> <span style="color:#5573C6 !important">html</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">head</span>&gt
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">head</span>&gt
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">body</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#5573C6 !important">href</span>=<span style="color:#3FD8CE !important">“http://www.google.com”</span>&gt;www.google.com&lt;/<span style="color:#FF0000 !important">a</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">body</span>&gt;
            <br> &lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;

    p El siguiente recurso permite conocer paso a paso, el funcionamiento de los hiperenlaces:
    p Para lograr un hiperenlace se debe utilizar la etiqueta &lt;a&gt; Acompañada del atributo href=”” que indica el destino hacia la página a la que se quiere llegar y dentro de la etiqueta el texto que describe el sitio destino.
    .h5 Ejemplo:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2
        .titulo-sexto.color-secundario.mb-4(data-aos="fade-right")
          p.mb-0 Para ingresar a Sofia Plus de clic <a style="color:#1565C0 !important; border: 2px solid #FF0000; padding: 2px" href="http://oferta.senasofiaplus.edu.co/sofia-oferta/" target="_blank">aquí</a>
        .BG02.p-4.mb-4(data-aos="flip-up")
          p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">div</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">p</span>&gt;Para ingresar a sofia plus de clic &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#5573C6 !important">href</span>=<span style="color:#3FD8CE !important">“http://oferta.senasofiaplus.edu.co/sofia-oferta/“</span>&gt;aquí&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">p</span>&gt;
            <br> &lt;<span style="color:#FF0000 !important">div</span>&gt;
        p Los enlaces se pueden crear combinando algunos comportamientos y atributos para mejorar la experiencia.
        .row.mb-4(data-aos="fade-right")
          .col-auto.BG07.p-2
            .h4.mb-0 En una parte de la cadena
        p El desarrollador puede utilizar la etiqueta &lt;p&gt; que permite colocar un párrafo en el documento y puede agregar un enlace en cualquier parte del párrafo, al inicio, al final o en el medio.
        .BG02.p-4.mb-4(data-aos="flip-up")
          p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">div</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt;Para ingresar a sofia plus de clic &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#1565C0 !important">href</span>=<span style="color:#3FD8CE !important">“http://oferta.senasofiaplus.edu.co/sofia-oferta/“</span>&gt;aquí&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">p</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt; &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#1565C0 !important">href</span>=<span style="color:#3FD8CE !important">“http://oferta.senasofiaplus.edu.co/sofia-oferta/“</span>&gt;Para&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">p</span>&gt;ingresar a sofia plus de clic aquí&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">p</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt; Para ingresar a &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#1565C0 !important">href</span>=<span style="color:#3FD8CE !important">“http://oferta.senasofiaplus.edu.co/sofia-oferta/“</span>&gt;sofia/a>&lt;/<span style="color:#FF0000 !important">p</span>&gt;plus de clic aquí&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">p</span>&gt;
            <br> &lt;/<span style="color:#FF0000 !important">div</span>&gt;
        .titulo-sexto.color-secundario.mb-4(data-aos="fade-right")
          p Para ingresar a Sofia Plus de clic <a style="color:#1565C0 !important; border: 2px solid #FF0000; padding: 2px" href="http://oferta.senasofiaplus.edu.co/sofia-oferta/" target="_blank">aquí</a>
          p <a style="color:#1565C0 !important; border: 2px solid #FF0000; padding: 2px" href="http://oferta.senasofiaplus.edu.co/sofia-oferta/" target="_blank">Para</a> ingresar a Sofia Plus de clic aquí
          p.mb-0 Para ingresar a <a style="color:#1565C0 !important; border: 2px solid #FF0000; padding: 2px" href="http://oferta.senasofiaplus.edu.co/sofia-oferta/" target="_blank">Sofia</a> Plus de clic aquí
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img11.png")

    .row.mb-4(data-aos="fade-right")
      .col-auto.BG07.p-2
        .h4.mb-0 En una imagen o icono
    
    p El desarrollador puede emplear un enlace utilizando una imagen o un icono, combinando la etiqueta de &lt;p&gt; párrafo para poner el texto la etiqueta, &lt;a&gt; para el enlace y la etiqueta &lt;img&gt; para mostrar la imagen que se vaya a utilizar.
    
    .row.justify-content-center.mb-4
      .col-lg-9
        .BG02.p-4.mb-4(data-aos="flip-up")
          p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">div</span>&gt;
            <br> &lt;<span style="color:#FF0000 !important">p</span>&gt;Para ingresar a sofia plus de clic &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#1565C0 !important">href</span>=<span style="color:#3FD8CE !important">“http://oferta.senasofiaplus.edu.co/sofia-oferta/“</span>&gt;&lt;<span style="color:#FF0000 !important">img</span> <span style="color:#1565C0 !important">src</span>=<span style="color:#3FD8CE !important">“/home/virtual/Escritorio/index.png/</span>&gt;&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">p</span>&gt;
            <br> &lt;/<span style="color:#FF0000 !important">div</span>&gt;

    p Con la información anterior, se pueden crear enlaces y combinarlos a gusto, pero existe una propiedad que vale la pena nombrar y es la propiedad #[em target].

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img12.svg")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="<em>Target</em>")
            p Permite que el enlace se despliegue de diferentes formas.
            img(src="@/assets/curso/tema1/img13.png")
          .row.justify-content-center(numero="2" titulo="<em>Blank</em>")
            p Permite abrir el enlace en una nueva pestaña.
            .BG02.p-4.mb-4(data-aos="flip-up")
              p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">div</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt;Para ingresar a sofia plus de clic &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#1565C0 !important">href</span>=<span style="color:#3FD8CE !important">“http://oferta.senasofiaplus.edu.co/sofia-oferta/“</span> <span style="color:#1565C0 !important">target</span>=<span style="color:#3FD8CE !important">“_blank”</span>&gt;&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">p</span>&gt;
                <br>&lt;/<span style="color:#FF0000 !important">div</span>&gt;
          .row.justify-content-center(numero="3" titulo="<em>Self</em>")
            p El enlace se abre en el mismo elemento que contiene el enlace, puede ser la ventana completa o un elemento contenedor.
            .BG02.p-4.mb-4(data-aos="flip-up")
              p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">div</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt;Para ingresar a sofia plus de clic &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#1565C0 !important">href</span>=<span style="color:#3FD8CE !important">“http://oferta.senasofiaplus.edu.co/sofia-oferta/“</span> <span style="color:#1565C0 !important">target</span>=<span style="color:#3FD8CE !important">“_self”</span>&gt;&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">p</span>&gt;
                <br>&lt;/<span style="color:#FF0000 !important">div</span>&gt;
          .row.justify-content-center(numero="4" titulo="<em>Parent</em>")
            p El enlace se abre en el elemento de nivel inmediatamente superior al que contiene el enlace.
            .BG02.p-4.mb-4(data-aos="flip-up")
              p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">div</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt;Para ingresar a sofia plus de clic &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#1565C0 !important">href</span>=<span style="color:#3FD8CE !important">“http://oferta.senasofiaplus.edu.co/sofia-oferta/“</span> <span style="color:#1565C0 !important">target</span>=<span style="color:#3FD8CE !important">“_parent”</span>&gt;&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">p</span>&gt;
                <br>&lt;/<span style="color:#FF0000 !important">div</span>&gt;
          .row.justify-content-center(numero="5" titulo="<em>Top</em>")
            p El enlace se abre en el elemento del nivel más alto (es decir, la ventana del navegador).
            .BG02.p-4.mb-4(data-aos="flip-up")
              p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">div</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt;Para ingresar a sofia plus de clic &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#1565C0 !important">href</span>=<span style="color:#3FD8CE !important">“http://oferta.senasofiaplus.edu.co/sofia-oferta/“</span> <span style="color:#1565C0 !important">target</span>=<span style="color:#3FD8CE !important">“_top”</span>&gt;&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">p</span>&gt;
                <br>&lt;/<span style="color:#FF0000 !important">div</span>&gt;

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Tablas

    p Las tablas son los componentes apropiados para organizar el contenido dentro de una página #[em web] en forma de matriz; es decir, con filas y columnas.

    .BGIMG03.p-md-5.p-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p Para definir una tabla se debe usar la etiqueta &lt;#[em table]&gt; acto seguido se debe definir la cantidad de filas dentro de la tabla con la etiqueta &lt;tr&gt; y a su vez se debe definir dentro de la etiqueta &lt;td&gt; el número de columnas que se quieren manejar para presentar la información, al final cada ítem fila-columna se convierte en una celda de información.
          .cajon.color-acento-botones.p-4
            p.mb-0 #[b Ejemplo]: el siguiente código define una tabla de datos con dos filas y tres columnas, el contenido de cada celda puede variar bien sea en su texto, hiperenlaces, imágenes u otros elementos.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img14.png")

      .row.justify-content-center.mb-4
        .col-lg-8
          .BG02.p-4.mb-4(data-aos="flip-up")
            p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">html</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">head</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">head</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">body</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">table</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">tr</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">td</span>&gt;Celda Uno	&lt;/<span style="color:#FF0000 !important">td</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">td</span>&gt;Celda Dos &lt;<span style="color:#FF0000 !important">a</span> <span style="color:#1565C0 !important">href</span>=<span style="color:#3FD8CE !important">"http://www.google.com"</span>&gt;www.google.com&lt;/<span style="color:#FF0000 !important">a</span>&gt;&lt;/<span style="color:#FF0000 !important">td</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">td</span>&gt;Celda Tres	&lt;/<span style="color:#FF0000 !important">td</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">tr</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">tr</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">td</span>&gt;Celda Cuatro&lt;/<span style="color:#FF0000 !important">td</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">td</span>&gt;Celda Cinco&lt;/<span style="color:#FF0000 !important">td</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">td</span>&gt;Celda Seis&lt;/<span style="color:#FF0000 !important">td</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">tr</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">table</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">head</span>&gt;
              <br> &lt;/<span style="color:#FF0000 !important">html</span>&gt;
        .col-lg-8(data-aos="fade-right")
          .row
            .col-auto.px-0
              img(src="@/assets/curso/tema1/img07.png")
            .col.BGRS04.p-2
              a.boton.color-acento-contenido.mb-0.ms-5(:href="obtenerLink('/downloads/pagina02.html')" target="_blank")
                span #[b El resultado de la ejecución del código anterior se puede visualizar a continuación:]
                .indicador--click(v-if="mostrarIndicador")

    .BGR06.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.w-75(src="@/assets/curso/tema1/img08.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.text-white Tablas
              p.text-white Estimado aprendiz a continuación descargar el siguiente documento para su consulta.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo_4.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img15.svg")
      .col-lg-8
        .row.justify-content-center.mb-4(data-aos="fade-right")
          .col-auto
            img(src="@/assets/curso/temas/img04.png")
          .col
            p.mb-0 #[b Divs]: si bien es cierto en el numeral anterior (1.5 Tablas) se explicó el funcionamiento de las tablas, en el diseño de hoy se recomienda usar la etiqueta div que corresponde a un contenedor y permite realizar lo mismo de las tablas, pero con mayores opciones en funcionalidad y dinamismo. Ejemplo de tabla usando div:
        .BG02.p-4.mb-4(data-aos="flip-up")
          p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">div</span><span style="color:#1565C0 !important">class</span>=<span style="color:#3FD8CE !important">“tabla”</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;	&lt;<span style="color:#FF0000 !important">div</span>&gt;Cabecera con el logo de la página “header” &lt;/<span style="color:#FF0000 !important">div</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;	&lt;<span style="color:#FF0000 !important">div</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">div</span><span style="color:#1565C0 !important">class</span>=<span style="color:#3FD8CE !important">“columna1”</span>&gt;Columna 1 &lt;/<span style="color:#FF0000 !important">div</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">div</span><span style="color:#1565C0 !important">class</span>=<span style="color:#3FD8CE !important">“columna2”</span>&gt;Columna 2 &lt;/<span style="color:#FF0000 !important">div</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">div</span><span style="color:#1565C0 !important">class</span>=<span style="color:#3FD8CE !important">“columna3”</span>&gt;Columna 3  &lt;/<span style="color:#FF0000 !important">div</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;	&lt;/<span style="color:#FF0000 !important">div</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;	&lt;<span style="color:#FF0000 !important">div</span>&gt;Pie de página &lt;/<span style="color:#FF0000 !important">div</span>&gt;
            <br> &lt;/<span style="color:#FF0000 !important">div</span>&gt;

    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Formularios
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img16.svg")
      .col-lg-8
        p Los formularios son componentes HTML que permiten la interacción  para intercambio de información con usuarios externos estos se caracterizan por agrupar a su vez a un conjunto de elementos interactivos en donde se pueden ingresar datos de tipo numérico, alfanumérico, carácter, listas de datos entre otros  este ingreso y su construcción se pueden elaborar tanto de manera dinámica como estática.
        .row.justify-content-center.mb-4(data-aos="fade-left")
          .col-auto
            img(src="@/assets/curso/temas/img04.png")
          .col
            p.mb-0 El #[em tag] que representa un formulario se denomina &lt;#[em form]&gt; y debe ser acompañado de los siguientes atributos  action que permite llegar al sitio destino que va a recibir los datos y método que permite definir el tipo de método que puede recibir los datos bien sea #[em post] o #[em get].
        .cajon.color-acento-botones.p-4(data-aos="fade-left")
          p.mb-0 A continuación, se describen algunos #[em tags] que comúnmente conforman un formulario estos se deben encerrar dentro la etiqueta principal  del formulario &lt;#[em form]&gt;.
    
    .BGIMG03.p-md-5.p-4
      .row.justify-content-center.mb-4
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.BGR01A.p-4
              .h4.ms-5 &lt;#[em input]&gt;
              p.mb-0.ms-5 Entrada de datos estas pueden ser texto, número  o alfanumérico sus atributos más importantes son #[em type] para definir el tipo de entrada que puede ser #[em text], radio, #[em submit], reset, el atributo id permite identificar de manera única el objeto en el archivo HTML, el atributo name es para darle un nombre a la entrada o variable y value para recibir el dato del componente. 
        .col-lg-6.col-10(data-aos="fade-left")
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.BGR01B.p-4
              .h4.ms-5 &lt;#[em label]&gt;
              p.mb-0.ms-5 Permite la definición de un nombre para una entrada de datos.

      .row.justify-content-center.mb-4
        .col-lg-8.mb-4    
          .h4 Ejemplo de un formulario
          .BG02.p-4(data-aos="flip-up")
            p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">html</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">head</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">head</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">body</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">FORM</span> <span style="color:#1565C0 !important">action</span>=<span style="color:#3FD8CE !important">"http://misitio.com/prog/usuarionuevo"</span> <span style="color:#1565C0 !important">method</span>=<span style="color:#3FD8CE !important">"post"</span>
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">p</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">label</span> <span style="color:#1565C0 !important">for</span>=<span style="color:#3FD8CE !important">"nombre"</span>&gt;Nombre:&lt;/<span style="color:#FF0000 !important">label</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#1565C0 !important">type</span>=<span style="color:#3FD8CE !important">"text"</span> <span style="color:#1565C0 !important">id</span>=<span style="color:#3FD8CE !important">"nombre"</span>&gt;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">label</span> <span style="color:#1565C0 !important">for</span>=<span style="color:#3FD8CE !important">"apellido"</span>&gt;Apellido:&lt;/<span style="color:#FF0000 !important">label</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#1565C0 !important">type</span>=<span style="color:#3FD8CE !important">"text"</span> <span style="color:#1565C0 !important">id</span>=<span style="color:#3FD8CE !important">"apellido"</span>&gt;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">label</span> <span style="color:#1565C0 !important">for</span>=<span style="color:#3FD8CE !important">"email"</span>&gt;email:&lt;/<span style="color:#FF0000 !important">label</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#1565C0 !important">type</span>=<span style="color:#3FD8CE !important">"text"</span> <span style="color:#1565C0 !important">id</span>=<span style="color:#3FD8CE !important">"email"</span>&gt;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#1565C0 !important">type</span>=<span style="color:#3FD8CE !important">"radio"</span> <span style="color:#1565C0 !important">name</span>=<span style="color:#3FD8CE !important">"sexo"</span> <span style="color:#1565C0 !important">value</span>=<span style="color:#3FD8CE !important">"Varón"</span>&gt; Varón&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#1565C0 !important">type</span>=<span style="color:#3FD8CE !important">"radio"</span> <span style="color:#1565C0 !important">name</span>=<span style="color:#3FD8CE !important">"sexo"</span> <span style="color:#1565C0 !important">value</span>=<span style="color:#3FD8CE !important">"Mujer"</span>&gt; Mujer&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#1565C0 !important">type</span>=<span style="color:#3FD8CE !important">"submit"</span> <span style="color:#1565C0 !important">value</span>=<span style="color:#3FD8CE !important">"Enviar"</span>&gt;&lt;<span style="color:#FF0000 !important">input</span> <span style="color:#1565C0 !important">type</span>=<span style="color:#3FD8CE !important">"reset"</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">p</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span style="color:#FF0000 !important">FORM</span>&gt;
              <br> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span style="color:#FF0000 !important">body</span>&gt;
              <br>&lt;/<span style="color:#FF0000 !important">hmtl</span>&gt;
        .col-lg-8(data-aos="fade-right")
          .row
            .col-auto.px-0
              img(src="@/assets/curso/tema1/img07.png")
            .col.BGRS04.p-2
              a.boton.color-acento-contenido.mb-0.ms-5(:href="obtenerLink('/downloads/pagina03.html')" target="_blank")
                span #[b El resultado de la ejecución del código anterior se puede visualizar a continuación:]
                .indicador--click(v-if="mostrarIndicador")

    .BGR06.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.w-75(src="@/assets/curso/tema1/img08.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.text-white Formularios
              p.text-white Estimado aprendiz a continuación descargar el siguiente documento para su consulta.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo5_pdf_Formularios.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
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
