-- CreateTable
CREATE TABLE "DeviceState" (
    "id" SERIAL NOT NULL,
    "device" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DeviceState_pkey" PRIMARY KEY ("id")
);
