import React, { Children, FC, PropsWithChildren, ReactElement } from 'react';

const Then: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

const Else: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

const If: FC<PropsWithChildren & { condition?: unknown }> = ({
                                                                 children,
                                                                 condition,
                                                             }) => {
    if (!children) return null;

    const childrenArray = Children.toArray(children) as ReactElement[];

    if (condition) {
        return <>{childrenArray.find(child => child.type === Then)}</>;
    }

    return <>{childrenArray.find(child => child.type === Else)}</>;
};

const Condition = { If, Then, Else };

export default Condition;
