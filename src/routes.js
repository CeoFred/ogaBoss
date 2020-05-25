/**
 * /* eslint-disable react/prop-types
 *
 * @format
 */

import React,{ Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
// import Layout from './containers/public/Layout/index.jsx';

import PageNotFound from './containers/Public/404'

import * as APP_URL from './config/route_url'

const Home = React.lazy(() => import('./containers/Public/index.jsx'));
const Login = React.lazy(() => import('./containers/Authentication/login.jsx'));
const Register = React.lazy(() => import('./containers/Authentication/register.jsx'));

function Routes(props){
    
    let routes = (
        <Switch>

        <Route exact path={APP_URL.HOME}><Home /></Route>
         <Route exact path={APP_URL.LOGIN}><Login /></Route>
         <Route exact path={APP_URL.REGISTER}><Register /></Route>

            <Route component={PageNotFound} />
        </Switch>
    )
    return <React.Fragment><Suspense fallback="loading..">{routes}</Suspense></React.Fragment>
}
export default Routes;

