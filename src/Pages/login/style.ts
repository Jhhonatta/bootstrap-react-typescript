import styled from "styled-components";

export const ContainerLogin = styled.div`
  background-color: rgba(18, 18, 20, 1);

  .form-control::-webkit-input-placeholder {
    color: black;
    opacity: 60%;
  }

  .form {
    background-color: rgba(33, 37, 41, 1);
    max-width: 468px;
  }

  .tittle-login {
    color: rgba(255, 87, 127, 1);
    font-size: 4rem;
    font-family: inter;
  }

  .text-label {
    color: rgba(248, 249, 250, 1);
    font-family: inter;
  }

  .input {
    background-color: rgba(248, 249, 250, 1);
  }

  .button-login {
    background-color: rgba(255, 87, 127, 1);
    border: 1px solid rgba(255, 87, 127, 1);
  }

  .bt-record {
    background: none;
    border: none;
    padding-top: 4px;
  }

  .error {
    color: red;
  }
`;
