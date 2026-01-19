import React, { useState } from "react";
import Header from "../Header/Header";
import Fotter from "../Fotter/Fotter";
import confetti from "canvas-confetti";  // 🎉 CELEBRATION EFFECT
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comments: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // 🔥 YOUR GOOGLE SCRIPT URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbx5V1UMJ8B09HO70YQ3aHTHg8tY8Tq4hOUCK8bodnM0qjzSy1R6IQwyIXhqX2pgXY3djA/exec";

  // ⭐ SELECT STAR
  const handleStarSelect = (num) => {
    setFormData({ ...formData, rating: num });
  };

  // 🎉 CONFETTI BLAST
  function fireConfetti() {
    confetti({
      particleCount: 200,
      spread: 85,
      origin: { y: 0.6 }
    });
  }

  // 📤 SUBMIT FEEDBACK
 const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.rating === 0) {
    alert("Please select star rating ⭐");
    return;
  }

  const formBody = new URLSearchParams({
    name: formData.name,
    rating: formData.rating,
    comments: formData.comments,
  });

  fetch(scriptURL, {
    method: "POST",
    mode: "no-cors", // ✅ REQUIRED for Google Script
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody.toString(),
  });

  // Assume success (Google Script executed)
  setShowSuccess(true);
  fireConfetti();
  setFormData({ name: "", rating: 0, comments: "" });
  setTimeout(() => setShowSuccess(false), 3500);
};



  return (
    <div>
      <Header/>

      <div className="feedback-container">
        <div className="feedback-box">

          <h2>Feedback Form</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Enter your Name"
              required
              value={formData.name}
              onChange={(e)=> setFormData({...formData, name:e.target.value})}
            />

            {/* ⭐ RATING UI */}
            <div className="rating-box">
              {[1,2,3,4,5].map(num=>(
                <span
                  key={num}
                  onClick={()=>handleStarSelect(num)}
                  className={`star-item ${formData.rating >= num ? "filled" : ""}`}>
                  ★
                </span>
              ))}
            </div>

            <textarea
              placeholder="Write your feedback..."
              required
              spellCheck="true"
              value={formData.comments}
              onChange={(e)=> setFormData({...formData, comments:e.target.value})}
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* 🎉 SUCCESS MODAL */}
      {showSuccess && (
        <div className="success-popup">
          <h3>🎉 Feedback Submitted Successfully 🎉</h3>
          <p>Thank you! Your response has been saved.</p>
        </div>
      )}

      <Fotter />
    </div>
  );
};

export default Feedback;
