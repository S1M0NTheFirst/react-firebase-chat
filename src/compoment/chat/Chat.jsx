import { useEffect, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"


const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    


    const handleEmoji = e => {
        setText((prev) => prev + e.emoji);
        setOpen(false)
    };

    
    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <span>Jand</span>
                        <p>A TO c ALL YOU CAN DO </p>
                    </div>
                </div>
                <div className="incons">
                    <img src="./phone.png" alt=""/>
                    <img src="./video.png" alt=""/>
                    <img src="./info.png" alt=""/>
                </div>
            </div>
            <div className="center">
                <div className="message own">
                    <div className="text">
                        <p>WHY ALL IT ALL</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                


                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>WHY ALL IT ALL</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                
                <div className="message own">
                    <div className="text">
                        <p>WHY ALL IT ALL</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>WHY ALL IT ALL</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="text">
                     <p>WHY ALL IT ALL</p>
                    <span>1 min ago</span>
                </div>
                </div>
                
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>WHY ALL IT ALL</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="text">
                        <p>WHY ALL IT ALL</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <img src="https://www.google.com/search?q=samll+images&sca_esv=bd0d05e7905db8d3&sca_upv=1&rlz=1C5MACD_enUS1104US1104&udm=2&biw=1512&bih=824&sxsrf=ADLYWIJVCyrMDM5xJKub3a0Da95py3476A%3A1716435629429&ei=rbpOZpTrGearur8PnZS9yAk&ved=0ahUKEwjU9eL_7KKGAxXmle4BHR1KD5kQ4dUDCBA&uact=5&oq=samll+images&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHNhbWxsIGltYWdlczIFEAAYgAQyCRAAGIAEGBgYCkjXD1CBClj0DnABeACQAQCYATWgAZcCqgEBNrgBA8gBAPgBAZgCBqAC9wHCAg0QABiABBixAxhDGIoFwgIKEAAYgAQYQxiKBcICCBAAGIAEGLEDwgIGEAAYBxgemAMAiAYBkgcBNqAH_xA&sclient=gws-wiz-serp#vhid=ymRcvs5U4se7SM&vssid=mosaic" alt=""/>
                        <p>WHY ALL IT ALL</p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt=""/>
                </div>
                <input type="text" placeholder="Type message...."
                    value={text}
                    onChange={e => setText(e.target.value)} 
                />
                <div className="emoji">
                    <img src="./emoji.png" alt=""
                        onClick={() => setOpen(prev => !prev)} 
                    />
                    <div className="picker">
                    <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="sendButton">Sent</button>
            </div>
        </div>
    )
}
export default Chat