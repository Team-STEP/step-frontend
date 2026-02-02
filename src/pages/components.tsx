import Footer from "@/widgets/footer";
import HeaderNotLogin from "@/widgets/header/header_not_login";
import HeaderLogin from "@/widgets/header/header_login";
import SearchBar from "@/widgets/search_bar";
import Notice from "@/widgets/notice";
import InputDefault from "@/widgets/input_default";
import MyProcess from "@/widgets/myprocess";
import AnnouncementMain from "@/widgets/announcement_main";
import FilterBox from "@/widgets/filter-box.tsx"
import Comment from "@/widgets/comment";


const Components = () => {
    return (
        <>
            <HeaderNotLogin />
            <HeaderLogin status="home" />
            <InputDefault placeholder="placeholder" />
            <SearchBar width="24.5" placeholder="직무, 회사 키워드로 검색하세요" />
            <Notice />
            <MyProcess status="first" />
            <AnnouncementMain />
            <Comment />
            <FilterBox company={false} placeholder="지역을 선택하세요" options={["서울, 경기", "부산, 경남", "대구, 경북"]}/>
            <FilterBox company={true} placeholder="회사 이름을 검색하세요"/>
            <Footer />
        </>
    );
};

export default Components;
