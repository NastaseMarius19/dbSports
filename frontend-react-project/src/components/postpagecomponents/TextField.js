import React, { useState } from 'react';
import { Textarea } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
import ReturnToMainPageButton from "../buttons/ReturnToMainPageButton";
import DbSports from "../logos/DbSports";
import PostChoiceButton from "../buttons/PostChoiceButton";
import UploadPhotoButton from "../buttons/UploadPhotoButton";

function TextField() {
  const [title, setTitle] = useState('');
  const nameUser = "idk";
  const timeOfPost = "10-jun-2022";
  const [description, setText] = useState('');
  const [sportName, setSelect] = useState('');
  const [picture, setPhoto] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = { title, nameUser, sportName, timeOfPost, description, picture };

    fetch('http://localhost:8080/announcements/add-announcement', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article)
    }).then(() => {
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
          <Textarea
            className="textfield"
            size="sm"
            value={description}
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            <div>
              <PostChoiceButton
                value={sportName}
                onChange={(e) => setSelect(e.target.value)}
              />
            </div>
            <div>
              <UploadPhotoButton
                value={picture}
                onChange={(e) => setPhoto(e.target.value)}
              />

              <Textarea className="textfield" size="sm"
                 />
              <div>
                <div>
                  <PostChoiceButton />
                </div>
                <div>
                  <button type="submit">Post</button>
                </div>
              </div>
              {/* {!isPending && <button>Post</button>}
              {isPending && <button>Adding post...</button>} */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );

}

export default TextField;