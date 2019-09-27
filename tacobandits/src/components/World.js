import React from 'react'; 
import axios from 'axios';
import Room from './Room';
import {Popup, Image, Card, Container } from 'semantic-ui-react' 
const key = localStorage.getItem('key');
class World extends React.Component {
state = {
    rooms: [],
    in_card: false, 
    current_place: 39, 
    room_array: []
}

// 

    componentDidMount() {
        axios.get("https://tacobandits.herokuapp.com/api/adv/get_rooms/", {Authorization: `Token ${key}`}).then(res => {
        console.log(res.data.room_list)
        this.setState({rooms: res.data.room_list})
        }).catch(error => console.log(error))
    }

    goNorth = (newRoomId) => {
        // "N"
        this.setState({current_place: newRoomId })

        // axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "n"},
        // {Authorization: `Token ${key}`} 
        // )
        // .then(res => console.log(res)).catch(error => console.log(error))
    }

    goWest = (newRoomId) => {
        this.setState({current_place: newRoomId })
        // "W"
        // axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "w"},
        // {Authorization: `Token ${key}`} 
        // )
        // .then(res => console.log(res)).catch(error => console.log(error))
    }

    goEast = (newRoomId) => {
        this.setState({current_place: newRoomId })
        // "E"
        // axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "e"},
        // {Authorization: `Token ${key}`} 
        // )
        // .then(res => console.log(res)).catch(error => console.log(error))
    }

    goSouth = (newRoomId) => {
        this.setState({current_place: newRoomId })
        // "S"

        // axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "s"},
        // {Authorization: `Token ${key}`} 
        // )
        // .then(res => console.log(res)).catch(error => console.log(error))
    } 

    render() {
        return (
            <Container style={{width: '100vw'}}>
            <div style={{ margin: "0 auto", textAlign: "center", display: 'flex', flexWrap: 'wrap'}}>
            {
            this.state.rooms.map(room => {
                this.state.room_array.push(room.id)
                console.log(this.state.room_array.sort())
                return (
              <Room room={room} current_place={this.state.current_place} goWest={this.goWest} goEast={this.goEast} goNorth={this.goNorth} goSouth={this.goSouth} />
            )
            })
            }
            </div>
            </Container>
        )
    }
}

export default World