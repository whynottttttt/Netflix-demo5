import React from "react";
import { FaAngleLeft, FaAngleDoubleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";
import "./CustomPagination.style.css";

const CustomPagination = ({ page, setPage, totalPages }) => {
    const maxPages = 100;
    const total = Math.min(totalPages, maxPages);
    const groupSize = 10;

    const start = Math.floor((page - 1) / groupSize) * groupSize + 1;
    const end = Math.min(start + groupSize - 1, total);

    const handleFirst = () => setPage(1);
    const handleLast = () => setPage(total);
    const handlePrev = () => page > 1 && setPage(page - 1);
    const handleNext = () => page < total && setPage(page + 1);

    const pageNumbers = [];
    for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="custom-pagination">
            {page > 1 && (
                <>
                    <button onClick={handleFirst}>
                        <FaAngleDoubleLeft />
                    </button>
                    <button onClick={handlePrev}>
                        <FaAngleLeft />
                    </button>
                </>
            )}

            {pageNumbers.map((num) => (
                <button
                    key={num}
                    onClick={() => setPage(num)}
                    className={num === page ? "active" : ""}
                >
                    {num}
                </button>
            ))}

            {page < total && (
                <>
                    <button onClick={handleNext}>
                        <FaAngleRight />
                    </button>
                    <button onClick={handleLast}>
                        <FaAngleDoubleRight />
                    </button>
                </>
            )}
        </div>
    );
};

export default CustomPagination;