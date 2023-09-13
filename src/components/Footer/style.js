import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: #fff;
  border-top: 1px solid  rgba(144,238,144,0.7);

  & .footer_left_content {
    & div {
      padding: 10px 16px;
      border-radius: 20px;
      background-color: #111;
      box-shadow: 2px 1px 2px #fff;

      &:hover {
        cursor: pointer;
        color: #001f3f;
        background-color: #fff;
        box-shadow: 2px 1px 2px #111;
      }
    }

    & .md_left_content {
      display: none;
    }

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;

      & .md_left_content {
        display: block;
      }
    }
  }

  & .play_buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    & div {
      padding: 10px 16px;
      border-radius: 16px;
      background-color: #111;
      box-shadow: 2px 1px 2px #fff;

      &:hover {
        cursor: pointer;
        color: #001f3f;
        background-color: #fff;
        box-shadow: 2px 1px 2px #111;
      }
    }
  }

  & .footer_right_content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;

    & .hint_class {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 20px;
      background-color: #111;
      box-shadow: 2px 1px 2px #fff;

      &:hover {
        cursor: pointer;
        color: #001f3f;
        background-color: #fff;
        box-shadow: 2px 1px 2px #111;
      }
    }

    & .timer_class {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #1cac78;
      text-shadow: 0 0 6px #87cefa;
    }
  }

  @media (max-width: 768px) {
    .hidden_md {
      display: none;
    }
  }
  @media (max-width: 420px) {
    flex-direction: column;
    gap: 20px;
  }
`;
