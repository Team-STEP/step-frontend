import styled from "@emotion/styled";
import searchIcon from "@/shared/assets/search_button.png"


const Frame = styled.div`
    display: inline-flex;
    padding: 1rem 1.5rem;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.neutral[150]};
`;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input<{ width: string }>`
    width: ${props => props.width}rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    ${({ theme }) => theme.typography.CaptionRegular};
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    &::placeholder {
        color: ${({ theme }) => theme.colors.text.muted};
    }
`;

const SearchBtn = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    aspect-ratio: 1/1;
    img {
        width: 0.9375rem;
        height: 0.9375rem;
        color : ${({ theme }) => theme.colors.neutral[250]};
    }
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface SearchBarProps {
    placeholder?: string;
    width: string;
}

const SearchBar = ({ placeholder, width }: SearchBarProps) => {
    return (
        <Frame>
            <Content>
                <SearchInput width={width} placeholder={placeholder} />
                <SearchBtn>
                    <img src={searchIcon} alt="search" />
                </SearchBtn>
            </Content>
        </Frame>
    );
};

export default SearchBar;
