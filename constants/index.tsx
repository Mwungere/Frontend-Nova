import exp from "constants";
import Image from "next/image";

export const pricingLinks = [
    {
      title: "Basic Plan",
      icon: "/light.svg",
      height:28.5,
      width:22.17,
      p: 'This is the first payment you make then after you start paying for Mainintainance.',
      currency: 'FRW',
      amount: '200K',
      rate: 'First Month',
      included: [
        { p: "Free Installation" },
        { p: "Free Monthly Maintenance" },
        { p: "Custom Support 24/7" },
        { p: "Automatic Lights On/Off" },
        { p: "intrusion Detection" },
        { p: "Live Stream Video" }
      ],
    },
    {
        title: "Business Plan",
        icon: "/stark.svg",
        width:32, 
        height:25,
        p: 'This is the first payment you make then after you start paying for Mainintainance.',
        currency: 'FRW',
        amount: '50K',
        rate: 'Per 1 Month',
        included: [
          { p: "Free Installation" },
          { p: "Free Monthly Maintenance" },
          { p: "Custom Support 24/7" },
          { p: "Automatic Lights On/Off" },
          { p: "intrusion Detection" },
          { p: "Live Stream Video" }
        ],
      },
      {
        title: "Enterprise Plan",
        icon: "/stark2.svg",
        width:32,
        height:32,
        p: 'This is the first payment you make then after you start paying for Mainintainance.',
        currency: 'FRW',
        amount: '500K',
        rate: 'Per 1 Year',
        included: [
          { p: "Free Installation" },
          { p: "Free Monthly Maintenance" },
          { p: "Custom Support 24/7" },
          { p: "Automatic Lights On/Off" },
          { p: "intrusion Detection" },
          { p: "Live Stream Video" }
        ],
      },
  ];


  export const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { title: "Home", url: "/" },
        { title: "About", url: "/" },
        { title: "Appointment", url: "/" },
        { title: "Blog", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About", url: "/" },
        { title: "Contact", url: "/" },
        { title: "Careers", url: "/" },
        { title: "Press", url: "/" },
      ],
    },
    {
      title: "Information",
      links: [
        { title: "Privacy policy", url: "/" },
        { title: "Terms and conditions", url: "/" },
        { title: "FAQ", url: "/" },
      ],
    },
    {
      title: "Contacts",
      links: [
        { title: "2462 Royal . Mexico", url: "/" },
        { title: "New Jersey 45463", url: "/" },
        { title: "(671) 555-0110", url: "/" },
        { title: "nova@gmail.com", url: "/" },
      ],
    }
  ];


export const services = [
  {
    image: '/lawn.svg',
    width: 64,
    height: 64,
    h: 'Lawn ',
    sp: 'Care',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. '
  },
  {
    image: '/tree.svg',
    width: 64,
    height: 64,
    h: 'Tree and ',
    sp: 'Shrub Care',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. '
  },
  {
    image: '/Consultant.svg',
    width: 64,
    height: 64,
    h: 'Free ',
    sp: 'Consultation',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. '
  },
  {
    image: '/gardern.svg',
    width: 30,
    height: 30,
    h: 'Garden ',
    sp: 'Security',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. '
  },
  {
    image: '/automatic.svg',
    width: 64,
    height: 64,
    h: 'Automatic ',
    sp: 'Irrigation',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. '
  },
  {
    image: '/plant.svg',
    width: 64,
    height: 64,
    h: 'Plants ',
    sp: 'Health Condition',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. '
  },
]

export const TestimonialsList = [
  {
    image: '/p1.svg',
    width: 64,
    height: 64,
    h: 'Eko Susiloanto',
    sp: 'Regional Mobility Manager',
    p: "Nova Project's global innovation makes essential services accessible and affordable worldwide, positively impacting millions. Its user-friendly features define Nova as a leading force in global positive change."
  },
  {
    image: '/p2.svg',
    width: 64,
    height: 64,
    h: 'Tri Cahyono',
    sp: 'Human Accounts Supervisor',
    p: "Nova Project's global innovation makes essential services accessible and affordable worldwide, positively impacting millions. Its user-friendly features define Nova as a leading force in global positive change."
  },
  {
    image: '/p3.svg',
    width: 64,
    height: 64,
    h: 'Cak Mukidi',
    sp: 'Forward Paradigm Manager',
    p: "Nova Project's global innovation makes essential services accessible and affordable worldwide, positively impacting millions. Its user-friendly features define Nova as a leading force in global positive change. "
  },
  {
    image: '/p4.svg',
    width: 30,
    height: 30,
    h: 'Tjandra Mangkualam',
    sp: 'District Directives Producer',
    p: "Nova Project's user-friendly interface and global innovation have made essential services accessible worldwide. With a commitment to affordability, it stands as a beacon of positive change for millions across continents."
  },
]


export const questionsAndAnswers = [
  {
    q: 'What kind of support do you provide to farmers implementing solutions?',
    ans: 'We offer comprehensive support to farmers during the implementation phase, including training sessions and ongoing assistance to ensure a smooth transition to our technology..'
  },
  {
    q: 'How user-friendly is your technology for farmers with limited technical expertise?',
    ans: 'We offer comprehensive support to farmers during the implementation phase, including training sessions and ongoing assistance to ensure a smooth transition to our technology..'
  },
  {
    q: 'How do you address concerns related to data privacy and security?',
    ans: 'We offer comprehensive support to farmers during the implementation phase, including training sessions and ongoing assistance to ensure a smooth transition to our technology..'
  },
  {
    q: 'What is the primary focus of your project?',
    ans: 'We offer comprehensive support to farmers during the implementation phase, including training sessions and ongoing assistance to ensure a smooth transition to our technology..'
  },
  {
    q: 'What role does Artificial Intelligence play in your automation solutions?',
    ans: 'We offer comprehensive support to farmers during the implementation phase, including training sessions and ongoing assistance to ensure a smooth transition to our technology..'
  },
]