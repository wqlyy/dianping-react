import React from 'react';
import { render } from 'react-dom';

//通用样式引入

class Hello extends React.Component{
    render() {
        return <h1>Hello,World!!!</h1>
    }
}

render(
    <Hello/>,
    document.getElementById('root')
)