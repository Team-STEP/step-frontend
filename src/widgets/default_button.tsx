import styled from "@emotion/styled";

const ActivateButton = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  background: ${({theme}) => theme.colors.primary[50]};
  color: ${({theme}) => theme.colors.primary[200]};
  ${({theme}) => theme.typography.CaptionRegular};

  &:hover {
    color: ${({theme}) => theme.colors.primary[250]};
    background: ${({theme}) => theme.colors.primary[100]};
  }

  &:active {
    color: ${({theme}) => theme.colors.primary[300]};
    background: ${({theme}) => theme.colors.primary[150]};
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
  text?: string;
  deactivate?: boolean
}


const DefaultButton = ({text = "default_button", deactivate}: DefaultButtonProps) => {
  return (
    (deactivate) ?
    <DeactivateButton>{text}</DeactivateButton>
    :
    <ActivateButton>{text}</ActivateButton>
  );
}

export default DefaultButton;