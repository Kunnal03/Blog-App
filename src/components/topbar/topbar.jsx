import "./topbar.css"

export default function TopBar() {
    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            
            <div className="topCenter">
                <ul className="toplist">
                    <li className="toplistItem">HOME</li>
                    <li className="toplistItem">ABOUT</li>
                    <li className="toplistItem">CONTACT</li>
                    <li className="toplistItem">WRITE</li>
                    <li className="toplistItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className="topImg"
                src="https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-22-512.png"
                alt=""
                />
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}