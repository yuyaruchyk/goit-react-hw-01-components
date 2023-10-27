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
  border-radius: 50%;
  width: 450px;
  height: 450px;
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const Stats = styled.ul`
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 30px;
  border-top: solid 0.6px gray;
  padding-top: 10px;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-right: solid 0.6px gray;

  padding-right: 20px;
  padding-left: 20px;
`;

export const Label = styled.span`
 font-size: 24px;
  font-weight: 600;
  text-transform: capitalize;
`;



