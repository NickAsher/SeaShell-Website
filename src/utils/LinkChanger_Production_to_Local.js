const fs = require("fs") ;
const path = require("path") ;





/*  Going From Production to Local       in files   home.html, gallery.html, pelican.html, about-us.html
    ------------------------------
    For all my public folder files
          replace     https://s3.ap-south-1.amazonaws.com/www.seashellresorts/src/       with   ../

    For Jquery
          replace https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/                  with    ../public/lib/jquery/

    For Bootstrap Links
          replace     https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/                 with   ../public/lib/bootstrap-5.0/

    For Font-awesome Links
          replace https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/    with    ../public/lib/fontawesome-5.15.4/
          replace https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/           with    ../public/lib/fontawesome-5.15.4/

    For my header links
          replace  <a href="/">           with    <a href="home.html">
          replace  <a href="/gallery">    with    <a href="gallery.html">
          replace  <a href="/about">      with    <a href="about-us.html">
          replace  <a href="pelican">     with    <a href="pelican.html">
 */



const replaceHtmlFileLinks = (filePath)=>{
  fs.readFile(filePath, 'utf8', (err, data)=>{
    if(err){
      return console.log(err) ;
    }

    let newData = data.replaceAll(`https://s3.ap-south-1.amazonaws.com/www.seashellresorts/src/`, `../`) ;

    newData = newData.replaceAll(`https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/`, `../public/lib/jquery/`) ;
    newData = newData.replaceAll(`https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/` , `../public/lib/bootstrap-5.0/` ) ;
    newData = newData.replaceAll(`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/` , `../public/lib/fontawesome-5.15.4/` ) ;
    newData = newData.replaceAll(`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/` , `../public/lib/fontawesome-5.15.4/` ) ;

    newData = newData.replaceAll(`<a href="/">`        , `<a href="home.html">` ) ;
    newData = newData.replaceAll(`<a href="/gallery">` , `<a href="gallery.html">` ) ;
    newData = newData.replaceAll(`<a href="/about">`   , `<a href="about-us.html">` ) ;
    newData = newData.replaceAll(`<a href="pelican">` , `<a href="pelican.html">` ) ;


    fs.writeFile(filePath, newData, "utf8", (err2)=>{
      if(err2){
        return console.log(err2) ;
      }
      console.log("done " + filePath) ;
    }) ;
  }) ;
} ;

replaceHtmlFileLinks(__dirname + "./../local_html/home.html") ;
replaceHtmlFileLinks(__dirname + "./../local_html/gallery.html") ;
replaceHtmlFileLinks(__dirname + "./../local_html/about-us.html") ;
replaceHtmlFileLinks(__dirname + "./../local_html/pelican.html") ;
