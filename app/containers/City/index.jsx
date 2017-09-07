import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class City extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }
    render(){
        return (
            <h1>city</h1>
        )
    }
}
export default City