class Field extends React.Component {
  render () {
    const {name, value, onChange, children} = this.props
    return (
      <div>
        <label htmlFor={name}>{children}</label>
        <input type="text" value={value} onChange={onChange} id={name} name={name}/>
      </div>
    )
  }
}



class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      nom: '',
      prenom: '',
      newsletter: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const name = e.target.name
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [name]: value
    })
  }


  render () {
    return (
      <div className="container">
        <Field name="nom" value={this.state.nom} onChange={this.handleChange}>name</Field>
        <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>firstname</Field>
        {JSON.stringify(this.state)}

      </div>
    )
  }
}

ReactDOM.render(<Home/>, document.querySelector('#app'))
