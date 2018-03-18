import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link, IndexLink } from 'react-router';
//import GroupForm from './GroupForm';

class GroupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
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
        if(this.state.name != ""){
            
            temp.push(<GroupPost
            name={this.state.name}
            />);
            create();
            this.setState({list:temp});
        }
        else{
            temperrors.title='You must enter a group name';
            this.setState({errors:temperrors});
            alert("You must enter a group name");
        }
    }
  render() {
    return (
    <div className="grouppage">
        <h2>My groups</h2>

        <div className = "yourgroups">
            <ol id = "groups"> 
            </ol>
        </div>
        <p>
            
            <form className = "groupform">
                <header>Add your group!</header>
                <input
                    name="name" 
                    type = "text" 
                    id = "create" 
                    placeholder="Enter name here"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                <input 
                    type = "button" 
                    value="Add group" 
                    onClick={this.handleSubmit} />

            </form>
            <br></br>
            <h3>Communicate with your friends!</h3>
            <Link to="/friendchat">Friend Chat</Link>
        </p>
    </div>
    );
  } 
}


function create(){
    let l = document.getElementById("groups");
    let newgroup = document.getElementById("create").value; 
    if(newgroup == ""){
        alert("You must enter a group name");
        return;
    }
    document.getElementById("create").value = "";
    let btn = document.createElement("button");
    let t = document.createTextNode("Delete");
    btn.appendChild(t);
    btn.style.fontSize = "1vw";
    let entry = document.createElement('ol');
    let txt = document.createTextNode(newgroup);
    entry.appendChild(txt);
    entry.appendChild(btn);
    l.appendChild(entry);
    btn.addEventListener("click", function(){entry.parentNode.removeChild(entry);});
}

function GroupPost(props) {
    return (
        <div>
        <div className="name"> {props.name} </div>
        </div>
    );
}

export default GroupPage;
