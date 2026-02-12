import styled from '@emotion/styled';

export const Button = styled.button<{ deactivate: boolean }>`
    padding: 0.5rem 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    ${({ theme }) => theme.typography.ParagraphRegular};
    color: ${({ theme, deactivate }) => deactivate ? theme.colors.text.muted : theme.colors.default.white};
    background-color: ${({ theme, deactivate }) => deactivate ? theme.colors.neutral[150] : theme.colors.primary[200]};
    &:hover {
        background-color: ${({ theme, deactivate }) => deactivate ? theme.colors.neutral[150] : theme.colors.primary[250]};
    }
    &:active {
        background-color: ${({ theme, deactivate }) => deactivate ? theme.colors.neutral[150] : theme.colors.primary[300]};
        transform: ${({ deactivate }) => (deactivate ? 'none' : 'scale(0.96)')};
    }
`;

interface ButtonProps {
    deactivate: boolean;
}

const ButtonCreate = ({ deactivate }: ButtonProps) => {
    return (
        <Button deactivate={deactivate}>생성하기</Button>
    );
};

export default ButtonCreate;