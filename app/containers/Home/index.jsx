import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import Category from  '../../components/Category'
import Ad from './subpage/ad'

import {connect} from 'react-redux'


class Home extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height:'15px'}}></div>
                <Ad/>
            </div>
        )
    }
}

//-------------------- redux react 绑定 -------------------

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToPropos(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToPropos
)(Home)