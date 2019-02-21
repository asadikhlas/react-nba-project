import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/home/home";
import Layout from "./hoc/layout/layout";
import NewsArticles from "./component/Articles/News/Post/index";
import VideoArticle from "./component/Articles/Videos/Video/index";
import NewsMain from "./component/Articles/News/Main/index";
import VideoMain from "./component/Articles/Videos/Main/index";
import SignIn from "./component/signIn/signin";
import Dashboard from "./component/dashboard/dashboard";
import PublicRoutes from "./component/AuthRoutes/publicRoutes";
import PrivateRoutes from "./component/AuthRoutes/privateRoutes";
const Routes = props => {
  return (
    <Layout user={props.user}>
      <Switch>
        <PublicRoutes
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/news"
          exact
          component={NewsMain}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/articles/:id"
          exact
          component={NewsArticles}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/videos/:id"
          exact
          component={VideoArticle}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/videos"
          exact
          component={VideoMain}
        />
        <PublicRoutes
          {...props}
          restricted={true}
          path="/sign-in"
          exact
          component={SignIn}
        />
        <PrivateRoutes
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
