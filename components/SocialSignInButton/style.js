import styled from "styled-components";
import Image from "next/image";


export const Container = styled.div`
  flex: 1;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  display: flex;
  cursor: pointer;
`;

export const Image_Container = styled(Image)`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  margin-left: 19px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: #858585;
  text-align: center;
  font-size: 12px;
  font-family: Montserrat;
  margin-left: 10px;
  margin-top: 8px;
  margin-bottom: 7px;
`;
