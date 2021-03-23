import React, { Component } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import DeleteIcon from "@material-ui/icons/Delete";
import firebase from "../../Config/firebase";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Table from "../../components/Table/Table";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};
class TestimonialTable extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  async componentDidMount() {
    let data = [];
    let querySnapshot = await firebase.firestore().collection("Meal").get();
    // console.log(querySnapshot);
    querySnapshot.forEach(function (doc) {
      if (doc.exists) {
        let obj = doc.data();
        obj["id"] = doc.id;
        data.push(obj);
      } else {
        return false;
      }
    });
    // console.log('data',data)
    this.setState({ data: data });
  }
  async handleRemove(id) {
    await firebase.firestore().collection("testimonial").doc(id).delete();
    let { data } = this.state;
    let a = data.filter((i) => i.id != id);
    this.setState({ data: a });
  }
  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className="cardTitleWhite">Testimonial Table</h4>
            </CardHeader>
            <CardBody>
              <div className="MainDiv">
                <div className="container" style={{overflow:"auto"}}>
                  <table id="example" class="display table">
                    <thead class="thead-dark">
                      <tr className="table_content">
                        {/* <th>Sr.No</th> */}
                        <th>image</th>
                        <th>Cook time</th>
                        <th>Description</th>
                        <th>Ingrediants</th>
                        <th>Meal type</th>
                        <th>Name</th>
                        <th>Nutrition</th>
                        <th>Steps</th>
                        <th>Time</th>
                        <th>type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map((entry) => (
                        <tr key={entry.id}>
                          <td style={{width: "20%"}}>
                            <img
                              style={{
                                border: "1px solid #ddd",
                                borderRadius: "4px",
                                adding: "5px",
                                width: "150px",
                              }}
                              src={entry.image}
                              className="img-fluid img-thumbnail"
                              alt="new"
                            />
                          </td>
                          <td>{entry.cookTime}</td>
                          <td style={{width: "20%",textAlign: "justify"}}>{entry.desc}</td>
                          <td>
                            <ol>
                              {entry.ingredients.map((ing) => (
                                <li>{ing}</li>
                              ))}
                            </ol>
                          </td>
                          <td>{entry.mealType}</td>
                          <td>{entry.name}</td>
                          <td>
                            <ol>
                              {entry.nutrition.map((nutri) => (
                                <li>{nutri}</li>
                              ))}
                            </ol>
                          </td>
                          <td style={{width: "20%",textAlign: "justify"}}>
                            <ol>
                              {entry.steps.map((step) => (
                                <li>{step}</li>
                              ))}
                            </ol>
                          </td>
                          <td>{entry.time}</td>
                          <td>{entry.type}</td>
                          <td>
                            <DeleteIcon
                              onClick={() => this.handleRemove(entry.id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default TestimonialTable;
