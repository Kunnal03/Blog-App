import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">SAK Blogs</span>
      </div>
      <img className="headerImg" 
        src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg" alt="" />
    </div>
  );
}