import React from 'react';
import Header from './styled';
import { useStaticQuery, graphql } from 'gatsby';
import GithubIcon from '../../images/github.svg';
import EmailIcon from '../../images/email.svg';
import LinkedinIcon from '../../images/linkedin.svg';

export default function() {
  const { menu, siteMeta, siteOptions } = useStaticQuery(
    graphql`
      query {
        menu: allWordpressMenusMenusItems {
          edges {
            node {
              items {
                title
                url
              }
            }
          }
        }
        siteMeta: wordpressSiteMetadata {
          url
        }
        siteOptions: allWordpressAcfOptions {
          nodes {
            options {
              email
              githubURL: github_url
              linkedinURL: linkedin_url
            }
          }
        }
      }
    `
  );

  const menuItems = menu.edges[0].node.items;
  const siteURL = siteMeta.url;
  const { email, githubURL, linkedinURL } = siteOptions.nodes[0].options;

  menuItems.forEach((menuItem) => {
    // remove cms url
    menuItem.url = menuItem.url.replace(siteURL, '');

    // remove trailing slash
    menuItem.url = menuItem.url.replace(/\/$/, '');
  });

  return (
    <Header>
      <Header.Container>
        <Header.LogoLink to="/">
          <Header.Logo />
        </Header.LogoLink>

        {menuItems &&
          <Header.Navigation>
            {menuItems.map((menuItem, index) => {
              return (
                <Header.NavigationItem to={menuItem.url} key={index}>
                  {menuItem.title}
                </Header.NavigationItem>
              )
            })}
          </Header.Navigation>
        }

        {(email || githubURL || linkedinURL) &&
          <Header.Social>
            {email &&
              <Header.SocialItem href={`mailto:${email}`}>
                <EmailIcon />
              </Header.SocialItem>
            }

            {linkedinURL &&
              <Header.SocialItem href={linkedinURL} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
              </Header.SocialItem>
            }

            {githubURL &&
              <Header.SocialItem href={githubURL} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </Header.SocialItem>
            }
          </Header.Social>
        }
      </Header.Container>
    </Header>
  )
}