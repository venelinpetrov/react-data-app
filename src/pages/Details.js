import React from 'react';
import { withRouter } from 'react-router-dom';

const Details = withRouter(({location, history}) => {
    const item = location.state.payload;
    return (
        <div>

        <ul>
            {
                Object.keys(item).map(key => {
                    return <li>{item[key]}</li>
                })
            }
        </ul>
        <button onClick={() => history.goBack()}>Back</button>
        </div>

    )

})

export default Details;