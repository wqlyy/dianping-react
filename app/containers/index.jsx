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
    componentDidMount(){
        setTimeout(function(){
            this.setState({
                initDone:true
            })
        }.bind(this),3000)
    }
    render(){
        return (
            <div>
                {
                    this.state.initDone?this.props.children: <div>加载中...</div>
                }
            </div>
        )
    }
}
export default App