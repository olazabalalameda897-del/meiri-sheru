CREATE TABLE `nutrition_entries` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`date` text NOT NULL,
	`meal` text NOT NULL,
	`name` text NOT NULL,
	`grams` real NOT NULL,
	`calories` real NOT NULL,
	`protein` real NOT NULL,
	`carbs` real NOT NULL,
	`fat` real NOT NULL,
	`source` text DEFAULT '' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_entries_user_date` ON `nutrition_entries` (`user_id`,`date`);--> statement-breakpoint
CREATE TABLE `nutrition_goals` (
	`user_id` text NOT NULL,
	`date` text NOT NULL,
	`calories` real NOT NULL,
	`protein` real NOT NULL,
	`carbs` real NOT NULL,
	`fat` real NOT NULL,
	`water` integer NOT NULL,
	`mode` text NOT NULL,
	PRIMARY KEY(`user_id`, `date`)
);
--> statement-breakpoint
CREATE TABLE `water_entries` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`date` text NOT NULL,
	`amount` integer NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_water_user_date` ON `water_entries` (`user_id`,`date`);