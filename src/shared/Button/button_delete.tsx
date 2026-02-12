import styled from '@emotion/styled';

export const Button = styled.button`
    margin-left: 2rem; /* 컴포넌트 구분용 코드 - 사용할 땐 지우기!!! */
    padding: 0.5rem 1.25rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    ${({ theme }) => theme.typography.ParagraphRegular};
    color: ${({ theme }) => theme.colors.state.error};
    background-color: ${({ theme }) => theme.colors.state.delete};
    &:hover {
        color: ${({ theme }) => theme.colors.default.white};
        background-color: ${({ theme }) => theme.colors.state.error};
    }
    &:active {
        transform: scale(0.96);
    }
`;

const ButtonDelete = () => {
    return (
        <Button>삭제</Button>
    );
};

export default ButtonDelete;