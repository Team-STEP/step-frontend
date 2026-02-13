import styled from "@emotion/styled";
import DefaultButton from "@/widgets/default_button.tsx";

const ApplicationList = styled.div`
  display: flex;
  width: 23.4375rem;
  padding: 1.25rem 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  border-radius: 0.5rem;
  
  border: 1px solid ${({theme}) => theme.colors.neutral[150]};
`;

const ApplicationInnerFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const ApplicationInfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

const CompanyName = styled.div`
  align-self: stretch;
  color: ${({theme}) => theme.colors.text.muted};

  ${({ theme }) => theme.typography.CaptionRegular};
`;

const ApplicationTitle = styled.div`
  align-self: stretch;

  color: ${({theme}) => theme.colors.text.primary}

  ${({ theme }) => theme.typography.ParagraphMedium};
`;


const ApplyList = () => {
  return (
    <ApplicationList>
      <ApplicationInnerFrame>
        <ApplicationInfoFrame>
          <CompanyName>(주) 코드잇</CompanyName>
          <ApplicationTitle>UX/UI 디자이너 모집</ApplicationTitle>
        </ApplicationInfoFrame>
        <DefaultButton text={"자세히보기"} />
      </ApplicationInnerFrame>
    </ApplicationList>
  )
}

export default ApplyList;