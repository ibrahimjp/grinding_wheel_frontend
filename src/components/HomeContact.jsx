import React, { useState } from 'react'

const HomeContact = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitSuccess, setSubmitSuccess] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          
          // Reset success message after 3 seconds
          setTimeout(() => setSubmitSuccess(false), 3000);
        }, 1500);
      };
  return (
    <div>
        <div className="contact-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="section-heading">
                <h6 className="section-subtitle">| Contact Us</h6>
                <h2 className="section-title">Get In Touch With Our Team</h2>
                <p className="section-description">
                  Have questions or need assistance? Reach out to us and we'll get back to you promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info Column */}
            <div className="col-lg-6">
              <div className="contact-info-card">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5569631828794!2d78.48642287526678!3d17.433036583462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1cfd24ba67%3A0xe63dab2e4afa9cdd!2s5-4-92%2F2%2F1%2C%20Hyderbasthi%2C%20Rani%20Gunj%2C%20Secunderabad%2C%20Telangana%20500003!5e0!3m2!1sen!2sin!4v1746536454619!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Location Map"
                  ></iframe>
                </div>
                <div>
                    <h5 className='mt-7'>Connect With Us</h5>
                    <ul>
                        <li className='mt-3'>
                            <a href="https://wa.me/918885656752" target='_blank' className='text-bold text-black'><i class="fa-brands fa-whatsapp font-bold text-xl text-green-500"></i> +91 8885656752</a>
                        </li>

                        <li>
                             <a href="mailto:burhaniabron@gmail" target='_blank' className='text-bold text-black'><i class="fa-solid fa-envelope font-bold text-xl text-gray-500"></i> burhaniabron@gmail.com</a>
                        </li>
                        <li className='inline-flex'>
                             <i class='fa-solid fa-location-dot font-bold text-xl text-red-500'></i>
                             <div className='ml-3'>X Road<br/> Bolaram Nagar<br/> Rani Gunj<br/> Secunderabad</div>

                        </li>

                        <li>
                        <i class="fa-solid fa-phone-volume font-bold text-xl text-gray-500"></i> 088856 56752
                        </li>
                    </ul>
                </div>
           
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="col-lg-6">
              <div className="contact-form-card">
                <h3 className="form-title">Send Us a Message</h3>
                <p className="form-subtitle">We'll respond within 24 hours</p>
                
                {submitSuccess && (
                  <div className="alert alert-success" role="alert">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContact