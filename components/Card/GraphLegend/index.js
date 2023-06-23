import {
  Legend,
  LegendContainer,
  LegendItemContainer,
  LegendValue,
  LegendTitle,
} from "./style";

const GraphLegend = ({title, value, color}) => {
  return (
    <LegendItemContainer>
      <LegendContainer>
        <Legend background={color} />
        <LegendTitle>{title}</LegendTitle>
      </LegendContainer>
      <LegendValue>{value}</LegendValue>
    </LegendItemContainer>
  );
};

export default GraphLegend;
