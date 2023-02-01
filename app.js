let n= 0

function numberFormat(n) {
  return n.toString().padsStart(2, '0')

}

function render() {
  const items = ['apple', 'orange', 'banana']
  const lis = items.map((item, k) => <li key={k}>{item}</li>)
  const title = <React.Fragment><h1 className="title" id="title">
    Hello, world <span>{n}</span>

  </h1>
  <ul> {lis}
  </ul>

  </React.Fragment>


  ReactDOM.render(title, document.querySelector('#app'))

}

render()

window.setInterval(() => {
  n++
  render()
}, 1000)
