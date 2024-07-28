import styled from "styled-components";

export const ScheduleItem = styled.div`
  display: flex;
  align-items: center; 
  gap: 16px;
  border-bottom: solid 1px rgba(0,0,0,.5);
  height: 3rem;

  &:last-child {
    border-bottom: none;
  }
`

export const ScheduleHour = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-right: solid 1px rgba(0,0,0,.5);
`

const GeneralScheduling = styled.div`
  font-size: .875rem;
  padding: 0 1rem;
  border-radius: 4px;
`

export const MyScheduling = styled(GeneralScheduling)`
  background-color: green;
`

export const SomeoneScheduling = styled(GeneralScheduling)`
  background-color: dodgerblue;
`

export const AvailableScheduling = styled(GeneralScheduling)`
  background-color: rgba(0,0,0,.2);

  &:hover {
    background-color: rgba(0,0,0,.1);
    cursor: pointer;
  }
`