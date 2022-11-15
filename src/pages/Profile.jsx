import React from 'react';
import '../App.css';
import { Card, Heading, View, Button, TableHead, TableCell, Table, TableRow, TableBody } from '@aws-amplify/ui-react';
import { listServicemen } from '../graphql/queries'
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
function Profile() {

  const [Servicemen, setAirman] = useState([]);

  useEffect(() => {
      fetchServicemen();
  },[]);

  const fetchServicemen = async () => {
      try {
          const servicemenData = await API.graphql(graphqlOperation(listServicemen));
          const servicemen = servicemenData.data.listServicemen.items;
          console.log('serviceman', servicemen);
          setAirman(servicemen);
      } catch (error) {
          console.log('error on fetching airman', error);
      }
  };
    return (
      <View>
        <div className="card">
          { Servicemen.map(Servicemen => {
            return (
              <Card>
            <Heading level={3}>{Servicemen.rank}</Heading> 
            <Heading level={3}>{Servicemen.lastName}</Heading>  
            <Heading level={3}>{Servicemen.firstName}</Heading>  
            <Heading level={5}>{Servicemen.position}</Heading>  
            <Heading level={5}>{Servicemen.afsc}</Heading>  
          </Card>
            )
          })}
          </div> 
        <div className="cardbuttons">
          <Card>
            <Button
                    variation="link"
                    size="small"
                    loadingText=""
                    onClick={() => alert('this button will send email to associated email of airman')}
                    ariaLabel=""
                  >Notify</Button>
            <Button
                  variation="link"
                  size="small"
                  loadingText=""
                  onClick={() => alert('utm will be allowed to update the completion of a training')}
                  ariaLabel=""
                >Update</Button>
            <Button
                  variation="link"
                  size="small"
                  loadingText=""
                  onClick={() => alert('this will lead to the airmans page of certificates to upload and view')}
                  ariaLabel=""
                >Certificates</Button>
          </Card>
        </div>
        <Table
            caption=""
            highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th">Training Name</TableCell>
                <TableCell as="th">Status</TableCell>
                <TableCell as="th">Date Compeleted</TableCell>
                <TableCell as="th">Date Due</TableCell>
                <TableCell as="th">Days Until Due</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>name of training</TableCell>
                <TableCell>completed/incomplete/overdue</TableCell>
                <TableCell>date of when training Compeleted</TableCell>
                <TableCell>due date of training</TableCell>
                <TableCell>days till due again</TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </View>
    );
}
  
export default Profile;