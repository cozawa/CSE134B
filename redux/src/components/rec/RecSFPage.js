import React from 'react';
import {Link} from 'react-router';

class RecSFPage extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        imgfile: '',
        name: '',
        description: '',
        list: []
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
    event.preventDefault();
    let temp = this.state.list.slice();
    temp.push(<Recpost
        imgfile={this.state.imgfile}
        name={this.state.name}
        description={this.state.description}
    />);
    this.setState({list:temp});
}

render() {
return (
<tbody>
<h1>Thinking about traveling in San Francisco?</h1>

<ul> {this.state.list.map(function(listValue){
    return <li> {listValue} </li>;
})} </ul>

<h2>Post your recommendations!</h2>

<form>
    <label>
        Photo:
        <input
            name="imgfile"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
        />
    </label>
    <label>
        Name:
        <input
            name="name"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
        />
    </label>
    <label>
        Description:
        <input
            name="description"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
        />
    </label>
    <button onClick={this.handleSubmit}>
        Submit
    </button>
</form>
<br></br>
<h2> Learn more about SF! </h2>
<Link to="/recommenderchat">Recommender Chat</Link>
</tbody>
);}}

function Recpost(props) {
    return (
        <div>
        <div id="imgx">
        <img style={{width:100, height:100}} src={require('./profile.jpg')} alt='error'/>
        </div>
        <div className="name"> {props.name} </div>
        <div className="text"> {props.description} </div>
        </div>
    );
}

export default RecSFPage;