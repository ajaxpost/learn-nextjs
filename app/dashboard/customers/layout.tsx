import React from 'react';

export default function LAyout({ children }: { children: React.ReactNode }) {
  return (
    <>
      customer layout
      <div>{children}</div>
    </>
  );
}
