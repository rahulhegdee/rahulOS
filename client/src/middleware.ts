import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const userAgent = request.headers.get("user-agent") || "";
	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			userAgent
		);

	// Only rewrite the home page, keep URL as "/"
	if (request.nextUrl.pathname === "/") {
		const devicePath = isMobile ? "/mobile" : "/desktop";
		return NextResponse.rewrite(new URL(devicePath, request.url));
	}
	if (
		request.nextUrl.pathname === "/mobile" ||
		request.nextUrl.pathname === "/desktop"
	) {
		return NextResponse.rewrite(new URL("/", request.url));
	}

	return NextResponse.next();
}
export const config = {
	matcher: ["/", "/desktop/:path*", "/mobile/:path*"],
};
