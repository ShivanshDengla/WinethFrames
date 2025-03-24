import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Process the deposit action
  // This is where you'd implement your app logic
  
  // Return a new frame as the response
  res.status(200).json({
    image: "https://wineth-frames.vercel.app/images/deposit-success.png",
    buttons: [
      {
        label: "View My Deposits",
        action: "post",
        target: "https://wineth-frames.vercel.app/api/view-deposits"
      },
      {
        label: "Back to Home",
        action: "post",
        target: "https://wineth-frames.vercel.app/api/home"
      }
    ]
  });
} 