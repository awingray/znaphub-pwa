import { Children, isValidElement, type PropsWithChildren } from "react";
import type { MatchProps } from "./match";

export const Switch = ({ children }: PropsWithChildren) => {
	const childArray = Children.toArray(children);

	const firstMatch = childArray.find((child) => {
		return isValidElement<MatchProps>(child) && child.props.when === true;
	});

	return <>{firstMatch || null}</>;
};
