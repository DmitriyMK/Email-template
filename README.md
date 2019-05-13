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
