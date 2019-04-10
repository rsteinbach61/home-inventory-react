import React, { Component } from 'react';
import Homelist from './Homelist'
class Homes extends Component {



  render() {

    const {houses, deleteHome} = this.props;
    const list = houses.map(house => {
      return(
        <Homelist key={house.id}
          home={house}
          deleteHome={deleteHome}/>
      )
    })
    return(
      <div>

        <table >
          <tr>
            <th>Homes</th>
          </tr>
           {list}
        </table>
      </div>
    )
  }
}

export default Homes
