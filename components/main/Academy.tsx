import React, { useState } from "react";
import AcademyCard from "../sub/AcademyCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type DescriptionKeys =
  | "For Beginners"
  | "Two Days a Week"
  | "3-Month Crash Course"
  | "Aspiring Fighters"
  | "Personal Training"
  | "Fitness & Self-Defense"
  | "Training with Head Coach"
  | "Weight or Fat-Cut Program";

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState<DescriptionKeys | null>(
    null
  );

  const handleToggleExpand = (title: DescriptionKeys) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

  const descriptions: Record<DescriptionKeys, string> = {
    "For Beginners":
      "Perfect for those who are new to martial arts. This program is designed to help beginners learn the fundamental techniques, build a strong foundation, and embark on their martial arts journey with confidence. This program includes basic martial arts techniques such as punches, kicks, and basic self-defense. It focuses on building strength, flexibility, and coordination. Our expert instructors ensure that you develop the right techniques from the start, providing personalized feedback and support to help you progress effectively. Additionally, the program includes introductory lessons on martial arts philosophy and history, ensuring a well-rounded understanding of the discipline. Students will engage in partner drills, individual practice, and group exercises, creating a supportive and motivating environment for all participants.",
    "Two Days a Week":
      "For those who can't commit full-time, our 'Two Days a Week' program allows you to join us for two days a week over four weeks. It's an ideal option for individuals with busy schedules who still want to experience the benefits of martial arts training. This program offers flexibility for busy individuals. Classes include a mix of strength training, cardio, and martial arts skills to keep you fit and engaged. Each session is designed to maximize your training time, ensuring you get a comprehensive workout that fits your lifestyle. The program also includes personalized fitness assessments to track your progress and adjust the training intensity accordingly. Participants will receive tailored advice on maintaining fitness outside of class, including home workouts and nutritional tips to support their martial arts journey.",
    "3-Month Crash Course":
      "Join our intensive 3-month crash course to master the fundamentals and basics of martial arts. This program is designed for individuals who are eager to accelerate their learning and gain a comprehensive understanding of martial arts principles. An intensive program that covers fundamental martial arts techniques, sparring, and advanced self-defense tactics. Ideal for fast learners. The course includes detailed instructions on various techniques, hands-on sparring sessions, and personalized coaching to help you achieve rapid progress. Participants will also have access to exclusive workshops and seminars with guest instructors, offering insights into advanced strategies and specialized skills. Regular performance evaluations ensure that each student receives feedback and guidance on their strengths and areas for improvement.",
    "Aspiring Fighters":
      "If you aspire to become a professional fighter, this program is tailored for you. Receive specialized training to enhance your skills, refine techniques, and prepare for competitive martial arts. Unlock your full potential as an aspiring fighter. Tailored training for aspiring fighters, including advanced techniques, fight strategies, and conditioning. Perfect for those aiming to compete professionally. Our training regimen includes rigorous physical conditioning, strategic fight planning, and mental preparation to ensure you are ready for the ring. The program covers advanced striking, grappling, and submission techniques, with an emphasis on real-world application and competition scenarios. Participants will engage in mock competitions and sparring matches to hone their skills and gain practical experience. Besides, the program includes sessions on sports psychology, nutrition, and injury prevention to support holistic fighter development.",
    "Personal Training":
      "Get personalized, one-on-one training with our experienced instructors. Whether your goal is to achieve specific fitness milestones or master advanced martial arts techniques, our personal training program is customized to meet your individual needs. Customized one-on-one sessions focusing on specific goals, whether it's improving fitness, learning advanced techniques, or preparing for competitions. Our trainers provide undivided attention, developing a personalized plan that targets your unique goals and challenges. Each session is tailored to your pace and skill level, ensuring optimal progress and enjoyment. In addition to physical training, the program includes personalized advice on diet, lifestyle changes, and mental conditioning to support your overall well-being. Regular assessments and feedback sessions ensure that your training remains aligned with your evolving goals.",
    "Fitness & Self-Defense":
      "Focus on fitness and self-defense skills with our specialized program suitable for all fitness levels. Improve your overall health, boost your confidence, and learn essential self-defense techniques to stay safe in any situation. Combines fitness routines with self-defense techniques. Great for improving overall fitness while learning how to protect yourself. The program includes high-intensity workouts, practical self-defense drills, and strategies to improve your reaction times and situational awareness. Participants will learn to defend against various threats, including strikes, grabs, and weapons, using practical and effective techniques. The program also emphasizes the importance of situational awareness, conflict avoidance, and de-escalation tactics. Regular fitness assessments and progress tracking ensure that participants stay motivated and achieve their fitness goals while gaining valuable self-defense skills.",
    "Training with Head Coach":
      "Train directly with our head coach, Owais Yaqoob, a seasoned martial artist with a wealth of experience. Receive expert guidance, personalized coaching, and valuable insights to take your martial arts journey to the next level. Get personalized coaching from our head coach, Owais Yaqoob. Focus on technique refinement, fight strategies, and advanced training. Benefit from Coach Owais's extensive experience and tailored feedback to refine your skills and improve your performance in a focused training environment. The program includes advanced drills, sparring sessions, and strategic planning tailored to your specific needs and goals. Participants will receive in-depth analysis of their techniques and performance, with actionable feedback to accelerate improvement. Additionally, the program offers exclusive access to high-level training resources and networking opportunities within the martial arts community.",
    "Weight or Fat-Cut Program":
      "Explore our customized programs designed to help you achieve your weight or fat-cutting goals. Tailored nutrition plans and targeted workout routines will assist you on your journey to a healthier and more active lifestyle. Custom nutrition and workout plans aimed at helping you achieve your weight or fat-cutting goals. Includes dietary guidance and tailored exercises. Our comprehensive approach includes meal planning, regular progress tracking, and motivational support to help you achieve sustainable results. The program is designed to fit your lifestyle and preferences, ensuring that you can maintain your new habits long-term. Participants will receive personalized coaching on proper nutrition, portion control, and effective workout techniques. Regular check-ins and adjustments ensure that your plan evolves with your progress, keeping you on track to meet your goals.",
  };

  return (
    <div className="relative">
      <div
        className="flex flex-col items-center justify-center py-20 sticky top-0"
        id="academy"
        style={{ background: "#030014" }}
      >
        <h1 className="text-xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 border-b-8 border-purple-500">
          Lions Den Martial Arts Academy
        </h1>
      </div>
      <div className="h-half w-full flex flex-col gap-10 px-10 py-20">
        {Object.keys(descriptions).map((title) => (
          <div key={title} className="p-0 rounded-lg">
            <AcademyCard
              src="/gymicons.png"
              title={title as DescriptionKeys}
              description={descriptions[title as DescriptionKeys]}
              pricing={0} // Pricing is set to 0 as it's not used
              onToggleExpand={() =>
                handleToggleExpand(title as DescriptionKeys)
              }
              isExpanded={expandedCard === title}
              onPayment={() => {}} // onPayment is not used
            />
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Projects;

// import React, { useState } from "react";
// import AcademyCard from "../sub/AcademyCard";
// import Modal from "../main/Modal"; // Import the Modal component
// import Image from "next/image";
// import { signInWithGoogle, resetPassword } from "../../utils/auth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// type DescriptionKeys =
//   | "For Beginners"
//   | "Two Days a Week"
//   | "3-Month Crash Course"
//   | "Aspiring Fighters"
//   | "Personal Training"
//   | "Fitness & Self-Defense"
//   | "Training with Head Coach"
//   | "Weight or Fat-Cut Program";

// type Customer = {
//   name: string;
//   email: string;
//   contact: string;
//   password: string;
//   program: DescriptionKeys | null;
// };

// const Projects = () => {
//   const [expandedCard, setExpandedCard] = useState<DescriptionKeys | null>(
//     null
//   );
//   const [customer, setCustomer] = useState<Customer>({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     program: null,
//   });
//   const [selectedTitle, setSelectedTitle] = useState<DescriptionKeys | null>(
//     null
//   );
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [loading, setLoading] = useState(false); // Loading state
//   const [paymentSuccessful, setPaymentSuccessful] = useState(false); // Payment success state

//   const handleToggleExpand = (title: DescriptionKeys) => {
//     setExpandedCard(expandedCard === title ? null : title);
//   };

//   const descriptions: Record<DescriptionKeys, string> = {
//     "For Beginners":
//       "Perfect for those who are new to martial arts. This program is designed to help beginners learn the fundamental techniques, build a strong foundation, and embark on their martial arts journey with confidence. This program includes basic martial arts techniques such as punches, kicks, and basic self-defense. It focuses on building strength, flexibility, and coordination. Our expert instructors ensure that you develop the right techniques from the start, providing personalized feedback and support to help you progress effectively. Additionally, the program includes introductory lessons on martial arts philosophy and history, ensuring a well-rounded understanding of the discipline. Students will engage in partner drills, individual practice, and group exercises, creating a supportive and motivating environment for all participants.",
//     "Two Days a Week":
//       "For those who can't commit full-time, our 'Two Days a Week' program allows you to join us for two days a week over four weeks. It's an ideal option for individuals with busy schedules who still want to experience the benefits of martial arts training. This program offers flexibility for busy individuals. Classes include a mix of strength training, cardio, and martial arts skills to keep you fit and engaged. Each session is designed to maximize your training time, ensuring you get a comprehensive workout that fits your lifestyle. The program also includes personalized fitness assessments to track your progress and adjust the training intensity accordingly. Participants will receive tailored advice on maintaining fitness outside of class, including home workouts and nutritional tips to support their martial arts journey.",
//     "3-Month Crash Course":
//       "Join our intensive 3-month crash course to master the fundamentals and basics of martial arts. This program is designed for individuals who are eager to accelerate their learning and gain a comprehensive understanding of martial arts principles. An intensive program that covers fundamental martial arts techniques, sparring, and advanced self-defense tactics. Ideal for fast learners. The course includes detailed instructions on various techniques, hands-on sparring sessions, and personalized coaching to help you achieve rapid progress. Participants will also have access to exclusive workshops and seminars with guest instructors, offering insights into advanced strategies and specialized skills. Regular performance evaluations ensure that each student receives feedback and guidance on their strengths and areas for improvement.",
//     "Aspiring Fighters":
//       "If you aspire to become a professional fighter, this program is tailored for you. Receive specialized training to enhance your skills, refine techniques, and prepare for competitive martial arts. Unlock your full potential as an aspiring fighter. Tailored training for aspiring fighters, including advanced techniques, fight strategies, and conditioning. Perfect for those aiming to compete professionally. Our training regimen includes rigorous physical conditioning, strategic fight planning, and mental preparation to ensure you are ready for the ring. The program covers advanced striking, grappling, and submission techniques, with an emphasis on real-world application and competition scenarios. Participants will engage in mock competitions and sparring matches to hone their skills and gain practical experience. Besides, the program includes sessions on sports psychology, nutrition, and injury prevention to support holistic fighter development.",
//     "Personal Training":
//       "Get personalized, one-on-one training with our experienced instructors. Whether your goal is to achieve specific fitness milestones or master advanced martial arts techniques, our personal training program is customized to meet your individual needs. Customized one-on-one sessions focusing on specific goals, whether it's improving fitness, learning advanced techniques, or preparing for competitions. Our trainers provide undivided attention, developing a personalized plan that targets your unique goals and challenges. Each session is tailored to your pace and skill level, ensuring optimal progress and enjoyment. In addition to physical training, the program includes personalized advice on diet, lifestyle changes, and mental conditioning to support your overall well-being. Regular assessments and feedback sessions ensure that your training remains aligned with your evolving goals.",
//     "Fitness & Self-Defense":
//       "Focus on fitness and self-defense skills with our specialized program suitable for all fitness levels. Improve your overall health, boost your confidence, and learn essential self-defense techniques to stay safe in any situation. Combines fitness routines with self-defense techniques. Great for improving overall fitness while learning how to protect yourself. The program includes high-intensity workouts, practical self-defense drills, and strategies to improve your reaction times and situational awareness. Participants will learn to defend against various threats, including strikes, grabs, and weapons, using practical and effective techniques. The program also emphasizes the importance of situational awareness, conflict avoidance, and de-escalation tactics. Regular fitness assessments and progress tracking ensure that participants stay motivated and achieve their fitness goals while gaining valuable self-defense skills.",
//     "Training with Head Coach":
//       "Train directly with our head coach, Owais Yaqoob, a seasoned martial artist with a wealth of experience. Receive expert guidance, personalized coaching, and valuable insights to take your martial arts journey to the next level. Get personalized coaching from our head coach, Owais Yaqoob. Focus on technique refinement, fight strategies, and advanced training. Benefit from Coach Owais's extensive experience and tailored feedback to refine your skills and improve your performance in a focused training environment. The program includes advanced drills, sparring sessions, and strategic planning tailored to your specific needs and goals. Participants will receive in-depth analysis of their techniques and performance, with actionable feedback to accelerate improvement. Additionally, the program offers exclusive access to high-level training resources and networking opportunities within the martial arts community.",
//     "Weight or Fat-Cut Program":
//       "Explore our customized programs designed to help you achieve your weight or fat-cutting goals. Tailored nutrition plans and targeted workout routines will assist you on your journey to a healthier and more active lifestyle. Custom nutrition and workout plans aimed at helping you achieve your weight or fat-cutting goals. Includes dietary guidance and tailored exercises. Our comprehensive approach includes meal planning, regular progress tracking, and motivational support to help you achieve sustainable results. The program is designed to fit your lifestyle and preferences, ensuring that you can maintain your new habits long-term. Participants will receive personalized coaching on proper nutrition, portion control, and effective workout techniques. Regular check-ins and adjustments ensure that your plan evolves with your progress, keeping you on track to meet your goals.",
//   };

//   const pricing: Record<DescriptionKeys, number> = {
//     "For Beginners": 1,
//     "Two Days a Week": 1200,
//     "3-Month Crash Course": 10000,
//     "Aspiring Fighters": 1500,
//     "Personal Training": 2000,
//     "Fitness & Self-Defense": 1000,
//     "Training with Head Coach": 2500,
//     "Weight or Fat-Cut Program": 2000,
//   };

//   const handlePayment = async (title: DescriptionKeys, customer: Customer) => {
//     if (!isLoggedIn) {
//       setIsSignInModalOpen(true);
//       return;
//     }
//     try {
//       const amountInRupees = pricing[title];
//       const amountInPaise = amountInRupees; // Convert to paise

//       const response = await fetch("/api/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount: amountInPaise }),
//       });

//       if (!response.ok) {
//         toast.error("Failed to create order");
//         return;
//       }

//       const orderData = await response.json();
//       const options = {
//         key: "rzp_live_vdK7EWhohq7pdQ",
//         amount: orderData.amount,
//         currency: "INR",
//         name: "Lions Den Martial Arts Academy",
//         description: `Payment for - ${title}`,
//         order_id: orderData.id,
//         handler: function (response: any) {
//           setPaymentSuccessful(true); // Set payment successful state
//           toast.success(`Payment successful!`);
//         },
//         prefill: {
//           name: customer.name,
//           email: customer.email,
//           contact: customer.contact,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp1 = new (window as any).Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       toast.error(
//         "An error occurred while processing payment. Please try again later"
//       );
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setCustomer((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePaymentClick = (title: DescriptionKeys) => {
//     setSelectedTitle(title);
//     setCustomer((prev) => ({ ...prev, program: title }));
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const validatePassword = (password: string) => {
//     // Updated regex to include at least one special character
//     const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/;
//     return regex.test(password);
//   };

//   const handleModalSubmit = async () => {
//     if (
//       !customer.name ||
//       !customer.email ||
//       !customer.contact ||
//       !customer.password ||
//       !customer.program
//     ) {
//       toast.error("All fields are required");
//       return;
//     }

//     if (!validatePassword(customer.password)) {
//       toast.error(
//         "Password must contain at least 1 uppercase letter, 1 number, 1 special character, and be at least 8 characters long"
//       );
//       return;
//     }
//     setLoading(true); // Start loading
//     if (selectedTitle) {
//       // Handle registration logic here
//       const response = await fetch("/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(customer),
//       });
//       setLoading(false); // Stop loading
//       if (response.ok) {
//         const data = await response.json();
//         if (data.message === "User registered successfully") {
//           setIsLoggedIn(true);
//           setIsRegistered(true);
//           toast.success("Registration done successfully.");
//           handlePayment(customer.program, customer);
//         } else {
//           toast.error("Internal server error. Please try again later.");
//         }
//       } else {
//         const data = await response.json();
//         if (data.message === "User already exists, please sign in.") {
//           toast.error(data.message);
//         } else {
//           toast.error("Invalid email or password. Please try again.");
//         }
//       }
//       setIsModalOpen(false);
//     }
//   };

//   const handleSignInModalClose = () => {
//     setIsSignInModalOpen(false);
//   };

//   const handleSignInSubmit = async () => {
//     if (!customer.email || !customer.password) {
//       toast.error("All fields are required");
//       return;
//     }

//     try {
//       const response = await fetch("/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: customer.email,
//           password: customer.password,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setIsLoggedIn(true);
//         toast.success("Signed in successfully.");
//         setIsSignInModalOpen(false);
//         if (selectedTitle) {
//           handlePayment(selectedTitle, customer); // Assuming selectedTitle is set elsewhere
//         } else {
//           // Handle the case where selectedTitle is null
//           console.error("selectedTitle is null");
//         }
//       } else {
//         const data = await response.json();
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error("Error during sign-in");
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       const user = await signInWithGoogle();
//       setIsLoggedIn(true);
//       toast.success("Signed in successfully.");
//       setIsSignInModalOpen(false);
//       if (selectedTitle) {
//         handlePayment(selectedTitle, customer); // Assuming selectedTitle is set elsewhere
//       } else {
//         // Handle the case where selectedTitle is null
//         console.error("selectedTitle is null");
//       }
//     } catch (error) {
//       if (isErrorWithCode(error) && error.code === "UserNotRegistered") {
//         toast.error("You are not an existing member, please register first.");
//       } else {
//         toast.error("Google sign-in failed. Please try again.");
//       }
//     }
//   };

//   // Type guard to check if the error is an Error object with a 'code' property
//   function isErrorWithCode(error: unknown): error is { code: string } {
//     return typeof error === "object" && error !== null && "code" in error;
//   }

//   const handleForgotPassword = async () => {
//     if (!customer.email) {
//       toast.error("Please enter your email to reset the password.");
//       return;
//     }

//     try {
//       await resetPassword(customer.email);
//       toast.info("Password reset email sent. Please check your inbox.");
//     } catch (error) {
//       toast.error("Error sending password reset email. Please try again.");
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="relative">
//       <div
//         className="flex flex-col items-center justify-center py-20 sticky top-0"
//         id="academy"
//         style={{ background: "#030014" }}
//       >
//         <h1 className="text-xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 border-b-8 border-purple-500">
//           Lions Den Martial Arts Academy
//         </h1>
//       </div>
//       <Modal isOpen={isModalOpen} onClose={handleModalClose}>
//         <div className="flex flex-col items-center gap-4 p-2 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto mt-4">
//           <h2 className=" text-xl md:text-2xl font-semibold">
//             Create a new account
//           </h2>
//           <p className="text-gray-600 text-center">
//             Enter your details to register.
//           </p>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={customer.name}
//             onChange={handleInputChange}
//             className=" mt-4 p-4 border rounded w-full"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={customer.email}
//             onChange={handleInputChange}
//             className="p-4 border rounded w-full"
//             required
//           />
//           <input
//             type="tel"
//             name="contact"
//             placeholder="Contact Number"
//             value={customer.contact}
//             onChange={handleInputChange}
//             className="p-4 border rounded w-full"
//             required
//           />
//           <div className="relative w-full">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={customer.password}
//               onChange={handleInputChange}
//               className="p-4 border rounded w-full"
//               required
//             />
//             <span
//               onClick={toggleShowPassword}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </span>
//           </div>
//           <div className="text-xs text-gray-500">
//             Must contain 1 uppercase letter, 1 special character and 1 number,
//             min. 8 characters.
//           </div>
//           {isRegistered ? (
//             <button
//               onClick={() => handlePayment(selectedTitle!, customer)}
//               className="text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg w-full px-4 py-2 dark:focus:ring-green-400/55 mt-4"
//               disabled={paymentSuccessful} // Disable button if payment is successful
//             >
//               {paymentSuccessful
//                 ? "Payment successful! ✅"
//                 : "Proceed for Payment"}
//             </button>
//           ) : (
//             <button
//               onClick={handleModalSubmit}
//               className="text-white bg-blue-600 hover:bg-[#4285F4] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg w-full px-4 py-2 dark:focus:ring-[#4285F4]/55 mt-4"
//               disabled={loading}
//             >
//               {loading ? "Registering..." : "Register"}
//             </button>
//           )}
//           <p className="mt-4 text-gray-500 text-sm">
//             Already a member?{" "}
//             <a
//               className="text-blue-600 underline"
//               style={{ cursor: "pointer" }}
//               onClick={() => {
//                 setIsModalOpen(false);
//                 setIsSignInModalOpen(true);
//               }}
//             >
//               Click to Login
//             </a>
//           </p>
//         </div>
//       </Modal>
//       <Modal isOpen={isSignInModalOpen} onClose={handleSignInModalClose}>
//         <div className="flex flex-col items-center gap-4 p-2 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto mt-4 continue-with-container">
//           <h2 className="text-xl md:text-2xl font-semibold">
//             Sign in to your account
//           </h2>
//           <p className="text-gray-600 text-center">
//             Enter your details to sign in.
//           </p>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email address"
//             value={customer.email}
//             onChange={handleInputChange}
//             className="mt-4 p-4 border rounded w-full"
//             required
//           />
//           <div className="relative w-full">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={customer.password}
//               onChange={handleInputChange}
//               className="p-4 border rounded w-full"
//               required
//             />
//             <span
//               onClick={toggleShowPassword}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </span>
//           </div>
//           <div className="flex items-center justify-end w-full">
//             <a
//               className="text-blue-600 hover:text-blue-400"
//               style={{ cursor: "pointer" }}
//               onClick={handleForgotPassword}
//             >
//               Forgot password?
//             </a>
//           </div>
//           {isLoggedIn ? (
//             <button
//               onClick={() => handlePayment(selectedTitle!, customer)}
//               className="text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg w-full px-4 py-2 dark:focus:ring-green-400/55 mt-4"
//               disabled={paymentSuccessful} // Disable button if payment is successful
//             >
//               {paymentSuccessful
//                 ? "Payment successful! ✅"
//                 : "Proceed for Payment"}
//             </button>
//           ) : (
//             <button
//               onClick={handleSignInSubmit}
//               className="text-white bg-blue-600 hover:bg-[#4285F4] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg w-full px-4 py-2 dark:focus:ring-[#4285F4]/55 mt-4"
//             >
//               Sign in
//             </button>
//           )}
//           <p className="mt-4 text-gray-500 text-sm continue-with ">
//             Or continue with
//           </p>
//           <div className="flex justify-around w-full mt-2">
//             <button
//               onClick={handleGoogleSignIn}
//               className="bg-white border rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-500 px-4 py-2 flex items-center"
//             >
//               <Image
//                 src="/google.png"
//                 alt="Google"
//                 width={24}
//                 height={24}
//                 className="mr-2"
//               />
//               Google
//             </button>
//           </div>
//           <p className="mt-4 text-gray-500 text-sm">
//             Not a member?{" "}
//             <a
//               className="text-blue-600 underline"
//               style={{ cursor: "pointer" }}
//               onClick={() => {
//                 setIsModalOpen(true);
//                 setIsSignInModalOpen(false);
//               }}
//             >
//               Click to Register
//             </a>
//           </p>
//         </div>
//       </Modal>
//       <div className="h-half w-full flex flex-col gap-10 px-10 py-20">
//         {Object.keys(descriptions).map((title) => (
//           <div key={title} className="p-0 rounded-lg">
//             <AcademyCard
//               src="/gymicons.png"
//               title={title as DescriptionKeys}
//               description={descriptions[title as DescriptionKeys]}
//               pricing={pricing[title as DescriptionKeys]}
//               onToggleExpand={() =>
//                 handleToggleExpand(title as DescriptionKeys)
//               }
//               isExpanded={expandedCard === title}
//               onPayment={() => handlePaymentClick(title as DescriptionKeys)}
//             />
//           </div>
//         ))}
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Projects;
