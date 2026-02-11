import React from "react";

export default function Term() {
  return (
    <>
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url(/client-bnr.jpg)`,
        }}
        className="relative bg-cover bg-center bg-no-repeat w-full h-[500px] max-sm:h-[300px] overflow-hidden"
      >
        <div className="container mx-auto p-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-white text-6xl max-md:text-4xl font-extrabold tracking-tight animate-fade-in-down">
            Terms & Conditions
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-800">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Sidebar */}
          <aside className="lg:w-1/4 lg:sticky lg:top-20 lg:h-fit hidden lg:block">
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sections</h2>
              <ul className="space-y-3 text-lg">
                {[
                  "General Terms",
                  "Booking & Confirmation",
                  "Pricing & Payments",
                  "Cancellations & Refunds",
                  "User Responsibilities",
                  "Use of Vehicles",
                  "Liability & Insurance",
                  "Prohibited Activities",
                  "Amendments to Terms",
                  "Contact Us",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx}`}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200 font-medium"
                    >
                      {idx + 1}. {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-10 text-lg sm:text-xl leading-relaxed">
            {[
              {
                title: "1. General Terms",
                content: (
                  <p>
                    By using our car rental and travel services, you agree to these Terms & Conditions.
                    These terms apply to all bookings, whether made online, via phone, or in person.
                  </p>
                ),
              },
              {
                title: "2. Booking & Confirmation",
                content: (
                  <ul className="list-disc list-inside space-y-3">
                    <li>All bookings are subject to availability of vehicles and drivers.</li>
                    <li>A booking is confirmed only after receiving full or partial advance payment.</li>
                    <li>Booking confirmation will be sent via email, SMS, or WhatsApp.</li>
                  </ul>
                ),
              },
              {
                title: "3. Pricing & Payments",
                content: (
                  <ul className="list-disc list-inside space-y-3">
                    <li>Fares are calculated based on distance, time, vehicle type, and additional services.</li>
                    <li>All payments must be made through approved methods (cash, card, or digital wallets).</li>
                    <li>Additional charges may apply for tolls, parking, waiting time, or route changes.</li>
                  </ul>
                ),
              },
              {
                title: "4. Cancellations & Refunds",
                content: (
                  <ul className="list-disc list-inside space-y-3">
                    <li>Cancellations made 24 hours before the trip may be eligible for a partial refund.</li>
                    <li>Last-minute cancellations may not be refunded.</li>
                    <li>If we cancel due to unforeseen circumstances, a full refund will be provided.</li>
                  </ul>
                ),
              },
              {
                title: "5. User Responsibilities",
                content: (
                  <ul className="list-disc list-inside space-y-3">
                    <li>Provide accurate booking details such as pickup/drop-off location and time.</li>
                    <li>Ensure proper behavior with drivers and staff.</li>
                    <li>Be responsible for any damage to the vehicle caused by negligence.</li>
                  </ul>
                ),
              },
              {
                title: "6. Use of Vehicles",
                content: (
                  <ul className="list-disc list-inside space-y-3">
                    <li>Vehicles must not be used for illegal activities.</li>
                    <li>Smoking, alcohol, or prohibited substances are not allowed inside vehicles.</li>
                    <li>Pets are only allowed with prior approval.</li>
                  </ul>
                ),
              },
              {
                title: "7. Liability & Insurance",
                content: (
                  <p>
                    We take all necessary precautions for safety, but we are not liable for accidents,
                    delays, or losses due to unforeseen circumstances. Vehicles are covered by insurance
                    as per local laws.
                  </p>
                ),
              },
              {
                title: "8. Prohibited Activities",
                content: (
                  <ul className="list-disc list-inside space-y-3">
                    <li>Reselling or sub-letting booked rides.</li>
                    <li>Misusing vehicles for political or unlawful activities.</li>
                    <li>Causing intentional damage to the car or driver’s reputation.</li>
                  </ul>
                ),
              },
              {
                title: "9. Amendments to Terms",
                content: (
                  <p>
                    We reserve the right to modify these Terms & Conditions at any time.
                    Updated terms will be posted on our website and apply immediately.
                  </p>
                ),
              },
              {
                title: "10. Contact Us",
                content: (
                  <p>
                    For any questions about these Terms & Conditions, please contact us:
                    <br />
                    <span className="font-semibold">Kulbir Car Travel Agency</span>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:KulbirTravel@gmail.com"
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      KulbirTravel@gmail.com
                    </a>
                    <br />
                    Phone:{" "}
                    <a
                      href="tel:+919582276626"
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      +91 95822 76626
                    </a>
                    <br />
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Gol+Market+New+Delhi+Delhi+110001+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      Gol Market New Delhi, Delhi 110001, India
                    </a>
                  </p>
                ),
              },
            ].map((section, idx) => (
              <div
                key={idx}
                id={`section-${idx}`}
                className="rounded-2xl shadow-lg p-10 hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: "#f3f3f4" }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="text-gray-700">{section.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Animation Keyframes */}
      <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }
      `}</style>
    </>
  );
}
