import Photo from "@/components/Photo";
import Social from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        {/* First Section: Image and Name with Developer text */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-12 m-8">
          {/* Image */}
          <div className="w-40 h-40 xl:w-52 xl:h-52">
            <Photo />
          </div>

          {/* Developer Text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Developer</span>
            <h1 className="h1 mb-2">
              Hello I'm
              <br />
              <span className="text-accent">Siluni Wijesinghe</span>
            </h1>
          </div>
        </div>

        {/* Second Section: Paragraph and Other Elements */}
        <div className="text-center xl:text-left max-w-[550px]">
          <p className="mb-6 text-white/80">
            I am a passionate software developer focused on crafting innovative
            and efficient solutions. I enjoy bringing creative ideas to life
            through clean, thoughtful design and seamless functionality. Explore
            my projects and let's collaborate to create something impactful!
          </p>

          {/* Buttons and Social Links */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Download Resume</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social
                containerStyle="flex gap-6"
                iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center
                  items-center text-accent text-base hover:bg-accent hover:text-primary 
                  hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
