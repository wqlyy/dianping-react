import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul>
                {this.props.data.map((item,index)=>{
                    return <li onClick={this.props.deleteFn.bind(this,item.id)} key={index}>{item.value}</li>
                })}
            </ul>
        )
    }
}

export default List;