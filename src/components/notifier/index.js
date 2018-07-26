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

const Notifier = ({type}) =>
(
    <div>
        <div className='notify_board'>
            <span className='notify_text'>{notify_data[type].text}</span>
            <img className='notify_close_icon' src={CloseIcon} alt='close'/>
        </div>
    </div>
)

Notifier.propTypes = {
    type: PropTypes.number.isRequired,
};

Notifier.defaultProps = {
    type: 0,
}

export default Notifier
