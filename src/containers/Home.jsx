import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {latestNews} from '../actions'
import LatestNews from '../components/LatestNews';

export class Home extends Component {
    componentDidMount(){
        this.props.latestNews();
    }
    render() {
        return (
            <div>
               <LatestNews latestData={this.props.articles.latest}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
