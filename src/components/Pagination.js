import React from 'react'

const Pagination = ({
    postsPerPage,
    totalPosts,
    paginate,
    currentPage,
    handlePrevClick,
    handleNextClick,
    maxPageNumberLimit,
    minPageNumberLimit,
    handleLoadMore
}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const pageIncrementBtn = () => {
        if (pageNumbers.length > maxPageNumberLimit) {
            return <li onClick={handleNextClick}>&hellip;</li>
        } else {
            return null;
        }
    }

    const pageDecrementBtn = () => {
        if (minPageNumberLimit >= 1) {
            return <li onClick={handlePrevClick}>&hellip;</li>
        } else {
            return null;
        }
    }

    return (
        <nav>
            <ul className="pagination">

                <li >
                    <button
                        onClick={handlePrevClick}
                        className="btn page-link"
                        disabled={currentPage === pageNumbers[0] ? true : false}
                    >
                        Prev
                    </button>
                </li>

                {pageDecrementBtn()}

                {pageNumbers.map(pageNumber => {

                    if (pageNumber < maxPageNumberLimit + 1 && pageNumber > minPageNumberLimit) {

                        return (
                            <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : null}`}>
                                <a onClick={() => paginate(pageNumber)} href="!#" className="page-link">
                                    {pageNumber}
                                </a>
                            </li>
                        )
                    } else {
                        return null;
                    }
                })}

                {pageIncrementBtn()}

                <li>
                    <button
                        onClick={handleNextClick}
                        className="btn page-link"
                        disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
                    >
                        Next
                    </button>
                </li>
            </ul>

            <button
                className="btn btn-primary"
                onClick={handleLoadMore}
            >
                Load More...
            </button>
        </nav>
    )
}
export default Pagination;
