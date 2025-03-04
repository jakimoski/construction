import Lottie from "lottie-react";
import animation from "../../public/Cta-Animation.json";
import Button from "./Button";
import Heading from "./Heading";

const Cta = () => {
  return (
    <section className=" relative py-[5rem] md:py-[10rem]  overflow-hidden z-1">
      <div className="gap-8 items-center  mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Lottie className=" w-[20rem]  md:w-full" animationData={animation} />
        </div>
        <div className="mt-4 md:mt-0 flex items-center justify-center flex-col p-4">
          <Heading
            title=" Ready to Streamline Your Logistics?"
            text="Get faster deliveries, real-time tracking, and seamless cargo management. Partner with Cargo Flow today and take your logistics to the next level!"
          />
          <Button>Contact US</Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
