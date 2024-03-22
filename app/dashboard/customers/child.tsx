'use client';

import { useEffect } from 'react';
import axios from 'axios';

export default function Child() {
  useEffect(() => {
    // axios 本事与nextjs缓存不兼容
    // 但是我们可以访问路由处理程序的接口,来实现缓存
    axios.get('/api').then((ret) => {
      console.log(ret);
    });
  }, []);

  return <div>child</div>;
}
