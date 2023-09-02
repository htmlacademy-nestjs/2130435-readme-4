-- CreateTable
CREATE TABLE "PostVideo" (
    "postId" SERIAL NOT NULL,
    "repost" BOOLEAN NOT NULL DEFAULT false,
    "authorPost" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "link" TEXT NOT NULL DEFAULT '',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "PostVideo_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "PostText" (
    "postId" SERIAL NOT NULL,
    "repost" BOOLEAN NOT NULL DEFAULT false,
    "authorPost" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "announcement" TEXT NOT NULL DEFAULT '',
    "text" TEXT NOT NULL DEFAULT '',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "PostText_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "PostQuote" (
    "postId" SERIAL NOT NULL,
    "repost" BOOLEAN NOT NULL DEFAULT false,
    "authorPost" TEXT NOT NULL,
    "text" TEXT NOT NULL DEFAULT '',
    "author" TEXT NOT NULL DEFAULT '',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "PostQuote_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "PostPhoto" (
    "postId" SERIAL NOT NULL,
    "repost" BOOLEAN NOT NULL DEFAULT false,
    "authorPost" TEXT NOT NULL,
    "photo" TEXT NOT NULL DEFAULT '',
    "size" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "PostPhoto_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "PostLink" (
    "postId" SERIAL NOT NULL,
    "repost" BOOLEAN NOT NULL DEFAULT false,
    "authorPost" TEXT NOT NULL,
    "link" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "PostLink_pkey" PRIMARY KEY ("postId")
);
