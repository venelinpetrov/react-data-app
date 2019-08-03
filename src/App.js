import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './app.css';

import Grid from './components/Grid';
function App() {
    const initialState = {
        customers: [],
        loading: true
    };

    const [data, setData] = useState(initialState);

    useEffect(() => {
        const getCustomers = async () => {
            const {data} = await axios('http://northwind.servicestack.net/customers.json');
            setData({
                customers: data.Customers,
                loading: false
            })
        }

        getCustomers();
    }, []);

    return (
        <Grid data={data}/>
    );
}

export default App;
