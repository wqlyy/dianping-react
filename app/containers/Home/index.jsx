import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }
    render(){
        return (
            <h1>hello world</h1>
        )
    }
}

export default Home



//-------------------- redux react 绑定 -------------------
//
// function mapStateToProps(state) {
//     return {
//         userinfo:state.userinfo
//     }
// }
// function mapDispatchToPropos(dispatch) {
//     return {
//
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToPropos
// )(Home)