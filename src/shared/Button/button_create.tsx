import styled from '@emotion/styled';

export const Button = styled.button<{ isFinish: boolean }>`
    width: 9.375rem;
    height: 3.75rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    ${({ theme }) => theme.typography.ParagraphRegular};
    color: ${({ theme, isFinish }) => isFinish ? theme.colors.text.muted : theme.colors.default.white};
    background-color: ${({ theme, isFinish }) => isFinish ? theme.colors.neutral[150] : theme.colors.primary[200]};
    cursor: ${({ isFinish }) => (isFinish ? 'not-allowed' : 'pointer')};
    pointer-events: ${({ isFinish }) => (isFinish ? 'none' : 'auto')};
    &:hover {
        background-color: ${({ theme, isFinish }) => isFinish ? theme.colors.neutral[150] : theme.colors.primary[250]};
    }
    &:active {
        background-color: ${({ theme, isFinish }) => isFinish ? theme.colors.neutral[150] : theme.colors.primary[300]};
        transform: ${({ isFinish }) => (isFinish ? 'none' : 'scale(0.96)')};
    }
`;

interface ButtonProps {
    isFinish: boolean;
}

const ButtonCreate = ({ isFinish }: ButtonProps) => {
    return (
        <Button isFinish={isFinish}>생성하기</Button>
    );
};

export default ButtonCreate;