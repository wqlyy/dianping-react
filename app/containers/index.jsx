import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//父组件
class App extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate();
        this.state = {
            initDone:false
        }
    }
    render(){
        return (
            <div>{this.props.children}</div>
        )
    }
}
export default App