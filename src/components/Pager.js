import React from 'react';

const Pager = (props) => {
    const pageCount = parseInt(props.total / props.take) || 1;
    return (
        <nav aria-label="Page navigation" className="x-pager">
            <ul className="pagination pagination-dark">
                <li
                    className="page-item"
                    onClick={() => {
                        const skip = props.skip - 1;
                        if (skip >= 0) {
                            props.onPageClick({ skip, take: props.take });
                        }
                    }}>
                    <span className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </span>
                </li>
                {
                    Array(pageCount).fill(null).map((_, i) => {
                        return (
                            <li
                                key={i} className={"page-item " + (i === props.skip ? 'active' : '')}
                                onClick={props.onPageClick.bind(null, {skip: i, take: props.take})}>
                                <span className="page-link">{i + 1}</span>
                            </li>
                        )
                    })
                }

                <li
                    className="page-item"
                    onClick={() => {
                        const skip = props.skip + 1;
                        if (skip < pageCount) {
                            props.onPageClick({ skip, take: props.take });
                        }
                    }}>
                    <span className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </span>
                </li>
            </ul>
            <input
                type="number"
                className="x-page-size form-control"
                value={props.take}
                onChange={e => props.onPageSizeChange({take: +e.target.value})}/>
        </nav>
    )
};

export default Pager;