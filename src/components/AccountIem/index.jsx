import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/461cb75d51cb95189b7a7325d99dc509~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&x-expires=1741082400&x-signature=5M1z5nHNep5FSsjU7Lhd7K7VbOg%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=sg1"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>realpewpew</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Tạp Hóa PewPew</span>
            </div>
        </div>
    );
}

export default AccountItem;
