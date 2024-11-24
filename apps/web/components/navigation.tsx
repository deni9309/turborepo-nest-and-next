import Link from 'next/link'

const Navigation = () => {
  return (
    <section className='nav_menu *:text-slate-800'>
      <nav className='flex items-center gap-2 *:border-x-2 *:border-slate-400 *:p-4 *:transition-colors'>
        <Link prefetch href='/' className='hover:bg-slate-400'>
          Home
        </Link>
        <Link prefetch href='/products' className='hover:bg-slate-400'>
          Products
        </Link>
        <Link prefetch href='/products/create' className='hover:bg-slate-400'>
          ➕ Create Product
        </Link>
      </nav>
    </section>
  )
}

export default Navigation
