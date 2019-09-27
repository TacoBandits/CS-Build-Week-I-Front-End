import React from 'react'; 
import axios from 'axios';
import Room from './Room';
import {Popup, Image, Card, Container } from 'semantic-ui-react' 
const key = localStorage.getItem('key');
class World extends React.Component {
state = {
    rooms: [],
    in_card: false, 
    current_place: 49
}

// 

    componentDidMount() {
        axios.get("https://tacobandits.herokuapp.com/api/adv/get_rooms/", {Authorization: `Token ${key}`}).then(res => {
        console.log(res.data.room_list)
        this.setState({rooms: res.data.room_list})
        }).catch(error => console.log(error))
    }

    goUp = () => {
        // "N"
        if ()
        axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "n"},
        {Authorization: `Token ${key}`} 
        )
        .then(res => console.log(res)).catch(error => console.log(error))
    }

    goLeft = () => {
        // "W"
        axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "w"},
        {Authorization: `Token ${key}`} 
        )
        .then(res => console.log(res)).catch(error => console.log(error))
    }

    goRight = () => {
        // "E"
        axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "e"},
        {Authorization: `Token ${key}`} 
        )
        .then(res => console.log(res)).catch(error => console.log(error))
    }

    goDown = () => {
        // "S"
        axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "s"},
        {Authorization: `Token ${key}`} 
        )
        .then(res => console.log(res)).catch(error => console.log(error))
    }


    render() {
        return (
            <Container>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
            this.state.rooms.map(room => {
                return (
              <Room room={room} current_place={this.state.current_place} />
            )
            })}
            </div>
            <div>
            <div>
            <button onClick={this.goUp}>up</button>
            <button onClick={this.goLeft}>left</button>
            <button onClick={this.goRight}>right</button>
            <button onClick={this.goDown}>down</button>
            </div>
            </div>
            </Container>
        )
    }
}

export default World