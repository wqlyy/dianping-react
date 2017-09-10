import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import * as UserInfoActionsFromOtherFile from '../../actions/userinfo'
import Header from '../../components/Header'
import LoginCompoent from '../../components/Login'


class Login extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            checking:true
        }
    }
    render(){
        return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checking
                        ?<div>。。。</div>
                        : <LoginCompoent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount(){
        this.doCheck()
    }
    //登录成功的处理
    loginHandle(username){
        //保存用户名
        const actions = this.props.userInfoActions;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        actions.update(userinfo);

        // 跳转链接
        const params = this.props.params;
        const router = params.router;
        if(router){
            hashHistory.push(router)
        }else {
            //默认页
            this.goUserPage();
        }
    }
    doCheck(){
         const userinfo = this.props.userinfo;
         if(userinfo.username){
             //已经登录
             this.goUserPage()
         }else{
            // 尚未登录
             this.setState({
                 checking:false
             })
         }
    }
    goUserPage(){
        hashHistory.push('/User')
    }
}

// ------------------  redux react 绑定 -----------------

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions:bindActionCreators(UserInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)