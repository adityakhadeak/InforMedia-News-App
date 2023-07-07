import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

  static defaultProps = {
    country: 'in',
    category: 'general',
    pagesize: 12
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

  async componentDidMount() {
    this.props.setProgress(15)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    this.props.setProgress(40)
    let parsedData = await data.json()
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100)
  }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${  this.state.page + 1}&pagesize=${this.props.pagesize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1
    })
    console.log(this.state.totalResults)
    console.log(this.state.articles.length)
  };
  
  render() {
    return (
      
      <div>
        {console.log("in info")}
        <div className='container'>
          <h2 className='mt-3'>{`InforMedia - Top ${this.capitalize(this.props.category)} Headlines`}</h2>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className='container'>
              <div className='row' >
                {this.state.articles.map((element) => {
                  return <div key={element.url} className="col-lg-3 col-md-6 col-sm-12">
                    <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 95) : "Click Read More button to read the news"} imageUrl={element.urlToImage ? element.urlToImage : "https://static.india.com/wp-content/uploads/2022/04/6c0003db-d460-4078-ad84-10cec56d1092.jpg"} newUrl={element.url} author={element.author} publishedAt={element.publishedAt} headName={element.source.name} />
                  </div>

                })}
              </div>
            </div>
          </InfiniteScroll>
        </div >
      </div >
    )
  }
}
