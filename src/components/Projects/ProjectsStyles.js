import styled from 'styled-components';

export const Img = styled.img`
width:  100%;
height: 100%
object-fit: fill;
overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
font-family: sans-serif;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}


`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-sizing: content-box;
  font-family: sans-serif;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  transition: transform 250ms;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  font-family: sans-serif;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  font-family: sans-serif;
  letter-spacing: 2px;
  color: #FCD6D6;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #ccf0f8;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#000000;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #E8C7C7;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #FFE7E7;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`