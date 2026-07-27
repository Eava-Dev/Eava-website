import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const COOLDOWN_SECONDS = 60 * 60 * 24;

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const key = `eava-talk-widget-cooldown:${ip}`;

  const setResult = await redis.set(key, Date.now(), {
    nx: true,
    ex: COOLDOWN_SECONDS,
  });

  if (setResult === null) {
    const ttl = await redis.ttl(key);
    return NextResponse.json({
      allowed: false,
      retryAfterSeconds: ttl > 0 ? ttl : COOLDOWN_SECONDS,
    });
  }

  return NextResponse.json({ allowed: true });
}
