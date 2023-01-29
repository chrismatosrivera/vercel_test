import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div>
            <Link href='/'> <h4 className='absolute left-3 top-2'> catfacts. </h4> </Link>
            { children }
        </div>
    )
}
