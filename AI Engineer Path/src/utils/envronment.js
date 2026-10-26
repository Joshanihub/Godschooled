export function checkEnvironment() {
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
        throw new Error("Missing OpenAI API key");
    }
}
