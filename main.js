const express = require('express'),
    app = new express(),
    livereload = require('livereload'),
    connectLivereload = require('connect-livereload')

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
app.use(connectLivereload())

app.set('view engine', 'ejs')
app.use(require('express-ejs-layouts'))
app.use(express.static('public'))

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
    console.log(`Server is running at http://localhost:${app.get('port')}`)
})

const homeController = require('./controllers')
app.get('/', homeController.index)

const errorController = require('./controllers/error')
app.use(errorController.error404)
app.use(errorController.error500)