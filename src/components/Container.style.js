import styled from "styled-components";
import theme from 'themes/theme'

export const Container = styled.div`
    background-color: white;
    border-radius: ${theme.defaultBorderRadius};
    padding: ${theme.defaultPadding};
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.50);
`