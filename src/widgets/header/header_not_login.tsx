import styled from '@emotion/styled';
import logo from '@/shared/assets/logo.png'

export const Frame = styled.header`
  display: flex;
  width: 100%;
  height: 8rem;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96rem;
  height:4rem;
  align-items: center;
`;

export const Logo = styled.div`
  width: 5.75rem;
  height: 2rem;
  aspect-ratio: 1 / 1;
  img {
    width: 100%;
    height: 100%;
        object-fit: contain;
    }
  cursor: pointer;
`;

export const LoginButton = styled.button`
    width:7.7rem;
    height:3.5rem;
    font-family: Pretendard;
    font-size: 1.3rem;
    border:none;
    border-radius:8px;
    text-align: center;
    color:${({ theme }) => theme.colors.default.white};
    background-color:${({ theme }) => theme.colors.primary[200]};
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary[250]};
    }
    &:active {
        background-color: ${({ theme }) => theme.colors.primary[300]};
        transform: scale(0.96);
    }
`;


const Header = () => {
    return (
        <Frame>
            <Content>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <LoginButton>로그인</LoginButton>
            </Content>
        </Frame>
    );
};

export default Header;