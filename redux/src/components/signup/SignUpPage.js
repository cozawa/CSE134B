import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import signUp from '../../actions/signupactions';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email:'',
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();

        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const user = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        };
        this.props.signUp(user);

    }

    render() {
    return (
    <div className="signuppage">
        <h1 style={{textAlign:'center', fontSize:'3vw'}}>Make an account</h1>
        <form name="signup">
            Username:<br></br>
            <input 
                type="text" 
                name="name" 
                value={this.state.value}
                onChange={this.handleChange}/>
            <br></br>Password:<br></br>
            <input 
                type="password" 
                name="password"
                value={this.state.value}
                onChange={this.handleChange}/>
            <br></br>E-mail<br></br>
            <input 
                type="text" 
                name="email"
                value={this.state.value}
                onChange={this.handleChange}/>
            <br></br>
            
            <button onClick={this.handleSubmit}>
                Submit
            </button>
            <input type="reset"/>
        </form>
        
    </div>
    );
  }
  
}

function userInfo(props) {
    return (
        <div>
        <div className="name"> {props.name} </div>
        <div className="password"> {props.password} </div>
        <div className="email"> {props.email} </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signUp: signUp
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);