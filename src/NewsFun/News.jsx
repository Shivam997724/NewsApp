import React, { useEffect,useState} from 'react'
import NewItem from './NewsItem'
import Sppiner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export const News = (props)=> {
 const [articles, setArticles] = useState([])
 const [loading ,setLoading] = useState(true)
 const [page,setPage] = useState(1)
 const [ totalResults,setTotalResults] = useState(0)
   
  
//     document.title=`${props.category} - DayByDayNews`

 const updateNews = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15dbff5b5dd44135ab569698ac24050f&page=${page}&pageSize=${props.page}`
     setLoading(true);
    let data= await fetch(url);
    let convertdata = await data.json()
    // console.log(convertdata);
    setArticles(convertdata.articles)
    setTotalResults(convertdata.totalResults)
    setLoading(false)

  }


  const fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15dbff5b5dd44135ab569698ac24050f&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data= await fetch(url);
    let convertdata = await data.json()
    setArticles(articles.concat(convertdata.articles))
    setTotalResults(convertdata.totalResults)
     
        
  };

  useEffect(()=>{
    updateNews();
  },[])
  

  // const handlePreclick =async() =>{
  //   setPage(page-1)
  //     updateNews();
  // }

  // const handleNextclick = async()=>{
  // setPage(page+1)
  // updateNews()
  // }
 
   
    return (
      <>
       <h1 className='text-center mb-4' style={{marginTop:"85px"}}>Day-by-day-News -Top {props.category} Headlines</h1>
      {loading && <Sppiner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<Sppiner/>}
        > 
        <div className="container">
       <div className='row'>
       {articles.map((element)=>{
         return  <div className="col-md-4"  key={element.url}>
         <NewItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,50):""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} name={element.source.name} />
      </div>
       })}
       </div>
      </div>
      </InfiniteScroll>
      {/* <div className='d-flex justify-content-between'>
      <button type="button" disabled={page<=1} onClick={handlePreclick} class="btn btn-dark"> &larr; Previous</button>
      <button type="button"  disabled={page+1> Math.ceil(totalResults/props.page)} onClick={handleNextclick} class="btn btn-dark">Next &rarr;</button>
      </div> */}
      </>
    )
  
}

export default News;

