import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Details = withRouter(({location, history}) => {
    const item = location.state.payload;
    const [state, setState] = useState(item);
console.log(state)
    function handleInputChange(e) {
        console.log(state)
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
console.log(state);
        axios.post('https://5d4b1f8000dbb1001487986b.mockapi.io/api/v1/customers', Object.fromEntries(data));
    }

    return (

        <div><form onSubmit={handleFormSubmit}>
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
});

export default Details;