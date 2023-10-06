import Link from 'next/link'
import React from 'react'
import PaddingContainer from '../layout/padding-container'

const Navigation = () => {
  return (
    
    <div className='border-b sticky top-0 right-0 left-0 bg-white bg-opacity-50 backdrop-blur-md'>
        <PaddingContainer>
            <div className='py-5 flex items-center justify-between'>
                <Link className='text-lg font-bold' href="/">Explorer</Link>

                    {/* Category Links*/}
                <nav>
                    <ul className='flex items-center gap-4 text-neutral-600'>
                        <li><Link href="/cities">Cities</Link></li>
                        <li><Link href="/experiences">Experiences</Link></li>
                    </ul>
                </nav>
            </div>
        </PaddingContainer>
    </div>
        
    
  )
}

export default Navigation
