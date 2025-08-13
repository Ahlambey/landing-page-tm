import React from "react";
import CardCarousel from "./CarouselWithDrawer"; // adjust the path based on your file structure

const data = [
  {
    title: "Your product your price",

    subtitle: "Tired of People Always Bargaining with You on Social Media?",
    image: "./Hey! Ready to dive into digital marketing.png", // Replace with your own image
    details:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is. That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is.",
    solutionPart1:
      "That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect).",
    solutionPart2:
      "In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    link1: "https://en.wikipedia.org/wiki/Stanford_Web_Credibility_Project",
    link1text: "Stanford Web Credibility Project",
    link2: "https://en.m.wikipedia.org/wiki/Aesthetic%E2%80%93usability_effect",
    link2text: "Aesthetic–Usability Effect",
  },

  {
    title: "No more scamers",

    subtitle: "Tired of People Placing Orders Then Disappearing?",
    image: "/Your paragraph text.png",
    problem:
      "You spend time answering messages, taking custom requests, maybe even preparing an item — and then… silence. No reply. No payment. No explanation. Selling through DMs often feels uncertain, unstructured, and emotionally draining.",
    solutionPart1:
      "That’s why our platform helps you take back control. Instead of messy inboxes and vague promises, you get a clear order system where customers add items to their cart, confirm, and commit. A structured checkout process creates a sense of responsibility and professionalism — and makes buyers more likely to follow through.",
    solutionPart2:
      "In fact, research shows that when people interact with a formal interface that mimics real e-commerce, they’re far more likely to feel accountable and complete the transaction (ScienceDirect – Purchase Decision Behavior). And when your shop looks trustworthy and organized, buyers are less likely to disappear — because they see you as a real business, not just another inbox message.",
    link1: "",
    link2: "",
  },
  {
    title: "Your product your price",

    subtitle: "Tired of People Always Bargaining with You on Social Media?",
    image: "/missedCall.png", // Replace with your own image
    details:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is. That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is.",
    solutionPart1:
      "That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect).",
    solutionPart2:
      "In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    link1: "https://en.wikipedia.org/wiki/Stanford_Web_Credibility_Project",
    link1text: "Stanford Web Credibility Project",
    link2: "https://en.m.wikipedia.org/wiki/Aesthetic%E2%80%93usability_effect",
    link2text: "Aesthetic–Usability Effect",
  },
  {
    title: "Your product your price",

    subtitle: "Tired of People Always Bargaining with You on Social Media?",
    image: "/qualityProd.png", // Replace with your own image
    details:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is. That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is.",
    solutionPart1:
      "That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect).",
    solutionPart2:
      "In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    link1: "https://en.wikipedia.org/wiki/Stanford_Web_Credibility_Project",
    link1text: "Stanford Web Credibility Project",
    link2: "https://en.m.wikipedia.org/wiki/Aesthetic%E2%80%93usability_effect",
    link2text: "Aesthetic–Usability Effect",
  },
  // Add more cards as needed
];
const GetYourProShop = ({ title, subtitle, imageUrl }) => {
  
  return (
    <div className="flex flex-col w-full   px-4 py-10 mt-12 lg:px-24 lg:my-36">
      {/* Title, subtitle and image */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold  lg:text-[56px] mb-8 text-left">
          Make them take you seriously.
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-left lg:text-xl">
          Stand out with a professional storefront made just talnented people like you.
        </p>

        <div className="mt-6 -mx-5 lg:mx-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero"
            className="w-full max-h-80 object-cover lg:max-h-[500px] lg:rounded-3xl lg:shadow-md "
            loading="lazy"
          />
        </div>
      </div>

      {/* Carousel component below */}
      <CardCarousel title ={title} data ={data} />
    </div>
  );
};

export default GetYourProShop;
