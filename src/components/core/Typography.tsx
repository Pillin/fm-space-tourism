import styled from "@emotion/styled";

export const P = styled.p`
  color: #D0D6F9;
  margin: 0px;
  font-weight: 400;
  line-height: 32px;
  font-size: 18px;
  letter-spacing: 0px; 
  font-family: 'Barlow Condensed', sans-serif;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const H1 = styled.h1`
  color: white;
  font-weight: 400;
  margin: 0px;
  font-size: 150px;
  font-family: 'Bellefair', serif;

  @media (max-width: 600px) {
    font-size: 80px;
  }
`;

export const H2 = styled.h2`
  color: #FFFFFF;
  font-weight: 400;
  margin: 0px;
  font-size: 100px;
  text-transform: uppercase;
  font-family: 'Bellefair', serif;
`;

export const H3 = styled.h3`
  color: #FFFFFF;
  font-weight: 400;
  margin: 0px;
  font-size: 56px;
  font-family: 'Bellefair', serif;
`;

export const H4 = styled.h4`
  color: #ffffff80;
  font-weight: 400;
  margin: 0px;
  font-size: 32px;
  line-height: 20px;
  font-family: 'Bellefair', serif;
`;

export const H5 = styled.h5`
  color: #2b3442;
  font-weight: 600;
  margin: 0px;
  font-size: 28px;

  font-family: 'Barlow Condensed', sans-serif;
`;

export const H5White = styled(H5)`
  color: white;
  letter-spacing: 4.72px;
  text-transform: uppercase;
`;

export const SubHeadingOne = styled.p`
  color: #D0D6F9;
  font-size: 28px;
  font-weight: 400;
  margin: 0px;
    font-family: 'Bellefair', serif;
  letter-spacing: 4.72px;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const SubHeadingTwo = styled.p`
color: #D0D6F9;
  font-size: 16px;
  font-weight: 400;
  margin: 0px;
  text-transform: uppercase;
  font-family: 'Barlow Condensed', sans-serif;
`;

