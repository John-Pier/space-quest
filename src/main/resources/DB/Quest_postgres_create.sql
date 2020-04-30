CREATE TABLE "users" (
	"uuid" VARCHAR(255) NOT NULL,
	"login" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	"admin" BOOLEAN NOT NULL DEFAULT 'false',
	"country" VARCHAR(255),
	"city" VARCHAR(255),
	"gender" VARCHAR(255),
	"first_name" VARCHAR(255),
	"second_name" VARCHAR(255),
	"age" integer,
	CONSTRAINT "users_pk" PRIMARY KEY ("uuid")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "task" (
	"uuid" VARCHAR(255) NOT NULL,
	"answer" VARCHAR(255) NOT NULL,
	"section_uuid" VARCHAR(255) NOT NULL,
	"url" VARCHAR(255),
	"text" VARCHAR(255),
	"serial_number" serial NOT NULL,
	CONSTRAINT "task_pk" PRIMARY KEY ("uuid")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "task_tooltip" (
	"task_uuid" VARCHAR(255) NOT NULL,
	"tooltip_uuid" VARCHAR(255) NOT NULL,
	CONSTRAINT "task_tooltip_pk" PRIMARY KEY ("task_uuid","tooltip_uuid")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tooltip" (
	"uuid" VARCHAR(255) NOT NULL,
	"level" integer NOT NULL,
	"url" VARCHAR(255),
	"text" VARCHAR(255),
	CONSTRAINT "tooltip_pk" PRIMARY KEY ("uuid")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user_task" (
	"user_uuid" VARCHAR(255) NOT NULL,
	"task_uuid" VARCHAR(255) NOT NULL,
	"counter" integer NOT NULL DEFAULT '0',
	"lock" BOOLEAN NOT NULL DEFAULT 'true',
	"is_passed" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT "user_task_pk" PRIMARY KEY ("user_uuid","task_uuid")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "section" (
	"uuid" VARCHAR(255) NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"url" VARCHAR(255),
	"text" TEXT,
	CONSTRAINT "section_pk" PRIMARY KEY ("uuid")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "task" ADD CONSTRAINT "task_fk0" FOREIGN KEY ("section_uuid") REFERENCES "section"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "task_tooltip" ADD CONSTRAINT "task_tooltip_fk0" FOREIGN KEY ("task_uuid") REFERENCES "task"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "task_tooltip" ADD CONSTRAINT "task_tooltip_fk1" FOREIGN KEY ("tooltip_uuid") REFERENCES "tooltip"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE "user_task" ADD CONSTRAINT "user_task_fk0" FOREIGN KEY ("user_uuid") REFERENCES "users"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_task" ADD CONSTRAINT "user_task_fk1" FOREIGN KEY ("task_uuid") REFERENCES "task"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;


