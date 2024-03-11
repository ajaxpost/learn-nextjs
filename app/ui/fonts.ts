import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

// 主要用来设置字体并且设置字体粗细,都是必选项
export const lusitana = Lusitana({
    subsets:['latin'],
    weight:['400','700']
})