import type { BooleanLike } from "@/types/boolean-like";
import type { ReactNode } from "react";

export interface MatchProps {
	when: BooleanLike;
	children?: ReactNode | undefined;
}

export default function Match({ children }: MatchProps) {
	return <>{children ? children : null}</>;
}
