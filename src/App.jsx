import Hero from "./components/sections/hero";
import Navbar from "./components/sections/navbar";
export default function App() {
  return (
    <div className="bg-appBg">
      <Navbar />
      <Hero />
    </div>
  );
}
