import { useState } from "react";
import { Home, User, CreditCard, History } from "lucide-react";
import { motion } from "framer-motion";

const DriverDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("public/assets/map.jpeg"); // Default image

  const menuItems = [
    { name: "Profile", icon: <User size={24} /> },
    { name: "Wallet", icon: <CreditCard size={24} /> },
    { name: "History", icon: <History size={24} /> },
    { name: "Dashboard", icon: <Home size={24} /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 flex flex-col bg-[#1E2939] p-4 text-white">
        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-lg transition-all ${
                activeTab === item.name ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6">
        <div
          className="relative w-full h-full bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Image Upload for Background */}
          <input
            type="file"
            accept="image/*"
            className="absolute top-4 left-4 text-black"
            onChange={(e) => {
              if (e.target.files[0]) {
                setBackgroundImage(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />

          {/* Button with Image - Smooth Transition & Large Shadow  */}
          <motion.button
            className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-24
                        bg-no-repeat bg-center bg-cover border-none outline-none rounded-full
                        transition-all duration-500 ease-in-out
                        ${
                          isButtonClicked
                            ? "shadow-[0_0_40px_15px_rgb(34,197,94)] scale-110"
                            : "shadow-md shadow-gray-500 scale-100"
                        }`}
            style={{
              backgroundImage: `url(${
                isButtonClicked ? "public/assets/tourchon.png" : "public/assets/tourchoff1.png"
              })`,
            }}
            onClick={() => setIsButtonClicked(!isButtonClicked)}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isButtonClicked ? 10 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
