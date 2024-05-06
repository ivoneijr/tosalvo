import { rescued } from '@/server/routes/v1/rescued';

export async function GET() {
  const data = await rescued.list();

  return Response.json({ data });
}
