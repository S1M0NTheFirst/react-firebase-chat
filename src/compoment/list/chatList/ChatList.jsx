import { useEffect, useState } from "react";
import "./chatList.css";
import { useUserStore } from "../../../lib/userStore";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import AddUser from "./addUser/adduser"; 

const ChatList = () => {
    const [chats, setChats] = useState([]);
    const [addMode, setAddMode] = useState(false);
    const { currentUser } = useUserStore();

    useEffect(() => {
        if (!currentUser) return;

        const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async(res) => {
            const items = res.data().chats || [];
            try {
                const promises = items.map(async (item) => {
                    const userDocRef = doc(db, "user", item.receiverId);
                    const userDocSnap = await getDoc(userDocRef);
                    const user = userDocSnap.data();
                    return { ...item, user };
                });

                const chatData = await Promise.all(promises);
                setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
            } catch (error) {
                console.error("Error fetching chat data: ", error);
            }
        });

        return () => unSub(); // Cleanup on component unmount
    }, [currentUser]);

    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="/search.png" alt="Search" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="Add" className="add" 
                    onClick={() => setAddMode(prev => !prev)}
                />
            </div>
            {chats.map((chat) => (
                <div className="item" key={chat.chatId}>
                    <img src="/avatar.png" alt="Avatar" />
                    <div className="text">
                        <span>{chat.user.name}</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}
            {addMode && <AddUser/>}
        </div>
    );
};

export default ChatList;
