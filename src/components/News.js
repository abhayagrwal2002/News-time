import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import Spin from './Spin';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{

     const [results,setResults] = useState([]);
     const [loading,setLoading] = useState(true);
     const [page,setPage] = useState(1);
     const [totalResults,setTotalResults] = useState(0);

  
     const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
   
    const updateNews = async()=>{
        props.setProgress(10);
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
        let url =`https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=in&language=en&category=${props.category}&page=${page+1}`
        setLoading(true);       
         let data = await fetch(url);
         props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        // console.log(parsedData);
        setResults(parsedData.results);
        setTotalResults(parsedData.totalResults);
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(()=>{
           document.title = `${capitalizeFirstLetter(props.category)} News-App`
        updateNews();
        //  eslint-disable-next-line
    },[])

    const fetchMoreData = async() => {
      let url =`https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=in&language=en&category=${props.category}&page=${page+1}`;
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}&category=${props.category}`;    
        setPage(page+1);
        console.log(page);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setResults(results.concat(parsedData.results));
        totalResults(parsedData.totalResults);
      };
    return (
        <>
        <h1 className='text-center'style={{margin: "30px 0px", marginTop:"70px"}}><strong>News-App {capitalizeFirstLetter(props.category)} Headlines</strong></h1>
        {loading &&<Spin/>}

       <InfiniteScroll
          dataLength={results.length}
          next={fetchMoreData}
          hasMore={results.length !== totalResults}
          loader={<Spin/>  }
        >
            <div className="container">
        <div className="row">
        {results.map((element)=>{ 
            return <div className="col-md-4">
            <Newsitem title ={element.title} imgUrl={element.image_url} newsUrl={element.link} author={element.creator} date={element.pubDate} source={element.source_id}/>        
        </div>
        })} 
        </div> 
        </div>
        </InfiniteScroll> 
        </> 
    )
  }

News.defaultProps = {
    country:"in",
    pageSize:8,
    category:"general"
  }
News.propTypes ={
    country :propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
  }

export default News
