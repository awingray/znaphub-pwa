import { Children, type ReactNode } from "react";

interface EachProps<T> {
	render: (item: T, index: number) => ReactNode;
	of: T[];
}

export default function Each<T>({ render, of }: EachProps<T>): ReactNode {
	return Children.toArray(of.map((item, index) => render(item, index)));
}
