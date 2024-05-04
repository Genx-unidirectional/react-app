"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import toast from "react-hot-toast";
function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.success("Your response recorded");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="h-screen w-full   bg-pink-900 py-12 pt-36 relative"
    >
      {" "}
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute bg-black top-0 left-0 w-full h-full z-0" />
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {" "}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-4xl  md:text-5xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          Website tailored to your business needs! feel free to contact us and
          let us know, What startup business ideas your mind is working on. Our
          website is the one who propel your business strategies.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 text-white focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
