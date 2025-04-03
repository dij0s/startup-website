# 3D Duck Showcase Website

A React-based website to showcase our startup's expertise in 3D models texturing and painting.

## Getting Started

### Prerequisites

First, you'll need to set up your development environment:

```bash
# Install NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.nvm/nvm.sh

# Install and use Node.js 23.10.0
nvm install 23.10.0
nvm use 23.10.0

# Install Bun
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/dij0s/startup-website
```

2. Navigate to the project directory
```bash
cd startup-website
```

3. Install dependencies using Bun
```bash
bun install
```

### Development

Run the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:5173`

## Deployment

The website is automatically deployed to Vercel when changes are pushed to the `main` branch. You can view the live version at: [startup-website-ebon.vercel.app](https://startup-website-ebon.vercel.app/)
