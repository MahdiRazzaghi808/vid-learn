import React, { ElementType, HTMLAttributes } from 'react';
import { cn } from '@repo/main/utils/cn';

interface HeadTextProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    children: React.ReactNode;
    className?: string;
}

const HeadText: React.FC<HeadTextProps> = ({
    as: Component = 'h3',
    children,
    className,
    ...props
}) => {
    return (
        <Component
            className={cn(
                'font-Kalameh font-medium text-[36px] lg:text-[48px]',
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

export default HeadText;
