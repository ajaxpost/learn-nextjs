import { cookies } from 'next/headers';

export default async function Page() {
  console.log('customer page 加载了');
  const cookiesStore = cookies();

  const result = await (
    await fetch('http://localhost:8080/selectUsers', {
      method: 'POST',
      cache: 'force-cache', // 缓存数据
    })
  ).json();

  return (
    <>
      {JSON.stringify(result.records)}
      <br />
      <p>
        token:
        {cookiesStore.get('token')?.value}
      </p>
    </>
  );
}
