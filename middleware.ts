import { NextResponse } from 'next/server';
export function middleware(request) {
 const ua = request.headers.get('user-agent') || '';
 if (/curl|wget|spider|crawler/i.test(ua) && !/Googlebot|Bingbot/i.test(ua)) {
   return new NextResponse('Access denied', { status: 403 });
 }
 return NextResponse.next();
}
