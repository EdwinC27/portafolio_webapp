# Documentación
## Paquete “desarrollador”
Este paquete contiene tres archivos esenciales:

### desarrollador.component.css
Este código define estilos de presentación y diseño para elementos HTML en la página web. En particular, el código define estilos para la sección de presentación y para la sección gráfica de la página.

* La clase ".presentacion" define una sección de presentación con un alto del 100%, un ancho del 99%, un margen de 5 píxeles, y un centrado de texto. Además, tiene un margen adicional de 10 píxeles y un relleno inferior de 1 píxel, derecho de 2 píxeles y superior de 40 píxeles. 

* La clase ".conteiner" define un ancho del 90% para un contenedor de elementos.

* Las clases ".tamaño-title" y ".tamaño-text" definen el tamaño de fuente para títulos y texto, respectivamente, con un tamaño de fuente de 2 rem y 1.2 rem. El estilo ".tamaño-text" también tiene un relleno superior de 2 rem.

* El bloque ".graphic" define una sección gráfica con una disposición en grid y dos columnas, donde la primera columna ocupa el 35% del ancho y la segunda columna el 65% restante. 

* El bloque ".graphic_man" define un estilo para una imagen dentro de la segunda columna con una anchura del 65% y una altura del 95%. Los bloques "@media" dentro de ".graphic" definen diferentes estilos para diferentes tamaños de pantalla, ajustando la anchura y altura de la imagen según el tamaño de la pantalla.


### desarrollador.component.html
Este código define la sección de la página web que tiene dos partes: una sección de presentación y una imagen. La sección de presentación está contenida en un elemento de navegación con clase "presentacion" y se ajusta al ancho de un contenedor con clase "conteiner". Contiene un título con clase "tamaño-title" y un párrafo con clase "tamaño-text", cuyo contenido se define mediante variables {{presentacionTitle}} y {{presentacionText}} respectivamente. La imagen está contenida en un div con clase "graphic" y tiene una clase "graphic_man" para definir su tamaño. La fuente de la imagen se especifica mediante la sintaxis de atributos personalizados [src]="presentacionImg". La sección se coloca en un contenedor de rejilla con clase "grid-conteiner". 


### desarrollador.component.ts
Este código es un componente de Angular que define la lógica y las propiedades de un componente llamado "DesarrolladorComponent". Este componente tiene tres propiedades: "presentacionTitle", "presentacionText" y "presentacionImg".

* La propiedad "presentacionTitle" es un string que representa el título de una presentación. 
* La propiedad "presentacionText" es un string que representa un texto de presentación. 
* La propiedad "presentacionImg" es un string que representa la ruta de la imagen que se utilizará en la presentación.

Este componente utiliza el decorador "@Component" para especificar el selector, la plantilla y la hoja de estilo que se utilizarán para este componente.


## Paquete “proyectos-desarrollador”
Este paquete contiene cuatro archivos esenciales:

### proyectos-desarrollador.component.css
Este código es un conjunto de reglas de estilos escritas en CSS para definir la apariencia de la sección de proyectos en la página web.

* La clase ".botonProjects" define el estilo para un botón que se utiliza en la sección de proyectos. Incluye una borda, un color de texto y un relleno.

* La clase ".contenedorProjects" se utiliza para definir un contenedor para los proyectos. Se utiliza "display: inline-flex" y "flex-wrap: wrap" para que los proyectos se muestren uno al lado del otro y se envuelvan a la siguiente línea si no caben en la misma línea. También se establecen los márgenes superior e inferior, así como la justificación central.

* La clase ".diseñodivProjects" se utiliza para dar estilo al contenedor de cada proyecto. Incluye márgenes, relleno y un ancho fijo. También se define una imagen dentro del contenedor que se ajusta al 60% del ancho.

* La clase ".diseñodivProjectsMarco" se utiliza para definir un borde alrededor del contenedor de cada proyecto.

* La clase ".proyectosTitle" se utiliza para dar estilo al título de la sección de proyectos, incluyendo un borde superior, un relleno superior y un tamaño de fuente grande.

### proyectos-desarrollador.component.html
Este código es la sección de la página web que muestra la lista de proyectos. Utiliza Angular para generar dinámicamente el contenido de la lista utilizando el *ngFor. La sección comienza con un título que se muestra en el centro de la página. A continuación, se muestra una lista de proyectos utilizando la clase "contenedorProjects". Cada proyecto tiene un título, una imagen, un botón que lleva al usuario a una aplicación y una descripción oculta que se muestra al hacer clic en el cuadro del proyecto.

### proyectos-desarrollador.component.ts
Este es un archivo TypeScript de un componente de Angular llamado ProyectosDesarrolladorComponent. El componente tiene una propiedad llamada title que es de tipo string y se usa para mostrar el título de la sección de proyectos. También hay otra propiedad llamada irAplicacion que es de tipo string y se usa para mostrar el texto "Ir a la aplicación".

* El componente tiene un arreglo de objetos llamado projects que contiene información de los proyectos que se mostrarán en la sección. Cada objeto del arreglo tiene propiedades como title, image, description, deployedUrl y showDescription. La propiedad showDescription se utiliza para mostrar o ocultar la descripción de un proyecto cuando se hace clic en el proyecto.

* El componente tiene un método llamado toggleDescription que se llama cuando se hace clic en un proyecto. Este método cambia el valor de la propiedad showDescription del proyecto seleccionado.


### proyectos-desarrollador.model.ts
Este código define la interfaz llamada Project, que se utiliza para definir la estructura de un objeto que representa un proyecto. La interfaz tiene cinco propiedades: title, image, description, deployedUrl y showDescription.

* La propiedad title es una cadena de texto que contiene el título del proyecto.
* La propiedad image es una cadena de texto que contiene la ruta de la imagen del proyecto.
* La propiedad description es una cadena de texto que contiene la descripción del proyecto.
* La propiedad deployedUrl es una cadena de texto que contiene la URL del proyecto en línea o desplegado.
* La propiedad showDescription es un valor booleano que indica si la descripción del proyecto debe mostrarse o no.
En resumen, esta interfaz se utiliza para definir el tipo de los elementos del array de proyectos que se muestra en la vista.


## Paquete “certificados-desarrollador”
Este paquete contiene cuatro archivos esenciales:

### certificados-desarrollador.component.css
Este código contiene estilos CSS para la presentación de una galería de imágenes de certificados.

* .img_certificados define las propiedades comunes de las imágenes de los certificados. 
* .img_certificados:hover se aplica cuando el cursor del mouse se sitúa sobre una imagen de certificado, y utiliza la propiedad transform para escalar la imagen al 110% de su tamaño original.
* .contenedorCertificados establece un contenedor para la galería de imágenes
* .certificadosTitle define el estilo para el título de la galería de imágenes. 


### certificados-desarrollador.component.html
Este código corresponde a la sección de la página web que muestra la lista de los certificados, cada uno con una imagen y un enlace externo.

* La primera línea de código utiliza la etiqueta h2 para crear un título de sección con la clase certificadosTitle. El título será dinámico, es decir, su contenido dependerá de la variable title, que probablemente se define en otro lugar del código.

* A continuación, hay una sección con la clase contenedorCertificados que contiene una serie de elementos section generados dinámicamente mediante una directiva de Angular *ngFor. Cada sección representa un certificado y se define mediante una clase img_certificados.

* Dentro de cada sección de certificado, hay un enlace <a> con el atributo target="_blank" que abre una nueva pestaña en el navegador cuando se hace clic en la imagen del certificado. El enlace a abrir se define en el atributo [href] y la imagen que se muestra se define en el atributo [src]. El texto alternativo para la imagen se define en el atributo [alt].


### certificados-desarrollador.component.ts
Este código es un componente de Angular que importa la interfaz Certificados desde un archivo certificados-desarrollador.model.ts y define la clase CertificadosDesarrolladorComponent. Esta clase contiene una propiedad title que es una cadena de caracteres que se utiliza para mostrar el título en el HTML.

Además, hay una propiedad certificates que es una matriz de objetos que contienen información sobre los certificados. Cada objeto tiene tres propiedades: name, image, y url. Estas propiedades se utilizan para mostrar el nombre, la imagen y la URL del certificado en el HTML.

### certificados-desarrollador.model.ts
Este código define una interfaz llamada Certificados que especifica la estructura de objetos que tendrán un nombre (name), una imagen (image) y una URL (url). Esta interfaz puede ser utilizada en otros componentes o servicios de una aplicación de Angular para asegurarse de que los objetos que se pasan tienen las propiedades correctas y evitar errores de tipo.

 
## Paquete “app (raiz)”
Este paquete contiene dos archivos esenciales:

### app.component.css
Este archivo define los estilos para el pie de página.

### app.component.html
Este archivo muestra el pie de página y proporciona información de contacto del autor a través de varias redes sociales.
