import { MapPin } from "lucide-react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function LocationInput() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleSubmit = () => {
    console.log({ pickup, dropoff });
  };

  return (
    <div className="flex justify-center items-center mt-10">
    <section className="p-6 h-[500px] w-[600px]">
      <div className="p-6 shadow-xl border border-gray-300 bg-white/10 backdrop-blur-md text-white rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center flex items-center justify-center">
          <MapPin className="mr-2 text-blue-600" /> Enter Locations
        </h2>
        
        {/* Pickup Location */}
        <div className="mb-5">
          <TextField
            fullWidth
            variant="outlined"
            label="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            InputProps={{
              startAdornment: <MapPin className="text-gray-500 mr-3" />,
            }}
            InputLabelProps={{
              sx: { color: "white" },
            }}
          />
        </div>

        {/* Dropoff Location */}
        <div className="mb-5">
          <TextField
            fullWidth
            variant="outlined"
            label="Dropoff Location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            InputProps={{
              startAdornment: <MapPin className="text-gray-500 mr-3" />,
            }}
            InputLabelProps={{
              sx: { color: "white" },
            }}
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4 hover:bg-blue-700"
        >
          Confirm Locations
        </Button>
      </div>
    </section>
    <section className="p-6 h-[500px] w-[600px] text-center"><span className="text-orange-300">MAP SECTION</span> it under development phase</section>
    </div>
  );
}
