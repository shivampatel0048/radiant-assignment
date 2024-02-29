import React from 'react';

const Cards = (props) => {
    const { discount, name, description, oldPrice, newPrice, img } = props;

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto drop-shadow-2xl">
            <img src={img} alt="Webbuilder 1" className="w-full h-54 object-cover mb-4 rounded-lg" />
            {discount && <p className="text-sm text-[#074786] mb-2 rounded-lg">
                <span className="bg-[#F2F4F7] rounded-lg p-1 px-2 mr-4">{discount}% Off</span>
                <span className="bg-[#F2F4F7] rounded-lg p-1 px-2">Limited time</span>
            </p>}

            <h3 className="text-xl text-[#626E79] text-center font-semibold mb-2">{name}</h3>
            <p className="text-[#626E79] mb-1">{description}</p>
            <div className="flex gap-3 mb-3">
                <span className="text-xl text-[#5C6874] font-bold">${oldPrice}</span>
                <span className="text-[#9FA9B3] text-sm line-through self-end">${newPrice}</span>
                {discount && <span className="text-red-600 text-xs px-2 py-1 rounded self-end">({discount}% Off)</span>}
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                View Deal
            </button>
        </div>
    );
}

export default Cards;
