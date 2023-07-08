import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  document.title=`InforMedia-${capitalize(props.category)}`
  const updateNews = async () => {
    props.setProgress(15)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(40)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews()
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pagesize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setPage(page + 1)

  };

  return (
    <div>
      {console.log("in info")}
      <div className={`container text-${props.mode=='light'?"#191919":"light"}`}>
        <h2 style={{marginTop:"70px",marginLeft:"20px"}}>{`InforMedia - Top ${capitalize(props.category)} Headlines`}</h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className='container'>
            <div className='row' >
              {articles.map((element) => {
                return <div key={element.url}  className={`  col-lg-3 col-md-6 col-sm-12`}>
                  <Newsitem mode={props.mode} title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 95) : "Click Read More button to read the news"} imageUrl={element.urlToImage ? element.urlToImage : "https://static.india.com/wp-content/uploads/2022/04/6c0003db-d460-4078-ad84-10cec56d1092.jpg"} newUrl={element.url} author={element.author} publishedAt={element.publishedAt} headName={element.source.name} />
                </div>

              })}
            </div>
          </div>
        </InfiniteScroll>
      </div >
    </div >
  )

}

News.defaultProps = {
  country: 'in',
  category: 'general',
  pagesize: 12
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pagesize: PropTypes.number
}

export default News