import Footer from "@/widgets/footer";
import HeaderNotLogin from "@/widgets/header/header_not_login";
import HeaderLogin from "@/widgets/header/header_login";
import Notice from "@/widgets/notice";
import InputDefault from "@/widgets/input_default";

const Components = () => {
    return (
        <>
            <Footer />
            <HeaderNotLogin />
            <HeaderLogin status="home" />
            <Notice />
            <InputDefault placeholder="placeholder" />
        </>
    );
};

export default Components;
