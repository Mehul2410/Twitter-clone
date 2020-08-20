import React, { useState } from 'react'
import "./Tweetbox.css"
import {Avatar , Button } from '@material-ui/core';
import db from "./firebase"
const Tweetbox = () => {
    const [tweetMessage , setTweetMessage ] = useState("");
    const [tweetImage , setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Mehul Gawhale',
            username: 'mehulgawhale',
            verified: true ,
            text: tweetMessage,
            image : tweetImage,
            avatar:" ",
        });

        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                   
                 <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png " />
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value= {tweetMessage} placeholder=" whats happening?" type="text" />
               
                </div>
                <input 
                className="tweetbox__imageInput" 
                onChange={(e) => setTweetImage(e.target.value)}
                value = {tweetImage}
                placeholder="Optional: enter img url"
                 type="text" />
                <Button
                 onClick={sendTweet}
                type="submit" 
                className="tweetbox__tweetButton">
                    Tweet
                    </Button>
            </form>
            
        </div>
    )
}

export default Tweetbox
