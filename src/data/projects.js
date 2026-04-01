/**
 * Sample project data for portfolio website
 * Each project includes: id, title, description, techStack, features, role, githubUrl, liveUrl
 */

export const projects = [
  {
    id: 'project-1',
    title: 'VaultX',
    description: 'A secure Web3 wallet dashboard for Ethereum and EVM-compatible chains with multi-wallet support, balance tracking, transaction history, and token transfers.',
    techStack: ['React', 'Wagmi', 'Reown AppKit', 'Viem', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    features: [
      'Connect multiple EVM wallets (MetaMask, WalletConnect)',
      'View native token balances (ETH, MATIC, etc.)',
      'Transaction history tracking',
      'Send native tokens via connected wallet',
      'Auto-updates on network or account change',
      'Wallet state persistence per user',
      'Supports Ethereum, Polygon, Arbitrum, Optimism, Base, Sepolia',
    ],
    role: 'Full-Stack Developer',
    githubUrl: 'https://github.com/abhinav21s/VaultX',
    liveUrl: null
  },
  {
    id: 'project-2',
    title: 'VoyageValt',
    description: 'An AI-powered travel planning web app that generates customized day-wise itineraries based on destination, budget, and preferences with maps and weather integration.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Firebase Firestore', 'Groq LLaMA', 'Google Places API', 'Google Maps API', 'Google Routes API'],
    features: [
      'AI-generated day-wise travel itineraries (Groq LLaMA)',
      'Hotel recommendations with ratings and price range',
      'Route planning with Google Maps integration',
      'Multiple travel modes (driving, public transport)',
      'Weather information for destination',
      'Nearby places and points of interest',
      'Persistent trip storage with Firebase',
    ],
    role: 'Full-Stack Developer',
    githubUrl: 'https://github.com/abhinav21s/Voyage-valt',
    liveUrl: null
  },
  {
    title: 'Decentralized Voting System',
    description: 'An end-to-end decentralized voting app using a React frontend, Node/Express + MySQL backend, and an Ethereum smart contract. MFA login, on-chain immutable votes, and transparent admin results.',
    techStack: ['React', 'Ethers.js', 'Solidity', 'Hardhat', 'Node.js', 'Express', 'MySQL'],
    features: [
      'Blockchain-backed voting via Solidity smart contract',
      'Multi-factor authentication (Aadhar ID, phone OTP, optional face verification)',
      'Face capture and comparison via react-webcam',
      'Immutable on-chain vote storage',
      'Hybrid storage: votes on-chain, user data in MySQL',
      'Admin dashboard with transparent vote results',
      'Supports Moonbase Alpha testnet',
    ],
    role: 'Full-Stack Developer',
    githubUrl: 'https://github.com/abhinav21s/Decentralized_Voting',
    liveUrl: null
  },
  {
    id: 'project-4',
    title: 'Web Wallet',
    description: 'A non-custodial web-based Ethereum wallet where the browser generates and encrypts the BIP-39 seed phrase client-side. Only encrypted data is stored server-side, keeping private keys secure.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Ethers.js', 'BIP-39', 'HD Wallet Paths'],
    features: [
      'Non-custodial: private keys never leave the client',
      'BIP-39 seed phrase generation in the browser',
      'Client-side encryption with user password',
      'Multiple Ethereum accounts via HD wallet paths',
      'Email login with multi-device recovery',
      'MetaMask-like security model',
    ],
    role: 'Full-Stack Developer',
    githubUrl: 'https://github.com/abhinav21s/web-wallet',
    liveUrl: null
  },
  
  // {
  //   id: 'project-5',
  //   title: 'Golf Charity Subscription Platform',
  //   description: 'A subscription-driven web app that combines golf performance tracking (Stableford scores), monthly draw-based prize pools, and automated charitable giving.',
  //   techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Supabase (PostgreSQL)', 'Stripe'],
  //   features: [
  //     'Subscription management (monthly/yearly) with Stripe',
  //     'Stableford score entry and tracking (last 5 scores)',
  //     'Monthly 3-tier prize draw engine',
  //     'Charity selection with automatic 10% contribution',
  //     'User and admin dashboards',
  //     'Email notifications',
  //     'JWT authentication',
  //   ],
  //   role: 'Full-Stack Developer',
  //   githubUrl: 'https://github.com/abhinav21s/golf-charity',
  //   liveUrl: null
  // }
];
