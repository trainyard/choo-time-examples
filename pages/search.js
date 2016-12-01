/* Page: search */

const html = require('choo/html')
const navigation = require('../elements/navigation')

function search (state, prev, send) {
  return html`
    <main>
      ${navigation()}
      <h1>search</h1>
      <input type="text"
             autofocus 
             placeholder="search"
             value=${state.search.criteria}
             oninput=${e => send('search:update', e.target.value)} />
     <ul>
      ${state.search.searchList
          .filter(item => item.toLowerCase().indexOf(state.search.criteria.toLowerCase()) > -1 )
          .map(item => html`<li>${item}</li>`
      )}
     </ul>
    </main>
  `
}

module.exports = search
