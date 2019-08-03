import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './app.css';

import Grid from './components/Grid';
function App() {
    const initialState = {
        data: [],
        skip: 0,
        take: 10,
        loading: true
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const getCustomers = async () => {
            const {data} = await axios('http://northwind.servicestack.net/customers.json');

            setState({
                ...state,
                data: data.Customers,
                loading: false,
            });
        }

        getCustomers();
    }, []);

    function onPageChange({skip, take}) {
        setState({
            ...state,
            skip,
            take,
        })
    }

    return (
        <Grid
            data={state.data.slice(state.skip, state.take + state.skip)}
            loading={state.loading}
            paging={true}
            skip={state.skip}
            take={state.take}
            total={state.data.length}
            onPageChange={onPageChange}
        />
    );
}

export default App;
