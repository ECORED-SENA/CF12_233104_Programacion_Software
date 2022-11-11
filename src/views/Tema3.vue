<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 JavaScript
    
    .BGM01.p-md-5.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img01.png")
        .col-lg-8(data-aos="fade-left")
          p Es un lenguaje de programación que se inserta en una página web que es interpretado por los navegadores el concepto de interpretado hace referencia a la ejecución secuencial línea por línea que hace el intérprete del navegador ante todo del lado cliente, aunque hoy en día también se logra del lado servidor con el apoyo Node.js el cual no es compilado como otros lenguaje de programación. 
          .row.justify-content-center.mb-4
            .col-auto
              img(src="@/assets/curso/temas/img04.png")
            .col
              p.mb-0 Este lenguaje está orientado a brindar posibilidades de construcción de código HTML de manera dinámica es decir el programa que se crea construye el conjunto de tags HTML de manera automática multiplicando de manera sustancial el enriquecimiento del diseño de las interfaces web.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Introducción
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-auto
        img(src="@/assets/curso/temas/img04.png")
      .col
        p.mb-0 Es importante tener en cuenta que JavaScript y Java con lenguajes diferentes dado que por llevar el mismo nombre se puede presentar para confusiones; para insertar código JavaScript a un página web se puede hacer de las siguientes formas; con código que se agrega dentro de la misma página, con archivos independientes que se almacenan en rutas diferentes a la página y con código referenciado en otras páginas web ya publicadas en la red internet.
    
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img02.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">html</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">head</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">title</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Página web con código JavaScript embebido
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">title</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">script</span> <span style="color:#5573C6 !important">type</span>=<span style="color:#3FD8CE !important">”text/javascript”</span>&gt; insertar tag con atributo type indicando el uso del lenguaje java JavaScript
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert(“Mi primer mensaje usando JavaScript”); 		
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">script</span>&gt; 
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">head</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">body</span>&gt; 
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt;Contenido de la pagina web&lt;/<span style="color:#FF0000 !important">p</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">body</span>&gt;
                <br>&lt;/<span style="color:#FF0000 !important">html</span>&gt;
      .col-lg-6(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img03.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">html</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">head</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">title</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pagina web con código JavaScript embebido desde otros archivos fuera de la página actual.
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">title</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">script</span> <span style="color:#5573C6 !important">src</span>=<span style="color:#3FD8CE !important">"static/js/miCodeUno.js"</span>&gt;&lt;/<span style="color:#FF0000 !important">script</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">script</span> <span style="color:#5573C6 !important">src</span>=<span style="color:#3FD8CE !important">"static/js/miCodeDos.js"</span>&gt;&lt;/<span style="color:#FF0000 !important">script</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">script</span> <span style="color:#5573C6 !important">src</span>=<span style="color:#3FD8CE !important">"static/js/miCodeTres.js"</span>&gt;&lt;/<span style="color:#FF0000 !important">script</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">head</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">body</span>&gt; 
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt;Contenido de la pagina web&lt;/<span style="color:#FF0000 !important">p</span>&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">body</span>&gt;
                <br>&lt;/<span style="color:#FF0000 !important">html</span>&gt;
    
    p Ejemplo de inclusión de código desde archivos con extensión .js en url diferentes a la de la página:

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4(data-aos="flip-up")
        .BG02.p-4
          p.text-white.mb-0 &lt;<span style="color:#FF0000 !important">html</span>&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">head</span>&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">title</span>&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pagina web con código JavaScript embebido desde otros archivos fuera de la página actual.
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">title</span>&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">script</span> <span style="color:#5573C6 !important">src</span>=<span style="color:#3FD8CE !important">"https://www.sitiouno.com/developmentUno.js"</span> <span style="color:#5573C6 !important">crossorigin</span>&gt;&lt;/<span style="color:#FF0000 !important">script</span>&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">head</span>&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">body</span>&gt; 
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#FF0000 !important">p</span>&gt;Contenido de la pagina web&lt;/<span style="color:#FF0000 !important">p</span>&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#FF0000 !important">body</span>&gt;
            <br>&lt;/<span style="color:#FF0000 !important">html</span>&gt;
      
      .col-lg-8(data-aos="fade-right")
        .row
          .col-auto.px-0
            img(src="@/assets/curso/tema1/img07.png")
          .col.BGRS04.p-2
            a.boton.color-acento-contenido.mb-0.ms-5(:href="obtenerLink('/downloads/pagina05.html')" target="_blank")
              span #[b El resultado de la ejecución del código anterior se puede visualizar a continuación:]
              .indicador--click(v-if="mostrarIndicador")

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Versiones
    
    figure(data-aos="zoom-in")
      img(src="@/assets/curso/tema3/img04.png")
    .row.justify-content-center.img01(data-aos="flip-up")
      .col-lg-10.BGR09.p-4
        p.mb-0 El lenguaje Java Script aparece aproximadamente a mediados de los años noventa elaborado por Brendan Eich como una forma de mejorar la experiencia de usuario, puesto que en aquella época la velocidad de internet era de demasiado lenta y se requería de un lenguaje del lado cliente al momento de realizar una petición web al año siguiente 1996 se propuso determinar un estándar puesto que cada navegador lo interpreta a su manera y por eso surgió ECMA-262 Ed.1 ES1; la evolución del lenguaje muestra  en la siguiente tabla.

    .row.justify-content-center.mb-4
      .col-lg-7
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          h5 Tabla 1
          span Versiones
        .tabla-b.color-primario.mb-5(data-aos="zoom-in")
          .tabla-b__header
            h4.text-white.mb-0 La evolución del lenguaje
          table
            tbody
              tr
                th Año
                th Versión
              tr
                td Mayo 1995 
                td Mocha
              tr
                td Septiembre 1995
                td Live Script
              tr
                td Diciembre 1995
                td Java Script
              tr
                td 1996-1997
                td ECMA-262 Ed.1 ES1
              tr
                td 1998
                td ES2
              tr
                td 1999
                td ES3 Moderno js baseline
              tr
                td 2005
                td Ajax Revolución
              tr
                td 2008
                td ES4 RIP
              tr
                td 2009 
                td ES5
              tr
                td 2012 
                td ES6 Under way
              tr
                td 2015 
                td ES6
              tr
                td 2016 
                td ES7
              tr
                td 2017 
                td ES8
              tr
                td 2018 
                td ES9
              tr
                td 2019 
                td ES10
              tr
                td 2020 
                td ES11

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Sintaxis 

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-auto
        img(src="@/assets/curso/temas/img04.png")
      .col
        p.mb-0 En JavaScript existe un conjunto de elementos que permiten conformar un programa, variables, constantes, operadores, expresiones que corresponden a  una forma de combinación de variables, constantes y operadores, sentencias encargadas de guardar un orden lógico y funciones como el conjunto de sentencias que permiten  resolver un problema; para todos estos elementos existe una serie de reglas que se deben cumplir al momento de escribir el código así:
      
    TabsC.color-acento-contenido.mb-4(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Variables")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            h4 Variables
            p.mb-0 Las variables se definen como espacios de memoria reservada para almacenar algún dato y que se identifican con un nombre para definirlas se debe utilizar la palabra var seguida del nombre el símbolo igual un valor finalizado con punto y coma.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img05.svg")
      .py-3.py-md-4(titulo="Constantes")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            h4 Constantes
            p.mb-0 Las constantes como su nombre lo indica sirven para definir valores únicos que se pueden utilizar  en diferentes partes del programa se definen con la palabra cons seguida del nombre de variable el símbolo igual y termina con punto y coma.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img06.svg")
      .py-3.py-md-4(titulo="Operadores")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            h4 Operadores
            p Los operadores se definen en tres grupos operados de asignación, operadores de relación y los operadores lógicos. Los operadores de asignación son igual =, suma +=, resta -=, multiplicación *=, división /= y módulo % los operadores de relación son mayor &gt;, mayor igual &gt;=, menor &lt;, menor igual &lt;= , igual que == y diferente de != finalmente los operadores lógicos para evaluar verdadero o falso son AND &amp;&amp; , OR || y NOT !.
            p.mb-0 Las sentencias se conforman como la combinación de contantes, variables y operadores.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img07.svg")
      .py-3.py-md-4(titulo="Funciones")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            h4 Funciones
            p.mb-0 Las funciones permiten identificar con un nombre una acción dentro de un programa, es la combinación de  sentencias, variables, constantes y expresiones se escribe utilizando la palabra function seguida de una lista de parámetros de entrada separados por comas encerrados entre paréntesis () en donde el conjunto de sentencias que operan esas entradas se encierran entre llaves {}.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img08.svg")

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Tipos Datos
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img09.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Con relación a los tipos de datos JavaScript presenta un característica fundamental y es que cuenta con la capacidad  de adaptarse al dato ingresado por el usuario es decir que el tipo de dato es dinámico cuando fué definido con la palabra de reserva var.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center.align-items-center(numero="1" titulo="Variables numéricas")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 Se utilizan para definir variables enteras (integer) , reales (float), hexadecimal(0x) y octal(0).
            .col-lg-5.col-10
              img(src="@/assets/curso/tema3/img11.svg")
          .row.justify-content-center.align-items-center(numero="2" titulo="Variable de caracteres")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 Permite almacenar cadenas de texto dentro de las comillas para bajar un renglón en el texto se debe utilizar \n para agregar un tabulador \t para comillas simple \’ para comillas dobles \” y para barra inclinada \\.
            .col-lg-5.col-10
              img(src="@/assets/curso/tema3/img12.svg")
          .row.justify-content-center.align-items-center(numero="3" titulo="Variables tipo lógico")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 Permiten definir variables booleanas falso o verdadero.
            .col-lg-5.col-10
              img(src="@/assets/curso/tema3/img13.svg")
          .row.justify-content-center.align-items-center(numero="4" titulo="Variables tipo arreglo")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 Denominados también como matrices o vectores y se usan para definir variables que se relacionan en un mismo conjunto se definen entre corchetes [] separados por coma y valores entre comillas.
            .col-lg-5.col-10
              img(src="@/assets/curso/tema3/img14.svg")
          .row.justify-content-center.align-items-center(numero="5" titulo="Variables tipo objeto")
            .col-lg-7.mb-lg-0.mb-4
              p.mb-0 Son variables que a diferencias de los arreglos se define dentro de llaves con el nombre de propiedad y su valor.
            .col-lg-5.col-10
              img(src="@/assets/curso/tema3/img15.svg")
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img10.png")     
    
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Estructuras de control
    
    .BGM01.p-md-5.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img16.png")
        .col-lg-8(data-aos="fade-left")
          p Cuando se hace un programa JavaScript las líneas de código se ejecutan de manera secuencial es decir primera, segunda, tercera, cuarta, etc., pero nunca cuarta y luego tercera siempre se enumeran de arriba hacia abajo correspondiendo esto con el flujo del programa; durante este flujo en algún punto de las secuencias es necesario tomar una decisión y es ahí donde se debe utilizar el concepto de condicionales con respuesta positiva o negativa. En otro punto del programa se necesitará realizar a recorridos a estructuras de datos por ejemplo un arreglo y para ello se utilizará el concepto de bucle.
          .row.align-items-center.mb-4
            .col-auto
              img(src="@/assets/curso/temas/img02.png")
            .col
              p.mb-0 #[b Condicional if], el más conocido de los condicionales si se cumple la condición continúa ese camino la condición se escribe entre paréntesis después de la palabra reservada if.
    
    .row.justify-content-center.mb-4
      .col-lg-5.col-10.order-lg-1.order-2.BG02.p-4(data-aos="fade-right")
        p.text-white.mb-0 <span style="color:#5573C6 !important">var</span> <span style="color:#84C0E2 !important">edad</span>=<span style="color:#BDCDA6 !important">17</span>;
          <br>
          <br><span style="color:#678F4E !important">//Condicional para saber si es mayor de edad</span>
          <br><span style="color:#9D76B7 !important">if</span><span style="color:#F4A338 !important">(</span>edad &gt; <span style="color:#BDCDA6 !important">18</span> <span style="color:#F4A338 !important">){</span>
          <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#BDCDA6 !important">alert</span><span style="color:#9D76B7 !important">(</span>“<span style="color:#84C0E2 !important">Ya puede solicitar la cédula</span>”<span style="color:#9D76B7 !important">)</span>;
          <br><span style="color:#F4A338 !important">}</span>
      .col-lg-5.col-10.order-lg-2.order-1.BG01.p-4(data-aos="fade-left")
        .row.justify-content-center
          .col-6
            img(src="@/assets/curso/tema3/img17.svg")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img18.svg")
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Condicional if/else")
            p Este condicional indica el camino alterno que puede seguir el programa en el caso de que no se cumpla la condición palabra reservada else.
            .row
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
                  span Ver código
                  i.fas.fa-expand-arrows-alt
                  .indicador--click(v-if="mostrarIndicador")
          .row.justify-content-center(numero="2" titulo="Operador ternario")
            p Es una forma de escribir el condicional if/else, pero de una manera más corta se identifica con el símbolo?.
            .row
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal2 = true")
                  span Ver código
                  i.fas.fa-expand-arrows-alt
                  .indicador--click(v-if="mostrarIndicador")
          .row.justify-content-center(numero="3" titulo="Condicional if múltiple")
            p Sirve para evaluar múltiples condiciones conservando la estructura del condicional if y para el caso alternativo se escribe la palabra reservada  if else acompaña de la nueva condición a cumplir.
            .row
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal3 = true")
                  span Ver código
                  i.fas.fa-expand-arrows-alt
                  .indicador--click(v-if="mostrarIndicador")
          .row.justify-content-center(numero="4" titulo="Condicional switch")
            p Define casos específicos a realizar en el caso de que la variable expuesta como condición sea igual a los valores que se especifican mediante los case.
            .row
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal4 = true")
                  span Ver código
                  i.fas.fa-expand-arrows-alt
                  .indicador--click(v-if="mostrarIndicador")
    
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .BG02.p-4
          p.text-white.mb-0 <span style="color:#5573C6 !important">var</span> <span style="color:#84C0E2 !important">edad</span>=<span style="color:#BDCDA6 !important">17</span>;
            <br><span style="color:#5573C6 !important">var</span> <span style="color:#84C0E2 !important">mensaje</span>;
            <br>
            <br><span style="color:#628640 !important">//Condicional para saber si es mayor de edad</span>
            <br><span style="color:#9D76B7 !important">if</span><span style="color:#F4A338 !important">(</span><span style="color:#84C0E2 !important">edad</span> > <span style="color:#BDCDA6 !important">18</span> <span style="color:#F4A338 !important">){</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">mensaje</span>=“<span style="color:#84C0E2 !important">Ya puede solicitar la cédula</span>”;
            <br><span style="color:#F4A338 !important">}</span><span style="color:#9D76B7 !important">else</span><span style="color:#F4A338 !important">{</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">mensaje</span>=“<span style="color:#84C0E2 !important">Aún eres menor de edad</span>”;
            <br><span style="color:#F4A338 !important">}</span>
        
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .BG02.p-4
          p.text-white.mb-0 <span style="color:#5573C6 !important">var</span> <span style="color:#84C0E2 !important">edad</span>=<span style="color:#BDCDA6 !important">17</span>;
            <br><span style="color:#628640 !important">//Operador ternario: (condición ? Verdadero : Falso)</span>
            <br><span style="color:#5573C6 !important">var</span> <span style="color:#84C0E2 !important">mensaje</span> = <span style="color:#84C0E2 !important">edad</span>&gt;<span style="color:#BDCDA6 !important">18</span> ? ‘<span style="color:#84C0E2 !important">Cédula</span>’: ’<span style="color:#84C0E2 !important">Tarjeta Identidad</span>’;

    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .BG02.p-4
          p.text-white.mb-0 <span style="color:#5573C6 !important">var</span> <span style="color:#84C0E2 !important">edad</span>=<span style="color:#BDCDA6 !important">17</span>;
            <br><span style="color:#5573C6 !important">var</span> <span style="color:#84C0E2 !important">mensaje</span>;
            <br>
            <br><span style="color:#628640 !important">//Condicional para saber si es mayor de edad</span>
            <br><span style="color:#9D76B7 !important">if</span><span style="color:#F4A338 !important">(</span><span style="color:#84C0E2 !important">edad</span> == <span style="color:#BDCDA6 !important">18</span> <span style="color:#F4A338 !important">){</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">mensaje</span>=“<span style="color:#84C0E2 !important">Ya puede solicitar la cédula</span>”;
            <br><span style="color:#F4A338 !important">}</span> <span style="color:#9D76B7 !important">if else</span> <span style="color:#F4A338 !important">(</span><span style="color:#84C0E2 !important">edad</span> > <span style="color:#BDCDA6 !important">18</span> <span style="color:#F4A338 !important">){</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">mensaje</span>=“<span style="color:#84C0E2 !important">Tu cédula ya fué tramitada</span>”;
            <br><span style="color:#F4A338 !important">}</span> <span style="color:#9D76B7 !important">if else</span> <span style="color:#F4A338 !important">(</span><span style="color:#84C0E2 !important">edad</span> < <span style="color:#BDCDA6 !important">18</span> <span style="color:#F4A338 !important">){</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">mensaje</span>=“<span style="color:#84C0E2 !important">Aún eres menor de edad</span>”;
            <br><span style="color:#F4A338 !important">}</span><span style="color:#9D76B7 !important">else</span><span style="color:#F4A338 !important">{</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">mensaje</span>=“<span style="color:#84C0E2 !important">Verifica el número de edad ingresado</span>”;
            <br><span style="color:#F4A338 !important">}</span>
            <br><span style="color:#BDCDA6 !important">alert</span>(<span style="color:#84C0E2 !important">mensaje</span>);
    
    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .BG02.p-4
          p.text-white.mb-0 <span style="color:#5573C6 !important">var</span> <span style="color:#84C0E2 !important">nota</span> = <span style="color:#BDCDA6 !important">7</span>;
            <br><span style="color:#9D76B7 !important">switch</span> <span style="color:#F4A338 !important">(</span><span style="color:#84C0E2 !important">nota</span><span style="color:#F4A338 !important">) {</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">10</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">calificacion</span> = "<span style="color:#84C0E2 !important">Sobresaliente</span>";
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">break</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">9</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">8</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">calificacion</span> = "<span style="color:#84C0E2 !important">Notable</span>";
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">break</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">7</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">6</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">calificacion</span> = "<span style="color:#84C0E2 !important">Bien</span>";
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">break</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">5</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">calificacion</span> = "<span style="color:#84C0E2 !important">Suficiente</span>";
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">break</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">4</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">3</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">2</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">1</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">case</span> <span style="color:#BDCDA6 !important">0</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">calificacion</span> = "<span style="color:#84C0E2 !important">Insuficiente</span>";
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">break</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">default</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#628640 !important">// Cualquier otro caso</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#84C0E2 !important">calificacion</span> = "<span style="color:#84C0E2 !important">Nota errónea</span>";
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9D76B7 !important">break</span>;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#F4A338 !important">}</span>
            <br><span style="color:#BDCDA6 !important">alert</span><span style="color:#F4A338 !important">(</span>“<span style="color:#84C0E2 !important">Resultado</span>”+<span style="color:#84C0E2 !important">calificacion</span><span style="color:#F4A338 !important">)</span>;
    
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img19.svg")
        .col-lg-8(data-aos="fade-left")
          .bloque-texto-a__texto.p-4
            p.mb-0 #[b Bucles e Iteraciones], útiles para programar tareas que se convierten en repetitivas en donde se involucran gran cantidad de volumen de datos permitiendo su automatización para realizar un bucle, es necesario tener en cuenta los siguiente conceptos: la condición tal como se vio en los if, esta se evalúa repetidamente, la iteración es la cantidad de repeticiones que ejecutó la condición, el contador es la variable que guarda en memoria el número en el cual va la repetición, el incremento es el número que se adiciona un vez se termine un ciclo y bucle infinito cuando no se realiza el incremento al contador esto es necesario evitarlo.
    
    TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
      .tarjeta.BGR10.p-4(titulo="Bucle While")
        h4 Bucle While
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-lg-0.mb-4
            ul.lista-ul--color
              li
                <i class="fas fa-layer-group" style="color:#F4A338;"></i>
                | Antes de entrar en el bucle while, se inicializa la variable i a.
              li
                <i class="fas fa-layer-group" style="color:#F4A338;"></i>
                | Antes de realizar la primera iteración del bucle, se comprueba la condición.
              li
                <i class="fas fa-layer-group" style="color:#F4A338;"></i>
                | Si la condición es verdadera, se hace lo que está dentro del bucle.
              li
                <i class="fas fa-layer-group" style="color:#F4A338;"></i>
                | Se muestra por pantalla el valor de i y luego incrementamos el valor actual de i en 1.
              li
                <i class="fas fa-layer-group" style="color:#F4A338;"></i>
                | Se vuelve al inicio del bucle para hacer una nueva iteración. Se comprueba de nuevo la condición del bucle.
              li
                <i class="fas fa-layer-group" style="color:#F4A338;"></i>
                | Cuando la condición sea falsa, se sale del bucle y continúa el programa.
          .col-lg-5.col-10
            img(src="@/assets/curso/tema3/img20.svg")
      .tarjeta.BGR10(titulo="Bucle for")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-lg-0.mb-4.p-4
            h4 Bucle for
            img(src="@/assets/curso/tema3/img21.svg")
          .col-lg-7.col-10.pt-4
            img(src="@/assets/curso/tema3/img22.svg")
      .tarjeta.BGR10(titulo="Bucle en Arreglos")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-lg-0.mb-4.p-4
            h4 Bucle en Arreglos
            img(src="@/assets/curso/tema3/img23.svg")
          .col-lg-7.col-10
            img(src="@/assets/curso/tema3/img24.svg")
      .tarjeta.BGR10.p-4(titulo="Selectores")
        h4 Selectores
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-7.mb-lg-0.mb-4
            ul.lista-ul--color
              li
                <i class="fas fa-layer-group" style="color:#F4A338;"></i>
                | Los selectores funcionan de forma muy similar a los del CSS y permite seleccionar y encontrar elementos dentro del HTML.
          .col-lg-5.col-10
            figure.mb-4
              img(src="@/assets/curso/tema3/img25.png")
            figure
              img(src="@/assets/curso/tema3/img26.png")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-lg-0.mb-4
            ul.lista-ul--color
              li
                <i class="fas fa-layer-group" style="color:#F4A338;"></i>
                | El selector se puede utilizar buscando por la clase o por el tipo.
          .col-lg-5.col-10
            figure.mb-4
              img(src="@/assets/curso/tema3/img27.png")
      .tarjeta.BGR10.p-4(titulo="Eventos")
        h4 Eventos
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-7.mb-lg-0.mb-4
            p La interacción del usuario con una aplicación, página o sitio web se establece como evento, por lo tanto un evento es una acción que el usuario quiere hacer en determinada parte de la aplicación, por ejemplo darle clic en un botón o cambiar un valor de una elemento de texto entre otros.
            p.mb-0 Estas acciones se capturan mediante manejadores de eventos ya establecidos y se programan mediante funciones en JavaScript.
          .col-lg-5.col-10
            img(src="@/assets/curso/tema3/img28.svg")
        .BGR06.p-4.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.w-75(src="@/assets/curso/tema1/img08.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1.text-white Relación entre CSS y HTML
                  p.text-white Estimado aprendiz a continuación descargar el siguiente documento para su consulta.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo8_pdf_Eventos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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
