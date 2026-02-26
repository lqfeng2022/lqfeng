export interface ExplainItem {
  title: string;
  content: string;
}

export interface PromptExplain {
  id: string;                  // unique identifier
  title: string;               // e.g., "English Teacher Prompt"
  explanation: ExplainItem[];  // structured explanation blocks
}