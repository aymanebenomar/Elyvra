import Features from "../components/Features";
import Herosection from "../components/Herosec";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";


export default function Home() 
{
  return (
	<>
	  <Herosection />
	  <Features />
	  <Process />
	  <Testimonials />
	</>
  )
}