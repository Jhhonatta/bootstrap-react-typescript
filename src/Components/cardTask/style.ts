import styled from "styled-components";

export const StyleCard = styled.div`
  .card-complete:hover {
    background-color: rgb(255, 182, 193);
    color: white;
    box-shadow: 0px 4px 32px -12px rgb(255, 182, 193);
  }

  .button-delete {
    background-color: transparent;
    border: none;
    color: grey;
  }

  .button-delete:hover {
    color: red;
  }
`;
