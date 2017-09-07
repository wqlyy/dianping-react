import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router'
import RouteMap from './router/routerMap';
//引入公共样式
import Perf from 'react-addons-perf';
if(__DEV__){
    // alert(1);
    window.Perf = Perf
}
render(<RouteMap history={hashHistory}/>,document.getElementById('root'));