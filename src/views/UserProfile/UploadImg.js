import React, { Component , useState } from 'react';
import {app} from "../../Config/firebase";

export default function UploadDoc(props) {
//   const [fileUrl, setFileUrl] = React.useState(null);
//   const [users, setUsers] = React.useState([]);

//   const onFileChange = async (e) => {
//     const file = e.target.files[0];
//     const storageRef = app.storage().ref(`/resume/${file.name}`);
//     const fileRef = storageRef.child(file.name);
//     await fileRef.put(file);
//     setFileUrl(await fileRef.getDownloadURL());
//     e.target.value=null;
//   };
  const onFileChange =async (e) => {


    const file = e.target.files[0];
    props.getUrl(file);
        
  }

  return (
    <div style={{textAlign: "center"}}>
        <input style={{float:"left"}}  type="file"name="doc" onChange={onFileChange} />
    </div>
  );
}