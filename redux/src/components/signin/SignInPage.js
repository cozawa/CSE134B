import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import { Link, IndexLink } from 'react-router';
import signIn from '../../actions/signinactions';
import { bindActionCreators } from 'redux';

class SignInPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            name: '',
            password: ''
        };
        //this.onSubmit = this.onSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        };
        this.props.signIn(user);

    }

    componentDidMount(){

    }

  render() {

    return (
    <div className="signinpage">
        <h1 style={{textAlign:'center', fontSize:'3vw', color:'white'}}>Sign-in</h1>
        <form id="signin" >
            Username:<br></br>
            <input type="text" id="userid" onChange={e=> this.setState({name: e.target.value})} value={this.state.value}/>
            <br></br>Password:<br></br>
            <input type="password" id="psw" onChange={e => this.setState({password: e.target.value})} value={this.state.value}/>
            <br></br>
            <input type="button" value="Submit" onClick={this.handleSubmit}/>
            <input type="reset"/>
        </form>
        
        <p>
            Don't have an account yet? <Link to="/signup">Sign up!</Link> 
            {this.props.curruser}
        </p>
    </div>
    );
  }
  
}

function send(){
    /*let {username, password} = this.state;
    this.props.login(username, password);
    this.setState({
        username: '',
        password: ''
    });*/
	/*if(document.getElementById("userid").value==""||document.getElementById("psw").value==""){
        alert('You must fill in a username and password.');
    }
    else{
        let pass = localStorage.getItem(document.getElementById("userid").value);
        if(pass==null){
            alert("This account does not exist. Please create a new account.");
        }
        else if(pass == document.getElementById("psw").value){
            window.location.href = "/group";
            
        }
        else{
            alert("Wrong password.");
        }
    }*/
}

/*const mapStateToProps = (state) => {
    return{
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        login: (username,password) => dispatch(login(username, password))
    };
}*/

function mapStateToProps(state) {
    return {
        curruser: state.curruser
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signIn: signIn
    }, dispatch);
}

//export default SignInPage;
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);