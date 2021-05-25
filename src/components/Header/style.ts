import styled from 'styled-components';

export const Container = styled.header `
    background: var(--blue);
`

export const Content = styled.div `
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-content: center;
    justify-content: space-between;

   button {
       border: 0;
       height: 3rem;
       color: #FFF;
       font-size: 1rem;
       padding: 0 2rem;
       border-radius: 0.5rem;
       transition: filter 0.2s;
       background: var(--blue-light);


    :hover {
       filter: brightness(0.9) 
    }
   }

`