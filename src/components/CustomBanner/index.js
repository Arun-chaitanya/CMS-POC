import React from 'react';
import './styles.scss';

function index(props) {
    console.log(props.block.data);
    const data = props.block.data;
  return (
    <>
        <div className="custom-banner">
            <img src={data.img} />
            <div className="banner-content">
                <h3>{data.bannerContent.heading}</h3>
                <p>
                    {data.bannerContent.content}
                </p>
            </div>
        </div>
    </>
  );
}

export default index;