

import "@aws-amplify/ui-react/styles.css";
import "../App.css"
import { View, CheckboxField, Table, TableRow, TableCell, TableHead, TableBody, Button, Card} from "@aws-amplify/ui-react";
import { listServicemen } from '../graphql/queries'
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilesList() {
    const [Servicemen, setServiceman] = useState([]);

    useEffect(() => {
        fetchServiceman();
    },[]);
  
    const fetchServiceman = async () => {
        try {
            const servicemanData = await API.graphql(graphqlOperation(listServicemen));
            const servicemanList = servicemanData.data.listServicemen.items;
            console.log('serviceman list', servicemanList);
            setServiceman(servicemanList);
        } catch (error) {
            console.log('error on fetching servicemen', error);
        }
    };
    
    //TODO: make this go to an airman's page
    // grab airman's id
    // use airman's id as variable
    const navigate = useNavigate();
    const navigateToProfile = (ServicememberID) => {
      //TODO use airman's variable id here
      navigate(`/profile/${ServicememberID}`);
    };
    Servicemen.map(Servicemen => {
      console.log(Servicemen.id);
    })
    
  return (
    <View className="App">
      <Card>
        <Button
          variation="link"
          size="small"
          loadingText=""
          onClick={() => alert('mass update')}
          ariaLabel=""
          >Update</Button>
        <Button
          variation="link"
          size="small"
          loadingText=""
          onClick={() => alert('mass notify')}
          ariaLabel=""
          >Notify</Button>
        <Button
          variation="link"
          size="small"
          loadingText=""
          onClick={() => alert('generate report on whole organization')}
          ariaLabel=""
          >Generate Reports</Button>
          </Card>
      <div className="servicemanlist">
            <Table
            caption=""
            highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th">Select</TableCell>
                <TableCell as="th">Rank</TableCell>
                <TableCell as="th">Last Name</TableCell>
                <TableCell as="th">First Name</TableCell>
                <TableCell as="th">Position</TableCell>
                <TableCell as="th">AFSC</TableCell>
                <TableCell as="th">Status</TableCell>
                <TableCell as="th">Action</TableCell>
              </TableRow>
            </TableHead>
            { Servicemen.map(Servicemen => {
          return (
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="checkbox">
                  <CheckboxField
                    name="select"
                    value="yes"
                    size="small"
                  />
                  </div>
                </TableCell>
                <TableCell>{Servicemen.Rank}</TableCell>
                <TableCell>{Servicemen.Lastname}</TableCell>
                <TableCell>{Servicemen.Firstname}</TableCell>
                <TableCell>{Servicemen.Position}</TableCell>
                <TableCell>{Servicemen.AFSC}</TableCell>
                <TableCell>{Servicemen.Status}</TableCell>
                <TableCell>
                <Button
                  variation="link"
                  size="small"
                  loadingText=""
                  onClick={() => navigateToProfile(Servicemen.id)}
                  ariaLabel=""
                >View/Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            )
            })}
          </Table>
      </div>
    </View>
  );
}

export default ProfilesList;
