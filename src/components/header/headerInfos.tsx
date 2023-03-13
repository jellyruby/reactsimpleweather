


export type HeaderInfo = {

    name:string,
    url:string,
    icon:string,    
}

const HeaderInfos: Array<HeaderInfo> = [
    { name: 'Home', url: '/', icon: 'home' },
    { name: 'About', url: '/about', icon: 'info' },
    { name: 'Contact', url: '/contact', icon: 'mail' },
    { name: 'my', url: '/myPage', icon: 'my'}
]


export default HeaderInfos;
