import styled from "@emotion/styled";
import company from "@/shared/assets/company_icon.png";
import place from "@/shared/assets/place_icon.png";
import call from "@/shared/assets/call_icon.png";
import mail from "@/shared/assets/mail_icon.png";
import arrow from "@/shared/assets/right_arrow.png";

interface CompanyProps {
    name?: string;
    manager?: string;
    detail?: {
        icon: string;
        text: string;
        name: string;
    } [];
}

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
    width: 100%;
    height: 100%;
`;

const AnnouncementDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 6.25rem;
`;

const CompanyFrame = styled.div`
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
    p {margin:0;}
`;

const CompanyRepresentative = styled.div`
    display: -webkit-box;
    width: 15.75rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text.muted};
    text-overflow: ellipsis;
    ${({ theme }) => theme.typography.CaptionMedium};
    p {margin:0;}
`;

const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 17.5rem);
    gap: 0.75rem 6.25rem;
    align-items: center;

`;

const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    align-self: stretch;
    p {
        margin:0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        flex: 1 0 0;
        overflow: hidden;
        color: ${({ theme }) => theme.colors.text.secondary};
        ${({ theme }) => theme.typography.ParagraphMedium};
        text-overflow: ellipsis;
    }
`;

const CardImg = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    aspect-ratio: 1/1;

    .place {
        width: 0.875rem;
        height: 1.25rem;
    }

    .company {
        width: 1.25rem;
        height: 1.125rem;
    }

    .call {
        width: 1.31225rem;
        height: 1.3125rem;
    }

    .mail {
        width: 1.25rem;
        height: 1rem;
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
    img {
        width: 0.49106rem;
        height: 0.93844rem;
    }
`;

const Company = ({
    name = "(주)핀다",
    manager = "홍진봉",
    detail = [
        { icon: place, text: "부산 북부", name: "place" },
        { icon: company, text: "전자조업보고 시스템", name: "company" },
        { icon: call, text: "010-4855-2794", name: "call" },
        { icon: mail, text: "jbhong@suncom.co.kr", name: "mail" }
    ]}: CompanyProps) => {
    return (
        <Frame>
            <Content>
                <AnnouncementDetail>
                    <CompanyFrame>
                        <CompanyTitle>{name}</CompanyTitle>
                        <CompanyRepresentative>채용 담당자: {manager}</CompanyRepresentative>
                    </CompanyFrame>
                    <InfoGrid>
                        {detail.map((item, index) => (
                            <Card key={index}>
                                <CardImg><img src={item.icon} alt="" className={`${item.name}`} /></CardImg>
                                <p>{item.text}</p>
                            </Card>
                        ))}
                    </InfoGrid>
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
}

export default Company;