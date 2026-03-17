export type ResumeState = {
  color: string;
};
/**
 * Represents the possible actions that can be dispatched to the Resume reducer.
 *
 * @remarks
 * This is a discriminated union type, where each action is distinguished by its `type` property.
 * The pipe `|` operator is used to combine multiple types into a union type,
 * meaning that a `ResumeAction` can be **either** one of the listed action objects.
 *
 * @example
 * ```tsx
 * // SET_COLOR action
 * const setColorAction: ResumeAction = { type: "SET_COLOR", payload: "#fff" };
 *
 * // RESET_COLOR action
 * const resetColorAction: ResumeAction = { type: "RESET_COLOR" };
 * ```
 */
export type ResumeAction =
  | { type: "SET_COLOR"; payload: string }
  | { type: "RESET_COLOR" };