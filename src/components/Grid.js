import React from 'react';

function Grid(props) {
    const data = props.data;

    function onRowClick(dataItem) {
        console.log(dataItem)
    }

    return (
        <div className="x-wrapper">
            <div className="x-table-wrapper">
                <table className="x-table table table-striped table-dark table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.loading ?
                                <tr><td colSpan="3">Loading...</td></tr>
                                : data.customers.map(item => {
                                    return (
                                        <tr key={item.Id} onClick={onRowClick.bind(this, item)}>
                                            <td>{item.ContactName}</td>
                                            <td>{item.Phone}</td>
                                            <td>{item.Address}</td>
                                        </tr>
                                    )
                                })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Grid;