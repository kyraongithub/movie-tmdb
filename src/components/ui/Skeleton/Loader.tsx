import classNames from 'classnames';

import styles from './Loader.module.css';
import type { LoaderPropsInterface } from './Loader.interface';

const LoaderSkeleton = (props: LoaderPropsInterface) => {
  const { width, height, shape = 'square', radius = 0 } = props;
  return (
    <div
      className={classNames(styles.skeleton, {
        [styles.rounded]: shape === 'circle',
      })}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,
      }}
    />
  );
};

export default LoaderSkeleton;
