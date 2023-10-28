import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  background-color: white;
  width: 750px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  margin-bottom: 10;
  padding-left: 0;

  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 8px;
  border-top: solid 0.6px gray;
  padding-top: 20px;
`;

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

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 4px;
  background-color: green;
`;

export const FriendAvatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-bottom: 3 px;
  background-color: gray;
`;
