
// app.js
var app = (function app() {
    var callQueue = [];

    function run() {
        $(document).ready(function () {
            while (callQueue.length > 0) {
                var call = callQueue.shift();
                call();
            }
        });
    };

    function load(func) {
        callQueue.push(func);
    };

    return {
        run: run,
        load: load,
        security: function(){
            return  appSecurity;
        }
    };
})();

// auth.js
var appSecurity = (function () {
    var _token;

    function getToken (){
        if(!_token){
            _token = Math.random();
        }

        return _token;
    };

    return {
        getToken: getToken
    };
})();


// cr.js
(function (app) {
    app = app || new app();

    var cr = function () {
        console.log(app.security().getToken());
    };

    app.load(cr());
})(app);
