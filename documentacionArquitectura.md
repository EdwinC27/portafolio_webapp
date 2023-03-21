# Documentación
## Paquete “desarrolladores”
Este paquete contiene cuatro archivos esenciales para el componente "desarrolladores":

### desarrolladores.component.css
Este archivo define los estilos para el componente "desarrolladores". Primero se establece la clase ".textColor" que define el color del texto en blanco, tamaño de fuente y subrayado. Luego, se definen los estilos para la sección de proyectos y las cajas de proyectos con la clase "contenedorProjects" y "diseñodivProjects" respectivamente. Se establecen márgenes, anchos, bordes y redimensionamiento de imágenes. También se definen reglas de medios para cambiar los estilos según el ancho de la pantalla. Por último, se definen estilos para una sección de presentación en la página, incluyendo tamaños de fuente y bordes de botones.

### desarrolladores.component.html
Este archivo contiene la plantilla HTML y Angular que describe la página web. En la sección "Presentación" se incluye información personal sobre el autor, como su nombre, edad e intereses en el desarrollo y gestión de software, así como su imagen. Luego, hay un contenedor de proyectos que muestra varios proyectos en los que el autor ha trabajado. Cada proyecto tiene un título, una imagen, un enlace a la aplicación desplegada y una descripción opcional. Al hacer clic en cada proyecto, se muestra su descripción correspondiente.

### desarrolladores.component.ts
Este archivo define una lista de proyectos y una función para alternar la visibilidad de su descripción en la plantilla HTML correspondiente. La lista de proyectos es un arreglo de objetos de tipo Project que contiene información sobre el título, la imagen, la descripción, la URL implementada y si se debe mostrar o no la descripción en la vista. La función toggleDescription cambia el valor booleano showDescription del proyecto seleccionado, lo que hace que la descripción se muestre o se oculte en la vista. Este componente se encarga de mostrar una lista de proyectos y permitir al usuario interactuar con ellos para ver información adicional.

### desarrolladores.model.ts
Este archivo define una interfaz llamada Project con cinco propiedades: el título, la imagen, la descripción, la URL desplegada del proyecto y si se debe mostrar o no la descripción completa del proyecto.

## Paquete “app (raiz)”
Este paquete contiene dos archivos esenciales:

### app.component.css
Este archivo define los estilos para el pie de página.

### app.component.html
Este archivo muestra el pie de página y proporciona información de contacto del autor a través de varias redes sociales.
