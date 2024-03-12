import { fetchRevenue } from '../lib/data';

export default async function Page() {
  const result = await fetchRevenue();
  console.log('dashboard');

  return <>dashboard</>;
}
