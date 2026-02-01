import styled from "@emotion/styled"


const DDayFrame = styled.div<{ isFinish: boolean }>`
    display: flex;
    height: 2rem;
    padding: 0.375rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 2.5rem;
    border: 1px solid ${({ theme, isFinish }) => isFinish ? theme.colors.neutral[200] : theme.colors.primary[200]};
    background: ${({ theme, isFinish }) => isFinish ? theme.colors.neutral[100] : theme.colors.primary[50]};
    p {
        ${({ theme }) => theme.typography.CaptionMedium};
        color: ${({ theme, isFinish }) => isFinish ? theme.colors.text.muted : theme.colors.primary[250]};
        margin:0;
    }
`;

interface DDayProps {
    isFinish: boolean;
}

const DDay = ({ isFinish }: DDayProps) => {
    return (
        <DDayFrame isFinish={isFinish}>
            <p>D-day</p>
        </DDayFrame>
    )
}

export default DDay;