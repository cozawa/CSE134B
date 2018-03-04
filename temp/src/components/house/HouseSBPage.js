import React from 'react';
import {Link} from 'react-router';

class HouseSBPage extends React.Component {

constructor(props) {
    super(props);
    this.state = {
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
        name={this.state.name}
        description={this.state.description}
    />);
    this.setState({list:temp});
}

render() {
return (
<tbody>
<h1>Looking for housing in Santa Barbara?</h1>

<ul> {this.state.list.map(function(listValue){
    return <li> {listValue} </li>;
})} </ul>

<h2>Post a listing!</h2>

<form>
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
</tbody>
);}}

function Recpost(props) {
    return (
        <div>
        <div className="name"> {props.name} </div>
        <div className="text"> {props.description} </div>
        </div>
    );
}

export default HouseSBPage;