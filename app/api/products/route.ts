import { getCloudflareContext } from "@opennextjs/cloudflare"
import { NextResponse } from "next/server"

export async function GET() {
  const { env } = getCloudflareContext()
  const db = env.DB as D1Database

  const { results } = await db
    .prepare("SELECT id, name, description, price, category, photo_key, created_at FROM products ORDER BY created_at DESC")
    .all()

  const publicPhotoUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL

  const products = results.map((row: any) => ({
    id: row.id,
    name: row.name,
    description: row.description,
    price: row.price,
    category: row.category,
    image: row.photo_key ? `${publicPhotoUrl}/${row.photo_key}` : null,
  }))

  return NextResponse.json(products)
}
