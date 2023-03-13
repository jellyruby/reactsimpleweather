import React from 'react';
import './header.css';
import HeaderInfos from './headerInfos';
import HeaderItem from './headerItem';

const Header = (props:{dataValue:typeof HeaderInfos}) => {



    // 깔끔한 헤더 리턴
    return (
        <div className="header">
            {props.dataValue.map((item) => {
                    return <HeaderItem dataValue={item} key={item.name}/>;
                }
            )}
        </div>
    );
}


export default Header;