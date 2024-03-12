import { fetchRevenue } from '../lib/data';

export default async function Page() {
  const result = await fetchRevenue();
  return <>dashboard</>;
}
