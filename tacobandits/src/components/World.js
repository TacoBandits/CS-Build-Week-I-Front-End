import React from 'react';
import axios from 'axios';
import Room from './Room';
import requiresAuth from './requiresAuth';
const key = localStorage.getItem('key');
class World extends React.Component {
    state = {
        rooms: [],
        in_card: false,
        current_place: 39,
        room_array: [],
        moves: 0
    }


    componentDidMount() {
        axios.get("https://tacobandits.herokuapp.com/api/adv/get_rooms/", { Authorization: `Token ${key}` }).then(res => {
            this.setState({ rooms: res.data.room_list })
        }).catch(error => console.log(error))
    }

    incrementMoves = () => {
        this.setState(prevState => ({
            moves: ++prevState.moves
        }));
    }

    goNorth = (newRoomId) => {
        // "N"
        this.setState({ current_place: newRoomId })
        this.incrementMoves()
        // axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "n"},
        // {Authorization: `Token ${key}`} 
        // )
        // .then(res => console.log(res)).catch(error => console.log(error))
    }

    goWest = (newRoomId) => {
        this.setState({ current_place: newRoomId })
        this.incrementMoves()
        // "W"
        // axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "w"},
        // {Authorization: `Token ${key}`} 
        // )
        // .then(res => console.log(res)).catch(error => console.log(error))
    }

    goEast = (newRoomId) => {
        this.setState({ current_place: newRoomId })
        this.incrementMoves()
        // "E"
        // axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "e"},
        // {Authorization: `Token ${key}`} 
        // )
        // .then(res => console.log(res)).catch(error => console.log(error))
    }

    goSouth = (newRoomId) => {
        this.setState({ current_place: newRoomId })
        this.incrementMoves()
        // "S"

        // axios.post('https://tacobandits.herokuapp.com/api/adv/move/', {direction: "s"},
        // {Authorization: `Token ${key}`} 
        // )
        // .then(res => console.log(res)).catch(error => console.log(error))
    }

    getRandomColor = () => {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    };

    render() {
        return (
            <div className='container'>
                <h2>Was It A Cat I SaW?</h2>
                <div className='instructions'>
                    <div className='indInstructions'>
                        <i className="fas fa-paw"></i>
                        <h3>Why, yes, yes it was! That's <span>Madam Tacocat</span>! She is the Purrrrrrveyor of Palindromes, and she's in a bit of a pickle... an evil taco connoisseur has broken into the underground tunnels of her <span>101</span>-room mansion to devour her and she's on his <span>radar</span>!</h3>
                    </div>
                    <div className='indInstructions'>
                        <i className="fas fa-paw"></i>
                        <h3>The tunnels are the only way around her house, so be careful; one wrong move could send her straight into the jaws of THE <span>TACOCAT</span> EATER!!</h3>
                    </div>
                    <div className='indInstructions'>
                        <i className="fas fa-paw"></i>
                        <h3>Search for <span>Madam Tacocat</span> after every trip to see where she turns up! If you help her get out, she'll let you know! If you cant find her in her mansion, well, you know what they say, "<span>no lemon, no melon</span>," RIP <span>Madam Tacocat</span>, you will be missed!</h3>
                    </div>
                </div>
                <div className='secContainer'>
                    {
                        this.state.rooms.map(room => {
                            this.state.room_array.push(room.id)
                            return (
                                <Room
                                    room={room}
                                    current_place={this.state.current_place}
                                    moves={this.state.moves}
                                    getRandomColor={this.getRandomColor}
                                    goWest={this.goWest}
                                    goEast={this.goEast}
                                    goNorth={this.goNorth}
                                    goSouth={this.goSouth}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default requiresAuth(World);