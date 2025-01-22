import { Table } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { index } from "drizzle-orm/mysql-core";

export const urls = pgTable(
  "urls",
  {
    short: varchar(10).primaryKey(),
    origin: varchar(255).notNull(),
  },
  (table) => {
    return {
      originIdx: index("origin_idx").on(table.origin),
    };
  },
);
