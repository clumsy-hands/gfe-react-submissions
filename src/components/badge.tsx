import {
  BadgeColor,
  BadgeSize,
  badgeVariantsA,
  badgeVariantsB,
  badgeVariantsC,
  badgeVariantsD,
  badgeVariantsE,
} from "../data/badge.data";

export interface BadgeProps {
  size?: BadgeSize;
  color?: BadgeColor;
  label?: string;
}

export function Badge({
  size = BadgeSize.Medium,
  color = BadgeColor.Neutral,
  label = "",
}: BadgeProps) {
  return (
    <span
      className={`${getClassNamesByColor(color)} ${getClassNamesBySize(size)}`}
    >
      {label}
    </span>
  );
}

function getClassNamesBySize(size: BadgeSize): string {
  switch (size) {
    case BadgeSize.Small:
      return `py-1 px-2 rounded-4xl text-sm`;
    case BadgeSize.Large:
      return `py-2 px-4 rounded-4xl text-lg`;
    default:
      return `py-2 px-4 rounded-4xl text-md`;
  }
}

function getClassNamesByColor(color: BadgeColor): string {
  switch (color) {
    case BadgeColor.Brand:
      return `bg-indigo-50 border-indigo-200 border-1 text-indigo-600`;
    case BadgeColor.Success:
      return `bg-green-50 border-green-200 border-1 text-green-600`;
    case BadgeColor.Warning:
      return `bg-yellow-50 border-yellow-200 border-1 text-yellow-600`;
    case BadgeColor.Danger:
      return `bg-red-50 border-red-200 border-1 text-red-600`;
    default:
      return `bg-gray-50 border-gray-200 border-1 text-gray-600`;
  }
}

const badgeListClass =
  "flex flex-row items-center justify-center flex-wrap gap-8 my-2";

export default function BadgePlayground() {
  return (
    <div className="gfe-main">
      <div className={badgeListClass}>
        {badgeVariantsA.map((badge, index) => (
          <Badge
            key={index}
            size={badge.size}
            color={badge.color}
            label={badge.label}
          />
        ))}
      </div>
      <div className={badgeListClass}>
        {badgeVariantsB.map((badge, index) => (
          <Badge
            key={index}
            size={badge.size}
            color={badge.color}
            label={badge.label}
          />
        ))}
      </div>
      <div className={badgeListClass}>
        {badgeVariantsC.map((badge, index) => (
          <Badge
            key={index}
            size={badge.size}
            color={badge.color}
            label={badge.label}
          />
        ))}
      </div>
      <div className={badgeListClass}>
        {badgeVariantsD.map((badge, index) => (
          <Badge
            key={index}
            size={badge.size}
            color={badge.color}
            label={badge.label}
          />
        ))}
      </div>
      <div className={badgeListClass}>
        {badgeVariantsE.map((badge, index) => (
          <Badge
            key={index}
            size={badge.size}
            color={badge.color}
            label={badge.label}
          />
        ))}
      </div>
    </div>
  );
}
