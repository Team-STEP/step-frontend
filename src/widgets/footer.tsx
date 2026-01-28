import React from "react";
import styled from "@emotion/styled";
import FooterLogo from "@/shared/assets/footer-logo.png";
import GitHub from "@/shared/assets/github.png";

export const Frame = styled.footer`
    display: flex;
    width: 100%;
    height: 18rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.colors.neutral[50]};
`;

export const Content = styled.div`
    display: flex;
    width: 92rem;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.75rem;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.text.muted};
`;

export const Logo = styled.div`
    width: 5.75rem;
    height: 2rem;
    aspect-ratio: 1 / 1;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    align-self: stretch;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const Reserved = styled.div`
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const Connection = styled.div`
    width: 3rem;
    height: 3rem;
    justify-content: flex-end;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

function Footer() {
    const contactEmail = "step@gmail.com";
    return (
        <Frame>
            <Content>
                <InfoBox>
                    <Logo>
                        <img src={FooterLogo} alt="STEP 로고" />
                    </Logo>
                    <Info>
                        <span>주소: 부산광역시 강서구 가락대로 1393 (46708)</span>
                        <span>이메일: {contactEmail}</span>
                    </Info>
                    <Reserved>
                        <span>© 2026 STEP All Rights reserved</span>
                    </Reserved>
                </InfoBox>
                <Connection>
                    <a href="https://github.com/Team-STEP" target="_blank" rel="noopener noreferrer">
                        <img src={GitHub} alt="github" />
                    </a>
                </Connection>
            </Content>
        </Frame>
    );
}

export default React.memo(Footer);
