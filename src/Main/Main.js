import Garage from '../Garage/Garage';
import React from 'react';
import MyForm from '../MyForm/MyForm';
import MyValid from '../MyValid/MyValid';
import SendData from '../SendData/SendData';
import AuthExample from '../AuthExample/AuthExample';
import MyApp from '../ContextExample/myapp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/garage">Garage</Link>
                            </li>
                            <li>
                                <Link to="/myform">MyForm</Link>
                            </li>
                            <li>
                                <Link to="/myvalid">MyValid</Link>
                            </li>
                            <li>
                                <Link to="/callback">Send data</Link>
                            </li>
                            <li>
                                <Link to="/auth">Fake Auth</Link>
                            </li>
                            <li>
                                <Link to="/context">Context</Link>
                            </li>

                        </ul>
                    </nav>

                    <Switch>
                        {/* <Route path="/">
                            <Main />
                        </Route> */}
                        <Route 
                            path="/garage" 
                            component={Garage}
                            // we jave render for inline components
                            // child like render, but in every situation it will be rendered
                        />
                        <Route path="/myform">
                            <MyForm />
                        </Route>
                        <Route path="/myvalid">
                            <MyValid />
                        </Route>
                        <Route 
                            path="/callback"
                            component={SendData}
                        />
                        <Route 
                            path="/auth"
                            component={AuthExample}
                        />
                        <Route 
                            path="/context"
                            component={MyApp}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }


}


export default Main;

/*
for nested routing
we can use path and url from ureRouteMatch()
we also have useParams for passing param to a url
<Link to={`${url}/rendering`}> something </Link> 

in switch part we have
<Route path=`${path}/:topicId`>
</Rotue>


also we have Redirect class
<Redirect to="/somewhere/else/" />
*/


// sending data to child is really easy only use the props option
// but for reverse sending we have to use callback