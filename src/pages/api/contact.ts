export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email as string)) {
    return new Response(
      JSON.stringify({
        message: "Email does not match valid email format",
      }),
      { status: 400 }
    );
  }

  try {
    await fetch("https://formspree.io/f/xvoevgel", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })

    // Do something with the data, then return a success response
    return new Response(
      JSON.stringify({
        message: "Success! Thank you for filling the contact form"
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong. Please try again later",
      }),
      { status: 500 }
    );
  }
};