import React, { useState } from "react";
import emailjs from "emailjs-com";
import confetti from "canvas-confetti";

const EmailFeedback = () => {
  // ✅ Hooks MUST be inside component
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comments: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // 🎉 Confetti
  const fireConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 85,
      origin: { y: 0.6 },
    });
  };

  // 📤 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.comments) {
      alert("Please fill all fields");
      return;
    }

    if (formData.rating === 0) {
      alert("Please select star rating ⭐");
      return;
    }

    emailjs
      .send(
        "service_ik7h5v2",
        "template_1dfvicc",
        {
          name: formData.name,
          rating: formData.rating,
          comments: formData.comments,
        },
        "DErnpItmf4y7tzbFB"
      )
      .then(() => {
        setShowSuccess(true);
        fireConfetti();
        setFormData({ name: "", rating: 0, comments: "" });
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send email");
      });
  };

  return (
    <div>
      <h2>Feedback</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <textarea
          placeholder="Your feedback"
          value={formData.comments}
          onChange={(e) =>
            setFormData({ ...formData, comments: e.target.value })
          }
        />

        <div>
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              style={{ cursor: "pointer", fontSize: "20px" }}
              onClick={() =>
                setFormData({ ...formData, rating: n })
              }
            >
              {formData.rating >= n ? "★" : "☆"}
            </span>
          ))}
        </div>

        <button type="submit">Send</button>
      </form>

      {showSuccess && <p>✅ Feedback sent successfully!</p>}
    </div>
  );
};

export default EmailFeedback;
