# Sales Order & Inventory Management System

A comprehensive web application for managing inventory and sales orders with role-based access control, real-time inventory updates, and comprehensive reporting.

## Features

### Manager Features
- ✅ Add, edit, and delete inventory items
- ✅ Manage stock counts and set minimum thresholds
- ✅ Create and manage multiple price options per item
- ✅ View all orders and inventory balances
- ✅ Mark orders as completed
- ✅ Assign granular permissions to users
- ✅ Export orders and inventory reports to CSV
- ✅ Calendar view for orders (daily/weekly/monthly)
- ✅ Comprehensive audit logging

### Salesperson Features
- ✅ View available inventory and search products
- ✅ Create customer orders with multiple items
- ✅ Select appropriate price options
- ✅ View personal order history
- ✅ Print/download invoices

## Tech Stack

- **Frontend:** Next.js 14 + React 18
- **UI:** Tailwind CSS + shadcn/ui
- **Backend:** Next.js Server Actions & API Routes
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** Clerk
- **Deployment:** Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL
- Git

### Installation

```bash
git clone https://github.com/jusgif/sales-inventory-system.git
cd sales-inventory-system
npm install
```

### Environment Setup

Create a `.env.local` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/sales_inventory
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
```

### Database Setup

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
sales-inventory-system/
├── app/
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── inventory/         # Inventory management
│   ├── orders/            # Order management
│   ├── reports/           # Reporting features
│   ├── users/             # User management
│   └── layout.tsx
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── forms/             # Form components
│   ├── charts/            # Chart components
│   └── common/            # Shared components
├── lib/
│   ├── auth.ts            # Authentication utilities
│   ├── permissions.ts     # Permission helpers
│   ├── db.ts              # Database utilities
│   └── utils.ts           # General utilities
├── prisma/
│   └── schema.prisma      # Database schema
└── public/                # Static assets
```

## Database Schema

Key models:
- **User:** Team members with roles and permissions
- **InventoryItem:** Products with SKU, stock, and pricing
- **PriceOption:** Multiple price levels per item
- **Order:** Customer orders with items and status
- **OrderItem:** Individual line items in orders
- **Permission:** Granular user permissions
- **AuditLog:** Complete action history

## API Endpoints

### Inventory
- `GET /api/inventory` - List all items
- `POST /api/inventory` - Create item
- `PUT /api/inventory/[id]` - Update item
- `DELETE /api/inventory/[id]` - Delete item

### Orders
- `GET /api/orders` - List orders
- `POST /api/orders` - Create order
- `PUT /api/orders/[id]` - Update order
- `PATCH /api/orders/[id]/status` - Update status

### Reports
- `GET /api/reports/summary` - Sales summary
- `GET /api/reports/export` - Export as CSV

## Future Enhancements

- Barcode/QR code scanning
- Mobile PWA
- Offline order capture
- WhatsApp notifications
- PDF invoice generation
- Email notifications
- Customer CRM
- Supplier management
- Multi-location inventory

## License

MIT

## Support

For issues or questions, please create an issue on GitHub.
