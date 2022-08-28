import SearchForm from '../commponents/SearchForm';

function HeaderLeft() {
    return (
        <div className="header-left">
            {/* Chứa logo và tên web  */}
            <img src="" alt="logo-Vieme"></img>
            <h1>Vieme</h1>
        </div>
    );
};

// Chứa khung search
function HeaderCenter() {
    return (
        <div className="header-center">
            <SearchForm></SearchForm>
        </div>
    );
};

function HeaderRight() {
    return (
        <div className="header-right">
            {/* Chứa submenu, thông báo, đăng nhập, đâng xuất*/}
        </div>
    );
};

function Header() {
    return (
        <header className="header-vieme">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </header>
    );
};

export default Header;