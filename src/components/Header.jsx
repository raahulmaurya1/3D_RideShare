import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">RideX</h1>
      <nav className="flex gap-4">
        <a href="#" className="hover:text-yellow-400">Home</a>
        <a href="#" className="hover:text-yellow-400">Pricing</a>
        <a href="#" className="hover:text-yellow-400">Safety</a>
        <a
          onClick={() => navigate('/driver')}
          className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer"
        >
          Driver
        </a>
      </nav>
      <button className="bg-yellow-500 px-4 py-2 rounded-lg">Sign Up</button>
    </header>
  );
}
