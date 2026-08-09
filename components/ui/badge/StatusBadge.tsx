import style from "./StatusBadge.module.css";
import type { ProjectStatus } from "@/types/Project";
import { Star, Hammer, GraduationCap, type LucideIcon } from "lucide-react";

export const badgeConfig = {
  Featured: {
    color: "#D4A017",
    icon: Star,
  },
  "In Progress": {
    color: "#3B82F6",
    icon: Hammer,
  },
  "University Project": {
    color: "#2D9CDB",
    icon: GraduationCap,
  },
} satisfies Record<ProjectStatus, {
  color: string;
  icon: LucideIcon;
}>;
type BadgeProps = {
  status: ProjectStatus;
};

export default function StatusBadge({ status }: BadgeProps) {
  const { color, icon: Icon } = badgeConfig[status];
  return (
    <div
      className={style.badge}
      style={{ backgroundColor: color }}
    >
      <Icon size={16} />
      {status}
    </div>
  );
}