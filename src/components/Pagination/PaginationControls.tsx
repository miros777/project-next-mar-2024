'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
    hasNextPage: boolean
    hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = (
    {
        hasNextPage,
        hasPrevPage,
    }
) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    // console.log(router);
    // console.log('000000000000');
    // console.log(searchParams);

    const page = searchParams.get('page') ?? '1'

    return (
        <div className='flex gap-2'>
            <button
                className='bg-blue-500 text-white p-1'
                disabled={!hasPrevPage}
                onClick={() => {
                    // router.push(`test/?page=${Number(page) - 1}&per_page=${per_page}`)
                    router.push(`movies?page=${Number(page) - 1}`)
                }}>
                prev page
            </button>

            <div>
                {page}
            </div>

            <button
                className='bg-blue-500 text-white p-1'
                disabled={!hasNextPage}
                onClick={() => {
                    // router.push(`test/?page=${Number(page) + 1}&per_page=${per_page}`)
                    router.push(`movies?page=${Number(page) + 1}`)
                }}>
                next page
            </button>
        </div>
    )
}

export default PaginationControls