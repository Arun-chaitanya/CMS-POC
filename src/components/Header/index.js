import React from "react";

import "./styles.scss";

function Header(props) {
    const { header, logo } = props;
    return (
        <div className="header">
            <img src={logo} />
        </div>
    )
}
export default Header;