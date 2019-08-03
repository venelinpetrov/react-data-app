import React from 'react';

function Pager(props) {
    const pageCount = parseInt(props.total / props.take);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
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
                                onClick={props.onPageClick.bind(null, {skip: i, take: 10})}>
                                <span className="page-link">{i + 1}</span>
                            </li>
                        )
                    })
                }

                <li className="page-item">
                    <span className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default Pager;