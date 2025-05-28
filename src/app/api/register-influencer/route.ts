import { validateRequest } from '../middleware';

export async function POST(request: Request) {
  const body = await validateRequest(request);
  if (body instanceof Response) {
    return body;
  }

  try {
    // Here you would typically:
    // 1. Validate the data
    // 2. Store in database
    // 3. Send confirmation email
    // For now, we'll just mock a successful response
    
    // Validate required fields
    const { name, email, phone, instagramHandle, followers } = body;
    if (!name || !email || !phone || !instagramHandle || !followers) {
      return new Response('Missing required fields', { status: 400 });
    }

    // Mock successful registration
    return new Response(JSON.stringify({
      message: 'Influencer registration successful',
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
