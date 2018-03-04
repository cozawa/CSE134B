import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email:'',
            list: [],
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    
    handleSubmit(event) {
        //event.preventDefault();
        let temp = this.state.list.slice();
        let temperrors={};
        if(this.state.name != "" && this.state.password !=""){
            
            temp.push(<userInfo
            name={this.state.name}
            password={this.state.password}
            email={this.state.email}
            />);
            this.setState({list:temp});
            store();
        }
        else{
            temperrors.title='You must enter a username and password';
            this.setState({errors:temperrors});
            alert("You must enter a username and password");
        }
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

function store() {
    if(document.forms["signup"].elements["name"].value == "" || document.forms["signup"].elements["password"].value == ""){
        alert("You must enter a username and password.");
    }
    else{
        localStorage.setItem(String(document.forms["signup"].elements["name"].value), String(document.forms["signup"].elements["password"].value));
        alert("You have successfully made an account! Please proceed to the log in page.");
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
export default SignUpPage;
