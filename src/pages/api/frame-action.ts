import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Log the request for debugging
  console.log("Request method:", req.method);
  console.log("Request body:", JSON.stringify(req.body));
  
  // Get button index from the request
  const buttonIndex = req.body?.untrustedData?.buttonIndex || 1;
  
  // Handle different actions based on button index
  switch (buttonIndex) {
    case 1: // Deposit
      return res.status(200).json({
        image: "https://wineth-frames.vercel.app/images/embed.png",
        buttons: [
          { label: "Connect Wallet to Deposit", action: "link", target: "https://wineth.org" },
          { label: "Back to Menu" }
        ]
      });
    
    case 2: // Withdraw
      return res.status(200).json({
        image: "https://wineth-frames.vercel.app/images/embed.png",
        buttons: [
          { label: "Connect Wallet to Withdraw", action: "link", target: "https://wineth.org" },
          { label: "Back to Menu" }
        ]
      });
    
    case 3: // Balance
      return res.status(200).json({
        image: "https://wineth-frames.vercel.app/images/embed.png",
        buttons: [
          { label: "View My Balance", action: "link", target: "https://wineth.org/dashboard" },
          { label: "Back to Menu" }
        ]
      });
    
    default: // Back to Menu or default
      return res.status(200).json({
        image: "https://wineth-frames.vercel.app/images/embed.png",
        buttons: [
          { label: "Deposit" },
          { label: "Withdraw" },
          { label: "My Balance" },
          { label: "Visit Website", action: "link", target: "https://wineth.org" }
        ]
      });
  }
} 