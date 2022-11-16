<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Hojas de estilo
    
    .BGM01.p-md-5.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img01.png")
        .col-lg-8(data-aos="fade-left")
          p Las hojas de estilo son el mecanismo mediante el cual se otorga a una página #[em web] su apariencia, para esto se crea un archivo nuevo con extensión .css que hace referencia a un tipo de archivo denominado CSS (#[em Style Sheet Cascade]) hojas de estilo en cascada. 
          .row.justify-content-center.mb-4
            .col-auto
              img(src="@/assets/curso/temas/img01.png")
            .col
              p.mb-0 Estas hojas de estilo se escriben en un código que está compuesto por #[em tags] con sus atributos y los valores que adquieren estos atributos. La característica principal es que este código puede ser reutilizado sobre las páginas #[em web] en donde suelen repetirse las implementaciones de las mismas etiquetas; las hojas contribuyen a la facilidad de mantenimiento y control de varias páginas incluso de todo un sitio #[em web].

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Conceptos
    
    p Al momento de implementar las CSS, es necesario tener en cuenta los siguientes puntos:

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img02.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR01D.p-4
            p.mb-0.ms-5 Separación de estructura del documento, se refiere a la separación del contenido del documento HTML independiente de su presentación (tipos de letras, colores, tamaños de letras, espacios, fondos de pantalla, anexo de imágenes entre otros). 
      .col-lg-6.col-10(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR01C.p-4
            p.mb-0.ms-5 Hojas de estilo según su manejo pueden ser internas, externas  o desde sitio #[em web]. Cuando es interna el código del estilo va incluido dentro de la página al ser externa se define en un archivo diferente a la a página con extensión CSS y si es desde otro sitio #[em web] se hace referencia por medio de su URL.

    .BGR06.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.w-75(src="@/assets/curso/tema1/img08.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.text-white Relación entre CSS y HTML
              p.text-white Estimado aprendiz a continuación descargar el siguiente documento para su consulta.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo6_pdf_Relación_entre_CSS_y_HTML.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Introducción CSS3
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img04.png")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 CSS3 es la evolución de CSS y CSS2, esta nueva versión presenta como novedad mejoras que a grandes rasgos pueden dividirse en dos características; la primera es la aplicación del concepto de módulos que permite aproximar la definición del estilo de un sitio #[em web] a partir de la programación es decir donde se puede hacer para ello la analogía a los patrones de diseño que implementan algún controlador por lo que los módulos permiten definir contextos de aplicación de estilos e identificarlos en archivos diferentes (con extensión .less) que finalmente se integran en un archivo controlador, la segunda es la posibilidad de enriquecer los elementos que conforman las páginas directamente desde el estilo con animaciones, transiciones, #[em layout] con columnas, gradientes para modificar colores, transformaciones para rotar elementos así como también el ingreso de uso de fuente de texto externas por medio de librerías.

    AcordionA.mb-4(tipo="a" clase-tarjeta="BGR08")
      .row.justify-content-center(titulo="Ejemplo de estructura de uso de módulos")
        .col-lg-8.mb-lg-0.mb-4
          .BG02.p-4
            p.text-white.mb-0 ...<span style="color:#F4A338 !important">styles/</span>
              <br>...<span style="color:#F4A338 !important">controlador.less</span>
              <br>...<span style="color:#F4A338 !important">módulos/</span>
              <br>...<span style="color:#F4A338 !important">configuraciones/</span>
              <br>...<span style="color:#F4A338 !important">menu.less</span>
              <br>...<span style="color:#F4A338 !important">comentarios.less</span>
              <br>...<span style="color:#F4A338 !important">right/</span>
              <br>...<span style="color:#F4A338 !important">right.less</span>
              <br>...<span style="color:#F4A338 !important">left/</span>
              <br>...<span style="color:#F4A338 !important">left.less</span>
              <br>...<span style="color:#F4A338 !important">center/</span>
              <br>...<span style="color:#F4A338 !important">center.less</span>
              <br>...<span style="color:#F4A338 !important">ayudas/</span>
              <br>...<span style="color:#F4A338 !important">ayudas.less</span>
              <br><span style="color:#678F4E !important">/**** Contenido de archivo controlador.less *****/</span>
              <br><span style="color:#9D76B7 !important">@import</span> <span style="color:#5573C6 !important">módulos/configuraciones/menu.less</span>
              <br><span style="color:#9D76B7 !important">@import</span> <span style="color:#5573C6 !important">módulos/ayudas/ayudas.less</span>

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Estructura
    
    figure(data-aos="zoom-in")
      img(src="@/assets/curso/tema2/img05.png")
    .row.justify-content-center.img01(data-aos="flip-up")
      .col-lg-10.BGR09.p-4
        p.mb-0 La estructura de CSS3 corresponde al conjunto de reglas recopiladas en un archivo; una regla a su vez corresponde a la utilización de algún tipo de selector como los que ya vimos en puntos anteriores y una o varias declaraciones separadas por punto y una (;)  la declaración se conforma de una propiedad y un valor; dichas declaraciones se pueden escribir de manera directa en el #[em tag] de HTML deseado utilizando el atributo #[em style] y entre comillas la propiedad los dos puntos y su valor. Ejemplo de estructura:

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-8
        img(src="@/assets/curso/tema2/img06.svg")
    
    p Con uso del atributo #[em style]:

    .row.justify-content-center.mb-4
      .col-lg-8.mb-lg-0.mb-4(data-aos="flip-up")
        .BG02.p-4
          p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">html</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">head</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">title</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">title</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">head</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">body</span>&gt; 
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">h1</span> <span style="color:#5573C6 !important">style</span>=<span style="color:#3FD8CE !important">”color:red; size:30 px”</span>&gt;Texto1&lt;<span style="color:#FF0000 !important">/h1</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">h2</span> <span style="color:#5573C6 !important">style</span>=<span style="color:#3FD8CE !important">”color:blue; size:40 px”</span>&gt;Texto2&lt;<span style="color:#FF0000 !important">/h2</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">h3</span> <span style="color:#5573C6 !important">style</span>=<span style="color:#3FD8CE !important">”color:green; size:50 px”</span>&gt;Texto3&lt;<span style="color:#FF0000 !important">/h3</span>&gt;
            <br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">body</span>&gt;
            <br> &lt;/<span style="color:#FF0000 !important">html</span>&gt;  

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Formularios CSS3
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img07.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Estos formularios se construyen de manera normal básicamente como lo vimos en los puntos anteriores solo que en esta nueva versión se caracteriza por que se agregan nuevos tipos de datos (#[em color, tel, email, date, URL, time, month, number, week, datetime, range, search]), nuevos controles (#[em output]) y nuevos atributos (#[em placeholder, autofocus, min, required, max, step, pattern]) para estos casos por recomendación de la W3c es necesario verificar su funcionamiento en los diferentes navegadores hasta el momento solo funcionan bien solo con el navegador Opera.
    
    AcordionA.mb-4(tipo="a" clase-tarjeta="BGR08")
      .row.justify-content-center(titulo="Ejemplo de formulario:")
        .col-lg-9.mb-4
          .BG02.p-4
            p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">html</span>&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">head</span>&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">meta</span> <span style="color:#5573C6 !important">charset</span>=<span style="color:#3FD8CE !important">"utf-8"</span> /&gt; &lt;<span style="color:#FF0000 !important">title</span>&gt;Nuevos componentes&lt;/<span style="color:#FF0000 !important">title</span>&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">head</span>&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">body</span>&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">form</span> <span style="color:#5573C6 !important">action</span>=<span style="color:#3FD8CE !important">"."</span> <span style="color:#5573C6 !important">oninput</span>=<span style="color:#3FD8CE !important">"range_control_value.value = range_control.valueAsNumber"</span>&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nombre: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"text"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"name_control"</span> <span style="color:#5573C6 !important">autofocus required</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"email"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"email_control"</span> <span style="color:#5573C6 !important">required</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;URL: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"url"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"url_control"</span> <span style="color:#5573C6 !important">placeholder</span>=<span style="color:#3FD8CE !important">"Escripe la URL de tu página web personal"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fecha: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"date"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"date_control"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tiempo: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"time"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"time_control"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fecha y hora de nacimiento: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"datetime"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"datetime_control"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mes: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"month"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"month_control"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Semana: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"week"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"week_control"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Número (min -10, max 10): &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"number"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"number_control"</span> <span style="color:#5573C6 !important">min</span>=<span style="color:#3FD8CE !important">"-10"</span> <span style="color:#5573C6 !important">max</span>=<span style="color:#3FD8CE !important">"10"</span> <span style="color:#5573C6 !important">value</span>=<span style="color:#3FD8CE !important">"0"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intervalo (min 0, max 10): &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"range"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"range_control"</span> <span style="color:#5573C6 !important">min</span>=<span style="color:#3FD8CE !important">"0"</span> <span style="color:#5573C6 !important">max</span>=<span style="color:#3FD8CE !important">"10"</span> <span style="color:#5573C6 !important">value</span>=<span style="color:#3FD8CE !important">"0"</span> /&gt; 
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">output</span> <span style="color:#5573C6 !important">for</span>=<span style="color:#3FD8CE !important">"range_control"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"range_control_value"</span> &gt;0&lt;/<span style="color:#FF0000 !important">output</span>&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Teléfono: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"tel"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"tel_control"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Término de búsqueda: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"search"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"search_control"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color Favorito: &lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"color"</span> <span style="color:#5573C6 !important">name</span>=<span style="color:#3FD8CE !important">"color_control"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">br</span>/&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">input</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">"submit"</span> <span style="color:#5573C6 !important">value</span>=<span style="color:#3FD8CE !important">"Submit!"</span> /&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">p</span>&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">form</span>&gt;
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">body</span>&gt;
              <br>&lt;/<span style="color:#FF0000 !important">html</span>&gt;
        
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .row
          .col-auto.px-0
            img(src="@/assets/curso/tema1/img07.png")
          .col.BGRS04.p-2
            a.boton.color-acento-contenido.mb-0.ms-5(:href="obtenerLink('/downloads/pagina04.html')" target="_blank")
              span #[b El resultado de la ejecución del código anterior se puede visualizar a continuación:]
              .indicador--click(v-if="mostrarIndicador")
    
    .BGR06.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.w-75(src="@/assets/curso/tema1/img08.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.text-white Propiedades creadas para CSS3
              p.text-white Estimado aprendiz a continuación descargar el siguiente documento para su consulta.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo7_pdf_Propiedades_creadas_para_CSS3.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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
