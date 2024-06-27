// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: 0, isRunning: false, timeNum: 25}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  decreaseTime = () => {
    const {seconds} = this.state

    if (seconds === 0) {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        seconds: prevState.seconds + 59,
      }))
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
      }))
    }
  }

  onStartButtonClicked = () => {
    this.timerId = setInterval(this.decreaseTime, 1000)
    this.setState({isRunning: true})
  }

  onPauseButtonClicked = () => {
    clearInterval(this.timerId)
    this.setState({isRunning: false})
  }

  onIncreaseTime = () => {
    const {isRunning} = this.state

    if (!isRunning) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        timeNum: prevState.timeNum + 1,
      }))
    }
  }

  onDecreaseTime = () => {
    const {isRunning} = this.state

    if (!isRunning) {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        timeNum: prevState.timeNum - 1,
      }))
    }
  }

  onResetTime = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 25, seconds: 0, isRunning: false})
  }

  onStartFunction = () => (
    <div className="start-pause-container">
      <button
        type="button"
        className="start-button"
        onClick={this.onStartButtonClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
          alt="play icon"
          className="icon"
        />
      </button>
      <p className="text">Start</p>
    </div>
  )

  onPauseFunction = () => (
    <div className="start-pause-container">
      <button
        type="button"
        className="start-button"
        onClick={this.onPauseButtonClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
          alt="pause icon"
          className="icon"
        />
      </button>
      <p className="text">Pause</p>
    </div>
  )

  render() {
    const {minutes, seconds, isRunning, timeNum} = this.state
    const isRunningTime = isRunning ? 'Running' : 'Paused'
    const minutesTime = minutes < 10 ? `0${minutes}` : minutes
    const secondsTime = seconds < 10 ? `0${seconds}` : seconds
    // const changedMinutes = this.changeMinutes()
    return (
      <div className="app-bg-container">
        <div className="digital-timer-bg">
          <h1 className="digital-heading">Digital Timer</h1>
          <div className="digital-container">
            <div className="digital-image-section">
              <div className="timer-card">
                <h1 className="time">
                  {minutesTime}:{secondsTime}
                </h1>
                <p className="time-status-text">{isRunningTime}</p>
              </div>
            </div>
            <div className="time-control-section">
              <div className="start-reset-container">
                {isRunning ? this.onPauseFunction() : this.onStartFunction()}
                <div className="reset-container">
                  <button
                    type="button"
                    className="start-button"
                    onClick={this.onResetTime}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      alt="reset icon"
                      className="icon"
                    />
                  </button>
                  <p className="text">Reset</p>
                </div>
              </div>
              <p className="description">Set Timer limit</p>
              <div className="buttons-container">
                <button
                  type="button"
                  className="decrease-button"
                  onClick={this.onDecreaseTime}
                >
                  -
                </button>
                <p className="timer-button">{timeNum}</p>
                <button
                  type="button"
                  className="increase-button"
                  onClick={this.onIncreaseTime}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
