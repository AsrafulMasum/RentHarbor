import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Banner from "../Components/Home/Banner";
import Category from "../Components/Home/Category";
import BookingSec from "../Components/Home/Comp/BookingSec";
import Count from "../Components/Home/Count";
import Faq from "../Components/Home/Faq";
import FeaturedProperties from "../Components/Home/FeaturedProperties";
import Recommended from "../Components/Home/Recommended";
import Services from "../Components/Home/Services";
import Testimonials from "../Components/Home/Testimonials";
import WhyUs from "../Components/Home/WhyUs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FeaturedProperties />
      <BookingSec />
      <Services />
      <div className="bg-secondary py-16">
        <div className="max-w-screen-xl mx-4 lg:mx-auto flex justify-between items-center">
          <h2 className="text-3xl text-white">IF NEED ANY HELP! CONTACT US</h2>
          <Button text="Contact Us" style="bg-transparent text-white" />
        </div>
      </div>
      <Recommended />
      <WhyUs />
      <Faq />
      <Count />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
