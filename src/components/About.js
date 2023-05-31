import React from "react";
import Links from "./Links";


function About(user) {
 // console.log(bio)
 /* const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      } */

 const unKnowBio= user.bio;
 //console.log(unKnowBio.length)
  return (
    <div id="about">
      <h2>About Me</h2>
      {unKnowBio && unKnowBio.length > 0 && 
      <p>{unKnowBio}</p>
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      <Links github={user.github} linkedin={user.linkedin}/>
    </div>
  );
}

export default About;
