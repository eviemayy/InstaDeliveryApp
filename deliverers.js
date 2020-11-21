module.exports = function () {
    var express = require('express');
    var router = express.Router();

    function getOrders(res, mysql, context, complete) {
        mysql.pool.query("SELECT delivererID, firstName, lastName FROM deliverers", function (error, results, fields) {
            if (error) {
                res.write(JSON.stringify(error));
                res.end();
            }
            context.deliverers = results;
            complete();
        });
    }

    router.get('/', function (req, res) {
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deleteperson.js", "filterpeople.js", "searchpeople.js"];
        var mysql = req.app.get('mysql');
        getOrders(res, mysql, context, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 1) {
                res.render('deliverers', context);
            }

        }
    });

    return router;
}();