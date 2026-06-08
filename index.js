const express = require('express');
const app = express();

const PORT = process.env.PORT || 10000; // Render-এর জন্য ১০০০০ রাখা ভালো

// GCD function (Euclidean Algorithm) - BigInt দিয়ে
function getGCD(a, b) {
    while (b !== 0n) { // এখানে 0n হলো BigInt এর শূন্য
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// LCM function - BigInt দিয়ে (আগে ভাগ, তারপর গুণ করলে ওভারফ্লোর চান্স থাকে না)
function getLCM(a, b) {
    if (a === 0n || b === 0n) return 0n;
    return (a / getGCD(a, b)) * b;
}

app.get('/shamimhossen2282_gmail_com', (req, res) => {
    const xRaw = req.query.x;
    const yRaw = req.query.y;

    // strict natural number check
    const isNaturalNumber = (v) =>
        typeof v === 'string' && /^\d+$/.test(v) && parseInt(v, 10) > 0;

    res.type('text/plain');

    // validation
    if (!isNaturalNumber(xRaw) || !isNaturalNumber(yRaw)) {
        return res.send("NaN");
    }

    try {
        // এখানে সাধারণ parseInt এর বদলে BigInt() ব্যবহার করতে হবে
        const x = BigInt(xRaw);
        const y = BigInt(yRaw);

        const lcm = getLCM(x, y);

        // BigInt কে স্ট্রিং বানিয়ে রেসপন্স পাঠানো
        return res.send(lcm.toString());
    } catch (e) {
        return res.send("NaN");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});