import type { NextApiRequest, NextApiResponse } from 'next';

import env from '@/configs/env';
import fetcher from '@/configs/fetcher';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await fetcher
    .get(`${env.API_BASE_URL}/fee-assessment-categories`, {
      params: req.query,
    })
    .then((_res) => _res.data);

  res.status(200).json(data);
}
