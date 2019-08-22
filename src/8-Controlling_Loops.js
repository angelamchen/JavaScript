let i = 0;
for (; i < 12; i++) { // can leave initialization of variable out, but need semicolon
    if (i === 8) {
        break;
    }
}

console.log(i) // 8