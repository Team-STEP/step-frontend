import styled from '@emotion/styled';

export const Button = styled.button`
    margin-left: 2rem; /* 컴포넌트 구분용 코드 - 사용할 땐 지우기!!! */
    padding: 0.5rem 1.25rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    ${({ theme }) => theme.typography.ParagraphRegular};
    color: ${({ theme }) => theme.colors.text.muted};
    background-color: ${({ theme }) => theme.colors.neutral[150]};
    &:hover {
        background-color: ${({ theme }) => theme.colors.neutral[200]};
    }
    &:active {
        transform: scale(0.96);
    }
`;

const ButtonBack = () => {
    return (
        <Button>뒤로가기</Button>
    );
};

export default ButtonBack;