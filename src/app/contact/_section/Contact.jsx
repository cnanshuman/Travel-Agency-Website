import React from 'react'

const Contact = () => {
  return (
  <>
  <div className="">
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url(/cont.jpg)`,
        }}
        className="  relative bnr bg-cover bg-center bg-no-repeat w-full h-[400px] overflow-hidden"
      >
        <div className="container mx-auto p-4 relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white  max-md:text-5xl text-8xl font-bold">Contact Us</h1>
        </div>
      </div>

     
      
    </div>
  
    <section className="bg-[#f3f3f4] pt-16 pb-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 
               text-[#121212] 
               ">
Let’s start your journey together
</h1>


            <p className="text-lg text-[#121212] leading-7 mb-6">
            We’d love to hear from you! Share your dream destination, ask questions, or simply say hello. Let’s connect and start planning your perfect journey.
            </p>

            <ul className="text-[#121212] text-lg space-y-3">
            <li className="mb-4.5">
  <h2 className="text-[15px] text-[#121212] font-medium mb-2.5 max-sm:mb-0.5">
    Phone No & WhatsApp No
  </h2>
  <a
    href="tel:+9582276626"
    className="max-sm:text-2xl hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400 
               hover:bg-clip-text hover:text-transparent 
               transition-all duration-500 ease-in-out text-3xl"
  >
    +91 95822 76626
  </a>
</li>

<li>
  <h2 className="text-[15px] text-[#121212] font-medium mb-2.5 max-sm:mb-0.5">
    Email ID
  </h2>
  <a
    href="mailto:KulbirTravel@gmail.com"
    className="hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400 
               hover:bg-clip-text hover:text-transparent 
               transition-all duration-500 ease-in-out text-3xl max-sm:text-2xl"
  >
    KulbirTravel@gmail.com
  </a>
</li>

            </ul>
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
        <form className="bg-[#ebebeb] border p-6 rounded-lg shadow-lg space-y-6">
  <div className="flex flex-col md:flex-row gap-4">
    <input
      type="text"
      name="name"
      placeholder="First Name"
      required
      className="flex-1 bg-[#fff] border border-[#e3e3e3] text-[#121212] p-4 rounded-lg placeholder:text-[#121212] focus:outline-none focus:ring-2 focus:ring-red-700"
    />
    <input
      type="text"
      placeholder="Last Name"
      className="flex-1 bg-[#fff] border border-[#e3e3e3] text-[#121212] p-4 rounded-lg placeholder:text-[#121212] focus:outline-none focus:ring-2 focus:ring-red-700"
    />
  </div>

  <div className="flex flex-col md:flex-row gap-4">
    <input
      type="email"
      name="email"
      placeholder="Email ID"
      required
      className="flex-1 bg-[#fff] border border-[#e3e3e3] text-[#121212] p-4 rounded-lg placeholder:text-[#121212] focus:outline-none focus:ring-2 focus:ring-red-700"
    />
    <input
      type="tel"
      name="mobile"
      placeholder="Phone No"
      required
      className="flex-1 bg-[#fff] border border-[#e3e3e3] text-[#121212] p-4 rounded-lg placeholder:text-[#121212] focus:outline-none focus:ring-2 focus:ring-red-700"
    />
  </div>

  <textarea
    rows="5"
    name="message"
    required
    placeholder="Enter Your Message"
    className="w-full bg-[#fff] border border-[#e3e3e3] text-[#121212] p-4 rounded-lg placeholder:text-[#121212] focus:outline-none focus:ring-2 focus:ring-red-700"
  />

  <button
    type="submit"
    className="bg-black text-white font-semibold px-8 py-3 rounded-md hover:bg-[#ff2525] transition"
  >
    Submit Now
  </button>
</form>

        </div>
      </div>
    </section>
  
  </>
  )
}

export default Contact