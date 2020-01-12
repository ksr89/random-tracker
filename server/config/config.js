var path = require("path")

var config = {
	"port": 4096,
	"secret": "12345",
	"CLIENT_PATH": path.join(__dirname, "../../", "client"),
	"PROJECT_PATH": path.join(__dirname, "../../"),
	"SERVER_PATH": path.join(__dirname, "../../", "server"),
};

module.exports = config
