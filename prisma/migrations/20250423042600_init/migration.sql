-- CreateTable
CREATE TABLE "GuildConfig" (
    "guildId" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "staffRoleId" TEXT,
    "logChannelId" TEXT,
    "language" TEXT NOT NULL,
    "welcomeChannelId" TEXT,
    "welcomeMessage" TEXT,
    "goodbyeChannelId" TEXT,
    "goodbyeMessage" TEXT,
    "autoRoleId" TEXT,
    "disabledCommands" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "GuildConfig_pkey" PRIMARY KEY ("guildId")
);

-- CreateTable
CREATE TABLE "ReactionRole" (
    "id" SERIAL NOT NULL,
    "guildId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "ReactionRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "openedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ReactionRole_guildId_messageId_emoji_key" ON "ReactionRole"("guildId", "messageId", "emoji");
