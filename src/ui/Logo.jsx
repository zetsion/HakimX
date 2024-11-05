import styled from "styled-components";
import logoPhoto from "../../public/logo-dark.png";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={logoPhoto} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
