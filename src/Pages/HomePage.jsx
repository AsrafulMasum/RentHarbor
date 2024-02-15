import Banner from "../Components/Home/Banner";
import Recommended from "../Components/Home/Recommended";
import WhyUs from "../Components/Home/WhyUs";


const HomePage = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <Recommended />
      <WhyUs />
    </div>
  );
};

export default HomePage;