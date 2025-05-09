import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqItems = [
    {
      question: "How do I book a flight?",
      answer: "You can search for flights, select one, and then click on 'Book Now' to proceed with booking.",
    },
    {
      question: "Can I change my travel dates later?",
      answer: "Yes, depending on the airline's policy, you may be able to change your travel dates with some fees.",
    },
    {
      question: "Is my payment secure?",
      answer: "Absolutely! We use industry-standard encryption to protect your data.",
    },
    {
      question: "Can I book flights for a group?",
      answer: "Yes, we offer group booking options. Please contact our support for more details.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <FaChevronDown
                className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
