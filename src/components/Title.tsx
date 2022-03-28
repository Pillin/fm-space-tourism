import styled from "@emotion/styled";
import { H5, H5White } from "../components/core/Typography";

const Row = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;

`;

const Title = (props: {
  number: string;
  description: string;
}) =>
  <Row><H5>{`${props.number} `}</H5><H5White>{props.description}</H5White></Row>;


export default Title;