export interface Prediction {
  label: number;
  class_label: string;
  probability: number;
}

export interface TPredictionResponse {
  time: number;
  ok: boolean;
  status: string;
  prediction?: Prediction;
  error?: string;
  model?: TModel;
}

export type THistory = {
  id: string;
  date: Date;
  prediction: Prediction;
  kidney: string;
  model: TModel;
};
export type TModel = "resnet50" | "densenet201" | "mobilenetv3";
