const http = require('http');

const server = http.createServer(

    (Request, Response)=> {

        Response.setHeader("content-type", "text/html")
        Response.write('<head><meta charset="UTF-8"></head>')

       if (Request.url === '/formation' && Request.method === 'GET'){
           Response.write('<h1>Vous êtes en formation chez simplon</h1>');
       }else if(Request.url === '/entreprise'&& Request.method === 'GET'){
            Response.write('<h1>Vous êtes en alternance à la maif</h1>');
       }else if(Request.url === '/profil'&& Request.method === 'GET'){
           Response.write('<h1>Vous êtes sur la page profil</h1>');
       }else if(Request.url === '/contact'&& Request.method === 'GET'){
           Response.write('<h1>Vous êtes sur la page contact<h1>');
       }else{
           Response.write('404 page non valide');
       }
       Response.end()
    })

server.listen(8080, "localhost", ()=>{
    console.log("Server is listening on port 8080");
})

