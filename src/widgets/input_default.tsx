import styled from "@emotion/styled";

const Frame = styled.div`
    display: inline-flex;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.neutral[150]};
`;

const Input = styled.textarea`
    width: 22rem;
    color: ${({ theme }) => theme.colors.text.primary};
    &::placeholder {
        color: ${({ theme }) => theme.colors.text.muted};
    }
    ${({ theme }) => theme.typography.CaptionRegular};
    border: none;
    outline: none;
    resize: none;
    field-sizing: content;
    overflow: hidden;
    min-height: 1.5rem;
    padding: 0;
    margin: 0;
    display: block;
`;

interface InputDefaultProps {
    placeholder: string;
}

const InputDefault = ({ placeholder }: InputDefaultProps) => {
    return (
        <Frame>
            <Input placeholder={placeholder} />
        </Frame>
    );
};

export default InputDefault;
