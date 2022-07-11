import React from "react";
import "./TweetInFeed.css";
import golf from "../images/golf.png";
import canoe from "../images/canoe.png";
import { defaultImgs } from "../defaultimgs";
import { Icon } from "web3uikit";

const TweetInFeed = () => {
  return (
    <>
      <div className="feedTweet">
        <img src={defaultImgs[0]} className="profilePic"></img>
        <div className="completeTweet">
          <div className="who">
            suyog
            <div className="accWhen">0x42..314 . 1h</div>
          </div>
          <div className="tweetContent">
            nice to hava my first session of golf
            <img src={golf} className="tweetImg" />
          </div>

          <div className="interactions">
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="messageCircle" />
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="star" />
              12
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="matic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetInFeed;
