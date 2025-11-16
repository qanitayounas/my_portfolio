import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300">
      {skill}
    </Badge>
  );
}
