# 🌱 GLEC API Dev2

> GLEC Framework based B2B SaaS API platform for logistics emissions calculation

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/DEOKHOKANG/glec-api-dev2-mcp.git
cd glec-api-dev2-mcp

# Set up environment variables
cp .env.example .env
# Update .env file with your values

# Run with Docker
docker-compose up -d

# Or run locally
npm install
npm run dev
```

## 📁 Project Structure

```
glec-api-dev2-mcp/
├── api-gateway/          # Express.js API Gateway
├── frontend/            # React + Next.js Dashboard
├── shared/             # Common types and utilities
├── docs/              # Project documentation
├── docker-compose.yml  # Development environment
└── README.md
```

## 🔗 Key Links

- **Repository**: https://github.com/DEOKHOKANG/glec-api-dev2-mcp
- **API Documentation**: http://localhost:3000/docs (coming soon)
- **Health Check**: http://localhost:3000/health
- **Frontend Dashboard**: http://localhost:3001 (coming soon)

## 🧪 Testing

```bash
# Run API tests
npm run test:gateway

# Run with coverage
npm run test:coverage

# Lint code
npm run lint
```

## 📊 Development Progress

- ✅ Project setup and repository initialization
- 🚧 API Gateway basic implementation
- ⏳ Supabase database setup (pending)
- ⏳ Authentication service (pending)
- ⏳ GLEC calculation engine (pending)

**Current Progress**: 10% (Basic infrastructure setup)

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js with TypeScript
- **Database**: Supabase (PostgreSQL)
- **Cache**: Redis
- **Auth**: JWT + API Keys

### Frontend
- **Framework**: React + Next.js 14
- **UI**: shadcn/ui + Tailwind CSS
- **State**: Zustand
- **Forms**: React Hook Form + Zod

### DevOps
- **Containers**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (Frontend) + Railway (Backend)
- **Monitoring**: Winston + Postman

## 🔧 MCP Integration

This project is built using MCP (Model Context Protocol) tools for:
- **GitHub**: Repository and code management
- **Supabase**: Database and backend services
- **Postman**: API testing and monitoring
- **Task Master**: Project management and progress tracking

## 📋 Environment Variables

Copy `.env.example` to `.env` and update the following:

```bash
# Required
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
JWT_SECRET=your_jwt_secret

# Optional
REDIS_URL=redis://localhost:6379
POSTMAN_API_KEY=your_postman_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

**Built with MCP automation** 🤖