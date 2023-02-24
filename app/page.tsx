import { prisma } from "@/prisma/client";

const getPosts = async () => {
  const data = await prisma.user.findMany();

  return data;
};

export default async function Home() {
  const data = await getPosts();
  console.log("data: ", data);
  return (
    <div>
      <h1>home</h1>
    </div>
  );
}
