import React from 'react';
import '../App.css';
import { Grid, View } from '@aws-amplify/ui-react';
import TrainingGraph from '../components/TrainingGraph';

//TODO add progress bars to the dashboard
// fetch training completion data
// render it to website
function Home() {
    return ( 
      <Grid
        templateColumns="1fr 1fr"
      >
        <View>
          <TrainingGraph/>
        </View>
        <h1> Hi I am DASHBOARD/HOME </h1>
      </Grid>
    );
}
 // <h1> Hi I am DASHBOARD/HOME </h1>
export default Home;