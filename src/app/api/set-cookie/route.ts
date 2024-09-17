import { cookies } from "next/headers";

export function POST(req: Request){
  const _req = JSON.stringify(req)
  const cookieStore = cookies();

  const date = new Date();
  date.setDate(date.getDate() + 2);

  const token = 'test';
  cookieStore.set('token', token, {
    domain: req.headers.get('origin') ?? 'localhost',
    path: '/api/v2/test',
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
      'content-type': 'application/json'
    }
  })
}