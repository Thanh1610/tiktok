import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faEarthAsia, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import { MessagesIcon, UploadIcon, InboxIcon } from '../../../Icons';
import Image from '../../../Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },

                {
                    type: 'language',
                    code: 'zh-CN',
                    title: 'China',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <img src={images.logo} />
                <span>
                    <Search />
                </span>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload" placement="bottom" delay={0}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Messages" placement="bottom" delay={0}>
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Messages" placement="bottom" delay={0}>
                                <button className={cx('action-btn', 'inbox-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>5</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6e5df93a012f301f942d1dd5172c8884~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=661559a5&x-expires=1741255200&x-signature=nIt0v%2FwWAER%2BypEkNslIzx98UoQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
                                className={cx('user-avatar')}
                                alt="TaTuanThanh"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
