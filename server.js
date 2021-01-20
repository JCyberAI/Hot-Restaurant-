const http = require("http");

const PORT = 8080;

function middleWare(req, res) {

    response.end("Test for the request");

}

const create = http.createServer(middleWare);

create.listen(PORT, function() {

    console.log("Server online: https://localhost:" + PORT);

})