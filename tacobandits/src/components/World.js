import React from 'react'; 
import axios from 'axios';

const key = localStorage.getItem('key');
class World extends React.Component {

    componentDidMount() {
        axios.get("https://tacobandits.herokuapp.com/api/adv/rooms", {Authorization: `Token ${key}`}).then(res => {
        this.setState({rooms: res.data}) 
        }).catch(error => console.log(error))
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