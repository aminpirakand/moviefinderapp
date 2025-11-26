import { useState } from 'react';
function ContactForm() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // یک تابع مدیریت تغییرات برای همه فیلدها
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value, // استفاده از نام فیلد برای آپدیت کردن بخش درست از State
    }));
  };


    const [errors, setErrors] = useState({}); // State برای نگهداری خطاها

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log('Form data submitted:', formData);
      alert('Thank you for your message!');
      // پاک کردن فرم پس از ارسال موفق
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const getInputClass = (hasError) => `
    w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-200
    ${hasError 
      ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
      : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}
  `;

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
       <input 
        type="text" 
        id="name" 
        name="name" 
        value={formData.name} // خواندن از State
        onChange={handleChange} // آپدیت کردن State
      />
    {errors.name && <p className="error-text">{errors.name}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
              <input 
        type="email" 
        id="email" 
        name="email" 
        value={formData.email}
        onChange={handleChange}
      />
    {errors.email && <p className="error-text">{errors.email}</p>}

      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
       <textarea 
        id="message" 
        name="message" 
        rows="5"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
    {errors.message && <p className="error-text">{errors.message}</p>}

      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ContactForm;
