import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  articles = []

  static defaultProps={
    country:'in',
    category:'general',
    pagesize:12
  }

  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pagesize:PropTypes.number
  }
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults:0
    }
   
  }
   
  
  

  async componentDidMount() {
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b43b40f1bbc74c27a00b0c4613692fb2&page=${this.state.page}&pagesize=${this.props.pagesize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles ,
    totalResults:parsedData.totalResults,
    loading:false
      })
  }

  handleNextReq = async () => {
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b43b40f1bbc74c27a00b0c4613692fb2&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles ,
      page:this.state.page+1,
      loading:false
    })
    
  }

  handlePrevReq = async () => {
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b43b40f1bbc74c27a00b0c4613692fb2&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles ,
      page:this.state.page-1,
      loading:false
    })
    
  }
  render() {
    return (
      <div>
        <div className='container'>
          <h2 className='mt-3'>InforMedia - Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <div className='row'>
            {!this.state.loading && this.state.articles.map((element) => {
              return <div key={element.url} className="col-lg-3 col-md-6 col-sm-12">
                <Newsitem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 95):"Click Read More button to read the news"} imageUrl={element.urlToImage?element.urlToImage:"https://static.india.com/wp-content/uploads/2022/04/6c0003db-d460-4078-ad84-10cec56d1092.jpg"} newUrl={element.url} />
              </div>

            })}
          </div>
          <div className='my-3 d-flex justify-content-between'>
            <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevReq} className=" btn btn-dark">Previous</button>
            <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pagesize)} onClick={this.handleNextReq} className="btn btn-dark">Next</button>
          </div>
        </div >
      </div >
    )
  }
}
