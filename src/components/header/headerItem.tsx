import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {HeaderInfo}  from './headerInfos';
import './header.css';

const HeaderItem = (props:{dataValue:HeaderInfo}) => {

    const openUrl = useRef<HTMLDivElement>(null);

    const onClickOepnUrl = (e: React.MouseEvent) => {

         window.location.href = e.currentTarget.getAttribute('data-url')??window.location.href;
        
    }
    
    const onMouseOverDiv = (e: React.MouseEvent) => {
        if(openUrl.current){
            openUrl.current.style.color = '';
        }
    }

    const onMouseOutDiv = (e: React.MouseEvent) => {
        if(openUrl.current){
            openUrl.current.style.color = '';
        }
    }

    return (
        <div className="headerItem"
                ref={openUrl} 
                onClick={onClickOepnUrl} 
                onMouseOver={onMouseOverDiv}
                onMouseOut={onMouseOutDiv}
                data-url={props.dataValue.url}>
                {props.dataValue.name}
            
        </div>
    );
}

export default HeaderItem