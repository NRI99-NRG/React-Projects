import React, { useState, useEffect } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import moment from 'moment'
import { API_KEY, value_converter } from '../../data'
import { data, useParams } from 'react-router-dom'



const PlayVideo = () => {

  const {videoId} = useParams();

    const [apidata, setApiData] = useState(null)
    const [channelData, setChannelData] = useState(null)
    const [commentData, setCommentData] = useState([])

    const fetchVideodata = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));

    }

    const fetchOtherData = async () => {
        const channelData_url = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

        const comment_url = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))

    }

    useEffect(() => {
     fetchVideodata();
    }, [videoId])

    useEffect(() => {
      fetchOtherData();
    }, [apidata])
    

    
  if (!apidata) {
    return <div className="loading">Loading video...</div>;
  }
    


  return (
    <div className='play-video'>
       {/* <video src={video1} controls autoPlay muted></video> */}
       <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apidata ? apidata.snippet.title : "Title Here"}</h3>
        <div className="play-video-info">
            <p>{apidata? value_converter(apidata.statistics.viewCount) : "16K"} views &bull; {apidata ? moment(apidata.snippet.publishedAt).fromNow() : ""} </p>
       
        <div>
            <span><img src={like} alt="" />{apidata? value_converter(apidata.statistics.likeCount) : 155 }</span>
            <span><img src={dislike} alt="" /></span>
            <span><img src={share} alt="" />Shared</span>
            <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
        <div>
            <p>{apidata ? apidata.snippet.channelTitle : ""}</p>
            <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
      <p>{apidata ? apidata.snippet.description.slice(0,250) : "Description Here"}</p>
        <hr />
        <h4>{apidata ? value_converter(apidata.statistics.commentCount) : 102} Comments</h4>
        {commentData.map((item, index) => {
            return (
                 <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>

            )

        })}
       
         
      </div>

    </div>
  )
}

export default PlayVideo