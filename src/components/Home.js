import React from 'react';
import { check_icon, down_arrow_icon, image1, image2, image3, image4, info_icon } from '../assets/Images';
import RowCard from './cards/RowCard';
import Card from './cards/Cards';

const Home = () => {

    const buttonNames = ['Tools', 'AWS Builder', 'Start Build', 'Build Supplies', 'Tooling', 'BlueHosting'];

    const data = {
        whyWeLoveIt: "Why we love it",
        documentation: "Documentation",
        easyUse: "Easy Use"
    };

    const product = [
        {
            id: 1,
            name: "WixPro 72-Inch Responsive Website Builder",
            description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            highlights: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            rate: 9.8,
            quality: "Exceptional",
            bestChoice: true,
            img: image1,
            imgName: "Builder 1",
        },
        {
            id: 2,
            name: "SiteCraft 68-Inch Ultimate Web Design Studio",
            description: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
            highlights: "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
            rate: 9.5,
            quality: "Excellent",
            bestChoice: true,
            img: image2,
            imgName: "Builder",
        },
        {
            id: 3,
            name: "WixPro 72-Inch Responsive Website Builder",
            description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            highlights: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            rate: 6.3,
            quality: "Exceptional",
            bestChoice: false,
            img: image3,
            imgName: "Builder 1",
        },
        {
            id: 4,
            name: "CDK Resposive Builder",
            description: "An extensive library of widgets and apps, and detailed step-by-step guides",
            highlights: "-building responsive, Cool, Docs",
            rate: 8.2,
            quality: "Very Good",
            bestChoice: false,
            img: image4,
            imgName: "CDK",
            review: { data },
        },
    ]

    const productCard = [
        {
            id: 1,
            name: "Web Builder 1",
            description: "Computer  Modern clasic with wix support",
            oldPrice: 49.96,
            discount: 20,
            newPrice: 39.96,
            img: image2,
        },
        {
            id: 2,
            name: "Web Builder 2",
            description: "Computer  Modern clasic with wix support",
            oldPrice: 49.96,
            discount: 20,
            newPrice: 39.96,
            img: image2,
        },
        {
            id: 3,
            name: "Web Builder 3",
            description: "Computer  Modern clasic with wix support",
            oldPrice: 49.96,
            discount: 20,
            newPrice: 39.96,
            img: image2,
        },
    ]



    return (
        <div className="container mx-auto w-screen max-w-[1024px]">
            <p className="text-3xl md:text-5xl mt-8 ml-1 md:ml-0">Best Website builders in the US</p>
            <div className="flex flex-wrap justify-between items-center border-y py-5 my-4 border-[#E1E4E6]-300 text-[#4B5665] ">
                <div className="flex gap-8 w-full sm:w-auto">
                    <div className="flex items-center">
                        <img src={check_icon} alt="check icon" className="mr-2" />
                        <p>Last Updated: February 22, 2020</p>
                    </div>
                    <div className="flex items-center">
                        <img src={info_icon} alt="info icon" className="mr-2" />
                        <p>Advertising Disclosure</p>
                    </div>
                </div>
                <div className="w-full sm:w-auto">
                    <p className="flex items-center">Top Relevant
                        <img src={down_arrow_icon} alt="down arrow icon" className="ml-2" /></p>
                </div>
            </div>

            <div className="flex flex-wrap space-x-12 sm:space-x-0 sm:flex-nowrap">
                {buttonNames.map((name, index) => (
                    <button key={index} className="py-2 px-4 rounded-full border hover:bg-[#212731] hover:text-white">
                        {name}
                    </button>
                ))}
            </div>

            <p className="my-3 text-[#4B5665]" >Home  &nbsp; &gt; &nbsp; Hosting for all &nbsp; &gt; &nbsp; Hosting &nbsp; &gt; &nbsp; Hosting6 &nbsp; &gt; &nbsp; Hosting5</p>
            {product.map((item, index) => (
                <RowCard
                    key={index}
                    name={item.name}
                    description={item.description}
                    highlights={item.highlights}
                    rate={item.rate}
                    quality={item.quality}
                    bestChoice={item.bestChoice}
                    img={item.img}
                    imgName={item.imgName}
                    review={item.review}
                />
            ))}

            <h3 className="text-3xl my-3" >Related deals you might like for</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-5">
                {productCard.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        description={item.description}
                        img={item.img}
                        oldPrice={item.oldPrice}
                        discount={item.discount}
                        newPrice={item.newPrice}
                    />
                ))}
            </div>
            <div className="my-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start">
                <p className="text-[#5C6874] text-3xl mb-4 sm:mb-0">Sign up and get exclusive special deals</p>
                <div className="flex ml-auto">
                    <input type="email" className="h-12 outline-none border rounded-l-lg p-3 pl-5" />
                    <button className="text-sm rounded-r-lg text-white font-semibold bg-blue-500 hover:bg-blue-700 px-5 h-12">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
