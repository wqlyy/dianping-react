import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'


class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userInfo = this.props.userinfo;
        return (
            <div>
                <Header title="用户主页" backRouter="/"/>
                <UserInfo username={userInfo.username} city={userInfo.cityName}/>
                <OrderList username={userInfo.username}/>
            </div>
        )
    }
    componentDidMount(){
        if(!this.props.userinfo.username){
            hashHistory.push('/Login')
        }
    }
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {}
}
// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)