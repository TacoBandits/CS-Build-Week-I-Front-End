import React from 'react'; 
import axios from 'axios';
import {Popup, Image, Card } from 'semantic-ui-react' 
import tacocat from '../images/TACOCAT.svg';
const key = localStorage.getItem('key');
class World extends React.Component {
state = {
    rooms : [{
        "id": 0,
        "title": "blablabla", 
        "description": "blablabla", 
        "x": 0,
        "y": 0, 
        n_to: null,
        e_to: null,
        w_to: null,
        s_to: null
    }, 
    {
        "id": 1,
        "title": "blablabla", 
        "description": "blablabla", 
        "x": 0,
        "y": 0, 
        n_to: null,
        e_to: null,
        w_to: null,
        s_to: null
    },
    {
    "id": 2,
    "title": "name", 
    "description": "blablabla", 
    "x": 0,
    "y": 0, 
    n_to: null,
    e_to: null,
    w_to: null,
    s_to: null
}, {
    "id": 0,
    "title": "blablabla", 
    "description": "blablabla", 
    "x": 0,
    "y": 0, 
    n_to: null,
    e_to: null,
    w_to: null,
    s_to: null
}, 
{
    "id": 1,
    "title": "blablabla", 
    "description": "blablabla", 
    "x": 0,
    "y": 0, 
    n_to: null,
    e_to: null,
    w_to: null,
    s_to: null
},
{
"id": 2,
"title": "name", 
"description": "blablabla", 
"x": 0,
"y": 0, 
n_to: null,
e_to: null,
w_to: null,
s_to: null
}, {
    "id": 0,
    "title": "blablabla", 
    "description": "blablabla", 
    "x": 0,
    "y": 0, 
    n_to: null,
    e_to: null,
    w_to: null,
    s_to: null
}, 
{
    "id": 1,
    "title": "blablabla", 
    "description": "blablabla", 
    "x": 0,
    "y": 0, 
    n_to: null,
    e_to: null,
    w_to: null,
    s_to: null
},
{
"id": 2,
"title": "name", 
"description": "blablabla", 
"x": 0,
"y": 0, 
n_to: null,
e_to: null,
w_to: null,
s_to: null
}, {
    "id": 0,
    "title": "blablabla", 
    "description": "blablabla", 
    "x": 0,
    "y": 0, 
    n_to: null,
    e_to: null,
    w_to: null,
    s_to: null
}, 
{
    "id": 1,
    "title": "blablabla", 
    "description": "blablabla", 
    "x": 0,
    "y": 0, 
    n_to: null,
    e_to: null,
    w_to: null,
    s_to: null
},
{
"id": 2,
"title": "name", 
"description": "blablabla", 
"x": 0,
"y": 0, 
n_to: null,
e_to: null,
w_to: null,
s_to: null
}, {
    "id": 0,
    "title": "blablabla", 
    "description": "blablabla", 
    "x": 0,
    "y": 0, 
    n_to: null,
    e_to: null,
    w_to: null,
    s_to: null
}, 
{
    "id": 1,
    "title": "blablabla", 
    "description": "blablabla", 
    "x": 0,
    "y": 0, 
    n_to: null,
    e_to: null,
    w_to: null,
    s_to: null
},
{
"id": 2,
"title": "name", 
"description": "blablabla", 
"x": 0,
"y": 0, 
n_to: null,
e_to: null,
w_to: null,
s_to: null
}]
}

    componentDidMount() {
        axios.get("https://tacobandits.herokuapp.com/api/adv/", {Authorization: `Token ${key}`}).then(res => {
        console.log(res)
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
            <Card.Group itemsPerRow={11}>
            {
            this.state.rooms.map(room => {
                return (
                <div>
              <Popup header={room.title} content={room.description} trigger={
              <Card raised>
                <Image size="mini" style={{height: '200px', width: '200px'}} src={tacocat} alt="tacocat" />
                </Card>    
              } />
                </div>)
            })
            }
            </Card.Group>
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