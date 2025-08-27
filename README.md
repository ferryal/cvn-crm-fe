# SalesAI CRM

A modern, AI-powered CRM system built with Next.js, featuring intelligent conversations, analytics, and automation workflows. Built with premium design principles and a sophisticated brand identity.

## ✨ Features

### 🚀 **Modern Architecture**

- **Next.js 15.5.2** with App Router
- **TypeScript** for type safety
- **shadcn/ui** components for consistent design
- **Tailwind CSS v4** with custom brand colors
- **Responsive design** for all devices

### 💬 **AI-Powered Conversations**

- **Smart conversation management** with search and filters
- **AI agent integration** with typing indicators
- **Template messages** and smart suggestions
- **Customer profile drawer** with insights
- **Real-time chat interface**

### 📊 **Advanced Analytics**

- **Revenue intelligence dashboard**
- **Interactive line charts** with shadcn/ui
- **Performance metrics** and KPIs
- **Channel performance tracking**
- **AI vs Human performance comparison**

### ⚡ **Automation Workflows**

- **Visual automation builder**
- **Performance tracking** and metrics
- **Quick start templates**
- **Revenue impact analysis**
- **Smart triggers and sequences**

### 🎨 **Premium Design System**

- **Custom brand color palette** (OKLCH)
- **Light/Dark mode support**
- **Collapsible sidebar** with navigation
- **Command palette** (⌘K) for quick access
- **Professional UI components**

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts + shadcn/ui chart wrapper
- **Node.js**: v23.6.1 (via nvm)

## 🚀 Getting Started

### Prerequisites

- Node.js v23.6.1 (recommended)
- nvm (Node Version Manager)

### Installation

1. **Switch to correct Node version:**

   ```bash
   nvm use 23.6.1
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Components

### **Core Pages**

- **`/`** - Conversations dashboard
- **`/analytics`** - Revenue intelligence
- **`/automations`** - Workflow management
- **`/contacts`** - Customer management
- **`/settings`** - System configuration

### **Main Components**

- **`Sidebar`** - Collapsible navigation with account controls
- **`ConversationsList`** - Smart conversation management
- **`ChatArea`** - AI-powered chat interface
- **`CustomerProfile`** - Customer insights drawer
- **`CommandPalette`** - Quick navigation (⌘K)

### **UI Components**

- **shadcn/ui** - Button, Card, Input, Badge, Drawer, etc.
- **Custom charts** - Line charts with shadcn/ui wrapper
- **Responsive layouts** - Mobile-first design approach

## 🎨 Brand Identity

### **Color System**

- **Primary**: Modern purple/blue (`oklch(0.6231 0.188 259.8145)`)
- **Light Mode**: Clean white backgrounds with subtle accents
- **Dark Mode**: Sophisticated dark themes with proper contrast
- **Accessibility**: WCAG compliant color combinations

### **Design Principles**

- **Professional aesthetics** for business applications
- **Consistent spacing** and typography
- **Smooth animations** and transitions
- **Intuitive user experience**

## ⌨️ Keyboard Shortcuts

- **⌘K** (Mac) / **Ctrl+K** (Windows) - Open command palette
- **⌘1-5** - Quick navigation to pages
- **Escape** - Close modals/drawers

## 🔧 Development

### **Project Structure**

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with sidebar
│   ├── page.tsx        # Conversations page
│   ├── analytics/      # Analytics route
│   ├── automations/    # Automations route
│   └── globals.css     # Brand colors & design tokens
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Sidebar.tsx    # Navigation sidebar
│   ├── ChatArea.tsx   # Chat interface
│   └── ...
└── data/              # Mock data and configurations
```

### **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Features in Detail

### **Smart Conversations**

- AI-powered conversation insights
- Template message system
- Customer sentiment analysis
- Quick action suggestions
- Unread message tracking

### **Advanced Analytics**

- Real-time revenue tracking
- Performance breakdowns
- Channel optimization
- Predictive insights
- Export capabilities

### **Automation Engine**

- Visual workflow builder
- Performance metrics
- A/B testing support
- Revenue impact tracking
- Smart trigger system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🚀 Roadmap

- [ ] **Real-time collaboration** features
- [ ] **Advanced AI insights** and predictions
- [ ] **Mobile app** development
- [ ] **API integrations** with popular tools
- [ ] **Multi-language** support
- [ ] **Advanced reporting** and dashboards

---

**Built with ❤️ using Next.js, shadcn/ui, and modern web technologies**
