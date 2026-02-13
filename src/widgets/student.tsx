import styled from "@emotion/styled";
import role from "@/shared/assets/role_icon(muted).png";

const Frame = styled.div`
  display: inline-flex;
  align-items: center;

  border-radius: 8px;
  &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.neutral[50]};
  }
`;

const Identity = styled.div`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-right: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  ${({ theme }) => theme.typography.HeadingMedium};
`;

const Major = styled.div`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 174px;

  color: ${({ theme }) => theme.colors.text.muted};
  text-align: center;
  ${({ theme }) => theme.typography.ParagraphRegular};
`;

const HopePositionFrame = styled.div`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

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

const Email = styled.div`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 160px;

  color: ${({ theme }) => theme.colors.text.muted};
  text-align: center;
  ${({ theme }) => theme.typography.CaptionRegular};
`;

interface HopePositionProps {
  text: string;
}

const HopePosition = ({text}: HopePositionProps) => {
  return (
    <HopePositionFrame>
      <HopePositionInner>
        <HopeImage src={role} />
        {text}
      </HopePositionInner>
    </HopePositionFrame>
  )
}

const Student = () => {
  return (
    <Frame>
      <Identity>3101 O O O</Identity>

      <Major>소프트웨어개발과</Major>

      <HopePosition text={"프론트엔드"} />

      <Email>25_02@bssm.hs.kr</Email>
    </Frame>
  )
}

export default Student;