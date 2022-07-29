import S from "styled-components";

export interface TagContainerProps {
  display: string | null;
  flexDirection: string | null;
  alignItems: string | null;
  padding: string | null;
  gap: string | null;
  width: string | null;
  height: string | null;
  background: string | null;

  borderRadius: string | null;
  flex: string | null;
  order: string | null;
  flexGrow: string | null;
  justifyContent: string | null;
  border?: string | null;
}

export const TagContainer = S.span<TagContainerProps>`
cursor: pointer;
display: ${(props) => props?.display};
flex-direction: ${(props) => props?.flexDirection};
align-items: ${(props) => props?.alignItems};
justify-content: ${(props) => props?.justifyContent};
padding: ${(props) => props?.padding};
gap: ${(props) => props?.gap};
width: ${(props) => props?.width};
height: ${(props) => props?.height};
background: ${(props) => props?.background};
border-radius: ${(props) => props?.borderRadius};
order: ${(props) => props?.order};
flex-grow: ${(props) => props?.flexGrow};
display: flex;
border:${({ border }) => border && border}
`;

export const Button = S.button`

display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px 11px 10px;
gap: 5px;

width: 280px;
height: 45px;

/* Neutral/100 */

background: #FFFFFF;
/* Bad/200 */

border: 1px solid #FFDDDD;
border-radius: 10px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 1;


`;





export const TagContext = S.span<{ color?: string | null }>`
font-family: 'Assistant';
font-style: normal;
width: 156px;
height: 18px;
font-family: 'Assistant';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
color: ${({ color }) => (color ? color : "#64757E")};
`;

