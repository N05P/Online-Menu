import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9jr7xx6',     
      'template_c55awla',    
      form.current,
      'YyFXXjYx4OK2Eirma'      
    ).then(
      (result) => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message.");
        console.error(error);
      }
    );
  };

  return (
    <div className="h-[80vh] flex items-center justify-center p-6">
      <div className="relative bg-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">

        <div className="z-10 p-6 md:w-1/3 flex flex-col justify-center gap-6 rounded-2xl shadow-md m-4">
          <div className="flex items-start gap-4">
            <MapPin className="text-purple-600 w-6 h-6" />
            <div>
              <h4 className="font-bold text-purple-800">Location</h4>
              <p className="text-sm text-white">123 Main St, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-purple-600 w-6 h-6" />
            <div>
              <h4 className="font-bold text-purple-800">Phone</h4>
              <p className="text-sm text-white">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-purple-600 w-6 h-6" />
            <div>
              <h4 className="font-bold text-purple-800">Hours</h4>
              <p className="text-sm text-white">Mon - Sat, 10AM - 6PM</p>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 p-8 flex flex-col justify-center relative">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Form</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 text-black">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Comment or message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-xl transition-all w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
