
import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfor from "./userinfo/Userinfor"



const List = () => {
    return (
        <div className='list'>
            <Userinfor/>
            <ChatList/>
        </div>
    )
}
export default List