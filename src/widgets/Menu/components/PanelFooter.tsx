import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import IconButton from "../../../components/Button/IconButton";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 8px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  solidPriceUsd,
  xsolidPriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        {solidPriceUsd ? (
          <PriceLink href="https://pancakeswap.info/token/" target="_blank">
            <img
              src="https://ipfs.io/ipfs/Qmey8kWdYJEj5VSQqBqj2aAkga9tzEZKk8ddCAmDSTDDot?filename=shilling.svg"
              alt="SHILLING Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />

            <Text color="textSubtle" bold>{`$${solidPriceUsd.toFixed(8)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24}>
          <img
              src="https://ipfs.io/ipfs/Qmey8kWdYJEj5VSQqBqj2aAkga9tzEZKk8ddCAmDSTDDot?filename=shilling.svg"
              alt="SHILLING Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
          </Skeleton>
        )}
      </SocialEntry>
      <SocialEntry>
        {xsolidPriceUsd ? (
          <PriceLink href="https://pancakeswap.info/token/0x2F0D21f1B84F03fB9D60004fc206C86Be6902a32" target="_blank">
            <img
              src="https://ipfs.io/ipfs/QmSMJy9D5MXrWsKDuZLrJNoxH5Rp55mSpAUzu48zFhjYfr?filename=squire.png"
              alt="SQUIRE Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />

            <Text color="textSubtle" bold>{`$${xsolidPriceUsd.toFixed(5)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24}>
          <img
              src="https://ipfs.io/ipfs/QmSMJy9D5MXrWsKDuZLrJNoxH5Rp55mSpAUzu48zFhjYfr?filename=squire.png"
              alt="SQUIRE Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
          </Skeleton>
        )}
      </SocialEntry>
      <SettingsEntry>
        <SocialLinks />
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        {/* <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} /> */}
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
