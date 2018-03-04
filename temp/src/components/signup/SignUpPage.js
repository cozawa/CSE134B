import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class SignUpPage extends React.Component {
  render() {
    return (
    <div className="signuppage">
        <h1 style={{textAlign:'center', fontSize:'3vw'}}>Make an account</h1>
        <form name="signup">
            Username:<br></br>
            <input type="text" name="userid" />
            <br></br>Password:<br></br>
            <input type="password" name="psw"/>
            <br></br>E-mail<br></br>
            <input type="text" name="email"/>
            <br></br>
            <input type="button" value="Submit" onClick={store}/>
            <input type="reset"/>
        </form>
        
    </div>
    );
  }
  
}

function store() {
    if(document.forms["signup"].elements["userid"].value == "" || document.forms["signup"].elements["psw"].value == ""){
        alert("You must enter a username and password.");
    }
    else{
        localStorage.setItem(String(document.forms["signup"].elements["userid"].value), String(document.forms["signup"].elements["psw"].value));
        alert("You have successfully made an account! Please proceed to the log in page.");
    }
}

export default SignUpPage;
