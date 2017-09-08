import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: [],//存储列表信息
            hasMore: false,//记录当前状态下有无更多数据可以加载
            isLoadingMore: false,//记录当前状态下，是“加载中...”还是“加载更多”
            page: 1 //记录下一页页码
        }
    }

    loadFirstPageData() {//获取第一页数据
        const cityName = this.props.cityName;
        const reslut = getListData(cityName, 0);
        this.resultHandle(reslut)
    }

    loadMoreData() {//获取更多数据
        //记录状态
        this.setState({
            isLoadingMore: true
        });
        const cityName = this.props.cityName;
        const page = this.state.page;//下一页的页码
        const reslut = getListData(cityName, page);

        this.resultHandle(reslut);
        //增加page的计数
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }

    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore;
            const data = json.data;
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)//数据合并,不能覆盖
            })
        })
    }

    componentDidMount() {
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
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
            </div>
        )
    }
}

export default List