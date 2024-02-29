import React from 'react'

const FooterSection = ({ title, items }) => {
    return (
        <div className="flex flex-col space-y-2">
            <p className="text-xl font-bold md:text-lg md:font-semibold">{title}</p>
            {items.map((item, index) => (
                <a key={index} href={item.href || '#'} className="text-white text-sm">
                    {item.href ? item.name : `${item.name} (${item.code})`}
                </a>
            ))}
        </div>

    )
}

export default FooterSection