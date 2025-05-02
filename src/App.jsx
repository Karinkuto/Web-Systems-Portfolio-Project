import Hero from "./components/sections/hero";
import Navbar from "./components/sections/navbar";
import Footer from "./components/sections/footer";
import Body from "./components/sections/body";
export default function App() {
  return (
    <div className="bg-appBg">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}
