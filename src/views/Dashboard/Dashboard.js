import React, { useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// @material-ui/icons
import NewsList from "../Dashboard/NewsList";
import { app } from "../../Config/firebase";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import { db } from "../../Config/firebase";

import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
// import Table from "views/JobApplicants/node_modules/components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "../../components/Card/Card";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "components/Card/CardFooter.js";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import "../Dashboard/Dashboard.css";
import TextField from "@material-ui/core/TextField";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import "../UserProfile/UserProfile.css";
import { setSyntheticTrailingComments } from "typescript";
// const useStyles = makeStyles(styles);

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

export default function Dashboard() {
  const classes = useStyles();
  
  return (
    <div>
      
      <NewsList />
    </div>
  );
}
