import { Schema, model } from "mongoose";

const promptRunSchema = new Schema(
  {
    prompt: {
      type: String,
      required: true,
      trim: true,
    },
    response: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const PromptRunModel = model("prompt_run", promptRunSchema);

export default PromptRunModel;
