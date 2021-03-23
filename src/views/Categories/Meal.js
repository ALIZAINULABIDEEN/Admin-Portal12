import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// core components
import { app } from "../../Config/firebase";
import MealList from "./MealList";
import DeleteIcon from "@material-ui/icons/Delete";
import UploadDoc from "../UserProfile/UploadImg";
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

import "../UserProfile/UserProfile.css";
import avatar from "assets/img/faces/marc.jpg";
import ExerciseList from "./ExerciseList";

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

export default function Meal() {
  const classes = useStyles();
  const [meal, setMeal] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(meal.trim()==="")return;

    db.collection("meals")
      .add({
        meal: meal,
      })
      .then(() => {
        alert("submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
    setMeal("");
  };


  return (
    <div>
      
          <Card>
            <CardHeader color="success" stats icon>
              <form onSubmit={handleSubmit}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={12}>
                   
                    <div className="_margins">
                      <TextField
                        id="outlined-multiline-static"  
                        placeholder="Meal"
                        style={{minWidth: "40%"}}
                        variant="outlined"
                        value={meal}
                        onChange={(e) => setMeal(e.target.value)}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <div className="_margins">
                  <Button variant="contained" color="primary" type="submit" style={{minWidth: "40%"}}>
                    Add
                  </Button>
                </div>
              </form>
            </CardHeader>
          </Card>

    </div>
  );
}
