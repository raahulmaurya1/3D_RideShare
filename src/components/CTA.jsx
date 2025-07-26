import { Shield, CheckCircle, LifeBuoy, AlertTriangle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function CTA() {
  const [showButton, setShowButton] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="text-center mt-40 mb-40 p-10 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-5xl font-extrabold flex items-center justify-center mb-6">
        <Shield className="mr-3 text-blue-500 animate-pulse" />
        <span className="text-blue-400">Ride with</span> <span className="text-yellow-500 ml-2">Safety & Trust</span>
      </h2>

      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
        Your safety is our top priority.  
        We are committed to providing a secure and comfortable journey every time  
        you ride with us.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-6 sm:space-y-0 mb-8">
        <div className="flex items-center bg-gray-800 px-6 py-4 rounded-lg shadow-md w-80">
          <CheckCircle className="mr-3 text-green-500 animate-bounce" />
          <p className="text-gray-200">Comprehensive Driver Background Checks</p>
        </div>
        <div className="flex items-center bg-gray-800 px-6 py-4 h-20 rounded-lg shadow-md w-80">
          <LifeBuoy className="mr-3 text-yellow-500 animate-spin" />
          <p className="text-gray-200">24/7 Emergency Support</p>
        </div>
        <div className="flex items-center bg-gray-800 px-6 py-4 rounded-lg shadow-md w-80">
          <AlertTriangle className="mr-3 text-red-500 animate-ping" />
          <p className="text-gray-200">Real-Time Ride Monitoring & Alerts</p>
        </div>
      </div>

      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
        In the unlikely event of an accident,  
        our comprehensive insurance policies 
        ensure that you are fully covered.<br/> Your well-being 
        is paramount to us.
      </p>

      <button className="mt-6 bg-yellow-500 px-8 py-3 rounded-lg text-gray-900 text-lg font-semibold shadow-lg hover:bg-yellow-600 transition duration-300">
        Book a Ride Now
      </button>

      {/* Scroll-to-Top Button 
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <ArrowUp size={24} />
        </button>
      )} */}
    </section>
  );
}
