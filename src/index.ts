import express from 'express'
import 'dotenv/config'
import routerindex from './routes/index'
import path from 'path'

const port = process.env.PORT
const app = express()

    import {engine} from 'express-handlebars'
      //import Handlebars from 'handlebars'

    app.set('views', path.join(__dirname, 'views'))
    app.engine('.hbs',engine({
        defaultLayout: "main",
        extname: ".hbs",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        helpers: require("./lib/helper"),
    }))

    app.set('view engine', '.hbs')

  app.use(express.json())
  app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/project',routerindex)

app.listen(port)
console.log(`Listening on port: ${port}`)

