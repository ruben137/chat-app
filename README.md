
<h1>Alcaldía la paz</h1>
<hr/>
<h2>Pasos a seguir para empezar a trabajar</h2>
<ul>
<li>
Tener NodeJs instalado</li>
<li>Tener instalada la extensión prettier</li>
<li>
instalar dependencias: </br>
```npm add``` en caso de usar npm </br>
```npm add```  en caso de usar yarn
</li>
<li>Crear carpeta .env para configurar variables de entorno</li>
<li>Escribir el código según las recomendaciones mostradas en consola por parte de ESlint con el objetivo de seguir las mejores prácticas</li>

</ul>
<h2>Estructura de carpetas</h2>
<ul>
<label>Pages</label>
<li>
Dentro de pages iran los archivos correspondientes a las rutas de la aplicación. El nombre del archivo es igual al de la ruta de acceso, por lo tanto el nombre de la carpeta debe estar relacionado con su contenido
</li>
<label>Containers</label>
<li>
En la carpeta containers estaran las vistas de las distintas rutas de la aplicación, dentro de cada carpeta debe haber un archivo index.js y una carpeta components donde esten divididos cada uno de los apartados que conforman la vista.
</li>
<label>Components</label>
<li>
En la carpeta components se recomienda colocar los componentes que puedan ser reutilizados en una o mas vistas de la aplicación, tales como el navbar, tarjetas, barra de carga, etc
</li>
<label>Redux</label>
<li>
Dentro de la carpeta redux estaran todas las acciones, constantes reducers y sagas, el nombre de los archivos tiene que estar relacionado con la logica a implementar, no se debe incluir en el archivo funciones que no tengan que ver con el nombre del mismo.
</li>
<label>Utils</label>
<li>
Dentro de la carpeta utils irán funciones que se puedan reutilizar en varios apartadados de la aplicación
</li>
</ul>

<h2>Nota importante</h2>
<p>Los test de performance de la aplicación deben ser realizados en el ambiente de producción, no en el de desarrollo</p>
