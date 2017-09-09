import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

// import './style.less'

const initialState = {
    data: [],//存储列表信息
    hasMore: false,//记录当前状态下有无更多数据可以加载
    isLoadingMore: false,//记录当前状态下，是“加载中...”还是“加载更多”
    page: 0 //记录下一页页码
}
class List extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = initialState
    }

    loadFirstPageData() {//获取第一页数据
        const cityName = this.props.cityName;
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const reslut = getListData(0, cityName, category, keyword);
        this.resultHandle(reslut)
    }

    loadMoreData() {//获取更多数据
        //记录状态
        this.setState({
            isLoadingMore: true
        });
        const cityName = this.props.cityName;
        const page = this.state.page;//下一页的页码
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const reslut = getListData(page, cityName, category, keyword);
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

    componentDidUpdate(prevProps,prevState) {
        // 重新搜索后走的是组件更新方法
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        //搜索条件完全相等时，忽略本次搜索请求
        if(keyword === prevProps.keyword && category === prevProps.category){
            return
        }
        //重置state
        this.setState(initialState);//有bug
        //重新加载数据
        this.loadFirstPageData()
    }

    render() {
        return (
            <div>
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