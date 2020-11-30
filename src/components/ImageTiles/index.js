import React from "react";
import "./styles.scss";
import Tile from "./Tile"

function ImageTiles(props) {
    const data = props.block.data;
    return (
        <div className="container">
            {data.map((tileInfo,index) => (<Tile key={index} tileInfo={tileInfo} />))}
        </div>
    )
}

export default ImageTiles


// function Foo(props) {
//     return (
//         <div className="foo">
//             <h2>{props.block.headline}</h2>
//                 Hi I'm a {props.block.headline} component.
//             <hr />
//         </div>
//     )
// }

// export default Foo;