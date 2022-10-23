"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const port = process.env.PORT;
const app = (0, express_1.default)();
const express_handlebars_1 = require("express-handlebars");
//import Handlebars from 'handlebars'
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('.hbs', (0, express_handlebars_1.engine)({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path_1.default.join(app.get("views"), "layouts"),
    partialsDir: path_1.default.join(app.get("views"), "partials"),
    helpers: require("./lib/helper"),
}));
app.set('view engine', '.hbs');
// app.use(express.json)
// app.use(express.urlencoded({extended: false}))
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/', index_1.default);
app.listen(port);
console.log(`Listening on port: ${port}`);
