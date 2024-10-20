import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define the structure of the form data
interface FormData {
  name: string;
  email: string;
  plusOne: boolean;
}

const RSVPForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    plusOne: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget; // Get the form element
    const data = new FormData(form);

    // Convert FormData to URLSearchParams
    const params = new URLSearchParams(data as any);

    // Send data to Netlify
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      console.error('Submission failed.');
    }
  };

  return (
    <div style={{ marginBottom: '150px' }}>
      {!submitted ? (
        <form
          name="homiemoon-rsvp"
          className="rsvp-form"
          data-netlify="true"
          onSubmit={handleSubmit} // Handle form submission
          method="POST" // Ensure this is set for Netlify
        >
          <input
            name="name"
            placeholder="Your Name"
            className="rsvp-input"
            value={formData.name}
            onChange={handleChange} // Update form data on input change
            required // Ensure this field is filled out
          />
          <input
            name="email"
            placeholder="Your Email"
            type="email"
            className="rsvp-input"
            value={formData.email}
            onChange={handleChange} // Update form data on input change
            required // Ensure this field is filled out
          />
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <label className="rsvp-label">Plus 1?</label>
            <input
              name="plusOne" // Change to match formData key
              type="checkbox"
              className="rsvp-checkbox"
              checked={formData.plusOne} // Ensure it's the correct key
              onChange={handleChange} // Update form data on checkbox change
            />
          </div>
          <button type="submit" className="rsvp-button">
            RSVP
          </button>
        </form>
      ) : (
        <div
          className="confirmation-message"
          style={{ textAlign: 'center', color: 'forestgreen' }}
        >
          Thank you for your RSVP! We look forward to seeing you!
        </div>
      )}
    </div>
  );
};

export default RSVPForm;
