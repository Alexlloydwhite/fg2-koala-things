DROP TABLE "koala-DB";

CREATE TABLE "koala-DB" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(80) not null,
    "gender" varchar(10) not null,
    "age" integer,
    "ready_to_transer" varchar(3) not null,
    "notes" varchar(80) not null
    );


INSERT INTO "koala-DB" ("id", "name", "gender", "age", "ready_to_transer","notes") VALUES (1, 'Scotty', 'M', 4, 'Y', 'Born in Guatemala' ) RETURNING "id", "name", "gender", "age", "ready_to_transer","notes";
INSERT INTO "koala-DB" ("id", "name", "gender", "age", "ready_to_transer","notes") VALUES (2, 'Jean', 'F', 5, 'Y', 'Allergic to lots of lava' ) RETURNING "id", "name", "gender", "age", "ready_to_transer","notes";
INSERT INTO "koala-DB" ("id", "name", "gender", "age", "ready_to_transer","notes") VALUES (3, 'Ororo', 'F', 7, 'N', 'Loves listening to Paula (Abdul)' ) RETURNING "id", "name", "gender", "age", "ready_to_transer","notes";
INSERT INTO "koala-DB" ("id", "name", "gender", "age", "ready_to_transer","notes") VALUES (4, 'Logan', 'M', 15, 'N', 'Loves the sauna' ) RETURNING "id", "name", "gender", "age", "ready_to_transer","notes";
INSERT INTO "koala-DB" ("id", "name", "gender", "age", "ready_to_transer","notes") VALUES (5, 'Charlie', 'M', 9, 'Y', 'Favorite band is Nirvana' ) RETURNING "id", "name", "gender", "age", "ready_to_transer","notes";
INSERT INTO "koala-DB" ("id", "name", "gender", "age", "ready_to_transer","notes") VALUES (6, 'Betsy', 'F', 4, 'Y', 'Has a pet iguana' ) RETURNING "id", "name", "gender", "age", "ready_to_transer","notes";

SELECT * FROM "koala-DB"; 