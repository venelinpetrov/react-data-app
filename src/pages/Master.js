import React from 'react';
import { useEffect, useState } from 'react';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import Grid from '../components/Grid';

const Master = withRouter(({history}) => {
    const initialState = {
        data: [],
        skip: 0,
        take: 10,
        loading: true
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const getCustomers = async () => {
            const { data } = await axios('http://northwind.servicestack.net/customers.json');

            setState({
                ...state,
                data: data.Customers,
                loading: false,
            });
        }

        getCustomers();
    }, []);

    function onPageChange({ skip, take }) {
        setState({
            ...state,
            skip,
            take,
        });
    }

    function onPageSizeChange({ take }) {
        setState({
            ...state,
            take
        });
    }

    function handleRowSelect({dataItem}) {
        history.push({
            pathname: `/details/${dataItem.Id}`,
            state: {
                payload: dataItem
            }
        });
    }
    return (

        <Grid
            data={state.data.slice(state.skip, state.take + state.skip)}
            loading={state.loading}
            paging={true}
            skip={state.skip}
            take={state.take}
            total={state.data.length}
            onPageSizeChange={onPageSizeChange}
            onPageChange={onPageChange}
            onRowSelect={handleRowSelect}
        />
    )
});

export default Master;