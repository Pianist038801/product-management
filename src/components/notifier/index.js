import React from 'react';
import CloseIcon from '../../img/close.png'
import PropTypes from 'prop-types';
import './style.css'
const notify_data = [
    {
        color: '#E83A50',
        text: 'Product deleted'
    },
    {
        color: '#3BCC34',
        text: 'Product updated'
    },
    {
        color: '#3BCC34',
        text: 'New product added'
    }
]

const Notifier = ({type, destroy}) =>
(
    <div>
        <div className='notify_board' style={{borderColor: notify_data[type].color}}>
            <span className='notify_text'>{notify_data[type].text}</span>
            <a>
                <img className='notify_close_icon' src={CloseIcon} alt='close' onClick={destroy}/>
            </a>
        </div>
    </div>
)

Notifier.propTypes = {
    type: PropTypes.number.isRequired,
    destroy: PropTypes.func.isRequired,
};

export default Notifier
