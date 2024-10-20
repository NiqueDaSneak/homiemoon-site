import React, { useState, ChangeEvent } from 'react';

// Define the structure of the form data
interface FormData {
  name: string;
  email: string;
  plusOne: boolean;
}

const RSVPForm: React.FC = () => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default page refresh
    event.preventDefault();

    // Use FormData directly
    const myForm = event.currentTarget; // Get the form element

    // Instead of handling submission with fetch, just allow the form to submit
    // Netlify will handle the form submission as per its default behavior.
  };

  return (
    <div style={{ marginBottom: '150px' }}>
      <form
        name="homiemoon-rsvp"
        className="rsvp-form"
        data-netlify="true" // Required for Netlify form handling
        onSubmit={handleSubmit} // Handle form submission
        method="POST" // Ensure this is set for Netlify
      >
        <input type="hidden" name="form-name" value="homiemoon-rsvp" />
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
    </div>
  );
};

export default RSVPForm;
