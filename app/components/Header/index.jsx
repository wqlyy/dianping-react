import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// const Header = React.createClass({
//     getInitialState(){
//         return {
//             aaa:this.props.aaa
//         }
//     },
//     render(){
//         return (
//             <h2>
//                 {this.props.title}--{this.state.aaa}
//             </h2>
//         )
//     }
// })
class Header extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={
            aaa:this.props.aaa,
            now:Date.now()
        }
    }
    render(){
        return (
            <h2 onClick={this.test.bind(this)}>
                {this.props.title}--{this.state.aaa}---{this.state.now}
            </h2>
        )
    }
    test(){
        this.setState({
            now:Date.now()
        })
    }
}
export default Header