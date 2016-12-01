const html = require('bel')

function navigation () {
  return html`
    <nav>
      <ul>
        <li><a href="/">Counter</a></li>
        <li><a href="/search">Search</a></li>
      </ul>
    </nav>
  `
}

module.exports = navigation
