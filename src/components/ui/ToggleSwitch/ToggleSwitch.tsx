import type {
  SectionSwitchProps,
  SwitchProps,
  TitleSwitchProps,
  ToggleLegendProps,
  ToggleSwitchProps,
} from "./ToggleSwitch.types";

const trackStyle = {
  checked: "bg-emerald-700",
  unchecked: "bg-yellow-900",
};

const thumbStyle = {
  checked: "bg-emerald-300 translate-x-[14px]",
  unchecked: "bg-yellow-600 translate-x-[0px]",
};

const SwitchButton = ({ checked, onChange }: SwitchProps) => {
  const trackStyleClass = `flex w-[34px] h-[14px] rounded-full relative z-20 ${
    checked ? trackStyle.checked : trackStyle.unchecked
  }`;

  const thumbStyleClass = `w-[20px] h-[20px] top-[-2.5px] absolute rounded-full z-30 transition-transform transition-discrete duration-150 ${
    checked ? thumbStyle.checked : thumbStyle.unchecked
  }`;

  return (
    <div className="flex flex-row items-center">
      <button
        className="bg-transparent! border-0 p-0 m-0 cursor-pointer h-[40px] w-[64px] flex items-center justify-center"
        onClick={() => onChange()}
      >
        <input type="checkbox" className="hidden" checked={checked} />
        <span className="h-[36px] w-[44px] z-10 flex items-center justify-end">
          <span className={trackStyleClass}>
            <span className={thumbStyleClass} />
          </span>
        </span>
      </button>
    </div>
  );
};

const ToggleLegend = ({ color, shape }: ToggleLegendProps) => {
  if (shape === "circle") {
    return (
      <div
        className={`w-4 h-4 rounded-full`}
        style={{ backgroundColor: color }}
      />
    );
  }
  if (shape === "square") {
    return <div className={`w-4 h-4`} style={{ backgroundColor: color }} />;
  }
  console.log("Legend provided but shape not supported");
  return null;
};

const ToggleLabel = ({
  title,
  legend,
}: Pick<ToggleSwitchProps, "title" | "legend">) => {
  return (
    <div className="w-full flex items-center justify-start gap-2">
      {legend && <ToggleLegend color={legend.color} shape={legend.shape} />}
      <p>{title}</p>
    </div>
  );
};

const ToggleSwitch = ({
  title,
  on,
  inactive,
  onToggle,
  legend,
}: ToggleSwitchProps) => {
  return (
    <div
      className="flex flex-1 w-[100%] items-center justify-between"
      style={{ opacity: inactive ? 0.6 : 1 }}
    >
      <ToggleLabel title={title} legend={legend} />
      <SwitchButton checked={on} onChange={() => onToggle(on)} />
    </div>
  );
};

const TitleSwitch = ({ title, on, inactive, onToggle }: TitleSwitchProps) => {
  return (
    <div
      className="flex flex-1 w-full items-center justify-between border-b border-b-neutral-600"
      style={{
        opacity: inactive ? "0.6" : "1",
      }}
    >
      <div className="flex items-center gap-1.5">
        <p className="text-xl">{title}</p>
      </div>
      <SwitchButton checked={on} onChange={() => onToggle(on)} />
    </div>
  );
};

const VisualisationSection = ({
  title,
  children,
  ...rest
}: SectionSwitchProps) => {
  const isTogglable = "on" in rest;
  if (isTogglable) {
    const { on, onToggle, inactive } = rest;
    return (
      <section className="flex flex-col w-full justify-start border-b border-b-neutral-700">
        <div
          className="flex items-center justify-between gap-1.5"
          style={{
            opacity: inactive ? "0.6" : "1",
          }}
        >
          <p className="text-xl">{title}</p>
          <SwitchButton checked={on} onChange={() => onToggle(on)} />
        </div>
        {children}
      </section>
    );
  }
  return (
    <section className="flex flex-col w-full justify-start border-b border-b-neutral-700">
      <p className="text-xl w-full text-left pt-2">{title}</p>
      {children}
    </section>
  );
};

export { ToggleSwitch, TitleSwitch, VisualisationSection, SwitchButton };
