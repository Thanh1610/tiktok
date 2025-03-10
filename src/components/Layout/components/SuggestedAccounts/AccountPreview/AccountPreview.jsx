import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../../Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/74fb382c8f102d81e607a7b1aca87471~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=757cd013&x-expires=1741770000&x-signature=fx2mJQZtVF0qgk2XK%2FCr9ARjdYQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Following
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>LoL Esports VN</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>lolesports_vn</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>443.1K </strong>
                    <span className={cx('lable')}>Follower</span>
                    <strong className={cx('value')}>12.5M </strong>
                    <span className={cx('lable')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
