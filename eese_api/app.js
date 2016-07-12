import express from "express"
import body_parser from "body-parser"
import connection from "./conn_bin"
import routes from "./routes_bin"

let app = express();

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

connection.init();
routes.configure(app);

let reply = () => console.log("Server listening on port " + server.address().port);
let server = app.listen(8000, reply);
