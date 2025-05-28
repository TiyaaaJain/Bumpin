import { validateRequest } from '../middleware';

export async function POST(request: Request) {
  const body = await validateRequest(request);
  if (body instanceof Response) {
    return body;
  }

  try {
    // Validate required fields
    const { name, email, phone, role, experience, linkedinProfile } = body;
    if (!name || !email || !phone || !role || !experience || !linkedinProfile) {
      return new Response('Missing required fields', { status: 400 });
    }

    // Mock successful registration
    return new Response(JSON.stringify({
      message: 'Worker application submitted successfully',
      data: { id: Date.now() }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
