import React from "react";
import { useLang } from "../../LangProvider";
import CarouselWithDrawer from "./CarouselWithDrawer";

/* const data = [
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
    textColor: "light",
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
    textColor: "dark",
  },
  {
    title: "No more excuses",

    subtitle: "Sick of Losing Money Because Customers Ignore Delivery Calls?",
    image: "/missedCall.png", // Replace with your own image
    details:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is. That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "You prepare the order, pay for delivery, and then the customer doesn’t even answer the phone when the courier calls. The package gets returned — and you lose money instead of making a sale. This happens all the time when you sell through DMs. There's no clear system, no commitment, and no way for customers to stay informed.",
    solutionPart1:
      "That’s why our platform changes everything. When customers order through your online shop, they go through a structured checkout — and they don’t just get a confirmation. They see exactly when the delivery is scheduled, who’s delivering it, and which number will be calling them. So the old excuse of 'I didn’t recognize the number' no longer applies.",
    solutionPart2:
      "And there’s science behind it too: structured, professional order systems make customers take the process more seriously — they feel more accountable and are more likely to follow through (ScienceDirect – Purchase Decision Behavior). A professional system doesn’t just make you look good — it protects your time, your money, and your peace of mind.",
    link1:
      "https://www.sciencedirect.com/science/article/abs/pii/S0747563215300686",
    link1text: "ScienceDirect – Purchase Decision Behavior",
    link2: "",
    link2text: "",
    textColor: "light",
  },
  {
    title: "Gain their trust",

    subtitle:
      "People Think you are  a Scam Just Because your Product Looks Good.",
    image: "/qualityProd.png", // Replace with your own image
    details:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is. That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "You know your product is high-quality — but sometimes it looks too good for people to believe it’s real. On social media, when a product looks top-tier, many people assume it’s fake or part of a scam. They wonder: What if I order this and receive something totally different? What if they take my money and disappear like others have? It’s just a video — can I really trust this person? And honestly, with all the fake accounts out there, who can blame them?",
    solutionPart1:
      "That’s why we built this platform — to help real artisans prove they’re the real deal. With your own professional shop, customers see your products in a real store setting, not just a TikTok. They can place orders, receive automated confirmations, and track deliveries — all in one place. That kind of structure builds trust.",
    solutionPart2:
      "In fact, research shows that well-designed, transparent websites drastically increase customer trust and lower fear of scams (Stanford Web Credibility Project). With us, you don’t just “look” professional — you are.",
    link1: "https://en.wikipedia.org/wiki/Stanford_Web_Credibility_Project",
    link1text: "Stanford Web Credibility Project",
    link2: "",
    link2text: "",
    textColor: "dark",
  },
  // Add more cards as needed
]; */


/* const data = [
  {
    title: "Your product, your price",
    subtitle: "Tired of People Always Bargaining with You on Social Media?",
    image: "./Hey! Ready to dive into digital marketing.png",
    details:
      "When you sell through DMs, people often treat your products like they’re negotiable — ignoring the cost of materials, the time it took to prepare, and the value you’re offering. It’s frustrating, and it can make your business feel less valuable than it really is. That’s why our platform gives you more than just a place to post pictures — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your brand look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "When you sell through DMs, people often treat your products like they’re negotiable — ignoring your costs, effort, and quality. It’s frustrating, and it can make your business feel less valuable.",
    solutionPart1:
      "That’s why our platform gives you more than just a place to post — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect).",
    solutionPart2:
      "In short: a polished shop helps your prices look fair, your brand look professional, and your customers take you seriously — without the bargaining.",
    link1: "https://en.wikipedia.org/wiki/Stanford_Web_Credibility_Project",
    link1text: "Stanford Web Credibility Project",
    link2: "https://en.m.wikipedia.org/wiki/Aesthetic%E2%80%93usability_effect",
    link2text: "Aesthetic–Usability Effect",
    textColor: "light",
  },
  {
    title: "No more scammers",
    subtitle: "Tired of People Placing Orders Then Disappearing?",
    image: "/Your paragraph text.png",
    problem:
      "You spend time answering messages, confirming details, maybe even packing the order — and then… silence. No reply. No payment. No explanation. Selling through DMs often feels uncertain, unstructured, and exhausting.",
    solutionPart1:
      "That’s why our platform helps you take back control. Instead of messy inboxes and vague promises, you get a clear order system where customers add items to their cart, confirm, and commit. A structured checkout process creates a sense of responsibility and professionalism — and makes buyers far more likely to follow through.",
    solutionPart2:
      "Research shows that when people interact with a formal interface that mimics real e-commerce, they’re far more likely to feel accountable and complete the transaction (ScienceDirect – Purchase Decision Behavior). When your shop looks trustworthy and organized, buyers are less likely to disappear — because they see you as a real business, not just another inbox message.",
    link1: "",
    link2: "",
    textColor: "dark",
  },
  {
    title: "No more excuses",
    subtitle: "Sick of Losing Money Because Customers Ignore Delivery Calls?",
    image: "/missedCall.png",
    details:
      "When you sell through DMs, there’s no structured follow-up — customers don’t always know when to expect their delivery or who’s bringing it. That uncertainty often means ignored calls and failed deliveries, costing you money and time.",
    problem:
      "You prepare the order, pay for delivery, and then the customer doesn’t even answer the phone when the courier calls. The package gets returned — and you lose money instead of making a sale. This happens all the time when you sell through DMs.",
    solutionPart1:
      "Our platform changes that. When customers order through your online shop, they go through a structured checkout — and they don’t just get a confirmation. They see exactly when the delivery is scheduled, who’s delivering it, and which number will be calling them. So the old excuse of 'I didn’t recognize the number' no longer applies.",
    solutionPart2:
      "Structured, professional order systems make customers take the process more seriously — they feel more accountable and are more likely to follow through (ScienceDirect – Purchase Decision Behavior). A professional system doesn’t just make you look good — it protects your time, your money, and your peace of mind.",
    link1:
      "https://www.sciencedirect.com/science/article/abs/pii/S0747563215300686",
    link1text: "ScienceDirect – Purchase Decision Behavior",
    link2: "",
    link2text: "",
    textColor: "light",
  },
  {
    title: "Gain their trust",
    subtitle: "People Think You’re a Scam Just Because Your Product Looks Good",
    image: "/qualityProd.png",
    details:
      "High-quality photos and videos are essential — but on social media, they can sometimes backfire. When a product looks *too* good, some people assume it’s fake or part of a scam. That’s the risk of selling only through DMs, where there’s no structured buying process to reassure them.",
    problem:
      "You know your product is genuine — but some customers don’t believe it. They wonder: What if I order this and receive something completely different? What if they take my money and disappear like others have? It’s just a video — can I really trust this person?",
    solutionPart1:
      "That’s why we built this platform — to help real sellers prove they’re the real deal. With your own professional shop, customers see your products in a real store setting, not just a TikTok or Instagram post. They can place orders, receive automated confirmations, and track deliveries — all in one place. That kind of structure builds trust.",
    solutionPart2:
      "Research shows that well-designed, transparent websites drastically increase customer trust and reduce fear of scams (Stanford Web Credibility Project). With us, you don’t just “look” professional — you are.",
    link1: "https://en.wikipedia.org/wiki/Stanford_Web_Credibility_Project",
    link1text: "Stanford Web Credibility Project",
    link2: "",
    link2text: "",
    textColor: "dark",
  },
]; */

const dataAr = [
  {
    title: "منتجك، سعرك ",
    subtitle: "عييت من الناس لي يقولولك نقسلي في السومة في مواقع التواصل الاجتماعي؟",
    image: "./storeFront/bargain.webp",
    details:
      "عند البيع عبر الرسائل الخاصة، يعامل الناس منتجاتك وكأن أسعارها قابلة للتفاوض — متجاهلين تكلفة المواد، والوقت الذي استغرقته في التحضير، والقيمة التي تقدمها. هذا أمر محبط، وقد يجعل عملك يبدو أقل قيمة مما هو عليه في الحقيقة. ولهذا فإن منصتنا تمنحك أكثر من مجرد مكان لعرض الصور — بل توفر لك واجهة متجر احترافية. وتُظهر الدراسات أن الناس يثقون ويقدّرون ما يرونه على المواقع المصممة بشكل جيد. في الواقع، يمكن للتصميم البصري وحده أن يؤثر في شعور العملاء بالثقة والمصداقية خلال ثوانٍ معدودة. كما أظهرت دراسة أخرى أن المنتجات المعروضة في تصاميم نظيفة وجذابة تُعتبر أكثر قيمة حتى إذا ظل السعر نفسه. باختصار: المتجر المصمم بعناية يساعد على جعل أسعارك تبدو عادلة، وعلامتك التجارية احترافية، ويجعل العملاء يتعاملون معك بجدية — دون مساومة.",
    problem:
      "عند البيع عبر الرسائل الخاصة، يعامل الناس منتجاتك وكأن أسعارها قابلة للتفاوض متجاهلين تكاليفك وجهدك وجودتك. وهذا أمر محبط، وقد يجعل عملك يبدو أقل قيمة.",
    solutionPart1:
      "ولهذا فإن منصتنا تمنحك أكثر من مجرد مكان لعرض الصور بل توفر لك واجهة متجر احترافية.تُظهر الدراسات أن الناس يثقون ويقدّرون ما يرونه على المواقع المصممة بشكل جيد. في الواقع، يمكن للتصميم البصري وحده أن يؤثر في شعور العملاء بالثقة والمصداقية خلال ثوانٍ معدودة. كما أظهرت دراسة أخرى أن المنتجات المعروضة في تصاميم نظيفة وجذابة تُعتبر أكثر قيمة حتى إذا ظل السعر نفسه.",
    solutionPart2:
      "باختصار: المتجر المصمم بعناية يساعد على جعل أسعارك تبدو عادلة، وعلامتك التجارية احترافية، ويجعل العملاء يتعاملون معك بجدية دون مساومة.",
    link1: "https://en.wikipedia.org/wiki/Stanford_Web_Credibility_Project",
    link1text: "Stanford Web Credibility Project",
    link2: "https://en.m.wikipedia.org/wiki/Aesthetic%E2%80%93usability_effect",
    link2text: "Aesthetic–Usability Effect",
    textColor: "light",
    solImg1: "./appMockups/storeFront.webp",
    solImg2: "./appMockups/prodDetails.webp",
  },
  {
    title: "لا مزيد من المحتالين",
    subtitle: "عييت من الناس لي يكمونديو اومبعد مايزيدوش يبانو؟",
    image: "./storeFront/ghosting.webp",
    problem:
      "تمضي وقتاً في الرد على الرسائل، وتأكيد التفاصيل، وربما تجهيز الطلب ثم… صمت تام. لا رد، ولا دفع، ولا تفسير. البيع عبر الرسائل الخاصة غالباً ما يكون غير مؤكد، وغير منظم، ومرهق.",
    solutionPart1:
      "لهذا فإن منصتنا تساعدك على استعادة السيطرة. بدلاً من صناديق الرسائل الفوضوية والوعود الغامضة، تحصل على نظام طلبات واضح يضيف فيه العملاء المنتجات إلى سلة التسوق، ويؤكدون الشراء، ويلتزمون به. إن عملية الدفع المنظمة تخلق إحساساً بالمسؤولية والاحترافية وتجعل المشتري أكثر ميلاً لإتمام الشراء.",
    solutionPart2:
      "وتُظهر الأبحاث أن الأشخاص عندما يتعاملون مع واجهة احترافية تحاكي التجارة الإلكترونية الحقيقية، يصبحون أكثر التزاماً بإتمام المعاملة. وعندما يبدو متجرك موثوقاً ومنظماً، تقل احتمالية اختفاء المشترين  لأنهم يرونك نشاطاً تجارياً حقيقياً، لا مجرد رسالة في صندوق الوارد.",
    link1: "",
    link2: "",
    textColor: "dark",
      solImg1: "./appMockups/checkout.webp",
      solImg2: "",
   
  },
  {
    title: "لا مزيد من الأعذار",
    subtitle: "عييت من الناس لي مايجاوبوش ليفرور؟",
    image: "./storeFront/missedCall.webp",
    details:
      "عند البيع عبر الرسائل الخاصة، لا يوجد متابعة منظمة فلا يعرف العملاء دائماً متى يتوقعون وصول الطلب أو من سيقوم بالتوصيل. هذا الغموض غالباً ما يؤدي إلى تجاهل المكالمات وفشل عمليات التوصيل، مما يكلفك المال والوقت.",
    problem:
      "تحضر الطلب، وتدفع أجرة التوصيل، ثم لا يرد العميل على اتصال الموصّل. يعود الطرد إليك  وتخسر المال بدلاً من إتمام البيع. هذا يتكرر كثيراً عند البيع عبر الرسائل الخاصة.",
    solutionPart1:
      "منصتنا تغيّر هذا الواقع. فعندما يطلب العملاء عبر متجرك الإلكتروني، يمرون بعملية دفع منظمة ولا يتلقون مجرد تأكيد الطلب. بل يرون بالضبط موعد التوصيل، ومن سيقوم به، ورقم الهاتف الذي سيتصل بهم. وبذلك لا يبقى لهم عذر مثل: «لم أعرف الرقم».",
    solutionPart2:
      "الأنظمة الاحترافية المنظمة تجعل العملاء يأخذون العملية على محمل الجد  فيشعرون بمسؤولية أكبر ويصبحون أكثر التزاماً بإتمام الشراء. النظام الاحترافي لا يجعلك تبدو جيداً فحسب بل يحمي وقتك ومالك وراحة بالك.",
    link1:
      "https://www.sciencedirect.com/science/article/abs/pii/S0747563215300686",
    link1text: "ScienceDirect – Purchase Decision Behavior",
    link2: "",
    link2text: "",
    textColor: "light",
      solImg1: "./appMockups/trackingOrder.webp",
      solImg2: ""

  },
  {
    title: "اكسب ثقتهم",
    subtitle: "عييت من الناس لي مايامنوش بلي واش راك تبيع صح؟",
    image: "./storeFront/qualityProd.webp",
    details:
      "الصور والفيديوهات عالية الجودة ضرورية — لكن على وسائل التواصل الاجتماعي، قد تأتي بنتيجة عكسية أحياناً. فعندما يبدو المنتج رائعاً للغاية، يفترض بعض الناس أنه مزيف أو جزء من عملية احتيال. وهذه مخاطرة البيع حصراً عبر الرسائل الخاصة، حيث لا توجد عملية شراء منظمة لطمأنتهم.",
    problem:
      "أنت تعلم أن منتجك أصلي لكن بعض العملاء لا يصدقون ذلك. فهم يتساءلون: ماذا لو طلبت هذا المنتج ووصلني شيء مختلف تماماً؟ ماذا لو أخذوا مالي واختفوا كما فعل آخرون؟ إنها مجرد مقاطع فيديو فهل يمكنني الوثوق بهذا الشخص؟",
    solutionPart1:
      "لهذا أنشأنا هذه المنصة لمساعدة البائعين الحقيقيين على إثبات جديتهم. فمع متجرك الاحترافي، يرى العملاء منتجاتك في بيئة متجر حقيقية، لا مجرد منشور على إنستغرام أو تيك توك. يمكنهم تقديم الطلبات، واستلام تأكيدات آلية، وتتبع عمليات التوصيل كل ذلك في مكان واحد. هذا النوع من التنظيم يبني الثقة.",
    solutionPart2:
      "وتُظهر الأبحاث أن المواقع المصممة جيداً بشفافية تزيد ثقة العملاء بشكل كبير وتقلل من مخاوف الاحتيال. معنا، أنت لا «تبدو» احترافياً فحسب — بل أنت كذلك بالفعل.",
    link1: "https://en.wikipedia.org/wiki/Stanford_Web_Credibility_Project",
    link1text: "Stanford Web Credibility Project",
    link2: "",
    link2text: "",
    textColor: "dark",
   solImg1: "./appMockups/storeFront.webp",
    solImg2: "./appMockups/prodDetails.webp",
    
  },
];

export default function ShopMockup() {
  const { t } = useLang();
  const title = t("carouselTitle1");
  return (
    <div className="flex flex-col w-full   px-4 py-10 mt-12 lg:px-24 lg:my-12">
      {/* Title, subtitle and image */}
      <div className="text-center mb-10 flex flex-col">
        <h1 className="text-2xl font-semibold  lg:text-[56px] mb-8 text-left">
          {t("shopMockupTitle")}
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-left lg:text-xl">
          {t("shopMockupText")}
        </p>

        <div className="lg:mt-6 -mx-5 lg:mx-0 relative w-full overflow-hidden flex justify-center align-middle max-h-[430px] self-center border rounded-3xl border-artisan-lightGray">
          <img
            src="./appMockups/storeFront.webp"
            alt="Hero"
            className="h-full object-contain lg:max-h-[500px] lg:rounded-3xl lg:shadow-md "
            loading="lazy"
          />
   
        </div>
      </div>

      {/* Carousel component below */}
      <CarouselWithDrawer title={title} cards={dataAr} />
    </div>
  );
}
