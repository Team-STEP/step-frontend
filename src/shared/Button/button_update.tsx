import styled from '@emotion/styled';

export const Button = styled.button<{ isFinish: boolean }>`
    margin-left: 2rem; /* 컴포넌트 구분용 코드 - 사용할 땐 지우기!!! */
    height: 3.75rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    ${({ theme }) => theme.typography.ParagraphRegular};
    color: ${({ theme, isFinish }) => isFinish ? theme.colors.text.muted : theme.colors.state.success};
    background-color: ${({ theme, isFinish }) => isFinish ? theme.colors.neutral[150] : theme.colors.state.update};
    &:hover {
        color: ${({ theme, isFinish }) => isFinish ? theme.colors.text.muted : theme.colors.default.white};
        background-color: ${({ theme, isFinish }) => isFinish ? theme.colors.neutral[150] : theme.colors.state.success};
    }
    &:active {
        transform: ${({ isFinish }) => (isFinish ? 'none' : 'scale(0.96)')};
    }
`;

interface ButtonProps {
    isFinish: boolean;
}

const ButtonUpdate = ({ isFinish }: ButtonProps) => {
    return (
        <Button isFinish={isFinish}>수정하기</Button>
    );
};

export default ButtonUpdate;