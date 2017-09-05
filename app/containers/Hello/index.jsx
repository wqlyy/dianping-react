import React from 'react';

import Carousel from './subpages/Carousel';
import List from './subpages/List';
import Recommend from './subpages/Recommend';

import Header from '../../components/Header'


class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state={
            now:Date.now(),
            arr:[]
        }
    }
    componentDidMount(){

    }
    componentDidUpdate(prevProps,prevState){
      alert(1)
    }
    render() {
        return (

            <div>
                {this.state.arr.length}
                <Header title="代码分离测试,Hello页面" aaa="abc"/>
                <p onClick={this.test.bind(this)}>点我{this.state.now}</p>
                <Carousel/>
                <List/>
                <Recommend/>
                <hr/>
                <ul>
                    {this.state.arr.length===0?<p>loading....</p> : this.state.arr.map((item,index)=>{return <li key={index}>{item}</li>})}
                </ul>
            </div>
        )
    }
    test(){
        this.setState({
            now:Date.now()
        })
    }
}

export default Hello;