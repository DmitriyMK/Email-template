# Email-template

Builds HTML email from templates and partials

Compiles SCSS to CSS
Inlines the inline.css file and embeds the embedded.css file
Generates a preview of emails
Creates a zip of the build directory for upload (optional)


Getting Started
- Install packages
`npm install`
- Start build
`npm start`
- Start Zipping.
`npm run zip`


The compiled and inlined output email will be in the build/ directory. 
Can be previewed in browser at http://localhost:8000



How to use: <br/>
<b>Creating templates</b>

<b>HTML</b> <br/>
<b>Nunjucks</b> is used for compiling template files to HTML.

Templates are in `src/templates/..` 
Partials      are in `src/templates/partials/..`

Main file for compile to .html format         is  in `src/templates/mailchimp.nunjucks` <br>
Place where were compiled template text is  in `src/emails/index.nunjucks`


<b>CSS</b><br/>
<b>SASS</b> files are stored in the src/sass/ directory. 
There are two main SASS files ->
  
`inline.scss` for styles which will be inlined to their elements
`embedded.scss` for styles that should not be inlined. These will be inlcluded within a <style> element in the <head>
  
  
  
  
  <h1>Emails Template</h1>


This is the starter project for emails. <br>
It has a Gulp-powered build system with these features:

*  Nunjucks compilation;
*  Minify HTML;
*  Sass compilation;
*  Full email inlining and embedded process;
*  Built-in BrowserSync server;


<h2>Installation</h2>
To use this template, your computer needs Node.js


<h3>Manual Setup</h3>

To manually set up the template, first download it with Git:

<pre>git clone ssh-key</pre>

Then open the folder in your command line, and install the needed dependencies:

<pre>
cd projectname
npm install
</pre>


<h2>Build Commands</h2>
run <code>npm start</code> to kick off the build process. <br>
run <code>npm zip</code> to build as above, then zip HTML and images for easy deployment to email marketing services.


<h2>How to use:</h2>


The compiled and inlined output email will be in the <code>build/</code> directory. <br> 
Can be previewed in browser at `http://localhost:8000` <br>
Creating templates:

**HTML** <br>
*Nunjucks* is used for compiling template files to HTML.

Templates are in <code>src/templates/.. </code> <br>
Partials  are in <code>src/templates/partials/.. </code> <br>

Main file for compile to **.html** format is in <code>src/templates/mailchimp.nunjucks</code> <br>
Place where were compiled template text is in <code>src/emails/index.nunjucks</code>


**CSS** <br>
*SASS* is used for compiling template files to HTML.

Files are stored in the <code>src/sass/directory</code>

There are two main SASS files ->

<code>inline.scss</code> for styles which will be inlined to their elements <br>
<code>embedded.scss</code> for styles that shouldn't be inlined. These will be inlcluded within a style element in the head <br>
<code>reset.scss</code> for reset default rules for browsers and email-clients;

