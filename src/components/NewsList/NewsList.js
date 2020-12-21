import React from "react";
import newslistdata from "./newslist.json";

const NewsList = () => (
  <div className="nav-news">
    <ul>
      {newslistdata.newslistitems.map((data, index) => {
        return (
          <li key={`content_item_${index}`}>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              {data.text}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);
export default NewsList;
