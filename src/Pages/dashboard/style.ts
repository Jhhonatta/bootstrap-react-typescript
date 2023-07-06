import styled from "styled-components";

export const ContainerDashboard = styled.div`
  font-family: Nunito;
  overflow: hidden;

  .custom-button {
    background-color: rgb(255, 182, 193);
    border: rgb(255, 182, 193);
  }

  .custom-button:hover {
    background-color: black;
  }

  #navbar-nav {
    margin-top: 0.5rem;
  }

  .navbar-brand {
    color: rgba(255, 87, 127, 1);
    font-weight: 600;
    font-family: Nunito;
  }

  button {
    margin-top: 0.5rem;
  }

  .navbar {
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  }
`;
