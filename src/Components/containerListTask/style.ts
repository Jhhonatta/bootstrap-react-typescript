import styled from "styled-components";

export const ContainerListTask = styled.div`
  .list-task {
    overflow-y: scroll;
    height: 85%;
    border: none;
  }

  .list-task::-webkit-scrollbar {
    width: 5px;
  }

  .list-task::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }

  .list-task::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  .list-group {
    background-color: transparent;
    border: none;
  }
`;
