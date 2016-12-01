const html = require('choo/html')
const navigation = require('../elements/navigation')

module.exports = (state, prev, send) => html`
  <main>
    ${navigation()}
    <h1>Counter</h1>
    <button type="button" onclick=${e => send('inc')}>+</button>
    <div>${state.counter}</div>
    <button type="button" onclick=${e => send('dec')}>-</button>
  </main>
`
