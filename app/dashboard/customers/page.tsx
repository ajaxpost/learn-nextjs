import { cookies } from 'next/headers';
import Child from './child';

export default async function Page() {
  console.log('customer page 加载了');
  const cookiesStore = cookies();

  // const result = await (
  //   await fetch('http://localhost:8080/selectUsers', {
  //     method: 'POST',
  //     cache: 'force-cache', // 缓存数据
  //   })
  // ).json();

  // 如果使用第三方库,是没有缓存机制的,具体如何实现缓存,去查看nextjs官网
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
  // const result = await axios.post('http://localhost:8080/selectUsers');

  // 在服务端组件中,不能请求路由处理程序的接口

  return (
    <>
      {/* {JSON.stringify(result.data.records)} */}
      <br />
      <p>
        token:
        {cookiesStore.get('token')?.value}
      </p>
      <Child />
    </>
  );
}
