import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {HeaderWrap} from "./header/Header";
import {HashRouter, Route, Switch} from "react-router-dom";
import {StartPage} from "./startPage/StartPage";
import {StepPage} from './stepPage/StepPage';
import {Content} from "antd/lib/layout/layout";
import {ErrorPage} from "./errorPage/ErrorPage";

function App() {
    return (
        <HashRouter>
            <HeaderWrap/>
            <Switch>
                <Content>
                    <Route exact path='/' component={StartPage}/>
                    <Route exact path='/stepPage' component={StepPage}/>
                    <Route path="/errorPage" component={ErrorPage}/>
                </Content>
            </Switch>
        </HashRouter>
    );
}

export default App;
