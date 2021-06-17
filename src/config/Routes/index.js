import React from 'react';
import {Switch,Route} from "react-router-dom";
import {Home,Detail} from '../../pages';

export default function Routes(props) {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/detail/:id">
              <Detail/>
            </Route>
        </Switch>
    );
}
