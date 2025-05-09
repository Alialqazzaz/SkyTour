import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function BookingPage() {
  const { state } = useLocation();
  const flight = state?.flight;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: 1,
    flightClass: "economy",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const classMultiplier = {
    economy: 1,
    business: 1.5,
    first: 2,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "passengers" ? parseInt(value) : value,
    }));
  };

  const handleShowSummary = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (!flight) return <div className="no-flight">No flight selected...</div>;

  const multiplier = classMultiplier[formData.flightClass];
  const totalPrice = flight.price * formData.passengers * multiplier;

  return (
    <div className="booking-page">
      {!submitted ? (
        loading ? (
          <div className="spinner-container">
            <div className="loader"></div>
            <p>Processing your booking...</p>
          </div>
        ) : showSummary ? (
          <div className="summary-box">
            <h2>Confirm your booking</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>From:</strong> {flight.from}</p>
            <p><strong>Destination:</strong> {flight.title}</p>
            <p><strong>Date:</strong> {flight.date}</p>
            <p><strong>Passengers:</strong> {formData.passengers}</p>
            <p><strong>Class:</strong> {formData.flightClass}</p>
            <p><strong>Total price:</strong> ${totalPrice}</p>
            <button className="confirm-button" onClick={handleConfirm}>
              Confirm booking
            </button>
          </div>
        ) : (
          <>
            <h2 className="booking-title">
              Booking: {flight.from} ➔ {flight.title}
            </h2>
            <p className="flight-info">Price per passenger: ${flight.price}</p>
            <p className="flight-info">Date: {flight.date}</p>

            <form onSubmit={handleShowSummary} className="booking-form">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="passengers"
                min="1"
                value={formData.passengers}
                onChange={handleChange}
                required
              />

              <select
                name="flightClass"
                value={formData.flightClass}
                onChange={handleChange}
                required
              >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>

              <div className="total-price">
                Total price: <strong>${totalPrice}</strong>
              </div>
              <button type="submit" className="confirm-button">
                Next: Show summary
              </button>
            </form>
          </>
        )
      ) : (
        <div className="booking-success">
          <img
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            alt="Success"
            className="success-image"
          />
          <h2>🎉 Booking confirmed!</h2>
          <p>
            Thank you {formData.name}! A confirmation has been sent to {formData.email}.
          </p>
          <button className="back-home-button" onClick={() => navigate("/")}>
            🏠 Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default BookingPage;
