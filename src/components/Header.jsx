import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { SocialIcons } from 'components';

// function Loading(props) {
//   if (props.error) {
//     return <div>Something went wrong! <button onClick= { props.retry }>Retry</button></div>;
//   } else if (props.timedOut) {
//     return <div>Seems like your net is slow.. <button onClick={ props.retry }>Retry</button> </div>
//   } else if (props.pastDelay) {
//     return <p>Loading Social Icons...</p>;
//   } else {
//     return null;
//   }
// }

// const LoadableSocialIcons = Loadable({
//   loader: () => import('./SocialIcons'),
//   loading: Loading,
//   delay: 1000, // 1 seconds
//   timeout: 150000, // 15 seconds
// });

const Wrapper = styled.header`
  @media (max-width: ${props => props.theme.breakpoints.s}) {
  }
  background: ${props => props.theme.gradient.rightToLeft};
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 275px;
  }
  position: relative;
  overflow: hidden;
`;

const SweetLeaf = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled.h3`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
`;
const Logo = styled.div`
  position: relative;
  flex-basis: calc(99.9% * 2/5 - 2.5rem);
  max-width: calc(99.9% * 2/5 - 2.5rem);
  width: calc(99.9% * 2/5 - 2.5rem);
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-basis: calc(99.9% * 1 /2);
  max-width: calc(99.9% * 1 / 2 );
  width: calc(99.9% * 1 / 2 );  
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-basis: calc(99.9% * 4/5 );
  max-width: calc(99.9% * 4/5);
  width: calc(99.9% * 4/5 );  
  }
 

`;

// Begin Component

const Header = ({ children, title, date, cover }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
 return(
   <>
  <Wrapper>
      {/* <Img fluid={cover || {} || [] || ''} /> */}
      
      <SweetLeaf>
        {/* <h1>{title}</h1> */}
        <h3>{date}</h3>
        <Logo> 
          <Link to="/"><Img fluid={data.logo.childImageSharp.fluid} /></Link>
        </Logo>

        {/* <LoadableSocialIcons /> */}
        {/* <SocialIcons /> */}
        {children && <Subtitle>{children}</Subtitle>}
        

      </SweetLeaf>
    </Wrapper>
    
    </>
  )
};

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
