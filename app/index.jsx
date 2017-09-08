import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import RouteMap from './router/routerMap';
import configureStore from './store/configureStore'
import Perf from 'react-addons-perf';

//引入公共样式
import './static/css/common.less'
import './static/css/font.css'

if(__DEV__){//性能优化用
    // alert(1);
    window.Perf = Perf
}

// 创建 Redux 的 store 对象
const store = configureStore();


render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>
    ,document.getElementById('root')
);