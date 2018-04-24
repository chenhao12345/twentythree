let Mock = require("mockjs");
let Random = Mock.Random;

module.exports = (app) => {
    app.get("/api", function(req, res, next) {
        var routerLink = require("../mock/datas/routerlink.json")
        res.send(routerLink)
    })
}