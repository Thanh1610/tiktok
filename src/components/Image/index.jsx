import { useState, forwardRef } from 'react';
import images from '../../assets/images';
import classNames from 'classnames';
import styles from '../Image/';

function Image({ src, alt, ...props }) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, classNames)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
