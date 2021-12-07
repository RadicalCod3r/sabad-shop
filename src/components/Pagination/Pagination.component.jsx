import React from 'react';
import './Pagination.styles.css';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
    return (
        <div>
            <ReactPaginate
                previousLabel='قبلی'
                nextLabel='بعدی'
                pageCount={pageCount}
                onPageChange={onPageChange}
                containerClassName='page-btn'
                previousClassName='previous-btn'
                nextClassName='next-btn'
                disabledClassName='disable-btn'
                activeClassName='active-btn' />
        </div>
    )
}

export default Pagination;