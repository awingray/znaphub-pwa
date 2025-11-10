import { cn } from "@/lib/utils";

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PageLayout({ className, ...props }: PageLayoutProps) {
	return <div className={cn("mx-auto max-w-7xl px-6", className)} {...props} />;
}
