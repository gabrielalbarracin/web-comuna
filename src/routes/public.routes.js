import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import HomeView from '../views/HomeViews';
import InfoUtilView from '../views/InfoUtilView';
import LoginView from '../views/LoginView';
import TeEscuchamosView from '../views/TeEscuchamosView';
import ViewNews from '../views/ViewNews';
import PublicRoute from './helperRoutes'


const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exac path="/infoutil" componen={InfoUtilView}/>
            <PublicRoute exac path='/noticias' componen={ViewNews} />
            <PublicRoute exac path='/te_escuchamos' componen={TeEscuchamosView} />
            <PublicRoute exac path='/login' componen={LoginView} />
            <PublicRoute exac path="/" componen={HomeView}/>
            <Redirect path='/**' to='/'/>
        </Switch>
    )
}

export default PublicRoutes;