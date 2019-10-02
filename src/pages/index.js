import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { Grid, GridColumn } from '../components/Grid';

const Master = ({history}) => {
    const initialState = {
        data: [],
        skip: 0,
        take: 10,
        loading: true
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const getCustomers = async () => {
            const { data } = await axios('https://5d4b1f8000dbb1001487986b.mockapi.io/api/v1/customers');

            setState({
                ...state,
                data: data,
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
        Router.push({
            pathname: `/details`,
            query: {
                id: dataItem.Id
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
        >
            <GridColumn field="ContactName" />
            <GridColumn field="Phone" />
            <GridColumn field="Address" />
        </Grid>
    )
};

export default Master;