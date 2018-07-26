import React, { Component } from 'react';
import './style.css';
import Logo from '../../img/logo.png';
import User from '../../img/user.png';
import Button from '@material-ui/core/Button';

const styles = {
  addProduct: {
    backgroundColor: '#3DA56B',
    color: 'white'
  }
}

class Main extends Component {
  render() {
    return (
      <div className='container'>
          <div className='header'>
            <img className='logo' src={Logo} alt='logo' />
            <img className='profile_image' src={User} alt='user' />
          </div>
          <div className='content'>
            <div className='title_header'>
              <span className='inventory'>Inventory management</span>
              <Button onClick={()=>this.props.history.push('/')} variant="contained" className='addProduct' style={styles.addProduct}>
                Add product
              </Button>
            </div>
            <a href='/' className='breadcrum'>Dashboard > </a>
            <a href='/main' className='breadcrum'>Inventory </a>
          </div>
      </div>
    );
  }
}

export default Main;
