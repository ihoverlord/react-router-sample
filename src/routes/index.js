import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useLocation, Redirect } from "react-router-dom";
// import components here for the router
import Home from '../Components/home'
import Dashboard from '../Components/dashboard'
import Profile from '../Components/profile'

const RouterFile = () => {

   const routes = {
      '/default': {
         component: Home
      },
      '/dashboard': {
         component: Dashboard
      },
      '/profile': {
         component: Profile
      }
   }
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <DefineRoutes routes={routes} />
         </Switch>
      </Router>
   );
}

const DefineRoutes = ({ routes }) => {
   const paths = Object.keys(routes)
   let location = useLocation();
   // console.log({ location, has: routes[location.pathname] })
   if (!routes.hasOwnProperty(location.pathname)) return <Redirect to="/" />
   if (paths && paths.length > 0) {
      return (
         <>
            {paths.map(path => <Route path={path} key={path} component={routes[path].component} />)}
         </>
      )
   }

}

export default RouterFile;