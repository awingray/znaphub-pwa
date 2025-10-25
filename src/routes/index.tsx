import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ROUTES } from "@/lib/routes";

export const Route = createFileRoute(ROUTES.HOME)({
	component: App,
});

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="text-center">
			Hello World
			<Button onClick={() => setCount((prev) => prev + 1)}>{count}</Button>
		</div>
	);
}
