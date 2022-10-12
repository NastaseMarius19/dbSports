import * as React from "react";
import { Textarea } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
import ReturnToMainPageButton from "../buttons/ReturnToMainPageButton";
import DbSports from "../logos/DbSports";

import PostChoiceButton from "../buttons/PostChoiceButton";
import UploadPhotoButton from "../buttons/UploadPhotoButton";
import {useState} from 'react'

function TextField() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [select, setSelect] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {title, text};

    fetch('http://localhost:3000/mainpage', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(article)
    }).then(()=> {
      console.log('new blog added')
      console.log(article)
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
        <Text mb="8px" className="posttitle">
          Title
        </Text>
        </div>
        <div>
          
        </div>
        <Textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Text mb="8px" className="posttitle" font-size="22px">
          Text Input
        </Text>
        <Textarea 
        className="textfield" 
        size="sm" 
        value={text}
        onChange={(e) => setText(e.target.value)}

        />
        <div>
          <div>
            <PostChoiceButton   
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            />
          </div>
          <div>
            <UploadPhotoButton />
          </div>
          <div>
            <button type="submit">Post</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default TextField;
