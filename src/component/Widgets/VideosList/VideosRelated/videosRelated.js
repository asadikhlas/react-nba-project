import React from 'react';
import styles from '../videosList.module.css';
import VideoListTemplate from '../videolistTemplates'

const videoRelated = (props) => (
    <div className={styles.relatedWrapper}>
    <VideoListTemplate 
    data={props.data}
    teams={props.teams}
    />
    </div>
)

export default videoRelated;