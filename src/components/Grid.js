import React from 'react';
import Pager from './Pager';

function Grid(props) {
    let data = props.data;

    function onRowClick(dataItem) {
        props.onRowSelect({dataItem});
    }

    function handlePageClick({skip, take}) {
        props.onPageChange({skip, take})
    }

    function handlePageSizeChange({take}) {
        props.onPageSizeChange({take});
    }

    return (
        <div className="x-wrapper">
            <div className="x-table-wrapper">
                <table className="x-table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.loading ?
                                <tr><td colSpan="3">Loading...</td></tr>
                                : data.map(item => {
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
            {
                props.loading ? '' : <Pager
                    onPageSizeChange={handlePageSizeChange}
                    onPageClick={handlePageClick}
                    pageCount={props.total}
                    total={props.total}
                    skip={props.skip}
                    take={props.take}
                />
            }
        </div>
    )
}

export default Grid;