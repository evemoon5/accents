CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  category TEXT,
  photo_key TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
