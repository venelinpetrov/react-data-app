import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';

const Details = ({ query }) => {
    const initialState = {
        customer: {},
        loading: true
    };
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get(`http://northwind.netcore.io/customers/${query.id}.json`);

            setState({
                customer: data.customer,
                loading: false
            });
        };

        getOrders();
    }, []);

    function handleInputChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        axios.post('https://5d4b1f8000dbb1001487986b.mockapi.io/api/v1/customers', Object.fromEntries(data));
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <ul>
                    {
                        Object.keys(state.customer).map((key, i) => {
                            return (
                                <li key={i}>
                                    <label>
                                        {key}:
                                        <input
                                            type="text"
                                            name={key}
                                            defaultValue={state.customer[key]}
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                </li>
                            );
                        })
                    }
                </ul>
                <button>Submit</button>
            </form>
            <button onClick={() => Router.back()}>Back</button>
        </div>
    )
};

export default Details;