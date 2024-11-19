-- CreateTable
CREATE TABLE "LuzState" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LuzState_pkey" PRIMARY KEY ("id")
);
