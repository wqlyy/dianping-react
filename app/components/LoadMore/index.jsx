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

    render() {
        return (
            <div className="load-more">
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