### React Routing sample


Sample project to test defining routes with JSON and handle redirecting on 404

1. Define routes in a JSON

```
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
```

2. Create a function to define routes dynamically

```
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
```
This function handles 404 and redirects the user to `/`

3. Define router and import the routes

```
<Router>
 <Switch>
  <Route exact path="/" component={Home} />
  <DefineRoutes routes={routes} />
 </Switch>
</Router>
```
