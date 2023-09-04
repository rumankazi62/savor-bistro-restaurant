import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])


  return (
    <section>
      <SectionTitle heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}></SectionTitle>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        
        {
          reviews?.map(review => <SwiperSlide key={review._id}>
            <div className="m-24 flex flex-col items-center mx-24 my-16">
            <Rating
            style={{ maxWidth: 180 }}
            value={review.rating}
            readOnly
          />
              <div className="text-8xl my-8"><FaQuoteLeft /></div>
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-yellow-600 uppercase">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;