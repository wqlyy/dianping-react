import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import RouteMap from './router/routerMap';
import configureStore from './store/configureStore'

// 创建 Redux 的 store 对象
const store = configureStore();
//引入公共样式
import Perf from 'react-addons-perf';
if(__DEV__){
    // alert(1);
    window.Perf = Perf
}
render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>
    ,document.getElementById('root')
);