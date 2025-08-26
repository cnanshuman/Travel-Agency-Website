"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [expandedReview, setExpandedReview] = useState(null);


  const reviews = [
    {
      id: 1,
      name: "Aarav Sharma",
      rating: 5,
      text: "Amazing service! The ride was smooth, the car was clean, and the driver was very professional. I truly appreciated the punctuality, as the driver arrived exactly on time. The entire journey felt stress-free, and I could completely relax during my travel. This is by far one of the most reliable services I’ve experienced, and I’ll definitely book again.",
    },
    {
      id: 2,
      name: "Priya Kapoor",
      rating: 4,
      text: "I had a wonderful experience with this service. The booking process was easy and quick, which saved me so much time. The ride itself was very comfortable and the driver ensured I felt safe throughout. I really liked the attention to detail, from the cleanliness of the car to the polite communication. Highly recommend for both personal and family travel.",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      rating: 5,
      text: "Highly recommend! The prices were affordable and the quality of service was excellent. The driver was knowledgeable about routes, avoiding traffic, and making the trip smooth. I also noticed how well-maintained the car was, which made the journey even more enjoyable. This service really exceeded my expectations and I’ll continue using it in the future.",
    },
    {
      id: 4,
      name: "Sneha Verma",
      rating: 4,
      text: "The driver was extremely polite and helpful, making sure I felt comfortable from the beginning. The car had a premium feel and the ride was incredibly smooth. I was impressed with how much attention was given to customer care and small details like offering assistance with luggage. Overall, it felt like a luxurious experience at a very reasonable price.",
    },
    {
      id: 5,
      name: "Karan Singh",
      rating: 5,
      text: "Perfect for family trips! The vehicle was spacious, clean, and very safe for kids. I felt reassured by the professionalism of the driver and the overall reliability of the service. What stood out most was how consistent and well-organized everything was, from booking to drop-off. It’s rare to find a service that balances comfort, affordability, and safety this well.",
    },
  ];

  return (
    <>
    
      <div
        className="max-sm:px-4  mt-22 min-h-[80vh] bg-cover bg-center flex items-center justify-center bg-fixed max-sm:pt-[30px] max-sm:pb-[30px] max-md:pt-[30px] max-md:pb-[30px] max-lg:pt-[30px] max-lg:pb-[30px] max-xl:pt-[50px] max-xl:pb-[50px]"
        style={{ backgroundImage: "url('/review.avif')" }}
      >
        <div className="container mx-auto max-w-7xl flex justify-center">
         
          <div className="bg-[#f1f1f1] p-8  w-full max-w-[500px] rounded-lg shadow-lg">
            <h1 className="text-[#121212] text-2xl font-semibold mb-6">
              Share Your Experience
            </h1>

            <form className="grid grid-cols-1 gap-4 ">
             
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Your Rating *</label>
                <div className="flex space-x-2 text-2xl">
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                          className="hidden"
                        />
                        <FaStar
                          className="cursor-pointer transition-colors"
                          color={
                            ratingValue <= (hover || rating)
                              ? "#FFD700"
                              : "#d1d5db"
                          }
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Your Name *</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Your Message *</label>
                <textarea
                  placeholder="Write your review..."
                  rows="4"
                  className="w-full max-w-full outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-black text-white font-semibold px-8 py-3 rounded-md hover:bg-[#ff2525] transition"
                >
                  Add Review »
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    
     <section className="py-16">
  <div className="container mx-auto px-4">
    <h1 className="text-[32px] md:text-[43px] font-black text-[#1B1917] leading-snug mb-10">
      Hear It From Our{" "}
      <span className="text-[#ff2525]">Happy Travelers</span>
    </h1>
    <Swiper
  slidesPerView={3}
  spaceBetween={30}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: { slidesPerView: 1 },    // 📱 mobile: 1 card
    768: { slidesPerView: 2 },  // 💻 tablets & md screens: 2 cards
    1024: { slidesPerView: 3 }, // 🖥️ large screens: 3 cards
  }}
  modules={[Autoplay]}
  className="mySwiper"
>
  {reviews.map((review) => {
    const isLong = review.text.length > 180;

    return (
      <SwiperSlide key={review.id}>
        <div
          className={`bg-[#f1f1f1] border border-[#e2e2e2] p-6 rounded-2xl transition-all duration-500 flex flex-col justify-between ${
            expandedReview === review.id ? "h-auto" : "h-[350px]"
          }`}
        >
          {/* Stars */}
          <div className="flex mb-1 text-yellow-500 text-2xl">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </div>

          {/* Review Text */}
          <p
            className={`text-[#121212] leading-7 mb-4 ${
              expandedReview === review.id ? "" : "line-clamp-4"
            }`}
          >
            “{review.text}”
          </p>

          {/* Read More Button */}
          {isLong && (
            <button
              onClick={() =>
                setExpandedReview(
                  expandedReview === review.id ? null : review.id
                )
              }
              className="text-[#ff2525] font-semibold text-sm hover:underline self-start"
            >
              {expandedReview === review.id ? "Read Less" : "Read More"}
            </button>
          )}

          {/* Reviewer Name */}
          <h3 className="font-medium text-[19px] text-[#121212] mt-3">
            {review.name}
          </h3>
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>

  </div>
</section>

    </>
  );
};

export default Testimonial;
