import City from "../City";
import Title from "../Title";

const Recommended = () => {
  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto">
      <Title
        title="Recommended For You"
        subTitle="Start Your Trip With Memory"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, eligendi. "
      />

      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 mt-10">
        <div>
          <City
            city="United Emirates"
            price="113"
            img="https://amentotech.com/htmls/tenanto/images/trip-imgs/img-01.jpg"
            style="h-60"
          />
        </div>
        <div>
          <City
            city="Chicago"
            price="120"
            img="https://amentotech.com/htmls/tenanto/images/trip-imgs/img-04.jpg"
            style="h-60"
          />
        </div>
        <div className="row-span-1 lg:row-span-2">
          <City
            city="New York"
            price="170"
            img="https://amentotech.com/htmls/tenanto/images/trip-imgs/img-06.jpg"
            style="h-60 lg:h-full"
          />
        </div>
        <div>
          <City
            city="China"
            price="168"
            img="https://amentotech.com/htmls/tenanto/images/trip-imgs/img-02.jpg"
            style="h-60"
          />
        </div>
        <div className="row-span-1 lg:row-span-2">
          <City
            city="United Kingdom"
            price="240"
            img="https://amentotech.com/htmls/tenanto/images/trip-imgs/img-05.jpg"
            style="h-60 lg:h-full"
          />
        </div>
        <div>
          <City
            city="Sydney"
            price="140"
            img="https://amentotech.com/htmls/tenanto/images/trip-imgs/img-03.jpg"
            style="h-60"
          />
        </div>
        <div>
          <City
            city="Rome"
            price="180"
            img="https://amentotech.com/htmls/tenanto/images/trip-imgs/img-07.jpg"
            style="h-60"
          />
        </div>
        
        <div className="col-span-1 lg:col-span-2">
          <City
            city="Nepal"
            price="125"
            img="https://i.postimg.cc/02JM8MZ4/nepal.jpg"
            style="h-60"
          />
        </div>
        <div className="row-span-1 lg:row-span-2">
          <City
            city="Maldives"
            price="130"
            img="https://i.postimg.cc/6pXdgfwc/maldwip.jpg"
            style="h-60 lg:h-full"
          />
        </div>
        <div>
          <City
            city="Dubai"
            price="260"
            img="https://i.postimg.cc/sgkbt8x8/dubai.jpg"
            style="h-60"
          />
        </div>
        <div>
          <City
            city="Singapore"
            price="210"
            img="https://themeearth.com/tf/html/rentalplace/img/location2.jpg"
            style="h-60"
          />
        </div>
        <div>
          <City
            city="Tokyo"
            price="170"
            img="https://i.postimg.cc/wjXkjbFn/tokyo.jpg"
            style="h-60"
          />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <City
            city="Paris"
            price="185"
            img="https://i.postimg.cc/9Q7ntpbB/paris.jpg"
            style="h-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Recommended;