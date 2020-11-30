import React from 'react';
import "./Tile.scss";

function Tile(props) {
    return (
        <div className="tile">
            <img src={props.tileInfo.imageSrc} alt=""/>
            <p className="tile__description">{props.tileInfo.description}</p>
        </div>
    )
}

export default Tile;
