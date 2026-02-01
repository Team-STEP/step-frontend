import styled from "@emotion/styled";
import LogoImg from "@/shared/assets/logo2.png";

const Frame = styled.div`
    display: flex;
    width: 45rem;

    padding: 1.4375rem 2.5rem 1.45938rem 2.4375rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.neutral[50]};
`;

const Content = styled.div`
    display: flex;
    width: 40.0625rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin:0;
    padding:0;
`;

const Text = styled.p`
    ${({ theme }) => theme.typography.ParagraphMedium};
    color: ${({ theme }) => theme.colors.text.muted};
    span{
        color:${({ theme }) => theme.colors.primary[250]};
        margin:0;
    }
    margin:0;
    padding:0;
`;

const Logo = styled.img`
    height: 3.74994rem;
    width: 7.12463rem;

`;


const Comment = () => {
    return (
        <Frame>
            <Content>
                <Text>취업으로 향하는 당신의 <span>step</span>을 응원할게요</Text>
                <Logo src={LogoImg} alt="" />
            </Content>
        </Frame>
    );
}

export default Comment;