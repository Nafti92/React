class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      nom: 'Paul'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      nom: e.target.value
    })
  }


  render () {
    return (
      <div>
        {this.state.nom}
        <label htmlFor="nom">Mon nom</label>
        <select value={this.state.nom} onChange={this.handleChange}>
          <option value="John">John</option>
          <option value="Paul">Paul</option>
          <option value="George">George</option>
        </select>
      </div>
    )
  }
}

ReactDOM.render(<Home/>, document.querySelector('#app'))
