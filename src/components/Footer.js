import React from 'react';
import FooterSection from './cards/FooterSection';

const Footer = () => {
  const footerSections = [
    {
      title: 'Categories',
      items: [
        { name: 'Website Builders', href: '#' },
        { name: 'Today\'s Deals', href: '#' },
        { name: 'Hosting', href: '#' },
        { name: 'Data Center', href: '#' },
        { name: 'Robotic-Automation', href: '#' },
      ],
    },
    {
      title: 'Contact',
      items: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms Of Service', href: '#' },
        { name: 'About', href: '#' },
      ],
    },
    {
      title: 'Countries',
      items: [
        { name: 'United States', code: 'US' },
        { name: 'India', code: 'IN' },
      ],
    },
  ];

  return (
    <div className="bg-[#212731] text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-center text-center space-y-4 sm:space-y-0 sm:space-x-60">
          {footerSections.map((section, index) => (
            <FooterSection key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
      <p className="text-center mt-5 text-sm">All rights reserved ❤️ <strong> Shivam Patel</strong></p>
    </div>
  );
};

export default Footer;
