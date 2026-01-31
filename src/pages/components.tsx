import Footer from "@/widgets/footer";
import HeaderNotLogin from "@/widgets/header/header_not_login";
import HeaderLogin from "@/widgets/header/header_login";
import SearchBar from "@/widgets/search_bar";
import Notice from "@/widgets/notice";
import InputDefault from "@/widgets/input_default";
import MyProcess from "@/widgets/myprocess";


const Components = () => {
    return (
        <>
            <HeaderNotLogin />
            <HeaderLogin status="home" />
            <InputDefault placeholder="placeholder" />
            <SearchBar width="24.5" placeholder="직무, 회사 키워드로 검색하세요" />
            <Notice />
            <MyProcess status="first" />
            <Footer />
        </>
    );
};

export default Components;
