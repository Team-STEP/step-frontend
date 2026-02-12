import styled from '@emotion/styled';

export const Button = styled.button<{ deactivate: boolean }>`
    margin-left: 2rem; /* 컴포넌트 구분용 코드 - 사용할 땐 지우기!!! */
    padding: 0.5rem 1.25rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    ${({ theme }) => theme.typography.ParagraphRegular};
    color: ${({ theme, deactivate }) => deactivate ? theme.colors.text.muted : theme.colors.state.success};
    background-color: ${({ theme, deactivate }) => deactivate ? theme.colors.neutral[150] : theme.colors.state.update};
    &:hover {
        color: ${({ theme, deactivate }) => deactivate ? theme.colors.text.muted : theme.colors.default.white};
        background-color: ${({ theme, deactivate }) => deactivate ? theme.colors.neutral[150] : theme.colors.state.success};
    }
    &:active {
        transform: ${({ deactivate }) => (deactivate ? 'none' : 'scale(0.96)')};
    }
`;

interface ButtonProps {
    deactivate: boolean;
}

const ButtonUpdate = ({ deactivate }: ButtonProps) => {
    return (
        <Button deactivate={deactivate}>수정</Button>
    );
};

export default ButtonUpdate;