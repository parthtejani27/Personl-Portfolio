import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EmailLink = () => {
  const email = "parthtejani27@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    // Try to open email client
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;

    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
    });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 text-text-secondary hover:text-accent-main transition-colors inline-flex items-center gap-2"
      >
        <Image src="/icon/gmail.svg" alt="Mail" width={50} height={50} />
      </button>

      {/* Centered Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
          >
            <div className="bg-accent-main font-bold text-text-primary px-6 py-3 rounded-lg shadow-lg">
              Email copied to clipboard!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EmailLink;
