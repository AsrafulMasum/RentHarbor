import Button from "../Button";
import bg from "../../assets/booking_bg.png";

const BookingSec = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="py-40"
    >
      <div className="max-w-screen-xl mx-4 lg:mx-auto text-white space-y-10">
        <h2 className="text-3xl text-primary font-semibold">RentHarbor</h2>
        <p className="lg:w-1/2">
          Easily book your ideal home through our platform. Browse listings,
          select your desired property, and finalize your booking hassle-free.
          With transparent pricing and attentive support, finding your dream
          home is simple and stress-free. Start your journey to comfortable
          living today.
        </p>
        <Button
          text="Start Booking"
          style="bg-primary btn-wide border-none text-white"
        />
      </div>
    </div>
  );
};

export default BookingSec;
