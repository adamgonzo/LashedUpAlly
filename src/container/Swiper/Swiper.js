// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { images } from '../../constants';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const SwiperImage = () => {
  return (
    <Swiper
      // install Swiper modules
      id="swipe"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="swipeImage" src={images.lashes1} alt="eyelash"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.lashes2} alt="eyelash"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.lashes3} alt="eyelash"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.lashes4} alt="eyelash"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.lashes5} alt="eyelash"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.lashes6} alt="eyelash"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.lashes7} alt="eyelash"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.lashes8} alt="eyelash"/></SwiperSlide>
      ...
    </Swiper>
  );
};

export default SwiperImage;