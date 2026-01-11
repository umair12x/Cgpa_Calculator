import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPaperPlane, FaUser, FaComment } from "react-icons/fa";
import { MdEmail, MdSmartphone } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [activeMethod, setActiveMethod] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return false;
    }
    if (!formData.message.trim()) {
      alert("Please enter your message");
      return false;
    }
    if (formData.message.trim().length < 10) {
      alert("Please enter a message of at least 10 characters");
      return false;
    }
    return true;
  };

  const handleContact = (method) => {
    if (!validateForm()) return;

    setIsSending(true);
    setActiveMethod(method);

    const phoneNumber = "923095330695";
    const encodedMessage = encodeURIComponent(
      `👋 Hello! My name is *${formData.name}*\n\n💬 Message:\n${formData.message}\n\n📱 Sent via CGPA Calculator`
    );

    let url;
    switch (method) {
      case 'whatsapp':
        url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        break;
      case 'email':
        const subject = encodeURIComponent(`Message from ${formData.name} - UAF CGPA Calculator`);
        const body = encodeURIComponent(
          `Sender Name: ${formData.name}\n\nMessage:\n${formData.message}\n\nSent via UAF CGPA Calculator Contact Form`
        );
        url = `mailto:umairim24@gmail.com?subject=${subject}&body=${body}`;
        break;
      default:
        return;
    }

    setTimeout(() => {
      window.open(url, "_blank");
      setIsSending(false);
      setActiveMethod(null);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Show contact method options
      setIsSending(true);
      setTimeout(() => setIsSending(false), 1000);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl shadow-lg mb-4">
            <HiOutlineChatBubbleLeftRight className="text-2xl text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Quick Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-md mx-auto">
            Need help or have feedback? Reach out instantly.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-emerald-500/10 dark:shadow-emerald-900/20 border border-white/20 dark:border-gray-700/30 p-5 sm:p-6 lg:p-8"
        >
          {/* Form Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg">
                <RiMessage2Line className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">
                Send a Message
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Fill once, send anywhere. Your message is ready in seconds.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Name Input */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 dark:text-emerald-400">
                  <FaUser className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Message
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-emerald-500 dark:text-emerald-400">
                  <FaComment className="w-4 h-4" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your feedback, questions, or suggestions..."
                  rows="4"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base resize-none"
                />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {formData.message.length}/500 characters
              </div>
            </div>

            {/* Preview Card */}
            <AnimatePresence>
              {(formData.name || formData.message) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gradient-to-r from-emerald-50/50 to-cyan-50/50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-emerald-100/50 dark:border-emerald-800/30"
                >
                  <div className="text-xs font-medium text-emerald-700 dark:text-emerald-300 mb-2">
                    Message Preview
                  </div>
                  <div className="space-y-2">
                    {formData.name && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          <span className="font-medium">From:</span> {formData.name}
                        </span>
                      </div>
                    )}
                    {formData.message && (
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {formData.message.length > 100 
                            ? formData.message.substring(0, 100) + '...' 
                            : formData.message}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact Methods */}
            <div className="pt-2">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Send via:
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp Button */}
                <motion.button
                  type="button"
                  onClick={() => handleContact('whatsapp')}
                  disabled={isSending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative overflow-hidden py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-3 ${
                    activeMethod === 'whatsapp'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/40'
                  } border border-green-100 dark:border-green-800/30`}
                >
                  {isSending && activeMethod === 'whatsapp' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="text-lg" />
                      <span>WhatsApp</span>
                    </>
                  )}
                </motion.button>

                {/* Email Button */}
                <motion.button
                  type="button"
                  onClick={() => handleContact('email')}
                  disabled={isSending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative overflow-hidden py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-3 ${
                    activeMethod === 'email'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                      : 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40'
                  } border border-blue-100 dark:border-blue-800/30`}
                >
                  {isSending && activeMethod === 'email' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <MdEmail className="text-lg" />
                      <span>Email</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MdSmartphone className="text-emerald-500" />
                  <span>+92 309 5330695</span>
                </div>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MdEmail className="text-emerald-500" />
                  <span>umairim24@gmail.com</span>
                </div>
              </div>
            </div>
          </form>

          {/* Send Button (Alternative) */}
          <motion.div 
            className="mt-6 sm:mt-8"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSending}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/20 dark:shadow-emerald-900/30 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaPaperPlane className="text-lg" />
              <span>Prepare Message</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Responsive Tips */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-full border border-gray-200 dark:border-gray-700">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Choose your preferred contact method above
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;