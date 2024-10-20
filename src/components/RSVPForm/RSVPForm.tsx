import * as React from 'react';

const RSVPForm = () => {
  const test = 1;
  return (
    <form className="rsvp-form" data-netlify="true">
      <input placeholder="Your Name" className="rsvp-input" />
      <input placeholder="Your Email" type="email" className="rsvp-input" />
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <label className="rsvp-label">Plus 1?</label>
        <input type="checkbox" className="rsvp-checkbox" />
      </div>
      <button className="rsvp-button">RSVP</button>
    </form>
  );
};

export default RSVPForm;
