import HRImage from "../assets/images/services/hr.svg";
import EmployeeGuidianceImage from "../assets/images/services/employee-guidance.svg";
import LeadershipImage from "../assets/images/services/leadershipt.svg";

import ServicesItem01 from "../assets/images/services/items/01.svg";
import ServicesItem02 from "../assets/images/services/items/02.svg";
import ServicesItem03 from "../assets/images/services/items/03.svg";
import ServicesItem04 from "../assets/images/services/items/04.svg";
import ServicesItem05 from "../assets/images/services/items/05.svg";
import ServicesItem06 from "../assets/images/services/items/06.svg";
import ServicesItem07 from "../assets/images/services/items/07.svg";
import ServicesItem08 from "../assets/images/services/items/08.svg";

export const ServicesContent = [
  {
    title: `Fractional Human Resources Support`,
    description:
      "Are you a busy founder or leader and need more structure to improve employee engagement and productivity?",
    url: `/services`,
    slug: "",
    index: 0,
    icon: HRImage,
  },
  {
    title: `Bespoke Employee Engagement Guidance`,
    description:
      "Looking to level up your company’s employee experience but don’t know what to do or how to do it?",
    url: `/services`,
    slug: "",
    index: 0,
    icon: EmployeeGuidianceImage,
  },
  {
    title: `People Leadership Guidiance`,
    description:
      "Managing a workforce can be challenging. Need quick advice on a tricky employee problem?",
    url: `/services`,
    slug: "",
    index: 0,
    icon: LeadershipImage,
  },
].map((content, i) => {
  const slug = content.title.toLowerCase().replaceAll(" ", "-");
  content.url += `/#${slug}`;
  content.slug = slug;
  content.index = i;

  return content;
});

export const LIST_OF_SERVICES = [
  {
    title: "People Leadership Guidance",
    image: ServicesItem01,
    key: "people-leadership-guidiance",
    items: `Managing a workforce can be challenging. Need quick advice on a tricky employee problem? If you are experiencing a people operations or HR challenge, such as an employee relations issue, we can help!`,
  },
  {
    title: "Fractional HR Support",
    image: ServicesItem02,
    key: "fractional-human-resources-support",
    items: `Are you a busy founder or leader and need more structure to improve employee engagement and productivity? Day-to-day HR tasks piling up, but bringing on someone full-time doesn’t meet your needs?  Let us be your stand-in people operations and HR team for the short or long term or however much support you need.`,
  },
  {
    title: "Bespoke Employee Engagement Guidance",
    image: ServicesItem03,
    key: "bespoke-employee-engagement-guidance",
    items: `Looking to level up your company’s employee experience but don’t know what to do or how to do it? We can help translate your mission and vision into an employee experience that attracts, retains, and motivates your team as you scale your business.`,
    hasCta: {
      title: "Book a consultation",
      path: "https://topmate.io/ij_paragonconsulting",
    },
  },
  {
    title: "Employee Experience",
    image: ServicesItem04,
    items: [
      "On + offboarding",
      "Internal communication strategies, i.e. people messaging and company touchpoints",
      "Pulse (engagement) surveys",
      "DEIB strategies",
    ],
  },
  {
    title: "Compliance",
    image: ServicesItem05,
    items: [
      "Compensation and benefit plan strategies",
      "Culture Book",
      "Employee Handbook",
      "Record Keeping Best Practices",
      "HR Legal Basics",
      "Misconduct Policy and Prevention",
    ],
  },
  {
    title: "Crisis Management",
    image: ServicesItem06,
    items: [
      "Misconduct Investigations, i.e. harassment, discrimination",
      "RIF/Restructure Basics ",
    ],
  },
  {
    title: "Coaching and Leadership",
    image: ServicesItem07,
    items: ["Performance management", "Offsite planning", "Mentorship"],
  },
  {
    title: "Talent Strategy",
    image: ServicesItem08,
    items: ["Employer Branding", "Recruiting"],
  },
];
