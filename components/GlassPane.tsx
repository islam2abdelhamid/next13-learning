import clsx from 'clsx';
import { FC } from 'react';

interface GlassPaneProps {
    className?: string;
    children?: React.ReactNode;
}

const GlassPane: FC<GlassPaneProps> = ({ children }) => {
    return <div className={clsx('rounded-2xl border-2 border-gray-200 glass')}>{children}</div>;
};

export default GlassPane;
