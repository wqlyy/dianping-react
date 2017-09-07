import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class User extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }
    render(){
        return (
            <h1>User</h1>
        )
    }
}

module.exports = User