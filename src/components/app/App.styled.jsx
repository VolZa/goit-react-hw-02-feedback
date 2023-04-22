// import styled from '@emotion/styled';
import styled from 'styled-components';

export const Container = styled.div`
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        fontSize: 10,
        color:  ${p => p.theme.colors.primary};
`;