import type { FC, ReactElement, ReactNode } from "react";
import { Children } from "react";

interface ShowProps {
	children: ReactNode;
}

interface WhenProps {
	condition: boolean;
	children: ReactNode;
}

interface ElseProps {
	children: ReactNode;
}

export const Show: FC<ShowProps> & {
	When: FC<WhenProps>;
	Else: FC<ElseProps>;
} = (props) => {
	let when: ReactNode | null = null;
	let otherwise: ReactNode | null = null;

	Children.forEach(props.children, (child) => {
		// biome-ignore lint/suspicious/noExplicitAny: needed to be determined at runtime
		const children = child as ReactElement<any>;
		if (children.props.condition === undefined) {
			otherwise = children;
		} else if (!when && children.props.condition === true) {
			when = children;
		}
	});

	return when || otherwise || null;
};

Show.When = ({ condition, children }) => (condition ? children : null);

Show.Else = ({ children }) => <>{children}</>;
