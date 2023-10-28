import PropTypes from "prop-types";
import data from "components/Statistics/data.json";
import { SecondaryTitle, SectionStat, StatsList, StatsItem, Label} from "./Statistics.styled"


export function Statistics() {
  return (
    <SectionStat className="statistics">
      <SecondaryTitle className="title">Upload stats</SecondaryTitle>

      <StatsList className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <StatsItem className="item" key={id}>
            <Label className="label">{label}</Label>
            <span className="percentage">{percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </SectionStat>
  );
}


Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  )
};







