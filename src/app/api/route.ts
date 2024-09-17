export function GET() {
  return Response.json({
    message: 'hello'
  }, {
    headers:{
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'https://bb.vuecasts.ir',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    } 
  })
}