import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, customer3, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '500+', label: 'Retailers' },
    { value: '50+', label: 'Shops' },
    { value: '25k+', label: 'Happy Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Mango",
        price: "$45.00",
    },
    {
        imgURL: shoe5,
        name: "Orange Peach",
        price: "$45.00",
    },
    {
        imgURL: shoe6,
        name: "Strawberry (Coming Soon)",
        price: "$0.00",
    },
    {
        imgURL: shoe7,
        name: "Mixed Berry (Coming Soon)",
        price: "$0.00",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Fast shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Quality Ingredients",
        subtext: "Saffron, Shilajit, and Zam Zam water for a pure, potent boost."
    },
    {
        imgURL: support,
        label: "Loving Taste",
        subtext: "Delicious flavors that refresh and energize."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Hamza Rehman',
        rating: 4.5,
        feedback: "The quality and energy boost exceeded my expectations! Absolutely refreshing."
    },
    {
        imgURL: customer2,
        customerName: 'Juli Jones',
        rating: 4.5,
        feedback: "I felt energized throughout the day. I’ll definitely come back for more!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Mango", link: "/" },
            { name: "Orange Peach", link: "/" },
            { name: "Strawberry", link: "/" },
            { name: "Mixed Berry", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "Eahtashamummam@gmail.com", link: "eahtashamummam@gmail.com" },
            { name: "+91 55486 23545", link: "tel:+915548623545" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];