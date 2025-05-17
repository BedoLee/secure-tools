import { NextResponse } from 'next/server';

export async function GET() {
  // Yerel dosya yolu
  const downloadUrl = "/LastActivityView.exe";
  
  return NextResponse.json({
    url: downloadUrl,
    version: "1.0.0",
    fileName: "LastActivityView.exe"
  });
} 