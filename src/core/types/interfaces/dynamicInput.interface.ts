interface SelectOption {
  value: unknown;
  name: string;
}

export interface DynamicInputInterface {
  tag: "input" | "select" | "textarea";
  label: string;
  description: string;
  selectOptions?: SelectOption[];
  attrs?: Record<string, unknown>;
  isRequired?: boolean;
}
