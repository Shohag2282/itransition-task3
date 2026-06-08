const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// গসাগু (GCD) বের করার ফাংশন
function getGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// লসাগু (LCM) বের করার ফাংশন
function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
}

// ⚠️ মনে রাখবেন: 'your_email_domain_com' এর জায়গায় আপনার আসল ইমেইলটি বসাবেন।
// যেমন: sadia_kabir_mouly_gmail_com অথবা shohag_hasan_gmail_com (সব চিহ্ন '_' হবে)
app.get('/app/shamimhossen2282_gmail_com', (req, res) => {
    const xRaw = req.query.x;
    const yRaw = req.query.y;

    // স্বাভাবিক সংখ্যা (Natural Number > 0) কিনা চেক করার লজিক
    const isNaturalNumber = (str) => typeof str === 'string' && /^\d+$/.test(str) && parseInt(str, 10) > 0;

    // Plain text রেসপন্স সেট করা (কোনো JSON বা HTML যেন না যায়)
    res.setHeader('Content-Type', 'text/plain');

    if (!isNaturalNumber(xRaw) || !isNaturalNumber(yRaw)) {
        return res.send("NaN");
    }

    const x = parseInt(xRaw, 10);
    const y = parseInt(yRaw, 10);

    const lcm = getLCM(x, y);

    // লসাগু সংখ্যাটি Plain string হিসেবে পাঠানো হচ্ছে
    res.send(lcm.toString());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});