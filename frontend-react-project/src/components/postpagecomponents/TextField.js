
import React, { useState, useContext } from 'react';

import { Textarea } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
import ReturnToMainPageButton from "../buttons/ReturnToMainPageButton";
import DbSports from "../logos/DbSports";
import PostChoiceButton from "../buttons/PostChoiceButton";
import UploadPhotoButton from "../buttons/UploadPhotoButton";
import { LoginContext } from '../Context/LoginContext';
import axios from 'axios';


function TextField(props) {
  const { email, name } = useContext(LoginContext);
  const [title, setTitle] = useState('');
  const [description, setText] = useState('');
  const [timeOfPost, setTimeOfPost] = useState('');
  const [sportName, setSportName] = useState('');
  const [picture, setPhoto] = useState();

  function formatDate() {
    let date = new Date();
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    return day + '-' + month + '-' + year;
  }

  async function handleSubmit(event) {
    console.log(email);
    console.log(title);
    console.log(description);
    console.log(sportName);
    console.log(picture);
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/announcements/add-announcement",
        {
          title: title,
          email: email,
          sportName: sportName,
          timeOfPost: timeOfPost,
          description: description,
          picture: [],
          nameUser: name,
          timeOfPost: formatDate()
        });
    }
    catch (err) {
      console.log(err);
    }

  }

  const handleClick = () => {
    alert("Congrats you just posted!")
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
          <div></div>
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
                setSportName={setSportName}
              />
            </div>
            <div>
              <UploadPhotoButton
                value={picture}
                setPhoto={setPhoto}
              />



              <div>
                <button type="submit" onClick={handleClick} className="btn btn-post btnsize">
                  Post
                </button>
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
