import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [

    {
      text: 'Products',
      links: [
        {
          text: 'Product Knowledge',
          href: getPermalink('/404'),
        },
        {
          text: 'Heating',
          href: getPermalink('/404'),
        },
        {
          text: 'Cooling',
          href: getPermalink('/404'),
        },
        {
          text: 'Indoor Air Quality',
          href: getPermalink('/404'),
        },
        {
          text: 'Thermostats & Zoning',
          href: getPermalink('/404'),
        },
        {
          text: 'Specials / Deals',
          href: getPermalink('/404'),
        },
      ],
    },
    {
      text: 'Services',
      links: [
        {
          text: 'New Installation',
          href: getPermalink('/404'),
        },
        {
          text: 'Upgrade or Replacement',
          href: getPermalink('/404'),
        },
        {
          text: 'Repair Service',
          href: getPermalink('/404'),
        },
        {
          text: 'Preventative Maintenance',
          href: getPermalink('/404'),
        },
        {
          text: 'Service Agreements',
          href: getPermalink('/404'),
        },
        {
          text: 'Indoor Air Quality Specialists',
          href: getPermalink('/404'),
        },
        {
          text: 'Air Duct Sealing',
          href: getPermalink('/404'),
        },
        {
          text: 'Commercial HVAC',
          href: getPermalink('/404'),
        },
      ],
    },
    {
      text: 'Support',
      links: [
        {
          text: 'Frequently Asked Questions',
          href: getPermalink('/404'),
        },
        {
          text: 'Troubleshooting',
          href: getPermalink('/404'),
        },
        {
          text: 'Product Knowledge',
          href: getPermalink('/404'),
        },
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'Contact Us',
          href: getPermalink('/404'),
        },
        {
          text: 'Reviews',
          href: getPermalink('/reviews'),
        },
        {
          text: 'Service Area',
          href: getPermalink('/404'),
        },
        {
          text: 'History',
          href: getPermalink('/404'),
        },
        {
          text: 'Qualifications',
          href: getPermalink('/404'),
        },
        {
          text: 'Photo Gallery',
          href: getPermalink('/404'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Product Knowledge', href: '/404' },
        { text: 'Heating', href: '/404' },
        { text: 'Cooling', href: '/404' },
        { text: 'Indoor Air Quality', href: '/404' },
        { text: 'Thermostats & Zoning', href: '/404' },
        { text: 'Specials / Deals', href: '/404' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'New Installation', href: '/404' },
        { text: 'Upgrade or Replacement', href: '/404' },
        { text: 'Repair Service', href: '/404' },
        { text: 'Preventative', href: '/404' },
        { text: 'Service Agreements', href: '/404' },
        { text: 'Indoor Air Quality Specialists', href: '/404' },
        { text: 'Air Duct Sealing', href: '/404' },
        { text: 'Commercial HVAC', href: '/404' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQ', href: '#' },
        { text: 'Troubleshooting', href: '#' },
        { text: 'Product Knowledge', href: '#' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'Contact Us', href: '/contact' },
        { text: 'Reviews', href: '/reviews' },
        { text: 'Service Area', href: '/404' },
        { text: 'History', href: '/404' },
        { text: 'Qualifications', href: '/404' },
        { text: 'Photo Gallery', href: '/404' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'BBB', icon: 'tabler:shield', href: 'https://www.bbb.org/us/tx/fort-worth/profile/commercial-air-conditioning-contractors/fort-worth-heat-air-inc-0825-235975739' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/FortWorthHeatandAir/' },
  ],
  footNote: `
  Fort Worth Heat & Air. All rights reserved.
  `,
};
