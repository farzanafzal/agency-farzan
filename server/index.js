// require express
const express = require('express');
const path = require("path")
const app = express();
app.use(express.static(path.resolve(__dirname,"../dist")))
// run server
var port = process.env.PORT || 3000;
app.listen(port, test => {
	console.log(`listening on port ${port}`);
});
