import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2>Contact Us</h2>
{% if messages %}
    {% for message in messages %}
        <p className="{% if message.tags %}{{ message.tags }}{% endif %}">{{ message }}</p>
    {% endfor %}
{% endif %}
<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Send Message</button>
</form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
