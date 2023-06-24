import styled from "styled-components";

export const ReasonCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.125em .9375em;
    gap: .75em;
    border-radius: .5em;
    border: 1px solid var(--black100);

    .icon{
        width: 5.75em;
        height: 5.5em;
        border-radius: 50%;
        background-color: var(--icon-background-color);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3{
        margin: 0;
        font-size: 1.5em;
        font-weight: 500;
        line-height: 1.25em;
    }

    p{
        margin: 0;
        font-weight: 400;
        color: var(--black400);
    }


`