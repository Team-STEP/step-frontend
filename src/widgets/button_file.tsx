import styled from "@emotion/styled";

const ActivateButton = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.5rem;
  border: 1px solid ${({theme}) => theme.colors.primary[200]};
  color: ${({theme}) => theme.colors.primary[200]};
  ${({theme}) => theme.typography.CaptionRegular};

  &:hover {
    background: ${({theme}) => theme.colors.primary[50]};
  }

  &:active {
    color: ${({theme}) => theme.colors.primary[250]};
    background: ${({theme}) => theme.colors.primary[100]};
  }
`;

const DeactivateButton = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.5rem;
  background: ${({theme}) => theme.colors.neutral[150]};
`;

interface DefaultButtonProps {
  deactivate?: boolean
}


const ButtonFile = ({deactivate}: DefaultButtonProps) => {
  return (
    (deactivate) ?
    <DeactivateButton>{"파일선택"}</DeactivateButton>
    :
    <ActivateButton>{"파일선택"}</ActivateButton>
  );
}

export default ButtonFile;