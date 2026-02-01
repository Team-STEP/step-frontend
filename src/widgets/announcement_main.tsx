import styled from "@emotion/styled";
import place from "@/shared/assets/place_icon.png";
import company from "@/shared/assets/company_icon.png";
import DDay from "@/shared/D_day/D_day";
import person from "@/shared/assets/person_icon.png";
import role from "@/shared/assets/role_icon.png";

/** * [수정 포인트] 
 * 1. ${Frame} 변수 선택자 대신 .group 클래스 선택자를 사용했습니다.
 * 2. 모든 Hover 효과를 .group:hover & 로 통일했습니다.
 */

const Frame = styled.div`
    display: inline-flex;
    height: 14.5rem;
    padding: 2.5rem 2.5rem;
    justify-content: center;
    align-items: flex-start;
    gap: 0.625rem;
    border : 1px solid ${({ theme }) => theme.colors.neutral[200]};
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.default.white};
    cursor: pointer;

    &:hover {
        height: 26.75rem;
        padding: 3rem 2.5rem;
    }
`;

const Content = styled.div`
    display: flex;
    width: 17.5rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.25rem;
    transition: gap 0.3s ease-in-out;

    /* 수정된 부분 */
    .group:hover & {
        gap: 2.375rem;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    align-self: stretch;
`;

const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    align-self: stretch;
`;

const TitleContentBox = styled.div`
    display: flex;
    width: 17.5rem;
    flex-direction: column;
    align-items: flex-start;
`;

const CompanyTitle = styled.p`
    ${({ theme }) => theme.typography.ParagraphMedium};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
`;

const MainTitle = styled.p`
    ${({ theme }) => theme.typography.SubHeadingMedium};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
`;

const SubInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
`;

const MainSubInfoBox = styled.div`
    display: flex;
    align-items: center;
`;

const PlaceContent = styled.div`
    display: flex;
    padding-right: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
`;

const PlaceContentBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

const PlaceContentIcon = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 0.72919rem;
        height: 1.04169rem;
    }
`;

const PlaceContentText = styled.p`
    ${({ theme }) => theme.typography.CaptionMedium};
    color: ${({ theme }) => theme.colors.text.muted};
    margin: 0;
`;

const CompanyInfoContent = styled.div`
    display: flex;
    padding-left: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
`;

const CompanyInfoContentBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

const CompanyInfoContentIcon = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 1.04169rem;
        height: 0.9375rem;
    }
`;

const CompanyInfoContentText = styled.p`
    ${({ theme }) => theme.typography.CaptionMedium};
    color: ${({ theme }) => theme.colors.text.muted};
    margin: 0;
`;

const SecondSubInfoBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    /* 수정된 부분 */
    .group:hover & {
        max-height: 2rem;
        opacity: 1;
        visibility: visible;
        margin-top: 0.25rem;
    }
`;

const SecondSubInfoIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    img{
        width: 0.83331rem;
        height: 0.83331rem;
    }
`;

const SecondSubInfoText = styled.p`
    ${({ theme }) => theme.typography.CaptionMedium};
    color: ${({ theme }) => theme.colors.text.muted};
    margin: 0;
`;

const RoleContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    /* 수정된 부분 */
    .group:hover & {
        max-height: 5rem;
        opacity: 1;
        visibility: visible;
    }
`;

const RoleContentBox = styled.div`
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.neutral[100]};
`;

const RoleIcon = styled.div`
    width: 1rem;
    height: 1rem;
    img{
        width: 0.66669rem;
        height: 0.83331rem;
    }
`;

const RoleText = styled.p`
    ${({ theme }) => theme.typography.CaptionMedium};
    color: ${({ theme }) => theme.colors.text.muted};
    margin: 0;
`;

const DetailButton = styled.div`
    display: flex;
    padding: 0.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-radius: 0.5rem;
    background-color:${({ theme }) => theme.colors.primary[200]};
    cursor: pointer;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    /* 수정된 부분 */
    .group:hover & {
        max-height: 3rem;
        opacity: 1;
        visibility: visible;
    }

    p{
        ${({ theme }) => theme.typography.CaptionRegular};
        color: ${({ theme }) => theme.colors.default.white};
        margin: 0;
    }
`;

const AnnouncementMain = () => {
    return (
        /* className="group" 추가하여 스타일 선택자로 활용 */
        <Frame className="group">
            <Content>
                <Info>
                    <TitleContent>
                        <DDay isFinish={false} />
                        <TitleContentBox>
                            <CompanyTitle>주(코드잇)</CompanyTitle>
                            <MainTitle>UX/UI 디자이너 모집</MainTitle>
                        </TitleContentBox>
                    </TitleContent>
                    <SubInfoContent>
                        <MainSubInfoBox>
                            <PlaceContent>
                                <PlaceContentBox>
                                    <PlaceContentIcon>
                                        <img src={place} alt="location" />
                                    </PlaceContentIcon>
                                    <PlaceContentText>서울시 강남구</PlaceContentText>
                                </PlaceContentBox>
                            </PlaceContent>
                            <CompanyInfoContent>
                                <CompanyInfoContentBox>
                                    <CompanyInfoContentIcon>
                                        <img src={company} alt="calendar" />
                                    </CompanyInfoContentIcon>
                                    <CompanyInfoContentText>교육지원 서비스업</CompanyInfoContentText>
                                </CompanyInfoContentBox>
                            </CompanyInfoContent>
                        </MainSubInfoBox>
                        <SecondSubInfoBox>
                            <SecondSubInfoIcon>
                                <img src={person} alt="person" />
                            </SecondSubInfoIcon>
                            <SecondSubInfoText>소프트웨어개발과 1명</SecondSubInfoText>
                        </SecondSubInfoBox>
                    </SubInfoContent>
                    <RoleContent>
                        <RoleContentBox>
                            <RoleIcon>
                                <img src={role} alt="role" />
                            </RoleIcon>
                            <RoleText>UX/UI 디자인</RoleText>
                        </RoleContentBox>
                    </RoleContent>
                </Info>
                <DetailButton>
                    <p>공고 자세히보기</p>
                </DetailButton>
            </Content>
        </Frame>
    );
}

export default AnnouncementMain;