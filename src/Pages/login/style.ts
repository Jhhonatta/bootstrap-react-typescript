import styled from "styled-components";

export const ContainerLogin = styled.div`
  background-color: black;
  font-family: Nunito;

  .title-iniciar {
    font-weight: 600;

    color: rgba(255, 87, 127, 1);
    background-color: rgba(255, 255, 255, 1);
  }

  .container-iniciar {
    padding: 1rem;
    border-radius: 10px;
    color: rgba(255, 255, 255, 1);

    .text-finish {
      background-color: rgba(33, 37, 41, 1);
      width: auto;
    }
  }

  .button-iniciar {
    background-color: rgba(255, 87, 127, 1);
    border: 1px solid rgba(255, 87, 127, 1);
  }
`;
