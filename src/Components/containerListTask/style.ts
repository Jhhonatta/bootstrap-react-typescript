import styled from "styled-components";

export const ContainerListTask = styled.div`
  .listTask {
    overflow-y: scroll;
    height: 85%;
  }

  .listTask::-webkit-scrollbar {
    width: 10px;
    margin-right: 2px;
  }

  .listTask::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  .listTask::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
