# 🎙️ Live Audio Transcription Tool

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/yourusername/live-transcription-tool/workflows/CI/badge.svg)](https://github.com/yourusername/live-transcription-tool/actions)

> A modern, real-time speech-to-text transcription tool built with Next.js 15, TypeScript, and the Web Speech API. Features live audio visualization, and seamless copy to clipboard capabilities.

## ✨ Features

### 🎯 Core Functionality
- **Real-time Transcription** - Live speech-to-text using Web Speech API
- **Live-captions Visualization** - Dynamic Live-captions indicators
- **Smart Restart Logic** - Minimizes word loss during recognition restarts
- **Copy to clipboard** - Download transcripts as text files
- **Pause/Resume** - Full control over recording sessions

### 🛠️ Technical Features
- **TypeScript** - Full type safety and excellent DX
- **Responsive Design** - Works on desktop and mobile devices
- **Error Handling** - Graceful degradation and user-friendly messages
<!-- - **Accessibility** - ARIA labels and keyboard navigation support -->
- **Performance Optimized** - Efficient audio processing and rendering

### 🎨 UI/UX
- **Modern Interface** - Clean, intuitive design with Tailwind CSS
- **Dark/Light Mode** - Customizable appearance (coming soon)
- **Settings Panel** - Language selection and customization options
- **Real-time Status** - Visual indicators for recording state
- **Word Count** - Live statistics and metrics

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm
- Modern browser with Web Speech API support

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/live-transcription-tool.git
cd live-transcription-tool

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🎮 Usage

### Basic Usage

1. **Start Recording**: Click the "Start Recording" button
2. **Grant Permissions**: Allow microphone access when prompted
3. **Speak Naturally**: The tool will transcribe your speech in real-time
4. **Copy Transcript**: Copy to clipboard
5. **Clear Chat**: Clear conversation



## 🏗️ Architecture

### Project Structure
```
#### useAudioTranscription Hook
The core hook that manages:
- Speech recognition lifecycle
- Audio level monitoring
- Error handling and recovery
- Transcript state management

```typescript
const {
  isListening,
  transcript,
  startRecording,
  stopRecording,
  // ... other methods
} = useAudioTranscription();
```

#### Smart Restart Logic
Prevents word loss during recognition restarts:
- 100ms delay between restarts
- Duplicate detection and prevention
- Context-aware error recovery
- Confidence-based filtering

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

### Code Quality

This project uses comprehensive tooling for code quality:

- **ESLint** - Code linting with TypeScript rules
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality checks
- **lint-staged** - Run linters on staged files
- **Commitlint** - Conventional commit messages

### Pre-commit Hooks

Every commit automatically runs:
- ESLint fixes
- Prettier formatting
- TypeScript type checking
- Related tests
- Commit message validation

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
```
__tests__/
├── components/
│   ├── LiveTranscriptionTool.test.tsx
│   └── AudioVisualizer.test.tsx
├── hooks/
│   ├── useAudioTranscription.test.ts
│   └── useAudioPermissions.test.ts
└── utils/
    ├── audio.test.ts
    └── export.test.ts
```

## 🔐 Browser Compatibility

### Supported Browsers
- ✅ Chrome 25+
- ✅ Edge 79+
- ✅ Safari 14.1+
- ✅ Firefox (limited support)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Required APIs
- **Web Speech API** - For speech recognition
- **MediaDevices API** - For microphone access
- **Web Audio API** - For audio level monitoring
- **File API** - For transcript exports

## 📱 Mobile Support

The application is fully responsive and works on mobile devices:
- Touch-friendly interface
- Mobile-optimized audio processing
- Responsive design with Tailwind CSS
- Support for mobile browsers

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/live-transcription-tool)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md).

### Development Workflow

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a new branch for your feature
4. **Make** your changes with tests
5. **Run** quality checks: `npm run lint && npm run type-check && npm test`
6. **Commit** using conventional commits
7. **Push** and create a Pull Request

### Commit Convention

```bash
feat: add new transcription feature
fix: resolve audio dropout issue
docs: update API documentation
style: format code with prettier
refactor: improve error handling
test: add unit tests for hooks
chore: update dependencies
```

## 📊 Performance

### Bundle Size
- **Initial JS**: ~150KB gzipped
- **First Load**: ~200KB total
- **Runtime**: Minimal memory footprint
- **Audio Processing**: Optimized with Web Audio API

### Lighthouse Scores
- **Performance**: 100
- **Accessibility**: 93
- **Best Practices**: 100
- **SEO**: 100

## 🔒 Privacy & Security

- **No Server Processing** - All transcription happens locally
- **No Data Storage** - Transcripts remain on your device
- **Secure by Default** - HTTPS required for microphone access
- **Privacy First** - No tracking or analytics

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - Core speech recognition
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [Husky](https://typicode.github.io/husky/) - Git hooks

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/sagarpednekar/live-transcript-app//issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/sagarpednekar/live-transcript-app//discussions)
- 📧 **Email**: sagarvpednekar@gmail.com

## 🗺️ Roadmap

### v2.0.0 (Coming Soon)
- [ ] Cloud speech recognition APIs (Google, AWS, Azure)
- [ ] Real-time collaboration
- [ ] Advanced export formats (PDF, DOCX)
- [ ] Custom vocabulary support
- [ ] Speaker identification
- [ ] Dark mode theme
- [ ]  Custom Language Support
    We are planning to supports multiple languages:
    - English (US/UK)
    - Spanish
    - French
    - German
    - Japanese
    - Chinese (Mandarin)

### v2.1.0
- [ ] WebSocket integration
- [ ] Multi-language detection
- [ ] Transcript search and filtering
- [ ] Integration with popular platforms
- [ ] Mobile app (React Native)

---

<div align="center">

**[⭐ Star this repo](https://github.com/sagarpednekar/live-transcript-app/)** • **[🍴 Fork it](https://github.com/sagarpednekar/live-transcript-app//fork)** • **[📝 Report issues](https://github.com/sagarpednekar/live-transcript-app//issues)**

Made with ❤️ by [Sagar Pednekar](https://github.com/sagarpednekar/live-transcript-app/)

</div>