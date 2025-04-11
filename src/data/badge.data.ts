import { BadgeProps } from "../components/badge";

export const enum BadgeSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}
export const enum BadgeColor {
  Neutral = "neutral",
  Brand = "brand",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
}

type IBadgeVariants = BadgeProps[];
const badgeLabel = "Label";

const badgeVariantsA: IBadgeVariants = [
  {
    label: badgeLabel,
    size: BadgeSize.Small,
    color: BadgeColor.Neutral,
  },
  {
    label: badgeLabel,
    size: BadgeSize.Medium,
    color: BadgeColor.Neutral,
  },
  {
    label: badgeLabel,
    size: BadgeSize.Large,
    color: BadgeColor.Neutral,
  },
];

const badgeVariantsB: IBadgeVariants = [
  {
    label: badgeLabel,
    size: BadgeSize.Small,
    color: BadgeColor.Danger,
  },
  {
    label: badgeLabel,
    size: BadgeSize.Medium,
    color: BadgeColor.Danger,
  },
  {
    label: badgeLabel,
    size: BadgeSize.Large,
    color: BadgeColor.Danger,
  },
];

const badgeVariantsC: IBadgeVariants = [
  {
    label: badgeLabel,
    size: BadgeSize.Small,
    color: BadgeColor.Warning,
  },
  {
    label: badgeLabel,
    size: BadgeSize.Medium,
    color: BadgeColor.Warning,
  },
  {
    label: badgeLabel,
    size: BadgeSize.Large,
    color: BadgeColor.Warning,
  },
];

const badgeVariantsD: IBadgeVariants = [
  {
    label: badgeLabel,
    size: BadgeSize.Small,
    color: BadgeColor.Success,
  },
  {
    label: badgeLabel,
    size: BadgeSize.Medium,
    color: BadgeColor.Success,
  },
  {
    label: badgeLabel,
    size: BadgeSize.Large,
    color: BadgeColor.Success,
  },
];

const badgeVariantsE: IBadgeVariants = [
  {
    label: badgeLabel,
    size: BadgeSize.Small,
    color: BadgeColor.Brand,
  },
  {
    label: badgeLabel,
    size: BadgeSize.Medium,
    color: BadgeColor.Brand,
  },
  {
    label: badgeLabel,
    size: BadgeSize.Large,
    color: BadgeColor.Brand,
  },
];

export {
  badgeVariantsA,
  badgeVariantsB,
  badgeVariantsC,
  badgeVariantsD,
  badgeVariantsE,
};
