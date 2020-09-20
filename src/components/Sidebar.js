import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {Link} from "react-router-dom";

import SidebarItems from "./SidebarItems";
import Avatar from "./Avatar/Avatar";



function Sidebar(props, {defaultActive,}) {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return (
        <>
            <SidebarParent>

                <div style={{position: 'center'}}>
                  <Avatar url="https://previews.dropbox.com/p/thumb/AA7fuM1kAA6Xo3tuM0R7XAdG7APg4U3D4VCt83Ylo41hX3P5uREDPxObd-xXPaqWTm_O4JKkqRQPM17Pw_Qxskggp9Ep2UWtfwLo4aEATs1LkCH17sEJ-G3X8RbeuboySvzoqluC1DrDJ5AvtW3Fh8yes7RzA2Lv5ju--i7LQL7sK5zMoOkpR9zrko5ESyGMw68PbTMgv_NQgiawdLjk9PLBk4DtR9z63CwmvBj89iz9BP1E-oXGOph4yEX0Eqw5fA1cIf0Qw5iH7ASZfeOvo0geftua1I94XVAVnAwE8OinSfxWQ20huGA24PpIM_CatLLQhxbzRU2MQnEd7r4G_5iB/p.jpeg?fv_content=true&size_mode=5"/>
                    {
                        SidebarItems.map((item, index)=> {
                            return (
                                <>
                                
                                <Link to={item.route}>
                                    <SidebarItem key={item.name}
                                                 active={index === activeIndex}
                                    >
                                        <p>{item.name}</p>
                                    </SidebarItem>
                                </Link>
                                </>
                            );
                        })
                    }

                </div>
                {/* <div className="behind-the-scenes"/> */}
            </SidebarParent>
        </>
    );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: #7ac143;
  padding: 70px 0;
  margin: 0;
  text-align: center;
  
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 250px;
    height: 100vh;
    
  }
  
  .behind-the-scenes {
    width: 250px;
    
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#00a78e" : ""};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;
