import type { FC, ReactNode } from "react";

interface ShowProps {
	when: boolean;
	children: ReactNode;
	fallback?: ReactNode;
}

export const Show: FC<ShowProps> = ({ when, children, fallback = null }) => {
	return <>{when ? children : fallback}</>;
};
