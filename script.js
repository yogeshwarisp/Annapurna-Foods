
let isEnglish = false;

function toggleLanguage(){
    isEnglish = !isEnglish;

    document.getElementById("langBtn").innerText = isEnglish ? "मराठी" : "English";

    document.getElementById("navHome").innerText = isEnglish ? "Home" : "मुख्यपृष्ठ";
    document.getElementById("navAbout").innerText = isEnglish ? "About" : "माहिती";
    document.getElementById("navFood").innerText = isEnglish ? "Food Items" : "पदार्थ";
    document.getElementById("navSpecial").innerText = isEnglish ? "Festival Special" : "सणाचे पदार्थ";
    document.getElementById("navContact").innerText = isEnglish ? "Contact" : "संपर्क";

    document.getElementById("homeText").innerText =
        isEnglish ? "Fresh • Hygienic • Delicious Food" : "ताजे • स्वच्छ • स्वादिष्ट पदार्थ";

    document.getElementById("aboutTitle").innerText =
        isEnglish ? "About Us" : "आम्ही आपल्याला देत आहोत...!";

    document.getElementById("aboutText").innerText =
    isEnglish
    ? "Annapurna Foods prepares fresh, hygienic, and delicious food with great care using high-quality ingredients. Our food is rich in nutritional value and offers an excellent blend of traditional taste and modern hygiene. The health, satisfaction, and trust of our customers are our top priorities, and every dish is prepared with love and a commitment to quality."
    : "अन्नपूर्णा फूड्स ताजे, स्वच्छ आणि स्वादिष्ट अन्न काळजीपूर्वक व उच्च दर्जाच्या घटकांपासून तयार करते. आमचे अन्न पोषणमूल्यांनी समृद्ध असून पारंपरिक चव आणि आधुनिक स्वच्छतेचे उत्तम संयोजन आहे. ग्राहकांचे आरोग्य, समाधान आणि विश्वास हेच आमचे प्रमुख ध्येय असून प्रत्येक पदार्थ प्रेमाने आणि गुणवत्तेची खात्री ठेवून तयार केला जातो.";


    document.getElementById("foodTitle").innerText =
        isEnglish ? "Special Menu" : "अन्नपूर्णा फूड्स स्पेशल मेन्यू";

    document.getElementById("f1").innerText = isEnglish ? "Beet Papad" : "बीट पापड";
    document.getElementById("f2").innerText = isEnglish ? "Spinach Papad" : "पालक पापड";
    document.getElementById("f3").innerText = isEnglish ? "Tomato Papad" : "टोमॅटो पापड";
    document.getElementById("f4").innerText = isEnglish ? "Garlic Papad" : "लसूण पापड";
    document.getElementById("f5").innerText = isEnglish ? "Nachani Papad" : "नाचणी पापड";
    document.getElementById("f6").innerText = isEnglish ? "Kurdai" : "कुरडई";
    document.getElementById("f7").innerText = isEnglish ? "Potato Papad" : "बटाटा पापड";

    document.getElementById("specialTitle").innerText =
        isEnglish ? "Festival Special" : "गौरी गणपती व दिवाळी स्पेशल";

    document.getElementById("s1").innerText = isEnglish ? "Chakali" : "चकली";
    document.getElementById("s2").innerText = isEnglish ? "Karanji" : "पुढ्याची करंजी";
    document.getElementById("s3").innerText = isEnglish ? "Bhakarwadi" : "भाकरवाडी";
    document.getElementById("s4").innerText = isEnglish ? "Besan Ladoo" : "बेसन लाडू";
    document.getElementById("s5").innerText = isEnglish ? "Shev Ladoo" : "शेव चे लाडू";
    document.getElementById("s6").innerText = isEnglish ? "Chirote" : "चिरोटे";

    document.getElementById("contactTitle").innerText =
        isEnglish ? "Contact Details" : "संपर्क माहिती";

    document.getElementById("contactName").innerHTML =
        isEnglish ? "<strong>Name:</strong> Dipika Pawar" : "<strong>नाव:</strong> दिपीका पवार";

    document.getElementById("contactAddr").innerHTML =
        isEnglish ? "<strong>Address:</strong> Govind Plaza shivshakti chowk Raviwar peth Phaltan" : "<strong>पत्ता:</strong> गोविंद प्लाझा शिवशक्ती चौक रविवार पेठ फलटण";

    document.getElementById("contactPhone").innerHTML =
        isEnglish ? "<strong>Phone:</strong> +91 8010138679" : "<strong>मोबाईल:</strong> +91 8010138679";
}
