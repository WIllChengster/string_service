const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
    console.log(`server is now listening to port: ${PORT}`)
})