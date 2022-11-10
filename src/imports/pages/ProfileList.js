import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useParams } from "react-router-dom";
import { listServicemen } from "../../graphql/queries";

function ProfileList() {
    const [servicemembers, setServicemembers] = useState(null);

    useEffect(() => {
        onPageRendered();
    }, []);

    const onPageRendered = async () => {
        readServicemembers();
    };

    const readServicemembers = async () => {
        const { data } = await API.graphql(graphqlOperation(listServicemen));
        const rawServicemember = data.listServicemen.items;
        setServicemembers(rawServicemember);
    };

    console.log(servicemembers)
    return (
        <div>
        <h1>This is the ProfileList page</h1>
        {
            !servicemembers ? <h2>loading</h2> :
            servicemembers.map(oneServicemember =>
                <h2>Name: {oneServicemember.Firstname} {oneServicemember.Lastname},
                AFSC: {oneServicemember.AFSC}, Position: {oneServicemember.Position}
                </h2> 
        )}
        </div>
    );
}

export default ProfileList;