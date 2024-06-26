import { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

export const Frame = () => {
  const [lastDirection, setLastDirection] = useState();
  const userInfo = [
    {
      nickname: "오링",
      url: "https://image.fmkorea.com/files/attach/new3/20231220/4366334379/1972135478/6526193738/e44c60321973d21a2beede402b64f152.jpeg",
    },
    {
      nickname: "준빈쿤",
      url: "https://entertainimg.kbsmedia.co.kr/cms/uploads/BBSIMAGE_20230613095006_03c551d7255312cf0f13ad58165ce3ba.png",
    },
    {
      nickname: "김랩틸리언",
      url: "https://img.appstory.co.kr/@files/monthly.appstory.co.kr/content/201208/1346044725.jpg",
    },
  ];
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };
  const outOfFrame = (nickname) => {
    console.log(nickname + " left the screen!");
  };

  return (
    <>
      <Body>
        <Container>
          <Phone>
            <Window>
              <CardBox>
                {userInfo.map((user) => (
                  <TinderCard
                    className="swipe"
                    style = {{position : 'relative'}}
                    key={user.nickname}
                    onSwipe={(dir) => swiped(dir, user.nickname)}
                    onCardLeftScreen={() => outOfFrame(user.nickname)}
                  >
                    <CardImg user={user}/>
                    <span>{user.nickname}</span> 
                  </TinderCard>
                ))}
              </CardBox>
            </Window>
          </Phone>
        </Container>
      </Body>
    </>
  );
};

const Body = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  @keyframes popup {
  0%   { transform: scale(1,1) }
  10%  { transform: scale(1.1,1.1) }
  30%  { transform: scale(.9,.9) }
  50%  { transform: scale(1,1) }
  57%  { transform: scale(1,1) }
  64%  { transform: scale(1,1) }
  100% { transform: scale(1,1) }
}

`;
const Container = styled.div`
    text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  /* background: linear-gradient(#fff, #999); */
  background: linear-gradient(#e66465, #9198e5);
`;
const Phone = styled.div`
  display: flex;
  justify-content: center;
  width: 40vw;
  height: 70vh;
  background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
  border-radius: 4dvi;
`;
const Window = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width: 38vw;
  height: 68vh;
  background-color: white;
  border-radius: 3.3vi;
  margin-top: 1vh;
`;
const CardBox = styled.div`
  width: 90vw;
  max-width: 260px;
  height: 300px;
  background-color: cadetblue;  
`;
const CardImg = styled.div`
  background-color: #fff;
  width: 80vw;
  max-width: 260px;
  height: 300px;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.user.url});
  position: absolute;
`;
