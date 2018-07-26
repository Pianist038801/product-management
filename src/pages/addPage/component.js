import React, { Component } from 'react';
import Logo from '../../img/logo.png';
import User from '../../img/user.png';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './style.css';

const styles = {
    inventoryInput: {
        marginRight: '50px',
    },
    addProduct: {
        backgroundColor: '#3DA56B',
        color: 'white',
    },
    cancelBtn: {
        color: '#3DA56B',
        backgroundColor: 'white',
    },
    buttons: {
        justifyContent: 'flex-start',
        padding: '16px',
    },
}

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
        code: '',
        name: '',
        stock: 0,
        expiry_date: '',
        }
    }

    add = () => {
        const {code, name, stock, expiry_date} = this.state
        this.props.addProduct({
            code,
            name,
            stock,
            expiry_date,
            editStatus: false
        })
        this.props.history.push('/main')
    }

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
                </div>
                <a href='/' className='breadcrum'>Dashboard > </a>
                <a href='/main' className='breadcrum'>Inventory ></a>
                <a href='/add' className='breadcrum'> Add new </a>
                <Dialog open={true} >
                <DialogContent>
                    <div className='propertyName'>Basic</div>
                    <div>
                    <TextField
                    autoFocus
                    margin="dense"
                    onChange={obj => this.setState({name: obj.target.value})}
                    label="Product name"
                    required
                    type="text"
                    />
                    </div>
                    <div>
                    <TextField
                    margin="dense"
                    label="Product code"
                    type="text"
                    required
                    onChange={obj => this.setState({code: obj.target.value})}
                    />
                    </div>
                    <div className='propertyName'>Inventory</div>
                    <TextField
                    margin="dense"
                    label="Quantity (Numbers)"
                    type="number"
                    style={styles.inventoryInput}
                    required
                    onChange={obj => this.setState({stock: obj.target.value})}
                    />
                    <TextField
                    margin="dense"
                    label="Expiry date"
                    type="date"
                    InputLabelProps={{shrink: true}}
                    required
                    onChange={obj => this.setState({expiry_date: obj.target.value})}
                    />
                </DialogContent>
                <DialogActions style={styles.buttons}>
                    <Button onClick={this.add} variant="contained" style={styles.addProduct}>
                    Add product
                    </Button>
                    <Button onClick={()=>this.props.history.push('/main')} variant="contained" style={styles.cancelBtn}>
                    Cancel
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        </div>
        );
    }
}

export default Main;
