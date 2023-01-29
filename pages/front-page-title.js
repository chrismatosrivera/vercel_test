import Link from 'next/link';

export default function FrontPageTitle({ fact }) {
    return (
        <div className='m-auto'>
            <h1 className='text-4xl'>
                {fact}
            </h1>
            <h3 className='text-xl text-gray-500'>
                Get your cat facts every time you open this page.
            </h3>
            <Link href="/catfacts"> <h3 className='text-gray-500 font-bold'> Click here to see more cat facts </h3> </Link>
        </div>
    )
}