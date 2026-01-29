import styled from "@emotion/styled";

export const NotificationContainer = styled.div`
    display: flex;
    width: 30.25rem;
    padding: 1rem 1.88rem;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

export const NotificationContentContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1.25rem;
`;

export const NotificationTitle = styled.p`
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${({ theme }) => theme.typography.ParagraphRegular};
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const NotificationWriter = styled.p`
    flex-shrink: 0;
    ${({ theme }) => theme.typography.CaptionRegular};
    color: ${({ theme }) => theme.colors.text.muted};
`;

function Notice() {
    return (
        <NotificationContainer>
            <NotificationContentContainer>
                <NotificationTitle>2026.03.18 까지 자소서 마감합니다</NotificationTitle>
                <NotificationWriter>ADMIN</NotificationWriter>
            </NotificationContentContainer>
        </NotificationContainer>
    );
}
export default Notice;