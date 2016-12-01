const choo = require('choo')
const chooTime = require('choo-time')
const app = choo()

app.use(chooTime())
app.model(require('./models/app'))
app.model(require('./models/search'))

app.router((route) => [
  route('/', require('./pages/home')),
  route('/search', require('./pages/search'))
])

const tree = app.start()
document.body.appendChild(tree)
