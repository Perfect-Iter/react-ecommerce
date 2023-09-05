import './menu-item.styles.scss'

import { useNavigate, } from 'react-router-dom'

type MenuItemProps = {
    title: string;
    imageUrl: string;
    size?: string;
    linkUrl: string; 
}

const MenuItem: React.FC<MenuItemProps> = ({title, imageUrl, size, linkUrl}) => {
  const navigate = useNavigate();


  const handleClick = () => {
    // Use navigate to programmatically navigate to a different route.
    navigate(`/${linkUrl}`);

  };

  return (
    <div className={`${size} menu-item`}  onClick={handleClick}>

        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
  )
}

export default MenuItem
