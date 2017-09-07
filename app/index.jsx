import React from 'react';
import { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Hello from './containers/Home';
//引入公共样式
import Perf from 'react-addons-perf';
import Home from "./containers/Home/index";
if(__DEV__){
    // alert(1);
    window.Perf = Perf
}
render(<Home/>,document.getElementById('root'));