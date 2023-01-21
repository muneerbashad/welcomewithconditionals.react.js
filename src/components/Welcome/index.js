// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="welcome-title">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button button"
          onClick={this.onSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
