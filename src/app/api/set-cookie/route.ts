import { cookies } from "next/headers";

export function POST(req: Request){
  const _req = JSON.stringify(req)
  const cookieStore = cookies();

  const date = new Date();
  date.setDate(date.getDate() + 2);

  const token = 'test';
  cookieStore.set('token', token, {
    domain: process.env.DOMAIN ?? undefined,
    path: '/',
    sameSite: 'lax',
    expires: date,
    httpOnly: true,
    secure: true,
  })

  return Response.json({
    status: 'OK',
    _req
  }, {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}