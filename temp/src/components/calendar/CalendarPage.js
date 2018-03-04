import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link, IndexLink } from 'react-router';

class CalendarPage extends React.Component {
  render() {
    return (
        <div className = "calendar">
         <h1>Your Calendar</h1>
         
         <div className="month">      
            <ul>
                <li className="prev">&#10094;</li>
                <li className="next">&#10095;</li>
                <li>
                February<br></br>
                <span>2018</span>
                </li>
            </ul>
        </div>
        <div className = "week">
            <ul className = "weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
            </ul>
        </div>
    
        <div className = "day">
            <ul className="days">
                 <li> </li>
                 <li> </li>
                 <li> </li>
                 <li>1</li>
                 <li>2</li>
                 <li>3</li>
                 <li>4</li>
                 <li>5</li>
                 <li>6</li>
                 <li>7</li>
                 <li>8</li>
                 <li>9</li>
                 <li><span classNAme="active">10</span></li>
                 <li>11</li>
                 <li>12</li>
                 <li>13</li>
                 <li>14</li>
                 <li>15</li>
                 <li>16</li>
                 <li>17</li>
                 <li>18</li>
                 <li>19</li>
                 <li>20</li>
                 <li>21</li>
                 <li>22</li>
                 <li>23</li>
                 <li>24</li>
                 <li>25</li>
                 <li>26</li>
                 <li>27</li>
                 <li>28</li>
             </ul>
         </div>
    
         <div id="myDIV" className="header2">
            <h2 >To Do List</h2>
            <input type="text" id="myInput" placeholder="More to do..." style={{color:'black'}}/>
            <span onClick={newElement} className="addBtn">Add</span>
        </div>

         <div className="todo">
             <ul id="myUL">
                 
            </ul>
        </div>
     </div>
    
    );
    
  }
  
}


function newElement() {
    var myNodelist = document.getElementById("myUL").getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

export default CalendarPage;
