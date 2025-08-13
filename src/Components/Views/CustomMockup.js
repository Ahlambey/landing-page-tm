import React from "react";
import { useLang } from "../../LangProvider";

import CarouselWithDrawer from "./CarouselWithDrawer";

/* const data = [
  {
    title: "Return overwhelm",

    subtitle: "Was It Really a Return… or Just the Wrong Customer?",
    image: "./orderManagment/overwhelmedReturns.png", // Replace with your own image
    details:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is. That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "When you manage orders through DMs, it's easy to mix things up — names, products, addresses. You’re rushing between messages, screenshots, and mental notes. That “returned” order might not be a bad customer… it might be your mistake. Without clear order tracking, you might send the wrong item to the wrong person and never realize what actually happened. You lose money, time, and trust.",
    solutionPart1:
      "With our platform, every order is saved with full details — client info, product, status, delivery notes — all in one place. No more mix-ups. No more mystery returns.",
    solutionPart2: "",
    link1: "",
    link1text: "",
    link2: "",
    link2text: "",
    textColor: "light",
  },

  {
    title: "No more scamers",

    subtitle: "They Ordered… Then Disappeared.",
    image: "/Your paragraph text.png",
    problem:
      "You spent time preparing the order, packed it with care, called the delivery and then... silence. The customer ghosts you. No reply. No pickup. You lose time, money, and maybe even your temper.",
    solutionPart1:
      "With our app, no more chasing ghosts. As soon as a customer places an order, we automatically ask them to confirm it before anything moves forward including delivery time and location.",
    solutionPart2:
      "This one small step saves you from the chaos of last-minute cancellations and fake orders. You only work on real, confirmed orders just how it should be.",
    link1: "",
    link2: "",
    textColor: "dark",
  },
  {
    title: "Your orders with all the info",

    subtitle: "You Spend More Time Chasing Info Than Making Products",
    image: "./orderManagment/multipleMsgs.png", // Replace with your own image
    details:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is. That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "Your hands should be busy preparing orders not scrolling through endless voice notes, screenshots, and chat bubbles just to remember what someone ordered. The color, the size, that one little customization it all gets lost in the chaos of DMs. And suddenly you're stuck doing admin work instead of focusing on your business.",
    solutionPart1:
      "With our platform, every confirmed order is stored in one clean, organized list. Each order comes with all the details from product specifics to delivery dates so you can just focus on packaging your orders, stress-free.",
    solutionPart2:
      "Because your time is worth more than digging through messages.",
    link1: "",
    link1text: "",
    link2: "",
    link2text: "",
    textColor: "dark",
  },
  {
    title: "Tracked orders like a pro",

    subtitle: "I’m Tired of Answering: Where’s My Order?",
    image: "./orderManagment/multipleCalls.png", // Replace with your own image
    details:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is. That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "You’ve barely caught your breath from finishing one order and someone’s already messaging: Did you ship mine? Any updates? Is it on the way? You lose focus, pause your work, and dig through notes or chats just to reassure them. It’s draining. It’s repetitive. And it steals time.",
    solutionPart1:
      "Our platform updates order status in real-time and your customer sees the same thing you do. Once you mark it as Confirmed, Being Prepared, or On Delivery, they get the update instantly.",
    solutionPart2:
      "No more chasing you down. No more pressure to prove you’re not a scammer. Just peace of mind for them and freedom for you.",
    link1: "",
    link1text: "",
    link2: "",
    link2text: "",
    textColor: "dark",
  },
  {
    title: "No more missed calls",

    subtitle: "Sorry, I Didn’t Answer — I Didn’t Know Who Was Calling",
    image: "./orderManagment/retours.png", // Replace with your own image
    details:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is. That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "How many times have you lost money because the client didn’t answer the delivery guy? They say: I didn’t recognize the number. I wasn’t expecting the call right now. Oh, I thought it was spam. And just like that the order is returned. Your time, materials, and energy? Gone.",
    solutionPart1:
      "With our platform, you can send the customer all delivery details in one click including the delivery person’s name, phone number, and the exact time and date of delivery.",
    solutionPart2:
      "No more excuses. No more missed calls. They know who’s calling, when, and why and you get your product delivered without drama.",
    link1: "",
    link1text: "",
    link2: "",
    link2text: "",
    textColor: "light",
  },
  {
    title: "Build long lasting relationship",

    subtitle: "They Ordered Once… Then Disappeared",
    image: "./orderManagment/brokenLink.png", // Replace with your own image
    details:
      "When you sell through DMs, people often treat your work like it’s negotiable — they ignore the time, effort, and skill behind every product. It’s frustrating, and it makes your work feel less valuable than it really is. That’s why our platform gives you more than just a place to post your products — it gives you a professional storefront. Studies show that people trust and value what they see on well-designed websites. In fact, visual design alone can shape how trustworthy and credible your shop feels — sometimes within seconds (Stanford Web Credibility Project). Another study found that products displayed in clean, aesthetic layouts are perceived as more valuable, even when the price stays the same (Aesthetic–Usability Effect). In short: a polished shop helps your prices look fair, your work look professional, and your customers take you seriously — without the bargaining.",
    problem:
      "You poured your heart into their order — but once it’s delivered, silence. No message. No thank you. No second order. Just gone. What if that sale wasn’t the end?",
    solutionPart1:
      "With our platform, you can automatically follow up after delivery. Ask for feedback, send a thank you message, or gently request a review — all from the same place you manage your orders.",
    solutionPart2:
      "✅ This builds trust. ✅ Shows you care. ✅ And lets future clients see real reviews from real people. It’s not just about getting one order. It’s about creating a connection that turns a one-time buyer into a loyal customer.",
    link1: "",
    link1text: "",
    link2: "",
    link2text: "",
    textColor: "dark",
  },

]; */

const dataAr = [
  {
    title: "إرجاع الطلبات المربك",

    subtitle: "كثر عليك الروتور؟",
    image: "./orderManagment/overwhelmedReturns.webp", // استبدل بالصورة الخاصة بك
    details:
      "عند البيع عبر الرسائل الخاصة، غالبًا ما يتعامل الناس مع عملك وكأنه قابل للتفاوض — متجاهلين الوقت والجهد والمهارة الكامنة وراء كل منتج. وهذا أمر محبط، ويجعل عملك يبدو أقل قيمة مما هو عليه حقًا. ولهذا فإن منصتنا تمنحك أكثر من مجرد مكان لعرض منتجاتك — إنها توفر لك واجهة متجر احترافية. أظهرت الدراسات أن الناس يثقون ويقدّرون ما يرونه في المواقع المصممة بشكل جيد. بل إن التصميم البصري وحده يمكن أن يشكل الانطباع بالثقة والمصداقية خلال ثوانٍ. كما وجدت دراسة أخرى أن المنتجات المعروضة في تصاميم نظيفة ومرتبة تُرى على أنها أكثر قيمة حتى وإن كان السعر نفسه. باختصار: متجر أنيق يساعد أسعارك على أن تبدو عادلة، ويجعل عملك يبدو احترافيًا، ويجعل عملاءك يأخذونك على محمل الجد — دون مساومة.",
    problem:
      "عند إدارة الطلبات عبر الرسائل الخاصة، يسهل أن تختلط الأمور الأسماء، المنتجات، العناوين. تجد نفسك تتنقل بين الرسائل ولقطات الشاشة والملاحظات الذهنية. ذلك الطلب الذي أُعيد قد لا يكون بسبب عميل سيئ… بل ربما كان خطأك أنت. من دون تتبع واضح للطلبات، قد ترسل المنتج الخاطئ للشخص الخطأ، ولا تدرك أبدًا ما حدث. النتيجة: خسارة في المال والوقت والثقة.",
    solutionPart1:
      "مع منصتنا، يتم حفظ كل طلب بكامل تفاصيله معلومات العميل، المنتج، الحالة، ملاحظات التسليم في مكان واحد. لا مزيد من الأخطاء. لا مزيد من الإرجاعات الغامضة.",
    solutionPart2: "",
    link1: "",
    link1text: "",
    link2: "",
    link2text: "",
    textColor: "light",
    solImg1:"./appMockups/orderList.webp",
    solImg2:"./appMockups/orderDetails.webp"
  },

  {
    title: "لا مزيد من المحتالين",

    subtitle: "يكمونديو و مايزيدوش يبانو",
    image: "./storeFront/ghosting.webp",
    problem:
      "قضيت وقتًا في تجهيز الطلب، وأعددت التغليف بعناية، واتصلت بخدمة التوصيل، ثم… صمت. العميل اختفى. لا رد. لا استلام. فتخسر الوقت والمال وربما حتى أعصابك.",
    solutionPart1:
      "مع تطبيقنا، لا مزيد من مطاردة الأشباح. فور قيام العميل بالطلب، نطلب منه تأكيده قبل المضي قدمًا، بما في ذلك تحديد وقت ومكان التسليم.",
    solutionPart2:
      "هذه الخطوة البسيطة توفر عليك فوضى الإلغاءات في اللحظة الأخيرة والطلبات الوهمية. ستعمل فقط على الطلبات الحقيقية المؤكدة كما ينبغي.",
    link1: "",
    link2: "",
    textColor: "dark",
    solImg1:"./appMockups/orderList.webp",

  },
  {
    title: "طلباتك مع كل التفاصيل",

    subtitle: "في بلاست ما توجد لي كوموند تقعد تجمع في المعلومات تاع الطلبات من لي ميساج",
    image: "./orderManagment/multipleMsgs.webp", // استبدل بالصورة الخاصة بك
    details:
      "عند البيع عبر الرسائل الخاصة، غالبًا ما يتعامل الناس مع عملك وكأنه قابل للتفاوض — متجاهلين الوقت والجهد والمهارة الكامنة وراء كل منتج. وهذا أمر محبط، ويجعل عملك يبدو أقل قيمة مما هو عليه حقًا. ولهذا فإن منصتنا تمنحك أكثر من مجرد مكان لعرض منتجاتك — إنها توفر لك واجهة متجر احترافية. أظهرت الدراسات أن الناس يثقون ويقدّرون ما يرونه في المواقع المصممة بشكل جيد. بل إن التصميم البصري وحده يمكن أن يشكل الانطباع بالثقة والمصداقية خلال ثوانٍ. كما وجدت دراسة أخرى أن المنتجات المعروضة في تصاميم نظيفة ومرتبة تُرى على أنها أكثر قيمة حتى وإن كان السعر نفسه. باختصار: متجر أنيق يساعد أسعارك على أن تبدو عادلة، ويجعل عملك يبدو احترافيًا، ويجعل عملاءك يأخذونك على محمل الجد — دون مساومة.",
    problem:
      "يجب أن تكون يداك مشغولتين بتحضير الطلبات لا بالبحث في ملاحظات صوتية لا تنتهي ولقطات شاشة وفقاعات محادثة لمجرد تذكر ما طلبه شخص ما. اللون، المقاس، ذلك التخصيص الصغير كلها تضيع وسط فوضى الرسائل الخاصة. وفجأة تجد نفسك غارقًا في الأعمال الإدارية بدل التركيز على عملك.",
    solutionPart1:
      "مع منصتنا، يتم تخزين كل طلب مؤكد في قائمة واحدة نظيفة ومنظمة. كل طلب يحتوي على جميع التفاصيل من مواصفات المنتج إلى تواريخ التسليم، حتى تتمكن من التركيز على التغليف بكل راحة.",
    solutionPart2:
      "لأن وقتك أثمن من البحث بين الرسائل.",
    link1: "",
    link1text: "",
    link2: "",
    link2text: "",
    textColor: "dark",
        solImg1:"./appMockups/orderList.webp",
    solImg2:"./appMockups/orderDetails.webp"
  },
  {
    title: "تتبع الطلبات باحترافية",

    subtitle: "كرهت من كلمت وين راهي لاكوموند تاعي؟",
    image: "./orderManagment/multipleCalls.webp", // استبدل بالصورة الخاصة بك
    details:
      "عند البيع عبر الرسائل الخاصة، غالبًا ما يتعامل الناس مع عملك وكأنه قابل للتفاوض — متجاهلين الوقت والجهد والمهارة الكامنة وراء كل منتج. وهذا أمر محبط، ويجعل عملك يبدو أقل قيمة مما هو عليه حقًا. ولهذا فإن منصتنا تمنحك أكثر من مجرد مكان لعرض منتجاتك — إنها توفر لك واجهة متجر احترافية. أظهرت الدراسات أن الناس يثقون ويقدّرون ما يرونه في المواقع المصممة بشكل جيد. بل إن التصميم البصري وحده يمكن أن يشكل الانطباع بالثقة والمصداقية خلال ثوانٍ. كما وجدت دراسة أخرى أن المنتجات المعروضة في تصاميم نظيفة ومرتبة تُرى على أنها أكثر قيمة حتى وإن كان السعر نفسه. باختصار: متجر أنيق يساعد أسعارك على أن تبدو عادلة، ويجعل عملك يبدو احترافيًا، ويجعل عملاءك يأخذونك على محمل الجد — دون مساومة.",
    problem:
      "لم تكد تلتقط أنفاسك من إنهاء أحد الطلبات حتى يصلك من يسأل: هل أرسلت طلبي؟ هل هناك تحديث؟ هل هو في الطريق؟ فتتوقف عن عملك وتبحث في الملاحظات أو الرسائل فقط لطمأنتهم. الأمر مرهق، متكرر، ويسرق وقتك.",
    solutionPart1:
      "منصتنا تحدّث حالة الطلب في الوقت الفعلي، ويرى العميل ما تراه أنت. بمجرد وضع علامة على الطلب بأنه مؤكد أو قيد التحضير أو في طريقه للتسليم، تصله التحديثات فورًا.",
    solutionPart2:
      "لا مزيد من المطاردة. لا مزيد من الضغط لإثبات أنك لست محتالاً. فقط راحة بال لهم وحرية لك.",
    link1: "",
    link1text: "",
    link2: "",
    link2text: "",
    textColor: "dark",
    solImg1: "./appMockups/trackingOrder.webp"
  },
  {
    title: "لا مزيد من المكالمات الضائعة",

    subtitle: "سمحلي ماجاوبتش ليفرور ماعرفتش نومروه",
    image: "./orderManagment/retours.webp", // استبدل بالصورة الخاصة بك
    details:
      "عند البيع عبر الرسائل الخاصة، غالبًا ما يتعامل الناس مع عملك وكأنه قابل للتفاوض — متجاهلين الوقت والجهد والمهارة الكامنة وراء كل منتج. وهذا أمر محبط، ويجعل عملك يبدو أقل قيمة مما هو عليه حقًا. ولهذا فإن منصتنا تمنحك أكثر من مجرد مكان لعرض منتجاتك — إنها توفر لك واجهة متجر احترافية. أظهرت الدراسات أن الناس يثقون ويقدّرون ما يرونه في المواقع المصممة بشكل جيد. بل إن التصميم البصري وحده يمكن أن يشكل الانطباع بالثقة والمصداقية خلال ثوانٍ. كما وجدت دراسة أخرى أن المنتجات المعروضة في تصاميم نظيفة ومرتبة تُرى على أنها أكثر قيمة حتى وإن كان السعر نفسه. باختصار: متجر أنيق يساعد أسعارك على أن تبدو عادلة، ويجعل عملك يبدو احترافيًا، ويجعل عملاءك يأخذونك على محمل الجد — دون مساومة.",
    problem:
      "كم مرة خسرت مالًا لأن العميل لم يرد على موظف التوصيل؟ يقول: لم أتعرف على الرقم. لم أكن أتوقع المكالمة في هذا الوقت. أو ظننتها مكالمة مزعجة. وهكذا يعود الطلب إليك، ويضيع وقتك وموادك وجهدك.",
    solutionPart1:
      "مع منصتنا، يمكنك إرسال جميع تفاصيل التوصيل للعميل بنقرة واحدة، بما في ذلك اسم ورقم هاتف الموصّل، والوقت والتاريخ المحدد للتسليم.",
    solutionPart2:
      "لا مزيد من الأعذار. لا مزيد من المكالمات الضائعة. العميل يعرف من يتصل، ومتى، ولماذا — وأنت تحصل على توصيل منتجك بلا مشاكل.",
    link1: "",
    link1text: "",
    link2: "",
    link2text: "",
    textColor: "light",
    solImg1: "./appMockups/trackingOrder.webp"

  },
];


export default function CustomMockup() {

  const { t } = useLang();
  const title = t("carouselTitle2");

  return (
    <div className="flex flex-col w-full   px-4 py-10 mt-12 lg:px-24 lg:my-36 bg-artisan-pearl">
      {/* Title, subtitle and image */}
      <div className="text-center mb-10 flex flex-col">
        <h1 className="text-2xl font-semibold  lg:text-[56px] mb-8 text-left">
          {t("customMockupTitle")}
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-left lg:text-xl">
          {t("customMockupText")}
          
        </p>

        <div className="mt-6 -mx-5 lg:mx-0 relative w-full overflow-hidden flex justify-center align-middle max-h-[430px] self-center border rounded-3xl border-artisan-lightGray">
          <img
            src="./appMockups/orderList.webp"
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
