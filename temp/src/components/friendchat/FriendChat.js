import React from 'react';
import '../../styles/styles.css';

class FriendChat extends React.Component {

    send() {
        let mybox = document.getElementById('mybox');
        let cln = mybox.cloneNode(true);
        let mytext = document.getElementById('message').value;
        let objTo = document.getElementById('chat');
        let divTest = document.createElement("div");
        let myImage = require('./f12ff798e424cfa4bbebc8624a31c3ee.jpg');
        let html = '<img src={' + myImage + '} alt="Avatar" classname="right" />' + '<p>' + mytext + '</p>' +
    '<span class="time-left">11:01</span>';
        //let html = '<p>' + mytext + '</p>' +
        cln.innerHTML = html;
        //cln.innerHTML = mytext;
        //objTo.appendChild(divTest);
        objTo.appendChild(cln);
        }

    render() {
        return (
            <div>
                <h1>Chat with Friend Group</h1>
                <div className="chat" id="chat">
                    <div className="container">
                    <img src={require('./tumblr_ov79coGBC61vy2tgqo4_400.png')} alt="Avatar" />
                            <p>Hi!</p>
                        <span className="time-right">11:00</span>
                    </div>

                    <div className="container darker" id="mybox">
                    <img src={require('./f12ff798e424cfa4bbebc8624a31c3ee.jpg')} alt="Avatar" className="right"/>
                        <p>Where should we head?</p>
                        <span className="time-left">11:01</span>
                    </div>
                </div>

                <div className="text text-r">
                    <input type="text" className="mytext" name="message" id="message" placeholder="Type a message"/>
                    <input type="Button" value="Send message" onClick={this.send} />
                </div>      
                {/*<div className="chat" id="chat">
                    <div className="container">
                        <img src="images/tumblr_ov79coGBC61vy2tgqo4_400.png" alt="Avatar" style="width:100%;" />
                        <p>Hi!</p>
                        <span className="time-right">11:00</span>
                    </div>
                    
                    <div className="container darker" id="mybox">
                        <img src="images/f12ff798e424cfa4bbebc8624a31c3ee.jpg" alt="Avatar" className="right" style="width:100%;" />
                        <p>Where should we head?</p>
                        <span className="time-left">11:01</span>
                    </div>
                </div>
                
                <div className="text text-r" style="background:whitesmoke !important">
                    <input type="text" className="mytext" name="message" id="message" placeholder="Type a message"/>
                    <input type="Button" value="Send message" onClick="send()" />
                </div>*/}
            </div>
        );
    }
}

export default FriendChat;
