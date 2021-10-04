import styled from "styled-components";

export const StyledDate = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Comfortaa";

  .rdrCalendarWrapper,
  .rdrMonths,
  .rdrMonth {
    padding: 0;
    width: 100%;
    max-width: 400px;
    min-width: 280px;
  }
  .rdrDateDisplayWrapper {
    border-radius: 5px;
  }

  & > div,
  .rdrDateInput,
  select option {
    background: ${(props) => props.theme.bgPrimary};
  }
  .rdrNextPrevButton {
    margin: 0;
    background: ${(props) => props.theme.bgSecondary};
    border: 1px solid ${(props) => props.theme.tone};
  }
  .rdrNextButton i {
    border-color: transparent transparent transparent
      ${(props) => props.theme.color};
  }
  .rdrPprevButton i {
    border-color: transparent ${(props) => props.theme.color} transparent
      transparent;
  }
  .rdrDateDisplayWrapper {
    background: ${(props) => props.theme.bgSecondary};
  }
  .rdrDayNumber span,
  select {
    color: ${(props) => props.theme.color};
  }

  .rdrMonthAndYearWrapper,
  .rdrWeekDays,
  .rdrDays {
    padding: 0 5px;
  }
  .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span {
    color: ${(props) => props.theme.colorDarkBg};
  }
  .rdrDayPassive span {
    color: ${(props) => props.theme.tone};
  }

  .rdrDayToday .rdrDayNumber span:after {
    background: ${(props) => props.theme.color};
  }
  .rdrDayToday:not(.rdrDayPassive) span ~ .rdrDayNumber span:after {
    background: ${(props) => props.theme.colorDarkBg};
  }
`;
