const SAFE_INT_HI_MASK = 0x1fffff; // 53 - 32 = 21 bits
const SAFE_INT_HI_MULT = 0x100000000; // 1 << 32
const SAFE_INT_HI_SIGN = 1 << 21; // positive if bit is set

export function fromSafeInt(a) {
  if (!Number.isSafeInteger(a)) {
    throw new Error(`${a} is not a safe integer`);
  }
  if (a <= 0) {
    const b = a + Number.MAX_SAFE_INTEGER; // 0 <= b <= 2 ** 53 - 1
    const lo = b % SAFE_INT_HI_MULT | 0;
    const hi = Math.floor(b / SAFE_INT_HI_MULT) & SAFE_INT_HI_MASK;
    return { lo, hi };
  } else {
    const b = a - 1; // 0 <= b <= 2 ** 53 - 2
    const lo = b % SAFE_INT_HI_MULT | 0;
    const hi = (Math.floor(b / SAFE_INT_HI_MULT) & SAFE_INT_HI_MASK) | SAFE_INT_HI_SIGN;
    return { lo, hi };
  }
}


export async function foo() {
  const x = await Promise.resolve(42);
  return x;
}

foo();
foo().catch(err => {
  const msg = err.toString();
  // eslint-disable-next-line no-console
  console.error(msg);
});
