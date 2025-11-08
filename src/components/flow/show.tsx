import type { FC, ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";

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
		if (!isValidElement(child)) return;

		const element = child as ReactElement<WhenProps | ElseProps>;
		if ("condition" in element.props) {
			if (!when && element.props.condition) {
				when = element;
			}
		} else {
			otherwise = element;
		}
	});

	return when || otherwise || null;
};

Show.When = ({ condition, children }) => (condition ? children : null);

Show.Else = ({ children }) => <>{children}</>;
