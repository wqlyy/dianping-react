import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    changeValue(event){
        this.setState({
            value:event.target.value
        })
    }
    keyUpHandler(e){
        const value = this.state.value;
        if(e.keyCode==13){
            this.props.submitFn(value);
            this.setState({
                value:''
            })
        }
    }
    render(){
        return (
            <input type="text" value={this.state.value} onKeyUp={this.keyUpHandler.bind(this)} onChange={this.changeValue.bind(this)}/>
        )
    }
}

export default Input;