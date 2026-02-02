import { useState } from "react";
import styled from "@emotion/styled";
import arrowIcon from "@/shared/assets/arrow_down.png";

const Frame = styled.div<{
    isOpen: boolean;
    isComplete: boolean;
    isCompany: boolean;
    isLast?: boolean;
}>`
    display: grid;
    grid-template-rows: auto auto;
    width: 15.125rem;
    border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
    background: ${({ theme }) => theme.colors.default.white};
    border-radius: 0.25rem;
    ${({ isOpen, isLast }) =>
            isOpen && !isLast &&
            `border-bottom-left-radius: 0; border-bottom-right-radius: 0;`}
    ${({ isCompany }) => isCompany && `margin-top: 1.5rem;`}
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
`;

const Text = styled.span<{ isComplete: boolean }>`
    color: ${({ isComplete, theme }) =>
            isComplete ? theme.colors.text.primary : theme.colors.text.muted};
    ${({ theme }) => theme.typography.CaptionRegular};
`;

const Arrow = styled.img<{ isOpen: boolean }>`
    width: 1.25rem;
    height: 0.75rem;
    transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
    transition: transform 0.2s ease;
    cursor: pointer;
`;

const CompanyInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    ${({ theme }) => theme.typography.CaptionRegular};
    &::placeholder { color: ${({ theme }) => theme.colors.text.muted}; }
`;

/* 수정사항 : 옵션 영역 grid 애니메이션 */
const OptionsGrid = styled.div<{ isOpen: boolean }>`
    display: grid;
    grid-template-rows: ${({ isOpen }) => (isOpen ? "1fr" : "0fr")};
    transition: grid-template-rows 0.35s ease;
    overflow: hidden;
    align-content: start;
`;

const OptionsInner = styled.div`
    min-height: 0;
`;

const List = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.neutral[200]};
    color: ${({ theme }) => theme.colors.text.secondary};
    ${({ theme }) => theme.typography.CaptionRegular};
    background: ${({ theme }) => theme.colors.default.white};
`;

const Item = styled.div`
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover { background: ${({ theme }) => theme.colors.neutral[100]}; }
`;

export interface FilterBoxProps {
    company: boolean;
    placeholder: string;
    options?: string[];
    last?: boolean;
}

const FilterBox = ({ company, placeholder, options = [], last }: FilterBoxProps) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const complete = value.length > 0;

    const handleArrowClick = () => { setOpen(prev => !prev); };
    const handleSelect = (item: string) => { setValue(item); setOpen(false); };

    return (
        <Frame isOpen={open} isComplete={complete} isCompany={company} isLast={last}>
            <Header>
                {company ? (
                    <CompanyInput placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
                ) : (
                    <>
                        <Text isComplete={complete}>{complete ? value : placeholder}</Text>
                        <Arrow src={arrowIcon} alt="arrow" isOpen={open} onClick={handleArrowClick} />
                    </>
                )}
            </Header>

            {!company && (
                <OptionsGrid isOpen={open}>
                    <OptionsInner>
                        <List>
                            {options.map(item => (
                                <Item key={item} onClick={() => handleSelect(item)}>
                                    {item}
                                </Item>
                            ))}
                        </List>
                    </OptionsInner>
                </OptionsGrid>
            )}

        </Frame>
    );
};

export default FilterBox;
