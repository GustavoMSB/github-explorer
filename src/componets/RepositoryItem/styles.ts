import styled from 'styled-components';

export const Content = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  background: #161b22;
  border-radius: .5rem;
  max-width: 100%;
  transition: transform 0.2s;
  margin-bottom: 1rem;
  border-top: .5rem solid #59a5fb;
  height: 10rem;

  strong{
    display: block;
    margin-bottom: 1rem;
  }

  p{
    font-size: 14px;
    overflow: auto;
  }

  a{
    text-decoration: none;
    color: #58a6ff;
  }

  &:hover{
    transform: scale(1.03);
  }
`;