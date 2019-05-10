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
<b>Creating templates*</b>

<b>HTML</b>
*Nunjucks* is used for compiling template files to HTML.

Templates are in _src/templates/.._ 
Partials      are in _src/templates/partials/.._

Main file for compile to .html format         is  in _src/templates/mailchimp.nunjucks_
Place where were compiled template text is  in _src/emails/index.nunjucks

*CSS*
*SASS* files are stored in the src/sass/ directory. T
here are two main SASS files ->

_inline.scss_ for styles which will be inlined to their elements
_embedded.scss_ for styles that shouldn't be inlined. These will be inlcluded within a <style> element in the <head>
