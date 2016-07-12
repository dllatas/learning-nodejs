import models from "./models/env_bin.js"

module.exports = {
    configure: function(app) {
        app.get("/eese/", function(req, res) {
            models.get(res);
        });
    }
};
