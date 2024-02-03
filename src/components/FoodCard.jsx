import React from 'react';
import styled from 'styled-components';

const FoodCardContainer = styled.div`
  display: flex;
  /* max-width: 300px; */
  margin: 16px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FoodImage = styled.img`
  flex-shrink: 0;
  width: 120px;
  height: 100%;
  object-fit: cover;
`;

const FoodDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const FoodName = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Category = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 8px;
`;

const Offers = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RatingValue = styled.span`
  font-size: 16px;
  margin-left: 4px;
  color: #ff9800;
`;

const CostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CostForTwo = styled.span`
  font-size: 16px;
`;

const FoodCard = () => {
  return (
    <FoodCardContainer>
      <FoodImage src="https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" alt="Food Image" />
      <FoodDetails>
        <FoodName>Delicious Dish</FoodName>
        <Category>Indian</Category>
        <Offers>50% OFF | Free Delivery</Offers>
        <Rating>
          <span>4.5</span>
          <RatingValue>★</RatingValue>
        </Rating>
        <CostContainer>
          <CostForTwo>₹200 for two</CostForTwo>
        </CostContainer>
      </FoodDetails>
    </FoodCardContainer>
  );
};

export default FoodCard;
