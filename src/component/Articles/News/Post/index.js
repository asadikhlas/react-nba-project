import React, { Component } from "react";
import { URL } from "../../../../config";
import axios from "axios";
import styles from "../../articles.module.css";
import Header from "./header";
import Body from "./body";

class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    axios
      .get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0];
        axios.get(`${URL}/teams?id=${article.team}`).then(response => {
          this.setState({
            article,
            team: response.data
          });
        });
      });
  }
  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div>
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
      </div>
    );
  }
}

export default NewsArticles;
