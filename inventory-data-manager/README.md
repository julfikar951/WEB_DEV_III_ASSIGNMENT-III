# Inventory Data Manager (REST API)

Node.js + Express + MongoDB (Mongoose) + dotenv.

## Setup
```bash
npm install
cp .env.example .env      # set MONGO_URI / PORT
npm run seed              # optional sample data
npm start                 # or: npm run dev
```

## Endpoints
| Method | URL | Description |
|---|---|---|
| POST | /api/products | Create product |
| GET | /api/products | List (filter, sort, paginate) |
| GET | /api/products/:id | Single product |
| PUT | /api/products/:id | Update details |
| PATCH | /api/products/:id/stock | `{ "change": 10 }` restock, `{ "change": -3 }` sale |
| DELETE | /api/products/:id | Delete |
| GET | /api/products/low-stock | quantity <= reorderLevel (aggregation) |
| GET | /api/products/summary | Category-wise summary (aggregation) |

## Query params for GET /api/products
`category`, `supplier`, `search`, `minPrice`, `maxPrice`, `inStock=true|false`,
`sort=price,-name`, `page=1`, `limit=10`

Example: `/api/products?category=Electronics&minPrice=500&sort=-price&page=1&limit=5`
