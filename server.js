const express = require('express');
const routes = require('./routes');
const port = process.env.PORT || 8081;

app = new express();
app.use(express.json());
routes.libraryServices(app);
app.listen(port, () => console.log(`Server listening on port ${port}!`));
