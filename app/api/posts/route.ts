import { getAllFilesFrontMatter } from '@/lib/mdx';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await getAllFilesFrontMatter('blog');
  return NextResponse.json(posts);
}
