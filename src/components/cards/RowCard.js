import React from 'react';
import { trophy } from '../../assets/Images';

const RowCard = (props) => {
    const { name, description, highlights, rate, quality, bestChoice, imgName, review = "", img } = props;
    const totalStars = 5;
    const selectedStars = Math.round(rate / 2);

    return (
        <div className="flex flex-col md:flex-row my-6">
            {bestChoice && <div className="flex items-center text-white h-auto absolute bg-orange-600 rounded-r-xl px-2 py-1">
                <img src={trophy} alt="trophy-logo" className="mr-2" />
                <p>Best Choice</p>
            </div>}
            <div className="flex flex-col items-center justify-center w-full md:w-1/4">
                <img src={img} alt="product-images" className="w-11/12 h-4/5 rounded-lg object-cover mb-2" />
                <p>{imgName}</p>
            </div>

            <div className="flex-grow px-6 w-full md:w-2/4 text-base"> 
                <p>
                    <strong>{name}- </strong>{description}</p>
                <strong> Main highlights</strong>
                <p className="m-2" >[What You Get]: {highlights}</p>
                {review &&
                    <div>
                        <p>Why we love it</p>
                        <ul className='pl-2'>
                            <li>
                                ✅ {review.data.whyWeLoveIt}
                            </li>
                            <li>
                                ✅ {review.data.documentation}
                            </li>
                            <li>
                                ✅ {review.data.easyUse}
                            </li>
                        </ul>
                    </div>
                }

                <a href="/" className="flex items-center text-blue-700" >Show more ▼</a>
            </div>
            <div className="flex flex-col justify-between items-center px-4 w-full md:w-1/4">
                <div className="flex flex-col items-center text-[#074786] space-x-1 bg-[#F3F9FF] w-1/2 h-1/2 rounded-b-xl">
                    <p className="text-3xl">{rate}</p>
                    <p>{quality}</p>
                    <div>
                        {[...Array(totalStars)].map((el, i) =>
                            i < selectedStars ? <span key={i} className="text-yellow-500">★</span>
                                : <span key={i} className="text-gray-300">★</span>
                        )}
                    </div>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                    View
                </button>
            </div>
        </div>
    );
}

export default RowCard;
