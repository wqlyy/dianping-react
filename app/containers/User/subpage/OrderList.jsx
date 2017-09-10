import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderListData ,postComment} from '../../../fetch/user/orderlist'

import OrderListComponent from '../../../components/OrderList'

import './style.less'

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                        ? <OrderListComponent submitComment={this.submitComment.bind(this)} data={this.state.data}/>
                        : <div>加载中...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取订单数据
        const username = this.props.username;
        if (username) {
            this.loadOrderList(username)
        }
    }
    // 提交评价
    submitComment(id,value,callback){
        const result = postComment(id,value);
        result.then(res=>{
           return res.json()
        }).then(json=>{
            if(json.errno===0){
                //已经提交，修改状态
                callback()
            }
        })
    }
    loadOrderList(username) {
        const result = getOrderListData(username)
        result.then(res => {
            return res.json()
        }).then(json => {
            // 获取数据
            this.setState({
                data: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('用户主页“订单列表”获取数据报错, ', ex.message)
            }
        })
    }
}

export default OrderList