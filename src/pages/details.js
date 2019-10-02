import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Details = ({location, history}) => {
    const item = location.state.payload;
    const [state, setState] = useState(item);

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
                        Object.keys(item).map((key, i) => {
                            return (
                                <li key={i}>
                                    <label>
                                        {key}:
                                        <input
                                            type="text"
                                            name={key}
                                            value={state[key]}
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
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
};

export default Details;