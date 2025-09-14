"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const giveEndorsement = async (
  prevState: {
    message: string;
  },
  formData: FormData
) => {
  try {
    if (!prisma) {
      return {
        message: "Database not available. Please set up DATABASE_URL environment variable.",
      };
    }

    const skillId = formData.get("skillId");
    const session = await getServerSession(authOptions);
    if (!session) {
      return {
        message: "Unauthorized",
      };
    }

    await prisma.endorsement.create({
      data: {
        skill_id: Number(skillId),
        userId: session.id as string,
      },
    });

    revalidatePath("/endorsements");

    return {
      message: `You have successfully endorsed the skill with ID: ${skillId}`,
    };
  } catch {
    return {
      message: "Failed to endorse the skill.",
    };
  }
};
