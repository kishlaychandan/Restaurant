import React, { useState } from 'react';
import './Searchfilter.css';
import Cards from '../Cards/Cards';

function Searchfilter({ data, setData }) {
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; 
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);  };

    const handleRatingChange = (e) => {
        const value = e.target.value;
        if (value >= 0) {
            setRating(value);
            setCurrentPage(1);
        }
    };

    const newData = data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase()) && item.rating >= rating;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = newData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(newData.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className="Searchfilter">
                <div className="input">
                    <input 
                        className='search' 
                        type="text" 
                        placeholder="Search for restaurants" 
                        onChange={handleSearchChange} 
                    />
                    <label htmlFor="rating">Minimum Rating:
                        <input 
                            className='rating' 
                            type="number" 
                            onChange={handleRatingChange} 
                        />
                    </label>
                </div>
                <Cards data={currentData} />
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>
        </>
    );
}

export default Searchfilter;
