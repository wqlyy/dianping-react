import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'


class LoadMore extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    }

    loadMoreHandle() {
        //执行传递过来的函数
        this.props.loadMoreFn()
    }

    componentDidMount() {
        //截流
        let timeoutId;
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        function callback() {
           const top = wrapper.getBoundingClientRect().top;//获取DOM元素距离顶部的距离
            const windowHeight = window.screen.height;
            if(top && top < windowHeight){
                // 当wrapper 已经被滚动到暴露在页面的可视范围之内的时候，触发
                loadMoreFn()
            }
        }
        window.addEventListener('scroll',function(){
            if(this.props.isLoadingMore){
                return
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,50)
        }.bind(this),false)
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
}

export default LoadMore