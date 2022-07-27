import S from "styled-components";
export interface IGlobalParagraphStyle {
  background: string;
  fontHeight: string;
  fontSize: string;
  LineHeight: string;
  color: string;
  height: string;
  width: string;
}

export const GlobalParagraphStyle = S.p<IGlobalParagraphStyle>`
  background: ${(props) => props.background};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-family: 'Assistant';
  font-style: normal;
  font-weight: ${(props) => props.fontHeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.LineHeight};
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
