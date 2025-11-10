import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";

export default function LandingComponent() {
	const login = useAuthStore((state) => state.login);
	return (
		<section className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-6">
			<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
				Welcome to <span className="text-primary">ZnapHub</span>
			</h1>
			<p className="mt-3 max-w-md text-muted-foreground">
				Manage your events, generate QR codes for guests, and streamline your
				workflow — all in one place.
			</p>

			<div className="mt-8 flex flex-col sm:flex-row gap-4">
				<Button size="lg" className="w-full sm:w-auto" onClick={() => login()}>
					Sign In
				</Button>
				<Button size="lg" variant="outline" className="w-full sm:w-auto">
					Register
				</Button>
			</div>

			<p className="mt-6 text-sm text-muted-foreground">
				Get Started — choose Sign In or Register to begin
			</p>
		</section>
	);
}
