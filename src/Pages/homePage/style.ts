import styled from "styled-components";

export const ContainerLogin = styled.div`
  background-color: black;
  font-family: Nunito;

  .navbar-inicial {
    background-color: rgba(255, 255, 255, 1);
  }

  .title-iniciar {
    font-weight: 600;

    color: rgba(255, 87, 127, 1);
  }

  .container-iniciar {
    margin-top: 45px;
    border-radius: 10px;
    font-weight: 600;

    color: rgba(255, 255, 255, 1);

    .text-finish {
      background-color: rgba(33, 37, 41, 1);
    }
  }

  .check-icon {
    color: rgb(0, 255, 127);
  }

  .check-full {
    color: rgb(0, 255, 127);
    margin: 5px;
  }

  .icon-iniciar {
    font-size: 128px;
    color: white;
    margin: 5px;
  }

  .button-iniciar {
    background-color: rgb(255, 182, 193);
    border: 1px solid rgba(255, 87, 127, 1);
    color: black;
  }
`;
