# Metal Plate Configurator

A modern web application for designing and configuring custom metal plates, built with React, AWS Amplify, Tailwind CSS, and DaisyUI.

## 🎯 Features

- **Custom Dimensions**: Configure length and width in centimeters or millimeters
- **Material Selection**: Choose from 7 different metal finishes and materials
- **Real-time Pricing**: Dynamic price calculation based on dimensions and material
- **3D Preview**: Visual representation of the configured plate
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful interface built with DaisyUI components

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS 4.x with DaisyUI
- **Backend**: AWS Amplify
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- AWS Account (for Amplify deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amplify-vite-react-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 📋 Available Materials

The application includes the following metal plate materials:

1. **Raw Steel** - Natural steel finish, untreated surface
2. **Black** - Black painted finish, corrosion resistant
3. **Galvanized** - Zinc-coated for enhanced corrosion protection
4. **Stainless Steel** - Premium stainless steel, highly corrosion resistant
5. **Aluminum** - Lightweight aluminum, excellent for outdoor use
6. **Copper** - Premium copper finish, distinctive appearance
7. **Brass** - Elegant brass finish, decorative applications

## 💰 Pricing Model

The pricing system calculates costs based on:
- **Base Price**: Area × Base rate per unit (cm² or mm²)
- **Material Cost**: Base price × Material multiplier
- **Total Price**: Base price + Material cost

Each material has a different price multiplier reflecting its cost and properties.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Footer/
│   ├── Header/
│   └── MetalPlateConfigurator/
│       ├── PlatePreview/
│       └── MetalPlateConfigurator.tsx
├── interfaces/
│   └── MetalPlate.ts
├── services/
│   ├── metalPlateData.ts
│   └── pricingService.ts
├── App.tsx
└── main.tsx
```

## 🎨 UI Components

The application uses DaisyUI components for a consistent and modern look:
- Cards for configuration sections
- Stats for displaying metrics
- Badges for material selection
- Buttons for actions
- Input fields for dimensions
- Hero section for welcome message

## 🔧 Configuration

### Dimension Constraints
- Minimum: 1 unit (cm/mm)
- Maximum: 500 units (cm/mm)
- Supports both centimeters and millimeters

### Material Properties
Each material includes:
- Visual color representation
- Description of properties
- Price multiplier for cost calculation

## 🚀 Deployment

### AWS Amplify

1. Connect your repository to AWS Amplify
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy the application

### Environment Variables

No environment variables are required for the basic functionality. AWS Amplify services are configured through the Amplify CLI.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 Code Style

- Use TypeScript for type safety
- Follow React functional component patterns
- Use Tailwind CSS utility classes
- Implement responsive design principles
- Add comments for complex logic

## 📄 License

This project is created for Zuschnittprofi recruitment purposes.

## 👥 Contact

For questions or support, contact: lea@zuschnittprofi.de

---

**Happy Coding! 🎨⚙️** 