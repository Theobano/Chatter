import styled from "styled-components";

export const AuthPagesContainer = styled.div`
height: 100%;
width: 100%;

a {
    flex: 1;
    font-size: 1em;
    text-decoration: none;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    .nav-text {
      margin-bottom: 10px;
      margin-right: 30px;
    }

    .indicator {
        width: 100%;
        height: 2px;
        background-color: var(--anchor-indicator-color);
    }

    &.active {
      .indicator{
        background-color: var(--secondary-color);
      }
    }
  }


.outlet-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 1.5em;

}
`;
