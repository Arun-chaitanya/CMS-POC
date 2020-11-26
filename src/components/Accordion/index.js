import React, { useState } from 'react';
import './styles.scss';

function index(props) {
    const [isOpen, setOpen] = useState(false);

  return (
    <>
        <div className="accordion-wrapper">
            <div className={`accordion-title ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
                {props.title}
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content"
                    dangerouslySetInnerHTML={{
                        __html: props.children
                    }}></div>   
            </div>
        </div>
    </>
  );
}

export default index;