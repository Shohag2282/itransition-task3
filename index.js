const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// GCD function (Euclidean Algorithm)
function getGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// LCM function (safe integer output)
function getLCM(a, b) {
    return Math.floor((a * b) / getGCD(a, b));
}

app.get('/shamimhossen2282_gmail_com', (req, res) => {
    const xRaw = req.query.x;
    const yRaw = req.query.y;

    // strict natural number check (>0 integer only)
    const isNaturalNumber = (v) =>
        typeof v === 'string' && /^\d+$/.test(v) && parseInt(v, 10) > 0;

    res.type('text/plain');

    // validation
    if (!isNaturalNumber(xRaw) || !isNaturalNumber(yRaw)) {
        return res.send("NaN");
    }

    const x = parseInt(xRaw, 10);
    const y = parseInt(yRaw, 10);

    const lcm = getLCM(x, y);

    return res.send(String(lcm));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});