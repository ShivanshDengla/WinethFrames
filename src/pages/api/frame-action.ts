import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only accept POST requests from frames
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the action from the request
  const { action, fid, address } = req.body;

  // Handle different actions
  switch (action) {
    case 'home':
      return handleHome(res);
    case 'deposit':
      return handleDeposit(res);
    case 'withdraw':
      return handleWithdraw(res);
    case 'balance':
      return handleBalance(res, address);
    case 'rewards':
      return handleRewards(res, address);
    default:
      return handleHome(res);
  }
}

// Home screen with main options
function handleHome(res: NextApiResponse) {
  return res.status(200).json({
    image: "https://wineth-frames.vercel.app/images/embed.png",
    buttons: [
      {
        label: "Deposit",
        action: "post",
        target: "https://wineth-frames.vercel.app/api/frame-action?action=deposit"
      },
      {
        label: "Withdraw",
        action: "post",
        target: "https://wineth-frames.vercel.app/api/frame-action?action=withdraw"
      },
      {
        label: "My Balance",
        action: "post",
        target: "https://wineth-frames.vercel.app/api/frame-action?action=balance"
      },
      {
        label: "Visit Website",
        action: "link",
        target: "https://wineth.org"
      }
    ]
  });
}

// Deposit screen
function handleDeposit(res: NextApiResponse) {
  return res.status(200).json({
    image: "https://wineth-frames.vercel.app/images/deposit.png",
    buttons: [
      {
        label: "Connect Wallet to Deposit",
        action: "link",
        target: "https://wineth.org/deposit"
      },
      {
        label: "Back to Menu",
        action: "post",
        target: "https://wineth-frames.vercel.app/api/frame-action?action=home"
      }
    ]
  });
}

// Withdraw screen
function handleWithdraw(res: NextApiResponse) {
  return res.status(200).json({
    image: "https://wineth-frames.vercel.app/images/withdraw.png",
    buttons: [
      {
        label: "Connect Wallet to Withdraw",
        action: "link",
        target: "https://wineth.org/withdraw"
      },
      {
        label: "Back to Menu",
        action: "post",
        target: "https://wineth-frames.vercel.app/api/frame-action?action=home"
      }
    ]
  });
}

// Balance screen
async function handleBalance(res: NextApiResponse, address?: string) {
  // If we have an address, we could fetch real balance data
  // For now, we'll just show a generic balance screen
  
  return res.status(200).json({
    image: "https://wineth-frames.vercel.app/images/balance.png",
    buttons: [
      {
        label: "View My Balance",
        action: "link",
        target: "https://wineth.org/dashboard"
      },
      {
        label: "Back to Menu",
        action: "post",
        target: "https://wineth-frames.vercel.app/api/frame-action?action=home"
      }
    ]
  });
}

// Rewards screen
async function handleRewards(res: NextApiResponse, address?: string) {
  return res.status(200).json({
    image: "https://wineth-frames.vercel.app/images/rewards.png",
    buttons: [
      {
        label: "Claim Rewards",
        action: "link",
        target: "https://wineth.org/rewards"
      },
      {
        label: "Back to Menu",
        action: "post",
        target: "https://wineth-frames.vercel.app/api/frame-action?action=home"
      }
    ]
  });
} 