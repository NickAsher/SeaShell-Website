const fs = require("fs") ;


/*  Going From Local to Production      in files   home.html, gallery.html, pelican.html, about-us.html
    ------------------------------
    Firstly do the third party files so that you don't serve them yourself in production

    For Jquery
          replace   ../../public/lib/jquery/              with    https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/

    For Bootstrap Links
          replace   ../../public/lib/bootstrap-5.0/       with    https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/

    For Font-awesome Links
          replace   ../../public/lib/fontawesome-5.15.4/  with   https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/

    For all my public folder files
          replace     ../../public/                        with   https://s3.ap-south-1.amazonaws.com/www.seashellresorts/src/public/


    For my header links
          replace  <a href="home.html">        with    <a href="/">
          replace  <a href="gallery.html">     with    <a href="/gallery">
          replace  <a href="about-us.html">    with    <a href="/about">
          replace  <a href="pelican.html">     with    <a href="pelican">
 */


const createProductionFileFromLocalFile = (inputFilePath, outputFilePath)=>{

  let data = fs.readFileSync(inputFilePath, 'utf8') ;

  let newData = data.replaceAll(`../../public/lib/jquery/`, `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/`) ;
  newData = newData.replaceAll(`../../public/lib/bootstrap-5.0/`, `https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/`) ;
  newData = newData.replaceAll(`../../public/lib/fontawesome-5.15.4/`, `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/`) ;
  newData = newData.replaceAll(`../../public/`, `https://rfg24.s3.ap-south-1.amazonaws.com/seashell/src/public/`) ;


  newData = newData.replaceAll(`<a href="home.html">`,     `<a href="/">`) ;
  newData = newData.replaceAll(`<a href="gallery.html">`,  `<a href="/gallery">`) ;
  newData = newData.replaceAll(`<a href="about-us.html">`, `<a href="/about">`) ;
  newData = newData.replaceAll(`<a href="pelican.html">`,  `<a href="/pelican">` ) ;


  fs.writeFileSync(outputFilePath, newData, "utf8") ;

} ;

createProductionFileFromLocalFile(__dirname+"./../src/html/local/home.html", __dirname+"./../src/html/production/home.html") ;
createProductionFileFromLocalFile(__dirname+"./../src/html/local/gallery.html", __dirname+"./../src/html/production/gallery.html") ;
createProductionFileFromLocalFile(__dirname+"./../src/html/local/about-us.html", __dirname+"./../src/html/production/about-us.html") ;
createProductionFileFromLocalFile(__dirname+"./../src/html/local/pelican.html", __dirname+"./../src/html/production/pelican.html") ;
console.log("Succesfully created production files from local files") ;