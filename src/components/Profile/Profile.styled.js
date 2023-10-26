import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: white;
  width: 750px;
  height: 750px;
  margin-left: auto;
  margin-right: auto;
  color: black;
`;
export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondaryDescription = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  color: black;
  font-size: 24px;
`;
export const DescriptionItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.p`
   font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
`;

export const Stats = styled.ul`
list-style: none;
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 30px;

`;