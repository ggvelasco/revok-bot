/*
  Warnings:

  - A unique constraint covering the columns `[channelId]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE ticket_id_seq;
ALTER TABLE "Ticket" ADD COLUMN     "closedAt" TIMESTAMP(3),
ALTER COLUMN "id" SET DEFAULT nextval('ticket_id_seq'),
ALTER COLUMN "openedAt" SET DEFAULT CURRENT_TIMESTAMP;
ALTER SEQUENCE ticket_id_seq OWNED BY "Ticket"."id";

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_channelId_key" ON "Ticket"("channelId");
