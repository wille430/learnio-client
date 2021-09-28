import styled from "styled-components";
import theme from 'themes/theme'

export const Container = styled.div`
    background-color: white;
    border-radius: ${theme.defaultBorderRadius};
    padding: ${theme.defaultPadding};
    min-height: 10px;
    min-width: 10px;
`