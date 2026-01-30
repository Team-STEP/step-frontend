import Footer from "@/widgets/footer";
import HeaderNotLogin from "@/widgets/header/header_not_login";
import HeaderLogin from "@/widgets/header/header_login";
import SearchBar from "@/widgets/search_bar";

const Components = () => {
    return (
        <>
            <Footer />
            <HeaderNotLogin />
            <HeaderLogin status="home" />
            <SearchBar width="24.5" placeholder="직무, 회사 키워드로 검색하세요" />
        </>
    );
};

export default Components;
