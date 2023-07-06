import styled from "styled-components";

export const ContainerListTask = styled.div`
  .list-task {
    overflow-y: scroll;
    height: 85%;
  }

  .list-task::-webkit-scrollbar {
    width: 10px;
    margin-right: 2px;
  }

  .list-task::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  .list-task::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
