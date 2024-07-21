import "./detail.css"
import { auth } from "../../lib/firebase";
//from "../../lib/firebase"


const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p> Do ALL You Can Do</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="PhotoDetail">
                                <img src="https://image.pngaaa.com/873/188873-small.png" alt="" />
                                <span>photo_2024</span>
                            </div>
                            <img src="./download.png" alt="" className="incon" />
                        </div>

                        <div className="photoItem">
                            <div className="PhotoDetail">
                                <img src="https://image.pngaaa.com/873/188873-small.png" alt="" />
                                <span>photo_2024</span>
                            </div>
                            <img src="./download.png" alt="" className="incon" />
                        </div>
                        <div className="photoItem">
                            <div className="PhotoDetail">
                                <img src="https://image.pngaaa.com/873/188873-small.png" alt="" />
                                <span>photo_2024</span>
                            </div>
                            <img src="./download.png" alt="" className="incon" />
                        </div>
                        <div className="photoItem">
                            <div className="PhotoDetail">
                                <img src="https://image.pngaaa.com/873/188873-small.png" alt="" />
                                <span>photo_2024</span>
                            </div>
                            <img src="./download.png" alt="" className="incon" />
                        </div>
                        <div className="photoItem">
                            <div className="PhotoDetail">
                                <img src="https://image.pngaaa.com/873/188873-small.png" alt="" />
                                <span>photo_2024</span>
                            </div>
                            <img src="./download.png" alt="" className="incon" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
            </div>
            <button>Block user</button>
            <button className="Logout" onClick={()=> auth.signOut()}>Log Out</button>
        </div>
    );
};
export default Detail;