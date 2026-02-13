import styled from "@emotion/styled";

const Frame = styled.div`
  display: flex;
  width: 18.75rem;
  height: 4.9375rem;
  padding: 0.875rem 9.5625rem 0.8125rem 1.75rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${({theme}) => theme.colors.neutral[150]};
`;

const InnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FileName = styled.div`
  color: ${({theme}) => theme.colors.text.primary};

  ${({theme}) => theme.typography.CaptionMedium};
`;

const FileType = styled.div`
  color: ${({theme}) => theme.colors.text.muted};

  ${({theme}) => theme.typography.CaptionRegular};
`;

const SubmitFile = () => {
  return (
    <Frame>
      <InnerFrame>
        <FileName>이규민_이력서.pdf</FileName>
        <FileType>PDF</FileType>
      </InnerFrame>
    </Frame>
  );
}

export default SubmitFile;