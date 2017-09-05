import React from 'react';
import { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Hello from './containers/Hello';
//引入公共样式
import Perf from 'react-addons-perf';
if(__DEV__){
    // alert(1);
    window.Perf = Perf
}
render(<Hello/>,document.getElementById('root'));