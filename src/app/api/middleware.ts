export async function validateRequest(request: Request) {
  try {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response('Content-Type must be application/json', { status: 400 });
    }

    const body = await request.json();
    if (!body) {
      return new Response('Request body is required', { status: 400 });
    }

    return body;
  } catch (error) {
    return new Response('Invalid JSON payload', { status: 400 });
  }
}
