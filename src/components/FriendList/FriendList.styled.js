import styled from '@emotion/styled';



export const LiItem = styled.li`
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const statusColor = (p) => {
  switch (p.$status) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'black';
  }
};

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 4px;
  background-color: ${statusColor};
`;

export const FriendAvatar = styled.img`
  
  margin-left: auto;
  margin-right: auto;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-bottom: 3 px;
  background-color: gray;
`;
