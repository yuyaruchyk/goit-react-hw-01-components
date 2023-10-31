import styled from '@emotion/styled';

export const SectionStat = styled.section`
  background-color: white;
  width: 750px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 5px;
  border-top: solid 0.6px gray;
  text-shadow: 0 1px 1px #2d2020;
`;

export const SecondaryTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
  text-shadow: 0 1px 1px #2d2020;
`;

export const StatsList = styled.ul`
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 30px;
  border-top: solid 0.6px gray;
  padding-top: 10px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-right: solid 0.6px gray;
   border-left: solid 0.6px gray;

  padding-right: 20px;
  padding-left: 20px;
  background-color: white;
`;

export const Label = styled.span`
  font-size: 24px;
  font-weight: 600;
  text-transform: capitalize;
`;
