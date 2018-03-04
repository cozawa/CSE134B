import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link, IndexLink } from 'react-router';

class SignInPage extends React.Component {
  render() {
    return (
    <div className="signinpage">
        <h1 style={{textAlign:'center', fontSize:'3vw', color:'white'}}>Sign-in</h1>
        <form id="signin">
            Username:<br></br>
            <input type="text" id="userid" />
            <br></br>Password:<br></br>
            <input type="password" id="psw"/>
            <br></br>
            <input type="button" value="Submit" onClick={send}/>
            <input type="reset"/>
        </form>
        <p>
            Don't have an account yet? <Link to="/signup">Sign up!</Link>
        </p>
    </div>
    );
  }
  
}

function send(){
	if(document.getElementById("userid").value == "" || document.getElementById("psw").value == ""){
    	alert("You must fill in a username and password.");
    }
    else{
		var pass = localStorage.getItem(document.getElementById("userid").value);
    	if(pass == null){
    		alert("This account does not exist. Please create a new account.");
    	}
    	else if(pass == document.getElementById("psw").value){
            window.location.href = "your_groups.html";
    	}
    	else{
    		alert("Wrong password.");
    	}
    }
}

export default SignInPage;
