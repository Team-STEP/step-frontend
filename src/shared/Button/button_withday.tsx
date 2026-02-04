import styled from '@emotion/styled';
import DDay from "@/shared/D_day/D_day";

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

export const Button = styled.button`
    width: 9.375rem;
    height: 3.75rem;
    border-radius: 0.5rem;
    border: none;
    ${({ theme }) => theme.typography.ParagraphRegular};
    color: ${({ theme }) => theme.colors.default.white};
    background-color: ${({ theme }) => theme.colors.primary[200]};
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary[250]};
    }
    &:active {
        background-color: ${({ theme }) => theme.colors.primary[300]};
        transform: scale(0.96);
    }
`;

const ButtonWithday = () => {
    return (
        <Frame>
            <DDayWrapper>
                <DDay isFinish={false} />
            </DDayWrapper>
            <Button>지원하기</Button>
        </Frame>
    );
};

export default ButtonWithday;