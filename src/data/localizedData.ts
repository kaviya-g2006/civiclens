import { LanguageCode, Scheme, LegalRight } from '../types';

export interface LocalizedSchemeContent {
  name: string;
  shortDescription: string;
  benefits?: string[];
  department?: string;
  requiredDocuments?: string[];
}

export const LOCALIZED_SCHEMES: Record<string, Partial<Record<LanguageCode, LocalizedSchemeContent>>> = {
  'pm-kisan-samman-nidhi': {
    en: {
      name: 'PM Kisan Samman Nidhi',
      shortDescription: 'Financial benefit for eligible farmer families.',
      benefits: ['₹6,000 per year in 3 equal installments of ₹2,000 via Direct Benefit Transfer (DBT)'],
      department: 'Ministry of Agriculture and Farmers Welfare',
      requiredDocuments: ['Aadhaar Card', 'Land Patta / Chitta', 'Bank Passbook', 'Income Certificate']
    },
    ta: {
      name: 'பிஎம் கிசான் சம்மான் நிதி',
      shortDescription: 'தகுதியான விவசாய குடும்பங்களுக்கான நேரடி நிதியுதவி திட்டம்.',
      benefits: ['ஆண்டுக்கு ₹6,000 மூன்று தவணைகளில் (தலா ₹2,000) நேரடியாக வங்கி கணக்கில்'],
      department: 'விவசாயம் மற்றும் உழவர் நல அமைச்சகம்',
      requiredDocuments: ['ஆதார் அட்டை', 'நிலப் பட்டா / சிட்டா', 'வங்கி கணக்கு புத்தகம்', 'வருமானச் சான்றிதழ்']
    },
    hi: {
      name: 'पीएम किसान सम्मान निधि',
      shortDescription: 'पात्र किसान परिवारों के लिए प्रत्यक्ष वित्तीय सहायता योजना।',
      benefits: ['प्रत्यक्ष लाभ अंतरण (DBT) के माध्यम से ₹2,000 की 3 किस्तों में ₹6,000 प्रति वर्ष'],
      department: 'कृषि एवं किसान कल्याण मंत्रालय',
      requiredDocuments: ['आधार कार्ड', 'भूमि खसरा / खतौनी', 'बैंक पासबुक', 'आय प्रमाणपत्र']
    },
    te: {
      name: 'పీఎం కిసాన్ సమ్మాన్ నిధి',
      shortDescription: 'అర్హులైన రైతు కుటుంబాలకు ప్రత్యక్ష ఆర్థిక సహాయం.',
      benefits: ['సంవత్సరానికి ₹6,000 మూడు విడతలలో నేరుగా బ్యాంక్ ఖాతాలో'],
      department: 'వ్యవసాయ మరియు రైతు సంక్షేమ మంత్రిత్వ శాఖ',
      requiredDocuments: ['ఆధార్ కార్డు', 'భూమి పట్టాదారు పాస్‌బుక్', 'బ్యాంక్ పాస్‌బుక్', 'ఆదాయ ధృవీకరణ పత్రం']
    },
    kn: {
      name: 'ಪಿಎಂ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ',
      shortDescription: 'ಅರ್ಹ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ನೇರ ಆರ್ಥಿಕ ನೆರವು ಯೋಜನೆ.',
      benefits: ['ವರ್ಷಕ್ಕೆ ₹6,000 ಮೂರು ಕಂತುಗಳಲ್ಲಿ (ತಲಾ ₹2,000) ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ'],
      department: 'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಭೂಮಿ ಪಟ್ಟಾ / ಪಹಣಿ', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ']
    },
    ml: {
      name: 'പിഎം കിസാൻ സമ്മാൻ നിധി',
      shortDescription: 'അർഹരായ കർഷക കുടുംബങ്ങൾക്ക് നേരിട്ടുള്ള സാമ്പത്തിക ആനുകൂല്യം.',
      benefits: ['പ്രതിവർഷം ₹6,000 മൂന്ന് തുല്യ ഗഡുക്കളായി നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക്'],
      department: 'കൃഷി, കർഷക ക്ഷേമ മന്ത്രാലയം',
      requiredDocuments: ['ആധാർ കാർഡ്', 'ഭൂമി പട്ടയം', 'ബാങ്ക് പാസ്ബുക്ക്', 'വരുമാന സർട്ടിഫിക്കറ്റ്']
    }
  },
  'ayushman-bharat-pmjay': {
    en: {
      name: 'Ayushman Bharat (PM-JAY)',
      shortDescription: 'Cashless health insurance coverage for eligible families.',
      benefits: ['Free cashless secondary and tertiary hospitalization cover up to ₹5 Lakh per family per year'],
      department: 'National Health Authority, Ministry of Health',
      requiredDocuments: ['Aadhaar Card', 'Ration Card', 'Income Certificate', 'Mobile Number']
    },
    ta: {
      name: 'ஆயுஷ்மான் பாரத் மருத்துவக் காப்பீடு',
      shortDescription: 'தகுதியான குடும்பங்களுக்கான கட்டணமில்லா மருத்துவக் காப்பீட்டுத் திட்டம்.',
      benefits: ['குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் வரை கட்டணமில்லா மருத்துவச் சிகிச்சை'],
      department: 'தேசிய சுகாதார ஆணையம்',
      requiredDocuments: ['ஆதார் அட்டை', 'குடும்ப அட்டை', 'வருமானச் சான்றிதழ்', 'தொலைபேசி எண்']
    },
    hi: {
      name: 'आयुष्मान भारत स्वास्थ्य योजना',
      shortDescription: 'पात्र परिवारों के लिए कैशलेस स्वास्थ्य बीमा योजना।',
      benefits: ['प्रति परिवार प्रति वर्ष ₹5 लाख तक का निःशुल्क कैशलेस अस्पताल उपचार'],
      department: 'राष्ट्रीय स्वास्थ्य प्राधिकरण',
      requiredDocuments: ['आधार कार्ड', 'राशन कार्ड', 'आय प्रमाणपत्र', 'मोबाइल नंबर']
    },
    te: {
      name: 'ఆయుష్మాన్ భారత్ ఆరోగ్య పథకం',
      shortDescription: 'అర్హులైన కుటుంబాలకు ఉచిత ఆరోగ్య బీమా కవరేజ్.',
      benefits: ['ప్రతి కుటుంబానికి సంవత్సరానికి ₹5 లక్షల వరకు ఉచిత ఆసుపత్రి చికిత్స'],
      department: 'నేషనల్ హెల్త్ అథారిటీ',
      requiredDocuments: ['ఆధార్ కార్డు', 'రేషన్ కార్డు', 'ఆదాయ ధృవీకరణ పత్రం', 'ఫోన్ నంబర్']
    },
    kn: {
      name: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಆರೋಗ್ಯ ಯೋಜನೆ',
      shortDescription: 'ಅರ್ಹ ಕುಟುಂಬಗಳಿಗೆ ನಗದು ರಹಿತ ಆರೋಗ್ಯ ವಿಮಾ ಸೌಲಭ್ಯ.',
      benefits: ['ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ವಾರ್ಷಿಕ ₹5 ಲಕ್ಷದವರೆಗೆ ಉಚಿತ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ'],
      department: 'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಪ್ರಾಧಿಕಾರ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ರೇಷನ್ ಕಾರ್ಡ್', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ']
    },
    ml: {
      name: 'ആയുഷ്മാൻ ഭാരത് ആരോഗ്യ പദ്ധതി',
      shortDescription: 'അർഹരായ കുടുംബങ്ങൾക്ക് സൗജന്യ ആരോഗ്യ ഇൻഷുറൻസ് പരിരക്ഷ.',
      benefits: ['ഒരു കുടുംബത്തിന് പ്രതിവർഷം ₹5 ലക്ഷം രൂപ വരെയുള്ള സൗജന്യ ചികിത്സ'],
      department: 'ദേശീയ ആരോഗ്യ അതോറിറ്റി',
      requiredDocuments: ['ആധാർ കാർഡ്', 'റേഷൻ കാർഡ്', 'വരുമാന സർട്ടിഫിക്കറ്റ്', 'ഫോൺ നമ്പർ']
    }
  },
  'post-matric-scholarship': {
    en: {
      name: 'Post-Matric Scholarship Scheme',
      shortDescription: 'Financial assistance for post-matriculation students.',
      benefits: ['100% reimbursement of course fees and monthly maintenance allowance'],
      department: 'Ministry of Social Justice & Empowerment',
      requiredDocuments: ['Aadhaar Card', 'Income Certificate', 'Community / Caste Certificate', 'College Bonafide']
    },
    ta: {
      name: 'போஸ்ட்-மெட்ரிக் உயர்கல்வி உதவித்தொகை',
      shortDescription: 'கல்லூரி மாணவர்களுக்கான முழு கல்விக் கட்டண நிதியுதவி.',
      benefits: ['முழு கல்விக் கட்டண விலக்கு மற்றும் மாதாந்திர பராமரிப்பு உதவித்தொகை'],
      department: 'சமூக நீதி மற்றும் அதிகாரமளித்தல் அமைச்சகம்',
      requiredDocuments: ['ஆதார் அட்டை', 'வருமானச் சான்றிதழ்', 'சாதிச் சான்றிதழ்', 'கல்லூரி அடையாள அட்டை']
    },
    hi: {
      name: 'पोस्ट-मैट्रिक छात्रवृत्ति योजना',
      shortDescription: 'उच्च शिक्षा प्राप्त कर रहे छात्रों के लिए वित्तीय सहायता।',
      benefits: ['100% शिक्षण शुल्क प्रतिपूर्ति एवं मासिक भत्ता'],
      department: 'सामाजिक न्याय और अधिकारिता मंत्रालय',
      requiredDocuments: ['आधार कार्ड', 'आय प्रमाणपत्र', 'जाति प्रमाणपत्र', 'कॉलेज प्रमाणपत्र']
    },
    te: {
      name: 'పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్ పథకం',
      shortDescription: 'విద్యార్థుల ఉన్నత విద్య కోసం ఆర్థిక సహాయం.',
      benefits: ['100% కోర్సు ఫీజు రీయింబర్స్‌మెంట్ మరియు నెలవారీ భత్యం'],
      department: 'సామాజిక న్యాయం & సాధికారత మంత్రిత్వ శాఖ',
      requiredDocuments: ['ఆధార్ కార్డు', 'ఆదాయ ధృవీకరణ పత్రం', 'కుల ధృవీకరణ పత్రం', 'కళాశాల గుర్తింపు కార్డు']
    },
    kn: {
      name: 'ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ',
      shortDescription: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉನ್ನತ ಶಿಕ್ಷಣದ ಆರ್ಥಿಕ ನೆರವು.',
      benefits: ['100% ಕೋರ್ಸ್ ಶುಲ್ಕ ಮರುಪಾವತಿ ಮತ್ತು ಮಾಸಿಕ ನಿರ್ವಹಣಾ ಭತ್ಯೆ'],
      department: 'ಸಾಮಾಜಿಕ ನ್ಯಾಯ ಮತ್ತು ಸಬಲೀಕರಣ ಸಚಿವಾಲಯ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ', 'ಕಾಲೇಜು ಗುರುತಿನ ಚೀಟಿ']
    },
    ml: {
      name: 'പോസ്റ്റ്-മെട്രിക് സ്കോളർഷിപ്പ്',
      shortDescription: 'വിദ്യാർത്ഥികൾക്കുള്ള ഉന്നത വിദ്യാഭ്യാസ ധനസഹായം.',
      benefits: ['100% കോഴ്സ് ഫീസ് റീഇംബേഴ്സ്മെന്റും പ്രതിമാസ അലവൻസും'],
      department: 'സാമൂഹിക നീതി ശാക്തീകരണ മന്ത്രാലയം',
      requiredDocuments: ['ആധാർ കാർഡ്', 'വരുമാന സർട്ടിഫിക്കറ്റ്', 'ജാതി സർട്ടിഫിക്കറ്റ്', 'കോളേജ് തിരിച്ചറിയൽ രേഖ']
    }
  },
  'pm-usp-central-sector': {
    en: {
      name: 'PM-USP Central Sector Scholarship',
      shortDescription: 'Merit-cum-means scholarship for top college students.',
      benefits: ['₹12,000/yr for Graduation, ₹20,000/yr for Post-Graduation'],
      department: 'Department of Higher Education',
      requiredDocuments: ['Aadhaar Card', 'Class 12 Marksheet', 'Income Certificate', 'Bank Passbook']
    },
    ta: {
      name: 'பிஎம்-யுஎஸ்பி மத்திய பிரிவு உதவித்தொகை',
      shortDescription: 'கல்லூரி மற்றும் பல்கலைக்கழக மாணவர்களுக்கான மெரிட் கல்வி உதவித்தொகை.',
      benefits: ['பட்டப்படிப்புக்கு ஆண்டுக்கு ₹12,000, முதுகலைக்கு ₹20,000'],
      department: 'உயர்கல்வித் துறை',
      requiredDocuments: ['ஆதார் அட்டை', '12-ஆம் வகுப்பு மதிப்பெண் சான்றிதழ்', 'வருமானச் சான்றிதழ்', 'வங்கி கணக்கு புத்தகம்']
    },
    hi: {
      name: 'पीएम-यूएसपी केंद्रीय क्षेत्र छात्रवृत्ति',
      shortDescription: 'शीर्ष कॉलेज और विश्वविद्यालय के छात्रों के लिए योग्यता छात्रवृत्ति।',
      benefits: ['स्नातक के लिए ₹12,000/वर्ष, स्नातकोत्तर के लिए ₹20,000/वर्ष'],
      department: 'उच्च शिक्षा विभाग',
      requiredDocuments: ['आधार कार्ड', '12वीं कक्षा की अंकतालिका', 'आय प्रमाणपत्र', 'बैंक पासबुक']
    },
    te: {
      name: 'పీఎం-యూఎస్‌పీ సెంట్రల్ సెక్టార్ స్కాలర్‌షిప్',
      shortDescription: 'మెరిట్ కళాశాల విద్యార్థుల కోసం స్కాలర్‌షిప్.',
      benefits: ['డిగ్రీకి ₹12,000/సంవత్సరం, పీజీకి ₹20,000/సంవత్సరం'],
      department: 'ఉన్నత విద్యా శాఖ',
      requiredDocuments: ['ఆధార్ కార్డు', '12వ తరగతి మార్కుల జాబితా', 'ఆదాయ ధృవీకరణ పత్రం', 'బ్యాంక్ పాస్‌బుక్']
    },
    kn: {
      name: 'ಪಿಎಂ-ಯುಎಸ್‌ಪಿ ಸೆಂಟ್ರಲ್ ಸೆಕ್ಟರ್ ಸ್ಕಾಲರ್‌ಶಿಪ್',
      shortDescription: 'ಪ್ರತಿಭಾವಂತ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿದ್ಯಾರ್ಥಿವೇತನ.',
      benefits: ['ಪದವಿಗೆ ವಾರ್ಷಿಕ ₹12,000, ಸ್ನಾತಕೋತ್ತರಕ್ಕೆ ₹20,000'],
      department: 'ಉನ್ನತ ಶಿಕ್ಷಣ ಇಲಾಖೆ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', '12ನೇ ತರಗತಿ ಅಂಕಪಟ್ಟಿ', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
    },
    ml: {
      name: 'പിഎം-യുഎസ്പി സെൻട്രൽ സെക്ടർ സ്കോളർഷിപ്പ്',
      shortDescription: 'മിടുക്കരായ കോളേജ് വിദ്യാർത്ഥികൾക്കുള്ള സ്കോളർഷിപ്പ്.',
      benefits: ['ബിരുദത്തിന് പ്രതിവർഷം ₹12,000, ബിരുദാനന്തര ബിരുദത്തിന് ₹20,000'],
      department: 'ഉന്നത വിദ്യാഭ്യാസ വകുപ്പ്',
      requiredDocuments: ['ആധാർ കാർഡ്', '12-ാം ക്ലാസ് മാർക്ക് ലിസ്റ്റ്', 'വരുമാന സർട്ടിഫിക്കറ്റ്', 'ബാങ്ക് പാസ്ബുക്ക്']
    }
  },
  'aicte-pragati-scholarship': {
    en: {
      name: 'AICTE Pragati Scholarship for Girl Students',
      shortDescription: '₹50,000/year assistance for girl students in technical degree/diploma courses.',
      benefits: ['₹50,000 per year of study for college fee, computer, software & books'],
      department: 'All India Council for Technical Education (AICTE)',
      requiredDocuments: ['Aadhaar Card', 'Admission Letter', 'AICTE Institute Bonafide', 'Income Certificate']
    },
    ta: {
      name: 'மாணவிகளுக்கான பிரகதி தொழில்நுட்ப கல்வி உதவித்தொகை',
      shortDescription: 'பொறியியல் மற்றும் தொழில்நுட்ப மாணவிகளுக்கு ஆண்டுக்கு ₹50,000 நிதியுதவி.',
      benefits: ['கல்லூரி கட்டணம் மற்றும் கணினி உபகரணங்களுக்கு ஆண்டுக்கு ₹50,000'],
      department: 'அகில இந்திய தொழில்நுட்பக் கல்விக் குழு (AICTE)',
      requiredDocuments: ['ஆதார் அட்டை', 'சேர்க்கை கடிதம்', 'கல்லூரி சான்றிதழ்', 'வருமானச் சான்றிதழ்']
    },
    hi: {
      name: 'छात्राओं के लिए प्रगति तकनीकी छात्रवृत्ति',
      shortDescription: 'तकनीकी डिग्री एवं डिप्लोमा छात्राओं के लिए ₹50,000 प्रति वर्ष सहायता।',
      benefits: ['कॉलेज शुल्क, कंप्यूटर और पुस्तकों के लिए ₹50,000 प्रति वर्ष'],
      department: 'अखिल भारतीय तकनीकी शिक्षा परिषद (AICTE)',
      requiredDocuments: ['आधार कार्ड', 'प्रवेश पत्र', 'संस्थान प्रमाणपत्र', 'आय प्रमाणपत्र']
    },
    te: {
      name: 'విద్యార్థినుల కోసం ప్రగతి సాంకేతిక స్కాలర్‌షిప్',
      shortDescription: 'ఇంజనీరింగ్ విద్యార్థినులకు సంవత్సరానికి ₹50,000 ఆర్థిక సహాయం.',
      benefits: ['కళాశాల ఫీజు మరియు కంప్యూటర్ కోసం సంవత్సరానికి ₹50,000'],
      department: 'ఆల్ ఇండియా కౌన్సిల్ ఫర్ టెక్నికల్ ఎడ్యుకేషన్',
      requiredDocuments: ['ఆధార్ కార్డు', 'అడ్మిషన్ లెటర్', 'కళాశాల ధృవీకరణ పత్రం', 'ఆదాయ ధృవీకరణ పత్రం']
    },
    kn: {
      name: 'ವಿದ್ಯಾರ್ಥಿನಿಯರಿಗೆ ಪ್ರಗತಿ ತಾಂತ್ರಿಕ ವಿದ್ಯಾರ್ಥಿವೇತನ',
      shortDescription: 'ತಾಂತ್ರಿಕ ಡಿಗ್ರಿ/ಡಿಪ್ಲೊಮಾ ವಿದ್ಯಾರ್ಥಿನಿಯರಿಗೆ ವಾರ್ಷಿಕ ₹50,000 ನೆರವು.',
      benefits: ['ಕಾಲೇಜು ಶುಲ್ಕ ಮತ್ತು ಕಂಪ್ಯೂಟರ್‌ಗಾಗಿ ವಾರ್ಷಿಕ ₹50,000'],
      department: 'ಅಖಿಲ ಭಾರತ ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣ ಮಂಡಳಿ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಪ್ರವೇಶ ಪತ್ರ', 'ಸಂಸ್ಥೆಯ ಪ್ರಮಾಣಪತ್ರ', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ']
    },
    ml: {
      name: 'വിദ്യാർത്ഥിനികൾക്കുള്ള പ്രഗതി സാങ്കേതിക സ്കോളർഷിപ്പ്',
      shortDescription: 'എഞ്ചിനീയറിംഗ് വിദ്യാർത്ഥിനികൾക്ക് പ്രതിവർഷം ₹50,000 ധനസഹായം.',
      benefits: ['കോളേജ് ഫീസിനും കമ്പ്യൂട്ടറിനുമായി പ്രതിവർഷം ₹50,000'],
      department: 'അഖിലേന്ത്യാ സാങ്കേതിക വിദ്യാഭ്യാസ കൗൺസിൽ',
      requiredDocuments: ['ആധാർ കാർഡ്', 'അഡ്മിഷൻ ലെറ്റർ', 'കോളേജ് സർട്ടിഫിക്കറ്റ്', 'വരുമാന സർട്ടിഫിക്കറ്റ്']
    }
  },
  'free-laptop-scheme': {
    en: {
      name: 'Student Digital Access Support (Laptop Scheme)',
      shortDescription: 'Free computing device distribution for meritorious college students.',
      benefits: ['Free laptop preloaded with educational software and warranty'],
      department: 'Special Programme Implementation & Higher Education',
      requiredDocuments: ['Aadhaar Card', 'Student ID Card', 'College Bonafide', 'Address Proof']
    },
    ta: {
      name: 'மாணவர் இலவச மடிக்கணினி திட்டம்',
      shortDescription: 'அரசு கல்லூரி மாணவர்களுக்கான இலவச மடிக்கணினி வழங்கும் திட்டம்.',
      benefits: ['கல்வி மென்பொருள்களுடன் கூடிய இலவச மடிக்கணினி மற்றும் உத்தரவாதம்'],
      department: 'சிறப்புத் திட்ட செயலாக்கத் துறை மற்றும் உயர்கல்வித் துறை',
      requiredDocuments: ['ஆதார் அட்டை', 'மாணவர் அடையாள அட்டை', 'கல்லூரி சான்றிதழ்', 'முகவரி சான்று']
    },
    hi: {
      name: 'छात्र डिजिटल पहुंच योजना (मुफ्त लैपटॉप)',
      shortDescription: 'कॉलेज छात्रों के लिए निःशुल्क लैपटॉप वितरण योजना।',
      benefits: ['शैक्षणिक सॉफ्टवेयर एवं वारंटी युक्त निःशुल्क लैपटॉप'],
      department: 'विशेष कार्यक्रम कार्यान्वयन एवं उच्च शिक्षा विभाग',
      requiredDocuments: ['आधार कार्ड', 'छात्र पहचान पत्र', 'कॉलेज प्रमाणपत्र', 'निवास प्रमाण पत्र']
    },
    te: {
      name: 'విద్యార్థి ఉచిత ల్యాప్‌టాప్ పథకం',
      shortDescription: 'కళాశాల విద్యార్థులకు ఉచిత ల్యాప్‌టాప్ పంపిణీ పథకం.',
      benefits: ['విద್ಯಾ సాఫ్ట్‌వేర్‌తో కూడిన ఉచిత ల్యాప్‌టాప్'],
      department: 'ఉన్నత విద్యా శాఖ',
      requiredDocuments: ['ఆధార్ కార్డు', 'విద్యార్థి గుర్తింపు కార్డు', 'కళాశాల ధృవీకరణ పత్రం', 'చిరునామా రుజువు']
    },
    kn: {
      name: 'ವಿದ್ಯಾರ್ಥಿ ಉಚಿತ ಲ್ಯಾಪ್‌ಟಾಪ್ ಯೋಜನೆ',
      shortDescription: 'ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಚಿತ ಲ್ಯಾಪ್‌ಟಾಪ್ ವಿತರಣಾ ಯೋಜನೆ.',
      benefits: ['ಶೈಕ್ಷಣಿಕ ಸಾಫ್ಟ್‌ವೇರ್ ಹೊಂದಿರುವ ಉಚಿತ ಲ್ಯಾಪ್‌ಟಾಪ್'],
      department: 'ಉನ್ನತ ಶಿಕ್ಷಣ ಇಲಾಖೆ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ವಿದ್ಯಾರ್ಥಿ ಗುರುತಿನ ಚೀಟಿ', 'ಕಾಲೇಜು ಪ್ರಮಾಣಪತ್ರ', 'ವಿಳಾಸ ಪುರಾವೆ']
    },
    ml: {
      name: 'വിദ്യാർത്ഥി സൗജന്യ ലാപ്ടോപ്പ് പദ്ധതി',
      shortDescription: 'കോളേജ് വിദ്യാർത്ഥികൾക്ക് സൗജന്യ ലാപ്ടോപ്പ് വിതരണ പദ്ധതി.',
      benefits: ['വിദ്യാഭ്യാസ സോഫ്റ്റ്‌വെയറുകൾ അടങ്ങിയ സൗജന്യ ലാപ്ടോപ്പ്'],
      department: 'ഉന്നത വിദ്യാഭ്യാസ വകുപ്പ്',
      requiredDocuments: ['ആധാർ കാർഡ്', 'വിദ്യാർത്ഥി തിരിച്ചറിയൽ കാർഡ്', 'കോളേജ് സർട്ടിഫിക്കറ്റ്', 'മേൽവിലാസ രേഖ']
    }
  },
  'pm-fasal-bima-yojana': {
    en: {
      name: 'PM Fasal Bima Yojana (Crop Insurance)',
      shortDescription: 'Comprehensive crop loss and damage protection.',
      benefits: ['Comprehensive insurance coverage against non-preventable natural risks'],
      department: 'Ministry of Agriculture & Farmers Welfare',
      requiredDocuments: ['Aadhaar Card', 'Land Records / Khasra', 'Sowing Certificate', 'Bank Passbook']
    },
    ta: {
      name: 'பிரதம மந்திரி பயிர் காப்பீட்டுத் திட்டம்',
      shortDescription: 'இயற்கை இடர்பாடுகளால் ஏற்படும் பயிர் இழப்பிற்கு முழு காப்பீடு.',
      benefits: ['வறட்சி, வெள்ளம் மற்றும் பூச்சித் தாக்குதலுக்கு முழுமையான இழப்பீடு'],
      department: 'விவசாய மற்றும் உழவர் நல அமைச்சகம்',
      requiredDocuments: ['ஆதார் அட்டை', 'நிலப் பட்டா / சிட்டா', 'விதைப்புச் சான்றிதழ்', 'வங்கி கணக்கு புத்தகம்']
    },
    hi: {
      name: 'प्रधानमंत्री फसल बीमा योजना',
      shortDescription: 'फसल नुकसान और प्राकृतिक आपदाओं के खिलाफ व्यापक सुरक्षा।',
      benefits: ['सूखा, बाढ़ और कीटों के नुकसान पर व्यापक बीमा कवर'],
      department: 'कृषि एवं किसान कल्याण मंत्रालय',
      requiredDocuments: ['आधार कार्ड', 'भूमि खसरा / खतौनी', 'बुवाई प्रमाणपत्र', 'बैंक पासबुक']
    },
    te: {
      name: 'పీఎం ఫసల్ బీమా యోజన',
      shortDescription: 'పంట నష్టం మరియు ప్రకృతి వైపరీత్యాల నుండి పూర్తి రక్షణ.',
      benefits: ['కరువు, వరదలు మరియు చీడపీడల వల్ల కలిగే నష్టానికి పరిహారం'],
      department: 'వ్యవసాయ మరియు రైతు సంక్షేమ మంత్రిత్వ శాఖ',
      requiredDocuments: ['ఆధార్ కార్డు', 'భూమి పట్టాదారు పాస్‌బుక్', 'విత్తన ధృవీకరణ పత్రం', 'బ్యాంక్ పాస్‌బుక్']
    },
    kn: {
      name: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆ',
      shortDescription: 'ಬೆಳೆ ಹಾನಿ ಮತ್ತು ನೈಸರ್ಗಿಕ ವಿಕೋಪಗಳ ವಿರುದ್ಧ ಸಮಗ್ರ ವಿಮೆ.',
      benefits: ['ಬರ, ಪ್ರವಾಹ ಮತ್ತು ಕೀಟ ಬಾಧೆಗೆ ಸಂಪೂರ್ಣ ವಿಮಾ ಪರಿಹಾರ'],
      department: 'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಭೂಮಿ ಪಹಣಿ / ಪಟ್ಟಾ', 'ಬಿತ್ತನೆ ಪ್ರಮಾಣಪತ್ರ', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
    },
    ml: {
      name: 'പ്രധാനമന്ത്രി ഫസൽ ഭീമ യോജന',
      shortDescription: 'വിളനാശത്തിനെതിരെയുള്ള സമഗ്ര കാർഷിക ഇൻഷുറൻസ്.',
      benefits: ['പ്രകൃതി ദുരന്തങ്ങൾ മൂലമുള്ള വിളനാശത്തിന് പൂർണ്ണ ഇൻഷുറൻസ് പരിരക്ഷ'],
      department: 'കൃഷി, കർഷക ക്ഷേമ മന്ത്രാലയം',
      requiredDocuments: ['ആധാർ കാർഡ്', 'ഭൂമി പട്ടയം', 'വിത്ത് വിതച്ച സർട്ടിഫിക്കറ്റ്', 'ബാങ്ക് പാസ്ബുക്ക്']
    }
  },
  'ignoaps-old-age-pension': {
    en: {
      name: 'Indira Gandhi Old Age Pension Scheme',
      shortDescription: 'Monthly pension for senior citizens below poverty line.',
      benefits: ['Monthly direct financial pension transferred to bank account'],
      department: 'Ministry of Rural Development',
      requiredDocuments: ['Aadhaar Card', 'Age Proof Certificate', 'BPL Ration Card', 'Bank Passbook']
    },
    ta: {
      name: 'இந்திரா காந்தி தேசிய முதியோர் ஓய்வூதியத் திட்டம்',
      shortDescription: 'வறுமைக் கோட்டிற்கு கீழ் உள்ள முதியோருக்கான மாதாந்திர ஓய்வூதியம்.',
      benefits: ['மாதந்தோறும் வங்கி கணக்கில் நேரடியாக செலுத்தப்படும் ஓய்வூதியம்'],
      department: 'ஊரக வளர்ச்சி அமைச்சகம்',
      requiredDocuments: ['ஆதார் அட்டை', 'வயதுச் சான்று', 'வறுமைக்கோட்டு குடும்ப அட்டை', 'வங்கி கணக்கு புத்தகம்']
    },
    hi: {
      name: 'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना',
      shortDescription: 'बीपीएल परिवारों के वरिष्ठ नागरिकों के लिए मासिक पेंशन।',
      benefits: ['प्रत्यक्ष बैंक खाते में मासिक पेंशन'],
      department: 'ग्रामीण विकास मंत्रालय',
      requiredDocuments: ['आधार कार्ड', 'आयु प्रमाण पत्र', 'बीपीएल राशन कार्ड', 'बैंक पासबुक']
    },
    te: {
      name: 'ఇందిరా గాంధీ జాతీయ వృద్ధాప్య పెన్షన్ పథకం',
      shortDescription: 'దారిద్య్రరేఖకు దిగువన ఉన్న వృద్ధులకు నెలవారీ పెన్షన్.',
      benefits: ['నెలనెలా నేరుగా బ్యాంక్ ఖాతాలో జమ అయ్యే పెన్షన్'],
      department: 'గ్రామీణాభివృద్ధి మంత్రిత్వ శాఖ',
      requiredDocuments: ['ఆధార్ కార్డు', 'వయస్సు ధృవీకరణ పత్రం', 'బీపీఎల్ రేషన్ కార్డు', 'బ్యాంక్ పాస్‌బుక్']
    },
    kn: {
      name: 'ಇಂದಿರಾ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ',
      shortDescription: 'ಬಿಪಿಎಲ್ ಕುಟುಂಬಗಳ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಮಾಸಿಕ ಪಿಂಚಣಿ.',
      benefits: ['ಪ್ರತಿ ತಿಂಗಳು ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆಯಾಗುವ ಪಿಂಚಣಿ'],
      department: 'ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ವಯಸ್ಸಿನ ಪುರಾವೆ', 'ಬಿಪಿಎಲ್ ರೇಷನ್ ಕಾರ್ಡ್', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
    },
    ml: {
      name: 'ഇന്ദിരാഗാന്ധി ദേശീയ വാർദ്ധക്യ പെൻഷൻ',
      shortDescription: 'ബിപിഎൽ കുടുംബങ്ങളിലെ മുതിർന്ന പൗരന്മാർക്കുള്ള പ്രതിമാസ പെൻഷൻ.',
      benefits: ['പ്രതിമാസം ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ട് എത്തുന്ന പെൻഷൻ'],
      department: 'ഗ്രാമവികസന മന്ത്രാലയം',
      requiredDocuments: ['ആധാർ കാർഡ്', 'വയസ്സ് തെളിയിക്കുന്ന രേഖ', 'ബിപിഎൽ റേഷൻ കാർഡ്', 'ബാങ്ക് പാസ്ബുക്ക്']
    }
  },
  'kisan-credit-card': {
    en: {
      name: 'Kisan Credit Card (KCC) Scheme',
      shortDescription: 'Institutional credit up to ₹3 Lakh at 4% subsidized interest rate for farm operations.',
      benefits: ['Subsidized 4% net interest rate upon prompt repayment', 'Collateral-free agricultural loan up to ₹1.60 Lakh', 'Revolving credit limit valid for 5 years'],
      department: 'NABARD & Department of Financial Services',
      requiredDocuments: ['Aadhaar Card', 'Land Title Document / Patta', 'Cropping Pattern Document', 'Bank Passbook']
    },
    ta: {
      name: 'கிசான் கடன் அட்டை (KCC) திட்டம்',
      shortDescription: 'விவசாயிகளுக்கு 4% மானிய வட்டியில் ₹3 லட்சம் வரை உடனடி பயிர்க்கடன் வழங்கும் திட்டம்.',
      benefits: ['சரியான நேரத்தில் திரும்பச் செலுத்தினால் 4% மட்டுமே மானிய வட்டி', '₹1.60 லட்சம் வரை பிணையம் இல்லாத கடன் வசதி', '5 ஆண்டுகள் செல்லுபடியாகும் தொடர் கடன் அட்டை'],
      department: 'நபார்டு & நிதிச் சேவைகள் துறை',
      requiredDocuments: ['ஆதார் அட்டை', 'நிலப் பட்டா / சிட்டா', 'பயிர் சாகுபடி சான்றிதழ்', 'வங்கி கணக்கு புத்தகம்']
    },
    hi: {
      name: 'किसान क्रेडिट कार्ड (KCC) योजना',
      shortDescription: 'कृषि कार्यों के लिए 4% रियायती ब्याज दर पर ₹3 लाख तक का संस्थागत ऋण।',
      benefits: ['समय पर भुगतान पर मात्र 4% प्रभावी ब्याज दर', '₹1.60 लाख तक बिना गारंटी के ऋण', '5 वर्ष की वैधता वाला लचीला क्रेडिट कार्ड'],
      department: 'नाबार्ड एवं वित्तीय सेवा विभाग',
      requiredDocuments: ['आधार कार्ड', 'भूमि खसरा / खतौनी', 'फसल बुवाई विवरण', 'बैंक पासबुक']
    },
    te: {
      name: 'కిసాన్ క్రెడిట్ కార్డు (KCC) పథకం',
      shortDescription: 'వ్యవసాయ పనుల కోసం 4% రాయితీ వడ్డీతో ₹3 లక్షల వరకు రుణం.',
      benefits: ['సకాలంలో చెల్లింపుపై కేవలం 4% రాయితీ వడ్డీ రేటు', '₹1.60 లక్షల వరకు పూచీకత్తు లేని రుణం', '5 సంవత్సరాల కాలపరిమితి కలిగిన క్రెడిట్ కార్డు'],
      department: 'నాబార్డ్ & ఆర్థిక సేవల శాఖ',
      requiredDocuments: ['ఆధార్ కార్డు', 'భూమి పట్టాదారు పాస్‌బుక్', 'పంట వివరాల పత్రం', 'బ్యాంక్ పాస్‌బుక్']
    },
    kn: {
      name: 'ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC) ಯೋಜನೆ',
      shortDescription: 'ಕೃಷಿ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ 4% ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರದಲ್ಲಿ ₹3 ಲಕ್ಷದವರೆಗೆ ಸಾಲ ಸೌಲಭ್ಯ.',
      benefits: ['ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮರುಪಾವತಿಸಿದರೆ ಕೇವಲ 4% ಬಡ್ಡಿದರ', '₹1.60 ಲಕ್ಷದವರೆಗೆ ಜಾಮೀನು ರಹಿತ ಸಾಲ', '5 ವರ್ಷಗಳ ಮಾನ್ಯತೆಯುಳ್ಳ ರಿವಾಲ್ವಿಂಗ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್'],
      department: 'ನಬಾರ್ಡ್ ಮತ್ತು ಹಣಕಾಸು ಸೇವೆಗಳ ಇಲಾಖೆ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಭೂಮಿ ಪಹಣಿ / ಪಟ್ಟಾ', 'ಬೆಳೆ ವಿವರ ಪ್ರಮಾಣಪತ್ರ', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
    },
    ml: {
      name: 'കിസാൻ ക്രെഡിറ്റ് കാർഡ് (KCC) പദ്ധതി',
      shortDescription: 'കാർഷിക ആവശ്യങ്ങൾക്കായി 4% സബ്‌സിഡി പലിശ നിരക്കിൽ ₹3 ലക്ഷം വരെ വായ്പ.',
      benefits: ['കൃത്യസമയത്ത് തിരിച്ചടച്ചാൽ വെറും 4% പലിശ നിരക്ക്', '₹1.60 ലക്ഷം വരെ ഈടില്ലാത്ത കാർഷിക വായ്പ', '5 വർഷത്തെ കാലാവധിയുള്ള ക്രെഡിറ്റ് കാർഡ്'],
      department: 'നബാർഡ് & ധനകാര്യ സേവന വകുപ്പ്',
      requiredDocuments: ['ആധാർ കാർഡ്', 'ഭൂമി പട്ടയം / കരം രസീത്', 'വിള വിവര സർട്ടിഫിക്കറ്റ്', 'ബാങ്ക് പാസ്ബുക്ക്']
    }
  },
  'pm-krishi-sinchayee-yojana': {
    en: {
      name: 'PMKSY — Per Drop More Crop (Micro Irrigation)',
      shortDescription: '55% to 75% subsidy on Drip and Sprinkler micro-irrigation installations.',
      benefits: ['55% to 75% financial assistance for micro irrigation equipment', 'Reduces water and electricity costs by up to 50%', 'Higher crop yields with precision fertigation'],
      department: 'Department of Agriculture & Farmers Welfare',
      requiredDocuments: ['Aadhaar Card', 'Land Record (Chitta / Patta)', 'Water Source Certificate', 'Soil & Water Test Report']
    },
    ta: {
      name: 'பிரதமர் நுண்ணீர்ப்பாசனத் திட்டம் (சொட்டு நீர் பாசனம்)',
      shortDescription: 'விவசாயிகளுக்கு சொட்டு நீர் மற்றும் தெளிப்பு நீர்ப்பாசனத்திற்கு 55% முதல் 100% வரை அரசு மானியம்.',
      benefits: ['சிறு/குறு விவசாயிகளுக்கு 55% முதல் 100% வரை நேரடி மானிய உதவி', 'நீர் மற்றும் மின்சார பயன்பாட்டில் 50% வரை சேமிப்பு', 'துல்லிய உரப்பாசனம் மூலம் அதிக மகசூல்'],
      department: 'வேளாண்மை மற்றும் உழவர் நலத்துறை',
      requiredDocuments: ['ஆதார் அட்டை', 'நிலப் பட்டா / சிட்டா', 'நீர் ஆதார சான்றிதழ்', 'மண் மற்றும் நீர் பரிசோதனை அறிக்கை']
    },
    hi: {
      name: 'प्रधानमंत्री कृषि सिंचाई योजना (सूक्ष्म सिंचाई)',
      shortDescription: 'ड्रिप एवं स्प्रिंकलर सिंचाई प्रणालियों पर 55% से 75% तक सरकारी सब्सिडी।',
      benefits: ['सूक्ष्म सिंचाई उपकरणों पर 55% से 75% तक वित्तीय अनुदान', 'पानी और बिजली की 50% तक बचत', 'सटीक उर्वरक उपयोग से बेहतर पैदावार'],
      department: 'कृषि एवं किसान कल्याण विभाग',
      requiredDocuments: ['आधार कार्ड', 'भूमि खतौनी / पट्टा', 'जल स्रोत प्रमाणपत्र', 'मृदा एवं जल परीक्षण रिपोर्ट']
    },
    te: {
      name: 'పీఎం కృషి సించాయి యోజన (బిందు సేద్యం)',
      shortDescription: 'డ్రిప్ మరియు స్ప్రింక్లర్ సూక్ష్మ సేద్య పరికరాలపై 55% నుండి 75% వరకు సబ్సిడీ.',
      benefits: ['చిన్న మరియు సన్నకారు రైతులకు 55% నుండి 75% సబ్సిడీ', 'నీరు మరియు విద్యుత్ వినియోగంలో 50% ఆదా', 'ఎరువుల సమర్థవంతమైన వినియోగంతో అధిక దిగుబడి'],
      department: 'వ్యవసాయ మరియు రైతు సంక్షేమ శాఖ',
      requiredDocuments: ['ఆధార్ కార్డు', 'భూమి పట్టాదారు పాస్‌బుక్', 'నీటి వనరు ధృవీకరణ పత్రం', 'నేల మరియు నీటి పరీక్ష నివేదిక']
    },
    kn: {
      name: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಕೃಷಿ ಸಿಂಚಾಯಿ ಯೋಜನೆ (ಹನಿ ನೀರಾವರಿ)',
      shortDescription: 'ಹನಿ ಮತ್ತು ತುಂತುರು ನೀರಾವರಿ ಸ್ಥಾಪನೆಗೆ ಶೇಕಡಾ 55% ರಿಂದ 75% ರವರೆಗೆ ಸಬ್ಸಿಡಿ.',
      benefits: ['ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ 55% ರಿಂದ 75% ಸಹಾಯಧನ', 'ನೀರು ಮತ್ತು ವಿದ್ಯುತ್ ಬಳಕೆಯಲ್ಲಿ 50% ಉಳಿತಾಯ', 'ನಿಖರ ಗೊಬ್ಬರ ಬಳಕೆಯಿಂದ ಹೆಚ್ಚಿನ ಇಳುವರಿ'],
      department: 'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಇಲಾಖೆ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಭೂಮಿ ಪಹಣಿ / ಪಟ್ಟಾ', 'ನೀರಿನ ಮೂಲದ ಪ್ರಮಾಣಪತ್ರ', 'ಮಣ್ಣು ಮತ್ತು ನೀರು ಪರೀಕ್ಷಾ ವರದಿ']
    },
    ml: {
      name: 'പ്രധാനമന്ത്രി കൃഷി സിഞ്ചായി യോജന (സൂക്ഷ്മ ജലസേചനം)',
      shortDescription: 'ഡ്രിപ്പ്, സ്പ്രിങ്ക്ലർ മൈക്രോ ഇറിഗേഷന് 55% മുതൽ 75% വരെ സർക്കാർ സബ്‌സിഡി.',
      benefits: ['സൂക്ഷ്മ ജലസേചന ഉപകരണങ്ങൾക്ക് 55% മുതൽ 75% വരെ സാമ്പത്തിക സഹായം', 'വെള്ളവും വൈദ്യുതിയും 50% വരെ ലാഭിക്കാം', 'കാര്യക്ഷമമായ വളപ്രയോഗത്തിലൂടെ ഉയർന്ന വിളവ്'],
      department: 'കൃഷി, കർഷക ക്ഷേമ വകുപ്പ്',
      requiredDocuments: ['ആധാർ കാർഡ്', 'ഭൂമി പട്ടയം / കരം രസീത്', 'ജലസ്രോതസ്സ് സർട്ടിഫിക്കറ്റ്', 'മണ്ണ്-ജല പരിശോധനാ റിപ്പോർട്ട്']
    }
  },
  'ayushman-bharat-senior-70': {
    en: {
      name: 'Ayushman Bharat PM-JAY (Senior 70+ Universal Cover)',
      shortDescription: 'Universal cashless health insurance of ₹5,00,000/yr for all senior citizens aged 70 and above.',
      benefits: ['₹5,00,000 annual cashless coverage irrespective of income', 'Instant Ayushman Vay Vandana Card via Aadhaar e-KYC', 'Covers pre-existing illnesses from Day 1 across 29,000+ empaneled hospitals'],
      department: 'National Health Authority (NHA), Ministry of Health',
      requiredDocuments: ['Aadhaar Card (Age 70+ Proof)', 'Aadhaar-Linked Mobile Number for OTP']
    },
    ta: {
      name: 'ஆயுஷ்மான் பாரத் (70+ மூத்த குடிமக்கள் மருத்துவக் காப்பீடு)',
      shortDescription: '70 வயதுக்கு மேற்பட்ட அனைத்து மூத்த குடிமக்களுக்கும் ஆண்டுக்கு ₹5 லட்சம் கட்டணமில்லா மருத்துவக் காப்பீடு.',
      benefits: ['வருமான வரம்பின்றி ஆண்டுக்கு ₹5 லட்சம் வரை முழு கட்டணமில்லா சிகிச்சை', 'ஆதார் மூலம் உடனடி ஆயுஷ்மான் வய வந்தனா கார்டு', 'முதல் நாளிலிருந்தே பழைய நோய்களுக்கும் 29,000+ மருத்துவமனைகளில் சிகிச்சை'],
      department: 'தேசிய சுகாதார ஆணையம் (NHA), சுகாதார அமைச்சகம்',
      requiredDocuments: ['ஆதார் அட்டை (வயது 70+ சான்று)', 'ஆதாருடன் இணைக்கப்பட்ட செல்போன் எண்']
    },
    hi: {
      name: 'आयुष्मान भारत (70+ वरिष्ठ नागरिक सार्वभौमिक स्वास्थ्य कवर)',
      shortDescription: '70 वर्ष और उससे अधिक आयु के सभी बुजुर्गों के लिए ₹5,00,000 प्रति वर्ष का निःशुल्क स्वास्थ्य बीमा।',
      benefits: ['बिना किसी आय सीमा के ₹5 लाख का कैशलेस अस्पताल उपचार', 'आधार ई-केवाईसी से तुरंत आयुष्मान वय वंदना कार्ड', 'पहले ही दिन से 29,000+ अस्पतालों में सभी पुरानी बीमारियों का मुफ्त इलाज'],
      department: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA), स्वास्थ्य मंत्रालय',
      requiredDocuments: ['आधार कार्ड (70+ आयु प्रमाण)', 'आधार लिंक मोबाइल नंबर']
    },
    te: {
      name: 'ఆయుష్మాన్ భారత్ (70+ వయోవృద్ధుల ఉచిత ఆరోగ్య బీమా)',
      shortDescription: '70 సంవత్సరాలు పైబడిన వృద్ధులందరికీ సంవత్సరానికి ₹5,00,000 ఉచిత నగదు రహిత చికిత్స.',
      benefits: ['ఆదాయ పరిమితి లేకుండా ప్రతి సంవత్సరం ₹5 లక్షల ఉచిత వైద్య చికిత్స', 'ఆధార్ ద్వారా తక్షణ ఆయుష్మాన్ వయ వందన కార్డ్', '29,000+ ఆసుపత్రులలో మొదటి రోజు నుంచే పూర్తి ఉచిత చికిత్స'],
      department: 'నేషనల్ హెల్త్ అథారిటీ (NHA), ఆరోగ్య మంత్రిత్వ శాఖ',
      requiredDocuments: ['ఆధార్ కార్డు (70+ వయస్సు రుజువు)', 'ఆధార్‌తో లింక్ అయిన మొబైల్ నంబర్']
    },
    kn: {
      name: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ (70+ ಹಿರಿಯ ನಾಗರಿಕರ ಸಾರ್ವತ್ರಿಕ ಆರೋಗ್ಯ ಯೋಜನೆ)',
      shortDescription: '70 ವರ್ಷ ಮತ್ತು ಮೇಲ್ಪಟ್ಟ ಎಲ್ಲಾ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ವಾರ್ಷಿಕ ₹5,00,000 ಉಚಿತ ನಗದು ರಹಿತ ಆರೋಗ್ಯ ವಿಮೆ.',
      benefits: ['ಆದಾಯ ಮಿತಿಯಿಲ್ಲದೆ ವಾರ್ಷಿಕ ₹5 ಲಕ್ಷದವರೆಗೆ ಉಚಿತ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ', 'ಆಧಾರ್ ಇ-ಕೆವೈಸಿ ಮೂಲಕ ತಕ್ಷಣ ಆಯುಷ್ಮಾನ್ ವಯ ವಂದನಾ ಕಾರ್ಡ್', '29,000+ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಮೊದಲ ದಿನದಿಂದಲೇ ಹಳೆಯ ಕಾಯಿಲೆಗಳಿಗೂ ಉಚಿತ ಚಿಕಿತ್ಸೆ'],
      department: 'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಪ್ರಾಧಿಕಾರ (NHA), ಆರೋಗ್ಯ ಸಚಿವಾಲಯ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್ (70+ ವಯಸ್ಸಿನ ಪುರಾವೆ)', 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ']
    },
    ml: {
      name: 'ആയുഷ്മാൻ ഭാരത് (70+ മുതിർന്ന പൗരന്മാർക്കുള്ള ആരോഗ്യ ഇൻഷുറൻസ്)',
      shortDescription: '70 വയസും അതിൽ കൂടുതലുമുള്ള എല്ലാ മുതിർന്ന പൗരന്മാർക്കും പ്രതിവർഷം ₹5,00,000 രൂപയുടെ സൗജന്യ ചികിത്സ.',
      benefits: ['വരുമാന പരിധിയില്ലാതെ പ്രതിവർഷം ₹5 ലക്ഷം രൂപ വരെയുള്ള സൗജന്യ ചികിത്സ', 'ആധാർ ഇ-കെവൈസി വഴി തൽക്ഷണം ആയുഷ്മാൻ വയ വന്ദന കാർഡ്', '29,000+ ആശുപത്രികളിൽ പഴയ രോഗങ്ങൾക്കും ആദ്യ ദിവസം മുതൽ പൂർണ്ണ ചികിത്സ'],
      department: 'ദേശീയ ആരോഗ്യ അതോറിറ്റി (NHA), ആരോഗ്യ മന്ത്രാലയം',
      requiredDocuments: ['ആധാർ കാർഡ് (70+ വയസ്സ് തെളിയിക്കുന്ന രേഖ)', 'ആധാർ ലിങ്ക് ചെയ്ത മൊബൈൽ നമ്പർ']
    }
  },
  'rashtriya-vayoshri-yojana': {
    en: {
      name: 'Rashtriya Vayoshri Yojana (RVY)',
      shortDescription: 'Free assisted living devices and physical aids for senior citizens with age-related disabilities.',
      benefits: ['Free high-grade walking sticks, walkers, wheelchairs & crutches', 'Free digital hearing aids, spectacles and artificial dentures', 'Doorstep fitting and lifetime maintenance assistance'],
      department: 'ALIMCO / Department of Empowerment of Persons with Disabilities',
      requiredDocuments: ['Aadhaar Card', 'Govt Medical Officer Disability Certificate', 'Income Certificate / BPL Card', 'Passport Photograph']
    },
    ta: {
      name: 'ராஷ்ட்ரிய வயோஸ்ரீ திட்டம் (முதியோர் உதவி உபகரணங்கள்)',
      shortDescription: 'மூத்த குடிமக்களுக்கான இலவச சக்கர நாற்காலிகள், காதொலி கருவிகள் மற்றும் உதவி உபகரணங்கள்.',
      benefits: ['இலவச உயர்தர ஊன்றுகோல், சக்கர நாற்காலி, நடை உதவிக் கருவிகள்', 'இலவச டிஜிட்டல் காதொலி கருவி, மூக்குக் கண்ணாடி & செயற்கைப் பற்கள்', 'வீட்டு வாசலிலேயே இலவசமாகப் பொருத்தித் தரும் சேவை'],
      department: 'அலிம்கோ (ALIMCO) & மாற்றுத்திறனாளிகள் நலத்துறை',
      requiredDocuments: ['ஆதார் அட்டை', 'அரசு மருத்துவர் மருத்துவச் சான்றிதழ்', 'வருமானச் சான்றிதழ் / குடும்ப அட்டை', 'புகைப்படம்']
    },
    hi: {
      name: 'राष्ट्रीय वयोश्री योजना (RVY सहायक उपकरण)',
      shortDescription: 'वरिष्ठ नागरिकों के लिए निःशुल्क व्हीलचेयर, श्रवण यंत्र एवं सहायक उपकरण वितरण योजना।',
      benefits: ['मुफ्त वॉकिंग स्टिक, बैसाखी, वॉकर और व्हीलचेयर', 'मुफ्त डिजिटल हियरिंग एड, चश्मे और कृत्रिम बत्तीसी', 'घर तक निःशुल्क फिटिंग और तकनीकी सहायता'],
      department: 'एलिम्को (ALIMCO) एवं दिव्यांगजन सशक्तिकरण विभाग',
      requiredDocuments: ['आधार कार्ड', 'सरकारी चिकित्सा अधिकारी प्रमाण पत्र', 'आय प्रमाणपत्र / बीपीएल कार्ड', 'पासपोर्ट फोटो']
    },
    te: {
      name: 'రాష్ట్రీయ వయోశ్రీ యోజన (సహాయక పరికరాలు)',
      shortDescription: 'వృద్ధుల కోసం ఉచిత వీల్‌చైర్లు, వినికిడి యంత్రాలు మరియు సహాయక పరికరాలు.',
      benefits: ['ఉచిత చేతికర్రలు, వాకర్లు, వీల్‌చైర్లు మరియు క్రచెస్', 'ఉచిత డిజిటల్ వినికిడి యంత్రాలు, కళ్లద్దాలు మరియు దంతాలు', 'ఇంటి వద్దకే ఉచిత అమరిక సదుపాయం'],
      department: 'అలింకో (ALIMCO) & వికలాంగుల సాధికారత శాఖ',
      requiredDocuments: ['ఆధార్ కార్డు', 'ప్రభుత్వ వైద్యుల సర్టిఫికేట్', 'ఆదాయ ధృవీకరణ పత్రం / రేషన్ కార్డు', 'పాస్‌పోర్ట్ ఫోటో']
    },
    kn: {
      name: 'ರಾಷ್ಟ್ರೀಯ ವಯೋಶ್ರೀ ಯೋಜನೆ (ಸಹಾಯೋಪಕರಣಗಳು)',
      shortDescription: 'ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಉಚಿತ ಗಾಲಿಕುರ್ಚಿ, ಶ್ರವಣ ಸಾಧನ ಮತ್ತು ದೈಹಿಕ ಸಹಾಯಕ ಉಪಕರಣಗಳ ವಿತರಣೆ.',
      benefits: ['ಉಚಿತ ವಾಕಿಂಗ್ ಸ್ಟಿಕ್, ವಾಕರ್ ಮತ್ತು ವೀಲ್‌ಚೇರ್', 'ಉಚಿತ ಡಿಜಿಟಲ್ ಶ್ರವಣ ಸಾಧನ, ಕನ್ನಡಕ ಮತ್ತು ಕೃತಕ ಹಲ್ಲುಗಳು', 'ಮನೆ ಬಾಗಿಲಿಗೆ ಉಚಿತ ಅಳವಡಿಕೆ ಸೌಲಭ್ಯ'],
      department: 'ಅಲಿಂಕೋ (ALIMCO) ಮತ್ತು ವಿಕಲಚೇತನರ ಸಬಲೀಕರಣ ಇಲಾಖೆ',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಸರ್ಕಾರಿ ವೈದ್ಯರ ಪ್ರಮಾಣಪತ್ರ', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ / ಬಿಪಿಎಲ್ ಕಾರ್ಡ್', 'ಭಾವಚಿತ್ರ']
    },
    ml: {
      name: 'രാഷ്ട്രീയ വയോശ്രീ യോജന (സഹായ ഉപകരണങ്ങൾ)',
      shortDescription: 'മുതിർന്ന പൗരന്മാർക്ക് സൗജന്യ വീൽചെയർ, ശ്രവണ സഹായി, ഉപകരണങ്ങൾ വിതരണം ചെയ്യുന്ന പദ്ധതി.',
      benefits: ['സൗജന്യ വാക്കിംഗ് സ്റ്റിക്ക്, വാക്കർ, വീൽചെയർ', 'സൗജന്യ ഡിജിറ്റൽ ശ്രവണ സഹായികൾ, കണ്ണടകൾ, കൃത്രിമ പല്ലുകൾ', 'വീട്ടുപടിക്കൽ സൗജന്യ ഫിറ്റിംഗ് സേവനം'],
      department: 'അലിംകോ (ALIMCO) & ഭിന്നശേഷി ശാക്തീകരണ വകുപ്പ്',
      requiredDocuments: ['ആധാർ കാർഡ്', 'സർക്കാർ മെഡിക്കൽ ഓഫീസർ സർട്ടിഫിക്കറ്റ്', 'വരുമാന സർട്ടിഫിക്കറ്റ് / റേഷൻ കാർഡ്', 'ഫോട്ടോ']
    }
  },
  'pm-vaya-vandana-yojana': {
    en: {
      name: 'Pradhan Mantri Vaya Vandana Yojana (PMVVY)',
      shortDescription: 'Guaranteed pension scheme for senior citizens offering assured 7.4% per annum return.',
      benefits: ['Assured 7.40% per annum return payable monthly for 10 years', 'Pension payout from ₹1,000 to ₹9,250/month backed by LIC of India', 'Loan facility up to 75% of purchase price available after 3 policy years'],
      department: 'Department of Financial Services / Life Insurance Corporation of India (LIC)',
      requiredDocuments: ['Aadhaar Card', 'PAN Card', 'Address Proof', 'Bank Passbook & Cancelled Cheque']
    },
    ta: {
      name: 'பிரதமர் வய வந்தனா திட்டம் (PMVVY உறுதிப்படுத்தப்பட்ட ஓய்வூதியம்)',
      shortDescription: 'எல்ஐசி மூலம் மூத்த குடிமக்களுக்கு 7.4% உறுதியான மாதாந்திர ஓய்வூதியம் வழங்கும் திட்டம்.',
      benefits: ['10 ஆண்டுகளுக்கு ஆண்டுக்கு 7.40% நிலையான மாதாந்திர வட்டி வருமானம்', 'மாதந்தோறும் ₹1,000 முதல் ₹9,250 வரை உறுதியான ஓய்வூதியம்', '3 ஆண்டுகளுக்குப் பிறகு 75% வரை கடன் பெறும் வசதி'],
      department: 'நிதிச் சேவைகள் துறை / இந்திய ஆயுள் காப்பீட்டுக் கழகம் (LIC)',
      requiredDocuments: ['ஆதார் அட்டை', 'பான் கார்டு', 'முகவரி சான்று', 'வங்கி கணக்கு புத்தகம்']
    },
    hi: {
      name: 'प्रधानमंत्री वय वंदना योजना (PMVVY गारंटीकृत पेंशन)',
      shortDescription: 'एलआईसी द्वारा संचालित वरिष्ठ नागरिकों के लिए 7.4% सुनिश्चित मासिक पेंशन योजना।',
      benefits: ['10 वर्षों के लिए 7.40% प्रति वर्ष की सुनिश्चित मासिक आय', 'एलआईसी द्वारा प्रतिमाह ₹1,000 से ₹9,250 तक सुरक्षित पेंशन', '3 साल बाद 75% तक ऋण सुविधा उपलब्ध'],
      department: 'वित्तीय सेवा विभाग / भारतीय जीवन बीमा निगम (LIC)',
      requiredDocuments: ['आधार कार्ड', 'पैन कार्ड', 'पते का प्रमाण', 'बैंक पासबुक']
    },
    te: {
      name: 'ప్రధాన మంత్రి వయ వందన యోజన (PMVVY గ్యారెంటీ పెన్షన్)',
      shortDescription: 'ఎల్‌ఐసీ ద్వారా వృద్ధులకు 7.4% గ్యారెంటీ నెలవారీ పెన్షన్ అందించే పథకం.',
      benefits: ['10 సంవత్సరాల పాటు 7.40% స్థిర నెలవారీ ఆదాయం', 'నెలకు ₹1,000 నుండి ₹9,250 వరకు సురక్షిత పెన్షన్', '3 సంవత్సరాల తర్వాత 75% వరకు రుణ సదుపాయం'],
      department: 'ఆర్థిక సేవల శాఖ / లైఫ్ ఇన్సూరెన్స్ కార్పొరేషన్ (LIC)',
      requiredDocuments: ['ఆధార్ కార్డు', 'పాన్ కార్డు', 'చిరునామా రుజువు', 'బ్యాంక్ పాస్‌బుక్']
    },
    kn: {
      name: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ವಯ ವಂದನಾ ಯೋಜನೆ (PMVVY ಖಾತರಿಯ ಪಿಂಚಣಿ)',
      shortDescription: 'ಎಲ್‌ಐಸಿ ಮೂಲಕ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ 7.4% ಖಾತರಿಯ ಮಾಸಿಕ ಪಿಂಚಣಿ ಯೋಜನೆ.',
      benefits: ['10 ವರ್ಷಗಳವರೆಗೆ ವಾರ್ಷಿಕ 7.40% ಖಾತರಿಯ ಮಾಸಿಕ ಆದಾಯ', 'ತಿಂಗಳಿಗೆ ₹1,000 ದಿಂದ ₹9,250 ವರೆಗೆ ಸುರಕ್ಷಿತ ಪಿಂಚಣಿ', '3 ವರ್ಷಗಳ ನಂತರ 75% ವರೆಗೆ ಸಾಲ ಸೌಲಭ್ಯ'],
      department: 'ಹಣಕಾಸು ಸೇವೆಗಳ ಇಲಾಖೆ / ಭಾರತೀಯ ಜೀವ ವಿಮಾ ನಿಗಮ (LIC)',
      requiredDocuments: ['ಆಧಾರ್ ಕಾರ್ಡ್', 'ಪ್ಯಾನ್ ಕಾರ್ಡ್', 'ವಿಳಾಸ ಪುರಾವೆ', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್']
    },
    ml: {
      name: 'പ്രധാനമന്ത്രി വയ വന്ദന യോജന (PMVVY ഉറപ്പുള്ള പെൻഷൻ)',
      shortDescription: 'എൽഐസി വഴി മുതിർന്ന പൗരന്മാർക്ക് 7.4% ഉറപ്പുള്ള പ്രതിമാസ പെൻഷൻ നൽകുന്ന പദ്ധതി.',
      benefits: ['10 വർഷത്തേക്ക് പ്രതിവർഷം 7.40% ഉറപ്പുള്ള പ്രതിമാസ വരുമാനം', 'പ്രതിമാസം ₹1,000 മുതൽ ₹9,250 വരെ സുരക്ഷിതമായ പെൻഷൻ', '3 വർഷത്തിന് ശേഷം 75% വരെ വായ്പാ സൗകര്യം'],
      department: 'ധനകാര്യ സേവന വകുപ്പ് / ലൈഫ് ഇൻഷുറൻസ് കോർപ്പറേഷൻ ഓഫ് ഇന്ത്യ (LIC)',
      requiredDocuments: ['ആധാർ കാർഡ്', 'പാൻ കാർഡ്', 'മേൽവിലാസ രേഖ', 'ബാങ്ക് പാസ്ബുക്ക്']
    }
  }
};

export interface LocalizedLegalRightContent {
  title: string;
  description: string;
  actOrBasis: string;
  keyEntitlements: string[];
  howToExercise: string;
}

export const LOCALIZED_RIGHTS: Record<string, Partial<Record<LanguageCode, LocalizedLegalRightContent>>> = {
  'student-capitation-fee-ban': {
    en: {
      title: 'Right Against Unlawful Capitation Fees & Retention of Certificates',
      description: 'Protection under UGC regulations and Prohibition of Capitation Fee Acts against unfair college practices.',
      actOrBasis: 'UGC Notification on Fee Refund & Prohibition of Capitation Fee Acts',
      keyEntitlements: [
        'Strict prohibition of capitation fees or unapproved donation charges',
        'Mandatory refund of tuition fee upon admission withdrawal within specified UGC timeframe',
        'Protection against withholding of original educational marksheets/certificates by institutions'
      ],
      howToExercise: 'Lodge grievances directly via National Consumer Helpline (1915) or UGC e-Samadhan portal.'
    },
    ta: {
      title: 'கல்விக் கட்டணச் சுரண்டல் மற்றும் சான்றிதழ் பறிமுதல் எதிர்ப்பு உரிமை',
      description: 'கல்லூரிகளில் கூடுதல் நன்கொடை வசூலிப்பது மற்றும் அசல் சான்றிதழ்களை முடக்கி வைப்பதற்கு எதிரான சட்டப் பாதுகாப்பு.',
      actOrBasis: 'பல்கலைக்கழக மானியக் குழு (UGC) விதிகள் & கட்டண ஒழுங்குமுறைச் சட்டம்',
      keyEntitlements: [
        'அங்கீகரிக்கப்படாத கூடுதல் நன்கொடை அல்லது கட்டணம் வசூலிக்க முழுமையான தடை',
        'சேர்க்கையை ரத்து செய்தால் குறிப்பிட்ட காலத்திற்குள் கல்விக் கட்டணத்தை முழுமையாக திரும்பப் பெறும் உரிமை',
        'கல்வி நிறுவனங்கள் மாணவர்களின் அசல் மதிப்பெண் சான்றிதழ்களை முடக்கி வைக்கத் தடை'
      ],
      howToExercise: 'தேசிய நுகர்வோர் உதவி எண் (1915) அல்லது UGC இ-சமாதான் குறைதீர்ப்பு தளம் மூலம் புகார் அளிக்கலாம்.'
    },
    hi: {
      title: 'अवैध डोनेशन एवं मूल प्रमाणपत्र रोके जाने के विरुद्ध अधिकार',
      description: 'यूजीसी नियमों के तहत अवैध फीस वसूली और मूल प्रमाणपत्र रोके जाने के खिलाफ कानूनी संरक्षण।',
      actOrBasis: 'यूजीसी शुल्क वापसी नियम एवं कैपिटेशन फीस निषेध अधिनियम',
      keyEntitlements: [
        'अनधिकृत डोनेशन या कैपिटेशन फीस पर पूर्ण प्रतिबंध',
        'प्रवेश रद्द करने पर निर्धारित समयावधि में शिक्षण शुल्क की अनिवार्य वापसी',
        'कॉलेज या संस्थान द्वारा मूल प्रमाणपत्र/अंकतालिका रोके जाने पर कानूनी रोक'
      ],
      howToExercise: 'राष्ट्रीय उपभोक्ता हेल्पलाइन (1915) या यूजीसी ई-समाधान पोर्टल पर सीधे शिकायत दर्ज करें।'
    },
    te: {
      title: 'అక్రమ విరాళాల వసూలు మరియు ధృవపత్రాల నిలిపివేత వ్యతిరేక హక్కు',
      description: 'కళాశాలల్లో అధిక ఫీజుల వసూలు మరియు అసలు సర్టిఫికేట్లను నిలిపివేయడంపై చట్టపరమైన రక్షణ.',
      actOrBasis: 'యూజీసీ ఫీజు రీఫండ్ నిబంధనలు & క్యాపిటేషన్ ఫీజు నిషేధ చట్టం',
      keyEntitlements: [
        'అనధికారిక డొనేషన్లు లేదా అదనపు ఫీజులపై పూర్తి నిషేధం',
        'అడ్మిషన్ రద్దు చేసుకున్నప్పుడు నిర్ణీత గడువులోగా ఫీజు రీఫండ్ పొందే హక్కు',
        'విద్యార్థుల అసలు మార్కుల జాబితాలు లేదా సర్టిఫికేట్లను కళాశాలలు నిలిపివేయరాదు'
      ],
      howToExercise: 'జాతీయ వినియోగదారుల హెల్ప్‌లైన్ (1915) లేదా యూజీసీ ఈ-సమాధాన్ పోర్టల్ ద్వారా ఫిర్యాదు చేయవచ్చు.'
    },
    kn: {
      title: 'ಅನಧಿಕೃತ ಶುಲ್ಕ ವಸೂಲಿ ಮತ್ತು ಮೂಲ ಪ್ರಮಾಣಪತ್ರ ತಡೆಹಿಡಿಯುವಿಕೆಯ ವಿರುದ್ಧದ ಹಕ್ಕು',
      description: 'ಕಾಲೇಜುಗಳಲ್ಲಿ ಅಕ್ರಮ ಡೊನೇಷನ್ ಮತ್ತು ಮೂಲ ಅಂಕಪಟ್ಟಿಗಳನ್ನು ತಡೆಹಿಡಿಯುವುದರ ವಿರುದ್ಧ ಕಾನೂನು ರಕ್ಷಣೆ.',
      actOrBasis: 'ಯುಜಿಸಿ ಶುಲ್ಕ ಮರುಪಾವತಿ ನಿಯಮಗಳು & ಕ್ಯಾಪಿಟೇಶನ್ ಶುಲ್ಕ ನಿಷೇಧ ಕಾಯ್ದೆ',
      keyEntitlements: [
        'ಅನಧಿಕೃತ ಡೊನೇಷನ್ ಅಥವಾ ಹೆಚ್ಚುವರಿ ಶುಲ್ಕ ವಸೂಲಿಗೆ ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಷೇಧ',
        'ಪ್ರವೇಶ ರದ್ದುಗೊಳಿಸಿದಲ್ಲಿ ನಿಗದಿತ ಅವಧಿಯೊಳಗೆ ಶುಲ್ಕ ಮರುಪಾವತಿ ಪಡೆಯುವ ಹಕ್ಕು',
        'ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳು ಮೂಲ ಅಂಕಪಟ್ಟಿ/ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ತಡೆಹಿಡಿಯುವುದಕ್ಕೆ ನಿಷೇಧ'
      ],
      howToExercise: 'ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ (1915) ಅಥವಾ ಯುಜಿಸಿ ಇ-ಸಮಾಧಾನ ಪೋರ್ಟಲ್ ಮೂಲಕ ದೂರು ಸಲ್ಲಿಸಿ.'
    },
    ml: {
      title: 'അനധികൃത ഫീസ് ഈടാക്കലിനും സർട്ടിഫിക്കറ്റ് തടഞ്ഞുവെക്കലിനുമെതിരെയുള്ള അവകാശം',
      description: 'കോളേജുകളിൽ അനധികൃത സംഭാവനകൾ വാങ്ങുന്നതിനും ഒറിജിനൽ സർട്ടിഫിക്കറ്റുകൾ തടഞ്ഞുവെക്കുന്നതിനുമെതിരെയുള്ള നിയമ സംരക്ഷണം.',
      actOrBasis: 'യുജിസി ഫീസ് റീഫണ്ട് ചട്ടങ്ങൾ & ക്യാപിറ്റേഷൻ ഫീസ് നിരോധന നിയമം',
      keyEntitlements: [
        'അനധികൃത ഡൊണേഷൻ അല്ലെങ്കിൽ ക്യാപിറ്റേഷൻ ഫീസ് വാങ്ങുന്നതിന് കർശന നിരോധനം',
        'അഡ്മിഷൻ റദ്ദാക്കിയാൽ നിശ്ചിത സമയത്തിനകം ഫീസ് തിരികെ ലഭിക്കാനുള്ള അവകാശം',
        'സ്ഥാപനങ്ങൾ ഒറിജിനൽ സർട്ടിഫിക്കറ്റുകൾ തടഞ്ഞുവെക്കാൻ പാടില്ല'
      ],
      howToExercise: 'ദേശീയ ഉപഭോക്തൃ ഹെൽപ്പ്‌ലൈൻ (1915) അല്ലെങ്കിൽ യുജിസി ഇ-സമാധാൻ പോർട്ടൽ വഴി പരാതി നൽകാം.'
    }
  },
  'student-travel-concession': {
    en: {
      title: 'Statutory Student Concession in Public Transit',
      description: 'Entitlement to subsidized travel passes across state bus corporations and Indian Railways.',
      actOrBasis: 'Ministry of Railways Tariff Rules & State Transport Acts',
      keyEntitlements: [
        'Up to 75% fare concession in Second Class for daily travel to recognized educational institutions',
        'Free or highly subsidized State RTC bus passes for government and aided school/college students',
        'Educational tour group travel concessions on Indian Railways'
      ],
      howToExercise: 'Apply via the institution principal or state road transport corporation pass portal.'
    },
    ta: {
      title: 'பொதுப் போக்குவரத்தில் மாணவர்களுக்கான சட்டப்பூர்வ பயணச் சலுகை',
      description: 'அரசு பேருந்துகள் மற்றும் இந்திய ரயில்வேயில் மாணவர்களுக்கான கட்டணச் சலுகை மற்றும் இலவச பேருந்து பயண உரிமை.',
      actOrBasis: 'இந்திய ரயில்வே விதிகள் & தமிழ்நாடு மாநில போக்குவரத்துக் கழகச் சட்டம்',
      keyEntitlements: [
        'பள்ளி மற்றும் கல்லூரி மாணவர்களுக்கு அரசு பேருந்துகளில் இலவச அல்லது கட்டணச் சலுகை பயண அட்டை',
        'அங்கீகரிக்கப்பட்ட கல்வி நிறுவனங்களுக்கு செல்ல இரண்டாம் வகுப்பு ரயில்களில் 75% வரை கட்டணச் சலுகை',
        'கல்விச் சுற்றுலா செல்லும் மாணவர் குழுக்களுக்கு ரயில்வே கட்டணச் சலுகை'
      ],
      howToExercise: 'கல்வி நிறுவன முதல்வர் மூலமாக அல்லது அரசு போக்குவரத்துக் கழக இணையதளம் வழியாக விண்ணப்பிக்கலாம்.'
    },
    hi: {
      title: 'सार्वजनिक परिवहन में छात्रों के लिए वैधानिक रियायत',
      description: 'राज्य बस निगमों और भारतीय रेलवे में रियायती और मुफ्त यात्रा पास का कानूनी अधिकार।',
      actOrBasis: 'रेलवे टैरिफ नियम एवं राज्य सड़क परिवहन अधिनियम',
      keyEntitlements: [
        'मान्यता प्राप्त संस्थानों में दैनिक यात्रा के लिए द्वितीय श्रेणी में 75% तक की छूट',
        'सरकारी और सहायता प्राप्त स्कूल/कॉलेज छात्रों के लिए निःशुल्क या रियायती बस पास',
        'शैक्षणिक भ्रमण के लिए समूह यात्रा पर रेलवे में विशेष छूट'
      ],
      howToExercise: 'संस्थान के प्रधानाचार्य के माध्यम से या राज्य परिवहन पास पोर्टल पर आवेदन करें।'
    },
    te: {
      title: 'ప్రజా రవాణాలో విద్యార్థులకు చట్టబద్ధ ప్రయాణ రాయితీ',
      description: 'ఆర్టీసీ బస్సులు మరియు భారతీయ రైల్వేలలో రాయితీ లేదా ఉచిత బస్సు పాస్ పొందే హక్కు.',
      actOrBasis: 'రైల్వే టారిఫ్ రూల్స్ & రాష్ట్ర రవాణా చట్టాలు',
      keyEntitlements: [
        'గుర్తింపు పొందిన విద్యాసంస్థలకు వెళ్లే విద్యార్థులకు రైలు ఛార్జీలలో 75% వరకు రాయితీ',
        'ప్రభుత్వ పాఠశాలలు మరియు కళాశాల విద్యార్థులకు ఉచిత లేదా రాయితీ బస్సు పాసులు',
        'విద్యా పర్యటనలకు వెళ్లే విద్యార్థి బృందాలకు ప్రత్యేక రైల్వే రాయితీలు'
      ],
      howToExercise: 'విద్యాసంస్థ ప్రిన్సిపాల్ ద్వారా లేదా ఆర్టీసీ బస్ పాస్ పోర్టల్ ద్వారా దరఖాస్తు చేసుకోవచ్చు.'
    },
    kn: {
      title: 'ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆಯಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶಾಸನಬದ್ಧ ಪ್ರಯಾಣ ರಿಯಾಯಿತಿ',
      description: 'ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ಬಸ್‌ಗಳು ಮತ್ತು ಭಾರತೀಯ ರೈಲ್ವೆಯಲ್ಲಿ ಉಚಿತ ಅಥವಾ ರಿಯಾಯಿತಿ ಪಾಸ್ ಪಡೆಯುವ ಹಕ್ಕು.',
      actOrBasis: 'ರೈಲ್ವೆ ಸುಂಕ ನಿಯಮಗಳು & ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ಕಾಯ್ದೆ',
      keyEntitlements: [
        'ಮಾನ್ಯತೆ ಪಡೆದ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಿಗೆ ಪ್ರಯಾಣಿಸಲು ರೈಲ್ವೆ ದರದಲ್ಲಿ 75% ವರೆಗೆ ರಿಯಾಯಿತಿ',
        'ಶಾಲಾ-ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಚಿತ ಅಥವಾ ಅತ್ಯಂತ ರಿಯಾಯಿತಿ ದರದ ಬಸ್ ಪಾಸ್',
        'ಶೈಕ್ಷಣಿಕ ಪ್ರವಾಸಕ್ಕೆ ತೆರಳುವ ವಿದ್ಯಾರ್ಥಿ ತಂಡಗಳಿಗೆ ರೈಲ್ವೆ ರಿಯಾಯಿತಿ'
      ],
      howToExercise: 'ಸಂಸ್ಥೆಯ ಮುಖ್ಯಸ್ಥರ ಮೂಲಕ ಅಥವಾ ಸಾರಿಗೆ ನಿಗಮದ ಪಾಸ್ ಪೋರ್ಟಲ್ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
    },
    ml: {
      title: 'പൊതുഗതാഗതത്തിൽ വിദ്യാർത്ഥികൾക്കുള്ള നിയമപരമായ യാത്രാ ഇളവ്',
      description: 'കെ.എസ്.ആർ.ടി.സി ബസുകളിലും ഇന്ത്യൻ റെയിൽവേയിലും ഇളവുകളോടെയുള്ള യാത്രാ പാസ് ലഭിക്കാനുള്ള അവകാശം.',
      actOrBasis: 'റെയിൽവേ താരിഫ് ചട്ടങ്ങൾ & സംസ്ഥാന ഗതാഗത നിയമം',
      keyEntitlements: [
        'അംഗീകൃത വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിലേക്കുള്ള യാത്രയ്ക്ക് ട്രെയിൻ ടിക്കറ്റിൽ 75% വരെ ഇളവ്',
        'സ്കൂൾ, കോളേജ് വിദ്യാർത്ഥികൾക്ക് ബസുകളിൽ സൗജന്യ അല്ലെങ്കിൽ ഇളവോടെയുള്ള കൺസെഷൻ പാസ്',
        'വിദ്യാഭ്യാസ ടൂറുകൾക്ക് പോകുന്ന വിദ്യാർത്ഥി സംഘങ്ങൾക്ക് റെയിൽവേ യാത്രാ ഇളവ്'
      ],
      howToExercise: 'സ്ഥാപന മേധാവി മുഖേനയോ ട്രാൻസ്പോർട്ട് കോർപ്പറേഷൻ പോർട്ടൽ വഴിയോ അപേക്ഷിക്കുക.'
    }
  },
  'farmer-mandi-msp-rights': {
    en: {
      title: 'Fair Weighment & Prompt Payment Entitlement at APMC Mandis',
      description: 'Statutory right to receive computerized weighment receipts and prompt payment within 24–72 hours of produce sale.',
      actOrBasis: 'State Agricultural Produce Market Committee (APMC) Acts & e-NAM Rules',
      keyEntitlements: [
        'Zero deduction of unauthorized market commission or brokerage fees from farmers',
        'Compulsory computerized weightment slips at APMC checkposts',
        'Direct online settlement into farmer bank accounts via e-NAM national portal'
      ],
      howToExercise: 'Report unauthorized commission or delayed payment to the APMC Mandi Secretary or Kisan Call Centre (1800-180-1551).'
    },
    ta: {
      title: 'ஒழுங்குமுறை விற்பனைக் கூடங்களில் சரியான எடைக் குறிப்பு மற்றும் உடனடி பணப்பட்டுவாடா உரிமை',
      description: 'விவசாய விளைபொருட்களை விற்கும்போது கமிஷன் பிடித்தம் இன்றி 24 முதல் 72 மணி நேரத்திற்குள் பணம் பெறும் சட்டப்பூர்வ உரிமை.',
      actOrBasis: 'மாநில வேளாண்மை விளைபொருள் சந்தைக் குழுச் சட்டம் & இ-நாம் (e-NAM) விதிகள்',
      keyEntitlements: [
        'விவசாயிகளிடம் இருந்து சட்டவிரோத கமிஷன் அல்லது தரகு கட்டணம் வசூலிக்க முழுத் தடை',
        'விற்பனைக் கூடங்களில் கணினிமயமாக்கப்பட்ட சரியான எடை ரசீது கட்டாயம்',
        'இ-நாம் தேசிய தளம் மூலம் விவசாயிகளின் வங்கி கணக்கில் நேரடியாக பணப்பரிவர்த்தனை'
      ],
      howToExercise: 'ஒழுங்குமுறை விற்பனைக்கூட செயலாளர் அல்லது கிசான் உதவி எண் (1800-180-1551) மூலம் புகார் அளிக்கலாம்.'
    },
    hi: {
      title: 'कृषि उपज मंडियों में सही तौल एवं त्वरित भुगतान का अधिकार',
      description: 'फसल बिक्री के 24 से 72 घंटों के भीतर कम्प्यूटरीकृत तौल पर्ची और पूर्ण भुगतान प्राप्त करने का वैधानिक अधिकार।',
      actOrBasis: 'कृषि उपज मंडी समिति (APMC) अधिनियम एवं ई-नाम नियमावली',
      keyEntitlements: [
        'किसानों से किसी भी प्रकार की अनधिकृत आढ़त या दलाली कटौती पर पूर्ण रोक',
        'मंडी चौकियों पर अनिवार्य कम्प्यूटरीकृत तौल पर्ची',
        'ई-नाम पोर्टल के माध्यम से सीधे बैंक खाते में ऑनलाइन भुगतान'
      ],
      howToExercise: 'मंडी सचिव या किसान कॉल सेंटर (1800-180-1551) पर शिकायत दर्ज करें।'
    },
    te: {
      title: 'వ్యవసాయ మార్కెట్లలో సరైన తూకం మరియు త్వరిత చెల్లింపు పొందే హక్కు',
      description: 'పంట విక్రయించిన 24 నుండి 72 గంటలలోపు కంప్యూటరైజ్డ్ తూకం రసీదు మరియు పూర్తి చెల్లింపు పొందే చట్టబద్ధ హక్కు.',
      actOrBasis: 'వ్యవసాయ మార్కెట్ కమిటీ (APMC) చట్టాలు & ఈ-నామ్ నిబంధనలు',
      keyEntitlements: [
        'రైతుల నుండి అనధికారిక కమీషన్ లేదా దళారీ రుసుము వసూలుపై పూర్తి నిషేధం',
        'మార్కెట్ యార్డులలో తప్పనిసరి కంప్యూటరైజ్డ్ తూకం రసీదులు',
        'ఈ-నామ్ పోర్టల్ ద్వారా నేరుగా బ్యాంక్ ఖాతాలో ఆన్‌లైన్ చెల్లింపు'
      ],
      howToExercise: 'మార్కెట్ కమిటీ సెక్రటరీ లేదా కిసాన్ కాల్ సెంటర్ (1800-180-1551) లో ఫిర్యాదు చేయవచ్చు.'
    },
    kn: {
      title: 'ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಸರಿಯಾದ ತೂಕ ಮತ್ತು ತ್ವರಿತ ಹಣ ಪಾವತಿ ಹಕ್ಕು',
      description: 'ಬೆಳೆ ಮಾರಾಟವಾದ 24 ರಿಂದ 72 ಗಂಟೆಗಳಲ್ಲಿ ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕದ ರಸೀದಿ ಮತ್ತು ಹಣ ಪಡೆಯುವ ಶಾಸನಬದ್ಧ ಹಕ್ಕು.',
      actOrBasis: 'ಕೃಷಿ ಉತ್ಪನ್ನ ಮಾರುಕಟ್ಟೆ ಸಮಿತಿ (APMC) ಕಾಯ್ದೆ & ಇ-ನ್ಯಾಮ್ ನಿಯಮಗಳು',
      keyEntitlements: [
        'ರೈತರಿಂದ ಯಾವುದೇ ಅನಧಿಕೃತ ಕಮಿಷನ್ ಅಥವಾ ದಲ್ಲಾಳಿ ಶುಲ್ಕ ಕಡಿತಕ್ಕೆ ನಿಷೇಧ',
        'ಎಪಿಎಂಸಿ ಯಾರ್ಡ್‌ಗಳಲ್ಲಿ ಕಡ್ಡಾಯ ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕದ ರಸೀದಿ',
        'ಇ-ನ್ಯಾಮ್ ಪೋರ್ಟಲ್ ಮೂಲಕ ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಆನ್‌ಲೈನ್ ಪಾವತಿ'
      ],
      howToExercise: 'ಎಪಿಎಂಸಿ ಕಾರ್ಯದರ್ಶಿ ಅಥವಾ ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್ (1800-180-1551) ಗೆ ದೂರು ಸಲ್ಲಿಸಿ.'
    },
    ml: {
      title: 'കാർഷിക വിപണികളിൽ കൃത്യമായ തൂക്കവും ഉടനടി പണവും ലഭിക്കാനുള്ള അവകാശം',
      description: 'വിളവുകൾ വിൽക്കുമ്പോൾ കമ്മീഷൻ കിഴിവുകളില്ലാതെ 24 മുതൽ 72 മണിക്കൂറിനുള്ളിൽ പണം ലഭിക്കാനുള്ള നിയമപരമായ അവകാശം.',
      actOrBasis: 'കാർഷിക ഉൽപ്പന്ന വിപണന സമിതി നിയമങ്ങൾ & ഇ-നാം ചട്ടങ്ങൾ',
      keyEntitlements: [
        'കർഷകരിൽ നിന്ന് അനാവശ്യ കമ്മീഷനോ ബ്രോക്കറേജ് തുകയോ ഈടാക്കുന്നത് നിരോധിച്ചിരിക്കുന്നു',
        'മാർക്കറ്റുകളിൽ നിർബന്ധിത കമ്പ്യൂട്ടറൈസ്ഡ് തൂക്ക രസീതുകൾ',
        'ഇ-നാം പോർട്ടൽ വഴി നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക് പണം ലഭിക്കൽ'
      ],
      howToExercise: 'മാർക്കറ്റ് സെക്രട്ടറി അല്ലെങ്കിൽ കിസാൻ കോൾ സെന്റർ (1800-180-1551) വഴി പരാതി നൽകാം.'
    }
  },
  'farmer-land-title-protection': {
    en: {
      title: 'Right to Certified Land Title & Protection from Arbitrary Eviction',
      description: 'Right to receive updated Patta/Chitta documents and protection of agricultural tenancy rights.',
      actOrBasis: 'State Land Revenue Codes & Digital India Land Records Modernization Programme',
      keyEntitlements: [
        'Right to download digitally signed record of rights within 15 days of survey mutation',
        'Protection against attachment of minimum agricultural land or farm implements in recovery suits',
        'Notice and fair compensation in case of public land acquisition'
      ],
      howToExercise: 'Access digital land records via state e-District / Tamil Nilam portals.'
    },
    ta: {
      title: 'சான்றளிக்கப்பட்ட நிலப் பட்டா உரிமை மற்றும் நிலப் பாதுகாப்பு',
      description: 'முறையான நிலப் பட்டா/சிட்டா பெறுவதற்கும், அத்துமீறி நிலம் கையகப்படுத்தப்படுவதைத் தடுப்பதற்குமான சட்ட உரிமை.',
      actOrBasis: 'மாநில நில வருவாய்ச் சட்டம் & நில ஆவணங்கள் நவீனமயமாக்கல் திட்டம்',
      keyEntitlements: [
        'நில அளவை மற்றும் உட்பிரிவுக்குப் பிறகு 15 நாட்களுக்குள் டிஜிட்டல் கையொப்பமிட்ட பட்டா பெறும் உரிமை',
        'கடன் மீட்பு நடவடிக்கைகளின் போது விவசாயியின் குறைந்தபட்ச நிலம் அல்லது விவசாய உபகரணங்களைப் பறிமுதல் செய்யத் தடை',
        'பொது நிலம் கையகப்படுத்தப்பட்டால் உரிய அறிவிப்பு மற்றும் நியாயமான இழப்பீடு பெறும் உரிமை'
      ],
      howToExercise: 'தமிழ் நிலம் அல்லது இ-சேவை இணையதளம் வழியாக டிஜிட்டல் நில ஆவணங்களைப் பெறலாம்.'
    },
    hi: {
      title: 'प्रमाणित भू-अभिलेख एवं भूमि बेदखली से सुरक्षा का अधिकार',
      description: 'डिजिटल खसरा/खतौनी प्राप्त करने एवं मनमाने ढंग से कृषि भूमि छीने जाने से कानूनी सुरक्षा।',
      actOrBasis: 'राज्य भू-राजस्व संहिता एवं डिजिटल इंडिया भू-अभिलेख कार्यक्रम',
      keyEntitlements: [
        'दाखिल-खारिज के 15 दिनों के भीतर डिजिटल हस्ताक्षरित खतौनी प्राप्त करने का अधिकार',
        'ऋण वसूली मामलों में आवश्यक कृषि भूमि या कृषि उपकरणों की कुर्की पर रोक',
        'सार्वजनिक भूमि अधिग्रहण की स्थिति में उचित नोटिस एवं कानूनी मुआवजा पाने का अधिकार'
      ],
      howToExercise: 'राज्य भू-अभिलेख पोर्टल या ई-डिस्ट्रिक्ट पोर्टल के माध्यम से रिकॉर्ड प्राप्त करें।'
    },
    te: {
      title: 'ధృవీకరించిన భూమి హక్కు పత్రం మరియు భూ రక్షణ హక్కు',
      description: 'డిజిటల్ పట్టాదారు పాస్‌బుక్ పొందే హక్కు మరియు అక్రమ భూ సేకరణ నుండి రక్షణ.',
      actOrBasis: 'భూ రెవెన్యూ చట్టాలు & డిజిటల్ ల్యాండ్ రికార్డ్స్ ప్రోగ్రామ్',
      keyEntitlements: [
        'మ్యుటేషన్ జరిగిన 15 రోజుల్లోపు డిజిటల్ సంతకం చేసిన పట్టాదారు పాస్‌బుక్ పొందే హక్కు',
        'రుణ వసూళ్లలో కనీస వ్యవసాయ భూమి లేదా పనిముట్లను జప్తు చేయకుండా రక్షణ',
        'ప్రభుత్వ భూ సేకరణ జరిగితే సరైన నోటీసు మరియు పరిహారం పొందే హక్కు'
      ],
      howToExercise: 'ధరణి లేదా మీ-సేవ పోర్టల్ ద్వారా డిజిటల్ భూ రికార్డులను పొందవచ్చు.'
    },
    kn: {
      title: 'ದೃಢೀಕೃತ ಭೂ ಮಾಲೀಕತ್ವ ಹಕ್ಕು ಮತ್ತು ಒಕ್ಕಲೆಬ್ಬಿಸುವಿಕೆಯ ವಿರುದ್ಧ ರಕ್ಷಣೆ',
      description: 'ಡಿಜಿಟಲ್ ಪಹಣಿ/ಪಟ್ಟಾ ಪಡೆಯುವ ಹಕ್ಕು ಮತ್ತು ಕೃಷಿ ಭೂಮಿಯ ಶಾಸನಬದ್ಧ ರಕ್ಷಣೆ.',
      actOrBasis: 'ರಾಜ್ಯ ಭೂ ಕಂದಾಯ ಕಾಯ್ದೆ & ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ ಭೂ ದಾಖಲೆಗಳ ಯೋಜನೆ',
      keyEntitlements: [
        'ಖಾತಾ ಬದಲಾವಣೆಯಾದ 15 ದಿನಗಳಲ್ಲಿ ಡಿಜಿಟಲ್ ಸಹಿ ಹೊಂದಿದ ಪಹಣಿ ಪಡೆಯುವ ಹಕ್ಕು',
        'ಸಾಲ ವಸೂಲಾತಿ ಪ್ರಕರಣಗಳಲ್ಲಿ ಅಗತ್ಯ ಕೃಷಿ ಭೂಮಿ ಅಥವಾ ಉಪಕರಣಗಳನ್ನು ಜಪ್ತಿ ಮಾಡದಂತೆ ರಕ್ಷಣೆ',
        'ಭೂಸ್ವಾಧೀನ ಸಂದರ್ಭದಲ್ಲಿ ಸೂಕ್ತ ನೋಟಿಸ್ ಮತ್ತು ನ್ಯಾಯಯುತ ಪರಿಹಾರ ಪಡೆಯುವ ಹಕ್ಕು'
      ],
      howToExercise: 'ಭೂಮಿ ಪೋರ್ಟಲ್ ಅಥವಾ ಇ-ಕಂದಾಯ ವೆಬ್‌ಸೈಟ್ ಮೂಲಕ ದಾಖಲೆಗಳನ್ನು ಪಡೆಯಿರಿ.'
    },
    ml: {
      title: 'സാക്ഷ്യപ്പെടുത്തിയ ഭൂ ഉടമസ്ഥാവകാശവും കുടിയൊഴിപ്പിക്കലിനെതിരെയുള്ള സംരക്ഷണവും',
      description: 'ഡിജിറ്റൽ പട്ടയം ലഭിക്കാനും നിയമവിരുദ്ധമായ ഒഴിപ്പിക്കലുകളിൽ നിന്ന് സംരക്ഷണം നേടാനുമുള്ള അവകാശം.',
      actOrBasis: 'ഭൂ റവന്യൂ നിയമങ്ങൾ & ഡിജിറ്റൽ ലാൻഡ് റെക്കോർഡ്സ് പ്രോഗ്രാം',
      keyEntitlements: [
        'പോക്കുവരവ് പൂർത്തിയായി 15 ദിവസത്തിനകം ഡിജിറ്റൽ ഒപ്പുള്ള പട്ടയം ലഭിക്കാനുള്ള അവകാശം',
        'വായ്പ തിരിച്ചുപിടിക്കൽ നടപടികളിൽ കർഷകന്റെ കൃഷിഭൂമിയോ ഉപകരണങ്ങളോ ജപ്തി ചെയ്യുന്നതിൽ നിന്നുള്ള സംരക്ഷണം',
        'ഭൂമി ഏറ്റെടുക്കൽ ഉണ്ടായാൽ ന്യായമായ നഷ്ടപരിഹാരം ലഭിക്കാനുള്ള അവകാശം'
      ],
      howToExercise: 'ഇ-രേഖകൾ പോർട്ടൽ അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രങ്ങൾ വഴി രേഖകൾ ലഭ്യമാക്കുക.'
    }
  },
  'senior-maintenance-act': {
    en: {
      title: 'Statutory Maintenance & Property Protection Rights',
      description: 'Legal right to claim maintenance from adult children/heirs and revoke conditional property transfers in case of neglect.',
      actOrBasis: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007',
      keyEntitlements: [
        'Right to monthly maintenance allowance up to ₹10,000/month ordered by the Maintenance Tribunal',
        'Summary tribunal proceedings completed within 90 days without requiring expensive advocates',
        'Section 23 power: Automatic voiding of property deed gifted to children if they fail to provide basic physical needs'
      ],
      howToExercise: 'Submit an application to the Sub-Divisional Magistrate (SDM) / Revenue Divisional Officer (RDO) or dial National Elderline at 14567.'
    },
    ta: {
      title: 'மூத்த குடிமக்கள் மாதாந்திர பராமரிப்பு மற்றும் சொத்துப் பாதுகாப்புச் சட்டம்',
      description: 'பிள்ளைகள் பராமரிக்கத் தவறினால் தானமாக வழங்கிய சொத்தை ரத்து செய்யவும், மாதாந்திர ஜீவனாம்சம் பெறவும் உள்ள சட்ட உரிமை.',
      actOrBasis: 'பெற்றோர் மற்றும் மூத்த குடிமக்கள் பராமரிப்பு மற்றும் நலச் சட்டம், 2007',
      keyEntitlements: [
        'பராமரிப்புத் தீர்ப்பாயம் மூலம் பிள்ளைகளிடமிருந்து மாதாந்திர ஜீவனாம்சம் பெறும் உரிமை',
        'வழக்கறிஞர் இன்றி 90 நாட்களுக்குள் தீர்ப்பாயத்தில் விரைவான நீதி பெறும் வசதி',
        'பிரிவு 23: பெற்றோரைப் பராமரிக்கத் தவறினால் பிள்ளைகளுக்கு எழுதிக்கொடுத்த சொத்துப் பத்திரத்தை ரத்து செய்யும் அதிகாரம்'
      ],
      howToExercise: 'வருவாய் கோட்டாட்சியரிடம் (RDO) மனு அளிக்கலாம் அல்லது தேசிய முதியோர் உதவி எண் 14567-ஐ அழைக்கலாம்.'
    },
    hi: {
      title: 'वरिष्ठ नागरिक भरण-पोषण एवं संपत्ति संरक्षण अधिकार',
      description: 'संतानों द्वारा उपेक्षा करने पर भरण-पोषण भत्ता प्राप्त करने एवं दी गई संपत्ति का हस्तांतरण रद्द करने का कानूनी अधिकार।',
      actOrBasis: 'माता-पिता एवं वरिष्ठ नागरिक भरण-पोषण एवं कल्याण अधिनियम, 2007',
      keyEntitlements: [
        'भरण-पोषण न्यायाधिकरण के माध्यम से मासिक भरण-पोषण भत्ता पाने का अधिकार',
        'बिना वकील के 90 दिनों के भीतर न्यायाधिकरण द्वारा त्वरित फैसला',
        'धारा 23: संतानों द्वारा देखभाल न करने पर उपहार में दी गई संपत्ति की रजिस्ट्री स्वतः रद्द करने का अधिकार'
      ],
      howToExercise: 'उप-विभागीय मजिस्ट्रेट (SDM) के समक्ष आवेदन प्रस्तुत करें या राष्ट्रीय एल्डरलाइन 14567 डायल करें।'
    },
    te: {
      title: 'తల్లిదండ్రులు & వయోవృద్ధుల పోషణ మరియు ఆస్తి రక్షణ చట్టం',
      description: 'పిల్లలు సంరక్షించకపోతే నెలవారీ భరణం పొందే మరియు బహుమతిగా ఇచ్చిన ఆస్తిని రద్దు చేసుకునే చట్టబద్ధ హక్కు.',
      actOrBasis: 'తల్లిదండ్రులు మరియు సీనియర్ సిటిజన్ల పోషణ మరియు సంక్షేమ చట్టం, 2007',
      keyEntitlements: [
        'మెయింటెనెన్స్ ట్రిబ్యునల్ ద్వారా పిల్లల నుండి నెలవారీ పోషణ భత్యం పొందే హక్కు',
        'లాయర్లు లేకుండా 90 రోజుల్లోపు ట్రిబ్యునల్ ద్వారా త్వరిత న్యాయం',
        'సెక్షన్ 23: పిల్లలు సంరక్షించకపోతే గిఫ్ట్‌గా ఇచ్చిన ఆస్తి దస్తావేజును రద్దు చేసే అధికారం'
      ],
      howToExercise: 'ఆర్డీవో (RDO) కు దరఖాస్తు చేసుకోవచ్చు లేదా జాతీయ ఎల్డర్‌లైన్ 14567 కు కాల్ చేయవచ్చు.'
    },
    kn: {
      title: 'ಹಿರಿಯ ನಾಗರಿಕರ ಮಾಸಿಕ ನಿರ್ವಹಣೆ ಮತ್ತು ಆಸ್ತಿ ರಕ್ಷಣಾ ಹಕ್ಕು',
      description: 'ಮಕ್ಕಳು ಸರಿಯಾಗಿ ನೋಡಿಕೊಳ್ಳದಿದ್ದಲ್ಲಿ ಮಾಸಿಕ ಜೀವನಾಂಶ ಪಡೆಯುವ ಮತ್ತು ದಾನಪತ್ರ ರದ್ದುಗೊಳಿಸುವ ಕಾನೂನುಬದ್ಧ ಹಕ್ಕು.',
      actOrBasis: 'ಪೋಷಕರು ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರ ನಿರ್ವಹಣೆ ಮತ್ತು ಕಲ್ಯಾಣ ಕಾಯ್ದೆ, 2007',
      keyEntitlements: [
        'ನಿರ್ವಹಣಾ ನ್ಯಾಯಮಂಡಳಿಯ ಮೂಲಕ ಮಕ್ಕಳಿಂದ ಮಾಸಿಕ ಜೀವನಾಂಶ ಪಡೆಯುವ ಹಕ್ಕು',
        'ವಕೀಲರ ಅಗತ್ಯವಿಲ್ಲದೆ 90 ದಿನಗಳೊಳಗೆ ನ್ಯಾಯಮಂಡಳಿಯಿಂದ ತ್ವರಿತ ಪರಿಹಾರ',
        'ಸೆಕ್ಷನ್ 23: ಪೋಷಕರನ್ನು ನೋಡಿಕೊಳ್ಳದಿದ್ದರೆ ಮಕ್ಕಳಿಗೆ ನೀಡಿದ ಆಸ್ತಿ ನೋಂದಣಿಯನ್ನು ರದ್ದುಗೊಳಿಸುವ ಅಧಿಕಾರ'
      ],
      howToExercise: 'ಉಪವಿಭಾಗಾಧಿಕಾರಿಗಳಿಗೆ (AC) ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಅಥವಾ ರಾಷ್ಟ್ರೀಯ ಎಲ್ಡರ್‌ಲೈನ್‌ಗೆ 14567 ಕರೆ ಮಾಡಿ.'
    },
    ml: {
      title: 'മാതാപിതാക്കളുടെ സംരക്ഷണവും സ്വത്ത് സുരക്ഷിതത്വവും ഉറപ്പാക്കുന്ന നിയമം',
      description: 'മക്കൾ സംരക്ഷിക്കാത്ത പക്ഷം പ്രതിമാസ ചെലവ് ലഭിക്കാനും ദാനം നൽകിയ സ്വത്ത് തിരിച്ചെടുക്കാനുമുള്ള നിയമപരമായ അവകാശം.',
      actOrBasis: 'മാതാപിതാക്കളുടെയും മുതിർന്ന പൗരന്മാരുടെയും സംരക്ഷണ നിയമം, 2007',
      keyEntitlements: [
        'ട്രിബ്യൂണൽ വഴി മക്കളിൽ നിന്ന് പ്രതിമാസ സംരക്ഷണ തുക ലഭിക്കാനുള്ള അവകാശം',
        'വക്കീലില്ലാതെ തന്നെ 90 ദിവസത്തിനകം ട്രിബ്യൂണലിൽ നിന്ന് തീർപ്പ്',
        'വകുപ്പ് 23: മാതാപിതാക്കളെ നോക്കാത്ത മക്കൾക്ക് നൽകിയ സ്വത്ത് ആധാരം റദ്ദാക്കാനുള്ള അധികാരം'
      ],
      howToExercise: 'ആർ.ഡി.ഒ (RDO) ക്ക് അപേക്ഷ സമർപ്പിക്കുക അല്ലെങ്കിൽ എൽഡർലൈൻ നമ്പറായ 14567-ൽ വിളിക്കുക.'
    }
  },
  'senior-healthcare-priority': {
    en: {
      title: 'Priority Healthcare & Dedicated Geriatric Desks',
      description: 'Mandatory priority consultation queues and subsidized medicines in all government hospitals.',
      actOrBasis: 'National Programme for Health Care of the Elderly',
      keyEntitlements: [
        'Separate dedicated registration and medicine dispensing queues in primary and district hospitals',
        'Free essential geriatric clinical checkups and diagnostic screenings',
        'Priority emergency transport and subsidized ambulance dispatch'
      ],
      howToExercise: 'Present Senior Citizen ID or Aadhaar at hospital Help Desk or contact 104 Health Helpline.'
    },
    ta: {
      title: 'அரசு மருத்துவமனைகளில் முதியோருக்கான முன்னுரிமை மற்றும் மருத்துவ சேவை',
      description: 'அனைத்து அரசு மற்றும் மாவட்ட மருத்துவமனைகளிலும் மூத்த குடிமக்களுக்கான தனி வரிசை மற்றும் இலவச சிகிச்சை உரிமை.',
      actOrBasis: 'தேசிய முதியோர் நல மருத்துவத் திட்டம் (NPHCE)',
      keyEntitlements: [
        'அரசு மருத்துவமனைகளில் மூத்த குடிமக்களுக்கு தனி பதிவு மற்றும் மருந்து வழங்கும் கவுண்டர்கள்',
        'முழுமையான மருத்துவப் பரிசோதனைகள் மற்றும் சிறப்பு மருத்துவ ஆலோசனைகள் இலவசம்',
        'அவசர கால ஊர்தி மற்றும் அவசர சிகிச்சையில் முதலுரிமை'
      ],
      howToExercise: 'மருத்துவமனை உதவி மையத்தில் ஆதார் அல்லது முதியோர் அடையாள அட்டையைக் காண்பிக்கவும் அல்லது 104 அழைக்கவும்.'
    },
    hi: {
      title: 'अस्पतालों में वरिष्ठ नागरिकों के लिए प्राथमिकता एवं विशेष चिकित्सा सुविधा',
      description: 'सभी सरकारी अस्पतालों में बुजुर्गों के लिए अलग लाइन, मुफ्त जांच एवं दवाइयों का वैधानिक अधिकार।',
      actOrBasis: 'राष्ट्रीय वृद्धजन स्वास्थ्य देखभाल कार्यक्रम',
      keyEntitlements: [
        'प्राथमिक एवं जिला अस्पतालों में अलग ओपीडी पंजीकरण एवं दवा वितरण काउंटर',
        'निःशुल्क जेरियाट्रिक जांच एवं आवश्यक नैदानिक परीक्षण',
        'आपातकालीन चिकित्सा एवं एम्बुलेंस सेवा में प्राथमिकता'
      ],
      howToExercise: 'अस्पताल हेल्पडेस्क पर वरिष्ठ नागरिक पहचान पत्र या आधार कार्ड दिखाएं अथवा 104 हेल्पलाइन पर संपर्क करें।'
    },
    te: {
      title: 'ప్రభుత్వ ఆసుపత్రులలో సీనియర్ సిటిజన్లకు ప్రాధాన్యతా వైద్య సేవలు',
      description: 'అన్ని ప్రభుత్వ ఆసుపత్రులలో వయోవృద్ధులకు ప్రత్యేక క్యూ లైన్లు, ఉచిత పరీక్షలు మరియు మందులు పొందే హక్కు.',
      actOrBasis: 'నేషనల్ ప్రోగ్రామ్ ఫర్ హెల్త్‌కేర్ ఆఫ్ ది ఎల్డర్లీ',
      keyEntitlements: [
        'ఆసుపత్రులలో ప్రత్యేక ఓపీడీ రిజిస్ట్రేషన్ మరియు మందుల పంపిణీ కౌంటర్లు',
        'ఉచిత వైద్య పరీక్షలు మరియు స్పెషలిస్ట్ వైద్యుల సంప్రదింపులు',
        'అత్యవసర రవాణా మరియు అంబులెన్స్ సేవలలో ప్రాధాన్యత'
      ],
      howToExercise: 'ఆసుపత్రి హెల్ప్‌డెస్క్ వద్ద ఆధార్ లేదా సీనియర్ సిటిజన్ కార్డు చూపించండి లేదా 104 కు కాల్ చేయండి.'
    },
    kn: {
      title: 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಆದ್ಯತೆಯ ಆರೋಗ್ಯ ಸೇವೆಗಳು',
      description: 'ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಪ್ರತ್ಯೇಕ ಸಾಲು, ಉಚಿತ ತಪಾಸಣೆ ಮತ್ತು ಔಷಧಿಗಳನ್ನು ಪಡೆಯುವ ಶಾಸನಬದ್ಧ ಹಕ್ಕು.',
      actOrBasis: 'ರಾಷ್ಟ್ರೀಯ ಹಿರಿಯರ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮ',
      keyEntitlements: [
        'ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಪ್ರತ್ಯೇಕ ನೋಂದಣಿ ಮತ್ತು ಔಷಧಿ ವಿತರಣಾ ಕೌಂಟರ್‌ಗಳು',
        'ಉಚಿತ ತಪಾಸಣೆಗಳು ಮತ್ತು ನುರಿತ ವೈದ್ಯರ ಸಮಾಲೋಚನೆ',
        'ತುರ್ತು ಚಿಕಿತ್ಸೆ ಮತ್ತು ಆಂಬ್ಯುಲೆನ್ಸ್ ಸೇವೆಯಲ್ಲಿ ಪ್ರಥಮ ಆದ್ಯತೆ'
      ],
      howToExercise: 'ಆಸ್ಪತ್ರೆಯ ಸಹಾಯ ಕೇಂದ್ರದಲ್ಲಿ ಆಧಾರ್ ಕಾರ್ಡ್ ತೋರಿಸಿ ಅಥವಾ 104 ಆರೋಗ್ಯ ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ.'
    },
    ml: {
      title: 'സർക്കാർ ആശുപത്രികളിൽ മുതിർന്ന പൗരന്മാർക്ക് മുൻഗണനാ ആരോഗ്യ പരിരക്ഷ',
      description: 'എല്ലാ സർക്കാർ ആശുപത്രികളിലും പ്രത്യേക ക്യൂ, സൗജന്യ പരിശോധനകൾ, മരുന്നുകൾ എന്നിവ ലഭിക്കാനുള്ള അവകാശം.',
      actOrBasis: 'മുതിർന്നവർക്കായുള്ള ദേശീയ ആരോഗ്യ പരിപാലന പദ്ധതി',
      keyEntitlements: [
        'ആശുപത്രികളിൽ പ്രത്യേക ഒപി രജിസ്ട്രേഷനും മരുന്ന് വിതരണ കൗണ്ടറുകളും',
        'സൗജന്യ ആരോഗ്യ പരിശോധനകളും ചികിത്സകളും',
        'അടിയന്തര ചികിത്സയിലും ആംബുലൻസ് സേവനത്തിലും മുൻഗണന'
      ],
      howToExercise: 'ആശുപത്രി ഹെൽപ്പ് ഡെസ്കിൽ ആധാർ അല്ലെങ്കിൽ സീനിയർ സിറ്റിസൺ കാർഡ് കാണിക്കുക അല്ലെങ്കിൽ 104 ഹെൽപ്പ്‌ലൈനിൽ ബന്ധപ്പെടുക.'
    }
  }
};

export interface LocalizedSampleClaim {
  id: string;
  category: string;
  queryText: string;
  expectedVerdict: 'verified' | 'fraudulent' | 'unverified';
}

export const LOCALIZED_SAMPLE_CLAIMS: Record<LanguageCode, LocalizedSampleClaim[]> = {
  en: [
    {
      id: 'claim-student-scam',
      category: 'Scholarship Scam Alert',
      queryText: 'Urgent: Ministry offering ₹50,000 instant student laptop subsidy. Click bit.ly/edu-scheme and pay ₹499 registration fee immediately.',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-farmer-scam',
      category: 'PM-Kisan Phishing Link',
      queryText: 'PM-Kisan 19th installment suspended. Update your Aadhaar biometric OTP urgently at pmkisan-dbt.xyz to release ₹2,000.',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-senior-verified',
      category: 'Ayushman 70+ Coverage',
      queryText: 'All senior citizens aged 70 years and above are eligible for ₹5 Lakh annual free health insurance coverage under Ayushman Bharat scheme irrespective of income.',
      expectedVerdict: 'verified'
    },
    {
      id: 'claim-pmkisan-verified',
      category: 'PM-Kisan DBT Entitlement',
      queryText: 'Eligible small and marginal landholding farmer families receive ₹6,000 per year in 3 equal installments of ₹2,000 directly into their bank accounts under PM-KISAN.',
      expectedVerdict: 'verified'
    }
  ],
  ta: [
    {
      id: 'claim-student-scam',
      category: 'போலி கல்வி உதவித்தொகை எச்சரிக்கை',
      queryText: 'அவசரம்: மத்திய அரசு ₹50,000 உடனடி மடிக்கணினி மானியம் வழங்குகிறது. bit.ly/edu-scheme கிளிக் செய்து உடனடியாக ₹499 கட்டணம் செலுத்தவும்.',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-farmer-scam',
      category: 'பிஎம்-கிசான் போலி இணைய இணைப்பு',
      queryText: 'பிஎம் கிசான் நிதி நிறுத்தி வைக்கப்பட்டுள்ளது. ₹2,000 பெற உங்கள் ஆதார் ஓடிபி எண்ணை pmkisan-dbt.xyz தளத்தில் உடனடியாக உள்ளிடவும்.',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-senior-verified',
      category: '70+ முதியோர் ஆயுஷ்மான் காப்பீடு',
      queryText: '70 வயது மற்றும் அதற்கு மேற்பட்ட அனைத்து மூத்த குடிமக்களுக்கும் வருமான வரம்பின்றி ஆயுஷ்மான் பாரத் திட்டத்தின் கீழ் ஆண்டுக்கு ₹5 லட்சம் இலவச மருத்துவக் காப்பீடு உண்டு.',
      expectedVerdict: 'verified'
    },
    {
      id: 'claim-pmkisan-verified',
      category: 'பிஎம்-கிசான் அதிகாரப்பூர்வ உதவி',
      queryText: 'பிஎம்-கிசான் திட்டத்தின் கீழ் தகுதியான விவசாய குடும்பங்களுக்கு ஆண்டுக்கு ₹6,000 மூன்று தவணைகளாக தலா ₹2,000 நேரடியாக வங்கி கணக்கில் செலுத்தப்படுகிறது.',
      expectedVerdict: 'verified'
    }
  ],
  hi: [
    {
      id: 'claim-student-scam',
      category: 'फर्जी छात्रवृत्ति अलर्ट',
      queryText: 'अति आवश्यक: सरकार छात्रों को ₹50,000 मुफ्त लैपटॉप सब्सिडी दे रही है। bit.ly/edu-scheme पर क्लिक करें और तुरंत ₹499 पंजीकरण शुल्क जमा करें।',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-farmer-scam',
      category: 'पीएम-किसान फिशिंग लिंक',
      queryText: 'आपकी पीएम-किसान की किस्त रोक दी गई है। ₹2,000 प्राप्त करने के लिए अपना आधार ओटीपी pmkisan-dbt.xyz पर तुरंत दर्ज करें।',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-senior-verified',
      category: '70+ आयुष्मान स्वास्थ्य बीमा',
      queryText: '70 वर्ष और उससे अधिक आयु के सभी वरिष्ठ नागरिकों को आय सीमा के बिना आयुष्मान भारत योजना के तहत ₹5 लाख तक का मुफ्त स्वास्थ्य बीमा मिलता है।',
      expectedVerdict: 'verified'
    },
    {
      id: 'claim-pmkisan-verified',
      category: 'पीएम-किसान आधिकारिक लाभ',
      queryText: 'पीएम-किसान योजना के तहत पात्र किसान परिवारों को प्रति वर्ष ₹6,000 की राशि ₹2,000 की तीन किस्तों में सीधे बैंक खाते में दी जाती है।',
      expectedVerdict: 'verified'
    }
  ],
  te: [
    {
      id: 'claim-student-scam',
      category: 'నకిలీ స్కాలర్‌షిప్ హెచ్చరిక',
      queryText: 'అత్యవసరం: విద్యార్థులకు ప్రభుత్వం ₹50,000 ఉచిత ల్యాప్‌టాప్ సబ్సిడీ ఇస్తోంది. bit.ly/edu-scheme క్లిక్ చేసి వెంటనే ₹499 రిజిస్ట్రేషన్ ఫీజు చెల్లించండి.',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-farmer-scam',
      category: 'పీఎం-కిసాన్ మోసపూరిత లింక్',
      queryText: 'పీఎం-కిసాన్ డబ్బు నిలిపివేయబడింది. ₹2,000 పొందడానికి pmkisan-dbt.xyz లో మీ ఆధార్ ఓటీపీ నమోదు చేయండి.',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-senior-verified',
      category: '70+ ఆయుష్మాన్ ఆరోగ్య బీమా',
      queryText: '70 సంవత్సరాలు పైబడిన వయోవృద్ధులందరికీ ఆదాయ పరిమితి లేకుండా ఆయుష్మాన్ భారత్ కింద సంవత్సరానికి ₹5 లక్షల ఉచిత ఆరోగ్య బీమా లభిస్తుంది.',
      expectedVerdict: 'verified'
    },
    {
      id: 'claim-pmkisan-verified',
      category: 'పీఎం-కిసాన్ అధికారిక సాయం',
      queryText: 'పీఎం-కిసాన్ పథకం కింద అర్హులైన రైతులకు సంవత్సరానికి ₹6,000 మూడు విడతలలో నేరుగా బ్యాంక్ ఖాతాలో జమ చేయబడుతుంది.',
      expectedVerdict: 'verified'
    }
  ],
  kn: [
    {
      id: 'claim-student-scam',
      category: 'ನಕಲಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಎಚ್ಚರಿಕೆ',
      queryText: 'ತುರ್ತು: ಸರ್ಕಾರದಿಂದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ₹50,000 ಉಚಿತ ಲ್ಯಾಪ್‌ಟಾಪ್ ಸಬ್ಸಿಡಿ. bit.ly/edu-scheme ಕ್ಲಿಕ್ ಮಾಡಿ ತಕ್ಷಣ ₹499 ಶುಲ್ಕ ಪಾವತಿಸಿ.',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-farmer-scam',
      category: 'ಪಿಎಂ-ಕಿಸಾನ್ ವಂಚನೆಯ ಲಿಂಕ್',
      queryText: 'ಪಿಎಂ-ಕಿಸಾನ್ ಹಣ ತಡೆಹಿಡಿಯಲಾಗಿದೆ. ₹2,000 ಪಡೆಯಲು pmkisan-dbt.xyz ನಲ್ಲಿ ನಿಮ್ಮ ಆಧಾರ್ ಒಟಿಪಿ ನಮೂದಿಸಿ.',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-senior-verified',
      category: '70+ ಆಯುಷ್ಮಾನ್ ವಿಮೆ',
      queryText: '70 ವರ್ಷ ಮತ್ತು ಮೇಲ್ಪಟ್ಟ ಎಲ್ಲಾ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಆದಾಯ ಮಿತಿಯಿಲ್ಲದೆ ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಯೋಜನೆಯಡಿ ವಾರ್ಷಿಕ ₹5 ಲಕ್ಷ ಉಚಿತ ಆರೋಗ್ಯ ವಿಮೆ ಸಿಗುತ್ತದೆ.',
      expectedVerdict: 'verified'
    },
    {
      id: 'claim-pmkisan-verified',
      category: 'ಪಿಎಂ-ಕಿಸಾನ್ ಅಧಿಕೃತ ನೆರವು',
      queryText: 'ಪಿಎಂ-ಕಿಸಾನ್ ಯೋಜನೆಯಡಿ ಅರ್ಹ ರೈತರಿಗೆ ವಾರ್ಷಿಕ ₹6,000 ಮೂರು ಕಂತುಗಳಲ್ಲಿ ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆಯಾಗುತ್ತದೆ.',
      expectedVerdict: 'verified'
    }
  ],
  ml: [
    {
      id: 'claim-student-scam',
      category: 'വ്യാജ സ്കോളർഷിപ്പ് മുന്നറിയിപ്പ്',
      queryText: 'അടിയന്തരം: സർക്കാർ വിദ്യാർത്ഥികൾക്ക് ₹50,000 സൗജന്യ ലാപ്ടോപ്പ് സബ്‌സിഡി നൽകുന്നു. bit.ly/edu-scheme ക്ലിക്ക് ചെയ്ത് ഉടൻ ₹499 ഫീസ് അടയ്ക്കുക.',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-farmer-scam',
      category: 'പിഎം-കിസാൻ തട്ടിപ്പ് ലിങ്ക്',
      queryText: 'പിഎം-കിസാൻ പണം തടഞ്ഞുവെച്ചിരിക്കുന്നു. ₹2,000 ലഭിക്കാൻ pmkisan-dbt.xyz ൽ നിങ്ങളുടെ ആധാർ ഒടിപി നൽകുക.',
      expectedVerdict: 'fraudulent'
    },
    {
      id: 'claim-senior-verified',
      category: '70+ ആയുഷ്മാൻ ഇൻഷുറൻസ്',
      queryText: '70 വയസ്സും അതിൽ കൂടുതലുമുള്ള എല്ലാ മുതിർന്ന പൗരന്മാർക്കും വരുമാന പരിധിയില്ലാതെ ആയുഷ്മാൻ ഭാരത് വഴി ₹5 ലക്ഷം സൗജന്യ ചികിത്സ ലഭിക്കും.',
      expectedVerdict: 'verified'
    },
    {
      id: 'claim-pmkisan-verified',
      category: 'പിഎം-കിസാൻ ഔദ്യോഗിക ആനുകൂല്യം',
      queryText: 'പിഎം-കിസാൻ പദ്ധതി പ്രകാരം അർഹരായ കർഷകർക്ക് പ്രതിവർಷം ₹6,000 മൂന്ന് ഗഡുക്കളായി നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിൽ ലഭ്യമാക്കുന്നു.',
      expectedVerdict: 'verified'
    }
  ]
};

export interface LocalizedHelplineItem {
  number: string;
  name: string;
  desc: string;
  badge: string;
  badgeType: 'emergency' | 'senior' | 'farmer' | 'health' | 'consumer';
}

export interface LocalizedFaqItem {
  q: string;
  a: string;
}

export const LOCALIZED_HELPLINES: Record<LanguageCode, LocalizedHelplineItem[]> = {
  en: [
    {
      number: '1930',
      name: 'National Cyber Crime Reporting & Financial Fraud Helpline',
      desc: 'Immediate reporting for online scheme scams, fraudulent OTP requests, and unauthorized digital banking transactions.',
      badge: 'Immediate Action / 24x7',
      badgeType: 'emergency'
    },
    {
      number: '14567',
      name: 'National Elderline (Senior Citizens Helpline)',
      desc: 'Toll-free national helpline offering guidance on senior welfare schemes, pension verification, legal rescue, and elderly emotional support.',
      badge: 'Mon-Sun 8 AM - 8 PM',
      badgeType: 'senior'
    },
    {
      number: '1800-180-1551',
      name: 'Kisan Call Centre (KCC Toll Free)',
      desc: 'Government agriculture experts providing real-time queries regarding PM-Kisan, PMFBY crop insurance claims, and MSP procurement.',
      badge: '6 AM - 10 PM Daily',
      badgeType: 'farmer'
    },
    {
      number: '14555',
      name: 'Ayushman Bharat PM-JAY & ABHA Support',
      desc: 'Dedicated national desk for PM-JAY hospital empanelment queries, 70+ Ayushman Card activation, and cashless claim assistance.',
      badge: '24x7 National Desk',
      badgeType: 'health'
    },
    {
      number: '1915',
      name: 'National Consumer Helpline (NCH)',
      desc: 'Grievance redressal for unauthorized college capitation fees, educational refund disputes, and deceptive civic claims.',
      badge: 'Mon-Sat 8 AM - 8 PM',
      badgeType: 'consumer'
    }
  ],
  ta: [
    {
      number: '1930',
      name: 'தேசிய இணைய குற்றத்தடுப்பு & நிதி மோசடி உதவி எண்',
      desc: 'போலி அரசு திட்ட குறுஞ்செய்திகள், ஓடிபி திருட்டு மற்றும் இணையதள வங்கி மோசடிகளுக்கு உடனடியாக புகார் அளிக்கும் உதவி எண்.',
      badge: 'உடனடி நடவடிக்கை / 24x7',
      badgeType: 'emergency'
    },
    {
      number: '14567',
      name: 'தேசிய எல்டர்லைன் (மூத்த குடிமக்கள் உதவி எண்)',
      desc: 'முதியோர் ஓய்வூதியம், சட்டப் பாதுகாப்பு, மருத்துவ உதவி மற்றும் நலத்திட்டங்கள் குறித்த இலவச வழிகாட்டுதல் சேவை.',
      badge: 'திங்கள்-ஞாயிறு காலை 8 - இரவு 8',
      badgeType: 'senior'
    },
    {
      number: '1800-180-1551',
      name: 'கிசான் உழவர் சேவை உதவி மையம் (கட்டணமில்லா சேவை)',
      desc: 'பிஎம்-கிசான் நிதி உதவி, பயிர்க் காப்பீடு மற்றும் அரசு மானியங்கள் குறித்த விவசாய நிபுணர்களின் உடனடி நேரடி ஆலோசனை.',
      badge: 'காலை 6 - இரவு 10 வரை',
      badgeType: 'farmer'
    },
    {
      number: '14555',
      name: 'ஆயுஷ்மான் பாரத் & மருத்துவக் காப்பீடு உதவி மையம்',
      desc: '70+ முதியோர் ஆயுஷ்மான் அட்டை, பதிவுபெற்ற மருத்துவமனைகள் மற்றும் ₹5 லட்சம் இலவச சிகிச்சை பெறுவதற்கான உதவி எண்.',
      badge: '24x7 தேசிய சேவை',
      badgeType: 'health'
    },
    {
      number: '1915',
      name: 'தேசிய நுகர்வோர் குறைதீர்ப்பு உதவி எண் (NCH)',
      desc: 'கல்லூரி சேர்க்கை கட்டண விவகாரங்கள், அசல் சான்றிதழ் மீட்பு மற்றும் தவறான சேவை குறித்த புகார்களுக்கான உதவி மையம்.',
      badge: 'திங்கள்-சனி காலை 8 - இரவு 8',
      badgeType: 'consumer'
    }
  ],
  hi: [
    {
      number: '1930',
      name: 'राष्ट्रीय साइबर अपराध एवं वित्तीय धोखाधड़ी हेल्पलाइन',
      desc: 'फर्जी सरकारी योजनाओं, अनधिकृत ओटीपी अनुरोधों और डिजिटल बैंकिंग धोखाधड़ी की त्वरित रिपोर्टिंग।',
      badge: 'तत्काल कार्रवाई / 24x7',
      badgeType: 'emergency'
    },
    {
      number: '14567',
      name: 'राष्ट्रीय एल्डरलाइन (वरिष्ठ नागरिक हेल्पलाइन)',
      desc: 'वृद्धावस्था पेंशन, कानूनी संरक्षण, स्वास्थ्य सहायता और वरिष्ठ नागरिक कल्याणकारी योजनाओं के लिए टोल-फ्री सहायता।',
      badge: 'सोम-रवि प्रातः 8 से रात 8',
      badgeType: 'senior'
    },
    {
      number: '1800-180-1551',
      name: 'किसान कॉल सेंटर (टोल-फ्री)',
      desc: 'पीएम-किसान, फसल बीमा दावा, एमएसपी खरीद और कृषि सब्सिडी पर सरकारी विशेषज्ञों द्वारा तत्काल परामर्श।',
      badge: 'प्रतिदिन प्रातः 6 से रात 10',
      badgeType: 'farmer'
    },
    {
      number: '14555',
      name: 'आयुष्मान भारत पीएम-जेएवाई हेल्पलाइन',
      desc: '70+ वरिष्ठ नागरिक आयुष्मान कार्ड एक्टिवेशन, सूचीबद्ध अस्पताल और ₹5 लाख कैशलेस इलाज संबंधी सहायता।',
      badge: '24x7 राष्ट्रीय सहायता डेस्क',
      badgeType: 'health'
    },
    {
      number: '1915',
      name: 'राष्ट्रीय उपभोक्ता हेल्पलाइन (NCH)',
      desc: 'कॉलेज फीस वापसी विवाद, मूल प्रमाणपत्र रोके जाने और भ्रामक दावों के खिलाफ शिकायत दर्ज करने की हेल्पलाइन।',
      badge: 'सोम-शनि प्रातः 8 से रात 8',
      badgeType: 'consumer'
    }
  ],
  te: [
    {
      number: '1930',
      name: 'జాతీయ సైబర్ నేరాల నివారణ & మోసాల హెల్ప్‌లైన్',
      desc: 'నకిలీ ప్రభుత్వ పథకాలు, ఓటీపీ మోసాలు మరియు ఆన్‌లైన్ బ్యాంకింగ్ మోసాలపై తక్షణ ఫిర్యాదు కేంద్రం.',
      badge: 'తక్షణ చర్య / 24x7',
      badgeType: 'emergency'
    },
    {
      number: '14567',
      name: 'జాతీయ ఎల్డర్‌లైన్ (వయోవృద్ధుల హెల్ప్‌లైన్)',
      desc: 'వృద్ధాప్య పెన్షన్లు, చట్టపరమైన సహాయం మరియు ప్రభుత్వ సంక్షేమ పథకాల సమాచారం కోసం ఉచిత హెల్ప్‌లైన్.',
      badge: 'రోజూ ఉదయం 8 నుండి రాత్రి 8',
      badgeType: 'senior'
    },
    {
      number: '1800-180-1551',
      name: 'కిసాన్ కాల్ సెంటర్ (టోల్ ఫ్రీ)',
      desc: 'పీఎం-కిసాన్ నిధులు, పంటల బీమా క్లెయిమ్‌లు మరియు రాయితీలపై వ్యవసాయ నిపుణుల సలహాలు.',
      badge: 'ఉదయం 6 నుండి రాత్రి 10 వరకు',
      badgeType: 'farmer'
    },
    {
      number: '14555',
      name: 'ఆయుష్మాన్ భారత్ పీఎం-జేఏవై హెల్ప్‌లైన్',
      desc: '70+ వృద్ధుల ఆయుష్మాన్ కార్డ్, నెట్‌వర్క్ ఆసుపత్రులు మరియు ₹5 లక్షల ఉచిత చికిత్స వివరాల సహాయ కేంద్రం.',
      badge: '24x7 జాతీయ డెస్క్',
      badgeType: 'health'
    },
    {
      number: '1915',
      name: 'జాతీయ వినియోగదారుల హెల్ప్‌లైన్ (NCH)',
      desc: 'కళాశాలల ఫీజు వివాదాలు, సర్టిఫికేట్ల నిలిపివేత మరియు తప్పుదోవ పట్టించే సేవలపై ఫిర్యాదులు.',
      badge: 'సోమ-శని ఉదయం 8 - రాత్రి 8',
      badgeType: 'consumer'
    }
  ],
  kn: [
    {
      number: '1930',
      name: 'ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ & ಹಣಕಾಸು ವಂಚನೆ ಸಹಾಯವಾಣಿ',
      desc: 'ನಕಲಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಒಟಿಪಿ ವಂಚನೆ ಮತ್ತು ಆನ್‌ಲೈನ್ ಬ್ಯಾಂಕಿಂಗ್ ಅಪರಾಧಗಳ ಕುರಿತು ತುರ್ತು ದೂರು ಸಹಾಯವಾಣಿ.',
      badge: 'ತಕ್ಷಣದ ಕ್ರಮ / 24x7',
      badgeType: 'emergency'
    },
    {
      number: '14567',
      name: 'ರಾಷ್ಟ್ರೀಯ ಎಲ್ಡರ್‌ಲೈನ್ (ಹಿರಿಯ ನಾಗರಿಕರ ಸಹಾಯವಾಣಿ)',
      desc: 'ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ, ಕಾನೂನು ರಕ್ಷಣೆ ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಉಚಿತ ಮಾರ್ಗದರ್ಶನ.',
      badge: 'ಪ್ರತಿದಿನ ಬೆಳಗ್ಗೆ 8 ರಿಂದ ರಾತ್ರಿ 8',
      badgeType: 'senior'
    },
    {
      number: '1800-180-1551',
      name: 'ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್ (ಉಚಿತ ಸಹಾಯವಾಣಿ)',
      desc: 'ಪಿಎಂ-ಕಿಸಾನ್, ಬೆಳೆ ವಿಮೆ ಮತ್ತು ಕೃಷಿ ಸಬ್ಸಿಡಿ ಕುರಿತು ಸರ್ಕಾರಿ ತಜ್ಞರ ನೇರ ಸಲಹೆ.',
      badge: 'ಬೆಳಗ್ಗೆ 6 ರಿಂದ ರಾತ್ರಿ 10 ರವರೆಗೆ',
      badgeType: 'farmer'
    },
    {
      number: '14555',
      name: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಪಿಎಂ-ಜೆಎವೈ ಸಹಾಯವಾಣಿ',
      desc: '70+ ಹಿರಿಯರ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್, ಆಸ್ಪತ್ರೆಗಳ ಪಟ್ಟಿ ಮತ್ತು ₹5 ಲಕ್ಷ ಉಚಿತ ಚಿಕಿತ್ಸೆಯ ಸಹಾಯವಾಣಿ.',
      badge: '24x7 ರಾಷ್ಟ್ರೀಯ ಸೇವೆ',
      badgeType: 'health'
    },
    {
      number: '1915',
      name: 'ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ (NCH)',
      desc: 'ಕಾಲೇಜು ಶುಲ್ಕ ವಿವಾದಗಳು, ಮೂಲ ಪ್ರಮಾಣಪತ್ರ ತಡೆಹಿಡಿಯುವಿಕೆ ವಿರುದ್ಧ ದೂರು ದಾಖಲಿಸುವ ಸಹಾಯವಾಣಿ.',
      badge: 'ಸೋಮ-ಶನಿ ಬೆಳಗ್ಗೆ 8 - ರಾತ್ರಿ 8',
      badgeType: 'consumer'
    }
  ],
  ml: [
    {
      number: '1930',
      name: 'ദേശീയ സൈബർ കുറ്റകൃത്യ & സാമ്പത്തിക തട്ടിപ്പ് ഹെൽപ്പ്‌ലൈൻ',
      desc: 'വ്യാജ സർക്കാർ പദ്ധതി സന്ദേശങ്ങൾ, ഒടിപി തട്ടിപ്പുകൾ, ബാങ്കിംഗ് ക്രമക്കേടുകൾ എന്നിവയ്ക്കെതിരെ അടിയന്തര സഹായം.',
      badge: 'ഉടൻ നടപടി / 24x7',
      badgeType: 'emergency'
    },
    {
      number: '14567',
      name: 'ദേശീയ എൽഡർലൈൻ (മുതിർന്ന പൗരന്മാരുടെ ഹെൽപ്പ്‌ലൈൻ)',
      desc: 'വാർദ്ധക്യ പെൻഷൻ, നിയമ സംരക്ഷണം, മുതിർന്ന പൗരന്മാർക്കുള്ള ക്ഷേമപദ്ധതികൾ എന്നിവയ്ക്കുള്ള സൗജന്യ ഹെൽപ്പ്‌ലൈൻ.',
      badge: 'രാവിലെ 8 മുതൽ രാത്രി 8 വരെ',
      badgeType: 'senior'
    },
    {
      number: '1800-180-1551',
      name: 'കിസാൻ കോൾ സെന്റർ (ടോൾ ഫ്രീ)',
      desc: 'പിഎം-കിസാൻ, വിള ഇൻഷുറൻസ്, സർക്കാർ കാർഷിക സബ്‌സിഡികൾ എന്നിവയിൽ കൃഷി വിദഗ്ദ്ധരുടെ തത്സമയ ഉപദേശം.',
      badge: 'രാവിലെ 6 മുതൽ രാത്രി 10 വരെ',
      badgeType: 'farmer'
    },
    {
      number: '14555',
      name: 'ആയുഷ്മാൻ ഭാരത് പിഎം-ജെഎവൈ ഹെൽപ്പ്‌ലൈൻ',
      desc: '70+ മുതിർന്ന പൗരന്മാരുടെ ആയുഷ്മാൻ കാർഡ്, സൗജന്യ ചികിത്സാ ആശുപത്രികൾ എന്നിവയ്ക്കുള്ള സഹായം.',
      badge: '24x7 ദേശീയ ഡെസ്ക്',
      badgeType: 'health'
    },
    {
      number: '1915',
      name: 'ദേശീയ ഉപഭോക്തൃ ഹെൽപ്പ്‌ലൈൻ (NCH)',
      desc: 'കോളേജ് ഫീസ് തർക്കങ്ങൾ, ഒറിജിനൽ സർട്ടിഫിക്കറ്റുകൾ തടഞ്ഞുവെക്കൽ എന്നിവയ്ക്കെതിരെ പരാതി നൽകാനുള്ള ഹെൽപ്പ്‌ലൈൻ.',
      badge: 'തിങ്കൾ-ശനി രാവിലെ 8 - രാത്രി 8',
      badgeType: 'consumer'
    }
  ]
};

export const LOCALIZED_FAQS: Record<LanguageCode, LocalizedFaqItem[]> = {
  en: [
    {
      q: 'How does CivicLens assess my scheme eligibility?',
      a: 'CivicLens transparently matches your verified demographic and socio-economic profile (such as age, state, education level, and household income) directly against published statutory criteria and official Gazette guidelines.'
    },
    {
      q: 'Why did the system highlight a consistency review between my documents?',
      a: 'Minor spelling discrepancies across credentials (for example, "Kavya G" on an educational mark sheet vs "Kaviya G" on an Aadhaar card) frequently trigger automated rejection on national DBT portals. CivicLens identifies these early so you can attach supporting affidavits or update records before submission.'
    },
    {
      q: 'Can I switch my interface language and scheme names anytime?',
      a: 'Yes. CivicLens provides end-to-end multi-language localization across English, Tamil (தமிழ்), Hindi (हिन्दी), Telugu (తెలుగు), Kannada (ಕನ್ನಡ), and Malayalam (മലയാളം). Changing language updates all scheme titles, descriptions, and civic guidance instantly.'
    }
  ],
  ta: [
    {
      q: 'எனது திட்டத் தகுதியை சிவிக்லென்ஸ் எவ்வாறு கணக்கிடுகிறது?',
      a: 'சிவிக்லென்ஸ் உங்கள் சரிபார்க்கப்பட்ட வயது, வசிப்பிட மாநிலம், கல்வித் தகுதி மற்றும் குடும்ப வருமானத்தை அதிகாரப்பூர்வ அரசு அறிவிக்கைகளுடன் ஒப்பிட்டு வெளிப்படையாகவும் துல்லியமாகவும் தகுதியை மதிப்பீடு செய்கிறது.'
    },
    {
      q: 'எனது ஆவணங்களில் பெயர்ப் பொருத்த மறுஆய்வு ஏன் காட்டப்படுகிறது?',
      a: 'மதிப்பெண் சான்றிதழ் அல்லது வாக்காளர் அட்டையில் உள்ள பெயர் ஆதார் அட்டையுடன் சிறிதளவு மாறினால் (உதாரணமாக "Kavya G" vs "Kaviya G"), அரசு DBT இணையதளங்களில் விண்ணப்பம் நிராகரிக்கப்படலாம். இதைத் தவிர்க்க சிவிக்லென்ஸ் முன்கூட்டியே எச்சரிக்கிறது.'
    },
    {
      q: 'நான் விரும்பும் மொழியை எப்போது வேண்டுமானாலும் மாற்றிக்கொள்ள முடியுமா?',
      a: 'ஆம்! தமிழ், ஆங்கிலம், இந்தி, தெலுங்கு, கன்னடம் மற்றும் மலையாளம் ஆகிய மொழிகளுக்கு இடையே மேல் பட்டியில் உள்ள மொழி மெனு மூலம் எப்போது வேண்டுமானாலும் மாற்றிக்கொள்ளலாம். அனைத்து திட்டப் பெயர்களும் உடனடியாக நீங்கள் விரும்பும் மொழியில் மாறும்.'
    }
  ],
  hi: [
    {
      q: 'सिविक लेंस मेरी योजना पात्रता का आकलन कैसे करता है?',
      a: 'सिविक लेंस आपकी सत्यापित आयु, निवास राज्य, शैक्षणिक योग्यता और पारिवारिक आय की तुलना आधिकारिक सरकारी राजपत्र अधिसूचनाओं से करके पारदर्शी और सटीक मूल्यांकन करता है।'
    },
    {
      q: 'प्रणाली ने मेरे दस्तावेज़ों के बीच विसंगति समीक्षा क्यों दिखाई?',
      a: 'यदि अंकतालिका या वोटर आईडी पर नाम आधार कार्ड से भिन्न है (जैसे "Kavya G" बनाम "Kaviya G"), तो सरकारी डीबीटी पोर्टल आवेदन अस्वीकार कर सकते हैं। इसे रोकने के लिए सिविक लेंस पहले ही सतर्क करता है।'
    },
    {
      q: 'क्या मैं किसी भी समय अपनी भाषा और योजना के नाम बदल सकता हूँ?',
      a: 'हाँ! आप शीर्ष हेडर में दिए गए भाषा मेनू से कभी भी तमिल, हिंदी, अंग्रेजी, तेलुगु, कन्नड़ और मलयालम में स्विच कर सकते हैं। सभी योजनाओं के नाम और विवरण तुरंत बदल जाएंगे।'
    }
  ],
  te: [
    {
      q: 'సివిక్‌లెన్స్ నా పథకం అర్హతను ఎలా అంచనా వేస్తుంది?',
      a: 'సివిక్‌లెన్స్ మీ ధృవీకరించబడిన వయస్సు, రాష్ట్రం, విద్యార్హత మరియు కుటుంబ ఆదాయాన్ని అధికారిక ప్రభుత్వ నిబంధనలతో సరిపోల్చి ఖచ్చితమైన అర్హతను నిర్ణయిస్తుంది.'
    },
    {
      q: 'నా పత్రాల మధ్య సమీక్ష ఎందుకు చూపబడింది?',
      a: 'మార్కుల జాబితా లేదా ఓటర్ ఐడీలో పేరు ఆధార్ కార్డుతో తేడా ఉంటే (ఉదాహరణకు "Kavya G" vs "Kaviya G"), ప్రభుత్వ పోర్టల్స్ దరఖాస్తును తిరస్కరించే అవకాశం ఉంది. దీనిని నివారించడానికి సివిక్‌లెన్స్ ముందే తెలియజేస్తుంది.'
    },
    {
      q: 'నేను ఎప్పుడైనా నా భాషను మార్చుకోవచ్చా?',
      a: 'అవును! మీరు ఎగువ హెడర్‌లోని గ్లోబ్ మెనూ ద్వారా ఎప్పుడైనా తెలుగు, తమిళం, హిందీ, కన్నడ, మలయాళం మరియు ఇంగ్లీష్‌లలోకి మారవచ్చు. అన్ని పథకాల పేర్లు వెంటనే మారుతాయి.'
    }
  ],
  kn: [
    {
      q: 'ಸಿವಿಕ್‌ಲೆನ್ಸ್ ನನ್ನ ಯೋಜನೆ ಅರ್ಹತೆಯನ್ನು ಹೇಗೆ ನಿರ್ಣಯಿಸುತ್ತದೆ?',
      a: 'ಸಿವಿಕ್‌ಲೆನ್ಸ್ ನಿಮ್ಮ ವಯಸ್ಸು, ರಾಜ್ಯ, ಶೈಕ್ಷಣಿಕ ಅರ್ಹತೆ ಮತ್ತು ಕುಟುಂಬ ಆದಾಯವನ್ನು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ನಿಯಮಗಳಿಗೆ ಹೋಲಿಸಿ ನಿಖರವಾದ ಅರ್ಹತಾ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ.'
    },
    {
      q: 'ನನ್ನ ದಾಖಲೆಗಳ ನಡುವೆ ಪರಿಶೀಲನೆ ಏಕೆ ತೋರಿಸಲಾಗಿದೆ?',
      a: 'ಅಂಕಪಟ್ಟಿ ಅಥವಾ ಓಟರ್ ಐಡಿಯಲ್ಲಿನ ಹೆಸರು ಆಧಾರ್ ಕಾರ್ಡ್‌ಗೆ ಭಿನ್ನವಾಗಿದ್ದರೆ (ಉದಾಹರಣೆಗೆ "Kavya G" vs "Kaviya G"), ಸರ್ಕಾರಿ ಡಿಬಿಟಿ ಪೋರ್ಟಲ್ ಅರ್ಜಿ ತಿರಸ್ಕರಿಸಬಹುದು. ಇದನ್ನು ಮೊದಲೇ ಸರಿಪಡಿಸಲು ಸಿವಿಕ್‌ಲೆನ್ಸ್ ನೆರವಾಗುತ್ತದೆ.'
    },
    {
      q: 'ನಾನು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನನ್ನ ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಬಹುದೇ?',
      a: 'ಹೌದು! ಮೇಲ್ಭಾಗದ ಹೆಡರ್‌ನಲ್ಲಿರುವ ಗ್ಲೋಬ್ ಮೆನು ಬಳಸಿ ನೀವು ಯಾವಾಗ ಬೇಕಾದರೂ ಕನ್ನಡ, ತಮಿಳು, ಹಿಂದಿ, ತೆಲುಗು, ಮಲಯಾಳಂ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ಗೆ ಬದಲಾಯಿಸಬಹುದು.'
    }
  ],
  ml: [
    {
      q: 'സിവിക് ലെൻസ് എന്റെ പദ്ധതി യോഗ്യത എങ്ങനെയാണ് നിർണ്ണയിക്കുന്നത്?',
      a: 'സിവിക് ലെൻസ് നിങ്ങളുടെ പ്രായം, സംസ്ഥാനം, വിദ്യാഭ്യാസ യോഗ്യത, വരുമാനം എന്നിവ ഔദ്യോഗിക സർക്കാർ വിജ്ഞാപനങ്ങളുമായി പരിശോധിച്ച് കൃത്യമായി യോഗ്യത വിലയിരുത്തുന്നു.'
    },
    {
      q: 'എന്റെ രേഖകൾ തമ്മിലുള്ള പൊരുത്തക്കേട് സിസ്റ്റം കാണിക്കുന്നത് എന്തുകൊണ്ട്?',
      a: 'മാർക്ക് ലിസ്റ്റിലോ വോട്ടർ ഐഡിയിലോ ഉള്ള പേര് ആധാർ കാർഡിൽ നിന്ന് വ്യത്യസ്തമാണെങ്കിൽ (ഉദാ: "Kavya G" vs "Kaviya G"), സർക്കാർ ഡിബിടി പോർട്ടലുകൾ അപേക്ഷ നിരസിച്ചേക്കാം. ഇത് മുൻകൂട്ടി കണ്ടെത്താൻ സിവിക് ലെൻസ് സഹായിക്കുന്നു.'
    },
    {
      q: 'എനിക്ക് എപ്പോൾ വേണമെങ്കിലും ഭാഷ മാറ്റാൻ കഴിയുമോ?',
      a: 'അതെ! മുകളിലുള്ള ഹെഡർ മെനുവിൽ നിന്ന് നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും മലയാളം, തമിഴ്, ഹിന്ദി, തെലുങ്ക്, കന്നഡ, ഇംഗ്ലീഷ് എന്നിവയിലേക്ക് മാറാം. എല്ലാ പദ്ധതികളുടെയും പേരുകൾ ഉടൻ മാറും.'
    }
  ]
};

export const LOCALIZED_REMINDERS: Record<string, Partial<Record<LanguageCode, { title: string; description: string }>>> = {
  'rem-student-1': {
    en: {
      title: 'Post-Matric Scholarship Application Deadline',
      description: 'National Scholarship Portal (NSP) annual verification and biometric authentication cut-off.'
    },
    ta: {
      title: 'போஸ்ட்-மெட்ரிக் கல்வி உதவித்தொகை விண்ணப்ப இறுதி நாள்',
      description: 'தேசிய உதவித்தொகை இணையதளத்தில் (NSP) பயோமெட்ரிக் சரிபார்ப்பு மற்றும் விண்ணப்ப சமர்ப்பிப்பு கடைசி தேதி.'
    },
    hi: {
      title: 'पोस्ट-मैट्रिक छात्रवृत्ति आवेदन की अंतिम तिथि',
      description: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) वार्षिक सत्यापन एवं बायोमेट्रिक प्रमाणीकरण की कट-ऑफ तिथि।'
    },
    te: {
      title: 'పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్ దరఖాస్తు గడువు',
      description: 'నేషనల్ స్కాలర్‌షిప్ పోర్టల్ (NSP) వార్షిక బయోమెట్రిక్ ధృవీకరణ చివరి తేదీ.'
    },
    kn: {
      title: 'ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿ ಅಂತಿಮ ದಿನಾಂಕ',
      description: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (NSP) ಬಯೋಮೆಟ್ರಿಕ್ ಪರಿಶೀಲನೆಯ ಅಂತಿಮ ಗಡುವು.'
    },
    ml: {
      title: 'പോസ്റ്റ്-മെട്രിക് സ്കോളർഷിപ്പ് അപേക്ഷാ അവസാന തീയതി',
      description: 'നാഷണൽ സ്കോളർഷിപ്പ് പോർട്ടൽ (NSP) ബയോമെട്രിക് വെരിഫിക്കേഷൻ അവസാന തീയതി.'
    }
  },
  'rem-student-2': {
    en: {
      title: 'Income Certificate Annual Validity Check',
      description: 'Ensure the Tahsildar revenue digital certificate has not crossed the 1-year statutory validity.'
    },
    ta: {
      title: 'வருமானச் சான்றிதழ் வருடாந்திர செல்லுபடி சரிபார்ப்பு',
      description: 'வட்டாட்சியர் வழங்கிய டிஜிட்டல் வருமானச் சான்றிதழ் 1 வருட செல்லுபடி காலத்திற்குள் உள்ளதா என உறுதிப்படுத்தவும்.'
    },
    hi: {
      title: 'आय प्रमाण पत्र वार्षिक वैधता जांच',
      description: 'तहसीलदार द्वारा जारी डिजिटल आय प्रमाण पत्र की 1 वर्ष की वैधता की जांच करें।'
    },
    te: {
      title: 'ఆదాయ ధృవీకరణ పత్రం వార్షిక చెల్లుబాటు తనిఖీ',
      description: 'తహశీల్దార్ డిజిటల్ ఆదాయ ధృవీకరణ పత్రం 1 సంవత్సరం గడువు లోపు ఉందో లేదో నిర్ధారించుకోండి.'
    },
    kn: {
      title: 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರದ ವಾರ್ಷಿಕ ಮಾನ್ಯತೆ ಪರಿಶೀಲನೆ',
      description: 'ತಹಶೀಲ್ದಾರ್ ಡಿಜಿಟಲ್ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರದ 1 ವರ್ಷದ ಮಾನ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.'
    },
    ml: {
      title: 'വരുമാന സർട്ടിഫിക്കറ്റ് വാർഷിക കാലാവധി പരിശോധന',
      description: 'തഹസിൽദാർ ഡിജിറ്റൽ വരുമാന സർട്ടിഫിക്കറ്റിന്റെ 1 വർഷത്തെ കാലാവധി ഉറപ്പാക്കുക.'
    }
  },
  'rem-student-3': {
    en: {
      title: 'AICTE Pragati Portal Institution Verification',
      description: 'Head of Institution approval required for technical degree tuition scholarship disbursement.'
    },
    ta: {
      title: 'AICTE பிரகதி கல்வி நிறுவன சரிபார்ப்பு',
      description: 'பொறியியல் / தொழில்நுட்ப பட்டப்படிப்பு உதவித்தொகை பெற கல்லூரி முதல்வர் ஒப்புதல் பெறுதல்.'
    },
    hi: {
      title: 'एआईसीटीई प्रगति पोर्टल संस्थान सत्यापन',
      description: 'तकनीकी डिग्री ट्यूशन छात्रवृत्ति वितरण के लिए संस्थान प्रमुख का अनुमोदन आवश्यक।'
    },
    te: {
      title: 'ఏఐసీటీఈ ప్రగతి కళాశాల ధృవీకరణ',
      description: 'ఇంజనీరింగ్ స్కాలర్‌షిప్ నిధుల విడుదలకు కళాశాల ప్రిన్సిపాల్ ఆమోదం పొందడం.'
    },
    kn: {
      title: 'ಎಐಸಿಟಿಇ ಪ್ರಗತಿ ಸಂಸ್ಥೆಯ ಪರಿಶೀಲನೆ',
      description: 'ತಾಂತ್ರಿಕ ಪದವಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಬಿಡುಗಡೆಗೆ ಸಂಸ್ಥೆಯ ಮುಖ್ಯಸ್ಥರ ಅನುಮೋದನೆ ಪಡೆಯುವುದು.'
    },
    ml: {
      title: 'എഐസിടിഇ പ്രഗതി സ്ഥാപന വെരിഫിക്കേഷൻ',
      description: 'എഞ്ചിനീയറിംഗ് സ്കോളർഷിപ്പ് ലഭിക്കുന്നതിന് കോളേജ് പ്രിൻസിപ്പലിന്റെ അനുമതി ആവശ്യമാണ്.'
    }
  },
  'rem-farmer-1': {
    en: {
      title: 'PMFBY Kharif Crop Insurance Enrollment Cut-off',
      description: 'Last date to update sowing certificate and declare acreage at primary agricultural co-op.'
    },
    ta: {
      title: 'பிஎம்எஃப்பிஒய் (PMFBY) காரீஃப் பயிர்க் காப்பீடு இறுதி நாள்',
      description: 'விதைப்புச் சான்றிதழ் மற்றும் நிலப் பரப்பளவை தொடக்க வேளாண் கூட்டுறவு வங்கியில் பதிவு செய்ய கடைசி நாள்.'
    },
    hi: {
      title: 'पीएमएफबीवाई खरीफ फसल बीमा नामांकन की अंतिम तिथि',
      description: 'प्राथमिक कृषि सहकारी समिति में बुवाई प्रमाणपत्र अपडेट करने की अंतिम तिथि।'
    },
    te: {
      title: 'పీఎంఎఫ్‌బీవై ఖరీఫ్ పంటల బీమా చివరి తేదీ',
      description: 'ప్రాథమిక వ్యవసాయ సహకార సంఘంలో విత్తన ధృవీకరణ పత్రం సమర్పించడానికి చివరి గడువు.'
    },
    kn: {
      title: 'ಪಿಎಂಎಫ್‌ಬಿವೈ ಖಾರೀಫ್ ಬೆಳೆ ವಿಮೆ ನೋಂದಣಿ ಅಂತಿಮ ದಿನಾಂಕ',
      description: 'ಕೃಷಿ ಸಹಕಾರಿ ಸಂಘದಲ್ಲಿ ಬಿತ್ತನೆ ಪ್ರಮಾಣಪತ್ರ ನವೀಕರಿಸಲು ಕೊನೆಯ ದಿನಾಂಕ.'
    },
    ml: {
      title: 'പിഎംഎഫ്ബിവൈ ഖാരിഫ് വിള ഇൻഷുറൻസ് അവസാന തീയതി',
      description: 'പ്രാഥമിക കാർഷിക സഹകരണ സംഘത്തിൽ വിതച്ച സർട്ടിഫിക്കറ്റ് സമർപ്പിക്കാനുള്ള അവസാന തീയതി.'
    }
  },
  'rem-farmer-2': {
    en: {
      title: 'PM-Kisan Face-Authentication eKYC Notice',
      description: 'Mandatory Aadhaar e-KYC completion required before next installment release.'
    },
    ta: {
      title: 'பிஎம்-கிசான் முக அங்கீகார இ-கேஒய்சி அறிவிப்பு',
      description: 'அடுத்த தவணை ₹2,000 வங்கி கணக்கில் வர கட்டாய ஆதார் இ-கேஒய்சி பதிவு செய்தல்.'
    },
    hi: {
      title: 'पीएम-किसान फेस-ऑथेंटिकेशन ई-केवाईसी सूचना',
      description: 'अगली ₹2,000 किस्त जारी होने से पहले अनिवार्य आधार ई-केवाईसी पूरा करें।'
    },
    te: {
      title: 'పీఎం-కిసాన్ ఫేస్ అథెంటికేషన్ ఈ-కేవైసీ నోటీసు',
      description: 'తదుపరి ₹2,000 విడత పొందడానికి తప్పనిసరి ఆధార్ ఈ-కేవైసీ పూర్తి చేయండి.'
    },
    kn: {
      title: 'ಪಿಎಂ-ಕಿಸಾನ್ ಫೇಸ್-ದೃಢೀಕರಣ ಇ-ಕೆವೈಸಿ ಪ್ರಕಟಣೆ',
      description: 'ಮುಂದಿನ ₹2,000 ಕಂತು ಪಡೆಯಲು ಕಡ್ಡಾಯವಾಗಿ ಆಧಾರ್ ಇ-ಕೆವೈಸಿ ಪೂರ್ಣಗೊಳಿಸಿ.'
    },
    ml: {
      title: 'പിഎം-കിസാൻ ഫെയ്സ് ഒതന്റിക്കേഷൻ ഇ-കെവൈസി അറിയിപ്പ്',
      description: 'അടുത്ത ₹2,000 ഗഡു ലഭിക്കുന്നതിന് നിർബന്ധിത ആധാർ ഇ-കെവൈസി പൂർത്തിയാക്കുക.'
    }
  },
  'rem-farmer-3': {
    en: {
      title: 'Soil Health Card 3-Year Cycle Renewal',
      description: 'Schedule soil sample collection with district agriculture officer for customized NPK recommendations.'
    },
    ta: {
      title: 'மண் வள அட்டை 3 ஆண்டு கால புதுப்பித்தல்',
      description: 'உரச் செலவைக் குறைத்து அதிக மகசூல் பெற மாவட்ட வேளாண் அலுவலர் மூலம் மண் பரிசோதனை செய்தல்.'
    },
    hi: {
      title: 'मृदा स्वास्थ्य कार्ड 3-वर्षीय चक्र नवीनीकरण',
      description: 'संतुलित उर्वरक उपयोग हेतु जिला कृषि अधिकारी से मिट्टी के नमूने की जांच कराएं।'
    },
    te: {
      title: 'సాయిల్ హెల్త్ కార్డ్ 3 సంవత్సరాల పునరుద్ధరణ',
      description: 'సరియైన ఎరువుల వాడకం కోసం వ్యవసాయ అధికారి ద్వారా నేల పరీక్ష చేయించుకోండి.'
    },
    kn: {
      title: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್ 3 ವರ್ಷಗಳ ನವೀಕರಣ',
      description: 'ಸಮತೋಲಿತ ರಸಗೊಬ್ಬರ ಬಳಕೆಗಾಗಿ ಕೃಷಿ ಅಧಿಕಾರಿಯಿಂದ ಮಣ್ಣಿನ ಮಾದರಿ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ.'
    },
    ml: {
      title: 'സോയിൽ ഹെൽത്ത് കാർഡ് 3 വർഷത്തെ പുതുക്കൽ',
      description: 'വളപ്രയോഗം ക്രമീകരിക്കുന്നതിന് കൃഷി ഓഫീസർ വഴി മണ്ണു പരിശോധന നടത്തുക.'
    }
  },
  'rem-senior-1': {
    en: {
      title: 'Jeevan Pramaan (Digital Life Certificate) Submission',
      description: 'Annual biometric life verification required to prevent pension disruption.'
    },
    ta: {
      title: 'ஜீவன் பிரமாண் (டிஜிட்டல் வாழ்நாள் சான்றிதழ்) சமர்ப்பித்தல்',
      description: 'ஓய்வூதியம் தடையின்றி தொடர்ந்து கிடைக்க ஆண்டுதோறும் சமர்ப்பிக்க வேண்டிய டிஜிட்டல் வாழ்நாள் சான்று.'
    },
    hi: {
      title: 'जीवन प्रमाण (डिजिटल जीवन प्रमाण पत्र) प्रस्तुति',
      description: 'पेंशन सुचारू रूप से जारी रखने के लिए वार्षिक बायोमेट्रिक जीवन सत्यापन आवश्यक।'
    },
    te: {
      title: 'జీవన్ ప్రమాణ్ (డిజిటల్ లైఫ్ సర్టిఫికేట్) సమర్పణ',
      description: 'పెన్షన్ నిరంతరాయంగా అందడానికి వార్షిక బయోమెట్రిక్ జీవన్ ప్రమాణ్ సమర్పించండి.'
    },
    kn: {
      title: 'ಜೀವನ್ ಪ್ರಮಾಣ್ (ಡಿಜಿಟಲ್ ಜೀವಿತ ಪ್ರಮಾಣಪತ್ರ) ಸಲ್ಲಿಕೆ',
      description: 'ಪಿಂಚಣಿ ತಡೆರಹಿತವಾಗಿ ಮುಂದುವರಿಯಲು ವಾರ್ಷಿಕ ಬಯೋಮೆಟ್ರಿಕ್ ಜೀವಿತ ಪ್ರಮಾಣಪತ್ರ ಸಲ್ಲಿಸಿ.'
    },
    ml: {
      title: 'ജീവൻ പ്രമാൺ (ഡിജിറ്റൽ ലൈഫ് സർട്ടിഫിക്കറ്റ്) സമർപ്പണം',
      description: 'പെൻഷൻ തടസ്സമില്ലാതെ ലഭിക്കാൻ വാർഷിക ബയോമെട്രിക് ലൈഫ് സർട്ടിഫിക്കറ്റ് സമർപ്പിക്കുക.'
    }
  },
  'rem-senior-2': {
    en: {
      title: 'Ayushman Vay Vandana Card Active',
      description: 'Your Universal ₹5 Lakh health cover for 70+ seniors is active across 29,000+ empaneled hospitals.'
    },
    ta: {
      title: 'ஆயுஷ்மான் வய வந்தனா மருத்துவ அட்டை இயக்கத்தில் உள்ளது',
      description: '70 வயதுக்கு மேற்பட்டோருக்கான ₹5 லட்சம் கட்டணமில்லா மருத்துவக் காப்பீடு 29,000+ மருத்துவமனைகளில் பயன்பாட்டில் உள்ளது.'
    },
    hi: {
      title: 'आयुष्मान वय वंदना कार्ड सक्रिय',
      description: '70+ बुजुर्गों के लिए आपका ₹5 लाख का कैशलेस स्वास्थ्य कवर 29,000+ अस्पतालों में सक्रिय है।'
    },
    te: {
      title: 'ఆయుష్మాన్ వయ వందన కార్డ్ సక్రియంగా ఉంది',
      description: '70+ వృద్ధుల కోసం మీ ₹5 లక్షల నగదు రహిత ఆరోగ్య కవరేజ్ 29,000+ ఆసుపత్రులలో అందుబాటులో ఉంది.'
    },
    kn: {
      title: 'ಆಯುಷ್ಮಾನ್ ವಯ ವಂದನಾ ಕಾರ್ಡ್ ಸಕ್ರಿಯವಾಗಿದೆ',
      description: '70+ ಹಿರಿಯ ನಾಗರಿಕರಿಗಾಗಿ ನಿಮ್ಮ ₹5 ಲಕ್ಷದ ನಗದು ರಹಿತ ಆರೋಗ್ಯ ವಿಮೆ 29,000+ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿದೆ.'
    },
    ml: {
      title: 'ആയുഷ്മാൻ വയ വന്ദന കാർഡ് സജീവമാണ്',
      description: '70+ മുതിർന്ന പൗരന്മാർക്കുള്ള ₹5 ലക്ഷം രൂപയുടെ സൗജന്യ ഇൻഷുറൻസ് 29,000+ ആശുപത്രികളിൽ ലഭ്യമാണ്.'
    }
  },
  'rem-senior-3': {
    en: {
      title: 'Free Geriatric Health Camp in District Hospital',
      description: 'Complimentary screening for vision cataract, joint mobility, and cardiac wellness under RVY & NP-OPH.'
    },
    ta: {
      title: 'மாவட்ட அரசு தலைமை மருத்துவமனையில் இலவச முதியோர் மருத்துவ முகாம்',
      description: 'கண்புரை பரிசோதனை, மூட்டு வலி மற்றும் இதய பரிசோதனைகள் இலவசமாக நடத்தப்படும் முகாம்.'
    },
    hi: {
      title: 'जिला अस्पताल में निःशुल्क वृद्धजन स्वास्थ्य शिविर',
      description: 'मोतियाबिंद, जोड़ों के दर्द और हृदय स्वास्थ्य की निःशुल्क जांच एवं परामर्श।'
    },
    te: {
      title: 'జిల్లా ఆసుపత్రిలో ఉచిత వయోవృద్ధుల ఆరోగ్య శిబిరం',
      description: 'కంటిశుక్లం, కీళ్ల నొప్పులు మరియు గుండె సంబంధిత వ్యాధులకు ఉచిత వైద్య పరీక్షలు.'
    },
    kn: {
      title: 'ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಉಚಿತ ಹಿರಿಯರ ಆರೋಗ್ಯ ತಪಾಸಣಾ ಶಿಬಿರ',
      description: 'ಕಣ್ಣಿನ ಪೊರೆ, ಕೀಲು ನೋವು ಮತ್ತು ಹೃದಯ ತಪಾಸಣೆಯ ಉಚಿತ ಆರೋಗ್ಯ ಶಿಬಿರ.'
    },
    ml: {
      title: 'ജില്ലാ ആശുപത്രിയിൽ സൗജന്യ വയോജന മെഡിക്കൽ ക്യാമ്പ്',
      description: 'തിമിര പരിശോധന, സന്ധി വേദന, ഹൃദ്രോഗ പരിശോധന എന്നിവ സൗജന്യമായി നടത്തപ്പെടുന്നു.'
    }
  }
};

export function getLocalizedScheme(scheme: Scheme, lang: LanguageCode): Scheme {
  const override = LOCALIZED_SCHEMES[scheme.id]?.[lang];
  if (!override) return scheme;
  return {
    ...scheme,
    name: override.name || scheme.name,
    shortDescription: override.shortDescription || scheme.shortDescription,
    benefits: override.benefits || scheme.benefits,
    department: override.department || scheme.department,
    requiredDocuments: override.requiredDocuments || scheme.requiredDocuments
  };
}

export function getLocalizedSchemeById(schemeId: string, lang: LanguageCode): { name: string; department?: string; shortDescription?: string } | null {
  const override = LOCALIZED_SCHEMES[schemeId]?.[lang];
  if (override) {
    return {
      name: override.name,
      department: override.department,
      shortDescription: override.shortDescription
    };
  }
  return null;
}

export function getLocalizedLegalRight(right: LegalRight, lang: LanguageCode): LegalRight {
  const override = LOCALIZED_RIGHTS[right.id]?.[lang];
  if (!override) return right;
  return {
    ...right,
    title: override.title || right.title,
    description: override.description || right.description,
    actOrBasis: override.actOrBasis || right.actOrBasis,
    keyEntitlements: override.keyEntitlements || right.keyEntitlements,
    howToExercise: override.howToExercise || right.howToExercise
  };
}

export function getLocalizedHelplines(lang: LanguageCode): LocalizedHelplineItem[] {
  return LOCALIZED_HELPLINES[lang] || LOCALIZED_HELPLINES.en;
}

export function getLocalizedFaqs(lang: LanguageCode): LocalizedFaqItem[] {
  return LOCALIZED_FAQS[lang] || LOCALIZED_FAQS.en;
}

export function getLocalizedReminder(reminder: ReminderItem, lang: LanguageCode): ReminderItem {
  const override = LOCALIZED_REMINDERS[reminder.id]?.[lang];
  if (!override) return reminder;
  return {
    ...reminder,
    title: override.title || reminder.title,
    description: override.description || reminder.description
  };
}

export function getLocalizedSampleClaims(lang: LanguageCode): LocalizedSampleClaim[] {
  return LOCALIZED_SAMPLE_CLAIMS[lang] || LOCALIZED_SAMPLE_CLAIMS.en;
}
