"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var users_routes_1 = __importDefault(require("./routes/users.routes"));
var orders_routes_1 = __importDefault(require("./routes/orders.routes"));
var products_routes_1 = __importDefault(require("./routes/products.routes"));
var app = (0, express_1.default)();
dotenv_1.default.config();
var port = process.env.port;
app.use(body_parser_1.default.json());
// client.connect();
// client.query('SELECT NOW()', (err: Error, res: any) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   client.end;
// });
app.use('/api/users', users_routes_1.default);
app.use('/api/orders', orders_routes_1.default);
app.use('/api/products', products_routes_1.default);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports.default = app;
