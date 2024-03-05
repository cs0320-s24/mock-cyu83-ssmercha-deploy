/**
 * This is our history interface that is used in REPLHistory.tsx
 */
interface history {
  command: string; // user entered command
  isBrief: boolean; // is the mode brief
  response: string | string[][]; // stores response
}