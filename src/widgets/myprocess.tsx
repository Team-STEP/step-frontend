import styled from "@emotion/styled";

const AllStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 0.75rem 1.75rem;
    ${({ theme }) => theme.typography.ParagraphRegular};
`;

export const Frame = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const TitleContainer = styled(AllStyle)`
    border-right: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

export const Title = styled.p`
    margin: 0;
    width: 8.25rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const Process = styled(AllStyle)<{ current?: boolean }>`
    color: ${({ theme, current }) =>
            current ? theme.colors.primary[200] : theme.colors.text.muted};
`;

interface ProcessProps {
    status: "document" | "first" | "second" | "practice" | "employment";
}

const MyProcess= ({ status }: ProcessProps) =>  {
    return (
        <Frame>
                <TitleContainer><Title>(주)미스고</Title></TitleContainer>
                <Process current={status === "document"}>서류</Process>
                <Process current={status === "first"}>1차면접</Process>
                <Process current={status === "second"}>2차면접</Process>
                <Process current={status === "practice"}>현장실습</Process>
                <Process current={status === "employment"}>취업</Process>
        </Frame>
    );
};

export default MyProcess;