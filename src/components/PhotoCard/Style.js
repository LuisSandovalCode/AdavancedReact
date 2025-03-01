import styled, { css, keyframes } from "styled-components";
import { fadeIn } from "../Styles/animation";

export const Article = styled.article`
  min-height: 200px;
`;

export const ImagenWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;
export const Image = styled.img`
  ${fadeIn("5s", "ease")}
  box-shadox: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
