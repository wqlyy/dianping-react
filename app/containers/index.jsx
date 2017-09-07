import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStor from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo'

//父组件
class App extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate();
        this.state = {
            initDone: false
        }
    }

    componentDidMount() {
        // 从localStoreage里面获取城市
        let cityName = LocalStor.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京'
        }
        // console.log(cityName);
        //将城市信息存储到 Redux 中
        this.props.userInfoActions.update({
            cityName: cityName
        });

        this.setState({
            initDone: true
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone ? this.props.children : <div>加载中...</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}
// export default App
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)