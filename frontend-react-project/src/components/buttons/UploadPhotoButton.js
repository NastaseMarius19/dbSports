import React, { useState } from "react";

const UploadPhotoButton = (props) => {
  function readFileDataAsBase64(e) {
    const file = e.target.files[0];

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };
      return reader.readAsDataURL(file);
    });
  }
  return (
    <div>
      {props.value && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(props.value)}
          />
          <br />
          <button className="btn btn-post" onClick={() => props.setPhoto(null)}>
            Remove
          </button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          props.setPhoto(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadPhotoButton;
