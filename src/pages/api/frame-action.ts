import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Accept both GET and POST requests
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the action from the request (either from body or query)
  const action = req.method === 'POST' 
    ? req.body?.untrustedData?.buttonIndex || 1
    : req.query.action || 'home';

  // Handle different actions based on button index
  switch (action) {
    case 1:
    case 'deposit':
      return handleDeposit(res);
    case 2:
    case 'withdraw':
      return handleWithdraw(res);
    case 3:
    case 'balance':
      return handleBalance(res);
    default:
      return handleHome(res);
  }
}

// Home screen with main options
function handleHome(res: NextApiResponse) {
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

// Deposit screen
function handleDeposit(res: NextApiResponse) {
  return res.status(200).json({
    image: "https://wineth-frames.vercel.app/images/embed.png",
    buttons: [
      { label: "Connect Wallet to Deposit", action: "link", target: "https://wineth.org" },
      { label: "Back to Menu" }
    ]
  });
}

// Withdraw screen
function handleWithdraw(res: NextApiResponse) {
  return res.status(200).json({
    image: "https://wineth-frames.vercel.app/images/embed.png",
    buttons: [
      { label: "Connect Wallet to Withdraw", action: "link", target: "https://wineth.org" },
      { label: "Back to Menu" }
    ]
  });
}

// Balance screen
async function handleBalance(res: NextApiResponse) {
  return res.status(200).json({
    image: "https://wineth-frames.vercel.app/images/embed.png",
    buttons: [
      { label: "View My Balance", action: "link", target: "https://wineth.org/dashboard" },
      { label: "Back to Menu" }
    ]
  });
} 