import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 8px;
  right: 133px;
  border: none;
  border-radius: 20px;
  height: 450px;
  width: 315px;
  color: #fff;
  padding: 20px;
  background-color: #1a1a1a;
`;

export const PictureModalStyle = styled.div`
  position: fixed;
  top: 52px;
  right: 10px;
  border: none;
  border-radius: 20px;
  height: 450px;
  width: 315px;
  color: #fff;
  padding: 20px;
  background-color: #1a1a1a;

  & .img {
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

export const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background-color: #404040;
  color: #dbdbdb;
  text-align: center;
  font-size: 12px;
  padding: 20px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  box-shadow: #3d3d3d 0px 0px 10px 5px;
  border-top: #3d3d3d 1px solid;
`;
