import Contact from "./ui/contact";
import Facilities from "./ui/facilities";
import Jumbotron from "./ui/jumbotron";
import Timeline from "./ui/timeline";


export default function Home() {
  return (
    <>
      <Jumbotron />
      <Facilities />
      <Contact/>
      <Timeline/>
    </>
  );
}
