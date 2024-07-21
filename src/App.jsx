import Detail from "./compoment/detail/Detail";
import List from "./compoment/list/List";
import Chat from "./compoment/chat/Chat";
import Login from "./compoment/login/Login";
import Notification from "./compoment/notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import{auth} from "./lib/firebase"
import { useUserStore } from "./lib/userStore";

const App = () => {

  const { currentUser, isLoading, fetchUserinfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserinfo(user?.uid);
    });
    
    return () => {
      unSub();
    } 
  }, [fetchUserinfo]);
console.log(currentUser)
  
  if(isLoading) return <div>Loading...</div>
  
  return (
    <div className='container'>
      {
        currentUser ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )}
      <Notification />
    </div>
  );
};

export default App