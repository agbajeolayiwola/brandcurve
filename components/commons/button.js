import React from 'react'
import Link from 'next/link'

const Button = ({link, text}) => {
    return (
        <div>
        <Link href={link}>
        <button>
          <p>{text}</p>
        </button>
        </Link>
        </div>
    )
}

export default Button
