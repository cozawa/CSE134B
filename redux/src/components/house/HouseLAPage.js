import React from 'react';
import {Link} from 'react-router';

class HouseLAPage extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        imgfile: './house.jpg',
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
    temp.push(<recpost
        imgfile={this.state.imgfile}
        name={this.state.name}
        description={this.state.description}
    />);
    this.setState({list:temp});
}

render() {
return (
<tbody>
<h1>Looking for housing in Los Angeles?</h1>

<ul> {this.state.list.map(function(listValue){
    return <li> {listValue} </li>;
})} </ul>

<h2>Post a listing!</h2>

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
<h3> Learn more about housing in LA! </h3>
<Link to="/housingchat">Housing Chat</Link>
</tbody>
);}}

function recpost(props) {
    return (
        <div>
        <div id="imgx">
        <img style={{width:100, height:100}} src={require("./house.jpg")} alt="error"/>
        </div>
        <div className="name"> {props.name} </div>
        <div className="text"> {props.description} </div>
        </div>
    );
}

export default HouseLAPage;