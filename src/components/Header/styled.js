import styled from 'styled-components';
import { theme, mediaUp, mediaDown } from '../GlobalStyle';
import Container from '../Container';
import Logo from '../../images/logo.svg';
import { Link } from 'gatsby';
import { rem } from 'polished';

const Header = styled.header`
  position: relative;
  height: 58px;
  border-bottom: 1px solid ${theme.gray};
  
  ${mediaUp.md`
    height: 85px;
  `}
`;

const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled(Logo)`
  width: 34px;
  height: auto;
  transition: 0.3s transform ease;
  
  path,
  rect {
    fill: ${theme.dark};
    transition: 0.3s fill ease;
  }
  
  ${mediaUp.md`
    width: 52px;
  `}
`;

const HeaderLogoLink = styled(Link)`
  display: inline-block;
  
  &:hover {
    ${HeaderLogo} {
      transform: rotate(-90deg);
      
      path,
      rect {
        fill: ${theme.primary};
      }
    }
  }
`;

const HeaderNavigation = styled.nav`
  display: none;
  margin-left: ${theme.spacerLg};
  height: 100%;
  
  ${mediaUp.md`
    display: inline-flex;
  `}
`;

const HeaderNavigationItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${rem(20)};
  font-weight: ${theme.fontWeightSemibold};
  font-size: ${rem(20)};
  text-decoration: none;
  transition: 0.2s ease;
  
  &:hover {
    text-decoration: none;
    background-color: ${theme.primary};
    color: ${theme.light};
  }
`;

const HeaderSocial = styled.div`
  margin-left: auto;
  
  ${mediaDown.md`
    display: none;
  `}
`;

const HeaderSocialItem = styled.a`
  width: 52px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transition: 0.2s background-color ease;
  margin: 0 ${rem(6)};
  
  &:first-of-type {
    margin-left: 0;
  }
  
  &:last-of-type {
    margin-right: 0;
  }
  
  &:hover {
    background-color: ${theme.primary};
    
    svg {
      rect,
      circle,
      path {
        fill: ${theme.light};
      }
    }
  }
  
  svg {
    width: 34px;
    height: auto;
    
    rect,
    circle,
    path {
      transition: 0.2s fill ease;
      fill: ${theme.dark};
    }
  }
`;

Header.Container = HeaderContainer;
Header.Logo = HeaderLogo;
Header.LogoLink = HeaderLogoLink;
Header.Navigation = HeaderNavigation;
Header.NavigationItem = HeaderNavigationItem;
Header.Social = HeaderSocial;
Header.SocialItem = HeaderSocialItem;

export default Header;