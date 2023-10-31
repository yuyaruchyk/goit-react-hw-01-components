import PropTypes from "prop-types";
import { SecondaryTitle, SectionStat, StatsList, StatsItem, Label} from "./Statistics.styled"

export function Statistics({ title, stats }) {
  return (
    <SectionStat>
      {title && <SecondaryTitle>{title}</SecondaryTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <Label>{label}</Label>
            <span>{percentage}%</span>
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







