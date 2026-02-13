import styled from "@emotion/styled";
import role from "@/shared/assets/role_icon(muted).png";
import ApplyList from "@/widgets/apply_list.tsx";

const Frame = styled.div`
  display: inline-flex;
  padding: 2.25rem 1.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  border-radius: 0.5rem;
  border: 1px solid ${({theme}) => theme.colors.neutral[200]}};
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const UpperFrame = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

const Photo = styled.img`
  width: 6.25rem;
  height: 7.75rem;
  border-radius: 0.5rem;
  background: ${({theme}) => theme.colors.neutral[100]}
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  color: ${({theme}) => theme.colors.text.muted};
  text-align: center;

  ${({theme}) => theme.typography.CaptionRegular}
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Name = styled.div`
  color: ${({theme}) => theme.colors.default.black};

  ${({theme}) => theme.typography.ParagraphMedium}
`

const Major = styled.div`
  color: ${({theme}) => theme.colors.text.muted};
  text-align: center;

  ${({theme}) => theme.typography.ParagraphRegular}
`;

interface HopePositionProps {
  text: string;
}

const HopePositionInner = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.neutral[100]};
  color: ${({ theme }) => theme.colors.text.muted};
  text-align: center;
  ${({ theme }) => theme.typography.CaptionMedium};
`;

const HopeImage = styled.img`
  width: 0.668rem;
  height: 0.833rem;
  padding: 0.0833rem 0.168rem;
`;


const HopePosition = ({text}: HopePositionProps) => {
  return (
    <HopePositionInner>
      <HopeImage src={role} />
      {text}
    </HopePositionInner>
  )
}

const ApplicationFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const ApplicationSubject = styled.h3`
  align-self: stretch;
  color: ${({theme}) => theme.colors.text.primary};

  ${({ theme }) => theme.typography.ParagraphMedium};
`;

const StudentCard = () => {
  return (
    <Frame>
      <Inner>
        <UpperFrame>
          <Photo src="" />
          <PersonalInfo>
            <RowWrapper>
              <Name>3101 이규민</Name>
              <Major>소프트웨어개발과</Major>
            </RowWrapper>
            25_01@bssm.hs.kr
            <RowWrapper>
              <HopePosition text={"프론트엔드"} />
              <HopePosition text={"UX/UI 디자인"} />
            </RowWrapper>
          </PersonalInfo>
        </UpperFrame>
        <ApplicationFrame>
          <ApplicationSubject>지원한 공고 목록</ApplicationSubject>
          <ApplyList />
        </ApplicationFrame>
      </Inner>
    </Frame>
  )
}

export default StudentCard;