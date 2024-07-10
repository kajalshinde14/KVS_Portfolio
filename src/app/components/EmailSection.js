// "use client"
// import React, { useState } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import Link from "next/link";
// import Image from "next/image";
// import emailjs from '@emailjs/browser'

// const EmailSection = () => {
//   const [name, setName]= useState('');
//   const [email, setEmail]= useState('');
//   const [message, setMessage]= useState('');
  
//   const handleSubmit = async (e) => {
//      e.preventDefault();
//      //your service id,template id,public key
//      const serviceId = 'service_1oqysvh';
//      const templateId = 'template_jjjt4wf';
//      const publicKey = 'dUNmNHrdviq5Q_0jh';
//     //  create a new object that contain dynamic template params
//     const templateParams = {
//       from_name: name,
//       from_email:email,
//       to_name:'kajal shinde',
//       message: message,

//     };
//     // Send the email using EmailJS

//  emailjs.send(serviceId, templateId, templateParams, publicKey)

// .then((response) => {

// console.log('Email sent successfully!', response);
// setName('');
// setEmail('');
// setMessage('');
// })
// .catch((error) => {
// console.error('Error sending email:', error);
// });


//   }

  

//   return (
//     <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 ">
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md">
//           I'm currently looking for new opportunities, my inbox is always
//           open. Whether you have a question or just want to say hi, I'll try
//           my best to get back to you!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href="github.com">
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="linkedin.com">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link>
//         </div>
//       </div>
//       <div>
//         {/* {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             Email sent successfully!
//           </p>
//         ) : ( */}
//           <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-white block mb-2 text-sm font-medium"
//               >
//                 Your email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="jacob@google.com"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="subject"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 onChange={(e) => setName(e.target.value)}
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Message
//               </label>
//               <textarea
//   name="message"
//   id="message"
//   onChange={(e) => setMessage(e.target.value)} // Corrected here
//   className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//   placeholder="Let's talk about..."
// />


//             </div>
//             <button
//               type="submit"
//               className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         {/* )} */}
//       </div>
//     </section>
//   );
// };

// export default EmailSection;






// "use client"
// import React, { useState } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import Link from "next/link";
// import Image from "next/image";
// import emailjs from '@emailjs/browser'

// const EmailSection = () => {
//   const [name, setName]= useState('');
//   const [email, setEmail]= useState('');
//   const [message, setMessage]= useState('');
//   const [emailSent, setEmailSent] = useState(false); // New state for tracking email sent status
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const serviceId = 'service_1oqysvh';
//     const templateId = 'template_jjjt4wf';
//     const publicKey = 'dUNmNHrdviq5Q_0jh';
//     const templateParams = {
//       from_name: name,
//       from_email:email,
//       to_name:'kajal shinde',
//       message: message,
//     };
    
//     emailjs.send(serviceId, templateId, templateParams, publicKey)
//       .then((response) => {
//         console.log('Email sent successfully!', response);
//         setEmailSent(true); // Set emailSent state to true
//         setName('');
//         setEmail('');
//         setMessage('');
//       })
//       .catch((error) => {
//         console.error('Error sending email:', error);
//       });
//   }

//   return (
//     <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 ">
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md">
//           I'm currently looking for new opportunities, my inbox is always
//           open. Whether you have a question or just want to say hi, I'll try
//           my best to get back to you!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href="github.com">
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="linkedin.com">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link>
//         </div>
//       </div>
//       <div>
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label
//               htmlFor="email"
//               className="text-white block mb-2 text-sm font-medium"
//             >
//               Your email
//             </label>
//             <input
//               name="email"
//               type="email"
//               id="email"
//               onChange={(e) => setEmail(e.target.value)}
//               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//               placeholder="jacob@google.com"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="subject"
//               className="text-white block text-sm mb-2 font-medium"
//             >
//               Subject
//             </label>
//             <input
//               name="subject"
//               type="text"
//               id="subject"
//               onChange={(e) => setName(e.target.value)}
//               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//               placeholder="Just saying hi"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="message"
//               className="text-white block text-sm mb-2 font-medium"
//             >
//               Message
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               onChange={(e) => setMessage(e.target.value)} // Corrected here
//               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//               placeholder="Let's talk about..."
//             />
//           </div>
//           {emailSent && (
//             <p className="text-green-500 text-sm mt-2">
//               Email sent successfully!
//             </p>
//           )}
//           <button
//             type="submit"
//             className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default EmailSection;
"use client"

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser'

const EmailSection = () => {
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [message, setMessage]= useState('');
  const [emailSent, setEmailSent] = useState(false); // New state for tracking email sent status
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_1oqysvh';
    const templateId = 'template_jjjt4wf';
    const publicKey = 'dUNmNHrdviq5Q_0jh';
    const templateParams = {
      from_name: name,
      from_email:email,
      to_name:'kajal shinde',
      message: message,
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setEmailSent(true); // Set emailSent state to true
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 ">
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-0">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll try
          my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/kajal-shinde-3b62b7242">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              onChange={(e) => setName(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={(e) => setMessage(e.target.value)} // Corrected here
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          {emailSent && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;