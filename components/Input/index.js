import { Container, InputText, Input_Field } from "./style";

const Input = ({ title, placeholder, type }) => {
  return (
    <Container>
      <InputText>{title}</InputText>
      <Input_Field placeholder={placeholder} type={type} />
    </Container>
  );
};

export default Input;
