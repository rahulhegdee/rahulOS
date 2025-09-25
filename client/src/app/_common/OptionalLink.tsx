import Link from "next/link";
import { ReactNode } from "react";

type OptionalLinkProps = {
	href?: string;
	replace?: boolean;
	children: ReactNode;
	className?: string;
};

export function OptionalLink({
	href,
	replace,
	children,
	className,
}: OptionalLinkProps) {
	if (href != null) {
		return (
			<Link href={href} replace={replace} className={className}>
				{children}
			</Link>
		);
	}

	// Fallback: just render children without a link
	return <div className={className}>{children}</div>;
}
