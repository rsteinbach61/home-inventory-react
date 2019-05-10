import React, { Component } from 'react';
import Homelist from './Homelist'
class Homes extends Component {



  render() {

    const {houses, deleteHome} = this.props;
    const list = houses.map(house => {
      return(
        <Homelist key={house.id}
          home={house}
          deleteHome={deleteHome}
          like={0}
          />
      )
    })
    return(
      <div>

        <table >
          <tbody>
            <tr>
              <th>Homes</th>
            </tr>
             {list}
           </tbody>
        </table>
      </div>
    )
  }
}

export default Homes
