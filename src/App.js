import React from 'react';
import './App.css';
import {useState} from 'react';

const Home = () =>{
  const [blogs, setblogs] = useState ([


    {title:'Suspect in Brooklyn subway train shooting called in the tip that led to his arrest, sources say - CNN',author:' Brynn Gingras',img:'images/breakingNews2.gif',link:'https://www.cnn.com/2022/04/13/us/brooklyn-subway-shooting-wednesday/index.html'},

    {title:'Russian sailors evacuate warship in the Black Sea after Ukraine attack; U.S. will send another $800 million in weapons to Ukraine - CNBC',author:'Ted Kemp',img:"images/breakingNews2.gif",link:'https://www.cnbc.com/2022/04/13/russia-ukraine-live-updates.html'},
    {title:'Effort to Remove Marjorie Taylor Greene From Ballot Can Proceed, Judge Says',author:'Thomas L. Friedman',img:"logo192.png",link:'https://www.nytimes.com/2022/04/18/opinion/china-russia-putin.html'},

  ]);

  return (
    <div className = 'home'>
       <div><h1>Real News</h1></div>
      {blogs.map((blog) => (
        <div className='blog-preview'key= {blog.title}>
          
          <h2>{blog.title}</h2>
          <h3>Written by {blog.author}</h3>
          
          <p><img>src={blog.img} alt='news'</img></p>
                      
          


          <a target="_blank" href={blog.link}rel="nofollow noreferrer">Read Article</a>
          
        </div>

      ))}
    </div>  
  );

}
export default Home;

