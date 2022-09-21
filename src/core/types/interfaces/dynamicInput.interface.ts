interface SelectOption {
  value: any;
  name: string;
}

export interface DynamicInputInterface {
  tag: "input" | "select" | "textarea";
  label: string;
  description: string;
  selectOptions?: SelectOption[];
  attrs?: Record<string, any>;
  isRequired?: boolean;
}
