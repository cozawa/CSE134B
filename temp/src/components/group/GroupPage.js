import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link, IndexLink } from 'react-router';

class GroupPage extends React.Component {
  render() {
    return (
    <div className="grouppage">
        <h2>My groups</h2>
        <div className = "yourgroups">
            <ol id = "groups">
            </ol>
        </div>
        <p>
            Add your group! <br></br>
            <input type = "text" id = "create" placeholder="Enter name here"/>
            <input type = "button" value="Add group" onClick={create}/>
        </p>
    </div>
    );
  }
  
}
function create(){
    var list = document.getElementById("groups");
    var newgroup = document.getElementById("create").value;
    var btn = document.createElement("button");
    var t = document.createTextNode("Delete");
    btn.appendChild(t);
    btn.style.fontSize = "1vw";
    var entry = document.createElement('ol');
    var txt = document.createTextNode(newgroup);
    entry.appendChild(txt);
    entry.appendChild(btn);
    list.appendChild(entry);
    btn.addEventListener("click", function(){entry.parentNode.removeChild(entry);});
}
export default GroupPage;
