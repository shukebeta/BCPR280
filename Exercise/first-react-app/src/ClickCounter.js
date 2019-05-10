import React, {Component} from 'react'
class ClickCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  onClickButton = () => this.setState({count: this.state.count + 1})

  render() {
    return (
      <React.Fragment>
        <button type="button" onClick={this.onClickButton}>Click Me</button>
        <p>Click Count: {this.state.count}</p>
      </React.Fragment>
    )
  }
}

export default ClickCounter