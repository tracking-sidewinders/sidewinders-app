import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import config from './aws-exports';
import Layout from "./imports/layout/Layout";
import Home from "./imports/pages/Home";
import ProfileList from "./imports/pages/ProfileList";
import IndividualProfile from "./imports/pages/IndividualProfile";

Amplify.configure(config);

// function App({ signOut }) {
  // return (
    // <View className="App">
      // <Card>
        // <Image src={logo} className="App-logo" alt="logo" />
        // <Heading level={1}>We now have Auth!</Heading>
      // </Card>
      // <Button onClick={signOut}>Sign Out</Button>
    // </View>
  // );
// }

function App({ signOut }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profilelist" element={<ProfileList />} />
          <Route path="/individualprofile" element={<IndividualProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 

export default withAuthenticator(App);