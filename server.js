var reload = require('reload')

app.listen(3000, () => {

  console.log(`Listening on port 3000`);
})

reload(server);