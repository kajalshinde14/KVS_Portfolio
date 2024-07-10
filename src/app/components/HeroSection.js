




// "use client"
// import React from 'react';
// import Image from 'next/image';
// import { TypeAnimation } from 'react-type-animation';

// const HeroSection = () => {
//   const scrollToContact = () => {
//     const contactSection = document.getElementById('contact');
//     contactSection.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleDownloadCV = () => {
//     // Replace '/path/to/your-cv.pdf' with the actual path to your CV file
//     const cvUrl = '/images/kajal_resume.pdf';

//     // Create an anchor element
//     const link = document.createElement('a');
//     link.href = cvUrl;
//     link.download = 'kajalshindeCV.pdf'; // Set the desired file name for download
//     link.click();
//   };

//   return (
//     <section>
//       <div className='grid grid-cols-1 sm:grid-cols-12 lg:pl-8'>
//         <div className='col-span-7 place-self-center text-center sm:text-left'>
//           <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
//             <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm {" "}</span>
//             <TypeAnimation
//               sequence={[
//                 'kajal',
//                 1000,
//                 'Web Developer',
//                 1000,
//                 'UI developer',
//                 1000,
//                 'Frontend Developer',
//                 1000
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
//           Enthusiastic frontend web developer with 1 year 2months of experience creating responsive and user-friendly web applications.
//            Proven expertise in HTML, CSS, and JavaScript, with a strong focus on modern frameworks like React.js Next.js
//           </p>
//           <div>
//             <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white' onClick={scrollToContact}>Hire me</button>
//             <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-800 text-white border border-white mt-3' onClick={handleDownloadCV}>
//               <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
//             </button>
//           </div>
//         </div>
//         <div className='col-span-5 place-self-center mt-4 lg:mt-0 rounded-full'>
//           <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
//             <Image src="/images/kajal.png"
//               alt='hero image'
//               className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
//               width={200}
//               height={200}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;






"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenCV = () => {
    const cvUrl = '/images/kajal_resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.target = '_blank'; // Open the PDF in a new tab
    link.rel = 'noopener noreferrer'; // Security measure
    link.click();
  };

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 lg:pl-8'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm {" "}</span>
            <TypeAnimation
              sequence={[
                'kajal',
                1000,
                'Web Developer',
                1000,
                'UI developer',
                1000,
                'Frontend Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            Enthusiastic frontend web developer with 1 year 2 months of experience creating responsive and user-friendly web applications.
            Proven expertise in HTML, CSS, and JavaScript, with a strong focus on modern frameworks like React.js Next.js
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white' onClick={scrollToContact}>Hire me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-800 text-white border border-white mt-3' onClick={handleOpenCV}>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Open CV</span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 rounded-full'>
          <div className='rounded-full bg-[#181818] w-[230px] h-[230px] lg:w-[400px] lg:h-[400px] relative'>
            <Image src="/images/kajal.png"
              alt='hero image'
              className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
