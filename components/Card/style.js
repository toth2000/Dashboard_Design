import { styled } from "styled-components";
import { deviceWidth } from "../../constant/deviceWidth";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  height: 256px;
  
  @media ${deviceWidth.tablet} {
    flex: 1;
  }
  
`;

export const WrapperContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const WrapperLeft = styled.div`
  flex: 1;
  height: 200px;
`;

export const WrapperRight = styled.div`
  flex: 1;
  margin-top: 25px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 25px;
  margin-left: 40px;
`;
