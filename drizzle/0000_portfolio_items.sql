CREATE TABLE IF NOT EXISTS `portfolio_items` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`title_th` text NOT NULL,
	`category` text NOT NULL,
	`materials` text NOT NULL,
	`description` text NOT NULL,
	`image_url` text NOT NULL,
	`object_key` text,
	`year` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `idx_portfolio_sort_created`
ON `portfolio_items` (`sort_order` DESC, `created_at` DESC);
--> statement-breakpoint
PRAGMA optimize;
