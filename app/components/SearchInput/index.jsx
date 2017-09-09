import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={
            value:''
        }
    }
    changeHandle(e){
        this.setState({
            value:e.target.value
        })
    }
    keyUpHandle(e){
        if(e.keyCode !== 13){
            return
        }
        this.props.enterHandle(this.state.value)
    }
    componentDidMount(){
        this.setState({
            value:this.props.value || ""
        })
    }
    render(){
        return (
            <input onKeyUp={this.keyUpHandle.bind(this)} onChange={this.changeHandle.bind(this)} className="search-input" placeholder="请输入关键字" value={this.state.value} type="text"/>
        )
    }
}

export default SearchInput