import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render(){
        const params = this.props.params;
        return (
           <div>
               <SearchHeader keyword={params.keyword}/>
               <SearchList keyword={params.keyword} categroy={params.category}/>
           </div>
        )
    }
}

export default Search