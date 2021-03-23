import React, { useState } from "react";
// @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// core components
import { app } from "../../Config/firebase";

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
import "../UserProfile/UserProfile.css";

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
}));

export default function Notification() {
  const classes = useStyles();

  const [notification, setNotification] = useState("");
  // const [url, setUrl] = useState("");

  const [file, setfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(notification.trim()==="")return;

    db.collection("notifications")
      .add({
        notification: notification,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
    setNotification("");
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success" stats icon>
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <GridContainer>
                  <GridItem xs={12} sm={6} md={12}>
                    <div className="_margins">
                      <TextField
                        style={{ minWidth: "40%" }}
                        placeholder="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={notification}
                        onChange={(e) => setNotification(e.target.value)}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <div className="_margins">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ minWidth: "40%" }}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
