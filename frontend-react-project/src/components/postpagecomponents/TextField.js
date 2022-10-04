import * as React from "react";
import { Textarea } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
import ReturnToMainPageButton from "../buttons/ReturnToMainPageButton";
import DbSports from "../logos/DbSports";

import PostChoiceButton from "../buttons/PostChoiceButton";
import UploadPhotoButton from "../buttons/UploadPhotoButton";

function TextField() {
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
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
      <div className="post-content">
        <div>
        <Text mb="8px" className="posttitle">
          Title
        </Text>
        </div>
        <div>
          
        </div>
        <Textarea
          value={value}
          onChange={handleInputChange}
          className="textarea"
          size="sm"
        />
        <Text mb="8px" className="posttitle" font-size="22px">
          Text Input
        </Text>
        <Textarea className="textfield" size="sm" />
        <div>
          <div>
            <PostChoiceButton />
          </div>
          <div>
            <UploadPhotoButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextField;
