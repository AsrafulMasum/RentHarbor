import Banner from "../Components/Home/Banner";
import BookingSec from "../Components/Home/BookingSec";
import Recommended from "../Components/Home/Recommended";
import Services from "../Components/Home/Services";
import WhyUs from "../Components/Home/WhyUs";


const HomePage = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <Services />
      <BookingSec />
      <Recommended />
      <WhyUs />
    </div>
  );
};

export default HomePage;