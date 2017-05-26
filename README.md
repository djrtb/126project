# 126project

Please don't forget to install npm_modules by 'npm install'

Intall nunjucks if you haven't yet:

 npm install nunjucks --save
 
 In app.js, add the following code under the //view engine setup:
    nunjucks.configure(‘views’, {
      autoescape: true,
      express: app
      }
    );
