import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import BuyAndStore from '../../../components/BuyAndStore'
import * as storeActionsFromFile from '../../../actions/store'

class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            isStore:false
        }
    }
    componentDidMount(){
        // 验证当前商户是否收藏
        this.checkStoreState()
    }
    checkStoreState(){
        //检验是否已收藏
        const id = this.props.id;
        const store = this.props.store;
        // some 只要有一个满足即可
        //forEach也能实现
        /*store.forEach(item=>{
            if(item.id === id){
                this.setState({
                    isStore:true
                });
                return false
            }
        });*/
        store.some(item=>{
            if(item.id===id){
                this.setState({
                    isStore:true
                });
                return true;//跳出循环
            }
        })
    }
    storeHandle(){
        //收藏事件
        // 1.是否登录
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return;
        }
        //2.收藏
        const id = this.props.id;
        const storeActions = this.props.storeActions;
        console.log(storeActions);
        if(this.state.isStore){
            //已经收藏，点击即取消收藏
            storeActions.remove({
                id:id
            })
        }else{
            // 未收藏，点击收藏
            storeActions.add({id:id})
        }
        // 3.修改状态
        this.setState({
            isStore:!this.state.isStore
        })
    }
    buyHandle(){
        //购买事件
        // 1.是否登录
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }
        /*2.购买流程 todo:暂时省略...*/

        //3.跳转用户主页
        hashHistory.push('/User')
    }
    // 验证登录
    loginCheck(){
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if(!userinfo.username){//没有登录
            hashHistory.push('/Login/'+encodeURIComponent('/detail/'+id));
            return false
        }
        return true;
    }
    render() {
        return (
            <div>
                <BuyAndStore buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)} isStore={this.state.isStore}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo,
        store:state.store
    }
}
function mapDispatchToProps(dispatch) {
    return {
        storeActions:bindActionCreators(storeActionsFromFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)