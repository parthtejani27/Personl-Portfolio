import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import EmailLink from "../EmailLink";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const response = await fetch("https://formspree.io/f/xldglbpa", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setIsSubmitting(false);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 2000);
      } else {
        console.log("error");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.log("error");
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen w-full py-20">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-8 right-8 bg-accent-main text-text-primary px-4 py-3 rounded-lg 
              shadow-lg flex items-center gap-2"
          >
            <span className="font-bold">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-[15%]"
        >
          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-24">
            Contact <span className="text-accent-main">Me</span>
          </h2>

          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary">
                  Let's Talk
                </h3>
                <p className="text-text-secondary text-lg">
                  Feel free to reach out for collaborations or just a friendly
                  hello!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <EmailLink />
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/parthtejani27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-main transition-colors"
                  aria-label="GitHub"
                >
                  <Image
                    src="/icon/github.svg"
                    alt="GitHub"
                    width={50}
                    height={50}
                    className="dark:invert"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/parthtejani27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-main transition-colors"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/icon/linkedin.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-text-secondary text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg bg-background-secondary 
                      text-text-primary border border-transparent
                      focus:border-accent-main focus:outline-none
                      transition-all duration-300"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-text-secondary text-sm"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg bg-background-secondary 
                      text-text-primary border border-transparent
                      focus:border-accent-main focus:outline-none
                      transition-all duration-300"
                    placeholder="parth@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-text-secondary text-sm"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-4 rounded-lg bg-background-secondary 
                      text-text-primary border border-transparent
                      focus:border-accent-main focus:outline-none
                      transition-all duration-300 resize-none"
                    placeholder="Hi, I would like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-4 bg-accent-main text-text-primary rounded-lg
                    flex items-center justify-center gap-2
                    hover:bg-accent-main/90 transition-all duration-300"
                >
                  <span className="font-bold">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <Image
                    src="/icon/send.svg"
                    alt="Send"
                    width={50}
                    height={50}
                    className="dark:invert"
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
