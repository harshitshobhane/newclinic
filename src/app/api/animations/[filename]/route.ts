import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const { filename } = params
    
    // Validate filename to prevent directory traversal
    if (!filename || filename.includes('..') || filename.includes('/')) {
      return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
    }
    
    // Construct the file path
    const filePath = path.join(process.cwd(), 'public', filename)
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }
    
    // Read and return the file
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const jsonData = JSON.parse(fileContent)
    
    return NextResponse.json(jsonData)
  } catch (error) {
    console.error('Error serving animation file:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
