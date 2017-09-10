import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

import './style.less'

class OrderList extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    }
    render() {
        const submitComment = this.props.submitComment;
        return (
            <div>
                {this.props.data.map((item,index)=>{
                    return <Item submitComment={submitComment} key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default OrderList