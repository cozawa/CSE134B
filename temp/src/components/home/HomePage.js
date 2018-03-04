import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
<tbody>

<h1>Where to?</h1>

<div className="float">
<img src={"../images/sd.jpg"}/>
<div className="hr">
<p>San Diego</p>
<Link to="/recsd">Recommendations</Link>
<Link to="/housesd">Housing</Link>
</div>
</div>

<div className="float">
<img src={"../images/sb.jpg"}/>
<div className="hr">
<p>Santa Barbara</p>
<Link to="/recsb">Recommendations</Link>
<Link to="/housesb">Housing</Link>
</div>
</div>

<div className="float">
<img src={"../images/la.jpg"}/>
<div className="hr">
<p>Los Angeles</p>
<Link to="/recla">Recommendations</Link>
<Link to="/housela">Housing</Link>
</div>
</div>

<div className="float">
<img src={"../images/sf.jpg"}/>
<div className="hr">
<p>San Francisco</p>
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
