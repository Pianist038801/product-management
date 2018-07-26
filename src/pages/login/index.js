import React, {Component} from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  loginButton: {
    backgroundColor: '#3DA56B',
    color: 'white',
  },
  forgotButton: {
    fontSize: '14px',
    fontColor: 'red',
    backgroundColor: 'transparent',
    borderWidth:'0px',
    cursor: 'pointer',
  },
}
class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="bg">
          <div className='logo'/>
          <span className='title'>Inventory management software for growing businesses.</span>
          <span className='description'>Increase your sales and keep track of every unit.</span>
          <span className='bottomEmail'>support@awesome.com</span>
        </div>
        <div className="loginForm">
          <span className='loginTitle'>Login</span>
          <TextField
            required
            label="Email"
            type="email"
            className="email"
            margin="normal"
            onChange={obj => this.setState({email: obj.target.value})}/>
          <TextField
            required
            label="Password"
            type="password"
            margin="normal"
            className="password"
            onChange={obj => this.setState({pass: obj.target.value})}/>
          <Button onClick={()=>this.props.history.push('/main')} variant="contained" className='loginButton' style={styles.loginButton}>
            Login
          </Button>
          <button variant="text" className='forgotPassword' style={styles.forgotButton}>
            Forgot password?
          </button>
        </div>
      </div>
    );
  }
}

export default Login;