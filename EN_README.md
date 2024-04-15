[SPANISH](CN_README.md) | EN

## WEB SCRAPING
# Introduction
This application is developed in JavaScript (Node.js) to perform web scraping on a website, specifically on an information page. 
The code extracts data from specific HTML tags, which is then stored in a JSON format for later display.

# How to Install the Dependency and Initialize the Project?
To perform web scraping, we need to use a library called Puppeteer.

1) To initialize the project, run the following command in your terminal: npm init -y.
2) Next, install Puppeteer using the following command: npm i puppeteer.
3) You can import Puppeteer into your .js file as follows: import puppeteer from "puppeteer";.
4) Since we are using Node.js, you might need to use require instead, for example: "const puppeteer = require('puppeteer');"
However, in my case, I will add an additional property in the package.json file `"type" = module,` to allow the usage of import puppeteer from "puppeteer;".

[![module.png](https://i.postimg.cc/GhVS6cRf/module.png)](https://postimg.cc/ppQZFMpQ)

Important!

To run the index.js file, use the following command in the terminal *"node index.js"*.

# Library
I am using a library called Chart.js for dynamic charting in JavaScript.

Installation Steps
1) You can visit the following link [CHART JS](https://www.chartjs.org/)  to view its documentation and obtain the script to include the library.
2) Include the script link at the end of your HTML body.
#) You will see how the chart is generated using JavaScript in my renderChart() function [función renderChart()](src/js/app.js)







