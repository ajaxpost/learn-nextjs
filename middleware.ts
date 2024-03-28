// 中间件
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  //   matcher: ['/dashboard/invoices'],
};

// export default function middleware(
//   request: NextRequest,
//   event: NextFetchEvent,
// ) {
//   console.log('中间件加载了', request.nextUrl);

//   const reqHeader = new Headers(request.headers);
//   reqHeader.set('x-custom-header', 'hello');
//   const res = NextResponse.next({
//     // 添加响应头
//     headers: {
//       'x-res-header': 'hello',
//     },
//     // 请求头
//     request: {
//       headers: reqHeader,
//     },
//   });

//   // 不会阻塞中间件执行,不需要 async await 阻塞了
//   // 延迟了中间件的后台执行生命周期
//   event.waitUntil(
//     new Promise((reslove, reject) => {
//       setTimeout(() => {
//         reslove(true);
//       }, 1500);
//     }),
//   );

//   //   return NextResponse.redirect(new URL('/dashboard', request.url));
//   return res;
//   // 直接进行相应
//   //   return Response.json(
//   //     {
//   //       success: false,
//   //       message: 'xxxxxx',
//   //     },
//   //     {
//   //       status: 401,
//   //     },
//   //   );
// }
