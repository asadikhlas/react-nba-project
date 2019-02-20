import React, {Component} from 'react'
import styles from './dashboard.module.css';
 class Dashboard extends Component{
     state={

     }

     submitForm = () => {

     }

     render(){
         return(
             <div className={styles.postContainer}>
                 <form onSubmit={this.submitForm}>
                 <h2>Add Post</h2>
                    dashboard
                 </form>
             </div>
         )
     }
 }

 export default Dashboard;