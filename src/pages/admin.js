import React from 'react';
import { useEffect, useState } from 'react';
import { Grid, GridColumn } from '../components/Grid';
import axios from 'axios';

const Admin = () => {
    const initialState = {
        data: [],
        loading: true,
        selectedRow: null
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get('/orders.json');

            setState({
                ...state,
                data: data && data.results && data.results.map(item => item.order),
                loading: false
            });
        };

        getOrders();
    }, []);

    function handleRowSelect({ dataItem }) {
        setState({
            ...state,
            selectedRow: dataItem
        });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12">
                    <h2>Admin</h2>
                    <p>This is the admin panel</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Grid
                        data={state.data}
                        loading={state.loading}
                        selectedRow={state.selectedRow}
                        onRowSelect={handleRowSelect}>
                        <GridColumn field="id" />
                        <GridColumn field="customerId"/>
                    </Grid>
                </div>
                <div className="col-md-6">
                    {state.selectedRow ? (
                        Object.keys(state.selectedRow).map((key, i) => <div key={i}>{state.selectedRow[key]}</div>)
                    ) : (
                        <div>Select item...</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Admin;