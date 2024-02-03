import React, { useState } from "react";
import styled from "styled-components";

const singleproduct = {
  restaurant_id: "19172",
  lead_id: "19102",
  restaurant_name: "Aha    store     ah Storem",
  avg_cost_for_two: 250,
  avg_order_cost: null,
  avg_daily_order_count: null,
  rating: {
    restaurant_avg_rating: 4,
    count: 1,
    all: {
      1: 0,
      2: 0,
      3: 0,
      4: 1,
      5: 0
    }
  },
  currency: {
    symbol: "₹"
  },
  table_count: 0,
  does_bookings: false,
  location_id: "1",
  e_type_id: "19",
  restaurant_uuid: "5d5f7ea4-af11-479b-8e09-bf338064da16",
  image: null,
  is_tnc_agree: null,
  restaurant_mode: "NON_DINE_IN",
  opens_at: "09:30:00",
  closes_at: "21:30:00",
  qr_active: false,
  address_complete: "null",
  is_close: false,
  is_close_cafeteria: false,
  status: "OPEN",
  merchant_payment_methods: ["cash"],
  social_profiles: null,
  logo: null,
  next_closes_at: null,
  next_opens_at: null,
  free_trial_eligiblity: true,
  points: "70000",
  active: false,
  free_tier_expire_at: null,
  refer_responded: false,
  active_plan: "FREE",
  free_trial_expired: false,
  created_at: "1622217283",
  restaurant_code: "aha-store-ah-storem",
  noti_set: "A",
  activated_at: null,
  active_plan_id: "1",
  type_id: null,
  m_id: 19006,
  store_id: null,
  location: {
    location_id: 1,
    location_address:
      "B-6/2, Model Town 1, Model Town Phase I, Mukherjee Nagar, New Delhi, Delhi 110009",
    location_address_2: "Model Town",
    location_zip_code: 110009,
    location_lat: 28.703186,
    location_long: 77.19393,
    location_locality: "Model Town",
    city_name: "Delhi",
    state_name: "Delhi",
    city_id: null,
    country_id: "103",
    state_id: "35",
    update_count: "0"
  },
  restaurant_type: null,
  cuisines: [
    {
      cuisine_id: 18215,
      cuisine_name: "Men",
      restaurant_id: "19172",
      added_at: "2021-05-28T21:30:03.000Z",
      is_visible: true,
      is_deleted: false,
      color: "#eee",
      text_color: "#f09819",
      image: null,
      counter_id: null
    }
  ],
  images: [
    {
      url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
  ],
  thumbnail_image: null,
  cover_image: null,
  small_image: null,
  large_image: null
};

const FoodPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://imgs.search.brave.com/cWYNw0GyHwdKk7LwbDCQvhlaU2w_81meITJGxw-VNYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA",
    "https://imgs.search.brave.com/8zmS_umOIzk7YjDehvdMzrm3JZ-Sgso-CqlhUib3DE4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dGFubmVkLXNhbmQt/ZHVuZXMtc3Vycm91/bmRlZC1hbi1vcGVu/LXJlc2Vydm9pci5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w",
    "https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA"
  ];

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <FoodPageContainer>
      <SliderContainer>
        {images.map((image, index) => (
          <FoodImage
            key={index}
            src={image}
            alt={`Food Image ${index + 1}`}
            style={{ transform: `translateX(${-currentImage * 100}%)` }}
          />
        ))}
      </SliderContainer>
      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentImage}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
      <FoodName>Delicious Dish</FoodName>
      <PlaceName>Awesome Restaurant</PlaceName>
      <OffersTag>50% OFF</OffersTag>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo eu
        urna bibendum efficitur.
      </Description>
    </FoodPageContainer>
  );
};

const FoodPageContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const FoodImage = styled.img`
  width: 100%;
  height: 1/2vh;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ active }) => (active ? "#ff9800" : "#ddd")};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

const FoodName = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
`;

const PlaceName = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const OffersTag = styled.span`
  background-color: #ff9800;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 8px;
  display: inline-block;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;


export default FoodPage;

// const images = ['https://imgs.search.brave.com/cWYNw0GyHwdKk7LwbDCQvhlaU2w_81meITJGxw-VNYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA', 'https://imgs.search.brave.com/8zmS_umOIzk7YjDehvdMzrm3JZ-Sgso-CqlhUib3DE4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dGFubmVkLXNhbmQt/ZHVuZXMtc3Vycm91/bmRlZC1hbi1vcGVu/LXJlc2Vydm9pci5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w', 'https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA'];
//
