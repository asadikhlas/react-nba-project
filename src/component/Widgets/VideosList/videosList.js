import React, { Component } from "react";
import styles from "./videosList.module.css";
import axios from "axios";
import { URL } from "../../../config";
import Button from "../Buttons/buttons";
import VideosListTemplate from './videolistTemplates';

class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount(){
      this.request(this.state.start, this.state.end)
  }
  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        });
      });
    }
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        videos: [...this.state.videos, ...response.data]
      });
    });
  };


  renderVideos = () => {
      let template = null;
      switch(this.props.type){
          case('card'):
          template = <VideosListTemplate data={this.state.videos} teams={this.state.teams}/>
          break;
        default:
        template = null
      }
      return template;
  }


  loadMore = () => {};
  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      />
    ) : (
      <Button type="linkTo" cta="More Videos" linkTo="/videos" />
    );
  };
  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong> videos
      </h3>
    ) : null;
  };
  render() {
    return (
      <div className={styles.VideosList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos() }
        {this.renderButton()}
      </div>
    );
  }
}

export default VideosList;
