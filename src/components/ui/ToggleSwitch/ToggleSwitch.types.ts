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
  on: boolean;
  inactive: boolean;
  onToggle: (newValue: boolean) => void;
}

interface InertSectionProps {
  title: string;
  children: React.ReactNode;
}

interface TogglableSectionProps extends InertSectionProps {
  inactive: boolean;
  on: boolean;
  onToggle: (newValue: boolean) => void;
}

export interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

export type SectionSwitchProps = InertSectionProps | TogglableSectionProps;
