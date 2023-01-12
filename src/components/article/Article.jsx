import React from 'react';
import './article.css';

function Article({imgUrl, date, title}) {
  return (
    // Define Article item card
    <div className='gpt3__blog-container_article'>
      {/* Article card image */}
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt='blog'/>
      </div>
      {/* Article card description */}
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        {/* Article card link */}
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article