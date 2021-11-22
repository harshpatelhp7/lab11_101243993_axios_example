import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { Component, Fragment } from "react";
import "./App.css";

export default class PersonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api?results=10`).then((res) => {
      console.log(res.data);
      this.setState({ persons: res.data.results });
    });
  }

  render() {
    return (
      <div>
        <header className="header">User List</header>
        {this.state.persons.map((person) => (
          <Fragment key={person.login["uuid"]}>
            <section className="content">
              <Button className="unameAndId">
                {person.name["title"]}&nbsp;&nbsp;
                {person.name["first"]}&nbsp;&nbsp;
                {person.name["last"]} - {person.login["uuid"]}
              </Button>
              <div className="img">
                <img src={person.picture["large"]} alt="Profile"></img>
                <br />
                <Button>Details</Button>
              </div>

              <article className="profileInfo">
                <p>User Name:&nbsp;&nbsp;{person.login["username"]}</p>
                <p>Gender:&nbsp;&nbsp;{person.gender}</p>
                <p>
                  Time Zone Description:&nbsp;&nbsp;
                  {person.location.timezone["description"]}
                </p>
                <p>
                  Address:&nbsp;&nbsp;{person.location.street["number"]}&nbsp;
                  {person.location.street["name"]},&nbsp;
                  {person.location["city"]},&nbsp;{person.location["state"]}
                  ,&nbsp;
                  {person.location["country"]},&nbsp;
                  {person.location["postcode"]}
                </p>
                <p>Email:&nbsp;&nbsp;{person["email"]}</p>
                <p>
                  Birth Date and Age:&nbsp;&nbsp;{person.dob["date"]}&nbsp;(
                  {person.dob["age"]})
                </p>
                <p>Phone#:&nbsp;&nbsp; {person["phone"]}</p>
                <p>Cell#:&nbsp;&nbsp; {person["cell"]}</p>
              </article>
            </section>
          </Fragment>
        ))}
      </div>
    );
  }
}
