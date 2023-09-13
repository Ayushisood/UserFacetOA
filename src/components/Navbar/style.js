import styled from "styled-components";

export const NavbarWrapper = styled.div`
  color: #fff;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  border-bottom: 1px solid  rgba(144,238,144,0.2);

  & .middle_content {
    & span {
      color: #0093af;
      text-shadow: 0 0 6px #1cac78;
    }
  }

  & .right_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #0093af;
    text-shadow: 0 0 7px #1cac78;
    & div{
        margin-left: 10px;
    }
    & span {
      color: #fff;
    }
  }
`;
