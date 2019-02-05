import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/home/home";
import Layout from "./hoc/layout/layout";
import NewsArticles from './component/Articles/News/Post/index';
import VideoArticle from './component/Articles/Videos/Video/index';
import NewsMain from './component/Articles/News/Main/index';
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={NewsMain}/>
          <Route path="/articles/:id" exact component={NewsArticles} />
          <Route path="/videos/:id" exact component={VideoArticle}/> 
        </Switch>
      </Layout>
    );
  }
}
export default Routes;
