import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import antd stylesheets
import 'antd/dist/antd.css';
import './App.less';
import Landing from './containers/landing/Landing';
import Login from './containers/login/Login';
import Signup from './containers/signup/Signup';
import BlockTemplate from './containers/template-1-col-block/Template';
import GridTemplate from './containers/template-24-col-grid/Template';

import NotFound from './containers/not-found/NotFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Layout } from 'antd';
const { Content } = Layout;

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="speak,for,the,trees,speakforthetrees,sftt,boston,bos,treemap,tree-map,map,urban,canopy,reservation,block,blocks"
        />
      </Helmet>

      <Router>
        <Layout className="app-flex-container">
          <NavBar />
          <Content className="content-padding">
            <div className="content-inner-container">
              <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/block-template" exact component={BlockTemplate} />
                <Route path="/grid-template" exact component={GridTemplate} />
                <Route path="*" exact component={NotFound} />
              </Switch>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </>
  );
};

export default App;
