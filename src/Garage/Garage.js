import React from 'react';
import Car from '../Car/Car';
import 'bootstrap/dist/css/bootstrap.min.css';

class Garage extends React.Component {


    constructor() {
        super();
    }

    render() {
        const myelement = (
            <div className="jumbotron d-flex justify-content-center">
                <table>
                    <thead  className="d-flex justify-content-center" >
                        <tr>
                            <th>
                                <h1>
                                    I am a Garage
                                </h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="d-flex justify-content-center">
                            <td>
                                <Car name="first car"/>
                            </td>
                        </tr>
                        <tr className="d-flex justify-content-center">
                            <td >
                                <Car name="second car"/>
                            </td>
                        </tr>
                    </tbody>
                        
                </table>


            </div>
        );
      return myelement;
    }

}

export default Garage;