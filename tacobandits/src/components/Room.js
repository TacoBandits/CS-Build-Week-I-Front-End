import React from 'react'; 
import {Popup, Card, Image} from 'semantic-ui-react';
import tacocat from '../images/TACOCAT.svg';

function Room(props) {
    // if the room ID matches the current room, show tacocat. Otherwise, "display: none"
    return (
        <> 
        <Popup header={props.room.title} content={props.room.description} trigger={
        <Card key={props.room.id} color="black"> 
        <div style={{height: '200px', width: '200px', backgroundColor: 'black', margin: '1px'}}> 
        {(props.room.id === props.current_place) ?
        (<Image class="tacocat" size="mini" style={{height: '200px', width: '200px'}} src={tacocat} alt="tacocat" />)
        : null }
        </div>
        </Card>    
            } 
         inverted />
        </>
    )
}

export default Room