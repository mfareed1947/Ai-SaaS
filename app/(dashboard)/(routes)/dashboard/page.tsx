'use client';
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Image,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

const tool = [
  {
    label: "conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "music Generation",
    icon: Music,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "image Generation",
    icon: Image,
    color: "text-pink-700",
    bg: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "video Generation",
    icon: Video,
    color: "text-orange-700",
    bg: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "code Generation",
    icon: Code,
    color: "text-green-700",
    bg: "bg-green-700/10",
    href: "/code",
  },
];

export default function dashboardPage() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tool.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center justify-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-sm", tool.bg)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-bold">{tool.label}</div>
            </div>
            <div>
              <ArrowRight />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
