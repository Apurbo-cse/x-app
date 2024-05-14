/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react';

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);

  useEffect(() => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
      .then(response => response.json()) // Parse the JSON response
      .then(data => setNews(data.articles)) // Set the articles in state
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2'>
      <h4 className="font-bold text-xl px-4">Whats happening </h4>
      {news.slice(0, articleNum).map(article => (
        <a href={article.url} traget='_blank' key={article.url} className="flex gap-4 p-2 items-center justify-between hover:bg-gray-50">
          <img
            src={article.urlToImage} // Changed to urlToImage from urlImage
            className="w-16 h-16 object-cover rounded-lg"
            alt={article.title} // Changed to title from urlImage
          />
          <div>
            <h6 className="font-bold  text-gray-500 text-sm">{article.title}</h6>
            <p className='text-xs text-gray-500'>{article.source.name}</p>
          </div>
        </a>
      ))}


      <button
      className="w-full py-2 bg-gray-200 hover:bg-gray-300 transition duration-200"
       onClick={() => setArticleNum(articleNum + 3)}>Load more</button>
    </div>
  );
}
