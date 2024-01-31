import Contact from "./ui/homepage/contact";
import Facilities from "./ui/homepage/facilities";
import Jumbotron from "./ui/homepage/jumbotron";
import Timeline from "./ui/timeline";
import NavBar from "./ui/homepage/navbar";
import Footer from "./ui/homepage/footer";

export default function Home() {
  return (
    <>
      <div className="md:h-[5%]">
        <NavBar />
      </div>
      <Jumbotron />
      <Facilities />
      <Contact />
      <Footer />
    </>
  );
}
