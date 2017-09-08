import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import ListComponent from '../../../components/List'
import './style.less'

class List extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data:[],
            hasMore:false
        }
    }
    loadFirstPageData(){//获取第一页数据
        const cityName = this.props.cityName;
        const reslut = getListData(cityName,0);
       this.resultHandle(reslut)
    }
    resultHandle(result){
        result.then(res=>{
            return res.json()
        }).then(json=>{
            const hasMore = json.hasMore;
            const data = json.data;
            this.setState({
                hasMore:hasMore,
                data:data
            })
        })
    }
    componentDidMount(){
        //获取首页数据
        this.loadFirstPageData()
    }
    render() {
        return (
         <div>
            <h2 className="home-list-title">猜你喜欢</h2>
             {
                 this.state.data.length
                 ? <ListComponent data={this.state.data}/>
                     : <div>加载中...</div>
             }

         </div>
        )
    }
}

export default List