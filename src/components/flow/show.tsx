import type { BooleanLike } from "@/types/boolean-like";
import type { ReactNode } from "react";

interface ShowProps {
	when: BooleanLike;
	children: ReactNode;
	fallback?: ReactNode;
}

export default function Show({ when, children, fallback = null }: ShowProps) {
	return <>{when ? children : fallback}</>;
}
