const app = require('./app');
require("./database");

// comienza el server
app.listen(app.get('port'));
  console.log('server on port', app.get("port"));



/*const app = require("./app");

require("./database");

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});*/