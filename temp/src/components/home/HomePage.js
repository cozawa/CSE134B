import React from 'react';
import {Link} from 'react-router';
import './home.css';

class HomePage extends React.Component {
  render() {
    return (
<tbody>

<div className="head1">Where to?</div>

<div className="float">
<img src={require('./sd.jpg')} alt='error'/>
<div className="hr">
<div className="par">San Diego</div>
<Link to="/recsd">Recommendations</Link>
<Link to="/housesd">Housing</Link>
</div>
</div>

<div className="float">
<img src={require('./sb.jpg')} alt='error'/>
<div className="hr">
<div className="par">Santa Barbara</div>
<Link to="/recsb">Recommendations</Link>
<Link to="/housesb">Housing</Link>
</div>
</div>

<div className="float">
<img src={require('./la.jpg')} alt='error'/>
<div className="hr">
<div className="par">Los Angeles</div>
<Link to="/recla">Recommendations</Link>
<Link to="/housela">Housing</Link>
</div>
</div>

<div className="float">
<img src={require('./sf.jpg')} alt='error'/>
<div className="hr">
<div className="par">San Francisco</div>
<Link to="/recsf">Recommendations</Link>
<Link to="/housesf">Housing</Link>
</div>
</div>
<br></br><br></br><br></br><br></br><br></br>

</tbody>
    );
  }
}

export default HomePage;
