import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";
import add_icon from "./add_icon.svg";
import admin_logo from "./admin_logo.svg";
import appointment_icon from "./appointment_icon.svg";
import cancel_icon from "./cancel_icon.svg";
import doctor_icon from "./doctor_icon.svg";
import home_icon from "./home_icon.svg";
import people_icon from "./people_icon.svg";
import upload_area from "./upload_area.svg";
import list_icon from "./list_icon.svg";
import tick_icon from "./tick_icon.svg";
import appointments_icon from "./appointments_icon.svg";
import earning_icon from "./earning_icon.svg";
import patients_icon from "./patients_icon.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
  add_icon,
  admin_logo,
  appointment_icon,
  cancel_icon,
  doctor_icon,
  upload_area,
  home_icon,
  patients_icon,
  people_icon,
  list_icon,
  tick_icon,
  appointments_icon,
  earning_icon,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Richard James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    email: "richard.james@prescripto.com",
    password: "password123",
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Sarah Thompson",
    speciality: "Gynecologist",
    degree: "MD",
    experience: "8 Years",
    about:
      "Dr. Sarah Thompson specializes in women's health, offering compassionate care with expertise in prenatal and postnatal treatments.",
    fees: 70,
    email: "sarah.thompson@prescripto.com",
    password: "securepass456",
    address: {
      line1: "12th Avenue, Kensington",
      line2: "Park Road, London",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Michael Brown",
    speciality: "Dermatologist",
    degree: "MD",
    experience: "5 Years",
    about:
      "Dr. Michael Brown provides expert dermatological care, focusing on skin health, cosmetic treatments, and early detection of skin conditions.",
    fees: 60,
    email: "michael.brown@prescripto.com",
    password: "dermcare789",
    address: {
      line1: "21st Street, Oxford",
      line2: "High Road, Birmingham",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Emily White",
    speciality: "Pediatricians",
    degree: "MD",
    experience: "10 Years",
    about:
      "Dr. Emily White specializes in pediatric care, ensuring children's health and well-being through preventive and curative services.",
    fees: 65,
    email: "emily.white@prescripto.com",
    password: "kidshealth321",
    address: {
      line1: "14th Boulevard, Chelsea",
      line2: "Ring Road, London",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Thomas Gray",
    speciality: "Neurologist",
    degree: "DM",
    experience: "12 Years",
    about:
      "Dr. Thomas Gray is an expert in diagnosing and treating neurological disorders, focusing on improving patients' quality of life.",
    fees: 80,
    email: "thomas.gray@prescripto.com",
    password: "neuroexpert654",
    address: {
      line1: "18th Cross, Manchester",
      line2: "High Street, Cambridge",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Rachel Green",
    speciality: "Gastroenterologist",
    degree: "DM",
    experience: "7 Years",
    about:
      "Dr. Rachel Green specializes in diagnosing and managing digestive system disorders with a focus on personalized care.",
    fees: 75,
    email: "rachel.green@prescripto.com",
    password: "digestivecare987",
    address: {
      line1: "3rd Lane, Soho",
      line2: "Main Road, Leeds",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Andrew Clark",
    speciality: "General physician",
    degree: "MBBS",
    experience: "6 Years",
    about:
      "Dr. Andrew Clark provides comprehensive primary care with a focus on preventive health and patient education.",
    fees: 55,
    email: "andrew.clark@prescripto.com",
    password: "primarycare123",
    address: {
      line1: "19th Lane, Brighton",
      line2: "Circle Road, Sheffield",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Olivia Martin",
    speciality: "Gynecologist",
    degree: "MD",
    experience: "11 Years",
    about:
      "Dr. Olivia Martin is dedicated to providing exceptional care in women's reproductive health, ensuring patient comfort and trust.",
    fees: 85,
    email: "olivia.martin@prescripto.com",
    password: "reproductivecare456",
    address: {
      line1: "2nd Street, Westminster",
      line2: "High Road, Bristol",
    },
  },
  {
    _id: "doc9",
    name: "Dr. William Scott",
    speciality: "Dermatologist",
    degree: "MD",
    experience: "9 Years",
    about:
      "Dr. William Scott offers expert dermatological solutions for various skin conditions and cosmetic concerns.",
    fees: 70,
    email: "william.scott@prescripto.com",
    password: "skinspecialist789",
    address: {
      line1: "8th Avenue, Notting Hill",
      line2: "Circle Road, Glasgow",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Sophia Taylor",
    speciality: "Pediatricians",
    degree: "MD",
    experience: "15 Years",
    about:
      "Dr. Sophia Taylor has extensive experience in pediatric healthcare, ensuring a holistic approach to child wellness.",
    fees: 90,
    email: "sophia.taylor@prescripto.com",
    password: "pediatrics321",
    address: {
      line1: "5th Boulevard, York",
      line2: "Ring Road, Liverpool",
    },
  },
  {
    _id: "doc11",
    name: "Dr. James Anderson",
    speciality: "Neurologist",
    degree: "DM",
    experience: "13 Years",
    about:
      "Dr. James Anderson specializes in advanced treatments for neurological disorders, focusing on patient-centric care.",
    fees: 95,
    email: "james.anderson@prescripto.com",
    password: "neurocare654",
    address: {
      line1: "10th Lane, Plymouth",
      line2: "Main Road, Leicester",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Lily Evans",
    speciality: "Gastroenterologist",
    degree: "DM",
    experience: "8 Years",
    about:
      "Dr. Lily Evans is highly skilled in managing digestive health, providing tailored treatment strategies.",
    fees: 85,
    email: "lily.evans@prescripto.com",
    password: "digestivehealth987",
    address: {
      line1: "7th Cross, Edinburgh",
      line2: "High Street, Cardiff",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Edward Baker",
    speciality: "General physician",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Edward Baker focuses on providing personalized primary healthcare, emphasizing preventive strategies.",
    fees: 45,
    email: "edward.baker@prescripto.com",
    password: "personalized123",
    address: {
      line1: "22nd Lane, Birmingham",
      line2: "Circle Road, Southampton",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Charlotte Wilson",
    speciality: "Gynecologist",
    degree: "MD",
    experience: "6 Years",
    about:
      "Dr. Charlotte Wilson is committed to advancing women's health, offering expert guidance and care in gynecology.",
    fees: 65,
    email: "charlotte.wilson@prescripto.com",
    password: "gynec123",
    address: {
      line1: "4th Street, Newcastle",
      line2: "Ring Road, Oxford",
    },
  },
  {
    _id: "doc15",
    name: "Dr. George Cooper",
    speciality: "Dermatologist",
    degree: "MD",
    experience: "4 Years",
    about:
      "Dr. George Cooper specializes in treating skin conditions with a patient-focused and evidence-based approach.",
    fees: 50,
    email: "george.cooper@prescripto.com",
    password: "skincare123",
    address: {
      line1: "16th Avenue, Cambridge",
      line2: "High Road, Reading",
    },
  },
];
