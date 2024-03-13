import React, { useEffect, useState } from 'react'
import './QuotesApp.css'
import twitter_icon from '../Assets/twitter-x.png'
import reload_icon from '../Assets/reload.png'

const QuotesApp = () => {
 
    let quotes = [];
    const [data, setData] = useState([])
    async function loadQuotes() {
       
       let category = 'happiness';
        const url = 'https://api.api-ninjas.com/v1/quotes?category=' + category;
        const options = {
            method: 'GET',
            headers: {
                'X-Api-Key': 'mpSb5uErd2Ewcj3/LqrQ4A==jC2FSO7pAiDavZUR',
                // 'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
            },
            contentType: 'application/json',
        };
        
        fetch(url, options)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('data',data);
          setData(data);
        });
        
      
}
    const [quote, setQuote] = useState({

        text: "One day, you will tell people how you pulled yourself out of the ocean when you couldn't even swim. Don't you dare give up on yourself.",
        author: "Xander Scott",
    })

    

    const twitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} -${quote.author.split(',')[0]}`)
    }
    useEffect(()=>{
  
        loadQuotes()
        
    },[]) 
    return (
    <div className='container'>
        
        <div className="">
            {/* {data[0]}hello */}
        </div>
        <div >{data?.map((data, index)=>(
            <div className="" key={index}>

<p className="quote">{data?.quote} hello</p>
<div className="author">- {data?.author}</div>
            </div>
        ))}
        </div>
        <div>
            <div className="line"></div>
            <div className="bottom"></div>
              
              <div className="icons">
                <img src={reload_icon} alt="" height="50px"/>
                <img src={twitter_icon} onClick ={()=>{twitter()}} alt="" height="50px"/>
              </div>
        </div>

    </div>
  )
}

export default QuotesApp