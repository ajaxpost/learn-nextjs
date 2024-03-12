学习 Next.js ==> https://nextjs.org/learn/dashboard-app/error-handling

进行到第13章了

- /app/layout.tsx --> 根布局
- /app/page.tsx --> 路由 /
- /app/dashboard/layout.tsx --> dashboard布局组件
- 当访问 /dashboard 时，采用 dashboard/layout.tsx 作为布局组件
- 不过 /app/layout.tsx 还是作为最大的最外层的根布局
- 但是 /app/page.tsx 在 /dashboard 路由里面就不生效了，/app/page.tsx 他是路由 / 的时候生效
- /app/dashboard/page.tsx 当访问 /dashboard 的时候作为默认路由组件传递到 /app/dashboard/layout.tsx 里面作为子路由
- 当访问 /dashboard/customers 的时候将
- /app/dashboard/customers/page.tsx 作为默认路由放到 /app/dashboard/layout.tsx 里面作为子路由
- 如果添加 use client 后,组件就变成了真正的客户端组件了,和之前用普通React开发的组件效果相同
- 默认是 use server,你在组件内部打印日志,也就是打印一次,只有组件刷新后才会打印,其他时候哪怕再次访问路由也不会打印
