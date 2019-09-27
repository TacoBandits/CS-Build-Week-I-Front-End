import React from 'react'; 
import {Popup, Card, Image} from 'semantic-ui-react';
import tacocat from '../images/TACOCAT.svg';

function Room(props) {
    // if the room ID matches the current room, show tacocat. Otherwise, "display: none"
    console.log(props.room) 
    return (
        <> 
        <Popup header={props.room.title} content={props.room.description} trigger={
        <Card key={props.room.id} color="black"> 
        <div style={{height: '150px', width: '150px', backgroundColor: 'black', margin: '1px'}}> 
        {(props.room.id === props.current_place) ?
        ( <>
        <button onClick={() => props.goNorth(props.room.n_to)}>north</button>
        <button onClick={() => props.goSouth(props.room.s_to)}>south</button>
        <button onClick={() => props.goEast(props.e_to)}>east</button>
        <button onClick={() => props.goWest(props.room.w_to)}>west</button>
        <Image class="tacocat" size="mini" style={{height: '150px', width: '150px'}} src={tacocat} alt="tacocat" /> </>)
        : null }
        </div>
        </Card>    
            } 
         inverted />
        </>
    )
}

export default Room