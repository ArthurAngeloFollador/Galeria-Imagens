import styled from "styled-components";

export const Header = styled.header`
  box-shadow: #000 0px 0px 5px 0px;
  border-bottom: #000 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 26px;
  height: 60px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    cursor: pointer;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 50px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  align-items: center;
`;

export const ProfileModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  margin-bottom: 30px;

  & .profileInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    margin-top: 10px;
  }

  & .handle {
    font-size: 14px;
    font-style: italic;
    margin-bottom: 10px;
    color: #dfdfdf;
  }

  & .username {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }

  & .img {
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2em;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 8px;

  &:hover {
    background: #484848;
    transition: 0.25s;
  }
`;

export const NotificationButton = styled.button`
  width: 42px;
  height: 42px;
  cursor: pointer;
  border-radius: 99px;
  background: transparent;
  border: none;

  img {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background: #484848;
    transition: 0.25s;
  }

  &:active {
    background: #404040;
  }
`;

export const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  cursor: pointer;
`;
