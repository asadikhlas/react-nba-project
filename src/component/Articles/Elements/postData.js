import React from "react";
import styles from "../articles.module.css";
import moment from 'moment';


const formatDate = (date) => {
  return moment(date).format('DD-MM-YYYY');
}
const postData = props => (
  <div className={styles.articlePostData}>
    <div>
      Date:
      <span>{formatDate(props.data.date)}</span>
    </div>
    <div>
      Author:
      <span>{props.data.author}</span>
    </div>
  </div>
);

export default postData;
