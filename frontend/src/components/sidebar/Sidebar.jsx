import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./searchInput"

const Sidebar = () =>{
    return (
        <div className="border-r border-slate-100 p-4 flex flex-col">
           <SearchInput></SearchInput>
            <div className="divider px-3"></div>
            <Conversations></Conversations>
            <LogoutButton></LogoutButton>
        </div>
    )
}

export default Sidebar