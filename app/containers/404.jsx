import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }
    render(){
        return (
            <h1>404 not found page</h1>
        )
    }
}

export default NotFound