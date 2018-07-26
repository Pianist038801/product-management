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
  }

  getColor = stock => (stock < 10) ? 'red' : (stock < 30 ? 'orange' : 'green')

  renderTableCell = (product, index) => (
    product.editStatus ?
    <TableRow key={index}>
      <TableCell>
        <div className='mark' style={{backgroundColor: this.getColor(product.stock)}}/>
      </TableCell>
      <TableCell>
        <input value={product.code} className='editable' onChange={(e)=>this.props.updateCurrent(index, {code: e.target.value})}/>
      </TableCell>
      <TableCell>
        <input value={product.name} className='editable' onChange={(e)=>this.props.updateCurrent(index, {name: e.target.value})}/>
      </TableCell>
      <TableCell>
        <input value={product.stock} className='editable' onChange={(e)=>this.props.updateCurrent(index, {stock: e.target.value})}/>
      </TableCell>
      <TableCell>
        <input value={product.expiry_date} className='editable' onChange={(e)=>this.props.updateCurrent(index, {expiry_date: e.target.value})}/>
      </TableCell>
      <TableCell>
        <div className='tblButtons'>
          <a className='saveBtn' onClick={()=>this.props.saveProduct(index)}>Save</a>
          <a className='saveBtn' onClick={()=>this.props.cancelUpdate(index)}>Cancel</a>
        </div>
      </TableCell>
    </TableRow>
    :
    <TableRow key={index}>
      <TableCell>
        <div className='mark' style={{backgroundColor: this.getColor(product.stock)}}/>
      </TableCell>
      <TableCell>{product.code}</TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>{product.expiry_date}</TableCell>
      <TableCell>
        <div className='tblButtons'>
          <a className='saveBtn' onClick={()=>this.props.updateCurrent(index, {editStatus: true})}>Change</a>
          <a className='delBtn' onClick={()=>this.props.deleteProduct(index)}>Delete</a>
        </div>
      </TableCell>
    </TableRow>
  )

  render() {
    console.log('Products=', this.props.products);
    console.log('Notification=', this.props.notifications);
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
            {this.props.notification.map((type, index)=>
            <Notifier type={type} key={index} destroy={()=>{this.props.deleteNotification(index)}}/>)}
            
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
                {this.props.products.map((product, index) => this.renderTableCell(product, index))}
              </TableBody>
            </Table>
          </div>
      </div>
    );
  }
}

export default Main;
