import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render(){
        var cityListArr = [
            {
                id:1,
                name:'北京'
            },
            {
                id:2,
                name:'上海'
            },
            {
                id:3,
                name:'杭州'
            },
            {
                id:4,
                name:'广州'
            },
            {
                id:5,
                name:'苏州'
            },
            {
                id:6,
                name:'深圳'
            },
            {
                id:7,
                name:'南京'
            },
            {
                id:8,
                name:'天津'
            },
            {
                id:9,
                name:'重庆'
            },
            {
                id:10,
                name:'厦门'
            },
            {
                id:11,
                name:'武汉'
            }
        ]
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    {cityListArr.map((item,index)=>{
                        return  <li key={index}><span onClick={this.clickHandle.bind(this, item.name)}>{item.name}</span></li>
                    })}
                </ul>
            </div>
        )
    }
    clickHandle(newCity){
        const changeFn = this.props.changeFn;
       changeFn(newCity)
    }
}

export default CityList