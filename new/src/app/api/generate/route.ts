import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("🔥 API HIT");

    const { prompt } = await req.json();

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const token = process.env.CLOUDFLARE_API_TOKEN;

    console.log("Account ID:", accountId ? "OK" : "MISSING");
    console.log("Token:", token ? "OK" : "MISSING");

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/black-forest-labs/flux-1-schnell`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    );

    const data = await response.json();

    console.log("Cloudflare response:", data);

    // ❌ Handle Cloudflare failure
    if (!data.success) {
      return Response.json(
        { error: data.errors },
        { status: 500 }
      );
    }

    // ❌ Check image exists
    if (!data.result || !data.result.image) {
      return Response.json(
        { error: "No image returned" },
        { status: 500 }
      );
    }

    let base64 = data.result.image;

    // ✅ Remove prefix if exists
    base64 = base64.replace(/^data:image\/\w+;base64,/, "");

    // ❌ Validate base64
    if (!base64 || base64.length < 100) {
      return Response.json(
        { error: "Invalid image data" },
        { status: 500 }
      );
    }

    const binary = Buffer.from(base64, "base64");

    return new Response(binary, {
      headers: {
        "Content-Type": "image/jpeg",
      },
    });

  } catch (error) {
    console.error("💥 API ERROR:", error);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}