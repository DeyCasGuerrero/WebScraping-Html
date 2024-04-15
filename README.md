 SPANISH | [EN](EN_README.md)

## WEB SCRAPING

# Introducción 
Esta Aplicacion está hecha en JavaScript (Node js) para hacer webscraping en la web, exactamente en un pagina de información, el codigo obtiene la data de las etiquetas HTML especificas, luego
la data es guardada en un JSON para despues ser mostradas.

# ¿Cómo instalar la dependecia e inicializar proyecto? 

Para poder hacer webscraping necesitamos de una libreria llamada Puppeteer.

1) Para inicializar el proyecto escribimos **npm init -y**
2) Luego instalamos Pupperteer de la siguiente forma en tu terminal **npm i puppeteer**
3) Puedes llamarla en tu .js de la siguiente manera **import puppeteer from "puppeteer;"**
4) Como estamos usando Node js se necesita usar por ejemplo **const puppter = requiere... ect**, pero en mi caso yo
   añadiré una propiedad más en package.json `"type" = module,` para que me permita usar **import puppeteer from "puppeteer;"**
   
[![module.png](https://i.postimg.cc/GhVS6cRf/module.png)](https://postimg.cc/ppQZFMpQ)

# ¡Importante!
Para correr el index.js necesitas colocar en la terminal **node index.js** 

# Libreria 
Estoy usando una libreria (Chart js) para los graficos dinamicos, estos vienen ya hechos para el uso en tu JavaScript 

## Pasos para la instalación
1) Puede ir al siguiente link [CHART JS](https://www.chartjs.org/) y ver su documentacion como el script para traer la libreria.
2) traes el link y lo usas en la parte final de tu boby HTML.
3) Podras ver como se genera el grafico mediante JavaScript en mi funcion "renderChart()" [Función](src/js/app.js)
