import img from "../../assets/home.png"

const WhyUs = () => {
  return (
    <div className="flex justify-center items-center gap-20 max-w-screen-xl mx-auto">
      <div className="w-2/5">
        <img src={img} alt="Home" />
      </div>
      <div>
        <h2>Why you should choose us.</h2>
        <p>Creating quality urban lifestyles, building stronger communities.</p>
      </div>
    </div>
  );
};

export default WhyUs;