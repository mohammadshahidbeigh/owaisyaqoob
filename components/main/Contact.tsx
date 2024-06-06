"use client";
import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
// import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | "idle">("idle");

  const isInView = useInView(formRef, { margin: "-100px" });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          "service_ac0r0lp",
          "template_foahfct",
          formRef.current,
          "yKGeBjOaC9QJ2wIYy"
        );
        setStatus("success");
        formRef.current.reset(); // Reset the form fields
        // Show success toast
        toast.success("Your message has been sent successfully!", {
          position: "bottom-right",
          autoClose: 5000, // 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        setStatus("error");

        // Show error toast
        toast.error("An error occurred. Please try again later.", {
          position: "bottom-right",
          autoClose: 5000, // 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <motion.form
      ref={formRef}
      className="contact flex flex-col md:flex-row items-center m-auto px-5 py-20"
      variants={variants}
      initial="initial"
      whileInView="animate"
      onSubmit={sendEmail}
    >
      <div
        className="textContainer flex flex-col gap-4 flex-1 md:mr-8 "
        id="contact"
      >
        <h1 className="text-3xl md:text-6xl mb-4 ml-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Contact Us
        </h1>
        <div className="item font-bold text-white text-lg md:text-xl ml-3">
          <h2>Email:</h2>
          <a
            href="mailto:Owaisyaqoob534@gmail.com"
            className="text-sm md:text-base text-white"
          >
            Owaisyaqoob534@gmail.com
          </a>
        </div>
        <div className="item font-bold text-white text-lg md:text-xl ml-3 ">
          <h2>Address:</h2>
          <a
            href="https://www.google.com/maps/place/LION'S+DEN+MARTIAL+ARTS+ACADEMY/@33.8717102,74.9006797,17z/data=!3m1!4b1!4m6!3m5!1s0x38e1f5a4453b6b81:0x7c37fc9584632030!8m2!3d33.8717102!4d74.9032546!16s%2Fg%2F11n5bqgvqx?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-white"
          >
            Near Shaheed Park, Opposite Alamdar Masjid 3rd Floor Dangerpora,
            Pulwama.
          </a>
        </div>

        <div className="item font-bold text-white text-lg md:text-xl ml-3">
          <h2>Phone-Whatsapp:</h2>
          <a
            href="https://wa.me/919797555443"
            className="text-sm md:text-base text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 97975 55443
          </a>
          <a
            href="https://wa.me/919682347775"
            className="text-sm md:text-base text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 96823 47775
          </a>
        </div>
      </div>

      <div className="formContainer flex-1 ml-2 mr-2 mt-12">
        <div className="space-y-4 ">
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            className="w-full p-2 border-b border-white bg-transparent text-white rounded"
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            className="w-full p-2 border-b border-white bg-transparent text-white rounded"
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            className="w-full p-2 border-b border-white bg-transparent text-white rounded"
          />
          <button
            type="submit"
            className="w-full p-3 bg-purple-500 text-white font-bold rounded cursor-pointer"
          >
            Submit
          </button>
          {status === "error" && (
            <div className="flex items-center text-red-500">
              <ToastContainer />
            </div>
          )}

          {status === "success" && (
            <div className="flex items-center text-green-500">
              <ToastContainer />
            </div>
          )}
        </div>
      </div>
    </motion.form>
  );
};

export default Contact;
