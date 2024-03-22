/**
 * 选择退出缓存的方式
 * 1. 改用 POST 请求
 * 2. 使用 Request参数,获取 searchParams
 * 3. 使用动态函数
 * 4. 路由端配置动态渲染
 * 5. fetch cache:"no-cache"
 */
export async function GET(request: Request) {
  // 获取 searchParams 参数,就不会被缓存
  //   const searchParams = new URL(request.url).searchParams;
  //   console.log(searchParams);

  const result = await (
    await fetch('http://localhost:8080/selectUsers', {
      method: 'POST',
    })
  ).json();
  return Response.json({
    data: result.records,
  });
}

// POST请求不会被缓存
export async function POST(request: Request) {
  const result = await (
    await fetch('http://localhost:8080/selectUsers', {
      method: 'POST',
    })
  ).json();
  return Response.json({
    data: result.records,
  });
}
