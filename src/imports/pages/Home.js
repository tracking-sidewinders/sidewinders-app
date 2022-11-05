import React from 'react';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import logo from '../../logo.svg';

function Home({ signOut }) {
    return (
        <View className="App">
            <Card>
                <Image src={logo} className="App-logo" alt="logo" />
                <Heading level={1}>We now have Auth!</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    );
}

export default withAuthenticator(Home);