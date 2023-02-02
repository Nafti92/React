function WelcomeFunc({name, children}) {
  return <div>
    <h1>Hello, {name}</h1>
    <p>
      {children}
    </p>
  </div>
}

class Welcome extends React.Component {

  render() {
    return <div>
      <h1>Hello, {this.props.name}</h1>
      <p>
        {this.props.children}
      </p>
    </div>
  }
}

class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    this.timer = null
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({date: new Date()})
  }

  render () {
    const date = new Date()
    return <div> Il est {this.state.date.toLocaleTimeString()} {this.state.date.toLocaleDateString()}
    </div>
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: props.start, timer: null}
    this.toggle = this.toggle.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount() {
    this.play()
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  increment() {
    this.setState(function (state, props) {
      return {count: state.count + props.step}
    })
  }

  pause() {
    clearInterval(this.state.timer)
    this.setState ({timer: null})

  }

  play() {
    clearInterval(this.state.timer)
    this.setState ({
      timer: setInterval(this.increment.bind(this), 1000)
    })
  }

  toggle() {
    return this.state.timer ? this.pause() : this.play()
  }

  label() {
    return this.state.timer ? 'Pause' : 'Lecture'
  }

  reset() {
    this.setState((state,props) => ({count: props.start}))
  }

  render() {
    return <div>
      <p>Count: {this.state.count}</p>
      <button onClick={this.toggle}>{this.label()}</button>
      <button onClick={this.reset}>Réinitialiser</button>
    </div>
  }
}



Incrementer.defaultProps = {
  start: 0,
  step: 1
}


function Home() {
  return <div>
    <Welcome name="Nafti"/>
    <Welcome name="Jean"/>
    <Incrementer />
  </div>
}


ReactDOM.render(<Home/>, document.querySelector('#app'))
