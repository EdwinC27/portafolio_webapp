# Documentation
The main folders of the project are src/app and src/assets.

# src/app

## Package "app"
This package contains three essential files:

### app.component.css
This file defines the styles for the footer.

### app.component.html
It contains a language selector consisting of two buttons, one for Spanish and one for English. When you click on one of the buttons, the changeLanguage() method of the AppComponent is called, which in turn uses the translation service of the @ngx-translate/core library to change the current language of the application.

Finally, the footer contains links to different social networks through Font Awesome icons.

### app.component.ts
It is an Angular component that manages the language change of the application and shows some links to social networks in the footer.



## Package "desarrollador"
This package contains three essential files:

### desarrollador.component.css
It is a CSS styles file that defines the look. It includes style rules for the presentation section and the home page image. It also includes media queries to adapt the layout to different screen sizes.

### desarrollador.component.html
It creates a section with a presentation and an image. The presentation consists of a title and a paragraph, which are displayed in the currently selected language thanks to the translate directive provided by the @ngx-translate/core module. The image is displayed with a source specified in the presentacionImg property of the component that contains this code.

### desarrollador.component.ts
The component has a presentacionImg property that contains the path to an image in the assets folder (assets/images/edwin.png). This image is displayed in the component using the src directive of the <img> element in the corresponding HTML file (developer.component.html).



## Package "proyectos-desarrollador"
This package contains four essential files:

### proyectos-desarrollador.component.css
They define the design of the elements of the developer projects page. The styles defined in the media queries also adjust the layout according to the screen size, making the page responsive.

### proyectos-desarrollador.component.html
This code shows an HTML view for an Angular component that displays a list of developed projects.

### proyectos-desarrollador.component.ts
  - It imports the conexionAPI service and the Project model.
  - It declares a toggleDescription() function that receives a Project object and changes the boolean value of its showDescription property.
  - It defines a proyecto variable of type Project[].
  - In the ngOnInit() method, it subscribes to the getPeticionProyectos() method of the conexionAPI service. When the service returns a result, it assigns the response to the proyecto variable.

### proyectos-desarrollador.model.ts
It defines a TypeScript interface called Project that specifies the structure of an object representing a project. It has the following properties:

  -title: a string that describes the title of the project.
  - image: a string that specifies the path of the image associated with the project.
  - description: a string that describes the project.
  - deployedUrl: a string that specifies the URL of the project online.
  - showDescription: a boolean value that indicates whether to show the project description or not.


## Package "certificados-desarrollador"
This package contains four essential files:

### certificados-desarrollador.component.css
This is a set of CSS rules to style a group of certificate images on this website.

### certificados-desarrollador.component.html
This HTML code displays a section of certificates and titles.

### certificados-desarrollador.component.ts
It imports a conexionAPI class and a Certificates interface from other files in your project. The component has a property called certificates, which is an array of Certificates objects.

In the ngOnInit() method, the getPeticionCertificados() method of conexionAPI is called to fetch the certificates and subscribe to the results returned by this function. When the response is received, the certificates property is updated with the certificates returned by the server.

### certificados-desarrollador.model.ts
The "Certificates" interface has three properties: "name", "image", and "url", all of type string.



## Package "conexion-api"
This package contains a single essential file:

### conexion-api.service.ts
It is responsible for making HTTP requests to a local API that provides certificate and project data.

The service uses Angular's HttpClient to make GET requests to two different URLs.

In getPeticionCertificados(), a GET request is made to the URL http://localhost:3000/certificados, the response is received and mapped to an array of Certificados objects. Then, an observable is returned that emits the mapped array.

In getPeticionProyectos(), a GET request is made to the URL http://localhost:3000/proyectos, the response is received and mapped to an array of Project objects. Then, an observable is returned that emits the mapped array.

Both methods also store the HTTP request responses in local variables certificados and proyectos, respectively, so that they can be reused later.



# srrc/assests

## api
It is a JSON file that contains certificate and project data. The certificate data includes the name of the certificate, an image, and a URL pointing to the certificate's PDF file. The project data includes the project title, an image, a project description, a deployed URL, and a boolean value indicating whether the project description should be displayed. This file is used to send data in a web application.

## i18n
This package contains two JSON files that are used to display language changes.
