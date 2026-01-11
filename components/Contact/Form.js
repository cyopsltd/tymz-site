import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before submitting
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://us-central1-tymz-site.cloudfunctions.net/sendContactEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form row">
      <div className="col-12">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ borderRadius: "50px" }}
          className={errors.name ? "error" : ""}
        />
        {errors.name && (
          <span
            style={{
              color: "#EF4444",
              fontSize: "14px",
              marginTop: "5px",
              display: "block",
            }}
          >
            {errors.name}
          </span>
        )}
      </div>
      <div className="col-12">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={{ borderRadius: "50px" }}
          className={errors.email ? "error" : ""}
        />
        {errors.email && (
          <span
            style={{
              color: "#EF4444",
              fontSize: "14px",
              marginTop: "5px",
              display: "block",
            }}
          >
            {errors.email}
          </span>
        )}
      </div>
      <div className="col-12">
        <textarea
          name="message"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          style={{ borderRadius: "16px" }}
          className={errors.message ? "error" : ""}
        ></textarea>
        {errors.message && (
          <span
            style={{
              color: "#EF4444",
              fontSize: "14px",
              marginTop: "5px",
              display: "block",
            }}
          >
            {errors.message}
          </span>
        )}
      </div>
      <div className="col-12">
        <button
          className="theme-btn"
          type="submit"
          disabled={isSubmitting}
          style={{
            borderRadius: "50px",
            backgroundColor: "#0066ff",
            borderColor: "#0066ff",
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        >
          {isSubmitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Sending...
            </>
          ) : (
            "Message Submit"
          )}
        </button>
        {submitStatus === "success" && (
          <div
            style={{
              color: "#10b981",
              fontSize: "16px",
              marginTop: "15px",
              fontWeight: "500",
            }}
          >
            ✓ Message sent successfully!
          </div>
        )}
        {submitStatus === "error" && (
          <div
            style={{
              color: "#EF4444",
              fontSize: "16px",
              marginTop: "15px",
              fontWeight: "500",
            }}
          >
            Unable to send message at this time.
          </div>
        )}
      </div>
    </form>
  );
}
