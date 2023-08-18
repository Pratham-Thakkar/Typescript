"use strict";
// think use case of satisfies keyword in typescript
// extending types
Object.defineProperty(exports, "__esModule", { value: true });
//bigint
function convertToBinary(x) {
    let bin = 0n;
    let rem, i = 1n, step = 1n;
    while (x != 0n) {
        rem = x % 2n;
        x = (x / 2n);
        bin = bin + rem * i;
        i = i * 10n;
    }
    console.log(`Binary: ${bin}`);
}
convertToBinary(8n);
function convertToBinaryNormal(x) {
    let bin = 0;
    let rem, i = 1;
    while (x != 0) {
        rem = x % 2;
        x = x / 2;
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}
convertToBinaryNormal(7890678);
const routes = {
    AUTH: {
        path: "/auth",
    },
};
routes.Nonsense.path;
const routes2 = {
    AUTH: {
        path: '/auth',
        nonsense: 'key'
    },
};
//truthy values
if (true)
    if ({})
        if ([])
            if (42)
                if ("0")
                    if ("false")
                        if (new Date())
                            if (-42)
                                if (12n)
                                    if (3.14)
                                        if (-3.14)
                                            if (Infinity)
                                                if (-Infinity)
                                                    //falsy values
                                                    if (false) {
                                                        // Not reachable
                                                    }
if (null) {
    // Not reachable
}
if (undefined) {
    // Not reachable
}
if (0) {
    // Not reachable
}
if (-0) {
    // Not reachable
}
if (0n) {
    // Not reachable
}
if (NaN) {
    // Not reachable
}
if ("") {
    // Not reachable
}
