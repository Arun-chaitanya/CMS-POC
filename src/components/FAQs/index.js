import React from 'react';
import Accordion from '../Accordion';
import './styles.scss';

function index(props) {
  return (
    <>
        <div className="faqs">
            <h2>Frequently Asked Questions</h2>
            <ul className="faq__list">
                {props.block.data && props.block.data.map((data, key) => (
                    <li key={key} className="faq__listItem">
                        <Accordion title={'Q.  ' + data.question}>{'A.  ' + data.answer}</Accordion>
                    </li>
                ))}
            </ul>
        </div>
    </>
  );
}

export default index;