import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }
    render(){
        return (
            <h1>Detail</h1>
        )
    }
}

module.exports = Detail