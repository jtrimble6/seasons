import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'

class App extends React.Component {
    state = {
        lat: null, 
        errorMessage: '',
        loadingMessage: 'Please accept location request' 
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, loadingMessage: 'Loading...' }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Loader loadingMessage={this.state.loadingMessage}/>
    }


    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))