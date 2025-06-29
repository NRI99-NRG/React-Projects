import React, { useState, useEffect } from 'react';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    try {
      const res = await fetch(relatedVideo_url);
      const data = await res.json();
      setApiData(data.items || []);
    } catch (error) {
      console.error("Failed to fetch recommended videos", error);
    }
  };

  useEffect(() => {
    if (categoryId) {
      fetchData();
    } else {
      console.warn("categoryId is undefined — skipping fetch.");
    }
  }, [categoryId]);

  return (
    <div className='recommended'>
      {apiData.length === 0 && <p>No recommended videos found.</p>}
      {apiData.map((item, index) => {
        return (
         <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} views</p>
          </div>
        </Link>
        )
        })}
    </div>
  );
};

export default Recommended;
