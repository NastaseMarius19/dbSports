import React, { useState } from 'react';
import { Textarea } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
import ReturnToMainPageButton from "../buttons/ReturnToMainPageButton";
import DbSports from "../logos/DbSports";

import PostChoiceButton from "../buttons/PostChoiceButton";
import UploadPhotoButton from "../buttons/UploadPhotoButton";

function TextField() {
  const[title, setTitle] = useState('');
  const[body,setBody] = useState('');
  const[sport,setSport] = useState('Download');
  const[isPending, setIsPending] = useState(false);

  const handleSubmit= (e) => {
    e.preventDefault();
    const sports = {title,  body, sport};

    setIsPending(true);

    fetch('http://localhost:3000/mainpage', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(sports)
    }).then(() => {

      console.log('new article added');
      setIsPending(false);
    })
  }



  return (
    <div>
      <div className="buttonpostpage">
        <div className="return-btn">
          <ReturnToMainPageButton />
        </div>
        <div>
          <DbSports />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="post-content">
        <div>
        <Text mb="8px" 
        className="posttitle">
          Title
        </Text>
        </div>
        <div>
          
        </div>
        <Textarea
          className="textarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Text mb="8px" className="posttitle" font-size="22px">
          Text Input
        </Text>
        <Textarea className="textfield" size="sm" 
        value={body}
        onChange={(e) => setBody(e.target.value)}/>
        <div>
          <div>
            <PostChoiceButton 
            value = {sport}
            onChange={(e) => setSport(e.target.value)}/>
          </div>
          <div>
            <UploadPhotoButton />
          </div>
        </div>
        { !isPending && <button>Post</button>}
        { isPending && <button>Adding post...</button>}
      </div>
      </form>

      
      
    </div>
  );
}

export default TextField;