import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}

export default ContactForm;