import React from 'react';
import { Button, Popup, Image, Modal } from 'semantic-ui-react';
import tacocat from '../images/TACOCAT.svg';

function Room(props) {
    // if the room ID matches the current room, show tacocat. Otherwise, "display: none"
    return (
        <>
            <div key={props.room.id} color="black">
                <div>
                    {(props.moves <= 5) ?
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
                        : <div
                            className="winner"
                            style={{ background: props.getRandomColor() }}>
                            <h2>You Win!</h2>
                            <Image className="tacocat" size="mini" style={{ height: '100px', width: '150px' }} src={tacocat} alt="tacocat" />
                            <h3>Madam Tacocat is saved!</h3>
                        </div>}
                </div>
            </div>
        </>
    )
}

export default Room