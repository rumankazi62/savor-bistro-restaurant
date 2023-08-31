import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-cards';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle heading={'Order Now'} subHeading={'From 11:00 am to 10:00 pm'}></SectionTitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>desserts</h3>
        </SwiperSlide>
      </Swiper> 
    </section>
  );
};

export default Category;