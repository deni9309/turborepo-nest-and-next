import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col gap-6 items-center justify-center w-full mx-auto mt-10'>
      <h1>Home</h1>
      <Link prefetch href="/products">Products</Link>
      <Link prefetch href="/products/create">Create Product</Link>
    </div>
  );
}
