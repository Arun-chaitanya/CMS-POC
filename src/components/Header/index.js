import React from "react";

import "./styles.scss";

function Header(props) {
    const { header, logo } = props;
    return (
        <div className="header">
            <img src={logo} />
            <h1>{header}</h1>
        </div>
    )
}
export default Header;