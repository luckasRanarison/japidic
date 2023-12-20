"use server";

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

function setCookies(
  key: string,
  value: string,
  options?: Partial<ResponseCookie>
) {
  cookies().set(key, value, options);
}

export { setCookies };
