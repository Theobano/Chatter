import styled from "styled-components";

export const RegisterContainer = styled.div`
width: 100%;

h2 {
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .name-container {
        display: flex;
        gap: .75rem;
        width: 100%;

        >*{flex: 1;}
    }
}
`;