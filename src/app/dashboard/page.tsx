import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            Dashboard
            <Image src="/static/icons/icon.png" width={15} height={15} alt='icon' />
        </div>
    )
}

export default page