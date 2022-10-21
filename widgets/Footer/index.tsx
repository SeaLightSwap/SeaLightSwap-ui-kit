import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import config from "./config";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 32px;
  a:not(:last-child) {
    margin-bottom: 16px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: center;
    flex-direction: row;
    display: flex;
  }
`;

const Footer: React.FC = () => (
  <StyledFooter>
    {config.map((entry) => {
      return (
        <Link key={entry.href} href={entry.href} external={entry.href.startsWith("http")}>
          {entry.label}
        </Link>
      );
    })}
  </StyledFooter>
);

export default Footer;
