DROP TABLE "koala-DB";

CREATE TABLE "koala-DB" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(80) not null,
    "gender" varchar(10) not null,
    "age" integer,
    "ready_to_transfer" BOOLEAN,
    "notes" varchar(80) not null
    );


INSERT INTO "koala-DB" ("name", "gender", "age", "ready_to_transfer","notes") VALUES ('Scotty', 'M', 4, 'true', 'Born in Guatemala' ) RETURNING "id", "name", "gender", "age", "ready_to_transfer","notes";
INSERT INTO "koala-DB" ("name", "gender", "age", "ready_to_transfer","notes") VALUES ('Jean', 'F', 5, 'true', 'Allergic to lots of lava' ) RETURNING "id", "name", "gender", "age", "ready_to_transfer","notes";
INSERT INTO "koala-DB" ("name", "gender", "age", "ready_to_transfer","notes") VALUES ('Ororo', 'F', 7, 'false', 'Loves listening to Paula (Abdul)' ) RETURNING "id", "name", "gender", "age", "ready_to_transfer","notes";
INSERT INTO "koala-DB" ("name", "gender", "age", "ready_to_transfer","notes") VALUES ('Logan', 'M', 15, 'false', 'Loves the sauna' ) RETURNING "id", "name", "gender", "age", "ready_to_transfer","notes";
INSERT INTO "koala-DB" ("name", "gender", "age", "ready_to_transfer","notes") VALUES ('Charlie', 'M', 9, 'true', 'Favorite band is Nirvana' ) RETURNING "id", "name", "gender", "age", "ready_to_tranfser","notes";
INSERT INTO "koala-DB" ("name", "gender", "age", "ready_to_transfer","notes") VALUES ('Betsy', 'F', 4, 'true', 'Has a pet iguana' ) RETURNING "id", "name", "gender", "age", "ready_to_transfer","notes";

SELECT * FROM "koala-DB"; 