import React, { useState } from 'react'
import twitterlogo from '../components/Assets/twitterlogo.avif'
import reload from '../components/Assets/reload.png'

const RandomQuote=()=> {
  
    let quotes=[];
      
     async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
     }
    
     
    const [quote,setQuote]=useState({
        text:"Difficulties increase the nearer we get to the goal.", 
        author:"Johann Wolfgang von Goethe",
        
    });

    const random = () =>{
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const twitter=()=>{
        window.open(`https://twitter.com/intent/tweet?text=text=${quote.text} - ${quote.author.split(',')[0]}`)
    }

    loadQuotes();
  return (
    <div className='container'>
        <div className='quote'>{quote.text}</div>  
        <div>
            <div className='line'></div>
            <div className='bottom'>
                <div className='author'>- {quote.author.split(',')[0]}</div>
                <div className='icons'>
                    <img src={reload} onClick={()=>{random()}} alt='' className='logo'/>
                    <img src={twitterlogo} onClick={()=>{twitter()}} alt='' className='logo'/>
                </div>
            </div>
        </div>
         
    </div>
  )
}

export default RandomQuote