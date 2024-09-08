export async function GET(
  request: Request,
  { params: { category } }: { params: { category: string } }
): Promise<Response> {
  return new Response(JSON.stringify({ category }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
