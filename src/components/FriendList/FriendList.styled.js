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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 8px;
  border-top: solid 0.6px gray;
  padding-top: 20px;
`;

export const LiItem = styled.li`
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
    background-color: green
  `;




