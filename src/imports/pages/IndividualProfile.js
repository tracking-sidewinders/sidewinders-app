import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useParams } from "react-router-dom";
import { listServicemen } from "../../graphql/queries";

// TODO
// rudimentary individual profile page view
// Key-value pairs: Rank, First, Last, position, afsc
// Actions: view certs, notify, reports
// Trainings: Training name, status, date completed, date due

// Got: individual_soldier id
// todo:
// get key-value info
// get trainings info


function IndividualProfile() {
    let { _id } = useParams();
    const [servicemember, setServicemember] = useState(null);

    useEffect(() => {
        onPageRendered();
    }, []);

    const onPageRendered = async () => {
        readServicemembers();
    };

    const readServicemembers = async () => {
        const rawServicemember = await API.graphql(graphqlOperation(listServicemen));
        console.log(rawServicemember);
        setServicemember(rawServicemember);
    };


    return (
        <div>
            <h1>this is the IndividualProfile page</h1>
            <h2>{_id}</h2>

        </div>
    );
}

export default IndividualProfile;