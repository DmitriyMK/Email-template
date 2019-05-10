# Email-template

This is a workflow for building HTML emails using Gulp. It comes with a default MailChimp-supported template.

What it does -

Builds HTML email from templates and partials
Compiles SCSS to CSS
Inlines the inline.css file and embeds the embedded.css file
Generates a preview of emails
Creates a zip of the build directory for upload (optional)
Getting Started
- Install packages
npm install
- Start build
npm start
- Start Zipping.
npm run zip

The compiled and inlined output email will be in the build/ directory. 
Can be previewed in browser at http://localhost:8000

