const translations = {
  en: {
    title: "🌱 AI-Based Crop Recommendations System",
    subtitle: "Smart farming powered by AI for every farmer",
    welcome: "Welcome to DhartiMitra",
    description: "DhartiMitra is an AI-powered farming assistant designed to support farmers with smart solutions for better crop yields and sustainable agriculture. Our goal is to bring technology to the fields, making farming easier, efficient, and more profitable.",
    features: `
      <li>🌾 Get <b>personalized crop recommendations</b> based on soil and weather data.</li>
      <li>🦠 Detect <b>plant diseases</b> instantly with AI image analysis.</li>
      <li>🤖 Access an <b>AI Farming Assistant</b> for 24/7 guidance.</li>
      <li>📞 Connect with <b>expert advisors</b> for trusted farming support.</li>
    `,
    closing: "Together, let’s make farming smarter, sustainable, and more rewarding for every farmer. Your farm, your future, powered by AI. 🌍✨",
    getStarted: "🚀 Get Started",
    footerText: "© 2025 DhartiMitra. Empowering Farmers with AI."
  },
  hi: {
    title: "🌱 एआई-आधारित फसल सिफारिश प्रणाली",
    subtitle: "हर किसान के लिए एआई-संचालित स्मार्ट खेती",
    welcome: "धर्ति मित्र में आपका स्वागत है",
    description: "धर्ति मित्र एक एआई-संचालित खेती सहायक है जिसे किसानों को बेहतर फसल उत्पादन और टिकाऊ कृषि के लिए स्मार्ट समाधान प्रदान करने के लिए डिज़ाइन किया गया है। हमारा लक्ष्य खेतों में तकनीक लाना है, जिससे खेती आसान, कुशल और अधिक लाभदायक हो।",
    features: `
      <li>🌾 मिट्टी और मौसम डेटा के आधार पर <b>व्यक्तिगत फसल सिफारिशें</b> प्राप्त करें।</li>
      <li>🦠 एआई छवि विश्लेषण से <b>पौधों की बीमारियों</b> का तुरंत पता लगाएँ।</li>
      <li>🤖 24/7 मार्गदर्शन के लिए <b>एआई खेती सहायक</b> तक पहुँचें।</li>
      <li>📞 भरोसेमंद कृषि समर्थन के लिए <b>विशेषज्ञ सलाहकारों</b> से जुड़ें।</li>
    `,
    closing: "आइए मिलकर खेती को और अधिक स्मार्ट, टिकाऊ और हर किसान के लिए लाभदायक बनाएं। आपका खेत, आपका भविष्य, एआई द्वारा संचालित। 🌍✨",
    getStarted: "🚀 शुरू करें",
    footerText: "© 2025 धर्ति मित्र। एआई के साथ किसानों को सशक्त बनाना।"
  },
  mr: {
    title: "🌱 एआय-आधारित पीक शिफारस प्रणाली",
    subtitle: "प्रत्येक शेतकऱ्यासाठी एआय-चालित स्मार्ट शेती",
    welcome: "धर्तीमित्रामध्ये आपले स्वागत आहे",
    description: "धर्तीमित्र हा एक एआय-संचालित शेती सहाय्यक आहे, जो शेतकऱ्यांना चांगले उत्पादन आणि शाश्वत शेतीसाठी स्मार्ट उपायांसह मदत करण्यासाठी डिझाइन केला आहे. आमचे उद्दिष्ट तंत्रज्ञान शेतात आणणे आहे, ज्यामुळे शेती अधिक सोपी, कार्यक्षम आणि फायदेशीर होईल.",
    features: `
      <li>🌾 माती आणि हवामानाच्या डेटावर आधारित <b>वैयक्तिक पीक शिफारसी</b> मिळवा.</li>
      <li>🦠 एआय प्रतिमा विश्लेषणाने <b>वनस्पती रोग</b> त्वरित ओळखा.</li>
      <li>🤖 24/7 मार्गदर्शनासाठी <b>एआय शेती सहाय्यक</b> वापरा.</li>
      <li>📞 विश्वासार्ह शेती समर्थनासाठी <b>तज्ज्ञ सल्लागारांशी</b> संपर्क साधा.</li>
    `,
    closing: "चला मिळून शेती अधिक स्मार्ट, शाश्वत आणि प्रत्येक शेतकऱ्यासाठी फायदेशीर बनवूया. तुमचे शेत, तुमचे भविष्य, एआय द्वारे संचालित. 🌍✨",
    getStarted: "🚀 सुरू करा",
    footerText: "© 2025 धर्तीमित्र। एआयच्या मदतीने शेतकऱ्यांना सक्षम करणे."
  }
};

document.getElementById("language").addEventListener("change", function () {
  const lang = this.value;
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("subtitle").innerText = translations[lang].subtitle;
  document.getElementById("welcome").innerText = translations[lang].welcome;
  document.getElementById("description").innerText = translations[lang].description;
  document.getElementById("features").innerHTML = translations[lang].features;
  document.getElementById("closing").innerText = translations[lang].closing;
  document.getElementById("getStarted").innerText = translations[lang].getStarted;
  document.getElementById("footerText").innerText = translations[lang].footerText;
});
