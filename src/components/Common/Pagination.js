import React from "react";
import {usePagination} from "../../hooks/usePagination";

const Pagination = (setCurrentPage,currentPage, totalPage, firstPage, lastPage) => {
    const {pageNumbers, prev, next, first, last, paginate} = usePagination(setCurrentPage, totalPage, firstPage, lastPage)

    return (
        <React.Fragment>
            <div>
                <div className={'pagination'}>
                    {firstPage === 1 ? null : <button className={'first'} onClick={first}>&#171;</button>}
                    {firstPage === 1 ? null : <button className={'prev'} onClick={prev}>&lt;</button>}
                    {pageNumbers.map((num) =>
                        <div className={'styles.list'} key={num} aria-current={currentPage === num ? 'active' : null}>
                            <button className={'styles.btn'} onClick={() => paginate(num)}>{num}</button>
                        </div>
                    )}
                    {lastPage === totalPage ? null : <button className={'styles.next'} onClick={next}>&gt;</button>}
                    {lastPage === totalPage ? null : <button className={'styles.last'} onClick={last}>&#187;</button>}
                </div>
            </div>
        </React.Fragment>
    );
}


export default Pagination;
