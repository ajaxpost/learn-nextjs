'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createInvoice(formData: FormData) {
  throw new Error('Not implemented');
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
  // 清除缓存,并向服务器触发新请求
  // 默认情况下,Nextjs中的路由是不会重新加载的,除非你手动刷新页面
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
