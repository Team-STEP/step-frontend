import styled from "@emotion/styled";
import place from "@/shared/assets/place_icon.png";
import company from "@/shared/assets/company_icon.png";
import person from "@/shared/assets/person_icon.png";
import role from "@/shared/assets/role_icon.png";
import arrow from "@/shared/assets/right_arrow.png";

const Frame = styled.div`
    display: flex;
    width: 77.5rem;
    padding: 2rem 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[100]};

    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.neutral[50]};
    }
`;


const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

const AnnouncementDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 6.25rem;
`;

const Company = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.25rem;
`;

const CompanyTitle = styled.div`
    width: 13.375rem;
    height: 2.875rem;
    color: ${({ theme }) => theme.colors.text.primary};
    ${({ theme }) => theme.typography.HeadingMedium};
    p:{margin:0;}
`;

const Time = styled.div`
    display: -webkit-box;
    width: 15.75rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text.muted};
    text-overflow: ellipsis;
    ${({ theme }) => theme.typography.CaptionMedium};
    p:{margin:0;}
`;

const Info = styled.div`
    display: flex;
    align-items: flex-end; 
`;

const About = styled.div`
    display: flex;
    width:17.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.75rem;
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    align-self: stretch;
    p{
    margin:0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex: 1 0 0;    
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-overflow: ellipsis;
    ${({ theme }) => theme.typography.ParagraphMedium};
    }
`;

const CardImg = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    aspect-ratio: 1/1;

    .place{
        width: 0.875rem;
        height: 1.25rem;

    }

    .company{
        width: 1.25rem;
        height: 1.125rem;
        
    }

    .person{
        width: 1rem;
        height: 1rem;    
      
    }

    .role{
        width: 1rem;
        height: 1.25rem;

    }
`;

const SeeDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p{
    margin:0;
    color: ${({ theme }) => theme.colors.primary[200]};
    text-align: center;
    ${({ theme }) => theme.typography.ParagraphMedium};
    }
`;

const ArrowIcon = styled.div`
    display: flex;
    align-items: center;
    width: 0.625rem;
    height: 1.5rem;
    aspect-ratio: 5/12;
    img{
        width: 0.49106rem;
        height: 0.93844rem;
    }
`;

const AnnouncementPage = () => {

    return (
        <Frame>
            <Content>
                <AnnouncementDetail>
                    <Company>
                        <CompanyTitle>(주)핀다</CompanyTitle>
                        <Time>지원 마감 : ~ 2026.07.20</Time>
                    </Company>
                    <Info>
                        <About>
                            <Card>
                                <CardImg><img src={place} alt="place" className="place" /></CardImg>
                                <p>서울 강남구</p>
                            </Card>
                            <Card>
                                <CardImg><img src={company} alt="company" className="company" /></CardImg>
                                <p>대출 비교 플랫폼</p>
                            </Card>
                        </About>
                        <About>
                            <Card>
                                <CardImg><img src={person} alt="person" className="person" /></CardImg>
                                <p>소프트웨어개발과 1명</p>
                            </Card>
                            <Card>
                                <CardImg><img src={role} alt="role" className="role" /></CardImg>
                                <p>프론트엔드 개발</p>
                            </Card>
                        </About>
                    </Info>
                </AnnouncementDetail>
                <SeeDetail>
                    <p>자세히보기</p>
                    <ArrowIcon>
                        <img src={arrow} alt="arrow" />
                    </ArrowIcon>
                </SeeDetail>
            </Content>
        </Frame>
    );
};

export default AnnouncementPage;