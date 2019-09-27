import React from 'react';
import { Popup, Card, Image } from 'semantic-ui-react';
import tacocat from '../images/TACOCAT.svg';

function Room(props) {
    // if the room ID matches the current room, show tacocat. Otherwise, "display: none"
    console.log(props.room)
    return (
        <>
            <div key={props.room.id} color="black">
                <div>
                    {(props.room.id === props.current_place) ?
                        (<div className="emptyRoom">
                            <button onClick={() => props.goNorth(props.room.n_to)}>north</button>
                            <button onClick={() => props.goSouth(props.room.s_to)}>south</button>
                            <button onClick={() => props.goEast(props.e_to)}>east</button>
                            <button onClick={() => props.goWest(props.room.w_to)}>west</button>
                            <Image className="tacocat" size="mini" style={{ height: '100px', width: '150px' }} src={tacocat} alt="tacocat" /></div>)
                        : <div className="emptyRoom">{props.room.description}</div>}
                </div>
            </div>
        </>
    )
}

export default Room