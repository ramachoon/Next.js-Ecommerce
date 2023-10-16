import { NextResponse } from "next/server"

export default function response(data) {
  return NextResponse.json(data)
}