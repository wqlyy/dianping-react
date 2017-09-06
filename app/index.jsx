import React from 'react';
import { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TodoList from './containers/TodoList';
//引入公共样式
import './static/common.less'
import Perf from 'react-addons-perf';

console.log(__DEV__);//是否开发环境
if(__DEV__){
    window.Perf = Perf
}
render(<TodoList/>,document.getElementById('root'));