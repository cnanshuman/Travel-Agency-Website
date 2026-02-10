import React from "react";

export default function Privacy() {
  return (
    <>
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url(/abt-bnr.jpg)`,
        }}
        className="relative bg-cover bg-center bg-no-repeat w-full h-[500px] max-sm:h-[300px] overflow-hidden"
      >
        <div className="container mx-auto p-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-white text-6xl max-md:text-4xl font-extrabold tracking-tight animate-fade-in-down">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-800">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Sidebar for Navigation */}
          <aside className="lg:w-1/4 lg:sticky lg:top-20 lg:h-fit hidden lg:block">
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sections</h2>
              <ul className="space-y-3 text-lg">
                {[
                  "Information We Collect",
                  "How We Use Your Information",
                  "Sharing Your Information",
                  "Data Security",
                  "Your Rights",
                  "Cookies & Tracking",
                  "Third-Party Links",
                  "Children’s Privacy",
                  "Changes to This Policy",
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
                title: "1. Information We Collect",
                content: (
                  <ul className="list-disc list-inside space-y-3">
                    <li>
                      <strong>Personal Information:</strong> Name, email, phone number, and payment details.
                    </li>
                    <li>
                      <strong>Booking Information:</strong> Pickup and drop-off locations, travel routes, dates, and times.
                    </li>
                    <li>
                      <strong>Vehicle Preferences:</strong> Type of car requested, additional services (AC, luxury, driver preferences).
                    </li>
                    <li>
                      <strong>Technical Data:</strong> IP address, device information, and browsing behavior on our website.
                    </li>
                    <li>
                      <strong>Cookies & Tracking:</strong> Used for remembering preferences and improving user experience.
                    </li>
                  </ul>
                ),
              },
              {
                title: "2. How We Use Your Information",
                content: (
                  <ul className="list-disc list-inside space-y-3">
                    <li>To confirm and manage your cab bookings.</li>
                    <li>To provide real-time updates such as driver details and trip status.</li>
                    <li>To process secure payments and send invoices.</li>
                    <li>To improve our services and customize offers for you.</li>
                    <li>To send promotions and discounts (if you’ve opted in).</li>
                    <li>To comply with local transport and legal requirements.</li>
                  </ul>
                ),
              },
              {
                title: "3. Sharing Your Information",
                content: (
                  <p>
                    We do not sell your personal information. We may share your details with drivers,
                    payment gateways, legal authorities (if required), and marketing partners (only with your consent).
                  </p>
                ),
              },
              {
                title: "4. Data Security",
                content: (
                  <p>
                    We implement secure systems to protect your information, including encrypted payments
                    and restricted access to sensitive data. However, no online transmission can be guaranteed 100% secure.
                  </p>
                ),
              },
              {
                title: "5. Your Rights",
                content: (
                  <ul className="list-disc list-inside space-y-3">
                    <li>Request a copy of your personal data.</li>
                    <li>Correct or update inaccurate information.</li>
                    <li>Request deletion of your account and booking history.</li>
                    <li>Opt out of promotional communications anytime.</li>
                    <li>Withdraw consent where data use depends on your approval.</li>
                  </ul>
                ),
              },
              {
                title: "6. Cookies & Tracking",
                content: (
                  <p>
                    Our website uses cookies to remember your preferences (such as favorite routes or vehicles),
                    analyze website traffic, and deliver personalized offers. You can disable cookies in your browser settings.
                  </p>
                ),
              },
              {
                title: "7. Third-Party Links",
                content: (
                  <p>
                    Our site may contain links to external websites. We are not responsible for the privacy
                    practices of third-party sites and encourage you to read their policies.
                  </p>
                ),
              },
              {
                title: "8. Children’s Privacy",
                content: (
                  <p>
                    Our services are not directed at individuals under 18. We do not knowingly collect or store
                    information about children.
                  </p>
                ),
              },
              {
                title: "9. Changes to This Policy",
                content: (
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our services
                    or legal requirements. Updates will always be posted on this page.
                  </p>
                ),
              },
              {
                title: "10. Contact Us",
                content: (
                  <p>
                    If you have questions about our Privacy Policy, please contact us:
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
