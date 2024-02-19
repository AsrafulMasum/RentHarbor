import Button from "../Components/Button";
import Banner from "../Components/Home/Banner";
import BookingSec from "../Components/Home/BookingSec";
import Category from "../Components/Home/Category";
import Count from "../Components/Home/Count";
import Faq from "../Components/Home/Faq";
import Recommended from "../Components/Home/Recommended";
import Services from "../Components/Home/Services";
import Testimonials from "../Components/Home/Testimonials";
import WhyUs from "../Components/Home/WhyUs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BookingSec />
      <Services />
      <div className="bg-secondary py-10">
        <div className="max-w-screen-xl mx-4 lg:mx-auto flex justify-between items-center">
          <h2 className="text-3xl text-white">IF NEED ANY HELP! CONTACT US</h2>
          <Button text="Contact Us" style="bg-transparent" />
        </div>
      </div>
      <Recommended />
      <WhyUs />
      <Faq />
      <Count />
      <Testimonials />
    </div>
  );
};

export default HomePage;
