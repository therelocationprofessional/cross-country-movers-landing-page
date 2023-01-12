'use strict';
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.port || 5000;
// https://expressjs.com/en/4x/api.html#express.static

let options = {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '7d',
  redirect: false,
  setHeaders: function(res, path, stat) {
    // add this header to all static responses
    res.set('x-timestamp', Date.now());
  }
};


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use(express.static(path.join(__dirname, 'public')));
