import S from "styled-components";
export const DashboardStyled = S.div`
 display: flex;
flex-direction: row;
align-items: flex-start;
width: 830px;
height: 549px;

`;

export const SideLeftPage = S(DashboardStyled)`
flex-direction: column;
gap: 15px;
padding: 20px 20px 0px;
width: 470px;
height: 100%;
background: linear-gradient(72.2deg, #39454C 0%, #64757E 100%);
border-radius: 20px 0px 0px 20px;

`;

export const SideRightPage = S(DashboardStyled)`
display: flex;
flex-direction: column;
padding: 40px;
gap: 40px;
width: 360px;
height: 100%;
background:#fff;
border-radius: 0px 20px 20px 0px;
gap: 20px;
`;
export const TitleWarper = S.div`
display: inline-flex;
gap: 1px;
`;