import { google } from "googleapis"
import { NextResponse } from "next/server"

const REQUIRED_FIELDS = ["name", "company", "email", "city", "area", "mobile", "message"] as const

type ContactPayload = Record<(typeof REQUIRED_FIELDS)[number], string>

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>

    for (const field of REQUIRED_FIELDS) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 })
      }
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n")

    if (!spreadsheetId || !clientEmail || !privateKey) {
      return NextResponse.json({ error: "Sheets credentials not configured" }, { status: 500 })
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.company, body.email, body.city, body.area, body.mobile, body.message]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form submission failed:", error)
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
  }
}

