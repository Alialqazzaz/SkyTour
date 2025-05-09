import { useState } from "react";
import { SlideData } from "../data/Data";
import { FaPlaneDeparture, FaPlaneArrival, FaSearch, FaCalendarAlt, FaSortAmountDown, FaExchangeAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Search() {
  const [fromDestination, setFromDestination] = useState('');
  const [toDestination, setToDestination] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [flightType, setFlightType] = useState('any');
  const [sortOrder, setSortOrder] = useState('asc');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTriggered, setSearchTriggered] = useState(false);


  const navigate = useNavigate();

const handleBookNow = (flight) => {
  navigate('/booking', { state: { flight } });
};
  const resultsPerPage = 3;

  const allCities = [...new Set(SlideData.map(item => item.from))];

  const handleSearch = () => {
    if (!toDestination || !fromDate || !toDate) {
      alert('Please fill in destination and dates!');
      return;
    }

    if (new Date(fromDate) > new Date(toDate)) {
      alert('From date must be before to date!');
      return;
    }

    setLoading(true);
    setSearchTriggered(true);

    setTimeout(() => {
      let filtered = SlideData.filter(item =>
        (fromDestination === '' || item.from.toLowerCase().includes(fromDestination.toLowerCase())) &&
        item.title.toLowerCase().includes(toDestination.toLowerCase()) &&
        item.price <= maxPrice &&
        new Date(item.date) >= new Date(fromDate) &&
        new Date(item.date) <= new Date(toDate) &&
        (flightType === 'any' || item.flightType === flightType)
      );

      if (sortOrder === 'asc') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      setResults(filtered);
      setCurrentPage(1);
      setLoading(false);
    }, 1200);
  };

  const handleReset = () => {
    setFromDestination('');
    setToDestination('');
    setFromDate('');
    setToDate('');
    setMaxPrice(1000);
    setFlightType('any');
    setSortOrder('asc');
    setResults([]);
    setCurrentPage(1);
    setSearchTriggered(false);
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const totalPages = Math.ceil(results.length / resultsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="search-container">
      <div className="search-form">
        {/* From */}
        <div className="search-field">
          <label>From <FaPlaneDeparture /></label>
          <input
            type="text"
            placeholder="Departure city"
            value={fromDestination}
            onChange={(e) => setFromDestination(e.target.value)}
            list="city-list"
          />
          <datalist id="city-list">
            {allCities.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
        </div>

        {/* To */}
        <div className="search-field">
          <label>To <FaPlaneArrival /></label>
          <input
            type="text"
            placeholder="Destination city"
            value={toDestination}
            onChange={(e) => setToDestination(e.target.value)}
          />
        </div>

        {/* From Date */}
        <div className="search-field">
          <label>From Date <FaCalendarAlt /></label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        {/* To Date */}
        <div className="search-field">
          <label>To Date <FaCalendarAlt /></label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>

        {/* Max Price */}
        <div className="search-field">
          <label>Max Price £</label>
          <div className="input-container">
            <input
              type="range"
              min="100"
              max="1500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span className="price-value">£ {maxPrice}</span>
          </div>
        </div>

        {/* Flight Type */}
        <div className="search-field">
          <label>Flight Type <FaExchangeAlt /></label>
          <select value={flightType} onChange={(e) => setFlightType(e.target.value)} className="sort-select">
            <option value="any">Any</option>
            <option value="direct">Direct</option>
            <option value="connecting">Connecting</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="search-field">
          <label>Sort By <FaSortAmountDown /></label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="sort-select">
            <option value="asc">Lowest Price</option>
            <option value="desc">Highest Price</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="button-group">
  <button className="search-button" onClick={handleSearch}>
    <FaSearch /> Search
  </button>
  <button className="reset-button" onClick={handleReset}>
    Reset
  </button>
</div>

      </div>

      {/* Results */}
      <div className="search-results">
  {loading ? (
    <div className="spinner-container">
      <Spinner animation="border" variant="warning" />
      <p>Loading...</p>
    </div>
  ) : (
    <>
      {results.length > 0 ? (
        <>
          <div className="result-count">
            <p>{results.length} flights found</p>
          </div>

          <div className="results-grid">
            {currentResults.map((item) => (
              <div key={item.id} className="search-result-card">
                <p className="from-to">{item.from} ➔ {item.title}</p>
                <img src={item.img} alt={item.title} className="search-result-image" />
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Flight Date: {item.date}</p>
                {item.flightType === 'direct' ? (
                  <p className="flight-type direct">Direct flight</p>
                ) : (
                  <p className="flight-type connecting">Connecting flight</p>
                )}
                {/* BOOK NOW BUTTON */}
  <button className="book-button" onClick={() => handleBookNow(item)}>
    Book Now
  </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination-buttons">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              <FaArrowLeft />
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
              <FaArrowRight />
            </button>
          </div>
        </>
      ) : (
        searchTriggered && (
          <div className="no-results">
            <p>No flights found...</p>
          </div>
        )
      )}
    </>
  )}
</div>

    </div>
  );
}

export default Search;
