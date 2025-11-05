# Dr. Vishwas Sutar - Professional Author Website

A modern, bilingual (English/Marathi) website for Dr. Vishwas Sutar featuring his work as an author, musician, educator, and social worker.

## Features

- 🌐 **Bilingual Support**: Toggle between English and Marathi languages
- 📱 **Responsive Design**: Works seamlessly on all devices
- ⚡ **Fast Performance**: Built with React + Vite with lazy loading
- 🎨 **Modern UI**: Beautiful design using Tailwind CSS
- 📚 **Dynamic Content**: Books page loads from JSON file
- 🎯 **Professional Theme**: Elegant design suitable for an author/academic website

## Pages

1. **Homepage**: Photo, introduction, and quick links
2. **About**: Detailed biography and achievements
3. **Books**: Published books display (loads from `src/data/books.json`)
4. **Samajbhan**: Information about the NGO and social service work

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Adding Books

Edit `src/data/books.json` to add your books. The format is:

```json
[
  {
    "id": 1,
    "title": {
      "marathi": "पुस्तकाचे शीर्षक",
      "english": "Book Title"
    },
    "description": {
      "marathi": "पुस्तकाचे वर्णन",
      "english": "Book description"
    },
    "image": "path/to/image.jpg",
    "year": "2023"
  }
]
```

## Customization

- **Images**: Replace placeholder images with actual photos
- **Content**: Edit `src/data/translations.js` to modify text content
- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update font imports in `index.html`

## Technology Stack

- React 18
- Vite
- React Router
- Tailwind CSS
- Font: Noto Sans Devanagari (for Marathi), Inter (for English)

## License

© 2024 Dr. Vishwas Sutar - All Rights Reserved

