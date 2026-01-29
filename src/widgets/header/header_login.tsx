import styled from '@emotion/styled';
import logo from '@/shared/assets/logo.png'
import userProfile from '@/shared/assets/default-profile.png'


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

export const PageListContent = styled.div`
    display: flex;
    width: 40rem;
    height:4rem;
    align-items: center;
    gap:3.25rem;
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

export const PageList = styled.div`
    width:100%;

    display:flex;
`;

export const PageText = styled.div<{ active?: boolean }>`
    color: ${({ theme, active }) => active ? theme.colors.primary[200] : theme.colors.neutral[250]};
    text-align: center;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
    padding: 1rem 1.25rem;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.primary[200]};
    }
`;


export const UserCard = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
`;

export const UserImage = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    aspect-ratio: 1 / 1;
    img {
    width: 100%;
    height: 100%;
        object-fit: contain;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.125rem;
`;

export const UserName = styled.p`
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
    color:${({ theme }) => theme.colors.neutral[450]};  
    margin:0;
`;

export const UserDepartment = styled.p`
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    color:${({ theme }) => theme.colors.text.muted};  
    margin:0;
`;


interface HeaderProps {
    status: "home" | "notice" | "status" | "company";
}

const Header = ({ status }: HeaderProps) => {
    return (
        <Frame>
            <Content>

                <PageListContent>
                    <Logo>
                        <img src={logo} alt="logo" />
                    </Logo>
                    <PageList>
                        <PageText active={status === "home"}>홈</PageText>
                        <PageText active={status === "notice"}>공고</PageText>
                        <PageText active={status === "status"}>취업 현황 확인</PageText>
                        <PageText active={status === "company"}>회사 관리</PageText>

                    </PageList>
                </PageListContent>

                <UserCard>
                    <UserImage>
                        <img src={userProfile} alt="user" /> {/*임시 이미지*/}
                    </UserImage>
                    <UserInfo>
                        <UserName>김철수</UserName>
                        <UserDepartment>소프트웨어개발과 3학년</UserDepartment>
                    </UserInfo>
                </UserCard>
            </Content>
        </Frame>
    );
};

export default Header;