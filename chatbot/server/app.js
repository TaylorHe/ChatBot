const express = require('express');
const app = express();
const configRoutes = require("./routes");
configRoutes(app);

app.listen(8080, () => console.log('Server is running on port 8080.'));