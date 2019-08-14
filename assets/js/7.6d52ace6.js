(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(e,t,o){"use strict";o.r(t);var n=o(0),a=Object(n.a)({},function(){var e=this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),o("h2",{attrs:{id:"clone"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clone","aria-hidden":"true"}},[e._v("#")]),e._v(" clone")]),e._v(" "),o("p",[e._v("First clone the github repository: "),o("code",[e._v("git clone https://github.com/jschmidtnj/designportfolio")]),e._v(". There are many files in a few different folders - let's break that down. The "),o("code",[e._v("nuxt/")]),e._v(" folder contains the actual website source code, written in Vue.js and Typescript using Nuxt as the overarching framework. The "),o("code",[e._v("docs/")]),e._v(" folder contains the documentation you are reading now. The "),o("code",[e._v("amp/")]),e._v(" folder contains a Node.js server deployed to Heroku currently, and stands for Accelerated Mobile Pages (fast page cacheing from Google). The amp pages used currently are blog and project posts. The "),o("code",[e._v("electron/")]),e._v(" folder contains a script for converting the generated website from nuxt to a desktop app, on mac, linux, and windows. The "),o("code",[e._v("flutter/")]),e._v(" folder contains the source code for the mobile app, written using the flutter framework. Finally, all of these endpoints utilize the api created in the "),o("code",[e._v("graphql/")]),e._v(" folder, which is currently deployed on google app engine. This api was written in golang and is designed to be fast and stateless, with a mongodb database and authentication using json web tokens (jwt). If you understand what all of that meant, then you're honestly good to go in developing with this stack. If not, just read a bit on each of the technologies and get an idea of what's going on.")]),e._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" configuration")]),e._v(" "),o("p",[e._v("You need to make a few config files in order to get started. The first one you should make is the "),o("code",[e._v(".env")]),e._v(" file in the "),o("code",[e._v("nuxt/")]),e._v(" directory. Copy the "),o("code",[e._v(".default.env")]),e._v(" file and change the parameters. You should change the APIURL parameter immediately to "),o("code",[e._v("localhost:12346")]),e._v(" or whatever port you are using to develop the graphql api, and then later change it to the production url. Then change the AMPURL when you are working on getting amp going. The AUTHCONFIG parameter comes from google oath2, and can be changed later. And the seoconfig can also be updated later. Run "),o("code",[e._v("yarn dev")]),e._v(" in the "),o("code",[e._v("nuxt/")]),e._v(" directory to start the development server for the website, and you should be good to go.")]),e._v(" "),o("p",[e._v("In the "),o("code",[e._v("graphql/")]),e._v(" directory, you also need a "),o("code",[e._v(".env")]),e._v(" file. Start by copying the default. The SECRET is the jwt secret - this should be changed. The port is the port the api will be running on in development. The MONGOURI is used to connect to mongodb - I used MongoDB Atlas for managed storage, but you can use whatever you want. The token expiration is in hours and is how long each jwt lasts. The sendgrid api key is used for authenticating sending emails with sendgrid - reset password, etc., and should be changed. Note that the templates for these emails come from the deployed Nuxt website, so it should be deployed for that endpoint to work. The websiteurl is the deployed url of the nuxt website. The elasticuri is the uri for elasticsearch - used for searching for blogs and projects - I used bonsai.io for managed hosting. The storageconfig is the serviceaccount json from google cloud storage for storing files, and the storagebucketname is the bucket containing all the pictures.")]),e._v(" "),o("p",[e._v("In the "),o("code",[e._v("flutter/")]),e._v(" directory, you need to make a "),o("code",[e._v("config.dart")]),e._v(" file following the sample, specifying the api url, which you can use as localhost if you are running locally to test.")]),e._v(" "),o("p",[e._v("In the "),o("code",[e._v("amp/")]),e._v(" directory, you need to follow the "),o("code",[e._v("sampleconfig.ts")]),e._v(" file, specifying the api url and website url. Same with the "),o("code",[e._v("init/")]),e._v(" directory.")]),e._v(" "),o("h2",{attrs:{id:"test-debug"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-debug","aria-hidden":"true"}},[e._v("#")]),e._v(" test + debug")]),e._v(" "),o("ul",[o("li",[e._v("run "),o("code",[e._v("yarn dev")]),e._v(" for testing the website, in the "),o("code",[e._v("nuxt/")]),e._v(" directory")]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("go run *.go")]),e._v(" for running the api, in the "),o("code",[e._v("graphql/")]),e._v(" directory")]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("flutter run")]),e._v(" in the "),o("code",[e._v("flutter/")]),e._v(" directory, for testing the mobile app")]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("yarn start")]),e._v(" in the "),o("code",[e._v("amp/")]),e._v(" directory, for testing amp")]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("yarn start")]),e._v(" in the "),o("code",[e._v("init/")]),e._v(" directory, for adding admin users to the api and configuring the api")])])])}],!1,null,null,null);t.default=a.exports}}]);