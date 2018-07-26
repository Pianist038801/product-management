import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Notifier from '../../components/notifier'
import Logo from '../../img/logo.png';
import User from '../../img/user.png';

import './style.css';

const styles = {
  addProduct: {
    backgroundColor: '#3DA56B',
    color: 'white',
  },
  tbHeader: {
    fontSize: '16px',
    fontColor: '#222222',
    fontFamily: 'Poppins-SemiBold',
  },
}

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [
        {
          code: '000',
          name: 'really awesome apple',
          stock: 35,
          expiry_date: '3rd March 2019',
          editStatus: true
        },
        {
          code: '010',
          name: 'really awesome apple',
          stock: 15,
          expiry_date: '3rd March 2019',
          editStatus: false
        }
      ]
    }
  }

  getColor = stock => (stock < 10) ? 'red' : (stock < 30 ? 'orange' : 'green')

  saveProduct = (index) => {

  }

  renderTableCell = product => (
    product.editStatus ?
    <TableRow>
      <TableCell>
        <div className='mark' style={{backgroundColor: this.getColor(product.stock)}}/>
      </TableCell>
      <TableCell>
        <input value={this.state.newCode} className='editable' onChange={(e)=>this.setState({newCode:e.target.value})}/>
      </TableCell>
      <TableCell>
        <input value={this.state.newCode} className='editable' onChange={(e)=>this.setState({newCode:e.target.value})}/>
      </TableCell>
      <TableCell>
        <input value={this.state.newCode} className='editable' onChange={(e)=>this.setState({newCode:e.target.value})}/>
      </TableCell>
      <TableCell>
        <input value={this.state.newCode} className='editable' onChange={(e)=>this.setState({newCode:e.target.value})}/>
      </TableCell>
      <TableCell>
        <div className='tblButtons'>
          <a href='' className='saveBtn'>Save</a>
          <a href='' className='delBtn'>Delete</a>
        </div>
      </TableCell>
    </TableRow>
    :
    <TableRow>
      <TableCell>
        <div className='mark' style={{backgroundColor: this.getColor(product.stock)}}/>
      </TableCell>
      <TableCell>{product.code}</TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>{product.expiry_date}</TableCell>
      <TableCell>
        <div className='tblButtons'>
          <a href='' className='saveBtn'>Change</a>
          <a href='' className='delBtn'>Delete</a>
        </div>
      </TableCell>
    </TableRow>
  )

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
              <Button onClick={()=>this.props.history.push('/add')} variant="contained" className='addProduct' style={styles.addProduct}>
                Add product
              </Button>
            </div>
            <a href='/' className='breadcrum'>Dashboard > </a>
            <a href='/main' className='breadcrum'>Inventory </a>
            <Notifier/>
            <Notifier/>
            <Notifier/>
            <Table className='tableView'>
              <TableHead>
                <TableRow>
                  <TableCell style={{width: '85px'}}>
                    <div className='mark'/>
                  </TableCell>
                  <TableCell style={{...styles.tbHeader, width: '100px'}}>Code</TableCell>
                  <TableCell style={{...styles.tbHeader, width: '268px'}}>Product</TableCell>
                  <TableCell style={{...styles.tbHeader, width: '126px'}}>Stock</TableCell>
                  <TableCell style={{...styles.tbHeader, width: '188px'}}>Expiry date</TableCell>
                  <TableCell style={{...styles.tbHeader, width: '100px'}}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.products.map(product => this.renderTableCell(product))}
              </TableBody>
            </Table>
          </div>
      </div>
    );
  }
}

export default Main;
