import './Contact.css';
import SectionHead from './SectionHead';
import { useState } from 'react';

function Contact() {
  const [copied, setCopied] = useState<{ field: string | null }>({ field: null });


  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ field });
      setTimeout(() => setCopied({ field: null }), 2000);
    });
  };

  const email = "franciscojramirezreyna@gmail.com";
  const phone = "(402) 968-2801";

  return (
    <section className="contact-section">
      <SectionHead number="04" label="No. 04 — Contact" left="caracol" right="brick" />

      <div className="contact-body">
        <div className="contact-slug">
          <span className="tick" />
          <span className="code">No. 04 — Direct</span>
        </div>

        <h1>Contact Me</h1>

        <div className="contact-card chamfer">
          <h2>Francisco Ramirez</h2>

          <div className="contact-field">
            <span><strong>Email:</strong> {email}</span>
            <button onClick={() => handleCopy(email, 'email')}>
              {copied.field === 'email' ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="contact-field">
            <span><strong>Phone:</strong> {phone}</span>
            <button onClick={() => handleCopy(phone, 'phone')}>
              {copied.field === 'phone' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>

      <div className="checker">
        <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
        <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
      </div>
    </section>
  );
}

export default Contact;
