import { defineTool } from "@deepseek-ai/dsh-tools";

const name = "锂元素";
const inject = ["tools"];

async function apply(ctx, _config) {
  ctx.tools.register(defineTool({
    name: "element_info",
    description: "返回元素 Lithium（锂，Li）的原子序数、原子量与类别。",
    parameters: {},
    output: { schema: { type: "object", additionalProperties: false, properties: { output: { type: "json" } } }, render: (_a, v) => [{ type: "text", text: typeof v.output === "string" ? v.output : JSON.stringify(v.output, null, 2) }] },
    execute: async (args) => ((a) => ({ output: { name: "Lithium（锂）", symbol: "Li", atomic_number: 3, atomic_mass: 6.94, category: "碱金属" } }))(args),
  }));
}

export { apply, inject, name };
