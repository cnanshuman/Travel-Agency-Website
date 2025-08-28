import About from "@/app/_home/About";
import Choose from "@/app/_home/Choose";
import Enquiry from "@/app/_home/Enquiry";
import Services from "@/app/_home/Services";

const Aboutinr = () => {
  return (
    <>
    <div className="mb-10">
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url(/abt-bnr.jpg)`,
        }}
        className="relative bnr bg-cover bg-center bg-no-repeat w-full h-[400px] overflow-hidden"
      >
        <div className="container relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-8xl font-bold">About Us</h1>
        </div>
      </div>

     
      
    </div>

    <About />
    <Choose />
    <Services />
    <Enquiry />
    </>
  );
};

export default Aboutinr;
