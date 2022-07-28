import S from "styled-components";
export interface IGlobalParagraphStyle {
  background: string | null;
  fontWeight: string | null;
  fontSize: string | null;
  LineHeight: string | null;
  color: string | null;
  height: string | null;
  width: string | null;
  order: string | null;
  flexGrow: string | null;
  opacity: string | null;
}

export const GlobalParagraphStyle = S.span<Partial<IGlobalParagraphStyle>>`
  background: ${(props) => props?.background};
  height: ${(props) => props?.height};
  width: ${(props) => props?.width};
  font-family: 'Assistant';
  font-style: normal;
  font-weight: ${(props) => props?.fontWeight};
  font-size: ${(props) => props?.fontSize};
  line-height: ${(props) => props?.LineHeight};
  display: flex;
  align-items: center;
  text-align: center;
  
  color: ${(props) => props?.color};
  flex: none;
  order: ${(props) => props?.order};;
  align-self: stretch;
  flex-grow: ${(props) => props?.flexGrow};;
  flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => props?.opacity}};
  
  `;
