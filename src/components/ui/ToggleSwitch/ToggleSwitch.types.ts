import type { TypographyProps } from "@mui/material";

export interface ToggleLegendProps {
  color: string;
  shape: "circle" | "square" | string;
}

export interface ToggleSwitchProps {
  title: string;
  on: boolean;
  inactive: boolean;
  onToggle: (newValue: boolean) => void;
  legend?: ToggleLegendProps;
}

export interface TitleSwitchProps {
  title: string;
  variant?: TypographyProps["variant"];
  on: boolean;
  inactive: boolean;
  onToggle: (newValue: boolean) => void;
}

interface InertSectionProps {
  title: string;
  children: React.ReactNode;
  variant?: TypographyProps["variant"];
}

interface TogglableSectionProps extends InertSectionProps {
  inactive: boolean;
  on: boolean;
  onToggle: (newValue: boolean) => void;
}

export interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export type SectionSwitchProps = InertSectionProps | TogglableSectionProps;
