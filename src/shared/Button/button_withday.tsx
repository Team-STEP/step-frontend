import styled from '@emotion/styled';
import DDay from "@/shared/D-day/D-day.tsx";

export const Frame = styled.div`
    position: relative;
    width: 9.375rem;
    margin: 3rem; /* 컴포넌트 구분용 코드 - 사용할 땐 지우기!!! */
`;


export const DDayWrapper = styled.div`
    position: absolute;
    width: 5rem;
    height: 2rem;
    top: -1.8rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
`;

export const Button = styled.button<{ isFinish: boolean }>`
    width: 9.375rem;
    height: 3.75rem;
    border-radius: 0.5rem;
    border: none;
    ${({ theme }) => theme.typography.ParagraphRegular};
    color: ${({ theme, isFinish }) => isFinish ? theme.colors.text.muted : theme.colors.default.white};
    background-color: ${({ theme, isFinish }) => isFinish ? theme.colors.neutral[150] : theme.colors.primary[200]};
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

const ButtonWithday = ({ isFinish }: ButtonProps) => {
    return (
        <Frame>
            <DDayWrapper>
                <DDay isFinish={false} remainingDay={123} />
            </DDayWrapper>
            <Button isFinish={isFinish}>지원하기</Button>
        </Frame>
    );
};

export default ButtonWithday;