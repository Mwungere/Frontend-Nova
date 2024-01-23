import exp from "constants";
import Image from "next/image"
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
        { p: "Automatic Irrigation On/Off" },
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
          { p: "Automatic Irrigation On/Off" },
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
          { p: "Customer Support 24/7" },
          { p: "Automatic Irrigation On/Off" },
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
    p: 'Some services that fall under lawn care are pest control, weed control, fertilization, soil testing, aeration, seeding, deep root feed.'
  },
  {
    image: '/tree.svg',
    width: 64,
    height: 64,
    h: 'Tree and ',
    sp: 'Shrub Care',
    p: ' The maintenance of trees and shrubs in order to promote their health, growth, and  well-being is referred to as tree and shrub care.'
  },
  {
    image: '/Consultant.svg',
    width: 64,
    height: 64,
    h: 'Free ',
    sp: 'Consultation',
    p: 'We offer free consultations in the project features use.We provided all the needed guidance in the consumption   '
  },
  {
    image: '/gardern.svg',
    width: 30,
    height: 30,
    h: 'Garden ',
    sp: 'Security',
    p: 'Having a fairly low fence and perhaps ensuring that you keep hedges and bushes under a metre or about waist high'
  },
  {
    image: '/automatic.svg',
    width: 64,
    height: 64,
    h: 'Automatic ',
    sp: 'Irrigation',
    p: 'Irrigation is the artificial application of water to the soil through various systems of tubes, pumps, and sprays'
  },
  {
    image: '/plant.svg',
    width: 64,
    height: 64,
    h: 'Plants ',
    sp: 'Health Condition',
    p: 'Plant health includes the protection of plants, Scientific and regulatory frameworks for controlling plant pests or pathogens'
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
    ans: 'At the Nova Project, we provide unwavering support to farmers implementing solutions by integrating cutting-edge agricultural technologies, offering training programs, and ensuring access to essential resources. Through strategic partnerships, we facilitate market linkages, provide financial support, and promote community engagement. Our commitment extends to advocating for sustainable farming practices, fostering a resilient and thriving agricultural sector. By empowering farmers with knowledge, resources, and market connections, we aim to drive positive impact and sustainable growth in farming communities worldwide.'
  },
  {
    q: 'How user-friendly is your technology for farmers with limited technical expertise?',
    ans: 'Our Nova Project technology is designed with a strong focus on user-friendliness, especially for farmers with limited technical expertise. We understand the diverse skill sets within the farming community and have implemented intuitive interfaces and straightforward functionalities. Our user-friendly platform ensures that farmers can easily navigate and utilize the technology without extensive technical knowledge. Clear and simple instructions, along with visual aids, are incorporated to facilitate seamless adoption. Additionally, we provide ongoing training and support to ensure that farmers feel confident in leveraging the technological tools at their disposal. Our commitment to accessibility aims to empower all farmers, regardless of technical background, to harness the benefits of innovative agricultural technologies and improve overall productivity.'
  },
  {
    q: 'How do you address concerns related to data privacy and security?',
    ans: 'At the Nova Project, data privacy and security are paramount. Our user-friendly technology employs robust encryption, adheres to strict data protection regulations, and undergoes regular security audits. We prioritize transparency, providing clear privacy policies and giving users control over data sharing. Our commitment to data minimization and anonymity ensures that only essential information is collected. Rest assured, we do not share or sell user data. Through these measures, we build and maintain trust, placing user well-being at the core of our technological initiatives.'
  },
  {
    q: 'What is the primary focus of your project?',
    ans: "The primary focus of the Nova Project is to revolutionize agriculture and improve livelihoods globally. Established in 2023, our initiative centers around the development and implementation of innovative solutions in agriculture. Through our flagship product, we aim to empower farmers with cutting-edge technologies, training programs, and access to resources. Initially successful in Africa, we're now dedicated to expanding our services worldwide, fostering sustainability, and making agricultural advancements accessible and affordable across continents—from Africa to America, Asia, Antarctica, and Europe. Our unwavering commitment is driven by a mission to create a positive and lasting global impact."
  },
  {
    q: 'What role does Artificial Intelligence play in your automation solutions?',
    ans: 'Artificial Intelligence (AI) is integral to our automation solutions at the Nova Project. We utilize AI algorithms to analyze data for predictive analytics in crop management, weather forecasting, and pest control. This technology enables precision agriculture by optimizing resource usage and adapts over time through machine learning. The insights provided by AI contribute to informed decision-making for farmers, enhancing efficiency and sustainability in farming practices. Our commitment to leveraging AI underscores our dedication to bringing advanced technology to farmers globally, promoting productivity and sustainable agriculture.'
  },
]