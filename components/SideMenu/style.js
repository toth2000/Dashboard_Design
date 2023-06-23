import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 30px;
  background: #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 700;
  padding-left: 50px;
  padding-top: 60px;
`;

export const OptionWrapper = styled.div`
  width: fit-content;
  margin-left: 50px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
`;

export const OptionIcon = styled(Image)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: "#FFFFFF";
`;

export const OptionText = styled.p`
  color: #fff;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;
  margin-left: 50px;
  margin-bottom: 60px;
`;

export const InfoItem = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: Montserrat;
  cursor: pointer;
`;
