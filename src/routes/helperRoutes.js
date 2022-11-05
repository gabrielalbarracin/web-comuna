import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({componen, ...options}) => {
    const isAuth = false;
    if (!isAuth) return <Route {...options} component={componen}/>
    return <Redirect to="/"/>
}

export default PublicRoute;
