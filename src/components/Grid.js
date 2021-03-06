import React from 'react';
import Pager from './Pager';

const Grid = (props) => {
    let data = props.data;

    function handleRowClick(dataItem) {
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
            <div className="x-grid-wrapper">
                <table className="x-grid table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            {props.children.map(({props}) => {
                                return <th key={props.field}>{props.title || props.field}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.loading ?
                                <tr><td colSpan="3">Loading...</td></tr>
                                : data.map(item => {
                                    return (
                                        <tr key={item.id} onClick={handleRowClick.bind(this, item)} className={item === props.selectedRow ? '-selected': ''}>
                                            {props.children.map(({ props }) => <td key={props.field}>{item[props.field]}</td>)}
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
            {
                props.loading || !props.paging ? '' : <Pager
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
};

const GridColumn = () => { }

export { Grid, GridColumn };