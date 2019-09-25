import React from 'react'; 
import axios from 'axios';
class World extends React.Component {

    componentDidMount() {
        axios.get("https://lambda-mud-test.herokuapp.com/api/adv/rooms")
    }

    goUp = () => {
        // "N"
    }

    goLeft = () => {
        // "W"
    }

    goRight = () => {
        // "E"
    }

    goDown = () => {
        // "S"
    }

    quit = () => {
        // quit
    }

    render() {
        return (
            <div>
            <div>
            /*world goes here */
            </div>
            <div>
            <button onClick="goUp">up</button>
            <button onClick="goLeft">left</button>
            <button onClick="goRight">right</button>
            <button onClick="goDown">down</button>
            </div>
            <button onClick="quit">quit</button>
            </div>
        )
    }
}

export default World