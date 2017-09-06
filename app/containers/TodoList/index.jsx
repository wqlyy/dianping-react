import React from 'react';
import Input from '../../components/Input';
import List from '../../components/List';


class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todos:[]
        }
    }
    submitFn(value){
        const id = this.state.todos.length;
        // this.state.todos.push({//push返回新的数组长度
        //     id:id,
        //     value:value
        // });
        if(value!==""){
            this.setState({
                todos:this.state.todos.concat({
                    id:id,
                    value:value
                })
            })
        }

    }
    deleteFn(id){
        const data = this.state.todos;
        this.setState({
            todos:data.filter((item=>{
                if(id !== item.id){
                    return item
                }
            }))
        })
    }
    render(){
        return (
            <div>
                <Input submitFn={this.submitFn.bind(this)}/>
                <List data={this.state.todos} deleteFn={this.deleteFn.bind(this)}/>
            </div>
        )
    }
}
export default TodoList;