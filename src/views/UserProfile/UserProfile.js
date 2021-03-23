import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// core components
import { app } from "../../Config/firebase";
import TestimonialTable from "../UserProfile/TestimonialTable";
import DeleteIcon from "@material-ui/icons/Delete";
import UploadDoc from "../../views/UserProfile/UploadImg";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "components/Card/CardFooter.js";
import { db } from "../../Config/firebase";
import TextField from "@material-ui/core/TextField";
import CloseIcon from '@material-ui/icons/Close';
import "../UserProfile/UserProfile.css";
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function UserProfile() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [quotation, setQuotation] = useState("");
  const [ingrediants,setIngrediants]=useState([])
  const [ingre,setIngre]=useState("")
  const [steps,setSteps]=useState([])
  const [stp,setStp]=useState("")
  // const [url, setUrl] = useState("");

  const [file, setfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log("Upload file=====>", file);
      const uploadTask = app.storage().ref(`Picture/${file.name}`).put(file);
      console.log("uploadTask", uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progrss function ....
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(progress);
        },
        (error) => {
          // error function ....
          console.log("error", error);
        },

        async () => {
          // complete function ....
          app
            .storage()
            .ref("Picture/")
            .child(file.name)
            .getDownloadURL()
            .then(async (url) => {
              //
              // console.log('Upload Imager Url==>>>>',url);

              db.collection("testimonial")
                .add({
                  name: name,
                  quotation: quotation,
                  url: url,
                })
                .then(() => {
                  alert("Message has been submitted");
                })
                .catch((error) => {
                  alert(error.message);
                });
              setName("");
              setQuotation("");
              //  this.setState({});

              //  props.getUrl(url);
            });
        }
      );
    }
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <Card>
            <CardHeader color="success" stats icon>
              <form onSubmit={handleSubmit}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={12}>
                   
                    <div className="_margins">
                    <TextField
                        id="outlined-multiline-static"
                        label="Cook Time"
                        style={{minWidth: "100%"}}
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="_margins">
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        // rows={4}
                        style={{minWidth: "100%"}}
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                   
                    <div className="_margins">
                    <TextField
                        id="outlined-multiline-static"
                        label="Meal Type"
                        style={{minWidth: "100%"}}
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="_margins">
                    <TextField
                        id="outlined-multiline-static"
                        label="Time"
                        style={{minWidth: "100%"}}
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  
                    <div className="_margins">
                  <div style={{display:"table-cell"}}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Steps"
                        // style={{minWidth: "94%"}}
                        variant="outlined"
                      value={stp}
                      onChange={(e)=>setStp(e.target.value)}

                      />
                      {" "}
                      <button className="btn btn-sm btn-primary"style={{padding: "18.5px 14px", marginTop: "-5px"}} onClick={(e)=>{

                       const newsteps=[...steps];
                       console.log("steps",ingre)
                       const newval=stp
                       newsteps.push(newval);
                       console.log("newingrdiant+old",newsteps);
                        setSteps([...newsteps])
                    
                        console.log(steps)
                
                        setStp("")
                      }} >add</button>
                      {steps.length>0 ? (steps.map((bb,index)=>( <p style={{color:"black",cursor:"pointer", border:"1px solid gray", border:"1px solid gray", width:"fit-content", borderRadius:"10px"}} key={index} >{index+1}:{bb}  <span onClick={(e)=>{
                        setSteps(steps.filter(data=>data!==bb))
                      }}>< CloseIcon/></span></p>))):""}
                    </div>
                    </div>
                    <div className="_margins">
                    <div style={{display:"table-cell"}}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Ingredients"
                        // style={{minWidth: "94%"}}
                        variant="outlined"
                      value={ingre}
                      onChange={(e)=>setIngre(e.target.value)}

                      />
                      {" "}
                      <button className="btn btn-sm btn-primary"style={{padding: "18.5px 14px",    marginTop: "-5px"}} onClick={(e)=>{

                       const newingredient=[...ingrediants];
                       console.log("ingrdient",ingre)
                       const newval=ingre
                       newingredient.push(newval);
                       console.log("newingrdiant+old",newingredient);
                        setIngrediants([...newingredient])
                    
                        console.log(ingrediants)
                
                        setIngre("")
                      }} >add</button>
                      {ingrediants.length>0 ? (ingrediants.map((bb,index)=>(<p style={{color:"black",cursor:"pointer", border:"1px solid gray", border:"1px solid gray", width:"fit-content", borderRadius:"10px"}} key={index} >{index+1}:{bb}  <span onClick={(e)=>{
                        setIngrediants(ingrediants.filter(data=>data!==bb))
                      }}>< CloseIcon/></span></p>))):""}
                    </div>
                    </div>
                    {/* <div className="_margins">
                    <TextField
                        id="outlined-multiline-static"
                        label="Type"
                        style={{minWidth: "100%"}}
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div> */}
                  </GridItem>
                </GridContainer>
                <UploadDoc
                        getUrl={(url) => {
                          console.log(url);
                          if (url) {
                            console.log("Get  File", url);
                            setfile(url);
                            // setUrl(url);
                          }
                        }}
                      />
                <div className="_margins">
                  <Button variant="contained" color="primary" type="submit" style={{minWidth: "100%"}}>
                    Save
                  </Button>
                </div>
              </form>
            </CardHeader>
          </Card>
          {/* <Card>
            <CardHeader color="success" stats icon>
              <form onSubmit={handleSubmit}>
                <GridContainer>
                <GridItem xs={12} sm={6} md={12}>
                   
                   <div className="_margins">
                     <TextField
                     style={{minWidth: "40%"}}
                       id="outlined-multiline-static"  
                       label="Message"
                       multiline
                       rows={4}
                       variant="outlined"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                     />
                   </div>
                 </GridItem>
                   
                    <div className="_margins">
                      <TextField
                        id="outlined-multiline-static"
                        label="Cook Time"
                        style={{minWidth: "40%"}}
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
               
                    <div className="_margins">
                      <TextField
                        id="outlined-multiline-static"
                        label="Discription"
                        multiline
                        rows={4}
                        style={{minWidth: "40%"}}
                        variant="outlined"
                        value={quotation}
                        onChange={(e) => setQuotation(e.target.value)}
                      />
                    </div>
                 
                </GridContainer>
                <GridContainer>
                  
                    <div style={{ float: "left", marginBottom: "1rem" }}>
                      <UploadDoc
                        getUrl={(url) => {
                          console.log(url);
                          if (url) {
                            console.log("Get  File", url);
                            setfile(url);
                            // setUrl(url);
                          }
                        }}
                      />
                    </div>
                  
                </GridContainer>

                <div className="_margins">
                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>
                </div>
              </form>
            </CardHeader>
          </Card> */}

          <TestimonialTable />
        </GridItem>
      </GridContainer>
    </div>
  );
}
