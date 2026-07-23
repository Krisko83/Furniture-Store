-- CreateTable
CREATE TABLE "furnitures" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "material" TEXT,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "furnitures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "furnitures" ADD CONSTRAINT "furnitures_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
